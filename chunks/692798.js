"use strict";
n.d(t, { Ay: () => X, X8: () => B, t6: () => $, v0: () => G }), n(801541);
var r = n(627968),
    i = n(64700),
    a = n(889137),
    s = n(311907),
    o = n(873298),
    l = n(421380),
    u = n(397927),
    c = n(817281),
    d = n(775602),
    _ = n(793574),
    f = n(688810),
    h = n(793943),
    p = n(915089),
    g = n(87719),
    E = n(234419),
    A = n(811611),
    I = n(450232),
    T = n(544028),
    y = n(964404),
    S = n(253932),
    v = n(12901),
    C = n(954571),
    b = n(823459),
    N = n(47671),
    R = n(323618),
    O = n(653523),
    D = n(385803),
    L = n(652215),
    w = n(788868),
    x = n(185928),
    P = n(355097),
    M = n(818348),
    k = n(985018),
    U = n(176240),
    G = (function (e) {
        return (e.EDITOR = "EDITOR"), (e.SETTINGS = "SETTINGS"), e;
    })({});
let F = Object.freeze({ EDITOR: P.Sb.SLOW_USER_ACTION, SETTINGS: P.Sb.INFREQUENT_USER_ACTION }),
    V = i.createContext({}),
    B = (e) => {
        let { isPersisted: t, themeName: n, analyticsLocations: r } = e;
        C.default.track(L.HAw.CLIENT_THEME_UPDATED, {
            feature_name: w.Ae.CLIENT_THEME,
            theme_name: n,
            is_persisted: t,
            location_stack: r,
        });
    },
    j = (e) => {
        let { type: t, isPreview: n, isCoachmark: i } = e,
            s = (0, a.YW)({ type: t, isPreview: n, isCoachmark: i })
                .with({ type: "EDITOR", isCoachmark: !0, isPreview: !0 }, () => k.intl.string(k.t.D29k16))
                .with({ type: "EDITOR", isCoachmark: !0 }, () => k.intl.string(k.t["8+vbqd"]))
                .otherwise(() => k.intl.string(k.t.hjV0fZ));
        return (0, r.jsxs)("div", {
            className: U.DD,
            children: [
                (0, r.jsx)(u.Heading, { "aria-label": s, className: U.Qw, variant: "text-md/medium", children: s }),
                (0, r.jsx)(I.A, { className: U.PC }),
            ],
        });
    },
    H = (e) => {
        let { type: t, isPreview: n, isCoachmark: i } = e;
        if ((0, E.V)()?.subscription_trial?.sku_id === w.pe.TIER_2 && n) return null;
        let s = (0, a.YW)({ type: t, isPreview: n, isCoachmark: i })
            .with({ type: "EDITOR", isPreview: !0 }, () => k.intl.format(k.t.G8yQXi, { onPremiumClick: () => g.e }))
            .with({ type: "EDITOR", isCoachmark: !0 }, () => k.intl.string(k.t.jmZiNu))
            .with({ type: "EDITOR", isPreview: !1 }, () => k.intl.string(k.t.dqDFwe))
            .with({ isPreview: !0 }, () => k.intl.format(k.t["DWIjJ/"], { onPremiumClick: () => g.e }))
            .otherwise(() => k.intl.string(k.t["np0X/u"]));
        return (0, r.jsx)(u.Heading, { variant: "text-sm/normal", className: U.W$, children: s });
    },
    Y = (e) => {
        let { renderCTAButtons: t, isCoachmark: n } = e,
            { type: a } = i.useContext(V),
            [o] = (0, s.yK)([N.A], () => [N.A.isPreview]),
            l = (0, E.V)()?.subscription_trial?.sku_id === w.pe.TIER_2;
        return "EDITOR" === a && o && l
            ? (0, r.jsx)(A.Ay, {
                  type: w.e.PREMIUM_CLIENT_THEME_TRY_IT_OUT,
                  subscriptionTier: w.pe.TIER_2,
                  children: k.intl.format(k.t.G8yQXi, { onPremiumClick: () => g.e }),
              })
            : (0, r.jsxs)("div", {
                  className: U.wx,
                  children: [
                      (0, r.jsxs)("div", {
                          className: U.so,
                          children: [
                              (0, r.jsx)(j, { type: a, isPreview: o, isCoachmark: n }),
                              (0, r.jsx)(H, { type: a, isPreview: o, isCoachmark: n }),
                          ],
                      }),
                      t?.(),
                  ],
              });
    },
    W = (e) => {
        let { disabled: t } = e,
            { type: a, delay: l } = i.useContext(V),
            { analyticsLocations: p } = (0, f.Ay)(_.A.CLIENT_THEMES_THEME_SELECTOR),
            [g, E] = (0, s.yK)([N.A], () => [N.A.isPreview, N.A.gradientPreset?.id]),
            [A, I] = i.useState(!1),
            [T, y] = i.useState(-1),
            S = (0, s.bG)([d.A], () => d.A.useReducedMotion);
        i.useEffect(() => {
            ((T === D.Jm.length - 2 && "EDITOR" === a) || E === o.ju.EASTER_EGG) && I(!0);
        }, [T, a, E]);
        let C = (e, t) => {
                if (
                    ((0, b.bc)(e.id),
                    B({ isPersisted: !g, analyticsLocations: p, themeName: o.ju[e.id] }),
                    g && "SETTINGS" === a
                        ? L(e)
                        : (0, c.u_)(
                              {
                                  backgroundGradientPresetId: e.id,
                                  theme: e.theme,
                                  useSystemTheme: g ? x.Q_.OFF : void 0,
                              },
                              l,
                          ),
                    null != t)
                ) {
                    if ((A && I(!1), t <= T || 0 === t)) return void y(0);
                    y((e) => e + 1);
                }
            },
            L = async (e) => {
                await (0, c.u_)(
                    { backgroundGradientPresetId: e.id, theme: e.theme, useSystemTheme: g ? x.Q_.OFF : void 0 },
                    P.Sb.SLOW_USER_ACTION,
                ),
                    (0, h.nf)(h.HP.CLIENT_THEMES),
                    (0, v.default)();
            },
            w = () => {
                if (!A) return null;
                let e = D.ag[o.ju.EASTER_EGG];
                if (null == e) return null;
                async function t() {
                    let { default: e } = await n.e("3408").then(n.t.bind(n, 707827, 19));
                    return e;
                }
                return (0, r.jsxs)("div", {
                    className: U.kG,
                    children: [
                        (0, r.jsx)(O.MX, { preset: e, isSelected: E === o.ju.EASTER_EGG, onSelect: () => C(e) }),
                        (0, r.jsx)(u.akl, { importData: t, shouldAnimate: !S, className: U._7 }),
                    ],
                });
            };
        return (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(R.A, {
                    isDisabled: t,
                    onSelect: () => {
                        (0, h.nf)(h.HP.CUSTOM_THEME, {
                            from: "SETTINGS" === a ? h.xv.SETTING : h.xv.CLIENT_THEMES_EDITOR,
                        }),
                            "SETTINGS" === a && (0, v.default)();
                    },
                }),
                D.Jm.filter((e) => {
                    let { id: t } = e;
                    return t !== o.ju.EASTER_EGG;
                }).map((e, n) =>
                    (0, r.jsx)(
                        O.MX,
                        {
                            preset: e,
                            isSelected: E === e.id,
                            onSelect: () => C(e, n),
                            disabled: t,
                            tabIndex: 0 !== n || t ? void 0 : 0,
                            showBadge: !1,
                            showLockedBadge: !1,
                        },
                        e.id,
                    ),
                ),
                w(),
            ],
        });
    },
    K = (e) => {
        let { className: t, renderCTAButtons: n, disabled: i = !1, isCoachmark: a } = e;
        return (0, r.jsxs)("section", {
            className: t,
            children: [
                (0, r.jsx)(Y, { renderCTAButtons: n, isCoachmark: a }),
                (0, r.jsx)(u.BJc, {
                    direction: "horizontal",
                    wrap: !0,
                    gap: 8,
                    style: { marginTop: 16 },
                    children: (0, r.jsx)(W, { disabled: i }),
                }),
            ],
        });
    },
    $ = (e) => {
        let { systemSelectorFirst: t, hideSystemSelector: n = !1 } = e,
            { delay: a } = i.useContext(V),
            { analyticsLocations: o } = (0, f.Ay)(_.A.CLIENT_THEMES_THEME_SELECTOR),
            [l, u, d] = (0, s.yK)([T.A, y.Ay, N.A], () => [
                T.A.theme,
                null == N.A.gradientPreset && null == S.eh.getSetting().customUserThemeSettings,
                y.Ay.useSystemTheme === x.Q_.ON,
            ]),
            h = (e) => {
                (0, b.Py)(),
                    B({ isPersisted: !0, analyticsLocations: o, themeName: `default ${e}` }),
                    (0, c.u_)({ theme: e }, a);
            };
        return (0, r.jsxs)(r.Fragment, {
            children: [
                !n && t && (0, r.jsx)(O.zy, { theme: "system", isSelected: u && d, onSelect: () => h("system") }),
                (0, r.jsx)(O.zy, {
                    theme: M.NJ.LIGHT,
                    isSelected: u && !d && l === M.NJ.LIGHT,
                    onSelect: () => h(M.NJ.LIGHT),
                }),
                (0, r.jsx)(O.zy, {
                    theme: M.NJ.DARK,
                    isSelected: u && !d && l === M.NJ.DARK,
                    onSelect: () => h(M.NJ.DARK),
                }),
                (0, r.jsx)(O.zy, {
                    theme: M.NJ.DARKER,
                    isSelected: u && !d && l === M.NJ.DARKER,
                    onSelect: () => h(M.NJ.DARKER),
                }),
                (0, r.jsx)(O.zy, {
                    theme: M.NJ.MIDNIGHT,
                    isSelected: u && !d && l === M.NJ.MIDNIGHT,
                    onSelect: () => h(M.NJ.MIDNIGHT),
                }),
                !n && !t && (0, r.jsx)(O.zy, { theme: "system", isSelected: u && d, onSelect: () => h("system") }),
            ],
        });
    },
    z = (e) => {
        let { isEditor: t, className: n, renderCTAButtons: i, isCoachmark: a } = e;
        return (0, r.jsxs)("section", {
            className: n,
            children: [
                !t && (0, r.jsx)(Y, { renderCTAButtons: i, isCoachmark: a }),
                t &&
                    a &&
                    (0, r.jsx)(u.Heading, {
                        className: U.tD,
                        variant: "heading-sm/semibold",
                        children: k.intl.string(k.t.POSLGY),
                    }),
                (0, r.jsxs)(u.BJc, {
                    direction: "horizontal",
                    wrap: !0,
                    gap: 8,
                    justify: t ? "center" : "start",
                    style: { marginTop: 16 },
                    children: [(0, r.jsx)($, { systemSelectorFirst: !0 }), (0, r.jsx)(W, { disabled: !1 })],
                }),
            ],
        });
    },
    q = (e) => {
        let { type: t, children: n } = e,
            a = (0, p.GV)(),
            { ref: s, ...o } = (0, l._u)({ orientation: "horizontal", labelledBy: a }),
            u = i.useMemo(() => ({ type: t, delay: F[t] }), [t]);
        return (0, r.jsx)(V.Provider, {
            value: u,
            children: (0, r.jsx)("div", { ref: s, ...o, className: U.__invalid_container, children: n }),
        });
    };
(q.Basic = (e) => {
    let { className: t, hideSystemSelector: n } = e;
    return (0, r.jsx)("section", {
        className: t,
        children: (0, r.jsx)(u.BJc, {
            direction: "horizontal",
            wrap: !0,
            gap: 8,
            style: { marginTop: 16 },
            children: (0, r.jsx)($, { hideSystemSelector: n }),
        }),
    });
}),
    (q.Gradient = K),
    (q.BasicAndGradient = z);
let X = q;
