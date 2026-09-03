r.d(t, { KU: () => i, Zr: () => a, eh: () => n });
let n = (e) => (t, r, n) => {
    let i = n.subscribe;
    return (
        (n.subscribe = (e, t, r) => {
            let o = e;
            if (t) {
                let i = (null == r ? void 0 : r.equalityFn) || Object.is,
                    a = e(n.getState());
                (o = (r) => {
                    let n = e(r);
                    if (!i(a, n)) {
                        let e = a;
                        t((a = n), e);
                    }
                }),
                    (null == r ? void 0 : r.fireImmediately) && t(a, a);
            }
            return i(o);
        }),
        e(t, r, n)
    );
};
function i(e, t) {
    let r;
    try {
        r = e();
    } catch (e) {
        return;
    }
    return {
        getItem: (e) => {
            var n;
            let i = (e) => (null === e ? null : JSON.parse(e, null == t ? void 0 : t.reviver)),
                o = null != (n = r.getItem(e)) ? n : null;
            return o instanceof Promise ? o.then(i) : i(o);
        },
        setItem: (e, n) => r.setItem(e, JSON.stringify(n, null == t ? void 0 : t.replacer)),
        removeItem: (e) => r.removeItem(e),
    };
}
let o = (e) => (t) => {
        try {
            let r = e(t);
            if (r instanceof Promise) return r;
            return {
                then: (e) => o(e)(r),
                catch(e) {
                    return this;
                },
            };
        } catch (e) {
            return {
                then(e) {
                    return this;
                },
                catch: (t) => o(t)(e),
            };
        }
    },
    a = (e, t) => (r, n, a) => {
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
            f = new Set(),
            d = l.storage;
        if (!d)
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
        let p = () => {
                let e = l.partialize({ ...n() });
                return d.setItem(l.name, { state: e, version: l.version });
            },
            h = a.setState;
        a.setState = (e, t) => (h(e, t), p());
        let m = e((...e) => (r(...e), p()), n, a);
        a.getInitialState = () => m;
        let v = () => {
            var e, t;
            if (!d) return;
            (u = !1),
                c.forEach((e) => {
                    var t;
                    return e(null != (t = n()) ? t : m);
                });
            let i = (null == (t = l.onRehydrateStorage) ? void 0 : t.call(l, null != (e = n()) ? e : m)) || void 0;
            return o(d.getItem.bind(d))(l.name)
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
                    let [i, o] = e;
                    if ((r((s = l.merge(o, null != (t = n()) ? t : m)), !0), i)) return p();
                })
                .then(() => {
                    null == i || i(s, void 0), (s = n()), (u = !0), f.forEach((e) => e(s));
                })
                .catch((e) => {
                    null == i || i(void 0, e);
                });
        };
        return (
            (a.persist = {
                setOptions: (e) => {
                    (l = { ...l, ...e }), e.storage && (d = e.storage);
                },
                clearStorage: () => {
                    null == d || d.removeItem(l.name);
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
