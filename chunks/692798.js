"use strict";
n.d(t, { Ay: () => Q, X8: () => H, Zg: () => $, ew: () => K, t6: () => q, v0: () => V }), n(801541);
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(889137),
    l = n(311907),
    u = n(873298),
    c = n(421380),
    d = n(397927),
    _ = n(817281),
    f = n(775602),
    h = n(793574),
    p = n(688810),
    g = n(793943),
    E = n(915089),
    A = n(87719),
    I = n(234419),
    T = n(811611),
    y = n(450232),
    S = n(544028),
    v = n(964404),
    C = n(253932),
    b = n(12901),
    N = n(954571),
    R = n(823459),
    O = n(47671),
    D = n(323618),
    L = n(653523),
    w = n(385803),
    x = n(652215),
    P = n(788868),
    M = n(185928),
    k = n(355097),
    U = n(818348),
    G = n(985018),
    F = n(176240),
    V = (function (e) {
        return (e.EDITOR = "EDITOR"), (e.SETTINGS = "SETTINGS"), e;
    })({});
let B = Object.freeze({ EDITOR: k.Sb.SLOW_USER_ACTION, SETTINGS: k.Sb.INFREQUENT_USER_ACTION }),
    j = i.createContext({}),
    H = (e) => {
        let { isPersisted: t, themeName: n, analyticsLocations: r } = e;
        N.default.track(x.HAw.CLIENT_THEME_UPDATED, {
            feature_name: P.Ae.CLIENT_THEME,
            theme_name: n,
            is_persisted: t,
            location_stack: r,
        });
    },
    Y = (e) => {
        let {
                type: t,
                isPreview: n,
                isCoachmark: i,
                textClassName: a,
                iconClassName: l,
                textVariant: u = "text-md/medium",
            } = e,
            c = (0, o.YW)({ type: t, isPreview: n, isCoachmark: i })
                .with({ type: "EDITOR", isCoachmark: !0, isPreview: !0 }, () => G.intl.string(G.t.D29k16))
                .with({ type: "EDITOR", isCoachmark: !0 }, () => G.intl.string(G.t["8+vbqd"]))
                .otherwise(() => G.intl.string(G.t.hjV0fZ));
        return (0, r.jsxs)("div", {
            className: F.DD,
            children: [
                (0, r.jsx)(d.Heading, { "aria-label": c, className: s()(F.Qw, a), variant: u, children: c }),
                (0, r.jsx)(y.A, { className: s()(F.PC, l) }),
            ],
        });
    },
    W = (e) => {
        let { type: t, isPreview: n, isCoachmark: i } = e;
        if ((0, I.V)()?.subscription_trial?.sku_id === P.pe.TIER_2 && n) return null;
        let a = (0, o.YW)({ type: t, isPreview: n, isCoachmark: i })
            .with({ type: "EDITOR", isPreview: !0 }, () => G.intl.format(G.t.G8yQXi, { onPremiumClick: () => A.e }))
            .with({ type: "EDITOR", isCoachmark: !0 }, () => G.intl.string(G.t.jmZiNu))
            .with({ type: "EDITOR", isPreview: !1 }, () => G.intl.string(G.t.dqDFwe))
            .with({ isPreview: !0 }, () => G.intl.format(G.t["DWIjJ/"], { onPremiumClick: () => A.e }))
            .otherwise(() => G.intl.string(G.t["np0X/u"]));
        return (0, r.jsx)(d.Heading, { variant: "text-sm/normal", className: F.W$, children: a });
    },
    K = (e) => {
        let {
                renderCTAButtons: t,
                isCoachmark: n,
                titleTextVariant: a,
                headingClassName: o,
                titleClassName: u,
                titleIconClassName: c,
            } = e,
            { type: d } = i.useContext(j),
            [_] = (0, l.yK)([O.A], () => [O.A.isPreview]),
            f = (0, I.V)()?.subscription_trial?.sku_id === P.pe.TIER_2;
        return "EDITOR" === d && _ && f
            ? (0, r.jsx)(T.Ay, {
                  type: P.e.PREMIUM_CLIENT_THEME_TRY_IT_OUT,
                  subscriptionTier: P.pe.TIER_2,
                  children: G.intl.format(G.t.G8yQXi, { onPremiumClick: () => A.e }),
              })
            : (0, r.jsxs)("div", {
                  className: F.wx,
                  children: [
                      (0, r.jsxs)("div", {
                          className: s()(F.so, o),
                          children: [
                              (0, r.jsx)(Y, {
                                  type: d,
                                  isPreview: _,
                                  isCoachmark: n,
                                  textVariant: a,
                                  textClassName: u,
                                  iconClassName: c,
                              }),
                              (0, r.jsx)(W, { type: d, isPreview: _, isCoachmark: n }),
                          ],
                      }),
                      t?.(),
                  ],
              });
    },
    $ = (e) => {
        let { disabled: t } = e,
            { type: a, delay: s } = i.useContext(j),
            { analyticsLocations: o } = (0, p.Ay)(h.A.CLIENT_THEMES_THEME_SELECTOR),
            [c, E] = (0, l.yK)([O.A], () => [O.A.isPreview, O.A.gradientPreset?.id]),
            [A, I] = i.useState(!1),
            [T, y] = i.useState(-1),
            S = (0, l.bG)([f.A], () => f.A.useReducedMotion);
        i.useEffect(() => {
            ((T === w.Jm.length - 2 && "EDITOR" === a) || E === u.ju.EASTER_EGG) && I(!0);
        }, [T, a, E]);
        let v = (e, t) => {
                if (
                    ((0, R.bc)(e.id),
                    H({ isPersisted: !c, analyticsLocations: o, themeName: u.ju[e.id] }),
                    c && "SETTINGS" === a
                        ? C(e)
                        : (0, _.u_)(
                              {
                                  backgroundGradientPresetId: e.id,
                                  theme: e.theme,
                                  useSystemTheme: c ? M.Q_.OFF : void 0,
                              },
                              s,
                          ),
                    null != t)
                ) {
                    if ((A && I(!1), t <= T || 0 === t)) return void y(0);
                    y((e) => e + 1);
                }
            },
            C = async (e) => {
                await (0, _.u_)(
                    { backgroundGradientPresetId: e.id, theme: e.theme, useSystemTheme: c ? M.Q_.OFF : void 0 },
                    k.Sb.SLOW_USER_ACTION,
                ),
                    (0, g.nf)(g.HP.CLIENT_THEMES),
                    (0, b.default)();
            },
            N = () => {
                if (!A) return null;
                let e = w.ag[u.ju.EASTER_EGG];
                if (null == e) return null;
                async function t() {
                    let { default: e } = await n.e("3408").then(n.t.bind(n, 707827, 19));
                    return e;
                }
                return (0, r.jsxs)("div", {
                    className: F.kG,
                    children: [
                        (0, r.jsx)(L.MX, { preset: e, isSelected: E === u.ju.EASTER_EGG, onSelect: () => v(e) }),
                        (0, r.jsx)(d.akl, { importData: t, shouldAnimate: !S, className: F._7 }),
                    ],
                });
            };
        return (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(D.A, {
                    isDisabled: t,
                    onSelect: () => {
                        (0, g.nf)(g.HP.CUSTOM_THEME, {
                            from: "SETTINGS" === a ? g.xv.SETTING : g.xv.CLIENT_THEMES_EDITOR,
                        }),
                            "SETTINGS" === a && (0, b.default)();
                    },
                }),
                w.Jm.filter((e) => {
                    let { id: t } = e;
                    return t !== u.ju.EASTER_EGG;
                }).map((e, n) =>
                    (0, r.jsx)(
                        L.MX,
                        {
                            preset: e,
                            isSelected: E === e.id,
                            onSelect: () => v(e, n),
                            disabled: t,
                            tabIndex: 0 !== n || t ? void 0 : 0,
                            showBadge: !1,
                            showLockedBadge: !1,
                        },
                        e.id,
                    ),
                ),
                N(),
            ],
        });
    },
    z = (e) => {
        let { className: t, renderCTAButtons: n, disabled: i = !1, isCoachmark: a } = e;
        return (0, r.jsxs)("section", {
            className: t,
            children: [
                (0, r.jsx)(K, { renderCTAButtons: n, isCoachmark: a }),
                (0, r.jsx)(d.BJc, {
                    direction: "horizontal",
                    wrap: !0,
                    gap: 8,
                    style: { marginTop: 16 },
                    children: (0, r.jsx)($, { disabled: i }),
                }),
            ],
        });
    },
    q = (e) => {
        let { systemSelectorFirst: t, hideSystemSelector: n = !1 } = e,
            { delay: a } = i.useContext(j),
            { analyticsLocations: s } = (0, p.Ay)(h.A.CLIENT_THEMES_THEME_SELECTOR),
            [o, u, c] = (0, l.yK)([S.A, v.Ay, O.A], () => [
                S.A.theme,
                null == O.A.gradientPreset && null == C.eh.getSetting().customUserThemeSettings,
                v.Ay.useSystemTheme === M.Q_.ON,
            ]),
            d = (e) => {
                (0, R.Py)(),
                    H({ isPersisted: !0, analyticsLocations: s, themeName: `default ${e}` }),
                    (0, _.u_)({ theme: e }, a);
            };
        return (0, r.jsxs)(r.Fragment, {
            children: [
                !n && t && (0, r.jsx)(L.zy, { theme: "system", isSelected: u && c, onSelect: () => d("system") }),
                (0, r.jsx)(L.zy, {
                    theme: U.NJ.LIGHT,
                    isSelected: u && !c && o === U.NJ.LIGHT,
                    onSelect: () => d(U.NJ.LIGHT),
                }),
                (0, r.jsx)(L.zy, {
                    theme: U.NJ.DARK,
                    isSelected: u && !c && o === U.NJ.DARK,
                    onSelect: () => d(U.NJ.DARK),
                }),
                (0, r.jsx)(L.zy, {
                    theme: U.NJ.DARKER,
                    isSelected: u && !c && o === U.NJ.DARKER,
                    onSelect: () => d(U.NJ.DARKER),
                }),
                (0, r.jsx)(L.zy, {
                    theme: U.NJ.MIDNIGHT,
                    isSelected: u && !c && o === U.NJ.MIDNIGHT,
                    onSelect: () => d(U.NJ.MIDNIGHT),
                }),
                !n && !t && (0, r.jsx)(L.zy, { theme: "system", isSelected: u && c, onSelect: () => d("system") }),
            ],
        });
    },
    X = (e) => {
        let { isEditor: t, className: n, renderCTAButtons: i, isCoachmark: a } = e;
        return (0, r.jsxs)("section", {
            className: n,
            children: [
                !t && (0, r.jsx)(K, { renderCTAButtons: i, isCoachmark: a }),
                t &&
                    a &&
                    (0, r.jsx)(d.Heading, {
                        className: F.tD,
                        variant: "heading-sm/semibold",
                        children: G.intl.string(G.t.POSLGY),
                    }),
                (0, r.jsxs)(d.BJc, {
                    direction: "horizontal",
                    wrap: !0,
                    gap: 8,
                    justify: t ? "center" : "start",
                    style: { marginTop: 16 },
                    children: [(0, r.jsx)(q, { systemSelectorFirst: !0 }), (0, r.jsx)($, { disabled: !1 })],
                }),
            ],
        });
    },
    Z = (e) => {
        let { type: t, children: n } = e,
            a = (0, E.GV)(),
            { ref: s, ...o } = (0, c._u)({ orientation: "horizontal", labelledBy: a }),
            l = i.useMemo(() => ({ type: t, delay: B[t] }), [t]);
        return (0, r.jsx)(j.Provider, {
            value: l,
            children: (0, r.jsx)("div", { ref: s, ...o, className: F.__invalid_container, children: n }),
        });
    };
(Z.Basic = (e) => {
    let { className: t, hideSystemSelector: n } = e;
    return (0, r.jsx)("section", {
        className: t,
        children: (0, r.jsx)(d.BJc, {
            direction: "horizontal",
            wrap: !0,
            gap: 8,
            style: { marginTop: 16 },
            children: (0, r.jsx)(q, { hideSystemSelector: n }),
        }),
    });
}),
    (Z.Gradient = z),
    (Z.BasicAndGradient = X);
let Q = Z;
