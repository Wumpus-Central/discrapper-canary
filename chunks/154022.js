n.d(t, { Z: () => Y }), n(47120);
var r = n(200651),
    i = n(192379),
    s = n(120356),
    a = n.n(s),
    l = n(392711),
    o = n.n(l),
    c = n(442837),
    d = n(481060),
    u = n(230711),
    m = n(419363),
    g = n(857595),
    p = n(607070),
    h = n(627845),
    f = n(600164),
    b = n(313201),
    N = n(786761),
    x = n(3148),
    _ = n(739566),
    E = n(753206),
    j = n(440849),
    O = n(921801),
    C = n(196051),
    S = n(441729),
    v = n(626135),
    T = n(63063),
    I = n(695346),
    y = n(263937),
    A = n(996073),
    P = n(526761),
    R = n(726985),
    D = n(981631),
    Z = n(611480),
    w = n(653477),
    k = n(388032),
    W = n(855112),
    L = n(20493),
    B = n(328756);
function M(e) {
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
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = r);
            });
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
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let V = (0, b.hQ)(),
    G = (0, b.hQ)(),
    F = (0, b.hQ)(),
    H = o().debounce((e) => {
        (0, g.o2)(e);
    }, 250),
    z = o().debounce((e) => {
        (0, C.Ct)(e);
    }, 250);
