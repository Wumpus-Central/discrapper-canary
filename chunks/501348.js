n.d(t, {
    Z: function () {
        return et;
    }
}),
    n(47120);
var i = n(200651),
    s = n(192379),
    r = n(120356),
    a = n.n(r),
    l = n(442837),
    o = n(704215),
    c = n(524437),
    d = n(780384),
    u = n(481060),
    m = n(153867),
    g = n(230711),
    h = n(493773),
    p = n(714338),
    x = n(857595),
    f = n(607070),
    _ = n(627845),
    E = n(514361),
    C = n(600164),
    T = n(313201),
    S = n(540059),
    b = n(605236),
    I = n(786761),
    N = n(3148),
    v = n(739566),
    A = n(753206),
    j = n(311476),
    R = n(921801),
    O = n(594174),
    P = n(358085),
    y = n(210887),
    D = n(740492),
    B = n(695346),
    Z = n(329013),
    L = n(333859),
    M = n(726985),
    k = n(981631),
    w = n(921944),
    F = n(959517),
    U = n(969943),
    V = n(388032),
    G = n(201032),
    H = n(232186);
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
let W = {
        COZY: 'cozy',
        COMPACT: 'compact'
    },
    z = (0, T.hQ)(),
    K = (0, T.hQ)(),
    q = (0, T.hQ)(),
    Q = '1337',
    X = (e) => {
        let t = 0;
        return [
            (0, I.e5)({
                ...(0, N.ZP)({
                    channelId: Q,
                    content: V.intl.string(V.t.oZxkEh)
                }),
                state: k.yb.SENT,
                id: ''.concat(t++)
            }),
            (0, I.e5)({
                ...(0, N.ZP)({
                    channelId: Q,
                    content: (0, d.wj)(e) ? V.intl.string(V.t['WGb/v7']) : V.intl.string(V.t['62m4m5'])
                }),
                state: k.yb.SENT,
                id: ''.concat(t++)
            }),
            (0, I.e5)({
                ...(0, N.ZP)({
                    channelId: Q,
                    content: V.intl.string(V.t.a0Byo6)
                }),
                state: k.yb.SENT,
                id: ''.concat(t++)
            }),
            (0, I.e5)({
                ...(0, N.ZP)({
                    channelId: Q,
                    content: V.intl.string(V.t.bmwEWF)
                }),
                state: k.yb.SENT,
                id: ''.concat(t++)
            }),
            (0, I.e5)({
                ...(0, N.ZP)({
                    channelId: Q,
                    content: V.intl.string(V.t.hK9QW1)
                }),
                state: k.yb.SENT,
                id: ''.concat(t)
            })
        ];
    },
    J = () => {
        let e = (0, l.e7)([E.Z], () => E.Z.isPreview),
            { enabled: t } = j.Z.useExperiment(
                { location: 'GradientSelectorsTitle' },
                {
                    autoTrackExposure: !1,
                    disable: !e
                }
            );
        return t
            ? null
            : (0, i.jsxs)('div', {
                  className: G.themeTitle,
                  children: [
                      (0, i.jsx)('div', {
                          className: G.title,
                          children: V.intl.string(V.t.Ksh3io)
                      }),
                      (0, i.jsx)(Z.g, {})
                  ]
              });
    };
