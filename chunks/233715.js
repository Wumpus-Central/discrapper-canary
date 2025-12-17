n.d(t, { Z: () => s }), n(388685);
var i = n(54381),
    r = n(473749),
    l = n(120356),
    a = n.n(l),
    o = n(675880);
function s(e) {
    let { children: t, className: n, flashKey: l } = e,
        [s, c] = r.useState(!1),
        u = r.useRef(null);
    return (
        r.useEffect(
            () => (
                c(!0),
                (u.current = window.setTimeout(() => {
                    c(!1);
                }, 2000)),
                () => {
                    null != u.current && clearTimeout(u.current);
                }
            ),
            [l],
        ),
        (0, i.jsx)("div", {
            "data-flash": s,
            className: a()(o.flash, n),
            children: t,
        })
    );
}
