"use strict";
n.d(t, { A: () => et });
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
    v = n(358776),
    N = n(840065),
    C = n(954571),
    R = n(467135),
    O = n(935444),
    b = n(230835),
    D = n(74396),
    L = n(738419),
    w = n(145272),
    M = n(572047),
    x = n(278938),
    P = n(652215),
    k = n(49999),
    U = n(788868),
    G = n(520650),
    F = n(985018),
    V = n(152290);
let B = 0,
    H = 5e3;
function j(e) {
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
    return (0, g.JZ)(l.M.CUSTOM_THEME_COACHMARK)
        ? n
            ? (0, r.jsx)($, { markAsDismissed: t })
            : (0, r.jsx)(W, {})
        : (0, r.jsx)($, { markAsDismissed: () => (0, g.Dr)(l.M.CUSTOM_THEME_COACHMARK) });
}
function $(e) {
    let { markAsDismissed: t } = e,
        n = (0, I.L)(U.PremiumTypes.TIER_2);
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
        { key: s, handleInternalChange: o } = j(t),
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
        className: a()(V.xJ, V.Gz),
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
                        s,
                    ),
                ],
            }),
        ],
    });
}
function Z(e) {
    let { chassisMixAmount: t, setChassisMixAmount: n } = e,
        { key: s, handleInternalChange: a } = j(t),
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
                        placeholder: `${R.kJ}%`,
                        className: V.A9,
                    }),
                ],
            }),
            (0, r.jsx)(
                _.Apm,
                {
                    initialValue: t,
                    defaultValue: R.kJ,
                    minValue: 0,
                    maxValue: 100,
                    onValueChange: (e) => {
                        (0, L.QJ)(), a(e), n(e);
                    },
                    onValueRender: () => null,
                    keyboardStep: 1,
                },
                s,
            ),
        ],
    });
}
function X(e) {
    let { isCoachmark: t, isMobile: n } = e,
        [s, a] = i.useState(!1),
        o = i.useRef(!1),
        [l, c] = i.useState(!1),
        f = i.useRef(null),
        p = i.useRef(null),
        h = i.useCallback(() => {
            (0, L.y4)();
            let e = (0, O.mf)();
            R.ko
                .getState()
                .setAll({
                    colors: e.colors,
                    gradientAngle: e.angle ?? R.ko.getState().gradientAngle,
                    chassisMixAmount: e.intensity,
                });
        }, []);
    i.useEffect(() => {
        if (t)
            return (
                (o.current = !1),
                (f.current = setTimeout(() => {
                    o.current || a(!0);
                }, H)),
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
                text: F.intl.string(G.default.c9MBEH),
                fullWidth: !0,
            });
    return n
        ? A()
        : (0, r.jsx)(u.u, {
              title: F.intl.string(G.default.NJ9m8Y),
              body: F.intl.string(G.default["6pabtR"]),
              position: "left",
              asset: g ? (0, r.jsx)(_.jGc, {}) : void 0,
              forceOpen: s,
              onTooltipShow: m,
              onTooltipHide: E,
              targetElementRef: p,
              children: A(),
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
        i = (0, I.L)(U.PremiumTypes.TIER_2);
    return (
        (0, L.wb)(i, h.A.CUSTOM_THEMES_EDITOR_COACHMARK),
        (0, r.jsx)("div", {
            className: V.M0,
            children: i
                ? (0, r.jsx)(Q, { disabled: !n, onApply: t, fullWidth: !0 })
                : (0, r.jsx)(A.A, {
                      subscriptionTier: U.pe.TIER_2,
                      buttonTextOverride: F.intl.string(F.t.JST6jl),
                      premiumModalAnalyticsLocation: {
                          page: P.liQ.PREMIUM_UPSELL_CUSTOM_THEMES,
                          section: P.JJy.CUSTOM_THEMES_COACHMARK_FOOTER,
                      },
                      fullWidth: !0,
                  }),
        })
    );
}
function ee(e) {
    let { onSaveTheme: t, canApply: n, metadata: i } = e,
        s = (0, I.L)(U.PremiumTypes.TIER_2),
        o = (0, E.fy)().metadata?.from === E.xv.SHARE_MESSAGE;
    (0, L.wb)(s, h.A.CUSTOM_THEMES_EDITOR);
    let u = () => {
            if (((0, L.uk)(), (0, g.Dr)(l.M.CUSTOM_THEME_COACHMARK), i?.from === E.xv.SETTING)) {
                let e = (0, v.Ci)("CustomThemesEditorV2_handleBackButtonClick");
                (0, N.openUserSettings)(e ? y.X.DISPLAY_THEME_CATEGORY : y.X.APPEARANCE_PANEL), (0, E.Jp)();
            } else i?.from === E.xv.CLIENT_THEMES_EDITOR ? (0, E.nf)(E.HP.CLIENT_THEMES) : (0, E.Jp)();
        },
        c = a()(V.xQ, { [V.NI]: !s });
    return (0, r.jsx)("div", {
        className: c,
        children: s
            ? (0, r.jsxs)(r.Fragment, {
                  children: [
                      (0, r.jsx)(M.w, {}),
                      (0, r.jsx)(d.$nd, { variant: "secondary", onClick: u, text: F.intl.string(F.t["13/7kX"]) }),
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
                          subscriptionTier: U.pe.TIER_2,
                          defaultTextOverride: F.intl.string(F.t.pj0XBN),
                          premiumModalAnalyticsLocation: {
                              page: P.liQ.PREMIUM_UPSELL_CUSTOM_THEMES,
                              section: P.JJy.CUSTOM_THEMES_FOOTER,
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
    let { metadata: t, markAsDismissed: n, isCoachmark: s, isMobile: a } = e,
        u = (0, b.vC)(),
        c = (0, b.tr)(),
        A = i.useRef(!1),
        {
            colors: I,
            chassisMixAmount: y,
            gradientAngle: v,
            setColors: N,
            setChassisMixAmount: C,
            setGradientAngle: O,
        } = (0, R.ko)(),
        [M, P] = i.useState(I[0] ?? R.OT),
        U = (0, o.bG)([S.A], () => S.A.theme),
        B = (0, g.JZ)(l.M.CUSTOM_THEME_ENTRYPOINT_GRADIENT),
        { analyticsLocations: H } = (0, m.Ay)(h.A.CUSTOM_THEMES_EDITOR),
        j = (0, o.bG)([D.A], () => D.A.getSavedCustomTheme()),
        Y = async () => {
            (A.current = !0),
                await (0, f.u_)({
                    theme: U,
                    customUserThemeSettings: { colors: I, gradientColorStops: [], gradientAngle: v, baseMix: y },
                }),
                (0, L.Yl)(I, y, v, U, H),
                n?.(k.i.TAKE_ACTION),
                B || (0, g.Dr)(l.M.CUSTOM_THEME_ENTRYPOINT_GRADIENT),
                (0, E.Jp)(),
                (0, T.XG)();
        },
        W = () => {
            u(b.JB.RESET_BUTTON), (0, L.G_)();
        },
        $ = I.length > 0;
    return (
        i.useEffect(
            () => () => {
                A.current || u(b.JB.EDITOR_CLOSE);
            },
            [u],
        ),
        (0, p.Ay)(() => {
            if (!s) {
                let e = (I?.length ?? 0) > 0,
                    t = null != j;
                !e && t
                    ? (R.ko
                          .getState()
                          .setAll({ colors: j.colors, gradientAngle: j.gradient_angle, chassisMixAmount: j.base_mix }),
                      (0, b.IE)(j.base_theme))
                    : (0, b.$Y)(I, M, N);
            }
        }),
        (0, r.jsxs)("div", {
            className: a ? V.AA : V.kL,
            "data-app-right-panel": !a,
            children: [
                (0, r.jsx)(_.HOs, {
                    children: (0, r.jsxs)("div", {
                        className: V.sV,
                        children: [
                            (0, r.jsx)(K, { markAsDismissed: n, isCoachmark: s }),
                            (0, r.jsxs)("div", {
                                className: V.uW,
                                children: [
                                    (0, r.jsx)(_.Text, {
                                        variant: "text-sm/semibold",
                                        color: "text-subtle",
                                        children: F.intl.string(G.default.o2NfLF),
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
                                        children: F.intl.string(G.default.uSL2Gy),
                                    }),
                                    (0, r.jsx)(w.e, {
                                        onChange: (e) => {
                                            P(e), 0 === I.length && (0, b.$Y)(I, e, N);
                                        },
                                        value: M,
                                        colors: I,
                                        setColors: N,
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
                                    I.length > 1 && (0, r.jsx)(q, { gradientAngle: v, setGradientAngle: O }),
                                    (0, r.jsx)(Z, {
                                        chassisMixAmount: y,
                                        setChassisMixAmount: (e) => {
                                            C(e), 0 === I.length && (0, b.$Y)(I, M, N);
                                        },
                                    }),
                                ],
                            }),
                            (0, r.jsxs)("div", {
                                className: V.WA,
                                children: [
                                    (0, r.jsx)(X, { isCoachmark: s, isMobile: a }),
                                    (0, r.jsx)(d.$nd, {
                                        variant: "secondary",
                                        onClick: W,
                                        disabled: c,
                                        text: F.intl.string(F.t.yBZMsQ),
                                        fullWidth: !0,
                                    }),
                                ],
                            }),
                        ],
                    }),
                }),
                s
                    ? (0, r.jsx)(J, { onSaveTheme: Y, canApply: $ })
                    : (0, r.jsx)(ee, { onSaveTheme: Y, canApply: $, metadata: t }),
            ],
        })
    );
}
