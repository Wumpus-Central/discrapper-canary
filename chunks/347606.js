t.d(n, { A: () => d });
var l = t(627968),
    r = t(64700),
    i = t(503698),
    s = t.n(i),
    a = t(942381),
    o = t(894858),
    c = t(396535);
function d(e) {
    let { node: n, children: t } = e,
        [i, d] = r.useState(!1),
        u = r.useRef(null);
    return (
        r.useEffect(() => {
            let e = o.A.subscribe(
                (e) => e.requestFlashKey,
                (e) => {
                    e === n.key &&
                        (clearTimeout(u.current),
                        d(!0),
                        (u.current = setTimeout(() => {
                            d(!1), o.A.setState({ requestFlashKey: void 0 });
                        }, 100)));
                },
                { equalityFn: a.x, fireImmediately: !0 },
            );
            return () => {
                clearTimeout(u.current), e();
            };
        }, [n.key, n.type]),
        (0, l.jsx)("div", { "data-nav-anchor-key": n.key, className: s()(c.k, i && c.j), children: t })
    );
}
