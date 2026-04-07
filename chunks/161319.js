r.d(t, { Recurring3PModal: () => T, u: () => w }), r(321073);
var n = r(627968),
    a = r(64700),
    i = r(158954),
    s = r(311907),
    l = r(397927),
    d = r(793574),
    o = r(287809),
    c = r(954571),
    u = r(405269),
    m = r(975571),
    _ = r(927578),
    p = r(398523),
    f = r(881373),
    b = r(792656),
    h = r(264779),
    g = r(597758),
    x = r(35587),
    C = r(412260),
    A = r(852218),
    R = r(729640),
    v = r(116011),
    E = r(788868),
    j = r(652215),
    N = r(985018),
    y = r(276478);
let I = (e) => {
        let { partnerIds: t } = e;
        return (
            null != t
                ? Object.entries(v.oL).filter((e) => {
                      let [r] = e;
                      return t.includes(r);
                  })
                : Object.entries(v.oL)
        ).map((e) => {
            let [t, r] = e;
            return (0, n.jsx)(
                "div",
                {
                    className: y.lA,
                    children: (0, n.jsxs)("div", {
                        className: y.LV,
                        children: [
                            (0, n.jsxs)("div", {
                                className: y.JN,
                                children: [
                                    (0, n.jsx)("div", {
                                        className: y.MC,
                                        children: (0, n.jsx)(i.XAi, { size: "refresh_sm" }),
                                    }),
                                    (0, n.jsxs)("div", {
                                        className: y.yO,
                                        children: [
                                            (0, n.jsx)(i.DZT, {
                                                variant: "heading-lg/semibold",
                                                color: "text-strong",
                                                children: N.intl.formatToPlainString(r.title, r.titleParams ?? {}),
                                            }),
                                            (0, n.jsx)(i.DZT, {
                                                variant: "heading-sm/medium",
                                                color: "text-subtle",
                                                children: N.intl.formatToPlainString(r.body, r.bodyParams ?? {}),
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                            (0, n.jsx)("div", {
                                className: y.R4,
                                children: (0, n.jsx)(l._V3, {
                                    src: r.asset,
                                    className: y.Ys,
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
            [r, s] = a.useState(t.length > 1),
            [l, o] = a.useState([]);
        return (
            a.useEffect(() => {
                o([t.sort((e, t) => (t.startDate > e.startDate ? 1 : -1))[0]]);
            }, [t]),
            (0, n.jsxs)("div", {
                children: [
                    l.map((e) =>
                        (0, n.jsx)(
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
                    r &&
                        (0, n.jsx)(i.DUT, {
                            className: y.K8,
                            onClick: () => {
                                s(!1), o([...l, ...t.slice(1)]);
                            },
                            children: (0, n.jsx)(i.EYj, {
                                variant: "text-sm/medium",
                                color: "text-subtle",
                                children: N.intl.string(N.t.rjjZxV),
                            }),
                        }),
                ],
            })
        );
    },
    S = (e) =>
        e.promotionType === A.pt.THIRD_PARTY_OUTBOUND_RECURRING
            ? (e.partnerId?.toLowerCase() ?? null)
            : e.outboundTitle.toLowerCase(),
    T = (e) => {
        let t,
            r,
            { transitionState: l, onClose: d, partnerIds: c } = e,
            T = ((e) => {
                let { enabled: t } = p.A.useConfig({ location: "Recurring3PModal" }),
                    r = (0, f.YS)({ location: "Recurring3PModal" }).functionalityEnabled;
                return a.useMemo(() => {
                    let n = [];
                    return t && n.push(A.KS, A.Cs), r && n.push(A.XY), null != e ? e.filter((e) => n.includes(e)) : n;
                }, [t, r, e]);
            })(c),
            { promotionsLoaded: w, claimedOutboundPromotionCodeMap: O } = (0, x.y7)(),
            M = (0, s.yK)([C.A], () => C.A.outboundRecurringPromotions),
            D = (0, s.bG)([o.default], () => o.default.getCurrentUser()),
            U = !1 === _.Ay.isPremiumExactly(D, E.PremiumTypes.TIER_2),
            L = D?.isFractionalPremiumWithNoStandardSub(),
            B = null == D || U || L;
        if (!1 === w) return (0, n.jsx)(i.y$y, {});
        let k = ((e) => {
            let { promotions: t, codesByPromotion: r, partnerIds: n } = e,
                a = {};
            return (
                t
                    .filter(
                        (e) => !0 === (0, h.HB)({ promotionPartner: e.outboundTitle, promotionType: e.promotionType }),
                    )
                    .forEach((e) => {
                        let t = S(e),
                            i = ((e) => {
                                let { promotion: t } = e,
                                    r = S(t);
                                return null == r ? null : (v.oL[r] ?? null);
                            })({ promotion: e });
                        if (null == t || null == i || (null != n && !n.includes(t))) return;
                        t in a || (a[t] = []);
                        let s = {
                            id: e.id,
                            partnerId: t,
                            startDate: e.startDate,
                            endDate: e.endDate,
                            code: r[e.id] ?? null,
                            ...i,
                            title: N.intl.formatToPlainString(i.title, i.titleParams ?? {}),
                            body: N.intl.formatToPlainString(i.body, i.bodyParams ?? {}),
                        };
                        a[t].push(s);
                    }),
                a
            );
        })({ promotions: M, codesByPromotion: O, partnerIds: T });
        return (0, n.jsx)(i.Modal, {
            title: N.intl.string(N.t["7ioAjs"]),
            subtitle: N.intl.format(N.t.LOYRxB, { helpCenterLink: m.A.getArticleURL(j.MVz.RECURRING_PROMOTION) }),
            actions: [],
            preview: (() => {
                if (!0 === B)
                    return (0, n.jsx)(b.A, {
                        subscriptionTier: E.pe.TIER_2,
                        fullWidth: !0,
                        onClick: () => {
                            d();
                        },
                        onSubscribeModalClose: (e) => {
                            if (e) return g.Ay.fetchActivePromotions();
                        },
                    });
            })(),
            transitionState: l,
            onClose: d,
            children:
                ((t = (0, u.N5)()),
                (r = (0, u.P6)()),
                B
                    ? (0, n.jsx)(I, { partnerIds: T })
                    : (0, n.jsxs)("div", {
                          className: y.kL,
                          children: [
                              (0, n.jsx)("div", {
                                  className: y.Ps,
                                  children: (0, n.jsx)(i.EYj, {
                                      variant: "text-md/medium",
                                      color: "text-subtle",
                                      children: N.intl.format(N.t["43kZKL"], { days: r }),
                                  }),
                              }),
                              (0, n.jsx)("div", { className: y.G9, children: (0, n.jsx)(R.P, { percentage: t }) }),
                              (0, n.jsx)("div", {
                                  className: y.kR,
                                  children: Object.entries(k)
                                      .sort((e, t) => {
                                          let [r] = e,
                                              [n] = t;
                                          return n.localeCompare(r);
                                      })
                                      .map((e) => {
                                          let [t, r] = e;
                                          return (0, n.jsx)(P, { promotionRecurrences: r }, t);
                                      }),
                              }),
                          ],
                      })),
        });
    },
    w = (e) => {
        let { analyticsLocations: t, partnerIds: a } = e;
        c.default.track(j.HAw.RECURRING_PROMOTION_MODAL_OPENED, { location_stack: t }),
            g.Ay.fetchActivePromotions(),
            (0, l.mMO)(async () => {
                let { Recurring3PModal: e } = await Promise.resolve().then(r.bind(r, 161319));
                return (t) => (0, n.jsx)(e, { ...t, partnerIds: a });
            });
    };
