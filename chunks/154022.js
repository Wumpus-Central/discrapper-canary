(n.d(t, { Z: () => J }), n(388685));
var i = n(255367),
    r = n(73800),
    s = n(120356),
    a = n.n(s),
    l = n(392711),
    o = n.n(l),
    c = n(442837),
    d = n(481060),
    u = n(230711),
    m = n(419363),
    p = n(857595),
    g = n(607070),
    h = n(299363),
    f = n(627845),
    b = n(906732),
    x = n(313201),
    _ = n(594928),
    j = n(829716),
    E = n(786761),
    C = n(3148),
    O = n(739566),
    v = n(753206),
    S = n(440849),
    T = n(921801),
    I = n(196051),
    N = n(441729),
    y = n(626135),
    A = n(63063),
    P = n(695346),
    R = n(263937),
    D = n(996073),
    Z = n(526761),
    w = n(726985),
    k = n(981631),
    L = n(611480),
    B = n(653477),
    M = n(388032),
    U = n(698282),
    V = n(855112),
    G = n(20493),
    F = n(328756);
function H(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            i = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            i.forEach(function (t) {
                var i;
                ((i = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: i,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = i));
            }));
    }
    return e;
}
function W(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var i = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, i);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let z = (0, x.hQ)(),
    Y = (0, x.hQ)(),
    K = (0, x.hQ)(),
    q = o().debounce((e) => {
        (0, p.o2)(e);
    }, 250),
    X = o().debounce((e) => {
        (0, I.Ct)(e);
    }, 250);
