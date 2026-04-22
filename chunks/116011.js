s.d(t, { Cf: () => L, wx: () => G });
var n = s(627968),
    a = s(64700),
    r = s(834730),
    l = s(366010),
    i = s(947641),
    d = s(408278),
    o = s(624479),
    c = s(821609),
    u = s(695366),
    h = s(194261),
    m = s(534514),
    x = s(311907),
    C = s(827734),
    _ = s(673698),
    p = s(31502),
    g = s(914410),
    f = s(544028),
    R = s(954571),
    b = s(405269),
    v = s(975571),
    j = s(728458),
    E = s(398523),
    A = s(881373),
    N = s(264779),
    P = s(852218),
    I = s(699443),
    D = s(652215),
    y = s(778414),
    S = s(985018),
    w = s(738894),
    O = s(870378),
    T = s(208556),
    M = s(8496);
function L() {
    let e = (0, p.Q)("getRecurringPromotionPartnerAttributes");
    return {
        [P.XY]: {
            title: e ? y.default.PF1aT5 : y.default.LsJ9hj,
            titleParams: e ? { discountPercentage: A.aW } : { discountPercent: A.aW },
            body: e ? y.default.KoKwMn : y.default.Yl5ww1,
            bodyWithExpiration: y.default["6KjkUa"],
            redemptionURL: "https://www.logitech.com/",
            logos: {
                dark: (0, n.jsx)(a.Fragment, {}, "logitech-logo-dark"),
                light: (0, n.jsx)(a.Fragment, {}, "logitech-logo-light"),
            },
            asset: T.A,
        },
        [P.KS]: {
            title: e ? S.t.p7BkHh : S.t.sfGgOG,
            titleParams: e ? { discountPercentage: E.H7 } : void 0,
            body: e ? S.t.nmvvaN : S.t.igiSKe,
            bodyWithExpiration: S.t.w8CXUl,
            redemptionURL: "https://steelseries.com/",
            logos: { dark: (0, n.jsx)(I.a1, {}), light: (0, n.jsx)(I.Gn, {}) },
            asset: M.A,
        },
        [P.Cs]: {
            title: e ? S.t.QEJnti : S.t["9N8obd"],
            titleParams: e ? { discountPercentage: E.F0 } : void 0,
            body: e ? S.t.eT5vm0 : S.t["34g+Z3"],
            bodyWithExpiration: S.t.rqmpXc,
            redemptionURL: "https://www.kontrolfreek.com/",
            logos: { dark: (0, n.jsx)(I.WF, {}), light: (0, n.jsx)(I.s, {}) },
            asset: O.A,
        },
    };
}
let U = () => {
        let e = (0, b.N5)(),
            t = (0, b.P6)();
        return (0, n.jsxs)("div", {
            className: `${w.G9} ${w.sQ}`,
            children: [
                (0, n.jsx)(r.E, {
                    variant: "text-sm/normal",
                    color: "text-muted",
                    className: w.kT,
                    children: S.intl.format(y.default["65EEvD"], { days: t }),
                }),
                (0, n.jsx)(g.Ay, {
                    progress: e,
                    variant: g.qP.UNSET,
                    override: { default: { gradientStart: "var(--illo-blue-70)", gradientEnd: "var(--illo-blue-10)" } },
                }),
            ],
        });
    },
    k = (e) => {
        let { children: t } = e;
        return (0, n.jsx)("div", { className: w.oP, children: (0, n.jsx)("div", { className: w.t0, children: t }) });
    },
    B = (e) => {
        let { recurrence: t } = e,
            s = (0, n.jsx)(i.r, { color: C.A.colors.CONTROL_CONNECTED_BACKGROUND_DEFAULT }),
            l = (0, n.jsx)("span", {
                className: w.nP,
                children: (0, n.jsx)(d.K, {
                    icon: o.T,
                    size: "sm",
                    variant: "icon-only",
                    "aria-label": "",
                    onClick: () => {
                        navigator.clipboard.writeText(t.code), h(s);
                    },
                }),
            }),
            [u, h] = a.useState(() => l);
        if (null != t.code)
            return (0, n.jsx)("div", {
                className: w.oP,
                children: (0, n.jsxs)("div", {
                    className: w.t0,
                    children: [
                        (0, n.jsx)("div", {
                            className: w.cD,
                            children: (0, n.jsx)(r.E, {
                                variant: "text-md/medium",
                                color: "text-strong",
                                children: t.code,
                            }),
                        }),
                        u,
                        (0, n.jsx)(c.$, {
                            variant: "secondary",
                            size: "sm",
                            text: S.intl.formatToPlainString(S.t.DF68t7, { redemptionURL: t.redemptionURL }),
                            onClick: () => {
                                window.open(t.redemptionURL, "_blank"),
                                    R.default.track(D.HAw.RECURRING_PROMOTION_CLAIMED);
                            },
                        }),
                    ],
                }),
            });
    },
    F = (e) => {
        let {
            recurrence: t,
            canBeClaimed: s,
            hasClaimError: a,
            setCode: r,
            setHasClaimError: l,
            className: i,
            analyticsLocations: d = [],
        } = e;
        return s
            ? a
                ? (0, n.jsx)("div", {
                      className: i,
                      children: (0, n.jsx)(c.$, {
                          icon: u.E,
                          variant: "critical-secondary",
                          size: "sm",
                          disabled: !0,
                          text: S.intl.string(S.t["8LKchl"]),
                      }),
                  })
                : (0, n.jsx)("div", {
                      className: i,
                      children: (0, n.jsx)(c.$, {
                          icon: h.X,
                          variant: "secondary",
                          size: "sm",
                          text: S.intl.string(S.t.vwASIl),
                          onClick: () => {
                              (0, N.kd)({ promotionId: t.id, analyticsLocations: d })
                                  .then((e) => {
                                      r(e.code);
                                  })
                                  .catch((e) => {
                                      l(!0), j.A.captureException(e);
                                  });
                          },
                      }),
                  })
            : null;
    },
    G = (e) => {
        var t;
        let s,
            r,
            {
                recurrence: i,
                titleClassName: d,
                showPartnerLogo: o = !1,
                showPartnerImage: c = !1,
                titleVariant: u = "primary",
                displayCTAInDedicatedFooter: h = !1,
                analyticsLocations: C = [],
            } = e,
            [p, g] = a.useState(i.code),
            [R, b] = a.useState(!1),
            j =
                ((t = i.partnerId),
                (s = (0, x.bG)([f.A], () => (0, l.M)(f.A.theme))),
                null == (r = L()[t]) ? null : s ? r.logos.dark : r.logos.light),
            E = null == p;
        return (0, n.jsxs)("div", {
            className: w.lA,
            children: [
                (0, n.jsxs)("div", {
                    className: w.LV,
                    children: [
                        (0, n.jsxs)("div", {
                            className: w.JN,
                            children: [
                                o && j,
                                (0, n.jsxs)("div", {
                                    className: null != d ? `${w.yO} ${d}` : w.yO,
                                    children: [
                                        (0, n.jsx)(m.D, {
                                            variant: "secondary" === u ? "heading-md/semibold" : "heading-lg/semibold",
                                            color: "text-strong",
                                            children: i.title,
                                        }),
                                        (0, n.jsx)(m.D, {
                                            variant: "heading-sm/medium",
                                            color: "text-subtle",
                                            children: R
                                                ? S.intl.format(S.t.i2EuFO, {
                                                      helpdeskArticle: v.A.getArticleURL(D.MVz.RECURRING_PROMOTION),
                                                  })
                                                : E
                                                  ? i.body
                                                  : null != i.bodyWithExpiration
                                                    ? S.intl.format(i.bodyWithExpiration, { date: i.endDate })
                                                    : i.body,
                                        }),
                                    ],
                                }),
                                !h &&
                                    (0, n.jsx)(F, {
                                        recurrence: i,
                                        canBeClaimed: E,
                                        hasClaimError: R,
                                        setCode: g,
                                        setHasClaimError: b,
                                        analyticsLocations: C,
                                    }),
                            ],
                        }),
                        c &&
                            (0, n.jsx)("div", {
                                className: w.R4,
                                children: (0, n.jsx)(_._, {
                                    src: i.asset ?? "",
                                    className: w.Ys,
                                    imageClassName: i.partnerId === P.XY ? w.Cy : void 0,
                                    width: 100,
                                    height: 100,
                                    zoomable: !1,
                                }),
                            }),
                    ],
                }),
                h && (0, n.jsx)(U, {}),
                null != p && (0, n.jsx)(B, { recurrence: { ...i, code: p } }),
                h &&
                    null == p &&
                    (0, n.jsx)(k, {
                        children: (0, n.jsx)(F, {
                            recurrence: i,
                            canBeClaimed: E,
                            hasClaimError: R,
                            setCode: g,
                            setHasClaimError: b,
                            className: w.qx,
                            analyticsLocations: C,
                        }),
                    }),
            ],
        });
    };
