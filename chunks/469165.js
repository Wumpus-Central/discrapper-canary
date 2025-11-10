n.d(t, {
    Recurring3PModal: () => B,
    gu: () => k,
    wQ: () => Z,
}),
    n(388685),
    n(642613),
    n(539854);
var r = n(951288),
    i = n(647438),
    a = n(793030),
    o = n(442837),
    s = n(813820),
    l = n(481060),
    c = n(210887),
    u = n(594174),
    d = n(626135),
    f = n(63063),
    _ = n(74538),
    p = n(960048),
    h = n(638212),
    m = n(518638),
    g = n(725727),
    E = n(1844),
    b = n(397047),
    y = n(823581),
    O = n(902135),
    v = n(474936),
    I = n(981631),
    S = n(388032),
    T = n(737963),
    A = n(180964),
    C = n(730440);
function N(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function R(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                N(e, t, n[t]);
            });
    }
    return e;
}
function P(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function w(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : P(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let D = {
        [b.fA]: {
            title: S.t.sfGgOG,
            body: S.t.igiSKe,
            bodyWithExpiration: S.t.w8CXUl,
            redemptionURL: "https://steelseries.com/",
            logos: {
                dark: (0, r.jsx)(y.U3, {}),
                light: (0, r.jsx)(y.gf, {}),
            },
            asset: C.Z,
        },
        [b.dh]: {
            title: S.t["9N8obd"],
            body: S.t["34g+Z3"],
            bodyWithExpiration: S.t.rqmpXc,
            redemptionURL: "https://www.kontrolfreek.com/",
            logos: {
                dark: (0, r.jsx)(y.dt, {}),
                light: (0, r.jsx)(y.QD, {}),
            },
            asset: A.Z,
        },
    },
    x = (e) => ((0, o.e7)([c.Z], () => (0, a.wjy)(c.Z.theme)) ? D[e].logos.dark : D[e].logos.light),
    L = (e) => {
        let { recurrence: t } = e,
            n = (0, r.jsx)(a.sV5, { color: l.TVs.colors.BUTTON_POSITIVE_BACKGROUND }),
            o = (0, r.jsx)(a.hU, {
                icon: a.TIy,
                size: "sm",
                variant: "secondary",
                "aria-label": "",
                color: "icon-feedback-positive",
                onClick: () => {
                    navigator.clipboard.writeText(t.code), c(n);
                },
            }),
            [s, c] = i.useState(() => o);
        if (null != t.code)
            return (0, r.jsx)("div", {
                className: T.claimedFooterContainer,
                children: (0, r.jsxs)("div", {
                    className: T.claimedFooter,
                    children: [
                        (0, r.jsx)("div", {
                            className: T.claimedFooterCode,
                            children: (0, r.jsx)(a.xvT, {
                                variant: "text-md/medium",
                                color: "text-primary",
                                children: t.code,
                            }),
                        }),
                        s,
                        (0, r.jsx)(a.zxk, {
                            variant: "overlay-primary",
                            size: "sm",
                            text: S.intl.formatToPlainString(S.t.DF68t7, { redemptionURL: t.redemptionURL }),
                            onClick: () => {
                                window.open(t.redemptionURL, "_blank"),
                                    d.default.track(I.rMx.RECURRING_PROMOTION_CLAIMED);
                            },
                        }),
                    ],
                }),
            });
    },
    M = () =>
        Object.entries(D).map((e) => {
            let [t, n] = e;
            return (0, r.jsx)(
                "div",
                {
                    className: T.promoCardContainer,
                    children: (0, r.jsxs)("div", {
                        className: T.wrap,
                        children: [
                            (0, r.jsxs)("div", {
                                className: T.promoCardContent,
                                children: [
                                    (0, r.jsx)("div", {
                                        className: T.lockIconContainer,
                                        children: (0, r.jsx)(a.mBM, { size: "refresh_sm" }),
                                    }),
                                    (0, r.jsxs)("div", {
                                        className: T.promoCardContentText,
                                        children: [
                                            (0, r.jsx)(a.X6q, {
                                                variant: "heading-lg/semibold",
                                                color: "text-primary",
                                                children: S.intl.string(n.title),
                                            }),
                                            (0, r.jsx)(a.X6q, {
                                                variant: "heading-sm/medium",
                                                color: "text-secondary",
                                                children: S.intl.string(n.body),
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                            (0, r.jsx)("div", {
                                className: T.promoCardAssetContainer,
                                children: (0, r.jsx)(l.Eep, {
                                    src: n.asset,
                                    className: T.promoCardAsset,
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
    j = (e) => {
        let { promotionRecurrences: t } = e,
            [n, o] = i.useState(t.length > 1),
            [s, c] = i.useState([]);
        i.useEffect(() => {
            c([t.sort((e, t) => (t.startDate > e.startDate ? 1 : -1))[0]]);
        }, [t]);
        let u = x(t[0].partnerId),
            d = (0, r.jsx)(l.Eep, {
                src: t[0].asset,
                className: T.promoCardAsset,
                width: 100,
                height: 100,
                zoomable: !1,
            });
        return (0, r.jsxs)("div", {
            children: [
                s.map((e, t) =>
                    (0, r.jsxs)(
                        "div",
                        {
                            className: T.promoCardContainer,
                            children: [
                                (0, r.jsxs)("div", {
                                    className: T.wrap,
                                    children: [
                                        (0, r.jsxs)("div", {
                                            className: T.promoCardContent,
                                            children: [
                                                u,
                                                (0, r.jsxs)("div", {
                                                    className: T.promoCardContentText,
                                                    children: [
                                                        (0, r.jsx)(a.X6q, {
                                                            variant: "heading-lg/semibold",
                                                            color: "text-primary",
                                                            children: S.intl.string(e.title),
                                                        }),
                                                        (0, r.jsx)(a.X6q, {
                                                            variant: "heading-sm/medium",
                                                            color: "text-secondary",
                                                            children:
                                                                null != e.code
                                                                    ? S.intl.format(e.bodyWithExpiration, {
                                                                          date: e.endDate,
                                                                      })
                                                                    : S.intl.string(e.body),
                                                        }),
                                                    ],
                                                }),
                                                null == e.code &&
                                                    (0, r.jsx)(a.zxk, {
                                                        icon: a.mBM,
                                                        variant: "overlay-primary",
                                                        size: "sm",
                                                        text: S.intl.string(S.t.vwASIl),
                                                        onClick: () => {
                                                            (0, m.A2)(e.id)
                                                                .then((n) => {
                                                                    c([
                                                                        ...s.slice(0, t),
                                                                        w(R({}, e), { code: n.code }),
                                                                        ...s.slice(t + 1),
                                                                    ]);
                                                                })
                                                                .catch((e) => p.Z.captureException(e));
                                                        },
                                                    }),
                                            ],
                                        }),
                                        (0, r.jsx)("div", {
                                            className: T.promoCardAssetContainer,
                                            children: d,
                                        }),
                                    ],
                                }),
                                null != e.code && (0, r.jsx)(L, { recurrence: e }),
                            ],
                        },
                        e.id,
                    ),
                ),
                n &&
                    (0, r.jsx)(a.P3F, {
                        className: T.extraCodeButton,
                        onClick: () => {
                            o(!1), c([...s, ...t.slice(1)]);
                        },
                        children: (0, r.jsx)(a.xvT, {
                            variant: "text-sm/medium",
                            color: "text-secondary",
                            children: S.intl.string(S.t.rjjZxV),
                        }),
                    }),
            ],
        });
    },
    k = (e) => {
        let { percentage: t } = e,
            n = () => {
                let e = 1.8;
                return (0, r.jsx)("div", {
                    className: T.progressBarIndicator,
                    style: { left: "".concat(t - e, "%") },
                    children: (0, r.jsx)(O.G, {}),
                });
            };
        return (0, r.jsxs)("div", {
            className: T.progressBar,
            children: [
                t > 0 && t < 100 && (0, r.jsx)(n, {}),
                (0, r.jsx)("div", {
                    className: T.progressBarFill,
                    style: { width: "".concat(t, "%") },
                }),
            ],
        });
    },
    U = (e) => {
        var t;
        let { promotion: n } = e;
        return null != (t = D[n.outboundTitle.toLowerCase()]) ? t : null;
    },
    G = (e) => {
        let { promotions: t, codesByPromotion: n } = e,
            r = {};
        return (
            t
                .filter((e) => !0 === (0, m.pD)({ promotionPartner: e.outboundTitle }))
                .map((e) => {
                    var t;
                    let i = e.outboundTitle.toLowerCase(),
                        a = U({ promotion: e });
                    i in r || (r[i] = []);
                    let o = R(
                        {
                            id: e.id,
                            partnerId: i,
                            startDate: e.startDate,
                            endDate: e.endDate,
                            code: null != (t = n[e.id]) ? t : null,
                        },
                        a,
                    );
                    r[i].push(o);
                }),
            r
        );
    },
    B = (e) => {
        var t;
        let { onClose: n } = e,
            { promotionsLoaded: i, claimedOutboundPromotionCodeMap: l } = (0, g.lG)(),
            c = (0, o.Wu)([E.Z], () => E.Z.outboundRecurringPromotions),
            d = (0, o.e7)([u.default], () => u.default.getCurrentUser()),
            p = !1 === _.ZP.isPremiumExactly(d, v.PremiumTypes.TIER_2),
            m =
                (null == d || null == (t = d.premiumState) ? void 0 : t.premiumSource) === s.d3.FRACTIONAL_NITRO &&
                (null == d ? void 0 : d.premiumState.premiumSubscriptionType) !== s.W$.TIER_2,
            b = null == d || p || m;
        if (!1 === i) return (0, r.jsx)(a.$jN, {});
        let y = G({
                promotions: c,
                codesByPromotion: l,
            }),
            O = () => {
                if (!0 === b)
                    return (0, r.jsx)(h.Z, {
                        subscriptionTier: v.Si.TIER_2,
                        fullWidth: !0,
                    });
            },
            A = () => {
                let e = new Date(),
                    t = new Date(e.getFullYear(), e.getMonth() + 1, 0).getDate(),
                    n = (e.getDate() / t) * 100;
                return b
                    ? (0, r.jsx)(M, {})
                    : (0, r.jsxs)("div", {
                          className: T.container,
                          children: [
                              (0, r.jsx)("div", {
                                  className: T.progressHeader,
                                  children: (0, r.jsx)(a.xvT, {
                                      variant: "text-md/medium",
                                      color: "text-secondary",
                                      children: S.intl.format(S.t["43kZKL"], { days: t - e.getDate() }),
                                  }),
                              }),
                              (0, r.jsx)(k, { percentage: n }),
                              (0, r.jsx)("div", {
                                  className: T.cards,
                                  children: Object.entries(y)
                                      .sort((e, t) => {
                                          let [n] = e,
                                              [r] = t;
                                          return r.localeCompare(n);
                                      })
                                      .map((e) => {
                                          let [t, n] = e;
                                          return (0, r.jsx)(j, { promotionRecurrences: n }, t);
                                      }),
                              }),
                          ],
                      });
            };
        return (0, r.jsx)(a.Modal, {
            title: S.intl.string(S.t["7ioAjs"]),
            subtitle: S.intl.format(S.t.LOYRxB, { helpCenterLink: f.Z.getArticleURL(I.BhN.RECURRING_PROMOTION) }),
            actions: [],
            preview: O(),
            transitionState: a.Dvm.ENTERED,
            onClose: n,
            children: A(),
        });
    },
    Z = (e) => {
        let { analyticsLocations: t } = e;
        d.default.track(I.rMx.RECURRING_PROMOTION_MODAL_OPENED, { location_stack: t }),
            (0, l.ZDy)(async () => {
                let { Recurring3PModal: e } = await Promise.resolve().then(n.bind(n, 469165));
                return (t) => (0, r.jsx)(e, R({}, t));
            });
    };
