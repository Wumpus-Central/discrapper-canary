r.d(t, { Recurring3PModal: () => y, u: () => P }), r(321073);
var a = r(627968),
    n = r(64700),
    s = r(158954),
    i = r(311907),
    l = r(397927),
    o = r(287809),
    d = r(954571),
    c = r(405269),
    u = r(975571),
    m = r(927578),
    _ = r(792656),
    p = r(264779),
    f = r(597758),
    h = r(35587),
    b = r(412260),
    x = r(852218),
    g = r(729640),
    C = r(116011),
    A = r(788868),
    R = r(652215),
    v = r(985018),
    j = r(276478);
let N = () =>
        Object.entries(C.oL).map((e) => {
            let [t, r] = e;
            return (0, a.jsx)(
                "div",
                {
                    className: j.lA,
                    children: (0, a.jsxs)("div", {
                        className: j.LV,
                        children: [
                            (0, a.jsxs)("div", {
                                className: j.JN,
                                children: [
                                    (0, a.jsx)("div", {
                                        className: j.MC,
                                        children: (0, a.jsx)(s.XAi, { size: "refresh_sm" }),
                                    }),
                                    (0, a.jsxs)("div", {
                                        className: j.yO,
                                        children: [
                                            (0, a.jsx)(s.DZT, {
                                                variant: "heading-lg/semibold",
                                                color: "text-strong",
                                                children: v.intl.string(r.title),
                                            }),
                                            (0, a.jsx)(s.DZT, {
                                                variant: "heading-sm/medium",
                                                color: "text-subtle",
                                                children: v.intl.string(r.body),
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                            (0, a.jsx)("div", {
                                className: j.R4,
                                children: (0, a.jsx)(l._V3, {
                                    src: r.asset,
                                    className: j.Ys,
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
        }),
    E = (e) => {
        let { promotionRecurrences: t } = e,
            [r, i] = n.useState(t.length > 1),
            [l, o] = n.useState([]);
        return (
            n.useEffect(() => {
                o([t.sort((e, t) => (t.startDate > e.startDate ? 1 : -1))[0]]);
            }, [t]),
            (0, a.jsxs)("div", {
                children: [
                    l.map((e) => (0, a.jsx)(C.wx, { recurrence: e, showPartnerLogo: !0, showPartnerImage: !0 }, e.id)),
                    r &&
                        (0, a.jsx)(s.DUT, {
                            className: j.K8,
                            onClick: () => {
                                i(!1), o([...l, ...t.slice(1)]);
                            },
                            children: (0, a.jsx)(s.EYj, {
                                variant: "text-sm/medium",
                                color: "text-subtle",
                                children: v.intl.string(v.t.rjjZxV),
                            }),
                        }),
                ],
            })
        );
    },
    I = (e) =>
        e.promotionType === x.pt.THIRD_PARTY_OUTBOUND_RECURRING
            ? (e.partnerId?.toLowerCase() ?? null)
            : e.outboundTitle.toLowerCase(),
    y = (e) => {
        let t,
            r,
            { transitionState: n, onClose: l } = e,
            { promotionsLoaded: d, claimedOutboundPromotionCodeMap: x } = (0, h.y7)(),
            y = (0, i.yK)([b.A], () => b.A.outboundRecurringPromotions),
            P = (0, i.bG)([o.default], () => o.default.getCurrentUser()),
            T = !1 === m.Ay.isPremiumExactly(P, A.PremiumTypes.TIER_2),
            S = P?.isFractionalPremiumWithNoStandardSub(),
            w = null == P || T || S;
        if (!1 === d) return (0, a.jsx)(s.y$y, {});
        let O = ((e) => {
            let { promotions: t, codesByPromotion: r } = e,
                a = {};
            return (
                t
                    .filter(
                        (e) => !0 === (0, p.HB)({ promotionPartner: e.outboundTitle, promotionType: e.promotionType }),
                    )
                    .forEach((e) => {
                        let t = I(e),
                            n = ((e) => {
                                let { promotion: t } = e,
                                    r = I(t);
                                return null == r ? null : (C.oL[r] ?? null);
                            })({ promotion: e });
                        if (null == t || null == n) return;
                        t in a || (a[t] = []);
                        let s = {
                            id: e.id,
                            partnerId: t,
                            startDate: e.startDate,
                            endDate: e.endDate,
                            code: r[e.id] ?? null,
                            ...n,
                        };
                        a[t].push(s);
                    }),
                a
            );
        })({ promotions: y, codesByPromotion: x });
        return (0, a.jsx)(s.Modal, {
            title: v.intl.string(v.t["7ioAjs"]),
            subtitle: v.intl.format(v.t.LOYRxB, { helpCenterLink: u.A.getArticleURL(R.MVz.RECURRING_PROMOTION) }),
            actions: [],
            preview: (() => {
                if (!0 === w)
                    return (0, a.jsx)(_.A, {
                        subscriptionTier: A.pe.TIER_2,
                        fullWidth: !0,
                        onClick: () => {
                            l();
                        },
                        onSubscribeModalClose: (e) => {
                            if (e) return f.Ay.fetchActivePromotions();
                        },
                    });
            })(),
            transitionState: n,
            onClose: l,
            children:
                ((t = (0, c.N5)()),
                (r = (0, c.P6)()),
                w
                    ? (0, a.jsx)(N, {})
                    : (0, a.jsxs)("div", {
                          className: j.kL,
                          children: [
                              (0, a.jsx)("div", {
                                  className: j.Ps,
                                  children: (0, a.jsx)(s.EYj, {
                                      variant: "text-md/medium",
                                      color: "text-subtle",
                                      children: v.intl.format(v.t["43kZKL"], { days: r }),
                                  }),
                              }),
                              (0, a.jsx)("div", { className: j.G9, children: (0, a.jsx)(g.P, { percentage: t }) }),
                              (0, a.jsx)("div", {
                                  className: j.kR,
                                  children: Object.entries(O)
                                      .sort((e, t) => {
                                          let [r] = e,
                                              [a] = t;
                                          return a.localeCompare(r);
                                      })
                                      .map((e) => {
                                          let [t, r] = e;
                                          return (0, a.jsx)(E, { promotionRecurrences: r }, t);
                                      }),
                              }),
                          ],
                      })),
        });
    },
    P = (e) => {
        let { analyticsLocations: t } = e;
        d.default.track(R.HAw.RECURRING_PROMOTION_MODAL_OPENED, { location_stack: t }),
            f.Ay.fetchActivePromotions(),
            (0, l.mMO)(async () => {
                let { Recurring3PModal: e } = await Promise.resolve().then(r.bind(r, 161319));
                return (t) => (0, a.jsx)(e, { ...t });
            });
    };
