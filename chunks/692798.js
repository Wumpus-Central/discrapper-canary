n.d(t, { Ay: () => J, X8: () => j, Zg: () => q, ew: () => Q, t6: () => X, v0: () => x }), n(801541);
var i,
    r = n(627968),
    a = n(64700),
    s = n(503698),
    _ = n.n(s),
    l = n(889137),
    o = n(17928),
    E = n(873298),
    d = n(785007),
    c = n(534514),
    u = n(604121),
    I = n(331322),
    A = n(817281),
    T = n(775602),
    S = n(793574),
    N = n(688810),
    O = n(793943),
    R = n(915089),
    f = n(87719),
    C = n(234419),
    p = n(811611),
    m = n(450232),
    L = n(363195),
    D = n(964404),
    h = n(253932),
    g = n(779733),
    b = n(954571),
    U = n(823459),
    P = n(47671),
    M = n(654775),
    y = n(653523),
    G = n(385803),
    v = n(652215),
    B = n(788868),
    w = n(185928),
    F = n(355097),
    V = n(818348),
    H = n(985018),
    k = n(702709),
    x = (((i = {}).EDITOR = "EDITOR"), (i.SETTINGS = "SETTINGS"), i);
let W = Object.freeze({ EDITOR: F.Sb.SLOW_USER_ACTION, SETTINGS: F.Sb.INFREQUENT_USER_ACTION }),
    Y = a.createContext({}),
    j = (e) => {
        let { isPersisted: t, themeName: n, analyticsLocations: i } = e;
        b.default.track(v.HAw.CLIENT_THEME_UPDATED, {
            feature_name: B.Ae.CLIENT_THEME,
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
                textClassName: a,
                iconClassName: s,
                textVariant: o = "text-md/medium",
            } = e,
            E = (0, l.YW)({ type: t, isPreview: n, isCoachmark: i })
                .with({ type: "EDITOR", isCoachmark: !0, isPreview: !0 }, () => H.intl.string(H.t.D29k16))
                .with({ type: "EDITOR", isCoachmark: !0 }, () => H.intl.string(H.t["8+vbqd"]))
                .otherwise(() => H.intl.string(H.t.hjV0fZ));
        return (0, r.jsxs)("div", {
            className: k.DD,
            children: [
                (0, r.jsx)(c.D, { "aria-label": E, className: _()(k.Qw, a), variant: o, children: E }),
                (0, r.jsx)(m.A, { className: _()(k.PC, s), size: "xs" }),
            ],
        });
    },
    $ = (e) => {
        let { type: t, isPreview: n, isCoachmark: i } = e;
        if ((0, C.V)()?.subscription_trial?.sku_id === B.pe.TIER_2 && n) return null;
        let a = (0, l.YW)({ type: t, isPreview: n, isCoachmark: i })
            .with({ type: "EDITOR", isPreview: !0 }, () => H.intl.format(H.t.G8yQXi, { onPremiumClick: f.e }))
            .with({ type: "EDITOR", isCoachmark: !0 }, () => H.intl.string(H.t.jmZiNu))
            .with({ type: "EDITOR", isPreview: !1 }, () => H.intl.string(H.t.dqDFwe))
            .with({ isPreview: !0 }, () => H.intl.format(H.t["DWIjJ/"], { onPremiumClick: f.e }))
            .otherwise(() => H.intl.string(H.t["np0X/u"]));
        return (0, r.jsx)(c.D, { variant: "text-sm/normal", className: k.W$, children: a });
    },
    Q = (e) => {
        let {
                renderCTAButtons: t,
                isCoachmark: n,
                titleTextVariant: i,
                headingClassName: s,
                titleClassName: l,
                titleIconClassName: E,
            } = e,
            { type: d } = a.useContext(Y),
            [c] = (0, o.yK)([P.A], () => [P.A.isPreview]),
            u = (0, C.V)()?.subscription_trial?.sku_id === B.pe.TIER_2;
        return "EDITOR" === d && c && u
            ? (0, r.jsx)(p.Ay, {
                  type: B.e.PREMIUM_CLIENT_THEME_TRY_IT_OUT,
                  subscriptionTier: B.pe.TIER_2,
                  children: H.intl.format(H.t.G8yQXi, { onPremiumClick: f.e }),
              })
            : (0, r.jsxs)("div", {
                  className: k.wx,
                  children: [
                      (0, r.jsxs)("div", {
                          className: _()(k.so, s),
                          children: [
                              (0, r.jsx)(K, {
                                  type: d,
                                  isPreview: c,
                                  isCoachmark: n,
                                  textVariant: i,
                                  textClassName: l,
                                  iconClassName: E,
                              }),
                              (0, r.jsx)($, { type: d, isPreview: c, isCoachmark: n }),
                          ],
                      }),
                      t?.(),
                  ],
              });
    },
    q = (e) => {
        let { disabled: t, size: i } = e,
            { type: s, delay: _ } = a.useContext(Y),
            { analyticsLocations: l } = (0, N.Ay)(S.A.CLIENT_THEMES_THEME_SELECTOR),
            [d, c] = (0, o.yK)([P.A], () => [P.A.isPreview, P.A.gradientPreset?.id]),
            [I, R] = a.useState(!1),
            [f, C] = a.useState(-1),
            p = (0, o.bG)([T.A], () => T.A.useReducedMotion);
        a.useEffect(() => {
            ((f === G.Jm.length - 2 && "EDITOR" === s) || c === E.ju.EASTER_EGG) && R(!0);
        }, [f, s, c]);
        let m = (e, t) => {
                if (
                    ((0, U.bc)(e.id),
                    j({ isPersisted: !d, analyticsLocations: l, themeName: E.ju[e.id] }),
                    d && "SETTINGS" === s
                        ? L(e)
                        : (0, A.u_)(
                              {
                                  backgroundGradientPresetId: e.id,
                                  theme: e.theme,
                                  useSystemTheme: d ? w.Q_.OFF : void 0,
                              },
                              _,
                          ),
                    null != t)
                ) {
                    if ((I && R(!1), t <= f || 0 === t)) return void C(0);
                    C((e) => e + 1);
                }
            },
            L = async (e) => {
                await (0, A.u_)(
                    { backgroundGradientPresetId: e.id, theme: e.theme, useSystemTheme: d ? w.Q_.OFF : void 0 },
                    F.Sb.SLOW_USER_ACTION,
                ),
                    (0, O.nf)(O.HP.CLIENT_THEMES),
                    (0, g.default)();
            };
        return (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(M.A, {
                    size: i,
                    isDisabled: t,
                    onSelect: () => {
                        (0, O.nf)(O.HP.CUSTOM_THEME, {
                            from: "SETTINGS" === s ? O.xv.SETTING : O.xv.CLIENT_THEMES_EDITOR,
                        }),
                            "SETTINGS" === s && (0, g.default)();
                    },
                }),
                G.Jm.filter((e) => {
                    let { id: t } = e;
                    return t !== E.ju.EASTER_EGG;
                }).map((e, n) =>
                    (0, r.jsx)(
                        y.MX,
                        {
                            size: i,
                            preset: e,
                            isSelected: c === e.id,
                            onSelect: () => m(e, n),
                            disabled: t,
                            tabIndex: 0 !== n || t ? void 0 : 0,
                            showBadge: !1,
                            showLockedBadge: !1,
                        },
                        e.id,
                    ),
                ),
                (() => {
                    if (!I) return null;
                    let e = G.ag[E.ju.EASTER_EGG];
                    if (null == e) return null;
                    async function t() {
                        let { default: e } = await n.e("3408").then(n.t.bind(n, 707827, 19));
                        return e;
                    }
                    return (0, r.jsxs)("div", {
                        className: k.kG,
                        children: [
                            (0, r.jsx)(y.MX, {
                                size: i,
                                preset: e,
                                isSelected: c === E.ju.EASTER_EGG,
                                onSelect: () => m(e),
                            }),
                            (0, r.jsx)(u.a, { importData: t, shouldAnimate: !p, className: k._7 }),
                        ],
                    });
                })(),
            ],
        });
    },
    X = (e) => {
        let { size: t, systemSelectorFirst: n, hideSystemSelector: i = !1 } = e,
            { delay: s } = a.useContext(Y),
            { analyticsLocations: _ } = (0, N.Ay)(S.A.CLIENT_THEMES_THEME_SELECTOR),
            [l, E, d] = (0, o.yK)([L.A, D.Ay, P.A], () => [
                L.A.theme,
                null == P.A.gradientPreset && null == h.eh.getSetting().customUserThemeSettings,
                D.Ay.useSystemTheme === w.Q_.ON,
            ]),
            c = (e) => {
                (0, U.Py)(),
                    j({ isPersisted: !0, analyticsLocations: _, themeName: `default ${e}` }),
                    (0, A.u_)({ theme: e }, s);
            },
            u = !i && !0 === n;
        return (0, r.jsxs)(r.Fragment, {
            children: [
                u &&
                    (0, r.jsx)(y.zy, {
                        size: t,
                        theme: "system",
                        isSelected: E && d,
                        onSelect: () => c("system"),
                        tabIndex: 0,
                    }),
                (0, r.jsx)(y.zy, {
                    size: t,
                    theme: V.NJ.LIGHT,
                    isSelected: E && !d && l === V.NJ.LIGHT,
                    onSelect: () => c(V.NJ.LIGHT),
                    tabIndex: u ? void 0 : 0,
                }),
                (0, r.jsx)(y.zy, {
                    size: t,
                    theme: V.NJ.DARK,
                    isSelected: E && !d && l === V.NJ.DARK,
                    onSelect: () => c(V.NJ.DARK),
                }),
                (0, r.jsx)(y.zy, {
                    size: t,
                    theme: V.NJ.DARKER,
                    isSelected: E && !d && l === V.NJ.DARKER,
                    onSelect: () => c(V.NJ.DARKER),
                }),
                (0, r.jsx)(y.zy, {
                    size: t,
                    theme: V.NJ.MIDNIGHT,
                    isSelected: E && !d && l === V.NJ.MIDNIGHT,
                    onSelect: () => c(V.NJ.MIDNIGHT),
                }),
                !i &&
                    !n &&
                    (0, r.jsx)(y.zy, { size: t, theme: "system", isSelected: E && d, onSelect: () => c("system") }),
            ],
        });
    },
    z = (e) => {
        let { type: t, children: n } = e,
            i = (0, R.GV)(),
            { ref: s, ..._ } = (0, d._u)({ orientation: "horizontal", labelledBy: i }),
            l = a.useMemo(() => ({ type: t, delay: W[t] }), [t]);
        return (0, r.jsx)(Y.Provider, {
            value: l,
            children: (0, r.jsx)("div", { ref: s, ..._, className: k.__invalid_container, children: n }),
        });
    };
