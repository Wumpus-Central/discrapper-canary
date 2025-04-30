n.d(t, { Z: () => Y }), n(388685);
var i = n(200651),
    r = n(192379),
    s = n(120356),
    l = n.n(s),
    a = n(392711),
    o = n.n(a),
    c = n(442837),
    d = n(481060),
    u = n(230711),
    m = n(419363),
    p = n(857595),
    g = n(607070),
    h = n(627845),
    f = n(600164),
    b = n(313201),
    _ = n(786761),
    x = n(3148),
    E = n(739566),
    j = n(753206),
    C = n(440849),
    O = n(921801),
    S = n(196051),
    v = n(441729),
    T = n(626135),
    N = n(63063),
    I = n(695346),
    y = n(263937),
    A = n(996073),
    P = n(526761),
    R = n(726985),
    D = n(981631),
    Z = n(611480),
    w = n(653477),
    k = n(388032),
    L = n(855112),
    M = n(20493),
    B = n(328756);
function U(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            i = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            i.forEach(function (t) {
                var i;
                (i = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: i,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = i);
            });
    }
    return e;
}
function V(e, t) {
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
let G = (0, b.hQ)(),
    F = (0, b.hQ)(),
    H = (0, b.hQ)(),
    z = o().debounce((e) => {
        (0, p.o2)(e);
    }, 250),
    W = o().debounce((e) => {
        (0, S.Ct)(e);
    }, 250);
function Y(e) {
    return (0, i.jsxs)(d.hjN, {
        tag: d.RB0.H1,
        title: k.intl.string(k.t.G0neg4),
        children: [
            (0, i.jsx)('div', {
                className: M.marginBottom20,
                children: (0, i.jsx)(K, {})
            }),
            (0, i.jsxs)(O.F, {
                setting: R.s6.ACCESSIBILITY_SATURATION,
                children: [(0, i.jsx)(q, {}), (0, i.jsx)(d.$i$, {})]
            }),
            (0, i.jsx)(O.F, {
                setting: R.s6.ACCESSIBILITY_LINK_DECORATIONS,
                children: (0, i.jsx)(X, {})
            }),
            (0, i.jsx)(O.F, {
                setting: R.s6.ACCESSIBILITY_ROLE_STYLE,
                children: (0, i.jsx)(Q, {})
            }),
            (0, i.jsx)(O.F, {
                setting: R.s6.ACCESSIBILITY_PROFILE_COLORS,
                children: (0, i.jsx)(J, {})
            }),
            (0, h.b)()
                ? (0, i.jsxs)(O.F, {
                      setting: R.s6.ACCESSIBILITY_CONTRAST,
                      children: [(0, i.jsx)($, {}), ' ']
                  })
                : null,
            (0, i.jsx)(O.F, {
                setting: R.s6.ACCESSIBILITY_REDUCED_MOTION,
                children: (0, i.jsx)(ee, {})
            }),
            (0, i.jsx)(O.F, {
                setting: R.s6.ACCESSIBILITY_STICKERS,
                children: (0, i.jsx)(et, {})
            }),
            (0, i.jsx)(O.F, {
                setting: R.s6.ACCESSIBILITY_MESSAGES,
                children: (0, i.jsx)(en, {})
            }),
            (0, i.jsx)(ei, {}),
            (0, i.jsxs)(O.F, {
                setting: R.s6.ACCESSIBILITY_APPEARANCE_UPSELL,
                children: [
                    (0, i.jsx)(d.$i$, { className: M.marginTop20 }),
                    (0, i.jsx)(d.Text, {
                        className: M.marginTop20,
                        variant: 'text-md/normal',
                        children: k.intl.format(k.t.DHpTjY, {
                            onAppearanceClick() {
                                u.Z.open(D.oAB.APPEARANCE);
                            }
                        })
                    })
                ]
            })
        ]
    });
}
function K() {
    let e = I.jU.useSetting(),
        [t] = r.useState(() => {
            let e = (0, _.e5)(
                V(
                    U(
                        {},
                        (0, x.ZP)({
                            channelId: '1337',
                            content: k.intl.formatToPlainString(k.t.bB80LC, { previewLink: 'https://discord.com/accessibility' })
                        })
                    ),
                    {
                        state: D.yb.SENT,
                        id: ''.concat(0)
                    }
                )
            );
            return (e.colorString = 'green'), e;
        });
    return (0, i.jsx)(d.Rny, {
        children: (0, i.jsxs)(d.Zbd, {
            className: L.preview,
            'aria-hidden': !0,
            children: [
                (0, i.jsxs)('div', {
                    className: L.previewHeader,
                    children: [
                        (0, i.jsx)(d.zxk, {
                            size: d.zxk.Sizes.SMALL,
                            color: d.zxk.Colors.BRAND,
                            children: k.intl.string(k.t['2RHHg4'])
                        }),
                        (0, i.jsx)('div', {
                            className: L.previewAvatars,
                            children: [D.Skl.ONLINE, D.Skl.DND, D.Skl.IDLE].map((e) =>
                                (0, i.jsx)(
                                    d.Xo$,
                                    {
                                        'aria-label': k.intl.string(k.t.lqaIxM),
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
                    className: L.previewMessage,
                    children: (0, i.jsx)(j.Z, {
                        compact: e,
                        author: V(U({}, (0, E.ZH)(t)), { colorString: '#DD80F4' }),
                        message: t
                    })
                })
            ]
        })
    });
}
function q() {
    let { saturation: e, desaturateUserColors: t } = (0, c.cj)([g.Z], () => ({
        saturation: g.Z.saturation,
        desaturateUserColors: g.Z.desaturateUserColors
    }));
    return (0, i.jsxs)(d.hjN, {
        className: M.marginTop20,
        children: [
            (0, i.jsx)(d.vwX, {
                id: G,
                className: M.marginBottom8,
                children: k.intl.string(k.t['5PWWCQ'])
            }),
            (0, i.jsx)(d.R94, {
                id: F,
                type: d.R94.Types.DESCRIPTION,
                className: M.marginBottom20,
                children: k.intl.string(k.t['0PbE/P'])
            }),
            (0, i.jsx)(d.iRW, {
                'aria-labelledby': G,
                'aria-describedby': F,
                markers: D.yqN.SATURATION_INCREMENTS,
                equidistant: !0,
                stickToMarkers: !0,
                maxValue: 1,
                minValue: 0,
                initialValue: e,
                onValueChange: z,
                onMarkerRender: (e) => ((100 * e) % 2 == 0 ? ''.concat(100 * e, '%') : void 0)
            }),
            (0, i.jsx)(O.F, {
                setting: R.s6.ACCESSIBILITY_SATURATION_CUSTOM_COLOR,
                children: (0, i.jsx)(d.j7V, {
                    hideBorder: !0,
                    className: l()(M.marginTop20, M.marginBottom20),
                    value: t,
                    onChange: p.f1,
                    note: k.intl.string(k.t.nlAOER),
                    children: k.intl.string(k.t.bQCodH)
                })
            })
        ]
    });
}
function X() {
    let e = (0, c.e7)([g.Z], () => g.Z.alwaysShowLinkDecorations);
    return (0, i.jsx)(d.xJW, {
        className: M.marginTop20,
        children: (0, i.jsx)(d.j7V, {
            note: k.intl.string(k.t['72i5GB']),
            value: e,
            onChange: function () {
                (0, p.gs)(!e);
            },
            children: k.intl.string(k.t.OLZFBw)
        })
    });
}
function Q() {
    let e = (0, c.e7)([g.Z], () => g.Z.roleStyle);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsxs)(d.xJW, {
                title: k.intl.string(k.t.uSOPWl),
                className: M.marginTop20,
                children: [
                    (0, i.jsx)(d.R94, {
                        type: d.R94.Types.DESCRIPTION,
                        className: M.marginBottom8,
                        children: k.intl.string(k.t['86hjzc'])
                    }),
                    (0, i.jsx)(d.FXm, {
                        options: [
                            {
                                name: k.intl.string(k.t.YEOEi4),
                                value: 'username'
                            },
                            {
                                name: k.intl.string(k.t.mQaro6),
                                value: 'dot'
                            },
                            {
                                name: k.intl.string(k.t.Ji2EVF),
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
            (0, i.jsx)(d.$i$, { className: M.marginTop20 })
        ]
    });
}
function J() {
    let e = (0, c.e7)([g.Z], () => g.Z.syncProfileThemeWithUserTheme),
        t = r.useRef(null);
    return (
        (0, A.Z)(t, P.rP.SYNC_PROFILE_THEME_WITH_USER_THEME),
        (0, i.jsx)(d.xJW, {
            ref: t,
            title: k.intl.string(k.t.BT8Bmp),
            className: l()(M.marginTop20, L.syncProfileThemeWithUserTheme),
            children: (0, i.jsx)(O.F, {
                setting: R.s6.ACCESSIBILITY_PROFILE_COLORS_SYNC_THEMES,
                children: (0, i.jsx)(d.j7V, {
                    note: k.intl.format(k.t.u6UjrK, {
                        onThemeClick() {
                            u.Z.open(D.oAB.APPEARANCE);
                        }
                    }),
                    className: M.marginTop20,
                    value: e,
                    onChange: p.Uv,
                    children: k.intl.string(k.t['sSY+mJ'])
                })
            })
        })
    );
}
function $() {
    let [e] = (0, c.Wu)([g.Z], () => [g.Z.syncForcedColors, g.Z.systemForcedColors]),
        [t, n] = r.useState(e);
    r.useEffect(() => {
        n(e);
    }, [e]);
    let s = r.useRef(null);
    r.useEffect(() => {
        null != s.current && (clearTimeout(s.current), (s.current = null)), t !== e && (s.current = setTimeout(() => (0, p.qz)(t), 150));
    }, [t, e]);
    let l = k.intl.format(k.t.GwEVEx, { learnMoreLink: N.Z.getArticleURL(D.BhN.FORCED_COLORS) });
    return (0, i.jsx)(d.xJW, {
        title: k.intl.string(k.t.TYyfOz),
        className: M.marginTop20,
        children: (0, i.jsx)(O.F, {
            setting: R.s6.ACCESSIBILITY_CONTRAST_SYNC_FORCED_COLORS,
            children: (0, i.jsx)(d.j7V, {
                value: t,
                note: l,
                onChange: n,
                children: k.intl.string(k.t.cguieX)
            })
        })
    });
}
function ee() {
    let e = I.QK.useSetting(),
        t = I.Yk.useSetting(),
        {
            useReducedMotion: n,
            rawPrefersReducedMotion: s,
            systemPrefersReducedMotion: a,
            gifAutoPlayOverrideReason: o,
            animateEmojiOverrideReason: u
        } = (0, c.cj)([g.Z, y.Z], () => ({
            systemPrefersReducedMotion: g.Z.systemPrefersReducedMotion,
            rawPrefersReducedMotion: g.Z.rawPrefersReducedMotion,
            useReducedMotion: g.Z.useReducedMotion,
            gifAutoPlayOverrideReason: y.Z.getAppliedOverrideReasonKey('gifAutoPlay'),
            animateEmojiOverrideReason: y.Z.getAppliedOverrideReasonKey('animateEmoji')
        })),
        m = r.useRef(null);
    (0, A.Z)(m, P.rP.REDUCED_MOTION);
    let h = r.useCallback(
            (e, t) => {
                (0, p.Zt)(t ? 'auto' : a);
            },
            [a]
        ),
        f = r.useCallback((e) => {
            (0, p.Zt)(e ? 'reduce' : 'no-preference');
        }, []);
    return (0, i.jsxs)(d.xJW, {
        ref: m,
        title: k.intl.string(k.t.e3TR1d),
        className: l()(M.marginTop20, L.reducedMotion),
        children: [
            (0, i.jsx)(d.R94, {
                type: d.R94.Types.DESCRIPTION,
                className: M.marginBottom8,
                children: k.intl.format(k.t['2l9U2t'], { helpdeskArticle: N.Z.getArticleURL(D.BhN.REDUCED_MOTION) })
            }),
            (0, i.jsx)(d.XZJ, {
                className: l()(M.marginTop20, M.marginBottom20),
                value: 'auto' === s,
                shape: d.XZJ.Shapes.BOX,
                type: d.XZJ.Types.INVERTED,
                onChange: h,
                children: (0, i.jsx)(d.Text, {
                    variant: 'text-sm/normal',
                    children: k.intl.string(k.t['+Dx+HB'])
                })
            }),
            (0, i.jsx)(O.F, {
                setting: R.s6.ACCESSIBILITY_REDUCED_MOTION_ENABLE,
                children: (0, i.jsx)(d.j7V, {
                    value: n,
                    onChange: f,
                    children: k.intl.string(k.t.b3XBzs)
                })
            }),
            (0, i.jsx)(O.F, {
                setting: R.s6.ACCESSIBILITY_REDUCED_MOTION_AUTO_PLAY_GIFS,
                children: (0, i.jsx)(d.j7V, {
                    className: M.marginBottom20,
                    value: e,
                    note: null != o ? (0, C.Z)(o) : void 0,
                    onChange: I.QK.updateSetting,
                    children: k.intl.string(k.t.Iayoh4)
                })
            }),
            (0, i.jsx)(O.F, {
                setting: R.s6.ACCESSIBILITY_REDUCED_MOTION_PLAY_ANIMATED_EMOJI,
                children: (0, i.jsx)(d.j7V, {
                    className: M.marginBottom20,
                    value: t,
                    note: null != u ? (0, C.Z)(u) : void 0,
                    onChange: I.Yk.updateSetting,
                    children: k.intl.string(k.t.iIaOlZ)
                })
            })
        ]
    });
}
function et() {
    let e = I.Wp.useSetting(),
        t = (0, c.e7)([y.Z], () => y.Z.getAppliedOverrideReasonKey('animateStickers')),
        n = r.useCallback((e) => {
            I.Wp.updateSetting(e.value);
        }, []);
    return (0, i.jsxs)(d.xJW, {
        className: M.marginTop20,
        title: k.intl.string(k.t['6NtAuL']),
        children: [
            (0, i.jsx)(d.R94, {
                type: d.R94.Types.DESCRIPTION,
                className: M.marginBottom8,
                children: null != t ? (0, C.Z)(t) : k.intl.string(k.t.GRa6U1)
            }),
            (0, i.jsx)(d.FXm, {
                options: [
                    {
                        name: k.intl.string(k.t['Xp+X2d']),
                        value: Z.yr.ALWAYS_ANIMATE
                    },
                    {
                        name: k.intl.string(k.t.IlLT7e),
                        desc: k.intl.string(k.t.bIW9Tk),
                        value: Z.yr.ANIMATE_ON_INTERACTION
                    },
                    {
                        name: k.intl.string(k.t.IGu8x8),
                        value: Z.yr.NEVER_ANIMATE
                    }
                ],
                onChange: n,
                value: e
            })
        ]
    });
}
function en() {
    let e = (0, c.e7)([g.Z], () => g.Z.isSubmitButtonEnabled),
        t = I.dN.useSetting(),
        n = r.useRef(null);
    return (
        (0, A.Z)(n, P.rP.LEGACY_CHAT_INPUT),
        (0, i.jsxs)(d.xJW, {
            ref: n,
            className: M.marginTop20,
            children: [
                (0, i.jsx)(d.vwX, {
                    className: M.marginBottom8,
                    children: k.intl.string(k.t.onqU6u)
                }),
                (0, i.jsx)(O.F, {
                    setting: R.s6.ACCESSIBILITY_MESSAGES_SEND_MESSAGE_BUTTON,
                    children: (0, i.jsx)(d.j7V, {
                        className: M.marginTop20,
                        value: e,
                        onChange: p.eN,
                        children: k.intl.string(k.t['3Fztn5'])
                    })
                }),
                (0, i.jsx)(O.F, {
                    setting: R.s6.ACCESSIBILITY_MESSAGES_LEGACY_CHAT_INPUT,
                    children: (0, i.jsx)(d.j7V, {
                        className: M.marginTop8,
                        value: t,
                        note: k.intl.string(k.t.Q7wgHR),
                        onChange: (e) => {
                            T.default.track(D.rMx.LEGACY_CHAT_INPUT_TOGGLED, {
                                enabled: e,
                                location: { section: D.jXE.SETTINGS_ACCESSIBILITY }
                            }),
                                I.dN.updateSetting(e);
                        },
                        children: k.intl.string(k.t.TZ2hZG)
                    })
                })
            ]
        })
    );
}
function ei() {
    let e = I.OW.useSetting(),
        t = (0, c.e7)([v.Z], () => v.Z.speechRate),
        [n, s] = r.useState(!1);
    return m.Zh
        ? (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsx)(O.F, {
                      setting: R.s6.ACCESSIBILITY_TEXT_TO_SPEECH,
                      children: (0, i.jsxs)(d.xJW, {
                          className: M.marginTop20,
                          children: [
                              (0, i.jsx)(d.vwX, {
                                  className: M.marginBottom8,
                                  children: k.intl.string(k.t.VpSKeH)
                              }),
                              (0, i.jsx)(O.F, {
                                  setting: R.s6.ACCESSIBILITY_TEXT_TO_SPEECH_TTS_COMMAND,
                                  children: (0, i.jsx)(d.j7V, {
                                      className: M.marginTop20,
                                      value: e,
                                      onChange: I.OW.updateSetting,
                                      children: k.intl.string(k.t.qvTIwc)
                                  })
                              })
                          ]
                      })
                  }),
                  (0, i.jsx)(O.F, {
                      setting: R.s6.ACCESSIBILITY_TEXT_TO_SPEECH_RATE,
                      children: (0, i.jsxs)(d.xJW, {
                          className: M.marginTop20,
                          children: [
                              (0, i.jsx)(d.vwX, {
                                  id: H,
                                  className: M.marginBottom20,
                                  children: k.intl.string(k.t.lsW5Eh)
                              }),
                              (0, i.jsx)('div', {
                                  className: L.ttsPreviewWrapper,
                                  children: (0, i.jsx)(d.zxk, {
                                      color: d.Ttl.BRAND,
                                      onClick: () => {
                                          if (n) {
                                              (0, S.NB)(), s(!1);
                                              return;
                                          }
                                          (0, S.cP)(
                                              k.intl.string(k.t.PKaNJC),
                                              !0,
                                              void 0,
                                              () => s(!0),
                                              () => s(!1)
                                          ),
                                              s(!0);
                                      },
                                      children: (0, i.jsxs)(f.Z, {
                                          align: f.Z.Align.CENTER,
                                          children: [
                                              n
                                                  ? (0, i.jsx)(d.fpf, {
                                                        size: 'md',
                                                        color: 'currentColor'
                                                    })
                                                  : (0, i.jsx)(d.o1U, {
                                                        size: 'md',
                                                        color: 'currentColor'
                                                    }),
                                              (0, i.jsx)('span', { children: k.intl.string(k.t.hymc8v) }),
                                              (0, i.jsx)(d.nn4, { children: k.intl.string(k.t.lsW5Eh) })
                                          ]
                                      })
                                  })
                              }),
                              (0, i.jsx)(d.iRW, {
                                  markers: w.q,
                                  initialValue: t,
                                  defaultValue: 1,
                                  stickToMarkers: !0,
                                  onValueChange: W,
                                  onValueRender: (e) => 'x'.concat(e.toFixed(2)),
                                  onMarkerRender: (e) =>
                                      0 === e
                                          ? (0, i.jsx)('span', {
                                                className: L.ttsSliderMarker,
                                                children: k.intl.string(k.t['493lwc'])
                                            })
                                          : 10 === e
                                            ? (0, i.jsx)('span', {
                                                  className: L.ttsSliderMarker,
                                                  children: k.intl.string(k.t.ZSZEdX)
                                              })
                                            : 1 === e
                                              ? (0, i.jsx)('span', { children: 'x1.0' })
                                              : e % 1 == 0
                                                ? ''
                                                : void 0,
                                  'aria-labelledby': H
                              })
                          ]
                      })
                  })
              ]
          })
        : null;
}
