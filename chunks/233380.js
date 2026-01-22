n.d(t, { A: () => ee }), n(896048), n(747238), n(812715), n(733351);
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(311907),
    l = n(554146),
    c = n(459192),
    u = n(990078),
    d = n(732955),
    f = n(397927),
    p = n(817281),
    _ = n(964486),
    h = n(793574),
    m = n(688810),
    g = n(793943),
    E = n(826673),
    b = n(792656),
    y = n(757036),
    O = n(973654),
    A = n(544028),
    v = n(780964),
    S = n(840065),
    I = n(954571),
    T = n(467135),
    C = n(935444),
    N = n(230835),
    R = n(74396),
    w = n(738419),
    P = n(145272),
    D = n(572047),
    x = n(278938),
    L = n(652215),
    j = n(49999),
    M = n(788868),
    k = n(520650),
    U = n(985018),
    G = n(152290);
let V = 0,
    F = 5000;
function B(e) {
    let [t, n] = i.useState(0),
        [r, a] = i.useState(!1),
        s = i.useRef(e);
    return (
        i.useEffect(() => {
            e === s.current || r || n((e) => e + 1), (s.current = e), a(!1);
        }, [e, r]),
        {
            key: t,
            handleInternalChange: i.useCallback((e) => (a(!0), e), []),
        }
    );
}
function H(e) {
    let { markAsDismissed: t } = e;
    return (0, r.jsx)("div", {
        className: G.b,
        children: (0, r.jsx)(d.JnF, {
            size: "sm",
            onClick: () => {
                null == t || t(j.i.USER_DISMISS), (0, g.Jp)();
            },
        }),
    });
}
function Y() {
    return (0, r.jsxs)("div", {
        className: G.N1,
        children: [
            (0, r.jsx)(f.Text, {
                variant: "text-md/bold",
                children: U.intl.string(k.default.AsmU85),
            }),
            (0, r.jsx)(u.m, {
                text: U.intl.string(U.t["5AFxuK"]),
                children: (0, r.jsx)(f.tvc, {
                    size: "custom",
                    height: 20,
                    width: 20,
                    colorClass: G.oU,
                }),
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
        n = (0, y.L)(M.PremiumTypes.TIER_2);
    return (0, r.jsxs)("div", {
        className: G.CG,
        children: [
            (0, r.jsxs)("div", {
                className: G.dI,
                children: [
                    (0, r.jsx)(f.Heading, {
                        variant: "heading-lg/extrabold",
                        children: U.intl.string(k.default["23QUzv"]),
                    }),
                    (0, r.jsx)(H, { markAsDismissed: t }),
                ],
            }),
            (0, r.jsx)(f.Text, {
                className: G.VA,
                variant: "text-sm/medium",
                color: "text-muted",
                children: U.intl.string(n ? k.default.TRCE4g : k.default["UV/Vtv"]),
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
        { key: a, handleInternalChange: o } = B(t),
        [l, c] = i.useState("".concat(Math.round(t), "\xB0"));
    i.useEffect(() => {
        c("".concat(Math.round(t), "\xB0"));
    }, [t]);
    let u = (e) => {
        let t = e.replace(/°/g, "").trim();
        if ("" === t) return void c("");
        let r = parseInt(t, 10);
        if (isNaN(r)) return;
        let i = Math.max(0, Math.min(360, r));
        c("".concat(i, "\xB0")), (0, w.l6)(), n(i);
    };
    return (0, r.jsxs)("div", {
        className: s()(G.xJ, G.Gz),
        children: [
            (0, r.jsxs)("div", {
                className: G.Vt,
                children: [
                    (0, r.jsx)(f.Text, {
                        variant: "text-md/medium",
                        children: U.intl.string(k.default.dZkwgx),
                    }),
                    (0, r.jsx)("input", {
                        type: "text",
                        value: l,
                        onChange: (e) => u(e.target.value),
                        placeholder: "".concat(V, "\xB0"),
                        className: G.A9,
                    }),
                ],
            }),
            (0, r.jsxs)("div", {
                className: G.Zp,
                children: [
                    (0, r.jsxs)("div", {
                        className: G.p1,
                        children: [
                            (0, r.jsx)("div", { className: G.uu }),
                            (0, r.jsx)("div", { className: G.uu }),
                            (0, r.jsx)("div", { className: G.VD }),
                            (0, r.jsx)("div", { className: G.uu }),
                            (0, r.jsx)("div", { className: G.uu }),
                        ],
                    }),
                    (0, r.jsx)(
                        f.Apm,
                        {
                            initialValue: t,
                            defaultValue: 0,
                            minValue: 0,
                            maxValue: 360,
                            onValueChange: (e) => {
                                (0, w.PT)();
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
        { key: a, handleInternalChange: s } = B(t),
        [o, l] = i.useState("".concat(Math.round(t), "%"));
    i.useEffect(() => {
        l("".concat(Math.round(t), "%"));
    }, [t]);
    let c = (e) => {
        let t = e.replace(/%/g, "").trim();
        if ("" === t) return void l("");
        let r = parseInt(t, 10);
        if (isNaN(r)) return;
        let i = Math.max(0, Math.min(100, r));
        l("".concat(i, "%")), (0, w.Cq)(), n(i);
    };
    return (0, r.jsxs)("div", {
        className: G.xJ,
        children: [
            (0, r.jsxs)("div", {
                className: G.Vt,
                children: [
                    (0, r.jsx)(f.Text, {
                        variant: "text-md/medium",
                        children: U.intl.string(k.default.xlXkaL),
                    }),
                    (0, r.jsx)("input", {
                        type: "text",
                        value: o,
                        onChange: (e) => c(e.target.value),
                        placeholder: "".concat(T.kJ, "%"),
                        className: G.A9,
                    }),
                ],
            }),
            (0, r.jsx)(
                f.Apm,
                {
                    initialValue: t,
                    defaultValue: T.kJ,
                    minValue: 0,
                    maxValue: 100,
                    onValueChange: (e) => {
                        (0, w.QJ)(), s(e), n(e);
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
        [l, u] = i.useState(!1),
        p = i.useRef(null),
        _ = i.useRef(null),
        h = i.useCallback(() => {
            var e;
            (0, w.y4)();
            let t = (0, C.mf)();
            T.ko.getState().setAll({
                colors: t.colors,
                gradientAngle: null != (e = t.angle) ? e : T.ko.getState().gradientAngle,
                chassisMixAmount: t.intensity,
            });
        }, []);
    i.useEffect(() => {
        if (t)
            return (
                (o.current = !1),
                (p.current = setTimeout(() => {
                    o.current || s(!0);
                }, F)),
                () => {
                    null != p.current && clearTimeout(p.current);
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
        b = () =>
            (0, r.jsx)(d.$nd, {
                buttonRef: _,
                variant: "secondary",
                onClick: h,
                onMouseEnter: () => u(!0),
                onMouseLeave: () => u(!1),
                icon: n
                    ? {
                          type: "icon",
                          asset: f.jGc,
                      }
                    : {
                          type: "rive",
                          asset: f.mdx,
                          riveProps: {
                              dataBinding: { fill: f.LU0.colors.ICON_STRONG },
                              eventTargetRef: _,
                          },
                      },
                text: U.intl.string(k.default.c9MBEH),
                fullWidth: !0,
            });
    return n
        ? b()
        : (0, r.jsx)(c.u, {
              title: U.intl.string(k.default.NJ9m8Y),
              body: U.intl.string(k.default["6pabtR"]),
              position: "left",
              asset: E ? (0, r.jsx)(f.jGc, {}) : void 0,
              forceOpen: a,
              onTooltipShow: m,
              onTooltipHide: g,
              targetElementRef: _,
              children: b(),
          });
}
function Q(e) {
    let { onApply: t, disabled: n, fullWidth: i } = e;
    return (0, r.jsx)(u.m, {
        text: U.intl.string(k.default.SFyHIP),
        shouldShow: n,
        children: (0, r.jsx)(d.$nd, {
            variant: "primary",
            onClick: t,
            disabled: n,
            text: U.intl.string(U.t["1Qm822"]),
            fullWidth: i,
        }),
    });
}
function $(e) {
    let { onSaveTheme: t, canApply: n } = e,
        i = (0, y.L)(M.PremiumTypes.TIER_2);
    return (
        (0, w.wb)(i, h.A.CUSTOM_THEMES_EDITOR_COACHMARK),
        (0, r.jsx)("div", {
            className: G.M0,
            children: i
                ? (0, r.jsx)(Q, {
                      disabled: !n,
                      onApply: t,
                      fullWidth: !0,
                  })
                : (0, r.jsx)(b.A, {
                      subscriptionTier: M.pe.TIER_2,
                      buttonTextOverride: U.intl.string(U.t.JST6jl),
                      premiumModalAnalyticsLocation: {
                          page: L.liQ.PREMIUM_UPSELL_CUSTOM_THEMES,
                          section: L.JJy.CUSTOM_THEMES_COACHMARK_FOOTER,
                      },
                      fullWidth: !0,
                  }),
        })
    );
}
function J(e) {
    var t;
    let { onSaveTheme: n, canApply: i, metadata: a } = e,
        o = (0, y.L)(M.PremiumTypes.TIER_2),
        c = (null == (t = (0, g.fy)().metadata) ? void 0 : t.from) === g.xv.SHARE_MESSAGE;
    (0, w.wb)(o, h.A.CUSTOM_THEMES_EDITOR);
    let u = () => {
            (0, w.uk)(),
                (0, E.Dr)(l.M.CUSTOM_THEME_COACHMARK),
                (null == a ? void 0 : a.from) === g.xv.SETTING
                    ? ((0, S.openUserSettings)(v.X.APPEARANCE_PANEL, { section: L.nc_.APPEARANCE }), (0, g.Jp)())
                    : (null == a ? void 0 : a.from) === g.xv.CLIENT_THEMES_EDITOR
                      ? (0, g.nf)(g.HP.CLIENT_THEMES)
                      : (0, g.Jp)();
        },
        f = s()(G.xQ, { [G.NI]: !o });
    return (0, r.jsx)("div", {
        className: f,
        children: o
            ? (0, r.jsxs)(r.Fragment, {
                  children: [
                      (0, r.jsx)(D.w, {}),
                      (0, r.jsx)(d.$nd, {
                          variant: "secondary",
                          onClick: u,
                          text: U.intl.string(U.t["13/7kX"]),
                      }),
                      (0, r.jsx)(Q, {
                          disabled: !i,
                          onApply: () => {
                              c && I.default.track(L.HAw.CUSTOM_THEME_SHARE_APPLIED, {}), n();
                          },
                      }),
                  ],
              })
            : (0, r.jsxs)(r.Fragment, {
                  children: [
                      (0, r.jsx)(b.A, {
                          subscriptionTier: M.pe.TIER_2,
                          defaultTextOverride: U.intl.string(U.t.pj0XBN),
                          premiumModalAnalyticsLocation: {
                              page: L.liQ.PREMIUM_UPSELL_CUSTOM_THEMES,
                              section: L.JJy.CUSTOM_THEMES_FOOTER,
                          },
                          fullWidth: !0,
                      }),
                      (0, r.jsx)(d.$nd, {
                          variant: "secondary",
                          onClick: u,
                          text: c ? U.intl.string(U.t["13/7kX"]) : U.intl.string(U.t.Olc2K3),
                          fullWidth: !0,
                      }),
                  ],
              }),
    });
}
function ee(e) {
    var t;
    let { metadata: n, markAsDismissed: a, isCoachmark: s, isMobile: c } = e,
        u = (0, N.vC)(),
        b = (0, N.tr)(),
        y = i.useRef(!1),
        {
            colors: v,
            chassisMixAmount: S,
            gradientAngle: I,
            setColors: C,
            setChassisMixAmount: D,
            setGradientAngle: L,
        } = (0, T.ko)(),
        [M, V] = i.useState(null != (t = v[0]) ? t : T.OT),
        F = (0, o.bG)([A.A], () => A.A.theme),
        B = (0, E.JZ)(l.M.CUSTOM_THEME_ENTRYPOINT_GRADIENT),
        { analyticsLocations: H } = (0, m.Ay)(h.A.CUSTOM_THEMES_EDITOR),
        Y = (0, o.bG)([R.A], () => R.A.getSavedCustomTheme()),
        K = async () => {
            (y.current = !0),
                await (0, p.u_)({
                    theme: F,
                    customUserThemeSettings: {
                        colors: v,
                        gradientColorStops: [],
                        gradientAngle: I,
                        baseMix: S,
                    },
                }),
                (0, w.Yl)(v, S, I, F, H),
                null == a || a(j.i.TAKE_ACTION),
                B || (0, E.Dr)(l.M.CUSTOM_THEME_ENTRYPOINT_GRADIENT),
                (0, g.Jp)(),
                (0, O.XG)();
        },
        z = () => {
            u(N.JB.RESET_BUTTON), (0, w.G_)();
        },
        Q = v.length > 0;
    return (
        i.useEffect(
            () => () => {
                y.current || u(N.JB.EDITOR_CLOSE);
            },
            [u],
        ),
        (0, _.Ay)(() => {
            if (!s) {
                var e;
                let t = (null != (e = null == v ? void 0 : v.length) ? e : 0) > 0,
                    n = null != Y;
                !t && n
                    ? (T.ko.getState().setAll({
                          colors: Y.colors,
                          gradientAngle: Y.gradient_angle,
                          chassisMixAmount: Y.base_mix,
                      }),
                      (0, N.IE)(Y.base_theme))
                    : (0, N.$Y)(v, M, C);
            }
        }),
        (0, r.jsxs)("div", {
            className: c ? G.AA : G.kL,
            "data-app-right-panel": !c,
            children: [
                (0, r.jsx)(f.HOs, {
                    children: (0, r.jsxs)("div", {
                        className: G.sV,
                        children: [
                            (0, r.jsx)(W, {
                                markAsDismissed: a,
                                isCoachmark: s,
                            }),
                            (0, r.jsxs)("div", {
                                className: G.uW,
                                children: [
                                    (0, r.jsx)(f.Text, {
                                        variant: "text-sm/semibold",
                                        color: "text-subtle",
                                        children: U.intl.string(k.default.o2NfLF),
                                    }),
                                    (0, r.jsx)(x.F, {}),
                                ],
                            }),
                            (0, r.jsxs)("div", {
                                className: G.uW,
                                children: [
                                    (0, r.jsx)(f.Text, {
                                        variant: "text-sm/semibold",
                                        color: "text-subtle",
                                        children: U.intl.string(k.default.uSL2Gy),
                                    }),
                                    (0, r.jsx)(P.e, {
                                        onChange: (e) => {
                                            V(e), 0 === v.length && (0, N.$Y)(v, e, C);
                                        },
                                        value: M,
                                        colors: v,
                                        setColors: C,
                                    }),
                                ],
                            }),
                            (0, r.jsxs)("div", {
                                className: G.uW,
                                children: [
                                    (0, r.jsx)(f.Text, {
                                        variant: "text-sm/semibold",
                                        color: "text-subtle",
                                        children: U.intl.string(k.default.F1t0c8),
                                    }),
                                    v.length > 1 &&
                                        (0, r.jsx)(q, {
                                            gradientAngle: I,
                                            setGradientAngle: L,
                                        }),
                                    (0, r.jsx)(X, {
                                        chassisMixAmount: S,
                                        setChassisMixAmount: (e) => {
                                            D(e), 0 === v.length && (0, N.$Y)(v, M, C);
                                        },
                                    }),
                                ],
                            }),
                            (0, r.jsxs)("div", {
                                className: G.WA,
                                children: [
                                    (0, r.jsx)(Z, {
                                        isCoachmark: s,
                                        isMobile: c,
                                    }),
                                    (0, r.jsx)(d.$nd, {
                                        variant: "secondary",
                                        onClick: z,
                                        disabled: b,
                                        text: U.intl.string(U.t.yBZMsQ),
                                        fullWidth: !0,
                                    }),
                                ],
                            }),
                        ],
                    }),
                }),
                s
                    ? (0, r.jsx)($, {
                          onSaveTheme: K,
                          canApply: Q,
                      })
                    : (0, r.jsx)(J, {
                          onSaveTheme: K,
                          canApply: Q,
                          metadata: n,
                      }),
            ],
        })
    );
}
