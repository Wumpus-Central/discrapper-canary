n.d(t, { o: () => E, w: () => C });
var i = n(627968),
    s = n(64700),
    l = n(158954),
    a = n(311907),
    r = n(397927),
    o = n(544028),
    d = n(954571),
    c = n(975571),
    u = n(728458),
    _ = n(264779),
    m = n(852218),
    g = n(699443),
    A = n(652215),
    h = n(985018),
    x = n(342087),
    p = n(870378),
    T = n(8496);
let E = {
        [m.KS]: {
            title: h.t.sfGgOG,
            body: h.t.igiSKe,
            bodyWithExpiration: h.t.w8CXUl,
            redemptionURL: "https://steelseries.com/",
            logos: { dark: (0, i.jsx)(g.a1, {}), light: (0, i.jsx)(g.Gn, {}) },
            asset: T.A,
        },
        [m.Cs]: {
            title: h.t["9N8obd"],
            body: h.t["34g+Z3"],
            bodyWithExpiration: h.t.rqmpXc,
            redemptionURL: "https://www.kontrolfreek.com/",
            logos: { dark: (0, i.jsx)(g.WF, {}), light: (0, i.jsx)(g.s, {}) },
            asset: p.A,
        },
    },
    S = (e) => {
        let { recurrence: t } = e,
            n = (0, i.jsx)(l.rOg, { color: r.LU0.colors.CONTROL_CONNECTED_BACKGROUND_DEFAULT }),
            a = (0, i.jsx)(l.K0, {
                icon: l.TdU,
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
                className: x.oP,
                children: (0, i.jsxs)("div", {
                    className: x.t0,
                    children: [
                        (0, i.jsx)("div", {
                            className: x.cD,
                            children: (0, i.jsx)(l.EYj, {
                                variant: "text-md/medium",
                                color: "text-strong",
                                children: t.code,
                            }),
                        }),
                        o,
                        (0, i.jsx)(l.$nd, {
                            variant: "overlay-primary",
                            size: "sm",
                            text: h.intl.formatToPlainString(h.t.DF68t7, { redemptionURL: t.redemptionURL }),
                            onClick: () => {
                                window.open(t.redemptionURL, "_blank"),
                                    d.default.track(A.HAw.RECURRING_PROMOTION_CLAIMED);
                            },
                        }),
                    ],
                }),
            });
    },
    C = (e) => {
        var t;
        let n,
            d,
            {
                recurrence: m,
                titleClassName: g,
                showPartnerLogo: p = !1,
                showPartnerImage: T = !1,
                countdownBar: C,
            } = e,
            [f, b] = s.useState(m.code),
            [N, I] = s.useState(!1),
            v =
                ((t = m.partnerId),
                (n = (0, a.bG)([o.A], () => (0, l.Mwr)(o.A.theme))),
                null == (d = E[t]) ? null : n ? d.logos.dark : d.logos.light),
            j = null == f;
        return (0, i.jsxs)("div", {
            className: x.lA,
            children: [
                (0, i.jsxs)("div", {
                    className: x.LV,
                    children: [
                        (0, i.jsxs)("div", {
                            className: x.JN,
                            children: [
                                p && v,
                                (0, i.jsxs)("div", {
                                    className: null != g ? `${x.yO} ${g}` : x.yO,
                                    children: [
                                        (0, i.jsx)(l.DZT, {
                                            variant: "heading-lg/semibold",
                                            color: "text-strong",
                                            children: h.intl.string(m.title),
                                        }),
                                        (0, i.jsx)(l.DZT, {
                                            variant: "heading-sm/medium",
                                            color: "text-subtle",
                                            children: N
                                                ? h.intl.format(h.t.i2EuFO, {
                                                      helpdeskArticle: c.A.getArticleURL(A.MVz.RECURRING_PROMOTION),
                                                  })
                                                : j
                                                  ? h.intl.string(m.body)
                                                  : h.intl.format(m.bodyWithExpiration, { date: m.endDate }),
                                        }),
                                    ],
                                }),
                                j &&
                                    (N
                                        ? (0, i.jsx)(l.$nd, {
                                              icon: l.EpV,
                                              variant: "critical-secondary",
                                              size: "sm",
                                              disabled: !0,
                                              text: h.intl.string(h.t["8LKchl"]),
                                          })
                                        : (0, i.jsx)(l.$nd, {
                                              icon: l.XAi,
                                              variant: "overlay-primary",
                                              size: "sm",
                                              text: h.intl.string(h.t.vwASIl),
                                              onClick: () => {
                                                  (0, _.kd)({ promotionId: m.id, analyticsLocations: [] })
                                                      .then((e) => {
                                                          b(e.code);
                                                      })
                                                      .catch((e) => {
                                                          I(!0), u.A.captureException(e);
                                                      });
                                              },
                                          })),
                            ],
                        }),
                        T &&
                            (0, i.jsx)("div", {
                                className: x.R4,
                                children: (0, i.jsx)(r._V3, {
                                    src: m.asset,
                                    className: x.Ys,
                                    width: 100,
                                    height: 100,
                                    zoomable: !1,
                                }),
                            }),
                    ],
                }),
                C,
                null != f && (0, i.jsx)(S, { recurrence: { ...m, code: f } }),
            ],
        });
    };
