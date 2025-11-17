n.d(t, {
    L: () => p,
    Z: () => h,
});
var r = n(54381);
n(473749);
var i = n(120356),
    a = n.n(i),
    o = n(780384),
    s = n(755721),
    l = n(481060),
    c = n(410030),
    u = n(648613),
    d = n(474936),
    f = n(388032),
    _ = n(827154);
let p = (e) => (e === d.Si.TIER_0 ? f.intl.string(f.t.rk4Uu8) : f.intl.string(f.t.Ve9Ge6)),
    h = (e) => {
        let {
                className: t,
                textOptions: n,
                color: i,
                look: d,
                hideIcon: f,
                subscriptionTier: h,
                premiumModalAnalyticsLocation: m,
                giftMessage: g,
                onClick: E,
            } = e,
            b = (0, c.ZP)(),
            y = p(h);
        return (0, r.jsx)(u.Z, {
            isGift: !0,
            subscriptionTier: h,
            premiumModalAnalyticsLocation: m,
            giftMessage: g,
            onClick: E,
            children: (e) => {
                var c;
                let { onClick: u } = e;
                return (0, r.jsxs)(s.zx, {
                    "data-migration-pending": !0,
                    innerClassName: _.innerGiftButton,
                    color: null != i ? i : (0, o.wj)(b) ? s.Tt.WHITE : s.Tt.BRAND,
                    look: null != d ? d : s.iL.OUTLINED,
                    className: a()(t, _.giftButton),
                    onClick: u,
                    children: [
                        !f &&
                            (0, r.jsx)(l.OgN, {
                                size: "md",
                                color: "currentColor",
                                className: _.giftIcon,
                            }),
                        (0, r.jsx)("span", {
                            className: a()(_.buttonText, null == n ? void 0 : n.textClassName),
                            children: null != (c = null == n ? void 0 : n.textOverride) ? c : y,
                        }),
                    ],
                });
            },
        });
    };
