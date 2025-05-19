n.d(t, { Z: () => s }), n(388685);
var r = n(255367),
    i = n(73800),
    l = n(120356),
    a = n.n(l),
    o = n(702894);
function s(e) {
    let { children: t, className: n, flashKey: l } = e,
        [s, c] = i.useState(!1),
        u = i.useRef(null);
    return (
        i.useEffect(
            () => (
                c(!0),
                (u.current = window.setTimeout(() => {
                    c(!1);
                }, 2000)),
                () => {
                    null != u.current && clearTimeout(u.current);
                }
            ),
            [l]
        ),
        (0, r.jsx)('div', {
            'data-flash': s,
            className: a()(o.flash, n),
            children: t
        })
    );
}
