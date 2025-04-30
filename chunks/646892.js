n.d(t, { Z: () => d });
var r = n(200651);
n(192379);
var i = n(120356),
    l = n.n(i),
    s = n(442837),
    a = n(481060),
    o = n(607070),
    c = n(307537),
    u = n(984313);
function d(e) {
    let { className: t, shouldShine: n = !0, size: i = 14 } = e,
        d = (0, s.e7)([o.Z], () => o.Z.useReducedMotion);
    return (0, r.jsxs)('div', {
        className: l()([u.guildProductRoleIcon, t]),
        children: [
            (0, r.jsx)(c.Z, {
                height: i,
                width: i
            }),
            (0, r.jsx)(a.ZX5, {
                className: u.shine,
                shinePaused: d || !n,
                shineSize: a.gtL.ShineSizes.SMALL
            })
        ]
    });
}
