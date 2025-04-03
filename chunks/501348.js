n.d(t, { Z: () => er }), n(47120);
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
    g = n(230711),
    p = n(493773),
    h = n(714338),
    f = n(857595),
    b = n(607070),
    N = n(627845),
    x = n(514361),
    _ = n(600164),
    E = n(313201),
    j = n(540059),
    O = n(605236),
    C = n(786761),
    S = n(3148),
    v = n(739566),
    T = n(753206),
    I = n(311476),
    y = n(921801),
    A = n(594174),
    P = n(358085),
    R = n(210887),
    D = n(740492),
    Z = n(695346),
    w = n(329013),
    k = n(333859),
    W = n(726985),
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
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                F(e, t, n[t]);
            });
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
let Y = {
        COZY: 'cozy',
        COMPACT: 'compact'
    },
    K = (0, E.hQ)(),
    q = (0, E.hQ)(),
    X = (0, E.hQ)(),
    J = '1337',
    Q = (e) => {
        let t = 0;
        return [
            (0, C.e5)(
                z(
                    H(
                        {},
                        (0, S.ZP)({
                            channelId: J,
                            content: U.NW.string(U.t.oZxkEh)
                        })
                    ),
                    {
                        state: L.yb.SENT,
                        id: ''.concat(t++)
                    }
                )
            ),
            (0, C.e5)(
                z(
                    H(
                        {},
                        (0, S.ZP)({
                            channelId: J,
                            content: (0, d.wj)(e) ? U.NW.string(U.t['WGb/v7']) : U.NW.string(U.t['62m4m5'])
                        })
                    ),
                    {
                        state: L.yb.SENT,
                        id: ''.concat(t++)
                    }
                )
            ),
            (0, C.e5)(
                z(
                    H(
                        {},
                        (0, S.ZP)({
                            channelId: J,
                            content: U.NW.string(U.t.a0Byo6)
                        })
                    ),
                    {
                        state: L.yb.SENT,
                        id: ''.concat(t++)
                    }
                )
            ),
            (0, C.e5)(
                z(
                    H(
                        {},
                        (0, S.ZP)({
                            channelId: J,
                            content: U.NW.string(U.t.bmwEWF)
                        })
                    ),
                    {
                        state: L.yb.SENT,
                        id: ''.concat(t++)
                    }
                )
            ),
            (0, C.e5)(
                z(
                    H(
                        {},
                        (0, S.ZP)({
                            channelId: J,
                            content: U.NW.string(U.t.hK9QW1)
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
    $ = () => {
        let e = (0, j.Q3)('ThemeTitle'),
            t = (0, l.e7)([x.Z], () => x.Z.isPreview),
            { enabled: n } = I.Z.useExperiment(
                { location: 'GradientSelectorsTitle' },
                {
                    autoTrackExposure: !1,
                    disable: !t
                }
            );
        return n
            ? null
            : (0, r.jsxs)('div', {
                  className: V.themeTitle,
                  children: [
                      (0, r.jsxs)('div', {
                          className: V.themeTitleContainer,
                          children: [
                              (0, r.jsx)('div', {
                                  className: V.title,
                                  children: e ? U.NW.string(U.t['0EzVsr']) : U.NW.string(U.t.Ksh3io)
                              }),
                              e &&
                                  (0, r.jsx)(u.R94, {
                                      type: u.R94.Types.DESCRIPTION,
                                      className: V.subtext,
                                      children: U.NW.string(U.t.PV3dGR)
                                  })
                          ]
                      }),
                      (0, r.jsx)(w.g, {})
                  ]
              });
    };
class ee extends i.Component {
    renderZoomSlider() {
        let { isRefreshEnabled: e } = this.props;
        return P.isPlatformEmbedded
            ? (0, r.jsxs)(u.xJW, {
                  className: G.marginTop20,
                  children: [
                      (0, r.jsx)(u.vwX, {
                          id: K,
                          tag: u.RB0.H5,
                          className: a()(V.title, G.marginBottom8),
                          children: U.NW.string(U.t.i19n5O)
                      }),
                      e &&
                          (0, r.jsx)(u.R94, {
                              type: u.geA.DESCRIPTION,
                              className: V.subtext,
                              children: U.NW.string(U.t.ip0uSU)
                          }),
                      (0, r.jsx)(u.iRW, {
                          className: a()(G.marginTop20, G.marginBottom4),
                          initialValue: this.props.zoom,
                          defaultValue: L.yqN.ZOOM_DEFAULT,
                          markers: L.yqN.ZOOM_SCALES,
                          stickToMarkers: !0,
                          onValueChange: this.handleZoomChange,
                          onValueRender: this.handleSliderRender,
                          'aria-labelledby': K
                      }),
                      (0, r.jsx)(u.R94, {
                          type: u.R94.Types.DESCRIPTION,
                          children: U.NW.format(U.t.OMkSUl, { modKey: h.Z.modKey })
                      })
                  ]
              })
            : null;
    }
    renderFontScaleSlider() {
        let { isRefreshEnabled: e } = this.props;
        return (0, r.jsxs)(u.xJW, {
            className: G.marginTop20,
            children: [
                (0, r.jsx)(u.vwX, {
                    id: q,
                    tag: u.RB0.H5,
                    className: a()(V.title, G.marginBottom8),
                    children: U.NW.string(U.t.qPOqoK)
                }),
                e &&
                    (0, r.jsx)(u.R94, {
                        type: u.geA.DESCRIPTION,
                        className: V.subtext,
                        children: 'Increase or decrease the size of the chat font'
                    }),
                (0, r.jsx)(_.Z, {
                    align: _.Z.Align.CENTER,
                    children: (0, r.jsx)(u.iRW, {
                        className: a()({
                            [G.marginTop20]: !e,
                            [G.marginBottom4]: !e
                        }),
                        initialValue: this.props.fontSize,
                        defaultValue: L.yqN.FONT_SIZE_DEFAULT,
                        markers: L.yqN.FONT_SIZES,
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
        let { messageDisplayCompact: e, messageGroupSpacing: t, isRefreshEnabled: n } = this.props;
        return (0, r.jsxs)(u.xJW, {
            className: V.messageGroupingSpacing,
            children: [
                (0, r.jsx)(u.vwX, {
                    id: X,
                    tag: u.RB0.H5,
                    className: a()(V.title, G.marginBottom8),
                    children: U.NW.string(U.t.Q6lKkp)
                }),
                n &&
                    (0, r.jsx)(u.R94, {
                        type: u.geA.DESCRIPTION,
                        className: V.subtext,
                        children: U.NW.string(U.t.p7eUra)
                    }),
                (0, r.jsx)(u.iRW, {
                    className: a()({
                        [G.marginTop20]: !n,
                        [G.marginBottom4]: !n
                    }),
                    initialValue: t,
                    defaultValue: e ? M.c8 : M.pq,
                    markers: M.fP,
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
        let { messageDisplayCompact: e, theme: t, messageGroupSpacing: n, hideSimpleEmbedContent: i } = this.props,
            s = (0, d.wj)(t) ? this.darkMessages : this.lightMessages;
        return (0, r.jsx)(u.Rny, {
            children: (0, r.jsx)(u.Zbd, {
                className: a()(V.preview, G.marginBottom40, e ? V.compactPreview : void 0, 'group-spacing-'.concat(null != n ? n : e ? M.c8 : M.pq)),
                outline: !0,
                'aria-hidden': !0,
                children: s.map((t, n) =>
                    (0, r.jsx)(
                        T.Z,
                        {
                            author: (0, v.ZH)(t),
                            message: t,
                            compact: e,
                            isGroupStart: n % 2 == 0,
                            className: 0 === n ? V.firstMessage : void 0,
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
                  className: a()(G.marginTop8, G.marginBottom40),
                  title: (0, r.jsx)('div', {
                      className: V.themeTitle,
                      children: (0, r.jsx)('div', {
                          className: V.title,
                          children: U.NW.string(U.t.Ksh3io)
                      })
                  }),
                  children: (0, r.jsx)(u.R94, {
                      type: u.R94.Types.DEFAULT,
                      className: V.forcedColorsWarning,
                      children: (0, N.b)()
                          ? U.NW.format(U.t.Jae48P, {
                                onClick: () => {
                                    g.Z.open(L.oAB.ACCESSIBILITY);
                                }
                            })
                          : U.NW.string(U.t.AUMSZG)
                  })
              })
            : s
              ? (0, r.jsxs)(u.Kqy, {
                    gap: 24,
                    children: [
                        (0, r.jsx)(u.Text, {
                            variant: 'text-lg/medium',
                            className: V.title,
                            children: U.NW.string(U.t.Ksh3io)
                        }),
                        (0, r.jsx)(u.xJW, {
                            title: (0, r.jsx)($, {}),
                            children: (0, r.jsx)(w.i, {})
                        })
                    ]
                })
              : (0, r.jsxs)(u.xJW, {
                    className: G.marginTop8,
                    title: (0, r.jsx)($, {}),
                    children: [
                        (0, r.jsx)(w.i, {}),
                        (0, r.jsx)(y.F, {
                            setting: W.s6.APPEARANCE_ICON,
                            children: (0, r.jsx)(k.c, {})
                        }),
                        (0, r.jsx)(u.j7V, {
                            value: n && (0, d.ap)(e) && !t,
                            disabled: e !== L.BRd.LIGHT || t || null != i,
                            onChange: this.handleDarkSidebarChecked,
                            className: G.marginTop20,
                            children: U.NW.string(U.t.yF54Ki)
                        })
                    ]
                });
    }
    renderDisplayMode() {
        return (0, r.jsxs)(u.xJW, {
            title: U.NW.string(U.t.ZEoGMT),
            className: G.marginTop8,
            children: [
                (0, r.jsx)(u.FXm, {
                    options: [
                        {
                            name: U.NW.string(U.t.KZIadn),
                            value: Y.COZY
                        },
                        {
                            name: U.NW.string(U.t['6+nTjY']),
                            value: Y.COMPACT
                        }
                    ],
                    onChange: this.handleMessageDisplayModeChange,
                    value: this.props.messageDisplayCompact ? Y.COMPACT : Y.COZY
                }),
                (0, r.jsx)(u.j7V, {
                    value: this.props.messageDisplayCompact && this.props.displayCompactAvatars,
                    disabled: !this.props.messageDisplayCompact,
                    onChange: this.handleDisplayCompactAvatarsChanged,
                    className: G.marginTop20,
                    children: U.NW.string(U.t['7FVjFB'])
                })
            ]
        });
    }
    renderListSpacing() {
        let { isRefreshEnabled: e, density: t } = this.props;
        return e
            ? (0, r.jsxs)(y.F, {
                  setting: W.s6.APPEARANCE_LIST_SPACING,
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
                          className: G.marginTop8,
                          children: [
                              (0, r.jsx)(u.R94, {
                                  type: u.geA.DESCRIPTION,
                                  className: G.marginBottom8,
                                  children: 'Adjust the spacing and layout to balance readability and content based on your preferences.'
                              }),
                              (0, r.jsx)(u.FXm, {
                                  options: [
                                      {
                                          name: U.NW.string(U.t.T7G4Y2),
                                          value: c.Pi.COZY,
                                          desc: 'Comfortable spacing for easier readability'
                                      },
                                      {
                                          name: U.NW.string(U.t['7iegX1']),
                                          value: c.Pi.COMPACT,
                                          desc: 'Tighter layout to fit more content'
                                      }
                                  ],
                                  onChange: this.handleUIDensityChange,
                                  value: t
                              })
                          ]
                      }),
                      (0, r.jsx)(u.$i$, { className: G.marginTop8 })
                  ]
              })
            : null;
    }
    handleDarkSidebarChecked() {
        (0, f.lq)();
    }
    renderScalingAndSpacing() {
        return (0, r.jsxs)(r.Fragment, {
            children: [this.renderFontScaleSlider(), this.renderMessageGroupSpacingSlider(), this.renderZoomSlider(), (0, r.jsx)(u.$i$, { className: G.marginTop20 })]
        });
    }
    renderTimestampHourCycle() {
        let { timestampHourCycle: e, isRefreshEnabled: t } = this.props;
        return (0, r.jsx)(u.xJW, {
            title: t
                ? (0, r.jsx)(u.Text, {
                      variant: 'text-lg/medium',
                      className: a()(V.timeTitle, V.title),
                      children: U.NW.string(U.t.dyamEB)
                  })
                : U.NW.string(U.t.dyamEB),
            className: a()({ [G.marginTop20]: !t }),
            children: (0, r.jsx)(u.FXm, {
                options: [
                    {
                        name: U.NW.string(U.t.FMWYvb),
                        value: c.hg.AUTO
                    },
                    {
                        name: U.NW.string(U.t.p8NOws),
                        value: c.hg.H12
                    },
                    {
                        name: U.NW.string(U.t['+o/sOj']),
                        value: c.hg.H23
                    }
                ],
                onChange: (e) => Z.hg.updateSetting(e.value),
                value: e
            })
        });
    }
    renderVisualRefreshOverride() {
        let { isRefreshEnabled: e, isRefreshExperimentEnabled: t, canOptOutOfRefresh: n } = this.props;
        return t && n
            ? (0, r.jsx)(u.xJW, {
                  className: G.marginTop8,
                  children: (0, r.jsx)(u.j7V, {
                      hideBorder: !0,
                      value: e,
                      onChange: this.handleDesktopRefreshEnabledChanged,
                      className: G.marginTop20,
                      children: 'Enable Desktop Refresh'
                  })
              })
            : null;
    }
    render() {
        return (0, r.jsxs)(u.hjN, {
            tag: u.RB0.H1,
            title: U.NW.string(U.t['iHH+k5']),
            children: [
                this.renderVisualRefreshOverride(),
                (0, r.jsxs)(y.F, {
                    setting: W.s6.APPEARANCE_THEME,
                    children: [this.renderPreview(), this.renderTheme()]
                }),
                (0, r.jsx)(y.F, {
                    setting: W.s6.APPEARANCE_MESSAGE_DISPLAY_COMPACT,
                    children: this.renderDisplayMode()
                }),
                this.renderListSpacing(),
                (0, r.jsx)(y.F, {
                    setting: W.s6.APPEARANCE_SCALING_SPACING,
                    children: this.renderScalingAndSpacing()
                }),
                (0, r.jsxs)(y.F, {
                    setting: W.s6.APPEARANCE_TIMESTAMP_HOUR_CYCLE,
                    children: [this.renderTimestampHourCycle(), (0, r.jsx)(u.$i$, { className: G.marginTop8 })]
                }),
                (0, r.jsx)(u.Text, {
                    variant: 'text-md/normal',
                    className: G.marginTop20,
                    children: U.NW.format(U.t['5LEQdX'], {
                        onAccessibilityClick() {
                            g.Z.open(L.oAB.ACCESSIBILITY);
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
        return U.NW.formatToPlainString(U.t['0hpvOT'], { value: e });
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
                Z.jU.updateSetting(t === Y.COMPACT), (0, f.ZZ)();
            }),
            F(this, 'handleUIDensityChange', (e) => {
                let { value: t } = e;
                t !== c.Pi.UNSET_UI_DENSITY && Z.YC.updateSetting(t);
            });
    }
}
class et extends ee {
    render() {
        let { density: e } = this.props,
            t = (0, r.jsxs)(y.F, {
                setting: W.s6.APPEARANCE_THEME,
                children: [this.renderPreview(), this.renderTheme()]
            }),
            n = (0, r.jsx)(y.F, {
                setting: W.s6.APPEARANCE_ICON,
                children: (0, r.jsx)(k.c, {})
            }),
            i = [
                {
                    name: U.NW.string(U.t['7iegX1']),
                    value: c.Pi.COMPACT
                },
                {
                    name: U.NW.string(U.t.bBvAEB),
                    value: c.Pi.DEFAULT
                },
                {
                    name: U.NW.string(U.t['4cuYHx']),
                    value: c.Pi.COZY
                }
            ],
            s = (0, r.jsxs)(y.F, {
                setting: W.s6.APPEARANCE_LIST_SPACING,
                children: [
                    (0, r.jsxs)(u.xJW, {
                        title: (0, r.jsx)(u.Text, {
                            variant: 'text-lg/medium',
                            className: V.title,
                            children: U.NW.string(U.t['C/5V0N'])
                        }),
                        children: [
                            (0, r.jsx)(u.R94, {
                                type: u.geA.DESCRIPTION,
                                className: V.subtext,
                                children: U.NW.string(U.t.QLZhYm)
                            }),
                            (0, r.jsx)(u.FXm, {
                                options: i,
                                onChange: this.handleUIDensityChange,
                                value: e
                            })
                        ]
                    }),
                    (0, r.jsx)(u.$i$, { className: V.divider })
                ]
            }),
            a = (0, r.jsxs)(y.F, {
                setting: W.s6.APPEARANCE_MESSAGE_DISPLAY_COMPACT,
                children: [
                    (0, r.jsxs)(u.Kqy, {
                        gap: 8,
                        padding: { bottom: 8 },
                        children: [
                            (0, r.jsx)(u.Text, {
                                variant: 'text-lg/medium',
                                className: V.title,
                                children: U.NW.string(U.t['2ed/sL'])
                            }),
                            (0, r.jsx)(u.Text, {
                                variant: 'text-sm/normal',
                                className: V.subtext,
                                children: U.NW.string(U.t.u9N6Qk)
                            })
                        ]
                    }),
                    (0, r.jsxs)(u.xJW, {
                        titleClassName: V.title,
                        title: U.NW.string(U.t.nKRoPj),
                        children: [
                            (0, r.jsx)(u.R94, {
                                type: u.geA.DESCRIPTION,
                                className: V.subtext,
                                children: U.NW.string(U.t.QntEEB)
                            }),
                            (0, r.jsx)(u.FXm, {
                                options: [
                                    {
                                        name: U.NW.string(U.t.Jqj4cX),
                                        value: Y.COZY
                                    },
                                    {
                                        name: U.NW.string(U.t['1JNcPT']),
                                        value: Y.COMPACT
                                    }
                                ],
                                onChange: this.handleMessageDisplayModeChange,
                                value: this.props.messageDisplayCompact ? Y.COMPACT : Y.COZY
                            }),
                            this.props.messageDisplayCompact &&
                                (0, r.jsx)(u.j7V, {
                                    className: V.compactModeToggle,
                                    hideBorder: !0,
                                    value: !this.props.displayCompactAvatars,
                                    onChange: (e) => this.handleDisplayCompactAvatarsChanged(!e),
                                    children: (0, r.jsx)(u.Text, {
                                        variant: 'text-md/medium',
                                        children: U.NW.string(U.t['//vhWl'])
                                    })
                                })
                        ]
                    }),
                    this.renderMessageGroupSpacingSlider(),
                    (0, r.jsx)(u.$i$, { className: V.divider })
                ]
            }),
            l = (0, r.jsxs)(y.F, {
                setting: W.s6.APPEARANCE_SCALING_SPACING,
                children: [
                    (0, r.jsx)(u.Text, {
                        variant: 'text-lg/medium',
                        className: V.title,
                        children: U.NW.string(U.t['0Yh+ZW'])
                    }),
                    this.renderFontScaleSlider(),
                    this.renderZoomSlider(),
                    (0, r.jsx)(u.$i$, { className: V.divider })
                ]
            }),
            o = (0, r.jsx)(y.F, {
                setting: W.s6.APPEARANCE_TIMESTAMP_HOUR_CYCLE,
                children: this.renderTimestampHourCycle()
            }),
            d = (0, r.jsx)(u.Text, {
                variant: 'text-md/normal',
                className: V.a11yCallout,
                children: U.NW.format(U.t['5LEQdX'], {
                    onAccessibilityClick() {
                        g.Z.open(L.oAB.ACCESSIBILITY);
                    }
                })
            });
        return (0, r.jsxs)(u.hjN, {
            tag: u.RB0.H1,
            title: U.NW.string(U.t['iHH+k5']),
            children: [this.renderVisualRefreshOverride(), t, n, s, a, l, o, d]
        });
    }
}
let en = (e) => {
    (0, O.un)(e) ||
        (0, O.EW)(e, {
            dismissAction: B.L.AUTO,
            forceTrack: !0
        });
};
function er() {
    let e = Z.jU.useSetting(),
        t = Z.RS.useSetting(),
        n = Z.NA.useSetting(),
        i = Z.L1.useSetting(),
        s = Z.hg.useSetting(),
        a = Z.YC.useSetting();
    (0, p.ZP)(() => {
        en(o.z.CLIENT_THEMES_SETTINGS_BADGE), en(o.z.DEKSTOP_CUSTOM_APP_ICON_BADGE), en(o.z.DEKSTOP_CUSTOM_APP_ICON_COACHMARK);
    });
    let c = (0, l.cj)([R.Z, D.ZP, b.Z, A.default, x.Z], () => {
            var e, t;
            return {
                theme: R.Z.theme,
                useForcedColors: b.Z.useForcedColors,
                useSystemTheme: D.ZP.useSystemTheme,
                darkSidebar: R.Z.darkSidebar,
                fontSize: b.Z.fontSize,
                zoom: b.Z.zoom,
                messageGroupSpacing: b.Z.messageGroupSpacing,
                displayCompactAvatars: D.ZP.displayCompactAvatars,
                isStaff: null != (t = null == (e = A.default.getCurrentUser()) ? void 0 : e.isStaff) && t,
                gradientPreset: x.Z.gradientPreset
            };
        }),
        d = (0, j.nm)('UserSettingsAppearance'),
        u = (0, j.o9)('UserSettingsAppearance'),
        m = (0, j.Q3)('UserSettingsAppearance');
    return (0, r.jsx)(
        m ? et : ee,
        H(
            {
                messageDisplayCompact: e,
                hideSimpleEmbedContent: t && n,
                clientTheme: i,
                timestampHourCycle: s,
                isRefreshEnabled: m,
                isRefreshExperimentEnabled: u,
                density: a,
                canOptOutOfRefresh: d
            },
            c
        )
    );
}
