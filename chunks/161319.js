i.d(t, { u: () => D, w: () => w }), i(321073);
var r = i(627968),
    n = i(64700),
    s = i(939249),
    a = i(834730),
    l = i(289873),
    o = i(189213),
    d = i(17928),
    c = i(192308),
    u = i(793574),
    m = i(914410),
    p = i(174459),
    f = i(58703),
    b = i(975571),
    h = i(792656),
    C = i(264779),
    g = i(962644),
    R = i(35587),
    _ = i(412260),
    P = i(593687),
    E = i(772167),
    A = i(294219),
    x = i(202541),
    I = i(652215),
    v = i(375708),
    S = i(738894);
let O = "recurring-3p-progress-label",
    N = (e) => {
        let { promotionRecurrences: t } = e,
            [i, l] = n.useState(t.length > 1),
            [o, d] = n.useState([]);
        return (
            n.useEffect(() => {
                d([t.sort((e, t) => (t.startDate > e.startDate ? 1 : -1))[0]]);
            }, [t]),
            (0, r.jsxs)("div", {
                children: [
                    o.map((e) =>
                        (0, r.jsx)(
                            E.wx,
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
                        (0, r.jsx)(s.D, {
                            className: S.K8,
                            onClick: () => {
                                l(!1), d([...o, ...t.slice(1)]);
                            },
                            children: (0, r.jsx)(a.E, {
                                variant: "text-sm/medium",
                                color: "text-subtle",
                                children: v.intl.string(v.t.rjjZxV),
                            }),
                        }),
                ],
            })
        );
    };
function M(e) {
    return e.partnerId?.toLowerCase() ?? null;
}
function w(e) {
    let t,
        i,
        { transitionState: n, onClose: s, partnerIds: c, isLocked: u } = e,
        { promotionsLoaded: p, claimedOutboundPromotionCodeMap: w } = (0, R.y7)(),
        D = (0, d.yK)([_.A], () => _.A.outboundRecurringPromotions),
        T = (0, A.G)(c, { isLockedCardView: u });
    if (!1 === p) return (0, r.jsx)(l.y, {});
    let U = (function (e) {
        let { promotions: t, codesByPromotion: i, partnerIds: r } = e,
            n = {};
        return (
            t
                .filter((e) => !0 === (0, C.HB)({ promotionType: e.promotionType }))
                .forEach((e) => {
                    let t = M(e),
                        s = (function (e) {
                            let { promotion: t } = e,
                                i = M(t);
                            return null == i ? null : ((0, E.Cf)()[i] ?? null);
                        })({ promotion: e });
                    if (null == t || null == s || (null != r && !r.includes(t))) return;
                    t in n || (n[t] = []);
                    let a = {
                        id: e.id,
                        partnerId: t,
                        startDate: e.startDate,
                        endDate: e.endDate,
                        code: i[e.id] ?? null,
                        ...s,
                        title: v.intl.formatToPlainString(s.title, s.titleParams ?? {}),
                        outboundTitle: e.outboundTitle,
                        body: v.intl.formatToPlainString(s.body, s.bodyParams ?? {}),
                    };
                    n[t].push(a);
                }),
            n
        );
    })({ promotions: D, codesByPromotion: w, partnerIds: T });
    return (0, r.jsx)(o.Modal, {
        title: v.intl.string(v.t["7ioAjs"]),
        subtitle: v.intl.format(v.t.LOYRxB, { helpCenterLink: b.A.getArticleURL(I.MVz.RECURRING_PROMOTION) }),
        actions: [],
        preview: (function () {
            if (!0 === u)
                return (0, r.jsx)(h.A, {
                    subscriptionTier: x.pe.TIER_2,
                    fullWidth: !0,
                    onClick: () => {
                        s();
                    },
                    onSubscribeModalClose: (e) => {
                        if (e) return g.Ay.fetchActivePromotions();
                    },
                });
        })(),
        transitionState: n,
        onClose: s,
        children:
            ((t = (0, f.N5)()),
            (i = (0, f.P6)()),
            u
                ? (0, r.jsx)(P._, { partnerIds: T })
                : (0, r.jsxs)("div", {
                      className: S.kL,
                      children: [
                          (0, r.jsx)("div", {
                              className: S.Ps,
                              children: (0, r.jsx)(a.E, {
                                  id: O,
                                  variant: "text-md/medium",
                                  color: "text-subtle",
                                  children: v.intl.format(v.t["43kZKL"], { days: i }),
                              }),
                          }),
                          (0, r.jsx)("div", {
                              className: S.G9,
                              children: (0, r.jsx)(m.Ay, {
                                  progress: t,
                                  variant: m.qP.UNSET,
                                  override: {
                                      default: {
                                          gradientStart: "var(--illo-blue-70)",
                                          gradientEnd: "var(--illo-blue-10)",
                                      },
                                  },
                                  labelledBy: O,
                              }),
                          }),
                          (0, r.jsx)("div", {
                              className: S.kR,
                              children: Object.entries(U)
                                  .sort((e, t) => {
                                      let [i] = e,
                                          [r] = t;
                                      return r.localeCompare(i);
                                  })
                                  .map((e) => {
                                      let [t, i] = e;
                                      return (0, r.jsx)(N, { promotionRecurrences: i }, t);
                                  }),
                          }),
                      ],
                  })),
    });
}
function D(e) {
    let { analyticsLocations: t, partnerIds: n, isLocked: s } = e;
    p.default.track(I.HAw.THIRD_PARTY_PROMOTION_MODAL_OPENED, { location_stack: t, partner_ids: n }),
        g.Ay.fetchActivePromotions(),
        (0, c.openModalLazy)(async () => {
            let { Premium3PRewardsModalEntry: e } = await Promise.all([i.e("13762"), i.e("91900")]).then(
                i.bind(i, 92375),
            );
            return (t) => (0, r.jsx)(e, { ...t, partnerIds: n, isLocked: s });
        });
}
