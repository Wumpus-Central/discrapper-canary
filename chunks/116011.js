r.d(t, { oL: () => N, wx: () => S });
var a = r(627968),
    n = r(64700),
    i = r(158954),
    s = r(311907),
    l = r(397927),
    o = r(914410),
    d = r(544028),
    c = r(954571),
    u = r(405269),
    m = r(975571),
    _ = r(728458),
    p = r(881373),
    f = r(264779),
    h = r(852218),
    b = r(699443),
    g = r(652215),
    x = r(653624),
    C = r(985018),
    A = r(276478),
    R = r(870378),
    v = r(208556),
    E = r(8496);
let N = {
        [h.XY]: {
            title: x.default.LsJ9hj,
            titleParams: { discountPercent: p.aW },
            body: x.default.Yl5ww1,
            bodyWithExpiration: x.default["6KjkUa"],
            redemptionURL: "https://www.logitech.com/",
            logos: {
                dark: (0, a.jsx)(n.Fragment, {}, "logitech-logo-dark"),
                light: (0, a.jsx)(n.Fragment, {}, "logitech-logo-light"),
            },
            asset: v.A,
        },
        [h.KS]: {
            title: C.t.sfGgOG,
            body: C.t.igiSKe,
            bodyWithExpiration: C.t.w8CXUl,
            redemptionURL: "https://steelseries.com/",
            logos: { dark: (0, a.jsx)(b.a1, {}), light: (0, a.jsx)(b.Gn, {}) },
            asset: E.A,
        },
        [h.Cs]: {
            title: C.t["9N8obd"],
            body: C.t["34g+Z3"],
            bodyWithExpiration: C.t.rqmpXc,
            redemptionURL: "https://www.kontrolfreek.com/",
            logos: { dark: (0, a.jsx)(b.WF, {}), light: (0, a.jsx)(b.s, {}) },
            asset: R.A,
        },
    },
    j = () => {
        let e = (0, u.N5)(),
            t = (0, u.P6)();
        return (0, a.jsxs)("div", {
            className: `${A.G9} ${A.sQ}`,
            children: [
                (0, a.jsx)(i.EYj, {
                    variant: "text-sm/normal",
                    color: "text-muted",
                    className: A.kT,
                    children: C.intl.format(x.default["65EEvD"], { days: t }),
                }),
                (0, a.jsx)(o.Ay, {
                    progress: e,
                    variant: o.qP.UNSET,
                    override: { default: { gradientStart: "var(--illo-blue-70)", gradientEnd: "var(--illo-blue-10)" } },
                }),
            ],
        });
    },
    y = (e) => {
        let { children: t } = e;
        return (0, a.jsx)("div", { className: A.oP, children: (0, a.jsx)("div", { className: A.t0, children: t }) });
    },
    I = (e) => {
        let { recurrence: t } = e,
            r = (0, a.jsx)(i.rOg, { color: l.LU0.colors.CONTROL_CONNECTED_BACKGROUND_DEFAULT }),
            s = (0, a.jsx)(i.K0, {
                icon: i.TdU,
                size: "sm",
                variant: "secondary",
                "aria-label": "",
                color: "icon-feedback-positive",
                onClick: () => {
                    navigator.clipboard.writeText(t.code), d(r);
                },
            }),
            [o, d] = n.useState(() => s);
        if (null != t.code)
            return (0, a.jsx)("div", {
                className: A.oP,
                children: (0, a.jsxs)("div", {
                    className: A.t0,
                    children: [
                        (0, a.jsx)("div", {
                            className: A.cD,
                            children: (0, a.jsx)(i.EYj, {
                                variant: "text-md/medium",
                                color: "text-strong",
                                children: t.code,
                            }),
                        }),
                        o,
                        (0, a.jsx)(i.$nd, {
                            variant: "overlay-primary",
                            size: "sm",
                            text: C.intl.formatToPlainString(C.t.DF68t7, { redemptionURL: t.redemptionURL }),
                            onClick: () => {
                                window.open(t.redemptionURL, "_blank"),
                                    c.default.track(g.HAw.RECURRING_PROMOTION_CLAIMED);
                            },
                        }),
                    ],
                }),
            });
    },
    P = (e) => {
        let { recurrence: t, canBeClaimed: r, hasClaimError: n, setCode: s, setHasClaimError: l, className: o } = e;
        return r
            ? n
                ? (0, a.jsx)("div", {
                      className: o,
                      children: (0, a.jsx)(i.$nd, {
                          icon: i.EpV,
                          variant: "critical-secondary",
                          size: "sm",
                          disabled: !0,
                          text: C.intl.string(C.t["8LKchl"]),
                      }),
                  })
                : (0, a.jsx)("div", {
                      className: o,
                      children: (0, a.jsx)(i.$nd, {
                          icon: i.XAi,
                          variant: "overlay-primary",
                          size: "sm",
                          text: C.intl.string(C.t.vwASIl),
                          onClick: () => {
                              (0, f.kd)({ promotionId: t.id, analyticsLocations: [] })
                                  .then((e) => {
                                      s(e.code);
                                  })
                                  .catch((e) => {
                                      l(!0), _.A.captureException(e);
                                  });
                          },
                      }),
                  })
            : null;
    },
    S = (e) => {
        var t;
        let r,
            o,
            {
                recurrence: c,
                titleClassName: u,
                showPartnerLogo: _ = !1,
                showPartnerImage: p = !1,
                titleVariant: f = "primary",
                displayCTAInDedicatedFooter: b = !1,
            } = e,
            [x, R] = n.useState(c.code),
            [v, E] = n.useState(!1),
            S =
                ((t = c.partnerId),
                (r = (0, s.bG)([d.A], () => (0, i.Mwr)(d.A.theme))),
                null == (o = N[t]) ? null : r ? o.logos.dark : o.logos.light),
            T = null == x;
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
                                    className: null != u ? `${A.yO} ${u}` : A.yO,
                                    children: [
                                        (0, a.jsx)(i.DZT, {
                                            variant: "secondary" === f ? "heading-md/semibold" : "heading-lg/semibold",
                                            color: "text-strong",
                                            children: c.title,
                                        }),
                                        (0, a.jsx)(i.DZT, {
                                            variant: "heading-sm/medium",
                                            color: "text-subtle",
                                            children: v
                                                ? C.intl.format(C.t.i2EuFO, {
                                                      helpdeskArticle: m.A.getArticleURL(g.MVz.RECURRING_PROMOTION),
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
                                        setHasClaimError: E,
                                    }),
                            ],
                        }),
                        p &&
                            (0, a.jsx)("div", {
                                className: A.R4,
                                children: (0, a.jsx)(l._V3, {
                                    src: c.asset ?? "",
                                    className: A.Ys,
                                    imageClassName: c.partnerId === h.XY ? A.Cy : void 0,
                                    width: 100,
                                    height: 100,
                                    zoomable: !1,
                                }),
                            }),
                    ],
                }),
                b && (0, a.jsx)(j, {}),
                null != x && (0, a.jsx)(I, { recurrence: { ...c, code: x } }),
                b &&
                    null == x &&
                    (0, a.jsx)(y, {
                        children: (0, a.jsx)(P, {
                            recurrence: c,
                            canBeClaimed: T,
                            hasClaimError: v,
                            setCode: R,
                            setHasClaimError: E,
                            className: A.qx,
                        }),
                    }),
            ],
        });
    };
