n.d(t, { o: () => T, w: () => E });
var i = n(627968),
    s = n(64700),
    l = n(158954),
    a = n(311907),
    r = n(397927),
    o = n(544028),
    d = n(954571),
    c = n(975571),
    u = n(728458),
    m = n(264779),
    _ = n(852218),
    g = n(699443),
    x = n(652215),
    A = n(985018),
    h = n(276478),
    p = n(870378),
    f = n(8496);
let T = {
        [_.KS]: {
            title: A.t.sfGgOG,
            body: A.t.igiSKe,
            bodyWithExpiration: A.t.w8CXUl,
            redemptionURL: "https://steelseries.com/",
            logos: { dark: (0, i.jsx)(g.a1, {}), light: (0, i.jsx)(g.Gn, {}) },
            asset: f.A,
        },
        [_.Cs]: {
            title: A.t["9N8obd"],
            body: A.t["34g+Z3"],
            bodyWithExpiration: A.t.rqmpXc,
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
                className: h.oP,
                children: (0, i.jsxs)("div", {
                    className: h.t0,
                    children: [
                        (0, i.jsx)("div", {
                            className: h.cD,
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
                            text: A.intl.formatToPlainString(A.t.DF68t7, { redemptionURL: t.redemptionURL }),
                            onClick: () => {
                                window.open(t.redemptionURL, "_blank"),
                                    d.default.track(x.HAw.RECURRING_PROMOTION_CLAIMED);
                            },
                        }),
                    ],
                }),
            });
    },
    E = (e) => {
        var t;
        let n,
            d,
            {
                recurrence: _,
                titleClassName: g,
                showPartnerLogo: p = !1,
                showPartnerImage: f = !1,
                countdownBar: E,
                titleVariant: b = "primary",
            } = e,
            [C, v] = s.useState(_.code),
            [N, I] = s.useState(!1),
            j =
                ((t = _.partnerId),
                (n = (0, a.bG)([o.A], () => (0, l.Mwr)(o.A.theme))),
                null == (d = T[t]) ? null : n ? d.logos.dark : d.logos.light),
            y = null == C;
        return (0, i.jsxs)("div", {
            className: h.lA,
            children: [
                (0, i.jsxs)("div", {
                    className: h.LV,
                    children: [
                        (0, i.jsxs)("div", {
                            className: h.JN,
                            children: [
                                p && j,
                                (0, i.jsxs)("div", {
                                    className: null != g ? `${h.yO} ${g}` : h.yO,
                                    children: [
                                        (0, i.jsx)(l.DZT, {
                                            variant: "secondary" === b ? "heading-md/semibold" : "heading-lg/semibold",
                                            color: "text-strong",
                                            children: A.intl.string(_.title),
                                        }),
                                        (0, i.jsx)(l.DZT, {
                                            variant: "heading-sm/medium",
                                            color: "text-subtle",
                                            children: N
                                                ? A.intl.format(A.t.i2EuFO, {
                                                      helpdeskArticle: c.A.getArticleURL(x.MVz.RECURRING_PROMOTION),
                                                  })
                                                : y
                                                  ? A.intl.string(_.body)
                                                  : A.intl.format(_.bodyWithExpiration, { date: _.endDate }),
                                        }),
                                    ],
                                }),
                                y &&
                                    (N
                                        ? (0, i.jsx)(l.$nd, {
                                              icon: l.EpV,
                                              variant: "critical-secondary",
                                              size: "sm",
                                              disabled: !0,
                                              text: A.intl.string(A.t["8LKchl"]),
                                          })
                                        : (0, i.jsx)(l.$nd, {
                                              icon: l.XAi,
                                              variant: "overlay-primary",
                                              size: "sm",
                                              text: A.intl.string(A.t.vwASIl),
                                              onClick: () => {
                                                  (0, m.kd)({ promotionId: _.id, analyticsLocations: [] })
                                                      .then((e) => {
                                                          v(e.code);
                                                      })
                                                      .catch((e) => {
                                                          I(!0), u.A.captureException(e);
                                                      });
                                              },
                                          })),
                            ],
                        }),
                        f &&
                            (0, i.jsx)("div", {
                                className: h.R4,
                                children: (0, i.jsx)(r._V3, {
                                    src: _.asset ?? "",
                                    className: h.Ys,
                                    width: 100,
                                    height: 100,
                                    zoomable: !1,
                                }),
                            }),
                    ],
                }),
                E,
                null != C && (0, i.jsx)(S, { recurrence: { ..._, code: C } }),
            ],
        });
    };
