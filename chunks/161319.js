"use strict";
n.d(t, { u: () => w, w: () => D }), n(321073);
var i = n(627968),
    r = n(64700),
    s = n(939249),
    a = n(834730),
    o = n(289873),
    l = n(189213),
    u = n(17928),
    c = n(192308),
    d = n(793574),
    _ = n(914410),
    h = n(174459),
    f = n(58703),
    E = n(975571),
    p = n(792656),
    m = n(264779),
    g = n(962644),
    A = n(35587),
    I = n(374200),
    T = n(593687),
    S = n(772167),
    N = n(294219),
    C = n(202541),
    y = n(652215),
    O = n(375708),
    R = n(75662);
let v = "recurring-3p-progress-label",
    b = (e) => {
        let { promotionRecurrences: t } = e,
            [n, o] = r.useState(t.length > 1),
            [l, u] = r.useState([]);
        return (
            r.useEffect(() => {
                u([t.sort((e, t) => (t.startDate > e.startDate ? 1 : -1))[0]]);
            }, [t]),
            (0, i.jsxs)("div", {
                children: [
                    l.map((e) =>
                        (0, i.jsx)(
                            S.wx,
                            {
                                recurrence: e,
                                showPartnerLogo: !0,
                                showPartnerImage: !0,
                                analyticsLocations: [d.A.RECURRING_3PP_MODAL],
                            },
                            e.id,
                        ),
                    ),
                    n &&
                        (0, i.jsx)(s.D, {
                            className: R.K8,
                            onClick: () => {
                                o(!1), u([...l, ...t.slice(1)]);
                            },
                            children: (0, i.jsx)(a.E, {
                                variant: "text-sm/medium",
                                color: "text-subtle",
                                children: O.intl.string(O.t.rjjZxV),
                            }),
                        }),
                ],
            })
        );
    };
function L(e) {
    return e.partnerId?.toLowerCase() ?? null;
}
function D(e) {
    let t,
        n,
        { transitionState: r, onClose: s, partnerIds: c, isLocked: d } = e,
        { promotionsLoaded: h, claimedOutboundPromotionCodeMap: D } = (0, A.y7)(),
        w = (0, u.yK)([I.A], () => I.A.outboundRecurringPromotions),
        P = (0, N.G)(c, { isLockedCardView: d });
    if (!1 === h) return (0, i.jsx)(o.y, {});
    let M = (function (e) {
        let { promotions: t, codesByPromotion: n, partnerIds: i } = e,
            r = {};
        return (
            t
                .filter((e) => !0 === (0, m.HB)({ promotionType: e.promotionType }))
                .forEach((e) => {
                    let t = L(e),
                        s = (function (e) {
                            let { promotion: t } = e,
                                n = L(t);
                            return null == n ? null : ((0, S.Cf)()[n] ?? null);
                        })({ promotion: e });
                    if (null == t || null == s || (null != i && !i.includes(t))) return;
                    t in r || (r[t] = []);
                    let a = {
                        id: e.id,
                        partnerId: t,
                        startDate: e.startDate,
                        endDate: e.endDate,
                        code: n[e.id] ?? null,
                        ...s,
                        title: O.intl.formatToPlainString(s.title, s.titleParams ?? {}),
                        outboundTitle: e.outboundTitle,
                        body: O.intl.formatToPlainString(s.body, s.bodyParams ?? {}),
                    };
                    r[t].push(a);
                }),
            r
        );
    })({ promotions: w, codesByPromotion: D, partnerIds: P });
    return (0, i.jsx)(l.Modal, {
        title: O.intl.string(O.t["7ioAjs"]),
        subtitle: O.intl.format(O.t.LOYRxB, { helpCenterLink: E.A.getArticleURL(y.MVz.RECURRING_PROMOTION) }),
        actions: [],
        preview: (function () {
            if (!0 === d)
                return (0, i.jsx)(p.A, {
                    subscriptionTier: C.pe.TIER_2,
                    fullWidth: !0,
                    onClick: () => {
                        s();
                    },
                    onSubscribeModalClose: (e) => {
                        if (e) return g.Ay.fetchActivePromotions();
                    },
                });
        })(),
        transitionState: r,
        onClose: s,
        children:
            ((t = (0, f.N5)()),
            (n = (0, f.P6)()),
            d
                ? (0, i.jsx)(T._, { partnerIds: P })
                : (0, i.jsxs)("div", {
                      className: R.kL,
                      children: [
                          (0, i.jsx)("div", {
                              className: R.Ps,
                              children: (0, i.jsx)(a.E, {
                                  id: v,
                                  variant: "text-md/medium",
                                  color: "text-subtle",
                                  children: O.intl.format(O.t["43kZKL"], { days: n }),
                              }),
                          }),
                          (0, i.jsx)("div", {
                              className: R.G9,
                              children: (0, i.jsx)(_.Ay, {
                                  progress: t,
                                  variant: _.qP.UNSET,
                                  override: {
                                      default: {
                                          gradientStart: "var(--illo-blue-70)",
                                          gradientEnd: "var(--illo-blue-10)",
                                      },
                                  },
                                  labelledBy: v,
                              }),
                          }),
                          (0, i.jsx)("div", {
                              className: R.kR,
                              children: Object.entries(M)
                                  .sort((e, t) => {
                                      let [n] = e,
                                          [i] = t;
                                      return i.localeCompare(n);
                                  })
                                  .map((e) => {
                                      let [t, n] = e;
                                      return (0, i.jsx)(b, { promotionRecurrences: n }, t);
                                  }),
                          }),
                      ],
                  })),
    });
}
function w(e) {
    let { analyticsLocations: t, partnerIds: r, isLocked: s } = e;
    h.default.track(y.HAw.THIRD_PARTY_PROMOTION_MODAL_OPENED, { location_stack: t, partner_ids: r }),
        g.Ay.fetchActivePromotions(),
        (0, c.openModalLazy)(async () => {
            let { Premium3PRewardsModalEntry: e } = await Promise.all([n.e("967"), n.e("91900")]).then(
                n.bind(n, 92375),
            );
            return (t) => (0, i.jsx)(e, { ...t, partnerIds: r, isLocked: s });
        });
}
