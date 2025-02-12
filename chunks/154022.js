n.d(t, { Z: () => Y }), n(47120);
var i = n(200651),
    s = n(192379),
    l = n(120356),
    r = n.n(l),
    a = n(392711),
    o = n.n(a),
    c = n(442837),
    d = n(481060),
    u = n(230711),
    h = n(419363),
    m = n(857595),
    g = n(607070),
    x = n(627845),
    _ = n(600164),
    p = n(313201),
    E = n(786761),
    C = n(3148),
    f = n(739566),
    N = n(753206),
    I = n(440849),
    T = n(921801),
    S = n(196051),
    j = n(441729),
    v = n(626135),
    b = n(63063),
    A = n(695346),
    O = n(263937),
    R = n(996073),
    D = n(526761),
    P = n(726985),
    y = n(981631),
    Z = n(611480),
    L = n(653477),
    k = n(388032),
    B = n(317277),
    M = n(814632),
    V = n(328756);
let w = (0, p.hQ)(),
    U = (0, p.hQ)(),
    G = (0, p.hQ)(),
    F = o().debounce((e) => {
        (0, m.o2)(e);
    }, 250),
    z = o().debounce((e) => {
        (0, S.Ct)(e);
    }, 250);
function Y(e) {
    return (0, i.jsxs)(d.hjN, {
        tag: d.RB0.H1,
        title: k.intl.string(k.t.G0neg4),
        children: [
            (0, i.jsx)('div', {
                className: M.marginBottom20,
                children: (0, i.jsx)(H, {})
            }),
            (0, i.jsxs)(T.F, {
                setting: P.s6.ACCESSIBILITY_SATURATION,
                children: [(0, i.jsx)(W, {}), (0, i.jsx)(d.$i$, {})]
            }),
            (0, i.jsx)(T.F, {
                setting: P.s6.ACCESSIBILITY_LINK_DECORATIONS,
                children: (0, i.jsx)(K, {})
            }),
            (0, i.jsx)(T.F, {
                setting: P.s6.ACCESSIBILITY_ROLE_STYLE,
                children: (0, i.jsx)(X, {})
            }),
            (0, i.jsx)(T.F, {
                setting: P.s6.ACCESSIBILITY_TAGS,
                children: (0, i.jsx)(q, {})
            }),
            (0, i.jsx)(T.F, {
                setting: P.s6.ACCESSIBILITY_PROFILE_COLORS,
                children: (0, i.jsx)(J, {})
            }),
            (0, x.b)()
                ? (0, i.jsxs)(T.F, {
                      setting: P.s6.ACCESSIBILITY_CONTRAST,
                      children: [(0, i.jsx)(Q, {}), ' ']
                  })
                : null,
            (0, i.jsx)(T.F, {
                setting: P.s6.ACCESSIBILITY_REDUCED_MOTION,
                children: (0, i.jsx)($, {})
            }),
            (0, i.jsx)(T.F, {
                setting: P.s6.ACCESSIBILITY_STICKERS,
                children: (0, i.jsx)(ee, {})
            }),
            (0, i.jsx)(T.F, {
                setting: P.s6.ACCESSIBILITY_MESSAGES,
                children: (0, i.jsx)(et, {})
            }),
            (0, i.jsx)(en, {}),
            (0, i.jsxs)(T.F, {
                setting: P.s6.ACCESSIBILITY_APPEARANCE_UPSELL,
                children: [
                    (0, i.jsx)(d.$i$, { className: M.marginTop20 }),
                    (0, i.jsx)(d.Text, {
                        className: M.marginTop20,
                        variant: 'text-md/normal',
                        children: k.intl.format(k.t.DHpTjY, {
                            onAppearanceClick() {
                                u.Z.open(y.oAB.APPEARANCE);
                            }
                        })
                    })
                ]
            })
        ]
    });
}
function H() {
    let e = A.jU.useSetting(),
        [t] = s.useState(() => {
            let e = (0, E.e5)({
                ...(0, C.ZP)({
                    channelId: '1337',
                    content: k.intl.formatToPlainString(k.t.bB80LC, { previewLink: 'https://discord.com/accessibility' })
                }),
                state: y.yb.SENT,
                id: ''.concat(0)
            });
            return (e.colorString = 'green'), e;
        });
    return (0, i.jsx)(d.Rny, {
        children: (0, i.jsxs)(d.Zbd, {
            className: B.preview,
            'aria-hidden': !0,
            children: [
                (0, i.jsxs)('div', {
                    className: B.previewHeader,
                    children: [
                        (0, i.jsx)(d.zxk, {
                            size: d.zxk.Sizes.SMALL,
                            color: d.zxk.Colors.BRAND,
                            children: k.intl.string(k.t['2RHHg4'])
                        }),
                        (0, i.jsx)('div', {
                            className: B.previewAvatars,
                            children: [y.Skl.ONLINE, y.Skl.DND, y.Skl.IDLE].map((e) =>
                                (0, i.jsx)(
                                    d.Xo$,
                                    {
                                        'aria-label': k.intl.string(k.t.lqaIxM),
                                        src: V,
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
                    className: B.previewMessage,
                    children: (0, i.jsx)(N.Z, {
                        compact: e,
                        author: {
                            ...(0, f.ZH)(t),
                            colorString: '#DD80F4'
                        },
                        message: t
                    })
                })
            ]
        })
    });
}
function W() {
    let { saturation: e, desaturateUserColors: t } = (0, c.cj)([g.Z], () => ({
        saturation: g.Z.saturation,
        desaturateUserColors: g.Z.desaturateUserColors
    }));
    return (0, i.jsxs)(d.hjN, {
        className: M.marginTop20,
        children: [
            (0, i.jsx)(d.vwX, {
                id: w,
                className: M.marginBottom8,
                children: k.intl.string(k.t['5PWWCQ'])
            }),
            (0, i.jsx)(d.R94, {
                id: U,
                type: d.R94.Types.DESCRIPTION,
                className: M.marginBottom20,
                children: k.intl.string(k.t['0PbE/P'])
            }),
            (0, i.jsx)(d.iRW, {
                'aria-labelledby': w,
                'aria-describedby': U,
                markers: y.yqN.SATURATION_INCREMENTS,
                equidistant: !0,
                stickToMarkers: !0,
                maxValue: 1,
                minValue: 0,
                initialValue: e,
                onValueChange: F,
                onMarkerRender: (e) => ((100 * e) % 2 == 0 ? ''.concat(100 * e, '%') : void 0)
            }),
            (0, i.jsx)(T.F, {
                setting: P.s6.ACCESSIBILITY_SATURATION_CUSTOM_COLOR,
                children: (0, i.jsx)(d.j7V, {
                    hideBorder: !0,
                    className: r()(M.marginTop20, M.marginBottom20),
                    value: t,
                    onChange: m.f1,
                    note: k.intl.string(k.t.nlAOER),
                    children: k.intl.string(k.t.bQCodH)
                })
            })
        ]
    });
}
function K() {
    let e = (0, c.e7)([g.Z], () => g.Z.alwaysShowLinkDecorations);
    return (0, i.jsx)(d.xJW, {
        className: M.marginTop20,
        children: (0, i.jsx)(d.j7V, {
            note: k.intl.string(k.t['72i5GB']),
            value: e,
            onChange: function () {
                (0, m.gs)(!e);
            },
            children: k.intl.string(k.t.OLZFBw)
        })
    });
}
function X() {
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
                            (0, m.u1)(e.value);
                        },
                        value: e
                    })
                ]
            }),
            (0, i.jsx)(d.$i$, { className: M.marginTop20 })
        ]
    });
}
function q() {
    let e = (0, c.e7)([g.Z], () => g.Z.hideTags);
    return (0, i.jsx)(d.xJW, {
        title: k.intl.string(k.t.UQt6dX),
        className: M.marginTop20,
        children: (0, i.jsx)(T.F, {
            setting: P.s6.ACCESSIBILITY_TAGS_NAMES,
            children: (0, i.jsx)(d.j7V, {
                value: !e,
                onChange: () => (0, m.Nv)(!e),
                children: k.intl.string(k.t.UPwh1N)
            })
        })
    });
}
function J() {
    let e = (0, c.e7)([g.Z], () => g.Z.syncProfileThemeWithUserTheme),
        t = s.useRef(null);
    return (
        (0, R.Z)(t, D.rP.SYNC_PROFILE_THEME_WITH_USER_THEME),
        (0, i.jsx)(d.xJW, {
            ref: t,
            title: k.intl.string(k.t.BT8Bmp),
            className: r()(M.marginTop20, B.syncProfileThemeWithUserTheme),
            children: (0, i.jsx)(T.F, {
                setting: P.s6.ACCESSIBILITY_PROFILE_COLORS_SYNC_THEMES,
                children: (0, i.jsx)(d.j7V, {
                    note: k.intl.format(k.t.u6UjrK, {
                        onThemeClick() {
                            u.Z.open(y.oAB.APPEARANCE);
                        }
                    }),
                    className: M.marginTop20,
                    value: e,
                    onChange: m.Uv,
                    children: k.intl.string(k.t['sSY+mJ'])
                })
            })
        })
    );
}
function Q() {
    let [e] = (0, c.Wu)([g.Z], () => [g.Z.syncForcedColors, g.Z.systemForcedColors]),
        [t, n] = s.useState(e);
    s.useEffect(() => {
        n(e);
    }, [e]);
    let l = s.useRef(null);
    s.useEffect(() => {
        null != l.current && (clearTimeout(l.current), (l.current = null)), t !== e && (l.current = setTimeout(() => (0, m.qz)(t), 150));
    }, [t, e]);
    let r = k.intl.format(k.t.GwEVEx, { learnMoreLink: b.Z.getArticleURL(y.BhN.FORCED_COLORS) });
    return (0, i.jsx)(d.xJW, {
        title: k.intl.string(k.t.TYyfOz),
        className: M.marginTop20,
        children: (0, i.jsx)(T.F, {
            setting: P.s6.ACCESSIBILITY_CONTRAST_SYNC_FORCED_COLORS,
            children: (0, i.jsx)(d.j7V, {
                value: t,
                note: r,
                onChange: n,
                children: k.intl.string(k.t.cguieX)
            })
        })
    });
}
function $() {
    let e = A.QK.useSetting(),
        t = A.Yk.useSetting(),
        {
            useReducedMotion: n,
            rawPrefersReducedMotion: l,
            systemPrefersReducedMotion: a,
            gifAutoPlayOverrideReason: o,
            animateEmojiOverrideReason: u
        } = (0, c.cj)([g.Z, O.Z], () => ({
            systemPrefersReducedMotion: g.Z.systemPrefersReducedMotion,
            rawPrefersReducedMotion: g.Z.rawPrefersReducedMotion,
            useReducedMotion: g.Z.useReducedMotion,
            gifAutoPlayOverrideReason: O.Z.getAppliedOverrideReasonKey('gifAutoPlay'),
            animateEmojiOverrideReason: O.Z.getAppliedOverrideReasonKey('animateEmoji')
        })),
        h = s.useRef(null);
    (0, R.Z)(h, D.rP.REDUCED_MOTION);
    let x = s.useCallback(
            (e, t) => {
                (0, m.Zt)(t ? 'auto' : a);
            },
            [a]
        ),
        _ = s.useCallback((e) => {
            (0, m.Zt)(e ? 'reduce' : 'no-preference');
        }, []);
    return (0, i.jsxs)(d.xJW, {
        ref: h,
        title: k.intl.string(k.t.e3TR1d),
        className: r()(M.marginTop20, B.reducedMotion),
        children: [
            (0, i.jsx)(d.R94, {
                type: d.R94.Types.DESCRIPTION,
                className: M.marginBottom8,
                children: k.intl.format(k.t['2l9U2t'], { helpdeskArticle: b.Z.getArticleURL(y.BhN.REDUCED_MOTION) })
            }),
            (0, i.jsx)(d.XZJ, {
                className: r()(M.marginTop20, M.marginBottom20),
                value: 'auto' === l,
                shape: d.XZJ.Shapes.BOX,
                type: d.XZJ.Types.INVERTED,
                onChange: x,
                children: (0, i.jsx)(d.Text, {
                    variant: 'text-sm/normal',
                    children: k.intl.string(k.t['+Dx+HB'])
                })
            }),
            (0, i.jsx)(T.F, {
                setting: P.s6.ACCESSIBILITY_REDUCED_MOTION_ENABLE,
                children: (0, i.jsx)(d.j7V, {
                    value: n,
                    onChange: _,
                    children: k.intl.string(k.t.b3XBzs)
                })
            }),
            (0, i.jsx)(T.F, {
                setting: P.s6.ACCESSIBILITY_REDUCED_MOTION_AUTO_PLAY_GIFS,
                children: (0, i.jsx)(d.j7V, {
                    className: M.marginBottom20,
                    value: e,
                    note: null != o ? (0, I.Z)(o) : void 0,
                    onChange: A.QK.updateSetting,
                    children: k.intl.string(k.t.Iayoh4)
                })
            }),
            (0, i.jsx)(T.F, {
                setting: P.s6.ACCESSIBILITY_REDUCED_MOTION_PLAY_ANIMATED_EMOJI,
                children: (0, i.jsx)(d.j7V, {
                    className: M.marginBottom20,
                    value: t,
                    note: null != u ? (0, I.Z)(u) : void 0,
                    onChange: A.Yk.updateSetting,
                    children: k.intl.string(k.t.iIaOlZ)
                })
            })
        ]
    });
}
function ee() {
    let e = A.Wp.useSetting(),
        t = (0, c.e7)([O.Z], () => O.Z.getAppliedOverrideReasonKey('animateStickers')),
        n = s.useCallback((e) => {
            A.Wp.updateSetting(e.value);
        }, []);
    return (0, i.jsxs)(d.xJW, {
        className: M.marginTop20,
        title: k.intl.string(k.t['6NtAuL']),
        children: [
            (0, i.jsx)(d.R94, {
                type: d.R94.Types.DESCRIPTION,
                className: M.marginBottom8,
                children: null != t ? (0, I.Z)(t) : k.intl.string(k.t.GRa6U1)
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
function et() {
    let e = (0, c.e7)([g.Z], () => g.Z.isSubmitButtonEnabled),
        t = A.dN.useSetting(),
        n = s.useRef(null);
    return (
        (0, R.Z)(n, D.rP.LEGACY_CHAT_INPUT),
        (0, i.jsxs)(d.xJW, {
            ref: n,
            className: M.marginTop20,
            children: [
                (0, i.jsx)(d.vwX, {
                    className: M.marginBottom8,
                    children: k.intl.string(k.t.onqU6u)
                }),
                (0, i.jsx)(T.F, {
                    setting: P.s6.ACCESSIBILITY_MESSAGES_SEND_MESSAGE_BUTTON,
                    children: (0, i.jsx)(d.j7V, {
                        className: M.marginTop20,
                        value: e,
                        onChange: m.eN,
                        children: k.intl.string(k.t['3Fztn5'])
                    })
                }),
                (0, i.jsx)(T.F, {
                    setting: P.s6.ACCESSIBILITY_MESSAGES_LEGACY_CHAT_INPUT,
                    children: (0, i.jsx)(d.j7V, {
                        className: M.marginTop8,
                        value: t,
                        note: k.intl.string(k.t.Q7wgHR),
                        onChange: (e) => {
                            v.default.track(y.rMx.LEGACY_CHAT_INPUT_TOGGLED, {
                                enabled: e,
                                location: { section: y.jXE.SETTINGS_ACCESSIBILITY }
                            }),
                                A.dN.updateSetting(e);
                        },
                        children: k.intl.string(k.t.TZ2hZG)
                    })
                })
            ]
        })
    );
}
function en() {
    let e = A.OW.useSetting(),
        t = (0, c.e7)([j.Z], () => j.Z.speechRate),
        [n, l] = s.useState(!1);
    return h.Zh
        ? (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsx)(T.F, {
                      setting: P.s6.ACCESSIBILITY_TEXT_TO_SPEECH,
                      children: (0, i.jsxs)(d.xJW, {
                          className: M.marginTop20,
                          children: [
                              (0, i.jsx)(d.vwX, {
                                  className: M.marginBottom8,
                                  children: k.intl.string(k.t.VpSKeH)
                              }),
                              (0, i.jsx)(T.F, {
                                  setting: P.s6.ACCESSIBILITY_TEXT_TO_SPEECH_TTS_COMMAND,
                                  children: (0, i.jsx)(d.j7V, {
                                      className: M.marginTop20,
                                      value: e,
                                      onChange: A.OW.updateSetting,
                                      children: k.intl.string(k.t.qvTIwc)
                                  })
                              })
                          ]
                      })
                  }),
                  (0, i.jsx)(T.F, {
                      setting: P.s6.ACCESSIBILITY_TEXT_TO_SPEECH_RATE,
                      children: (0, i.jsxs)(d.xJW, {
                          className: M.marginTop20,
                          children: [
                              (0, i.jsx)(d.vwX, {
                                  id: G,
                                  className: M.marginBottom20,
                                  children: k.intl.string(k.t.lsW5Eh)
                              }),
                              (0, i.jsx)('div', {
                                  className: B.ttsPreviewWrapper,
                                  children: (0, i.jsx)(d.zxk, {
                                      color: d.Ttl.BRAND,
                                      onClick: () => {
                                          if (n) {
                                              (0, S.NB)(), l(!1);
                                              return;
                                          }
                                          (0, S.cP)(
                                              k.intl.string(k.t.PKaNJC),
                                              !0,
                                              void 0,
                                              () => l(!0),
                                              () => l(!1)
                                          ),
                                              l(!0);
                                      },
                                      children: (0, i.jsxs)(_.Z, {
                                          align: _.Z.Align.CENTER,
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
                                  markers: L.q,
                                  initialValue: t,
                                  defaultValue: 1,
                                  stickToMarkers: !0,
                                  onValueChange: z,
                                  onValueRender: (e) => 'x'.concat(e.toFixed(2)),
                                  onMarkerRender: (e) =>
                                      0 === e
                                          ? (0, i.jsx)('span', {
                                                className: B.ttsSliderMarker,
                                                children: k.intl.string(k.t['493lwc'])
                                            })
                                          : 10 === e
                                            ? (0, i.jsx)('span', {
                                                  className: B.ttsSliderMarker,
                                                  children: k.intl.string(k.t.ZSZEdX)
                                              })
                                            : 1 === e
                                              ? (0, i.jsx)('span', { children: 'x1.0' })
                                              : e % 1 == 0
                                                ? ''
                                                : void 0,
                                  'aria-labelledby': G
                              })
                          ]
                      })
                  })
              ]
          })
        : null;
}
