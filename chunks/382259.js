i.d(t, { w: () => O, u: () => L }), i(321073);
var r = i(627968),
    l = i(64700),
    a = i(939249),
    s = i(834730),
    n = i(289873),
    o = i(189213),
    d = i(17928),
    c = i(192308),
    u = i(793574),
    m = i(287809),
    h = i(174459),
    C = i(58703),
    p = i(975571),
    _ = i(428262),
    g = i(792656),
    E = i(264779),
    x = i(962644),
    f = i(35587),
    R = i(374200),
    A = i(593687);
let N = () =>
    (0, r.jsx)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "100%",
        height: "100%",
        viewBox: "0 0 6 6",
        fill: "none",
        overflow: "visible",
        children: (0, r.jsx)("ellipse", { cx: "3.4924", cy: "3", rx: "2.86154", ry: "3", fill: "#808BFF" }),
    });
var I = i(75662);
let S = (e) => {
    let { percentage: t } = e;
    return (0, r.jsxs)("div", {
        className: I.hr,
        children: [
            t > 0 &&
                t < 100 &&
                (0, r.jsx)(
                    () =>
                        (0, r.jsx)("div", {
                            className: I.ML,
                            style: { left: `calc(${t}% - 5px)` },
                            children: (0, r.jsx)(N, {}),
                        }),
                    {},
                ),
            (0, r.jsx)("div", { className: I.SX, style: { width: `${t}%` } }),
        ],
    });
};
var j = i(56225),
    v = i(294219),
    P = i(788868),
    D = i(652215),
    b = i(375708);
let T = (e) => {
        let { promotionRecurrences: t } = e,
            [i, n] = l.useState(t.length > 1),
            [o, d] = l.useState([]);
        return (
            l.useEffect(() => {
                d([t.sort((e, t) => (t.startDate > e.startDate ? 1 : -1))[0]]);
            }, [t]),
            (0, r.jsxs)("div", {
                children: [
                    o.map((e) =>
                        (0, r.jsx)(
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
                    i &&
                        (0, r.jsx)(a.D, {
                            className: I.K8,
                            onClick: () => {
                                n(!1), d([...o, ...t.slice(1)]);
                            },
                            children: (0, r.jsx)(s.E, {
                                variant: "text-sm/medium",
                                color: "text-subtle",
                                children: b.intl.string(b.t.rjjZxV),
                            }),
                        }),
                ],
            })
        );
    },
    y = (e) => e.partnerId?.toLowerCase() ?? null,
    O = (e) => {
        let t,
            i,
            { transitionState: l, onClose: a, partnerIds: c } = e,
            { promotionsLoaded: u, claimedOutboundPromotionCodeMap: h } = (0, f.y7)(),
            N = (0, d.yK)([R.A], () => R.A.outboundRecurringPromotions),
            O = (0, d.bG)([m.default], () => m.default.getCurrentUser()),
            L = !1 === _.Ay.isPremiumExactly(O, P.PremiumTypes.TIER_2),
            w = O?.isFractionalPremiumWithNoStandardSub(),
            M = null == O || L || w,
            B = (0, v.G)(c, { isLockedCardView: M });
        if (!1 === u) return (0, r.jsx)(n.y, {});
        let U = ((e) => {
            let { promotions: t, codesByPromotion: i, partnerIds: r } = e,
                l = {};
            return (
                t
                    .filter((e) => !0 === (0, E.HB)({ promotionType: e.promotionType }))
                    .forEach((e) => {
                        let t = y(e),
                            a = ((e) => {
                                let { promotion: t } = e,
                                    i = y(t);
                                return null == i ? null : ((0, j.Cf)()[i] ?? null);
                            })({ promotion: e });
                        if (null == t || null == a || (null != r && !r.includes(t))) return;
                        t in l || (l[t] = []);
                        let s = {
                            id: e.id,
                            partnerId: t,
                            startDate: e.startDate,
                            endDate: e.endDate,
                            code: i[e.id] ?? null,
                            ...a,
                            title: b.intl.formatToPlainString(a.title, a.titleParams ?? {}),
                            outboundTitle: e.outboundTitle,
                            body: b.intl.formatToPlainString(a.body, a.bodyParams ?? {}),
                        };
                        l[t].push(s);
                    }),
                l
            );
        })({ promotions: N, codesByPromotion: h, partnerIds: B });
        return (0, r.jsx)(o.Modal, {
            title: b.intl.string(b.t["7ioAjs"]),
            subtitle: b.intl.format(b.t.LOYRxB, { helpCenterLink: p.A.getArticleURL(D.MVz.RECURRING_PROMOTION) }),
            actions: [],
            preview: (() => {
                if (!0 === M)
                    return (0, r.jsx)(g.A, {
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
            transitionState: l,
            onClose: a,
            children:
                ((t = (0, C.N5)()),
                (i = (0, C.P6)()),
                M
                    ? (0, r.jsx)(A._, { partnerIds: B })
                    : (0, r.jsxs)("div", {
                          className: I.kL,
                          children: [
                              (0, r.jsx)("div", {
                                  className: I.Ps,
                                  children: (0, r.jsx)(s.E, {
                                      variant: "text-md/medium",
                                      color: "text-subtle",
                                      children: b.intl.format(b.t["43kZKL"], { days: i }),
                                  }),
                              }),
                              (0, r.jsx)("div", { className: I.G9, children: (0, r.jsx)(S, { percentage: t }) }),
                              (0, r.jsx)("div", {
                                  className: I.kR,
                                  children: Object.entries(U)
                                      .sort((e, t) => {
                                          let [i] = e,
                                              [r] = t;
                                          return r.localeCompare(i);
                                      })
                                      .map((e) => {
                                          let [t, i] = e;
                                          return (0, r.jsx)(T, { promotionRecurrences: i }, t);
                                      }),
                              }),
                          ],
                      })),
        });
    },
    L = (e) => {
        let { analyticsLocations: t, partnerIds: l } = e;
        h.default.track(D.HAw.RECURRING_PROMOTION_MODAL_OPENED, { location_stack: t }),
            x.Ay.fetchActivePromotions(),
            (0, c.openModalLazy)(async () => {
                let { Premium3PRewardsModalEntry: e } = await Promise.all([i.e("967"), i.e("91900")]).then(
                    i.bind(i, 92375),
                );
                return (t) => (0, r.jsx)(e, { ...t, partnerIds: l });
            });
    };
