s.d(t, { A: () => C, U: () => x });
var a = s(627968);
s(64700);
var r = s(503698),
    l = s.n(r),
    i = s(462887),
    n = s(862482),
    d = s(597770),
    o = s(736653),
    c = s(783420),
    u = s(788868),
    m = s(985018),
    h = s(806956);
let x = (e) => (e === u.pe.TIER_0 ? m.intl.string(m.t.rk4Uu8) : m.intl.string(m.t.Ve9Ge6)),
    C = (e) => {
        let {
                className: t,
                textOptions: s,
                color: r,
                look: u,
                hideIcon: m,
                subscriptionTier: C,
                premiumModalAnalyticsLocation: _,
                giftMessage: p,
                onClick: g,
            } = e,
            f = (0, o.Ay)(),
            R = x(C);
        return (0, a.jsx)(c.A, {
            isGift: !0,
            subscriptionTier: C,
            premiumModalAnalyticsLocation: _,
            giftMessage: p,
            onClick: g,
            children: (e) => {
                let { onClick: o } = e;
                return (0, a.jsxs)(n.$n, {
                    "data-migration-pending": !0,
                    innerClassName: h.Nq,
                    color: r ?? ((0, i.M)(f) ? n.XD.WHITE : n.XD.BRAND),
                    look: u ?? n.pR.OUTLINED,
                    className: l()(t, h.xP),
                    onClick: o,
                    children: [
                        !m && (0, a.jsx)(d.o, { size: "md", color: "currentColor", className: h.ez }),
                        (0, a.jsx)("span", { className: l()(h._d, s?.textClassName), children: s?.textOverride ?? R }),
                    ],
                });
            },
        });
    };
