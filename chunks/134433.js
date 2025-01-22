r.d(n, {
    Z: function () {
        return h;
    }
});
var i = r(47120);
var a = r(200651);
r(192379);
var o = r(120356),
    s = r.n(o),
    l = r(866442),
    u = r(442837),
    c = r(692547),
    d = r(481060),
    f = r(607070),
    p = r(932504);
function h(e) {
    let n,
        { color: r, size: i, forcedIconColor: o, className: h, iconClassName: _ } = e,
        [m, g] = (0, u.Wu)([f.Z], () => [f.Z.desaturateUserColors, f.Z.saturation]),
        E = (0, d.useToken)(c.Z.unsafe_rawColors.PRIMARY_300).hex(),
        v = (0, l._i)(null != r ? r : E),
        y = (0, l.ho)(v, !1, m ? g : null);
    n = null != o ? o : 0.3 > (0, l.Bd)(v) ? c.Z.unsafe_rawColors.PRIMARY_630.css : c.Z.unsafe_rawColors.WHITE_500.css;
    let b = i / 8;
    return (0, a.jsx)('div', {
        style: {
            background: y,
            width: i,
            height: i,
            borderRadius: i,
            lineHeight: ''.concat(i, 'px')
        },
        className: h,
        children: (0, a.jsx)(d.LinkIcon, {
            size: 'custom',
            color: n,
            className: s()(p.linkIcon, _),
            width: i - 2 * b,
            height: i - 2 * b,
            style: { margin: b }
        })
    });
}
