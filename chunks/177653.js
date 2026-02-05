n.d(t, { A: () => T });
var i = n(627968);
n(64700);
var s = n(503698),
    r = n.n(s),
    a = n(735438),
    l = n.n(a),
    o = n(311907),
    c = n(397927),
    d = n(287809),
    u = n(97352),
    _ = n(166403),
    m = n(469778),
    A = n(927578),
    g = n(538511),
    E = n(788868),
    h = n(652215),
    p = n(985018),
    C = n(802937);
function x(e) {
    let t,
        { user: n, planId: s, count: a, userPremiumSubscription: l, unconsumedFractionalPremiumUnits: d = [] } = e,
        [_, m] = (0, o.yK)([u.A], () => [u.A.get(s), null != l ? u.A.get(l.planId) : null]);
    if (null == _ || A.Ay.getInterval(s).intervalType !== E.WT.MONTH) return null;
    let g = null != m ? m.skuId : null,
        x = _.skuId === g,
        T = A.Ay.getDisplayName(s);
    if (null != l) {
        let e;
        (e = new Date(l.status === h.Dmq.PAUSED && null != l.pauseEndsAt ? l.pauseEndsAt : l.currentPeriodEnd)),
            (t = (0, A._e)(e, d));
    }
    return (0, i.jsxs)("div", {
        className: C.Bh,
        children: [
            (0, i.jsx)("div", {
                className: r()({
                    [C.sr]: _.skuId === E.pe.TIER_0,
                    [C.lP]: _.skuId === E.pe.TIER_1,
                    [C.eb]: _.skuId === E.pe.TIER_2,
                }),
                children: (0, i.jsx)(c.tvc, { size: "md", color: "currentColor", className: C.Kk }),
            }),
            (0, i.jsxs)("div", {
                className: C.pt,
                children: [
                    (0, i.jsx)(c.Heading, {
                        variant: "heading-md/semibold",
                        children: p.intl.format(p.t.LzobT9, { planName: T }),
                    }),
                    n.hasFreePremium() || (null != l && l.isPurchasedExternally)
                        ? null
                        : (0, i.jsx)(c.Heading, {
                              className: C.gj,
                              variant: "heading-sm/semibold",
                              color: "text-default",
                              children:
                                  x && null != l
                                      ? p.intl.formatToPlainString(p.t["5CNRRA"], { date: t ?? 0 })
                                      : p.intl.formatToPlainString(p.t.eNXZ5O, { planName: T }),
                          }),
                ],
            }),
            (0, i.jsx)(c.Text, {
                className: C.PJ,
                variant: "text-md/semibold",
                children: p.intl.format(p.t["ess/xl"], { count: a }),
            }),
        ],
    });
}
let T = function (e) {
    let { className: t, entitlements: n } = e,
        s = l()(Array.from(n))
            .filter((e) => {
                let { subscriptionPlanId: t, parentId: n, consumed: i } = e;
                return null != t && null != n && !i;
            })
            .groupBy((e) => e.subscriptionPlanId)
            .value(),
        a = (0, o.yK)([m.A], () => m.A.getUnactivatedFractionalPremiumUnits()),
        u = (0, o.bG)([_.A], () => _.A.getPremiumSubscription()),
        A = (0, o.bG)([_.A], () => null == _.A.getPremiumTypeSubscription()),
        h = Object.keys(s).some((e) => e === E.gD.PREMIUM_MONTH_TIER_1),
        T = (0, o.bG)([d.default], () => d.default.getCurrentUser());
    return null == T
        ? null
        : (0, i.jsxs)("div", {
              children: [
                  (0, i.jsx)("div", {
                      className: r()(t, C.xF, C.J_),
                      children: Object.keys(s).map((e) =>
                          (0, i.jsx)(
                              x,
                              {
                                  planId: e,
                                  count: s[e].length,
                                  userPremiumSubscription: u,
                                  user: T,
                                  unconsumedFractionalPremiumUnits: a,
                              },
                              e,
                          ),
                      ),
                  }),
                  h &&
                      A &&
                      (0, i.jsxs)("div", {
                          children: [
                              (0, i.jsx)(c.Text, {
                                  className: C.eT,
                                  variant: "text-md/normal",
                                  children: p.intl.string(p.t["VNr4+O"]),
                              }),
                              (0, i.jsx)(g.i, {}),
                          ],
                      }),
              ],
          });
};
