(n.d(t, { Z: () => et }), n(388685));
var r = n(255367),
    i = n(73800),
    a = n(120356),
    o = n.n(a),
    s = n(442837),
    l = n(704215),
    c = n(680018),
    u = n(146187),
    d = n(861066),
    _ = n(179538),
    f = n(755721),
    p = n(481060),
    h = n(153867),
    m = n(230711),
    g = n(493773),
    E = n(100527),
    b = n(906732),
    y = n(550385),
    O = n(266454),
    v = n(784238),
    I = n(767714),
    T = n(612659),
    S = n(781391),
    A = n(210887),
    N = n(233398),
    C = n(263198),
    R = n(866419),
    P = n(803038),
    w = n(507962),
    D = n(877865),
    L = n(536847),
    x = n(981631),
    k = n(921944),
    M = n(474936),
    j = n(671147),
    U = n(388032),
    G = n(882903);
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
function V(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                B(e, t, n[t]);
            }));
    }
    return e;
}
function F(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        (t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r));
    }
    return n;
}
function Z(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : F(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function H(e) {
    let [t, n] = i.useState(0),
        [r, a] = i.useState(!1),
        o = i.useRef(e);
    return (
        i.useEffect(() => {
            (e === o.current || r || n((e) => e + 1), (o.current = e), a(!1));
        }, [e, r]),
        {
            key: t,
            handleInternalChange: i.useCallback((e) => (a(!0), e), [])
        }
    );
}
function Y(e) {
    let { markAsDismissed: t } = e;
    return (0, r.jsx)('div', {
        className: G.closeButton,
        children: (0, r.jsx)(u.P, {
            size: 'sm',
            onClick: () => {
                (null == t || t(k.L.USER_DISMISS), (0, y.Ll)());
            }
        })
    });
}
function W() {
    return (0, r.jsxs)('div', {
        className: G.headerContainer,
        children: [
            (0, r.jsx)(p.Text, {
                variant: 'text-md/bold',
                children: U.intl.string(j.default['AsmU8/'])
            }),
            (0, r.jsx)(p.ua7, {
                text: U.intl.string(U.t['5AFxuL']),
                children: (e) =>
                    (0, r.jsx)(
                        p.SrA,
                        V(
                            {
                                size: 'custom',
                                height: 20,
                                width: 20,
                                colorClass: G.nitroIcon
                            },
                            e
                        )
                    )
            }),
            (0, r.jsx)(Y, {})
        ]
    });
}
function K(e) {
    let { markAsDismissed: t, isCoachmark: n } = e;
    return (0, O.Nj)(l.z.CUSTOM_THEME_COACHMARK) ? (n ? (0, r.jsx)(z, { markAsDismissed: t }) : (0, r.jsx)(W, {})) : (0, r.jsx)(z, { markAsDismissed: () => (0, O.Q3)(l.z.CUSTOM_THEME_COACHMARK) });
}
function z(e) {
    let { markAsDismissed: t } = e,
        n = (0, T.m)(M.p9.TIER_2);
    return (0, r.jsxs)('div', {
        className: G.coachmarkHeaderContainer,
        children: [
            (0, r.jsxs)('div', {
                className: G.badgeAndCloseRow,
                children: [(0, r.jsx)(p.lBU, { text: U.intl.string(U.t.oW0eUV) }), (0, r.jsx)(Y, { markAsDismissed: t })]
            }),
            (0, r.jsxs)('div', {
                className: G.coachmarkHeaderTextContainer,
                children: [
                    (0, r.jsx)(p.X6q, {
                        variant: 'heading-lg/extrabold',
                        children: U.intl.string(j.default['23QUzs'])
                    }),
                    (0, r.jsx)(p.Text, {
                        className: G.subtitle,
                        variant: 'text-sm/medium',
                        color: 'text-muted',
                        children: U.intl.string(n ? j.default.TRCE4u : j.default['UV/Vtr'])
                    })
                ]
            })
        ]
    });
}
function q(e) {
    let { gradientAngle: t, setGradientAngle: n } = e,
        { key: i, handleInternalChange: a } = H(t);
    return (0, r.jsxs)('div', {
        className: o()(G.sliderContainer, G.gradientDirectionSliderContainer),
        children: [
            (0, r.jsx)(p.Text, {
                variant: 'text-sm/medium',
                children: U.intl.string(j.default.dZkwg4)
            }),
            (0, r.jsx)(
                p.iRW,
                {
                    initialValue: t,
                    defaultValue: 0,
                    minValue: 0,
                    maxValue: 360,
                    onValueChange: (e) => {
                        ((0, w.fR)(), a(e), n(e));
                    },
                    onValueRender: (e) => ''.concat(Math.round(e), '\xB0'),
                    keyboardStep: 1
                },
                i
            )
        ]
    });
}
function X(e) {
    let { chassisMixAmount: t, setChassisMixAmount: n } = e,
        { key: i, handleInternalChange: a } = H(t);
    return (0, r.jsxs)('div', {
        className: G.sliderContainer,
        children: [
            (0, r.jsx)(p.Text, {
                variant: 'text-sm/medium',
                children: U.intl.string(j.default.xlXkaG)
            }),
            (0, r.jsx)(
                p.iRW,
                {
                    initialValue: t,
                    defaultValue: N.BH,
                    minValue: 0,
                    maxValue: 100,
                    onValueChange: (e) => {
                        ((0, w.z3)(), a(e), n(e));
                    },
                    keyboardStep: 1
                },
                i
            )
        ]
    });
}
function Q(e) {
    let { type: t } = e,
        n = i.useCallback(() => {
            var e;
            (0, w.Om)();
            let t = (0, C.C)();
            N.Ig.getState().setAll({
                colors: t.colors,
                gradientAngle: null != (e = t.angle) ? e : N.Ig.getState().gradientAngle,
                chassisMixAmount: t.intensity
            });
        }, []);
    return (0, r.jsx)(p.ua7, {
        text: U.intl.string(j.default.c9MBEB),
        children: (e) =>
            'with-text' === t
                ? (0, r.jsx)(
                      c.z,
                      Z(V({}, e), {
                          variant: 'secondary',
                          onClick: n,
                          icon: p.T$Z,
                          text: U.intl.string(j.default.c9MBEB),
                          fullWidth: !0
                      })
                  )
                : (0, r.jsx)('div', {
                      className: G.surpriseMeButton,
                      children: (0, r.jsx)(
                          d.h,
                          Z(V({}, e), {
                              variant: 'icon-only',
                              size: 'md',
                              onClick: n,
                              icon: p.T$Z,
                              'aria-label': U.intl.string(j.default.c9MBEB)
                          })
                      )
                  })
    });
}
function J(e) {
    let { onApply: t, disabled: n, fullWidth: i } = e;
    return (0, r.jsx)(p.ua7, {
        text: U.intl.string(j.default.SFyHIC),
        shouldShow: n,
        children: (e) =>
            (0, r.jsx)(
                c.z,
                Z(V({}, e), {
                    variant: 'primary',
                    onClick: t,
                    disabled: n,
                    text: U.intl.string(U.t['1Qm829']),
                    fullWidth: i
                })
            )
    });
}
function $(e) {
    let { onSaveTheme: t, canApply: n } = e,
        i = (0, T.m)(M.p9.TIER_2);
    return (
        (0, w.hf)(i, E.Z.CUSTOM_THEMES_EDITOR_COACHMARK),
        (0, r.jsxs)('div', {
            className: G.coachmarkFooterContainer,
            children: [
                (0, r.jsx)(Q, { type: 'with-text' }),
                i
                    ? (0, r.jsx)(J, {
                          disabled: !n,
                          onApply: t,
                          fullWidth: !0
                      })
                    : (0, r.jsx)(v.Z, {
                          premiumModalAnalyticsLocation: {
                              page: x.ZY5.PREMIUM_UPSELL_CUSTOM_THEMES,
                              section: x.jXE.CUSTOM_THEMES_COACHMARK_FOOTER
                          },
                          textOptions: { subscribeText: U.intl.string(U.t.JST6jo) },
                          subscriptionTier: M.Si.TIER_2,
                          showGradient: !0,
                          color: f.Tt.BRAND
                      })
            ]
        })
    );
}
function ee(e) {
    let { onSaveTheme: t, canApply: n, metadata: i } = e,
        a = (0, T.m)(M.p9.TIER_2);
    (0, w.hf)(a, E.Z.CUSTOM_THEMES_EDITOR);
    let o = () => {
        ((0, w.Vb)(), (0, O.Q3)(l.z.CUSTOM_THEME_COACHMARK), (null == i ? void 0 : i.from) === y.tE.SETTING ? (m.Z.open(), (0, y.Ll)()) : (null == i ? void 0 : i.from) === y.tE.CLIENT_THEMES_EDITOR ? (0, y.XO)(y.wh.CLIENT_THEMES) : (0, y.Ll)());
    };
    return (0, r.jsxs)('div', {
        className: G.footerContainer,
        children: [
            (0, r.jsx)(Q, { type: 'no-text' }),
            (0, r.jsx)(_.A, {
                variant: 'secondary',
                onClick: o,
                text: U.intl.string(U.t['13/7kZ'])
            }),
            a
                ? (0, r.jsx)(J, {
                      disabled: !n,
                      onApply: t
                  })
                : (0, r.jsx)(I.Z, {
                      className: G.subscribeButton,
                      size: f.zx.Sizes.MEDIUM,
                      subscriptionTier: M.Si.TIER_2,
                      showGradient: !0,
                      premiumModalAnalyticsLocation: {
                          page: x.ZY5.PREMIUM_UPSELL_CUSTOM_THEMES,
                          section: x.jXE.CUSTOM_THEMES_FOOTER
                      },
                      textOptions: { textOverride: U.intl.string(U.t.pj0XBA) }
                  })
        ]
    });
}
function et(e) {
    var t;
    let { metadata: n, markAsDismissed: a, isCoachmark: o } = e,
        u = P.M.useExperiment({ location: 'ClientThemeColorPickerTools' }).enabled,
        d = (0, R.jJ)(),
        _ = i.useRef(!1),
        { colors: f, chassisMixAmount: m, gradientAngle: v, setColors: I, setChassisMixAmount: T, setGradientAngle: C } = (0, N.Ig)(),
        [x, M] = i.useState(null != (t = f[0]) ? t : N.Dp),
        j = (0, s.e7)([A.Z], () => A.Z.theme),
        B = (0, O.Nj)(l.z.CUSTOM_THEME_ENTRYPOINT_GRADIENT),
        { analyticsLocations: V } = (0, b.ZP)(E.Z.CUSTOM_THEMES_EDITOR),
        F = async () => {
            ((_.current = !0),
                await (0, h.ZI)({
                    theme: j,
                    customUserThemeSettings: {
                        colors: f,
                        gradientColorStops: [],
                        gradientAngle: v,
                        baseMix: m
                    }
                }),
                (0, w.u7)(f, m, v, j, V),
                null == a || a(k.L.TAKE_ACTION),
                B || (0, O.Q3)(l.z.CUSTOM_THEME_ENTRYPOINT_GRADIENT),
                (0, y.Ll)(),
                (0, S.UD)());
        },
        Z = () => {
            (d(R._m.RESET_BUTTON), (0, w.uf)());
        },
        H = f.length > 0;
    return (i.useEffect(
        () => () => {
            _.current || d(R._m.EDITOR_CLOSE);
        },
        [d]
    ),
    (0, g.ZP)(() => {
        o || (0, R.lT)(f, x, I);
    }),
    u)
        ? (0, r.jsx)('div', {
              className: G.container,
              'data-app-right-panel': !0,
              children: (0, r.jsxs)('div', {
                  className: G.containerInner,
                  children: [
                      (0, r.jsx)(p.Ttm, {
                          children: (0, r.jsxs)('div', {
                              className: G.editorBody,
                              children: [
                                  (0, r.jsx)(K, {
                                      markAsDismissed: a,
                                      isCoachmark: o
                                  }),
                                  (0, r.jsx)(L.o, {}),
                                  (0, r.jsx)(D.U, {
                                      onChange: (e) => {
                                          (M(e), 0 === f.length && (0, R.lT)(f, e, I));
                                      },
                                      value: x,
                                      colors: f,
                                      setColors: I
                                  }),
                                  f.length > 1 &&
                                      (0, r.jsx)(q, {
                                          gradientAngle: v,
                                          setGradientAngle: C
                                      }),
                                  (0, r.jsx)(X, {
                                      chassisMixAmount: m,
                                      setChassisMixAmount: (e) => {
                                          (T(e), 0 === f.length && (0, R.lT)(f, x, I));
                                      }
                                  }),
                                  (0, r.jsx)(c.z, {
                                      variant: 'secondary',
                                      onClick: Z,
                                      icon: p.Oe7,
                                      text: U.intl.string(U.t.yBZMsb),
                                      fullWidth: !0
                                  })
                              ]
                          })
                      }),
                      o
                          ? (0, r.jsx)($, {
                                onSaveTheme: F,
                                canApply: H
                            })
                          : (0, r.jsx)(ee, {
                                onSaveTheme: F,
                                canApply: H,
                                metadata: n
                            })
                  ]
              })
          })
        : null;
}
