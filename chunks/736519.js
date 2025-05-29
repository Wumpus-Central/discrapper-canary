n.d(t, { Z: () => g });
var i = n(255367);
n(73800);
var r = n(120356),
    s = n.n(r),
    l = n(780384),
    a = n(481060),
    o = n(410030),
    c = n(648613),
    d = n(474936),
    u = n(388032),
    m = n(638068);
let g = (e) => {
    let { className: t, textOptions: n, color: r, hideIcon: g, forceWhite: p, subscriptionTier: h, premiumModalAnalyticsLocation: f, giftMessage: b, onClick: _ } = e,
        x = (0, o.ZP)(),
        E = (0, l.wj)(x) || p,
        C = h === d.Si.TIER_0 ? u.intl.string(u.t.rk4Uu7) : u.intl.string(u.t.Ve9Ge3);
    return (0, i.jsx)(c.Z, {
        isGift: !0,
        subscriptionTier: h,
        premiumModalAnalyticsLocation: f,
        giftMessage: b,
        onClick: _,
        children: (e) => {
            var l;
            let { onClick: o } = e;
            return (0, i.jsxs)(a.zxk, {
                innerClassName: m.innerGiftButton,
                color: null != r ? r : E ? a.Ttl.WHITE : a.Ttl.BRAND,
                look: a.iLD.OUTLINED,
                className: s()(t, m.giftButton, E ? m.buttonWhite : m.buttonBrand),
                onClick: o,
                children: [
                    !g &&
                        (0, i.jsx)(a.OgN, {
                            size: 'md',
                            color: 'currentColor',
                            className: m.giftIcon
                        }),
                    (0, i.jsx)('span', {
                        className: s()(m.buttonText, null == n ? void 0 : n.textClassName),
                        children: null != (l = null == n ? void 0 : n.textOverride) ? l : C
                    })
                ]
            });
        }
    });
};
