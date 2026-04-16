n.d(t, { oL: () => E, wx: () => I });
var r = n(627968),
    l = n(64700),
    s = n(158954),
    a = n(311907),
    i = n(397927),
    d = n(914410),
    o = n(544028),
    c = n(954571),
    u = n(405269),
    m = n(975571),
    h = n(728458),
    x = n(881373),
    C = n(264779),
    p = n(852218),
    _ = n(699443),
    g = n(652215),
    f = n(962995),
    b = n(985018),
    R = n(75662),
    j = n(870378),
    v = n(208556),
    A = n(8496);
let E = {
        [p.XY]: {
            title: f.default.LsJ9hj,
            titleParams: { discountPercent: x.aW },
            body: f.default.Yl5ww1,
            bodyWithExpiration: f.default["6KjkUa"],
            redemptionURL: "https://www.logitech.com/",
            logos: {
                dark: (0, r.jsx)(l.Fragment, {}, "logitech-logo-dark"),
                light: (0, r.jsx)(l.Fragment, {}, "logitech-logo-light"),
            },
            asset: v.A,
        },
        [p.KS]: {
            title: b.t.sfGgOG,
            body: b.t.igiSKe,
            bodyWithExpiration: b.t.w8CXUl,
            redemptionURL: "https://steelseries.com/",
            logos: { dark: (0, r.jsx)(_.a1, {}), light: (0, r.jsx)(_.Gn, {}) },
            asset: A.A,
        },
        [p.Cs]: {
            title: b.t["9N8obd"],
            body: b.t["34g+Z3"],
            bodyWithExpiration: b.t.rqmpXc,
            redemptionURL: "https://www.kontrolfreek.com/",
            logos: { dark: (0, r.jsx)(_.WF, {}), light: (0, r.jsx)(_.s, {}) },
            asset: j.A,
        },
    },
    N = () => {
        let e = (0, u.N5)(),
            t = (0, u.P6)();
        return (0, r.jsxs)("div", {
            className: `${R.G9} ${R.sQ}`,
            children: [
                (0, r.jsx)(s.EYj, {
                    variant: "text-sm/normal",
                    color: "text-muted",
                    className: R.kT,
                    children: b.intl.format(f.default["65EEvD"], { days: t }),
                }),
                (0, r.jsx)(d.Ay, {
                    progress: e,
                    variant: d.qP.UNSET,
                    override: { default: { gradientStart: "var(--illo-blue-70)", gradientEnd: "var(--illo-blue-10)" } },
                }),
            ],
        });
    },
    P = (e) => {
        let { children: t } = e;
        return (0, r.jsx)("div", { className: R.oP, children: (0, r.jsx)("div", { className: R.t0, children: t }) });
    },
    D = (e) => {
        let { recurrence: t } = e,
            n = (0, r.jsx)(s.rOg, { color: i.LU0.colors.CONTROL_CONNECTED_BACKGROUND_DEFAULT }),
            a = (0, r.jsx)("span", {
                className: R.nP,
                children: (0, r.jsx)(s.K0, {
                    icon: s.TdU,
                    size: "sm",
                    variant: "icon-only",
                    "aria-label": "",
                    onClick: () => {
                        navigator.clipboard.writeText(t.code), o(n);
                    },
                }),
            }),
            [d, o] = l.useState(() => a);
        if (null != t.code)
            return (0, r.jsx)("div", {
                className: R.oP,
                children: (0, r.jsxs)("div", {
                    className: R.t0,
                    children: [
                        (0, r.jsx)("div", {
                            className: R.cD,
                            children: (0, r.jsx)(s.EYj, {
                                variant: "text-md/medium",
                                color: "text-strong",
                                children: t.code,
                            }),
                        }),
                        d,
                        (0, r.jsx)(s.$nd, {
                            variant: "secondary",
                            size: "sm",
                            text: b.intl.formatToPlainString(b.t.DF68t7, { redemptionURL: t.redemptionURL }),
                            onClick: () => {
                                window.open(t.redemptionURL, "_blank"),
                                    c.default.track(g.HAw.RECURRING_PROMOTION_CLAIMED);
                            },
                        }),
                    ],
                }),
            });
    },
    y = (e) => {
        let {
            recurrence: t,
            canBeClaimed: n,
            hasClaimError: l,
            setCode: a,
            setHasClaimError: i,
            className: d,
            analyticsLocations: o = [],
        } = e;
        return n
            ? l
                ? (0, r.jsx)("div", {
                      className: d,
                      children: (0, r.jsx)(s.$nd, {
                          icon: s.EpV,
                          variant: "critical-secondary",
                          size: "sm",
                          disabled: !0,
                          text: b.intl.string(b.t["8LKchl"]),
                      }),
                  })
                : (0, r.jsx)("div", {
                      className: d,
                      children: (0, r.jsx)(s.$nd, {
                          icon: s.XAi,
                          variant: "secondary",
                          size: "sm",
                          text: b.intl.string(b.t.vwASIl),
                          onClick: () => {
                              (0, C.kd)({ promotionId: t.id, analyticsLocations: o })
                                  .then((e) => {
                                      a(e.code);
                                  })
                                  .catch((e) => {
                                      i(!0), h.A.captureException(e);
                                  });
                          },
                      }),
                  })
            : null;
    },
    I = (e) => {
        var t;
        let n,
            d,
            {
                recurrence: c,
                titleClassName: u,
                showPartnerLogo: h = !1,
                showPartnerImage: x = !1,
                titleVariant: C = "primary",
                displayCTAInDedicatedFooter: _ = !1,
                analyticsLocations: f = [],
            } = e,
            [j, v] = l.useState(c.code),
            [A, I] = l.useState(!1),
            T =
                ((t = c.partnerId),
                (n = (0, a.bG)([o.A], () => (0, s.Mwr)(o.A.theme))),
                null == (d = E[t]) ? null : n ? d.logos.dark : d.logos.light),
            S = null == j;
        return (0, r.jsxs)("div", {
            className: R.lA,
            children: [
                (0, r.jsxs)("div", {
                    className: R.LV,
                    children: [
                        (0, r.jsxs)("div", {
                            className: R.JN,
                            children: [
                                h && T,
                                (0, r.jsxs)("div", {
                                    className: null != u ? `${R.yO} ${u}` : R.yO,
                                    children: [
                                        (0, r.jsx)(s.DZT, {
                                            variant: "secondary" === C ? "heading-md/semibold" : "heading-lg/semibold",
                                            color: "text-strong",
                                            children: c.title,
                                        }),
                                        (0, r.jsx)(s.DZT, {
                                            variant: "heading-sm/medium",
                                            color: "text-subtle",
                                            children: A
                                                ? b.intl.format(b.t.i2EuFO, {
                                                      helpdeskArticle: m.A.getArticleURL(g.MVz.RECURRING_PROMOTION),
                                                  })
                                                : S
                                                  ? c.body
                                                  : null != c.bodyWithExpiration
                                                    ? b.intl.format(c.bodyWithExpiration, { date: c.endDate })
                                                    : c.body,
                                        }),
                                    ],
                                }),
                                !_ &&
                                    (0, r.jsx)(y, {
                                        recurrence: c,
                                        canBeClaimed: S,
                                        hasClaimError: A,
                                        setCode: v,
                                        setHasClaimError: I,
                                        analyticsLocations: f,
                                    }),
                            ],
                        }),
                        x &&
                            (0, r.jsx)("div", {
                                className: R.R4,
                                children: (0, r.jsx)(i._V3, {
                                    src: c.asset ?? "",
                                    className: R.Ys,
                                    imageClassName: c.partnerId === p.XY ? R.Cy : void 0,
                                    width: 100,
                                    height: 100,
                                    zoomable: !1,
                                }),
                            }),
                    ],
                }),
                _ && (0, r.jsx)(N, {}),
                null != j && (0, r.jsx)(D, { recurrence: { ...c, code: j } }),
                _ &&
                    null == j &&
                    (0, r.jsx)(P, {
                        children: (0, r.jsx)(y, {
                            recurrence: c,
                            canBeClaimed: S,
                            hasClaimError: A,
                            setCode: v,
                            setHasClaimError: I,
                            className: R.qx,
                            analyticsLocations: f,
                        }),
                    }),
            ],
        });
    };
