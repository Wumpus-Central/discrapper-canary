n.d(t, { A: () => c });
var i = n(627968),
    s = n(64700),
    l = n(503698),
    a = n.n(l),
    r = n(942381),
    o = n(894858),
    d = n(607590);
function c(e) {
    let { node: t, children: n } = e,
        [l, c] = s.useState(!1),
        u = s.useRef(null);
    return (
        s.useEffect(() => {
            let e = o.A.subscribe(
                (e) => e.requestFlashKey,
                (e) => {
                    e === t.key &&
                        (clearTimeout(u.current),
                        c(!0),
                        (u.current = setTimeout(() => {
                            c(!1), o.A.setState({ requestFlashKey: void 0 });
                        }, 100)));
                },
                { equalityFn: r.x, fireImmediately: !0 },
            );
            return () => {
                clearTimeout(u.current), e();
            };
        }, [t.key, t.type]),
        (0, i.jsx)("div", { "data-nav-anchor-key": t.key, className: a()(d.k, l && d.j), children: n })
    );
}
