"use strict";
n.d(t, { u: () => M, w: () => b }), n(321073);
var i = n(627968),
    r = n(64700),
    a = n(939249),
    s = n(834730),
    l = n(289873),
    o = n(189213),
    d = n(17928),
    c = n(192308),
    u = n(793574),
    _ = n(914410),
    E = n(174459),
    A = n(58703),
    h = n(975571),
    I = n(792656),
    f = n(264779),
    p = n(962644),
    T = n(35587),
    m = n(412260),
    g = n(593687),
    S = n(772167),
    N = n(294219),
    C = n(202541),
    R = n(652215),
    O = n(375708),
    L = n(75662);
let y = "recurring-3p-progress-label",
    D = (e) => {
        let { promotionRecurrences: t } = e,
            [n, l] = r.useState(t.length > 1),
            [o, d] = r.useState([]);
        return (
            r.useEffect(() => {
                d([t.sort((e, t) => (t.startDate > e.startDate ? 1 : -1))[0]]);
            }, [t]),
            (0, i.jsxs)("div", {
                children: [
                    o.map((e) =>
                        (0, i.jsx)(
                            S.wx,
                            {
                                recurrence: e,
                                showPartnerLogo: !0,
                                showPartnerImage: !0,
                                analyticsLocations: [u.A.RECURRING_3PP_MODAL],
                            },
                            e.id,
                        ),
                    ),
                    n &&
                        (0, i.jsx)(a.D, {
                            className: L.K8,
                            onClick: () => {
                                l(!1), d([...o, ...t.slice(1)]);
                            },
                            children: (0, i.jsx)(s.E, {
                                variant: "text-sm/medium",
                                color: "text-subtle",
                                children: O.intl.string(O.t.rjjZxV),
                            }),
                        }),
                ],
            })
        );
    };
function v(e) {
    return e.partnerId?.toLowerCase() ?? null;
}
function b(e) {
    let t,
        n,
        { transitionState: r, onClose: a, partnerIds: c, isLocked: u } = e,
        { promotionsLoaded: E, claimedOutboundPromotionCodeMap: b } = (0, T.y7)(),
        M = (0, d.yK)([m.A], () => m.A.outboundRecurringPromotions),
        P = (0, N.G)(c, { isLockedCardView: u });
    if (!1 === E) return (0, i.jsx)(l.y, {});
    let U = (function (e) {
        let { promotions: t, codesByPromotion: n, partnerIds: i } = e,
            r = {};
        return (
            t
                .filter((e) => !0 === (0, f.HB)({ promotionType: e.promotionType }))
                .forEach((e) => {
                    let t = v(e),
                        a = (function (e) {
                            let { promotion: t } = e,
                                n = v(t);
                            return null == n ? null : ((0, S.Cf)()[n] ?? null);
                        })({ promotion: e });
                    if (null == t || null == a || (null != i && !i.includes(t))) return;
                    t in r || (r[t] = []);
                    let s = {
                        id: e.id,
                        partnerId: t,
                        startDate: e.startDate,
                        endDate: e.endDate,
                        code: n[e.id] ?? null,
                        ...a,
                        title: O.intl.formatToPlainString(a.title, a.titleParams ?? {}),
                        outboundTitle: e.outboundTitle,
                        body: O.intl.formatToPlainString(a.body, a.bodyParams ?? {}),
                    };
                    r[t].push(s);
                }),
            r
        );
    })({ promotions: M, codesByPromotion: b, partnerIds: P });
    return (0, i.jsx)(o.Modal, {
        title: O.intl.string(O.t["7ioAjs"]),
        subtitle: O.intl.format(O.t.LOYRxB, { helpCenterLink: h.A.getArticleURL(R.MVz.RECURRING_PROMOTION) }),
        actions: [],
        preview: (function () {
            if (!0 === u)
                return (0, i.jsx)(I.A, {
                    subscriptionTier: C.pe.TIER_2,
                    fullWidth: !0,
                    onClick: () => {
                        a();
                    },
                    onSubscribeModalClose: (e) => {
                        if (e) return p.Ay.fetchActivePromotions();
                    },
                });
        })(),
        transitionState: r,
        onClose: a,
        children:
            ((t = (0, A.N5)()),
            (n = (0, A.P6)()),
            u
                ? (0, i.jsx)(g._, { partnerIds: P })
                : (0, i.jsxs)("div", {
                      className: L.kL,
                      children: [
                          (0, i.jsx)("div", {
                              className: L.Ps,
                              children: (0, i.jsx)(s.E, {
                                  id: y,
                                  variant: "text-md/medium",
                                  color: "text-subtle",
                                  children: O.intl.format(O.t["43kZKL"], { days: n }),
                              }),
                          }),
                          (0, i.jsx)("div", {
                              className: L.G9,
                              children: (0, i.jsx)(_.Ay, {
                                  progress: t,
                                  variant: _.qP.UNSET,
                                  override: {
                                      default: {
                                          gradientStart: "var(--illo-blue-70)",
                                          gradientEnd: "var(--illo-blue-10)",
                                      },
                                  },
                                  labelledBy: y,
                              }),
                          }),
                          (0, i.jsx)("div", {
                              className: L.kR,
                              children: Object.entries(U)
                                  .sort((e, t) => {
                                      let [n] = e,
                                          [i] = t;
                                      return i.localeCompare(n);
                                  })
                                  .map((e) => {
                                      let [t, n] = e;
                                      return (0, i.jsx)(D, { promotionRecurrences: n }, t);
                                  }),
                          }),
                      ],
                  })),
    });
}
function M(e) {
    let { analyticsLocations: t, partnerIds: r, isLocked: a } = e;
    E.default.track(R.HAw.THIRD_PARTY_PROMOTION_MODAL_OPENED, { location_stack: t, partner_ids: r }),
        p.Ay.fetchActivePromotions(),
        (0, c.openModalLazy)(async () => {
            let { Premium3PRewardsModalEntry: e } = await Promise.all([n.e("967"), n.e("91900")]).then(
                n.bind(n, 92375),
            );
            return (t) => (0, i.jsx)(e, { ...t, partnerIds: r, isLocked: a });
        });
}
