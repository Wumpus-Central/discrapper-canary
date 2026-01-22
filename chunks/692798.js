n.d(t, {
    Ay: () => et,
    X8: () => K,
    v0: () => H,
}),
    n(801541),
    n(896048);
var r = n(627968),
    i = n(64700),
    a = n(889137),
    s = n(311907),
    o = n(873298),
    l = n(421380),
    c = n(397927),
    u = n(817281),
    d = n(775602),
    f = n(793574),
    p = n(688810),
    _ = n(793943),
    h = n(915089),
    m = n(87719),
    g = n(234419),
    E = n(811611),
    b = n(450232),
    y = n(544028),
    O = n(964404),
    A = n(253932),
    v = n(12901),
    S = n(954571),
    I = n(823459),
    T = n(47671),
    C = n(323618),
    N = n(653523),
    R = n(385803),
    w = n(652215),
    P = n(788868),
    D = n(185928),
    x = n(355097),
    L = n(818348),
    j = n(985018),
    M = n(176240);

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

function V(e, t) {
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
        i,
        a = {};
    if ("u" > typeof Reflect && Reflect.ownKeys) {
        for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++)
            (r = n[i]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
        return a;
    }
    if (((a = B(e, t)), Object.getOwnPropertySymbols))
        for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++)
            (r = n[i]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a;
}

