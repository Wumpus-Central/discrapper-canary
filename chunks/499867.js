"use strict";
n.d(t, { KU: () => r, Zr: () => a, eh: () => i });
let i = (e) => (t, n, i) => {
    let r = i.subscribe;
    return (
        (i.subscribe = (e, t, n) => {
            let s = e;
            if (t) {
                let r = (null == n ? void 0 : n.equalityFn) || Object.is,
                    a = e(i.getState());
                (s = (n) => {
                    let i = e(n);
                    if (!r(a, i)) {
                        let e = a;
                        t((a = i), e);
                    }
                }),
                    (null == n ? void 0 : n.fireImmediately) && t(a, a);
            }
            return r(s);
        }),
        e(t, n, i)
    );
};
function r(e, t) {
    let n;
    try {
        n = e();
    } catch (e) {
        return;
    }
    return {
        getItem: (e) => {
            var i;
            let r = (e) => (null === e ? null : JSON.parse(e, null == t ? void 0 : t.reviver)),
                s = null != (i = n.getItem(e)) ? i : null;
            return s instanceof Promise ? s.then(r) : r(s);
        },
        setItem: (e, i) => n.setItem(e, JSON.stringify(i, null == t ? void 0 : t.replacer)),
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
    a = (e, t) => (n, i, a) => {
        let o,
            l = {
                storage: r(() => localStorage),
                partialize: (e) => e,
                version: 0,
                merge: (e, t) => ({ ...t, ...e }),
                ...t,
            },
            u = !1,
            c = new Set(),
            d = new Set(),
            _ = l.storage;
        if (!_)
            return e(
                (...e) => {
                    console.warn(
                        `[zustand persist middleware] Unable to update item '${l.name}', the given storage is currently unavailable.`,
                    ),
                        n(...e);
                },
                i,
                a,
            );
        let h = () => {
                let e = l.partialize({ ...i() });
                return _.setItem(l.name, { state: e, version: l.version });
            },
            f = a.setState;
        a.setState = (e, t) => (f(e, t), h());
        let p = e((...e) => (n(...e), h()), i, a);
        a.getInitialState = () => p;
        let E = () => {
            var e, t;
            if (!_) return;
            (u = !1),
                c.forEach((e) => {
                    var t;
                    return e(null != (t = i()) ? t : p);
                });
            let r = (null == (t = l.onRehydrateStorage) ? void 0 : t.call(l, null != (e = i()) ? e : p)) || void 0;
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
                    let [r, s] = e;
                    if ((n((o = l.merge(s, null != (t = i()) ? t : p)), !0), r)) return h();
                })
                .then(() => {
                    null == r || r(o, void 0), (o = i()), (u = !0), d.forEach((e) => e(o));
                })
                .catch((e) => {
                    null == r || r(void 0, e);
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
                rehydrate: () => E(),
                hasHydrated: () => u,
                onHydrate: (e) => (
                    c.add(e),
                    () => {
                        c.delete(e);
                    }
                ),
                onFinishHydration: (e) => (
                    d.add(e),
                    () => {
                        d.delete(e);
                    }
                ),
            }),
            l.skipHydration || E(),
            o || p
        );
    };
