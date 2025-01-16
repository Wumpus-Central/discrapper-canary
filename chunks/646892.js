n.d(t, {
    Z: function () {
        return u;
    }
});
var i = n(200651);
n(192379);
var r = n(120356),
    l = n.n(r),
    s = n(442837),
    a = n(481060),
    o = n(607070),
    c = n(307537),
    d = n(968580);
function u(e) {
    let { className: t, shouldShine: n = !0, size: r = 14 } = e,
        u = (0, s.e7)([o.Z], () => o.Z.useReducedMotion);
    return (0, i.jsxs)('div', {
        className: l()([d.guildProductRoleIcon, t]),
        children: [
            (0, i.jsx)(c.Z, {
                height: r,
                width: r
            }),
            (0, i.jsx)(a.Shine, {
                className: d.shine,
                shinePaused: u || !n,
                shineSize: a.ShinyButton.ShineSizes.SMALL
            })
        ]
    });
}
