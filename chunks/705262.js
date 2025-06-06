n.d(t, {
    Yk: () => q,
    ZP: () => ei,
    yH: () => W
}),
    n(314940),
    n(388685);
var r = n(255367),
    i = n(73800),
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
    E = n(540059),
    b = n(98278),
    y = n(639119),
    O = n(165583),
    v = n(587446),
    I = n(210887),
    S = n(740492),
    T = n(695346),
    A = n(626135),
    N = n(238302),
    C = n(514361),
    P = n(803038),
    R = n(717953),
    w = n(583901),
    D = n(469115),
    L = n(981631),
    x = n(474936),
    k = n(874893),
    M = n(526761),
    j = n(231338),
    U = n(388032),
    G = n(622581);
function B(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function F(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                B(e, t, n[t]);
            });
    }
    return e;
}
function V(e, t) {
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
            : V(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function H(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = Y(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++) (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function Y(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
var W = (function (e) {
    return (e.EDITOR = 'EDITOR'), (e.SETTINGS = 'SETTINGS'), e;
})({});
let K = Object.freeze({
        EDITOR: M.fy.SLOW_USER_ACTION,
        SETTINGS: M.fy.INFREQUENT_USER_ACTION
    }),
    z = i.createContext({}),
    q = (e) => {
        let { isPersisted: t, themeName: n, analyticsLocations: r } = e;
        A.default.track(L.rMx.CLIENT_THEME_UPDATED, {
            feature_name: x.QP.CLIENT_THEME,
            theme_name: n,
            is_persisted: t,
            location_stack: r
        });
    },
    Q = (e) => {
        let { type: t, isPreview: n, isCoachmark: i } = e,
            a = (0, E.Q3)('GradientSelectorsTitle'),
            o = (0, s.EQ)({
                isVisualRefreshEnabled: a,
                type: t,
                isPreview: n,
                isCoachmark: i
            })
                .with(
                    {
                        type: 'EDITOR',
                        isCoachmark: !0,
                        isPreview: !0
                    },
                    () => U.intl.string(U.t.D29k19)
                )
                .with(
                    {
                        type: 'EDITOR',
                        isCoachmark: !0
                    },
                    () => U.intl.string(U.t['8+vbqa'])
                )
                .with({ isVisualRefreshEnabled: !0 }, () => U.intl.string(U.t.hjV0fX))
                .otherwise(() => U.intl.string(U.t.OCOOiI));
        return (0, r.jsxs)('div', {
            className: G.title,
            children: [
                (0, r.jsx)(u.X6q, {
                    'aria-label': o,
                    className: G.titleText,
                    variant: 'text-md/medium',
                    children: o
                }),
                (0, r.jsx)(v.Z, { className: G.premiumIcon })
            ]
        });
    },
    X = (e) => {
        var t, n;
        let { type: i, isPreview: a, isCoachmark: o } = e;
        if ((null == (n = (0, y.N)()) || null == (t = n.subscription_trial) ? void 0 : t.sku_id) === x.Si.TIER_2 && a) return null;
        let l = (0, s.EQ)({
            type: i,
            isPreview: a,
            isCoachmark: o
        })
            .with(
                {
                    type: 'EDITOR',
                    isPreview: !0
                },
                () => U.intl.format(U.t.G8yQXl, { onPremiumClick: () => b.z })
            )
            .with(
                {
                    type: 'EDITOR',
                    isCoachmark: !0
                },
                () => U.intl.string(U.t.jmZiNj)
            )
            .with(
                {
                    type: 'EDITOR',
                    isPreview: !1
                },
                () => U.intl.string(U.t.dqDFwc)
            )
            .with({ isPreview: !0 }, () => U.intl.format(U.t.DWIjJy, { onPremiumClick: () => b.z }))
            .otherwise(() => U.intl.string(U.t['np0X/v']));
        return (0, r.jsx)(u.X6q, {
            variant: 'text-sm/normal',
            className: G.subtext,
            children: l
        });
    },
    J = (e) => {
        var t, n;
        let { renderCTAButtons: a, isCoachmark: o } = e,
            { type: s } = i.useContext(z),
            [c] = (0, l.Wu)([C.Z], () => [C.Z.isPreview]),
            u = (null == (n = (0, y.N)()) || null == (t = n.subscription_trial) ? void 0 : t.sku_id) === x.Si.TIER_2;
        return 'EDITOR' === s && c && u
            ? (0, r.jsx)(O.ZP, {
                  type: x.cd.PREMIUM_CLIENT_THEME_TRY_IT_OUT,
                  subscriptionTier: x.Si.TIER_2,
                  children: U.intl.format(U.t.G8yQXl, { onPremiumClick: () => b.z })
              })
            : (0, r.jsxs)('div', {
                  className: G.header,
                  children: [
                      (0, r.jsxs)('div', {
                          className: G.headings,
                          children: [
                              (0, r.jsx)(Q, {
                                  type: s,
                                  isPreview: c,
                                  isCoachmark: o
                              }),
                              (0, r.jsx)(X, {
                                  type: s,
                                  isPreview: c,
                                  isCoachmark: o
                              })
                          ]
                      }),
                      null == a ? void 0 : a()
                  ]
              });
    },
    $ = (e) => {
        let { disabled: t } = e,
            { type: a, delay: o } = i.useContext(z),
            { analyticsLocations: s } = (0, h.ZP)(p.Z.CLIENT_THEMES_THEME_SELECTOR),
            [g, E] = (0, l.Wu)([C.Z], () => {
                var e;
                return [C.Z.isPreview, null == (e = C.Z.gradientPreset) ? void 0 : e.id];
            }),
            [b, y] = i.useState(!1),
            [O, v] = i.useState(-1),
            I = (0, l.e7)([_.Z], () => _.Z.useReducedMotion),
            S = P.M.useExperiment({ location: 'GradientSelectors' }).enabled;
        i.useEffect(() => {
            ((O === D.XV.length - 2 && 'EDITOR' === a) || E === c.Us.EASTER_EGG) && y(!0);
        }, [O, a, E]);
        let T = (e, t) => {
                if (
                    ((0, N.zO)(e.id),
                    q({
                        isPersisted: !g,
                        analyticsLocations: s,
                        themeName: c.Us[e.id]
                    }),
                    (0, f.ZI)(
                        {
                            backgroundGradientPresetId: e.id,
                            theme: e.theme,
                            useSystemTheme: g ? k.KW.OFF : void 0
                        },
                        o
                    ),
                    null != t)
                ) {
                    if ((b && y(!1), t <= O || 0 === t)) return void v(0);
                    v((e) => e + 1);
                }
            },
            A = () => {
                if (!b) return null;
                let e = D.qt[c.Us.EASTER_EGG];
                if (null == e) return null;
                async function t() {
                    let { default: e } = await n.e('5217').then(n.t.bind(n, 801048, 19));
                    return e;
                }
                return (0, r.jsxs)('div', {
                    className: G.easterEggSelection,
                    children: [
                        (0, r.jsx)(w.DR, {
                            preset: e,
                            isSelected: E === c.Us.EASTER_EGG,
                            onSelect: () => T(e)
                        }),
                        (0, r.jsx)(u.Fmz, {
                            importData: t,
                            shouldAnimate: !I,
                            className: G.sparkles
                        })
                    ]
                });
            };
        return (0, r.jsxs)(r.Fragment, {
            children: [
                S &&
                    (0, r.jsx)(R.Z, {
                        onSelect: () => {
                            (0, m.XO)(m.wh.CUSTOM_THEME, { from: 'SETTINGS' === a ? m.tE.SETTING : m.tE.CLIENT_THEMES_EDITOR }), 'SETTINGS' === a && (0, d.xf)();
                        }
                    }),
                D.XV.filter((e) => {
                    let { id: t } = e;
                    return t !== c.Us.EASTER_EGG;
                }).map((e, n) =>
                    (0, r.jsx)(
                        w.DR,
                        {
                            preset: e,
                            isSelected: E === e.id,
                            onSelect: () => T(e, n),
                            disabled: t,
                            tabIndex: 0 !== n || t ? void 0 : 0,
                            showBadge: !1,
                            showLockedBadge: !1
                        },
                        e.id
                    )
                ),
                A()
            ]
        });
    },
    ee = (e) => {
        let { className: t, renderCTAButtons: n, disabled: i = !1, isCoachmark: a } = e;
        return (0, r.jsxs)('section', {
            className: t,
            children: [
                (0, r.jsx)(J, {
                    renderCTAButtons: n,
                    isCoachmark: a
                }),
                (0, r.jsx)('div', {
                    className: G.presets,
                    children: (0, r.jsx)($, { disabled: i })
                })
            ]
        });
    },
    et = (e) => {
        let { systemSelectorFirst: t, hideSystemSelector: n = !1 } = e,
            { delay: a } = i.useContext(z),
            { analyticsLocations: o } = (0, h.ZP)(p.Z.CLIENT_THEMES_THEME_SELECTOR),
            [s, c, u] = (0, l.Wu)([I.Z, S.ZP, C.Z], () => [I.Z.theme, null == C.Z.gradientPreset && null == T.L1.getSetting().customUserThemeSettings, S.ZP.useSystemTheme === k.KW.ON]),
            d = (e) => {
                (0, N.xs)(),
                    q({
                        isPersisted: !0,
                        analyticsLocations: o,
                        themeName: 'default '.concat(e)
                    }),
                    (0, f.ZI)({ theme: e }, a);
            },
            _ = (0, E.Q3)('appearance_settings');
        return (0, r.jsxs)(r.Fragment, {
            children: [
                !n &&
                    t &&
                    (0, r.jsx)(w.bD, {
                        theme: 'system',
                        isSelected: c && u,
                        onSelect: () => d('system')
                    }),
                (0, r.jsx)(w.bD, {
                    theme: j.BR.LIGHT,
                    isSelected: c && !u && s === j.BR.LIGHT,
                    onSelect: () => d(j.BR.LIGHT)
                }),
                (0, r.jsx)(w.bD, {
                    theme: j.BR.DARK,
                    isSelected: c && !u && s === j.BR.DARK,
                    onSelect: () => d(j.BR.DARK)
                }),
                _ &&
                    (0, r.jsxs)(r.Fragment, {
                        children: [
                            (0, r.jsx)(w.bD, {
                                theme: j.BR.DARKER,
                                isSelected: c && !u && s === j.BR.DARKER,
                                onSelect: () => d(j.BR.DARKER)
                            }),
                            (0, r.jsx)(w.bD, {
                                theme: j.BR.MIDNIGHT,
                                isSelected: c && !u && s === j.BR.MIDNIGHT,
                                onSelect: () => d(j.BR.MIDNIGHT)
                            })
                        ]
                    }),
                !n &&
                    !t &&
                    (0, r.jsx)(w.bD, {
                        theme: 'system',
                        isSelected: c && u,
                        onSelect: () => d('system')
                    })
            ]
        });
    },
    en = (e) => {
        let { isEditor: t, className: n, renderCTAButtons: i, isCoachmark: a } = e;
        return (0, r.jsxs)('section', {
            className: n,
            children: [
                !t &&
                    (0, r.jsx)(J, {
                        renderCTAButtons: i,
                        isCoachmark: a
                    }),
                t &&
                    a &&
                    (0, r.jsx)(u.X6q, {
                        className: G.upsellText,
                        variant: 'heading-sm/semibold',
                        children: U.intl.string(U.t.POSLGR)
                    }),
                (0, r.jsxs)('div', {
                    className: o()(G.presets, { [G.presetsJustify]: t }),
                    children: [(0, r.jsx)(et, { systemSelectorFirst: !0 }), (0, r.jsx)($, { disabled: !1 })]
                })
            ]
        });
    },
    er = (e) => {
        let { type: t, children: n } = e,
            a = (0, g.Dt)(),
            o = (0, u.arW)({
                orientation: 'horizontal',
                labelledBy: a
            }),
            { ref: s } = o,
            l = H(o, ['ref']),
            c = i.useMemo(
                () => ({
                    type: t,
                    delay: K[t]
                }),
                [t]
            );
        return (0, r.jsx)(z.Provider, {
            value: c,
            children: (0, r.jsx)(
                'div',
                Z(F({ ref: s }, l), {
                    className: G.__invalid_container,
                    children: n
                })
            )
        });
    };
(er.Basic = (e) => {
    let { className: t, hideSystemSelector: n } = e;
    return (0, r.jsx)('section', {
        className: o()(G.presets, t),
        children: (0, r.jsx)(et, { hideSystemSelector: n })
    });
}),
    (er.Gradient = ee),
    (er.BasicAndGradient = en);
let ei = er;
