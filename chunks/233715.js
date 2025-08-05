(n.d(t, { Z: () => c }), n(388685));
var r = n(255367),
    i = n(73800),
    a = n(120356),
    o = n.n(a),
    s = n(352172);
let l = 2000;
function c(e) {
    let { children: t, className: n, flashKey: a } = e,
        [c, u] = i.useState(!1),
        d = i.useRef(null);
    return (
        i.useEffect(
            () => (
                u(!0),
                (d.current = window.setTimeout(() => {
                    u(!1);
                }, l)),
                () => {
                    null != d.current && clearTimeout(d.current);
                }
            ),
            [a]
        ),
        (0, r.jsx)('div', {
            'data-flash': c,
            className: o()(s.flash, n),
            children: t
        })
    );
}
