n.d(t, { Z: () => g });
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
    m = n(83208);
let g = (e) => {
    let { className: t, forceWhite: n, giftMessage: r, subscriptionTier: g, ..._ } = e,
        p = (0, o.ZP)(),
        f = (0, s.wj)(p) || n,
        h = f ? l.Ttl.WHITE : l.Ttl.BRAND,
        x = g === d.Si.TIER_0 ? u.intl.string(u.t.rk4Uu7) : u.intl.string(u.t.Ve9Ge3);
    return (0, i.jsx)(c.Z, {
        isGift: !0,
        color: h,
        look: l.iLD.OUTLINED,
        buttonText: x,
        giftMessage: r,
        className: a()(t, m.giftButton, f ? m.buttonWhite : m.buttonBrand),
        subscriptionTier: g,
        ..._
    });
};
