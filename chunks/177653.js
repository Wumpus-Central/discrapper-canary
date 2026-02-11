n.d(t, { A: () => S });
var i = n(627968);
n(64700);
var s = n(503698),
    a = n.n(s),
    l = n(735438),
    r = n.n(l),
    o = n(311907),
    c = n(397927),
    d = n(287809),
    u = n(97352),
    _ = n(166403),
    m = n(469778),
    A = n(927578),
    g = n(538511),
    h = n(788868),
    x = n(652215),
    p = n(519412),
    E = n(985018),
    C = n(802937);
function T(e) {
    let t,
        {
            user: n,
            planId: s,
            count: l,
            userPremiumSubscription: r,
            unconsumedFractionalPremiumUnits: d = [],
            hasPremiumGroup: _,
        } = e,
        [m, g] = (0, o.yK)([u.A], () => [u.A.get(s), null != r ? u.A.get(r.planId) : null]);
    if (null == m || A.Ay.getInterval(s).intervalType !== h.WT.MONTH) return null;
    let T = null != g ? g.skuId : null,
        S = m.skuId === T,
        I = A.Ay.getDisplayName(s);
    if (_) t = E.intl.string(p.default["5asczk"]);
    else if (S && null != r) {
        let e;
        e = new Date(r.status === x.Dmq.PAUSED && null != r.pauseEndsAt ? r.pauseEndsAt : r.currentPeriodEnd);
        let n = (0, A._e)(e, d);
        t = E.intl.formatToPlainString(E.t["5CNRRA"], { date: n ?? 0 });
    } else t = E.intl.formatToPlainString(E.t.eNXZ5O, { planName: I });
    let f = n.hasFreePremium() || (null != r && r.isPurchasedExternally);
    return (0, i.jsxs)("div", {
        className: C.Bh,
        children: [
            (0, i.jsx)("div", {
                className: a()({
                    [C.sr]: m.skuId === h.pe.TIER_0,
                    [C.lP]: m.skuId === h.pe.TIER_1,
                    [C.eb]: m.skuId === h.pe.TIER_2,
                }),
                children: (0, i.jsx)(c.tvc, { size: "md", color: "currentColor", className: C.Kk }),
            }),
            (0, i.jsxs)("div", {
                className: C.pt,
                children: [
                    (0, i.jsx)(c.Heading, {
                        variant: "heading-md/semibold",
                        children: E.intl.format(E.t.LzobT9, { planName: I }),
                    }),
                    !f &&
                        (0, i.jsx)(c.Heading, {
                            className: C.gj,
                            variant: "heading-sm/semibold",
                            color: "text-default",
                            children: t,
                        }),
                ],
            }),
            (0, i.jsx)(c.Text, {
                className: C.PJ,
                variant: "text-md/semibold",
                children: E.intl.format(E.t["ess/xl"], { count: l }),
            }),
        ],
    });
}
let S = function (e) {
    let { className: t, entitlements: n } = e,
        s = r()(Array.from(n))
            .filter((e) => {
                let { subscriptionPlanId: t, parentId: n, consumed: i } = e;
                return null != t && null != n && !i;
            })
            .groupBy((e) => e.subscriptionPlanId)
            .value(),
        l = (0, o.yK)([m.A], () => m.A.getUnactivatedFractionalPremiumUnits()),
        u = (0, o.bG)([_.A], () => _.A.getPremiumSubscription()),
        A = (0, o.bG)([_.A], () => null == _.A.getPremiumTypeSubscription()),
        x = Object.keys(s).some((e) => e === h.gD.PREMIUM_MONTH_TIER_1),
        p = (0, o.bG)([d.default], () => d.default.getCurrentUser());
    if (null == p) return null;
    let S = p.isPremiumWithPremiumGroup();
    return (0, i.jsxs)("div", {
        children: [
            (0, i.jsx)("div", {
                className: a()(t, C.xF, C.J_),
                children: Object.keys(s).map((e) =>
                    (0, i.jsx)(
                        T,
                        {
                            planId: e,
                            count: s[e].length,
                            userPremiumSubscription: u,
                            user: p,
                            unconsumedFractionalPremiumUnits: l,
                            hasPremiumGroup: S,
                        },
                        e,
                    ),
                ),
            }),
            x &&
                A &&
                (0, i.jsxs)("div", {
                    children: [
                        (0, i.jsx)(c.Text, {
                            className: C.eT,
                            variant: "text-md/normal",
                            children: E.intl.string(E.t["VNr4+O"]),
                        }),
                        (0, i.jsx)(g.i, {}),
                    ],
                }),
        ],
    });
};
