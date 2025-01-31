n.d(t, { Z: () => et }), n(47120);
var i = n(200651),
    s = n(192379),
    r = n(120356),
    l = n.n(r),
    a = n(442837),
    o = n(704215),
    c = n(524437),
    d = n(780384),
    u = n(481060),
    m = n(153867),
    h = n(230711),
    g = n(493773),
    _ = n(714338),
    x = n(857595),
    p = n(607070),
    E = n(627845),
    C = n(514361),
    f = n(600164),
    T = n(313201),
    N = n(540059),
    I = n(605236),
    S = n(786761),
    b = n(3148),
    v = n(739566),
    j = n(753206),
    A = n(311476),
    O = n(921801),
    R = n(594174),
    P = n(358085),
    D = n(210887),
    y = n(740492),
    Z = n(695346),
    L = n(329013),
    k = n(333859),
    B = n(726985),
    M = n(981631),
    w = n(921944),
    V = n(959517),
    U = n(388032),
    G = n(201032),
    F = n(232186);
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
let z = {
        COZY: 'cozy',
        COMPACT: 'compact'
    },
    Y = (0, T.hQ)(),
    W = (0, T.hQ)(),
    K = (0, T.hQ)(),
    X = '1337',
    q = (e) => {
        let t = 0;
        return [
            (0, S.e5)({
                ...(0, b.ZP)({
                    channelId: X,
                    content: U.intl.string(U.t.oZxkEh)
                }),
                state: M.yb.SENT,
                id: ''.concat(t++)
            }),
            (0, S.e5)({
                ...(0, b.ZP)({
                    channelId: X,
                    content: (0, d.wj)(e) ? U.intl.string(U.t['WGb/v7']) : U.intl.string(U.t['62m4m5'])
                }),
                state: M.yb.SENT,
                id: ''.concat(t++)
            }),
            (0, S.e5)({
                ...(0, b.ZP)({
                    channelId: X,
                    content: U.intl.string(U.t.a0Byo6)
                }),
                state: M.yb.SENT,
                id: ''.concat(t++)
            }),
            (0, S.e5)({
                ...(0, b.ZP)({
                    channelId: X,
                    content: U.intl.string(U.t.bmwEWF)
                }),
                state: M.yb.SENT,
                id: ''.concat(t++)
            }),
            (0, S.e5)({
                ...(0, b.ZP)({
                    channelId: X,
                    content: U.intl.string(U.t.hK9QW1)
                }),
                state: M.yb.SENT,
                id: ''.concat(t)
            })
        ];
    },
    J = () => {
        let e = (0, N.Q3)('ThemeTitle'),
            t = (0, a.e7)([C.Z], () => C.Z.isPreview),
            { enabled: n } = A.Z.useExperiment(
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
                                  children: e ? U.intl.string(U.t['0EzVsr']) : U.intl.string(U.t.Ksh3io)
                              }),
                              e &&
                                  (0, i.jsx)(u.R94, {
                                      type: u.R94.Types.DESCRIPTION,
                                      className: G.subtext,
                                      children: U.intl.string(U.t.PV3dGR)
                                  })
                          ]
                      }),
                      (0, i.jsx)(L.g, {})
                  ]
              });
    };
