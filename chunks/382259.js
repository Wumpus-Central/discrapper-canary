s.d(t, { w: () => T, u: () => S }), s(321073);
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
    h = s(954571),
    x = s(58703),
    C = s(975571),
    _ = s(927578),
    p = s(792656),
    g = s(264779),
    f = s(597758),
    R = s(35587),
    j = s(374200),
    v = s(593687);
let E = () =>
    (0, a.jsx)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "100%",
        height: "100%",
        viewBox: "0 0 6 6",
        fill: "none",
        overflow: "visible",
        children: (0, a.jsx)("ellipse", { cx: "3.4924", cy: "3", rx: "2.86154", ry: "3", fill: "#808BFF" }),
    });
var N = s(75662);
let A = (e) => {
    let { percentage: t } = e;
    return (0, a.jsxs)("div", {
        className: N.hr,
        children: [
            t > 0 &&
                t < 100 &&
                (0, a.jsx)(
                    () =>
                        (0, a.jsx)("div", {
                            className: N.ML,
                            style: { left: `calc(${t}% - 5px)` },
                            children: (0, a.jsx)(E, {}),
                        }),
                    {},
                ),
            (0, a.jsx)("div", { className: N.SX, style: { width: `${t}%` } }),
        ],
    });
};
var b = s(56225),
    y = s(294219),
    P = s(788868),
    D = s(652215),
    w = s(985018);
let I = (e) => {
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
                            b.wx,
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
                            className: N.K8,
                            onClick: () => {
                                n(!1), o([...d, ...t.slice(1)]);
                            },
                            children: (0, a.jsx)(i.E, {
                                variant: "text-sm/medium",
                                color: "text-subtle",
                                children: w.intl.string(w.t.rjjZxV),
                            }),
                        }),
                ],
            })
        );
    },
    O = (e) => e.partnerId?.toLowerCase() ?? null,
    T = (e) => {
        let t,
            s,
            { transitionState: r, onClose: l, partnerIds: c } = e,
            u = (0, y.G)(c),
            { promotionsLoaded: h, claimedOutboundPromotionCodeMap: E } = (0, R.y7)(),
            T = (0, o.yK)([j.A], () => j.A.outboundRecurringPromotions),
            S = (0, o.bG)([m.default], () => m.default.getCurrentUser()),
            M = !1 === _.Ay.isPremiumExactly(S, P.PremiumTypes.TIER_2),
            B = S?.isFractionalPremiumWithNoStandardSub(),
            L = null == S || M || B;
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
                                return null == s ? null : ((0, b.Cf)()[s] ?? null);
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
                            title: w.intl.formatToPlainString(l.title, l.titleParams ?? {}),
                            body: w.intl.formatToPlainString(l.body, l.bodyParams ?? {}),
                        };
                        r[t].push(i);
                    }),
                r
            );
        })({ promotions: T, codesByPromotion: E, partnerIds: u });
        return (0, a.jsx)(d.Modal, {
            title: w.intl.string(w.t["7ioAjs"]),
            subtitle: w.intl.format(w.t.LOYRxB, { helpCenterLink: C.A.getArticleURL(D.MVz.RECURRING_PROMOTION) }),
            actions: [],
            preview: (() => {
                if (!0 === L)
                    return (0, a.jsx)(p.A, {
                        subscriptionTier: P.pe.TIER_2,
                        fullWidth: !0,
                        onClick: () => {
                            l();
                        },
                        onSubscribeModalClose: (e) => {
                            if (e) return f.Ay.fetchActivePromotions();
                        },
                    });
            })(),
            transitionState: r,
            onClose: l,
            children:
                ((t = (0, x.N5)()),
                (s = (0, x.P6)()),
                L
                    ? (0, a.jsx)(v._, { partnerIds: u })
                    : (0, a.jsxs)("div", {
                          className: N.kL,
                          children: [
                              (0, a.jsx)("div", {
                                  className: N.Ps,
                                  children: (0, a.jsx)(i.E, {
                                      variant: "text-md/medium",
                                      color: "text-subtle",
                                      children: w.intl.format(w.t["43kZKL"], { days: s }),
                                  }),
                              }),
                              (0, a.jsx)("div", { className: N.G9, children: (0, a.jsx)(A, { percentage: t }) }),
                              (0, a.jsx)("div", {
                                  className: N.kR,
                                  children: Object.entries(k)
                                      .sort((e, t) => {
                                          let [s] = e,
                                              [a] = t;
                                          return a.localeCompare(s);
                                      })
                                      .map((e) => {
                                          let [t, s] = e;
                                          return (0, a.jsx)(I, { promotionRecurrences: s }, t);
                                      }),
                              }),
                          ],
                      })),
        });
    },
    S = (e) => {
        let { analyticsLocations: t, partnerIds: r } = e;
        h.default.track(D.HAw.RECURRING_PROMOTION_MODAL_OPENED, { location_stack: t }),
            f.Ay.fetchActivePromotions(),
            (0, c.openModalLazy)(async () => {
                let { Premium3PRewardsModalEntry: e } = await Promise.all([s.e("967"), s.e("91900")]).then(
                    s.bind(s, 92375),
                );
                return (t) => (0, a.jsx)(e, { ...t, partnerIds: r });
            });
    };
