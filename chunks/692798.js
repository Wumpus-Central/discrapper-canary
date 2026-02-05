"use strict";
n.d(t, { Ay: () => q, X8: () => F, v0: () => U }), n(801541);
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
    p = n(793943),
    h = n(915089),
    m = n(87719),
    g = n(234419),
    E = n(811611),
    A = n(450232),
    I = n(544028),
    T = n(964404),
    y = n(253932),
    S = n(12901),
    v = n(954571),
    C = n(823459),
    b = n(47671),
    N = n(323618),
    R = n(653523),
    O = n(385803),
    D = n(652215),
    L = n(788868),
    w = n(185928),
    x = n(355097),
    P = n(818348),
    M = n(985018),
    k = n(176240),
    U = (function (e) {
        return (e.EDITOR = "EDITOR"), (e.SETTINGS = "SETTINGS"), e;
    })({});
let G = Object.freeze({ EDITOR: x.Sb.SLOW_USER_ACTION, SETTINGS: x.Sb.INFREQUENT_USER_ACTION }),
    V = i.createContext({}),
    F = (e) => {
        let { isPersisted: t, themeName: n, analyticsLocations: r } = e;
        v.default.track(D.HAw.CLIENT_THEME_UPDATED, {
            feature_name: L.Ae.CLIENT_THEME,
            theme_name: n,
            is_persisted: t,
            location_stack: r,
        });
    },
    B = (e) => {
        let { type: t, isPreview: n, isCoachmark: i } = e,
            s = (0, a.YW)({ type: t, isPreview: n, isCoachmark: i })
                .with({ type: "EDITOR", isCoachmark: !0, isPreview: !0 }, () => M.intl.string(M.t.D29k16))
                .with({ type: "EDITOR", isCoachmark: !0 }, () => M.intl.string(M.t["8+vbqd"]))
                .otherwise(() => M.intl.string(M.t.hjV0fZ));
        return (0, r.jsxs)("div", {
            className: k.DD,
            children: [
                (0, r.jsx)(u.Heading, { "aria-label": s, className: k.Qw, variant: "text-md/medium", children: s }),
                (0, r.jsx)(A.A, { className: k.PC }),
            ],
        });
    },
    j = (e) => {
        let { type: t, isPreview: n, isCoachmark: i } = e;
        if ((0, g.V)()?.subscription_trial?.sku_id === L.pe.TIER_2 && n) return null;
        let s = (0, a.YW)({ type: t, isPreview: n, isCoachmark: i })
            .with({ type: "EDITOR", isPreview: !0 }, () => M.intl.format(M.t.G8yQXi, { onPremiumClick: () => m.e }))
            .with({ type: "EDITOR", isCoachmark: !0 }, () => M.intl.string(M.t.jmZiNu))
            .with({ type: "EDITOR", isPreview: !1 }, () => M.intl.string(M.t.dqDFwe))
            .with({ isPreview: !0 }, () => M.intl.format(M.t["DWIjJ/"], { onPremiumClick: () => m.e }))
            .otherwise(() => M.intl.string(M.t["np0X/u"]));
        return (0, r.jsx)(u.Heading, { variant: "text-sm/normal", className: k.W$, children: s });
    },
    H = (e) => {
        let { renderCTAButtons: t, isCoachmark: n } = e,
            { type: a } = i.useContext(V),
            [o] = (0, s.yK)([b.A], () => [b.A.isPreview]),
            l = (0, g.V)()?.subscription_trial?.sku_id === L.pe.TIER_2;
        return "EDITOR" === a && o && l
            ? (0, r.jsx)(E.Ay, {
                  type: L.e.PREMIUM_CLIENT_THEME_TRY_IT_OUT,
                  subscriptionTier: L.pe.TIER_2,
                  children: M.intl.format(M.t.G8yQXi, { onPremiumClick: () => m.e }),
              })
            : (0, r.jsxs)("div", {
                  className: k.wx,
                  children: [
                      (0, r.jsxs)("div", {
                          className: k.so,
                          children: [
                              (0, r.jsx)(B, { type: a, isPreview: o, isCoachmark: n }),
                              (0, r.jsx)(j, { type: a, isPreview: o, isCoachmark: n }),
                          ],
                      }),
                      t?.(),
                  ],
              });
    },
    Y = (e) => {
        let { disabled: t } = e,
            { type: a, delay: l } = i.useContext(V),
            { analyticsLocations: h } = (0, f.Ay)(_.A.CLIENT_THEMES_THEME_SELECTOR),
            [m, g] = (0, s.yK)([b.A], () => [b.A.isPreview, b.A.gradientPreset?.id]),
            [E, A] = i.useState(!1),
            [I, T] = i.useState(-1),
            y = (0, s.bG)([d.A], () => d.A.useReducedMotion);
        i.useEffect(() => {
            ((I === O.Jm.length - 2 && "EDITOR" === a) || g === o.ju.EASTER_EGG) && A(!0);
        }, [I, a, g]);
        let v = (e, t) => {
                if (
                    ((0, C.bc)(e.id),
                    F({ isPersisted: !m, analyticsLocations: h, themeName: o.ju[e.id] }),
                    m && "SETTINGS" === a
                        ? D(e)
                        : (0, c.u_)(
                              {
                                  backgroundGradientPresetId: e.id,
                                  theme: e.theme,
                                  useSystemTheme: m ? w.Q_.OFF : void 0,
                              },
                              l,
                          ),
                    null != t)
                ) {
                    if ((E && A(!1), t <= I || 0 === t)) return void T(0);
                    T((e) => e + 1);
                }
            },
            D = async (e) => {
                await (0, c.u_)(
                    { backgroundGradientPresetId: e.id, theme: e.theme, useSystemTheme: m ? w.Q_.OFF : void 0 },
                    x.Sb.SLOW_USER_ACTION,
                ),
                    (0, p.nf)(p.HP.CLIENT_THEMES),
                    (0, S.default)();
            },
            L = () => {
                if (!E) return null;
                let e = O.ag[o.ju.EASTER_EGG];
                if (null == e) return null;
                async function t() {
                    let { default: e } = await n.e("3408").then(n.t.bind(n, 707827, 19));
                    return e;
                }
                return (0, r.jsxs)("div", {
                    className: k.kG,
                    children: [
                        (0, r.jsx)(R.MX, { preset: e, isSelected: g === o.ju.EASTER_EGG, onSelect: () => v(e) }),
                        (0, r.jsx)(u.akl, { importData: t, shouldAnimate: !y, className: k._7 }),
                    ],
                });
            };
        return (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(N.A, {
                    isDisabled: t,
                    onSelect: () => {
                        (0, p.nf)(p.HP.CUSTOM_THEME, {
                            from: "SETTINGS" === a ? p.xv.SETTING : p.xv.CLIENT_THEMES_EDITOR,
                        }),
                            "SETTINGS" === a && (0, S.default)();
                    },
                }),
                O.Jm.filter((e) => {
                    let { id: t } = e;
                    return t !== o.ju.EASTER_EGG;
                }).map((e, n) =>
                    (0, r.jsx)(
                        R.MX,
                        {
                            preset: e,
                            isSelected: g === e.id,
                            onSelect: () => v(e, n),
                            disabled: t,
                            tabIndex: 0 !== n || t ? void 0 : 0,
                            showBadge: !1,
                            showLockedBadge: !1,
                        },
                        e.id,
                    ),
                ),
                L(),
            ],
        });
    },
    W = (e) => {
        let { className: t, renderCTAButtons: n, disabled: i = !1, isCoachmark: a } = e;
        return (0, r.jsxs)("section", {
            className: t,
            children: [
                (0, r.jsx)(H, { renderCTAButtons: n, isCoachmark: a }),
                (0, r.jsx)(u.BJc, {
                    direction: "horizontal",
                    wrap: !0,
                    gap: 8,
                    style: { marginTop: 16 },
                    children: (0, r.jsx)(Y, { disabled: i }),
                }),
            ],
        });
    },
    K = (e) => {
        let { systemSelectorFirst: t, hideSystemSelector: n = !1 } = e,
            { delay: a } = i.useContext(V),
            { analyticsLocations: o } = (0, f.Ay)(_.A.CLIENT_THEMES_THEME_SELECTOR),
            [l, u, d] = (0, s.yK)([I.A, T.Ay, b.A], () => [
                I.A.theme,
                null == b.A.gradientPreset && null == y.eh.getSetting().customUserThemeSettings,
                T.Ay.useSystemTheme === w.Q_.ON,
            ]),
            p = (e) => {
                (0, C.Py)(),
                    F({ isPersisted: !0, analyticsLocations: o, themeName: `default ${e}` }),
                    (0, c.u_)({ theme: e }, a);
            };
        return (0, r.jsxs)(r.Fragment, {
            children: [
                !n && t && (0, r.jsx)(R.zy, { theme: "system", isSelected: u && d, onSelect: () => p("system") }),
                (0, r.jsx)(R.zy, {
                    theme: P.NJ.LIGHT,
                    isSelected: u && !d && l === P.NJ.LIGHT,
                    onSelect: () => p(P.NJ.LIGHT),
                }),
                (0, r.jsx)(R.zy, {
                    theme: P.NJ.DARK,
                    isSelected: u && !d && l === P.NJ.DARK,
                    onSelect: () => p(P.NJ.DARK),
                }),
                (0, r.jsx)(R.zy, {
                    theme: P.NJ.DARKER,
                    isSelected: u && !d && l === P.NJ.DARKER,
                    onSelect: () => p(P.NJ.DARKER),
                }),
                (0, r.jsx)(R.zy, {
                    theme: P.NJ.MIDNIGHT,
                    isSelected: u && !d && l === P.NJ.MIDNIGHT,
                    onSelect: () => p(P.NJ.MIDNIGHT),
                }),
                !n && !t && (0, r.jsx)(R.zy, { theme: "system", isSelected: u && d, onSelect: () => p("system") }),
            ],
        });
    },
    z = (e) => {
        let { isEditor: t, className: n, renderCTAButtons: i, isCoachmark: a } = e;
        return (0, r.jsxs)("section", {
            className: n,
            children: [
                !t && (0, r.jsx)(H, { renderCTAButtons: i, isCoachmark: a }),
                t &&
                    a &&
                    (0, r.jsx)(u.Heading, {
                        className: k.tD,
                        variant: "heading-sm/semibold",
                        children: M.intl.string(M.t.POSLGY),
                    }),
                (0, r.jsxs)(u.BJc, {
                    direction: "horizontal",
                    wrap: !0,
                    gap: 8,
                    justify: t ? "center" : "start",
                    style: { marginTop: 16 },
                    children: [(0, r.jsx)(K, { systemSelectorFirst: !0 }), (0, r.jsx)(Y, { disabled: !1 })],
                }),
            ],
        });
    },
    $ = (e) => {
        let { type: t, children: n } = e,
            a = (0, h.GV)(),
            { ref: s, ...o } = (0, l._u)({ orientation: "horizontal", labelledBy: a }),
            u = i.useMemo(() => ({ type: t, delay: G[t] }), [t]);
        return (0, r.jsx)(V.Provider, {
            value: u,
            children: (0, r.jsx)("div", { ref: s, ...o, className: k.__invalid_container, children: n }),
        });
    };
($.Basic = (e) => {
    let { className: t, hideSystemSelector: n } = e;
    return (0, r.jsx)("section", {
        className: t,
        children: (0, r.jsx)(u.BJc, {
            direction: "horizontal",
            wrap: !0,
            gap: 8,
            style: { marginTop: 16 },
            children: (0, r.jsx)(K, { hideSystemSelector: n }),
        }),
    });
}),
    ($.Gradient = W),
    ($.BasicAndGradient = z);
let q = $;
