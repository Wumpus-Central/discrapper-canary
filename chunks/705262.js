n.d(t, {
    Yk: () => W,
    ZP: () => ee,
    yH: () => F
}),
    n(314940),
    n(953529),
    n(388685);
var r = n(200651),
    i = n(192379),
    o = n(120356),
    a = n.n(o),
    s = n(278074),
    l = n(442837),
    c = n(524437),
    u = n(481060),
    d = n(153867),
    f = n(607070),
    _ = n(100527),
    p = n(906732),
    h = n(313201),
    m = n(540059),
    g = n(98278),
    E = n(639119),
    b = n(311476),
    y = n(165583),
    v = n(587446),
    O = n(210887),
    I = n(740492),
    S = n(626135),
    T = n(238302),
    N = n(514361),
    A = n(583901),
    C = n(469115),
    R = n(981631),
    P = n(474936),
    w = n(874893),
    D = n(526761),
    L = n(231338),
    x = n(388032),
    M = n(622581);
function k(e, t, n) {
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
function j(e) {
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
                k(e, t, n[t]);
            });
    }
    return e;
}
function U(e, t) {
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
function G(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : U(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function B(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = V(e, t);
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        for (r = 0; r < o.length; r++) (n = o[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function V(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        o = Object.keys(e);
    for (r = 0; r < o.length; r++) (n = o[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
var F = (function (e) {
    return (e.EDITOR = 'EDITOR'), (e.SETTINGS = 'SETTINGS'), e;
})({});
let Z = Object.freeze({
        EDITOR: D.fy.SLOW_USER_ACTION,
        SETTINGS: D.fy.INFREQUENT_USER_ACTION
    }),
    H = i.createContext({}),
    W = (e) => {
        let { isPersisted: t, themeName: n, analyticsLocations: r } = e;
        S.default.track(R.rMx.CLIENT_THEME_UPDATED, {
            feature_name: P.QP.CLIENT_THEME,
            theme_name: n,
            is_persisted: t,
            location_stack: r
        });
    },
    Y = (e) => {
        let { type: t, isPreview: n, isCoachmark: i } = e,
            o = (0, m.Q3)('GradientSelectorsTitle'),
            { enabled: a } = b.Z.useExperiment(
                { location: 'GradientSelectorsTitle' },
                {
                    autoTrackExposure: !1,
                    disable: !n
                }
            ),
            l = (0, s.EQ)({
                isVisualRefreshEnabled: o,
                type: t,
                isPreview: n,
                isCoachmark: i,
                appearanceUpsellExperimentEnabled: a
            })
                .with(
                    {
                        type: 'EDITOR',
                        isCoachmark: !0,
                        isPreview: !0
                    },
                    () => x.NW.string(x.t.D29k19)
                )
                .with(
                    {
                        type: 'EDITOR',
                        isCoachmark: !0
                    },
                    () => x.NW.string(x.t['8+vbqa'])
                )
                .with({ appearanceUpsellExperimentEnabled: !0 }, () => x.NW.string(x.t.Ksh3io))
                .with({ isVisualRefreshEnabled: !0 }, () => x.NW.string(x.t.hjV0fX))
                .otherwise(() => x.NW.string(x.t.OCOOiI));
        return (0, r.jsxs)('div', {
            className: M.title,
            children: [
                (0, r.jsx)(u.X6q, {
                    'aria-label': l,
                    className: M.titleText,
                    variant: 'text-md/medium',
                    children: l
                }),
                (!a || 'EDITOR' === t) && (0, r.jsx)(v.Z, { className: M.premiumIcon })
            ]
        });
    },
    K = (e) => {
        var t, n;
        let { type: i, isPreview: o, isCoachmark: a } = e,
            l = (null == (n = (0, E.N)()) || null == (t = n.subscription_trial) ? void 0 : t.sku_id) === P.Si.TIER_2,
            { enabled: c } = b.Z.useExperiment(
                { location: 'GradientSelectorsTitle' },
                {
                    autoTrackExposure: !1,
                    disable: !o
                }
            );
        if (l && o) return null;
        let d = (0, s.EQ)({
            type: i,
            isPreview: o,
            isCoachmark: a
        })
            .with(
                {
                    type: 'EDITOR',
                    isPreview: !0
                },
                () => x.NW.format(x.t.G8yQXl, { onPremiumClick: () => g.z })
            )
            .with(
                {
                    type: 'EDITOR',
                    isCoachmark: !0
                },
                () => x.NW.string(x.t.jmZiNj)
            )
            .with(
                {
                    type: 'EDITOR',
                    isPreview: !1
                },
                () => x.NW.string(x.t.dqDFwc)
            )
            .with({ isPreview: !0 }, () => x.NW.format(x.t.DWIjJy, { onPremiumClick: () => g.z }))
            .otherwise(() => x.NW.string(x.t['np0X/v']));
        return c
            ? (0, r.jsxs)('div', {
                  className: M.description,
                  children: [
                      (0, r.jsx)(u.SrA, {
                          size: 'md',
                          color: 'currentColor',
                          className: M.nitroWheel
                      }),
                      (0, r.jsx)(u.X6q, {
                          variant: 'text-sm/normal',
                          children: x.NW.format(x.t.x2dQxM, {
                              onClick: () => {
                                  (0, g.$)();
                              }
                          })
                      })
                  ]
              })
            : (0, r.jsx)(u.X6q, {
                  variant: 'text-sm/normal',
                  className: M.subtext,
                  children: d
              });
    },
    z = (e) => {
        var t, n;
        let { renderCTAButtons: o, isCoachmark: a } = e,
            { type: s } = i.useContext(H),
            [c] = (0, l.Wu)([N.Z], () => [N.Z.isPreview]),
            u = (null == (n = (0, E.N)()) || null == (t = n.subscription_trial) ? void 0 : t.sku_id) === P.Si.TIER_2;
        return 'EDITOR' === s && c && u
            ? (0, r.jsx)(y.ZP, {
                  type: P.cd.PREMIUM_CLIENT_THEME_TRY_IT_OUT,
                  subscriptionTier: P.Si.TIER_2,
                  children: x.NW.format(x.t.G8yQXl, { onPremiumClick: () => g.z })
              })
            : (0, r.jsxs)('div', {
                  className: M.header,
                  children: [
                      (0, r.jsxs)('div', {
                          className: M.headings,
                          children: [
                              (0, r.jsx)(Y, {
                                  type: s,
                                  isPreview: c,
                                  isCoachmark: a
                              }),
                              (0, r.jsx)(K, {
                                  type: s,
                                  isPreview: c,
                                  isCoachmark: a
                              })
                          ]
                      }),
                      null == o ? void 0 : o()
                  ]
              });
    },
    q = (e) => {
        let { disabled: t } = e,
            { type: o, delay: a } = i.useContext(H),
            { analyticsLocations: s } = (0, p.ZP)(_.Z.CLIENT_THEMES_THEME_SELECTOR),
            [h, m] = (0, l.Wu)([N.Z], () => {
                var e;
                return [N.Z.isPreview, null == (e = N.Z.gradientPreset) ? void 0 : e.id];
            }),
            [g, E] = i.useState(!1),
            [y, v] = i.useState(-1),
            O = (0, l.e7)([f.Z], () => f.Z.useReducedMotion);
        i.useEffect(() => {
            ((y === C.XV.length - 2 && 'EDITOR' === o) || m === c.Us.EASTER_EGG) && E(!0);
        }, [y, o, m]);
        let { enabled: I } = b.Z.useExperiment({ location: 'useGradientSelectors' }, { autoTrackExposure: !1 }),
            S = (e, t) => {
                if (
                    ((0, T.zO)(e.id),
                    W({
                        isPersisted: !h,
                        analyticsLocations: s,
                        themeName: c.Us[e.id]
                    }),
                    h && 'SETTINGS' === o && I)
                )
                    return void (0, u.ZDy)(
                        async () => {
                            let { default: e } = await n.e('68192').then(n.bind(n, 742234));
                            return (t) =>
                                (0, r.jsx)(
                                    e,
                                    G(
                                        j(
                                            {
                                                analyticsSource: _.Z.CLIENT_THEMES_THEME_SELECTOR,
                                                analyticsLocation: {
                                                    section: R.jXE.SETTINGS_APPEARANCE_THEME_PICKER,
                                                    object: R.qAy.BUTTON_ICON
                                                }
                                            },
                                            t
                                        ),
                                        { onClose: () => ((0, T.kj)(), t.onClose()) }
                                    )
                                );
                        },
                        { onCloseCallback: T.kj }
                    );
                if (
                    ((0, d.ZI)(
                        {
                            backgroundGradientPresetId: e.id,
                            theme: e.theme,
                            useSystemTheme: h ? w.KW.OFF : void 0
                        },
                        a
                    ),
                    null != t)
                ) {
                    if ((g && E(!1), t <= y || 0 === t)) return void v(0);
                    v((e) => e + 1);
                }
            },
            P = () => {
                if (!g) return null;
                let e = C.qt[c.Us.EASTER_EGG];
                if (null == e) return null;
                async function t() {
                    let { default: e } = await n.e('5217').then(n.t.bind(n, 801048, 19));
                    return e;
                }
                return (0, r.jsxs)('div', {
                    className: M.easterEggSelection,
                    children: [
                        (0, r.jsx)(A.DR, {
                            preset: e,
                            isSelected: m === c.Us.EASTER_EGG,
                            onSelect: () => S(e)
                        }),
                        (0, r.jsx)(u.Fmz, {
                            importData: t,
                            shouldAnimate: !O,
                            className: M.sparkles
                        })
                    ]
                });
            };
        return (0, r.jsxs)(r.Fragment, {
            children: [
                C.XV.filter((e) => {
                    let { id: t } = e;
                    return t !== c.Us.EASTER_EGG;
                }).map((e, n) =>
                    (0, r.jsx)(
                        A.DR,
                        {
                            preset: e,
                            isSelected: m === e.id,
                            onSelect: () => S(e, n),
                            disabled: t,
                            tabIndex: 0 !== n || t ? void 0 : 0,
                            showBadge: !1,
                            showLockedBadge: 'SETTINGS' === o && I && h
                        },
                        e.id
                    )
                ),
                P()
            ]
        });
    },
    Q = (e) => {
        let { className: t, renderCTAButtons: n, disabled: i = !1, isCoachmark: o } = e;
        return (0, r.jsxs)('section', {
            className: t,
            children: [
                (0, r.jsx)(z, {
                    renderCTAButtons: n,
                    isCoachmark: o
                }),
                (0, r.jsx)('div', {
                    className: M.presets,
                    children: (0, r.jsx)(q, { disabled: i })
                })
            ]
        });
    },
    X = (e) => {
        let { systemSelectorFirst: t, hideSystemSelector: n = !1 } = e,
            { delay: o } = i.useContext(H),
            { analyticsLocations: a } = (0, p.ZP)(_.Z.CLIENT_THEMES_THEME_SELECTOR),
            [s, c, u] = (0, l.Wu)([O.Z, I.ZP, N.Z], () => [O.Z.theme, null == N.Z.gradientPreset, I.ZP.useSystemTheme === w.KW.ON]),
            f = (e) => {
                (0, T.xs)(),
                    W({
                        isPersisted: !0,
                        analyticsLocations: a,
                        themeName: 'default '.concat(e)
                    }),
                    (0, d.ZI)({ theme: e }, o);
            },
            h = (0, m.Q3)('appearance_settings');
        return (0, r.jsxs)(r.Fragment, {
            children: [
                !n &&
                    t &&
                    (0, r.jsx)(A.bD, {
                        theme: 'system',
                        isSelected: c && u,
                        onSelect: () => f('system')
                    }),
                (0, r.jsx)(A.bD, {
                    theme: L.BR.LIGHT,
                    isSelected: c && !u && s === L.BR.LIGHT,
                    onSelect: () => f(L.BR.LIGHT)
                }),
                (0, r.jsx)(A.bD, {
                    theme: L.BR.DARK,
                    isSelected: c && !u && s === L.BR.DARK,
                    onSelect: () => f(L.BR.DARK)
                }),
                h &&
                    (0, r.jsxs)(r.Fragment, {
                        children: [
                            (0, r.jsx)(A.bD, {
                                theme: L.BR.DARKER,
                                isSelected: c && !u && s === L.BR.DARKER,
                                onSelect: () => f(L.BR.DARKER)
                            }),
                            (0, r.jsx)(A.bD, {
                                theme: L.BR.MIDNIGHT,
                                isSelected: c && !u && s === L.BR.MIDNIGHT,
                                onSelect: () => f(L.BR.MIDNIGHT)
                            })
                        ]
                    }),
                !n &&
                    !t &&
                    (0, r.jsx)(A.bD, {
                        theme: 'system',
                        isSelected: c && u,
                        onSelect: () => f('system')
                    })
            ]
        });
    },
    J = (e) => {
        let { isEditor: t, className: n, renderCTAButtons: i, isCoachmark: o } = e;
        return (0, r.jsxs)('section', {
            className: n,
            children: [
                !t &&
                    (0, r.jsx)(z, {
                        renderCTAButtons: i,
                        isCoachmark: o
                    }),
                t &&
                    o &&
                    (0, r.jsx)(u.X6q, {
                        className: M.upsellText,
                        variant: 'heading-sm/semibold',
                        children: x.NW.string(x.t.POSLGR)
                    }),
                (0, r.jsxs)('div', {
                    className: a()(M.presets, { [M.presetsJustify]: t }),
                    children: [(0, r.jsx)(X, { systemSelectorFirst: !0 }), (0, r.jsx)(q, { disabled: !1 })]
                })
            ]
        });
    },
    $ = (e) => {
        let { type: t, children: n } = e,
            o = (0, h.Dt)(),
            a = (0, u.arW)({
                orientation: 'horizontal',
                labelledBy: o
            }),
            { ref: s } = a,
            l = B(a, ['ref']),
            c = i.useMemo(
                () => ({
                    type: t,
                    delay: Z[t]
                }),
                [t]
            );
        return (0, r.jsx)(H.Provider, {
            value: c,
            children: (0, r.jsx)(
                'div',
                G(j({ ref: s }, l), {
                    className: M.__invalid_container,
                    children: n
                })
            )
        });
    };
($.Basic = (e) => {
    let { className: t, hideSystemSelector: n } = e;
    return (0, r.jsx)('section', {
        className: a()(M.presets, t),
        children: (0, r.jsx)(X, { hideSystemSelector: n })
    });
}),
    ($.Gradient = Q),
    ($.BasicAndGradient = J);
let ee = $;
