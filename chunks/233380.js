"use strict";
n.d(t, { A: () => ee });
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(311907),
    l = n(554146),
    u = n(459192),
    c = n(990078),
    d = n(732955),
    _ = n(397927),
    f = n(817281),
    p = n(964486),
    h = n(793574),
    m = n(688810),
    E = n(793943),
    g = n(826673),
    A = n(792656),
    I = n(757036),
    T = n(973654),
    S = n(544028),
    y = n(780964),
    v = n(840065),
    N = n(954571),
    C = n(467135),
    b = n(935444),
    R = n(230835),
    O = n(74396),
    D = n(738419),
    L = n(145272),
    w = n(572047),
    x = n(278938),
    M = n(652215),
    P = n(49999),
    k = n(788868),
    U = n(520650),
    G = n(985018),
    F = n(152290);
let V = 0,
    B = 5e3;
function H(e) {
    let [t, n] = i.useState(0),
        [r, s] = i.useState(!1),
        a = i.useRef(e);
    return (
        i.useEffect(() => {
            e === a.current || r || n((e) => e + 1), (a.current = e), s(!1);
        }, [e, r]),
        { key: t, handleInternalChange: i.useCallback((e) => (s(!0), e), []) }
    );
}
function j(e) {
    let { markAsDismissed: t } = e;
    return (0, r.jsx)("div", {
        className: F.b,
        children: (0, r.jsx)(d.JnF, {
            size: "sm",
            onClick: () => {
                t?.(P.i.USER_DISMISS), (0, E.Jp)();
            },
        }),
    });
}
function Y() {
    return (0, r.jsxs)("div", {
        className: F.N1,
        children: [
            (0, r.jsx)(_.Text, { variant: "text-md/bold", children: G.intl.string(U.default.AsmU85) }),
            (0, r.jsx)(c.m, {
                text: G.intl.string(G.t["5AFxuK"]),
                children: (0, r.jsx)(_.tvc, { size: "custom", height: 20, width: 20, colorClass: F.oU }),
            }),
            (0, r.jsx)(j, {}),
        ],
    });
}
function W(e) {
    let { markAsDismissed: t, isCoachmark: n } = e;
    return (0, g.JZ)(l.M.CUSTOM_THEME_COACHMARK)
        ? n
            ? (0, r.jsx)(K, { markAsDismissed: t })
            : (0, r.jsx)(Y, {})
        : (0, r.jsx)(K, { markAsDismissed: () => (0, g.Dr)(l.M.CUSTOM_THEME_COACHMARK) });
}
function K(e) {
    let { markAsDismissed: t } = e,
        n = (0, I.L)(k.PremiumTypes.TIER_2);
    return (0, r.jsxs)("div", {
        className: F.CG,
        children: [
            (0, r.jsxs)("div", {
                className: F.dI,
                children: [
                    (0, r.jsx)(_.Heading, {
                        variant: "heading-lg/extrabold",
                        children: G.intl.string(U.default["23QUzv"]),
                    }),
                    (0, r.jsx)(j, { markAsDismissed: t }),
                ],
            }),
            (0, r.jsx)(_.Text, {
                className: F.VA,
                variant: "text-sm/medium",
                color: "text-muted",
                children: G.intl.string(n ? U.default.TRCE4g : U.default["UV/Vtv"]),
            }),
        ],
    });
}
function z(e) {
    let t = 10;
    for (let n of [90, 180, 270]) if (Math.abs(e - n) <= t) return n;
    return e;
}
function $(e) {
    let { gradientAngle: t, setGradientAngle: n } = e,
        { key: s, handleInternalChange: o } = H(t),
        [l, u] = i.useState(`${Math.round(t)}\xb0`);
    i.useEffect(() => {
        u(`${Math.round(t)}\xb0`);
    }, [t]);
    let c = (e) => {
        let t = e.replace(/°/g, "").trim();
        if ("" === t) return void u("");
        let r = parseInt(t, 10);
        if (isNaN(r)) return;
        let i = Math.max(0, Math.min(360, r));
        u(`${i}\xb0`), (0, D.l6)(), n(i);
    };
    return (0, r.jsxs)("div", {
        className: a()(F.xJ, F.Gz),
        children: [
            (0, r.jsxs)("div", {
                className: F.Vt,
                children: [
                    (0, r.jsx)(_.Text, { variant: "text-md/medium", children: G.intl.string(U.default.dZkwgx) }),
                    (0, r.jsx)("input", {
                        type: "text",
                        value: l,
                        onChange: (e) => c(e.target.value),
                        placeholder: `${V}\xb0`,
                        className: F.A9,
                    }),
                ],
            }),
            (0, r.jsxs)("div", {
                className: F.Zp,
                children: [
                    (0, r.jsxs)("div", {
                        className: F.p1,
                        children: [
                            (0, r.jsx)("div", { className: F.uu }),
                            (0, r.jsx)("div", { className: F.uu }),
                            (0, r.jsx)("div", { className: F.VD }),
                            (0, r.jsx)("div", { className: F.uu }),
                            (0, r.jsx)("div", { className: F.uu }),
                        ],
                    }),
                    (0, r.jsx)(
                        _.Apm,
                        {
                            initialValue: t,
                            defaultValue: 0,
                            minValue: 0,
                            maxValue: 360,
                            fillStyles: { display: "none" },
                            onValueChange: (e) => {
                                (0, D.PT)();
                                let t = z(e);
                                t !== e || o(e), n(t);
                            },
                            onValueRender: () => null,
                            keyboardStep: 1,
                        },
                        s,
                    ),
                ],
            }),
        ],
    });
}
function q(e) {
    let { chassisMixAmount: t, setChassisMixAmount: n } = e,
        { key: s, handleInternalChange: a } = H(t),
        [o, l] = i.useState(`${Math.round(t)}%`);
    i.useEffect(() => {
        l(`${Math.round(t)}%`);
    }, [t]);
    let u = (e) => {
        let t = e.replace(/%/g, "").trim();
        if ("" === t) return void l("");
        let r = parseInt(t, 10);
        if (isNaN(r)) return;
        let i = Math.max(0, Math.min(100, r));
        l(`${i}%`), (0, D.Cq)(), n(i);
    };
    return (0, r.jsxs)("div", {
        className: F.xJ,
        children: [
            (0, r.jsxs)("div", {
                className: F.Vt,
                children: [
                    (0, r.jsx)(_.Text, { variant: "text-md/medium", children: G.intl.string(U.default.xlXkaL) }),
                    (0, r.jsx)("input", {
                        type: "text",
                        value: o,
                        onChange: (e) => u(e.target.value),
                        placeholder: `${C.kJ}%`,
                        className: F.A9,
                    }),
                ],
            }),
            (0, r.jsx)(
                _.Apm,
                {
                    initialValue: t,
                    defaultValue: C.kJ,
                    minValue: 0,
                    maxValue: 100,
                    onValueChange: (e) => {
                        (0, D.QJ)(), a(e), n(e);
                    },
                    onValueRender: () => null,
                    keyboardStep: 1,
                },
                s,
            ),
        ],
    });
}
function Z(e) {
    let { isCoachmark: t, isMobile: n } = e,
        [s, a] = i.useState(!1),
        o = i.useRef(!1),
        [l, c] = i.useState(!1),
        f = i.useRef(null),
        p = i.useRef(null),
        h = i.useCallback(() => {
            (0, D.y4)();
            let e = (0, b.mf)();
            C.ko
                .getState()
                .setAll({
                    colors: e.colors,
                    gradientAngle: e.angle ?? C.ko.getState().gradientAngle,
                    chassisMixAmount: e.intensity,
                });
        }, []);
    i.useEffect(() => {
        if (t)
            return (
                (o.current = !1),
                (f.current = setTimeout(() => {
                    o.current || a(!0);
                }, B)),
                () => {
                    null != f.current && clearTimeout(f.current);
                }
            );
    }, [t]);
    let m = i.useCallback(() => {
            o.current = !0;
        }, []),
        E = i.useCallback(() => {
            a(!1);
        }, []),
        g = s && !l,
        A = () =>
            (0, r.jsx)(d.$nd, {
                buttonRef: p,
                variant: "secondary",
                onClick: h,
                onMouseEnter: () => c(!0),
                onMouseLeave: () => c(!1),
                icon: n
                    ? { type: "icon", asset: _.jGc }
                    : {
                          type: "rive",
                          asset: _.mdx,
                          riveProps: { dataBinding: { fill: _.LU0.colors.ICON_STRONG }, eventTargetRef: p },
                      },
                text: G.intl.string(U.default.c9MBEH),
                fullWidth: !0,
            });
    return n
        ? A()
        : (0, r.jsx)(u.u, {
              title: G.intl.string(U.default.NJ9m8Y),
              body: G.intl.string(U.default["6pabtR"]),
              position: "left",
              asset: g ? (0, r.jsx)(_.jGc, {}) : void 0,
              forceOpen: s,
              onTooltipShow: m,
              onTooltipHide: E,
              targetElementRef: p,
              children: A(),
          });
}
function X(e) {
    let { onApply: t, disabled: n, fullWidth: i } = e;
    return (0, r.jsx)(c.m, {
        text: G.intl.string(U.default.SFyHIP),
        shouldShow: n,
        children: (0, r.jsx)(d.$nd, {
            variant: "primary",
            onClick: t,
            disabled: n,
            text: G.intl.string(G.t["1Qm822"]),
            fullWidth: i,
        }),
    });
}
function Q(e) {
    let { onSaveTheme: t, canApply: n } = e,
        i = (0, I.L)(k.PremiumTypes.TIER_2);
    return (
        (0, D.wb)(i, h.A.CUSTOM_THEMES_EDITOR_COACHMARK),
        (0, r.jsx)("div", {
            className: F.M0,
            children: i
                ? (0, r.jsx)(X, { disabled: !n, onApply: t, fullWidth: !0 })
                : (0, r.jsx)(A.A, {
                      subscriptionTier: k.pe.TIER_2,
                      buttonTextOverride: G.intl.string(G.t.JST6jl),
                      premiumModalAnalyticsLocation: {
                          page: M.liQ.PREMIUM_UPSELL_CUSTOM_THEMES,
                          section: M.JJy.CUSTOM_THEMES_COACHMARK_FOOTER,
                      },
                      fullWidth: !0,
                  }),
        })
    );
}
function J(e) {
    let { onSaveTheme: t, canApply: n, metadata: i } = e,
        s = (0, I.L)(k.PremiumTypes.TIER_2),
        o = (0, E.fy)().metadata?.from === E.xv.SHARE_MESSAGE;
    (0, D.wb)(s, h.A.CUSTOM_THEMES_EDITOR);
    let u = () => {
            (0, D.uk)(),
                (0, g.Dr)(l.M.CUSTOM_THEME_COACHMARK),
                i?.from === E.xv.SETTING
                    ? ((0, v.openUserSettings)(y.X.APPEARANCE_PANEL, { section: M.nc_.APPEARANCE }), (0, E.Jp)())
                    : i?.from === E.xv.CLIENT_THEMES_EDITOR
                      ? (0, E.nf)(E.HP.CLIENT_THEMES)
                      : (0, E.Jp)();
        },
        c = a()(F.xQ, { [F.NI]: !s });
    return (0, r.jsx)("div", {
        className: c,
        children: s
            ? (0, r.jsxs)(r.Fragment, {
                  children: [
                      (0, r.jsx)(w.w, {}),
                      (0, r.jsx)(d.$nd, { variant: "secondary", onClick: u, text: G.intl.string(G.t["13/7kX"]) }),
                      (0, r.jsx)(X, {
                          disabled: !n,
                          onApply: () => {
                              o && N.default.track(M.HAw.CUSTOM_THEME_SHARE_APPLIED, {}), t();
                          },
                      }),
                  ],
              })
            : (0, r.jsxs)(r.Fragment, {
                  children: [
                      (0, r.jsx)(A.A, {
                          subscriptionTier: k.pe.TIER_2,
                          defaultTextOverride: G.intl.string(G.t.pj0XBN),
                          premiumModalAnalyticsLocation: {
                              page: M.liQ.PREMIUM_UPSELL_CUSTOM_THEMES,
                              section: M.JJy.CUSTOM_THEMES_FOOTER,
                          },
                          fullWidth: !0,
                      }),
                      (0, r.jsx)(d.$nd, {
                          variant: "secondary",
                          onClick: u,
                          text: o ? G.intl.string(G.t["13/7kX"]) : G.intl.string(G.t.Olc2K3),
                          fullWidth: !0,
                      }),
                  ],
              }),
    });
}
function ee(e) {
    let { metadata: t, markAsDismissed: n, isCoachmark: s, isMobile: a } = e,
        u = (0, R.vC)(),
        c = (0, R.tr)(),
        A = i.useRef(!1),
        {
            colors: I,
            chassisMixAmount: y,
            gradientAngle: v,
            setColors: N,
            setChassisMixAmount: b,
            setGradientAngle: w,
        } = (0, C.ko)(),
        [M, k] = i.useState(I[0] ?? C.OT),
        V = (0, o.bG)([S.A], () => S.A.theme),
        B = (0, g.JZ)(l.M.CUSTOM_THEME_ENTRYPOINT_GRADIENT),
        { analyticsLocations: H } = (0, m.Ay)(h.A.CUSTOM_THEMES_EDITOR),
        j = (0, o.bG)([O.A], () => O.A.getSavedCustomTheme()),
        Y = async () => {
            (A.current = !0),
                await (0, f.u_)({
                    theme: V,
                    customUserThemeSettings: { colors: I, gradientColorStops: [], gradientAngle: v, baseMix: y },
                }),
                (0, D.Yl)(I, y, v, V, H),
                n?.(P.i.TAKE_ACTION),
                B || (0, g.Dr)(l.M.CUSTOM_THEME_ENTRYPOINT_GRADIENT),
                (0, E.Jp)(),
                (0, T.XG)();
        },
        K = () => {
            u(R.JB.RESET_BUTTON), (0, D.G_)();
        },
        z = I.length > 0;
    return (
        i.useEffect(
            () => () => {
                A.current || u(R.JB.EDITOR_CLOSE);
            },
            [u],
        ),
        (0, p.Ay)(() => {
            if (!s) {
                let e = (I?.length ?? 0) > 0,
                    t = null != j;
                !e && t
                    ? (C.ko
                          .getState()
                          .setAll({ colors: j.colors, gradientAngle: j.gradient_angle, chassisMixAmount: j.base_mix }),
                      (0, R.IE)(j.base_theme))
                    : (0, R.$Y)(I, M, N);
            }
        }),
        (0, r.jsxs)("div", {
            className: a ? F.AA : F.kL,
            "data-app-right-panel": !a,
            children: [
                (0, r.jsx)(_.HOs, {
                    children: (0, r.jsxs)("div", {
                        className: F.sV,
                        children: [
                            (0, r.jsx)(W, { markAsDismissed: n, isCoachmark: s }),
                            (0, r.jsxs)("div", {
                                className: F.uW,
                                children: [
                                    (0, r.jsx)(_.Text, {
                                        variant: "text-sm/semibold",
                                        color: "text-subtle",
                                        children: G.intl.string(U.default.o2NfLF),
                                    }),
                                    (0, r.jsx)(x.F, {}),
                                ],
                            }),
                            (0, r.jsxs)("div", {
                                className: F.uW,
                                children: [
                                    (0, r.jsx)(_.Text, {
                                        variant: "text-sm/semibold",
                                        color: "text-subtle",
                                        children: G.intl.string(U.default.uSL2Gy),
                                    }),
                                    (0, r.jsx)(L.e, {
                                        onChange: (e) => {
                                            k(e), 0 === I.length && (0, R.$Y)(I, e, N);
                                        },
                                        value: M,
                                        colors: I,
                                        setColors: N,
                                    }),
                                ],
                            }),
                            (0, r.jsxs)("div", {
                                className: F.uW,
                                children: [
                                    (0, r.jsx)(_.Text, {
                                        variant: "text-sm/semibold",
                                        color: "text-subtle",
                                        children: G.intl.string(U.default.F1t0c8),
                                    }),
                                    I.length > 1 && (0, r.jsx)($, { gradientAngle: v, setGradientAngle: w }),
                                    (0, r.jsx)(q, {
                                        chassisMixAmount: y,
                                        setChassisMixAmount: (e) => {
                                            b(e), 0 === I.length && (0, R.$Y)(I, M, N);
                                        },
                                    }),
                                ],
                            }),
                            (0, r.jsxs)("div", {
                                className: F.WA,
                                children: [
                                    (0, r.jsx)(Z, { isCoachmark: s, isMobile: a }),
                                    (0, r.jsx)(d.$nd, {
                                        variant: "secondary",
                                        onClick: K,
                                        disabled: c,
                                        text: G.intl.string(G.t.yBZMsQ),
                                        fullWidth: !0,
                                    }),
                                ],
                            }),
                        ],
                    }),
                }),
                s
                    ? (0, r.jsx)(Q, { onSaveTheme: Y, canApply: z })
                    : (0, r.jsx)(J, { onSaveTheme: Y, canApply: z, metadata: t }),
            ],
        })
    );
}