(z.Basic = (e) => {
    let { className: t, hideSystemSelector: n, iconSize: i } = e;
    return (0, r.jsx)("section", {
        className: t,
        children: (0, r.jsx)(I.B, {
            direction: "horizontal",
            wrap: !0,
            gap: 8,
            style: { marginTop: 16 },
            children: (0, r.jsx)(X, { hideSystemSelector: n, size: i }),
        }),
    });
}),
    (z.Gradient = (e) => {
        let { className: t, renderCTAButtons: n, disabled: i = !1, isCoachmark: a, iconSize: s } = e;
        return (0, r.jsxs)("section", {
            className: t,
            children: [
                (0, r.jsx)(Q, { renderCTAButtons: n, isCoachmark: a }),
                (0, r.jsx)(I.B, {
                    direction: "horizontal",
                    wrap: !0,
                    gap: 8,
                    style: { marginTop: 16 },
                    children: (0, r.jsx)(q, { disabled: i, size: s }),
                }),
            ],
        });
    }),
    (z.BasicAndGradient = (e) => {
        let { isEditor: t, className: n, renderCTAButtons: i, isCoachmark: a, iconSize: s } = e;
        return (0, r.jsxs)("section", {
            className: n,
            children: [
                !t && (0, r.jsx)(Q, { renderCTAButtons: i, isCoachmark: a }),
                t &&
                    a &&
                    (0, r.jsx)(c.D, {
                        className: k.tD,
                        variant: "heading-sm/semibold",
                        children: H.intl.string(H.t.POSLGY),
                    }),
                (0, r.jsxs)(I.B, {
                    direction: "horizontal",
                    wrap: !0,
                    gap: 8,
                    justify: t ? "center" : "start",
                    style: { marginTop: 16 },
                    children: [
                        (0, r.jsx)(X, { systemSelectorFirst: !0, size: s }),
                        (0, r.jsx)(q, { disabled: !1, size: s }),
                    ],
                }),
            ],
        });
    });
let J = z;
