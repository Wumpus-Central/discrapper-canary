n.d(t, { Z: () => o }), n(47120);
var i = n(200651),
    l = n(192379),
    a = n(120356),
    r = n.n(a),
    s = n(927316);
function o(e) {
    let { children: t, className: n, flashKey: a } = e,
        [o, c] = l.useState(!1),
        d = l.useRef(null);
    return (
        l.useEffect(
            () => (
                c(!0),
                (d.current = window.setTimeout(() => {
                    c(!1);
                }, 2000)),
                () => {
                    null != d.current && clearTimeout(d.current);
                }
            ),
            [a]
        ),
        (0, i.jsx)('div', {
            'data-flash': o,
            className: r()(s.flash, n),
            children: t
        })
    );
}
