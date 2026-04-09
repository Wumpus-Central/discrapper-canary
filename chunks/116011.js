r.d(t, { oL: () => j, wx: () => S });
var n = r(627968),
    a = r(64700),
    i = r(158954),
    s = r(311907),
    l = r(397927),
    d = r(914410),
    o = r(544028),
    c = r(954571),
    u = r(405269),
    m = r(975571),
    _ = r(728458),
    p = r(881373),
    f = r(264779),
    b = r(852218),
    h = r(699443),
    g = r(652215),
    x = r(284498),
    C = r(985018),
    A = r(616825),
    R = r(870378),
    v = r(208556),
    E = r(8496);
let j = {
        [b.XY]: {
            title: x.default.LsJ9hj,
            titleParams: { discountPercent: p.aW },
            body: x.default.Yl5ww1,
            bodyWithExpiration: x.default["6KjkUa"],
            redemptionURL: "https://www.logitech.com/",
            logos: {
                dark: (0, n.jsx)(a.Fragment, {}, "logitech-logo-dark"),
                light: (0, n.jsx)(a.Fragment, {}, "logitech-logo-light"),
            },
            asset: v.A,
        },
        [b.KS]: {
            title: C.t.sfGgOG,
            body: C.t.igiSKe,
            bodyWithExpiration: C.t.w8CXUl,
            redemptionURL: "https://steelseries.com/",
            logos: { dark: (0, n.jsx)(h.a1, {}), light: (0, n.jsx)(h.Gn, {}) },
            asset: E.A,
        },
        [b.Cs]: {
            title: C.t["9N8obd"],
            body: C.t["34g+Z3"],
            bodyWithExpiration: C.t.rqmpXc,
            redemptionURL: "https://www.kontrolfreek.com/",
            logos: { dark: (0, n.jsx)(h.WF, {}), light: (0, n.jsx)(h.s, {}) },
            asset: R.A,
        },
    },
    N = () => {
        let e = (0, u.N5)(),
            t = (0, u.P6)();
        return (0, n.jsxs)("div", {
            className: `${A.G9} ${A.sQ}`,
            children: [
                (0, n.jsx)(i.EYj, {
                    variant: "text-sm/normal",
                    color: "text-muted",
                    className: A.kT,
                    children: C.intl.format(x.default["65EEvD"], { days: t }),
                }),
                (0, n.jsx)(d.Ay, {
                    progress: e,
                    variant: d.qP.UNSET,
                    override: { default: { gradientStart: "var(--illo-blue-70)", gradientEnd: "var(--illo-blue-10)" } },
                }),
            ],
        });
    },
    y = (e) => {
        let { children: t } = e;
        return (0, n.jsx)("div", { className: A.oP, children: (0, n.jsx)("div", { className: A.t0, children: t }) });
    },
    I = (e) => {
        let { recurrence: t } = e,
            r = (0, n.jsx)(i.rOg, { color: l.LU0.colors.CONTROL_CONNECTED_BACKGROUND_DEFAULT }),
            s = (0, n.jsx)(i.K0, {
                icon: i.TdU,
                size: "sm",
                variant: "secondary",
                "aria-label": "",
                onClick: () => {
                    navigator.clipboard.writeText(t.code), o(r);
                },
            }),
            [d, o] = a.useState(() => s);
        if (null != t.code)
            return (0, n.jsx)("div", {
                className: A.oP,
                children: (0, n.jsxs)("div", {
                    className: A.t0,
                    children: [
                        (0, n.jsx)("div", {
                            className: A.cD,
                            children: (0, n.jsx)(i.EYj, {
                                variant: "text-md/medium",
                                color: "text-strong",
                                children: t.code,
                            }),
                        }),
                        d,
                        (0, n.jsx)(i.$nd, {
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
        let {
            recurrence: t,
            canBeClaimed: r,
            hasClaimError: a,
            setCode: s,
            setHasClaimError: l,
            className: d,
            analyticsLocations: o = [],
        } = e;
        return r
            ? a
                ? (0, n.jsx)("div", {
                      className: d,
                      children: (0, n.jsx)(i.$nd, {
                          icon: i.EpV,
                          variant: "critical-secondary",
                          size: "sm",
                          disabled: !0,
                          text: C.intl.string(C.t["8LKchl"]),
                      }),
                  })
                : (0, n.jsx)("div", {
                      className: d,
                      children: (0, n.jsx)(i.$nd, {
                          icon: i.XAi,
                          variant: "overlay-primary",
                          size: "sm",
                          text: C.intl.string(C.t.vwASIl),
                          onClick: () => {
                              (0, f.kd)({ promotionId: t.id, analyticsLocations: o })
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
            d,
            {
                recurrence: c,
                titleClassName: u,
                showPartnerLogo: _ = !1,
                showPartnerImage: p = !1,
                titleVariant: f = "primary",
                displayCTAInDedicatedFooter: h = !1,
                analyticsLocations: x = [],
            } = e,
            [R, v] = a.useState(c.code),
            [E, S] = a.useState(!1),
            T =
                ((t = c.partnerId),
                (r = (0, s.bG)([o.A], () => (0, i.Mwr)(o.A.theme))),
                null == (d = j[t]) ? null : r ? d.logos.dark : d.logos.light),
            w = null == R;
        return (0, n.jsxs)("div", {
            className: A.lA,
            children: [
                (0, n.jsxs)("div", {
                    className: A.LV,
                    children: [
                        (0, n.jsxs)("div", {
                            className: A.JN,
                            children: [
                                _ && T,
                                (0, n.jsxs)("div", {
                                    className: null != u ? `${A.yO} ${u}` : A.yO,
                                    children: [
                                        (0, n.jsx)(i.DZT, {
                                            variant: "secondary" === f ? "heading-md/semibold" : "heading-lg/semibold",
                                            color: "text-strong",
                                            children: c.title,
                                        }),
                                        (0, n.jsx)(i.DZT, {
                                            variant: "heading-sm/medium",
                                            color: "text-subtle",
                                            children: E
                                                ? C.intl.format(C.t.i2EuFO, {
                                                      helpdeskArticle: m.A.getArticleURL(g.MVz.RECURRING_PROMOTION),
                                                  })
                                                : w
                                                  ? c.body
                                                  : null != c.bodyWithExpiration
                                                    ? C.intl.format(c.bodyWithExpiration, { date: c.endDate })
                                                    : c.body,
                                        }),
                                    ],
                                }),
                                !h &&
                                    (0, n.jsx)(P, {
                                        recurrence: c,
                                        canBeClaimed: w,
                                        hasClaimError: E,
                                        setCode: v,
                                        setHasClaimError: S,
                                        analyticsLocations: x,
                                    }),
                            ],
                        }),
                        p &&
                            (0, n.jsx)("div", {
                                className: A.R4,
                                children: (0, n.jsx)(l._V3, {
                                    src: c.asset ?? "",
                                    className: A.Ys,
                                    imageClassName: c.partnerId === b.XY ? A.Cy : void 0,
                                    width: 100,
                                    height: 100,
                                    zoomable: !1,
                                }),
                            }),
                    ],
                }),
                h && (0, n.jsx)(N, {}),
                null != R && (0, n.jsx)(I, { recurrence: { ...c, code: R } }),
                h &&
                    null == R &&
                    (0, n.jsx)(y, {
                        children: (0, n.jsx)(P, {
                            recurrence: c,
                            canBeClaimed: w,
                            hasClaimError: E,
                            setCode: v,
                            setHasClaimError: S,
                            className: A.qx,
                            analyticsLocations: x,
                        }),
                    }),
            ],
        });
    };