class $ extends s.Component {
    renderZoomSlider() {
        return P.isPlatformEmbedded
            ? (0, i.jsxs)(u.FormItem, {
                  className: H.marginTop20,
                  children: [
                      (0, i.jsx)(u.FormTitle, {
                          id: z,
                          tag: u.FormTitleTags.H5,
                          className: H.marginBottom8,
                          children: V.intl.string(V.t.i19n5O)
                      }),
                      (0, i.jsx)(u.Slider, {
                          className: a()(H.marginTop20, H.marginBottom4),
                          initialValue: this.props.zoom,
                          defaultValue: k.yqN.ZOOM_DEFAULT,
                          markers: k.yqN.ZOOM_SCALES,
                          stickToMarkers: !0,
                          onValueChange: this.handleZoomChange,
                          onValueRender: this.handleSliderRender,
                          'aria-labelledby': z
                      }),
                      (0, i.jsx)(u.FormText, {
                          type: u.FormText.Types.DESCRIPTION,
                          children: V.intl.format(V.t.OMkSUl, { modKey: p.Z.modKey })
                      })
                  ]
              })
            : null;
    }
    renderFontScaleSlider() {
        return (0, i.jsxs)(u.FormItem, {
            className: H.marginTop20,
            children: [
                (0, i.jsx)(u.FormTitle, {
                    id: K,
                    tag: u.FormTitleTags.H5,
                    className: H.marginBottom8,
                    children: V.intl.string(V.t.qPOqoK)
                }),
                (0, i.jsx)(C.Z, {
                    align: C.Z.Align.CENTER,
                    children: (0, i.jsx)(u.Slider, {
                        className: a()(H.marginTop20, H.marginBottom4),
                        initialValue: this.props.fontSize,
                        defaultValue: k.yqN.FONT_SIZE_DEFAULT,
                        markers: k.yqN.FONT_SIZES,
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
        return (0, i.jsxs)(u.FormItem, {
            className: H.marginTop20,
            children: [
                (0, i.jsx)(u.FormTitle, {
                    id: q,
                    tag: u.FormTitleTags.H5,
                    className: H.marginBottom8,
                    children: V.intl.string(V.t.Q6lKkp)
                }),
                (0, i.jsx)(u.Slider, {
                    className: a()(H.marginTop20, H.marginBottom4),
                    initialValue: t,
                    defaultValue: e ? F.c8 : F.pq,
                    markers: F.fP,
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
        let { messageDisplayCompact: e, theme: t, messageGroupSpacing: n, hideSimpleEmbedContent: s } = this.props,
            r = (0, d.wj)(t) ? this.darkMessages : this.lightMessages;
        return (0, i.jsx)(u.FocusBlock, {
            children: (0, i.jsx)(u.Card, {
                className: a()(G.preview, H.marginBottom40, e ? G.compactPreview : void 0, 'group-spacing-'.concat(null != n ? n : e ? F.c8 : F.pq)),
                outline: !0,
                'aria-hidden': !0,
                children: r.map((t, n) =>
                    (0, i.jsx)(
                        A.Z,
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
        let { theme: e, useForcedColors: t, darkSidebar: n, gradientPreset: s } = this.props;
        return t
            ? (0, i.jsx)(u.FormItem, {
                  className: a()(H.marginTop8, H.marginBottom40),
                  title: (0, i.jsx)('div', {
                      className: G.themeTitle,
                      children: (0, i.jsx)('div', {
                          className: G.title,
                          children: V.intl.string(V.t.Ksh3io)
                      })
                  }),
                  children: (0, i.jsx)(u.FormText, {
                      type: u.FormText.Types.DEFAULT,
                      className: G.forcedColorsWarning,
                      children: (0, _.b)()
                          ? V.intl.format(V.t.Jae48P, {
                                onClick: () => {
                                    g.Z.open(k.oAB.ACCESSIBILITY);
                                }
                            })
                          : V.intl.string(V.t.AUMSZG)
                  })
              })
            : (0, i.jsxs)(u.FormItem, {
                  className: H.marginTop8,
                  title: (0, i.jsx)(J, {}),
                  children: [
                      (0, i.jsx)(Z.i, {}),
                      (0, i.jsx)(R.F, {
                          setting: M.s6.APPEARANCE_ICON,
                          children: (0, i.jsx)(L.c, {})
                      }),
                      (0, i.jsx)(u.FormSwitch, {
                          value: n && (0, d.ap)(e) && !t,
                          disabled: e !== k.BRd.LIGHT || t || null != s,
                          onChange: this.handleDarkSidebarChecked,
                          className: H.marginTop20,
                          children: V.intl.string(V.t.yF54Ki)
                      })
                  ]
              });
    }
    renderDisplayMode() {
        return (0, i.jsxs)(u.FormItem, {
            title: V.intl.string(V.t.ZEoGMT),
            className: H.marginTop8,
            children: [
                (0, i.jsx)(u.RadioGroup, {
                    options: [
                        {
                            name: V.intl.string(V.t.KZIadn),
                            value: W.COZY
                        },
                        {
                            name: V.intl.string(V.t['6+nTjY']),
                            value: W.COMPACT
                        }
                    ],
                    onChange: this.handleMessageDisplayModeChange,
                    value: this.props.messageDisplayCompact ? W.COMPACT : W.COZY
                }),
                (0, i.jsx)(u.FormSwitch, {
                    value: this.props.messageDisplayCompact && this.props.displayCompactAvatars,
                    disabled: !this.props.messageDisplayCompact,
                    onChange: this.handleDisplayCompactAvatarsChanged,
                    className: H.marginTop20,
                    children: V.intl.string(V.t['7FVjFB'])
                })
            ]
        });
    }
    renderListSpacing() {
        let { isRefreshEnabled: e, listDensity: t } = this.props;
        return e
            ? (0, i.jsxs)(R.F, {
                  setting: M.s6.APPEARANCE_LIST_SPACING,
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
                          className: H.marginTop8,
                          children: [
                              (0, i.jsx)(u.FormText, {
                                  type: u.FormTextTypes.DESCRIPTION,
                                  className: H.marginBottom8,
                                  children: 'Adjust the spacing and layout to balance readability and content based on your preferences.'
                              }),
                              (0, i.jsx)(u.RadioGroup, {
                                  options: [
                                      {
                                          name: V.intl.string(V.t.T7G4Y2),
                                          value: U.fx.COZY,
                                          desc: 'Comfortable spacing for easier readability'
                                      },
                                      {
                                          name: V.intl.string(V.t['7iegX1']),
                                          value: U.fx.COMPACT,
                                          desc: 'Tighter layout to fit more content'
                                      },
                                      {
                                          name: 'Auto',
                                          value: U.fx.AUTO,
                                          desc: 'Automatically adjusts for a responsive fit based on window size'
                                      }
                                  ],
                                  onChange: this.handleListDensityModeChange,
                                  value: t
                              })
                          ]
                      }),
                      (0, i.jsx)(u.FormDivider, { className: H.marginTop8 })
                  ]
              })
            : null;
    }
    handleDarkSidebarChecked() {
        (0, x.lq)();
    }
    renderScalingAndSpacing() {
        return (0, i.jsxs)(i.Fragment, {
            children: [this.renderFontScaleSlider(), this.renderMessageGroupSpacingSlider(), this.renderZoomSlider(), (0, i.jsx)(u.FormDivider, { className: H.marginTop20 })]
        });
    }
    renderTimestampHourCycle() {
        let { timestampHourCycle: e } = this.props;
        return (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(u.FormItem, {
                    title: V.intl.string(V.t.dyamEB),
                    className: H.marginTop20,
                    children: (0, i.jsx)(u.RadioGroup, {
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
                        onChange: (e) => B.hg.updateSetting(e.value),
                        value: e
                    })
                }),
                (0, i.jsx)(u.FormDivider, { className: H.marginTop8 })
            ]
        });
    }
    renderVisualRefreshOverride() {
        let { isRefreshEnabled: e, isRefreshExperimentEnabled: t } = this.props;
        return t
            ? (0, i.jsx)(u.FormItem, {
                  className: H.marginTop8,
                  children: (0, i.jsx)(u.FormSwitch, {
                      value: e,
                      onChange: this.handleDesktopRefreshEnabledChanged,
                      className: H.marginTop20,
                      children: 'Enable Desktop Refresh'
                  })
              })
            : null;
    }
    render() {
        return (0, i.jsxs)(u.FormSection, {
            tag: u.FormTitleTags.H1,
            title: V.intl.string(V.t['iHH+k5']),
            children: [
                this.renderVisualRefreshOverride(),
                (0, i.jsxs)(R.F, {
                    setting: M.s6.APPEARANCE_THEME,
                    children: [this.renderPreview(), this.renderTheme()]
                }),
                (0, i.jsx)(R.F, {
                    setting: M.s6.APPEARANCE_MESSAGE_DISPLAY_COMPACT,
                    children: this.renderDisplayMode()
                }),
                this.renderListSpacing(),
                (0, i.jsx)(R.F, {
                    setting: M.s6.APPEARANCE_SCALING_SPACING,
                    children: this.renderScalingAndSpacing()
                }),
                (0, i.jsx)(R.F, {
                    setting: M.s6.APPEARANCE_TIMESTAMP_HOUR_CYCLE,
                    children: this.renderTimestampHourCycle()
                }),
                (0, i.jsx)(u.Text, {
                    variant: 'text-md/normal',
                    className: H.marginTop20,
                    children: V.intl.format(V.t['5LEQdX'], {
                        onAccessibilityClick() {
                            g.Z.open(k.oAB.ACCESSIBILITY);
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
            Y(this, 'darkMessages', X(k.BRd.DARK)),
            Y(this, 'lightMessages', X(k.BRd.LIGHT)),
            Y(this, 'handleDisplayCompactAvatarsChanged', (e) => {
                m.ZP.updatedUnsyncedSettings({ displayCompactAvatars: e });
            }),
            Y(this, 'handleDesktopRefreshEnabledChanged', (e) => {
                m.ZP.updatedUnsyncedSettings({ disableVisualRefresh: !e });
            }),
            Y(this, 'handleMessageDisplayModeChange', (e) => {
                let { value: t } = e;
                B.jU.updateSetting(t === W.COMPACT), (0, x.ZZ)();
            }),
            Y(this, 'handleListDensityModeChange', (e) => {
                let { value: t } = e;
                B.N5.updateSetting(t);
            });
    }
}
let ee = (e) => {
    !(0, b.un)(e) &&
        (0, b.EW)(e, {
            dismissAction: w.L.AUTO,
            forceTrack: !0
        });
};
function et() {
    let e = B.jU.useSetting(),
        t = B.RS.useSetting(),
        n = B.NA.useSetting(),
        s = B.L1.useSetting(),
        r = B.hg.useSetting(),
        a = B.N5.useSetting();
    (0, h.Z)(() => {
        ee(o.z.CLIENT_THEMES_SETTINGS_BADGE), ee(o.z.DEKSTOP_CUSTOM_APP_ICON_BADGE), ee(o.z.DEKSTOP_CUSTOM_APP_ICON_COACHMARK);
    });
    let c = (0, l.cj)([y.Z, D.ZP, f.Z, O.default, E.Z], () => {
            var e, t;
            return {
                theme: y.Z.theme,
                useForcedColors: f.Z.useForcedColors,
                useSystemTheme: D.ZP.useSystemTheme,
                darkSidebar: y.Z.darkSidebar,
                fontSize: f.Z.fontSize,
                zoom: f.Z.zoom,
                messageGroupSpacing: f.Z.messageGroupSpacing,
                displayCompactAvatars: D.ZP.displayCompactAvatars,
                isStaff: null !== (t = null === (e = O.default.getCurrentUser()) || void 0 === e ? void 0 : e.isStaff) && void 0 !== t && t,
                gradientPreset: E.Z.gradientPreset
            };
        }),
        d = (0, S.o9)('UserSettingsAppearance'),
        u = (0, S.Q3)('UserSettingsAppearance');
    return (0, i.jsx)($, {
        messageDisplayCompact: e,
        hideSimpleEmbedContent: t && n,
        clientTheme: s,
        timestampHourCycle: r,
        isRefreshEnabled: u,
        isRefreshExperimentEnabled: d,
        listDensity: a,
        ...c
    });
}
