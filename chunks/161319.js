i.d(t, { u: () => O, w: () => w }), i(321073);
var n = i(477900),
    r = i(582128),
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
    h = i(975571),
    b = i(792656),
    g = i(264779),
    x = i(962644),
    C = i(35587),
    v = i(412260),
    _ = i(593687),
    j = i(772167),
    R = i(294219),
    E = i(202541),
    P = i(652215),
    A = i(375708),
    y = i(640886);
let N = "recurring-3p-progress-label",
    T = (e) => {
        let { promotionRecurrences: t } = e,
            [i, l] = r.useState(t.length > 1),
            [o, d] = r.useState([]);
        return (
            r.useEffect(() => {
                d([t.sort((e, t) => (t.startDate > e.startDate ? 1 : -1))[0]]);
            }, [t]),
            (0, n.jsxs)("div", {
                children: [
                    o.map((e) =>
                        (0, n.jsx)(
                            j.wx,
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
                        (0, n.jsx)(s.D, {
                            className: y.K8,
                            onClick: () => {
                                l(!1), d([...o, ...t.slice(1)]);
                            },
                            children: (0, n.jsx)(a.E, {
                                variant: "text-sm/medium",
                                color: "text-subtle",
                                children: A.intl.string(A.t.rjjZxV),
                            }),
                        }),
                ],
            })
        );
    };
function I(e) {
    return e.partnerId?.toLowerCase() ?? null;
}
function w(e) {
    let t,
        i,
        { transitionState: r, onClose: s, partnerIds: c, isLocked: u } = e,
        { promotionsLoaded: p, claimedOutboundPromotionCodeMap: w } = (0, C.y7)(),
        O = (0, d.yK)([v.A], () => v.A.outboundRecurringPromotions),
        M = (0, R.G)(c, { isLockedCardView: u });
    if (!1 === p) return (0, n.jsx)(l.y, {});
    let U = (function (e) {
        let { promotions: t, codesByPromotion: i, partnerIds: n } = e,
            r = {};
        return (
            t
                .filter((e) => !0 === (0, g.HB)({ promotionType: e.promotionType }))
                .forEach((e) => {
                    let t = I(e),
                        s = (function (e) {
                            let { promotion: t } = e,
                                i = I(t);
                            return null == i ? null : ((0, j.Cf)()[i] ?? null);
                        })({ promotion: e });
                    if (null == t || null == s || (null != n && !n.includes(t))) return;
                    t in r || (r[t] = []);
                    let a = {
                        id: e.id,
                        partnerId: t,
                        startDate: e.startDate,
                        endDate: e.endDate,
                        code: i[e.id] ?? null,
                        ...s,
                        title: A.intl.formatToPlainString(s.title, s.titleParams ?? {}),
                        outboundTitle: e.outboundTitle,
                        body: A.intl.formatToPlainString(s.body, s.bodyParams ?? {}),
                    };
                    r[t].push(a);
                }),
            r
        );
    })({ promotions: O, codesByPromotion: w, partnerIds: M });
    return (0, n.jsx)(o.Modal, {
        title: A.intl.string(A.t["7ioAjs"]),
        subtitle: A.intl.format(A.t.LOYRxB, { helpCenterLink: h.A.getArticleURL(P.MVz.RECURRING_PROMOTION) }),
        actions: [],
        preview: (function () {
            if (!0 === u)
                return (0, n.jsx)(b.A, {
                    subscriptionTier: E.pe.TIER_2,
                    fullWidth: !0,
                    onClick: () => {
                        s();
                    },
                    onSubscribeModalClose: (e) => {
                        if (e) return x.Ay.fetchActivePromotions();
                    },
                });
        })(),
        transitionState: r,
        onClose: s,
        children:
            ((t = (0, f.N5)()),
            (i = (0, f.P6)()),
            u
                ? (0, n.jsx)(_._, { partnerIds: M })
                : (0, n.jsxs)("div", {
                      className: y.kL,
                      children: [
                          (0, n.jsx)("div", {
                              className: y.Ps,
                              children: (0, n.jsx)(a.E, {
                                  id: N,
                                  variant: "text-md/medium",
                                  color: "text-subtle",
                                  children: A.intl.format(A.t["43kZKL"], { days: i }),
                              }),
                          }),
                          (0, n.jsx)("div", {
                              className: y.G9,
                              children: (0, n.jsx)(m.Ay, {
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
                          (0, n.jsx)("div", {
                              className: y.kR,
                              children: Object.entries(U)
                                  .sort((e, t) => {
                                      let [i] = e,
                                          [n] = t;
                                      return n.localeCompare(i);
                                  })
                                  .map((e) => {
                                      let [t, i] = e;
                                      return (0, n.jsx)(T, { promotionRecurrences: i }, t);
                                  }),
                          }),
                      ],
                  })),
    });
}
function O(e) {
    let { analyticsLocations: t, partnerIds: r, isLocked: s } = e;
    p.default.track(P.HAw.THIRD_PARTY_PROMOTION_MODAL_OPENED, { location_stack: t, partner_ids: r }),
        x.Ay.fetchActivePromotions(),
        (0, c.openModalLazy)(async () => {
            let { Premium3PRewardsModalEntry: e } = await Promise.all([i.e("793004"), i.e("385347")]).then(
                i.bind(i, 355150),
            );
            return (t) => (0, n.jsx)(e, { ...t, partnerIds: r, isLocked: s });
        });
}
