n.d(t, { Z: () => ei }), n(388685);
var i = n(200651),
    r = n(192379),
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
    _ = n(627845),
    x = n(514361),
    E = n(600164),
    j = n(313201),
    C = n(540059),
    O = n(605236),
    S = n(786761),
    v = n(3148),
    T = n(739566),
    I = n(753206),
    N = n(311476),
    y = n(921801),
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
        'function' == typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            i.forEach(function (t) {
                H(e, t, n[t]);
            });
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
    K = (0, j.hQ)(),
    q = (0, j.hQ)(),
    X = (0, j.hQ)(),
    Q = '1337',
    J = (e) => {
        let t = 0;
        return [
            (0, S.e5)(
                W(
                    z(
                        {},
                        (0, v.ZP)({
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
            (0, S.e5)(
                W(
                    z(
                        {},
                        (0, v.ZP)({
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
            (0, S.e5)(
                W(
                    z(
                        {},
                        (0, v.ZP)({
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
            (0, S.e5)(
                W(
                    z(
                        {},
                        (0, v.ZP)({
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
            (0, S.e5)(
                W(
                    z(
                        {},
                        (0, v.ZP)({
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
    $ = () => {
        let e = (0, C.Q3)('ThemeTitle'),
            t = (0, a.e7)([x.Z], () => x.Z.isPreview),
            { enabled: n } = N.Z.useExperiment(
                { location: 'GradientSelectorsTitle' },
                {
                    autoTrackExposure: !1,
                    disable: !t
                }
            );
        return n
            ? null
            : (0, i.jsxs)('div', {
                  className: G.themeTitle,
                  children: [
                      (0, i.jsxs)('div', {
                          className: G.themeTitleContainer,
                          children: [
                              (0, i.jsx)('div', {
                                  className: G.title,
                                  children: e ? V.intl.string(V.t['0EzVsr']) : V.intl.string(V.t.Ksh3io)
                              }),
                              e &&
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
    };
class ee extends r.Component {
    renderZoomSlider() {
        let { isRefreshEnabled: e } = this.props;
        return P.isPlatformEmbedded
            ? (0, i.jsxs)(u.xJW, {
                  className: F.marginTop20,
                  children: [
                      (0, i.jsx)(u.vwX, {
                          id: K,
                          tag: u.RB0.H5,
                          className: l()(G.title, F.marginBottom8),
                          children: V.intl.string(V.t.i19n5O)
                      }),
                      e &&
                          (0, i.jsx)(u.R94, {
                              type: u.geA.DESCRIPTION,
                              className: G.subtext,
                              children: V.intl.string(V.t.ip0uSU)
                          }),
                      (0, i.jsx)(u.iRW, {
                          className: l()(F.marginTop20, F.marginBottom4),
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
        let { isRefreshEnabled: e } = this.props;
        return (0, i.jsxs)(u.xJW, {
            className: F.marginTop20,
            children: [
                (0, i.jsx)(u.vwX, {
                    id: q,
                    tag: u.RB0.H5,
                    className: l()(G.title, F.marginBottom8),
                    children: V.intl.string(V.t.qPOqoK)
                }),
                e &&
                    (0, i.jsx)(u.R94, {
                        type: u.geA.DESCRIPTION,
                        className: G.subtext,
                        children: 'Increase or decrease the size of the chat font'
                    }),
                (0, i.jsx)(E.Z, {
                    align: E.Z.Align.CENTER,
                    children: (0, i.jsx)(u.iRW, {
                        className: l()({
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
                        'aria-labelledby': q
                    })
                })
            ]
        });
    }
    renderMessageGroupSpacingSlider() {
        let { messageDisplayCompact: e, messageGroupSpacing: t, isRefreshEnabled: n } = this.props;
        return (0, i.jsxs)(u.xJW, {
            className: G.messageGroupingSpacing,
            children: [
                (0, i.jsx)(u.vwX, {
                    id: X,
                    tag: u.RB0.H5,
                    className: l()(G.title, F.marginBottom8),
                    children: V.intl.string(V.t.Q6lKkp)
                }),
                n &&
                    (0, i.jsx)(u.R94, {
                        type: u.geA.DESCRIPTION,
                        className: G.subtext,
                        children: V.intl.string(V.t.p7eUra)
                    }),
                (0, i.jsx)(u.iRW, {
                    className: l()({
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
                className: l()(G.preview, F.marginBottom40, e ? G.compactPreview : void 0, 'group-spacing-'.concat(null != n ? n : e ? U.c8 : U.pq)),
                outline: !0,
                'aria-hidden': !0,
                children: s.map((t, n) =>
                    (0, i.jsx)(
                        I.Z,
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
        let { theme: e, useForcedColors: t, darkSidebar: n, gradientPreset: r, isRefreshEnabled: s } = this.props;
        return t
            ? (0, i.jsx)(u.xJW, {
                  className: l()(F.marginTop8, F.marginBottom40),
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
                      children: (0, _.b)()
                          ? V.intl.format(V.t.Jae48P, {
                                onClick: () => {
                                    p.Z.open(B.oAB.ACCESSIBILITY);
                                }
                            })
                          : V.intl.string(V.t.AUMSZG)
                  })
              })
            : s
              ? (0, i.jsxs)(u.Kqy, {
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
                })
              : (0, i.jsxs)(u.xJW, {
                    className: F.marginTop8,
                    title: (0, i.jsx)($, {}),
                    children: [
                        (0, i.jsx)(w.i, {}),
                        (0, i.jsx)(y.F, {
                            setting: L.s6.APPEARANCE_ICON,
                            children: (0, i.jsx)(k.c, {})
                        }),
                        (0, i.jsx)(u.j7V, {
                            value: n && (0, d.ap)(e) && !t,
                            disabled: e !== B.BRd.LIGHT || t || null != r,
                            onChange: this.handleDarkSidebarChecked,
                            className: F.marginTop20,
                            children: V.intl.string(V.t.yF54Ki)
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
        let { isRefreshEnabled: e, density: t } = this.props;
        return e
            ? (0, i.jsxs)(y.F, {
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
                                  value: t
                              })
                          ]
                      }),
                      (0, i.jsx)(u.$i$, { className: F.marginTop8 })
                  ]
              })
            : null;
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
        let { timestampHourCycle: e, isRefreshEnabled: t } = this.props;
        return (0, i.jsx)(u.xJW, {
            title: t
                ? (0, i.jsx)(u.Text, {
                      variant: 'text-lg/medium',
                      className: l()(G.timeTitle, G.title),
                      children: V.intl.string(V.t.dyamEB)
                  })
                : V.intl.string(V.t.dyamEB),
            className: l()({ [F.marginTop20]: !t }),
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
                (0, i.jsxs)(y.F, {
                    setting: L.s6.APPEARANCE_THEME,
                    children: [this.renderPreview(), this.renderTheme()]
                }),
                (0, i.jsx)(y.F, {
                    setting: L.s6.APPEARANCE_MESSAGE_DISPLAY_COMPACT,
                    children: this.renderDisplayMode()
                }),
                this.renderListSpacing(),
                (0, i.jsx)(y.F, {
                    setting: L.s6.APPEARANCE_SCALING_SPACING,
                    children: this.renderScalingAndSpacing()
                }),
                (0, i.jsxs)(y.F, {
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
        super(...e),
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
                Z.jU.updateSetting(t === Y.COMPACT), (0, f.ZZ)();
            }),
            H(this, 'handleUIDensityChange', (e) => {
                let { value: t } = e;
                t !== c.Pi.UNSET_UI_DENSITY && Z.YC.updateSetting(t);
            });
    }
}
class et extends ee {
    render() {
        let { density: e } = this.props,
            t = (0, i.jsxs)(y.F, {
                setting: L.s6.APPEARANCE_THEME,
                children: [this.renderPreview(), this.renderTheme()]
            }),
            n = (0, i.jsx)(y.F, {
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
            s = (0, i.jsxs)(y.F, {
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
            l = (0, i.jsxs)(y.F, {
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
            a = (0, i.jsxs)(y.F, {
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
            o = (0, i.jsx)(y.F, {
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
            children: [t, n, s, l, a, o, d]
        });
    }
}
let en = (e) => {
    (0, O.un)(e) ||
        (0, O.EW)(e, {
            dismissAction: M.L.AUTO,
            forceTrack: !0
        });
};
function ei() {
    let e = Z.jU.useSetting(),
        t = Z.RS.useSetting(),
        n = Z.NA.useSetting(),
        r = Z.L1.useSetting(),
        s = Z.hg.useSetting(),
        l = Z.YC.useSetting();
    (0, g.ZP)(() => {
        en(o.z.CLIENT_THEMES_SETTINGS_BADGE), en(o.z.DEKSTOP_CUSTOM_APP_ICON_BADGE), en(o.z.DEKSTOP_CUSTOM_APP_ICON_COACHMARK);
    });
    let c = (0, a.cj)([R.Z, D.ZP, b.Z, A.default, x.Z], () => {
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
        d = (0, C.o9)('UserSettingsAppearance'),
        u = (0, C.Q3)('UserSettingsAppearance');
    return (0, i.jsx)(
        u ? et : ee,
        z(
            {
                messageDisplayCompact: e,
                hideSimpleEmbedContent: t && n,
                clientTheme: r,
                timestampHourCycle: s,
                isRefreshEnabled: u,
                isRefreshExperimentEnabled: d,
                density: l
            },
            c
        )
    );
}
