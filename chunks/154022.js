(n.d(t, { Z: () => W }), n(388685));
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
    h = n(627845),
    f = n(313201),
    b = n(786761),
    x = n(3148),
    _ = n(739566),
    j = n(753206),
    E = n(440849),
    O = n(921801),
    C = n(196051),
    v = n(441729),
    S = n(626135),
    T = n(63063),
    N = n(695346),
    I = n(263937),
    y = n(996073),
    A = n(526761),
    P = n(726985),
    R = n(981631),
    D = n(611480),
    Z = n(653477),
    w = n(388032),
    k = n(855112),
    L = n(20493),
    B = n(328756);
function M(e) {
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
function U(e, t) {
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
let V = (0, f.hQ)(),
    G = (0, f.hQ)(),
    F = (0, f.hQ)(),
    H = o().debounce((e) => {
        (0, p.o2)(e);
    }, 250),
    z = o().debounce((e) => {
        (0, C.Ct)(e);
    }, 250);
function W(e) {
    return (0, i.jsxs)(d.hjN, {
        tag: d.RB0.H1,
        title: w.intl.string(w.t.G0neg4),
        children: [
            (0, i.jsx)('div', {
                className: L.marginBottom20,
                children: (0, i.jsx)(Y, {})
            }),
            (0, i.jsxs)(O.F, {
                setting: P.s6.ACCESSIBILITY_SATURATION,
                children: [(0, i.jsx)(K, {}), (0, i.jsx)(d.$i$, {})]
            }),
            (0, i.jsx)(O.F, {
                setting: P.s6.ACCESSIBILITY_LINK_DECORATIONS,
                children: (0, i.jsx)(q, {})
            }),
            (0, i.jsx)(O.F, {
                setting: P.s6.ACCESSIBILITY_ROLE_STYLE,
                children: (0, i.jsx)(X, {})
            }),
            (0, i.jsx)(O.F, {
                setting: P.s6.ACCESSIBILITY_PROFILE_COLORS,
                children: (0, i.jsx)(J, {})
            }),
            (0, h.b)()
                ? (0, i.jsxs)(O.F, {
                      setting: P.s6.ACCESSIBILITY_CONTRAST,
                      children: [(0, i.jsx)(Q, {}), ' ']
                  })
                : null,
            (0, i.jsx)(O.F, {
                setting: P.s6.ACCESSIBILITY_REDUCED_MOTION,
                children: (0, i.jsx)($, {})
            }),
            (0, i.jsx)(O.F, {
                setting: P.s6.ACCESSIBILITY_STICKERS,
                children: (0, i.jsx)(ee, {})
            }),
            (0, i.jsx)(O.F, {
                setting: P.s6.ACCESSIBILITY_MESSAGES,
                children: (0, i.jsx)(et, {})
            }),
            (0, i.jsx)(en, {}),
            (0, i.jsxs)(O.F, {
                setting: P.s6.ACCESSIBILITY_APPEARANCE_UPSELL,
                children: [
                    (0, i.jsx)(d.$i$, { className: L.marginTop20 }),
                    (0, i.jsx)(d.Text, {
                        className: L.marginTop20,
                        variant: 'text-md/normal',
                        children: w.intl.format(w.t.DHpTjY, {
                            onAppearanceClick() {
                                u.Z.open(R.oAB.APPEARANCE);
                            }
                        })
                    })
                ]
            })
        ]
    });
}
function Y() {
    let e = N.jU.useSetting(),
        [t] = r.useState(() => {
            let e = (0, b.e5)(
                U(
                    M(
                        {},
                        (0, x.ZP)({
                            channelId: '1337',
                            content: w.intl.formatToPlainString(w.t.bB80LC, { previewLink: 'https://discord.com/accessibility' })
                        })
                    ),
                    {
                        state: R.yb.SENT,
                        id: ''.concat(0)
                    }
                )
            );
            return ((e.colorString = 'green'), e);
        });
    return (0, i.jsx)(d.Rny, {
        children: (0, i.jsxs)(d.Zbd, {
            className: k.preview,
            'aria-hidden': !0,
            children: [
                (0, i.jsxs)('div', {
                    className: k.previewHeader,
                    children: [
                        (0, i.jsx)(d.zxk, {
                            variant: 'primary',
                            size: 'sm',
                            text: w.intl.string(w.t['2RHHg4'])
                        }),
                        (0, i.jsx)('div', {
                            className: k.previewAvatars,
                            children: [R.Skl.ONLINE, R.Skl.DND, R.Skl.IDLE].map((e) =>
                                (0, i.jsx)(
                                    d.Xo$,
                                    {
                                        'aria-label': w.intl.string(w.t.lqaIxM),
                                        src: B,
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
                    className: k.previewMessage,
                    children: (0, i.jsx)(j.Z, {
                        compact: e,
                        author: U(M({}, (0, _.ZH)(t)), { colorString: '#DD80F4' }),
                        message: t
                    })
                })
            ]
        })
    });
}
function K() {
    let { saturation: e, desaturateUserColors: t } = (0, c.cj)([g.Z], () => ({
        saturation: g.Z.saturation,
        desaturateUserColors: g.Z.desaturateUserColors
    }));
    return (0, i.jsxs)(d.hjN, {
        className: L.marginTop20,
        children: [
            (0, i.jsx)(d.vwX, {
                id: V,
                className: L.marginBottom8,
                children: w.intl.string(w.t['5PWWCQ'])
            }),
            (0, i.jsx)(d.R94, {
                id: G,
                type: d.R94.Types.DESCRIPTION,
                className: L.marginBottom20,
                children: w.intl.string(w.t['0PbE/P'])
            }),
            (0, i.jsx)(d.iRW, {
                'aria-labelledby': V,
                'aria-describedby': G,
                markers: R.yqN.SATURATION_INCREMENTS,
                equidistant: !0,
                stickToMarkers: !0,
                maxValue: 1,
                minValue: 0,
                initialValue: e,
                onValueChange: H,
                onMarkerRender: (e) => ((100 * e) % 2 == 0 ? ''.concat(100 * e, '%') : void 0)
            }),
            (0, i.jsx)(O.F, {
                setting: P.s6.ACCESSIBILITY_SATURATION_CUSTOM_COLOR,
                children: (0, i.jsx)(d.j7V, {
                    hideBorder: !0,
                    className: a()(L.marginTop20, L.marginBottom20),
                    value: t,
                    onChange: p.f1,
                    note: w.intl.string(w.t.nlAOER),
                    children: w.intl.string(w.t.bQCodH)
                })
            })
        ]
    });
}
function q() {
    let e = (0, c.e7)([g.Z], () => g.Z.alwaysShowLinkDecorations);
    return (0, i.jsx)(d.xJW, {
        className: L.marginTop20,
        children: (0, i.jsx)(d.j7V, {
            note: w.intl.string(w.t['72i5GB']),
            value: e,
            onChange: function () {
                (0, p.gs)(!e);
            },
            children: w.intl.string(w.t.OLZFBw)
        })
    });
}
function X() {
    let e = (0, c.e7)([g.Z], () => g.Z.roleStyle);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsxs)(d.xJW, {
                title: w.intl.string(w.t.uSOPWl),
                className: L.marginTop20,
                children: [
                    (0, i.jsx)(d.R94, {
                        type: d.R94.Types.DESCRIPTION,
                        className: L.marginBottom8,
                        children: w.intl.string(w.t['86hjzc'])
                    }),
                    (0, i.jsx)(d.FXm, {
                        options: [
                            {
                                name: w.intl.string(w.t.YEOEi4),
                                value: 'username'
                            },
                            {
                                name: w.intl.string(w.t.mQaro6),
                                value: 'dot'
                            },
                            {
                                name: w.intl.string(w.t.Ji2EVF),
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
            (0, i.jsx)(d.$i$, { className: L.marginTop20 })
        ]
    });
}
function J() {
    let e = (0, c.e7)([g.Z], () => g.Z.syncProfileThemeWithUserTheme),
        t = r.useRef(null);
    return (
        (0, y.Z)(t, A.rP.SYNC_PROFILE_THEME_WITH_USER_THEME),
        (0, i.jsx)(d.xJW, {
            ref: t,
            title: w.intl.string(w.t.BT8Bmp),
            className: a()(L.marginTop20, k.syncProfileThemeWithUserTheme),
            children: (0, i.jsx)(O.F, {
                setting: P.s6.ACCESSIBILITY_PROFILE_COLORS_SYNC_THEMES,
                children: (0, i.jsx)(d.j7V, {
                    note: w.intl.format(w.t.u6UjrK, {
                        onThemeClick() {
                            u.Z.open(R.oAB.APPEARANCE);
                        }
                    }),
                    className: L.marginTop20,
                    value: e,
                    onChange: p.Uv,
                    children: w.intl.string(w.t['sSY+mJ'])
                })
            })
        })
    );
}
function Q() {
    let [e] = (0, c.Wu)([g.Z], () => [g.Z.syncForcedColors, g.Z.systemForcedColors]),
        [t, n] = r.useState(e);
    r.useEffect(() => {
        n(e);
    }, [e]);
    let s = r.useRef(null);
    r.useEffect(() => {
        (null != s.current && (clearTimeout(s.current), (s.current = null)), t !== e && (s.current = setTimeout(() => (0, p.qz)(t), 150)));
    }, [t, e]);
    let a = w.intl.format(w.t.GwEVEx, { learnMoreLink: T.Z.getArticleURL(R.BhN.FORCED_COLORS) });
    return (0, i.jsx)(d.xJW, {
        title: w.intl.string(w.t.TYyfOz),
        className: L.marginTop20,
        children: (0, i.jsx)(O.F, {
            setting: P.s6.ACCESSIBILITY_CONTRAST_SYNC_FORCED_COLORS,
            children: (0, i.jsx)(d.j7V, {
                value: t,
                note: a,
                onChange: n,
                children: w.intl.string(w.t.cguieX)
            })
        })
    });
}
function $() {
    let e = N.QK.useSetting(),
        t = N.Yk.useSetting(),
        {
            useReducedMotion: n,
            rawPrefersReducedMotion: s,
            systemPrefersReducedMotion: l,
            gifAutoPlayOverrideReason: o,
            animateEmojiOverrideReason: u
        } = (0, c.cj)([g.Z, I.Z], () => ({
            systemPrefersReducedMotion: g.Z.systemPrefersReducedMotion,
            rawPrefersReducedMotion: g.Z.rawPrefersReducedMotion,
            useReducedMotion: g.Z.useReducedMotion,
            gifAutoPlayOverrideReason: I.Z.getAppliedOverrideReasonKey('gifAutoPlay'),
            animateEmojiOverrideReason: I.Z.getAppliedOverrideReasonKey('animateEmoji')
        })),
        m = r.useRef(null);
    (0, y.Z)(m, A.rP.REDUCED_MOTION);
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
        title: w.intl.string(w.t.e3TR1d),
        className: a()(L.marginTop20, k.reducedMotion),
        children: [
            (0, i.jsx)(d.R94, {
                type: d.R94.Types.DESCRIPTION,
                className: L.marginBottom8,
                children: w.intl.format(w.t['2l9U2t'], { helpdeskArticle: T.Z.getArticleURL(R.BhN.REDUCED_MOTION) })
            }),
            (0, i.jsx)(d.XZJ, {
                className: a()(L.marginTop20, L.marginBottom20),
                value: 'auto' === s,
                shape: d.XZJ.Shapes.BOX,
                type: d.XZJ.Types.INVERTED,
                onChange: h,
                children: (0, i.jsx)(d.Text, {
                    variant: 'text-sm/normal',
                    children: w.intl.string(w.t['+Dx+HB'])
                })
            }),
            (0, i.jsx)(O.F, {
                setting: P.s6.ACCESSIBILITY_REDUCED_MOTION_ENABLE,
                children: (0, i.jsx)(d.j7V, {
                    value: n,
                    onChange: f,
                    children: w.intl.string(w.t.b3XBzs)
                })
            }),
            (0, i.jsx)(O.F, {
                setting: P.s6.ACCESSIBILITY_REDUCED_MOTION_AUTO_PLAY_GIFS,
                children: (0, i.jsx)(d.j7V, {
                    className: L.marginBottom20,
                    value: e,
                    note: null != o ? (0, E.Z)(o) : void 0,
                    onChange: N.QK.updateSetting,
                    children: w.intl.string(w.t.Iayoh4)
                })
            }),
            (0, i.jsx)(O.F, {
                setting: P.s6.ACCESSIBILITY_REDUCED_MOTION_PLAY_ANIMATED_EMOJI,
                children: (0, i.jsx)(d.j7V, {
                    className: L.marginBottom20,
                    value: t,
                    note: null != u ? (0, E.Z)(u) : void 0,
                    onChange: N.Yk.updateSetting,
                    children: w.intl.string(w.t.iIaOlZ)
                })
            })
        ]
    });
}
function ee() {
    let e = N.Wp.useSetting(),
        t = (0, c.e7)([I.Z], () => I.Z.getAppliedOverrideReasonKey('animateStickers')),
        n = r.useCallback((e) => {
            N.Wp.updateSetting(e.value);
        }, []);
    return (0, i.jsxs)(d.xJW, {
        className: L.marginTop20,
        title: w.intl.string(w.t['6NtAuL']),
        children: [
            (0, i.jsx)(d.R94, {
                type: d.R94.Types.DESCRIPTION,
                className: L.marginBottom8,
                children: null != t ? (0, E.Z)(t) : w.intl.string(w.t.GRa6U1)
            }),
            (0, i.jsx)(d.FXm, {
                options: [
                    {
                        name: w.intl.string(w.t['Xp+X2d']),
                        value: D.yr.ALWAYS_ANIMATE
                    },
                    {
                        name: w.intl.string(w.t.IlLT7e),
                        desc: w.intl.string(w.t.bIW9Tk),
                        value: D.yr.ANIMATE_ON_INTERACTION
                    },
                    {
                        name: w.intl.string(w.t.IGu8x8),
                        value: D.yr.NEVER_ANIMATE
                    }
                ],
                onChange: n,
                value: e
            })
        ]
    });
}
function et() {
    let e = (0, c.e7)([g.Z], () => g.Z.isSubmitButtonEnabled),
        t = N.dN.useSetting(),
        n = r.useRef(null);
    return (
        (0, y.Z)(n, A.rP.LEGACY_CHAT_INPUT),
        (0, i.jsxs)(d.xJW, {
            ref: n,
            className: L.marginTop20,
            children: [
                (0, i.jsx)(d.vwX, {
                    className: L.marginBottom8,
                    children: w.intl.string(w.t.onqU6u)
                }),
                (0, i.jsx)(O.F, {
                    setting: P.s6.ACCESSIBILITY_MESSAGES_SEND_MESSAGE_BUTTON,
                    children: (0, i.jsx)(d.j7V, {
                        className: L.marginTop20,
                        value: e,
                        onChange: p.eN,
                        children: w.intl.string(w.t['3Fztn5'])
                    })
                }),
                (0, i.jsx)(O.F, {
                    setting: P.s6.ACCESSIBILITY_MESSAGES_LEGACY_CHAT_INPUT,
                    children: (0, i.jsx)(d.j7V, {
                        className: L.marginTop8,
                        value: t,
                        note: w.intl.string(w.t.Q7wgHR),
                        onChange: (e) => {
                            (S.default.track(R.rMx.LEGACY_CHAT_INPUT_TOGGLED, {
                                enabled: e,
                                location: { section: R.jXE.SETTINGS_ACCESSIBILITY }
                            }),
                                N.dN.updateSetting(e));
                        },
                        children: w.intl.string(w.t.TZ2hZG)
                    })
                })
            ]
        })
    );
}
function en() {
    let e = N.OW.useSetting(),
        t = (0, c.e7)([v.Z], () => v.Z.speechRate),
        [n, s] = r.useState(!1);
    return m.Zh
        ? (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsx)(O.F, {
                      setting: P.s6.ACCESSIBILITY_TEXT_TO_SPEECH,
                      children: (0, i.jsxs)(d.xJW, {
                          className: L.marginTop20,
                          children: [
                              (0, i.jsx)(d.vwX, {
                                  className: L.marginBottom8,
                                  children: w.intl.string(w.t.VpSKeH)
                              }),
                              (0, i.jsx)(O.F, {
                                  setting: P.s6.ACCESSIBILITY_TEXT_TO_SPEECH_TTS_COMMAND,
                                  children: (0, i.jsx)(d.j7V, {
                                      className: L.marginTop20,
                                      value: e,
                                      onChange: N.OW.updateSetting,
                                      children: w.intl.string(w.t.qvTIwc)
                                  })
                              })
                          ]
                      })
                  }),
                  (0, i.jsx)(O.F, {
                      setting: P.s6.ACCESSIBILITY_TEXT_TO_SPEECH_RATE,
                      children: (0, i.jsxs)(d.xJW, {
                          className: L.marginTop20,
                          children: [
                              (0, i.jsx)(d.vwX, {
                                  id: F,
                                  className: L.marginBottom20,
                                  children: w.intl.string(w.t.lsW5Eh)
                              }),
                              (0, i.jsx)('div', {
                                  className: k.ttsPreviewWrapper,
                                  children: (0, i.jsx)(d.zxk, {
                                      icon: n ? d.fpf : d.o1U,
                                      text: w.intl.string(w.t.hymc8v),
                                      onClick: () => {
                                          if (n) {
                                              ((0, C.NB)(), s(!1));
                                              return;
                                          }
                                          ((0, C.cP)(
                                              w.intl.string(w.t.PKaNJC),
                                              !0,
                                              void 0,
                                              () => s(!0),
                                              () => s(!1)
                                          ),
                                              s(!0));
                                      },
                                      'aria-label': ''.concat(w.intl.string(w.t.hymc8v), ' ').concat(w.intl.string(w.t.lsW5Eh))
                                  })
                              }),
                              (0, i.jsx)(d.iRW, {
                                  markers: Z.q,
                                  initialValue: t,
                                  defaultValue: 1,
                                  stickToMarkers: !0,
                                  onValueChange: z,
                                  onValueRender: (e) => 'x'.concat(e.toFixed(2)),
                                  onMarkerRender: (e) =>
                                      0 === e
                                          ? (0, i.jsx)('span', {
                                                className: k.ttsSliderMarker,
                                                children: w.intl.string(w.t['493lwc'])
                                            })
                                          : 10 === e
                                            ? (0, i.jsx)('span', {
                                                  className: k.ttsSliderMarker,
                                                  children: w.intl.string(w.t.ZSZEdX)
                                              })
                                            : 1 === e
                                              ? (0, i.jsx)('span', { children: 'x1.0' })
                                              : e % 1 == 0
                                                ? ''
                                                : void 0,
                                  'aria-labelledby': F
                              })
                          ]
                      })
                  })
              ]
          })
        : null;
}
