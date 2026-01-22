n.d(t, {
    PR: () => k,
    Recurring3PModal: () => F,
    uE: () => B,
}),
    n(896048),
    n(638769),
    n(321073);
var r = n(627968),
    i = n(64700),
    a = n(158954),
    s = n(311907),
    o = n(397927),
    l = n(544028),
    c = n(287809),
    u = n(954571),
    d = n(975571),
    f = n(927578),
    p = n(728458),
    _ = n(792656),
    h = n(264779),
    m = n(597758),
    g = n(35587),
    E = n(412260),
    b = n(852218),
    y = n(699443),
    O = n(934204),
    A = n(788868),
    v = n(652215),
    S = n(985018),
    I = n(342087),
    T = n(870378),
    C = n(8496);
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
function w(e, t) {
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
            : w(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let D = {
        [b.KS]: {
            title: S.t.sfGgOG,
            body: S.t.igiSKe,
            bodyWithExpiration: S.t.w8CXUl,
            redemptionURL: "https://steelseries.com/",
            logos: {
                dark: (0, r.jsx)(y.a1, {}),
                light: (0, r.jsx)(y.Gn, {}),
            },
            asset: C.A,
        },
        [b.Cs]: {
            title: S.t["9N8obd"],
            body: S.t["34g+Z3"],
            bodyWithExpiration: S.t.rqmpXc,
            redemptionURL: "https://www.kontrolfreek.com/",
            logos: {
                dark: (0, r.jsx)(y.WF, {}),
                light: (0, r.jsx)(y.s, {}),
            },
            asset: T.A,
        },
    },
    x = (e) => {
        let t = (0, s.bG)([l.A], () => (0, a.Mwr)(l.A.theme)),
            n = D[e];
        return null == n ? null : t ? n.logos.dark : n.logos.light;
    },
    L = (e) => {
        let { recurrence: t } = e,
            n = (0, r.jsx)(a.rOg, { color: o.LU0.colors.CONTROL_CONNECTED_BACKGROUND_DEFAULT }),
            s = (0, r.jsx)(a.K0, {
                icon: a.TdU,
                size: "sm",
                variant: "secondary",
                "aria-label": "",
                color: "icon-feedback-positive",
                onClick: () => {
                    navigator.clipboard.writeText(t.code), c(n);
                },
            }),
            [l, c] = i.useState(() => s);
        if (null != t.code)
            return (0, r.jsx)("div", {
                className: I.oP,
                children: (0, r.jsxs)("div", {
                    className: I.t0,
                    children: [
                        (0, r.jsx)("div", {
                            className: I.cD,
                            children: (0, r.jsx)(a.EYj, {
                                variant: "text-md/medium",
                                color: "text-strong",
                                children: t.code,
                            }),
                        }),
                        l,
                        (0, r.jsx)(a.$nd, {
                            variant: "overlay-primary",
                            size: "sm",
                            text: S.intl.formatToPlainString(S.t.DF68t7, { redemptionURL: t.redemptionURL }),
                            onClick: () => {
                                window.open(t.redemptionURL, "_blank"),
                                    u.default.track(v.HAw.RECURRING_PROMOTION_CLAIMED);
                            },
                        }),
                    ],
                }),
            });
    },
    j = () =>
        Object.entries(D).map((e) => {
            let [t, n] = e;
            return (0, r.jsx)(
                "div",
                {
                    className: I.lA,
                    children: (0, r.jsxs)("div", {
                        className: I.LV,
                        children: [
                            (0, r.jsxs)("div", {
                                className: I.JN,
                                children: [
                                    (0, r.jsx)("div", {
                                        className: I.MC,
                                        children: (0, r.jsx)(a.XAi, { size: "refresh_sm" }),
                                    }),
                                    (0, r.jsxs)("div", {
                                        className: I.yO,
                                        children: [
                                            (0, r.jsx)(a.DZT, {
                                                variant: "heading-lg/semibold",
                                                color: "text-strong",
                                                children: S.intl.string(n.title),
                                            }),
                                            (0, r.jsx)(a.DZT, {
                                                variant: "heading-sm/medium",
                                                color: "text-subtle",
                                                children: S.intl.string(n.body),
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                            (0, r.jsx)("div", {
                                className: I.R4,
                                children: (0, r.jsx)(o._V3, {
                                    src: n.asset,
                                    className: I.Ys,
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
            [n, s] = i.useState(t.length > 1),
            [l, c] = i.useState([]),
            [u, f] = i.useState(new Set());
        i.useEffect(() => {
            c([t.sort((e, t) => (t.startDate > e.startDate ? 1 : -1))[0]]);
        }, [t]);
        let _ = x(t[0].partnerId),
            m = (0, r.jsx)(o._V3, {
                src: t[0].asset,
                className: I.Ys,
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
                            className: I.lA,
                            children: [
                                (0, r.jsxs)("div", {
                                    className: I.LV,
                                    children: [
                                        (0, r.jsxs)("div", {
                                            className: I.JN,
                                            children: [
                                                _,
                                                (0, r.jsxs)("div", {
                                                    className: I.yO,
                                                    children: [
                                                        (0, r.jsx)(a.DZT, {
                                                            variant: "heading-lg/semibold",
                                                            color: "text-strong",
                                                            children: S.intl.string(e.title),
                                                        }),
                                                        (0, r.jsx)(a.DZT, {
                                                            variant: "heading-sm/medium",
                                                            color: "text-subtle",
                                                            children: n
                                                                ? S.intl.format(S.t.i2EuFO, {
                                                                      helpdeskArticle: d.A.getArticleURL(
                                                                          v.MVz.RECURRING_PROMOTION,
                                                                      ),
                                                                  })
                                                                : i
                                                                  ? S.intl.string(e.body)
                                                                  : S.intl.format(e.bodyWithExpiration, {
                                                                        date: e.endDate,
                                                                    }),
                                                        }),
                                                    ],
                                                }),
                                                i &&
                                                    (n
                                                        ? (0, r.jsx)(a.$nd, {
                                                              icon: a.EpV,
                                                              variant: "critical-secondary",
                                                              size: "sm",
                                                              disabled: !0,
                                                              text: S.intl.string(S.t["8LKchl"]),
                                                          })
                                                        : (0, r.jsx)(a.$nd, {
                                                              icon: a.XAi,
                                                              variant: "overlay-primary",
                                                              size: "sm",
                                                              text: S.intl.string(S.t.vwASIl),
                                                              onClick: () => {
                                                                  (0, h.kd)({
                                                                      promotionId: e.id,
                                                                      analyticsLocations: [],
                                                                  })
                                                                      .then((n) => {
                                                                          c([
                                                                              ...l.slice(0, t),
                                                                              P(R({}, e), { code: n.code }),
                                                                              ...l.slice(t + 1),
                                                                          ]);
                                                                      })
                                                                      .catch((t) => {
                                                                          f((t) => new Set([...t, e.id])),
                                                                              p.A.captureException(t);
                                                                      });
                                                              },
                                                          })),
                                            ],
                                        }),
                                        (0, r.jsx)("div", {
                                            className: I.R4,
                                            children: m,
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
                    (0, r.jsx)(a.DUT, {
                        className: I.K8,
                        onClick: () => {
                            s(!1), c([...l, ...t.slice(1)]);
                        },
                        children: (0, r.jsx)(a.EYj, {
                            variant: "text-sm/medium",
                            color: "text-subtle",
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
                    className: I.ML,
                    style: { left: "".concat(t - e, "%") },
                    children: (0, r.jsx)(O.z, {}),
                });
            };
        return (0, r.jsxs)("div", {
            className: I.hr,
            children: [
                t > 0 && t < 100 && (0, r.jsx)(n, {}),
                (0, r.jsx)("div", {
                    className: I.SX,
                    style: { width: "".concat(t, "%") },
                }),
            ],
        });
    },
    U = (e) => {
        if (e.promotionType === b.pt.THIRD_PARTY_OUTBOUND_RECURRING) {
            var t, n;
            return null != (t = null == (n = e.partnerId) ? void 0 : n.toLowerCase()) ? t : null;
        }
        return e.outboundTitle.toLowerCase();
    },
    G = (e) => {
        var t;
        let { promotion: n } = e,
            r = U(n);
        return null == r ? null : null != (t = D[r]) ? t : null;
    },
    V = (e) => {
        let { promotions: t, codesByPromotion: n } = e,
            r = {};
        return (
            t
                .filter(
                    (e) =>
                        !0 ===
                        (0, h.HB)({
                            promotionPartner: e.outboundTitle,
                            promotionType: e.promotionType,
                        }),
                )
                .forEach((e) => {
                    var t;
                    let i = U(e),
                        a = G({ promotion: e });
                    if (null == i || null == a) return;
                    i in r || (r[i] = []);
                    let s = R(
                        {
                            id: e.id,
                            partnerId: i,
                            startDate: e.startDate,
                            endDate: e.endDate,
                            code: null != (t = n[e.id]) ? t : null,
                        },
                        a,
                    );
                    r[i].push(s);
                }),
            r
        );
    },
    F = (e) => {
        let { onClose: t } = e,
            { promotionsLoaded: n, claimedOutboundPromotionCodeMap: i } = (0, g.y7)(),
            o = (0, s.yK)([E.A], () => E.A.outboundRecurringPromotions),
            l = (0, s.bG)([c.default], () => c.default.getCurrentUser()),
            u = !1 === f.Ay.isPremiumExactly(l, A.PremiumTypes.TIER_2),
            p = null == l ? void 0 : l.isFractionalPremiumWithNoStandardSub(),
            h = null == l || u || p;
        if (!1 === n) return (0, r.jsx)(a.y$y, {});
        let b = V({
                promotions: o,
                codesByPromotion: i,
            }),
            y = () => {
                if (!0 === h)
                    return (0, r.jsx)(_.A, {
                        subscriptionTier: A.pe.TIER_2,
                        fullWidth: !0,
                        onClick: () => {
                            t();
                        },
                        onSubscribeModalClose: (e) => {
                            if (e) return m.Ay.fetchActivePromotions();
                        },
                    });
            },
            O = () => {
                let e = new Date(new Date().toLocaleString("en-US", { timeZone: "America/New_York" })),
                    t = new Date(e.getFullYear(), e.getMonth() + 1, 0).getDate(),
                    n = (e.getDate() / t) * 100;
                return h
                    ? (0, r.jsx)(j, {})
                    : (0, r.jsxs)("div", {
                          className: I.kL,
                          children: [
                              (0, r.jsx)("div", {
                                  className: I.Ps,
                                  children: (0, r.jsx)(a.EYj, {
                                      variant: "text-md/medium",
                                      color: "text-subtle",
                                      children: S.intl.format(S.t["43kZKL"], { days: t - e.getDate() }),
                                  }),
                              }),
                              (0, r.jsx)(k, { percentage: n }),
                              (0, r.jsx)("div", {
                                  className: I.kR,
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
            title: S.intl.string(S.t["7ioAjs"]),
            subtitle: S.intl.format(S.t.LOYRxB, { helpCenterLink: d.A.getArticleURL(v.MVz.RECURRING_PROMOTION) }),
            actions: [],
            preview: y(),
            transitionState: a.ip4.ENTERED,
            onClose: t,
            children: O(),
        });
    },
    B = (e) => {
        let { analyticsLocations: t } = e;
        u.default.track(v.HAw.RECURRING_PROMOTION_MODAL_OPENED, { location_stack: t }),
            m.Ay.fetchActivePromotions(),
            (0, o.mMO)(async () => {
                let { Recurring3PModal: e } = await Promise.resolve().then(n.bind(n, 161319));
                return (t) => (0, r.jsx)(e, R({}, t));
            });
    };
