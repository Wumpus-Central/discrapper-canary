n.d(t, { PR: () => P, Recurring3PModal: () => D, uE: () => M }), n(321073);
var i = n(627968),
    s = n(64700),
    a = n(158954),
    l = n(311907),
    r = n(397927),
    o = n(544028),
    c = n(287809),
    d = n(954571),
    u = n(975571),
    _ = n(927578),
    m = n(728458),
    A = n(792656),
    g = n(264779),
    h = n(597758),
    x = n(35587),
    p = n(412260),
    E = n(852218),
    C = n(699443),
    T = n(934204),
    S = n(788868),
    I = n(652215),
    f = n(985018),
    N = n(342087),
    b = n(870378),
    j = n(8496);
let v = {
        [E.KS]: {
            title: f.t.sfGgOG,
            body: f.t.igiSKe,
            bodyWithExpiration: f.t.w8CXUl,
            redemptionURL: "https://steelseries.com/",
            logos: { dark: (0, i.jsx)(C.a1, {}), light: (0, i.jsx)(C.Gn, {}) },
            asset: j.A,
        },
        [E.Cs]: {
            title: f.t["9N8obd"],
            body: f.t["34g+Z3"],
            bodyWithExpiration: f.t.rqmpXc,
            redemptionURL: "https://www.kontrolfreek.com/",
            logos: { dark: (0, i.jsx)(C.WF, {}), light: (0, i.jsx)(C.s, {}) },
            asset: b.A,
        },
    },
    O = (e) => {
        let { recurrence: t } = e,
            n = (0, i.jsx)(a.rOg, { color: r.LU0.colors.CONTROL_CONNECTED_BACKGROUND_DEFAULT }),
            l = (0, i.jsx)(a.K0, {
                icon: a.TdU,
                size: "sm",
                variant: "secondary",
                "aria-label": "",
                color: "icon-feedback-positive",
                onClick: () => {
                    navigator.clipboard.writeText(t.code), c(n);
                },
            }),
            [o, c] = s.useState(() => l);
        if (null != t.code)
            return (0, i.jsx)("div", {
                className: N.oP,
                children: (0, i.jsxs)("div", {
                    className: N.t0,
                    children: [
                        (0, i.jsx)("div", {
                            className: N.cD,
                            children: (0, i.jsx)(a.EYj, {
                                variant: "text-md/medium",
                                color: "text-strong",
                                children: t.code,
                            }),
                        }),
                        o,
                        (0, i.jsx)(a.$nd, {
                            variant: "overlay-primary",
                            size: "sm",
                            text: f.intl.formatToPlainString(f.t.DF68t7, { redemptionURL: t.redemptionURL }),
                            onClick: () => {
                                window.open(t.redemptionURL, "_blank"),
                                    d.default.track(I.HAw.RECURRING_PROMOTION_CLAIMED);
                            },
                        }),
                    ],
                }),
            });
    },
    R = () =>
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
                                        children: (0, i.jsx)(a.XAi, { size: "refresh_sm" }),
                                    }),
                                    (0, i.jsxs)("div", {
                                        className: N.yO,
                                        children: [
                                            (0, i.jsx)(a.DZT, {
                                                variant: "heading-lg/semibold",
                                                color: "text-strong",
                                                children: f.intl.string(n.title),
                                            }),
                                            (0, i.jsx)(a.DZT, {
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
                                children: (0, i.jsx)(r._V3, {
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
    y = (e) => {
        var t;
        let n,
            c,
            { promotionRecurrences: d } = e,
            [_, A] = s.useState(d.length > 1),
            [h, x] = s.useState([]),
            [p, E] = s.useState(new Set());
        s.useEffect(() => {
            x([d.sort((e, t) => (t.startDate > e.startDate ? 1 : -1))[0]]);
        }, [d]);
        let C =
                ((t = d[0].partnerId),
                (n = (0, l.bG)([o.A], () => (0, a.Mwr)(o.A.theme))),
                null == (c = v[t]) ? null : n ? c.logos.dark : c.logos.light),
            T = (0, i.jsx)(r._V3, { src: d[0].asset, className: N.Ys, width: 100, height: 100, zoomable: !1 });
        return (0, i.jsxs)("div", {
            children: [
                h.map((e, t) => {
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
                                                C,
                                                (0, i.jsxs)("div", {
                                                    className: N.yO,
                                                    children: [
                                                        (0, i.jsx)(a.DZT, {
                                                            variant: "heading-lg/semibold",
                                                            color: "text-strong",
                                                            children: f.intl.string(e.title),
                                                        }),
                                                        (0, i.jsx)(a.DZT, {
                                                            variant: "heading-sm/medium",
                                                            color: "text-subtle",
                                                            children: n
                                                                ? f.intl.format(f.t.i2EuFO, {
                                                                      helpdeskArticle: u.A.getArticleURL(
                                                                          I.MVz.RECURRING_PROMOTION,
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
                                                        ? (0, i.jsx)(a.$nd, {
                                                              icon: a.EpV,
                                                              variant: "critical-secondary",
                                                              size: "sm",
                                                              disabled: !0,
                                                              text: f.intl.string(f.t["8LKchl"]),
                                                          })
                                                        : (0, i.jsx)(a.$nd, {
                                                              icon: a.XAi,
                                                              variant: "overlay-primary",
                                                              size: "sm",
                                                              text: f.intl.string(f.t.vwASIl),
                                                              onClick: () => {
                                                                  (0, g.kd)({
                                                                      promotionId: e.id,
                                                                      analyticsLocations: [],
                                                                  })
                                                                      .then((n) => {
                                                                          x([
                                                                              ...h.slice(0, t),
                                                                              { ...e, code: n.code },
                                                                              ...h.slice(t + 1),
                                                                          ]);
                                                                      })
                                                                      .catch((t) => {
                                                                          E((t) => new Set([...t, e.id])),
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
                    (0, i.jsx)(a.DUT, {
                        className: N.K8,
                        onClick: () => {
                            A(!1), x([...h, ...d.slice(1)]);
                        },
                        children: (0, i.jsx)(a.EYj, {
                            variant: "text-sm/medium",
                            color: "text-subtle",
                            children: f.intl.string(f.t.rjjZxV),
                        }),
                    }),
            ],
        });
    },
    P = (e) => {
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
        e.promotionType === E.pt.THIRD_PARTY_OUTBOUND_RECURRING
            ? (e.partnerId?.toLowerCase() ?? null)
            : e.outboundTitle.toLowerCase(),
    D = (e) => {
        let t,
            n,
            s,
            { transitionState: r, onClose: o } = e,
            { promotionsLoaded: d, claimedOutboundPromotionCodeMap: m } = (0, x.y7)(),
            E = (0, l.yK)([p.A], () => p.A.outboundRecurringPromotions),
            C = (0, l.bG)([c.default], () => c.default.getCurrentUser()),
            T = !1 === _.Ay.isPremiumExactly(C, S.PremiumTypes.TIER_2),
            b = C?.isFractionalPremiumWithNoStandardSub(),
            j = null == C || T || b;
        if (!1 === d) return (0, i.jsx)(a.y$y, {});
        let O = ((e) => {
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
                        let a = {
                            id: e.id,
                            partnerId: t,
                            startDate: e.startDate,
                            endDate: e.endDate,
                            code: n[e.id] ?? null,
                            ...s,
                        };
                        i[t].push(a);
                    }),
                i
            );
        })({ promotions: E, codesByPromotion: m });
        return (0, i.jsx)(a.Modal, {
            title: f.intl.string(f.t["7ioAjs"]),
            subtitle: f.intl.format(f.t.LOYRxB, { helpCenterLink: u.A.getArticleURL(I.MVz.RECURRING_PROMOTION) }),
            actions: [],
            preview: (() => {
                if (!0 === j)
                    return (0, i.jsx)(A.A, {
                        subscriptionTier: S.pe.TIER_2,
                        fullWidth: !0,
                        onClick: () => {
                            o();
                        },
                        onSubscribeModalClose: (e) => {
                            if (e) return h.Ay.fetchActivePromotions();
                        },
                    });
            })(),
            transitionState: r,
            onClose: o,
            children:
                ((n = new Date(
                    (t = new Date(new Date().toLocaleString("en-US", { timeZone: "America/New_York" }))).getFullYear(),
                    t.getMonth() + 1,
                    0,
                ).getDate()),
                (s = (t.getDate() / n) * 100),
                j
                    ? (0, i.jsx)(R, {})
                    : (0, i.jsxs)("div", {
                          className: N.kL,
                          children: [
                              (0, i.jsx)("div", {
                                  className: N.Ps,
                                  children: (0, i.jsx)(a.EYj, {
                                      variant: "text-md/medium",
                                      color: "text-subtle",
                                      children: f.intl.format(f.t["43kZKL"], { days: n - t.getDate() }),
                                  }),
                              }),
                              (0, i.jsx)("div", { className: N.G9, children: (0, i.jsx)(P, { percentage: s }) }),
                              (0, i.jsx)("div", {
                                  className: N.kR,
                                  children: Object.entries(O)
                                      .sort((e, t) => {
                                          let [n] = e,
                                              [i] = t;
                                          return i.localeCompare(n);
                                      })
                                      .map((e) => {
                                          let [t, n] = e;
                                          return (0, i.jsx)(y, { promotionRecurrences: n }, t);
                                      }),
                              }),
                          ],
                      })),
        });
    },
    M = (e) => {
        let { analyticsLocations: t } = e;
        d.default.track(I.HAw.RECURRING_PROMOTION_MODAL_OPENED, { location_stack: t }),
            h.Ay.fetchActivePromotions(),
            (0, r.mMO)(async () => {
                let { Recurring3PModal: e } = await Promise.resolve().then(n.bind(n, 161319));
                return (t) => (0, i.jsx)(e, { ...t });
            });
    };
