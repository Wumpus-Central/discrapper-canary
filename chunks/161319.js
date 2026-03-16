n.d(t, { PR: () => I, Recurring3PModal: () => j, uE: () => y }), n(321073);
var i = n(627968),
    s = n(64700),
    l = n(158954),
    a = n(311907),
    r = n(397927),
    o = n(287809),
    d = n(954571),
    c = n(975571),
    u = n(927578),
    _ = n(792656),
    m = n(264779),
    g = n(597758),
    A = n(35587),
    h = n(412260),
    x = n(852218),
    p = n(934204),
    T = n(116011),
    E = n(788868),
    S = n(652215),
    C = n(985018),
    f = n(342087);
let b = () =>
        Object.entries(T.o).map((e) => {
            let [t, n] = e;
            return (0, i.jsx)(
                "div",
                {
                    className: f.lA,
                    children: (0, i.jsxs)("div", {
                        className: f.LV,
                        children: [
                            (0, i.jsxs)("div", {
                                className: f.JN,
                                children: [
                                    (0, i.jsx)("div", {
                                        className: f.MC,
                                        children: (0, i.jsx)(l.XAi, { size: "refresh_sm" }),
                                    }),
                                    (0, i.jsxs)("div", {
                                        className: f.yO,
                                        children: [
                                            (0, i.jsx)(l.DZT, {
                                                variant: "heading-lg/semibold",
                                                color: "text-strong",
                                                children: C.intl.string(n.title),
                                            }),
                                            (0, i.jsx)(l.DZT, {
                                                variant: "heading-sm/medium",
                                                color: "text-subtle",
                                                children: C.intl.string(n.body),
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                            (0, i.jsx)("div", {
                                className: f.R4,
                                children: (0, i.jsx)(r._V3, {
                                    src: n.asset,
                                    className: f.Ys,
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
                    r.map((e) => (0, i.jsx)(T.w, { recurrence: e, showPartnerLogo: !0, showPartnerImage: !0 }, e.id)),
                    n &&
                        (0, i.jsx)(l.DUT, {
                            className: f.K8,
                            onClick: () => {
                                a(!1), o([...r, ...t.slice(1)]);
                            },
                            children: (0, i.jsx)(l.EYj, {
                                variant: "text-sm/medium",
                                color: "text-subtle",
                                children: C.intl.string(C.t.rjjZxV),
                            }),
                        }),
                ],
            })
        );
    },
    I = (e) => {
        let { percentage: t } = e;
        return (0, i.jsxs)("div", {
            className: f.hr,
            children: [
                t > 0 &&
                    t < 100 &&
                    (0, i.jsx)(
                        () =>
                            (0, i.jsx)("div", {
                                className: f.ML,
                                style: { left: `calc(${t}% - 5px)` },
                                children: (0, i.jsx)(p.z, {}),
                            }),
                        {},
                    ),
                (0, i.jsx)("div", { className: f.SX, style: { width: `${t}%` } }),
            ],
        });
    },
    v = (e) =>
        e.promotionType === x.pt.THIRD_PARTY_OUTBOUND_RECURRING
            ? (e.partnerId?.toLowerCase() ?? null)
            : e.outboundTitle.toLowerCase(),
    j = (e) => {
        let t,
            n,
            s,
            { transitionState: r, onClose: d } = e,
            { promotionsLoaded: x, claimedOutboundPromotionCodeMap: p } = (0, A.y7)(),
            j = (0, a.yK)([h.A], () => h.A.outboundRecurringPromotions),
            y = (0, a.bG)([o.default], () => o.default.getCurrentUser()),
            R = !1 === u.Ay.isPremiumExactly(y, E.PremiumTypes.TIER_2),
            O = y?.isFractionalPremiumWithNoStandardSub(),
            P = null == y || R || O;
        if (!1 === x) return (0, i.jsx)(l.y$y, {});
        let D = ((e) => {
            let { promotions: t, codesByPromotion: n } = e,
                i = {};
            return (
                t
                    .filter(
                        (e) => !0 === (0, m.HB)({ promotionPartner: e.outboundTitle, promotionType: e.promotionType }),
                    )
                    .forEach((e) => {
                        let t = v(e),
                            s = ((e) => {
                                let { promotion: t } = e,
                                    n = v(t);
                                return null == n ? null : (T.o[n] ?? null);
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
            title: C.intl.string(C.t["7ioAjs"]),
            subtitle: C.intl.format(C.t.LOYRxB, { helpCenterLink: c.A.getArticleURL(S.MVz.RECURRING_PROMOTION) }),
            actions: [],
            preview: (() => {
                if (!0 === P)
                    return (0, i.jsx)(_.A, {
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
            transitionState: r,
            onClose: d,
            children:
                ((n = new Date(
                    (t = new Date(new Date().toLocaleString("en-US", { timeZone: "America/New_York" }))).getFullYear(),
                    t.getMonth() + 1,
                    0,
                ).getDate()),
                (s = (t.getDate() / n) * 100),
                P
                    ? (0, i.jsx)(b, {})
                    : (0, i.jsxs)("div", {
                          className: f.kL,
                          children: [
                              (0, i.jsx)("div", {
                                  className: f.Ps,
                                  children: (0, i.jsx)(l.EYj, {
                                      variant: "text-md/medium",
                                      color: "text-subtle",
                                      children: C.intl.format(C.t["43kZKL"], { days: n - t.getDate() }),
                                  }),
                              }),
                              (0, i.jsx)("div", { className: f.G9, children: (0, i.jsx)(I, { percentage: s }) }),
                              (0, i.jsx)("div", {
                                  className: f.kR,
                                  children: Object.entries(D)
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
        d.default.track(S.HAw.RECURRING_PROMOTION_MODAL_OPENED, { location_stack: t }),
            g.Ay.fetchActivePromotions(),
            (0, r.mMO)(async () => {
                let { Recurring3PModal: e } = await Promise.resolve().then(n.bind(n, 161319));
                return (t) => (0, i.jsx)(e, { ...t });
            });
    };
