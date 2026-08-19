"use strict";
r.d(t, { KU: () => o, Zr: () => a, eh: () => n });
let n = (e) => (t, r, n) => {
    let o = n.subscribe;
    return (
        (n.subscribe = (e, t, r) => {
            let i = e;
            if (t) {
                let o = (null == r ? void 0 : r.equalityFn) || Object.is,
                    a = e(n.getState());
                (i = (r) => {
                    let n = e(r);
                    if (!o(a, n)) {
                        let e = a;
                        t((a = n), e);
                    }
                }),
                    (null == r ? void 0 : r.fireImmediately) && t(a, a);
            }
            return o(i);
        }),
        e(t, r, n)
    );
};
function o(e, t) {
    let r;
    try {
        r = e();
    } catch (e) {
        return;
    }
    return {
        getItem: (e) => {
            var n;
            let o = (e) => (null === e ? null : JSON.parse(e, null == t ? void 0 : t.reviver)),
                i = null != (n = r.getItem(e)) ? n : null;
            return i instanceof Promise ? i.then(o) : o(i);
        },
        setItem: (e, n) => r.setItem(e, JSON.stringify(n, null == t ? void 0 : t.replacer)),
        removeItem: (e) => r.removeItem(e),
    };
}
let i = (e) => (t) => {
        try {
            let r = e(t);
            if (r instanceof Promise) return r;
            return {
                then: (e) => i(e)(r),
                catch(e) {
                    return this;
                },
            };
        } catch (e) {
            return {
                then(e) {
                    return this;
                },
                catch: (t) => i(t)(e),
            };
        }
    },
    a = (e, t) => (r, n, a) => {
        let s,
            l = {
                storage: o(() => localStorage),
                partialize: (e) => e,
                version: 0,
                merge: (e, t) => ({ ...t, ...e }),
                ...t,
            },
            u = !1,
            c = new Set(),
            f = new Set(),
            p = l.storage;
        if (!p)
            return e(
                (...e) => {
                    console.warn(
                        `[zustand persist middleware] Unable to update item '${l.name}', the given storage is currently unavailable.`,
                    ),
                        r(...e);
                },
                n,
                a,
            );
        let d = () => {
                let e = l.partialize({ ...n() });
                return p.setItem(l.name, { state: e, version: l.version });
            },
            h = a.setState;
        a.setState = (e, t) => (h(e, t), d());
        let m = e((...e) => (r(...e), d()), n, a);
        a.getInitialState = () => m;
        let v = () => {
            var e, t;
            if (!p) return;
            (u = !1),
                c.forEach((e) => {
                    var t;
                    return e(null != (t = n()) ? t : m);
                });
            let o = (null == (t = l.onRehydrateStorage) ? void 0 : t.call(l, null != (e = n()) ? e : m)) || void 0;
            return i(p.getItem.bind(p))(l.name)
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
                    let [o, i] = e;
                    if ((r((s = l.merge(i, null != (t = n()) ? t : m)), !0), o)) return d();
                })
                .then(() => {
                    null == o || o(s, void 0), (s = n()), (u = !0), f.forEach((e) => e(s));
                })
                .catch((e) => {
                    null == o || o(void 0, e);
                });
        };
        return (
            (a.persist = {
                setOptions: (e) => {
                    (l = { ...l, ...e }), e.storage && (p = e.storage);
                },
                clearStorage: () => {
                    null == p || p.removeItem(l.name);
                },
                getOptions: () => l,
                rehydrate: () => v(),
                hasHydrated: () => u,
                onHydrate: (e) => (
                    c.add(e),
                    () => {
                        c.delete(e);
                    }
                ),
                onFinishHydration: (e) => (
                    f.add(e),
                    () => {
                        f.delete(e);
                    }
                ),
            }),
            l.skipHydration || v(),
            s || m
        );
    };
