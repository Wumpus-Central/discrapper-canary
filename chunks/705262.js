n.d(t, {
    Yk: () => W,
    ZP: () => et,
    yH: () => V,
}),
    n(314940),
    n(388685);
var r = n(54381),
    i = n(473749),
    a = n(278074),
    o = n(442837),
    s = n(524437),
    l = n(755721),
    c = n(481060),
    u = n(153867),
    d = n(607070),
    f = n(100527),
    p = n(906732),
    _ = n(550385),
    m = n(313201),
    h = n(98278),
    g = n(639119),
    E = n(165583),
    b = n(587446),
    y = n(210887),
    O = n(740492),
    v = n(695346),
    S = n(342386),
    I = n(626135),
    T = n(238302),
    C = n(514361),
    A = n(717953),
    N = n(583901),
    P = n(469115),
    R = n(981631),
    w = n(474936),
    D = n(874893),
    x = n(526761),
    L = n(231338),
    j = n(388032),
    M = n(598699);
function k(e, t, n) {
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
function U(e) {
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
                k(e, t, n[t]);
            });
    }
    return e;
}
function G(e, t) {
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
            : G(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function F(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = B(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++)
            (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function B(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
var V = (function (e) {
    return (e.EDITOR = "EDITOR"), (e.SETTINGS = "SETTINGS"), e;
})({});
let H = Object.freeze({
        EDITOR: x.fy.SLOW_USER_ACTION,
        SETTINGS: x.fy.INFREQUENT_USER_ACTION,
    }),
    Y = i.createContext({}),
    W = (e) => {
        let { isPersisted: t, themeName: n, analyticsLocations: r } = e;
        I.default.track(R.rMx.CLIENT_THEME_UPDATED, {
            feature_name: w.QP.CLIENT_THEME,
            theme_name: n,
            is_persisted: t,
            location_stack: r,
        });
    },
    K = (e) => {
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
                    () => j.intl.string(j.t.D29k16),
                )
                .with(
                    {
                        type: "EDITOR",
                        isCoachmark: !0,
                    },
                    () => j.intl.string(j.t["8+vbqd"]),
                )
                .otherwise(() => j.intl.string(j.t.hjV0fZ));
        return (0, r.jsxs)("div", {
            className: M.title,
            children: [
                (0, r.jsx)(c.Heading, {
                    "aria-label": o,
                    className: M.titleText,
                    variant: "text-md/medium",
                    children: o,
                }),
                (0, r.jsx)(b.Z, { className: M.premiumIcon }),
            ],
        });
    },
    z = (e) => {
        var t, n;
        let { type: i, isPreview: o, isCoachmark: s } = e;
        if ((null == (n = (0, g.N)()) || null == (t = n.subscription_trial) ? void 0 : t.sku_id) === w.Si.TIER_2 && o)
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
                () => j.intl.format(j.t.G8yQXi, { onPremiumClick: () => h.z }),
            )
            .with(
                {
                    type: "EDITOR",
                    isCoachmark: !0,
                },
                () => j.intl.string(j.t.jmZiNu),
            )
            .with(
                {
                    type: "EDITOR",
                    isPreview: !1,
                },
                () => j.intl.string(j.t.dqDFwe),
            )
            .with({ isPreview: !0 }, () => j.intl.format(j.t["DWIjJ/"], { onPremiumClick: () => h.z }))
            .otherwise(() => j.intl.string(j.t["np0X/u"]));
        return (0, r.jsx)(c.Heading, {
            variant: "text-sm/normal",
            className: M.subtext,
            children: l,
        });
    },
    q = (e) => {
        var t, n;
        let { renderCTAButtons: a, isCoachmark: s } = e,
            { type: l } = i.useContext(Y),
            [c] = (0, o.Wu)([C.Z], () => [C.Z.isPreview]),
            u = (null == (n = (0, g.N)()) || null == (t = n.subscription_trial) ? void 0 : t.sku_id) === w.Si.TIER_2;
        return "EDITOR" === l && c && u
            ? (0, r.jsx)(E.ZP, {
                  type: w.cd.PREMIUM_CLIENT_THEME_TRY_IT_OUT,
                  subscriptionTier: w.Si.TIER_2,
                  children: j.intl.format(j.t.G8yQXi, { onPremiumClick: () => h.z }),
              })
            : (0, r.jsxs)("div", {
                  className: M.header,
                  children: [
                      (0, r.jsxs)("div", {
                          className: M.headings,
                          children: [
                              (0, r.jsx)(K, {
                                  type: l,
                                  isPreview: c,
                                  isCoachmark: s,
                              }),
                              (0, r.jsx)(z, {
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
            { type: a, delay: l } = i.useContext(Y),
            { analyticsLocations: m } = (0, p.ZP)(f.Z.CLIENT_THEMES_THEME_SELECTOR),
            [h, g] = (0, o.Wu)([C.Z], () => {
                var e;
                return [C.Z.isPreview, null == (e = C.Z.gradientPreset) ? void 0 : e.id];
            }),
            [E, b] = i.useState(!1),
            [y, O] = i.useState(-1),
            v = (0, o.e7)([d.Z], () => d.Z.useReducedMotion);
        i.useEffect(() => {
            ((y === P.XV.length - 2 && "EDITOR" === a) || g === s.Us.EASTER_EGG) && b(!0);
        }, [y, a, g]);
        let I = (e, t) => {
                if (
                    ((0, T.zO)(e.id),
                    W({
                        isPersisted: !h,
                        analyticsLocations: m,
                        themeName: s.Us[e.id],
                    }),
                    h && "SETTINGS" === a
                        ? R(e)
                        : (0, u.ZI)(
                              {
                                  backgroundGradientPresetId: e.id,
                                  theme: e.theme,
                                  useSystemTheme: h ? D.KW.OFF : void 0,
                              },
                              l,
                          ),
                    null != t)
                ) {
                    if ((E && b(!1), t <= y || 0 === t)) return void O(0);
                    O((e) => e + 1);
                }
            },
            R = async (e) => {
                await (0, u.ZI)(
                    {
                        backgroundGradientPresetId: e.id,
                        theme: e.theme,
                        useSystemTheme: h ? D.KW.OFF : void 0,
                    },
                    x.fy.SLOW_USER_ACTION,
                ),
                    (0, _.XO)(_.wh.CLIENT_THEMES),
                    (0, S.default)();
            },
            w = () => {
                if (!E) return null;
                let e = P.qt[s.Us.EASTER_EGG];
                if (null == e) return null;
                async function t() {
                    let { default: e } = await n.e("5217").then(n.t.bind(n, 801048, 19));
                    return e;
                }
                return (0, r.jsxs)("div", {
                    className: M.easterEggSelection,
                    children: [
                        (0, r.jsx)(N.DR, {
                            preset: e,
                            isSelected: g === s.Us.EASTER_EGG,
                            onSelect: () => I(e),
                        }),
                        (0, r.jsx)(c.Fmz, {
                            importData: t,
                            shouldAnimate: !v,
                            className: M.sparkles,
                        }),
                    ],
                });
            };
        return (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(A.Z, {
                    isDisabled: t,
                    onSelect: () => {
                        (0, _.XO)(_.wh.CUSTOM_THEME, {
                            from: "SETTINGS" === a ? _.tE.SETTING : _.tE.CLIENT_THEMES_EDITOR,
                        }),
                            "SETTINGS" === a && (0, S.default)();
                    },
                }),
                P.XV.filter((e) => {
                    let { id: t } = e;
                    return t !== s.Us.EASTER_EGG;
                }).map((e, n) =>
                    (0, r.jsx)(
                        N.DR,
                        {
                            preset: e,
                            isSelected: g === e.id,
                            onSelect: () => I(e, n),
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
    X = (e) => {
        let { className: t, renderCTAButtons: n, disabled: i = !1, isCoachmark: a } = e;
        return (0, r.jsxs)("section", {
            className: t,
            children: [
                (0, r.jsx)(q, {
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
    J = (e) => {
        let { systemSelectorFirst: t, hideSystemSelector: n = !1 } = e,
            { delay: a } = i.useContext(Y),
            { analyticsLocations: s } = (0, p.ZP)(f.Z.CLIENT_THEMES_THEME_SELECTOR),
            [l, c, d] = (0, o.Wu)([y.Z, O.ZP, C.Z], () => [
                y.Z.theme,
                null == C.Z.gradientPreset && null == v.L1.getSetting().customUserThemeSettings,
                O.ZP.useSystemTheme === D.KW.ON,
            ]),
            _ = (e) => {
                (0, T.xs)(),
                    W({
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
                    (0, r.jsx)(N.bD, {
                        theme: "system",
                        isSelected: c && d,
                        onSelect: () => _("system"),
                    }),
                (0, r.jsx)(N.bD, {
                    theme: L.BR.LIGHT,
                    isSelected: c && !d && l === L.BR.LIGHT,
                    onSelect: () => _(L.BR.LIGHT),
                }),
                (0, r.jsx)(N.bD, {
                    theme: L.BR.DARK,
                    isSelected: c && !d && l === L.BR.DARK,
                    onSelect: () => _(L.BR.DARK),
                }),
                (0, r.jsx)(N.bD, {
                    theme: L.BR.DARKER,
                    isSelected: c && !d && l === L.BR.DARKER,
                    onSelect: () => _(L.BR.DARKER),
                }),
                (0, r.jsx)(N.bD, {
                    theme: L.BR.MIDNIGHT,
                    isSelected: c && !d && l === L.BR.MIDNIGHT,
                    onSelect: () => _(L.BR.MIDNIGHT),
                }),
                !n &&
                    !t &&
                    (0, r.jsx)(N.bD, {
                        theme: "system",
                        isSelected: c && d,
                        onSelect: () => _("system"),
                    }),
            ],
        });
    },
    $ = (e) => {
        let { isEditor: t, className: n, renderCTAButtons: i, isCoachmark: a } = e;
        return (0, r.jsxs)("section", {
            className: n,
            children: [
                !t &&
                    (0, r.jsx)(q, {
                        renderCTAButtons: i,
                        isCoachmark: a,
                    }),
                t &&
                    a &&
                    (0, r.jsx)(c.Heading, {
                        className: M.upsellText,
                        variant: "heading-sm/semibold",
                        children: j.intl.string(j.t.POSLGY),
                    }),
                (0, r.jsxs)(c.Kqy, {
                    direction: "horizontal",
                    wrap: !0,
                    gap: 8,
                    justify: t ? "center" : "start",
                    style: { marginTop: 16 },
                    children: [(0, r.jsx)(J, { systemSelectorFirst: !0 }), (0, r.jsx)(Q, { disabled: !1 })],
                }),
            ],
        });
    },
    ee = (e) => {
        let { type: t, children: n } = e,
            a = (0, m.Dt)(),
            o = (0, l.Jb)({
                orientation: "horizontal",
                labelledBy: a,
            }),
            { ref: s } = o,
            c = F(o, ["ref"]),
            u = i.useMemo(
                () => ({
                    type: t,
                    delay: H[t],
                }),
                [t],
            );
        return (0, r.jsx)(Y.Provider, {
            value: u,
            children: (0, r.jsx)(
                "div",
                Z(U({ ref: s }, c), {
                    className: M.__invalid_container,
                    children: n,
                }),
            ),
        });
    };
(ee.Basic = (e) => {
    let { className: t, hideSystemSelector: n } = e;
    return (0, r.jsx)("section", {
        className: t,
        children: (0, r.jsx)(c.Kqy, {
            direction: "horizontal",
            wrap: !0,
            gap: 8,
            style: { marginTop: 16 },
            children: (0, r.jsx)(J, { hideSystemSelector: n }),
        }),
    });
}),
    (ee.Gradient = X),
    (ee.BasicAndGradient = $);
let et = ee;
