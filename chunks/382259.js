s.d(t, { w: () => S, u: () => T }), s(321073);
var a = s(627968),
    r = s(64700),
    l = s(939249),
    i = s(834730),
    n = s(289873),
    d = s(189213),
    o = s(17928),
    c = s(192308),
    u = s(793574),
    m = s(287809),
    h = s(174459),
    x = s(58703),
    C = s(975571),
    _ = s(927578),
    p = s(792656),
    g = s(264779),
    R = s(962644),
    f = s(35587),
    E = s(374200),
    j = s(593687);
let N = () =>
    (0, a.jsx)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "100%",
        height: "100%",
        viewBox: "0 0 6 6",
        fill: "none",
        overflow: "visible",
        children: (0, a.jsx)("ellipse", { cx: "3.4924", cy: "3", rx: "2.86154", ry: "3", fill: "#808BFF" }),
    });
var v = s(75662);
let A = (e) => {
    let { percentage: t } = e;
    return (0, a.jsxs)("div", {
        className: v.hr,
        children: [
            t > 0 &&
                t < 100 &&
                (0, a.jsx)(
                    () =>
                        (0, a.jsx)("div", {
                            className: v.ML,
                            style: { left: `calc(${t}% - 5px)` },
                            children: (0, a.jsx)(N, {}),
                        }),
                    {},
                ),
            (0, a.jsx)("div", { className: v.SX, style: { width: `${t}%` } }),
        ],
    });
};
var P = s(56225),
    b = s(294219),
    D = s(788868),
    I = s(652215),
    y = s(375708);
let w = (e) => {
        let { promotionRecurrences: t } = e,
            [s, n] = r.useState(t.length > 1),
            [d, o] = r.useState([]);
        return (
            r.useEffect(() => {
                o([t.sort((e, t) => (t.startDate > e.startDate ? 1 : -1))[0]]);
            }, [t]),
            (0, a.jsxs)("div", {
                children: [
                    d.map((e) =>
                        (0, a.jsx)(
                            P.wx,
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
                        (0, a.jsx)(l.D, {
                            className: v.K8,
                            onClick: () => {
                                n(!1), o([...d, ...t.slice(1)]);
                            },
                            children: (0, a.jsx)(i.E, {
                                variant: "text-sm/medium",
                                color: "text-subtle",
                                children: y.intl.string(y.t.rjjZxV),
                            }),
                        }),
                ],
            })
        );
    },
    O = (e) => e.partnerId?.toLowerCase() ?? null,
    S = (e) => {
        let t,
            s,
            { transitionState: r, onClose: l, partnerIds: c } = e,
            u = (0, b.G)(c),
            { promotionsLoaded: h, claimedOutboundPromotionCodeMap: N } = (0, f.y7)(),
            S = (0, o.yK)([E.A], () => E.A.outboundRecurringPromotions),
            T = (0, o.bG)([m.default], () => m.default.getCurrentUser()),
            M = !1 === _.Ay.isPremiumExactly(T, D.PremiumTypes.TIER_2),
            L = T?.isFractionalPremiumWithNoStandardSub(),
            B = null == T || M || L;
        if (!1 === h) return (0, a.jsx)(n.y, {});
        let k = ((e) => {
            let { promotions: t, codesByPromotion: s, partnerIds: a } = e,
                r = {};
            return (
                t
                    .filter((e) => !0 === (0, g.HB)({ promotionType: e.promotionType }))
                    .forEach((e) => {
                        let t = O(e),
                            l = ((e) => {
                                let { promotion: t } = e,
                                    s = O(t);
                                return null == s ? null : ((0, P.Cf)()[s] ?? null);
                            })({ promotion: e });
                        if (null == t || null == l || (null != a && !a.includes(t))) return;
                        t in r || (r[t] = []);
                        let i = {
                            id: e.id,
                            partnerId: t,
                            startDate: e.startDate,
                            endDate: e.endDate,
                            code: s[e.id] ?? null,
                            ...l,
                            title: y.intl.formatToPlainString(l.title, l.titleParams ?? {}),
                            body: y.intl.formatToPlainString(l.body, l.bodyParams ?? {}),
                        };
                        r[t].push(i);
                    }),
                r
            );
        })({ promotions: S, codesByPromotion: N, partnerIds: u });
        return (0, a.jsx)(d.Modal, {
            title: y.intl.string(y.t["7ioAjs"]),
            subtitle: y.intl.format(y.t.LOYRxB, { helpCenterLink: C.A.getArticleURL(I.MVz.RECURRING_PROMOTION) }),
            actions: [],
            preview: (() => {
                if (!0 === B)
                    return (0, a.jsx)(p.A, {
                        subscriptionTier: D.pe.TIER_2,
                        fullWidth: !0,
                        onClick: () => {
                            l();
                        },
                        onSubscribeModalClose: (e) => {
                            if (e) return R.Ay.fetchActivePromotions();
                        },
                    });
            })(),
            transitionState: r,
            onClose: l,
            children:
                ((t = (0, x.N5)()),
                (s = (0, x.P6)()),
                B
                    ? (0, a.jsx)(j._, { partnerIds: u })
                    : (0, a.jsxs)("div", {
                          className: v.kL,
                          children: [
                              (0, a.jsx)("div", {
                                  className: v.Ps,
                                  children: (0, a.jsx)(i.E, {
                                      variant: "text-md/medium",
                                      color: "text-subtle",
                                      children: y.intl.format(y.t["43kZKL"], { days: s }),
                                  }),
                              }),
                              (0, a.jsx)("div", { className: v.G9, children: (0, a.jsx)(A, { percentage: t }) }),
                              (0, a.jsx)("div", {
                                  className: v.kR,
                                  children: Object.entries(k)
                                      .sort((e, t) => {
                                          let [s] = e,
                                              [a] = t;
                                          return a.localeCompare(s);
                                      })
                                      .map((e) => {
                                          let [t, s] = e;
                                          return (0, a.jsx)(w, { promotionRecurrences: s }, t);
                                      }),
                              }),
                          ],
                      })),
        });
    },
    T = (e) => {
        let { analyticsLocations: t, partnerIds: r } = e;
        h.default.track(I.HAw.RECURRING_PROMOTION_MODAL_OPENED, { location_stack: t }),
            R.Ay.fetchActivePromotions(),
            (0, c.openModalLazy)(async () => {
                let { Premium3PRewardsModalEntry: e } = await Promise.all([s.e("967"), s.e("91900")]).then(
                    s.bind(s, 92375),
                );
                return (t) => (0, a.jsx)(e, { ...t, partnerIds: r });
            });
    };
