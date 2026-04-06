"use strict";
n.d(t, { A: () => er });
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
    N = n(358776),
    C = n(858897),
    R = n(909536),
    O = n(954571),
    b = n(467135),
    D = n(935444),
    L = n(230835),
    w = n(74396),
    M = n(738419),
    x = n(145272),
    P = n(572047),
    k = n(278938),
    U = n(652215),
    G = n(49999),
    F = n(788868),
    V = n(520650),
    B = n(985018),
    H = n(431497);
let j = 0,
    Y = 5e3;
function W(e) {
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
function K(e) {
    let { markAsDismissed: t } = e;
    return (0, r.jsx)("div", {
        className: H.b,
        children: (0, r.jsx)(d.JnF, {
            size: "sm",
            onClick: () => {
                t?.(G.i.USER_DISMISS), (0, E.Jp)();
            },
        }),
    });
}
function $() {
    return (0, r.jsxs)("div", {
        className: H.N1,
        children: [
            (0, r.jsx)(_.Text, { variant: "text-md/bold", children: B.intl.string(V.default.AsmU85) }),
            (0, r.jsx)(c.m, {
                text: B.intl.string(B.t["5AFxuK"]),
                children: (0, r.jsx)(_.tvc, { size: "custom", height: 20, width: 20, colorClass: H.oU }),
            }),
            (0, r.jsx)(K, {}),
        ],
    });
}
function z(e) {
    let { markAsDismissed: t, isCoachmark: n } = e;
    return (0, g.JZ)(l.M.CUSTOM_THEME_COACHMARK)
        ? n
            ? (0, r.jsx)(q, { markAsDismissed: t })
            : (0, r.jsx)($, {})
        : (0, r.jsx)(q, { markAsDismissed: () => (0, g.Dr)(l.M.CUSTOM_THEME_COACHMARK) });
}
function q(e) {
    let { markAsDismissed: t } = e,
        n = (0, I.L)(F.PremiumTypes.TIER_2);
    return (0, r.jsxs)("div", {
        className: H.CG,
        children: [
            (0, r.jsxs)("div", {
                className: H.dI,
                children: [
                    (0, r.jsx)(_.Heading, {
                        variant: "heading-lg/extrabold",
                        children: B.intl.string(V.default["23QUzv"]),
                    }),
                    (0, r.jsx)(K, { markAsDismissed: t }),
                ],
            }),
            (0, r.jsx)(_.Text, {
                className: H.VA,
                variant: "text-sm/medium",
                color: "text-muted",
                children: B.intl.string(n ? V.default.TRCE4g : V.default["UV/Vtv"]),
            }),
        ],
    });
}
function Z(e) {
    let t = 10;
    for (let n of [90, 180, 270]) if (Math.abs(e - n) <= t) return n;
    return e;
}
function X(e) {
    let { gradientAngle: t, setGradientAngle: n } = e,
        { key: s, handleInternalChange: o } = W(t),
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
        u(`${i}\xb0`), (0, M.l6)(), n(i);
    };
    return (0, r.jsxs)("div", {
        className: a()(H.xJ, H.Gz),
        children: [
            (0, r.jsxs)("div", {
                className: H.Vt,
                children: [
                    (0, r.jsx)(_.Text, { variant: "text-md/medium", children: B.intl.string(V.default.dZkwgx) }),
                    (0, r.jsx)("input", {
                        type: "text",
                        value: l,
                        onChange: (e) => c(e.target.value),
                        placeholder: `${j}\xb0`,
                        className: H.A9,
                    }),
                ],
            }),
            (0, r.jsxs)("div", {
                className: H.Zp,
                children: [
                    (0, r.jsxs)("div", {
                        className: H.p1,
                        children: [
                            (0, r.jsx)("div", { className: H.uu }),
                            (0, r.jsx)("div", { className: H.uu }),
                            (0, r.jsx)("div", { className: H.VD }),
                            (0, r.jsx)("div", { className: H.uu }),
                            (0, r.jsx)("div", { className: H.uu }),
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
                                (0, M.PT)();
                                let t = Z(e);
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
function Q(e) {
    let { chassisMixAmount: t, setChassisMixAmount: n } = e,
        { key: s, handleInternalChange: a } = W(t),
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
        l(`${i}%`), (0, M.Cq)(), n(i);
    };
    return (0, r.jsxs)("div", {
        className: H.xJ,
        children: [
            (0, r.jsxs)("div", {
                className: H.Vt,
                children: [
                    (0, r.jsx)(_.Text, { variant: "text-md/medium", children: B.intl.string(V.default.xlXkaL) }),
                    (0, r.jsx)("input", {
                        type: "text",
                        value: o,
                        onChange: (e) => u(e.target.value),
                        placeholder: `${b.kJ}%`,
                        className: H.A9,
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
                        (0, M.QJ)(), a(e), n(e);
                    },
                    onValueRender: () => null,
                    keyboardStep: 1,
                },
                s,
            ),
        ],
    });
}
function J(e) {
    let { isCoachmark: t, isMobile: n } = e,
        [s, a] = i.useState(!1),
        o = i.useRef(!1),
        [l, c] = i.useState(!1),
        f = i.useRef(null),
        p = i.useRef(null),
        h = i.useCallback(() => {
            (0, M.y4)();
            let e = (0, D.mf)();
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
                    o.current || a(!0);
                }, Y)),
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
                text: B.intl.string(V.default.c9MBEH),
                fullWidth: !0,
            });
    return n
        ? A()
        : (0, r.jsx)(u.u, {
              title: B.intl.string(V.default.NJ9m8Y),
              body: B.intl.string(V.default["6pabtR"]),
              position: "left",
              asset: g ? (0, r.jsx)(_.jGc, {}) : void 0,
              forceOpen: s,
              onTooltipShow: m,
              onTooltipHide: E,
              targetElementRef: p,
              children: A(),
          });
}
function ee(e) {
    let { onApply: t, disabled: n, fullWidth: i } = e;
    return (0, r.jsx)(c.m, {
        text: B.intl.string(V.default.SFyHIP),
        shouldShow: n,
        children: (0, r.jsx)(d.$nd, {
            variant: "primary",
            onClick: t,
            disabled: n,
            text: B.intl.string(B.t["1Qm822"]),
            fullWidth: i,
        }),
    });
}
function et(e) {
    let { onSaveTheme: t, canApply: n } = e,
        i = (0, I.L)(F.PremiumTypes.TIER_2);
    return (
        (0, M.wb)(i, h.A.CUSTOM_THEMES_EDITOR_COACHMARK),
        (0, r.jsx)("div", {
            className: H.M0,
            children: i
                ? (0, r.jsx)(ee, { disabled: !n, onApply: t, fullWidth: !0 })
                : (0, r.jsx)(A.A, {
                      subscriptionTier: F.pe.TIER_2,
                      buttonTextOverride: B.intl.string(B.t.JST6jl),
                      premiumModalAnalyticsLocation: {
                          page: U.liQ.PREMIUM_UPSELL_CUSTOM_THEMES,
                          section: U.JJy.CUSTOM_THEMES_COACHMARK_FOOTER,
                      },
                      fullWidth: !0,
                  }),
        })
    );
}
function en(e) {
    let { onSaveTheme: t, canApply: n, metadata: i } = e,
        s = (0, I.L)(F.PremiumTypes.TIER_2),
        o = (0, R.St)("custom_themes_editor_footer"),
        u = i?.from === E.xv.SHARE_MESSAGE;
    (0, M.wb)(s, h.A.CUSTOM_THEMES_EDITOR);
    let c = () => {
            if (((0, M.uk)(), (0, g.Dr)(l.M.CUSTOM_THEME_COACHMARK), i?.from === E.xv.SETTING)) {
                let e = (0, N.Ci)("CustomThemesEditorV2_handleBackButtonClick");
                (0, C.openUserSettings)(e ? v.X.DISPLAY_THEME_CATEGORY : v.X.APPEARANCE_PANEL), (0, E.Jp)();
            } else i?.from === E.xv.CLIENT_THEMES_EDITOR ? (0, E.nf)(E.HP.CLIENT_THEMES) : (0, E.Jp)();
        },
        _ = a()(H.xQ, { [H.NI]: !s }),
        f = (0, r.jsx)(A.A, {
            subscriptionTier: F.pe.TIER_2,
            defaultTextOverride: B.intl.string(B.t.pj0XBN),
            premiumModalAnalyticsLocation: {
                page: U.liQ.PREMIUM_UPSELL_CUSTOM_THEMES,
                section: U.JJy.CUSTOM_THEMES_FOOTER,
            },
            fullWidth: !0,
        });
    return (0, r.jsx)("div", {
        className: _,
        children: s
            ? (0, r.jsxs)(r.Fragment, {
                  children: [
                      (0, r.jsx)(P.w, {}),
                      (0, r.jsx)(d.$nd, { variant: "secondary", onClick: c, text: B.intl.string(B.t["13/7kX"]) }),
                      (0, r.jsx)(ee, {
                          disabled: !n,
                          onApply: () => {
                              u && O.default.track(U.HAw.CUSTOM_THEME_SHARE_APPLIED, {}), t();
                          },
                      }),
                  ],
              })
            : (0, r.jsxs)(r.Fragment, {
                  children: [
                      o
                          ? (0, r.jsxs)("div", {
                                className: H.rV,
                                children: [
                                    (0, r.jsx)(T.l, {
                                        size: "sm",
                                        className: H.Tf,
                                        location: h.A.PREMIUM_WISHLIST_CUSTOM_THEMES_EDITOR,
                                    }),
                                    f,
                                ],
                            })
                          : f,
                      (0, r.jsx)(d.$nd, {
                          variant: "secondary",
                          onClick: c,
                          text: u ? B.intl.string(B.t["13/7kX"]) : B.intl.string(B.t.Olc2K3),
                          fullWidth: !0,
                      }),
                  ],
              }),
    });
}
function er(e) {
    let { metadata: t, markAsDismissed: n, isCoachmark: s, isMobile: a } = e,
        u = (0, L.vC)(),
        c = (0, L.tr)(),
        A = i.useRef(!1),
        {
            colors: I,
            chassisMixAmount: T,
            gradientAngle: v,
            setColors: N,
            setChassisMixAmount: C,
            setGradientAngle: R,
        } = (0, b.ko)(),
        [O, D] = i.useState(I[0] ?? b.OT),
        P = (0, o.bG)([y.A], () => y.A.theme),
        U = (0, g.JZ)(l.M.CUSTOM_THEME_ENTRYPOINT_GRADIENT),
        { analyticsLocations: F } = (0, m.Ay)(h.A.CUSTOM_THEMES_EDITOR),
        j = (0, o.bG)([w.A], () => w.A.getSavedCustomTheme()),
        Y = async () => {
            (A.current = !0),
                await (0, f.u_)({
                    theme: P,
                    customUserThemeSettings: { colors: I, gradientColorStops: [], gradientAngle: v, baseMix: T },
                }),
                (0, M.Yl)(I, T, v, P, F),
                n?.(G.i.TAKE_ACTION),
                U || (0, g.Dr)(l.M.CUSTOM_THEME_ENTRYPOINT_GRADIENT),
                (0, E.Jp)(),
                (0, S.XG)();
        },
        W = () => {
            u(L.JB.RESET_BUTTON), (0, M.G_)();
        },
        K = I.length > 0;
    return (
        i.useEffect(
            () => () => {
                A.current || u(L.JB.EDITOR_CLOSE);
            },
            [u],
        ),
        (0, p.Ay)(() => {
            if (!s) {
                let e = (I?.length ?? 0) > 0,
                    t = null != j;
                !e && t
                    ? (b.ko
                          .getState()
                          .setAll({ colors: j.colors, gradientAngle: j.gradient_angle, chassisMixAmount: j.base_mix }),
                      (0, L.IE)(j.base_theme))
                    : (0, L.$Y)(I, O, N);
            }
        }),
        (0, r.jsxs)("div", {
            className: a ? H.AA : H.kL,
            "data-app-right-panel": !a,
            children: [
                (0, r.jsx)(_.HOs, {
                    children: (0, r.jsxs)("div", {
                        className: H.sV,
                        children: [
                            (0, r.jsx)(z, { markAsDismissed: n, isCoachmark: s }),
                            (0, r.jsxs)("div", {
                                className: H.uW,
                                children: [
                                    (0, r.jsx)(_.Text, {
                                        variant: "text-sm/semibold",
                                        color: "text-subtle",
                                        children: B.intl.string(V.default.o2NfLF),
                                    }),
                                    (0, r.jsx)(k.F, {}),
                                ],
                            }),
                            (0, r.jsxs)("div", {
                                className: H.uW,
                                children: [
                                    (0, r.jsx)(_.Text, {
                                        variant: "text-sm/semibold",
                                        color: "text-subtle",
                                        children: B.intl.string(V.default.uSL2Gy),
                                    }),
                                    (0, r.jsx)(x.e, {
                                        onChange: (e) => {
                                            D(e), 0 === I.length && (0, L.$Y)(I, e, N);
                                        },
                                        value: O,
                                        colors: I,
                                        setColors: N,
                                    }),
                                ],
                            }),
                            (0, r.jsxs)("div", {
                                className: H.uW,
                                children: [
                                    (0, r.jsx)(_.Text, {
                                        variant: "text-sm/semibold",
                                        color: "text-subtle",
                                        children: B.intl.string(V.default.F1t0c8),
                                    }),
                                    I.length > 1 && (0, r.jsx)(X, { gradientAngle: v, setGradientAngle: R }),
                                    (0, r.jsx)(Q, {
                                        chassisMixAmount: T,
                                        setChassisMixAmount: (e) => {
                                            C(e), 0 === I.length && (0, L.$Y)(I, O, N);
                                        },
                                    }),
                                ],
                            }),
                            (0, r.jsxs)("div", {
                                className: H.WA,
                                children: [
                                    (0, r.jsx)(J, { isCoachmark: s, isMobile: a }),
                                    (0, r.jsx)(d.$nd, {
                                        variant: "secondary",
                                        onClick: W,
                                        disabled: c,
                                        text: B.intl.string(B.t.yBZMsQ),
                                        fullWidth: !0,
                                    }),
                                ],
                            }),
                        ],
                    }),
                }),
                s
                    ? (0, r.jsx)(et, { onSaveTheme: Y, canApply: K })
                    : (0, r.jsx)(en, { onSaveTheme: Y, canApply: K, metadata: t }),
            ],
        })
    );
}
