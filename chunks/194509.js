l.d(t, { A: () => _, U: () => C });
var i = l(627968);
l(64700);
var r = l(503698),
    a = l.n(r),
    s = l(462887),
    n = l(862482),
    o = l(597770),
    d = l(736653),
    c = l(783420),
    u = l(788868),
    m = l(375708),
    h = l(806956);
let C = (e) => (e === u.pe.TIER_0 ? m.intl.string(m.t.rk4Uu8) : m.intl.string(m.t.Ve9Ge6)),
    _ = (e) => {
        let {
                className: t,
                textOptions: l,
                color: r,
                look: u,
                hideIcon: m,
                subscriptionTier: _,
                premiumModalAnalyticsLocation: p,
                giftMessage: g,
                onClick: E,
            } = e,
            x = (0, d.Ay)(),
            f = C(_);
        return (0, i.jsx)(c.A, {
            isGift: !0,
            subscriptionTier: _,
            premiumModalAnalyticsLocation: p,
            giftMessage: g,
            onClick: E,
            children: (e) => {
                let { onClick: d } = e;
                return (0, i.jsxs)(n.$n, {
                    "data-migration-pending": !0,
                    innerClassName: h.Nq,
                    color: r ?? ((0, s.M)(x) ? n.XD.WHITE : n.XD.BRAND),
                    look: u ?? n.pR.OUTLINED,
                    className: a()(t, h.xP),
                    onClick: d,
                    children: [
                        !m && (0, i.jsx)(o.o, { size: "md", color: "currentColor", className: h.ez }),
                        (0, i.jsx)("span", { className: a()(h._d, l?.textClassName), children: l?.textOverride ?? f }),
                    ],
                });
            },
        });
    };
