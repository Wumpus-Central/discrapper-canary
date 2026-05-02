"use strict";
n.d(t, { A: () => p, U: () => h });
var i = n(627968);
n(64700);
var r = n(503698),
    s = n.n(r),
    a = n(462887),
    o = n(862482),
    l = n(597770),
    u = n(736653),
    c = n(783420),
    d = n(788868),
    _ = n(375708),
    f = n(806956);
let h = (e) => (e === d.pe.TIER_0 ? _.intl.string(_.t.rk4Uu8) : _.intl.string(_.t.Ve9Ge6)),
    p = (e) => {
        let {
                className: t,
                textOptions: n,
                color: r,
                look: d,
                hideIcon: _,
                subscriptionTier: p,
                premiumModalAnalyticsLocation: E,
                giftMessage: m,
                onClick: g,
            } = e,
            A = (0, u.Ay)(),
            I = h(p);
        return (0, i.jsx)(c.A, {
            isGift: !0,
            subscriptionTier: p,
            premiumModalAnalyticsLocation: E,
            giftMessage: m,
            onClick: g,
            children: (e) => {
                let { onClick: u } = e;
                return (0, i.jsxs)(o.$n, {
                    "data-migration-pending": !0,
                    innerClassName: f.Nq,
                    color: r ?? ((0, a.M)(A) ? o.XD.WHITE : o.XD.BRAND),
                    look: d ?? o.pR.OUTLINED,
                    className: s()(t, f.xP),
                    onClick: u,
                    children: [
                        !_ && (0, i.jsx)(l.o, { size: "md", color: "currentColor", className: f.ez }),
                        (0, i.jsx)("span", { className: s()(f._d, n?.textClassName), children: n?.textOverride ?? I }),
                    ],
                });
            },
        });
    };
