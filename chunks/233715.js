n.d(t, {
    Z: function () {
        return o;
    }
}),
    n(47120);
var i = n(200651),
    l = n(192379),
    r = n(120356),
    a = n.n(r),
    s = n(329683);
function o(e) {
    let { children: t, className: n, flashKey: r } = e,
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
            [r]
        ),
        (0, i.jsx)('div', {
            'data-flash': o,
            className: a()(s.flash, n),
            children: t
        })
    );
}
