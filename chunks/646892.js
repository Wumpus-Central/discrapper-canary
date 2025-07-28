n.d(t, { Z: () => u });
var r = n(255367);
n(73800);
var i = n(120356),
    l = n.n(i),
    a = n(442837),
    s = n(481060),
    o = n(607070),
    c = n(307537),
    d = n(984313);
function u(e) {
    let { className: t, shouldShine: n = !0, size: i = 14 } = e,
        u = (0, a.e7)([o.Z], () => o.Z.useReducedMotion);
    return (0, r.jsxs)('div', {
        className: l()([d.guildProductRoleIcon, t]),
        children: [
            (0, r.jsx)(c.Z, {
                height: i,
                width: i
            }),
            (0, r.jsx)(s.ZX5, {
                className: d.shine,
                shinePaused: u || !n,
                shineSize: s.gtL.ShineSizes.SMALL
            })
        ]
    });
}
