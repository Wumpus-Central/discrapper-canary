n.d(t, {
    PR: () => D,
    Recurring3PModal: () => w,
    uE: () => M,
}),
    n(896048),
    n(638769),
    n(321073);
var r = n(627968),
    i = n(64700),
    l = n(158954),
    s = n(311907),
    a = n(397927),
    o = n(544028),
    c = n(287809),
    d = n(954571),
    u = n(975571),
    _ = n(927578),
    p = n(728458),
    m = n(792656),
    g = n(264779),
    A = n(597758),
    f = n(35587),
    b = n(412260),
    h = n(852218),
    E = n(699443),
    O = n(934204),
    C = n(788868),
    x = n(652215),
    S = n(985018),
    T = n(342087),
    I = n(870378),
    y = n(8496);

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
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = r);
            });
    }
    return e;
}
let j = {
        [h.KS]: {
            title: S.t.sfGgOG,
            body: S.t.igiSKe,
            bodyWithExpiration: S.t.w8CXUl,
            redemptionURL: "https://steelseries.com/",
            logos: {
                dark: (0, r.jsx)(E.a1, {}),
                light: (0, r.jsx)(E.Gn, {}),
            },
            asset: y.A,
        },
        [h.Cs]: {
            title: S.t["9N8obd"],
            body: S.t["34g+Z3"],
            bodyWithExpiration: S.t.rqmpXc,
            redemptionURL: "https://www.kontrolfreek.com/",
            logos: {
                dark: (0, r.jsx)(E.WF, {}),
                light: (0, r.jsx)(E.s, {}),
            },
            asset: I.A,
        },
    },
    v = (e) => {
        let { recurrence: t } = e,
            n = (0, r.jsx)(l.rOg, {
                color: a.LU0.colors.CONTROL_CONNECTED_BACKGROUND_DEFAULT,
            }),
            s = (0, r.jsx)(l.K0, {
                icon: l.TdU,
                size: "sm",
                variant: "secondary",
                "aria-label": "",
                color: "icon-feedback-positive",
                onClick: () => {
                    navigator.clipboard.writeText(t.code), c(n);
                },
            }),
            [o, c] = i.useState(() => s);
        if (null != t.code)
            return (0, r.jsx)("div", {
                className: T.oP,
                children: (0, r.jsxs)("div", {
                    className: T.t0,
                    children: [
                        (0, r.jsx)("div", {
                            className: T.cD,
                            children: (0, r.jsx)(l.EYj, {
                                variant: "text-md/medium",
                                color: "text-strong",
                                children: t.code,
                            }),
                        }),
                        o,
                        (0, r.jsx)(l.$nd, {
                            variant: "overlay-primary",
                            size: "sm",
                            text: S.intl.formatToPlainString(S.t.DF68t7, {
                                redemptionURL: t.redemptionURL,
                            }),
                            onClick: () => {
                                window.open(t.redemptionURL, "_blank"),
                                    d.default.track(x.HAw.RECURRING_PROMOTION_CLAIMED);
                            },
                        }),
                    ],
                }),
            });
    },
    P = () =>
        Object.entries(j).map((e) => {
            let [t, n] = e;
            return (0, r.jsx)(
                "div",
                {
                    className: T.lA,
                    children: (0, r.jsxs)("div", {
                        className: T.LV,
                        children: [
                            (0, r.jsxs)("div", {
                                className: T.JN,
                                children: [
                                    (0, r.jsx)("div", {
                                        className: T.MC,
                                        children: (0, r.jsx)(l.XAi, {
                                            size: "refresh_sm",
                                        }),
                                    }),
                                    (0, r.jsxs)("div", {
                                        className: T.yO,
                                        children: [
                                            (0, r.jsx)(l.DZT, {
                                                variant: "heading-lg/semibold",
                                                color: "text-strong",
                                                children: S.intl.string(n.title),
                                            }),
                                            (0, r.jsx)(l.DZT, {
                                                variant: "heading-sm/medium",
                                                color: "text-subtle",
                                                children: S.intl.string(n.body),
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                            (0, r.jsx)("div", {
                                className: T.R4,
                                children: (0, r.jsx)(a._V3, {
                                    src: n.asset,
                                    className: T.Ys,
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
    R = (e) => {
        var t;
        let n,
            c,
            { promotionRecurrences: d } = e,
            [_, m] = i.useState(d.length > 1),
            [A, f] = i.useState([]),
            [b, h] = i.useState(new Set());
        i.useEffect(() => {
            f([d.sort((e, t) => (t.startDate > e.startDate ? 1 : -1))[0]]);
        }, [d]);
        let E =
                ((t = d[0].partnerId),
                (n = (0, s.bG)([o.A], () => (0, l.Mwr)(o.A.theme))),
                null == (c = j[t]) ? null : n ? c.logos.dark : c.logos.light),
            O = (0, r.jsx)(a._V3, {
                src: d[0].asset,
                className: T.Ys,
                width: 100,
                height: 100,
                zoomable: !1,
            });
        return (0, r.jsxs)("div", {
            children: [
                A.map((e, t) => {
                    let n = b.has(e.id),
                        i = null == e.code;
                    return (0, r.jsxs)(
                        "div",
                        {
                            className: T.lA,
                            children: [
                                (0, r.jsxs)("div", {
                                    className: T.LV,
                                    children: [
                                        (0, r.jsxs)("div", {
                                            className: T.JN,
                                            children: [
                                                E,
                                                (0, r.jsxs)("div", {
                                                    className: T.yO,
                                                    children: [
                                                        (0, r.jsx)(l.DZT, {
                                                            variant: "heading-lg/semibold",
                                                            color: "text-strong",
                                                            children: S.intl.string(e.title),
                                                        }),
                                                        (0, r.jsx)(l.DZT, {
                                                            variant: "heading-sm/medium",
                                                            color: "text-subtle",
                                                            children: n
                                                                ? S.intl.format(S.t.i2EuFO, {
                                                                      helpdeskArticle: u.A.getArticleURL(
                                                                          x.MVz.RECURRING_PROMOTION,
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
                                                        ? (0, r.jsx)(l.$nd, {
                                                              icon: l.EpV,
                                                              variant: "critical-secondary",
                                                              size: "sm",
                                                              disabled: !0,
                                                              text: S.intl.string(S.t["8LKchl"]),
                                                          })
                                                        : (0, r.jsx)(l.$nd, {
                                                              icon: l.XAi,
                                                              variant: "overlay-primary",
                                                              size: "sm",
                                                              text: S.intl.string(S.t.vwASIl),
                                                              onClick: () => {
                                                                  (0, g.kd)({
                                                                      promotionId: e.id,
                                                                      analyticsLocations: [],
                                                                  })
                                                                      .then((n) => {
                                                                          var r, i;
                                                                          f([
                                                                              ...A.slice(0, t),
                                                                              ((r = N({}, e)),
                                                                              (i = i =
                                                                                  {
                                                                                      code: n.code,
                                                                                  }),
                                                                              Object.getOwnPropertyDescriptors
                                                                                  ? Object.defineProperties(
                                                                                        r,
                                                                                        Object.getOwnPropertyDescriptors(
                                                                                            i,
                                                                                        ),
                                                                                    )
                                                                                  : (function (e, t) {
                                                                                        var n = Object.keys(e);
                                                                                        if (
                                                                                            Object.getOwnPropertySymbols
                                                                                        ) {
                                                                                            var r =
                                                                                                Object.getOwnPropertySymbols(
                                                                                                    e,
                                                                                                );
                                                                                            n.push.apply(n, r);
                                                                                        }
                                                                                        return n;
                                                                                    })(Object(i)).forEach(function (e) {
                                                                                        Object.defineProperty(
                                                                                            r,
                                                                                            e,
                                                                                            Object.getOwnPropertyDescriptor(
                                                                                                i,
                                                                                                e,
                                                                                            ),
                                                                                        );
                                                                                    }),
                                                                              r),
                                                                              ...A.slice(t + 1),
                                                                          ]);
                                                                      })
                                                                      .catch((t) => {
                                                                          h((t) => new Set([...t, e.id])),
                                                                              p.A.captureException(t);
                                                                      });
                                                              },
                                                          })),
                                            ],
                                        }),
                                        (0, r.jsx)("div", {
                                            className: T.R4,
                                            children: O,
                                        }),
                                    ],
                                }),
                                null != e.code &&
                                    (0, r.jsx)(v, {
                                        recurrence: e,
                                    }),
                            ],
                        },
                        e.id,
                    );
                }),
                _ &&
                    (0, r.jsx)(l.DUT, {
                        className: T.K8,
                        onClick: () => {
                            m(!1), f([...A, ...d.slice(1)]);
                        },
                        children: (0, r.jsx)(l.EYj, {
                            variant: "text-sm/medium",
                            color: "text-subtle",
                            children: S.intl.string(S.t.rjjZxV),
                        }),
                    }),
            ],
        });
    },
    D = (e) => {
        let { percentage: t } = e;
        return (0, r.jsxs)("div", {
            className: T.hr,
            children: [
                t > 0 &&
                    t < 100 &&
                    (0, r.jsx)(
                        () =>
                            (0, r.jsx)("div", {
                                className: T.ML,
                                style: {
                                    left: "calc(".concat(t, "% - ").concat(5, "px)"),
                                },
                                children: (0, r.jsx)(O.z, {}),
                            }),
                        {},
                    ),
                (0, r.jsx)("div", {
                    className: T.SX,
                    style: {
                        width: "".concat(t, "%"),
                    },
                }),
            ],
        });
    },
    L = (e) => {
        if (e.promotionType === h.pt.THIRD_PARTY_OUTBOUND_RECURRING) {
            var t, n;
            return null != (t = null == (n = e.partnerId) ? void 0 : n.toLowerCase()) ? t : null;
        }
        return e.outboundTitle.toLowerCase();
    },
    w = (e) => {
        let t,
            n,
            i,
            { onClose: a } = e,
            { promotionsLoaded: o, claimedOutboundPromotionCodeMap: d } = (0, f.y7)(),
            p = (0, s.yK)([b.A], () => b.A.outboundRecurringPromotions),
            h = (0, s.bG)([c.default], () => c.default.getCurrentUser()),
            E = !1 === _.Ay.isPremiumExactly(h, C.PremiumTypes.TIER_2),
            O = null == h ? void 0 : h.isFractionalPremiumWithNoStandardSub(),
            I = null == h || E || O;
        if (!1 === o) return (0, r.jsx)(l.y$y, {});
        let y = ((e) => {
            let { promotions: t, codesByPromotion: n } = e,
                r = {};
            return (
                t
                    .filter(
                        (e) =>
                            !0 ===
                            (0, g.HB)({
                                promotionPartner: e.outboundTitle,
                                promotionType: e.promotionType,
                            }),
                    )
                    .forEach((e) => {
                        var t;
                        let i = L(e),
                            l = ((e) => {
                                var t;
                                let { promotion: n } = e,
                                    r = L(n);
                                return null == r ? null : null != (t = j[r]) ? t : null;
                            })({
                                promotion: e,
                            });
                        if (null == i || null == l) return;
                        i in r || (r[i] = []);
                        let s = N(
                            {
                                id: e.id,
                                partnerId: i,
                                startDate: e.startDate,
                                endDate: e.endDate,
                                code: null != (t = n[e.id]) ? t : null,
                            },
                            l,
                        );
                        r[i].push(s);
                    }),
                r
            );
        })({
            promotions: p,
            codesByPromotion: d,
        });
        return (0, r.jsx)(l.Modal, {
            title: S.intl.string(S.t["7ioAjs"]),
            subtitle: S.intl.format(S.t.LOYRxB, {
                helpCenterLink: u.A.getArticleURL(x.MVz.RECURRING_PROMOTION),
            }),
            actions: [],
            preview: (() => {
                if (!0 === I)
                    return (0, r.jsx)(m.A, {
                        subscriptionTier: C.pe.TIER_2,
                        fullWidth: !0,
                        onClick: () => {
                            a();
                        },
                        onSubscribeModalClose: (e) => {
                            if (e) return A.Ay.fetchActivePromotions();
                        },
                    });
            })(),
            transitionState: l.ip4.ENTERED,
            onClose: a,
            children:
                ((n = new Date(
                    (t = new Date(
                        new Date().toLocaleString("en-US", {
                            timeZone: "America/New_York",
                        }),
                    )).getFullYear(),
                    t.getMonth() + 1,
                    0,
                ).getDate()),
                (i = (t.getDate() / n) * 100),
                I
                    ? (0, r.jsx)(P, {})
                    : (0, r.jsxs)("div", {
                          className: T.kL,
                          children: [
                              (0, r.jsx)("div", {
                                  className: T.Ps,
                                  children: (0, r.jsx)(l.EYj, {
                                      variant: "text-md/medium",
                                      color: "text-subtle",
                                      children: S.intl.format(S.t["43kZKL"], {
                                          days: n - t.getDate(),
                                      }),
                                  }),
                              }),
                              (0, r.jsx)("div", {
                                  className: T.G9,
                                  children: (0, r.jsx)(D, {
                                      percentage: i,
                                  }),
                              }),
                              (0, r.jsx)("div", {
                                  className: T.kR,
                                  children: Object.entries(y)
                                      .sort((e, t) => {
                                          let [n] = e,
                                              [r] = t;
                                          return r.localeCompare(n);
                                      })
                                      .map((e) => {
                                          let [t, n] = e;
                                          return (0, r.jsx)(
                                              R,
                                              {
                                                  promotionRecurrences: n,
                                              },
                                              t,
                                          );
                                      }),
                              }),
                          ],
                      })),
        });
    },
    M = (e) => {
        let { analyticsLocations: t } = e;
        d.default.track(x.HAw.RECURRING_PROMOTION_MODAL_OPENED, {
            location_stack: t,
        }),
            A.Ay.fetchActivePromotions(),
            (0, a.mMO)(async () => {
                let { Recurring3PModal: e } = await Promise.resolve().then(n.bind(n, 161319));
                return (t) => (0, r.jsx)(e, N({}, t));
            });
    };
