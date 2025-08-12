n.d(t, { Z: () => c }), n(388685);
var r = n(255367),
    i = n(73800),
    o = n(120356),
    a = n.n(o),
    s = n(426595);
let l = 2000;
function c(e) {
    let { children: t, className: n, flashKey: o } = e,
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
            [o],
        ),
        (0, r.jsx)("div", {
            "data-flash": c,
            className: a()(s.flash, n),
            children: t,
        })
    );
}
