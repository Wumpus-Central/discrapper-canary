i.d(t, { A: () => x, U: () => C });
var r = i(627968);
i(64700);
var s = i(503698),
    n = i.n(s),
    l = i(462887),
    a = i(862482),
    o = i(597770),
    d = i(736653),
    c = i(783420),
    u = i(202541),
    m = i(375708),
    h = i(806956);
function C(e) {
    return e === u.pe.TIER_0 ? m.intl.string(m.t.rk4Uu8) : m.intl.string(m.t.Ve9Ge6);
}
let x = function (e) {
    let {
            className: t,
            textOptions: i,
            color: s,
            look: u,
            hideIcon: m,
            subscriptionTier: x,
            premiumModalAnalyticsLocation: p,
            giftMessage: _,
            onClick: g,
        } = e,
        f = (0, d.Ay)(),
        R = C(x);
    return (0, r.jsx)(c.A, {
        isGift: !0,
        subscriptionTier: x,
        premiumModalAnalyticsLocation: p,
        giftMessage: _,
        onClick: g,
        children: (e) => {
            let { onClick: d } = e;
            return (0, r.jsxs)(a.$n, {
                "data-migration-pending": !0,
                innerClassName: h.Nq,
                color: s ?? ((0, l.M)(f) ? a.XD.WHITE : a.XD.BRAND),
                look: u ?? a.pR.OUTLINED,
                className: n()(t, h.xP),
                onClick: d,
                children: [
                    !m && (0, r.jsx)(o.o, { size: "md", color: "currentColor", className: h.ez }),
                    (0, r.jsx)("span", { className: n()(h._d, i?.textClassName), children: i?.textOverride ?? R }),
                ],
            });
        },
    });
};
