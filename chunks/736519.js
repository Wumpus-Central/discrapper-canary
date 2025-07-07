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
let p = (e) => (e === d.Si.TIER_0 ? u.intl.string(u.t.rk4Uu7) : u.intl.string(u.t.Ve9Ge3)),
    g = (e) => {
        let { className: t, textOptions: n, color: r, look: d, hideIcon: u, subscriptionTier: g, premiumModalAnalyticsLocation: h, giftMessage: f, onClick: b } = e,
            x = (0, o.ZP)(),
            _ = p(g);
        return (0, i.jsx)(c.Z, {
            isGift: !0,
            subscriptionTier: g,
            premiumModalAnalyticsLocation: h,
            giftMessage: f,
            onClick: b,
            children: (e) => {
                var o;
                let { onClick: c } = e;
                return (0, i.jsxs)(a.zxk, {
                    innerClassName: m.innerGiftButton,
                    color: null != r ? r : (0, l.wj)(x) ? a.Ttl.WHITE : a.Ttl.BRAND,
                    look: null != d ? d : a.iLD.OUTLINED,
                    className: s()(t, m.giftButton),
                    onClick: c,
                    children: [
                        !u &&
                            (0, i.jsx)(a.OgN, {
                                size: 'md',
                                color: 'currentColor',
                                className: m.giftIcon
                            }),
                        (0, i.jsx)('span', {
                            className: s()(m.buttonText, null == n ? void 0 : n.textClassName),
                            children: null != (o = null == n ? void 0 : n.textOverride) ? o : _
                        })
                    ]
                });
            }
        });
    };
