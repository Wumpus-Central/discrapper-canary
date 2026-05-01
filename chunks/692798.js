n.d(t, { Ay: () => X, X8: () => W, Zg: () => q, ew: () => Z, t6: () => Q, v0: () => H }), n(801541);
var i,
    a = n(627968),
    r = n(64700),
    s = n(503698),
    l = n.n(s),
    o = n(889137),
    d = n(17928),
    c = n(873298),
    _ = n(785007),
    E = n(534514),
    u = n(604121),
    A = n(331322),
    I = n(817281),
    T = n(775602),
    h = n(793574),
    S = n(688810),
    N = n(793943),
    f = n(915089),
    p = n(87719),
    m = n(234419),
    O = n(811611),
    C = n(450232),
    R = n(363195),
    g = n(964404),
    L = n(253932),
    D = n(779733),
    b = n(954571),
    M = n(823459),
    P = n(47671),
    U = n(654775),
    v = n(653523),
    y = n(385803),
    G = n(652215),
    w = n(788868),
    x = n(185928),
    V = n(355097),
    B = n(818348),
    F = n(985018),
    k = n(702709),
    H = (((i = {}).EDITOR = "EDITOR"), (i.SETTINGS = "SETTINGS"), i);
let j = Object.freeze({ EDITOR: V.Sb.SLOW_USER_ACTION, SETTINGS: V.Sb.INFREQUENT_USER_ACTION }),
    Y = r.createContext({}),
    W = (e) => {
        let { isPersisted: t, themeName: n, analyticsLocations: i } = e;
        b.default.track(G.HAw.CLIENT_THEME_UPDATED, {
            feature_name: w.Ae.CLIENT_THEME,
            theme_name: n,
            is_persisted: t,
            location_stack: i,
        });
    },
    K = (e) => {
        let {
                type: t,
                isPreview: n,
                isCoachmark: i,
                textClassName: r,
                iconClassName: s,
                textVariant: d = "text-md/medium",
            } = e,
            c = (0, o.YW)({ type: t, isPreview: n, isCoachmark: i })
                .with({ type: "EDITOR", isCoachmark: !0, isPreview: !0 }, () => F.intl.string(F.t.D29k16))
                .with({ type: "EDITOR", isCoachmark: !0 }, () => F.intl.string(F.t["8+vbqd"]))
                .otherwise(() => F.intl.string(F.t.hjV0fZ));
        return (0, a.jsxs)("div", {
            className: k.DD,
            children: [
                (0, a.jsx)(E.D, { "aria-label": c, className: l()(k.Qw, r), variant: d, children: c }),
                (0, a.jsx)(C.A, { className: l()(k.PC, s), size: "xs" }),
            ],
        });
    },
    $ = (e) => {
        let { type: t, isPreview: n, isCoachmark: i } = e;
        if ((0, m.V)()?.subscription_trial?.sku_id === w.pe.TIER_2 && n) return null;
        let r = (0, o.YW)({ type: t, isPreview: n, isCoachmark: i })
            .with({ type: "EDITOR", isPreview: !0 }, () => F.intl.format(F.t.G8yQXi, { onPremiumClick: p.e }))
            .with({ type: "EDITOR", isCoachmark: !0 }, () => F.intl.string(F.t.jmZiNu))
            .with({ type: "EDITOR", isPreview: !1 }, () => F.intl.string(F.t.dqDFwe))
            .with({ isPreview: !0 }, () => F.intl.format(F.t["DWIjJ/"], { onPremiumClick: p.e }))
            .otherwise(() => F.intl.string(F.t["np0X/u"]));
        return (0, a.jsx)(E.D, { variant: "text-sm/normal", className: k.W$, children: r });
    },
    Z = (e) => {
        let {
                renderCTAButtons: t,
                isCoachmark: n,
                titleTextVariant: i,
                headingClassName: s,
                titleClassName: o,
                titleIconClassName: c,
            } = e,
            { type: _ } = r.useContext(Y),
            [E] = (0, d.yK)([P.A], () => [P.A.isPreview]),
            u = (0, m.V)()?.subscription_trial?.sku_id === w.pe.TIER_2;
        return "EDITOR" === _ && E && u
            ? (0, a.jsx)(O.Ay, {
                  type: w.e.PREMIUM_CLIENT_THEME_TRY_IT_OUT,
                  subscriptionTier: w.pe.TIER_2,
                  children: F.intl.format(F.t.G8yQXi, { onPremiumClick: p.e }),
              })
            : (0, a.jsxs)("div", {
                  className: k.wx,
                  children: [
                      (0, a.jsxs)("div", {
                          className: l()(k.so, s),
                          children: [
                              (0, a.jsx)(K, {
                                  type: _,
                                  isPreview: E,
                                  isCoachmark: n,
                                  textVariant: i,
                                  textClassName: o,
                                  iconClassName: c,
                              }),
                              (0, a.jsx)($, { type: _, isPreview: E, isCoachmark: n }),
                          ],
                      }),
                      t?.(),
                  ],
              });
    },
    q = (e) => {
        let { disabled: t, size: i } = e,
            { type: s, delay: l } = r.useContext(Y),
            { analyticsLocations: o } = (0, S.Ay)(h.A.CLIENT_THEMES_THEME_SELECTOR),
            [_, E] = (0, d.yK)([P.A], () => [P.A.isPreview, P.A.gradientPreset?.id]),
            [A, f] = r.useState(!1),
            [p, m] = r.useState(-1),
            O = (0, d.bG)([T.A], () => T.A.useReducedMotion);
        r.useEffect(() => {
            ((p === y.Jm.length - 2 && "EDITOR" === s) || E === c.ju.EASTER_EGG) && f(!0);
        }, [p, s, E]);
        let C = (e, t) => {
                if (
                    ((0, M.bc)(e.id),
                    W({ isPersisted: !_, analyticsLocations: o, themeName: c.ju[e.id] }),
                    _ && "SETTINGS" === s
                        ? R(e)
                        : (0, I.u_)(
                              {
                                  backgroundGradientPresetId: e.id,
                                  theme: e.theme,
                                  useSystemTheme: _ ? x.Q_.OFF : void 0,
                              },
                              l,
                          ),
                    null != t)
                ) {
                    if ((A && f(!1), t <= p || 0 === t)) return void m(0);
                    m((e) => e + 1);
                }
            },
            R = async (e) => {
                await (0, I.u_)(
                    { backgroundGradientPresetId: e.id, theme: e.theme, useSystemTheme: _ ? x.Q_.OFF : void 0 },
                    V.Sb.SLOW_USER_ACTION,
                ),
                    (0, N.nf)(N.HP.CLIENT_THEMES),
                    (0, D.default)();
            };
        return (0, a.jsxs)(a.Fragment, {
            children: [
                (0, a.jsx)(U.A, {
                    size: i,
                    isDisabled: t,
                    onSelect: () => {
                        (0, N.nf)(N.HP.CUSTOM_THEME, {
                            from: "SETTINGS" === s ? N.xv.SETTING : N.xv.CLIENT_THEMES_EDITOR,
                        }),
                            "SETTINGS" === s && (0, D.default)();
                    },
                }),
                y.Jm.filter((e) => {
                    let { id: t } = e;
                    return t !== c.ju.EASTER_EGG;
                }).map((e, n) =>
                    (0, a.jsx)(
                        v.MX,
                        {
                            size: i,
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
                (() => {
                    if (!A) return null;
                    let e = y.ag[c.ju.EASTER_EGG];
                    if (null == e) return null;
                    async function t() {
                        let { default: e } = await n.e("3408").then(n.t.bind(n, 707827, 19));
                        return e;
                    }
                    return (0, a.jsxs)("div", {
                        className: k.kG,
                        children: [
                            (0, a.jsx)(v.MX, {
                                size: i,
                                preset: e,
                                isSelected: E === c.ju.EASTER_EGG,
                                onSelect: () => C(e),
                            }),
                            (0, a.jsx)(u.a, { importData: t, shouldAnimate: !O, className: k._7 }),
                        ],
                    });
                })(),
            ],
        });
    },
    Q = (e) => {
        let { size: t, systemSelectorFirst: n, hideSystemSelector: i = !1 } = e,
            { delay: s } = r.useContext(Y),
            { analyticsLocations: l } = (0, S.Ay)(h.A.CLIENT_THEMES_THEME_SELECTOR),
            [o, c, _] = (0, d.yK)([R.A, g.Ay, P.A], () => [
                R.A.theme,
                null == P.A.gradientPreset && null == L.eh.getSetting().customUserThemeSettings,
                g.Ay.useSystemTheme === x.Q_.ON,
            ]),
            E = (e) => {
                (0, M.Py)(),
                    W({ isPersisted: !0, analyticsLocations: l, themeName: `default ${e}` }),
                    (0, I.u_)({ theme: e }, s);
            },
            u = !i && !0 === n;
        return (0, a.jsxs)(a.Fragment, {
            children: [
                u &&
                    (0, a.jsx)(v.zy, {
                        size: t,
                        theme: "system",
                        isSelected: c && _,
                        onSelect: () => E("system"),
                        tabIndex: 0,
                    }),
                (0, a.jsx)(v.zy, {
                    size: t,
                    theme: B.NJ.LIGHT,
                    isSelected: c && !_ && o === B.NJ.LIGHT,
                    onSelect: () => E(B.NJ.LIGHT),
                    tabIndex: u ? void 0 : 0,
                }),
                (0, a.jsx)(v.zy, {
                    size: t,
                    theme: B.NJ.DARK,
                    isSelected: c && !_ && o === B.NJ.DARK,
                    onSelect: () => E(B.NJ.DARK),
                }),
                (0, a.jsx)(v.zy, {
                    size: t,
                    theme: B.NJ.DARKER,
                    isSelected: c && !_ && o === B.NJ.DARKER,
                    onSelect: () => E(B.NJ.DARKER),
                }),
                (0, a.jsx)(v.zy, {
                    size: t,
                    theme: B.NJ.MIDNIGHT,
                    isSelected: c && !_ && o === B.NJ.MIDNIGHT,
                    onSelect: () => E(B.NJ.MIDNIGHT),
                }),
                !i &&
                    !n &&
                    (0, a.jsx)(v.zy, { size: t, theme: "system", isSelected: c && _, onSelect: () => E("system") }),
            ],
        });
    },
    z = (e) => {
        let { type: t, children: n } = e,
            i = (0, f.GV)(),
            { ref: s, ...l } = (0, _._u)({ orientation: "horizontal", labelledBy: i }),
            o = r.useMemo(() => ({ type: t, delay: j[t] }), [t]);
        return (0, a.jsx)(Y.Provider, {
            value: o,
            children: (0, a.jsx)("div", { ref: s, ...l, className: k.__invalid_container, children: n }),
        });
    };
(z.Basic = (e) => {
    let { className: t, hideSystemSelector: n, iconSize: i } = e;
    return (0, a.jsx)("section", {
        className: t,
        children: (0, a.jsx)(A.B, {
            direction: "horizontal",
            wrap: !0,
            gap: 8,
            style: { marginTop: 16 },
            children: (0, a.jsx)(Q, { hideSystemSelector: n, size: i }),
        }),
    });
}),
    (z.Gradient = (e) => {
        let { className: t, renderCTAButtons: n, disabled: i = !1, isCoachmark: r, iconSize: s } = e;
        return (0, a.jsxs)("section", {
            className: t,
            children: [
                (0, a.jsx)(Z, { renderCTAButtons: n, isCoachmark: r }),
                (0, a.jsx)(A.B, {
                    direction: "horizontal",
                    wrap: !0,
                    gap: 8,
                    style: { marginTop: 16 },
                    children: (0, a.jsx)(q, { disabled: i, size: s }),
                }),
            ],
        });
    }),
    (z.BasicAndGradient = (e) => {
        let { isEditor: t, className: n, renderCTAButtons: i, isCoachmark: r, iconSize: s } = e;
        return (0, a.jsxs)("section", {
            className: n,
            children: [
                !t && (0, a.jsx)(Z, { renderCTAButtons: i, isCoachmark: r }),
                t &&
                    r &&
                    (0, a.jsx)(E.D, {
                        className: k.tD,
                        variant: "heading-sm/semibold",
                        children: F.intl.string(F.t.POSLGY),
                    }),
                (0, a.jsxs)(A.B, {
                    direction: "horizontal",
                    wrap: !0,
                    gap: 8,
                    justify: t ? "center" : "start",
                    style: { marginTop: 16 },
                    children: [
                        (0, a.jsx)(Q, { systemSelectorFirst: !0, size: s }),
                        (0, a.jsx)(q, { disabled: !1, size: s }),
                    ],
                }),
            ],
        });
    });
let X = z;
