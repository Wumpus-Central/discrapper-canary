n.d(t, { Z: () => z }), n(47120);
var i = n(200651),
    s = n(192379),
    r = n(120356),
    l = n.n(r),
    a = n(392711),
    o = n.n(a),
    c = n(442837),
    d = n(481060),
    u = n(230711),
    m = n(419363),
    g = n(857595),
    h = n(607070),
    x = n(627845),
    _ = n(600164),
    p = n(313201),
    E = n(786761),
    C = n(3148),
    f = n(739566),
    T = n(753206),
    N = n(440849),
    S = n(921801),
    I = n(196051),
    b = n(441729),
    v = n(626135),
    j = n(63063),
    A = n(695346),
    O = n(263937),
    R = n(996073),
    P = n(526761),
    D = n(726985),
    y = n(981631),
    Z = n(611480),
    k = n(653477),
    L = n(388032),
    B = n(20554),
    M = n(483938),
    w = n(328756);
let V = (0, p.hQ)(),
    U = (0, p.hQ)(),
    G = (0, p.hQ)(),
    F = o().debounce((e) => {
        (0, g.o2)(e);
    }, 250),
    H = o().debounce((e) => {
        (0, I.Ct)(e);
    }, 250);
function z(e) {
    return (0, i.jsxs)(d.hjN, {
        tag: d.RB0.H1,
        title: L.intl.string(L.t.G0neg4),
        children: [
            (0, i.jsx)('div', {
                className: M.marginBottom20,
                children: (0, i.jsx)(Y, {})
            }),
            (0, i.jsxs)(S.F, {
                setting: D.s6.ACCESSIBILITY_SATURATION,
                children: [(0, i.jsx)(W, {}), (0, i.jsx)(d.$i$, {})]
            }),
            (0, i.jsx)(S.F, {
                setting: D.s6.ACCESSIBILITY_LINK_DECORATIONS,
                children: (0, i.jsx)(K, {})
            }),
            (0, i.jsx)(S.F, {
                setting: D.s6.ACCESSIBILITY_ROLE_STYLE,
                children: (0, i.jsx)(q, {})
            }),
            (0, i.jsx)(S.F, {
                setting: D.s6.ACCESSIBILITY_TAGS,
                children: (0, i.jsx)(X, {})
            }),
            (0, i.jsx)(S.F, {
                setting: D.s6.ACCESSIBILITY_PROFILE_COLORS,
                children: (0, i.jsx)(J, {})
            }),
            (0, x.b)()
                ? (0, i.jsxs)(S.F, {
                      setting: D.s6.ACCESSIBILITY_CONTRAST,
                      children: [(0, i.jsx)(Q, {}), ' ']
                  })
                : null,
            (0, i.jsx)(S.F, {
                setting: D.s6.ACCESSIBILITY_REDUCED_MOTION,
                children: (0, i.jsx)($, {})
            }),
            (0, i.jsx)(S.F, {
                setting: D.s6.ACCESSIBILITY_STICKERS,
                children: (0, i.jsx)(ee, {})
            }),
            (0, i.jsx)(S.F, {
                setting: D.s6.ACCESSIBILITY_MESSAGES,
                children: (0, i.jsx)(et, {})
            }),
            (0, i.jsx)(en, {}),
            (0, i.jsxs)(S.F, {
                setting: D.s6.ACCESSIBILITY_APPEARANCE_UPSELL,
                children: [
                    (0, i.jsx)(d.$i$, { className: M.marginTop20 }),
                    (0, i.jsx)(d.Text, {
                        className: M.marginTop20,
                        variant: 'text-md/normal',
                        children: L.intl.format(L.t.DHpTjY, {
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
function Y() {
    let e = A.jU.useSetting(),
        [t] = s.useState(() => {
            let e = (0, E.e5)({
                ...(0, C.ZP)({
                    channelId: '1337',
                    content: L.intl.formatToPlainString(L.t.bB80LC, { previewLink: 'https://discord.com/accessibility' })
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
                            children: L.intl.string(L.t['2RHHg4'])
                        }),
                        (0, i.jsx)('div', {
                            className: B.previewAvatars,
                            children: [y.Skl.ONLINE, y.Skl.DND, y.Skl.IDLE].map((e) =>
                                (0, i.jsx)(
                                    d.Xo$,
                                    {
                                        'aria-label': L.intl.string(L.t.lqaIxM),
                                        src: w,
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
                    children: (0, i.jsx)(T.Z, {
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
    let { saturation: e, desaturateUserColors: t } = (0, c.cj)([h.Z], () => ({
        saturation: h.Z.saturation,
        desaturateUserColors: h.Z.desaturateUserColors
    }));
    return (0, i.jsxs)(d.hjN, {
        className: M.marginTop20,
        children: [
            (0, i.jsx)(d.vwX, {
                id: V,
                className: M.marginBottom8,
                children: L.intl.string(L.t['5PWWCQ'])
            }),
            (0, i.jsx)(d.R94, {
                id: U,
                type: d.R94.Types.DESCRIPTION,
                className: M.marginBottom20,
                children: L.intl.string(L.t['0PbE/P'])
            }),
            (0, i.jsx)(d.iRW, {
                'aria-labelledby': V,
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
            (0, i.jsx)(S.F, {
                setting: D.s6.ACCESSIBILITY_SATURATION_CUSTOM_COLOR,
                children: (0, i.jsx)(d.j7V, {
                    hideBorder: !0,
                    className: l()(M.marginTop20, M.marginBottom20),
                    value: t,
                    onChange: g.f1,
                    note: L.intl.string(L.t.nlAOER),
                    children: L.intl.string(L.t.bQCodH)
                })
            })
        ]
    });
}
function K() {
    let e = (0, c.e7)([h.Z], () => h.Z.alwaysShowLinkDecorations);
    return (0, i.jsx)(d.xJW, {
        className: M.marginTop20,
        children: (0, i.jsx)(d.j7V, {
            note: L.intl.string(L.t['72i5GB']),
            value: e,
            onChange: function () {
                (0, g.gs)(!e);
            },
            children: L.intl.string(L.t.OLZFBw)
        })
    });
}
function q() {
    let e = (0, c.e7)([h.Z], () => h.Z.roleStyle);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsxs)(d.xJW, {
                title: L.intl.string(L.t.uSOPWl),
                className: M.marginTop20,
                children: [
                    (0, i.jsx)(d.R94, {
                        type: d.R94.Types.DESCRIPTION,
                        className: M.marginBottom8,
                        children: L.intl.string(L.t['86hjzc'])
                    }),
                    (0, i.jsx)(d.FXm, {
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
            (0, i.jsx)(d.$i$, { className: M.marginTop20 })
        ]
    });
}
function X() {
    let e = (0, c.e7)([h.Z], () => h.Z.hideTags);
    return (0, i.jsx)(d.xJW, {
        title: L.intl.string(L.t.UQt6dX),
        className: M.marginTop20,
        children: (0, i.jsx)(S.F, {
            setting: D.s6.ACCESSIBILITY_TAGS_NAMES,
            children: (0, i.jsx)(d.j7V, {
                value: !e,
                onChange: () => (0, g.Nv)(!e),
                children: L.intl.string(L.t.UPwh1N)
            })
        })
    });
}
function J() {
    let e = (0, c.e7)([h.Z], () => h.Z.syncProfileThemeWithUserTheme),
        t = s.useRef(null);
    return (
        (0, R.Z)(t, P.rP.SYNC_PROFILE_THEME_WITH_USER_THEME),
        (0, i.jsx)(d.xJW, {
            ref: t,
            title: L.intl.string(L.t.BT8Bmp),
            className: l()(M.marginTop20, B.syncProfileThemeWithUserTheme),
            children: (0, i.jsx)(S.F, {
                setting: D.s6.ACCESSIBILITY_PROFILE_COLORS_SYNC_THEMES,
                children: (0, i.jsx)(d.j7V, {
                    note: L.intl.format(L.t.u6UjrK, {
                        onThemeClick() {
                            u.Z.open(y.oAB.APPEARANCE);
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
function Q() {
    let [e] = (0, c.Wu)([h.Z], () => [h.Z.syncForcedColors, h.Z.systemForcedColors]),
        [t, n] = s.useState(e);
    s.useEffect(() => {
        n(e);
    }, [e]);
    let r = s.useRef(null);
    s.useEffect(() => {
        null != r.current && (clearTimeout(r.current), (r.current = null)), t !== e && (r.current = setTimeout(() => (0, g.qz)(t), 150));
    }, [t, e]);
    let l = L.intl.format(L.t.GwEVEx, { learnMoreLink: j.Z.getArticleURL(y.BhN.FORCED_COLORS) });
    return (0, i.jsx)(d.xJW, {
        title: L.intl.string(L.t.TYyfOz),
        className: M.marginTop20,
        children: (0, i.jsx)(S.F, {
            setting: D.s6.ACCESSIBILITY_CONTRAST_SYNC_FORCED_COLORS,
            children: (0, i.jsx)(d.j7V, {
                value: t,
                note: l,
                onChange: n,
                children: L.intl.string(L.t.cguieX)
            })
        })
    });
}
function $() {
    let e = A.QK.useSetting(),
        t = A.Yk.useSetting(),
        {
            useReducedMotion: n,
            rawPrefersReducedMotion: r,
            systemPrefersReducedMotion: a,
            gifAutoPlayOverrideReason: o,
            animateEmojiOverrideReason: u
        } = (0, c.cj)([h.Z, O.Z], () => ({
            systemPrefersReducedMotion: h.Z.systemPrefersReducedMotion,
            rawPrefersReducedMotion: h.Z.rawPrefersReducedMotion,
            useReducedMotion: h.Z.useReducedMotion,
            gifAutoPlayOverrideReason: O.Z.getAppliedOverrideReasonKey('gifAutoPlay'),
            animateEmojiOverrideReason: O.Z.getAppliedOverrideReasonKey('animateEmoji')
        })),
        m = s.useRef(null);
    (0, R.Z)(m, P.rP.REDUCED_MOTION);
    let x = s.useCallback(
            (e, t) => {
                (0, g.Zt)(t ? 'auto' : a);
            },
            [a]
        ),
        _ = s.useCallback((e) => {
            (0, g.Zt)(e ? 'reduce' : 'no-preference');
        }, []);
    return (0, i.jsxs)(d.xJW, {
        ref: m,
        title: L.intl.string(L.t.e3TR1d),
        className: l()(M.marginTop20, B.reducedMotion),
        children: [
            (0, i.jsx)(d.R94, {
                type: d.R94.Types.DESCRIPTION,
                className: M.marginBottom8,
                children: L.intl.format(L.t['2l9U2t'], { helpdeskArticle: j.Z.getArticleURL(y.BhN.REDUCED_MOTION) })
            }),
            (0, i.jsx)(d.XZJ, {
                className: l()(M.marginTop20, M.marginBottom20),
                value: 'auto' === r,
                shape: d.XZJ.Shapes.BOX,
                type: d.XZJ.Types.INVERTED,
                onChange: x,
                children: (0, i.jsx)(d.Text, {
                    variant: 'text-sm/normal',
                    children: L.intl.string(L.t['+Dx+HB'])
                })
            }),
            (0, i.jsx)(S.F, {
                setting: D.s6.ACCESSIBILITY_REDUCED_MOTION_ENABLE,
                children: (0, i.jsx)(d.j7V, {
                    value: n,
                    onChange: _,
                    children: L.intl.string(L.t.b3XBzs)
                })
            }),
            (0, i.jsx)(S.F, {
                setting: D.s6.ACCESSIBILITY_REDUCED_MOTION_AUTO_PLAY_GIFS,
                children: (0, i.jsx)(d.j7V, {
                    className: M.marginBottom20,
                    value: e,
                    note: null != o ? (0, N.Z)(o) : void 0,
                    onChange: A.QK.updateSetting,
                    children: L.intl.string(L.t.Iayoh4)
                })
            }),
            (0, i.jsx)(S.F, {
                setting: D.s6.ACCESSIBILITY_REDUCED_MOTION_PLAY_ANIMATED_EMOJI,
                children: (0, i.jsx)(d.j7V, {
                    className: M.marginBottom20,
                    value: t,
                    note: null != u ? (0, N.Z)(u) : void 0,
                    onChange: A.Yk.updateSetting,
                    children: L.intl.string(L.t.iIaOlZ)
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
        title: L.intl.string(L.t['6NtAuL']),
        children: [
            (0, i.jsx)(d.R94, {
                type: d.R94.Types.DESCRIPTION,
                className: M.marginBottom8,
                children: null != t ? (0, N.Z)(t) : L.intl.string(L.t.GRa6U1)
            }),
            (0, i.jsx)(d.FXm, {
                options: [
                    {
                        name: L.intl.string(L.t['Xp+X2d']),
                        value: Z.yr.ALWAYS_ANIMATE
                    },
                    {
                        name: L.intl.string(L.t.IlLT7e),
                        desc: L.intl.string(L.t.bIW9Tk),
                        value: Z.yr.ANIMATE_ON_INTERACTION
                    },
                    {
                        name: L.intl.string(L.t.IGu8x8),
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
    let e = (0, c.e7)([h.Z], () => h.Z.isSubmitButtonEnabled),
        t = A.dN.useSetting(),
        n = s.useRef(null);
    return (
        (0, R.Z)(n, P.rP.LEGACY_CHAT_INPUT),
        (0, i.jsxs)(d.xJW, {
            ref: n,
            className: M.marginTop20,
            children: [
                (0, i.jsx)(d.vwX, {
                    className: M.marginBottom8,
                    children: L.intl.string(L.t.onqU6u)
                }),
                (0, i.jsx)(S.F, {
                    setting: D.s6.ACCESSIBILITY_MESSAGES_SEND_MESSAGE_BUTTON,
                    children: (0, i.jsx)(d.j7V, {
                        className: M.marginTop20,
                        value: e,
                        onChange: g.eN,
                        children: L.intl.string(L.t['3Fztn5'])
                    })
                }),
                (0, i.jsx)(S.F, {
                    setting: D.s6.ACCESSIBILITY_MESSAGES_LEGACY_CHAT_INPUT,
                    children: (0, i.jsx)(d.j7V, {
                        className: M.marginTop8,
                        value: t,
                        note: L.intl.string(L.t.Q7wgHR),
                        onChange: (e) => {
                            v.default.track(y.rMx.LEGACY_CHAT_INPUT_TOGGLED, {
                                enabled: e,
                                location: { section: y.jXE.SETTINGS_ACCESSIBILITY }
                            }),
                                A.dN.updateSetting(e);
                        },
                        children: L.intl.string(L.t.TZ2hZG)
                    })
                })
            ]
        })
    );
}
function en() {
    let e = A.OW.useSetting(),
        t = (0, c.e7)([b.Z], () => b.Z.speechRate),
        [n, r] = s.useState(!1);
    return m.Zh
        ? (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsx)(S.F, {
                      setting: D.s6.ACCESSIBILITY_TEXT_TO_SPEECH,
                      children: (0, i.jsxs)(d.xJW, {
                          className: M.marginTop20,
                          children: [
                              (0, i.jsx)(d.vwX, {
                                  className: M.marginBottom8,
                                  children: L.intl.string(L.t.VpSKeH)
                              }),
                              (0, i.jsx)(S.F, {
                                  setting: D.s6.ACCESSIBILITY_TEXT_TO_SPEECH_TTS_COMMAND,
                                  children: (0, i.jsx)(d.j7V, {
                                      className: M.marginTop20,
                                      value: e,
                                      onChange: A.OW.updateSetting,
                                      children: L.intl.string(L.t.qvTIwc)
                                  })
                              })
                          ]
                      })
                  }),
                  (0, i.jsx)(S.F, {
                      setting: D.s6.ACCESSIBILITY_TEXT_TO_SPEECH_RATE,
                      children: (0, i.jsxs)(d.xJW, {
                          className: M.marginTop20,
                          children: [
                              (0, i.jsx)(d.vwX, {
                                  id: G,
                                  className: M.marginBottom20,
                                  children: L.intl.string(L.t.lsW5Eh)
                              }),
                              (0, i.jsx)('div', {
                                  className: B.ttsPreviewWrapper,
                                  children: (0, i.jsx)(d.zxk, {
                                      color: d.Ttl.BRAND,
                                      onClick: () => {
                                          if (n) {
                                              (0, I.NB)(), r(!1);
                                              return;
                                          }
                                          (0, I.cP)(
                                              L.intl.string(L.t.PKaNJC),
                                              !0,
                                              void 0,
                                              () => r(!0),
                                              () => r(!1)
                                          ),
                                              r(!0);
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
                                              (0, i.jsx)('span', { children: L.intl.string(L.t.hymc8v) }),
                                              (0, i.jsx)(d.nn4, { children: L.intl.string(L.t.lsW5Eh) })
                                          ]
                                      })
                                  })
                              }),
                              (0, i.jsx)(d.iRW, {
                                  markers: k.q,
                                  initialValue: t,
                                  defaultValue: 1,
                                  stickToMarkers: !0,
                                  onValueChange: H,
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
                                  'aria-labelledby': G
                              })
                          ]
                      })
                  })
              ]
          })
        : null;
}
