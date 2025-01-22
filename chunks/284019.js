r.d(n, {
    Z: function () {
        return d;
    }
});
var i = r(200651),
    a = r(192379),
    o = r(120356),
    s = r.n(o),
    l = r(481060),
    u = r(603368),
    c = r(557298);
function d(e) {
    let { themeColor: n, color: r, className: o, ...d } = e,
        f = (0, l.useToken)(l.tokens.colors.BG_SURFACE_OVERLAY).hex(),
        p = a.useMemo(() => (0, u.j1)(n, f), [n, f]);
    return (0, i.jsx)(l.Button, {
        ...d,
        style: p,
        className: s()(o, { [c.customButton]: null != p }),
        color: null != p ? l.Button.Colors.CUSTOM : r
    });
}
