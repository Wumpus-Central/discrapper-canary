n.d(t, {
    Z: function () {
        return ee;
    }
}),
    n(47120);
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
    g = n(714338),
    p = n(857595),
    x = n(607070),
    S = n(627845),
    T = n(514361),
    E = n(600164),
    C = n(313201),
    _ = n(540059),
    f = n(605236),
    I = n(786761),
    N = n(3148),
    A = n(739566),
    b = n(753206),
    v = n(311476),
    j = n(921801),
    O = n(594174),
    R = n(358085),
    P = n(210887),
    D = n(740492),
    y = n(695346),
    B = n(329013),
    L = n(333859),
    Z = n(726985),
    F = n(981631),
    M = n(921944),
    k = n(959517),
    w = n(969943),
    U = n(388032),
    V = n(201032),
    G = n(232186);
function Y(e, t, n) {
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
let H = {
        COZY: 'cozy',
        COMPACT: 'compact'
    },
    z = (0, C.hQ)(),
    W = (0, C.hQ)(),
    K = (0, C.hQ)(),
    q = '1337',
    X = (e) => {
        let t = 0;
        return [
            (0, I.e5)({
                ...(0, N.ZP)({
                    channelId: q,
                    content: U.intl.string(U.t.oZxkEh)
                }),
                state: F.yb.SENT,
                id: ''.concat(t++)
            }),
            (0, I.e5)({
                ...(0, N.ZP)({
                    channelId: q,
                    content: (0, d.wj)(e) ? U.intl.string(U.t['WGb/v7']) : U.intl.string(U.t['62m4m5'])
                }),
                state: F.yb.SENT,
                id: ''.concat(t++)
            }),
            (0, I.e5)({
                ...(0, N.ZP)({
                    channelId: q,
                    content: U.intl.string(U.t.a0Byo6)
                }),
                state: F.yb.SENT,
                id: ''.concat(t++)
            }),
            (0, I.e5)({
                ...(0, N.ZP)({
                    channelId: q,
                    content: U.intl.string(U.t.bmwEWF)
                }),
                state: F.yb.SENT,
                id: ''.concat(t++)
            }),
            (0, I.e5)({
                ...(0, N.ZP)({
                    channelId: q,
                    content: U.intl.string(U.t.hK9QW1)
                }),
                state: F.yb.SENT,
                id: ''.concat(t)
            })
        ];
    },
    Q = () => {
        let e = (0, a.e7)([T.Z], () => T.Z.isPreview),
            { enabled: t } = v.Z.useExperiment(
                { location: 'GradientSelectorsTitle' },
                {
                    autoTrackExposure: !1,
                    disable: !e
                }
            );
        return t
            ? null
            : (0, i.jsxs)('div', {
                  className: V.themeTitle,
                  children: [
                      (0, i.jsx)('div', {
                          className: V.title,
                          children: U.intl.string(U.t.Ksh3io)
                      }),
                      (0, i.jsx)(B.g, {})
                  ]
              });
    };
class J extends s.Component {
    renderZoomSlider() {
        return R.isPlatformEmbedded
            ? (0, i.jsxs)(u.FormItem, {
                  className: G.marginTop20,
                  children: [
                      (0, i.jsx)(u.FormTitle, {
                          id: z,
                          tag: u.FormTitleTags.H5,
                          className: G.marginBottom8,
                          children: U.intl.string(U.t.i19n5O)
                      }),
                      (0, i.jsx)(u.Slider, {
                          className: l()(G.marginTop20, G.marginBottom4),
                          initialValue: this.props.zoom,
                          defaultValue: F.yqN.ZOOM_DEFAULT,
                          markers: F.yqN.ZOOM_SCALES,
                          stickToMarkers: !0,
                          onValueChange: this.handleZoomChange,
                          onValueRender: this.handleSliderRender,
                          'aria-labelledby': z
                      }),
                      (0, i.jsx)(u.FormText, {
                          type: u.FormText.Types.DESCRIPTION,
                          children: U.intl.format(U.t.OMkSUl, { modKey: g.Z.modKey })
                      })
                  ]
              })
            : null;
    }
    renderFontScaleSlider() {
        return (0, i.jsxs)(u.FormItem, {
            className: G.marginTop20,
            children: [
                (0, i.jsx)(u.FormTitle, {
                    id: W,
                    tag: u.FormTitleTags.H5,
                    className: G.marginBottom8,
                    children: U.intl.string(U.t.qPOqoK)
                }),
                (0, i.jsx)(E.Z, {
                    align: E.Z.Align.CENTER,
                    children: (0, i.jsx)(u.Slider, {
                        className: l()(G.marginTop20, G.marginBottom4),
                        initialValue: this.props.fontSize,
                        defaultValue: F.yqN.FONT_SIZE_DEFAULT,
                        markers: F.yqN.FONT_SIZES,
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
        let { messageDisplayCompact: e, messageGroupSpacing: t } = this.props;
        return (0, i.jsxs)(u.FormItem, {
            className: G.marginTop20,
            children: [
                (0, i.jsx)(u.FormTitle, {
                    id: K,
                    tag: u.FormTitleTags.H5,
                    className: G.marginBottom8,
                    children: U.intl.string(U.t.Q6lKkp)
                }),
                (0, i.jsx)(u.Slider, {
                    className: l()(G.marginTop20, G.marginBottom4),
                    initialValue: t,
                    defaultValue: e ? k.c8 : k.pq,
                    markers: k.fP,
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
        return (0, i.jsx)(u.FocusBlock, {
            children: (0, i.jsx)(u.Card, {
                className: l()(V.preview, G.marginBottom40, e ? V.compactPreview : void 0, 'group-spacing-'.concat(null != n ? n : e ? k.c8 : k.pq)),
                outline: !0,
                'aria-hidden': !0,
                children: r.map((t, n) =>
                    (0, i.jsx)(
                        b.Z,
                        {
                            author: (0, A.ZH)(t),
                            message: t,
                            compact: e,
                            isGroupStart: n % 2 == 0,
                            className: 0 === n ? V.firstMessage : void 0,
                            hideSimpleEmbedContent: s
                        },
                        t.id
                    )
                )
            })
        });
    }
    renderTheme() {
        let { theme: e, useForcedColors: t, darkSidebar: n, gradientPreset: s } = this.props;
        return t
            ? (0, i.jsx)(u.FormItem, {
                  className: l()(G.marginTop8, G.marginBottom40),
                  title: (0, i.jsx)('div', {
                      className: V.themeTitle,
                      children: (0, i.jsx)('div', {
                          className: V.title,
                          children: U.intl.string(U.t.Ksh3io)
                      })
                  }),
                  children: (0, i.jsx)(u.FormText, {
                      type: u.FormText.Types.DEFAULT,
                      className: V.forcedColorsWarning,
                      children: (0, S.b)()
                          ? U.intl.format(U.t.Jae48P, {
                                onClick: () => {
                                    h.Z.open(F.oAB.ACCESSIBILITY);
                                }
                            })
                          : U.intl.string(U.t.AUMSZG)
                  })
              })
            : (0, i.jsxs)(u.FormItem, {
                  className: G.marginTop8,
                  title: (0, i.jsx)(Q, {}),
                  children: [
                      (0, i.jsx)(B.i, {}),
                      (0, i.jsx)(j.F, {
                          setting: Z.s6.APPEARANCE_ICON,
                          children: (0, i.jsx)(L.c, {})
                      }),
                      (0, i.jsx)(u.FormSwitch, {
                          value: n && (0, d.ap)(e) && !t,
                          disabled: e !== F.BRd.LIGHT || t || null != s,
                          onChange: this.handleDarkSidebarChecked,
                          className: G.marginTop20,
                          children: U.intl.string(U.t.yF54Ki)
                      })
                  ]
              });
    }
    renderDisplayMode() {
        return (0, i.jsxs)(u.FormItem, {
            title: U.intl.string(U.t.ZEoGMT),
            className: G.marginTop8,
            children: [
                (0, i.jsx)(u.RadioGroup, {
                    options: [
                        {
                            name: U.intl.string(U.t.KZIadn),
                            value: H.COZY
                        },
                        {
                            name: U.intl.string(U.t['6+nTjY']),
                            value: H.COMPACT
                        }
                    ],
                    onChange: this.handleMessageDisplayModeChange,
                    value: this.props.messageDisplayCompact ? H.COMPACT : H.COZY
                }),
                (0, i.jsx)(u.FormSwitch, {
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
        let { isRefreshEnabled: e, listDensity: t } = this.props;
        return e
            ? (0, i.jsxs)(j.F, {
                  setting: Z.s6.APPEARANCE_LIST_SPACING,
                  children: [
                      (0, i.jsxs)(u.FormItem, {
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
                              (0, i.jsx)(u.FormText, {
                                  type: u.FormTextTypes.DESCRIPTION,
                                  className: G.marginBottom8,
                                  children: 'Adjust how compact or spacious the app appears.'
                              }),
                              (0, i.jsx)(u.RadioGroup, {
                                  options: [
                                      {
                                          name: U.intl.string(U.t.T7G4Y2),
                                          value: w.fx.COZY,
                                          desc: 'Relaxed layout with room to breath'
                                      },
                                      {
                                          name: U.intl.string(U.t['7iegX1']),
                                          value: w.fx.COMPACT,
                                          desc: 'Dense layout with minimal spacing'
                                      }
                                  ],
                                  onChange: this.handleListDensityModeChange,
                                  value: t
                              })
                          ]
                      }),
                      (0, i.jsx)(u.FormDivider, { className: G.marginTop8 })
                  ]
              })
            : null;
    }
    handleDarkSidebarChecked() {
        (0, p.lq)();
    }
    renderScalingAndSpacing() {
        return (0, i.jsxs)(i.Fragment, {
            children: [this.renderFontScaleSlider(), this.renderMessageGroupSpacingSlider(), this.renderZoomSlider(), (0, i.jsx)(u.FormDivider, { className: G.marginTop20 })]
        });
    }
    renderTimestampHourCycle() {
        let { timestampHourCycle: e } = this.props;
        return (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(u.FormItem, {
                    title: U.intl.string(U.t.dyamEB),
                    className: G.marginTop20,
                    children: (0, i.jsx)(u.RadioGroup, {
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
                        onChange: (e) => y.hg.updateSetting(e.value),
                        value: e
                    })
                }),
                (0, i.jsx)(u.FormDivider, { className: G.marginTop8 })
            ]
        });
    }
    renderVisualRefreshOverride() {
        let { isRefreshEnabled: e, isRefreshExperimentEnabled: t } = this.props;
        return t
            ? (0, i.jsx)(u.FormItem, {
                  className: G.marginTop8,
                  children: (0, i.jsx)(u.FormSwitch, {
                      value: e,
                      onChange: this.handleDesktopRefreshEnabledChanged,
                      className: G.marginTop20,
                      children: 'Enable Desktop Refresh'
                  })
              })
            : null;
    }
    render() {
        return (0, i.jsxs)(u.FormSection, {
            tag: u.FormTitleTags.H1,
            title: U.intl.string(U.t['iHH+k5']),
            children: [
                this.renderVisualRefreshOverride(),
                (0, i.jsxs)(j.F, {
                    setting: Z.s6.APPEARANCE_THEME,
                    children: [this.renderPreview(), this.renderTheme()]
                }),
                (0, i.jsx)(j.F, {
                    setting: Z.s6.APPEARANCE_MESSAGE_DISPLAY_COMPACT,
                    children: this.renderDisplayMode()
                }),
                this.renderListSpacing(),
                (0, i.jsx)(j.F, {
                    setting: Z.s6.APPEARANCE_SCALING_SPACING,
                    children: this.renderScalingAndSpacing()
                }),
                (0, i.jsx)(j.F, {
                    setting: Z.s6.APPEARANCE_TIMESTAMP_HOUR_CYCLE,
                    children: this.renderTimestampHourCycle()
                }),
                (0, i.jsx)(u.Text, {
                    variant: 'text-md/normal',
                    className: G.marginTop20,
                    children: U.intl.format(U.t['5LEQdX'], {
                        onAccessibilityClick() {
                            h.Z.open(F.oAB.ACCESSIBILITY);
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
        (0, p.oL)(e);
    }
    handleMessageSpacingChange(e) {
        switch (e) {
            case 0:
            case 4:
            case 8:
            case 16:
            case 24:
                (0, p.ZZ)(e);
        }
    }
    handleZoomChange(e) {
        (0, p.cq)(e);
    }
    constructor(...e) {
        super(...e),
            Y(this, 'darkMessages', X(F.BRd.DARK)),
            Y(this, 'lightMessages', X(F.BRd.LIGHT)),
            Y(this, 'handleDisplayCompactAvatarsChanged', (e) => {
                m.ZP.updatedUnsyncedSettings({ displayCompactAvatars: e });
            }),
            Y(this, 'handleDesktopRefreshEnabledChanged', (e) => {
                m.ZP.updatedUnsyncedSettings({ disableVisualRefresh: !e });
            }),
            Y(this, 'handleMessageDisplayModeChange', (e) => {
                let { value: t } = e;
                y.jU.updateSetting(t === H.COMPACT), (0, p.ZZ)();
            }),
            Y(this, 'handleListDensityModeChange', (e) => {
                let { value: t } = e;
                y.N5.updateSetting(t);
            });
    }
}
let $ = (e) => {
    !(0, f.un)(e) &&
        (0, f.EW)(e, {
            dismissAction: M.L.AUTO,
            forceTrack: !0
        });
};
function ee() {
    let e = y.jU.useSetting(),
        t = y.RS.useSetting(),
        n = y.NA.useSetting(),
        r = y.L1.useSetting(),
        l = y.hg.useSetting(),
        c = y.N5.useSetting();
    s.useEffect(() => {
        $(o.z.CLIENT_THEMES_SETTINGS_BADGE), $(o.z.DEKSTOP_CUSTOM_APP_ICON_BADGE), $(o.z.DEKSTOP_CUSTOM_APP_ICON_COACHMARK);
    }, []);
    let d = (0, a.cj)([P.Z, D.ZP, x.Z, O.default, T.Z], () => {
            var e, t;
            return {
                theme: P.Z.theme,
                useForcedColors: x.Z.useForcedColors,
                useSystemTheme: D.ZP.useSystemTheme,
                darkSidebar: P.Z.darkSidebar,
                fontSize: x.Z.fontSize,
                zoom: x.Z.zoom,
                messageGroupSpacing: x.Z.messageGroupSpacing,
                displayCompactAvatars: D.ZP.displayCompactAvatars,
                isStaff: null !== (t = null === (e = O.default.getCurrentUser()) || void 0 === e ? void 0 : e.isStaff) && void 0 !== t && t,
                gradientPreset: T.Z.gradientPreset
            };
        }),
        u = (0, _.o9)('UserSettingsAppearance'),
        m = (0, _.Q3)('UserSettingsAppearance');
    return (0, i.jsx)(J, {
        messageDisplayCompact: e,
        hideSimpleEmbedContent: t && n,
        clientTheme: r,
        timestampHourCycle: l,
        isRefreshEnabled: m,
        isRefreshExperimentEnabled: u,
        listDensity: c,
        ...d
    });
}
