n.d(t, {
    Z: function () {
        return Y;
    }
}),
    n(47120);
var i = n(200651),
    r = n(192379),
    s = n(120356),
    a = n.n(s),
    l = n(392711),
    o = n.n(l),
    c = n(442837),
    d = n(481060),
    u = n(230711),
    m = n(419363),
    g = n(857595),
    h = n(607070),
    p = n(627845),
    x = n(600164),
    f = n(313201),
    E = n(786761),
    _ = n(3148),
    C = n(739566),
    T = n(753206),
    S = n(440849),
    b = n(921801),
    I = n(196051),
    N = n(441729),
    v = n(626135),
    A = n(63063),
    j = n(695346),
    O = n(263937),
    R = n(996073),
    P = n(526761),
    D = n(726985),
    y = n(981631),
    B = n(611480),
    Z = n(653477),
    L = n(388032),
    M = n(871751),
    k = n(232186),
    w = n(328756);
let F = (0, f.hQ)(),
    U = (0, f.hQ)(),
    V = (0, f.hQ)(),
    G = o().debounce((e) => {
        (0, g.o2)(e);
    }, 250),
    H = o().debounce((e) => {
        (0, I.Ct)(e);
    }, 250);
function Y(e) {
    return (0, i.jsxs)(d.FormSection, {
        tag: d.FormTitleTags.H1,
        title: L.intl.string(L.t.G0neg4),
        children: [
            (0, i.jsx)('div', {
                className: k.marginBottom20,
                children: (0, i.jsx)(W, {})
            }),
            (0, i.jsxs)(b.F, {
                setting: D.s6.ACCESSIBILITY_SATURATION,
                children: [(0, i.jsx)(z, {}), (0, i.jsx)(d.FormDivider, {})]
            }),
            (0, i.jsx)(b.F, {
                setting: D.s6.ACCESSIBILITY_LINK_DECORATIONS,
                children: (0, i.jsx)(K, {})
            }),
            (0, i.jsx)(b.F, {
                setting: D.s6.ACCESSIBILITY_ROLE_STYLE,
                children: (0, i.jsx)(q, {})
            }),
            (0, i.jsx)(b.F, {
                setting: D.s6.ACCESSIBILITY_TAGS,
                children: (0, i.jsx)(Q, {})
            }),
            (0, i.jsx)(b.F, {
                setting: D.s6.ACCESSIBILITY_PROFILE_COLORS,
                children: (0, i.jsx)(X, {})
            }),
            (0, p.b)()
                ? (0, i.jsxs)(b.F, {
                      setting: D.s6.ACCESSIBILITY_CONTRAST,
                      children: [(0, i.jsx)(J, {}), ' ']
                  })
                : null,
            (0, i.jsx)(b.F, {
                setting: D.s6.ACCESSIBILITY_REDUCED_MOTION,
                children: (0, i.jsx)($, {})
            }),
            (0, i.jsx)(b.F, {
                setting: D.s6.ACCESSIBILITY_STICKERS,
                children: (0, i.jsx)(ee, {})
            }),
            (0, i.jsx)(b.F, {
                setting: D.s6.ACCESSIBILITY_MESSAGES,
                children: (0, i.jsx)(et, {})
            }),
            (0, i.jsx)(en, {}),
            (0, i.jsxs)(b.F, {
                setting: D.s6.ACCESSIBILITY_APPEARANCE_UPSELL,
                children: [
                    (0, i.jsx)(d.FormDivider, { className: k.marginTop20 }),
                    (0, i.jsx)(d.Text, {
                        className: k.marginTop20,
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
function W() {
    let e = j.jU.useSetting(),
        [t] = r.useState(() => {
            let e = (0, E.e5)({
                ...(0, _.ZP)({
                    channelId: '1337',
                    content: L.intl.formatToPlainString(L.t.bB80LC, { previewLink: 'https://discord.com/accessibility' })
                }),
                state: y.yb.SENT,
                id: ''.concat(0)
            });
            return (e.colorString = 'green'), e;
        });
    return (0, i.jsx)(d.FocusBlock, {
        children: (0, i.jsxs)(d.Card, {
            className: M.preview,
            'aria-hidden': !0,
            children: [
                (0, i.jsxs)('div', {
                    className: M.previewHeader,
                    children: [
                        (0, i.jsx)(d.Button, {
                            size: d.Button.Sizes.SMALL,
                            color: d.Button.Colors.BRAND,
                            children: L.intl.string(L.t['2RHHg4'])
                        }),
                        (0, i.jsx)('div', {
                            className: M.previewAvatars,
                            children: [y.Skl.ONLINE, y.Skl.DND, y.Skl.IDLE].map((e) =>
                                (0, i.jsx)(
                                    d.AnimatedAvatar,
                                    {
                                        'aria-label': L.intl.string(L.t.lqaIxM),
                                        src: w,
                                        size: d.AvatarSizes.SIZE_32,
                                        status: e
                                    },
                                    e
                                )
                            )
                        })
                    ]
                }),
                (0, i.jsx)('div', {
                    className: M.previewMessage,
                    children: (0, i.jsx)(T.Z, {
                        compact: e,
                        author: {
                            ...(0, C.ZH)(t),
                            colorString: '#DD80F4'
                        },
                        message: t
                    })
                })
            ]
        })
    });
}
function z() {
    let { saturation: e, desaturateUserColors: t } = (0, c.cj)([h.Z], () => ({
        saturation: h.Z.saturation,
        desaturateUserColors: h.Z.desaturateUserColors
    }));
    return (0, i.jsxs)(d.FormSection, {
        className: k.marginTop20,
        children: [
            (0, i.jsx)(d.FormTitle, {
                id: F,
                className: k.marginBottom8,
                children: L.intl.string(L.t['5PWWCQ'])
            }),
            (0, i.jsx)(d.FormText, {
                id: U,
                type: d.FormText.Types.DESCRIPTION,
                className: k.marginBottom20,
                children: L.intl.string(L.t['0PbE/P'])
            }),
            (0, i.jsx)(d.Slider, {
                'aria-labelledby': F,
                'aria-describedby': U,
                markers: y.yqN.SATURATION_INCREMENTS,
                equidistant: !0,
                stickToMarkers: !0,
                maxValue: 1,
                minValue: 0,
                initialValue: e,
                onValueChange: G,
                onMarkerRender: (e) => ((100 * e) % 2 == 0 ? ''.concat(100 * e, '%') : void 0)
            }),
            (0, i.jsx)(b.F, {
                setting: D.s6.ACCESSIBILITY_SATURATION_CUSTOM_COLOR,
                children: (0, i.jsx)(d.FormSwitch, {
                    hideBorder: !0,
                    className: a()(k.marginTop20, k.marginBottom20),
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
    return (0, i.jsx)(d.FormItem, {
        className: k.marginTop20,
        children: (0, i.jsx)(d.FormSwitch, {
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
            (0, i.jsxs)(d.FormItem, {
                title: L.intl.string(L.t.uSOPWl),
                className: k.marginTop20,
                children: [
                    (0, i.jsx)(d.FormText, {
                        type: d.FormText.Types.DESCRIPTION,
                        className: k.marginBottom8,
                        children: L.intl.string(L.t['86hjzc'])
                    }),
                    (0, i.jsx)(d.RadioGroup, {
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
            (0, i.jsx)(d.FormDivider, { className: k.marginTop20 })
        ]
    });
}
function Q() {
    let e = (0, c.e7)([h.Z], () => h.Z.hideTags);
    return (0, i.jsx)(d.FormItem, {
        title: L.intl.string(L.t.UQt6dX),
        className: k.marginTop20,
        children: (0, i.jsx)(b.F, {
            setting: D.s6.ACCESSIBILITY_TAGS_NAMES,
            children: (0, i.jsx)(d.FormSwitch, {
                value: !e,
                onChange: () => (0, g.Nv)(!e),
                children: L.intl.string(L.t.UPwh1N)
            })
        })
    });
}
function X() {
    let e = (0, c.e7)([h.Z], () => h.Z.syncProfileThemeWithUserTheme),
        t = r.useRef(null);
    return (
        (0, R.Z)(t, P.rP.SYNC_PROFILE_THEME_WITH_USER_THEME),
        (0, i.jsx)(d.FormItem, {
            ref: t,
            title: L.intl.string(L.t.BT8Bmp),
            className: a()(k.marginTop20, M.syncProfileThemeWithUserTheme),
            children: (0, i.jsx)(b.F, {
                setting: D.s6.ACCESSIBILITY_PROFILE_COLORS_SYNC_THEMES,
                children: (0, i.jsx)(d.FormSwitch, {
                    note: L.intl.format(L.t.u6UjrK, {
                        onThemeClick() {
                            u.Z.open(y.oAB.APPEARANCE);
                        }
                    }),
                    className: k.marginTop20,
                    value: e,
                    onChange: g.Uv,
                    children: L.intl.string(L.t['sSY+mJ'])
                })
            })
        })
    );
}
function J() {
    let [e] = (0, c.Wu)([h.Z], () => [h.Z.syncForcedColors, h.Z.systemForcedColors]),
        [t, n] = r.useState(e);
    r.useEffect(() => {
        n(e);
    }, [e]);
    let s = r.useRef(null);
    r.useEffect(() => {
        null != s.current && (clearTimeout(s.current), (s.current = null)), t !== e && (s.current = setTimeout(() => (0, g.qz)(t), 150));
    }, [t, e]);
    let a = L.intl.format(L.t.GwEVEx, { learnMoreLink: A.Z.getArticleURL(y.BhN.FORCED_COLORS) });
    return (0, i.jsx)(d.FormItem, {
        title: L.intl.string(L.t.TYyfOz),
        className: k.marginTop20,
        children: (0, i.jsx)(b.F, {
            setting: D.s6.ACCESSIBILITY_CONTRAST_SYNC_FORCED_COLORS,
            children: (0, i.jsx)(d.FormSwitch, {
                value: t,
                note: a,
                onChange: n,
                children: L.intl.string(L.t.cguieX)
            })
        })
    });
}
function $() {
    let e = j.QK.useSetting(),
        t = j.Yk.useSetting(),
        {
            useReducedMotion: n,
            rawPrefersReducedMotion: s,
            systemPrefersReducedMotion: l,
            gifAutoPlayOverrideReason: o,
            animateEmojiOverrideReason: u
        } = (0, c.cj)([h.Z, O.Z], () => ({
            systemPrefersReducedMotion: h.Z.systemPrefersReducedMotion,
            rawPrefersReducedMotion: h.Z.rawPrefersReducedMotion,
            useReducedMotion: h.Z.useReducedMotion,
            gifAutoPlayOverrideReason: O.Z.getAppliedOverrideReasonKey('gifAutoPlay'),
            animateEmojiOverrideReason: O.Z.getAppliedOverrideReasonKey('animateEmoji')
        })),
        m = r.useRef(null);
    (0, R.Z)(m, P.rP.REDUCED_MOTION);
    let p = r.useCallback(
            (e, t) => {
                (0, g.Zt)(t ? 'auto' : l);
            },
            [l]
        ),
        x = r.useCallback((e) => {
            (0, g.Zt)(e ? 'reduce' : 'no-preference');
        }, []);
    return (0, i.jsxs)(d.FormItem, {
        ref: m,
        title: L.intl.string(L.t.e3TR1d),
        className: a()(k.marginTop20, M.reducedMotion),
        children: [
            (0, i.jsx)(d.FormText, {
                type: d.FormText.Types.DESCRIPTION,
                className: k.marginBottom8,
                children: L.intl.format(L.t['2l9U2t'], { helpdeskArticle: A.Z.getArticleURL(y.BhN.REDUCED_MOTION) })
            }),
            (0, i.jsx)(d.Checkbox, {
                className: a()(k.marginTop20, k.marginBottom20),
                value: 'auto' === s,
                shape: d.Checkbox.Shapes.BOX,
                type: d.Checkbox.Types.INVERTED,
                onChange: p,
                children: (0, i.jsx)(d.Text, {
                    variant: 'text-sm/normal',
                    children: L.intl.string(L.t['+Dx+HB'])
                })
            }),
            (0, i.jsx)(b.F, {
                setting: D.s6.ACCESSIBILITY_REDUCED_MOTION_ENABLE,
                children: (0, i.jsx)(d.FormSwitch, {
                    value: n,
                    onChange: x,
                    children: L.intl.string(L.t.b3XBzs)
                })
            }),
            (0, i.jsx)(b.F, {
                setting: D.s6.ACCESSIBILITY_REDUCED_MOTION_AUTO_PLAY_GIFS,
                children: (0, i.jsx)(d.FormSwitch, {
                    className: k.marginBottom20,
                    value: e,
                    note: null != o ? (0, S.Z)(o) : void 0,
                    onChange: j.QK.updateSetting,
                    children: L.intl.string(L.t.Iayoh4)
                })
            }),
            (0, i.jsx)(b.F, {
                setting: D.s6.ACCESSIBILITY_REDUCED_MOTION_PLAY_ANIMATED_EMOJI,
                children: (0, i.jsx)(d.FormSwitch, {
                    className: k.marginBottom20,
                    value: t,
                    note: null != u ? (0, S.Z)(u) : void 0,
                    onChange: j.Yk.updateSetting,
                    children: L.intl.string(L.t.iIaOlZ)
                })
            })
        ]
    });
}
function ee() {
    let e = j.Wp.useSetting(),
        t = (0, c.e7)([O.Z], () => O.Z.getAppliedOverrideReasonKey('animateStickers')),
        n = r.useCallback((e) => {
            j.Wp.updateSetting(e.value);
        }, []);
    return (0, i.jsxs)(d.FormItem, {
        className: k.marginTop20,
        title: L.intl.string(L.t['6NtAuL']),
        children: [
            (0, i.jsx)(d.FormText, {
                type: d.FormText.Types.DESCRIPTION,
                className: k.marginBottom8,
                children: null != t ? (0, S.Z)(t) : L.intl.string(L.t.GRa6U1)
            }),
            (0, i.jsx)(d.RadioGroup, {
                options: [
                    {
                        name: L.intl.string(L.t['Xp+X2d']),
                        value: B.yr.ALWAYS_ANIMATE
                    },
                    {
                        name: L.intl.string(L.t.IlLT7e),
                        desc: L.intl.string(L.t.bIW9Tk),
                        value: B.yr.ANIMATE_ON_INTERACTION
                    },
                    {
                        name: L.intl.string(L.t.IGu8x8),
                        value: B.yr.NEVER_ANIMATE
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
        t = j.dN.useSetting(),
        n = r.useRef(null);
    return (
        (0, R.Z)(n, P.rP.LEGACY_CHAT_INPUT),
        (0, i.jsxs)(d.FormItem, {
            ref: n,
            className: k.marginTop20,
            children: [
                (0, i.jsx)(d.FormTitle, {
                    className: k.marginBottom8,
                    children: L.intl.string(L.t.onqU6u)
                }),
                (0, i.jsx)(b.F, {
                    setting: D.s6.ACCESSIBILITY_MESSAGES_SEND_MESSAGE_BUTTON,
                    children: (0, i.jsx)(d.FormSwitch, {
                        className: k.marginTop20,
                        value: e,
                        onChange: g.eN,
                        children: L.intl.string(L.t['3Fztn5'])
                    })
                }),
                (0, i.jsx)(b.F, {
                    setting: D.s6.ACCESSIBILITY_MESSAGES_LEGACY_CHAT_INPUT,
                    children: (0, i.jsx)(d.FormSwitch, {
                        className: k.marginTop8,
                        value: t,
                        note: L.intl.string(L.t.Q7wgHR),
                        onChange: (e) => {
                            v.default.track(y.rMx.LEGACY_CHAT_INPUT_TOGGLED, {
                                enabled: e,
                                location: { section: y.jXE.SETTINGS_ACCESSIBILITY }
                            }),
                                j.dN.updateSetting(e);
                        },
                        children: L.intl.string(L.t.TZ2hZG)
                    })
                })
            ]
        })
    );
}
function en() {
    let e = j.OW.useSetting(),
        t = (0, c.e7)([N.Z], () => N.Z.speechRate),
        [n, s] = r.useState(!1);
    return m.Zh
        ? (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsx)(b.F, {
                      setting: D.s6.ACCESSIBILITY_TEXT_TO_SPEECH,
                      children: (0, i.jsxs)(d.FormItem, {
                          className: k.marginTop20,
                          children: [
                              (0, i.jsx)(d.FormTitle, {
                                  className: k.marginBottom8,
                                  children: L.intl.string(L.t.VpSKeH)
                              }),
                              (0, i.jsx)(b.F, {
                                  setting: D.s6.ACCESSIBILITY_TEXT_TO_SPEECH_TTS_COMMAND,
                                  children: (0, i.jsx)(d.FormSwitch, {
                                      className: k.marginTop20,
                                      value: e,
                                      onChange: j.OW.updateSetting,
                                      children: L.intl.string(L.t.qvTIwc)
                                  })
                              })
                          ]
                      })
                  }),
                  (0, i.jsx)(b.F, {
                      setting: D.s6.ACCESSIBILITY_TEXT_TO_SPEECH_RATE,
                      children: (0, i.jsxs)(d.FormItem, {
                          className: k.marginTop20,
                          children: [
                              (0, i.jsx)(d.FormTitle, {
                                  id: V,
                                  className: k.marginBottom20,
                                  children: L.intl.string(L.t.lsW5Eh)
                              }),
                              (0, i.jsx)('div', {
                                  className: M.ttsPreviewWrapper,
                                  children: (0, i.jsx)(d.Button, {
                                      color: d.ButtonColors.BRAND,
                                      onClick: () => {
                                          if (n) {
                                              (0, I.NB)(), s(!1);
                                              return;
                                          }
                                          (0, I.cP)(
                                              L.intl.string(L.t.PKaNJC),
                                              !0,
                                              void 0,
                                              () => s(!0),
                                              () => s(!1)
                                          ),
                                              s(!0);
                                      },
                                      children: (0, i.jsxs)(x.Z, {
                                          align: x.Z.Align.CENTER,
                                          children: [
                                              n
                                                  ? (0, i.jsx)(d.PauseIcon, {
                                                        size: 'md',
                                                        color: 'currentColor'
                                                    })
                                                  : (0, i.jsx)(d.PlayIcon, {
                                                        size: 'md',
                                                        color: 'currentColor'
                                                    }),
                                              (0, i.jsx)('span', { children: L.intl.string(L.t.hymc8v) }),
                                              (0, i.jsx)(d.HiddenVisually, { children: L.intl.string(L.t.lsW5Eh) })
                                          ]
                                      })
                                  })
                              }),
                              (0, i.jsx)(d.Slider, {
                                  markers: Z.q,
                                  initialValue: t,
                                  defaultValue: 1,
                                  stickToMarkers: !0,
                                  onValueChange: H,
                                  onValueRender: (e) => 'x'.concat(e.toFixed(2)),
                                  onMarkerRender: (e) =>
                                      0 === e
                                          ? (0, i.jsx)('span', {
                                                className: M.ttsSliderMarker,
                                                children: L.intl.string(L.t['493lwc'])
                                            })
                                          : 10 === e
                                            ? (0, i.jsx)('span', {
                                                  className: M.ttsSliderMarker,
                                                  children: L.intl.string(L.t.ZSZEdX)
                                              })
                                            : 1 === e
                                              ? (0, i.jsx)('span', { children: 'x1.0' })
                                              : e % 1 == 0
                                                ? ''
                                                : void 0,
                                  'aria-labelledby': V
                              })
                          ]
                      })
                  })
              ]
          })
        : null;
}
