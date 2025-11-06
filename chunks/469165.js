n.d(t, {
    Recurring3PModal: () => G,
    gu: () => j,
    wQ: () => B,
}),
    n(388685),
    n(642613),
    n(539854);
var r = n(951288),
    i = n(647438),
    a = n(793030),
    o = n(442837),
    s = n(481060),
    l = n(210887),
    c = n(594174),
    u = n(626135),
    d = n(63063),
    f = n(74538),
    _ = n(960048),
    p = n(638212),
    h = n(518638),
    m = n(725727),
    g = n(1844),
    E = n(397047),
    b = n(823581),
    y = n(902135),
    O = n(474936),
    v = n(981631),
    I = n(388032),
    T = n(737963),
    S = n(180964),
    A = n(730440);
function C(e, t, n) {
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
function N(e) {
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
                C(e, t, n[t]);
            });
    }
    return e;
}
function R(e, t) {
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
function P(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : R(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let w = {
        [E.fA]: {
            title: I.t.sfGgOG,
            body: I.t.igiSKe,
            bodyWithExpiration: I.t.w8CXUl,
            redemptionURL: "https://steelseries.com/",
            logos: {
                dark: (0, r.jsx)(b.U3, {}),
                light: (0, r.jsx)(b.gf, {}),
            },
            asset: A.Z,
        },
        [E.dh]: {
            title: I.t["9N8obd"],
            body: I.t["34g+Z3"],
            bodyWithExpiration: I.t.rqmpXc,
            redemptionURL: "https://www.kontrolfreek.com/",
            logos: {
                dark: (0, r.jsx)(b.dt, {}),
                light: (0, r.jsx)(b.QD, {}),
            },
            asset: S.Z,
        },
    },
    D = (e) => ((0, o.e7)([l.Z], () => (0, a.wjy)(l.Z.theme)) ? w[e].logos.dark : w[e].logos.light),
    x = (e) => {
        let { recurrence: t } = e,
            n = (0, r.jsx)(a.sV5, { color: s.TVs.colors.BUTTON_POSITIVE_BACKGROUND }),
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
            [l, c] = i.useState(() => o);
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
                        l,
                        (0, r.jsx)(a.zxk, {
                            variant: "overlay-primary",
                            size: "sm",
                            text: I.intl.formatToPlainString(I.t.DF68t7, { redemptionURL: t.redemptionURL }),
                            onClick: () => {
                                window.open(t.redemptionURL, "_blank"),
                                    u.default.track(v.rMx.RECURRING_PROMOTION_CLAIMED);
                            },
                        }),
                    ],
                }),
            });
    },
    L = () =>
        Object.entries(w).map((e) => {
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
                                                children: I.intl.string(n.title),
                                            }),
                                            (0, r.jsx)(a.X6q, {
                                                variant: "heading-sm/medium",
                                                color: "text-secondary",
                                                children: I.intl.string(n.body),
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                            (0, r.jsx)("div", {
                                className: T.promoCardAssetContainer,
                                children: (0, r.jsx)(s.Eep, {
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
    M = (e) => {
        let { promotionRecurrences: t } = e,
            [n, o] = i.useState(t.length > 1),
            [l, c] = i.useState([]);
        i.useEffect(() => {
            c([t.sort((e, t) => (t.startDate > e.startDate ? 1 : -1))[0]]);
        }, [t]);
        let u = D(t[0].partnerId),
            d = (0, r.jsx)(s.Eep, {
                src: t[0].asset,
                className: T.promoCardAsset,
                width: 100,
                height: 100,
                zoomable: !1,
            });
        return (0, r.jsxs)("div", {
            children: [
                l.map((e, t) =>
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
                                                            children: I.intl.string(e.title),
                                                        }),
                                                        (0, r.jsx)(a.X6q, {
                                                            variant: "heading-sm/medium",
                                                            color: "text-secondary",
                                                            children:
                                                                null != e.code
                                                                    ? I.intl.format(e.bodyWithExpiration, {
                                                                          date: e.endDate,
                                                                      })
                                                                    : I.intl.string(e.body),
                                                        }),
                                                    ],
                                                }),
                                                null == e.code &&
                                                    (0, r.jsx)(a.zxk, {
                                                        icon: a.mBM,
                                                        variant: "overlay-primary",
                                                        size: "sm",
                                                        text: I.intl.string(I.t.vwASIl),
                                                        onClick: () => {
                                                            (0, h.A2)(e.id)
                                                                .then((n) => {
                                                                    c([
                                                                        ...l.slice(0, t),
                                                                        P(N({}, e), { code: n.code }),
                                                                        ...l.slice(t + 1),
                                                                    ]);
                                                                })
                                                                .catch((e) => _.Z.captureException(e));
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
                                null != e.code && (0, r.jsx)(x, { recurrence: e }),
                            ],
                        },
                        e.id,
                    ),
                ),
                n &&
                    (0, r.jsx)(a.P3F, {
                        className: T.extraCodeButton,
                        onClick: () => {
                            o(!1), c([...l, ...t.slice(1)]);
                        },
                        children: (0, r.jsx)(a.xvT, {
                            variant: "text-sm/medium",
                            color: "text-secondary",
                            children: I.intl.string(I.t.rjjZxV),
                        }),
                    }),
            ],
        });
    },
    j = (e) => {
        let { percentage: t } = e,
            n = () => {
                let e = 1.8;
                return (0, r.jsx)("div", {
                    className: T.progressBarIndicator,
                    style: { left: "".concat(t - e, "%") },
                    children: (0, r.jsx)(y.G, {}),
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
    k = (e) => {
        var t;
        let { promotion: n } = e;
        return null != (t = w[n.outboundTitle.toLowerCase()]) ? t : null;
    },
    U = (e) => {
        let { promotions: t, codesByPromotion: n } = e,
            r = {};
        return (
            t
                .filter((e) => !0 === (0, h.pD)({ promotionPartner: e.outboundTitle }))
                .map((e) => {
                    var t;
                    let i = e.outboundTitle.toLowerCase(),
                        a = k({ promotion: e });
                    i in r || (r[i] = []);
                    let o = N(
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
    G = (e) => {
        let { onClose: t } = e,
            { promotionsLoaded: n, claimedOutboundPromotionCodeMap: i } = (0, m.lG)(),
            s = (0, o.Wu)([g.Z], () => g.Z.outboundRecurringPromotions),
            l =
                !1 ===
                (0, o.e7)([c.default], () => f.ZP.isPremiumExactly(c.default.getCurrentUser(), O.PremiumTypes.TIER_2));
        if (!1 === n) return (0, r.jsx)(a.$jN, {});
        let u = U({
                promotions: s,
                codesByPromotion: i,
            }),
            _ = () => {
                if (!0 === l)
                    return (0, r.jsx)(p.Z, {
                        subscriptionTier: O.Si.TIER_2,
                        fullWidth: !0,
                    });
            },
            h = () => {
                let e = new Date(),
                    t = new Date(e.getFullYear(), e.getMonth() + 1, 0).getDate(),
                    n = (e.getDate() / t) * 100;
                return l
                    ? (0, r.jsx)(L, {})
                    : (0, r.jsxs)("div", {
                          className: T.container,
                          children: [
                              (0, r.jsx)("div", {
                                  className: T.progressHeader,
                                  children: (0, r.jsx)(a.xvT, {
                                      variant: "text-md/medium",
                                      color: "text-secondary",
                                      children: I.intl.format(I.t["43kZKL"], { days: t - e.getDate() }),
                                  }),
                              }),
                              (0, r.jsx)(j, { percentage: n }),
                              (0, r.jsx)("div", {
                                  className: T.cards,
                                  children: Object.entries(u).map((e) => {
                                      let [t, n] = e;
                                      return (0, r.jsx)(M, { promotionRecurrences: n }, t);
                                  }),
                              }),
                          ],
                      });
            };
        return (0, r.jsx)(a.Modal, {
            title: I.intl.string(I.t["7ioAjs"]),
            subtitle: I.intl.format(I.t.LOYRxB, { helpCenterLink: d.Z.getArticleURL(v.BhN.RECURRING_PROMOTION) }),
            actions: [],
            preview: _(),
            transitionState: a.Dvm.ENTERED,
            onClose: t,
            children: h(),
        });
    },
    B = (e) => {
        let { analyticsLocations: t } = e;
        u.default.track(v.rMx.RECURRING_PROMOTION_MODAL_OPENED, { location_stack: t }),
            (0, s.ZDy)(async () => {
                let { Recurring3PModal: e } = await Promise.resolve().then(n.bind(n, 469165));
                return (t) => (0, r.jsx)(e, N({}, t));
            });
    };
