n.d(t, { Z: () => ei }), n(47120), n(733860);
var r = n(200651),
    i = n(192379),
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
    N = n(627845),
    x = n(514361),
    _ = n(600164),
    E = n(313201),
    j = n(530035),
    C = n(540059),
    O = n(605236),
    v = n(786761),
    S = n(3148),
    T = n(739566),
    I = n(753206),
    y = n(311476),
    A = n(921801),
    P = n(594174),
    R = n(358085),
    D = n(210887),
    Z = n(740492),
    w = n(695346),
    k = n(329013),
    W = n(333859),
    L = n(726985),
    B = n(981631),
    M = n(921944),
    U = n(959517),
    V = n(388032),
    G = n(658749),
    F = n(802138);
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
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                H(e, t, n[t]);
            });
    }
    return e;
}
function Y(e, t) {
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
let K = {
        COZY: 'cozy',
        COMPACT: 'compact'
    },
    q = (0, E.hQ)(),
    X = (0, E.hQ)(),
    J = (0, E.hQ)(),
    Q = '1337',
    $ = (e) => {
        let t = 0;
        return [
            (0, v.e5)(
                Y(
                    z(
                        {},
                        (0, S.ZP)({
                            channelId: Q,
                            content: V.NW.string(V.t.oZxkEh)
                        })
                    ),
                    {
                        state: B.yb.SENT,
                        id: ''.concat(t++)
                    }
                )
            ),
            (0, v.e5)(
                Y(
                    z(
                        {},
                        (0, S.ZP)({
                            channelId: Q,
                            content: (0, d.wj)(e) ? V.NW.string(V.t['WGb/v7']) : V.NW.string(V.t['62m4m5'])
                        })
                    ),
                    {
                        state: B.yb.SENT,
                        id: ''.concat(t++)
                    }
                )
            ),
            (0, v.e5)(
                Y(
                    z(
                        {},
                        (0, S.ZP)({
                            channelId: Q,
                            content: V.NW.string(V.t.a0Byo6)
                        })
                    ),
                    {
                        state: B.yb.SENT,
                        id: ''.concat(t++)
                    }
                )
            ),
            (0, v.e5)(
                Y(
                    z(
                        {},
                        (0, S.ZP)({
                            channelId: Q,
                            content: V.NW.string(V.t.bmwEWF)
                        })
                    ),
                    {
                        state: B.yb.SENT,
                        id: ''.concat(t++)
                    }
                )
            ),
            (0, v.e5)(
                Y(
                    z(
                        {},
                        (0, S.ZP)({
                            channelId: Q,
                            content: V.NW.string(V.t.hK9QW1)
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
    ee = () => {
        let e = (0, C.Q3)('ThemeTitle'),
            t = (0, l.e7)([x.Z], () => x.Z.isPreview),
            { enabled: n } = y.Z.useExperiment(
                { location: 'GradientSelectorsTitle' },
                {
                    autoTrackExposure: !1,
                    disable: !t
                }
            );
        return n
            ? null
            : (0, r.jsxs)('div', {
                  className: G.themeTitle,
                  children: [
                      (0, r.jsxs)('div', {
                          className: G.themeTitleContainer,
                          children: [
                              (0, r.jsx)('div', {
                                  className: G.title,
                                  children: e ? V.NW.string(V.t['0EzVsr']) : V.NW.string(V.t.Ksh3io)
                              }),
                              e &&
                                  (0, r.jsx)(u.R94, {
                                      type: u.R94.Types.DESCRIPTION,
                                      className: G.subtext,
                                      children: V.NW.string(V.t.PV3dGR)
                                  })
                          ]
                      }),
                      (0, r.jsx)(k.g, {})
                  ]
              });
    };
class et extends i.Component {
    renderZoomSlider() {
        let { isRefreshEnabled: e } = this.props;
        return R.isPlatformEmbedded
            ? (0, r.jsxs)(u.xJW, {
                  className: F.marginTop20,
                  children: [
                      (0, r.jsx)(u.vwX, {
                          id: q,
                          tag: u.RB0.H5,
                          className: a()(G.title, F.marginBottom8),
                          children: V.NW.string(V.t.i19n5O)
                      }),
                      e &&
                          (0, r.jsx)(u.R94, {
                              type: u.geA.DESCRIPTION,
                              className: G.subtext,
                              children: V.NW.string(V.t.ip0uSU)
                          }),
                      (0, r.jsx)(u.iRW, {
                          className: a()(F.marginTop20, F.marginBottom4),
                          initialValue: this.props.zoom,
                          defaultValue: B.yqN.ZOOM_DEFAULT,
                          markers: B.yqN.ZOOM_SCALES,
                          stickToMarkers: !0,
                          onValueChange: this.handleZoomChange,
                          onValueRender: this.handleSliderRender,
                          'aria-labelledby': q
                      }),
                      (0, r.jsx)(u.R94, {
                          type: u.R94.Types.DESCRIPTION,
                          children: V.NW.format(V.t.OMkSUl, { modKey: h.Z.modKey })
                      })
                  ]
              })
            : null;
    }
    renderFontScaleSlider() {
        let { isRefreshEnabled: e } = this.props;
        return (0, r.jsxs)(u.xJW, {
            className: F.marginTop20,
            children: [
                (0, r.jsx)(u.vwX, {
                    id: X,
                    tag: u.RB0.H5,
                    className: a()(G.title, F.marginBottom8),
                    children: V.NW.string(V.t.qPOqoK)
                }),
                e &&
                    (0, r.jsx)(u.R94, {
                        type: u.geA.DESCRIPTION,
                        className: G.subtext,
                        children: 'Increase or decrease the size of the chat font'
                    }),
                (0, r.jsx)(_.Z, {
                    align: _.Z.Align.CENTER,
                    children: (0, r.jsx)(u.iRW, {
                        className: a()({
                            [F.marginTop20]: !e,
                            [F.marginBottom4]: !e
                        }),
                        initialValue: this.props.fontSize,
                        defaultValue: B.yqN.FONT_SIZE_DEFAULT,
                        markers: B.yqN.FONT_SIZES,
                        stickToMarkers: !0,
                        onValueChange: this.handleFontSizeChange,
                        onValueRender: this.handleSliderRenderPX,
                        onMarkerRender: this.handleSliderRenderPX,
                        getAriaValueText: this.handleSliderValueText,
                        'aria-labelledby': X
                    })
                })
            ]
        });
    }
    renderMessageGroupSpacingSlider() {
        let { messageDisplayCompact: e, messageGroupSpacing: t, isRefreshEnabled: n } = this.props;
        return (0, r.jsxs)(u.xJW, {
            className: G.messageGroupingSpacing,
            children: [
                (0, r.jsx)(u.vwX, {
                    id: J,
                    tag: u.RB0.H5,
                    className: a()(G.title, F.marginBottom8),
                    children: V.NW.string(V.t.Q6lKkp)
                }),
                n &&
                    (0, r.jsx)(u.R94, {
                        type: u.geA.DESCRIPTION,
                        className: G.subtext,
                        children: V.NW.string(V.t.p7eUra)
                    }),
                (0, r.jsx)(u.iRW, {
                    className: a()({
                        [F.marginTop20]: !n,
                        [F.marginBottom4]: !n
                    }),
                    initialValue: t,
                    defaultValue: e ? U.c8 : U.pq,
                    markers: U.fP,
                    stickToMarkers: !0,
                    onValueChange: this.handleMessageSpacingChange,
                    onValueRender: this.handleSliderRenderPX,
                    onMarkerRender: this.handleSliderRenderPX,
                    getAriaValueText: this.handleSliderValueText,
                    'aria-labelledby': J
                })
            ]
        });
    }
    renderPreview() {
        let { messageDisplayCompact: e, theme: t, messageGroupSpacing: n, hideSimpleEmbedContent: i } = this.props,
            s = (0, d.wj)(t) ? this.darkMessages : this.lightMessages;
        return (0, r.jsx)(u.Rny, {
            children: (0, r.jsx)(u.Zbd, {
                className: a()(G.preview, F.marginBottom40, e ? G.compactPreview : void 0, 'group-spacing-'.concat(null != n ? n : e ? U.c8 : U.pq)),
                outline: !0,
                'aria-hidden': !0,
                children: s.map((t, n) =>
                    (0, r.jsx)(
                        I.Z,
                        {
                            author: (0, T.ZH)(t),
                            message: t,
                            compact: e,
                            isGroupStart: n % 2 == 0,
                            className: 0 === n ? G.firstMessage : void 0,
                            hideSimpleEmbedContent: i
                        },
                        t.id
                    )
                )
            })
        });
    }
    renderTheme() {
        let { theme: e, useForcedColors: t, darkSidebar: n, gradientPreset: i, isRefreshEnabled: s } = this.props;
        return t
            ? (0, r.jsx)(u.xJW, {
                  className: a()(F.marginTop8, F.marginBottom40),
                  title: (0, r.jsx)('div', {
                      className: G.themeTitle,
                      children: (0, r.jsx)('div', {
                          className: G.title,
                          children: V.NW.string(V.t.Ksh3io)
                      })
                  }),
                  children: (0, r.jsx)(u.R94, {
                      type: u.R94.Types.DEFAULT,
                      className: G.forcedColorsWarning,
                      children: (0, N.b)()
                          ? V.NW.format(V.t.Jae48P, {
                                onClick: () => {
                                    p.Z.open(B.oAB.ACCESSIBILITY);
                                }
                            })
                          : V.NW.string(V.t.AUMSZG)
                  })
              })
            : s
              ? (0, r.jsxs)(u.Kqy, {
                    gap: 24,
                    children: [
                        (0, r.jsx)(u.Text, {
                            variant: 'text-lg/medium',
                            className: G.title,
                            children: V.NW.string(V.t.Ksh3io)
                        }),
                        (0, r.jsx)(u.xJW, {
                            title: (0, r.jsx)(ee, {}),
                            children: (0, r.jsx)(k.i, {})
                        })
                    ]
                })
              : (0, r.jsxs)(u.xJW, {
                    className: F.marginTop8,
                    title: (0, r.jsx)(ee, {}),
                    children: [
                        (0, r.jsx)(k.i, {}),
                        (0, r.jsx)(A.F, {
                            setting: L.s6.APPEARANCE_ICON,
                            children: (0, r.jsx)(W.c, {})
                        }),
                        (0, r.jsx)(u.j7V, {
                            value: n && (0, d.ap)(e) && !t,
                            disabled: e !== B.BRd.LIGHT || t || null != i,
                            onChange: this.handleDarkSidebarChecked,
                            className: F.marginTop20,
                            children: V.NW.string(V.t.yF54Ki)
                        })
                    ]
                });
    }
    renderDisplayMode() {
        return (0, r.jsxs)(u.xJW, {
            title: V.NW.string(V.t.ZEoGMT),
            className: F.marginTop8,
            children: [
                (0, r.jsx)(u.FXm, {
                    options: [
                        {
                            name: V.NW.string(V.t.KZIadn),
                            value: K.COZY
                        },
                        {
                            name: V.NW.string(V.t['6+nTjY']),
                            value: K.COMPACT
                        }
                    ],
                    onChange: this.handleMessageDisplayModeChange,
                    value: this.props.messageDisplayCompact ? K.COMPACT : K.COZY
                }),
                (0, r.jsx)(u.j7V, {
                    value: this.props.messageDisplayCompact && this.props.displayCompactAvatars,
                    disabled: !this.props.messageDisplayCompact,
                    onChange: this.handleDisplayCompactAvatarsChanged,
                    className: F.marginTop20,
                    children: V.NW.string(V.t['7FVjFB'])
                })
            ]
        });
    }
    renderListSpacing() {
        let { isRefreshEnabled: e, density: t } = this.props;
        return e
            ? (0, r.jsxs)(A.F, {
                  setting: L.s6.APPEARANCE_LIST_SPACING,
                  children: [
                      (0, r.jsxs)(u.xJW, {
                          title: (0, r.jsx)('div', {
                              style: {
                                  display: 'flex',
                                  gap: 8,
                                  alignItems: 'center'
                              },
                              children: 'UI Density'
                          }),
                          className: F.marginTop8,
                          children: [
                              (0, r.jsx)(u.R94, {
                                  type: u.geA.DESCRIPTION,
                                  className: F.marginBottom8,
                                  children: 'Adjust the spacing and layout to balance readability and content based on your preferences.'
                              }),
                              (0, r.jsx)(u.FXm, {
                                  options: [
                                      {
                                          name: V.NW.string(V.t.T7G4Y2),
                                          value: c.Pi.COZY,
                                          desc: 'Comfortable spacing for easier readability'
                                      },
                                      {
                                          name: V.NW.string(V.t['7iegX1']),
                                          value: c.Pi.COMPACT,
                                          desc: 'Tighter layout to fit more content'
                                      }
                                  ],
                                  onChange: this.handleUIDensityChange,
                                  value: t
                              })
                          ]
                      }),
                      (0, r.jsx)(u.$i$, { className: F.marginTop8 })
                  ]
              })
            : null;
    }
    handleDarkSidebarChecked() {
        (0, f.lq)();
    }
    renderScalingAndSpacing() {
        return (0, r.jsxs)(r.Fragment, {
            children: [this.renderFontScaleSlider(), this.renderMessageGroupSpacingSlider(), this.renderZoomSlider(), (0, r.jsx)(u.$i$, { className: F.marginTop20 })]
        });
    }
    renderTimestampHourCycle() {
        let { timestampHourCycle: e, isRefreshEnabled: t } = this.props;
        return (0, r.jsx)(u.xJW, {
            title: t
                ? (0, r.jsx)(u.Text, {
                      variant: 'text-lg/medium',
                      className: a()(G.timeTitle, G.title),
                      children: V.NW.string(V.t.dyamEB)
                  })
                : V.NW.string(V.t.dyamEB),
            className: a()({ [F.marginTop20]: !t }),
            children: (0, r.jsx)(u.FXm, {
                options: [
                    {
                        name: V.NW.string(V.t.FMWYvb),
                        value: c.hg.AUTO
                    },
                    {
                        name: V.NW.string(V.t.p8NOws),
                        value: c.hg.H12
                    },
                    {
                        name: V.NW.string(V.t['+o/sOj']),
                        value: c.hg.H23
                    }
                ],
                onChange: (e) => w.hg.updateSetting(e.value),
                value: e
            })
        });
    }
    renderVisualRefreshOverride() {
        let { isRefreshEnabled: e, isRefreshExperimentEnabled: t, canOptOutOfRefresh: n } = this.props;
        return t && n
            ? (0, r.jsx)(u.xJW, {
                  className: F.marginTop8,
                  children: (0, r.jsx)(u.j7V, {
                      hideBorder: !0,
                      value: e,
                      onChange: this.handleDesktopRefreshEnabledChanged,
                      className: F.marginTop20,
                      children: 'Enable Desktop Refresh'
                  })
              })
            : null;
    }
    render() {
        return (0, r.jsxs)(u.hjN, {
            tag: u.RB0.H1,
            title: V.NW.string(V.t['iHH+k5']),
            children: [
                this.renderVisualRefreshOverride(),
                (0, r.jsxs)(A.F, {
                    setting: L.s6.APPEARANCE_THEME,
                    children: [this.renderPreview(), this.renderTheme()]
                }),
                (0, r.jsx)(A.F, {
                    setting: L.s6.APPEARANCE_MESSAGE_DISPLAY_COMPACT,
                    children: this.renderDisplayMode()
                }),
                this.renderListSpacing(),
                (0, r.jsx)(A.F, {
                    setting: L.s6.APPEARANCE_SCALING_SPACING,
                    children: this.renderScalingAndSpacing()
                }),
                (0, r.jsxs)(A.F, {
                    setting: L.s6.APPEARANCE_TIMESTAMP_HOUR_CYCLE,
                    children: [this.renderTimestampHourCycle(), (0, r.jsx)(u.$i$, { className: F.marginTop8 })]
                }),
                (0, r.jsx)(u.Text, {
                    variant: 'text-md/normal',
                    className: F.marginTop20,
                    children: V.NW.format(V.t['5LEQdX'], {
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
        return V.NW.formatToPlainString(V.t['0hpvOT'], { value: e });
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
        super(...e),
            H(this, 'darkMessages', $(B.BRd.DARK)),
            H(this, 'lightMessages', $(B.BRd.LIGHT)),
            H(this, 'handleDisplayCompactAvatarsChanged', (e) => {
                m.ZP.updatedUnsyncedSettings({ displayCompactAvatars: e });
            }),
            H(this, 'handleDesktopRefreshEnabledChanged', (e) => {
                m.ZP.updatedUnsyncedSettings({ disableVisualRefresh: !e });
            }),
            H(this, 'handleMessageDisplayModeChange', (e) => {
                let { value: t } = e;
                w.jU.updateSetting(t === K.COMPACT), (0, f.ZZ)();
            }),
            H(this, 'handleUIDensityChange', (e) => {
                let { value: t } = e;
                t !== c.Pi.UNSET_UI_DENSITY && w.YC.updateSetting(t);
            });
    }
}
class en extends et {
    render() {
        let { density: e, enableCompactMode: t } = this.props,
            n = (0, r.jsxs)(A.F, {
                setting: L.s6.APPEARANCE_THEME,
                children: [this.renderPreview(), this.renderTheme()]
            }),
            i = (0, r.jsx)(A.F, {
                setting: L.s6.APPEARANCE_ICON,
                children: (0, r.jsx)(W.c, {})
            }),
            s = [
                {
                    name: V.NW.string(V.t.bBvAEB),
                    value: c.Pi.DEFAULT
                },
                {
                    name: V.NW.string(V.t['4cuYHx']),
                    value: c.Pi.COZY
                }
            ];
        t &&
            s.unshift({
                name: V.NW.string(V.t['7iegX1']),
                value: c.Pi.COMPACT
            });
        let a = (0, r.jsxs)(A.F, {
                setting: L.s6.APPEARANCE_LIST_SPACING,
                children: [
                    (0, r.jsxs)(u.xJW, {
                        title: (0, r.jsx)(u.Text, {
                            variant: 'text-lg/medium',
                            className: G.title,
                            children: V.NW.string(V.t['C/5V0N'])
                        }),
                        children: [
                            (0, r.jsx)(u.R94, {
                                type: u.geA.DESCRIPTION,
                                className: G.subtext,
                                children: V.NW.string(V.t.QLZhYm)
                            }),
                            (0, r.jsx)(u.FXm, {
                                options: s,
                                onChange: this.handleUIDensityChange,
                                value: e
                            })
                        ]
                    }),
                    (0, r.jsx)(u.$i$, { className: G.divider })
                ]
            }),
            l = (0, r.jsxs)(A.F, {
                setting: L.s6.APPEARANCE_MESSAGE_DISPLAY_COMPACT,
                children: [
                    (0, r.jsxs)(u.Kqy, {
                        gap: 8,
                        padding: { bottom: 8 },
                        children: [
                            (0, r.jsx)(u.Text, {
                                variant: 'text-lg/medium',
                                className: G.title,
                                children: V.NW.string(V.t['2ed/sL'])
                            }),
                            (0, r.jsx)(u.Text, {
                                variant: 'text-sm/normal',
                                className: G.subtext,
                                children: V.NW.string(V.t.u9N6Qk)
                            })
                        ]
                    }),
                    (0, r.jsxs)(u.xJW, {
                        titleClassName: G.title,
                        title: V.NW.string(V.t.nKRoPj),
                        children: [
                            (0, r.jsx)(u.R94, {
                                type: u.geA.DESCRIPTION,
                                className: G.subtext,
                                children: V.NW.string(V.t.QntEEB)
                            }),
                            (0, r.jsx)(u.FXm, {
                                options: [
                                    {
                                        name: V.NW.string(V.t.Jqj4cX),
                                        value: K.COZY
                                    },
                                    {
                                        name: V.NW.string(V.t['1JNcPT']),
                                        value: K.COMPACT
                                    }
                                ],
                                onChange: this.handleMessageDisplayModeChange,
                                value: this.props.messageDisplayCompact ? K.COMPACT : K.COZY
                            }),
                            this.props.messageDisplayCompact &&
                                (0, r.jsx)(u.j7V, {
                                    className: G.compactModeToggle,
                                    hideBorder: !0,
                                    value: !this.props.displayCompactAvatars,
                                    onChange: (e) => this.handleDisplayCompactAvatarsChanged(!e),
                                    children: (0, r.jsx)(u.Text, {
                                        variant: 'text-md/medium',
                                        children: V.NW.string(V.t['//vhWl'])
                                    })
                                })
                        ]
                    }),
                    this.renderMessageGroupSpacingSlider(),
                    (0, r.jsx)(u.$i$, { className: G.divider })
                ]
            }),
            o = (0, r.jsxs)(A.F, {
                setting: L.s6.APPEARANCE_SCALING_SPACING,
                children: [
                    (0, r.jsx)(u.Text, {
                        variant: 'text-lg/medium',
                        className: G.title,
                        children: V.NW.string(V.t['0Yh+ZW'])
                    }),
                    this.renderFontScaleSlider(),
                    this.renderZoomSlider(),
                    (0, r.jsx)(u.$i$, { className: G.divider })
                ]
            }),
            d = (0, r.jsx)(A.F, {
                setting: L.s6.APPEARANCE_TIMESTAMP_HOUR_CYCLE,
                children: this.renderTimestampHourCycle()
            }),
            m = (0, r.jsx)(u.Text, {
                variant: 'text-md/normal',
                className: G.a11yCallout,
                children: V.NW.format(V.t['5LEQdX'], {
                    onAccessibilityClick() {
                        p.Z.open(B.oAB.ACCESSIBILITY);
                    }
                })
            });
        return (0, r.jsxs)(u.hjN, {
            tag: u.RB0.H1,
            title: V.NW.string(V.t['iHH+k5']),
            children: [this.renderVisualRefreshOverride(), n, i, a, l, o, d, m]
        });
    }
}
let er = (e) => {
    (0, O.un)(e) ||
        (0, O.EW)(e, {
            dismissAction: M.L.AUTO,
            forceTrack: !0
        });
};
function ei() {
    let e = w.jU.useSetting(),
        t = w.RS.useSetting(),
        n = w.NA.useSetting(),
        i = w.L1.useSetting(),
        s = w.hg.useSetting(),
        a = w.YC.useSetting();
    (0, g.ZP)(() => {
        er(o.z.CLIENT_THEMES_SETTINGS_BADGE), er(o.z.DEKSTOP_CUSTOM_APP_ICON_BADGE), er(o.z.DEKSTOP_CUSTOM_APP_ICON_COACHMARK);
    });
    let c = (0, l.cj)([D.Z, Z.ZP, b.Z, P.default, x.Z], () => {
            var e, t;
            return {
                theme: D.Z.theme,
                useForcedColors: b.Z.useForcedColors,
                useSystemTheme: Z.ZP.useSystemTheme,
                darkSidebar: D.Z.darkSidebar,
                fontSize: b.Z.fontSize,
                zoom: b.Z.zoom,
                messageGroupSpacing: b.Z.messageGroupSpacing,
                displayCompactAvatars: Z.ZP.displayCompactAvatars,
                isStaff: null !== (t = null === (e = P.default.getCurrentUser()) || void 0 === e ? void 0 : e.isStaff) && void 0 !== t && t,
                gradientPreset: x.Z.gradientPreset
            };
        }),
        d = (0, C.nm)('UserSettingsAppearance'),
        u = (0, C.o9)('UserSettingsAppearance'),
        m = (0, C.Q3)('UserSettingsAppearance'),
        p = j.i.useExperiment({ location: 'appearance_settings' }, { autoTrackExposure: !0 }).enabled;
    return (0, r.jsx)(
        m ? en : et,
        z(
            {
                messageDisplayCompact: e,
                hideSimpleEmbedContent: t && n,
                clientTheme: i,
                timestampHourCycle: s,
                isRefreshEnabled: m,
                isRefreshExperimentEnabled: u,
                enableCompactMode: p,
                density: a,
                canOptOutOfRefresh: d
            },
            c
        )
    );
}
