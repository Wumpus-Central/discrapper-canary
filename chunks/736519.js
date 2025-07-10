n.d(t, {
    L: () => g,
    Z: () => h
});
var i = n(255367);
n(73800);
var r = n(120356),
    s = n.n(r),
    a = n(780384),
    l = n(755721),
    o = n(481060),
    c = n(410030),
    d = n(648613),
    u = n(474936),
    m = n(388032),
    p = n(638068);
let g = (e) => (e === u.Si.TIER_0 ? m.intl.string(m.t.rk4Uu7) : m.intl.string(m.t.Ve9Ge3)),
    h = (e) => {
        let { className: t, textOptions: n, color: r, look: u, hideIcon: m, subscriptionTier: h, premiumModalAnalyticsLocation: f, giftMessage: b, onClick: x } = e,
            _ = (0, c.ZP)(),
            j = g(h);
        return (0, i.jsx)(d.Z, {
            isGift: !0,
            subscriptionTier: h,
            premiumModalAnalyticsLocation: f,
            giftMessage: b,
            onClick: x,
            children: (e) => {
                var c;
                let { onClick: d } = e;
                return (0, i.jsxs)(l.zx, {
                    innerClassName: p.innerGiftButton,
                    color: null != r ? r : (0, a.wj)(_) ? l.Tt.WHITE : l.Tt.BRAND,
                    look: null != u ? u : l.iL.OUTLINED,
                    className: s()(t, p.giftButton),
                    onClick: d,
                    children: [
                        !m &&
                            (0, i.jsx)(o.OgN, {
                                size: 'md',
                                color: 'currentColor',
                                className: p.giftIcon
                            }),
                        (0, i.jsx)('span', {
                            className: s()(p.buttonText, null == n ? void 0 : n.textClassName),
                            children: null != (c = null == n ? void 0 : n.textOverride) ? c : j
                        })
                    ]
                });
            }
        });
    };
