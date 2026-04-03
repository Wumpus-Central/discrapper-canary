r.d(t, { Recurring3PModal: () => S, u: () => T }), r(321073);
var n = r(627968),
    a = r(64700),
    i = r(158954),
    s = r(311907),
    l = r(397927),
    d = r(287809),
    o = r(954571),
    c = r(405269),
    u = r(975571),
    m = r(927578),
    _ = r(398523),
    p = r(881373),
    f = r(792656),
    h = r(264779),
    b = r(597758),
    g = r(35587),
    x = r(412260),
    C = r(852218),
    A = r(729640),
    R = r(116011),
    v = r(788868),
    E = r(652215),
    j = r(985018),
    N = r(276478);
let y = (e) => {
        let { partnerIds: t } = e;
        return (
            null != t
                ? Object.entries(R.oL).filter((e) => {
                      let [r] = e;
                      return t.includes(r);
                  })
                : Object.entries(R.oL)
        ).map((e) => {
            let [t, r] = e;
            return (0, n.jsx)(
                "div",
                {
                    className: N.lA,
                    children: (0, n.jsxs)("div", {
                        className: N.LV,
                        children: [
                            (0, n.jsxs)("div", {
                                className: N.JN,
                                children: [
                                    (0, n.jsx)("div", {
                                        className: N.MC,
                                        children: (0, n.jsx)(i.XAi, { size: "refresh_sm" }),
                                    }),
                                    (0, n.jsxs)("div", {
                                        className: N.yO,
                                        children: [
                                            (0, n.jsx)(i.DZT, {
                                                variant: "heading-lg/semibold",
                                                color: "text-strong",
                                                children: j.intl.formatToPlainString(r.title, r.titleParams ?? {}),
                                            }),
                                            (0, n.jsx)(i.DZT, {
                                                variant: "heading-sm/medium",
                                                color: "text-subtle",
                                                children: j.intl.formatToPlainString(r.body, r.bodyParams ?? {}),
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                            (0, n.jsx)("div", {
                                className: N.R4,
                                children: (0, n.jsx)(l._V3, {
                                    src: r.asset,
                                    className: N.Ys,
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
    I = (e) => {
        let { promotionRecurrences: t } = e,
            [r, s] = a.useState(t.length > 1),
            [l, d] = a.useState([]);
        return (
            a.useEffect(() => {
                d([t.sort((e, t) => (t.startDate > e.startDate ? 1 : -1))[0]]);
            }, [t]),
            (0, n.jsxs)("div", {
                children: [
                    l.map((e) => (0, n.jsx)(R.wx, { recurrence: e, showPartnerLogo: !0, showPartnerImage: !0 }, e.id)),
                    r &&
                        (0, n.jsx)(i.DUT, {
                            className: N.K8,
                            onClick: () => {
                                s(!1), d([...l, ...t.slice(1)]);
                            },
                            children: (0, n.jsx)(i.EYj, {
                                variant: "text-sm/medium",
                                color: "text-subtle",
                                children: j.intl.string(j.t.rjjZxV),
                            }),
                        }),
                ],
            })
        );
    },
    P = (e) =>
        e.promotionType === C.pt.THIRD_PARTY_OUTBOUND_RECURRING
            ? (e.partnerId?.toLowerCase() ?? null)
            : e.outboundTitle.toLowerCase(),
    S = (e) => {
        let t,
            r,
            { transitionState: l, onClose: o, partnerIds: S } = e,
            T = ((e) => {
                let { enabled: t } = _.A.useConfig({ location: "Recurring3PModal" }),
                    r = (0, p.YS)({ location: "Recurring3PModal" }).functionalityEnabled;
                return a.useMemo(() => {
                    let n = [];
                    return t && n.push(C.KS, C.Cs), r && n.push(C.XY), null != e ? e.filter((e) => n.includes(e)) : n;
                }, [t, r, e]);
            })(S),
            { promotionsLoaded: w, claimedOutboundPromotionCodeMap: O } = (0, g.y7)(),
            D = (0, s.yK)([x.A], () => x.A.outboundRecurringPromotions),
            M = (0, s.bG)([d.default], () => d.default.getCurrentUser()),
            U = !1 === m.Ay.isPremiumExactly(M, v.PremiumTypes.TIER_2),
            L = M?.isFractionalPremiumWithNoStandardSub(),
            B = null == M || U || L;
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
                        let t = P(e),
                            i = ((e) => {
                                let { promotion: t } = e,
                                    r = P(t);
                                return null == r ? null : (R.oL[r] ?? null);
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
                            title: j.intl.formatToPlainString(i.title, i.titleParams ?? {}),
                            body: j.intl.formatToPlainString(i.body, i.bodyParams ?? {}),
                        };
                        a[t].push(s);
                    }),
                a
            );
        })({ promotions: D, codesByPromotion: O, partnerIds: T });
        return (0, n.jsx)(i.Modal, {
            title: j.intl.string(j.t["7ioAjs"]),
            subtitle: j.intl.format(j.t.LOYRxB, { helpCenterLink: u.A.getArticleURL(E.MVz.RECURRING_PROMOTION) }),
            actions: [],
            preview: (() => {
                if (!0 === B)
                    return (0, n.jsx)(f.A, {
                        subscriptionTier: v.pe.TIER_2,
                        fullWidth: !0,
                        onClick: () => {
                            o();
                        },
                        onSubscribeModalClose: (e) => {
                            if (e) return b.Ay.fetchActivePromotions();
                        },
                    });
            })(),
            transitionState: l,
            onClose: o,
            children:
                ((t = (0, c.N5)()),
                (r = (0, c.P6)()),
                B
                    ? (0, n.jsx)(y, { partnerIds: T })
                    : (0, n.jsxs)("div", {
                          className: N.kL,
                          children: [
                              (0, n.jsx)("div", {
                                  className: N.Ps,
                                  children: (0, n.jsx)(i.EYj, {
                                      variant: "text-md/medium",
                                      color: "text-subtle",
                                      children: j.intl.format(j.t["43kZKL"], { days: r }),
                                  }),
                              }),
                              (0, n.jsx)("div", { className: N.G9, children: (0, n.jsx)(A.P, { percentage: t }) }),
                              (0, n.jsx)("div", {
                                  className: N.kR,
                                  children: Object.entries(k)
                                      .sort((e, t) => {
                                          let [r] = e,
                                              [n] = t;
                                          return n.localeCompare(r);
                                      })
                                      .map((e) => {
                                          let [t, r] = e;
                                          return (0, n.jsx)(I, { promotionRecurrences: r }, t);
                                      }),
                              }),
                          ],
                      })),
        });
    },
    T = (e) => {
        let { analyticsLocations: t, partnerIds: a } = e;
        o.default.track(E.HAw.RECURRING_PROMOTION_MODAL_OPENED, { location_stack: t }),
            b.Ay.fetchActivePromotions(),
            (0, l.mMO)(async () => {
                let { Recurring3PModal: e } = await Promise.resolve().then(r.bind(r, 161319));
                return (t) => (0, n.jsx)(e, { ...t, partnerIds: a });
            });
    };
