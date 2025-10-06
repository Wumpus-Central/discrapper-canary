n.d(t, {
    Yk: () => K,
    ZP: () => en,
    yH: () => H,
}),
    n(314940),
    n(388685);
var r = n(951288),
    i = n(647438),
    a = n(278074),
    o = n(442837),
    s = n(524437),
    l = n(755721),
    c = n(481060),
    u = n(153867),
    d = n(607070),
    f = n(100527),
    _ = n(906732),
    p = n(550385),
    h = n(313201),
    m = n(98278),
    g = n(639119),
    E = n(165583),
    b = n(587446),
    y = n(210887),
    O = n(740492),
    v = n(695346),
    I = n(342386),
    T = n(626135),
    S = n(238302),
    A = n(514361),
    C = n(803038),
    N = n(717953),
    R = n(583901),
    P = n(469115),
    w = n(981631),
    D = n(474936),
    L = n(874893),
    x = n(526761),
    M = n(231338),
    j = n(388032),
    k = n(90290);
function U(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function G(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                U(e, t, n[t]);
            });
    }
    return e;
}
function B(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function Z(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : B(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function F(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = V(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++)
            (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function V(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
var H = (function (e) {
    return (e.EDITOR = "EDITOR"), (e.SETTINGS = "SETTINGS"), e;
})({});
let Y = Object.freeze({
        EDITOR: x.fy.SLOW_USER_ACTION,
        SETTINGS: x.fy.INFREQUENT_USER_ACTION,
    }),
    W = i.createContext({}),
    K = (e) => {
        let { isPersisted: t, themeName: n, analyticsLocations: r } = e;
        T.default.track(w.rMx.CLIENT_THEME_UPDATED, {
            feature_name: D.QP.CLIENT_THEME,
            theme_name: n,
            is_persisted: t,
            location_stack: r,
        });
    },
    z = (e) => {
        let { type: t, isPreview: n, isCoachmark: i } = e,
            o = (0, a.EQ)({
                type: t,
                isPreview: n,
                isCoachmark: i,
            })
                .with(
                    {
                        type: "EDITOR",
                        isCoachmark: !0,
                        isPreview: !0,
                    },
                    () => j.intl.string(j.t.D29k19),
                )
                .with(
                    {
                        type: "EDITOR",
                        isCoachmark: !0,
                    },
                    () => j.intl.string(j.t["8+vbqa"]),
                )
                .otherwise(() => j.intl.string(j.t.hjV0fX));
        return (0, r.jsxs)("div", {
            className: k.title,
            children: [
                (0, r.jsx)(c.X6q, {
                    "aria-label": o,
                    className: k.titleText,
                    variant: "text-md/medium",
                    children: o,
                }),
                (0, r.jsx)(b.Z, { className: k.premiumIcon }),
            ],
        });
    },
    q = (e) => {
        var t, n;
        let { type: i, isPreview: o, isCoachmark: s } = e;
        if ((null == (n = (0, g.N)()) || null == (t = n.subscription_trial) ? void 0 : t.sku_id) === D.Si.TIER_2 && o)
            return null;
        let l = (0, a.EQ)({
            type: i,
            isPreview: o,
            isCoachmark: s,
        })
            .with(
                {
                    type: "EDITOR",
                    isPreview: !0,
                },
                () => j.intl.format(j.t.G8yQXl, { onPremiumClick: () => m.z }),
            )
            .with(
                {
                    type: "EDITOR",
                    isCoachmark: !0,
                },
                () => j.intl.string(j.t.jmZiNj),
            )
            .with(
                {
                    type: "EDITOR",
                    isPreview: !1,
                },
                () => j.intl.string(j.t.dqDFwc),
            )
            .with({ isPreview: !0 }, () => j.intl.format(j.t.DWIjJy, { onPremiumClick: () => m.z }))
            .otherwise(() => j.intl.string(j.t["np0X/v"]));
        return (0, r.jsx)(c.X6q, {
            variant: "text-sm/normal",
            className: k.subtext,
            children: l,
        });
    },
    X = (e) => {
        var t, n;
        let { renderCTAButtons: a, isCoachmark: s } = e,
            { type: l } = i.useContext(W),
            [c] = (0, o.Wu)([A.Z], () => [A.Z.isPreview]),
            u = (null == (n = (0, g.N)()) || null == (t = n.subscription_trial) ? void 0 : t.sku_id) === D.Si.TIER_2;
        return "EDITOR" === l && c && u
            ? (0, r.jsx)(E.ZP, {
                  type: D.cd.PREMIUM_CLIENT_THEME_TRY_IT_OUT,
                  subscriptionTier: D.Si.TIER_2,
                  children: j.intl.format(j.t.G8yQXl, { onPremiumClick: () => m.z }),
              })
            : (0, r.jsxs)("div", {
                  className: k.header,
                  children: [
                      (0, r.jsxs)("div", {
                          className: k.headings,
                          children: [
                              (0, r.jsx)(z, {
                                  type: l,
                                  isPreview: c,
                                  isCoachmark: s,
                              }),
                              (0, r.jsx)(q, {
                                  type: l,
                                  isPreview: c,
                                  isCoachmark: s,
                              }),
                          ],
                      }),
                      null == a ? void 0 : a(),
                  ],
              });
    },
    Q = (e) => {
        let { disabled: t } = e,
            a = C.Mc.useExperiment({ location: "GradientSelectors" }),
            { type: l, delay: h } = i.useContext(W),
            { analyticsLocations: m } = (0, _.ZP)(f.Z.CLIENT_THEMES_THEME_SELECTOR),
            [g, E] = (0, o.Wu)([A.Z], () => {
                var e;
                return [A.Z.isPreview, null == (e = A.Z.gradientPreset) ? void 0 : e.id];
            }),
            [b, y] = i.useState(!1),
            [O, v] = i.useState(-1),
            T = (0, o.e7)([d.Z], () => d.Z.useReducedMotion),
            w = C.Mc.useExperiment({ location: "GradientSelectors" }).enabled;
        i.useEffect(() => {
            ((O === P.XV.length - 2 && "EDITOR" === l) || E === s.Us.EASTER_EGG) && y(!0);
        }, [O, l, E]);
        let D = (e, t) => {
                if (
                    ((0, S.zO)(e.id),
                    K({
                        isPersisted: !g,
                        analyticsLocations: m,
                        themeName: s.Us[e.id],
                    }),
                    g && a.v2EditorEnabled && "SETTINGS" === l
                        ? M(e)
                        : (0, u.ZI)(
                              {
                                  backgroundGradientPresetId: e.id,
                                  theme: e.theme,
                                  useSystemTheme: g ? L.KW.OFF : void 0,
                              },
                              h,
                          ),
                    null != t)
                ) {
                    if ((b && y(!1), t <= O || 0 === t)) return void v(0);
                    v((e) => e + 1);
                }
            },
            M = async (e) => {
                await (0, u.ZI)(
                    {
                        backgroundGradientPresetId: e.id,
                        theme: e.theme,
                        useSystemTheme: g ? L.KW.OFF : void 0,
                    },
                    x.fy.SLOW_USER_ACTION,
                ),
                    (0, p.XO)(p.wh.CLIENT_THEMES),
                    (0, I.default)();
            },
            j = () => {
                if (!b) return null;
                let e = P.qt[s.Us.EASTER_EGG];
                if (null == e) return null;
                async function t() {
                    let { default: e } = await n.e("5217").then(n.t.bind(n, 801048, 19));
                    return e;
                }
                return (0, r.jsxs)("div", {
                    className: k.easterEggSelection,
                    children: [
                        (0, r.jsx)(R.DR, {
                            preset: e,
                            isSelected: E === s.Us.EASTER_EGG,
                            onSelect: () => D(e),
                        }),
                        (0, r.jsx)(c.Fmz, {
                            importData: t,
                            shouldAnimate: !T,
                            className: k.sparkles,
                        }),
                    ],
                });
            };
        return (0, r.jsxs)(r.Fragment, {
            children: [
                w &&
                    (0, r.jsx)(N.Z, {
                        isDisabled: t,
                        onSelect: () => {
                            (0, p.XO)(p.wh.CUSTOM_THEME, {
                                from: "SETTINGS" === l ? p.tE.SETTING : p.tE.CLIENT_THEMES_EDITOR,
                            }),
                                "SETTINGS" === l && (0, I.default)();
                        },
                    }),
                P.XV.filter((e) => {
                    let { id: t } = e;
                    return t !== s.Us.EASTER_EGG;
                }).map((e, n) =>
                    (0, r.jsx)(
                        R.DR,
                        {
                            preset: e,
                            isSelected: E === e.id,
                            onSelect: () => D(e, n),
                            disabled: t,
                            tabIndex: 0 !== n || t ? void 0 : 0,
                            showBadge: !1,
                            showLockedBadge: !1,
                        },
                        e.id,
                    ),
                ),
                j(),
            ],
        });
    },
    J = (e) => {
        let { className: t, renderCTAButtons: n, disabled: i = !1, isCoachmark: a } = e;
        return (0, r.jsxs)("section", {
            className: t,
            children: [
                (0, r.jsx)(X, {
                    renderCTAButtons: n,
                    isCoachmark: a,
                }),
                (0, r.jsx)(c.Kqy, {
                    direction: "horizontal",
                    wrap: !0,
                    gap: 8,
                    style: { marginTop: 16 },
                    children: (0, r.jsx)(Q, { disabled: i }),
                }),
            ],
        });
    },
    $ = (e) => {
        let { systemSelectorFirst: t, hideSystemSelector: n = !1 } = e,
            { delay: a } = i.useContext(W),
            { analyticsLocations: s } = (0, _.ZP)(f.Z.CLIENT_THEMES_THEME_SELECTOR),
            [l, c, d] = (0, o.Wu)([y.Z, O.ZP, A.Z], () => [
                y.Z.theme,
                null == A.Z.gradientPreset && null == v.L1.getSetting().customUserThemeSettings,
                O.ZP.useSystemTheme === L.KW.ON,
            ]),
            p = (e) => {
                (0, S.xs)(),
                    K({
                        isPersisted: !0,
                        analyticsLocations: s,
                        themeName: "default ".concat(e),
                    }),
                    (0, u.ZI)({ theme: e }, a);
            };
        return (0, r.jsxs)(r.Fragment, {
            children: [
                !n &&
                    t &&
                    (0, r.jsx)(R.bD, {
                        theme: "system",
                        isSelected: c && d,
                        onSelect: () => p("system"),
                    }),
                (0, r.jsx)(R.bD, {
                    theme: M.BR.LIGHT,
                    isSelected: c && !d && l === M.BR.LIGHT,
                    onSelect: () => p(M.BR.LIGHT),
                }),
                (0, r.jsx)(R.bD, {
                    theme: M.BR.DARK,
                    isSelected: c && !d && l === M.BR.DARK,
                    onSelect: () => p(M.BR.DARK),
                }),
                (0, r.jsx)(R.bD, {
                    theme: M.BR.DARKER,
                    isSelected: c && !d && l === M.BR.DARKER,
                    onSelect: () => p(M.BR.DARKER),
                }),
                (0, r.jsx)(R.bD, {
                    theme: M.BR.MIDNIGHT,
                    isSelected: c && !d && l === M.BR.MIDNIGHT,
                    onSelect: () => p(M.BR.MIDNIGHT),
                }),
                !n &&
                    !t &&
                    (0, r.jsx)(R.bD, {
                        theme: "system",
                        isSelected: c && d,
                        onSelect: () => p("system"),
                    }),
            ],
        });
    },
    ee = (e) => {
        let { isEditor: t, className: n, renderCTAButtons: i, isCoachmark: a } = e;
        return (0, r.jsxs)("section", {
            className: n,
            children: [
                !t &&
                    (0, r.jsx)(X, {
                        renderCTAButtons: i,
                        isCoachmark: a,
                    }),
                t &&
                    a &&
                    (0, r.jsx)(c.X6q, {
                        className: k.upsellText,
                        variant: "heading-sm/semibold",
                        children: j.intl.string(j.t.POSLGR),
                    }),
                (0, r.jsxs)(c.Kqy, {
                    direction: "horizontal",
                    wrap: !0,
                    gap: 8,
                    justify: t ? "center" : "start",
                    style: { marginTop: 16 },
                    children: [(0, r.jsx)($, { systemSelectorFirst: !0 }), (0, r.jsx)(Q, { disabled: !1 })],
                }),
            ],
        });
    },
    et = (e) => {
        let { type: t, children: n } = e,
            a = (0, h.Dt)(),
            o = (0, l.Jb)({
                orientation: "horizontal",
                labelledBy: a,
            }),
            { ref: s } = o,
            c = F(o, ["ref"]),
            u = i.useMemo(
                () => ({
                    type: t,
                    delay: Y[t],
                }),
                [t],
            );
        return (0, r.jsx)(W.Provider, {
            value: u,
            children: (0, r.jsx)(
                "div",
                Z(G({ ref: s }, c), {
                    className: k.__invalid_container,
                    children: n,
                }),
            ),
        });
    };
(et.Basic = (e) => {
    let { className: t, hideSystemSelector: n } = e;
    return (0, r.jsx)("section", {
        className: t,
        children: (0, r.jsx)(c.Kqy, {
            direction: "horizontal",
            wrap: !0,
            gap: 8,
            style: { marginTop: 16 },
            children: (0, r.jsx)($, { hideSystemSelector: n }),
        }),
    });
}),
    (et.Gradient = J),
    (et.BasicAndGradient = ee);
let en = et;
