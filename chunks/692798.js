"use strict";
n.d(t, { Ay: () => J, X8: () => j, Zg: () => q, ew: () => z, t6: () => X, v0: () => H }), n(801541);
var r,
    i = n(627968),
    s = n(64700),
    a = n(503698),
    o = n.n(a),
    l = n(889137),
    u = n(311907),
    d = n(873298),
    c = n(785007),
    _ = n(534514),
    f = n(604121),
    E = n(331322),
    h = n(817281),
    p = n(775602),
    m = n(793574),
    g = n(688810),
    A = n(793943),
    I = n(915089),
    T = n(87719),
    S = n(234419),
    y = n(811611),
    N = n(450232),
    O = n(544028),
    R = n(964404),
    v = n(253932),
    C = n(779733),
    b = n(954571),
    D = n(823459),
    L = n(47671),
    w = n(323618),
    M = n(653523),
    P = n(385803),
    U = n(652215),
    k = n(788868),
    x = n(185928),
    G = n(355097),
    V = n(818348),
    F = n(985018),
    B = n(702709),
    H = (((r = {}).EDITOR = "EDITOR"), (r.SETTINGS = "SETTINGS"), r);
let Y = Object.freeze({ EDITOR: G.Sb.SLOW_USER_ACTION, SETTINGS: G.Sb.INFREQUENT_USER_ACTION }),
    W = s.createContext({}),
    j = (e) => {
        let { isPersisted: t, themeName: n, analyticsLocations: r } = e;
        b.default.track(U.HAw.CLIENT_THEME_UPDATED, {
            feature_name: k.Ae.CLIENT_THEME,
            theme_name: n,
            is_persisted: t,
            location_stack: r,
        });
    },
    K = (e) => {
        let {
                type: t,
                isPreview: n,
                isCoachmark: r,
                textClassName: s,
                iconClassName: a,
                textVariant: u = "text-md/medium",
            } = e,
            d = (0, l.YW)({ type: t, isPreview: n, isCoachmark: r })
                .with({ type: "EDITOR", isCoachmark: !0, isPreview: !0 }, () => F.intl.string(F.t.D29k16))
                .with({ type: "EDITOR", isCoachmark: !0 }, () => F.intl.string(F.t["8+vbqd"]))
                .otherwise(() => F.intl.string(F.t.hjV0fZ));
        return (0, i.jsxs)("div", {
            className: B.DD,
            children: [
                (0, i.jsx)(_.D, { "aria-label": d, className: o()(B.Qw, s), variant: u, children: d }),
                (0, i.jsx)(N.A, { className: o()(B.PC, a), size: "xs" }),
            ],
        });
    },
    $ = (e) => {
        let { type: t, isPreview: n, isCoachmark: r } = e;
        if ((0, S.V)()?.subscription_trial?.sku_id === k.pe.TIER_2 && n) return null;
        let s = (0, l.YW)({ type: t, isPreview: n, isCoachmark: r })
            .with({ type: "EDITOR", isPreview: !0 }, () => F.intl.format(F.t.G8yQXi, { onPremiumClick: T.e }))
            .with({ type: "EDITOR", isCoachmark: !0 }, () => F.intl.string(F.t.jmZiNu))
            .with({ type: "EDITOR", isPreview: !1 }, () => F.intl.string(F.t.dqDFwe))
            .with({ isPreview: !0 }, () => F.intl.format(F.t["DWIjJ/"], { onPremiumClick: T.e }))
            .otherwise(() => F.intl.string(F.t["np0X/u"]));
        return (0, i.jsx)(_.D, { variant: "text-sm/normal", className: B.W$, children: s });
    },
    z = (e) => {
        let {
                renderCTAButtons: t,
                isCoachmark: n,
                titleTextVariant: r,
                headingClassName: a,
                titleClassName: l,
                titleIconClassName: d,
            } = e,
            { type: c } = s.useContext(W),
            [_] = (0, u.yK)([L.A], () => [L.A.isPreview]),
            f = (0, S.V)()?.subscription_trial?.sku_id === k.pe.TIER_2;
        return "EDITOR" === c && _ && f
            ? (0, i.jsx)(y.Ay, {
                  type: k.e.PREMIUM_CLIENT_THEME_TRY_IT_OUT,
                  subscriptionTier: k.pe.TIER_2,
                  children: F.intl.format(F.t.G8yQXi, { onPremiumClick: T.e }),
              })
            : (0, i.jsxs)("div", {
                  className: B.wx,
                  children: [
                      (0, i.jsxs)("div", {
                          className: o()(B.so, a),
                          children: [
                              (0, i.jsx)(K, {
                                  type: c,
                                  isPreview: _,
                                  isCoachmark: n,
                                  textVariant: r,
                                  textClassName: l,
                                  iconClassName: d,
                              }),
                              (0, i.jsx)($, { type: c, isPreview: _, isCoachmark: n }),
                          ],
                      }),
                      t?.(),
                  ],
              });
    },
    q = (e) => {
        let { disabled: t, size: r } = e,
            { type: a, delay: o } = s.useContext(W),
            { analyticsLocations: l } = (0, g.Ay)(m.A.CLIENT_THEMES_THEME_SELECTOR),
            [c, _] = (0, u.yK)([L.A], () => [L.A.isPreview, L.A.gradientPreset?.id]),
            [E, I] = s.useState(!1),
            [T, S] = s.useState(-1),
            y = (0, u.bG)([p.A], () => p.A.useReducedMotion);
        s.useEffect(() => {
            ((T === P.Jm.length - 2 && "EDITOR" === a) || _ === d.ju.EASTER_EGG) && I(!0);
        }, [T, a, _]);
        let N = (e, t) => {
                if (
                    ((0, D.bc)(e.id),
                    j({ isPersisted: !c, analyticsLocations: l, themeName: d.ju[e.id] }),
                    c && "SETTINGS" === a
                        ? O(e)
                        : (0, h.u_)(
                              {
                                  backgroundGradientPresetId: e.id,
                                  theme: e.theme,
                                  useSystemTheme: c ? x.Q_.OFF : void 0,
                              },
                              o,
                          ),
                    null != t)
                ) {
                    if ((E && I(!1), t <= T || 0 === t)) return void S(0);
                    S((e) => e + 1);
                }
            },
            O = async (e) => {
                await (0, h.u_)(
                    { backgroundGradientPresetId: e.id, theme: e.theme, useSystemTheme: c ? x.Q_.OFF : void 0 },
                    G.Sb.SLOW_USER_ACTION,
                ),
                    (0, A.nf)(A.HP.CLIENT_THEMES),
                    (0, C.default)();
            };
        return (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(w.A, {
                    size: r,
                    isDisabled: t,
                    onSelect: () => {
                        (0, A.nf)(A.HP.CUSTOM_THEME, {
                            from: "SETTINGS" === a ? A.xv.SETTING : A.xv.CLIENT_THEMES_EDITOR,
                        }),
                            "SETTINGS" === a && (0, C.default)();
                    },
                }),
                P.Jm.filter((e) => {
                    let { id: t } = e;
                    return t !== d.ju.EASTER_EGG;
                }).map((e, n) =>
                    (0, i.jsx)(
                        M.MX,
                        {
                            size: r,
                            preset: e,
                            isSelected: _ === e.id,
                            onSelect: () => N(e, n),
                            disabled: t,
                            tabIndex: 0 !== n || t ? void 0 : 0,
                            showBadge: !1,
                            showLockedBadge: !1,
                        },
                        e.id,
                    ),
                ),
                (() => {
                    if (!E) return null;
                    let e = P.ag[d.ju.EASTER_EGG];
                    if (null == e) return null;
                    async function t() {
                        let { default: e } = await n.e("3408").then(n.t.bind(n, 707827, 19));
                        return e;
                    }
                    return (0, i.jsxs)("div", {
                        className: B.kG,
                        children: [
                            (0, i.jsx)(M.MX, {
                                size: r,
                                preset: e,
                                isSelected: _ === d.ju.EASTER_EGG,
                                onSelect: () => N(e),
                            }),
                            (0, i.jsx)(f.a, { importData: t, shouldAnimate: !y, className: B._7 }),
                        ],
                    });
                })(),
            ],
        });
    },
    X = (e) => {
        let { size: t, systemSelectorFirst: n, hideSystemSelector: r = !1 } = e,
            { delay: a } = s.useContext(W),
            { analyticsLocations: o } = (0, g.Ay)(m.A.CLIENT_THEMES_THEME_SELECTOR),
            [l, d, c] = (0, u.yK)([O.A, R.Ay, L.A], () => [
                O.A.theme,
                null == L.A.gradientPreset && null == v.eh.getSetting().customUserThemeSettings,
                R.Ay.useSystemTheme === x.Q_.ON,
            ]),
            _ = (e) => {
                (0, D.Py)(),
                    j({ isPersisted: !0, analyticsLocations: o, themeName: `default ${e}` }),
                    (0, h.u_)({ theme: e }, a);
            },
            f = !r && !0 === n;
        return (0, i.jsxs)(i.Fragment, {
            children: [
                f &&
                    (0, i.jsx)(M.zy, {
                        size: t,
                        theme: "system",
                        isSelected: d && c,
                        onSelect: () => _("system"),
                        tabIndex: 0,
                    }),
                (0, i.jsx)(M.zy, {
                    size: t,
                    theme: V.NJ.LIGHT,
                    isSelected: d && !c && l === V.NJ.LIGHT,
                    onSelect: () => _(V.NJ.LIGHT),
                    tabIndex: f ? void 0 : 0,
                }),
                (0, i.jsx)(M.zy, {
                    size: t,
                    theme: V.NJ.DARK,
                    isSelected: d && !c && l === V.NJ.DARK,
                    onSelect: () => _(V.NJ.DARK),
                }),
                (0, i.jsx)(M.zy, {
                    size: t,
                    theme: V.NJ.DARKER,
                    isSelected: d && !c && l === V.NJ.DARKER,
                    onSelect: () => _(V.NJ.DARKER),
                }),
                (0, i.jsx)(M.zy, {
                    size: t,
                    theme: V.NJ.MIDNIGHT,
                    isSelected: d && !c && l === V.NJ.MIDNIGHT,
                    onSelect: () => _(V.NJ.MIDNIGHT),
                }),
                !r &&
                    !n &&
                    (0, i.jsx)(M.zy, { size: t, theme: "system", isSelected: d && c, onSelect: () => _("system") }),
            ],
        });
    },
    Q = (e) => {
        let { type: t, children: n } = e,
            r = (0, I.GV)(),
            { ref: a, ...o } = (0, c._u)({ orientation: "horizontal", labelledBy: r }),
            l = s.useMemo(() => ({ type: t, delay: Y[t] }), [t]);
        return (0, i.jsx)(W.Provider, {
            value: l,
            children: (0, i.jsx)("div", { ref: a, ...o, className: B.__invalid_container, children: n }),
        });
    };
