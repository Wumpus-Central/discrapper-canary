"use strict";
n.d(t, { KU: () => i, Zr: () => o, eh: () => r });
let r = (e) => (t, n, r) => {
    let i = r.subscribe;
    return (
        (r.subscribe = (e, t, n) => {
            let a = e;
            if (t) {
                let i = (null == n ? void 0 : n.equalityFn) || Object.is,
                    o = e(r.getState());
                (a = (n) => {
                    let r = e(n);
                    if (!i(o, r)) {
                        let e = o;
                        t((o = r), e);
                    }
                }),
                    (null == n ? void 0 : n.fireImmediately) && t(o, o);
            }
            return i(a);
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
                a = null != (r = n.getItem(e)) ? r : null;
            return a instanceof Promise ? a.then(i) : i(a);
        },
        setItem: (e, r) => n.setItem(e, JSON.stringify(r, null == t ? void 0 : t.replacer)),
        removeItem: (e) => n.removeItem(e),
    };
}
let a = (e) => (t) => {
        try {
            let n = e(t);
            if (n instanceof Promise) return n;
            return {
                then: (e) => a(e)(n),
                catch(e) {
                    return this;
                },
            };
        } catch (e) {
            return {
                then(e) {
                    return this;
                },
                catch: (t) => a(t)(e),
            };
        }
    },
    o = (e, t) => (n, r, o) => {
        let s,
            l = {
                storage: i(() => localStorage),
                partialize: (e) => e,
                version: 0,
                merge: (e, t) => ({ ...t, ...e }),
                ...t,
            },
            u = !1,
            c = new Set(),
            d = new Set(),
            f = l.storage;
        if (!f)
            return e(
                (...e) => {
                    console.warn(
                        `[zustand persist middleware] Unable to update item '${l.name}', the given storage is currently unavailable.`,
                    ),
                        n(...e);
                },
                r,
                o,
            );
        let p = () => {
                let e = l.partialize({ ...r() });
                return f.setItem(l.name, { state: e, version: l.version });
            },
            h = o.setState;
        o.setState = (e, t) => (h(e, t), p());
        let m = e((...e) => (n(...e), p()), r, o);
        o.getInitialState = () => m;
        let g = () => {
            var e, t;
            if (!f) return;
            (u = !1),
                c.forEach((e) => {
                    var t;
                    return e(null != (t = r()) ? t : m);
                });
            let i = (null == (t = l.onRehydrateStorage) ? void 0 : t.call(l, null != (e = r()) ? e : m)) || void 0;
            return a(f.getItem.bind(f))(l.name)
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
                    if ((n((s = l.merge(a, null != (t = r()) ? t : m)), !0), i)) return p();
                })
                .then(() => {
                    null == i || i(s, void 0), (s = r()), (u = !0), d.forEach((e) => e(s));
                })
                .catch((e) => {
                    null == i || i(void 0, e);
                });
        };
        return (
            (o.persist = {
                setOptions: (e) => {
                    (l = { ...l, ...e }), e.storage && (f = e.storage);
                },
                clearStorage: () => {
                    null == f || f.removeItem(l.name);
                },
                getOptions: () => l,
                rehydrate: () => g(),
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
            l.skipHydration || g(),
            s || m
        );
    };
