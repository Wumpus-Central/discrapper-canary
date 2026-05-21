l.d(t, { w: () => b, u: () => L }), l(321073);
var i = l(627968),
    r = l(64700),
    a = l(939249),
    s = l(834730),
    n = l(289873),
    o = l(189213),
    d = l(17928),
    c = l(192308),
    u = l(793574),
    m = l(287809),
    h = l(174459),
    C = l(58703),
    _ = l(975571),
    p = l(428262),
    g = l(792656),
    E = l(264779),
    x = l(962644),
    f = l(35587),
    A = l(374200),
    R = l(593687);
let N = () =>
    (0, i.jsx)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "100%",
        height: "100%",
        viewBox: "0 0 6 6",
        fill: "none",
        overflow: "visible",
        children: (0, i.jsx)("ellipse", { cx: "3.4924", cy: "3", rx: "2.86154", ry: "3", fill: "#808BFF" }),
    });
var I = l(75662);
let S = (e) => {
    let { percentage: t } = e;
    return (0, i.jsxs)("div", {
        className: I.hr,
        children: [
            t > 0 &&
                t < 100 &&
                (0, i.jsx)(
                    () =>
                        (0, i.jsx)("div", {
                            className: I.ML,
                            style: { left: `calc(${t}% - 5px)` },
                            children: (0, i.jsx)(N, {}),
                        }),
                    {},
                ),
            (0, i.jsx)("div", { className: I.SX, style: { width: `${t}%` } }),
        ],
    });
};
var j = l(56225),
    v = l(294219),
    P = l(788868),
    D = l(652215),
    T = l(375708);
let O = (e) => {
        let { promotionRecurrences: t } = e,
            [l, n] = r.useState(t.length > 1),
            [o, d] = r.useState([]);
        return (
            r.useEffect(() => {
                d([t.sort((e, t) => (t.startDate > e.startDate ? 1 : -1))[0]]);
            }, [t]),
            (0, i.jsxs)("div", {
                children: [
                    o.map((e) =>
                        (0, i.jsx)(
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
                    l &&
                        (0, i.jsx)(a.D, {
                            className: I.K8,
                            onClick: () => {
                                n(!1), d([...o, ...t.slice(1)]);
                            },
                            children: (0, i.jsx)(s.E, {
                                variant: "text-sm/medium",
                                color: "text-subtle",
                                children: T.intl.string(T.t.rjjZxV),
                            }),
                        }),
                ],
            })
        );
    },
    y = (e) => e.partnerId?.toLowerCase() ?? null,
    b = (e) => {
        let t,
            l,
            { transitionState: r, onClose: a, partnerIds: c } = e,
            u = (0, v.G)(c),
            { promotionsLoaded: h, claimedOutboundPromotionCodeMap: N } = (0, f.y7)(),
            b = (0, d.yK)([A.A], () => A.A.outboundRecurringPromotions),
            L = (0, d.bG)([m.default], () => m.default.getCurrentUser()),
            w = !1 === p.Ay.isPremiumExactly(L, P.PremiumTypes.TIER_2),
            M = L?.isFractionalPremiumWithNoStandardSub(),
            B = null == L || w || M;
        if (!1 === h) return (0, i.jsx)(n.y, {});
        let U = ((e) => {
            let { promotions: t, codesByPromotion: l, partnerIds: i } = e,
                r = {};
            return (
                t
                    .filter((e) => !0 === (0, E.HB)({ promotionType: e.promotionType }))
                    .forEach((e) => {
                        let t = y(e),
                            a = ((e) => {
                                let { promotion: t } = e,
                                    l = y(t);
                                return null == l ? null : ((0, j.Cf)()[l] ?? null);
                            })({ promotion: e });
                        if (null == t || null == a || (null != i && !i.includes(t))) return;
                        t in r || (r[t] = []);
                        let s = {
                            id: e.id,
                            partnerId: t,
                            startDate: e.startDate,
                            endDate: e.endDate,
                            code: l[e.id] ?? null,
                            ...a,
                            title: T.intl.formatToPlainString(a.title, a.titleParams ?? {}),
                            outboundTitle: e.outboundTitle,
                            body: T.intl.formatToPlainString(a.body, a.bodyParams ?? {}),
                        };
                        r[t].push(s);
                    }),
                r
            );
        })({ promotions: b, codesByPromotion: N, partnerIds: u });
        return (0, i.jsx)(o.Modal, {
            title: T.intl.string(T.t["7ioAjs"]),
            subtitle: T.intl.format(T.t.LOYRxB, { helpCenterLink: _.A.getArticleURL(D.MVz.RECURRING_PROMOTION) }),
            actions: [],
            preview: (() => {
                if (!0 === B)
                    return (0, i.jsx)(g.A, {
                        subscriptionTier: P.pe.TIER_2,
                        fullWidth: !0,
                        onClick: () => {
                            a();
                        },
                        onSubscribeModalClose: (e) => {
                            if (e) return x.Ay.fetchActivePromotions();
                        },
                    });
            })(),
            transitionState: r,
            onClose: a,
            children:
                ((t = (0, C.N5)()),
                (l = (0, C.P6)()),
                B
                    ? (0, i.jsx)(R._, { partnerIds: u })
                    : (0, i.jsxs)("div", {
                          className: I.kL,
                          children: [
                              (0, i.jsx)("div", {
                                  className: I.Ps,
                                  children: (0, i.jsx)(s.E, {
                                      variant: "text-md/medium",
                                      color: "text-subtle",
                                      children: T.intl.format(T.t["43kZKL"], { days: l }),
                                  }),
                              }),
                              (0, i.jsx)("div", { className: I.G9, children: (0, i.jsx)(S, { percentage: t }) }),
                              (0, i.jsx)("div", {
                                  className: I.kR,
                                  children: Object.entries(U)
                                      .sort((e, t) => {
                                          let [l] = e,
                                              [i] = t;
                                          return i.localeCompare(l);
                                      })
                                      .map((e) => {
                                          let [t, l] = e;
                                          return (0, i.jsx)(O, { promotionRecurrences: l }, t);
                                      }),
                              }),
                          ],
                      })),
        });
    },
    L = (e) => {
        let { analyticsLocations: t, partnerIds: r } = e;
        h.default.track(D.HAw.RECURRING_PROMOTION_MODAL_OPENED, { location_stack: t }),
            x.Ay.fetchActivePromotions(),
            (0, c.openModalLazy)(async () => {
                let { Premium3PRewardsModalEntry: e } = await Promise.all([l.e("967"), l.e("91900")]).then(
                    l.bind(l, 92375),
                );
                return (t) => (0, i.jsx)(e, { ...t, partnerIds: r });
            });
    };
