l.r(t), l.d(t, { default: () => ei });
var a = l(627968),
    n = l(64700),
    s = l(503698),
    r = l.n(s),
    i = l(311907),
    o = l(554146),
    c = l(459192),
    d = l(990078),
    u = l(815021),
    h = l(821609),
    m = l(834730),
    _ = l(403581),
    x = l(534514),
    g = l(106236),
    E = l(926321),
    f = l(339654),
    T = l(827734),
    A = l(573613),
    p = l(817281),
    C = l(964486),
    v = l(793574),
    S = l(688810),
    M = l(793943),
    N = l(826673),
    j = l(792656),
    O = l(757036),
    I = l(400669),
    w = l(973654),
    b = l(544028),
    R = l(780964),
    k = l(858897),
    H = l(909536),
    y = l(954571),
    D = l(467135),
    U = l(935444),
    L = l(230835),
    J = l(74396),
    P = l(738419),
    G = l(145272),
    V = l(572047),
    F = l(278938),
    Z = l(652215),
    B = l(49999),
    K = l(788868),
    $ = l(693227),
    W = l(985018),
    Y = l(45945);
function Q(e) {
    let [t, l] = n.useState(0),
        [a, s] = n.useState(!1),
        r = n.useRef(e);
    return (
        n.useEffect(() => {
            e === r.current || a || l((e) => e + 1), (r.current = e), s(!1);
        }, [e, a]),
        { key: t, handleInternalChange: n.useCallback((e) => (s(!0), e), []) }
    );
}
function X(e) {
    let { markAsDismissed: t } = e;
    return (0, a.jsx)("div", {
        className: Y.b,
        children: (0, a.jsx)(u.J, {
            size: "sm",
            onClick: () => {
                t?.(B.i.USER_DISMISS), (0, M.Jp)();
            },
        }),
    });
}
function z() {
    return (0, a.jsxs)("div", {
        className: Y.N1,
        children: [
            (0, a.jsx)(m.E, { variant: "text-md/bold", children: W.intl.string($.default.AsmU85) }),
            (0, a.jsx)(d.m, {
                text: W.intl.string(W.t["5AFxuK"]),
                children: (0, a.jsx)(_.t, { size: "custom", height: 20, width: 20, colorClass: Y.oU }),
            }),
            (0, a.jsx)(X, {}),
        ],
    });
}
function q(e) {
    let { markAsDismissed: t, isCoachmark: l } = e;
    return (0, N.JZ)(o.M.CUSTOM_THEME_COACHMARK)
        ? l
            ? (0, a.jsx)(ee, { markAsDismissed: t })
            : (0, a.jsx)(z, {})
        : (0, a.jsx)(ee, { markAsDismissed: () => (0, N.Dr)(o.M.CUSTOM_THEME_COACHMARK) });
}
function ee(e) {
    let { markAsDismissed: t } = e,
        l = (0, O.L)(K.PremiumTypes.TIER_2);
    return (0, a.jsxs)("div", {
        className: Y.CG,
        children: [
            (0, a.jsxs)("div", {
                className: Y.dI,
                children: [
                    (0, a.jsx)(x.D, { variant: "heading-lg/extrabold", children: W.intl.string($.default["23QUzv"]) }),
                    (0, a.jsx)(X, { markAsDismissed: t }),
                ],
            }),
            (0, a.jsx)(m.E, {
                className: Y.VA,
                variant: "text-sm/medium",
                color: "text-muted",
                children: W.intl.string(l ? $.default.TRCE4g : $.default["UV/Vtv"]),
            }),
        ],
    });
}
function et(e) {
    let { gradientAngle: t, setGradientAngle: l } = e,
        { key: s, handleInternalChange: i } = Q(t),
        [o, c] = n.useState(`${Math.round(t)}\xb0`);
    return (
        n.useEffect(() => {
            c(`${Math.round(t)}\xb0`);
        }, [t]),
        (0, a.jsxs)("div", {
            className: r()(Y.xJ, Y.Gz),
            children: [
                (0, a.jsxs)("div", {
                    className: Y.Vt,
                    children: [
                        (0, a.jsx)(m.E, { variant: "text-md/medium", children: W.intl.string($.default.dZkwgx) }),
                        (0, a.jsx)("input", {
                            type: "text",
                            value: o,
                            onChange: (e) =>
                                ((e) => {
                                    let t = e.replace(/°/g, "").trim();
                                    if ("" === t) return void c("");
                                    let a = parseInt(t, 10);
                                    if (isNaN(a)) return;
                                    let n = Math.max(0, Math.min(360, a));
                                    c(`${n}\xb0`), (0, P.l6)(), l(n);
                                })(e.target.value),
                            placeholder: "0\xb0",
                            className: Y.A9,
                        }),
                    ],
                }),
                (0, a.jsxs)("div", {
                    className: Y.Zp,
                    children: [
                        (0, a.jsxs)("div", {
                            className: Y.p1,
                            children: [
                                (0, a.jsx)("div", { className: Y.uu }),
                                (0, a.jsx)("div", { className: Y.uu }),
                                (0, a.jsx)("div", { className: Y.VD }),
                                (0, a.jsx)("div", { className: Y.uu }),
                                (0, a.jsx)("div", { className: Y.uu }),
                            ],
                        }),
                        (0, a.jsx)(
                            g.A,
                            {
                                initialValue: t,
                                defaultValue: 0,
                                minValue: 0,
                                maxValue: 360,
                                fillStyles: { display: "none" },
                                onValueChange: (e) => {
                                    (0, P.PT)();
                                    let t = (function (e) {
                                        for (let t of [90, 180, 270]) if (10 >= Math.abs(e - t)) return t;
                                        return e;
                                    })(e);
                                    t !== e || i(e), l(t);
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
        { key: s, handleInternalChange: r } = Q(t),
        [i, o] = n.useState(`${Math.round(t)}%`);
    return (
        n.useEffect(() => {
            o(`${Math.round(t)}%`);
        }, [t]),
        (0, a.jsxs)("div", {
            className: Y.xJ,
            children: [
                (0, a.jsxs)("div", {
                    className: Y.Vt,
                    children: [
                        (0, a.jsx)(m.E, { variant: "text-md/medium", children: W.intl.string($.default.xlXkaL) }),
                        (0, a.jsx)("input", {
                            type: "text",
                            value: i,
                            onChange: (e) =>
                                ((e) => {
                                    let t = e.replace(/%/g, "").trim();
                                    if ("" === t) return void o("");
                                    let a = parseInt(t, 10);
                                    if (isNaN(a)) return;
                                    let n = Math.max(0, Math.min(100, a));
                                    o(`${n}%`), (0, P.Cq)(), l(n);
                                })(e.target.value),
                            placeholder: `${D.kJ}%`,
                            className: Y.A9,
                        }),
                    ],
                }),
                (0, a.jsx)(
                    g.A,
                    {
                        initialValue: t,
                        defaultValue: D.kJ,
                        minValue: 0,
                        maxValue: 100,
                        onValueChange: (e) => {
                            (0, P.QJ)(), r(e), l(e);
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
function ea(e) {
    let { isCoachmark: t, isMobile: l } = e,
        [s, r] = n.useState(!1),
        i = n.useRef(!1),
        [o, d] = n.useState(!1),
        u = n.useRef(null),
        m = n.useRef(null),
        _ = n.useCallback(() => {
            (0, P.y4)();
            let e = (0, U.mf)();
            D.ko
                .getState()
                .setAll({
                    colors: e.colors,
                    gradientAngle: e.angle ?? D.ko.getState().gradientAngle,
                    chassisMixAmount: e.intensity,
                });
        }, []);
    n.useEffect(() => {
        if (t)
            return (
                (i.current = !1),
                (u.current = setTimeout(() => {
                    i.current || r(!0);
                }, 5e3)),
                () => {
                    null != u.current && clearTimeout(u.current);
                }
            );
    }, [t]);
    let x = n.useCallback(() => {
            i.current = !0;
        }, []),
        g = n.useCallback(() => {
            r(!1);
        }, []),
        A = s && !o,
        p = () =>
            (0, a.jsx)(h.$, {
                buttonRef: m,
                variant: "secondary",
                onClick: _,
                onMouseEnter: () => d(!0),
                onMouseLeave: () => d(!1),
                icon: l
                    ? { type: "icon", asset: E.j }
                    : {
                          type: "rive",
                          asset: f.m,
                          riveProps: { dataBinding: { fill: T.A.colors.ICON_STRONG }, eventTargetRef: m },
                      },
                text: W.intl.string($.default.c9MBEH),
                fullWidth: !0,
            });
    return l
        ? p()
        : (0, a.jsx)(c.u, {
              title: W.intl.string($.default.NJ9m8Y),
              body: W.intl.string($.default["6pabtR"]),
              position: "left",
              asset: A ? (0, a.jsx)(E.j, {}) : void 0,
              forceOpen: s,
              onTooltipShow: x,
              onTooltipHide: g,
              targetElementRef: m,
              children: p(),
          });
}
function en(e) {
    let { onApply: t, disabled: l, fullWidth: n } = e;
    return (0, a.jsx)(d.m, {
        text: W.intl.string($.default.SFyHIP),
        shouldShow: l,
        children: (0, a.jsx)(h.$, {
            variant: "primary",
            onClick: t,
            disabled: l,
            text: W.intl.string(W.t["1Qm822"]),
            fullWidth: n,
        }),
    });
}
function es(e) {
    let { onSaveTheme: t, canApply: l } = e,
        n = (0, O.L)(K.PremiumTypes.TIER_2);
    return (
        (0, P.wb)(n, v.A.CUSTOM_THEMES_EDITOR_COACHMARK),
        (0, a.jsx)("div", {
            className: Y.M0,
            children: n
                ? (0, a.jsx)(en, { disabled: !l, onApply: t, fullWidth: !0 })
                : (0, a.jsx)(j.A, {
                      subscriptionTier: K.pe.TIER_2,
                      buttonTextOverride: W.intl.string(W.t.JST6jl),
                      premiumModalAnalyticsLocation: {
                          page: Z.liQ.PREMIUM_UPSELL_CUSTOM_THEMES,
                          section: Z.JJy.CUSTOM_THEMES_COACHMARK_FOOTER,
                      },
                      fullWidth: !0,
                  }),
        })
    );
}
function er(e) {
    let { onSaveTheme: t, canApply: l, metadata: n } = e,
        s = (0, O.L)(K.PremiumTypes.TIER_2),
        i = (0, H.St)("custom_themes_editor_footer"),
        c = n?.from === M.xv.SHARE_MESSAGE;
    (0, P.wb)(s, v.A.CUSTOM_THEMES_EDITOR);
    let d = () => {
            (0, P.uk)(),
                (0, N.Dr)(o.M.CUSTOM_THEME_COACHMARK),
                n?.from === M.xv.SETTING
                    ? ((0, k.openUserSettings)(R.X.APPEARANCE_THEME_CATEGORY), (0, M.Jp)())
                    : n?.from === M.xv.CLIENT_THEMES_EDITOR
                      ? (0, M.nf)(M.HP.CLIENT_THEMES)
                      : (0, M.Jp)();
        },
        u = r()(Y.xQ, { [Y.NI]: !s }),
        m = (0, a.jsx)(j.A, {
            subscriptionTier: K.pe.TIER_2,
            defaultTextOverride: W.intl.string(W.t.pj0XBN),
            premiumModalAnalyticsLocation: {
                page: Z.liQ.PREMIUM_UPSELL_CUSTOM_THEMES,
                section: Z.JJy.CUSTOM_THEMES_FOOTER,
            },
            fullWidth: !0,
        });
    return (0, a.jsx)("div", {
        className: u,
        children: s
            ? (0, a.jsxs)(a.Fragment, {
                  children: [
                      (0, a.jsx)(V.w, {}),
                      (0, a.jsx)(h.$, { variant: "secondary", onClick: d, text: W.intl.string(W.t["13/7kX"]) }),
                      (0, a.jsx)(en, {
                          disabled: !l,
                          onApply: () => {
                              c && y.default.track(Z.HAw.CUSTOM_THEME_SHARE_APPLIED, {}), t();
                          },
                      }),
                  ],
              })
            : (0, a.jsxs)(a.Fragment, {
                  children: [
                      i
                          ? (0, a.jsxs)("div", {
                                className: Y.rV,
                                children: [
                                    (0, a.jsx)(I.l, {
                                        size: "md",
                                        className: Y.Tf,
                                        location: v.A.PREMIUM_WISHLIST_CUSTOM_THEMES_EDITOR,
                                    }),
                                    m,
                                ],
                            })
                          : m,
                      (0, a.jsx)(h.$, {
                          variant: "secondary",
                          onClick: d,
                          text: c ? W.intl.string(W.t["13/7kX"]) : W.intl.string(W.t.Olc2K3),
                          fullWidth: !0,
                      }),
                  ],
              }),
    });
}
function ei(e) {
    let { metadata: t, markAsDismissed: l, isCoachmark: s, isMobile: r } = e,
        c = (0, L.vC)(),
        d = (0, L.tr)(),
        u = n.useRef(!1),
        {
            colors: _,
            chassisMixAmount: x,
            gradientAngle: g,
            setColors: E,
            setChassisMixAmount: f,
            setGradientAngle: T,
        } = (0, D.ko)(),
        [j, O] = n.useState(_[0] ?? D.OT),
        I = (0, i.bG)([b.A], () => b.A.theme),
        R = (0, N.JZ)(o.M.CUSTOM_THEME_ENTRYPOINT_GRADIENT),
        { analyticsLocations: k } = (0, S.Ay)(v.A.CUSTOM_THEMES_EDITOR),
        H = (0, i.bG)([J.A], () => J.A.getSavedCustomTheme()),
        y = async () => {
            (u.current = !0),
                await (0, p.u_)({
                    theme: I,
                    customUserThemeSettings: { colors: _, gradientColorStops: [], gradientAngle: g, baseMix: x },
                }),
                (0, P.Yl)(_, x, g, I, k),
                l?.(B.i.TAKE_ACTION),
                R || (0, N.Dr)(o.M.CUSTOM_THEME_ENTRYPOINT_GRADIENT),
                (0, M.Jp)(),
                (0, w.XG)();
        },
        U = _.length > 0;
    return (
        n.useEffect(
            () => () => {
                u.current || c(L.JB.EDITOR_CLOSE);
            },
            [c],
        ),
        (0, C.Ay)(() => {
            if (!s) {
                let e = (_?.length ?? 0) > 0,
                    t = null != H;
                !e && t
                    ? (D.ko
                          .getState()
                          .setAll({ colors: H.colors, gradientAngle: H.gradient_angle, chassisMixAmount: H.base_mix }),
                      (0, L.IE)(H.base_theme))
                    : (0, L.$Y)(_, j, E);
            }
        }),
        (0, a.jsxs)("div", {
            className: r ? Y.AA : Y.kL,
            "data-app-right-panel": !r,
            children: [
                (0, a.jsx)(A.Ip, {
                    children: (0, a.jsxs)("div", {
                        className: Y.sV,
                        children: [
                            (0, a.jsx)(q, { markAsDismissed: l, isCoachmark: s }),
                            (0, a.jsxs)("div", {
                                className: Y.uW,
                                children: [
                                    (0, a.jsx)(m.E, {
                                        variant: "text-sm/semibold",
                                        color: "text-subtle",
                                        children: W.intl.string($.default.o2NfLF),
                                    }),
                                    (0, a.jsx)(F.F, {}),
                                ],
                            }),
                            (0, a.jsxs)("div", {
                                className: Y.uW,
                                children: [
                                    (0, a.jsx)(m.E, {
                                        variant: "text-sm/semibold",
                                        color: "text-subtle",
                                        children: W.intl.string($.default.uSL2Gy),
                                    }),
                                    (0, a.jsx)(G.e, {
                                        onChange: (e) => {
                                            O(e), 0 === _.length && (0, L.$Y)(_, e, E);
                                        },
                                        value: j,
                                        colors: _,
                                        setColors: E,
                                    }),
                                ],
                            }),
                            (0, a.jsxs)("div", {
                                className: Y.uW,
                                children: [
                                    (0, a.jsx)(m.E, {
                                        variant: "text-sm/semibold",
                                        color: "text-subtle",
                                        children: W.intl.string($.default.F1t0c8),
                                    }),
                                    _.length > 1 && (0, a.jsx)(et, { gradientAngle: g, setGradientAngle: T }),
                                    (0, a.jsx)(el, {
                                        chassisMixAmount: x,
                                        setChassisMixAmount: (e) => {
                                            f(e), 0 === _.length && (0, L.$Y)(_, j, E);
                                        },
                                    }),
                                ],
                            }),
                            (0, a.jsxs)("div", {
                                className: Y.WA,
                                children: [
                                    (0, a.jsx)(ea, { isCoachmark: s, isMobile: r }),
                                    (0, a.jsx)(h.$, {
                                        variant: "secondary",
                                        onClick: () => {
                                            c(L.JB.RESET_BUTTON), (0, P.G_)();
                                        },
                                        disabled: d,
                                        text: W.intl.string(W.t.yBZMsQ),
                                        fullWidth: !0,
                                    }),
                                ],
                            }),
                        ],
                    }),
                }),
                s
                    ? (0, a.jsx)(es, { onSaveTheme: y, canApply: U })
                    : (0, a.jsx)(er, { onSaveTheme: y, canApply: U, metadata: t }),
            ],
        })
    );
}
