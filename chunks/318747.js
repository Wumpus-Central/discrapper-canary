var i = n(200651);
n(192379);
var r = n(120356),
    s = n.n(r),
    a = n(780384),
    l = n(481060),
    o = n(410030),
    c = n(197115),
    d = n(474936),
    u = n(388032),
    m = n(923201);
t.Z = (e) => {
    let { className: t, forceWhite: n, giftMessage: r, subscriptionTier: g, ...h } = e,
        p = (0, o.ZP)(),
        x = (0, a.wj)(p) || n,
        f = x ? l.ButtonColors.WHITE : l.ButtonColors.BRAND,
        _ = g === d.Si.TIER_0 ? u.intl.string(u.t.rk4Uu7) : u.intl.string(u.t.Ve9Ge3);
    return (0, i.jsx)(c.Z, {
        isGift: !0,
        color: f,
        look: l.ButtonLooks.OUTLINED,
        buttonText: _,
        giftMessage: r,
        className: s()(t, m.giftButton, x ? m.buttonWhite : m.buttonBrand),
        subscriptionTier: g,
        ...h
    });
};
