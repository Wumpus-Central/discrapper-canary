n.d(t, { Recurring3PModal: () => T, u: () => S }), n(321073);
var r = n(627968),
    l = n(64700),
    s = n(158954),
    a = n(311907),
    i = n(397927),
    d = n(793574),
    o = n(287809),
    c = n(954571),
    u = n(405269),
    m = n(975571),
    h = n(927578),
    x = n(398523),
    C = n(881373),
    p = n(792656),
    _ = n(264779),
    g = n(597758),
    f = n(35587),
    b = n(412260),
    R = n(852218),
    j = n(729640),
    v = n(116011),
    A = n(788868),
    E = n(652215),
    N = n(985018),
    P = n(75662);
let D = (e) => {
        let { partnerIds: t } = e;
        return (
            null != t
                ? Object.entries(v.oL).filter((e) => {
                      let [n] = e;
                      return t.includes(n);
                  })
                : Object.entries(v.oL)
        ).map((e) => {
            let [t, n] = e;
            return (0, r.jsx)(
                "div",
                {
                    className: P.lA,
                    children: (0, r.jsxs)("div", {
                        className: P.LV,
                        children: [
                            (0, r.jsxs)("div", {
                                className: P.JN,
                                children: [
                                    (0, r.jsx)("div", {
                                        className: P.MC,
                                        children: (0, r.jsx)(s.XAi, { size: "refresh_sm" }),
                                    }),
                                    (0, r.jsxs)("div", {
                                        className: P.yO,
                                        children: [
                                            (0, r.jsx)(s.DZT, {
                                                variant: "heading-lg/semibold",
                                                color: "text-strong",
                                                children: N.intl.formatToPlainString(n.title, n.titleParams ?? {}),
                                            }),
                                            (0, r.jsx)(s.DZT, {
                                                variant: "heading-sm/medium",
                                                color: "text-subtle",
                                                children: N.intl.formatToPlainString(n.body, n.bodyParams ?? {}),
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                            (0, r.jsx)("div", {
                                className: P.R4,
                                children: (0, r.jsx)(i._V3, {
                                    src: n.asset,
                                    className: P.Ys,
                                    width: 100,
                                    height: 100,
                                    zoomable: !1,
                                }),
                            }),
                        ],
                    }),
                },
                t,
            );
        });
    },
    y = (e) => {
        let { promotionRecurrences: t } = e,
            [n, a] = l.useState(t.length > 1),
            [i, o] = l.useState([]);
        return (
            l.useEffect(() => {
                o([t.sort((e, t) => (t.startDate > e.startDate ? 1 : -1))[0]]);
            }, [t]),
            (0, r.jsxs)("div", {
                children: [
                    i.map((e) =>
                        (0, r.jsx)(
                            v.wx,
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
                        (0, r.jsx)(s.DUT, {
                            className: P.K8,
                            onClick: () => {
                                a(!1), o([...i, ...t.slice(1)]);
                            },
                            children: (0, r.jsx)(s.EYj, {
                                variant: "text-sm/medium",
                                color: "text-subtle",
                                children: N.intl.string(N.t.rjjZxV),
                            }),
                        }),
                ],
            })
        );
    },
    I = (e) =>
        e.promotionType === R.pt.THIRD_PARTY_OUTBOUND_RECURRING
            ? (e.partnerId?.toLowerCase() ?? null)
            : e.outboundTitle.toLowerCase(),
    T = (e) => {
        let t,
            n,
            { transitionState: i, onClose: d, partnerIds: c } = e,
            T = ((e) => {
                let { enabled: t } = x.A.useConfig({ location: "Recurring3PModal" }),
                    n = (0, C.YS)({ location: "Recurring3PModal" }).functionalityEnabled;
                return l.useMemo(() => {
                    let r = [];
                    return t && r.push(R.KS, R.Cs), n && r.push(R.XY), null != e ? e.filter((e) => r.includes(e)) : r;
                }, [t, n, e]);
            })(c),
            { promotionsLoaded: S, claimedOutboundPromotionCodeMap: w } = (0, f.y7)(),
            O = (0, a.yK)([b.A], () => b.A.outboundRecurringPromotions),
            M = (0, a.bG)([o.default], () => o.default.getCurrentUser()),
            L = !1 === h.Ay.isPremiumExactly(M, A.PremiumTypes.TIER_2),
            U = M?.isFractionalPremiumWithNoStandardSub(),
            k = null == M || L || U;
        if (!1 === S) return (0, r.jsx)(s.y$y, {});
        let B = ((e) => {
            let { promotions: t, codesByPromotion: n, partnerIds: r } = e,
                l = {};
            return (
                t
                    .filter(
                        (e) => !0 === (0, _.HB)({ promotionPartner: e.outboundTitle, promotionType: e.promotionType }),
                    )
                    .forEach((e) => {
                        let t = I(e),
                            s = ((e) => {
                                let { promotion: t } = e,
                                    n = I(t);
                                return null == n ? null : (v.oL[n] ?? null);
                            })({ promotion: e });
                        if (null == t || null == s || (null != r && !r.includes(t))) return;
                        t in l || (l[t] = []);
                        let a = {
                            id: e.id,
                            partnerId: t,
                            startDate: e.startDate,
                            endDate: e.endDate,
                            code: n[e.id] ?? null,
                            ...s,
                            title: N.intl.formatToPlainString(s.title, s.titleParams ?? {}),
                            body: N.intl.formatToPlainString(s.body, s.bodyParams ?? {}),
                        };
                        l[t].push(a);
                    }),
                l
            );
        })({ promotions: O, codesByPromotion: w, partnerIds: T });
        return (0, r.jsx)(s.Modal, {
            title: N.intl.string(N.t["7ioAjs"]),
            subtitle: N.intl.format(N.t.LOYRxB, { helpCenterLink: m.A.getArticleURL(E.MVz.RECURRING_PROMOTION) }),
            actions: [],
            preview: (() => {
                if (!0 === k)
                    return (0, r.jsx)(p.A, {
                        subscriptionTier: A.pe.TIER_2,
                        fullWidth: !0,
                        onClick: () => {
                            d();
                        },
                        onSubscribeModalClose: (e) => {
                            if (e) return g.Ay.fetchActivePromotions();
                        },
                    });
            })(),
            transitionState: i,
            onClose: d,
            children:
                ((t = (0, u.N5)()),
                (n = (0, u.P6)()),
                k
                    ? (0, r.jsx)(D, { partnerIds: T })
                    : (0, r.jsxs)("div", {
                          className: P.kL,
                          children: [
                              (0, r.jsx)("div", {
                                  className: P.Ps,
                                  children: (0, r.jsx)(s.EYj, {
                                      variant: "text-md/medium",
                                      color: "text-subtle",
                                      children: N.intl.format(N.t["43kZKL"], { days: n }),
                                  }),
                              }),
                              (0, r.jsx)("div", { className: P.G9, children: (0, r.jsx)(j.P, { percentage: t }) }),
                              (0, r.jsx)("div", {
                                  className: P.kR,
                                  children: Object.entries(B)
                                      .sort((e, t) => {
                                          let [n] = e,
                                              [r] = t;
                                          return r.localeCompare(n);
                                      })
                                      .map((e) => {
                                          let [t, n] = e;
                                          return (0, r.jsx)(y, { promotionRecurrences: n }, t);
                                      }),
                              }),
                          ],
                      })),
        });
    },
    S = (e) => {
        let { analyticsLocations: t, partnerIds: l } = e;
        c.default.track(E.HAw.RECURRING_PROMOTION_MODAL_OPENED, { location_stack: t }),
            g.Ay.fetchActivePromotions(),
            (0, i.mMO)(async () => {
                let { Recurring3PModal: e } = await Promise.resolve().then(n.bind(n, 161319));
                return (t) => (0, r.jsx)(e, { ...t, partnerIds: l });
            });
    };
