(n.d(t, { Z: () => en }), n(388685));
var i = n(255367),
    r = n(73800),
    s = n(120356),
    l = n.n(s),
    a = n(442837),
    o = n(704215),
    c = n(524437),
    d = n(780384),
    u = n(481060),
    m = n(153867),
    p = n(230711),
    g = n(493773),
    h = n(714338),
    f = n(857595),
    b = n(607070),
    x = n(627845),
    _ = n(514361),
    E = n(803038),
    j = n(600164),
    O = n(313201),
    C = n(266454),
    S = n(786761),
    v = n(3148),
    T = n(739566),
    N = n(753206),
    I = n(921801),
    y = n(594174),
    A = n(358085),
    P = n(210887),
    R = n(740492),
    D = n(695346),
    Z = n(329013),
    w = n(333859),
    k = n(726985),
    L = n(981631),
    B = n(921944),
    M = n(959517),
    U = n(388032),
    V = n(716827),
    G = n(20493);
function F(e, t, n) {
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
                F(e, t, n[t]);
            }));
    }
    return e;
}
function z(e, t) {
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
let Y = {
        COZY: 'cozy',
        COMPACT: 'compact'
    },
    W = (0, O.hQ)(),
    K = (0, O.hQ)(),
    q = (0, O.hQ)(),
    X = '1337',
    Q = (e) => {
        let t = 0;
        return [
            (0, S.e5)(
                z(
                    H(
                        {},
                        (0, v.ZP)({
                            channelId: X,
                            content: U.intl.string(U.t.oZxkEh)
                        })
                    ),
                    {
                        state: L.yb.SENT,
                        id: ''.concat(t++)
                    }
                )
            ),
            (0, S.e5)(
                z(
                    H(
                        {},
                        (0, v.ZP)({
                            channelId: X,
                            content: (0, d.wj)(e) ? U.intl.string(U.t['WGb/v7']) : U.intl.string(U.t['62m4m5'])
                        })
                    ),
                    {
                        state: L.yb.SENT,
                        id: ''.concat(t++)
                    }
                )
            ),
            (0, S.e5)(
                z(
                    H(
                        {},
                        (0, v.ZP)({
                            channelId: X,
                            content: U.intl.string(U.t.a0Byo6)
                        })
                    ),
                    {
                        state: L.yb.SENT,
                        id: ''.concat(t++)
                    }
                )
            ),
            (0, S.e5)(
                z(
                    H(
                        {},
                        (0, v.ZP)({
                            channelId: X,
                            content: U.intl.string(U.t.bmwEWF)
                        })
                    ),
                    {
                        state: L.yb.SENT,
                        id: ''.concat(t++)
                    }
                )
            ),
            (0, S.e5)(
                z(
                    H(
                        {},
                        (0, v.ZP)({
                            channelId: X,
                            content: U.intl.string(U.t.hK9QW1)
                        })
                    ),
                    {
                        state: L.yb.SENT,
                        id: ''.concat(t)
                    }
                )
            )
        ];
    },
    J = () =>
        (0, i.jsxs)('div', {
            className: V.themeTitle,
            children: [
                (0, i.jsxs)('div', {
                    className: V.themeTitleContainer,
                    children: [
                        (0, i.jsx)('div', {
                            className: V.title,
                            children: U.intl.string(U.t['0EzVsr'])
                        }),
                        (0, i.jsx)(u.R94, {
                            type: u.R94.Types.DESCRIPTION,
                            className: V.subtext,
                            children: U.intl.string(U.t.PV3dGR)
                        })
                    ]
                }),
                (0, i.jsx)(Z.g, {})
            ]
        });
class $ extends r.Component {
    renderZoomSlider() {
        return A.isPlatformEmbedded
            ? (0, i.jsxs)(u.xJW, {
                  className: G.marginTop20,
                  children: [
                      (0, i.jsx)(u.vwX, {
                          id: W,
                          tag: u.RB0.H5,
                          className: l()(V.title, G.marginBottom8),
                          children: U.intl.string(U.t.i19n5O)
                      }),
                      (0, i.jsx)(u.R94, {
                          type: u.geA.DESCRIPTION,
                          className: V.subtext,
                          children: U.intl.string(U.t.ip0uSU)
                      }),
                      (0, i.jsx)(u.iRW, {
                          className: l()(G.marginTop20, G.marginBottom4),
                          initialValue: this.props.zoom,
                          defaultValue: L.yqN.ZOOM_DEFAULT,
                          markers: L.yqN.ZOOM_SCALES,
                          stickToMarkers: !0,
                          onValueChange: this.handleZoomChange,
                          onValueRender: this.handleSliderRender,
                          'aria-labelledby': W
                      }),
                      (0, i.jsx)(u.R94, {
                          type: u.R94.Types.DESCRIPTION,
                          children: U.intl.format(U.t.OMkSUl, { modKey: h.Z.modKey })
                      })
                  ]
              })
            : null;
    }
    renderFontScaleSlider() {
        return (0, i.jsxs)(u.xJW, {
            className: G.marginTop20,
            children: [
                (0, i.jsx)(u.vwX, {
                    id: K,
                    tag: u.RB0.H5,
                    className: l()(V.title, G.marginBottom8),
                    children: U.intl.string(U.t.qPOqoK)
                }),
                (0, i.jsx)(u.R94, {
                    type: u.geA.DESCRIPTION,
                    className: V.subtext,
                    children: 'Increase or decrease the size of the chat font'
                }),
                (0, i.jsx)(j.Z, {
                    align: j.Z.Align.CENTER,
                    children: (0, i.jsx)(u.iRW, {
                        className: l()({
                            [G.marginTop20]: !1,
                            [G.marginBottom4]: !1
                        }),
                        initialValue: this.props.fontSize,
                        defaultValue: L.yqN.FONT_SIZE_DEFAULT,
                        markers: L.yqN.FONT_SIZES,
                        stickToMarkers: !0,
                        onValueChange: this.handleFontSizeChange,
                        onValueRender: this.handleSliderRenderPX,
                        onMarkerRender: this.handleSliderRenderPX,
                        getAriaValueText: this.handleSliderValueText,
                        'aria-labelledby': K
                    })
                })
            ]
        });
    }
    renderMessageGroupSpacingSlider() {
        let { messageDisplayCompact: e, messageGroupSpacing: t } = this.props;
        return (0, i.jsxs)(u.xJW, {
            className: V.messageGroupingSpacing,
            children: [
                (0, i.jsx)(u.vwX, {
                    id: q,
                    tag: u.RB0.H5,
                    className: l()(V.title, G.marginBottom8),
                    children: U.intl.string(U.t.Q6lKkp)
                }),
                (0, i.jsx)(u.R94, {
                    type: u.geA.DESCRIPTION,
                    className: V.subtext,
                    children: U.intl.string(U.t.p7eUra)
                }),
                (0, i.jsx)(u.iRW, {
                    initialValue: t,
                    defaultValue: e ? M.c8 : M.pq,
                    markers: M.fP,
                    stickToMarkers: !0,
                    onValueChange: this.handleMessageSpacingChange,
                    onValueRender: this.handleSliderRenderPX,
                    onMarkerRender: this.handleSliderRenderPX,
                    getAriaValueText: this.handleSliderValueText,
                    'aria-labelledby': q
                })
            ]
        });
    }
    renderPreview() {
        let { messageDisplayCompact: e, theme: t, messageGroupSpacing: n, hideSimpleEmbedContent: r } = this.props,
            s = (0, d.wj)(t) ? this.darkMessages : this.lightMessages;
        return (0, i.jsx)(u.Rny, {
            children: (0, i.jsx)(u.Zbd, {
                className: l()(V.preview, G.marginBottom40, e ? V.compactPreview : void 0, 'group-spacing-'.concat(null != n ? n : e ? M.c8 : M.pq)),
                outline: !0,
                'aria-hidden': !0,
                children: s.map((t, n) =>
                    (0, i.jsx)(
                        N.Z,
                        {
                            author: (0, T.ZH)(t),
                            message: t,
                            compact: e,
                            isGroupStart: n % 2 == 0,
                            className: 0 === n ? V.firstMessage : void 0,
                            hideSimpleEmbedContent: r
                        },
                        t.id
                    )
                )
            })
        });
    }
    renderTheme() {
        let { useForcedColors: e } = this.props;
        return e
            ? (0, i.jsx)(u.xJW, {
                  className: l()(G.marginTop8, G.marginBottom40),
                  title: (0, i.jsx)('div', {
                      className: V.themeTitle,
                      children: (0, i.jsx)('div', {
                          className: V.title,
                          children: U.intl.string(U.t.Ksh3io)
                      })
                  }),
                  children: (0, i.jsx)(u.R94, {
                      type: u.R94.Types.DEFAULT,
                      className: V.forcedColorsWarning,
                      children: (0, x.b)()
                          ? U.intl.format(U.t.Jae48P, {
                                onClick: () => {
                                    p.Z.open(L.oAB.ACCESSIBILITY);
                                }
                            })
                          : U.intl.string(U.t.AUMSZG)
                  })
              })
            : (0, i.jsxs)(u.Kqy, {
                  gap: 24,
                  children: [
                      (0, i.jsx)(u.Text, {
                          variant: 'text-lg/medium',
                          className: V.title,
                          children: U.intl.string(U.t.Ksh3io)
                      }),
                      (0, i.jsx)(u.xJW, {
                          title: (0, i.jsx)(J, {}),
                          children: (0, i.jsx)(Z.i, {})
                      })
                  ]
              });
    }
    renderDisplayMode() {
        return (0, i.jsxs)(u.xJW, {
            title: U.intl.string(U.t.ZEoGMT),
            className: G.marginTop8,
            children: [
                (0, i.jsx)(u.FXm, {
                    options: [
                        {
                            name: U.intl.string(U.t.KZIadn),
                            value: Y.COZY
                        },
                        {
                            name: U.intl.string(U.t['6+nTjY']),
                            value: Y.COMPACT
                        }
                    ],
                    onChange: this.handleMessageDisplayModeChange,
                    value: this.props.messageDisplayCompact ? Y.COMPACT : Y.COZY
                }),
                (0, i.jsx)(u.j7V, {
                    value: this.props.messageDisplayCompact && this.props.displayCompactAvatars,
                    disabled: !this.props.messageDisplayCompact,
                    onChange: this.handleDisplayCompactAvatarsChanged,
                    className: G.marginTop20,
                    children: U.intl.string(U.t['7FVjFB'])
                })
            ]
        });
    }
    renderListSpacing() {
        let { density: e } = this.props;
        return (0, i.jsxs)(I.F, {
            setting: k.s6.APPEARANCE_LIST_SPACING,
            children: [
                (0, i.jsxs)(u.xJW, {
                    title: (0, i.jsx)('div', {
                        style: {
                            display: 'flex',
                            gap: 8,
                            alignItems: 'center'
                        },
                        children: 'UI Density'
                    }),
                    className: G.marginTop8,
                    children: [
                        (0, i.jsx)(u.R94, {
                            type: u.geA.DESCRIPTION,
                            className: G.marginBottom8,
                            children: 'Adjust the spacing and layout to balance readability and content based on your preferences.'
                        }),
                        (0, i.jsx)(u.FXm, {
                            options: [
                                {
                                    name: U.intl.string(U.t.T7G4Y2),
                                    value: c.Pi.COZY,
                                    desc: 'Comfortable spacing for easier readability'
                                },
                                {
                                    name: U.intl.string(U.t['7iegX1']),
                                    value: c.Pi.COMPACT,
                                    desc: 'Tighter layout to fit more content'
                                }
                            ],
                            onChange: this.handleUIDensityChange,
                            value: e
                        })
                    ]
                }),
                (0, i.jsx)(u.$i$, { className: G.marginTop8 })
            ]
        });
    }
    handleDarkSidebarChecked() {
        (0, f.lq)();
    }
    renderScalingAndSpacing() {
        return (0, i.jsxs)(i.Fragment, {
            children: [this.renderFontScaleSlider(), this.renderMessageGroupSpacingSlider(), this.renderZoomSlider(), (0, i.jsx)(u.$i$, { className: G.marginTop20 })]
        });
    }
    renderTimestampHourCycle() {
        let { timestampHourCycle: e } = this.props;
        return (0, i.jsx)(u.xJW, {
            title: (0, i.jsx)(u.Text, {
                variant: 'text-lg/medium',
                className: l()(V.timeTitle, V.title),
                children: U.intl.string(U.t.dyamEB)
            }),
            children: (0, i.jsx)(u.FXm, {
                options: [
                    {
                        name: U.intl.string(U.t.FMWYvb),
                        value: c.hg.AUTO
                    },
                    {
                        name: U.intl.string(U.t.p8NOws),
                        value: c.hg.H12
                    },
                    {
                        name: U.intl.string(U.t['+o/sOj']),
                        value: c.hg.H23
                    }
                ],
                onChange: (e) => D.hg.updateSetting(e.value),
                value: e
            })
        });
    }
    render() {
        return (0, i.jsxs)(u.hjN, {
            tag: u.RB0.H1,
            title: U.intl.string(U.t['iHH+k5']),
            children: [
                (0, i.jsxs)(I.F, {
                    setting: k.s6.APPEARANCE_THEME,
                    children: [this.renderPreview(), this.renderTheme()]
                }),
                (0, i.jsx)(I.F, {
                    setting: k.s6.APPEARANCE_MESSAGE_DISPLAY_COMPACT,
                    children: this.renderDisplayMode()
                }),
                this.renderListSpacing(),
                (0, i.jsx)(I.F, {
                    setting: k.s6.APPEARANCE_SCALING_SPACING,
                    children: this.renderScalingAndSpacing()
                }),
                (0, i.jsxs)(I.F, {
                    setting: k.s6.APPEARANCE_TIMESTAMP_HOUR_CYCLE,
                    children: [this.renderTimestampHourCycle(), (0, i.jsx)(u.$i$, { className: G.marginTop8 })]
                }),
                (0, i.jsx)(u.Text, {
                    variant: 'text-md/normal',
                    className: G.marginTop20,
                    children: U.intl.format(U.t['5LEQdX'], {
                        onAccessibilityClick() {
                            p.Z.open(L.oAB.ACCESSIBILITY);
                        }
                    })
                })
            ]
        });
    }
    handleSliderRender(e) {
        return ''.concat(e.toFixed(0), '%');
    }
    handleSliderRenderPX(e) {
        return ''.concat(e.toFixed(0), 'px');
    }
    handleSliderValueText(e) {
        return U.intl.formatToPlainString(U.t['0hpvOT'], { value: e });
    }
    handleFontSizeChange(e) {
        (0, f.oL)(e);
    }
    handleMessageSpacingChange(e) {
        switch (e) {
            case 0:
            case 4:
            case 8:
            case 16:
            case 24:
                (0, f.ZZ)(e);
        }
    }
    handleZoomChange(e) {
        (0, f.cq)(e);
    }
    constructor(...e) {
        (super(...e),
            F(this, 'darkMessages', Q(L.BRd.DARK)),
            F(this, 'lightMessages', Q(L.BRd.LIGHT)),
            F(this, 'handleDisplayCompactAvatarsChanged', (e) => {
                m.ZP.updatedUnsyncedSettings({ displayCompactAvatars: e });
            }),
            F(this, 'handleDesktopRefreshEnabledChanged', (e) => {
                m.ZP.updatedUnsyncedSettings({ disableVisualRefresh: !e });
            }),
            F(this, 'handleMessageDisplayModeChange', (e) => {
                let { value: t } = e;
                (D.jU.updateSetting(t === Y.COMPACT), (0, f.ZZ)());
            }),
            F(this, 'handleUIDensityChange', (e) => {
                let { value: t } = e;
                t !== c.Pi.UNSET_UI_DENSITY && D.YC.updateSetting(t);
            }));
    }
}
class ee extends $ {
    render() {
        let { density: e } = this.props,
            t = (0, i.jsxs)(I.F, {
                setting: k.s6.APPEARANCE_THEME,
                children: [this.renderPreview(), this.renderTheme()]
            }),
            n = (0, i.jsx)(I.F, {
                setting: k.s6.APPEARANCE_ICON,
                children: (0, i.jsx)(w.c, {})
            }),
            r = [
                {
                    name: U.intl.string(U.t['7iegX1']),
                    value: c.Pi.COMPACT
                },
                {
                    name: U.intl.string(U.t.bBvAEB),
                    value: c.Pi.DEFAULT
                },
                {
                    name: U.intl.string(U.t['4cuYHx']),
                    value: c.Pi.COZY
                }
            ],
            s = (0, i.jsxs)(I.F, {
                setting: k.s6.APPEARANCE_LIST_SPACING,
                children: [
                    (0, i.jsxs)(u.xJW, {
                        title: (0, i.jsx)(u.Text, {
                            variant: 'text-lg/medium',
                            className: V.title,
                            children: U.intl.string(U.t['C/5V0N'])
                        }),
                        children: [
                            (0, i.jsx)(u.R94, {
                                type: u.geA.DESCRIPTION,
                                className: V.subtext,
                                children: U.intl.string(U.t.QLZhYm)
                            }),
                            (0, i.jsx)(u.FXm, {
                                options: r,
                                onChange: this.handleUIDensityChange,
                                value: e
                            })
                        ]
                    }),
                    (0, i.jsx)(u.$i$, { className: V.divider })
                ]
            }),
            l = (0, i.jsxs)(I.F, {
                setting: k.s6.APPEARANCE_MESSAGE_DISPLAY_COMPACT,
                children: [
                    (0, i.jsxs)(u.Kqy, {
                        gap: 8,
                        padding: { bottom: 8 },
                        children: [
                            (0, i.jsx)(u.Text, {
                                variant: 'text-lg/medium',
                                className: V.title,
                                children: U.intl.string(U.t['2ed/sL'])
                            }),
                            (0, i.jsx)(u.Text, {
                                variant: 'text-sm/normal',
                                className: V.subtext,
                                children: U.intl.string(U.t.u9N6Qk)
                            })
                        ]
                    }),
                    (0, i.jsxs)(u.xJW, {
                        titleClassName: V.title,
                        title: U.intl.string(U.t.nKRoPj),
                        children: [
                            (0, i.jsx)(u.R94, {
                                type: u.geA.DESCRIPTION,
                                className: V.subtext,
                                children: U.intl.string(U.t.QntEEB)
                            }),
                            (0, i.jsx)(u.FXm, {
                                options: [
                                    {
                                        name: U.intl.string(U.t.Jqj4cX),
                                        value: Y.COZY
                                    },
                                    {
                                        name: U.intl.string(U.t['1JNcPT']),
                                        value: Y.COMPACT
                                    }
                                ],
                                onChange: this.handleMessageDisplayModeChange,
                                value: this.props.messageDisplayCompact ? Y.COMPACT : Y.COZY
                            }),
                            this.props.messageDisplayCompact &&
                                (0, i.jsx)(u.j7V, {
                                    className: V.compactModeToggle,
                                    hideBorder: !0,
                                    value: !this.props.displayCompactAvatars,
                                    onChange: (e) => this.handleDisplayCompactAvatarsChanged(!e),
                                    children: (0, i.jsx)(u.Text, {
                                        variant: 'text-md/medium',
                                        children: U.intl.string(U.t['//vhWl'])
                                    })
                                })
                        ]
                    }),
                    this.renderMessageGroupSpacingSlider(),
                    (0, i.jsx)(u.$i$, { className: V.divider })
                ]
            }),
            a = (0, i.jsxs)(I.F, {
                setting: k.s6.APPEARANCE_SCALING_SPACING,
                children: [
                    (0, i.jsx)(u.Text, {
                        variant: 'text-lg/medium',
                        className: V.title,
                        children: U.intl.string(U.t['0Yh+ZW'])
                    }),
                    this.renderFontScaleSlider(),
                    this.renderZoomSlider(),
                    (0, i.jsx)(u.$i$, { className: V.divider })
                ]
            }),
            o = (0, i.jsx)(I.F, {
                setting: k.s6.APPEARANCE_TIMESTAMP_HOUR_CYCLE,
                children: this.renderTimestampHourCycle()
            }),
            d = (0, i.jsx)(u.Text, {
                variant: 'text-md/normal',
                className: V.a11yCallout,
                children: U.intl.format(U.t['5LEQdX'], {
                    onAccessibilityClick() {
                        p.Z.open(L.oAB.ACCESSIBILITY);
                    }
                })
            });
        return (0, i.jsxs)(u.hjN, {
            tag: u.RB0.H1,
            title: U.intl.string(U.t['iHH+k5']),
            children: [t, n, s, l, a, o, d]
        });
    }
}
let et = (e) => {
    (0, C.zu)(e) ||
        (0, C.Q3)(e, {
            dismissAction: B.L.AUTO,
            forceTrack: !0
        });
};
function en() {
    let e = D.jU.useSetting(),
        t = D.RS.useSetting(),
        n = D.NA.useSetting(),
        s = D.L1.useSetting(),
        l = D.hg.useSetting(),
        c = D.YC.useSetting(),
        d = E.M.useExperiment({ location: 'UserSettingsAppearance' }).enabled;
    ((0, g.ZP)(() => {
        (et(o.z.CLIENT_THEMES_SETTINGS_BADGE), et(o.z.DEKSTOP_CUSTOM_APP_ICON_BADGE), et(o.z.DEKSTOP_CUSTOM_APP_ICON_COACHMARK));
    }),
        r.useEffect(() => {
            d && et(o.z.CLIENT_THEMES_APPEARANCE_SETTINGS_NEW_BADGE);
        }, [d]));
    let u = (0, a.cj)([P.Z, R.ZP, b.Z, y.default, _.Z], () => {
        var e, t;
        return {
            theme: P.Z.theme,
            useForcedColors: b.Z.useForcedColors,
            useSystemTheme: R.ZP.useSystemTheme,
            darkSidebar: P.Z.darkSidebar,
            fontSize: b.Z.fontSize,
            zoom: b.Z.zoom,
            messageGroupSpacing: b.Z.messageGroupSpacing,
            displayCompactAvatars: R.ZP.displayCompactAvatars,
            isStaff: null != (t = null == (e = y.default.getCurrentUser()) ? void 0 : e.isStaff) && t,
            gradientPreset: _.Z.gradientPreset
        };
    });
    return (0, i.jsx)(
        ee,
        H(
            {
                messageDisplayCompact: e,
                hideSimpleEmbedContent: t && n,
                clientTheme: s,
                timestampHourCycle: l,
                density: c
            },
            u
        )
    );
}
