(n.d(t, { Z: () => ei }), n(388685));
var i = n(255367),
    r = n(73800),
    s = n(120356),
    a = n.n(s),
    l = n(442837),
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
    j = n(803038),
    E = n(600164),
    O = n(313201),
    C = n(266454),
    v = n(786761),
    S = n(3148),
    T = n(739566),
    N = n(753206),
    I = n(921801),
    y = n(984802),
    A = n(594174),
    P = n(358085),
    R = n(210887),
    D = n(740492),
    Z = n(695346),
    w = n(329013),
    k = n(333859),
    L = n(726985),
    B = n(981631),
    M = n(921944),
    U = n(959517),
    V = n(388032),
    G = n(716827),
    F = n(20493);
function H(e, t, n) {
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
function z(e) {
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
                H(e, t, n[t]);
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
let Y = {
        COZY: 'cozy',
        COMPACT: 'compact'
    },
    K = (0, O.hQ)(),
    q = (0, O.hQ)(),
    X = (0, O.hQ)(),
    Q = '1337',
    J = (e) => {
        let t = 0;
        return [
            (0, v.e5)(
                W(
                    z(
                        {},
                        (0, S.ZP)({
                            channelId: Q,
                            content: V.intl.string(V.t.oZxkEh)
                        })
                    ),
                    {
                        state: B.yb.SENT,
                        id: ''.concat(t++)
                    }
                )
            ),
            (0, v.e5)(
                W(
                    z(
                        {},
                        (0, S.ZP)({
                            channelId: Q,
                            content: (0, d.wj)(e) ? V.intl.string(V.t['WGb/v7']) : V.intl.string(V.t['62m4m5'])
                        })
                    ),
                    {
                        state: B.yb.SENT,
                        id: ''.concat(t++)
                    }
                )
            ),
            (0, v.e5)(
                W(
                    z(
                        {},
                        (0, S.ZP)({
                            channelId: Q,
                            content: V.intl.string(V.t.a0Byo6)
                        })
                    ),
                    {
                        state: B.yb.SENT,
                        id: ''.concat(t++)
                    }
                )
            ),
            (0, v.e5)(
                W(
                    z(
                        {},
                        (0, S.ZP)({
                            channelId: Q,
                            content: V.intl.string(V.t.bmwEWF)
                        })
                    ),
                    {
                        state: B.yb.SENT,
                        id: ''.concat(t++)
                    }
                )
            ),
            (0, v.e5)(
                W(
                    z(
                        {},
                        (0, S.ZP)({
                            channelId: Q,
                            content: V.intl.string(V.t.hK9QW1)
                        })
                    ),
                    {
                        state: B.yb.SENT,
                        id: ''.concat(t)
                    }
                )
            )
        ];
    },
    $ = () =>
        (0, i.jsxs)('div', {
            className: G.themeTitle,
            children: [
                (0, i.jsxs)('div', {
                    className: G.themeTitleContainer,
                    children: [
                        (0, i.jsx)('div', {
                            className: G.title,
                            children: V.intl.string(V.t['0EzVsr'])
                        }),
                        (0, i.jsx)(u.R94, {
                            type: u.R94.Types.DESCRIPTION,
                            className: G.subtext,
                            children: V.intl.string(V.t.PV3dGR)
                        })
                    ]
                }),
                (0, i.jsx)(w.g, {})
            ]
        });
class ee extends r.Component {
    renderZoomSlider() {
        return P.isPlatformEmbedded
            ? (0, i.jsxs)(u.xJW, {
                  className: F.marginTop20,
                  children: [
                      (0, i.jsx)(u.vwX, {
                          id: K,
                          tag: u.RB0.H5,
                          className: a()(G.title, F.marginBottom8),
                          children: V.intl.string(V.t.i19n5O)
                      }),
                      (0, i.jsx)(u.R94, {
                          type: u.geA.DESCRIPTION,
                          className: G.subtext,
                          children: V.intl.string(V.t.ip0uSU)
                      }),
                      (0, i.jsx)(u.iRW, {
                          className: a()(F.marginTop20, F.marginBottom4),
                          initialValue: this.props.zoom,
                          defaultValue: B.yqN.ZOOM_DEFAULT,
                          markers: B.yqN.ZOOM_SCALES,
                          stickToMarkers: !0,
                          onValueChange: this.handleZoomChange,
                          onValueRender: this.handleSliderRender,
                          'aria-labelledby': K
                      }),
                      (0, i.jsx)(u.R94, {
                          type: u.R94.Types.DESCRIPTION,
                          children: V.intl.format(V.t.OMkSUl, { modKey: h.Z.modKey })
                      })
                  ]
              })
            : null;
    }
    renderFontScaleSlider() {
        return (0, i.jsxs)(u.xJW, {
            className: F.marginTop20,
            children: [
                (0, i.jsx)(u.vwX, {
                    id: q,
                    tag: u.RB0.H5,
                    className: a()(G.title, F.marginBottom8),
                    children: V.intl.string(V.t.qPOqoK)
                }),
                (0, i.jsx)(u.R94, {
                    type: u.geA.DESCRIPTION,
                    className: G.subtext,
                    children: 'Increase or decrease the size of the chat font'
                }),
                (0, i.jsx)(E.Z, {
                    align: E.Z.Align.CENTER,
                    children: (0, i.jsx)(u.iRW, {
                        className: a()({
                            [F.marginTop20]: !1,
                            [F.marginBottom4]: !1
                        }),
                        initialValue: this.props.fontSize,
                        defaultValue: B.yqN.FONT_SIZE_DEFAULT,
                        markers: B.yqN.FONT_SIZES,
                        stickToMarkers: !0,
                        onValueChange: this.handleFontSizeChange,
                        onValueRender: this.handleSliderRenderPX,
                        onMarkerRender: this.handleSliderRenderPX,
                        getAriaValueText: this.handleSliderValueText,
                        'aria-labelledby': q
                    })
                })
            ]
        });
    }
    renderMessageGroupSpacingSlider() {
        let { messageDisplayCompact: e, messageGroupSpacing: t } = this.props;
        return (0, i.jsxs)(u.xJW, {
            className: G.messageGroupingSpacing,
            children: [
                (0, i.jsx)(u.vwX, {
                    id: X,
                    tag: u.RB0.H5,
                    className: a()(G.title, F.marginBottom8),
                    children: V.intl.string(V.t.Q6lKkp)
                }),
                (0, i.jsx)(u.R94, {
                    type: u.geA.DESCRIPTION,
                    className: G.subtext,
                    children: V.intl.string(V.t.p7eUra)
                }),
                (0, i.jsx)(u.iRW, {
                    initialValue: t,
                    defaultValue: e ? U.c8 : U.pq,
                    markers: U.fP,
                    stickToMarkers: !0,
                    onValueChange: this.handleMessageSpacingChange,
                    onValueRender: this.handleSliderRenderPX,
                    onMarkerRender: this.handleSliderRenderPX,
                    getAriaValueText: this.handleSliderValueText,
                    'aria-labelledby': X
                })
            ]
        });
    }
    renderPreview() {
        let { messageDisplayCompact: e, theme: t, messageGroupSpacing: n, hideSimpleEmbedContent: r } = this.props,
            s = (0, d.wj)(t) ? this.darkMessages : this.lightMessages;
        return (0, i.jsx)(u.Rny, {
            children: (0, i.jsx)(u.Zbd, {
                className: a()(G.preview, F.marginBottom40, e ? G.compactPreview : void 0, 'group-spacing-'.concat(null != n ? n : e ? U.c8 : U.pq)),
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
                            className: 0 === n ? G.firstMessage : void 0,
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
                  className: a()(F.marginTop8, F.marginBottom40),
                  title: (0, i.jsx)('div', {
                      className: G.themeTitle,
                      children: (0, i.jsx)('div', {
                          className: G.title,
                          children: V.intl.string(V.t.Ksh3io)
                      })
                  }),
                  children: (0, i.jsx)(u.R94, {
                      type: u.R94.Types.DEFAULT,
                      className: G.forcedColorsWarning,
                      children: (0, x.b)()
                          ? V.intl.format(V.t.Jae48P, {
                                onClick: () => {
                                    p.Z.open(B.oAB.ACCESSIBILITY);
                                }
                            })
                          : V.intl.string(V.t.AUMSZG)
                  })
              })
            : (0, i.jsxs)(u.Kqy, {
                  gap: 24,
                  children: [
                      (0, i.jsx)(u.Text, {
                          variant: 'text-lg/medium',
                          className: G.title,
                          children: V.intl.string(V.t.Ksh3io)
                      }),
                      (0, i.jsx)(u.xJW, {
                          title: (0, i.jsx)($, {}),
                          children: (0, i.jsx)(w.i, {})
                      })
                  ]
              });
    }
    renderDisplayMode() {
        return (0, i.jsxs)(u.xJW, {
            title: V.intl.string(V.t.ZEoGMT),
            className: F.marginTop8,
            children: [
                (0, i.jsx)(u.FXm, {
                    options: [
                        {
                            name: V.intl.string(V.t.KZIadn),
                            value: Y.COZY
                        },
                        {
                            name: V.intl.string(V.t['6+nTjY']),
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
                    className: F.marginTop20,
                    children: V.intl.string(V.t['7FVjFB'])
                })
            ]
        });
    }
    renderListSpacing() {
        let { density: e } = this.props;
        return (0, i.jsxs)(I.F, {
            setting: L.s6.APPEARANCE_LIST_SPACING,
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
                    className: F.marginTop8,
                    children: [
                        (0, i.jsx)(u.R94, {
                            type: u.geA.DESCRIPTION,
                            className: F.marginBottom8,
                            children: 'Adjust the spacing and layout to balance readability and content based on your preferences.'
                        }),
                        (0, i.jsx)(u.FXm, {
                            options: [
                                {
                                    name: V.intl.string(V.t.T7G4Y2),
                                    value: c.Pi.COZY,
                                    desc: 'Comfortable spacing for easier readability'
                                },
                                {
                                    name: V.intl.string(V.t['7iegX1']),
                                    value: c.Pi.COMPACT,
                                    desc: 'Tighter layout to fit more content'
                                }
                            ],
                            onChange: this.handleUIDensityChange,
                            value: e
                        })
                    ]
                }),
                (0, i.jsx)(u.$i$, { className: F.marginTop8 })
            ]
        });
    }
    handleDarkSidebarChecked() {
        (0, f.lq)();
    }
    renderScalingAndSpacing() {
        return (0, i.jsxs)(i.Fragment, {
            children: [this.renderFontScaleSlider(), this.renderMessageGroupSpacingSlider(), this.renderZoomSlider(), (0, i.jsx)(u.$i$, { className: F.marginTop20 })]
        });
    }
    renderTimestampHourCycle() {
        let { timestampHourCycle: e } = this.props;
        return (0, i.jsx)(u.xJW, {
            title: (0, i.jsx)(u.Text, {
                variant: 'text-lg/medium',
                className: a()(G.timeTitle, G.title),
                children: V.intl.string(V.t.dyamEB)
            }),
            children: (0, i.jsx)(u.FXm, {
                options: [
                    {
                        name: V.intl.string(V.t.FMWYvb),
                        value: c.hg.AUTO
                    },
                    {
                        name: V.intl.string(V.t.p8NOws),
                        value: c.hg.H12
                    },
                    {
                        name: V.intl.string(V.t['+o/sOj']),
                        value: c.hg.H23
                    }
                ],
                onChange: (e) => Z.hg.updateSetting(e.value),
                value: e
            })
        });
    }
    render() {
        return (0, i.jsxs)(u.hjN, {
            tag: u.RB0.H1,
            title: V.intl.string(V.t['iHH+k5']),
            children: [
                (0, i.jsxs)(I.F, {
                    setting: L.s6.APPEARANCE_THEME,
                    children: [this.renderPreview(), this.renderTheme()]
                }),
                (0, i.jsx)(I.F, {
                    setting: L.s6.APPEARANCE_MESSAGE_DISPLAY_COMPACT,
                    children: this.renderDisplayMode()
                }),
                this.renderListSpacing(),
                (0, i.jsx)(I.F, {
                    setting: L.s6.APPEARANCE_SCALING_SPACING,
                    children: this.renderScalingAndSpacing()
                }),
                (0, i.jsxs)(I.F, {
                    setting: L.s6.APPEARANCE_TIMESTAMP_HOUR_CYCLE,
                    children: [this.renderTimestampHourCycle(), (0, i.jsx)(u.$i$, { className: F.marginTop8 })]
                }),
                (0, i.jsx)(u.Text, {
                    variant: 'text-md/normal',
                    className: F.marginTop20,
                    children: V.intl.format(V.t['5LEQdX'], {
                        onAccessibilityClick() {
                            p.Z.open(B.oAB.ACCESSIBILITY);
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
        return V.intl.formatToPlainString(V.t['0hpvOT'], { value: e });
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
            H(this, 'darkMessages', J(B.BRd.DARK)),
            H(this, 'lightMessages', J(B.BRd.LIGHT)),
            H(this, 'handleDisplayCompactAvatarsChanged', (e) => {
                m.ZP.updatedUnsyncedSettings({ displayCompactAvatars: e });
            }),
            H(this, 'handleDesktopRefreshEnabledChanged', (e) => {
                m.ZP.updatedUnsyncedSettings({ disableVisualRefresh: !e });
            }),
            H(this, 'handleMessageDisplayModeChange', (e) => {
                let { value: t } = e;
                (Z.jU.updateSetting(t === Y.COMPACT), (0, f.ZZ)());
            }),
            H(this, 'handleUIDensityChange', (e) => {
                let { value: t } = e;
                t !== c.Pi.UNSET_UI_DENSITY && Z.YC.updateSetting(t);
            }));
    }
}
class et extends ee {
    render() {
        let { density: e } = this.props,
            t = (0, i.jsxs)(I.F, {
                setting: L.s6.APPEARANCE_THEME,
                children: [this.renderPreview(), this.renderTheme()]
            }),
            n = (0, i.jsx)(I.F, {
                setting: L.s6.APPEARANCE_ICON,
                children: (0, i.jsx)(k.c, {})
            }),
            r = [
                {
                    name: V.intl.string(V.t['7iegX1']),
                    value: c.Pi.COMPACT
                },
                {
                    name: V.intl.string(V.t.bBvAEB),
                    value: c.Pi.DEFAULT
                },
                {
                    name: V.intl.string(V.t['4cuYHx']),
                    value: c.Pi.COZY
                }
            ],
            s = (0, i.jsxs)(I.F, {
                setting: L.s6.APPEARANCE_LIST_SPACING,
                children: [
                    (0, i.jsxs)(u.xJW, {
                        title: (0, i.jsx)(u.Text, {
                            variant: 'text-lg/medium',
                            className: G.title,
                            children: V.intl.string(V.t['C/5V0N'])
                        }),
                        children: [
                            (0, i.jsx)(u.R94, {
                                type: u.geA.DESCRIPTION,
                                className: G.subtext,
                                children: V.intl.string(V.t.QLZhYm)
                            }),
                            (0, i.jsx)(u.FXm, {
                                options: r,
                                onChange: this.handleUIDensityChange,
                                value: e
                            })
                        ]
                    }),
                    (0, i.jsx)(u.$i$, { className: G.divider })
                ]
            }),
            a = (0, i.jsxs)(I.F, {
                setting: L.s6.APPEARANCE_MESSAGE_DISPLAY_COMPACT,
                children: [
                    (0, i.jsxs)(u.Kqy, {
                        gap: 8,
                        padding: { bottom: 8 },
                        children: [
                            (0, i.jsx)(u.Text, {
                                variant: 'text-lg/medium',
                                className: G.title,
                                children: V.intl.string(V.t['2ed/sL'])
                            }),
                            (0, i.jsx)(u.Text, {
                                variant: 'text-sm/normal',
                                className: G.subtext,
                                children: V.intl.string(V.t.u9N6Qk)
                            })
                        ]
                    }),
                    (0, i.jsxs)(u.xJW, {
                        titleClassName: G.title,
                        title: V.intl.string(V.t.nKRoPj),
                        children: [
                            (0, i.jsx)(u.R94, {
                                type: u.geA.DESCRIPTION,
                                className: G.subtext,
                                children: V.intl.string(V.t.QntEEB)
                            }),
                            (0, i.jsx)(u.FXm, {
                                options: [
                                    {
                                        name: V.intl.string(V.t.Jqj4cX),
                                        value: Y.COZY
                                    },
                                    {
                                        name: V.intl.string(V.t['1JNcPT']),
                                        value: Y.COMPACT
                                    }
                                ],
                                onChange: this.handleMessageDisplayModeChange,
                                value: this.props.messageDisplayCompact ? Y.COMPACT : Y.COZY
                            }),
                            this.props.messageDisplayCompact &&
                                (0, i.jsx)(u.j7V, {
                                    className: G.compactModeToggle,
                                    hideBorder: !0,
                                    value: !this.props.displayCompactAvatars,
                                    onChange: (e) => this.handleDisplayCompactAvatarsChanged(!e),
                                    children: (0, i.jsx)(u.Text, {
                                        variant: 'text-md/medium',
                                        children: V.intl.string(V.t['//vhWl'])
                                    })
                                })
                        ]
                    }),
                    this.renderMessageGroupSpacingSlider(),
                    (0, i.jsx)(u.$i$, { className: G.divider })
                ]
            }),
            l = (0, i.jsxs)(I.F, {
                setting: L.s6.APPEARANCE_SCALING_SPACING,
                children: [
                    (0, i.jsx)(u.Text, {
                        variant: 'text-lg/medium',
                        className: G.title,
                        children: V.intl.string(V.t['0Yh+ZW'])
                    }),
                    this.renderFontScaleSlider(),
                    this.renderZoomSlider(),
                    (0, i.jsx)(u.$i$, { className: G.divider })
                ]
            }),
            o = (0, i.jsx)(I.F, {
                setting: L.s6.APPEARANCE_TIMESTAMP_HOUR_CYCLE,
                children: this.renderTimestampHourCycle()
            }),
            d = (0, i.jsx)(u.Text, {
                variant: 'text-md/normal',
                className: G.a11yCallout,
                children: V.intl.format(V.t['5LEQdX'], {
                    onAccessibilityClick() {
                        p.Z.open(B.oAB.ACCESSIBILITY);
                    }
                })
            });
        return (0, i.jsxs)(u.hjN, {
            tag: u.RB0.H1,
            title: V.intl.string(V.t['iHH+k5']),
            children: [t, n, s, a, l, o, d]
        });
    }
}
let en = (e) => {
    (0, C.zu)(e) ||
        (0, C.Q3)(e, {
            dismissAction: M.L.AUTO,
            forceTrack: !0
        });
};
function ei() {
    let e = Z.jU.useSetting(),
        t = Z.RS.useSetting(),
        n = Z.NA.useSetting(),
        s = Z.L1.useSetting(),
        a = Z.hg.useSetting(),
        c = Z.YC.useSetting(),
        d = j.M.useExperiment({ location: 'UserSettingsAppearance' }).enabled;
    ((0, g.ZP)(() => {
        (en(o.z.CLIENT_THEMES_SETTINGS_BADGE), en(o.z.DEKSTOP_CUSTOM_APP_ICON_BADGE), en(o.z.DEKSTOP_CUSTOM_APP_ICON_COACHMARK));
    }),
        r.useEffect(() => {
            d && en(o.z.CLIENT_THEMES_APPEARANCE_SETTINGS_NEW_BADGE);
        }, [d]));
    let u = (0, y.A6)(),
        m = (0, l.cj)([R.Z, D.ZP, b.Z, A.default, _.Z], () => {
            var e, t;
            return {
                theme: R.Z.theme,
                useForcedColors: b.Z.useForcedColors,
                useSystemTheme: D.ZP.useSystemTheme,
                fontSize: b.Z.fontSize,
                zoom: b.Z.zoom,
                messageGroupSpacing: b.Z.messageGroupSpacing,
                displayCompactAvatars: D.ZP.displayCompactAvatars,
                isStaff: null != (t = null == (e = A.default.getCurrentUser()) ? void 0 : e.isStaff) && t,
                gradientPreset: _.Z.gradientPreset
            };
        });
    return (0, i.jsx)(
        et,
        z(
            {
                messageDisplayCompact: e,
                hideSimpleEmbedContent: t && n,
                clientTheme: s,
                timestampHourCycle: a,
                density: c,
                darkSidebar: u
            },
            m
        )
    );
}
