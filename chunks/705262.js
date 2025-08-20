n.d(t, {
    Yk: () => z,
    ZP: () => er,
    yH: () => Y,
}),
    n(314940),
    n(388685);
var r = n(951288),
    i = n(647438),
    a = n(120356),
    o = n.n(a),
    s = n(278074),
    l = n(442837),
    c = n(524437),
    u = n(481060),
    d = n(37234),
    f = n(153867),
    _ = n(607070),
    p = n(100527),
    h = n(906732),
    m = n(550385),
    g = n(313201),
    E = n(98278),
    b = n(639119),
    y = n(165583),
    O = n(587446),
    v = n(210887),
    I = n(740492),
    T = n(695346),
    S = n(626135),
    A = n(238302),
    C = n(514361),
    N = n(803038),
    R = n(717953),
    P = n(583901),
    w = n(469115),
    D = n(981631),
    x = n(474936),
    L = n(874893),
    j = n(526761),
    M = n(231338),
    k = n(388032),
    U = n(227674);
function G(e, t, n) {
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
function B(e) {
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
                G(e, t, n[t]);
            });
    }
    return e;
}
function Z(e, t) {
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
function V(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : Z(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function F(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = H(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++)
            (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function H(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
var Y = (function (e) {
    return (e.EDITOR = "EDITOR"), (e.SETTINGS = "SETTINGS"), e;
})({});
let W = Object.freeze({
        EDITOR: j.fy.SLOW_USER_ACTION,
        SETTINGS: j.fy.INFREQUENT_USER_ACTION,
    }),
    K = i.createContext({}),
    z = (e) => {
        let { isPersisted: t, themeName: n, analyticsLocations: r } = e;
        S.default.track(D.rMx.CLIENT_THEME_UPDATED, {
            feature_name: x.QP.CLIENT_THEME,
            theme_name: n,
            is_persisted: t,
            location_stack: r,
        });
    },
    q = (e) => {
        let { type: t, isPreview: n, isCoachmark: i } = e,
            a = (0, s.EQ)({
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
                    () => k.intl.string(k.t.D29k19),
                )
                .with(
                    {
                        type: "EDITOR",
                        isCoachmark: !0,
                    },
                    () => k.intl.string(k.t["8+vbqa"]),
                )
                .otherwise(() => k.intl.string(k.t.hjV0fX));
        return (0, r.jsxs)("div", {
            className: U.title,
            children: [
                (0, r.jsx)(u.X6q, {
                    "aria-label": a,
                    className: U.titleText,
                    variant: "text-md/medium",
                    children: a,
                }),
                (0, r.jsx)(O.Z, { className: U.premiumIcon }),
            ],
        });
    },
    X = (e) => {
        var t, n;
        let { type: i, isPreview: a, isCoachmark: o } = e;
        if ((null == (n = (0, b.N)()) || null == (t = n.subscription_trial) ? void 0 : t.sku_id) === x.Si.TIER_2 && a)
            return null;
        let l = (0, s.EQ)({
            type: i,
            isPreview: a,
            isCoachmark: o,
        })
            .with(
                {
                    type: "EDITOR",
                    isPreview: !0,
                },
                () => k.intl.format(k.t.G8yQXl, { onPremiumClick: () => E.z }),
            )
            .with(
                {
                    type: "EDITOR",
                    isCoachmark: !0,
                },
                () => k.intl.string(k.t.jmZiNj),
            )
            .with(
                {
                    type: "EDITOR",
                    isPreview: !1,
                },
                () => k.intl.string(k.t.dqDFwc),
            )
            .with({ isPreview: !0 }, () => k.intl.format(k.t.DWIjJy, { onPremiumClick: () => E.z }))
            .otherwise(() => k.intl.string(k.t["np0X/v"]));
        return (0, r.jsx)(u.X6q, {
            variant: "text-sm/normal",
            className: U.subtext,
            children: l,
        });
    },
    Q = (e) => {
        var t, n;
        let { renderCTAButtons: a, isCoachmark: o } = e,
            { type: s } = i.useContext(K),
            [c] = (0, l.Wu)([C.Z], () => [C.Z.isPreview]),
            u = (null == (n = (0, b.N)()) || null == (t = n.subscription_trial) ? void 0 : t.sku_id) === x.Si.TIER_2;
        return "EDITOR" === s && c && u
            ? (0, r.jsx)(y.ZP, {
                  type: x.cd.PREMIUM_CLIENT_THEME_TRY_IT_OUT,
                  subscriptionTier: x.Si.TIER_2,
                  children: k.intl.format(k.t.G8yQXl, { onPremiumClick: () => E.z }),
              })
            : (0, r.jsxs)("div", {
                  className: U.header,
                  children: [
                      (0, r.jsxs)("div", {
                          className: U.headings,
                          children: [
                              (0, r.jsx)(q, {
                                  type: s,
                                  isPreview: c,
                                  isCoachmark: o,
                              }),
                              (0, r.jsx)(X, {
                                  type: s,
                                  isPreview: c,
                                  isCoachmark: o,
                              }),
                          ],
                      }),
                      null == a ? void 0 : a(),
                  ],
              });
    },
    J = (e) => {
        let { disabled: t } = e,
            a = N.Mc.useExperiment({ location: "GradientSelectors" }),
            { type: o, delay: s } = i.useContext(K),
            { analyticsLocations: g } = (0, h.ZP)(p.Z.CLIENT_THEMES_THEME_SELECTOR),
            [E, b] = (0, l.Wu)([C.Z], () => {
                var e;
                return [C.Z.isPreview, null == (e = C.Z.gradientPreset) ? void 0 : e.id];
            }),
            [y, O] = i.useState(!1),
            [v, I] = i.useState(-1),
            T = (0, l.e7)([_.Z], () => _.Z.useReducedMotion),
            S = N.Mc.useExperiment({ location: "GradientSelectors" }).enabled;
        i.useEffect(() => {
            ((v === w.XV.length - 2 && "EDITOR" === o) || b === c.Us.EASTER_EGG) && O(!0);
        }, [v, o, b]);
        let D = (e, t) => {
                if (a.v2EditorEnabled && "SETTINGS" === o) (0, m.XO)(m.wh.CLIENT_THEMES), (0, d.xf)();
                else if (
                    ((0, A.zO)(e.id),
                    z({
                        isPersisted: !E,
                        analyticsLocations: g,
                        themeName: c.Us[e.id],
                    }),
                    (0, f.ZI)(
                        {
                            backgroundGradientPresetId: e.id,
                            theme: e.theme,
                            useSystemTheme: E ? L.KW.OFF : void 0,
                        },
                        s,
                    ),
                    null != t)
                ) {
                    if ((y && O(!1), t <= v || 0 === t)) return void I(0);
                    I((e) => e + 1);
                }
            },
            x = () => {
                if (!y) return null;
                let e = w.qt[c.Us.EASTER_EGG];
                if (null == e) return null;
                async function t() {
                    let { default: e } = await n.e("5217").then(n.t.bind(n, 801048, 19));
                    return e;
                }
                return (0, r.jsxs)("div", {
                    className: U.easterEggSelection,
                    children: [
                        (0, r.jsx)(P.DR, {
                            preset: e,
                            isSelected: b === c.Us.EASTER_EGG,
                            onSelect: () => D(e),
                        }),
                        (0, r.jsx)(u.Fmz, {
                            importData: t,
                            shouldAnimate: !T,
                            className: U.sparkles,
                        }),
                    ],
                });
            };
        return (0, r.jsxs)(r.Fragment, {
            children: [
                S &&
                    (0, r.jsx)(R.Z, {
                        isDisabled: t,
                        onSelect: () => {
                            (0, m.XO)(m.wh.CUSTOM_THEME, {
                                from: "SETTINGS" === o ? m.tE.SETTING : m.tE.CLIENT_THEMES_EDITOR,
                            }),
                                "SETTINGS" === o && (0, d.xf)();
                        },
                    }),
                w.XV.filter((e) => {
                    let { id: t } = e;
                    return t !== c.Us.EASTER_EGG;
                }).map((e, n) =>
                    (0, r.jsx)(
                        P.DR,
                        {
                            preset: e,
                            isSelected: b === e.id,
                            onSelect: () => D(e, n),
                            disabled: t,
                            tabIndex: 0 !== n || t ? void 0 : 0,
                            showBadge: !1,
                            showLockedBadge: !1,
                        },
                        e.id,
                    ),
                ),
                x(),
            ],
        });
    },
    $ = (e) => {
        let { className: t, renderCTAButtons: n, disabled: i = !1, isCoachmark: a } = e;
        return (0, r.jsxs)("section", {
            className: t,
            children: [
                (0, r.jsx)(Q, {
                    renderCTAButtons: n,
                    isCoachmark: a,
                }),
                (0, r.jsx)("div", {
                    className: U.presets,
                    children: (0, r.jsx)(J, { disabled: i }),
                }),
            ],
        });
    },
    ee = (e) => {
        let { systemSelectorFirst: t, hideSystemSelector: n = !1 } = e,
            { delay: a } = i.useContext(K),
            { analyticsLocations: o } = (0, h.ZP)(p.Z.CLIENT_THEMES_THEME_SELECTOR),
            [s, c, u] = (0, l.Wu)([v.Z, I.ZP, C.Z], () => [
                v.Z.theme,
                null == C.Z.gradientPreset && null == T.L1.getSetting().customUserThemeSettings,
                I.ZP.useSystemTheme === L.KW.ON,
            ]),
            d = (e) => {
                (0, A.xs)(),
                    z({
                        isPersisted: !0,
                        analyticsLocations: o,
                        themeName: "default ".concat(e),
                    }),
                    (0, f.ZI)({ theme: e }, a);
            };
        return (0, r.jsxs)(r.Fragment, {
            children: [
                !n &&
                    t &&
                    (0, r.jsx)(P.bD, {
                        theme: "system",
                        isSelected: c && u,
                        onSelect: () => d("system"),
                    }),
                (0, r.jsx)(P.bD, {
                    theme: M.BR.LIGHT,
                    isSelected: c && !u && s === M.BR.LIGHT,
                    onSelect: () => d(M.BR.LIGHT),
                }),
                (0, r.jsx)(P.bD, {
                    theme: M.BR.DARK,
                    isSelected: c && !u && s === M.BR.DARK,
                    onSelect: () => d(M.BR.DARK),
                }),
                (0, r.jsx)(P.bD, {
                    theme: M.BR.DARKER,
                    isSelected: c && !u && s === M.BR.DARKER,
                    onSelect: () => d(M.BR.DARKER),
                }),
                (0, r.jsx)(P.bD, {
                    theme: M.BR.MIDNIGHT,
                    isSelected: c && !u && s === M.BR.MIDNIGHT,
                    onSelect: () => d(M.BR.MIDNIGHT),
                }),
                !n &&
                    !t &&
                    (0, r.jsx)(P.bD, {
                        theme: "system",
                        isSelected: c && u,
                        onSelect: () => d("system"),
                    }),
            ],
        });
    },
    et = (e) => {
        let { isEditor: t, className: n, renderCTAButtons: i, isCoachmark: a } = e;
        return (0, r.jsxs)("section", {
            className: n,
            children: [
                !t &&
                    (0, r.jsx)(Q, {
                        renderCTAButtons: i,
                        isCoachmark: a,
                    }),
                t &&
                    a &&
                    (0, r.jsx)(u.X6q, {
                        className: U.upsellText,
                        variant: "heading-sm/semibold",
                        children: k.intl.string(k.t.POSLGR),
                    }),
                (0, r.jsxs)("div", {
                    className: o()(U.presets, { [U.presetsJustify]: t }),
                    children: [(0, r.jsx)(ee, { systemSelectorFirst: !0 }), (0, r.jsx)(J, { disabled: !1 })],
                }),
            ],
        });
    },
    en = (e) => {
        let { type: t, children: n } = e,
            a = (0, g.Dt)(),
            o = (0, u.arW)({
                orientation: "horizontal",
                labelledBy: a,
            }),
            { ref: s } = o,
            l = F(o, ["ref"]),
            c = i.useMemo(
                () => ({
                    type: t,
                    delay: W[t],
                }),
                [t],
            );
        return (0, r.jsx)(K.Provider, {
            value: c,
            children: (0, r.jsx)(
                "div",
                V(B({ ref: s }, l), {
                    className: U.__invalid_container,
                    children: n,
                }),
            ),
        });
    };
(en.Basic = (e) => {
    let { className: t, hideSystemSelector: n } = e;
    return (0, r.jsx)("section", {
        className: o()(U.presets, t),
        children: (0, r.jsx)(ee, { hideSystemSelector: n }),
    });
}),
    (en.Gradient = $),
    (en.BasicAndGradient = et);
let er = en;
