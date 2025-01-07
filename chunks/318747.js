var i = n(200651);
n(192379);
var r = n(120356),
    a = n.n(r),
    s = n(780384),
    l = n(481060),
    o = n(410030),
    c = n(197115),
    d = n(474936),
    u = n(388032),
    g = n(923201);
t.Z = (e) => {
    let { className: t, forceWhite: n, giftMessage: r, subscriptionTier: m, ...f } = e,
        p = (0, o.ZP)(),
        _ = (0, s.wj)(p) || n,
        h = _ ? l.ButtonColors.WHITE : l.ButtonColors.BRAND,
        x = m === d.Si.TIER_0 ? u.intl.string(u.t.rk4Uu7) : u.intl.string(u.t.Ve9Ge3);
    return (0, i.jsx)(c.Z, {
        isGift: !0,
        color: h,
        look: l.ButtonLooks.OUTLINED,
        buttonText: x,
        giftMessage: r,
        className: a()(t, g.giftButton, _ ? g.buttonWhite : g.buttonBrand),
        subscriptionTier: m,
        ...f
    });
};
