n.d(t, { Recurring3PModal: () => w, u: () => T }), n(321073);
var s = n(627968),
    a = n(64700),
    l = n(158954),
    r = n(311907),
    i = n(397927),
    d = n(793574),
    o = n(287809),
    c = n(954571),
    u = n(405269),
    h = n(975571),
    m = n(927578),
    x = n(398523),
    C = n(881373),
    _ = n(792656),
    p = n(264779),
    g = n(597758),
    f = n(35587),
    R = n(412260),
    j = n(852218),
    b = n(729640),
    v = n(116011),
    N = n(788868),
    E = n(652215),
    A = n(985018),
    D = n(75662);
let I = (e) => {
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
            return (0, s.jsx)(
                "div",
                {
                    className: D.lA,
                    children: (0, s.jsxs)("div", {
                        className: D.LV,
                        children: [
                            (0, s.jsxs)("div", {
                                className: D.JN,
                                children: [
                                    (0, s.jsx)("div", {
                                        className: D.MC,
                                        children: (0, s.jsx)(l.XAi, { size: "refresh_sm" }),
                                    }),
                                    (0, s.jsxs)("div", {
                                        className: D.yO,
                                        children: [
                                            (0, s.jsx)(l.DZT, {
                                                variant: "heading-lg/semibold",
                                                color: "text-strong",
                                                children: A.intl.formatToPlainString(n.title, n.titleParams ?? {}),
                                            }),
                                            (0, s.jsx)(l.DZT, {
                                                variant: "heading-sm/medium",
                                                color: "text-subtle",
                                                children: A.intl.formatToPlainString(n.body, n.bodyParams ?? {}),
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                            (0, s.jsx)("div", {
                                className: D.R4,
                                children: (0, s.jsx)(i._V3, {
                                    src: n.asset,
                                    className: D.Ys,
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
    P = (e) => {
        let { promotionRecurrences: t } = e,
            [n, r] = a.useState(t.length > 1),
            [i, o] = a.useState([]);
        return (
            a.useEffect(() => {
                o([t.sort((e, t) => (t.startDate > e.startDate ? 1 : -1))[0]]);
            }, [t]),
            (0, s.jsxs)("div", {
                children: [
                    i.map((e) =>
                        (0, s.jsx)(
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
                        (0, s.jsx)(l.DUT, {
                            className: D.K8,
                            onClick: () => {
                                r(!1), o([...i, ...t.slice(1)]);
                            },
                            children: (0, s.jsx)(l.EYj, {
                                variant: "text-sm/medium",
                                color: "text-subtle",
                                children: A.intl.string(A.t.rjjZxV),
                            }),
                        }),
                ],
            })
        );
    },
    y = (e) => e.partnerId?.toLowerCase() ?? null,
    w = (e) => {
        let t,
            n,
            { transitionState: i, onClose: d, partnerIds: c } = e,
            w = ((e) => {
                let { enabled: t } = x.A.useConfig({ location: "Recurring3PModal" }),
                    n = (0, C.YS)({ location: "Recurring3PModal" }).functionalityEnabled;
                return a.useMemo(() => {
                    let s = [];
                    return t && s.push(j.KS, j.Cs), n && s.push(j.XY), null != e ? e.filter((e) => s.includes(e)) : s;
                }, [t, n, e]);
            })(c),
            { promotionsLoaded: T, claimedOutboundPromotionCodeMap: S } = (0, f.y7)(),
            O = (0, r.yK)([R.A], () => R.A.outboundRecurringPromotions),
            M = (0, r.bG)([o.default], () => o.default.getCurrentUser()),
            L = !1 === m.Ay.isPremiumExactly(M, N.PremiumTypes.TIER_2),
            U = M?.isFractionalPremiumWithNoStandardSub(),
            k = null == M || L || U;
        if (!1 === T) return (0, s.jsx)(l.y$y, {});
        let B = ((e) => {
            let { promotions: t, codesByPromotion: n, partnerIds: s } = e,
                a = {};
            return (
                t
                    .filter((e) => !0 === (0, p.HB)({ promotionType: e.promotionType }))
                    .forEach((e) => {
                        let t = y(e),
                            l = ((e) => {
                                let { promotion: t } = e,
                                    n = y(t);
                                return null == n ? null : (v.oL[n] ?? null);
                            })({ promotion: e });
                        if (null == t || null == l || (null != s && !s.includes(t))) return;
                        t in a || (a[t] = []);
                        let r = {
                            id: e.id,
                            partnerId: t,
                            startDate: e.startDate,
                            endDate: e.endDate,
                            code: n[e.id] ?? null,
                            ...l,
                            title: A.intl.formatToPlainString(l.title, l.titleParams ?? {}),
                            body: A.intl.formatToPlainString(l.body, l.bodyParams ?? {}),
                        };
                        a[t].push(r);
                    }),
                a
            );
        })({ promotions: O, codesByPromotion: S, partnerIds: w });
        return (0, s.jsx)(l.Modal, {
            title: A.intl.string(A.t["7ioAjs"]),
            subtitle: A.intl.format(A.t.LOYRxB, { helpCenterLink: h.A.getArticleURL(E.MVz.RECURRING_PROMOTION) }),
            actions: [],
            preview: (() => {
                if (!0 === k)
                    return (0, s.jsx)(_.A, {
                        subscriptionTier: N.pe.TIER_2,
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
                    ? (0, s.jsx)(I, { partnerIds: w })
                    : (0, s.jsxs)("div", {
                          className: D.kL,
                          children: [
                              (0, s.jsx)("div", {
                                  className: D.Ps,
                                  children: (0, s.jsx)(l.EYj, {
                                      variant: "text-md/medium",
                                      color: "text-subtle",
                                      children: A.intl.format(A.t["43kZKL"], { days: n }),
                                  }),
                              }),
                              (0, s.jsx)("div", { className: D.G9, children: (0, s.jsx)(b.P, { percentage: t }) }),
                              (0, s.jsx)("div", {
                                  className: D.kR,
                                  children: Object.entries(B)
                                      .sort((e, t) => {
                                          let [n] = e,
                                              [s] = t;
                                          return s.localeCompare(n);
                                      })
                                      .map((e) => {
                                          let [t, n] = e;
                                          return (0, s.jsx)(P, { promotionRecurrences: n }, t);
                                      }),
                              }),
                          ],
                      })),
        });
    },
    T = (e) => {
        let { analyticsLocations: t, partnerIds: a } = e;
        c.default.track(E.HAw.RECURRING_PROMOTION_MODAL_OPENED, { location_stack: t }),
            g.Ay.fetchActivePromotions(),
            (0, i.mMO)(async () => {
                let { Recurring3PModal: e } = await Promise.resolve().then(n.bind(n, 161319));
                return (t) => (0, s.jsx)(e, { ...t, partnerIds: a });
            });
    };
