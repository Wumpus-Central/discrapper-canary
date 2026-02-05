"use strict";
n.d(t, { A: () => ee });
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
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
    g = n(793943),
    E = n(826673),
    A = n(792656),
    I = n(757036),
    T = n(973654),
    y = n(544028),
    S = n(780964),
    v = n(840065),
    C = n(954571),
    b = n(467135),
    N = n(935444),
    R = n(230835),
    O = n(74396),
    D = n(738419),
    L = n(145272),
    w = n(572047),
    x = n(278938),
    P = n(652215),
    M = n(49999),
    k = n(788868),
    U = n(520650),
    G = n(985018),
    V = n(152290);
let F = 0,
    B = 5e3;
function j(e) {
    let [t, n] = i.useState(0),
        [r, a] = i.useState(!1),
        s = i.useRef(e);
    return (
        i.useEffect(() => {
            e === s.current || r || n((e) => e + 1), (s.current = e), a(!1);
        }, [e, r]),
        { key: t, handleInternalChange: i.useCallback((e) => (a(!0), e), []) }
    );
}
function H(e) {
    let { markAsDismissed: t } = e;
    return (0, r.jsx)("div", {
        className: V.b,
        children: (0, r.jsx)(d.JnF, {
            size: "sm",
            onClick: () => {
                t?.(M.i.USER_DISMISS), (0, g.Jp)();
            },
        }),
    });
}
function Y() {
    return (0, r.jsxs)("div", {
        className: V.N1,
        children: [
            (0, r.jsx)(_.Text, { variant: "text-md/bold", children: G.intl.string(U.default.AsmU85) }),
            (0, r.jsx)(c.m, {
                text: G.intl.string(G.t["5AFxuK"]),
                children: (0, r.jsx)(_.tvc, { size: "custom", height: 20, width: 20, colorClass: V.oU }),
            }),
            (0, r.jsx)(H, {}),
        ],
    });
}
function W(e) {
    let { markAsDismissed: t, isCoachmark: n } = e;
    return (0, E.JZ)(l.M.CUSTOM_THEME_COACHMARK)
        ? n
            ? (0, r.jsx)(K, { markAsDismissed: t })
            : (0, r.jsx)(Y, {})
        : (0, r.jsx)(K, { markAsDismissed: () => (0, E.Dr)(l.M.CUSTOM_THEME_COACHMARK) });
}
function K(e) {
    let { markAsDismissed: t } = e,
        n = (0, I.L)(k.PremiumTypes.TIER_2);
    return (0, r.jsxs)("div", {
        className: V.CG,
        children: [
            (0, r.jsxs)("div", {
                className: V.dI,
                children: [
                    (0, r.jsx)(_.Heading, {
                        variant: "heading-lg/extrabold",
                        children: G.intl.string(U.default["23QUzv"]),
                    }),
                    (0, r.jsx)(H, { markAsDismissed: t }),
                ],
            }),
            (0, r.jsx)(_.Text, {
                className: V.VA,
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
        { key: a, handleInternalChange: o } = j(t),
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
        className: s()(V.xJ, V.Gz),
        children: [
            (0, r.jsxs)("div", {
                className: V.Vt,
                children: [
                    (0, r.jsx)(_.Text, { variant: "text-md/medium", children: G.intl.string(U.default.dZkwgx) }),
                    (0, r.jsx)("input", {
                        type: "text",
                        value: l,
                        onChange: (e) => c(e.target.value),
                        placeholder: `${F}\xb0`,
                        className: V.A9,
                    }),
                ],
            }),
            (0, r.jsxs)("div", {
                className: V.Zp,
                children: [
                    (0, r.jsxs)("div", {
                        className: V.p1,
                        children: [
                            (0, r.jsx)("div", { className: V.uu }),
                            (0, r.jsx)("div", { className: V.uu }),
                            (0, r.jsx)("div", { className: V.VD }),
                            (0, r.jsx)("div", { className: V.uu }),
                            (0, r.jsx)("div", { className: V.uu }),
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
                        a,
                    ),
                ],
            }),
        ],
    });
}
function q(e) {
    let { chassisMixAmount: t, setChassisMixAmount: n } = e,
        { key: a, handleInternalChange: s } = j(t),
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
        className: V.xJ,
        children: [
            (0, r.jsxs)("div", {
                className: V.Vt,
                children: [
                    (0, r.jsx)(_.Text, { variant: "text-md/medium", children: G.intl.string(U.default.xlXkaL) }),
                    (0, r.jsx)("input", {
                        type: "text",
                        value: o,
                        onChange: (e) => u(e.target.value),
                        placeholder: `${b.kJ}%`,
                        className: V.A9,
                    }),
                ],
            }),
            (0, r.jsx)(
                _.Apm,
                {
                    initialValue: t,
                    defaultValue: b.kJ,
                    minValue: 0,
                    maxValue: 100,
                    onValueChange: (e) => {
                        (0, D.QJ)(), s(e), n(e);
                    },
                    onValueRender: () => null,
                    keyboardStep: 1,
                },
                a,
            ),
        ],
    });
}
function Z(e) {
    let { isCoachmark: t, isMobile: n } = e,
        [a, s] = i.useState(!1),
        o = i.useRef(!1),
        [l, c] = i.useState(!1),
        f = i.useRef(null),
        p = i.useRef(null),
        h = i.useCallback(() => {
            (0, D.y4)();
            let e = (0, N.mf)();
            b.ko
                .getState()
                .setAll({
                    colors: e.colors,
                    gradientAngle: e.angle ?? b.ko.getState().gradientAngle,
                    chassisMixAmount: e.intensity,
                });
        }, []);
    i.useEffect(() => {
        if (t)
            return (
                (o.current = !1),
                (f.current = setTimeout(() => {
                    o.current || s(!0);
                }, B)),
                () => {
                    null != f.current && clearTimeout(f.current);
                }
            );
    }, [t]);
    let m = i.useCallback(() => {
            o.current = !0;
        }, []),
        g = i.useCallback(() => {
            s(!1);
        }, []),
        E = a && !l,
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
              asset: E ? (0, r.jsx)(_.jGc, {}) : void 0,
              forceOpen: a,
              onTooltipShow: m,
              onTooltipHide: g,
              targetElementRef: p,
              children: A(),
          });
}
function Q(e) {
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
function X(e) {
    let { onSaveTheme: t, canApply: n } = e,
        i = (0, I.L)(k.PremiumTypes.TIER_2);
    return (
        (0, D.wb)(i, h.A.CUSTOM_THEMES_EDITOR_COACHMARK),
        (0, r.jsx)("div", {
            className: V.M0,
            children: i
                ? (0, r.jsx)(Q, { disabled: !n, onApply: t, fullWidth: !0 })
                : (0, r.jsx)(A.A, {
                      subscriptionTier: k.pe.TIER_2,
                      buttonTextOverride: G.intl.string(G.t.JST6jl),
                      premiumModalAnalyticsLocation: {
                          page: P.liQ.PREMIUM_UPSELL_CUSTOM_THEMES,
                          section: P.JJy.CUSTOM_THEMES_COACHMARK_FOOTER,
                      },
                      fullWidth: !0,
                  }),
        })
    );
}
function J(e) {
    let { onSaveTheme: t, canApply: n, metadata: i } = e,
        a = (0, I.L)(k.PremiumTypes.TIER_2),
        o = (0, g.fy)().metadata?.from === g.xv.SHARE_MESSAGE;
    (0, D.wb)(a, h.A.CUSTOM_THEMES_EDITOR);
    let u = () => {
            (0, D.uk)(),
                (0, E.Dr)(l.M.CUSTOM_THEME_COACHMARK),
                i?.from === g.xv.SETTING
                    ? ((0, v.openUserSettings)(S.X.APPEARANCE_PANEL, { section: P.nc_.APPEARANCE }), (0, g.Jp)())
                    : i?.from === g.xv.CLIENT_THEMES_EDITOR
                      ? (0, g.nf)(g.HP.CLIENT_THEMES)
                      : (0, g.Jp)();
        },
        c = s()(V.xQ, { [V.NI]: !a });
    return (0, r.jsx)("div", {
        className: c,
        children: a
            ? (0, r.jsxs)(r.Fragment, {
                  children: [
                      (0, r.jsx)(w.w, {}),
                      (0, r.jsx)(d.$nd, { variant: "secondary", onClick: u, text: G.intl.string(G.t["13/7kX"]) }),
                      (0, r.jsx)(Q, {
                          disabled: !n,
                          onApply: () => {
                              o && C.default.track(P.HAw.CUSTOM_THEME_SHARE_APPLIED, {}), t();
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
                              page: P.liQ.PREMIUM_UPSELL_CUSTOM_THEMES,
                              section: P.JJy.CUSTOM_THEMES_FOOTER,
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
    let { metadata: t, markAsDismissed: n, isCoachmark: a, isMobile: s } = e,
        u = (0, R.vC)(),
        c = (0, R.tr)(),
        A = i.useRef(!1),
        {
            colors: I,
            chassisMixAmount: S,
            gradientAngle: v,
            setColors: C,
            setChassisMixAmount: N,
            setGradientAngle: w,
        } = (0, b.ko)(),
        [P, k] = i.useState(I[0] ?? b.OT),
        F = (0, o.bG)([y.A], () => y.A.theme),
        B = (0, E.JZ)(l.M.CUSTOM_THEME_ENTRYPOINT_GRADIENT),
        { analyticsLocations: j } = (0, m.Ay)(h.A.CUSTOM_THEMES_EDITOR),
        H = (0, o.bG)([O.A], () => O.A.getSavedCustomTheme()),
        Y = async () => {
            (A.current = !0),
                await (0, f.u_)({
                    theme: F,
                    customUserThemeSettings: { colors: I, gradientColorStops: [], gradientAngle: v, baseMix: S },
                }),
                (0, D.Yl)(I, S, v, F, j),
                n?.(M.i.TAKE_ACTION),
                B || (0, E.Dr)(l.M.CUSTOM_THEME_ENTRYPOINT_GRADIENT),
                (0, g.Jp)(),
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
            if (!a) {
                let e = (I?.length ?? 0) > 0,
                    t = null != H;
                !e && t
                    ? (b.ko
                          .getState()
                          .setAll({ colors: H.colors, gradientAngle: H.gradient_angle, chassisMixAmount: H.base_mix }),
                      (0, R.IE)(H.base_theme))
                    : (0, R.$Y)(I, P, C);
            }
        }),
        (0, r.jsxs)("div", {
            className: s ? V.AA : V.kL,
            "data-app-right-panel": !s,
            children: [
                (0, r.jsx)(_.HOs, {
                    children: (0, r.jsxs)("div", {
                        className: V.sV,
                        children: [
                            (0, r.jsx)(W, { markAsDismissed: n, isCoachmark: a }),
                            (0, r.jsxs)("div", {
                                className: V.uW,
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
                                className: V.uW,
                                children: [
                                    (0, r.jsx)(_.Text, {
                                        variant: "text-sm/semibold",
                                        color: "text-subtle",
                                        children: G.intl.string(U.default.uSL2Gy),
                                    }),
                                    (0, r.jsx)(L.e, {
                                        onChange: (e) => {
                                            k(e), 0 === I.length && (0, R.$Y)(I, e, C);
                                        },
                                        value: P,
                                        colors: I,
                                        setColors: C,
                                    }),
                                ],
                            }),
                            (0, r.jsxs)("div", {
                                className: V.uW,
                                children: [
                                    (0, r.jsx)(_.Text, {
                                        variant: "text-sm/semibold",
                                        color: "text-subtle",
                                        children: G.intl.string(U.default.F1t0c8),
                                    }),
                                    I.length > 1 && (0, r.jsx)($, { gradientAngle: v, setGradientAngle: w }),
                                    (0, r.jsx)(q, {
                                        chassisMixAmount: S,
                                        setChassisMixAmount: (e) => {
                                            N(e), 0 === I.length && (0, R.$Y)(I, P, C);
                                        },
                                    }),
                                ],
                            }),
                            (0, r.jsxs)("div", {
                                className: V.WA,
                                children: [
                                    (0, r.jsx)(Z, { isCoachmark: a, isMobile: s }),
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
                a
                    ? (0, r.jsx)(X, { onSaveTheme: Y, canApply: z })
                    : (0, r.jsx)(J, { onSaveTheme: Y, canApply: z, metadata: t }),
            ],
        })
    );
}
