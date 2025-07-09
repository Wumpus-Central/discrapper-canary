(n.d(t, { Z: () => K }), n(388685));
var i = n(255367),
    r = n(73800),
    s = n(120356),
    a = n.n(s),
    l = n(392711),
    o = n.n(l),
    c = n(442837),
    d = n(755721),
    u = n(481060),
    m = n(230711),
    p = n(419363),
    g = n(857595),
    h = n(607070),
    f = n(627845),
    b = n(600164),
    x = n(313201),
    _ = n(786761),
    j = n(3148),
    E = n(739566),
    O = n(753206),
    C = n(440849),
    v = n(921801),
    S = n(196051),
    T = n(441729),
    N = n(626135),
    I = n(63063),
    y = n(695346),
    A = n(263937),
    P = n(996073),
    R = n(526761),
    D = n(726985),
    Z = n(981631),
    w = n(611480),
    k = n(653477),
    L = n(388032),
    B = n(855112),
    M = n(20493),
    U = n(328756);
function V(e) {
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
function G(e, t) {
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
let F = (0, x.hQ)(),
    H = (0, x.hQ)(),
    z = (0, x.hQ)(),
    W = o().debounce((e) => {
        (0, g.o2)(e);
    }, 250),
    Y = o().debounce((e) => {
        (0, S.Ct)(e);
    }, 250);
function K(e) {
    return (0, i.jsxs)(u.hjN, {
        tag: u.RB0.H1,
        title: L.intl.string(L.t.G0neg4),
        children: [
            (0, i.jsx)('div', {
                className: M.marginBottom20,
                children: (0, i.jsx)(q, {})
            }),
            (0, i.jsxs)(v.F, {
                setting: D.s6.ACCESSIBILITY_SATURATION,
                children: [(0, i.jsx)(X, {}), (0, i.jsx)(u.$i$, {})]
            }),
            (0, i.jsx)(v.F, {
                setting: D.s6.ACCESSIBILITY_LINK_DECORATIONS,
                children: (0, i.jsx)(Q, {})
            }),
            (0, i.jsx)(v.F, {
                setting: D.s6.ACCESSIBILITY_ROLE_STYLE,
                children: (0, i.jsx)(J, {})
            }),
            (0, i.jsx)(v.F, {
                setting: D.s6.ACCESSIBILITY_PROFILE_COLORS,
                children: (0, i.jsx)($, {})
            }),
            (0, f.b)()
                ? (0, i.jsxs)(v.F, {
                      setting: D.s6.ACCESSIBILITY_CONTRAST,
                      children: [(0, i.jsx)(ee, {}), ' ']
                  })
                : null,
            (0, i.jsx)(v.F, {
                setting: D.s6.ACCESSIBILITY_REDUCED_MOTION,
                children: (0, i.jsx)(et, {})
            }),
            (0, i.jsx)(v.F, {
                setting: D.s6.ACCESSIBILITY_STICKERS,
                children: (0, i.jsx)(en, {})
            }),
            (0, i.jsx)(v.F, {
                setting: D.s6.ACCESSIBILITY_MESSAGES,
                children: (0, i.jsx)(ei, {})
            }),
            (0, i.jsx)(er, {}),
            (0, i.jsxs)(v.F, {
                setting: D.s6.ACCESSIBILITY_APPEARANCE_UPSELL,
                children: [
                    (0, i.jsx)(u.$i$, { className: M.marginTop20 }),
                    (0, i.jsx)(u.Text, {
                        className: M.marginTop20,
                        variant: 'text-md/normal',
                        children: L.intl.format(L.t.DHpTjY, {
                            onAppearanceClick() {
                                m.Z.open(Z.oAB.APPEARANCE);
                            }
                        })
                    })
                ]
            })
        ]
    });
}
function q() {
    let e = y.jU.useSetting(),
        [t] = r.useState(() => {
            let e = (0, _.e5)(
                G(
                    V(
                        {},
                        (0, j.ZP)({
                            channelId: '1337',
                            content: L.intl.formatToPlainString(L.t.bB80LC, { previewLink: 'https://discord.com/accessibility' })
                        })
                    ),
                    {
                        state: Z.yb.SENT,
                        id: ''.concat(0)
                    }
                )
            );
            return ((e.colorString = 'green'), e);
        });
    return (0, i.jsx)(u.Rny, {
        children: (0, i.jsxs)(u.Zbd, {
            className: B.preview,
            'aria-hidden': !0,
            children: [
                (0, i.jsxs)('div', {
                    className: B.previewHeader,
                    children: [
                        (0, i.jsx)(u.zxk, {
                            variant: 'primary',
                            size: 'sm',
                            text: L.intl.string(L.t['2RHHg4'])
                        }),
                        (0, i.jsx)('div', {
                            className: B.previewAvatars,
                            children: [Z.Skl.ONLINE, Z.Skl.DND, Z.Skl.IDLE].map((e) =>
                                (0, i.jsx)(
                                    u.Xo$,
                                    {
                                        'aria-label': L.intl.string(L.t.lqaIxM),
                                        src: U,
                                        size: u.EFr.SIZE_32,
                                        status: e
                                    },
                                    e
                                )
                            )
                        })
                    ]
                }),
                (0, i.jsx)('div', {
                    className: B.previewMessage,
                    children: (0, i.jsx)(O.Z, {
                        compact: e,
                        author: G(V({}, (0, E.ZH)(t)), { colorString: '#DD80F4' }),
                        message: t
                    })
                })
            ]
        })
    });
}
function X() {
    let { saturation: e, desaturateUserColors: t } = (0, c.cj)([h.Z], () => ({
        saturation: h.Z.saturation,
        desaturateUserColors: h.Z.desaturateUserColors
    }));
    return (0, i.jsxs)(u.hjN, {
        className: M.marginTop20,
        children: [
            (0, i.jsx)(u.vwX, {
                id: F,
                className: M.marginBottom8,
                children: L.intl.string(L.t['5PWWCQ'])
            }),
            (0, i.jsx)(u.R94, {
                id: H,
                type: u.R94.Types.DESCRIPTION,
                className: M.marginBottom20,
                children: L.intl.string(L.t['0PbE/P'])
            }),
            (0, i.jsx)(u.iRW, {
                'aria-labelledby': F,
                'aria-describedby': H,
                markers: Z.yqN.SATURATION_INCREMENTS,
                equidistant: !0,
                stickToMarkers: !0,
                maxValue: 1,
                minValue: 0,
                initialValue: e,
                onValueChange: W,
                onMarkerRender: (e) => ((100 * e) % 2 == 0 ? ''.concat(100 * e, '%') : void 0)
            }),
            (0, i.jsx)(v.F, {
                setting: D.s6.ACCESSIBILITY_SATURATION_CUSTOM_COLOR,
                children: (0, i.jsx)(u.j7V, {
                    hideBorder: !0,
                    className: a()(M.marginTop20, M.marginBottom20),
                    value: t,
                    onChange: g.f1,
                    note: L.intl.string(L.t.nlAOER),
                    children: L.intl.string(L.t.bQCodH)
                })
            })
        ]
    });
}
function Q() {
    let e = (0, c.e7)([h.Z], () => h.Z.alwaysShowLinkDecorations);
    return (0, i.jsx)(u.xJW, {
        className: M.marginTop20,
        children: (0, i.jsx)(u.j7V, {
            note: L.intl.string(L.t['72i5GB']),
            value: e,
            onChange: function () {
                (0, g.gs)(!e);
            },
            children: L.intl.string(L.t.OLZFBw)
        })
    });
}
function J() {
    let e = (0, c.e7)([h.Z], () => h.Z.roleStyle);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsxs)(u.xJW, {
                title: L.intl.string(L.t.uSOPWl),
                className: M.marginTop20,
                children: [
                    (0, i.jsx)(u.R94, {
                        type: u.R94.Types.DESCRIPTION,
                        className: M.marginBottom8,
                        children: L.intl.string(L.t['86hjzc'])
                    }),
                    (0, i.jsx)(u.FXm, {
                        options: [
                            {
                                name: L.intl.string(L.t.YEOEi4),
                                value: 'username'
                            },
                            {
                                name: L.intl.string(L.t.mQaro6),
                                value: 'dot'
                            },
                            {
                                name: L.intl.string(L.t.Ji2EVF),
                                value: 'hidden'
                            }
                        ],
                        onChange: function (e) {
                            (0, g.u1)(e.value);
                        },
                        value: e
                    })
                ]
            }),
            (0, i.jsx)(u.$i$, { className: M.marginTop20 })
        ]
    });
}
function $() {
    let e = (0, c.e7)([h.Z], () => h.Z.syncProfileThemeWithUserTheme),
        t = r.useRef(null);
    return (
        (0, P.Z)(t, R.rP.SYNC_PROFILE_THEME_WITH_USER_THEME),
        (0, i.jsx)(u.xJW, {
            ref: t,
            title: L.intl.string(L.t.BT8Bmp),
            className: a()(M.marginTop20, B.syncProfileThemeWithUserTheme),
            children: (0, i.jsx)(v.F, {
                setting: D.s6.ACCESSIBILITY_PROFILE_COLORS_SYNC_THEMES,
                children: (0, i.jsx)(u.j7V, {
                    note: L.intl.format(L.t.u6UjrK, {
                        onThemeClick() {
                            m.Z.open(Z.oAB.APPEARANCE);
                        }
                    }),
                    className: M.marginTop20,
                    value: e,
                    onChange: g.Uv,
                    children: L.intl.string(L.t['sSY+mJ'])
                })
            })
        })
    );
}
function ee() {
    let [e] = (0, c.Wu)([h.Z], () => [h.Z.syncForcedColors, h.Z.systemForcedColors]),
        [t, n] = r.useState(e);
    r.useEffect(() => {
        n(e);
    }, [e]);
    let s = r.useRef(null);
    r.useEffect(() => {
        (null != s.current && (clearTimeout(s.current), (s.current = null)), t !== e && (s.current = setTimeout(() => (0, g.qz)(t), 150)));
    }, [t, e]);
    let a = L.intl.format(L.t.GwEVEx, { learnMoreLink: I.Z.getArticleURL(Z.BhN.FORCED_COLORS) });
    return (0, i.jsx)(u.xJW, {
        title: L.intl.string(L.t.TYyfOz),
        className: M.marginTop20,
        children: (0, i.jsx)(v.F, {
            setting: D.s6.ACCESSIBILITY_CONTRAST_SYNC_FORCED_COLORS,
            children: (0, i.jsx)(u.j7V, {
                value: t,
                note: a,
                onChange: n,
                children: L.intl.string(L.t.cguieX)
            })
        })
    });
}
function et() {
    let e = y.QK.useSetting(),
        t = y.Yk.useSetting(),
        {
            useReducedMotion: n,
            rawPrefersReducedMotion: s,
            systemPrefersReducedMotion: l,
            gifAutoPlayOverrideReason: o,
            animateEmojiOverrideReason: d
        } = (0, c.cj)([h.Z, A.Z], () => ({
            systemPrefersReducedMotion: h.Z.systemPrefersReducedMotion,
            rawPrefersReducedMotion: h.Z.rawPrefersReducedMotion,
            useReducedMotion: h.Z.useReducedMotion,
            gifAutoPlayOverrideReason: A.Z.getAppliedOverrideReasonKey('gifAutoPlay'),
            animateEmojiOverrideReason: A.Z.getAppliedOverrideReasonKey('animateEmoji')
        })),
        m = r.useRef(null);
    (0, P.Z)(m, R.rP.REDUCED_MOTION);
    let p = r.useCallback(
            (e, t) => {
                (0, g.Zt)(t ? 'auto' : l);
            },
            [l]
        ),
        f = r.useCallback((e) => {
            (0, g.Zt)(e ? 'reduce' : 'no-preference');
        }, []);
    return (0, i.jsxs)(u.xJW, {
        ref: m,
        title: L.intl.string(L.t.e3TR1d),
        className: a()(M.marginTop20, B.reducedMotion),
        children: [
            (0, i.jsx)(u.R94, {
                type: u.R94.Types.DESCRIPTION,
                className: M.marginBottom8,
                children: L.intl.format(L.t['2l9U2t'], { helpdeskArticle: I.Z.getArticleURL(Z.BhN.REDUCED_MOTION) })
            }),
            (0, i.jsx)(u.XZJ, {
                className: a()(M.marginTop20, M.marginBottom20),
                value: 'auto' === s,
                shape: u.XZJ.Shapes.BOX,
                type: u.XZJ.Types.INVERTED,
                onChange: p,
                children: (0, i.jsx)(u.Text, {
                    variant: 'text-sm/normal',
                    children: L.intl.string(L.t['+Dx+HB'])
                })
            }),
            (0, i.jsx)(v.F, {
                setting: D.s6.ACCESSIBILITY_REDUCED_MOTION_ENABLE,
                children: (0, i.jsx)(u.j7V, {
                    value: n,
                    onChange: f,
                    children: L.intl.string(L.t.b3XBzs)
                })
            }),
            (0, i.jsx)(v.F, {
                setting: D.s6.ACCESSIBILITY_REDUCED_MOTION_AUTO_PLAY_GIFS,
                children: (0, i.jsx)(u.j7V, {
                    className: M.marginBottom20,
                    value: e,
                    note: null != o ? (0, C.Z)(o) : void 0,
                    onChange: y.QK.updateSetting,
                    children: L.intl.string(L.t.Iayoh4)
                })
            }),
            (0, i.jsx)(v.F, {
                setting: D.s6.ACCESSIBILITY_REDUCED_MOTION_PLAY_ANIMATED_EMOJI,
                children: (0, i.jsx)(u.j7V, {
                    className: M.marginBottom20,
                    value: t,
                    note: null != d ? (0, C.Z)(d) : void 0,
                    onChange: y.Yk.updateSetting,
                    children: L.intl.string(L.t.iIaOlZ)
                })
            })
        ]
    });
}
function en() {
    let e = y.Wp.useSetting(),
        t = (0, c.e7)([A.Z], () => A.Z.getAppliedOverrideReasonKey('animateStickers')),
        n = r.useCallback((e) => {
            y.Wp.updateSetting(e.value);
        }, []);
    return (0, i.jsxs)(u.xJW, {
        className: M.marginTop20,
        title: L.intl.string(L.t['6NtAuL']),
        children: [
            (0, i.jsx)(u.R94, {
                type: u.R94.Types.DESCRIPTION,
                className: M.marginBottom8,
                children: null != t ? (0, C.Z)(t) : L.intl.string(L.t.GRa6U1)
            }),
            (0, i.jsx)(u.FXm, {
                options: [
                    {
                        name: L.intl.string(L.t['Xp+X2d']),
                        value: w.yr.ALWAYS_ANIMATE
                    },
                    {
                        name: L.intl.string(L.t.IlLT7e),
                        desc: L.intl.string(L.t.bIW9Tk),
                        value: w.yr.ANIMATE_ON_INTERACTION
                    },
                    {
                        name: L.intl.string(L.t.IGu8x8),
                        value: w.yr.NEVER_ANIMATE
                    }
                ],
                onChange: n,
                value: e
            })
        ]
    });
}
function ei() {
    let e = (0, c.e7)([h.Z], () => h.Z.isSubmitButtonEnabled),
        t = y.dN.useSetting(),
        n = r.useRef(null);
    return (
        (0, P.Z)(n, R.rP.LEGACY_CHAT_INPUT),
        (0, i.jsxs)(u.xJW, {
            ref: n,
            className: M.marginTop20,
            children: [
                (0, i.jsx)(u.vwX, {
                    className: M.marginBottom8,
                    children: L.intl.string(L.t.onqU6u)
                }),
                (0, i.jsx)(v.F, {
                    setting: D.s6.ACCESSIBILITY_MESSAGES_SEND_MESSAGE_BUTTON,
                    children: (0, i.jsx)(u.j7V, {
                        className: M.marginTop20,
                        value: e,
                        onChange: g.eN,
                        children: L.intl.string(L.t['3Fztn5'])
                    })
                }),
                (0, i.jsx)(v.F, {
                    setting: D.s6.ACCESSIBILITY_MESSAGES_LEGACY_CHAT_INPUT,
                    children: (0, i.jsx)(u.j7V, {
                        className: M.marginTop8,
                        value: t,
                        note: L.intl.string(L.t.Q7wgHR),
                        onChange: (e) => {
                            (N.default.track(Z.rMx.LEGACY_CHAT_INPUT_TOGGLED, {
                                enabled: e,
                                location: { section: Z.jXE.SETTINGS_ACCESSIBILITY }
                            }),
                                y.dN.updateSetting(e));
                        },
                        children: L.intl.string(L.t.TZ2hZG)
                    })
                })
            ]
        })
    );
}
function er() {
    let e = y.OW.useSetting(),
        t = (0, c.e7)([T.Z], () => T.Z.speechRate),
        [n, s] = r.useState(!1);
    return p.Zh
        ? (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsx)(v.F, {
                      setting: D.s6.ACCESSIBILITY_TEXT_TO_SPEECH,
                      children: (0, i.jsxs)(u.xJW, {
                          className: M.marginTop20,
                          children: [
                              (0, i.jsx)(u.vwX, {
                                  className: M.marginBottom8,
                                  children: L.intl.string(L.t.VpSKeH)
                              }),
                              (0, i.jsx)(v.F, {
                                  setting: D.s6.ACCESSIBILITY_TEXT_TO_SPEECH_TTS_COMMAND,
                                  children: (0, i.jsx)(u.j7V, {
                                      className: M.marginTop20,
                                      value: e,
                                      onChange: y.OW.updateSetting,
                                      children: L.intl.string(L.t.qvTIwc)
                                  })
                              })
                          ]
                      })
                  }),
                  (0, i.jsx)(v.F, {
                      setting: D.s6.ACCESSIBILITY_TEXT_TO_SPEECH_RATE,
                      children: (0, i.jsxs)(u.xJW, {
                          className: M.marginTop20,
                          children: [
                              (0, i.jsx)(u.vwX, {
                                  id: z,
                                  className: M.marginBottom20,
                                  children: L.intl.string(L.t.lsW5Eh)
                              }),
                              (0, i.jsx)('div', {
                                  className: B.ttsPreviewWrapper,
                                  children: (0, i.jsx)(d.zx, {
                                      color: d.Tt.BRAND,
                                      onClick: () => {
                                          if (n) {
                                              ((0, S.NB)(), s(!1));
                                              return;
                                          }
                                          ((0, S.cP)(
                                              L.intl.string(L.t.PKaNJC),
                                              !0,
                                              void 0,
                                              () => s(!0),
                                              () => s(!1)
                                          ),
                                              s(!0));
                                      },
                                      children: (0, i.jsxs)(b.Z, {
                                          align: b.Z.Align.CENTER,
                                          children: [
                                              n
                                                  ? (0, i.jsx)(u.fpf, {
                                                        size: 'md',
                                                        color: 'currentColor'
                                                    })
                                                  : (0, i.jsx)(u.o1U, {
                                                        size: 'md',
                                                        color: 'currentColor'
                                                    }),
                                              (0, i.jsx)('span', { children: L.intl.string(L.t.hymc8v) }),
                                              (0, i.jsx)(u.nn4, { children: L.intl.string(L.t.lsW5Eh) })
                                          ]
                                      })
                                  })
                              }),
                              (0, i.jsx)(u.iRW, {
                                  markers: k.q,
                                  initialValue: t,
                                  defaultValue: 1,
                                  stickToMarkers: !0,
                                  onValueChange: Y,
                                  onValueRender: (e) => 'x'.concat(e.toFixed(2)),
                                  onMarkerRender: (e) =>
                                      0 === e
                                          ? (0, i.jsx)('span', {
                                                className: B.ttsSliderMarker,
                                                children: L.intl.string(L.t['493lwc'])
                                            })
                                          : 10 === e
                                            ? (0, i.jsx)('span', {
                                                  className: B.ttsSliderMarker,
                                                  children: L.intl.string(L.t.ZSZEdX)
                                              })
                                            : 1 === e
                                              ? (0, i.jsx)('span', { children: 'x1.0' })
                                              : e % 1 == 0
                                                ? ''
                                                : void 0,
                                  'aria-labelledby': z
                              })
                          ]
                      })
                  })
              ]
          })
        : null;
}
