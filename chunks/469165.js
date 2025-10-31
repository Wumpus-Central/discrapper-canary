n.d(t, {
    EA: () => k,
    Recurring3PModal: () => U,
    gu: () => x,
    wQ: () => G,
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
    g = n(823581),
    E = n(902135),
    b = n(474936),
    y = n(981631),
    O = n(388032),
    v = n(737963),
    I = n(180964),
    T = n(730440);
function S(e, t, n) {
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
function A(e) {
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
                S(e, t, n[t]);
            });
    }
    return e;
}
function C(e, t) {
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
function N(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : C(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let R = (e) => ((0, o.e7)([l.Z], () => (0, a.wjy)(l.Z.theme)) ? M[e].logos.dark : M[e].logos.light),
    P = (e) => {
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
                className: v.claimedFooterContainer,
                children: (0, r.jsxs)("div", {
                    className: v.claimedFooter,
                    children: [
                        (0, r.jsx)("div", {
                            className: v.claimedFooterCode,
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
                            text: O.intl.formatToPlainString(O.t.DF68t7, { redemptionURL: t.redemptionURL }),
                            onClick: () => {
                                window.open(t.redemptionURL, "_blank"),
                                    u.default.track(y.rMx.RECURRING_PROMOTION_CLAIMED);
                            },
                        }),
                    ],
                }),
            });
    },
    w = () =>
        Object.entries(M).map((e) => {
            let [t, n] = e;
            return (0, r.jsx)(
                "div",
                {
                    className: v.promoCardContainer,
                    children: (0, r.jsxs)("div", {
                        className: v.wrap,
                        children: [
                            (0, r.jsxs)("div", {
                                className: v.promoCardContent,
                                children: [
                                    (0, r.jsx)("div", {
                                        className: v.lockIconContainer,
                                        children: (0, r.jsx)(a.mBM, { size: "refresh_sm" }),
                                    }),
                                    (0, r.jsxs)("div", {
                                        className: v.promoCardContentText,
                                        children: [
                                            (0, r.jsx)(a.X6q, {
                                                variant: "heading-lg/semibold",
                                                color: "text-primary",
                                                children: n.title,
                                            }),
                                            (0, r.jsx)(a.X6q, {
                                                variant: "heading-sm/medium",
                                                color: "text-secondary",
                                                children: n.body,
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                            (0, r.jsx)("div", {
                                className: v.promoCardAssetContainer,
                                children: (0, r.jsx)(s.Eep, {
                                    src: n.asset,
                                    className: v.promoCardAsset,
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
    D = (e) => {
        let { promotionRecurrences: t } = e,
            [n, o] = i.useState(t.length > 1),
            [l, c] = i.useState([]);
        i.useEffect(() => {
            c([t.sort((e, t) => (t.startDate > e.startDate ? 1 : -1))[0]]);
        }, [t]);
        let u = R(t[0].partnerId),
            d = (0, r.jsx)(s.Eep, {
                src: t[0].asset,
                className: v.promoCardAsset,
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
                            className: v.promoCardContainer,
                            children: [
                                (0, r.jsxs)("div", {
                                    className: v.wrap,
                                    children: [
                                        (0, r.jsxs)("div", {
                                            className: v.promoCardContent,
                                            children: [
                                                u,
                                                (0, r.jsxs)("div", {
                                                    className: v.promoCardContentText,
                                                    children: [
                                                        (0, r.jsx)(a.X6q, {
                                                            variant: "heading-lg/semibold",
                                                            color: "text-primary",
                                                            children: e.title,
                                                        }),
                                                        (0, r.jsx)(a.X6q, {
                                                            variant: "heading-sm/medium",
                                                            color: "text-secondary",
                                                            children:
                                                                null != e.code
                                                                    ? O.intl.format(e.bodyWithExpiration, {
                                                                          date: e.endDate,
                                                                      })
                                                                    : e.body,
                                                        }),
                                                    ],
                                                }),
                                                null == e.code &&
                                                    (0, r.jsx)(a.zxk, {
                                                        icon: a.mBM,
                                                        variant: "overlay-primary",
                                                        size: "sm",
                                                        text: O.intl.string(O.t.vwASIl),
                                                        onClick: () => {
                                                            (0, h.A2)(e.id)
                                                                .then((n) => {
                                                                    c([
                                                                        ...l.slice(0, t),
                                                                        N(A({}, e), { code: n.code }),
                                                                        ...l.slice(t + 1),
                                                                    ]);
                                                                })
                                                                .catch((e) => _.Z.captureException(e));
                                                        },
                                                    }),
                                            ],
                                        }),
                                        (0, r.jsx)("div", {
                                            className: v.promoCardAssetContainer,
                                            children: d,
                                        }),
                                    ],
                                }),
                                null != e.code && (0, r.jsx)(P, { recurrence: e }),
                            ],
                        },
                        e.id,
                    ),
                ),
                n &&
                    (0, r.jsx)(a.P3F, {
                        className: v.extraCodeButton,
                        onClick: () => {
                            o(!1), c([...l, ...t.slice(1)]);
                        },
                        children: (0, r.jsx)(a.xvT, {
                            variant: "text-sm/medium",
                            color: "text-secondary",
                            children: O.intl.string(O.t.rjjZxV),
                        }),
                    }),
            ],
        });
    },
    x = (e) => {
        let { percentage: t } = e,
            n = () => {
                let e = 1.8;
                return (0, r.jsx)("div", {
                    className: v.progressBarIndicator,
                    style: { left: "".concat(t - e, "%") },
                    children: (0, r.jsx)(E.G, {}),
                });
            };
        return (0, r.jsxs)("div", {
            className: v.progressBar,
            children: [
                t > 0 && t < 100 && (0, r.jsx)(n, {}),
                (0, r.jsx)("div", {
                    className: v.progressBarFill,
                    style: { width: "".concat(t, "%") },
                }),
            ],
        });
    },
    L = "kontrolfreek",
    M = {
        steelseries: {
            title: O.intl.string(O.t.sfGgOG),
            body: O.intl.string(O.t.igiSKe),
            bodyWithExpiration: O.t.w8CXUl,
            redemptionURL: "https://steelseries.com/",
            logos: {
                dark: (0, r.jsx)(g.U3, {}),
                light: (0, r.jsx)(g.gf, {}),
            },
            asset: T.Z,
        },
        [L]: {
            title: O.intl.string(O.t["9N8obd"]),
            body: O.intl.string(O.t["34g+Z3"]),
            bodyWithExpiration: O.t.rqmpXc,
            redemptionURL: "https://www.kontrolfreek.com/",
            logos: {
                dark: (0, r.jsx)(g.dt, {}),
                light: (0, r.jsx)(g.QD, {}),
            },
            asset: I.Z,
        },
    },
    k = (e) => {
        var t;
        let { promotion: n } = e;
        return null != (t = M[n.outboundTitle.toLowerCase()]) ? t : null;
    },
    j = (e) => {
        let { promotions: t, codesByPromotion: n } = e,
            r = {};
        return (
            t
                .filter((e) => null !== k({ promotion: e }))
                .map((e) => {
                    var t;
                    let i = e.outboundTitle.toLowerCase(),
                        a = k({ promotion: e });
                    i in r || (r[i] = []);
                    let o = A(
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
    U = (e) => {
        let { onClose: t } = e,
            { promotionsLoaded: n, activeOutboundPromotions: i, claimedOutboundPromotionCodeMap: s } = (0, m.lG)(),
            l =
                !1 ===
                (0, o.e7)([c.default], () => f.ZP.isPremiumExactly(c.default.getCurrentUser(), b.PremiumTypes.TIER_2));
        if (!1 === n) return (0, r.jsx)(a.$jN, {});
        let u = j({
                promotions: i,
                codesByPromotion: s,
            }),
            _ = () => {
                if (!0 === l)
                    return (0, r.jsx)(p.Z, {
                        subscriptionTier: b.Si.TIER_2,
                        fullWidth: !0,
                    });
            },
            h = () => {
                let e = new Date(),
                    t = new Date(e.getFullYear(), e.getMonth() + 1, 0).getDate(),
                    n = (e.getDate() / t) * 100;
                return l
                    ? (0, r.jsx)(w, {})
                    : (0, r.jsxs)("div", {
                          className: v.container,
                          children: [
                              (0, r.jsx)("div", {
                                  className: v.progressHeader,
                                  children: (0, r.jsx)(a.xvT, {
                                      variant: "text-md/medium",
                                      color: "text-secondary",
                                      children: O.intl.format(O.t["43kZKL"], { days: t - e.getDate() }),
                                  }),
                              }),
                              (0, r.jsx)(x, { percentage: n }),
                              (0, r.jsx)("div", {
                                  className: v.cards,
                                  children: Object.entries(u).map((e) => {
                                      let [t, n] = e;
                                      return (0, r.jsx)(D, { promotionRecurrences: n }, t);
                                  }),
                              }),
                          ],
                      });
            };
        return (0, r.jsx)(a.Modal, {
            title: O.intl.string(O.t["7ioAjs"]),
            subtitle: O.intl.format(O.t.LOYRxB, { helpCenterLink: d.Z.getArticleURL(y.BhN.RECURRING_PROMOTION) }),
            actions: [],
            preview: _(),
            transitionState: a.Dvm.ENTERED,
            onClose: t,
            children: h(),
        });
    },
    G = (e) => {
        let { analyticsLocations: t } = e;
        u.default.track(y.rMx.RECURRING_PROMOTION_MODAL_OPENED, { location_stack: t }),
            (0, s.ZDy)(async () => {
                let { Recurring3PModal: e } = await Promise.resolve().then(n.bind(n, 469165));
                return (t) => (0, r.jsx)(e, A({}, t));
            });
    };
