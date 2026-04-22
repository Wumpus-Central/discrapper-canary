"use strict";
l.r(t), l.d(t, { default: () => er });
var n = l(627968),
    a = l(64700),
    s = l(503698),
    i = l.n(s),
    r = l(311907),
    o = l(554146),
    c = l(459192),
    u = l(990078),
    d = l(815021),
    h = l(821609),
    m = l(834730),
    _ = l(403581),
    g = l(534514),
    f = l(106236),
    x = l(926321),
    E = l(339654),
    T = l(827734),
    p = l(573613),
    A = l(817281),
    v = l(964486),
    C = l(793574),
    S = l(688810),
    M = l(793943),
    b = l(826673),
    j = l(792656),
    N = l(757036),
    I = l(400669),
    O = l(973654),
    k = l(544028),
    w = l(780964),
    R = l(858897),
    y = l(909536),
    H = l(954571),
    D = l(467135),
    L = l(935444),
    U = l(230835),
    P = l(74396),
    F = l(738419),
    G = l(145272),
    J = l(572047),
    V = l(278938),
    W = l(652215),
    B = l(49999),
    Z = l(788868),
    K = l(693227),
    $ = l(985018),
    X = l(45945);
function Y(e) {
    let [t, l] = a.useState(0),
        [n, s] = a.useState(!1),
        i = a.useRef(e);
    return (
        a.useEffect(() => {
            e === i.current || n || l((e) => e + 1), (i.current = e), s(!1);
        }, [e, n]),
        { key: t, handleInternalChange: a.useCallback((e) => (s(!0), e), []) }
    );
}
function z(e) {
    let { markAsDismissed: t } = e;
    return (0, n.jsx)("div", {
        className: X.b,
        children: (0, n.jsx)(d.J, {
            size: "sm",
            onClick: () => {
                t?.(B.i.USER_DISMISS), (0, M.Jp)();
            },
        }),
    });
}
function Q() {
    return (0, n.jsxs)("div", {
        className: X.N1,
        children: [
            (0, n.jsx)(m.E, { variant: "text-md/bold", children: $.intl.string(K.default.AsmU85) }),
            (0, n.jsx)(u.m, {
                text: $.intl.string($.t["5AFxuK"]),
                children: (0, n.jsx)(_.t, { size: "custom", height: 20, width: 20, colorClass: X.oU }),
            }),
            (0, n.jsx)(z, {}),
        ],
    });
}
function q(e) {
    let { markAsDismissed: t, isCoachmark: l } = e;
    return (0, b.JZ)(o.M.CUSTOM_THEME_COACHMARK)
        ? l
            ? (0, n.jsx)(ee, { markAsDismissed: t })
            : (0, n.jsx)(Q, {})
        : (0, n.jsx)(ee, { markAsDismissed: () => (0, b.Dr)(o.M.CUSTOM_THEME_COACHMARK) });
}
function ee(e) {
    let { markAsDismissed: t } = e,
        l = (0, N.L)(Z.PremiumTypes.TIER_2);
    return (0, n.jsxs)("div", {
        className: X.CG,
        children: [
            (0, n.jsxs)("div", {
                className: X.dI,
                children: [
                    (0, n.jsx)(g.D, { variant: "heading-lg/extrabold", children: $.intl.string(K.default["23QUzv"]) }),
                    (0, n.jsx)(z, { markAsDismissed: t }),
                ],
            }),
            (0, n.jsx)(m.E, {
                className: X.VA,
                variant: "text-sm/medium",
                color: "text-muted",
                children: $.intl.string(l ? K.default.TRCE4g : K.default["UV/Vtv"]),
            }),
        ],
    });
}
function et(e) {
    let { gradientAngle: t, setGradientAngle: l } = e,
        { key: s, handleInternalChange: r } = Y(t),
        [o, c] = a.useState(`${Math.round(t)}\xb0`);
    return (
        a.useEffect(() => {
            c(`${Math.round(t)}\xb0`);
        }, [t]),
        (0, n.jsxs)("div", {
            className: i()(X.xJ, X.Gz),
            children: [
                (0, n.jsxs)("div", {
                    className: X.Vt,
                    children: [
                        (0, n.jsx)(m.E, { variant: "text-md/medium", children: $.intl.string(K.default.dZkwgx) }),
                        (0, n.jsx)("input", {
                            type: "text",
                            value: o,
                            onChange: (e) =>
                                ((e) => {
                                    let t = e.replace(/°/g, "").trim();
                                    if ("" === t) return void c("");
                                    let n = parseInt(t, 10);
                                    if (isNaN(n)) return;
                                    let a = Math.max(0, Math.min(360, n));
                                    c(`${a}\xb0`), (0, F.l6)(), l(a);
                                })(e.target.value),
                            placeholder: "0\xb0",
                            className: X.A9,
                        }),
                    ],
                }),
                (0, n.jsxs)("div", {
                    className: X.Zp,
                    children: [
                        (0, n.jsxs)("div", {
                            className: X.p1,
                            children: [
                                (0, n.jsx)("div", { className: X.uu }),
                                (0, n.jsx)("div", { className: X.uu }),
                                (0, n.jsx)("div", { className: X.VD }),
                                (0, n.jsx)("div", { className: X.uu }),
                                (0, n.jsx)("div", { className: X.uu }),
                            ],
                        }),
                        (0, n.jsx)(
                            f.A,
                            {
                                initialValue: t,
                                defaultValue: 0,
                                minValue: 0,
                                maxValue: 360,
                                fillStyles: { display: "none" },
                                onValueChange: (e) => {
                                    (0, F.PT)();
                                    let t = (function (e) {
                                        for (let t of [90, 180, 270]) if (10 >= Math.abs(e - t)) return t;
                                        return e;
                                    })(e);
                                    t !== e || r(e), l(t);
                                },
                                onValueRender: () => null,
                                keyboardStep: 1,
                            },
                            s,
                        ),
                    ],
                }),
            ],
        })
    );
}
function el(e) {
    let { chassisMixAmount: t, setChassisMixAmount: l } = e,
        { key: s, handleInternalChange: i } = Y(t),
        [r, o] = a.useState(`${Math.round(t)}%`);
    return (
        a.useEffect(() => {
            o(`${Math.round(t)}%`);
        }, [t]),
        (0, n.jsxs)("div", {
            className: X.xJ,
            children: [
                (0, n.jsxs)("div", {
                    className: X.Vt,
                    children: [
                        (0, n.jsx)(m.E, { variant: "text-md/medium", children: $.intl.string(K.default.xlXkaL) }),
                        (0, n.jsx)("input", {
                            type: "text",
                            value: r,
                            onChange: (e) =>
                                ((e) => {
                                    let t = e.replace(/%/g, "").trim();
                                    if ("" === t) return void o("");
                                    let n = parseInt(t, 10);
                                    if (isNaN(n)) return;
                                    let a = Math.max(0, Math.min(100, n));
                                    o(`${a}%`), (0, F.Cq)(), l(a);
                                })(e.target.value),
                            placeholder: `${D.kJ}%`,
                            className: X.A9,
                        }),
                    ],
                }),
                (0, n.jsx)(
                    f.A,
                    {
                        initialValue: t,
                        defaultValue: D.kJ,
                        minValue: 0,
                        maxValue: 100,
                        onValueChange: (e) => {
                            (0, F.QJ)(), i(e), l(e);
                        },
                        onValueRender: () => null,
                        keyboardStep: 1,
                    },
                    s,
                ),
            ],
        })
    );
}
function en(e) {
    let { isCoachmark: t, isMobile: l } = e,
        [s, i] = a.useState(!1),
        r = a.useRef(!1),
        [o, u] = a.useState(!1),
        d = a.useRef(null),
        m = a.useRef(null),
        _ = a.useCallback(() => {
            (0, F.y4)();
            let e = (0, L.mf)();
            D.ko
                .getState()
                .setAll({
                    colors: e.colors,
                    gradientAngle: e.angle ?? D.ko.getState().gradientAngle,
                    chassisMixAmount: e.intensity,
                });
        }, []);
    a.useEffect(() => {
        if (t)
            return (
                (r.current = !1),
                (d.current = setTimeout(() => {
                    r.current || i(!0);
                }, 5e3)),
                () => {
                    null != d.current && clearTimeout(d.current);
                }
            );
    }, [t]);
    let g = a.useCallback(() => {
            r.current = !0;
        }, []),
        f = a.useCallback(() => {
            i(!1);
        }, []),
        p = s && !o,
        A = () =>
            (0, n.jsx)(h.$, {
                buttonRef: m,
                variant: "secondary",
                onClick: _,
                onMouseEnter: () => u(!0),
                onMouseLeave: () => u(!1),
                icon: l
                    ? { type: "icon", asset: x.j }
                    : {
                          type: "rive",
                          asset: E.m,
                          riveProps: { dataBinding: { fill: T.A.colors.ICON_STRONG }, eventTargetRef: m },
                      },
                text: $.intl.string(K.default.c9MBEH),
                fullWidth: !0,
            });
    return l
        ? A()
        : (0, n.jsx)(c.u, {
              title: $.intl.string(K.default.NJ9m8Y),
              body: $.intl.string(K.default["6pabtR"]),
              position: "left",
              asset: p ? (0, n.jsx)(x.j, {}) : void 0,
              forceOpen: s,
              onTooltipShow: g,
              onTooltipHide: f,
              targetElementRef: m,
              children: A(),
          });
}
function ea(e) {
    let { onApply: t, disabled: l, fullWidth: a } = e;
    return (0, n.jsx)(u.m, {
        text: $.intl.string(K.default.SFyHIP),
        shouldShow: l,
        children: (0, n.jsx)(h.$, {
            variant: "primary",
            onClick: t,
            disabled: l,
            text: $.intl.string($.t["1Qm822"]),
            fullWidth: a,
        }),
    });
}
function es(e) {
    let { onSaveTheme: t, canApply: l } = e,
        a = (0, N.L)(Z.PremiumTypes.TIER_2);
    return (
        (0, F.wb)(a, C.A.CUSTOM_THEMES_EDITOR_COACHMARK),
        (0, n.jsx)("div", {
            className: X.M0,
            children: a
                ? (0, n.jsx)(ea, { disabled: !l, onApply: t, fullWidth: !0 })
                : (0, n.jsx)(j.A, {
                      subscriptionTier: Z.pe.TIER_2,
                      buttonTextOverride: $.intl.string($.t.JST6jl),
                      premiumModalAnalyticsLocation: {
                          page: W.liQ.PREMIUM_UPSELL_CUSTOM_THEMES,
                          section: W.JJy.CUSTOM_THEMES_COACHMARK_FOOTER,
                      },
                      fullWidth: !0,
                  }),
        })
    );
}
function ei(e) {
    let { onSaveTheme: t, canApply: l, metadata: a } = e,
        s = (0, N.L)(Z.PremiumTypes.TIER_2),
        r = (0, y.St)("custom_themes_editor_footer"),
        c = a?.from === M.xv.SHARE_MESSAGE;
    (0, F.wb)(s, C.A.CUSTOM_THEMES_EDITOR);
    let u = () => {
            (0, F.uk)(),
                (0, b.Dr)(o.M.CUSTOM_THEME_COACHMARK),
                a?.from === M.xv.SETTING
                    ? ((0, R.openUserSettings)(w.X.APPEARANCE_THEME_CATEGORY), (0, M.Jp)())
                    : a?.from === M.xv.CLIENT_THEMES_EDITOR
                      ? (0, M.nf)(M.HP.CLIENT_THEMES)
                      : (0, M.Jp)();
        },
        d = i()(X.xQ, { [X.NI]: !s }),
        m = (0, n.jsx)(j.A, {
            subscriptionTier: Z.pe.TIER_2,
            defaultTextOverride: $.intl.string($.t.pj0XBN),
            premiumModalAnalyticsLocation: {
                page: W.liQ.PREMIUM_UPSELL_CUSTOM_THEMES,
                section: W.JJy.CUSTOM_THEMES_FOOTER,
            },
            fullWidth: !0,
        });
    return (0, n.jsx)("div", {
        className: d,
        children: s
            ? (0, n.jsxs)(n.Fragment, {
                  children: [
                      (0, n.jsx)(J.w, {}),
                      (0, n.jsx)(h.$, { variant: "secondary", onClick: u, text: $.intl.string($.t["13/7kX"]) }),
                      (0, n.jsx)(ea, {
                          disabled: !l,
                          onApply: () => {
                              c && H.default.track(W.HAw.CUSTOM_THEME_SHARE_APPLIED, {}), t();
                          },
                      }),
                  ],
              })
            : (0, n.jsxs)(n.Fragment, {
                  children: [
                      r
                          ? (0, n.jsxs)("div", {
                                className: X.rV,
                                children: [
                                    (0, n.jsx)(I.l, {
                                        size: "md",
                                        className: X.Tf,
                                        location: C.A.PREMIUM_WISHLIST_CUSTOM_THEMES_EDITOR,
                                    }),
                                    m,
                                ],
                            })
                          : m,
                      (0, n.jsx)(h.$, {
                          variant: "secondary",
                          onClick: u,
                          text: c ? $.intl.string($.t["13/7kX"]) : $.intl.string($.t.Olc2K3),
                          fullWidth: !0,
                      }),
                  ],
              }),
    });
}
function er(e) {
    let { metadata: t, markAsDismissed: l, isCoachmark: s, isMobile: i } = e,
        c = (0, U.vC)(),
        u = (0, U.tr)(),
        d = a.useRef(!1),
        {
            colors: _,
            chassisMixAmount: g,
            gradientAngle: f,
            setColors: x,
            setChassisMixAmount: E,
            setGradientAngle: T,
        } = (0, D.ko)(),
        [j, N] = a.useState(_[0] ?? D.OT),
        I = (0, r.bG)([k.A], () => k.A.theme),
        w = (0, b.JZ)(o.M.CUSTOM_THEME_ENTRYPOINT_GRADIENT),
        { analyticsLocations: R } = (0, S.Ay)(C.A.CUSTOM_THEMES_EDITOR),
        y = (0, r.bG)([P.A], () => P.A.getSavedCustomTheme()),
        H = async () => {
            (d.current = !0),
                await (0, A.u_)({
                    theme: I,
                    customUserThemeSettings: { colors: _, gradientColorStops: [], gradientAngle: f, baseMix: g },
                }),
                (0, F.Yl)(_, g, f, I, R),
                l?.(B.i.TAKE_ACTION),
                w || (0, b.Dr)(o.M.CUSTOM_THEME_ENTRYPOINT_GRADIENT),
                (0, M.Jp)(),
                (0, O.XG)();
        },
        L = _.length > 0;
    return (
        a.useEffect(
            () => () => {
                d.current || c(U.JB.EDITOR_CLOSE);
            },
            [c],
        ),
        (0, v.Ay)(() => {
            if (!s) {
                let e = (_?.length ?? 0) > 0,
                    t = null != y;
                !e && t
                    ? (D.ko
                          .getState()
                          .setAll({ colors: y.colors, gradientAngle: y.gradient_angle, chassisMixAmount: y.base_mix }),
                      (0, U.IE)(y.base_theme))
                    : (0, U.$Y)(_, j, x);
            }
        }),
        (0, n.jsxs)("div", {
            className: i ? X.AA : X.kL,
            "data-app-right-panel": !i,
            children: [
                (0, n.jsx)(p.Ip, {
                    children: (0, n.jsxs)("div", {
                        className: X.sV,
                        children: [
                            (0, n.jsx)(q, { markAsDismissed: l, isCoachmark: s }),
                            (0, n.jsxs)("div", {
                                className: X.uW,
                                children: [
                                    (0, n.jsx)(m.E, {
                                        variant: "text-sm/semibold",
                                        color: "text-subtle",
                                        children: $.intl.string(K.default.o2NfLF),
                                    }),
                                    (0, n.jsx)(V.F, {}),
                                ],
                            }),
                            (0, n.jsxs)("div", {
                                className: X.uW,
                                children: [
                                    (0, n.jsx)(m.E, {
                                        variant: "text-sm/semibold",
                                        color: "text-subtle",
                                        children: $.intl.string(K.default.uSL2Gy),
                                    }),
                                    (0, n.jsx)(G.e, {
                                        onChange: (e) => {
                                            N(e), 0 === _.length && (0, U.$Y)(_, e, x);
                                        },
                                        value: j,
                                        colors: _,
                                        setColors: x,
                                    }),
                                ],
                            }),
                            (0, n.jsxs)("div", {
                                className: X.uW,
                                children: [
                                    (0, n.jsx)(m.E, {
                                        variant: "text-sm/semibold",
                                        color: "text-subtle",
                                        children: $.intl.string(K.default.F1t0c8),
                                    }),
                                    _.length > 1 && (0, n.jsx)(et, { gradientAngle: f, setGradientAngle: T }),
                                    (0, n.jsx)(el, {
                                        chassisMixAmount: g,
                                        setChassisMixAmount: (e) => {
                                            E(e), 0 === _.length && (0, U.$Y)(_, j, x);
                                        },
                                    }),
                                ],
                            }),
                            (0, n.jsxs)("div", {
                                className: X.WA,
                                children: [
                                    (0, n.jsx)(en, { isCoachmark: s, isMobile: i }),
                                    (0, n.jsx)(h.$, {
                                        variant: "secondary",
                                        onClick: () => {
                                            c(U.JB.RESET_BUTTON), (0, F.G_)();
                                        },
                                        disabled: u,
                                        text: $.intl.string($.t.yBZMsQ),
                                        fullWidth: !0,
                                    }),
                                ],
                            }),
                        ],
                    }),
                }),
                s
                    ? (0, n.jsx)(es, { onSaveTheme: H, canApply: L })
                    : (0, n.jsx)(ei, { onSaveTheme: H, canApply: L, metadata: t }),
            ],
        })
    );
}
