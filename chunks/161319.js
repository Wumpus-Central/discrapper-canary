n.d(t, { PR: () => y, Recurring3PModal: () => D, uE: () => M }), n(321073);
var i = n(627968),
    s = n(64700),
    r = n(158954),
    a = n(311907),
    l = n(397927),
    o = n(544028),
    c = n(287809),
    d = n(954571),
    u = n(975571),
    _ = n(927578),
    m = n(728458),
    A = n(792656),
    g = n(264779),
    E = n(597758),
    h = n(35587),
    p = n(412260),
    C = n(852218),
    x = n(699443),
    T = n(934204),
    I = n(788868),
    S = n(652215),
    f = n(985018),
    N = n(342087),
    b = n(870378),
    R = n(8496);
let v = {
        [C.KS]: {
            title: f.t.sfGgOG,
            body: f.t.igiSKe,
            bodyWithExpiration: f.t.w8CXUl,
            redemptionURL: "https://steelseries.com/",
            logos: { dark: (0, i.jsx)(x.a1, {}), light: (0, i.jsx)(x.Gn, {}) },
            asset: R.A,
        },
        [C.Cs]: {
            title: f.t["9N8obd"],
            body: f.t["34g+Z3"],
            bodyWithExpiration: f.t.rqmpXc,
            redemptionURL: "https://www.kontrolfreek.com/",
            logos: { dark: (0, i.jsx)(x.WF, {}), light: (0, i.jsx)(x.s, {}) },
            asset: b.A,
        },
    },
    O = (e) => {
        let { recurrence: t } = e,
            n = (0, i.jsx)(r.rOg, { color: l.LU0.colors.CONTROL_CONNECTED_BACKGROUND_DEFAULT }),
            a = (0, i.jsx)(r.K0, {
                icon: r.TdU,
                size: "sm",
                variant: "secondary",
                "aria-label": "",
                color: "icon-feedback-positive",
                onClick: () => {
                    navigator.clipboard.writeText(t.code), c(n);
                },
            }),
            [o, c] = s.useState(() => a);
        if (null != t.code)
            return (0, i.jsx)("div", {
                className: N.oP,
                children: (0, i.jsxs)("div", {
                    className: N.t0,
                    children: [
                        (0, i.jsx)("div", {
                            className: N.cD,
                            children: (0, i.jsx)(r.EYj, {
                                variant: "text-md/medium",
                                color: "text-strong",
                                children: t.code,
                            }),
                        }),
                        o,
                        (0, i.jsx)(r.$nd, {
                            variant: "overlay-primary",
                            size: "sm",
                            text: f.intl.formatToPlainString(f.t.DF68t7, { redemptionURL: t.redemptionURL }),
                            onClick: () => {
                                window.open(t.redemptionURL, "_blank"),
                                    d.default.track(S.HAw.RECURRING_PROMOTION_CLAIMED);
                            },
                        }),
                    ],
                }),
            });
    },
    j = () =>
        Object.entries(v).map((e) => {
            let [t, n] = e;
            return (0, i.jsx)(
                "div",
                {
                    className: N.lA,
                    children: (0, i.jsxs)("div", {
                        className: N.LV,
                        children: [
                            (0, i.jsxs)("div", {
                                className: N.JN,
                                children: [
                                    (0, i.jsx)("div", {
                                        className: N.MC,
                                        children: (0, i.jsx)(r.XAi, { size: "refresh_sm" }),
                                    }),
                                    (0, i.jsxs)("div", {
                                        className: N.yO,
                                        children: [
                                            (0, i.jsx)(r.DZT, {
                                                variant: "heading-lg/semibold",
                                                color: "text-strong",
                                                children: f.intl.string(n.title),
                                            }),
                                            (0, i.jsx)(r.DZT, {
                                                variant: "heading-sm/medium",
                                                color: "text-subtle",
                                                children: f.intl.string(n.body),
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                            (0, i.jsx)("div", {
                                className: N.R4,
                                children: (0, i.jsx)(l._V3, {
                                    src: n.asset,
                                    className: N.Ys,
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
    P = (e) => {
        var t;
        let n,
            c,
            { promotionRecurrences: d } = e,
            [_, A] = s.useState(d.length > 1),
            [E, h] = s.useState([]),
            [p, C] = s.useState(new Set());
        s.useEffect(() => {
            h([d.sort((e, t) => (t.startDate > e.startDate ? 1 : -1))[0]]);
        }, [d]);
        let x =
                ((t = d[0].partnerId),
                (n = (0, a.bG)([o.A], () => (0, r.Mwr)(o.A.theme))),
                null == (c = v[t]) ? null : n ? c.logos.dark : c.logos.light),
            T = (0, i.jsx)(l._V3, { src: d[0].asset, className: N.Ys, width: 100, height: 100, zoomable: !1 });
        return (0, i.jsxs)("div", {
            children: [
                E.map((e, t) => {
                    let n = p.has(e.id),
                        s = null == e.code;
                    return (0, i.jsxs)(
                        "div",
                        {
                            className: N.lA,
                            children: [
                                (0, i.jsxs)("div", {
                                    className: N.LV,
                                    children: [
                                        (0, i.jsxs)("div", {
                                            className: N.JN,
                                            children: [
                                                x,
                                                (0, i.jsxs)("div", {
                                                    className: N.yO,
                                                    children: [
                                                        (0, i.jsx)(r.DZT, {
                                                            variant: "heading-lg/semibold",
                                                            color: "text-strong",
                                                            children: f.intl.string(e.title),
                                                        }),
                                                        (0, i.jsx)(r.DZT, {
                                                            variant: "heading-sm/medium",
                                                            color: "text-subtle",
                                                            children: n
                                                                ? f.intl.format(f.t.i2EuFO, {
                                                                      helpdeskArticle: u.A.getArticleURL(
                                                                          S.MVz.RECURRING_PROMOTION,
                                                                      ),
                                                                  })
                                                                : s
                                                                  ? f.intl.string(e.body)
                                                                  : f.intl.format(e.bodyWithExpiration, {
                                                                        date: e.endDate,
                                                                    }),
                                                        }),
                                                    ],
                                                }),
                                                s &&
                                                    (n
                                                        ? (0, i.jsx)(r.$nd, {
                                                              icon: r.EpV,
                                                              variant: "critical-secondary",
                                                              size: "sm",
                                                              disabled: !0,
                                                              text: f.intl.string(f.t["8LKchl"]),
                                                          })
                                                        : (0, i.jsx)(r.$nd, {
                                                              icon: r.XAi,
                                                              variant: "overlay-primary",
                                                              size: "sm",
                                                              text: f.intl.string(f.t.vwASIl),
                                                              onClick: () => {
                                                                  (0, g.kd)({
                                                                      promotionId: e.id,
                                                                      analyticsLocations: [],
                                                                  })
                                                                      .then((n) => {
                                                                          h([
                                                                              ...E.slice(0, t),
                                                                              { ...e, code: n.code },
                                                                              ...E.slice(t + 1),
                                                                          ]);
                                                                      })
                                                                      .catch((t) => {
                                                                          C((t) => new Set([...t, e.id])),
                                                                              m.A.captureException(t);
                                                                      });
                                                              },
                                                          })),
                                            ],
                                        }),
                                        (0, i.jsx)("div", { className: N.R4, children: T }),
                                    ],
                                }),
                                null != e.code && (0, i.jsx)(O, { recurrence: e }),
                            ],
                        },
                        e.id,
                    );
                }),
                _ &&
                    (0, i.jsx)(r.DUT, {
                        className: N.K8,
                        onClick: () => {
                            A(!1), h([...E, ...d.slice(1)]);
                        },
                        children: (0, i.jsx)(r.EYj, {
                            variant: "text-sm/medium",
                            color: "text-subtle",
                            children: f.intl.string(f.t.rjjZxV),
                        }),
                    }),
            ],
        });
    },
    y = (e) => {
        let { percentage: t } = e;
        return (0, i.jsxs)("div", {
            className: N.hr,
            children: [
                t > 0 &&
                    t < 100 &&
                    (0, i.jsx)(
                        () =>
                            (0, i.jsx)("div", {
                                className: N.ML,
                                style: { left: `calc(${t}% - 5px)` },
                                children: (0, i.jsx)(T.z, {}),
                            }),
                        {},
                    ),
                (0, i.jsx)("div", { className: N.SX, style: { width: `${t}%` } }),
            ],
        });
    },
    L = (e) =>
        e.promotionType === C.pt.THIRD_PARTY_OUTBOUND_RECURRING
            ? (e.partnerId?.toLowerCase() ?? null)
            : e.outboundTitle.toLowerCase(),
    D = (e) => {
        let t,
            n,
            s,
            { onClose: l } = e,
            { promotionsLoaded: o, claimedOutboundPromotionCodeMap: d } = (0, h.y7)(),
            m = (0, a.yK)([p.A], () => p.A.outboundRecurringPromotions),
            C = (0, a.bG)([c.default], () => c.default.getCurrentUser()),
            x = !1 === _.Ay.isPremiumExactly(C, I.PremiumTypes.TIER_2),
            T = C?.isFractionalPremiumWithNoStandardSub(),
            b = null == C || x || T;
        if (!1 === o) return (0, i.jsx)(r.y$y, {});
        let R = ((e) => {
            let { promotions: t, codesByPromotion: n } = e,
                i = {};
            return (
                t
                    .filter(
                        (e) => !0 === (0, g.HB)({ promotionPartner: e.outboundTitle, promotionType: e.promotionType }),
                    )
                    .forEach((e) => {
                        let t = L(e),
                            s = ((e) => {
                                let { promotion: t } = e,
                                    n = L(t);
                                return null == n ? null : (v[n] ?? null);
                            })({ promotion: e });
                        if (null == t || null == s) return;
                        t in i || (i[t] = []);
                        let r = {
                            id: e.id,
                            partnerId: t,
                            startDate: e.startDate,
                            endDate: e.endDate,
                            code: n[e.id] ?? null,
                            ...s,
                        };
                        i[t].push(r);
                    }),
                i
            );
        })({ promotions: m, codesByPromotion: d });
        return (0, i.jsx)(r.Modal, {
            title: f.intl.string(f.t["7ioAjs"]),
            subtitle: f.intl.format(f.t.LOYRxB, { helpCenterLink: u.A.getArticleURL(S.MVz.RECURRING_PROMOTION) }),
            actions: [],
            preview: (() => {
                if (!0 === b)
                    return (0, i.jsx)(A.A, {
                        subscriptionTier: I.pe.TIER_2,
                        fullWidth: !0,
                        onClick: () => {
                            l();
                        },
                        onSubscribeModalClose: (e) => {
                            if (e) return E.Ay.fetchActivePromotions();
                        },
                    });
            })(),
            transitionState: r.ip4.ENTERED,
            onClose: l,
            children:
                ((n = new Date(
                    (t = new Date(new Date().toLocaleString("en-US", { timeZone: "America/New_York" }))).getFullYear(),
                    t.getMonth() + 1,
                    0,
                ).getDate()),
                (s = (t.getDate() / n) * 100),
                b
                    ? (0, i.jsx)(j, {})
                    : (0, i.jsxs)("div", {
                          className: N.kL,
                          children: [
                              (0, i.jsx)("div", {
                                  className: N.Ps,
                                  children: (0, i.jsx)(r.EYj, {
                                      variant: "text-md/medium",
                                      color: "text-subtle",
                                      children: f.intl.format(f.t["43kZKL"], { days: n - t.getDate() }),
                                  }),
                              }),
                              (0, i.jsx)("div", { className: N.G9, children: (0, i.jsx)(y, { percentage: s }) }),
                              (0, i.jsx)("div", {
                                  className: N.kR,
                                  children: Object.entries(R)
                                      .sort((e, t) => {
                                          let [n] = e,
                                              [i] = t;
                                          return i.localeCompare(n);
                                      })
                                      .map((e) => {
                                          let [t, n] = e;
                                          return (0, i.jsx)(P, { promotionRecurrences: n }, t);
                                      }),
                              }),
                          ],
                      })),
        });
    },
    M = (e) => {
        let { analyticsLocations: t } = e;
        d.default.track(S.HAw.RECURRING_PROMOTION_MODAL_OPENED, { location_stack: t }),
            E.Ay.fetchActivePromotions(),
            (0, l.mMO)(async () => {
                let { Recurring3PModal: e } = await Promise.resolve().then(n.bind(n, 161319));
                return (t) => (0, i.jsx)(e, { ...t });
            });
    };
