i.d(t, { u: () => w, w: () => O }), i(321073);
var s = i(477900),
    n = i(582128),
    r = i(939249),
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
    g = i(264779),
    x = i(962644),
    C = i(35587),
    v = i(412260),
    _ = i(593687),
    j = i(772167),
    E = i(294219),
    R = i(202541),
    P = i(652215),
    A = i(375708),
    y = i(341973);
let N = "recurring-3p-progress-label";
function I(e) {
    let { promotionRecurrences: t } = e,
        [i, l] = n.useState(!1),
        o = [...t].sort((e, t) => (t.startDate > e.startDate ? 1 : -1)),
        d = o[0],
        c = i ? o : [d],
        m = !i && o.length > 1;
    return (0, s.jsxs)("div", {
        children: [
            c.map((e) =>
                (0, s.jsx)(
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
            m &&
                (0, s.jsx)(r.D, {
                    className: y.K8,
                    onClick: () => {
                        l(!0);
                    },
                    children: (0, s.jsx)(a.E, {
                        variant: "text-sm/medium",
                        color: "text-subtle",
                        children: A.intl.string(A.t.rjjZxV),
                    }),
                }),
        ],
    });
}
function T(e) {
    return e.partnerId?.toLowerCase() ?? null;
}
function O(e) {
    let t,
        i,
        { transitionState: n, onClose: r, partnerIds: c, isLocked: u } = e,
        { promotionsLoaded: p, claimedOutboundPromotionCodeMap: O } = (0, C.y7)(),
        w = (0, d.yK)([v.A], () => v.A.outboundRecurringPromotions),
        M = (0, E.G)(c, { isLockedCardView: u });
    if (!1 === p) return (0, s.jsx)(l.y, {});
    let L = (function (e) {
        let { promotions: t, codesByPromotion: i, partnerIds: s } = e,
            n = {};
        return (
            t
                .filter((e) => !0 === (0, g.HB)({ promotionType: e.promotionType }))
                .forEach((e) => {
                    let t = T(e),
                        r = (function (e) {
                            let { promotion: t } = e,
                                i = T(t);
                            return null == i ? null : ((0, j.Cf)()[i] ?? null);
                        })({ promotion: e });
                    if (null == t || null == r || (null != s && !s.includes(t))) return;
                    t in n || (n[t] = []);
                    let a = {
                        id: e.id,
                        partnerId: t,
                        startDate: e.startDate,
                        endDate: e.endDate,
                        code: i[e.id] ?? null,
                        ...r,
                        title: A.intl.formatToPlainString(r.title, r.titleParams ?? {}),
                        outboundTitle: e.outboundTitle,
                        body: A.intl.formatToPlainString(r.body, r.bodyParams ?? {}),
                    };
                    n[t].push(a);
                }),
            n
        );
    })({ promotions: w, codesByPromotion: O, partnerIds: M });
    return (0, s.jsx)(o.Modal, {
        title: A.intl.string(A.t["7ioAjs"]),
        subtitle: A.intl.format(A.t.LOYRxB, { helpCenterLink: b.A.getArticleURL(P.MVz.RECURRING_PROMOTION) }),
        actions: [],
        preview: (function () {
            if (!0 === u)
                return (0, s.jsx)(h.A, {
                    subscriptionTier: R.pe.TIER_2,
                    fullWidth: !0,
                    onClick: () => {
                        r();
                    },
                    onSubscribeModalClose: (e) => {
                        if (e) return x.Ay.fetchActivePromotions();
                    },
                });
        })(),
        transitionState: n,
        onClose: r,
        children:
            ((t = (0, f.N5)()),
            (i = (0, f.P6)()),
            u
                ? (0, s.jsx)(_._, { partnerIds: M })
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
                              children: Object.entries(L)
                                  .sort((e, t) => {
                                      let [i] = e,
                                          [s] = t;
                                      return s.localeCompare(i);
                                  })
                                  .map((e) => {
                                      let [t, i] = e;
                                      return (0, s.jsx)(I, { promotionRecurrences: i }, t);
                                  }),
                          }),
                      ],
                  })),
    });
}
function w(e) {
    let { analyticsLocations: t, partnerIds: n, isLocked: r } = e;
    p.default.track(P.HAw.THIRD_PARTY_PROMOTION_MODAL_OPENED, { location_stack: t, partner_ids: n }),
        x.Ay.fetchActivePromotions(),
        (0, c.openModalLazy)(async () => {
            let { Premium3PRewardsModalEntry: e } = await Promise.all([i.e("993616"), i.e("385347")]).then(
                i.bind(i, 355150),
            );
            return (t) => (0, s.jsx)(e, { ...t, partnerIds: n, isLocked: r });
        });
}
