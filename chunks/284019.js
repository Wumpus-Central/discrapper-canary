n.d(t, { Z: () => c });
var i = n(200651),
    r = n(192379),
    a = n(120356),
    s = n.n(a),
    o = n(481060),
    l = n(603368),
    u = n(987897);
function c(e) {
    let { themeColor: t, color: n, className: a, ...c } = e,
        d = (0, o.dQu)(o.TVs.colors.BG_SURFACE_OVERLAY).hex(),
        f = r.useMemo(() => (0, l.j1)(t, d), [t, d]);
    return (0, i.jsx)(o.zxk, {
        ...c,
        style: f,
        className: s()(a, { [u.customButton]: null != f }),
        color: null != f ? o.zxk.Colors.CUSTOM : n
    });
}
