r.d(n, {
    Z: function () {
        return d;
    }
});
var i = r(200651),
    a = r(192379),
    s = r(120356),
    o = r.n(s),
    l = r(481060),
    u = r(603368),
    c = r(557298);
function d(e) {
    let { themeColor: n, color: r, className: s, ...d } = e,
        f = (0, l.useToken)(l.tokens.colors.BG_SURFACE_OVERLAY).hex(),
        _ = a.useMemo(() => (0, u.j1)(n, f), [n, f]);
    return (0, i.jsx)(l.Button, {
        ...d,
        style: _,
        className: o()(s, { [c.customButton]: null != _ }),
        color: null != _ ? l.Button.Colors.CUSTOM : r
    });
}
