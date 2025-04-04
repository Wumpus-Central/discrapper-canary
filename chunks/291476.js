n.d(t, {
    FL: () => o,
    XR: () => i,
    tJ: () => s
});
let r = new Map(),
    i = (e) => (t, n, r) => {
        let i = r.subscribe;
        return (
            (r.subscribe = (e, t, n) => {
                let o = e;
                if (t) {
                    let i = (null == n ? void 0 : n.equalityFn) || Object.is,
                        a = e(r.getState());
                    (o = (n) => {
                        let r = e(n);
                        if (!i(a, r)) {
                            let e = a;
                            t((a = r), e);
                        }
                    }),
                        (null == n ? void 0 : n.fireImmediately) && t(a, a);
                }
                return i(o);
            }),
            e(t, n, r)
        );
    };
function o(e, t) {
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
                o = null != (r = n.getItem(e)) ? r : null;
            return o instanceof Promise ? o.then(i) : i(o);
        },
        setItem: (e, r) => n.setItem(e, JSON.stringify(r, null == t ? void 0 : t.replacer)),
        removeItem: (e) => n.removeItem(e)
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
                }
            };
        } catch (e) {
            return {
                then(e) {
                    return this;
                },
                catch: (t) => a(t)(e)
            };
        }
    },
    s = (e, t) => (n, r, i) => {
        let s,
            l = {
                storage: o(() => localStorage),
                partialize: (e) => e,
                version: 0,
                merge: (e, t) => ({
                    ...t,
                    ...e
                }),
                ...t
            },
            c = !1,
            u = new Set(),
            d = new Set(),
            f = l.storage;
        if (!f)
            return e(
                (...e) => {
                    console.warn(`[zustand persist middleware] Unable to update item '${l.name}', the given storage is currently unavailable.`), n(...e);
                },
                r,
                i
            );
        let _ = () => {
                let e = l.partialize({ ...r() });
                return f.setItem(l.name, {
                    state: e,
                    version: l.version
                });
            },
            p = i.setState;
        i.setState = (e, t) => {
            p(e, t), _();
        };
        let h = e(
            (...e) => {
                n(...e), _();
            },
            r,
            i
        );
        i.getInitialState = () => h;
        let m = () => {
            var e, t;
            if (!f) return;
            (c = !1),
                u.forEach((e) => {
                    var t;
                    return e(null != (t = r()) ? t : h);
                });
            let i = (null == (t = l.onRehydrateStorage) ? void 0 : t.call(l, null != (e = r()) ? e : h)) || void 0;
            return a(f.getItem.bind(f))(l.name)
                .then((e) => {
                    if (e)
                        if ('number' != typeof e.version || e.version === l.version) return [!1, e.state];
                        else {
                            if (l.migrate) return [!0, l.migrate(e.state, e.version)];
                            console.error("State loaded from storage couldn't be migrated since no migrate function was provided");
                        }
                    return [!1, void 0];
                })
                .then((e) => {
                    var t;
                    let [i, o] = e;
                    if ((n((s = l.merge(o, null != (t = r()) ? t : h)), !0), i)) return _();
                })
                .then(() => {
                    null == i || i(s, void 0), (s = r()), (c = !0), d.forEach((e) => e(s));
                })
                .catch((e) => {
                    null == i || i(void 0, e);
                });
        };
        return (
            (i.persist = {
                setOptions: (e) => {
                    (l = {
                        ...l,
                        ...e
                    }),
                        e.storage && (f = e.storage);
                },
                clearStorage: () => {
                    null == f || f.removeItem(l.name);
                },
                getOptions: () => l,
                rehydrate: () => m(),
                hasHydrated: () => c,
                onHydrate: (e) => (
                    u.add(e),
                    () => {
                        u.delete(e);
                    }
                ),
                onFinishHydration: (e) => (
                    d.add(e),
                    () => {
                        d.delete(e);
                    }
                )
            }),
            l.skipHydration || m(),
            s || h
        );
    };