function J(e) {
    let t = h.U.useExperiment({ location: 'useAccessibilityItems' }, { autoTrackExposure: !0 }).enabled,
        n = _.f.useExperiment({ location: 'UserSettingsAccessibility' }).enabled;
    return (0, i.jsxs)(d.hjN, {
        tag: d.RB0.H1,
        title: M.intl.string(M.t.G0neg4),
        children: [
            (0, i.jsx)('div', {
                className: G.marginBottom20,
                children: (0, i.jsx)(Q, {})
            }),
            t
                ? (0, i.jsx)(T.F, {
                      setting: w.s6.ACCESSIBILITY_HIGH_CONTRAST,
                      children: (0, i.jsx)($, {})
                  })
                : null,
            (0, i.jsxs)(T.F, {
                setting: w.s6.ACCESSIBILITY_SATURATION,
                children: [(0, i.jsx)(ee, {}), (0, i.jsx)(d.$i$, {})]
            }),
            (0, i.jsx)(T.F, {
                setting: w.s6.ACCESSIBILITY_LINK_DECORATIONS,
                children: (0, i.jsx)(et, {})
            }),
            (0, i.jsx)(T.F, {
                setting: w.s6.ACCESSIBILITY_ROLE_STYLE,
                children: (0, i.jsx)(en, {})
            }),
            n &&
                (0, i.jsx)(T.F, {
                    setting: w.s6.ACCESSIBILITY_DISPLAY_NAME_STYLES,
                    children: (0, i.jsx)(ei, {})
                }),
            (0, i.jsx)(T.F, {
                setting: w.s6.ACCESSIBILITY_PROFILE_COLORS,
                children: (0, i.jsx)(er, {})
            }),
            (0, f.b)()
                ? (0, i.jsxs)(T.F, {
                      setting: w.s6.ACCESSIBILITY_CONTRAST,
                      children: [(0, i.jsx)(es, {}), ' ']
                  })
                : null,
            (0, i.jsx)(T.F, {
                setting: w.s6.ACCESSIBILITY_REDUCED_MOTION,
                children: (0, i.jsx)(ea, {})
            }),
            (0, i.jsx)(T.F, {
                setting: w.s6.ACCESSIBILITY_STICKERS,
                children: (0, i.jsx)(el, {})
            }),
            (0, i.jsx)(T.F, {
                setting: w.s6.ACCESSIBILITY_MESSAGES,
                children: (0, i.jsx)(eo, {})
            }),
            (0, i.jsx)(ec, {}),
            (0, i.jsxs)(T.F, {
                setting: w.s6.ACCESSIBILITY_APPEARANCE_UPSELL,
                children: [
                    (0, i.jsx)(d.$i$, { className: G.marginTop20 }),
                    (0, i.jsx)(d.Text, {
                        className: G.marginTop20,
                        variant: 'text-md/normal',
                        children: M.intl.format(M.t.DHpTjY, {
                            onAppearanceClick() {
                                u.Z.open(k.oAB.APPEARANCE);
                            }
                        })
                    })
                ]
            })
        ]
    });
}
function Q() {
    let e = P.jU.useSetting(),
        [t] = r.useState(() => {
            let e = (0, E.e5)(
                W(
                    H(
                        {},
                        (0, C.ZP)({
                            channelId: '1337',
                            content: M.intl.formatToPlainString(M.t.bB80LC, { previewLink: 'https://discord.com/accessibility' })
                        })
                    ),
                    {
                        state: k.yb.SENT,
                        id: ''.concat(0)
                    }
                )
            );
            return ((e.colorString = 'green'), e);
        });
    return (0, i.jsx)(d.Rny, {
        children: (0, i.jsxs)(d.Zbd, {
            className: V.preview,
            'aria-hidden': !0,
            children: [
                (0, i.jsxs)('div', {
                    className: V.previewHeader,
                    children: [
                        (0, i.jsx)(d.zxk, {
                            variant: 'primary',
                            size: 'sm',
                            text: M.intl.string(M.t['2RHHg4'])
                        }),
                        (0, i.jsx)('div', {
                            className: V.previewAvatars,
                            children: [k.Skl.ONLINE, k.Skl.DND, k.Skl.IDLE].map((e) =>
                                (0, i.jsx)(
                                    d.Xo$,
                                    {
                                        'aria-label': M.intl.string(M.t.lqaIxM),
                                        src: F,
                                        size: d.EFr.SIZE_32,
                                        status: e
                                    },
                                    e
                                )
                            )
                        })
                    ]
                }),
                (0, i.jsx)('div', {
                    className: V.previewMessage,
                    children: (0, i.jsx)(v.Z, {
                        compact: e,
                        author: W(H({}, (0, O.ZH)(t)), { colorString: '#DD80F4' }),
                        message: t
                    })
                })
            ]
        })
    });
}
function $() {
    let e = (0, c.e7)([g.Z], () => g.Z.isHighContrastModeEnabled);
    return (0, i.jsx)(d.hjN, {
        children: (0, i.jsx)(d.j7V, {
            value: e,
            onChange: function (e) {
                (0, p.vW)(e ? g.X.HIGH : g.X.DEFAULT);
            },
            note: 'Enhance visibility with bold colors and sharp contrast.',
            children: 'High Contrast Mode'
        })
    });
}
function ee() {
    let { saturation: e, desaturateUserColors: t } = (0, c.cj)([g.Z], () => ({
        saturation: g.Z.saturation,
        desaturateUserColors: g.Z.desaturateUserColors
    }));
    return (0, i.jsxs)(d.hjN, {
        className: G.marginTop20,
        children: [
            (0, i.jsx)(d.vwX, {
                id: z,
                className: G.marginBottom8,
                children: M.intl.string(M.t['5PWWCQ'])
            }),
            (0, i.jsx)(d.R94, {
                id: Y,
                type: d.R94.Types.DESCRIPTION,
                className: G.marginBottom20,
                children: M.intl.string(M.t['0PbE/P'])
            }),
            (0, i.jsx)(d.iRW, {
                'aria-labelledby': z,
                'aria-describedby': Y,
                markers: k.yqN.SATURATION_INCREMENTS,
                equidistant: !0,
                stickToMarkers: !0,
                maxValue: 1,
                minValue: 0,
                initialValue: e,
                onValueChange: q,
                onMarkerRender: (e) => ((100 * e) % 2 == 0 ? ''.concat(100 * e, '%') : void 0)
            }),
            (0, i.jsx)(T.F, {
                setting: w.s6.ACCESSIBILITY_SATURATION_CUSTOM_COLOR,
                children: (0, i.jsx)(d.j7V, {
                    hideBorder: !0,
                    className: a()(G.marginTop20, G.marginBottom20),
                    value: t,
                    onChange: p.f1,
                    note: M.intl.string(M.t.nlAOER),
                    children: M.intl.string(M.t.bQCodH)
                })
            })
        ]
    });
}
function et() {
    let e = (0, c.e7)([g.Z], () => g.Z.alwaysShowLinkDecorations);
    return (0, i.jsx)(d.xJW, {
        className: G.marginTop20,
        children: (0, i.jsx)(d.j7V, {
            note: M.intl.string(M.t['72i5GB']),
            value: e,
            onChange: function () {
                (0, p.gs)(!e);
            },
            children: M.intl.string(M.t.OLZFBw)
        })
    });
}
function en() {
    let e = (0, c.e7)([g.Z], () => g.Z.roleStyle);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsxs)(d.xJW, {
                title: M.intl.string(M.t.uSOPWl),
                className: G.marginTop20,
                children: [
                    (0, i.jsx)(d.R94, {
                        type: d.R94.Types.DESCRIPTION,
                        className: G.marginBottom8,
                        children: M.intl.string(M.t['86hjzc'])
                    }),
                    (0, i.jsx)(d.FXm, {
                        options: [
                            {
                                name: M.intl.string(M.t.YEOEi4),
                                value: 'username'
                            },
                            {
                                name: M.intl.string(M.t.mQaro6),
                                value: 'dot'
                            },
                            {
                                name: M.intl.string(M.t.Ji2EVF),
                                value: 'hidden'
                            }
                        ],
                        onChange: function (e) {
                            (0, p.u1)(e.value);
                        },
                        value: e
                    })
                ]
            }),
            (0, i.jsx)(d.$i$, { className: G.marginTop20 })
        ]
    });
}
function ei() {
    let e = (0, c.e7)([g.Z], () => g.Z.displayNameStylesEnabled),
        { analyticsLocations: t } = (0, b.ZP)();
    return (0, i.jsx)(d.xJW, {
        className: G.marginTop20,
        children: (0, i.jsx)(d.j7V, {
            value: e,
            onChange: function (e) {
                (0, p.X2)(e);
            },
            note: M.intl.format(U.default.L8U56u, {
                onClickOpenModal() {
                    (0, j.I)({ analyticsLocations: t });
                }
            }),
            children: M.intl.string(U.default['2gFUEx'])
        })
    });
}
function er() {
    let e = (0, c.e7)([g.Z], () => g.Z.syncProfileThemeWithUserTheme),
        t = r.useRef(null);
    return (
        (0, D.Z)(t, Z.rP.SYNC_PROFILE_THEME_WITH_USER_THEME),
        (0, i.jsx)(d.xJW, {
            ref: t,
            title: M.intl.string(M.t.BT8Bmp),
            className: a()(G.marginTop20, V.syncProfileThemeWithUserTheme),
            children: (0, i.jsx)(T.F, {
                setting: w.s6.ACCESSIBILITY_PROFILE_COLORS_SYNC_THEMES,
                children: (0, i.jsx)(d.j7V, {
                    note: M.intl.format(M.t.u6UjrK, {
                        onThemeClick() {
                            u.Z.open(k.oAB.APPEARANCE);
                        }
                    }),
                    className: G.marginTop20,
                    value: e,
                    onChange: p.Uv,
                    children: M.intl.string(M.t['sSY+mJ'])
                })
            })
        })
    );
}
function es() {
    let [e] = (0, c.Wu)([g.Z], () => [g.Z.syncForcedColors, g.Z.systemForcedColors]),
        [t, n] = r.useState(e);
    r.useEffect(() => {
        n(e);
    }, [e]);
    let s = r.useRef(null);
    r.useEffect(() => {
        (null != s.current && (clearTimeout(s.current), (s.current = null)), t !== e && (s.current = setTimeout(() => (0, p.qz)(t), 150)));
    }, [t, e]);
    let a = M.intl.format(M.t.GwEVEx, { learnMoreLink: A.Z.getArticleURL(k.BhN.FORCED_COLORS) });
    return (0, i.jsx)(d.xJW, {
        title: M.intl.string(M.t.TYyfOz),
        className: G.marginTop20,
        children: (0, i.jsx)(T.F, {
            setting: w.s6.ACCESSIBILITY_CONTRAST_SYNC_FORCED_COLORS,
            children: (0, i.jsx)(d.j7V, {
                value: t,
                note: a,
                onChange: n,
                children: M.intl.string(M.t.cguieX)
            })
        })
    });
}
function ea() {
    let e = P.QK.useSetting(),
        t = P.Yk.useSetting(),
        {
            useReducedMotion: n,
            rawPrefersReducedMotion: s,
            systemPrefersReducedMotion: l,
            gifAutoPlayOverrideReason: o,
            animateEmojiOverrideReason: u
        } = (0, c.cj)([g.Z, R.Z], () => ({
            systemPrefersReducedMotion: g.Z.systemPrefersReducedMotion,
            rawPrefersReducedMotion: g.Z.rawPrefersReducedMotion,
            useReducedMotion: g.Z.useReducedMotion,
            gifAutoPlayOverrideReason: R.Z.getAppliedOverrideReasonKey('gifAutoPlay'),
            animateEmojiOverrideReason: R.Z.getAppliedOverrideReasonKey('animateEmoji')
        })),
        m = r.useRef(null);
    (0, D.Z)(m, Z.rP.REDUCED_MOTION);
    let h = r.useCallback(
            (e, t) => {
                (0, p.Zt)(t ? 'auto' : l);
            },
            [l]
        ),
        f = r.useCallback((e) => {
            (0, p.Zt)(e ? 'reduce' : 'no-preference');
        }, []);
    return (0, i.jsxs)(d.xJW, {
        ref: m,
        title: M.intl.string(M.t.e3TR1d),
        className: a()(G.marginTop20, V.reducedMotion),
        children: [
            (0, i.jsx)(d.R94, {
                type: d.R94.Types.DESCRIPTION,
                className: G.marginBottom8,
                children: M.intl.format(M.t['2l9U2t'], { helpdeskArticle: A.Z.getArticleURL(k.BhN.REDUCED_MOTION) })
            }),
            (0, i.jsx)(d.XZJ, {
                className: a()(G.marginTop20, G.marginBottom20),
                value: 'auto' === s,
                shape: d.XZJ.Shapes.BOX,
                type: d.XZJ.Types.INVERTED,
                onChange: h,
                children: (0, i.jsx)(d.Text, {
                    variant: 'text-sm/normal',
                    children: M.intl.string(M.t['+Dx+HB'])
                })
            }),
            (0, i.jsx)(T.F, {
                setting: w.s6.ACCESSIBILITY_REDUCED_MOTION_ENABLE,
                children: (0, i.jsx)(d.j7V, {
                    value: n,
                    onChange: f,
                    children: M.intl.string(M.t.b3XBzs)
                })
            }),
            (0, i.jsx)(T.F, {
                setting: w.s6.ACCESSIBILITY_REDUCED_MOTION_AUTO_PLAY_GIFS,
                children: (0, i.jsx)(d.j7V, {
                    className: G.marginBottom20,
                    value: e,
                    note: null != o ? (0, S.Z)(o) : void 0,
                    onChange: P.QK.updateSetting,
                    children: M.intl.string(M.t.Iayoh4)
                })
            }),
            (0, i.jsx)(T.F, {
                setting: w.s6.ACCESSIBILITY_REDUCED_MOTION_PLAY_ANIMATED_EMOJI,
                children: (0, i.jsx)(d.j7V, {
                    className: G.marginBottom20,
                    value: t,
                    note: null != u ? (0, S.Z)(u) : void 0,
                    onChange: P.Yk.updateSetting,
                    children: M.intl.string(M.t.iIaOlZ)
                })
            })
        ]
    });
}
function el() {
    let e = P.Wp.useSetting(),
        t = (0, c.e7)([R.Z], () => R.Z.getAppliedOverrideReasonKey('animateStickers')),
        n = r.useCallback((e) => {
            P.Wp.updateSetting(e.value);
        }, []);
    return (0, i.jsxs)(d.xJW, {
        className: G.marginTop20,
        title: M.intl.string(M.t['6NtAuL']),
        children: [
            (0, i.jsx)(d.R94, {
                type: d.R94.Types.DESCRIPTION,
                className: G.marginBottom8,
                children: null != t ? (0, S.Z)(t) : M.intl.string(M.t.GRa6U1)
            }),
            (0, i.jsx)(d.FXm, {
                options: [
                    {
                        name: M.intl.string(M.t['Xp+X2d']),
                        value: L.yr.ALWAYS_ANIMATE
                    },
                    {
                        name: M.intl.string(M.t.IlLT7e),
                        desc: M.intl.string(M.t.bIW9Tk),
                        value: L.yr.ANIMATE_ON_INTERACTION
                    },
                    {
                        name: M.intl.string(M.t.IGu8x8),
                        value: L.yr.NEVER_ANIMATE
                    }
                ],
                onChange: n,
                value: e
            })
        ]
    });
}
function eo() {
    let e = (0, c.e7)([g.Z], () => g.Z.isSubmitButtonEnabled),
        t = P.dN.useSetting(),
        n = r.useRef(null);
    return (
        (0, D.Z)(n, Z.rP.LEGACY_CHAT_INPUT),
        (0, i.jsxs)(d.xJW, {
            ref: n,
            className: G.marginTop20,
            children: [
                (0, i.jsx)(d.vwX, {
                    className: G.marginBottom8,
                    children: M.intl.string(M.t.onqU6u)
                }),
                (0, i.jsx)(T.F, {
                    setting: w.s6.ACCESSIBILITY_MESSAGES_SEND_MESSAGE_BUTTON,
                    children: (0, i.jsx)(d.j7V, {
                        className: G.marginTop20,
                        value: e,
                        onChange: p.eN,
                        children: M.intl.string(M.t['3Fztn5'])
                    })
                }),
                (0, i.jsx)(T.F, {
                    setting: w.s6.ACCESSIBILITY_MESSAGES_LEGACY_CHAT_INPUT,
                    children: (0, i.jsx)(d.j7V, {
                        className: G.marginTop8,
                        value: t,
                        note: M.intl.string(M.t.Q7wgHR),
                        onChange: (e) => {
                            (y.default.track(k.rMx.LEGACY_CHAT_INPUT_TOGGLED, {
                                enabled: e,
                                location: { section: k.jXE.SETTINGS_ACCESSIBILITY }
                            }),
                                P.dN.updateSetting(e));
                        },
                        children: M.intl.string(M.t.TZ2hZG)
                    })
                })
            ]
        })
    );
}
function ec() {
    let e = P.OW.useSetting(),
        t = (0, c.e7)([N.Z], () => N.Z.speechRate),
        [n, s] = r.useState(!1);
    return m.Zh
        ? (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsx)(T.F, {
                      setting: w.s6.ACCESSIBILITY_TEXT_TO_SPEECH,
                      children: (0, i.jsxs)(d.xJW, {
                          className: G.marginTop20,
                          children: [
                              (0, i.jsx)(d.vwX, {
                                  className: G.marginBottom8,
                                  children: M.intl.string(M.t.VpSKeH)
                              }),
                              (0, i.jsx)(T.F, {
                                  setting: w.s6.ACCESSIBILITY_TEXT_TO_SPEECH_TTS_COMMAND,
                                  children: (0, i.jsx)(d.j7V, {
                                      className: G.marginTop20,
                                      value: e,
                                      onChange: P.OW.updateSetting,
                                      children: M.intl.string(M.t.qvTIwc)
                                  })
                              })
                          ]
                      })
                  }),
                  (0, i.jsx)(T.F, {
                      setting: w.s6.ACCESSIBILITY_TEXT_TO_SPEECH_RATE,
                      children: (0, i.jsxs)(d.xJW, {
                          className: G.marginTop20,
                          children: [
                              (0, i.jsx)(d.vwX, {
                                  id: K,
                                  className: G.marginBottom20,
                                  children: M.intl.string(M.t.lsW5Eh)
                              }),
                              (0, i.jsx)('div', {
                                  className: V.ttsPreviewWrapper,
                                  children: (0, i.jsx)(d.zxk, {
                                      icon: n ? d.fpf : d.o1U,
                                      text: M.intl.string(M.t.hymc8v),
                                      onClick: () => {
                                          if (n) {
                                              ((0, I.NB)(), s(!1));
                                              return;
                                          }
                                          ((0, I.cP)(
                                              M.intl.string(M.t.PKaNJC),
                                              !0,
                                              void 0,
                                              () => s(!0),
                                              () => s(!1)
                                          ),
                                              s(!0));
                                      },
                                      'aria-label': ''.concat(M.intl.string(M.t.hymc8v), ' ').concat(M.intl.string(M.t.lsW5Eh))
                                  })
                              }),
                              (0, i.jsx)(d.iRW, {
                                  markers: B.q,
                                  initialValue: t,
                                  defaultValue: 1,
                                  stickToMarkers: !0,
                                  onValueChange: X,
                                  onValueRender: (e) => 'x'.concat(e.toFixed(2)),
                                  onMarkerRender: (e) =>
                                      0 === e
                                          ? (0, i.jsx)('span', {
                                                className: V.ttsSliderMarker,
                                                children: M.intl.string(M.t['493lwc'])
                                            })
                                          : 10 === e
                                            ? (0, i.jsx)('span', {
                                                  className: V.ttsSliderMarker,
                                                  children: M.intl.string(M.t.ZSZEdX)
                                              })
                                            : 1 === e
                                              ? (0, i.jsx)('span', { children: 'x1.0' })
                                              : e % 1 == 0
                                                ? ''
                                                : void 0,
                                  'aria-labelledby': K
                              })
                          ]
                      })
                  })
              ]
          })
        : null;
}
