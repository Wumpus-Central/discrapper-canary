n.d(t, { Z: () => u });
var r = n(200651);
n(192379);
var i = n(120356),
    l = n.n(i),
    s = n(442837),
    a = n(481060),
    o = n(607070),
    c = n(307537),
    d = n(984313);
function u(e) {
    let { className: t, shouldShine: n = !0, size: i = 14 } = e,
        u = (0, s.e7)([o.Z], () => o.Z.useReducedMotion);
    return (0, r.jsxs)('div', {
        className: l()([d.guildProductRoleIcon, t]),
        children: [
            (0, r.jsx)(c.Z, {
                height: i,
                width: i
            }),
            (0, r.jsx)(a.ZX5, {
                className: d.shine,
                shinePaused: u || !n,
                shineSize: a.gtL.ShineSizes.SMALL
            })
        ]
    });
}
