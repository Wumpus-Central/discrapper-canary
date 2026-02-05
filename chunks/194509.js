"use strict";
n.d(t, { A: () => h, U: () => p });
var r = n(627968);
n(64700);
var i = n(503698),
    a = n.n(i),
    s = n(582754),
    o = n(421380),
    l = n(397927),
    u = n(736653),
    c = n(783420),
    d = n(788868),
    _ = n(985018),
    f = n(194597);
let p = (e) => (e === d.pe.TIER_0 ? _.intl.string(_.t.rk4Uu8) : _.intl.string(_.t.Ve9Ge6)),
    h = (e) => {
        let {
                className: t,
                textOptions: n,
                color: i,
                look: d,
                hideIcon: _,
                subscriptionTier: h,
                premiumModalAnalyticsLocation: m,
                giftMessage: g,
                onClick: E,
            } = e,
            A = (0, u.Ay)(),
            I = p(h);
        return (0, r.jsx)(c.A, {
            isGift: !0,
            subscriptionTier: h,
            premiumModalAnalyticsLocation: m,
            giftMessage: g,
            onClick: E,
            children: (e) => {
                let { onClick: u } = e;
                return (0, r.jsxs)(o.$n, {
                    "data-migration-pending": !0,
                    innerClassName: f.Nq,
                    color: i ?? ((0, s.Mw)(A) ? o.XD.WHITE : o.XD.BRAND),
                    look: d ?? o.pR.OUTLINED,
                    className: a()(t, f.xP),
                    onClick: u,
                    children: [
                        !_ && (0, r.jsx)(l.okO, { size: "md", color: "currentColor", className: f.ez }),
                        (0, r.jsx)("span", { className: a()(f._d, n?.textClassName), children: n?.textOverride ?? I }),
                    ],
                });
            },
        });
    };
