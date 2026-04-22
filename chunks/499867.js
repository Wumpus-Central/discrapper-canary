"use strict";
n.d(t, { KU: () => i, Zr: () => a, eh: () => r });
let r = (e) => (t, n, r) => {
    let i = r.subscribe;
    return (
        (r.subscribe = (e, t, n) => {
            let s = e;
            if (t) {
                let i = (null == n ? void 0 : n.equalityFn) || Object.is,
                    a = e(r.getState());
                (s = (n) => {
                    let r = e(n);
                    if (!i(a, r)) {
                        let e = a;
                        t((a = r), e);
                    }
                }),
                    (null == n ? void 0 : n.fireImmediately) && t(a, a);
            }
            return i(s);
        }),
        e(t, n, r)
    );
};
function i(e, t) {
    let n;
    try {
        n = e();
    } catch (e) {
        return;
    }
    return {
        getItem: (e) => {
            var r;
            let i = (e) => (null === e ? null : JSON.parse(e, null == t ? void 0 : t.reviver)),
                s = null != (r = n.getItem(e)) ? r : null;
            return s instanceof Promise ? s.then(i) : i(s);
        },
        setItem: (e, r) => n.setItem(e, JSON.stringify(r, null == t ? void 0 : t.replacer)),
        removeItem: (e) => n.removeItem(e),
    };
}
let s = (e) => (t) => {
        try {
            let n = e(t);
            if (n instanceof Promise) return n;
            return {
                then: (e) => s(e)(n),
                catch(e) {
                    return this;
                },
            };
        } catch (e) {
            return {
                then(e) {
                    return this;
                },
                catch: (t) => s(t)(e),
            };
        }
    },
    a = (e, t) => (n, r, a) => {
        let o,
            l = {
                storage: i(() => localStorage),
                partialize: (e) => e,
                version: 0,
                merge: (e, t) => ({ ...t, ...e }),
                ...t,
            },
            u = !1,
            d = new Set(),
            c = new Set(),
            _ = l.storage;
        if (!_)
            return e(
                (...e) => {
                    console.warn(
                        `[zustand persist middleware] Unable to update item '${l.name}', the given storage is currently unavailable.`,
                    ),
                        n(...e);
                },
                r,
                a,
            );
        let f = () => {
                let e = l.partialize({ ...r() });
                return _.setItem(l.name, { state: e, version: l.version });
            },
            E = a.setState;
        a.setState = (e, t) => (E(e, t), f());
        let h = e((...e) => (n(...e), f()), r, a);
        a.getInitialState = () => h;
        let p = () => {
            var e, t;
            if (!_) return;
            (u = !1),
                d.forEach((e) => {
                    var t;
                    return e(null != (t = r()) ? t : h);
                });
            let i = (null == (t = l.onRehydrateStorage) ? void 0 : t.call(l, null != (e = r()) ? e : h)) || void 0;
            return s(_.getItem.bind(_))(l.name)
                .then((e) => {
                    if (e)
                        if ("number" != typeof e.version || e.version === l.version) return [!1, e.state];
                        else {
                            if (l.migrate) {
                                let t = l.migrate(e.state, e.version);
                                return t instanceof Promise ? t.then((e) => [!0, e]) : [!0, t];
                            }
                            console.error(
                                "State loaded from storage couldn't be migrated since no migrate function was provided",
                            );
                        }
                    return [!1, void 0];
                })
                .then((e) => {
                    var t;
                    let [i, s] = e;
                    if ((n((o = l.merge(s, null != (t = r()) ? t : h)), !0), i)) return f();
                })
                .then(() => {
                    null == i || i(o, void 0), (o = r()), (u = !0), c.forEach((e) => e(o));
                })
                .catch((e) => {
                    null == i || i(void 0, e);
                });
        };
        return (
            (a.persist = {
                setOptions: (e) => {
                    (l = { ...l, ...e }), e.storage && (_ = e.storage);
                },
                clearStorage: () => {
                    null == _ || _.removeItem(l.name);
                },
                getOptions: () => l,
                rehydrate: () => p(),
                hasHydrated: () => u,
                onHydrate: (e) => (
                    d.add(e),
                    () => {
                        d.delete(e);
                    }
                ),
                onFinishHydration: (e) => (
                    c.add(e),
                    () => {
                        c.delete(e);
                    }
                ),
            }),
            l.skipHydration || p(),
            o || h
        );
    };