function Y(e) {
    return (0, r.jsxs)(d.hjN, {
        tag: d.RB0.H1,
        title: k.NW.string(k.t.G0neg4),
        children: [
            (0, r.jsx)('div', {
                className: L.marginBottom20,
                children: (0, r.jsx)(K, {})
            }),
            (0, r.jsxs)(O.F, {
                setting: R.s6.ACCESSIBILITY_SATURATION,
                children: [(0, r.jsx)(q, {}), (0, r.jsx)(d.$i$, {})]
            }),
            (0, r.jsx)(O.F, {
                setting: R.s6.ACCESSIBILITY_LINK_DECORATIONS,
                children: (0, r.jsx)(X, {})
            }),
            (0, r.jsx)(O.F, {
                setting: R.s6.ACCESSIBILITY_ROLE_STYLE,
                children: (0, r.jsx)(J, {})
            }),
            (0, r.jsx)(O.F, {
                setting: R.s6.ACCESSIBILITY_TAGS,
                children: (0, r.jsx)(Q, {})
            }),
            (0, r.jsx)(O.F, {
                setting: R.s6.ACCESSIBILITY_PROFILE_COLORS,
                children: (0, r.jsx)($, {})
            }),
            (0, h.b)()
                ? (0, r.jsxs)(O.F, {
                      setting: R.s6.ACCESSIBILITY_CONTRAST,
                      children: [(0, r.jsx)(ee, {}), ' ']
                  })
                : null,
            (0, r.jsx)(O.F, {
                setting: R.s6.ACCESSIBILITY_REDUCED_MOTION,
                children: (0, r.jsx)(et, {})
            }),
            (0, r.jsx)(O.F, {
                setting: R.s6.ACCESSIBILITY_STICKERS,
                children: (0, r.jsx)(en, {})
            }),
            (0, r.jsx)(O.F, {
                setting: R.s6.ACCESSIBILITY_MESSAGES,
                children: (0, r.jsx)(er, {})
            }),
            (0, r.jsx)(ei, {}),
            (0, r.jsxs)(O.F, {
                setting: R.s6.ACCESSIBILITY_APPEARANCE_UPSELL,
                children: [
                    (0, r.jsx)(d.$i$, { className: L.marginTop20 }),
                    (0, r.jsx)(d.Text, {
                        className: L.marginTop20,
                        variant: 'text-md/normal',
                        children: k.NW.format(k.t.DHpTjY, {
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
        [t] = i.useState(() => {
            let e = (0, N.e5)(
                U(
                    M(
                        {},
                        (0, x.ZP)({
                            channelId: '1337',
                            content: k.NW.formatToPlainString(k.t.bB80LC, { previewLink: 'https://discord.com/accessibility' })
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
    return (0, r.jsx)(d.Rny, {
        children: (0, r.jsxs)(d.Zbd, {
            className: W.preview,
            'aria-hidden': !0,
            children: [
                (0, r.jsxs)('div', {
                    className: W.previewHeader,
                    children: [
                        (0, r.jsx)(d.zxk, {
                            size: d.zxk.Sizes.SMALL,
                            color: d.zxk.Colors.BRAND,
                            children: k.NW.string(k.t['2RHHg4'])
                        }),
                        (0, r.jsx)('div', {
                            className: W.previewAvatars,
                            children: [D.Skl.ONLINE, D.Skl.DND, D.Skl.IDLE].map((e) =>
                                (0, r.jsx)(
                                    d.Xo$,
                                    {
                                        'aria-label': k.NW.string(k.t.lqaIxM),
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
                (0, r.jsx)('div', {
                    className: W.previewMessage,
                    children: (0, r.jsx)(E.Z, {
                        compact: e,
                        author: U(M({}, (0, _.ZH)(t)), { colorString: '#DD80F4' }),
                        message: t
                    })
                })
            ]
        })
    });
}
function q() {
    let { saturation: e, desaturateUserColors: t } = (0, c.cj)([p.Z], () => ({
        saturation: p.Z.saturation,
        desaturateUserColors: p.Z.desaturateUserColors
    }));
    return (0, r.jsxs)(d.hjN, {
        className: L.marginTop20,
        children: [
            (0, r.jsx)(d.vwX, {
                id: V,
                className: L.marginBottom8,
                children: k.NW.string(k.t['5PWWCQ'])
            }),
            (0, r.jsx)(d.R94, {
                id: G,
                type: d.R94.Types.DESCRIPTION,
                className: L.marginBottom20,
                children: k.NW.string(k.t['0PbE/P'])
            }),
            (0, r.jsx)(d.iRW, {
                'aria-labelledby': V,
                'aria-describedby': G,
                markers: D.yqN.SATURATION_INCREMENTS,
                equidistant: !0,
                stickToMarkers: !0,
                maxValue: 1,
                minValue: 0,
                initialValue: e,
                onValueChange: H,
                onMarkerRender: (e) => ((100 * e) % 2 == 0 ? ''.concat(100 * e, '%') : void 0)
            }),
            (0, r.jsx)(O.F, {
                setting: R.s6.ACCESSIBILITY_SATURATION_CUSTOM_COLOR,
                children: (0, r.jsx)(d.j7V, {
                    hideBorder: !0,
                    className: a()(L.marginTop20, L.marginBottom20),
                    value: t,
                    onChange: g.f1,
                    note: k.NW.string(k.t.nlAOER),
                    children: k.NW.string(k.t.bQCodH)
                })
            })
        ]
    });
}
function X() {
    let e = (0, c.e7)([p.Z], () => p.Z.alwaysShowLinkDecorations);
    return (0, r.jsx)(d.xJW, {
        className: L.marginTop20,
        children: (0, r.jsx)(d.j7V, {
            note: k.NW.string(k.t['72i5GB']),
            value: e,
            onChange: function () {
                (0, g.gs)(!e);
            },
            children: k.NW.string(k.t.OLZFBw)
        })
    });
}
function J() {
    let e = (0, c.e7)([p.Z], () => p.Z.roleStyle);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)(d.xJW, {
                title: k.NW.string(k.t.uSOPWl),
                className: L.marginTop20,
                children: [
                    (0, r.jsx)(d.R94, {
                        type: d.R94.Types.DESCRIPTION,
                        className: L.marginBottom8,
                        children: k.NW.string(k.t['86hjzc'])
                    }),
                    (0, r.jsx)(d.FXm, {
                        options: [
                            {
                                name: k.NW.string(k.t.YEOEi4),
                                value: 'username'
                            },
                            {
                                name: k.NW.string(k.t.mQaro6),
                                value: 'dot'
                            },
                            {
                                name: k.NW.string(k.t.Ji2EVF),
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
            (0, r.jsx)(d.$i$, { className: L.marginTop20 })
        ]
    });
}
function Q() {
    let e = (0, c.e7)([p.Z], () => p.Z.hideTags);
    return (0, r.jsx)(d.xJW, {
        title: k.NW.string(k.t.UQt6dX),
        className: L.marginTop20,
        children: (0, r.jsx)(O.F, {
            setting: R.s6.ACCESSIBILITY_TAGS_NAMES,
            children: (0, r.jsx)(d.j7V, {
                value: !e,
                onChange: () => (0, g.Nv)(!e),
                children: k.NW.string(k.t.UPwh1N)
            })
        })
    });
}
function $() {
    let e = (0, c.e7)([p.Z], () => p.Z.syncProfileThemeWithUserTheme),
        t = i.useRef(null);
    return (
        (0, A.Z)(t, P.rP.SYNC_PROFILE_THEME_WITH_USER_THEME),
        (0, r.jsx)(d.xJW, {
            ref: t,
            title: k.NW.string(k.t.BT8Bmp),
            className: a()(L.marginTop20, W.syncProfileThemeWithUserTheme),
            children: (0, r.jsx)(O.F, {
                setting: R.s6.ACCESSIBILITY_PROFILE_COLORS_SYNC_THEMES,
                children: (0, r.jsx)(d.j7V, {
                    note: k.NW.format(k.t.u6UjrK, {
                        onThemeClick() {
                            u.Z.open(D.oAB.APPEARANCE);
                        }
                    }),
                    className: L.marginTop20,
                    value: e,
                    onChange: g.Uv,
                    children: k.NW.string(k.t['sSY+mJ'])
                })
            })
        })
    );
}
function ee() {
    let [e] = (0, c.Wu)([p.Z], () => [p.Z.syncForcedColors, p.Z.systemForcedColors]),
        [t, n] = i.useState(e);
    i.useEffect(() => {
        n(e);
    }, [e]);
    let s = i.useRef(null);
    i.useEffect(() => {
        null != s.current && (clearTimeout(s.current), (s.current = null)), t !== e && (s.current = setTimeout(() => (0, g.qz)(t), 150));
    }, [t, e]);
    let a = k.NW.format(k.t.GwEVEx, { learnMoreLink: T.Z.getArticleURL(D.BhN.FORCED_COLORS) });
    return (0, r.jsx)(d.xJW, {
        title: k.NW.string(k.t.TYyfOz),
        className: L.marginTop20,
        children: (0, r.jsx)(O.F, {
            setting: R.s6.ACCESSIBILITY_CONTRAST_SYNC_FORCED_COLORS,
            children: (0, r.jsx)(d.j7V, {
                value: t,
                note: a,
                onChange: n,
                children: k.NW.string(k.t.cguieX)
            })
        })
    });
}
function et() {
    let e = I.QK.useSetting(),
        t = I.Yk.useSetting(),
        {
            useReducedMotion: n,
            rawPrefersReducedMotion: s,
            systemPrefersReducedMotion: l,
            gifAutoPlayOverrideReason: o,
            animateEmojiOverrideReason: u
        } = (0, c.cj)([p.Z, y.Z], () => ({
            systemPrefersReducedMotion: p.Z.systemPrefersReducedMotion,
            rawPrefersReducedMotion: p.Z.rawPrefersReducedMotion,
            useReducedMotion: p.Z.useReducedMotion,
            gifAutoPlayOverrideReason: y.Z.getAppliedOverrideReasonKey('gifAutoPlay'),
            animateEmojiOverrideReason: y.Z.getAppliedOverrideReasonKey('animateEmoji')
        })),
        m = i.useRef(null);
    (0, A.Z)(m, P.rP.REDUCED_MOTION);
    let h = i.useCallback(
            (e, t) => {
                (0, g.Zt)(t ? 'auto' : l);
            },
            [l]
        ),
        f = i.useCallback((e) => {
            (0, g.Zt)(e ? 'reduce' : 'no-preference');
        }, []);
    return (0, r.jsxs)(d.xJW, {
        ref: m,
        title: k.NW.string(k.t.e3TR1d),
        className: a()(L.marginTop20, W.reducedMotion),
        children: [
            (0, r.jsx)(d.R94, {
                type: d.R94.Types.DESCRIPTION,
                className: L.marginBottom8,
                children: k.NW.format(k.t['2l9U2t'], { helpdeskArticle: T.Z.getArticleURL(D.BhN.REDUCED_MOTION) })
            }),
            (0, r.jsx)(d.XZJ, {
                className: a()(L.marginTop20, L.marginBottom20),
                value: 'auto' === s,
                shape: d.XZJ.Shapes.BOX,
                type: d.XZJ.Types.INVERTED,
                onChange: h,
                children: (0, r.jsx)(d.Text, {
                    variant: 'text-sm/normal',
                    children: k.NW.string(k.t['+Dx+HB'])
                })
            }),
            (0, r.jsx)(O.F, {
                setting: R.s6.ACCESSIBILITY_REDUCED_MOTION_ENABLE,
                children: (0, r.jsx)(d.j7V, {
                    value: n,
                    onChange: f,
                    children: k.NW.string(k.t.b3XBzs)
                })
            }),
            (0, r.jsx)(O.F, {
                setting: R.s6.ACCESSIBILITY_REDUCED_MOTION_AUTO_PLAY_GIFS,
                children: (0, r.jsx)(d.j7V, {
                    className: L.marginBottom20,
                    value: e,
                    note: null != o ? (0, j.Z)(o) : void 0,
                    onChange: I.QK.updateSetting,
                    children: k.NW.string(k.t.Iayoh4)
                })
            }),
            (0, r.jsx)(O.F, {
                setting: R.s6.ACCESSIBILITY_REDUCED_MOTION_PLAY_ANIMATED_EMOJI,
                children: (0, r.jsx)(d.j7V, {
                    className: L.marginBottom20,
                    value: t,
                    note: null != u ? (0, j.Z)(u) : void 0,
                    onChange: I.Yk.updateSetting,
                    children: k.NW.string(k.t.iIaOlZ)
                })
            })
        ]
    });
}
function en() {
    let e = I.Wp.useSetting(),
        t = (0, c.e7)([y.Z], () => y.Z.getAppliedOverrideReasonKey('animateStickers')),
        n = i.useCallback((e) => {
            I.Wp.updateSetting(e.value);
        }, []);
    return (0, r.jsxs)(d.xJW, {
        className: L.marginTop20,
        title: k.NW.string(k.t['6NtAuL']),
        children: [
            (0, r.jsx)(d.R94, {
                type: d.R94.Types.DESCRIPTION,
                className: L.marginBottom8,
                children: null != t ? (0, j.Z)(t) : k.NW.string(k.t.GRa6U1)
            }),
            (0, r.jsx)(d.FXm, {
                options: [
                    {
                        name: k.NW.string(k.t['Xp+X2d']),
                        value: Z.yr.ALWAYS_ANIMATE
                    },
                    {
                        name: k.NW.string(k.t.IlLT7e),
                        desc: k.NW.string(k.t.bIW9Tk),
                        value: Z.yr.ANIMATE_ON_INTERACTION
                    },
                    {
                        name: k.NW.string(k.t.IGu8x8),
                        value: Z.yr.NEVER_ANIMATE
                    }
                ],
                onChange: n,
                value: e
            })
        ]
    });
}
function er() {
    let e = (0, c.e7)([p.Z], () => p.Z.isSubmitButtonEnabled),
        t = I.dN.useSetting(),
        n = i.useRef(null);
    return (
        (0, A.Z)(n, P.rP.LEGACY_CHAT_INPUT),
        (0, r.jsxs)(d.xJW, {
            ref: n,
            className: L.marginTop20,
            children: [
                (0, r.jsx)(d.vwX, {
                    className: L.marginBottom8,
                    children: k.NW.string(k.t.onqU6u)
                }),
                (0, r.jsx)(O.F, {
                    setting: R.s6.ACCESSIBILITY_MESSAGES_SEND_MESSAGE_BUTTON,
                    children: (0, r.jsx)(d.j7V, {
                        className: L.marginTop20,
                        value: e,
                        onChange: g.eN,
                        children: k.NW.string(k.t['3Fztn5'])
                    })
                }),
                (0, r.jsx)(O.F, {
                    setting: R.s6.ACCESSIBILITY_MESSAGES_LEGACY_CHAT_INPUT,
                    children: (0, r.jsx)(d.j7V, {
                        className: L.marginTop8,
                        value: t,
                        note: k.NW.string(k.t.Q7wgHR),
                        onChange: (e) => {
                            v.default.track(D.rMx.LEGACY_CHAT_INPUT_TOGGLED, {
                                enabled: e,
                                location: { section: D.jXE.SETTINGS_ACCESSIBILITY }
                            }),
                                I.dN.updateSetting(e);
                        },
                        children: k.NW.string(k.t.TZ2hZG)
                    })
                })
            ]
        })
    );
}
function ei() {
    let e = I.OW.useSetting(),
        t = (0, c.e7)([S.Z], () => S.Z.speechRate),
        [n, s] = i.useState(!1);
    return m.Zh
        ? (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsx)(O.F, {
                      setting: R.s6.ACCESSIBILITY_TEXT_TO_SPEECH,
                      children: (0, r.jsxs)(d.xJW, {
                          className: L.marginTop20,
                          children: [
                              (0, r.jsx)(d.vwX, {
                                  className: L.marginBottom8,
                                  children: k.NW.string(k.t.VpSKeH)
                              }),
                              (0, r.jsx)(O.F, {
                                  setting: R.s6.ACCESSIBILITY_TEXT_TO_SPEECH_TTS_COMMAND,
                                  children: (0, r.jsx)(d.j7V, {
                                      className: L.marginTop20,
                                      value: e,
                                      onChange: I.OW.updateSetting,
                                      children: k.NW.string(k.t.qvTIwc)
                                  })
                              })
                          ]
                      })
                  }),
                  (0, r.jsx)(O.F, {
                      setting: R.s6.ACCESSIBILITY_TEXT_TO_SPEECH_RATE,
                      children: (0, r.jsxs)(d.xJW, {
                          className: L.marginTop20,
                          children: [
                              (0, r.jsx)(d.vwX, {
                                  id: F,
                                  className: L.marginBottom20,
                                  children: k.NW.string(k.t.lsW5Eh)
                              }),
                              (0, r.jsx)('div', {
                                  className: W.ttsPreviewWrapper,
                                  children: (0, r.jsx)(d.zxk, {
                                      color: d.Ttl.BRAND,
                                      onClick: () => {
                                          if (n) {
                                              (0, C.NB)(), s(!1);
                                              return;
                                          }
                                          (0, C.cP)(
                                              k.NW.string(k.t.PKaNJC),
                                              !0,
                                              void 0,
                                              () => s(!0),
                                              () => s(!1)
                                          ),
                                              s(!0);
                                      },
                                      children: (0, r.jsxs)(f.Z, {
                                          align: f.Z.Align.CENTER,
                                          children: [
                                              n
                                                  ? (0, r.jsx)(d.fpf, {
                                                        size: 'md',
                                                        color: 'currentColor'
                                                    })
                                                  : (0, r.jsx)(d.o1U, {
                                                        size: 'md',
                                                        color: 'currentColor'
                                                    }),
                                              (0, r.jsx)('span', { children: k.NW.string(k.t.hymc8v) }),
                                              (0, r.jsx)(d.nn4, { children: k.NW.string(k.t.lsW5Eh) })
                                          ]
                                      })
                                  })
                              }),
                              (0, r.jsx)(d.iRW, {
                                  markers: w.q,
                                  initialValue: t,
                                  defaultValue: 1,
                                  stickToMarkers: !0,
                                  onValueChange: z,
                                  onValueRender: (e) => 'x'.concat(e.toFixed(2)),
                                  onMarkerRender: (e) =>
                                      0 === e
                                          ? (0, r.jsx)('span', {
                                                className: W.ttsSliderMarker,
                                                children: k.NW.string(k.t['493lwc'])
                                            })
                                          : 10 === e
                                            ? (0, r.jsx)('span', {
                                                  className: W.ttsSliderMarker,
                                                  children: k.NW.string(k.t.ZSZEdX)
                                              })
                                            : 1 === e
                                              ? (0, r.jsx)('span', { children: 'x1.0' })
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
