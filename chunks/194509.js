s.d(t, { A: () => C, U: () => x });
var n = s(627968);
s(64700);
var a = s(503698),
    r = s.n(a),
    l = s(462887),
    i = s(862482),
    d = s(597770),
    o = s(736653),
    c = s(783420),
    u = s(788868),
    h = s(985018),
    m = s(806956);
let x = (e) => (e === u.pe.TIER_0 ? h.intl.string(h.t.rk4Uu8) : h.intl.string(h.t.Ve9Ge6)),
    C = (e) => {
        let {
                className: t,
                textOptions: s,
                color: a,
                look: u,
                hideIcon: h,
                subscriptionTier: C,
                premiumModalAnalyticsLocation: _,
                giftMessage: p,
                onClick: g,
            } = e,
            f = (0, o.Ay)(),
            R = x(C);
        return (0, n.jsx)(c.A, {
            isGift: !0,
            subscriptionTier: C,
            premiumModalAnalyticsLocation: _,
            giftMessage: p,
            onClick: g,
            children: (e) => {
                let { onClick: o } = e;
                return (0, n.jsxs)(i.$n, {
                    "data-migration-pending": !0,
                    innerClassName: m.Nq,
                    color: a ?? ((0, l.M)(f) ? i.XD.WHITE : i.XD.BRAND),
                    look: u ?? i.pR.OUTLINED,
                    className: r()(t, m.xP),
                    onClick: o,
                    children: [
                        !h && (0, n.jsx)(d.o, { size: "md", color: "currentColor", className: m.ez }),
                        (0, n.jsx)("span", { className: r()(m._d, s?.textClassName), children: s?.textOverride ?? R }),
                    ],
                });
            },
        });
    };
