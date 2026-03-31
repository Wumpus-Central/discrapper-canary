r.d(t, { oL: () => E, wx: () => S });
var a = r(627968),
    n = r(64700),
    s = r(158954),
    i = r(311907),
    l = r(397927),
    o = r(544028),
    d = r(954571),
    c = r(405269),
    u = r(975571),
    m = r(728458),
    _ = r(881373),
    p = r(264779),
    f = r(852218),
    h = r(699443),
    b = r(729640),
    x = r(652215),
    g = r(653624),
    C = r(985018),
    A = r(276478),
    R = r(870378),
    v = r(208556),
    j = r(8496);
let E = {
        [f.XY]: {
            title: g.default.LsJ9hj,
            titleParams: { discountPercent: _.aW },
            body: g.default.Yl5ww1,
            bodyWithExpiration: g.default["6KjkUa"],
            redemptionURL: "https://www.logitech.com/",
            logos: {
                dark: (0, a.jsx)(n.Fragment, {}, "logitech-logo-dark"),
                light: (0, a.jsx)(n.Fragment, {}, "logitech-logo-light"),
            },
            asset: v.A,
        },
        [f.KS]: {
            title: C.t.sfGgOG,
            body: C.t.igiSKe,
            bodyWithExpiration: C.t.w8CXUl,
            redemptionURL: "https://steelseries.com/",
            logos: { dark: (0, a.jsx)(h.a1, {}), light: (0, a.jsx)(h.Gn, {}) },
            asset: j.A,
        },
        [f.Cs]: {
            title: C.t["9N8obd"],
            body: C.t["34g+Z3"],
            bodyWithExpiration: C.t.rqmpXc,
            redemptionURL: "https://www.kontrolfreek.com/",
            logos: { dark: (0, a.jsx)(h.WF, {}), light: (0, a.jsx)(h.s, {}) },
            asset: R.A,
        },
    },
    N = () => {
        let e = (0, c.N5)(),
            t = (0, c.P6)();
        return (0, a.jsxs)("div", {
            className: `${A.G9} ${A.sQ}`,
            children: [
                (0, a.jsx)(s.EYj, {
                    variant: "text-sm/normal",
                    color: "text-muted",
                    className: A.kT,
                    children: C.intl.format(g.default["65EEvD"], { days: t }),
                }),
                (0, a.jsx)(b.P, { percentage: e }),
            ],
        });
    },
    y = (e) => {
        let { children: t } = e;
        return (0, a.jsx)("div", { className: A.oP, children: (0, a.jsx)("div", { className: A.t0, children: t }) });
    },
    I = (e) => {
        let { recurrence: t } = e,
            r = (0, a.jsx)(s.rOg, { color: l.LU0.colors.CONTROL_CONNECTED_BACKGROUND_DEFAULT }),
            i = (0, a.jsx)(s.K0, {
                icon: s.TdU,
                size: "sm",
                variant: "secondary",
                "aria-label": "",
                color: "icon-feedback-positive",
                onClick: () => {
                    navigator.clipboard.writeText(t.code), c(r);
                },
            }),
            [o, c] = n.useState(() => i);
        if (null != t.code)
            return (0, a.jsx)("div", {
                className: A.oP,
                children: (0, a.jsxs)("div", {
                    className: A.t0,
                    children: [
                        (0, a.jsx)("div", {
                            className: A.cD,
                            children: (0, a.jsx)(s.EYj, {
                                variant: "text-md/medium",
                                color: "text-strong",
                                children: t.code,
                            }),
                        }),
                        o,
                        (0, a.jsx)(s.$nd, {
                            variant: "overlay-primary",
                            size: "sm",
                            text: C.intl.formatToPlainString(C.t.DF68t7, { redemptionURL: t.redemptionURL }),
                            onClick: () => {
                                window.open(t.redemptionURL, "_blank"),
                                    d.default.track(x.HAw.RECURRING_PROMOTION_CLAIMED);
                            },
                        }),
                    ],
                }),
            });
    },
    P = (e) => {
        let { recurrence: t, canBeClaimed: r, hasClaimError: n, setCode: i, setHasClaimError: l, className: o } = e;
        return r
            ? n
                ? (0, a.jsx)("div", {
                      className: o,
                      children: (0, a.jsx)(s.$nd, {
                          icon: s.EpV,
                          variant: "critical-secondary",
                          size: "sm",
                          disabled: !0,
                          text: C.intl.string(C.t["8LKchl"]),
                      }),
                  })
                : (0, a.jsx)("div", {
                      className: o,
                      children: (0, a.jsx)(s.$nd, {
                          icon: s.XAi,
                          variant: "overlay-primary",
                          size: "sm",
                          text: C.intl.string(C.t.vwASIl),
                          onClick: () => {
                              (0, p.kd)({ promotionId: t.id, analyticsLocations: [] })
                                  .then((e) => {
                                      i(e.code);
                                  })
                                  .catch((e) => {
                                      l(!0), m.A.captureException(e);
                                  });
                          },
                      }),
                  })
            : null;
    },
    S = (e) => {
        var t;
        let r,
            d,
            {
                recurrence: c,
                titleClassName: m,
                showPartnerLogo: _ = !1,
                showPartnerImage: p = !1,
                titleVariant: h = "primary",
                displayCTAInDedicatedFooter: b = !1,
            } = e,
            [g, R] = n.useState(c.code),
            [v, j] = n.useState(!1),
            S =
                ((t = c.partnerId),
                (r = (0, i.bG)([o.A], () => (0, s.Mwr)(o.A.theme))),
                null == (d = E[t]) ? null : r ? d.logos.dark : d.logos.light),
            T = null == g;
        return (0, a.jsxs)("div", {
            className: A.lA,
            children: [
                (0, a.jsxs)("div", {
                    className: A.LV,
                    children: [
                        (0, a.jsxs)("div", {
                            className: A.JN,
                            children: [
                                _ && S,
                                (0, a.jsxs)("div", {
                                    className: null != m ? `${A.yO} ${m}` : A.yO,
                                    children: [
                                        (0, a.jsx)(s.DZT, {
                                            variant: "secondary" === h ? "heading-md/semibold" : "heading-lg/semibold",
                                            color: "text-strong",
                                            children: c.title,
                                        }),
                                        (0, a.jsx)(s.DZT, {
                                            variant: "heading-sm/medium",
                                            color: "text-subtle",
                                            children: v
                                                ? C.intl.format(C.t.i2EuFO, {
                                                      helpdeskArticle: u.A.getArticleURL(x.MVz.RECURRING_PROMOTION),
                                                  })
                                                : T
                                                  ? c.body
                                                  : null != c.bodyWithExpiration
                                                    ? C.intl.format(c.bodyWithExpiration, { date: c.endDate })
                                                    : c.body,
                                        }),
                                    ],
                                }),
                                !b &&
                                    (0, a.jsx)(P, {
                                        recurrence: c,
                                        canBeClaimed: T,
                                        hasClaimError: v,
                                        setCode: R,
                                        setHasClaimError: j,
                                    }),
                            ],
                        }),
                        p &&
                            (0, a.jsx)("div", {
                                className: A.R4,
                                children: (0, a.jsx)(l._V3, {
                                    src: c.asset ?? "",
                                    className: A.Ys,
                                    imageClassName: c.partnerId === f.XY ? A.Cy : void 0,
                                    width: 100,
                                    height: 100,
                                    zoomable: !1,
                                }),
                            }),
                    ],
                }),
                b && (0, a.jsx)(N, {}),
                null != g && (0, a.jsx)(I, { recurrence: { ...c, code: g } }),
                b &&
                    null == g &&
                    (0, a.jsx)(y, {
                        children: (0, a.jsx)(P, {
                            recurrence: c,
                            canBeClaimed: T,
                            hasClaimError: v,
                            setCode: R,
                            setHasClaimError: j,
                            className: A.qx,
                        }),
                    }),
            ],
        });
    };
