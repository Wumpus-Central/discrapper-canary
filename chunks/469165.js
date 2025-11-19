n.d(t, {
    Recurring3PModal: () => B,
    gu: () => j,
    wQ: () => Z,
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
    _ = n(960048),
    p = n(638212),
    h = n(518638),
    m = n(748770),
    g = n(725727),
    E = n(1844),
    b = n(397047),
    y = n(823581),
    O = n(902135),
    v = n(474936),
    I = n(981631),
    T = n(388032),
    S = n(927143),
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
function D(e, t) {
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
let w = {
        [b.fA]: {
            title: T.t.sfGgOG,
            body: T.t.igiSKe,
            bodyWithExpiration: T.t.w8CXUl,
            redemptionURL: "https://steelseries.com/",
            logos: {
                dark: (0, r.jsx)(y.U3, {}),
                light: (0, r.jsx)(y.gf, {}),
            },
            asset: C.Z,
        },
        [b.dh]: {
            title: T.t["9N8obd"],
            body: T.t["34g+Z3"],
            bodyWithExpiration: T.t.rqmpXc,
            redemptionURL: "https://www.kontrolfreek.com/",
            logos: {
                dark: (0, r.jsx)(y.dt, {}),
                light: (0, r.jsx)(y.QD, {}),
            },
            asset: A.Z,
        },
    },
    L = (e) => ((0, o.e7)([l.Z], () => (0, a.wjy)(l.Z.theme)) ? w[e].logos.dark : w[e].logos.light),
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
                className: S.claimedFooterContainer,
                children: (0, r.jsxs)("div", {
                    className: S.claimedFooter,
                    children: [
                        (0, r.jsx)("div", {
                            className: S.claimedFooterCode,
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
                            text: T.intl.formatToPlainString(T.t.DF68t7, { redemptionURL: t.redemptionURL }),
                            onClick: () => {
                                window.open(t.redemptionURL, "_blank"),
                                    u.default.track(I.rMx.RECURRING_PROMOTION_CLAIMED);
                            },
                        }),
                    ],
                }),
            });
    },
    M = () =>
        Object.entries(w).map((e) => {
            let [t, n] = e;
            return (0, r.jsx)(
                "div",
                {
                    className: S.promoCardContainer,
                    children: (0, r.jsxs)("div", {
                        className: S.wrap,
                        children: [
                            (0, r.jsxs)("div", {
                                className: S.promoCardContent,
                                children: [
                                    (0, r.jsx)("div", {
                                        className: S.lockIconContainer,
                                        children: (0, r.jsx)(a.mBM, { size: "refresh_sm" }),
                                    }),
                                    (0, r.jsxs)("div", {
                                        className: S.promoCardContentText,
                                        children: [
                                            (0, r.jsx)(a.X6q, {
                                                variant: "heading-lg/semibold",
                                                color: "text-primary",
                                                children: T.intl.string(n.title),
                                            }),
                                            (0, r.jsx)(a.X6q, {
                                                variant: "heading-sm/medium",
                                                color: "text-secondary",
                                                children: T.intl.string(n.body),
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                            (0, r.jsx)("div", {
                                className: S.promoCardAssetContainer,
                                children: (0, r.jsx)(s.Eep, {
                                    src: n.asset,
                                    className: S.promoCardAsset,
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
    k = (e) => {
        let { promotionRecurrences: t } = e,
            [n, o] = i.useState(t.length > 1),
            [l, c] = i.useState([]),
            [u, f] = i.useState(new Set());
        i.useEffect(() => {
            c([t.sort((e, t) => (t.startDate > e.startDate ? 1 : -1))[0]]);
        }, [t]);
        let p = L(t[0].partnerId),
            m = (0, r.jsx)(s.Eep, {
                src: t[0].asset,
                className: S.promoCardAsset,
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
                            className: S.promoCardContainer,
                            children: [
                                (0, r.jsxs)("div", {
                                    className: S.wrap,
                                    children: [
                                        (0, r.jsxs)("div", {
                                            className: S.promoCardContent,
                                            children: [
                                                p,
                                                (0, r.jsxs)("div", {
                                                    className: S.promoCardContentText,
                                                    children: [
                                                        (0, r.jsx)(a.X6q, {
                                                            variant: "heading-lg/semibold",
                                                            color: "text-primary",
                                                            children: T.intl.string(e.title),
                                                        }),
                                                        (0, r.jsx)(a.X6q, {
                                                            variant: "heading-sm/medium",
                                                            color: "text-secondary",
                                                            children: n
                                                                ? T.intl.format(T.t.i2EuFO, {
                                                                      helpdeskArticle: d.Z.getArticleURL(
                                                                          I.BhN.RECURRING_PROMOTION,
                                                                      ),
                                                                  })
                                                                : i
                                                                  ? T.intl.string(e.body)
                                                                  : T.intl.format(e.bodyWithExpiration, {
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
                                                              text: T.intl.string(T.t["8LKchl"]),
                                                          })
                                                        : (0, r.jsx)(a.zxk, {
                                                              icon: a.mBM,
                                                              variant: "overlay-primary",
                                                              size: "sm",
                                                              text: T.intl.string(T.t.vwASIl),
                                                              onClick: () => {
                                                                  (0, h.A2)(e.id)
                                                                      .then((n) => {
                                                                          c([
                                                                              ...l.slice(0, t),
                                                                              D(R({}, e), { code: n.code }),
                                                                              ...l.slice(t + 1),
                                                                          ]);
                                                                      })
                                                                      .catch((t) => {
                                                                          f((t) => new Set([...t, e.id])),
                                                                              _.Z.captureException(t);
                                                                      });
                                                              },
                                                          })),
                                            ],
                                        }),
                                        (0, r.jsx)("div", {
                                            className: S.promoCardAssetContainer,
                                            children: m,
                                        }),
                                    ],
                                }),
                                null != e.code && (0, r.jsx)(x, { recurrence: e }),
                            ],
                        },
                        e.id,
                    );
                }),
                n &&
                    (0, r.jsx)(a.P3F, {
                        className: S.extraCodeButton,
                        onClick: () => {
                            o(!1), c([...l, ...t.slice(1)]);
                        },
                        children: (0, r.jsx)(a.xvT, {
                            variant: "text-sm/medium",
                            color: "text-secondary",
                            children: T.intl.string(T.t.rjjZxV),
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
                    className: S.progressBarIndicator,
                    style: { left: "".concat(t - e, "%") },
                    children: (0, r.jsx)(O.G, {}),
                });
            };
        return (0, r.jsxs)("div", {
            className: S.progressBar,
            children: [
                t > 0 && t < 100 && (0, r.jsx)(n, {}),
                (0, r.jsx)("div", {
                    className: S.progressBarFill,
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
                .filter((e) => !0 === (0, h.pD)({ promotionPartner: e.outboundTitle }))
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
        let { onClose: t } = e,
            { promotionsLoaded: n, claimedOutboundPromotionCodeMap: i } = (0, g.lG)(),
            s = (0, o.Wu)([E.Z], () => E.Z.outboundRecurringPromotions),
            l = (0, o.e7)([c.default], () => c.default.getCurrentUser()),
            u = !1 === f.ZP.isPremiumExactly(l, v.PremiumTypes.TIER_2),
            _ = null == l ? void 0 : l.isFractionalPremiumWithNoSubscription(),
            h = null == l || u || _;
        if (!1 === n) return (0, r.jsx)(a.$jN, {});
        let b = G({
                promotions: s,
                codesByPromotion: i,
            }),
            y = () => {
                if (!0 === h)
                    return (0, r.jsx)(p.Z, {
                        subscriptionTier: v.Si.TIER_2,
                        fullWidth: !0,
                        onClick: () => {
                            t();
                        },
                        onSubscribeModalClose: (e) => {
                            if (e) return m.ZP.fetchActivePromotions();
                        },
                    });
            },
            O = () => {
                let e = new Date(),
                    t = new Date(e.getFullYear(), e.getMonth() + 1, 0).getDate(),
                    n = (e.getDate() / t) * 100;
                return h
                    ? (0, r.jsx)(M, {})
                    : (0, r.jsxs)("div", {
                          className: S.container,
                          children: [
                              (0, r.jsx)("div", {
                                  className: S.progressHeader,
                                  children: (0, r.jsx)(a.xvT, {
                                      variant: "text-md/medium",
                                      color: "text-secondary",
                                      children: T.intl.format(T.t["43kZKL"], { days: t - e.getDate() }),
                                  }),
                              }),
                              (0, r.jsx)(j, { percentage: n }),
                              (0, r.jsx)("div", {
                                  className: S.cards,
                                  children: Object.entries(b)
                                      .sort((e, t) => {
                                          let [n] = e,
                                              [r] = t;
                                          return r.localeCompare(n);
                                      })
                                      .map((e) => {
                                          let [t, n] = e;
                                          return (0, r.jsx)(k, { promotionRecurrences: n }, t);
                                      }),
                              }),
                          ],
                      });
            };
        return (0, r.jsx)(a.Modal, {
            title: T.intl.string(T.t["7ioAjs"]),
            subtitle: T.intl.format(T.t.LOYRxB, { helpCenterLink: d.Z.getArticleURL(I.BhN.RECURRING_PROMOTION) }),
            actions: [],
            preview: y(),
            transitionState: a.Dvm.ENTERED,
            onClose: t,
            children: O(),
        });
    },
    Z = (e) => {
        let { analyticsLocations: t } = e;
        u.default.track(I.rMx.RECURRING_PROMOTION_MODAL_OPENED, { location_stack: t }),
            (0, s.ZDy)(async () => {
                let { Recurring3PModal: e } = await Promise.resolve().then(n.bind(n, 469165));
                return (t) => (0, r.jsx)(e, R({}, t));
            });
    };
