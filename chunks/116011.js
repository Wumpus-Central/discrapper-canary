r.d(t, { oL: () => j, wx: () => P });
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
    _ = r(264779),
    p = r(852218),
    f = r(699443),
    h = r(729640),
    b = r(652215),
    x = r(653624),
    g = r(985018),
    C = r(276478),
    A = r(861223),
    R = r(870378),
    v = r(8496);
let j = {
        [p.XY]: {
            title: x.default.jkdhZq,
            body: x.default.Yl5ww1,
            bodyWithExpiration: x.default.Yl5ww1,
            redemptionURL: "https://www.logitech.com/",
            logos: { dark: (0, a.jsx)(f.a1, {}), light: (0, a.jsx)(f.Gn, {}) },
            asset: A,
        },
        [p.KS]: {
            title: g.t.sfGgOG,
            body: g.t.igiSKe,
            bodyWithExpiration: g.t.w8CXUl,
            redemptionURL: "https://steelseries.com/",
            logos: { dark: (0, a.jsx)(f.a1, {}), light: (0, a.jsx)(f.Gn, {}) },
            asset: v.A,
        },
        [p.Cs]: {
            title: g.t["9N8obd"],
            body: g.t["34g+Z3"],
            bodyWithExpiration: g.t.rqmpXc,
            redemptionURL: "https://www.kontrolfreek.com/",
            logos: { dark: (0, a.jsx)(f.WF, {}), light: (0, a.jsx)(f.s, {}) },
            asset: R.A,
        },
    },
    N = () => {
        let e = (0, c.N5)(),
            t = (0, c.P6)();
        return (0, a.jsxs)("div", {
            className: `${C.G9} ${C.sQ}`,
            children: [
                (0, a.jsx)(s.EYj, {
                    variant: "text-sm/normal",
                    color: "text-muted",
                    className: C.kT,
                    children: g.intl.format(x.default["65EEvD"], { days: t }),
                }),
                (0, a.jsx)(h.P, { percentage: e }),
            ],
        });
    },
    E = (e) => {
        let { children: t } = e;
        return (0, a.jsx)("div", { className: C.oP, children: (0, a.jsx)("div", { className: C.t0, children: t }) });
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
                className: C.oP,
                children: (0, a.jsxs)("div", {
                    className: C.t0,
                    children: [
                        (0, a.jsx)("div", {
                            className: C.cD,
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
                            text: g.intl.formatToPlainString(g.t.DF68t7, { redemptionURL: t.redemptionURL }),
                            onClick: () => {
                                window.open(t.redemptionURL, "_blank"),
                                    d.default.track(b.HAw.RECURRING_PROMOTION_CLAIMED);
                            },
                        }),
                    ],
                }),
            });
    },
    y = (e) => {
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
                          text: g.intl.string(g.t["8LKchl"]),
                      }),
                  })
                : (0, a.jsx)("div", {
                      className: o,
                      children: (0, a.jsx)(s.$nd, {
                          icon: s.XAi,
                          variant: "overlay-primary",
                          size: "sm",
                          text: g.intl.string(g.t.vwASIl),
                          onClick: () => {
                              (0, _.kd)({ promotionId: t.id, analyticsLocations: [] })
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
    P = (e) => {
        var t;
        let r,
            d,
            {
                recurrence: c,
                titleClassName: m,
                showPartnerLogo: _ = !1,
                showPartnerImage: f = !1,
                titleVariant: h = "primary",
                displayCTAInDedicatedFooter: x = !1,
            } = e,
            [A, R] = n.useState(c.code),
            [v, P] = n.useState(!1),
            T =
                ((t = c.partnerId),
                (r = (0, i.bG)([o.A], () => (0, s.Mwr)(o.A.theme))),
                null == (d = j[t]) ? null : r ? d.logos.dark : d.logos.light),
            S = null == A;
        return (0, a.jsxs)("div", {
            className: C.lA,
            children: [
                (0, a.jsxs)("div", {
                    className: C.LV,
                    children: [
                        (0, a.jsxs)("div", {
                            className: C.JN,
                            children: [
                                _ && T,
                                (0, a.jsxs)("div", {
                                    className: null != m ? `${C.yO} ${m}` : C.yO,
                                    children: [
                                        (0, a.jsx)(s.DZT, {
                                            variant: "secondary" === h ? "heading-md/semibold" : "heading-lg/semibold",
                                            color: "text-strong",
                                            children: g.intl.string(c.title),
                                        }),
                                        (0, a.jsx)(s.DZT, {
                                            variant: "heading-sm/medium",
                                            color: "text-subtle",
                                            children: v
                                                ? g.intl.format(g.t.i2EuFO, {
                                                      helpdeskArticle: u.A.getArticleURL(b.MVz.RECURRING_PROMOTION),
                                                  })
                                                : S
                                                  ? g.intl.string(c.body)
                                                  : g.intl.format(c.bodyWithExpiration, { date: c.endDate }),
                                        }),
                                    ],
                                }),
                                !x &&
                                    (0, a.jsx)(y, {
                                        recurrence: c,
                                        canBeClaimed: S,
                                        hasClaimError: v,
                                        setCode: R,
                                        setHasClaimError: P,
                                    }),
                            ],
                        }),
                        f &&
                            (0, a.jsx)("div", {
                                className: C.R4,
                                children: (0, a.jsx)(l._V3, {
                                    src: c.asset ?? "",
                                    className: C.Ys,
                                    imageClassName: c.partnerId === p.XY ? C.Cy : void 0,
                                    width: 100,
                                    height: 100,
                                    zoomable: !1,
                                }),
                            }),
                    ],
                }),
                x && (0, a.jsx)(N, {}),
                null != A && (0, a.jsx)(I, { recurrence: { ...c, code: A } }),
                x &&
                    null == A &&
                    (0, a.jsx)(E, {
                        children: (0, a.jsx)(y, {
                            recurrence: c,
                            canBeClaimed: S,
                            hasClaimError: v,
                            setCode: R,
                            setHasClaimError: P,
                            className: C.qx,
                        }),
                    }),
            ],
        });
    };
