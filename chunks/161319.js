i.d(t, { u: () => T, w: () => I }), i(321073);
var s = i(627968),
    r = i(64700),
    n = i(939249),
    a = i(834730),
    l = i(289873),
    o = i(189213),
    d = i(17928),
    c = i(192308),
    u = i(793574),
    m = i(914410),
    p = i(174459),
    h = i(58703),
    f = i(975571),
    b = i(792656),
    g = i(264779),
    x = i(962644),
    C = i(35587),
    v = i(412260),
    j = i(593687),
    R = i(772167),
    P = i(294219),
    E = i(202541),
    _ = i(652215),
    A = i(375708),
    y = i(738894);
let N = "recurring-3p-progress-label",
    w = (e) => {
        let { promotionRecurrences: t } = e,
            [i, l] = r.useState(t.length > 1),
            [o, d] = r.useState([]);
        return (
            r.useEffect(() => {
                d([t.sort((e, t) => (t.startDate > e.startDate ? 1 : -1))[0]]);
            }, [t]),
            (0, s.jsxs)("div", {
                children: [
                    o.map((e) =>
                        (0, s.jsx)(
                            R.wx,
                            {
                                recurrence: e,
                                showPartnerLogo: !0,
                                showPartnerImage: !0,
                                analyticsLocations: [u.A.RECURRING_3PP_MODAL],
                            },
                            e.id,
                        ),
                    ),
                    i &&
                        (0, s.jsx)(n.D, {
                            className: y.K8,
                            onClick: () => {
                                l(!1), d([...o, ...t.slice(1)]);
                            },
                            children: (0, s.jsx)(a.E, {
                                variant: "text-sm/medium",
                                color: "text-subtle",
                                children: A.intl.string(A.t.rjjZxV),
                            }),
                        }),
                ],
            })
        );
    };
function M(e) {
    return e.partnerId?.toLowerCase() ?? null;
}
function I(e) {
    let t,
        i,
        { transitionState: r, onClose: n, partnerIds: c, isLocked: u } = e,
        { promotionsLoaded: p, claimedOutboundPromotionCodeMap: I } = (0, C.y7)(),
        T = (0, d.yK)([v.A], () => v.A.outboundRecurringPromotions),
        O = (0, P.G)(c, { isLockedCardView: u });
    if (!1 === p) return (0, s.jsx)(l.y, {});
    let U = (function (e) {
        let { promotions: t, codesByPromotion: i, partnerIds: s } = e,
            r = {};
        return (
            t
                .filter((e) => !0 === (0, g.HB)({ promotionType: e.promotionType }))
                .forEach((e) => {
                    let t = M(e),
                        n = (function (e) {
                            let { promotion: t } = e,
                                i = M(t);
                            return null == i ? null : ((0, R.Cf)()[i] ?? null);
                        })({ promotion: e });
                    if (null == t || null == n || (null != s && !s.includes(t))) return;
                    t in r || (r[t] = []);
                    let a = {
                        id: e.id,
                        partnerId: t,
                        startDate: e.startDate,
                        endDate: e.endDate,
                        code: i[e.id] ?? null,
                        ...n,
                        title: A.intl.formatToPlainString(n.title, n.titleParams ?? {}),
                        outboundTitle: e.outboundTitle,
                        body: A.intl.formatToPlainString(n.body, n.bodyParams ?? {}),
                    };
                    r[t].push(a);
                }),
            r
        );
    })({ promotions: T, codesByPromotion: I, partnerIds: O });
    return (0, s.jsx)(o.Modal, {
        title: A.intl.string(A.t["7ioAjs"]),
        subtitle: A.intl.format(A.t.LOYRxB, { helpCenterLink: f.A.getArticleURL(_.MVz.RECURRING_PROMOTION) }),
        actions: [],
        preview: (function () {
            if (!0 === u)
                return (0, s.jsx)(b.A, {
                    subscriptionTier: E.pe.TIER_2,
                    fullWidth: !0,
                    onClick: () => {
                        n();
                    },
                    onSubscribeModalClose: (e) => {
                        if (e) return x.Ay.fetchActivePromotions();
                    },
                });
        })(),
        transitionState: r,
        onClose: n,
        children:
            ((t = (0, h.N5)()),
            (i = (0, h.P6)()),
            u
                ? (0, s.jsx)(j._, { partnerIds: O })
                : (0, s.jsxs)("div", {
                      className: y.kL,
                      children: [
                          (0, s.jsx)("div", {
                              className: y.Ps,
                              children: (0, s.jsx)(a.E, {
                                  id: N,
                                  variant: "text-md/medium",
                                  color: "text-subtle",
                                  children: A.intl.format(A.t["43kZKL"], { days: i }),
                              }),
                          }),
                          (0, s.jsx)("div", {
                              className: y.G9,
                              children: (0, s.jsx)(m.Ay, {
                                  progress: t,
                                  variant: m.qP.UNSET,
                                  override: {
                                      default: {
                                          gradientStart: "var(--illo-blue-70)",
                                          gradientEnd: "var(--illo-blue-10)",
                                      },
                                  },
                                  labelledBy: N,
                              }),
                          }),
                          (0, s.jsx)("div", {
                              className: y.kR,
                              children: Object.entries(U)
                                  .sort((e, t) => {
                                      let [i] = e,
                                          [s] = t;
                                      return s.localeCompare(i);
                                  })
                                  .map((e) => {
                                      let [t, i] = e;
                                      return (0, s.jsx)(w, { promotionRecurrences: i }, t);
                                  }),
                          }),
                      ],
                  })),
    });
}
function T(e) {
    let { analyticsLocations: t, partnerIds: r, isLocked: n } = e;
    p.default.track(_.HAw.THIRD_PARTY_PROMOTION_MODAL_OPENED, { location_stack: t, partner_ids: r }),
        x.Ay.fetchActivePromotions(),
        (0, c.openModalLazy)(async () => {
            let { Premium3PRewardsModalEntry: e } = await Promise.all([i.e("38437"), i.e("85347")]).then(
                i.bind(i, 355150),
            );
            return (t) => (0, s.jsx)(e, { ...t, partnerIds: r, isLocked: n });
        });
}
