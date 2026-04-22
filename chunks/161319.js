s.d(t, { u: () => O, w: () => w }), s(321073);
var n = s(627968),
    a = s(64700),
    r = s(939249),
    l = s(834730),
    i = s(289873),
    d = s(189213),
    o = s(311907),
    c = s(192308),
    u = s(793574),
    h = s(287809),
    m = s(954571),
    x = s(405269),
    C = s(975571),
    _ = s(927578),
    p = s(792656),
    g = s(264779),
    f = s(597758),
    R = s(35587),
    b = s(412260),
    v = s(593687),
    j = s(729640),
    E = s(116011),
    A = s(294219),
    N = s(788868),
    P = s(652215),
    I = s(985018),
    D = s(738894);
let y = (e) => {
        let { promotionRecurrences: t } = e,
            [s, i] = a.useState(t.length > 1),
            [d, o] = a.useState([]);
        return (
            a.useEffect(() => {
                o([t.sort((e, t) => (t.startDate > e.startDate ? 1 : -1))[0]]);
            }, [t]),
            (0, n.jsxs)("div", {
                children: [
                    d.map((e) =>
                        (0, n.jsx)(
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
                    s &&
                        (0, n.jsx)(r.D, {
                            className: D.K8,
                            onClick: () => {
                                i(!1), o([...d, ...t.slice(1)]);
                            },
                            children: (0, n.jsx)(l.E, {
                                variant: "text-sm/medium",
                                color: "text-subtle",
                                children: I.intl.string(I.t.rjjZxV),
                            }),
                        }),
                ],
            })
        );
    },
    S = (e) => e.partnerId?.toLowerCase() ?? null,
    w = (e) => {
        let t,
            s,
            { transitionState: a, onClose: r, partnerIds: c } = e,
            u = (0, A.G)(c),
            { promotionsLoaded: m, claimedOutboundPromotionCodeMap: w } = (0, R.y7)(),
            O = (0, o.yK)([b.A], () => b.A.outboundRecurringPromotions),
            T = (0, o.bG)([h.default], () => h.default.getCurrentUser()),
            M = !1 === _.Ay.isPremiumExactly(T, N.PremiumTypes.TIER_2),
            L = T?.isFractionalPremiumWithNoStandardSub(),
            U = null == T || M || L;
        if (!1 === m) return (0, n.jsx)(i.y, {});
        let k = ((e) => {
            let { promotions: t, codesByPromotion: s, partnerIds: n } = e,
                a = {};
            return (
                t
                    .filter((e) => !0 === (0, g.HB)({ promotionType: e.promotionType }))
                    .forEach((e) => {
                        let t = S(e),
                            r = ((e) => {
                                let { promotion: t } = e,
                                    s = S(t);
                                return null == s ? null : ((0, E.Cf)()[s] ?? null);
                            })({ promotion: e });
                        if (null == t || null == r || (null != n && !n.includes(t))) return;
                        t in a || (a[t] = []);
                        let l = {
                            id: e.id,
                            partnerId: t,
                            startDate: e.startDate,
                            endDate: e.endDate,
                            code: s[e.id] ?? null,
                            ...r,
                            title: I.intl.formatToPlainString(r.title, r.titleParams ?? {}),
                            body: I.intl.formatToPlainString(r.body, r.bodyParams ?? {}),
                        };
                        a[t].push(l);
                    }),
                a
            );
        })({ promotions: O, codesByPromotion: w, partnerIds: u });
        return (0, n.jsx)(d.Modal, {
            title: I.intl.string(I.t["7ioAjs"]),
            subtitle: I.intl.format(I.t.LOYRxB, { helpCenterLink: C.A.getArticleURL(P.MVz.RECURRING_PROMOTION) }),
            actions: [],
            preview: (() => {
                if (!0 === U)
                    return (0, n.jsx)(p.A, {
                        subscriptionTier: N.pe.TIER_2,
                        fullWidth: !0,
                        onClick: () => {
                            r();
                        },
                        onSubscribeModalClose: (e) => {
                            if (e) return f.Ay.fetchActivePromotions();
                        },
                    });
            })(),
            transitionState: a,
            onClose: r,
            children:
                ((t = (0, x.N5)()),
                (s = (0, x.P6)()),
                U
                    ? (0, n.jsx)(v._, { partnerIds: u })
                    : (0, n.jsxs)("div", {
                          className: D.kL,
                          children: [
                              (0, n.jsx)("div", {
                                  className: D.Ps,
                                  children: (0, n.jsx)(l.E, {
                                      variant: "text-md/medium",
                                      color: "text-subtle",
                                      children: I.intl.format(I.t["43kZKL"], { days: s }),
                                  }),
                              }),
                              (0, n.jsx)("div", { className: D.G9, children: (0, n.jsx)(j.P, { percentage: t }) }),
                              (0, n.jsx)("div", {
                                  className: D.kR,
                                  children: Object.entries(k)
                                      .sort((e, t) => {
                                          let [s] = e,
                                              [n] = t;
                                          return n.localeCompare(s);
                                      })
                                      .map((e) => {
                                          let [t, s] = e;
                                          return (0, n.jsx)(y, { promotionRecurrences: s }, t);
                                      }),
                              }),
                          ],
                      })),
        });
    },
    O = (e) => {
        let { analyticsLocations: t, partnerIds: a } = e;
        m.default.track(P.HAw.RECURRING_PROMOTION_MODAL_OPENED, { location_stack: t }),
            f.Ay.fetchActivePromotions(),
            (0, c.openModalLazy)(async () => {
                let { Premium3PRewardsModalEntry: e } = await s.e("54552").then(s.bind(s, 361835));
                return (t) => (0, n.jsx)(e, { ...t, partnerIds: a });
            });
    };
