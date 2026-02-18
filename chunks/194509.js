r.d(t, { A: () => g, U: () => h });
var n = r(627968);
r(64700);
var a = r(503698),
    l = r.n(a),
    s = r(582754),
    i = r(421380),
    d = r(397927),
    u = r(736653),
    o = r(783420),
    c = r(788868),
    m = r(985018),
    p = r(194597);
let h = (e) => (e === c.pe.TIER_0 ? m.intl.string(m.t.rk4Uu8) : m.intl.string(m.t.Ve9Ge6)),
    g = (e) => {
        let {
                className: t,
                textOptions: r,
                color: a,
                look: c,
                hideIcon: m,
                subscriptionTier: g,
                premiumModalAnalyticsLocation: x,
                giftMessage: b,
                onClick: f,
            } = e,
            _ = (0, u.Ay)(),
            R = h(g);
        return (0, n.jsx)(o.A, {
            isGift: !0,
            subscriptionTier: g,
            premiumModalAnalyticsLocation: x,
            giftMessage: b,
            onClick: f,
            children: (e) => {
                let { onClick: u } = e;
                return (0, n.jsxs)(i.$n, {
                    "data-migration-pending": !0,
                    innerClassName: p.Nq,
                    color: a ?? ((0, s.Mw)(_) ? i.XD.WHITE : i.XD.BRAND),
                    look: c ?? i.pR.OUTLINED,
                    className: l()(t, p.xP),
                    onClick: u,
                    children: [
                        !m && (0, n.jsx)(d.okO, { size: "md", color: "currentColor", className: p.ez }),
                        (0, n.jsx)("span", { className: l()(p._d, r?.textClassName), children: r?.textOverride ?? R }),
                    ],
                });
            },
        });
    };
