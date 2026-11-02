n.d(t, { A: () => s });
var i = n(582128),
    r = n(17928),
    a = n(738601);
function s(e, t) {
    let n = (function (e) {
            let [t, n] = i.useState({ open: e, left: null }),
                r = t.open !== e ? t.open : t.left;
            return (
                t.open !== e && n({ open: e, left: r }),
                i.useEffect(() => {
                    null != r && n((e) => ({ ...e, left: null }));
                }, [r]),
                r
            );
        })(t),
        s = (function (e, t) {
            let [n, r] = i.useState(() => new Set(e));
            if (e.some((e) => !n.has(e)) || (null != t && n.has(t))) {
                let i = new Set([...n, ...e]);
                (null != t && i.delete(t), r(i));
            }
            let a = i.useRef(new Map());
            return (
                i.useEffect(() => {
                    let t = new Set(e);
                    for (let [e, i] of a.current) (t.has(e) || !n.has(e)) && (clearTimeout(i), a.current.delete(e));
                    for (let e of n)
                        t.has(e) ||
                            a.current.has(e) ||
                            a.current.set(
                                e,
                                setTimeout(() => {
                                    (a.current.delete(e),
                                        r((t) => {
                                            let n = new Set(t);
                                            return (n.delete(e), n);
                                        }));
                                }, 5e3),
                            );
                }, [e, n, 5e3]),
                i.useEffect(() => {
                    let e = a.current;
                    return () => {
                        for (let t of e.values()) clearTimeout(t);
                        e.clear();
                    };
                }, []),
                n
            );
        })(
            (0, r.yK)(
                a.Nl,
                () =>
                    e
                        .filter((e) => {
                            if (e.id === t) return !1;
                            let i = (0, a.AK)(e.id);
                            return "working" === i || ("unread" === i && e.id !== n);
                        })
                        .map((e) => e.id),
                [e, t, n],
            ),
            t,
        );
    return i.useMemo(() => e.filter((e) => s.has(e.id)), [e, s]);
}