(Q.Basic = (e) => {
    let { className: t, hideSystemSelector: n, iconSize: r } = e;
    return (0, i.jsx)("section", {
        className: t,
        children: (0, i.jsx)(E.B, {
            direction: "horizontal",
            wrap: !0,
            gap: 8,
            style: { marginTop: 16 },
            children: (0, i.jsx)(X, { hideSystemSelector: n, size: r }),
        }),
    });
}),
    (Q.Gradient = (e) => {
        let { className: t, renderCTAButtons: n, disabled: r = !1, isCoachmark: s, iconSize: a } = e;
        return (0, i.jsxs)("section", {
            className: t,
            children: [
                (0, i.jsx)(z, { renderCTAButtons: n, isCoachmark: s }),
                (0, i.jsx)(E.B, {
                    direction: "horizontal",
                    wrap: !0,
                    gap: 8,
                    style: { marginTop: 16 },
                    children: (0, i.jsx)(q, { disabled: r, size: a }),
                }),
            ],
        });
    }),
    (Q.BasicAndGradient = (e) => {
        let { isEditor: t, className: n, renderCTAButtons: r, isCoachmark: s, iconSize: a } = e;
        return (0, i.jsxs)("section", {
            className: n,
            children: [
                !t && (0, i.jsx)(z, { renderCTAButtons: r, isCoachmark: s }),
                t &&
                    s &&
                    (0, i.jsx)(_.D, {
                        className: B.tD,
                        variant: "heading-sm/semibold",
                        children: F.intl.string(F.t.POSLGY),
                    }),
                (0, i.jsxs)(E.B, {
                    direction: "horizontal",
                    wrap: !0,
                    gap: 8,
                    justify: t ? "center" : "start",
                    style: { marginTop: 16 },
                    children: [
                        (0, i.jsx)(X, { systemSelectorFirst: !0, size: a }),
                        (0, i.jsx)(q, { disabled: !1, size: a }),
                    ],
                }),
            ],
        });
    });
let J = Q;
