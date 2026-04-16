"use strict";
n.d(t, { A: () => en });
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
    T = n(400669),
    S = n(973654),
    y = n(544028),
    v = n(780964),
    N = n(858897),
    C = n(909536),
    R = n(954571),
    O = n(467135),
    b = n(935444),
    D = n(230835),
    L = n(74396),
    w = n(738419),
    M = n(145272),
    P = n(572047),
    x = n(278938),
    k = n(652215),
    U = n(49999),
    G = n(788868),
    F = n(693227),
    V = n(985018),
    B = n(45945);
let H = 0,
    j = 5e3;
function Y(e) {
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
function W(e) {
    let { markAsDismissed: t } = e;
    return (0, r.jsx)("div", {
        className: B.b,
        children: (0, r.jsx)(d.JnF, {
            size: "sm",
            onClick: () => {
                t?.(U.i.USER_DISMISS), (0, E.Jp)();
            },
        }),
    });
}
function K() {
    return (0, r.jsxs)("div", {
        className: B.N1,
        children: [
            (0, r.jsx)(_.Text, { variant: "text-md/bold", children: V.intl.string(F.default.AsmU85) }),
            (0, r.jsx)(c.m, {
                text: V.intl.string(V.t["5AFxuK"]),
                children: (0, r.jsx)(_.tvc, { size: "custom", height: 20, width: 20, colorClass: B.oU }),
            }),
            (0, r.jsx)(W, {}),
        ],
    });
}
function $(e) {
    let { markAsDismissed: t, isCoachmark: n } = e;
    return (0, g.JZ)(l.M.CUSTOM_THEME_COACHMARK)
        ? n
            ? (0, r.jsx)(z, { markAsDismissed: t })
            : (0, r.jsx)(K, {})
        : (0, r.jsx)(z, { markAsDismissed: () => (0, g.Dr)(l.M.CUSTOM_THEME_COACHMARK) });
}
function z(e) {
    let { markAsDismissed: t } = e,
        n = (0, I.L)(G.PremiumTypes.TIER_2);
    return (0, r.jsxs)("div", {
        className: B.CG,
        children: [
            (0, r.jsxs)("div", {
                className: B.dI,
                children: [
                    (0, r.jsx)(_.Heading, {
                        variant: "heading-lg/extrabold",
                        children: V.intl.string(F.default["23QUzv"]),
                    }),
                    (0, r.jsx)(W, { markAsDismissed: t }),
                ],
            }),
            (0, r.jsx)(_.Text, {
                className: B.VA,
                variant: "text-sm/medium",
                color: "text-muted",
                children: V.intl.string(n ? F.default.TRCE4g : F.default["UV/Vtv"]),
            }),
        ],
    });
}
function q(e) {
    let t = 10;
    for (let n of [90, 180, 270]) if (Math.abs(e - n) <= t) return n;
    return e;
}
function Z(e) {
    let { gradientAngle: t, setGradientAngle: n } = e,
        { key: s, handleInternalChange: o } = Y(t),
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
        u(`${i}\xb0`), (0, w.l6)(), n(i);
    };
    return (0, r.jsxs)("div", {
        className: a()(B.xJ, B.Gz),
        children: [
            (0, r.jsxs)("div", {
                className: B.Vt,
                children: [
                    (0, r.jsx)(_.Text, { variant: "text-md/medium", children: V.intl.string(F.default.dZkwgx) }),
                    (0, r.jsx)("input", {
                        type: "text",
                        value: l,
                        onChange: (e) => c(e.target.value),
                        placeholder: `${H}\xb0`,
                        className: B.A9,
                    }),
                ],
            }),
            (0, r.jsxs)("div", {
                className: B.Zp,
                children: [
                    (0, r.jsxs)("div", {
                        className: B.p1,
                        children: [
                            (0, r.jsx)("div", { className: B.uu }),
                            (0, r.jsx)("div", { className: B.uu }),
                            (0, r.jsx)("div", { className: B.VD }),
                            (0, r.jsx)("div", { className: B.uu }),
                            (0, r.jsx)("div", { className: B.uu }),
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
                                (0, w.PT)();
                                let t = q(e);
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
function X(e) {
    let { chassisMixAmount: t, setChassisMixAmount: n } = e,
        { key: s, handleInternalChange: a } = Y(t),
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
        l(`${i}%`), (0, w.Cq)(), n(i);
    };
    return (0, r.jsxs)("div", {
        className: B.xJ,
        children: [
            (0, r.jsxs)("div", {
                className: B.Vt,
                children: [
                    (0, r.jsx)(_.Text, { variant: "text-md/medium", children: V.intl.string(F.default.xlXkaL) }),
                    (0, r.jsx)("input", {
                        type: "text",
                        value: o,
                        onChange: (e) => u(e.target.value),
                        placeholder: `${O.kJ}%`,
                        className: B.A9,
                    }),
                ],
            }),
            (0, r.jsx)(
                _.Apm,
                {
                    initialValue: t,
                    defaultValue: O.kJ,
                    minValue: 0,
                    maxValue: 100,
                    onValueChange: (e) => {
                        (0, w.QJ)(), a(e), n(e);
                    },
                    onValueRender: () => null,
                    keyboardStep: 1,
                },
                s,
            ),
        ],
    });
}
function Q(e) {
    let { isCoachmark: t, isMobile: n } = e,
        [s, a] = i.useState(!1),
        o = i.useRef(!1),
        [l, c] = i.useState(!1),
        f = i.useRef(null),
        p = i.useRef(null),
        h = i.useCallback(() => {
            (0, w.y4)();
            let e = (0, b.mf)();
            O.ko
                .getState()
                .setAll({
                    colors: e.colors,
                    gradientAngle: e.angle ?? O.ko.getState().gradientAngle,
                    chassisMixAmount: e.intensity,
                });
        }, []);
    i.useEffect(() => {
        if (t)
            return (
                (o.current = !1),
                (f.current = setTimeout(() => {
                    o.current || a(!0);
                }, j)),
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
                text: V.intl.string(F.default.c9MBEH),
                fullWidth: !0,
            });
    return n
        ? A()
        : (0, r.jsx)(u.u, {
              title: V.intl.string(F.default.NJ9m8Y),
              body: V.intl.string(F.default["6pabtR"]),
              position: "left",
              asset: g ? (0, r.jsx)(_.jGc, {}) : void 0,
              forceOpen: s,
              onTooltipShow: m,
              onTooltipHide: E,
              targetElementRef: p,
              children: A(),
          });
}
function J(e) {
    let { onApply: t, disabled: n, fullWidth: i } = e;
    return (0, r.jsx)(c.m, {
        text: V.intl.string(F.default.SFyHIP),
        shouldShow: n,
        children: (0, r.jsx)(d.$nd, {
            variant: "primary",
            onClick: t,
            disabled: n,
            text: V.intl.string(V.t["1Qm822"]),
            fullWidth: i,
        }),
    });
}
function ee(e) {
    let { onSaveTheme: t, canApply: n } = e,
        i = (0, I.L)(G.PremiumTypes.TIER_2);
    return (
        (0, w.wb)(i, h.A.CUSTOM_THEMES_EDITOR_COACHMARK),
        (0, r.jsx)("div", {
            className: B.M0,
            children: i
                ? (0, r.jsx)(J, { disabled: !n, onApply: t, fullWidth: !0 })
                : (0, r.jsx)(A.A, {
                      subscriptionTier: G.pe.TIER_2,
                      buttonTextOverride: V.intl.string(V.t.JST6jl),
                      premiumModalAnalyticsLocation: {
                          page: k.liQ.PREMIUM_UPSELL_CUSTOM_THEMES,
                          section: k.JJy.CUSTOM_THEMES_COACHMARK_FOOTER,
                      },
                      fullWidth: !0,
                  }),
        })
    );
}
function et(e) {
    let { onSaveTheme: t, canApply: n, metadata: i } = e,
        s = (0, I.L)(G.PremiumTypes.TIER_2),
        o = (0, C.St)("custom_themes_editor_footer"),
        u = i?.from === E.xv.SHARE_MESSAGE;
    (0, w.wb)(s, h.A.CUSTOM_THEMES_EDITOR);
    let c = () => {
            (0, w.uk)(),
                (0, g.Dr)(l.M.CUSTOM_THEME_COACHMARK),
                i?.from === E.xv.SETTING
                    ? ((0, N.openUserSettings)(v.X.DISPLAY_THEME_CATEGORY), (0, E.Jp)())
                    : i?.from === E.xv.CLIENT_THEMES_EDITOR
                      ? (0, E.nf)(E.HP.CLIENT_THEMES)
                      : (0, E.Jp)();
        },
        _ = a()(B.xQ, { [B.NI]: !s }),
        f = (0, r.jsx)(A.A, {
            subscriptionTier: G.pe.TIER_2,
            defaultTextOverride: V.intl.string(V.t.pj0XBN),
            premiumModalAnalyticsLocation: {
                page: k.liQ.PREMIUM_UPSELL_CUSTOM_THEMES,
                section: k.JJy.CUSTOM_THEMES_FOOTER,
            },
            fullWidth: !0,
        });
    return (0, r.jsx)("div", {
        className: _,
        children: s
            ? (0, r.jsxs)(r.Fragment, {
                  children: [
                      (0, r.jsx)(P.w, {}),
                      (0, r.jsx)(d.$nd, { variant: "secondary", onClick: c, text: V.intl.string(V.t["13/7kX"]) }),
                      (0, r.jsx)(J, {
                          disabled: !n,
                          onApply: () => {
                              u && R.default.track(k.HAw.CUSTOM_THEME_SHARE_APPLIED, {}), t();
                          },
                      }),
                  ],
              })
            : (0, r.jsxs)(r.Fragment, {
                  children: [
                      o
                          ? (0, r.jsxs)("div", {
                                className: B.rV,
                                children: [
                                    (0, r.jsx)(T.l, {
                                        size: "md",
                                        className: B.Tf,
                                        location: h.A.PREMIUM_WISHLIST_CUSTOM_THEMES_EDITOR,
                                    }),
                                    f,
                                ],
                            })
                          : f,
                      (0, r.jsx)(d.$nd, {
                          variant: "secondary",
                          onClick: c,
                          text: u ? V.intl.string(V.t["13/7kX"]) : V.intl.string(V.t.Olc2K3),
                          fullWidth: !0,
                      }),
                  ],
              }),
    });
}
function en(e) {
    let { metadata: t, markAsDismissed: n, isCoachmark: s, isMobile: a } = e,
        u = (0, D.vC)(),
        c = (0, D.tr)(),
        A = i.useRef(!1),
        {
            colors: I,
            chassisMixAmount: T,
            gradientAngle: v,
            setColors: N,
            setChassisMixAmount: C,
            setGradientAngle: R,
        } = (0, O.ko)(),
        [b, P] = i.useState(I[0] ?? O.OT),
        k = (0, o.bG)([y.A], () => y.A.theme),
        G = (0, g.JZ)(l.M.CUSTOM_THEME_ENTRYPOINT_GRADIENT),
        { analyticsLocations: H } = (0, m.Ay)(h.A.CUSTOM_THEMES_EDITOR),
        j = (0, o.bG)([L.A], () => L.A.getSavedCustomTheme()),
        Y = async () => {
            (A.current = !0),
                await (0, f.u_)({
                    theme: k,
                    customUserThemeSettings: { colors: I, gradientColorStops: [], gradientAngle: v, baseMix: T },
                }),
                (0, w.Yl)(I, T, v, k, H),
                n?.(U.i.TAKE_ACTION),
                G || (0, g.Dr)(l.M.CUSTOM_THEME_ENTRYPOINT_GRADIENT),
                (0, E.Jp)(),
                (0, S.XG)();
        },
        W = () => {
            u(D.JB.RESET_BUTTON), (0, w.G_)();
        },
        K = I.length > 0;
    return (
        i.useEffect(
            () => () => {
                A.current || u(D.JB.EDITOR_CLOSE);
            },
            [u],
        ),
        (0, p.Ay)(() => {
            if (!s) {
                let e = (I?.length ?? 0) > 0,
                    t = null != j;
                !e && t
                    ? (O.ko
                          .getState()
                          .setAll({ colors: j.colors, gradientAngle: j.gradient_angle, chassisMixAmount: j.base_mix }),
                      (0, D.IE)(j.base_theme))
                    : (0, D.$Y)(I, b, N);
            }
        }),
        (0, r.jsxs)("div", {
            className: a ? B.AA : B.kL,
            "data-app-right-panel": !a,
            children: [
                (0, r.jsx)(_.HOs, {
                    children: (0, r.jsxs)("div", {
                        className: B.sV,
                        children: [
                            (0, r.jsx)($, { markAsDismissed: n, isCoachmark: s }),
                            (0, r.jsxs)("div", {
                                className: B.uW,
                                children: [
                                    (0, r.jsx)(_.Text, {
                                        variant: "text-sm/semibold",
                                        color: "text-subtle",
                                        children: V.intl.string(F.default.o2NfLF),
                                    }),
                                    (0, r.jsx)(x.F, {}),
                                ],
                            }),
                            (0, r.jsxs)("div", {
                                className: B.uW,
                                children: [
                                    (0, r.jsx)(_.Text, {
                                        variant: "text-sm/semibold",
                                        color: "text-subtle",
                                        children: V.intl.string(F.default.uSL2Gy),
                                    }),
                                    (0, r.jsx)(M.e, {
                                        onChange: (e) => {
                                            P(e), 0 === I.length && (0, D.$Y)(I, e, N);
                                        },
                                        value: b,
                                        colors: I,
                                        setColors: N,
                                    }),
                                ],
                            }),
                            (0, r.jsxs)("div", {
                                className: B.uW,
                                children: [
                                    (0, r.jsx)(_.Text, {
                                        variant: "text-sm/semibold",
                                        color: "text-subtle",
                                        children: V.intl.string(F.default.F1t0c8),
                                    }),
                                    I.length > 1 && (0, r.jsx)(Z, { gradientAngle: v, setGradientAngle: R }),
                                    (0, r.jsx)(X, {
                                        chassisMixAmount: T,
                                        setChassisMixAmount: (e) => {
                                            C(e), 0 === I.length && (0, D.$Y)(I, b, N);
                                        },
                                    }),
                                ],
                            }),
                            (0, r.jsxs)("div", {
                                className: B.WA,
                                children: [
                                    (0, r.jsx)(Q, { isCoachmark: s, isMobile: a }),
                                    (0, r.jsx)(d.$nd, {
                                        variant: "secondary",
                                        onClick: W,
                                        disabled: c,
                                        text: V.intl.string(V.t.yBZMsQ),
                                        fullWidth: !0,
                                    }),
                                ],
                            }),
                        ],
                    }),
                }),
                s
                    ? (0, r.jsx)(ee, { onSaveTheme: Y, canApply: K })
                    : (0, r.jsx)(et, { onSaveTheme: Y, canApply: K, metadata: t }),
            ],
        })
    );
}
