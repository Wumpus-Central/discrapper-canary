n.d(t, { A: () => C });
var i = n(627968);
n(64700);
var s = n(503698),
    l = n.n(s),
    a = n(735438),
    r = n.n(a),
    o = n(311907),
    d = n(403581),
    u = n(534514),
    c = n(834730),
    g = n(287809),
    m = n(97352),
    _ = n(166403),
    A = n(469778),
    h = n(927578),
    p = n(538511),
    x = n(788868),
    E = n(652215),
    T = n(466919),
    S = n(985018),
    f = n(441924);
function b(e) {
    let t,
        {
            user: n,
            planId: s,
            count: a,
            userPremiumSubscription: r,
            unconsumedFractionalPremiumUnits: g = [],
            hasPremiumGroup: _,
        } = e,
        [A, p] = (0, o.yK)([m.A], () => [m.A.get(s), null != r ? m.A.get(r.planId) : null]);
    if (null == A || h.Ay.getInterval(s).intervalType !== x.WT.MONTH) return null;
    let b = null != p ? p.skuId : null,
        C = A.skuId === b,
        v = h.Ay.getDisplayName(s);
    if (_) t = S.intl.string(T.default["5asczk"]);
    else if (C && null != r) {
        let e;
        e = new Date(r.status === E.Dmq.PAUSED && null != r.pauseEndsAt ? r.pauseEndsAt : r.currentPeriodEnd);
        let n = (0, h._e)(e, g);
        t = S.intl.formatToPlainString(S.t["5CNRRA"], { date: n ?? 0 });
    } else t = S.intl.formatToPlainString(S.t.eNXZ5O, { planName: v });
    let N = n.hasFreePremium() || (null != r && r.isPurchasedExternally);
    return (0, i.jsxs)("div", {
        className: f.Bh,
        children: [
            (0, i.jsx)("div", {
                className: l()({
                    [f.sr]: A.skuId === x.pe.TIER_0,
                    [f.lP]: A.skuId === x.pe.TIER_1,
                    [f.eb]: A.skuId === x.pe.TIER_2,
                }),
                children: (0, i.jsx)(d.t, { size: "md", color: "currentColor", className: f.Kk }),
            }),
            (0, i.jsxs)("div", {
                className: f.pt,
                children: [
                    (0, i.jsx)(u.D, {
                        variant: "heading-md/semibold",
                        children: S.intl.format(S.t.LzobT9, { planName: v }),
                    }),
                    !N &&
                        (0, i.jsx)(u.D, {
                            className: f.gj,
                            variant: "heading-sm/semibold",
                            color: "text-default",
                            children: t,
                        }),
                ],
            }),
            (0, i.jsx)(c.E, {
                className: f.PJ,
                variant: "text-md/semibold",
                children: S.intl.format(S.t["ess/xl"], { count: a }),
            }),
        ],
    });
}
let C = function (e) {
    let { className: t, entitlements: n } = e,
        s = r()(Array.from(n))
            .filter((e) => {
                let { subscriptionPlanId: t, parentId: n, consumed: i } = e;
                return null != t && null != n && !i;
            })
            .groupBy((e) => e.subscriptionPlanId)
            .value(),
        a = (0, o.yK)([A.A], () => A.A.getUnactivatedFractionalPremiumUnits()),
        d = (0, o.bG)([_.A], () => _.A.getPremiumSubscription()),
        u = (0, o.bG)([_.A], () => null == _.A.getPremiumTypeSubscription()),
        m = Object.keys(s).some((e) => e === x.gD.PREMIUM_MONTH_TIER_1),
        h = (0, o.bG)([g.default], () => g.default.getCurrentUser());
    if (null == h) return null;
    let E = h.isPremiumWithPremiumGroup();
    return (0, i.jsxs)("div", {
        children: [
            (0, i.jsx)("div", {
                className: l()(t, f.xF, f.J_),
                children: Object.keys(s).map((e) =>
                    (0, i.jsx)(
                        b,
                        {
                            planId: e,
                            count: s[e].length,
                            userPremiumSubscription: d,
                            user: h,
                            unconsumedFractionalPremiumUnits: a,
                            hasPremiumGroup: E,
                        },
                        e,
                    ),
                ),
            }),
            m &&
                u &&
                (0, i.jsxs)("div", {
                    children: [
                        (0, i.jsx)(c.E, {
                            className: f.eT,
                            variant: "text-md/normal",
                            children: S.intl.string(S.t["VNr4+O"]),
                        }),
                        (0, i.jsx)(p.i, {}),
                    ],
                }),
        ],
    });
};