function B(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.getOwnPropertyNames(e);
    for (r = 0; r < a.length; r++)
        (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    return i;
}
var H = (function (e) {
    return (e.EDITOR = "EDITOR"), (e.SETTINGS = "SETTINGS"), e;
})({});
let Y = Object.freeze({
        EDITOR: x.Sb.SLOW_USER_ACTION,
        SETTINGS: x.Sb.INFREQUENT_USER_ACTION,
    }),
    W = i.createContext({}),
    K = (e) => {
        let { isPersisted: t, themeName: n, analyticsLocations: r } = e;
        S.default.track(w.HAw.CLIENT_THEME_UPDATED, {
            feature_name: P.Ae.CLIENT_THEME,
            theme_name: n,
            is_persisted: t,
            location_stack: r,
        });
    },
    z = (e) => {
        let { type: t, isPreview: n, isCoachmark: i } = e,
            s = (0, a.YW)({
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
            className: M.DD,
            children: [
                (0, r.jsx)(c.Heading, {
                    "aria-label": s,
                    className: M.Qw,
                    variant: "text-md/medium",
                    children: s,
                }),
                (0, r.jsx)(b.A, {
                    className: M.PC,
                }),
            ],
        });
    },
    q = (e) => {
        var t, n;
        let { type: i, isPreview: s, isCoachmark: o } = e;
        if ((null == (n = (0, g.V)()) || null == (t = n.subscription_trial) ? void 0 : t.sku_id) === P.pe.TIER_2 && s)
            return null;
        let l = (0, a.YW)({
            type: i,
            isPreview: s,
            isCoachmark: o,
        })
            .with(
                {
                    type: "EDITOR",
                    isPreview: !0,
                },
                () =>
                    j.intl.format(j.t.G8yQXi, {
                        onPremiumClick: () => m.Z,
                    }),
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
            .with(
                {
                    isPreview: !0,
                },
                () =>
                    j.intl.format(j.t["DWIjJ/"], {
                        onPremiumClick: () => m.Z,
                    }),
            )
            .otherwise(() => j.intl.string(j.t["np0X/u"]));
        return (0, r.jsx)(c.Heading, {
            variant: "text-sm/normal",
            className: M.W$,
            children: l,
        });
    },
    X = (e) => {
        var t, n;
        let { renderCTAButtons: a, isCoachmark: o } = e,
            { type: l } = i.useContext(W),
            [c] = (0, s.yK)([T.A], () => [T.A.isPreview]),
            u = (null == (n = (0, g.V)()) || null == (t = n.subscription_trial) ? void 0 : t.sku_id) === P.pe.TIER_2;
        return "EDITOR" === l && c && u
            ? (0, r.jsx)(E.Ay, {
                  type: P.e.PREMIUM_CLIENT_THEME_TRY_IT_OUT,
                  subscriptionTier: P.pe.TIER_2,
                  children: j.intl.format(j.t.G8yQXi, {
                      onPremiumClick: () => m.Z,
                  }),
              })
            : (0, r.jsxs)("div", {
                  className: M.wx,
                  children: [
                      (0, r.jsxs)("div", {
                          className: M.so,
                          children: [
                              (0, r.jsx)(z, {
                                  type: l,
                                  isPreview: c,
                                  isCoachmark: o,
                              }),
                              (0, r.jsx)(q, {
                                  type: l,
                                  isPreview: c,
                                  isCoachmark: o,
                              }),
                          ],
                      }),
                      null == a ? void 0 : a(),
                  ],
              });
    },
    Z = (e) => {
        let { disabled: t } = e,
            { type: a, delay: l } = i.useContext(W),
            { analyticsLocations: h } = (0, p.Ay)(f.A.CLIENT_THEMES_THEME_SELECTOR),
            [m, g] = (0, s.yK)([T.A], () => {
                var e;
                return [T.A.isPreview, null == (e = T.A.gradientPreset) ? void 0 : e.id];
            }),
            [E, b] = i.useState(!1),
            [y, O] = i.useState(-1),
            A = (0, s.bG)([d.A], () => d.A.useReducedMotion);
        i.useEffect(() => {
            ((y === R.Jm.length - 2 && "EDITOR" === a) || g === o.ju.EASTER_EGG) && b(!0);
        }, [y, a, g]);
        let S = (e, t) => {
                if (
                    ((0, I.bc)(e.id),
                    K({
                        isPersisted: !m,
                        analyticsLocations: h,
                        themeName: o.ju[e.id],
                    }),
                    m && "SETTINGS" === a
                        ? w(e)
                        : (0, u.u_)(
                              {
                                  backgroundGradientPresetId: e.id,
                                  theme: e.theme,
                                  useSystemTheme: m ? D.Q_.OFF : void 0,
                              },
                              l,
                          ),
                    null != t)
                ) {
                    if ((E && b(!1), t <= y || 0 === t)) return void O(0);
                    O((e) => e + 1);
                }
            },
            w = async (e) => {
                await (0, u.u_)(
                    {
                        backgroundGradientPresetId: e.id,
                        theme: e.theme,
                        useSystemTheme: m ? D.Q_.OFF : void 0,
                    },
                    x.Sb.SLOW_USER_ACTION,
                ),
                    (0, _.nf)(_.HP.CLIENT_THEMES),
                    (0, v.default)();
            },
            P = () => {
                if (!E) return null;
                let e = R.ag[o.ju.EASTER_EGG];
                if (null == e) return null;
                async function t() {
                    let { default: e } = await n.e("3408").then(n.t.bind(n, 707827, 19));
                    return e;
                }
                return (0, r.jsxs)("div", {
                    className: M.kG,
                    children: [
                        (0, r.jsx)(N.MX, {
                            preset: e,
                            isSelected: g === o.ju.EASTER_EGG,
                            onSelect: () => S(e),
                        }),
                        (0, r.jsx)(c.akl, {
                            importData: t,
                            shouldAnimate: !A,
                            className: M._7,
                        }),
                    ],
                });
            };
        return (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(C.A, {
                    isDisabled: t,
                    onSelect: () => {
                        (0, _.nf)(_.HP.CUSTOM_THEME, {
                            from: "SETTINGS" === a ? _.xv.SETTING : _.xv.CLIENT_THEMES_EDITOR,
                        }),
                            "SETTINGS" === a && (0, v.default)();
                    },
                }),
                R.Jm.filter((e) => {
                    let { id: t } = e;
                    return t !== o.ju.EASTER_EGG;
                }).map((e, n) =>
                    (0, r.jsx)(
                        N.MX,
                        {
                            preset: e,
                            isSelected: g === e.id,
                            onSelect: () => S(e, n),
                            disabled: t,
                            tabIndex: 0 !== n || t ? void 0 : 0,
                            showBadge: !1,
                            showLockedBadge: !1,
                        },
                        e.id,
                    ),
                ),
                P(),
            ],
        });
    },
    Q = (e) => {
        let { className: t, renderCTAButtons: n, disabled: i = !1, isCoachmark: a } = e;
        return (0, r.jsxs)("section", {
            className: t,
            children: [
                (0, r.jsx)(X, {
                    renderCTAButtons: n,
                    isCoachmark: a,
                }),
                (0, r.jsx)(c.BJc, {
                    direction: "horizontal",
                    wrap: !0,
                    gap: 8,
                    style: {
                        marginTop: 16,
                    },
                    children: (0, r.jsx)(Z, {
                        disabled: i,
                    }),
                }),
            ],
        });
    },
    $ = (e) => {
        let { systemSelectorFirst: t, hideSystemSelector: n = !1 } = e,
            { delay: a } = i.useContext(W),
            { analyticsLocations: o } = (0, p.Ay)(f.A.CLIENT_THEMES_THEME_SELECTOR),
            [l, c, d] = (0, s.yK)([y.A, O.Ay, T.A], () => [
                y.A.theme,
                null == T.A.gradientPreset && null == A.eh.getSetting().customUserThemeSettings,
                O.Ay.useSystemTheme === D.Q_.ON,
            ]),
            _ = (e) => {
                (0, I.Py)(),
                    K({
                        isPersisted: !0,
                        analyticsLocations: o,
                        themeName: "default ".concat(e),
                    }),
                    (0, u.u_)(
                        {
                            theme: e,
                        },
                        a,
                    );
            };
        return (0, r.jsxs)(r.Fragment, {
            children: [
                !n &&
                    t &&
                    (0, r.jsx)(N.zy, {
                        theme: "system",
                        isSelected: c && d,
                        onSelect: () => _("system"),
                    }),
                (0, r.jsx)(N.zy, {
                    theme: L.NJ.LIGHT,
                    isSelected: c && !d && l === L.NJ.LIGHT,
                    onSelect: () => _(L.NJ.LIGHT),
                }),
                (0, r.jsx)(N.zy, {
                    theme: L.NJ.DARK,
                    isSelected: c && !d && l === L.NJ.DARK,
                    onSelect: () => _(L.NJ.DARK),
                }),
                (0, r.jsx)(N.zy, {
                    theme: L.NJ.DARKER,
                    isSelected: c && !d && l === L.NJ.DARKER,
                    onSelect: () => _(L.NJ.DARKER),
                }),
                (0, r.jsx)(N.zy, {
                    theme: L.NJ.MIDNIGHT,
                    isSelected: c && !d && l === L.NJ.MIDNIGHT,
                    onSelect: () => _(L.NJ.MIDNIGHT),
                }),
                !n &&
                    !t &&
                    (0, r.jsx)(N.zy, {
                        theme: "system",
                        isSelected: c && d,
                        onSelect: () => _("system"),
                    }),
            ],
        });
    },
    J = (e) => {
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
                    (0, r.jsx)(c.Heading, {
                        className: M.tD,
                        variant: "heading-sm/semibold",
                        children: j.intl.string(j.t.POSLGY),
                    }),
                (0, r.jsxs)(c.BJc, {
                    direction: "horizontal",
                    wrap: !0,
                    gap: 8,
                    justify: t ? "center" : "start",
                    style: {
                        marginTop: 16,
                    },
                    children: [
                        (0, r.jsx)($, {
                            systemSelectorFirst: !0,
                        }),
                        (0, r.jsx)(Z, {
                            disabled: !1,
                        }),
                    ],
                }),
            ],
        });
    },
    ee = (e) => {
        let { type: t, children: n } = e,
            a = (0, h.GV)(),
            s = (0, l._u)({
                orientation: "horizontal",
                labelledBy: a,
            }),
            { ref: o } = s,
            c = F(s, ["ref"]),
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
                V(
                    U(
                        {
                            ref: o,
                        },
                        c,
                    ),
                    {
                        className: M.__invalid_container,
                        children: n,
                    },
                ),
            ),
        });
    };
(ee.Basic = (e) => {
    let { className: t, hideSystemSelector: n } = e;
    return (0, r.jsx)("section", {
        className: t,
        children: (0, r.jsx)(c.BJc, {
            direction: "horizontal",
            wrap: !0,
            gap: 8,
            style: {
                marginTop: 16,
            },
            children: (0, r.jsx)($, {
                hideSystemSelector: n,
            }),
        }),
    });
}),
    (ee.Gradient = Q),
    (ee.BasicAndGradient = J);
let et = ee;
