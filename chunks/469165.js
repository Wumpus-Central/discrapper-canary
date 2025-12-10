n.d(t, {
    Recurring3PModal: () => Z,
    gu: () => k,
    wQ: () => B,
}),
    n(388685),
    n(642613),
    n(539854);
var r = n(54381),
    i = n(473749),
    a = n(793030),
    o = n(442837),
    s = n(481060),
    l = n(210887),
    c = n(594174),
    u = n(626135),
    d = n(63063),
    f = n(74538),
    p = n(960048),
    _ = n(638212),
    m = n(518638),
    h = n(748770),
    g = n(725727),
    E = n(1844),
    b = n(397047),
    y = n(823581),
    O = n(902135),
    v = n(474936),
    S = n(981631),
    I = n(388032),
    T = n(737963),
    C = n(180964),
    A = n(730440);
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
function P(e) {
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
function D(e, t) {
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
        [b.fA]: {
            title: I.t.sfGgOG,
            body: I.t.igiSKe,
            bodyWithExpiration: I.t.w8CXUl,
            redemptionURL: "https://steelseries.com/",
            logos: {
                dark: (0, r.jsx)(y.U3, {}),
                light: (0, r.jsx)(y.gf, {}),
            },
            asset: A.Z,
        },
        [b.dh]: {
            title: I.t["9N8obd"],
            body: I.t["34g+Z3"],
            bodyWithExpiration: I.t.rqmpXc,
            redemptionURL: "https://www.kontrolfreek.com/",
            logos: {
                dark: (0, r.jsx)(y.dt, {}),
                light: (0, r.jsx)(y.QD, {}),
            },
            asset: C.Z,
        },
    },
    x = (e) => ((0, o.e7)([l.Z], () => (0, a.wjy)(l.Z.theme)) ? w[e].logos.dark : w[e].logos.light),
    L = (e) => {
        let { recurrence: t } = e,
            n = (0, r.jsx)(a.sV5, { color: s.TVs.colors.CONTROL_CONNECT_BACKGROUND_DEFAULT }),
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
                                color: "text-strong",
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
                                    u.default.track(S.rMx.RECURRING_PROMOTION_CLAIMED);
                            },
                        }),
                    ],
                }),
            });
    },
    j = () =>
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
                                                color: "text-strong",
                                                children: I.intl.string(n.title),
                                            }),
                                            (0, r.jsx)(a.X6q, {
                                                variant: "heading-sm/medium",
                                                color: "text-subtle",
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
            [l, c] = i.useState([]),
            [u, f] = i.useState(new Set());
        i.useEffect(() => {
            c([t.sort((e, t) => (t.startDate > e.startDate ? 1 : -1))[0]]);
        }, [t]);
        let _ = x(t[0].partnerId),
            h = (0, r.jsx)(s.Eep, {
                src: t[0].asset,
                className: T.promoCardAsset,
                width: 100,
                height: 100,
                zoomable: !1,
            });
        return (0, r.jsxs)("div", {
            children: [
                l.map((e, t) => {
                    let n = u.has(e.id),
                        i = null == e.code;
                    return (0, r.jsxs)(
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
                                                _,
                                                (0, r.jsxs)("div", {
                                                    className: T.promoCardContentText,
                                                    children: [
                                                        (0, r.jsx)(a.X6q, {
                                                            variant: "heading-lg/semibold",
                                                            color: "text-strong",
                                                            children: I.intl.string(e.title),
                                                        }),
                                                        (0, r.jsx)(a.X6q, {
                                                            variant: "heading-sm/medium",
                                                            color: "text-subtle",
                                                            children: n
                                                                ? I.intl.format(I.t.i2EuFO, {
                                                                      helpdeskArticle: d.Z.getArticleURL(
                                                                          S.BhN.RECURRING_PROMOTION,
                                                                      ),
                                                                  })
                                                                : i
                                                                  ? I.intl.string(e.body)
                                                                  : I.intl.format(e.bodyWithExpiration, {
                                                                        date: e.endDate,
                                                                    }),
                                                        }),
                                                    ],
                                                }),
                                                i &&
                                                    (n
                                                        ? (0, r.jsx)(a.zxk, {
                                                              icon: a.Mgn,
                                                              variant: "critical-secondary",
                                                              size: "sm",
                                                              disabled: !0,
                                                              text: I.intl.string(I.t["8LKchl"]),
                                                          })
                                                        : (0, r.jsx)(a.zxk, {
                                                              icon: a.mBM,
                                                              variant: "overlay-primary",
                                                              size: "sm",
                                                              text: I.intl.string(I.t.vwASIl),
                                                              onClick: () => {
                                                                  (0, m.A2)({
                                                                      promotionId: e.id,
                                                                      analyticsLocations: [],
                                                                  })
                                                                      .then((n) => {
                                                                          c([
                                                                              ...l.slice(0, t),
                                                                              D(P({}, e), { code: n.code }),
                                                                              ...l.slice(t + 1),
                                                                          ]);
                                                                      })
                                                                      .catch((t) => {
                                                                          f((t) => new Set([...t, e.id])),
                                                                              p.Z.captureException(t);
                                                                      });
                                                              },
                                                          })),
                                            ],
                                        }),
                                        (0, r.jsx)("div", {
                                            className: T.promoCardAssetContainer,
                                            children: h,
                                        }),
                                    ],
                                }),
                                null != e.code && (0, r.jsx)(L, { recurrence: e }),
                            ],
                        },
                        e.id,
                    );
                }),
                n &&
                    (0, r.jsx)(a.P3F, {
                        className: T.extraCodeButton,
                        onClick: () => {
                            o(!1), c([...l, ...t.slice(1)]);
                        },
                        children: (0, r.jsx)(a.xvT, {
                            variant: "text-sm/medium",
                            color: "text-subtle",
                            children: I.intl.string(I.t.rjjZxV),
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
        return null != (t = w[n.outboundTitle.toLowerCase()]) ? t : null;
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
                    let o = P(
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
    Z = (e) => {
        let { onClose: t } = e,
            { promotionsLoaded: n, claimedOutboundPromotionCodeMap: i } = (0, g.lG)(),
            s = (0, o.Wu)([E.Z], () => E.Z.outboundRecurringPromotions),
            l = (0, o.e7)([c.default], () => c.default.getCurrentUser()),
            u = !1 === f.ZP.isPremiumExactly(l, v.PremiumTypes.TIER_2),
            p = null == l ? void 0 : l.isFractionalPremiumWithNoSubscription(),
            m = null == l || u || p;
        if (!1 === n) return (0, r.jsx)(a.$jN, {});
        let b = G({
                promotions: s,
                codesByPromotion: i,
            }),
            y = () => {
                if (!0 === m)
                    return (0, r.jsx)(_.Z, {
                        subscriptionTier: v.Si.TIER_2,
                        fullWidth: !0,
                        onClick: () => {
                            t();
                        },
                        onSubscribeModalClose: (e) => {
                            if (e) return h.ZP.fetchActivePromotions();
                        },
                    });
            },
            O = () => {
                let e = new Date(new Date().toLocaleString("en-US", { timeZone: "America/New_York" })),
                    t = new Date(e.getFullYear(), e.getMonth() + 1, 0).getDate(),
                    n = (e.getDate() / t) * 100;
                return m
                    ? (0, r.jsx)(j, {})
                    : (0, r.jsxs)("div", {
                          className: T.container,
                          children: [
                              (0, r.jsx)("div", {
                                  className: T.progressHeader,
                                  children: (0, r.jsx)(a.xvT, {
                                      variant: "text-md/medium",
                                      color: "text-subtle",
                                      children: I.intl.format(I.t["43kZKL"], { days: t - e.getDate() }),
                                  }),
                              }),
                              (0, r.jsx)(k, { percentage: n }),
                              (0, r.jsx)("div", {
                                  className: T.cards,
                                  children: Object.entries(b)
                                      .sort((e, t) => {
                                          let [n] = e,
                                              [r] = t;
                                          return r.localeCompare(n);
                                      })
                                      .map((e) => {
                                          let [t, n] = e;
                                          return (0, r.jsx)(M, { promotionRecurrences: n }, t);
                                      }),
                              }),
                          ],
                      });
            };
        return (0, r.jsx)(a.Modal, {
            title: I.intl.string(I.t["7ioAjs"]),
            subtitle: I.intl.format(I.t.LOYRxB, { helpCenterLink: d.Z.getArticleURL(S.BhN.RECURRING_PROMOTION) }),
            actions: [],
            preview: y(),
            transitionState: a.Dvm.ENTERED,
            onClose: t,
            children: O(),
        });
    },
    B = (e) => {
        let { analyticsLocations: t } = e;
        u.default.track(S.rMx.RECURRING_PROMOTION_MODAL_OPENED, { location_stack: t }),
            (0, s.ZDy)(async () => {
                let { Recurring3PModal: e } = await Promise.resolve().then(n.bind(n, 469165));
                return (t) => (0, r.jsx)(e, P({}, t));
            });
    };
