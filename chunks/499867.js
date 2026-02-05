"use strict";
n.d(t, { KU: () => a, Zr: () => o, eh: () => i });
let r = new Map(),
    i = (e) => (t, n, r) => {
        let i = r.subscribe;
        return (
            (r.subscribe = (e, t, n) => {
                let a = e;
                if (t) {
                    let i = (null == n ? void 0 : n.equalityFn) || Object.is,
                        s = e(r.getState());
                    (a = (n) => {
                        let r = e(n);
                        if (!i(s, r)) {
                            let e = s;
                            t((s = r), e);
                        }
                    }),
                        (null == n ? void 0 : n.fireImmediately) && t(s, s);
                }
                return i(a);
            }),
            e(t, n, r)
        );
    };
function a(e, t) {
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
                a = null != (r = n.getItem(e)) ? r : null;
            return a instanceof Promise ? a.then(i) : i(a);
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
    o = (e, t) => (n, r, i) => {
        let o,
            l = {
                storage: a(() => localStorage),
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
                r,
                i,
            );
        let f = () => {
                let e = l.partialize({ ...r() });
                return _.setItem(l.name, { state: e, version: l.version });
            },
            p = i.setState;
        i.setState = (e, t) => (p(e, t), f());
        let h = e((...e) => (n(...e), f()), r, i);
        i.getInitialState = () => h;
        let m = () => {
            var e, t;
            if (!_) return;
            (u = !1),
                c.forEach((e) => {
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
                    let [i, a] = e;
                    if ((n((o = l.merge(a, null != (t = r()) ? t : h)), !0), i)) return f();
                })
                .then(() => {
                    null == i || i(o, void 0), (o = r()), (u = !0), d.forEach((e) => e(o));
                })
                .catch((e) => {
                    null == i || i(void 0, e);
                });
        };
        return (
            (i.persist = {
                setOptions: (e) => {
                    (l = { ...l, ...e }), e.storage && (_ = e.storage);
                },
                clearStorage: () => {
                    null == _ || _.removeItem(l.name);
                },
                getOptions: () => l,
                rehydrate: () => m(),
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
            l.skipHydration || m(),
            o || h
        );
    };
