i.d(s, { A: () => k, U: () => h });
var n = i(627968);
i(64700);
var t = i(503698),
    r = i.n(t),
    a = i(462887),
    c = i(862482),
    l = i(597770),
    o = i(736653),
    d = i(783420),
    p = i(202541),
    u = i(375708),
    m = i(806956);
function h(e) {
    return e === p.pe.TIER_0 ? u.intl.string(u.t.rk4Uu8) : u.intl.string(u.t.Ve9Ge6);
}
let k = function (e) {
    let {
            className: s,
            textOptions: i,
            color: t,
            look: p,
            hideIcon: u,
            subscriptionTier: k,
            premiumModalAnalyticsLocation: N,
            giftMessage: x,
            onClick: C,
        } = e,
        g = (0, o.Ay)(),
        A = h(k);
    return (0, n.jsx)(d.A, {
        isGift: !0,
        subscriptionTier: k,
        premiumModalAnalyticsLocation: N,
        giftMessage: x,
        onClick: C,
        children: (e) => {
            let { onClick: o } = e;
            return (0, n.jsxs)(c.$n, {
                "data-migration-pending": !0,
                innerClassName: m.Nq,
                color: t ?? ((0, a.M)(g) ? c.XD.WHITE : c.XD.BRAND),
                look: p ?? c.pR.OUTLINED,
                className: r()(s, m.xP),
                onClick: o,
                children: [
                    !u && (0, n.jsx)(l.o, { size: "md", color: "currentColor", className: m.ez }),
                    (0, n.jsx)("span", { className: r()(m._d, i?.textClassName), children: i?.textOverride ?? A }),
                ],
            });
        },
    });
};