class Q extends s.Component {
    renderZoomSlider() {
        let { isRefreshEnabled: e } = this.props;
        return P.isPlatformEmbedded
            ? (0, i.jsxs)(u.xJW, {
                  className: F.marginTop20,
                  children: [
                      (0, i.jsx)(u.vwX, {
                          id: Y,
                          tag: u.RB0.H5,
                          className: l()(G.title, F.marginBottom8),
                          children: U.intl.string(U.t.i19n5O)
                      }),
                      e &&
                          (0, i.jsx)(u.R94, {
                              type: u.geA.DESCRIPTION,
                              className: G.subtext,
                              children: U.intl.string(U.t.ip0uSU)
                          }),
                      (0, i.jsx)(u.iRW, {
                          className: l()(F.marginTop20, F.marginBottom4),
                          initialValue: this.props.zoom,
                          defaultValue: M.yqN.ZOOM_DEFAULT,
                          markers: M.yqN.ZOOM_SCALES,
                          stickToMarkers: !0,
                          onValueChange: this.handleZoomChange,
                          onValueRender: this.handleSliderRender,
                          'aria-labelledby': Y
                      }),
                      (0, i.jsx)(u.R94, {
                          type: u.R94.Types.DESCRIPTION,
                          children: U.intl.format(U.t.OMkSUl, { modKey: _.Z.modKey })
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
                    id: W,
                    tag: u.RB0.H5,
                    className: l()(G.title, F.marginBottom8),
                    children: U.intl.string(U.t.qPOqoK)
                }),
                e &&
                    (0, i.jsx)(u.R94, {
                        type: u.geA.DESCRIPTION,
                        className: G.subtext,
                        children: 'Increase or decrease the size of the chat font'
                    }),
                (0, i.jsx)(f.Z, {
                    align: f.Z.Align.CENTER,
                    children: (0, i.jsx)(u.iRW, {
                        className: l()({
                            [F.marginTop20]: !e,
                            [F.marginBottom4]: !e
                        }),
                        initialValue: this.props.fontSize,
                        defaultValue: M.yqN.FONT_SIZE_DEFAULT,
                        markers: M.yqN.FONT_SIZES,
                        stickToMarkers: !0,
                        onValueChange: this.handleFontSizeChange,
                        onValueRender: this.handleSliderRenderPX,
                        onMarkerRender: this.handleSliderRenderPX,
                        getAriaValueText: this.handleSliderValueText,
                        'aria-labelledby': W
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
                    id: K,
                    tag: u.RB0.H5,
                    className: l()(G.title, F.marginBottom8),
                    children: U.intl.string(U.t.Q6lKkp)
                }),
                n &&
                    (0, i.jsx)(u.R94, {
                        type: u.geA.DESCRIPTION,
                        className: G.subtext,
                        children: U.intl.string(U.t.p7eUra)
                    }),
                (0, i.jsx)(u.iRW, {
                    className: l()({
                        [F.marginTop20]: !n,
                        [F.marginBottom4]: !n
                    }),
                    initialValue: t,
                    defaultValue: e ? V.c8 : V.pq,
                    markers: V.fP,
                    stickToMarkers: !0,
                    onValueChange: this.handleMessageSpacingChange,
                    onValueRender: this.handleSliderRenderPX,
                    onMarkerRender: this.handleSliderRenderPX,
                    getAriaValueText: this.handleSliderValueText,
                    'aria-labelledby': K
                })
            ]
        });
    }
    renderPreview() {
        let { messageDisplayCompact: e, theme: t, messageGroupSpacing: n, hideSimpleEmbedContent: s } = this.props,
            r = (0, d.wj)(t) ? this.darkMessages : this.lightMessages;
        return (0, i.jsx)(u.Rny, {
            children: (0, i.jsx)(u.Zbd, {
                className: l()(G.preview, F.marginBottom40, e ? G.compactPreview : void 0, 'group-spacing-'.concat(null != n ? n : e ? V.c8 : V.pq)),
                outline: !0,
                'aria-hidden': !0,
                children: r.map((t, n) =>
                    (0, i.jsx)(
                        j.Z,
                        {
                            author: (0, v.ZH)(t),
                            message: t,
                            compact: e,
                            isGroupStart: n % 2 == 0,
                            className: 0 === n ? G.firstMessage : void 0,
                            hideSimpleEmbedContent: s
                        },
                        t.id
                    )
                )
            })
        });
    }
    renderTheme() {
        let { theme: e, useForcedColors: t, darkSidebar: n, gradientPreset: s, isRefreshEnabled: r } = this.props;
        return t
            ? (0, i.jsx)(u.xJW, {
                  className: l()(F.marginTop8, F.marginBottom40),
                  title: (0, i.jsx)('div', {
                      className: G.themeTitle,
                      children: (0, i.jsx)('div', {
                          className: G.title,
                          children: U.intl.string(U.t.Ksh3io)
                      })
                  }),
                  children: (0, i.jsx)(u.R94, {
                      type: u.R94.Types.DEFAULT,
                      className: G.forcedColorsWarning,
                      children: (0, E.b)()
                          ? U.intl.format(U.t.Jae48P, {
                                onClick: () => {
                                    h.Z.open(M.oAB.ACCESSIBILITY);
                                }
                            })
                          : U.intl.string(U.t.AUMSZG)
                  })
              })
            : r
              ? (0, i.jsx)(i.Fragment, {
                    children: (0, i.jsxs)(u.Kqy, {
                        gap: 24,
                        children: [
                            (0, i.jsx)(u.Text, {
                                variant: 'text-lg/medium',
                                className: G.title,
                                children: U.intl.string(U.t.Ksh3io)
                            }),
                            (0, i.jsx)(u.xJW, {
                                title: (0, i.jsx)(J, {}),
                                children: (0, i.jsx)(L.i, {})
                            })
                        ]
                    })
                })
              : (0, i.jsxs)(u.xJW, {
                    className: F.marginTop8,
                    title: (0, i.jsx)(J, {}),
                    children: [
                        (0, i.jsx)(L.i, {}),
                        (0, i.jsx)(O.F, {
                            setting: B.s6.APPEARANCE_ICON,
                            children: (0, i.jsx)(k.c, {})
                        }),
                        (0, i.jsx)(u.j7V, {
                            value: n && (0, d.ap)(e) && !t,
                            disabled: e !== M.BRd.LIGHT || t || null != s,
                            onChange: this.handleDarkSidebarChecked,
                            className: F.marginTop20,
                            children: U.intl.string(U.t.yF54Ki)
                        })
                    ]
                });
    }
    renderDisplayMode() {
        return (0, i.jsxs)(u.xJW, {
            title: U.intl.string(U.t.ZEoGMT),
            className: F.marginTop8,
            children: [
                (0, i.jsx)(u.FXm, {
                    options: [
                        {
                            name: U.intl.string(U.t.KZIadn),
                            value: z.COZY
                        },
                        {
                            name: U.intl.string(U.t['6+nTjY']),
                            value: z.COMPACT
                        }
                    ],
                    onChange: this.handleMessageDisplayModeChange,
                    value: this.props.messageDisplayCompact ? z.COMPACT : z.COZY
                }),
                (0, i.jsx)(u.j7V, {
                    value: this.props.messageDisplayCompact && this.props.displayCompactAvatars,
                    disabled: !this.props.messageDisplayCompact,
                    onChange: this.handleDisplayCompactAvatarsChanged,
                    className: F.marginTop20,
                    children: U.intl.string(U.t['7FVjFB'])
                })
            ]
        });
    }
    renderListSpacing() {
        let { isRefreshEnabled: e, density: t } = this.props;
        return e
            ? (0, i.jsxs)(O.F, {
                  setting: B.s6.APPEARANCE_LIST_SPACING,
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
        (0, x.lq)();
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
                      children: U.intl.string(U.t.dyamEB)
                  })
                : U.intl.string(U.t.dyamEB),
            className: l()({ [F.marginTop20]: !t }),
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
                onChange: (e) => Z.hg.updateSetting(e.value),
                value: e
            })
        });
    }
    renderVisualRefreshOverride() {
        let { isRefreshEnabled: e, isRefreshExperimentEnabled: t } = this.props;
        return t
            ? (0, i.jsx)(u.xJW, {
                  className: F.marginTop8,
                  children: (0, i.jsx)(u.j7V, {
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
        return (0, i.jsxs)(u.hjN, {
            tag: u.RB0.H1,
            title: U.intl.string(U.t['iHH+k5']),
            children: [
                this.renderVisualRefreshOverride(),
                (0, i.jsxs)(O.F, {
                    setting: B.s6.APPEARANCE_THEME,
                    children: [this.renderPreview(), this.renderTheme()]
                }),
                (0, i.jsx)(O.F, {
                    setting: B.s6.APPEARANCE_MESSAGE_DISPLAY_COMPACT,
                    children: this.renderDisplayMode()
                }),
                this.renderListSpacing(),
                (0, i.jsx)(O.F, {
                    setting: B.s6.APPEARANCE_SCALING_SPACING,
                    children: this.renderScalingAndSpacing()
                }),
                (0, i.jsxs)(O.F, {
                    setting: B.s6.APPEARANCE_TIMESTAMP_HOUR_CYCLE,
                    children: [this.renderTimestampHourCycle(), (0, i.jsx)(u.$i$, { className: F.marginTop8 })]
                }),
                (0, i.jsx)(u.Text, {
                    variant: 'text-md/normal',
                    className: F.marginTop20,
                    children: U.intl.format(U.t['5LEQdX'], {
                        onAccessibilityClick() {
                            h.Z.open(M.oAB.ACCESSIBILITY);
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
        (0, x.oL)(e);
    }
    handleMessageSpacingChange(e) {
        switch (e) {
            case 0:
            case 4:
            case 8:
            case 16:
            case 24:
                (0, x.ZZ)(e);
        }
    }
    handleZoomChange(e) {
        (0, x.cq)(e);
    }
    constructor(...e) {
        super(...e),
            H(this, 'darkMessages', q(M.BRd.DARK)),
            H(this, 'lightMessages', q(M.BRd.LIGHT)),
            H(this, 'handleDisplayCompactAvatarsChanged', (e) => {
                m.ZP.updatedUnsyncedSettings({ displayCompactAvatars: e });
            }),
            H(this, 'handleDesktopRefreshEnabledChanged', (e) => {
                m.ZP.updatedUnsyncedSettings({ disableVisualRefresh: !e });
            }),
            H(this, 'handleMessageDisplayModeChange', (e) => {
                let { value: t } = e;
                Z.jU.updateSetting(t === z.COMPACT), (0, x.ZZ)();
            }),
            H(this, 'handleUIDensityChange', (e) => {
                let { value: t } = e;
                t !== c.Pi.UNSET_UI_DENSITY && Z.YC.updateSetting(t);
            });
    }
}
class $ extends Q {
    render() {
        let { density: e } = this.props,
            t = (0, i.jsxs)(O.F, {
                setting: B.s6.APPEARANCE_THEME,
                children: [this.renderPreview(), this.renderTheme()]
            }),
            n = (0, i.jsx)(O.F, {
                setting: B.s6.APPEARANCE_ICON,
                children: (0, i.jsx)(k.c, {})
            }),
            s = (0, i.jsxs)(O.F, {
                setting: B.s6.APPEARANCE_LIST_SPACING,
                children: [
                    (0, i.jsxs)(u.xJW, {
                        title: (0, i.jsx)(u.Text, {
                            variant: 'text-lg/medium',
                            className: G.title,
                            children: U.intl.string(U.t['C/5V0N'])
                        }),
                        children: [
                            (0, i.jsx)(u.R94, {
                                type: u.geA.DESCRIPTION,
                                className: G.subtext,
                                children: U.intl.string(U.t.QLZhYm)
                            }),
                            (0, i.jsx)(u.FXm, {
                                options: [
                                    {
                                        name: U.intl.string(U.t['4cuYHx']),
                                        value: c.Pi.COZY
                                    },
                                    {
                                        name: U.intl.string(U.t['7iegX1']),
                                        value: c.Pi.COMPACT
                                    }
                                ],
                                onChange: this.handleUIDensityChange,
                                value: e
                            })
                        ]
                    }),
                    (0, i.jsx)(u.$i$, { className: G.divider })
                ]
            }),
            r = (0, i.jsxs)(O.F, {
                setting: B.s6.APPEARANCE_MESSAGE_DISPLAY_COMPACT,
                children: [
                    (0, i.jsxs)(u.Kqy, {
                        gap: 8,
                        padding: { bottom: 8 },
                        children: [
                            (0, i.jsx)(u.Text, {
                                variant: 'text-lg/medium',
                                className: G.title,
                                children: U.intl.string(U.t['2ed/sL'])
                            }),
                            (0, i.jsx)(u.Text, {
                                variant: 'text-sm/normal',
                                className: G.subtext,
                                children: U.intl.string(U.t.u9N6Qk)
                            })
                        ]
                    }),
                    (0, i.jsxs)(u.xJW, {
                        titleClassName: G.title,
                        title: U.intl.string(U.t.nKRoPj),
                        children: [
                            (0, i.jsx)(u.R94, {
                                type: u.geA.DESCRIPTION,
                                className: G.subtext,
                                children: U.intl.string(U.t.QntEEB)
                            }),
                            (0, i.jsx)(u.FXm, {
                                options: [
                                    {
                                        name: U.intl.string(U.t.Jqj4cX),
                                        value: z.COZY
                                    },
                                    {
                                        name: U.intl.string(U.t['1JNcPT']),
                                        value: z.COMPACT
                                    }
                                ],
                                onChange: this.handleMessageDisplayModeChange,
                                value: this.props.messageDisplayCompact ? z.COMPACT : z.COZY
                            }),
                            this.props.messageDisplayCompact &&
                                (0, i.jsx)(u.j7V, {
                                    className: G.compactModeToggle,
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
                    (0, i.jsx)(u.$i$, { className: G.divider })
                ]
            }),
            l = (0, i.jsxs)(O.F, {
                setting: B.s6.APPEARANCE_SCALING_SPACING,
                children: [
                    (0, i.jsx)(u.Text, {
                        variant: 'text-lg/medium',
                        className: G.title,
                        children: U.intl.string(U.t['0Yh+ZW'])
                    }),
                    this.renderFontScaleSlider(),
                    this.renderZoomSlider(),
                    (0, i.jsx)(u.$i$, { className: G.divider })
                ]
            }),
            a = (0, i.jsx)(O.F, {
                setting: B.s6.APPEARANCE_TIMESTAMP_HOUR_CYCLE,
                children: this.renderTimestampHourCycle()
            }),
            o = (0, i.jsx)(u.Text, {
                variant: 'text-md/normal',
                className: G.a11yCallout,
                children: U.intl.format(U.t['5LEQdX'], {
                    onAccessibilityClick() {
                        h.Z.open(M.oAB.ACCESSIBILITY);
                    }
                })
            });
        return (0, i.jsxs)(u.hjN, {
            tag: u.RB0.H1,
            title: U.intl.string(U.t['iHH+k5']),
            children: [this.renderVisualRefreshOverride(), t, n, s, r, l, a, o]
        });
    }
}
let ee = (e) => {
    (0, I.un)(e) ||
        (0, I.EW)(e, {
            dismissAction: w.L.AUTO,
            forceTrack: !0
        });
};
function et() {
    let e = Z.jU.useSetting(),
        t = Z.RS.useSetting(),
        n = Z.NA.useSetting(),
        s = Z.L1.useSetting(),
        r = Z.hg.useSetting(),
        l = Z.YC.useSetting();
    (0, g.Z)(() => {
        ee(o.z.CLIENT_THEMES_SETTINGS_BADGE), ee(o.z.DEKSTOP_CUSTOM_APP_ICON_BADGE), ee(o.z.DEKSTOP_CUSTOM_APP_ICON_COACHMARK);
    });
    let c = (0, a.cj)([D.Z, y.ZP, p.Z, R.default, C.Z], () => {
            var e, t;
            return {
                theme: D.Z.theme,
                useForcedColors: p.Z.useForcedColors,
                useSystemTheme: y.ZP.useSystemTheme,
                darkSidebar: D.Z.darkSidebar,
                fontSize: p.Z.fontSize,
                zoom: p.Z.zoom,
                messageGroupSpacing: p.Z.messageGroupSpacing,
                displayCompactAvatars: y.ZP.displayCompactAvatars,
                isStaff: null !== (t = null === (e = R.default.getCurrentUser()) || void 0 === e ? void 0 : e.isStaff) && void 0 !== t && t,
                gradientPreset: C.Z.gradientPreset
            };
        }),
        d = (0, N.o9)('UserSettingsAppearance'),
        u = (0, N.Q3)('UserSettingsAppearance');
    return (0, i.jsx)(u ? $ : Q, {
        messageDisplayCompact: e,
        hideSimpleEmbedContent: t && n,
        clientTheme: s,
        timestampHourCycle: r,
        isRefreshEnabled: u,
        isRefreshExperimentEnabled: d,
        density: l,
        ...c
    });
}
