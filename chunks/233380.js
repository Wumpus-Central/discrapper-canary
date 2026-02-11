"use strict";
n.d(t, { A: () => et });
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
    h = n(964486),
    p = n(793574),
    g = n(688810),
    E = n(793943),
    A = n(826673),
    I = n(792656),
    T = n(757036),
    y = n(973654),
    S = n(544028),
    v = n(780964),
    C = n(840065),
    b = n(954571),
    N = n(467135),
    R = n(935444),
    O = n(230835),
    D = n(74396),
    L = n(738419),
    w = n(145272),
    x = n(572047),
    P = n(278938),
    M = n(652215),
    k = n(49999),
    U = n(788868),
    G = n(520650),
    F = n(985018),
    V = n(152290);
let B = 0,
    j = 5e3;
function H(e) {
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
function Y(e) {
    let { markAsDismissed: t } = e;
    return (0, r.jsx)("div", {
        className: V.b,
        children: (0, r.jsx)(d.JnF, {
            size: "sm",
            onClick: () => {
                t?.(k.i.USER_DISMISS), (0, E.Jp)();
            },
        }),
    });
}
function W() {
    return (0, r.jsxs)("div", {
        className: V.N1,
        children: [
            (0, r.jsx)(_.Text, { variant: "text-md/bold", children: F.intl.string(G.default.AsmU85) }),
            (0, r.jsx)(c.m, {
                text: F.intl.string(F.t["5AFxuK"]),
                children: (0, r.jsx)(_.tvc, { size: "custom", height: 20, width: 20, colorClass: V.oU }),
            }),
            (0, r.jsx)(Y, {}),
        ],
    });
}
function K(e) {
    let { markAsDismissed: t, isCoachmark: n } = e;
    return (0, A.JZ)(l.M.CUSTOM_THEME_COACHMARK)
        ? n
            ? (0, r.jsx)($, { markAsDismissed: t })
            : (0, r.jsx)(W, {})
        : (0, r.jsx)($, { markAsDismissed: () => (0, A.Dr)(l.M.CUSTOM_THEME_COACHMARK) });
}
function $(e) {
    let { markAsDismissed: t } = e,
        n = (0, T.L)(U.PremiumTypes.TIER_2);
    return (0, r.jsxs)("div", {
        className: V.CG,
        children: [
            (0, r.jsxs)("div", {
                className: V.dI,
                children: [
                    (0, r.jsx)(_.Heading, {
                        variant: "heading-lg/extrabold",
                        children: F.intl.string(G.default["23QUzv"]),
                    }),
                    (0, r.jsx)(Y, { markAsDismissed: t }),
                ],
            }),
            (0, r.jsx)(_.Text, {
                className: V.VA,
                variant: "text-sm/medium",
                color: "text-muted",
                children: F.intl.string(n ? G.default.TRCE4g : G.default["UV/Vtv"]),
            }),
        ],
    });
}
function z(e) {
    let t = 10;
    for (let n of [90, 180, 270]) if (Math.abs(e - n) <= t) return n;
    return e;
}
function q(e) {
    let { gradientAngle: t, setGradientAngle: n } = e,
        { key: a, handleInternalChange: o } = H(t),
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
        u(`${i}\xb0`), (0, L.l6)(), n(i);
    };
    return (0, r.jsxs)("div", {
        className: s()(V.xJ, V.Gz),
        children: [
            (0, r.jsxs)("div", {
                className: V.Vt,
                children: [
                    (0, r.jsx)(_.Text, { variant: "text-md/medium", children: F.intl.string(G.default.dZkwgx) }),
                    (0, r.jsx)("input", {
                        type: "text",
                        value: l,
                        onChange: (e) => c(e.target.value),
                        placeholder: `${B}\xb0`,
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
                                (0, L.PT)();
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
function X(e) {
    let { chassisMixAmount: t, setChassisMixAmount: n } = e,
        { key: a, handleInternalChange: s } = H(t),
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
        l(`${i}%`), (0, L.Cq)(), n(i);
    };
    return (0, r.jsxs)("div", {
        className: V.xJ,
        children: [
            (0, r.jsxs)("div", {
                className: V.Vt,
                children: [
                    (0, r.jsx)(_.Text, { variant: "text-md/medium", children: F.intl.string(G.default.xlXkaL) }),
                    (0, r.jsx)("input", {
                        type: "text",
                        value: o,
                        onChange: (e) => u(e.target.value),
                        placeholder: `${N.kJ}%`,
                        className: V.A9,
                    }),
                ],
            }),
            (0, r.jsx)(
                _.Apm,
                {
                    initialValue: t,
                    defaultValue: N.kJ,
                    minValue: 0,
                    maxValue: 100,
                    onValueChange: (e) => {
                        (0, L.QJ)(), s(e), n(e);
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
        h = i.useRef(null),
        p = i.useCallback(() => {
            (0, L.y4)();
            let e = (0, R.mf)();
            N.ko
                .getState()
                .setAll({
                    colors: e.colors,
                    gradientAngle: e.angle ?? N.ko.getState().gradientAngle,
                    chassisMixAmount: e.intensity,
                });
        }, []);
    i.useEffect(() => {
        if (t)
            return (
                (o.current = !1),
                (f.current = setTimeout(() => {
                    o.current || s(!0);
                }, j)),
                () => {
                    null != f.current && clearTimeout(f.current);
                }
            );
    }, [t]);
    let g = i.useCallback(() => {
            o.current = !0;
        }, []),
        E = i.useCallback(() => {
            s(!1);
        }, []),
        A = a && !l,
        I = () =>
            (0, r.jsx)(d.$nd, {
                buttonRef: h,
                variant: "secondary",
                onClick: p,
                onMouseEnter: () => c(!0),
                onMouseLeave: () => c(!1),
                icon: n
                    ? { type: "icon", asset: _.jGc }
                    : {
                          type: "rive",
                          asset: _.mdx,
                          riveProps: { dataBinding: { fill: _.LU0.colors.ICON_STRONG }, eventTargetRef: h },
                      },
                text: F.intl.string(G.default.c9MBEH),
                fullWidth: !0,
            });
    return n
        ? I()
        : (0, r.jsx)(u.u, {
              title: F.intl.string(G.default.NJ9m8Y),
              body: F.intl.string(G.default["6pabtR"]),
              position: "left",
              asset: A ? (0, r.jsx)(_.jGc, {}) : void 0,
              forceOpen: a,
              onTooltipShow: g,
              onTooltipHide: E,
              targetElementRef: h,
              children: I(),
          });
}
function Q(e) {
    let { onApply: t, disabled: n, fullWidth: i } = e;
    return (0, r.jsx)(c.m, {
        text: F.intl.string(G.default.SFyHIP),
        shouldShow: n,
        children: (0, r.jsx)(d.$nd, {
            variant: "primary",
            onClick: t,
            disabled: n,
            text: F.intl.string(F.t["1Qm822"]),
            fullWidth: i,
        }),
    });
}
function J(e) {
    let { onSaveTheme: t, canApply: n } = e,
        i = (0, T.L)(U.PremiumTypes.TIER_2);
    return (
        (0, L.wb)(i, p.A.CUSTOM_THEMES_EDITOR_COACHMARK),
        (0, r.jsx)("div", {
            className: V.M0,
            children: i
                ? (0, r.jsx)(Q, { disabled: !n, onApply: t, fullWidth: !0 })
                : (0, r.jsx)(I.A, {
                      subscriptionTier: U.pe.TIER_2,
                      buttonTextOverride: F.intl.string(F.t.JST6jl),
                      premiumModalAnalyticsLocation: {
                          page: M.liQ.PREMIUM_UPSELL_CUSTOM_THEMES,
                          section: M.JJy.CUSTOM_THEMES_COACHMARK_FOOTER,
                      },
                      fullWidth: !0,
                  }),
        })
    );
}
function ee(e) {
    let { onSaveTheme: t, canApply: n, metadata: i } = e,
        a = (0, T.L)(U.PremiumTypes.TIER_2),
        o = (0, E.fy)().metadata?.from === E.xv.SHARE_MESSAGE;
    (0, L.wb)(a, p.A.CUSTOM_THEMES_EDITOR);
    let u = () => {
            (0, L.uk)(),
                (0, A.Dr)(l.M.CUSTOM_THEME_COACHMARK),
                i?.from === E.xv.SETTING
                    ? ((0, C.openUserSettings)(v.X.APPEARANCE_PANEL, { section: M.nc_.APPEARANCE }), (0, E.Jp)())
                    : i?.from === E.xv.CLIENT_THEMES_EDITOR
                      ? (0, E.nf)(E.HP.CLIENT_THEMES)
                      : (0, E.Jp)();
        },
        c = s()(V.xQ, { [V.NI]: !a });
    return (0, r.jsx)("div", {
        className: c,
        children: a
            ? (0, r.jsxs)(r.Fragment, {
                  children: [
                      (0, r.jsx)(x.w, {}),
                      (0, r.jsx)(d.$nd, { variant: "secondary", onClick: u, text: F.intl.string(F.t["13/7kX"]) }),
                      (0, r.jsx)(Q, {
                          disabled: !n,
                          onApply: () => {
                              o && b.default.track(M.HAw.CUSTOM_THEME_SHARE_APPLIED, {}), t();
                          },
                      }),
                  ],
              })
            : (0, r.jsxs)(r.Fragment, {
                  children: [
                      (0, r.jsx)(I.A, {
                          subscriptionTier: U.pe.TIER_2,
                          defaultTextOverride: F.intl.string(F.t.pj0XBN),
                          premiumModalAnalyticsLocation: {
                              page: M.liQ.PREMIUM_UPSELL_CUSTOM_THEMES,
                              section: M.JJy.CUSTOM_THEMES_FOOTER,
                          },
                          fullWidth: !0,
                      }),
                      (0, r.jsx)(d.$nd, {
                          variant: "secondary",
                          onClick: u,
                          text: o ? F.intl.string(F.t["13/7kX"]) : F.intl.string(F.t.Olc2K3),
                          fullWidth: !0,
                      }),
                  ],
              }),
    });
}
function et(e) {
    let { metadata: t, markAsDismissed: n, isCoachmark: a, isMobile: s } = e,
        u = (0, O.vC)(),
        c = (0, O.tr)(),
        I = i.useRef(!1),
        {
            colors: T,
            chassisMixAmount: v,
            gradientAngle: C,
            setColors: b,
            setChassisMixAmount: R,
            setGradientAngle: x,
        } = (0, N.ko)(),
        [M, U] = i.useState(T[0] ?? N.OT),
        B = (0, o.bG)([S.A], () => S.A.theme),
        j = (0, A.JZ)(l.M.CUSTOM_THEME_ENTRYPOINT_GRADIENT),
        { analyticsLocations: H } = (0, g.Ay)(p.A.CUSTOM_THEMES_EDITOR),
        Y = (0, o.bG)([D.A], () => D.A.getSavedCustomTheme()),
        W = async () => {
            (I.current = !0),
                await (0, f.u_)({
                    theme: B,
                    customUserThemeSettings: { colors: T, gradientColorStops: [], gradientAngle: C, baseMix: v },
                }),
                (0, L.Yl)(T, v, C, B, H),
                n?.(k.i.TAKE_ACTION),
                j || (0, A.Dr)(l.M.CUSTOM_THEME_ENTRYPOINT_GRADIENT),
                (0, E.Jp)(),
                (0, y.XG)();
        },
        $ = () => {
            u(O.JB.RESET_BUTTON), (0, L.G_)();
        },
        z = T.length > 0;
    return (
        i.useEffect(
            () => () => {
                I.current || u(O.JB.EDITOR_CLOSE);
            },
            [u],
        ),
        (0, h.Ay)(() => {
            if (!a) {
                let e = (T?.length ?? 0) > 0,
                    t = null != Y;
                !e && t
                    ? (N.ko
                          .getState()
                          .setAll({ colors: Y.colors, gradientAngle: Y.gradient_angle, chassisMixAmount: Y.base_mix }),
                      (0, O.IE)(Y.base_theme))
                    : (0, O.$Y)(T, M, b);
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
                            (0, r.jsx)(K, { markAsDismissed: n, isCoachmark: a }),
                            (0, r.jsxs)("div", {
                                className: V.uW,
                                children: [
                                    (0, r.jsx)(_.Text, {
                                        variant: "text-sm/semibold",
                                        color: "text-subtle",
                                        children: F.intl.string(G.default.o2NfLF),
                                    }),
                                    (0, r.jsx)(P.F, {}),
                                ],
                            }),
                            (0, r.jsxs)("div", {
                                className: V.uW,
                                children: [
                                    (0, r.jsx)(_.Text, {
                                        variant: "text-sm/semibold",
                                        color: "text-subtle",
                                        children: F.intl.string(G.default.uSL2Gy),
                                    }),
                                    (0, r.jsx)(w.e, {
                                        onChange: (e) => {
                                            U(e), 0 === T.length && (0, O.$Y)(T, e, b);
                                        },
                                        value: M,
                                        colors: T,
                                        setColors: b,
                                    }),
                                ],
                            }),
                            (0, r.jsxs)("div", {
                                className: V.uW,
                                children: [
                                    (0, r.jsx)(_.Text, {
                                        variant: "text-sm/semibold",
                                        color: "text-subtle",
                                        children: F.intl.string(G.default.F1t0c8),
                                    }),
                                    T.length > 1 && (0, r.jsx)(q, { gradientAngle: C, setGradientAngle: x }),
                                    (0, r.jsx)(X, {
                                        chassisMixAmount: v,
                                        setChassisMixAmount: (e) => {
                                            R(e), 0 === T.length && (0, O.$Y)(T, M, b);
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
                                        onClick: $,
                                        disabled: c,
                                        text: F.intl.string(F.t.yBZMsQ),
                                        fullWidth: !0,
                                    }),
                                ],
                            }),
                        ],
                    }),
                }),
                a
                    ? (0, r.jsx)(J, { onSaveTheme: W, canApply: z })
                    : (0, r.jsx)(ee, { onSaveTheme: W, canApply: z, metadata: t }),
            ],
        })
    );
}
