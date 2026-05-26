i.d(t, { A: () => p, U: () => C });
var r = i(627968);
i(64700);
var l = i(503698),
    a = i.n(l),
    s = i(462887),
    n = i(862482),
    o = i(597770),
    d = i(736653),
    c = i(783420),
    u = i(788868),
    m = i(375708),
    h = i(806956);
let C = (e) => (e === u.pe.TIER_0 ? m.intl.string(m.t.rk4Uu8) : m.intl.string(m.t.Ve9Ge6)),
    p = (e) => {
        let {
                className: t,
                textOptions: i,
                color: l,
                look: u,
                hideIcon: m,
                subscriptionTier: p,
                premiumModalAnalyticsLocation: _,
                giftMessage: g,
                onClick: E,
            } = e,
            x = (0, d.Ay)(),
            f = C(p);
        return (0, r.jsx)(c.A, {
            isGift: !0,
            subscriptionTier: p,
            premiumModalAnalyticsLocation: _,
            giftMessage: g,
            onClick: E,
            children: (e) => {
                let { onClick: d } = e;
                return (0, r.jsxs)(n.$n, {
                    "data-migration-pending": !0,
                    innerClassName: h.Nq,
                    color: l ?? ((0, s.M)(x) ? n.XD.WHITE : n.XD.BRAND),
                    look: u ?? n.pR.OUTLINED,
                    className: a()(t, h.xP),
                    onClick: d,
                    children: [
                        !m && (0, r.jsx)(o.o, { size: "md", color: "currentColor", className: h.ez }),
                        (0, r.jsx)("span", { className: a()(h._d, i?.textClassName), children: i?.textOverride ?? f }),
                    ],
                });
            },
        });
    };
