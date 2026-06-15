r.d(t, { A: () => x, U: () => h });
var i = r(627968);
r(64700);
var s = r(503698),
    l = r.n(s),
    a = r(462887),
    n = r(862482),
    o = r(597770),
    d = r(736653),
    c = r(783420),
    u = r(788868),
    m = r(375708),
    C = r(806956);
let h = (e) => (e === u.pe.TIER_0 ? m.intl.string(m.t.rk4Uu8) : m.intl.string(m.t.Ve9Ge6)),
    x = (e) => {
        let {
                className: t,
                textOptions: r,
                color: s,
                look: u,
                hideIcon: m,
                subscriptionTier: x,
                premiumModalAnalyticsLocation: p,
                giftMessage: _,
                onClick: g,
            } = e,
            R = (0, d.Ay)(),
            f = h(x);
        return (0, i.jsx)(c.A, {
            isGift: !0,
            subscriptionTier: x,
            premiumModalAnalyticsLocation: p,
            giftMessage: _,
            onClick: g,
            children: (e) => {
                let { onClick: d } = e;
                return (0, i.jsxs)(n.$n, {
                    "data-migration-pending": !0,
                    innerClassName: C.Nq,
                    color: s ?? ((0, a.M)(R) ? n.XD.WHITE : n.XD.BRAND),
                    look: u ?? n.pR.OUTLINED,
                    className: l()(t, C.xP),
                    onClick: d,
                    children: [
                        !m && (0, i.jsx)(o.o, { size: "md", color: "currentColor", className: C.ez }),
                        (0, i.jsx)("span", { className: l()(C._d, r?.textClassName), children: r?.textOverride ?? f }),
                    ],
                });
            },
        });
    };
