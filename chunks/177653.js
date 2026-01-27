n.d(t, {
    A: () => x,
}),
    n(896048);
var r = n(627968);
n(64700);
var i = n(503698),
    l = n.n(i),
    s = n(735438),
    a = n.n(s),
    o = n(311907),
    c = n(397927),
    d = n(287809),
    u = n(97352),
    _ = n(166403),
    p = n(469778),
    m = n(927578),
    g = n(538511),
    A = n(788868),
    f = n(652215),
    h = n(985018),
    b = n(802937);

function E(e) {
    let t,
        { user: n, planId: i, count: s, userPremiumSubscription: a, unconsumedFractionalPremiumUnits: d = [] } = e,
        [_, p] = (0, o.yK)([u.A], () => [u.A.get(i), null != a ? u.A.get(a.planId) : null]);
    if (null == _ || m.Ay.getInterval(i).intervalType !== A.WT.MONTH) return null;
    let g = null != p ? p.skuId : null,
        E = _.skuId === g,
        x = m.Ay.getDisplayName(i);
    if (null != a) {
        let e;
        (e = new Date(a.status === f.Dmq.PAUSED && null != a.pauseEndsAt ? a.pauseEndsAt : a.currentPeriodEnd)),
            (t = (0, m._e)(e, d));
    }
    return (0, r.jsxs)("div", {
        className: b.Bh,
        children: [
            (0, r.jsx)("div", {
                className: l()({
                    [b.sr]: _.skuId === A.pe.TIER_0,
                    [b.lP]: _.skuId === A.pe.TIER_1,
                    [b.eb]: _.skuId === A.pe.TIER_2,
                }),
                children: (0, r.jsx)(c.tvc, {
                    size: "md",
                    color: "currentColor",
                    className: b.Kk,
                }),
            }),
            (0, r.jsxs)("div", {
                className: b.pt,
                children: [
                    (0, r.jsx)(c.Heading, {
                        variant: "heading-md/semibold",
                        children: h.intl.format(h.t.LzobT9, {
                            planName: x,
                        }),
                    }),
                    n.hasFreePremium() || (null != a && a.isPurchasedExternally)
                        ? null
                        : (0, r.jsx)(c.Heading, {
                              className: b.gj,
                              variant: "heading-sm/semibold",
                              color: "text-default",
                              children:
                                  E && null != a
                                      ? h.intl.formatToPlainString(h.t["5CNRRA"], {
                                            date: null != t ? t : 0,
                                        })
                                      : h.intl.formatToPlainString(h.t.eNXZ5O, {
                                            planName: x,
                                        }),
                          }),
                ],
            }),
            (0, r.jsx)(c.Text, {
                className: b.PJ,
                variant: "text-md/semibold",
                children: h.intl.format(h.t["ess/xl"], {
                    count: s,
                }),
            }),
        ],
    });
}
let x = function (e) {
    let { className: t, entitlements: n } = e,
        i = a()(Array.from(n))
            .filter((e) => {
                let { subscriptionPlanId: t, parentId: n, consumed: r } = e;
                return null != t && null != n && !r;
            })
            .groupBy((e) => e.subscriptionPlanId)
            .value(),
        s = (0, o.yK)([p.A], () => p.A.getUnactivatedFractionalPremiumUnits()),
        u = (0, o.bG)([_.A], () => _.A.getPremiumSubscription()),
        m = (0, o.bG)([_.A], () => null == _.A.getPremiumTypeSubscription()),
        f = Object.keys(i).some((e) => e === A.gD.PREMIUM_MONTH_TIER_1),
        x = (0, o.bG)([d.default], () => d.default.getCurrentUser());
    return null == x
        ? null
        : (0, r.jsxs)("div", {
              children: [
                  (0, r.jsx)("div", {
                      className: l()(t, b.xF, b.J_),
                      children: Object.keys(i).map((e) =>
                          (0, r.jsx)(
                              E,
                              {
                                  planId: e,
                                  count: i[e].length,
                                  userPremiumSubscription: u,
                                  user: x,
                                  unconsumedFractionalPremiumUnits: s,
                              },
                              e,
                          ),
                      ),
                  }),
                  f &&
                      m &&
                      (0, r.jsxs)("div", {
                          children: [
                              (0, r.jsx)(c.Text, {
                                  className: b.eT,
                                  variant: "text-md/normal",
                                  children: h.intl.string(h.t["VNr4+O"]),
                              }),
                              (0, r.jsx)(g.i, {}),
                          ],
                      }),
              ],
          });
};
