n.d(t, { Z: () => h });
var i = n(200651);
n(192379);
var s = n(120356),
    r = n.n(s),
    l = n(780384),
    a = n(481060),
    o = n(410030),
    c = n(197115),
    d = n(474936),
    u = n(388032),
    m = n(83208);
let h = (e) => {
    let { className: t, forceWhite: n, giftMessage: s, subscriptionTier: h, ...g } = e,
        x = (0, o.ZP)(),
        _ = (0, l.wj)(x) || n,
        p = _ ? a.Ttl.WHITE : a.Ttl.BRAND,
        E = h === d.Si.TIER_0 ? u.intl.string(u.t.rk4Uu7) : u.intl.string(u.t.Ve9Ge3);
    return (0, i.jsx)(c.Z, {
        isGift: !0,
        color: p,
        look: a.iLD.OUTLINED,
        buttonText: E,
        giftMessage: s,
        className: r()(t, m.giftButton, _ ? m.buttonWhite : m.buttonBrand),
        subscriptionTier: h,
        ...g
    });
};
