s.d(t, { w: () => O, u: () => T }), s(321073);
var n = s(627968),
    a = s(64700),
    r = s(939249),
    l = s(834730),
    i = s(289873),
    d = s(189213),
    o = s(17928),
    c = s(192308),
    u = s(793574),
    m = s(287809),
    h = s(954571),
    x = s(58703),
    C = s(975571),
    p = s(927578),
    _ = s(792656),
    g = s(264779),
    f = s(597758),
    b = s(35587),
    R = s(374200),
    v = s(593687);
let j = () =>
    (0, n.jsx)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "100%",
        height: "100%",
        viewBox: "0 0 6 6",
        fill: "none",
        overflow: "visible",
        children: (0, n.jsx)("ellipse", { cx: "3.4924", cy: "3", rx: "2.86154", ry: "3", fill: "#808BFF" }),
    });
var E = s(75662);
let A = (e) => {
    let { percentage: t } = e;
    return (0, n.jsxs)("div", {
        className: E.hr,
        children: [
            t > 0 &&
                t < 100 &&
                (0, n.jsx)(
                    () =>
                        (0, n.jsx)("div", {
                            className: E.ML,
                            style: { left: `calc(${t}% - 5px)` },
                            children: (0, n.jsx)(j, {}),
                        }),
                    {},
                ),
            (0, n.jsx)("div", { className: E.SX, style: { width: `${t}%` } }),
        ],
    });
};
var N = s(56225),
    P = s(294219),
    I = s(788868),
    y = s(652215),
    D = s(985018);
let S = (e) => {
        let { promotionRecurrences: t } = e,
            [s, i] = a.useState(t.length > 1),
            [d, o] = a.useState([]);
        return (
            a.useEffect(() => {
                o([t.sort((e, t) => (t.startDate > e.startDate ? 1 : -1))[0]]);
            }, [t]),
            (0, n.jsxs)("div", {
                children: [
                    d.map((e) =>
                        (0, n.jsx)(
                            N.wx,
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
                        (0, n.jsx)(r.D, {
                            className: E.K8,
                            onClick: () => {
                                i(!1), o([...d, ...t.slice(1)]);
                            },
                            children: (0, n.jsx)(l.E, {
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
    O = (e) => {
        let t,
            s,
            { transitionState: a, onClose: r, partnerIds: c } = e,
            u = (0, P.G)(c),
            { promotionsLoaded: h, claimedOutboundPromotionCodeMap: j } = (0, b.y7)(),
            O = (0, o.yK)([R.A], () => R.A.outboundRecurringPromotions),
            T = (0, o.bG)([m.default], () => m.default.getCurrentUser()),
            M = !1 === p.Ay.isPremiumExactly(T, I.PremiumTypes.TIER_2),
            L = T?.isFractionalPremiumWithNoStandardSub(),
            k = null == T || M || L;
        if (!1 === h) return (0, n.jsx)(i.y, {});
        let B = ((e) => {
            let { promotions: t, codesByPromotion: s, partnerIds: n } = e,
                a = {};
            return (
                t
                    .filter((e) => !0 === (0, g.HB)({ promotionType: e.promotionType }))
                    .forEach((e) => {
                        let t = w(e),
                            r = ((e) => {
                                let { promotion: t } = e,
                                    s = w(t);
                                return null == s ? null : ((0, N.Cf)()[s] ?? null);
                            })({ promotion: e });
                        if (null == t || null == r || (null != n && !n.includes(t))) return;
                        t in a || (a[t] = []);
                        let l = {
                            id: e.id,
                            partnerId: t,
                            startDate: e.startDate,
                            endDate: e.endDate,
                            code: s[e.id] ?? null,
                            ...r,
                            title: D.intl.formatToPlainString(r.title, r.titleParams ?? {}),
                            body: D.intl.formatToPlainString(r.body, r.bodyParams ?? {}),
                        };
                        a[t].push(l);
                    }),
                a
            );
        })({ promotions: O, codesByPromotion: j, partnerIds: u });
        return (0, n.jsx)(d.Modal, {
            title: D.intl.string(D.t["7ioAjs"]),
            subtitle: D.intl.format(D.t.LOYRxB, { helpCenterLink: C.A.getArticleURL(y.MVz.RECURRING_PROMOTION) }),
            actions: [],
            preview: (() => {
                if (!0 === k)
                    return (0, n.jsx)(_.A, {
                        subscriptionTier: I.pe.TIER_2,
                        fullWidth: !0,
                        onClick: () => {
                            r();
                        },
                        onSubscribeModalClose: (e) => {
                            if (e) return f.Ay.fetchActivePromotions();
                        },
                    });
            })(),
            transitionState: a,
            onClose: r,
            children:
                ((t = (0, x.N5)()),
                (s = (0, x.P6)()),
                k
                    ? (0, n.jsx)(v._, { partnerIds: u })
                    : (0, n.jsxs)("div", {
                          className: E.kL,
                          children: [
                              (0, n.jsx)("div", {
                                  className: E.Ps,
                                  children: (0, n.jsx)(l.E, {
                                      variant: "text-md/medium",
                                      color: "text-subtle",
                                      children: D.intl.format(D.t["43kZKL"], { days: s }),
                                  }),
                              }),
                              (0, n.jsx)("div", { className: E.G9, children: (0, n.jsx)(A, { percentage: t }) }),
                              (0, n.jsx)("div", {
                                  className: E.kR,
                                  children: Object.entries(B)
                                      .sort((e, t) => {
                                          let [s] = e,
                                              [n] = t;
                                          return n.localeCompare(s);
                                      })
                                      .map((e) => {
                                          let [t, s] = e;
                                          return (0, n.jsx)(S, { promotionRecurrences: s }, t);
                                      }),
                              }),
                          ],
                      })),
        });
    },
    T = (e) => {
        let { analyticsLocations: t, partnerIds: a } = e;
        h.default.track(y.HAw.RECURRING_PROMOTION_MODAL_OPENED, { location_stack: t }),
            f.Ay.fetchActivePromotions(),
            (0, c.openModalLazy)(async () => {
                let { Premium3PRewardsModalEntry: e } = await s.e("91900").then(s.bind(s, 92375));
                return (t) => (0, n.jsx)(e, { ...t, partnerIds: a });
            });
    };
