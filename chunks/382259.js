"use strict";
n.d(t, { w: () => M, u: () => P }), n(321073);
var i = n(627968),
    r = n(64700),
    s = n(939249),
    a = n(834730),
    o = n(289873),
    l = n(189213),
    u = n(17928),
    c = n(192308),
    d = n(793574),
    _ = n(287809),
    f = n(174459),
    h = n(58703),
    p = n(975571),
    E = n(927578),
    m = n(792656),
    g = n(264779),
    A = n(962644),
    I = n(35587),
    T = n(374200),
    S = n(593687);
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
var y = n(75662);
let C = (e) => {
    let { percentage: t } = e;
    return (0, i.jsxs)("div", {
        className: y.hr,
        children: [
            t > 0 &&
                t < 100 &&
                (0, i.jsx)(
                    () =>
                        (0, i.jsx)("div", {
                            className: y.ML,
                            style: { left: `calc(${t}% - 5px)` },
                            children: (0, i.jsx)(N, {}),
                        }),
                    {},
                ),
            (0, i.jsx)("div", { className: y.SX, style: { width: `${t}%` } }),
        ],
    });
};
var v = n(56225),
    O = n(294219),
    R = n(788868),
    b = n(652215),
    D = n(375708);
let L = (e) => {
        let { promotionRecurrences: t } = e,
            [n, o] = r.useState(t.length > 1),
            [l, u] = r.useState([]);
        return (
            r.useEffect(() => {
                u([t.sort((e, t) => (t.startDate > e.startDate ? 1 : -1))[0]]);
            }, [t]),
            (0, i.jsxs)("div", {
                children: [
                    l.map((e) =>
                        (0, i.jsx)(
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
                        (0, i.jsx)(s.D, {
                            className: y.K8,
                            onClick: () => {
                                o(!1), u([...l, ...t.slice(1)]);
                            },
                            children: (0, i.jsx)(a.E, {
                                variant: "text-sm/medium",
                                color: "text-subtle",
                                children: D.intl.string(D.t.rjjZxV),
                            }),
                        }),
                ],
            })
        );
    },
    w = (e) => e.partnerId?.toLowerCase() ?? null,
    M = (e) => {
        let t,
            n,
            { transitionState: r, onClose: s, partnerIds: c } = e,
            d = (0, O.G)(c),
            { promotionsLoaded: f, claimedOutboundPromotionCodeMap: N } = (0, I.y7)(),
            M = (0, u.yK)([T.A], () => T.A.outboundRecurringPromotions),
            P = (0, u.bG)([_.default], () => _.default.getCurrentUser()),
            x = !1 === E.Ay.isPremiumExactly(P, R.PremiumTypes.TIER_2),
            U = P?.isFractionalPremiumWithNoStandardSub(),
            k = null == P || x || U;
        if (!1 === f) return (0, i.jsx)(o.y, {});
        let G = ((e) => {
            let { promotions: t, codesByPromotion: n, partnerIds: i } = e,
                r = {};
            return (
                t
                    .filter((e) => !0 === (0, g.HB)({ promotionType: e.promotionType }))
                    .forEach((e) => {
                        let t = w(e),
                            s = ((e) => {
                                let { promotion: t } = e,
                                    n = w(t);
                                return null == n ? null : ((0, v.Cf)()[n] ?? null);
                            })({ promotion: e });
                        if (null == t || null == s || (null != i && !i.includes(t))) return;
                        t in r || (r[t] = []);
                        let a = {
                            id: e.id,
                            partnerId: t,
                            startDate: e.startDate,
                            endDate: e.endDate,
                            code: n[e.id] ?? null,
                            ...s,
                            title: D.intl.formatToPlainString(s.title, s.titleParams ?? {}),
                            outboundTitle: e.outboundTitle,
                            body: D.intl.formatToPlainString(s.body, s.bodyParams ?? {}),
                        };
                        r[t].push(a);
                    }),
                r
            );
        })({ promotions: M, codesByPromotion: N, partnerIds: d });
        return (0, i.jsx)(l.Modal, {
            title: D.intl.string(D.t["7ioAjs"]),
            subtitle: D.intl.format(D.t.LOYRxB, { helpCenterLink: p.A.getArticleURL(b.MVz.RECURRING_PROMOTION) }),
            actions: [],
            preview: (() => {
                if (!0 === k)
                    return (0, i.jsx)(m.A, {
                        subscriptionTier: R.pe.TIER_2,
                        fullWidth: !0,
                        onClick: () => {
                            s();
                        },
                        onSubscribeModalClose: (e) => {
                            if (e) return A.Ay.fetchActivePromotions();
                        },
                    });
            })(),
            transitionState: r,
            onClose: s,
            children:
                ((t = (0, h.N5)()),
                (n = (0, h.P6)()),
                k
                    ? (0, i.jsx)(S._, { partnerIds: d })
                    : (0, i.jsxs)("div", {
                          className: y.kL,
                          children: [
                              (0, i.jsx)("div", {
                                  className: y.Ps,
                                  children: (0, i.jsx)(a.E, {
                                      variant: "text-md/medium",
                                      color: "text-subtle",
                                      children: D.intl.format(D.t["43kZKL"], { days: n }),
                                  }),
                              }),
                              (0, i.jsx)("div", { className: y.G9, children: (0, i.jsx)(C, { percentage: t }) }),
                              (0, i.jsx)("div", {
                                  className: y.kR,
                                  children: Object.entries(G)
                                      .sort((e, t) => {
                                          let [n] = e,
                                              [i] = t;
                                          return i.localeCompare(n);
                                      })
                                      .map((e) => {
                                          let [t, n] = e;
                                          return (0, i.jsx)(L, { promotionRecurrences: n }, t);
                                      }),
                              }),
                          ],
                      })),
        });
    },
    P = (e) => {
        let { analyticsLocations: t, partnerIds: r } = e;
        f.default.track(b.HAw.RECURRING_PROMOTION_MODAL_OPENED, { location_stack: t }),
            A.Ay.fetchActivePromotions(),
            (0, c.openModalLazy)(async () => {
                let { Premium3PRewardsModalEntry: e } = await Promise.all([n.e("967"), n.e("91900")]).then(
                    n.bind(n, 92375),
                );
                return (t) => (0, i.jsx)(e, { ...t, partnerIds: r });
            });
    };
