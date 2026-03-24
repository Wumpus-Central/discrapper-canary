n.d(t, { Recurring3PModal: () => j, uE: () => y }), n(321073);
var i = n(627968),
    s = n(64700),
    l = n(158954),
    a = n(311907),
    r = n(397927),
    o = n(287809),
    d = n(954571),
    c = n(975571),
    u = n(927578),
    m = n(792656),
    g = n(264779),
    _ = n(597758),
    x = n(35587),
    A = n(412260),
    h = n(852218),
    p = n(934204),
    f = n(116011),
    T = n(788868),
    E = n(652215),
    S = n(985018),
    b = n(342087);
let C = () =>
        Object.entries(f.o).map((e) => {
            let [t, n] = e;
            return (0, i.jsx)(
                "div",
                {
                    className: b.lA,
                    children: (0, i.jsxs)("div", {
                        className: b.LV,
                        children: [
                            (0, i.jsxs)("div", {
                                className: b.JN,
                                children: [
                                    (0, i.jsx)("div", {
                                        className: b.MC,
                                        children: (0, i.jsx)(l.XAi, { size: "refresh_sm" }),
                                    }),
                                    (0, i.jsxs)("div", {
                                        className: b.yO,
                                        children: [
                                            (0, i.jsx)(l.DZT, {
                                                variant: "heading-lg/semibold",
                                                color: "text-strong",
                                                children: S.intl.string(n.title),
                                            }),
                                            (0, i.jsx)(l.DZT, {
                                                variant: "heading-sm/medium",
                                                color: "text-subtle",
                                                children: S.intl.string(n.body),
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                            (0, i.jsx)("div", {
                                className: b.R4,
                                children: (0, i.jsx)(r._V3, {
                                    src: n.asset,
                                    className: b.Ys,
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
    N = (e) => {
        let { promotionRecurrences: t } = e,
            [n, a] = s.useState(t.length > 1),
            [r, o] = s.useState([]);
        return (
            s.useEffect(() => {
                o([t.sort((e, t) => (t.startDate > e.startDate ? 1 : -1))[0]]);
            }, [t]),
            (0, i.jsxs)("div", {
                children: [
                    r.map((e) => (0, i.jsx)(f.w, { recurrence: e, showPartnerLogo: !0, showPartnerImage: !0 }, e.id)),
                    n &&
                        (0, i.jsx)(l.DUT, {
                            className: b.K8,
                            onClick: () => {
                                a(!1), o([...r, ...t.slice(1)]);
                            },
                            children: (0, i.jsx)(l.EYj, {
                                variant: "text-sm/medium",
                                color: "text-subtle",
                                children: S.intl.string(S.t.rjjZxV),
                            }),
                        }),
                ],
            })
        );
    },
    v = (e) => {
        let { percentage: t } = e;
        return (0, i.jsxs)("div", {
            className: b.hr,
            children: [
                t > 0 &&
                    t < 100 &&
                    (0, i.jsx)(
                        () =>
                            (0, i.jsx)("div", {
                                className: b.ML,
                                style: { left: `calc(${t}% - 5px)` },
                                children: (0, i.jsx)(p.z, {}),
                            }),
                        {},
                    ),
                (0, i.jsx)("div", { className: b.SX, style: { width: `${t}%` } }),
            ],
        });
    },
    I = (e) =>
        e.promotionType === h.pt.THIRD_PARTY_OUTBOUND_RECURRING
            ? (e.partnerId?.toLowerCase() ?? null)
            : e.outboundTitle.toLowerCase(),
    j = (e) => {
        let t,
            n,
            s,
            { transitionState: r, onClose: d } = e,
            { promotionsLoaded: h, claimedOutboundPromotionCodeMap: p } = (0, x.y7)(),
            j = (0, a.yK)([A.A], () => A.A.outboundRecurringPromotions),
            y = (0, a.bG)([o.default], () => o.default.getCurrentUser()),
            O = !1 === u.Ay.isPremiumExactly(y, T.PremiumTypes.TIER_2),
            R = y?.isFractionalPremiumWithNoStandardSub(),
            L = null == y || O || R;
        if (!1 === h) return (0, i.jsx)(l.y$y, {});
        let P = ((e) => {
            let { promotions: t, codesByPromotion: n } = e,
                i = {};
            return (
                t
                    .filter(
                        (e) => !0 === (0, g.HB)({ promotionPartner: e.outboundTitle, promotionType: e.promotionType }),
                    )
                    .forEach((e) => {
                        let t = I(e),
                            s = ((e) => {
                                let { promotion: t } = e,
                                    n = I(t);
                                return null == n ? null : (f.o[n] ?? null);
                            })({ promotion: e });
                        if (null == t || null == s) return;
                        t in i || (i[t] = []);
                        let l = {
                            id: e.id,
                            partnerId: t,
                            startDate: e.startDate,
                            endDate: e.endDate,
                            code: n[e.id] ?? null,
                            ...s,
                        };
                        i[t].push(l);
                    }),
                i
            );
        })({ promotions: j, codesByPromotion: p });
        return (0, i.jsx)(l.Modal, {
            title: S.intl.string(S.t["7ioAjs"]),
            subtitle: S.intl.format(S.t.LOYRxB, { helpCenterLink: c.A.getArticleURL(E.MVz.RECURRING_PROMOTION) }),
            actions: [],
            preview: (() => {
                if (!0 === L)
                    return (0, i.jsx)(m.A, {
                        subscriptionTier: T.pe.TIER_2,
                        fullWidth: !0,
                        onClick: () => {
                            d();
                        },
                        onSubscribeModalClose: (e) => {
                            if (e) return _.Ay.fetchActivePromotions();
                        },
                    });
            })(),
            transitionState: r,
            onClose: d,
            children:
                ((n = new Date(
                    (t = new Date(new Date().toLocaleString("en-US", { timeZone: "America/New_York" }))).getFullYear(),
                    t.getMonth() + 1,
                    0,
                ).getDate()),
                (s = (t.getDate() / n) * 100),
                L
                    ? (0, i.jsx)(C, {})
                    : (0, i.jsxs)("div", {
                          className: b.kL,
                          children: [
                              (0, i.jsx)("div", {
                                  className: b.Ps,
                                  children: (0, i.jsx)(l.EYj, {
                                      variant: "text-md/medium",
                                      color: "text-subtle",
                                      children: S.intl.format(S.t["43kZKL"], { days: n - t.getDate() }),
                                  }),
                              }),
                              (0, i.jsx)("div", { className: b.G9, children: (0, i.jsx)(v, { percentage: s }) }),
                              (0, i.jsx)("div", {
                                  className: b.kR,
                                  children: Object.entries(P)
                                      .sort((e, t) => {
                                          let [n] = e,
                                              [i] = t;
                                          return i.localeCompare(n);
                                      })
                                      .map((e) => {
                                          let [t, n] = e;
                                          return (0, i.jsx)(N, { promotionRecurrences: n }, t);
                                      }),
                              }),
                          ],
                      })),
        });
    },
    y = (e) => {
        let { analyticsLocations: t } = e;
        d.default.track(E.HAw.RECURRING_PROMOTION_MODAL_OPENED, { location_stack: t }),
            _.Ay.fetchActivePromotions(),
            (0, r.mMO)(async () => {
                let { Recurring3PModal: e } = await Promise.resolve().then(n.bind(n, 161319));
                return (t) => (0, i.jsx)(e, { ...t });
            });
    };
