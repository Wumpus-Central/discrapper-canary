var n = r(582128),
    u = r(855986),
    l = r(738601);
r.d(
    t,
    {},
    {
        A: function (e, t) {
            let r = (function (e) {
                    let [t, r] = n.useState({ open: e, left: null }),
                        u = t.open !== e ? t.open : t.left;
                    return (
                        t.open !== e && r({ open: e, left: u }),
                        n.useEffect(() => {
                            null != u && r((e) => ({ ...e, left: null }));
                        }, [u]),
                        u
                    );
                })(t),
                s = (function (e, t) {
                    let [r, u] = n.useState(() => new Set(e));
                    if (e.some((e) => !r.has(e)) || (null != t && r.has(t))) {
                        let n = new Set([...r, ...e]);
                        (null != t && n.delete(t), u(n));
                    }
                    let l = n.useRef(new Map());
                    return (
                        n.useEffect(() => {
                            let t = new Set(e);
                            for (let [e, n] of l.current)
                                (t.has(e) || !r.has(e)) && (clearTimeout(n), l.current.delete(e));
                            for (let e of r)
                                t.has(e) ||
                                    l.current.has(e) ||
                                    l.current.set(
                                        e,
                                        setTimeout(() => {
                                            (l.current.delete(e),
                                                u((t) => {
                                                    let r = new Set(t);
                                                    return (r.delete(e), r);
                                                }));
                                        }, 5e3),
                                    );
                        }, [e, r, 5e3]),
                        n.useEffect(() => {
                            let e = l.current;
                            return () => {
                                for (let t of e.values()) clearTimeout(t);
                                e.clear();
                            };
                        }, []),
                        r
                    );
                })(
                    (0, u.yK)(
                        l.Nl,
                        () =>
                            e
                                .filter((e) => {
                                    if (e.id === t) return !1;
                                    let n = (0, l.AK)(e.id);
                                    return "working" === n || ("unread" === n && e.id !== r);
                                })
                                .map((e) => e.id),
                        [e, t, r],
                    ),
                    t,
                );
            return n.useMemo(() => e.filter((e) => s.has(e.id)), [e, s]);
        },
    },
);
