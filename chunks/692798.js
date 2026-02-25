"use strict";
n.d(t, { Ay: () => X, X8: () => H, Zg: () => K, ew: () => W, t6: () => $, v0: () => F }), n(801541);
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(889137),
    l = n(311907),
    u = n(873298),
    c = n(421380),
    d = n(397927),
    _ = n(817281),
    f = n(775602),
    p = n(793574),
    h = n(688810),
    m = n(793943),
    E = n(915089),
    g = n(87719),
    A = n(234419),
    I = n(811611),
    T = n(450232),
    S = n(544028),
    y = n(964404),
    v = n(253932),
    N = n(12901),
    C = n(954571),
    b = n(823459),
    R = n(47671),
    O = n(323618),
    D = n(653523),
    L = n(385803),
    w = n(652215),
    x = n(788868),
    M = n(185928),
    P = n(355097),
    k = n(818348),
    U = n(985018),
    G = n(671214),
    F = (function (e) {
        return (e.EDITOR = "EDITOR"), (e.SETTINGS = "SETTINGS"), e;
    })({});
let V = Object.freeze({ EDITOR: P.Sb.SLOW_USER_ACTION, SETTINGS: P.Sb.INFREQUENT_USER_ACTION }),
    B = i.createContext({}),
    H = (e) => {
        let { isPersisted: t, themeName: n, analyticsLocations: r } = e;
        C.default.track(w.HAw.CLIENT_THEME_UPDATED, {
            feature_name: x.Ae.CLIENT_THEME,
            theme_name: n,
            is_persisted: t,
            location_stack: r,
        });
    },
    j = (e) => {
        let {
                type: t,
                isPreview: n,
                isCoachmark: i,
                textClassName: s,
                iconClassName: l,
                textVariant: u = "text-md/medium",
            } = e,
            c = (0, o.YW)({ type: t, isPreview: n, isCoachmark: i })
                .with({ type: "EDITOR", isCoachmark: !0, isPreview: !0 }, () => U.intl.string(U.t.D29k16))
                .with({ type: "EDITOR", isCoachmark: !0 }, () => U.intl.string(U.t["8+vbqd"]))
                .otherwise(() => U.intl.string(U.t.hjV0fZ));
        return (0, r.jsxs)("div", {
            className: G.DD,
            children: [
                (0, r.jsx)(d.Heading, { "aria-label": c, className: a()(G.Qw, s), variant: u, children: c }),
                (0, r.jsx)(T.A, { className: a()(G.PC, l) }),
            ],
        });
    },
    Y = (e) => {
        let { type: t, isPreview: n, isCoachmark: i } = e;
        if ((0, A.V)()?.subscription_trial?.sku_id === x.pe.TIER_2 && n) return null;
        let s = (0, o.YW)({ type: t, isPreview: n, isCoachmark: i })
            .with({ type: "EDITOR", isPreview: !0 }, () => U.intl.format(U.t.G8yQXi, { onPremiumClick: () => g.e }))
            .with({ type: "EDITOR", isCoachmark: !0 }, () => U.intl.string(U.t.jmZiNu))
            .with({ type: "EDITOR", isPreview: !1 }, () => U.intl.string(U.t.dqDFwe))
            .with({ isPreview: !0 }, () => U.intl.format(U.t["DWIjJ/"], { onPremiumClick: () => g.e }))
            .otherwise(() => U.intl.string(U.t["np0X/u"]));
        return (0, r.jsx)(d.Heading, { variant: "text-sm/normal", className: G.W$, children: s });
    },
    W = (e) => {
        let {
                renderCTAButtons: t,
                isCoachmark: n,
                titleTextVariant: s,
                headingClassName: o,
                titleClassName: u,
                titleIconClassName: c,
            } = e,
            { type: d } = i.useContext(B),
            [_] = (0, l.yK)([R.A], () => [R.A.isPreview]),
            f = (0, A.V)()?.subscription_trial?.sku_id === x.pe.TIER_2;
        return "EDITOR" === d && _ && f
            ? (0, r.jsx)(I.Ay, {
                  type: x.e.PREMIUM_CLIENT_THEME_TRY_IT_OUT,
                  subscriptionTier: x.pe.TIER_2,
                  children: U.intl.format(U.t.G8yQXi, { onPremiumClick: () => g.e }),
              })
            : (0, r.jsxs)("div", {
                  className: G.wx,
                  children: [
                      (0, r.jsxs)("div", {
                          className: a()(G.so, o),
                          children: [
                              (0, r.jsx)(j, {
                                  type: d,
                                  isPreview: _,
                                  isCoachmark: n,
                                  textVariant: s,
                                  textClassName: u,
                                  iconClassName: c,
                              }),
                              (0, r.jsx)(Y, { type: d, isPreview: _, isCoachmark: n }),
                          ],
                      }),
                      t?.(),
                  ],
              });
    },
    K = (e) => {
        let { disabled: t, size: s } = e,
            { type: a, delay: o } = i.useContext(B),
            { analyticsLocations: c } = (0, h.Ay)(p.A.CLIENT_THEMES_THEME_SELECTOR),
            [E, g] = (0, l.yK)([R.A], () => [R.A.isPreview, R.A.gradientPreset?.id]),
            [A, I] = i.useState(!1),
            [T, S] = i.useState(-1),
            y = (0, l.bG)([f.A], () => f.A.useReducedMotion);
        i.useEffect(() => {
            ((T === L.Jm.length - 2 && "EDITOR" === a) || g === u.ju.EASTER_EGG) && I(!0);
        }, [T, a, g]);
        let v = (e, t) => {
                if (
                    ((0, b.bc)(e.id),
                    H({ isPersisted: !E, analyticsLocations: c, themeName: u.ju[e.id] }),
                    E && "SETTINGS" === a
                        ? C(e)
                        : (0, _.u_)(
                              {
                                  backgroundGradientPresetId: e.id,
                                  theme: e.theme,
                                  useSystemTheme: E ? M.Q_.OFF : void 0,
                              },
                              o,
                          ),
                    null != t)
                ) {
                    if ((A && I(!1), t <= T || 0 === t)) return void S(0);
                    S((e) => e + 1);
                }
            },
            C = async (e) => {
                await (0, _.u_)(
                    { backgroundGradientPresetId: e.id, theme: e.theme, useSystemTheme: E ? M.Q_.OFF : void 0 },
                    P.Sb.SLOW_USER_ACTION,
                ),
                    (0, m.nf)(m.HP.CLIENT_THEMES),
                    (0, N.default)();
            },
            w = () => {
                if (!A) return null;
                let e = L.ag[u.ju.EASTER_EGG];
                if (null == e) return null;
                async function t() {
                    let { default: e } = await n.e("3408").then(n.t.bind(n, 707827, 19));
                    return e;
                }
                return (0, r.jsxs)("div", {
                    className: G.kG,
                    children: [
                        (0, r.jsx)(D.MX, {
                            size: s,
                            preset: e,
                            isSelected: g === u.ju.EASTER_EGG,
                            onSelect: () => v(e),
                        }),
                        (0, r.jsx)(d.akl, { importData: t, shouldAnimate: !y, className: G._7 }),
                    ],
                });
            };
        return (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(O.A, {
                    size: s,
                    isDisabled: t,
                    onSelect: () => {
                        (0, m.nf)(m.HP.CUSTOM_THEME, {
                            from: "SETTINGS" === a ? m.xv.SETTING : m.xv.CLIENT_THEMES_EDITOR,
                        }),
                            "SETTINGS" === a && (0, N.default)();
                    },
                }),
                L.Jm.filter((e) => {
                    let { id: t } = e;
                    return t !== u.ju.EASTER_EGG;
                }).map((e, n) =>
                    (0, r.jsx)(
                        D.MX,
                        {
                            size: s,
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
                w(),
            ],
        });
    },
    z = (e) => {
        let { className: t, renderCTAButtons: n, disabled: i = !1, isCoachmark: s, iconSize: a } = e;
        return (0, r.jsxs)("section", {
            className: t,
            children: [
                (0, r.jsx)(W, { renderCTAButtons: n, isCoachmark: s }),
                (0, r.jsx)(d.BJc, {
                    direction: "horizontal",
                    wrap: !0,
                    gap: 8,
                    style: { marginTop: 16 },
                    children: (0, r.jsx)(K, { disabled: i, size: a }),
                }),
            ],
        });
    },
    $ = (e) => {
        let { size: t, systemSelectorFirst: n, hideSystemSelector: s = !1 } = e,
            { delay: a } = i.useContext(B),
            { analyticsLocations: o } = (0, h.Ay)(p.A.CLIENT_THEMES_THEME_SELECTOR),
            [u, c, d] = (0, l.yK)([S.A, y.Ay, R.A], () => [
                S.A.theme,
                null == R.A.gradientPreset && null == v.eh.getSetting().customUserThemeSettings,
                y.Ay.useSystemTheme === M.Q_.ON,
            ]),
            f = (e) => {
                (0, b.Py)(),
                    H({ isPersisted: !0, analyticsLocations: o, themeName: `default ${e}` }),
                    (0, _.u_)({ theme: e }, a);
            };
        return (0, r.jsxs)(r.Fragment, {
            children: [
                !s &&
                    n &&
                    (0, r.jsx)(D.zy, { size: t, theme: "system", isSelected: c && d, onSelect: () => f("system") }),
                (0, r.jsx)(D.zy, {
                    size: t,
                    theme: k.NJ.LIGHT,
                    isSelected: c && !d && u === k.NJ.LIGHT,
                    onSelect: () => f(k.NJ.LIGHT),
                }),
                (0, r.jsx)(D.zy, {
                    size: t,
                    theme: k.NJ.DARK,
                    isSelected: c && !d && u === k.NJ.DARK,
                    onSelect: () => f(k.NJ.DARK),
                }),
                (0, r.jsx)(D.zy, {
                    size: t,
                    theme: k.NJ.DARKER,
                    isSelected: c && !d && u === k.NJ.DARKER,
                    onSelect: () => f(k.NJ.DARKER),
                }),
                (0, r.jsx)(D.zy, {
                    size: t,
                    theme: k.NJ.MIDNIGHT,
                    isSelected: c && !d && u === k.NJ.MIDNIGHT,
                    onSelect: () => f(k.NJ.MIDNIGHT),
                }),
                !s &&
                    !n &&
                    (0, r.jsx)(D.zy, { size: t, theme: "system", isSelected: c && d, onSelect: () => f("system") }),
            ],
        });
    },
    q = (e) => {
        let { isEditor: t, className: n, renderCTAButtons: i, isCoachmark: s, iconSize: a } = e;
        return (0, r.jsxs)("section", {
            className: n,
            children: [
                !t && (0, r.jsx)(W, { renderCTAButtons: i, isCoachmark: s }),
                t &&
                    s &&
                    (0, r.jsx)(d.Heading, {
                        className: G.tD,
                        variant: "heading-sm/semibold",
                        children: U.intl.string(U.t.POSLGY),
                    }),
                (0, r.jsxs)(d.BJc, {
                    direction: "horizontal",
                    wrap: !0,
                    gap: 8,
                    justify: t ? "center" : "start",
                    style: { marginTop: 16 },
                    children: [
                        (0, r.jsx)($, { systemSelectorFirst: !0, size: a }),
                        (0, r.jsx)(K, { disabled: !1, size: a }),
                    ],
                }),
            ],
        });
    },
    Z = (e) => {
        let { type: t, children: n } = e,
            s = (0, E.GV)(),
            { ref: a, ...o } = (0, c._u)({ orientation: "horizontal", labelledBy: s }),
            l = i.useMemo(() => ({ type: t, delay: V[t] }), [t]);
        return (0, r.jsx)(B.Provider, {
            value: l,
            children: (0, r.jsx)("div", { ref: a, ...o, className: G.__invalid_container, children: n }),
        });
    };
(Z.Basic = (e) => {
    let { className: t, hideSystemSelector: n, iconSize: i } = e;
    return (0, r.jsx)("section", {
        className: t,
        children: (0, r.jsx)(d.BJc, {
            direction: "horizontal",
            wrap: !0,
            gap: 8,
            style: { marginTop: 16 },
            children: (0, r.jsx)($, { hideSystemSelector: n, size: i }),
        }),
    });
}),
    (Z.Gradient = z),
    (Z.BasicAndGradient = q);
let X = Z;
