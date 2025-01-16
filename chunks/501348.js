n.d(t, {
    Z: function () {
        return ee;
    }
}),
    n(47120);
var i = n(200651),
    r = n(192379),
    s = n(120356),
    a = n.n(s),
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
    O = n(921801),
    R = n(594174),
    P = n(358085),
    y = n(210887),
    B = n(740492),
    D = n(695346),
    Z = n(329013),
    L = n(333859),
    M = n(726985),
    k = n(981631),
    w = n(921944),
    F = n(959517),
    U = n(388032),
    V = n(386819),
    G = n(275477);
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
let Y = {
        COZY: 'cozy',
        COMPACT: 'compact'
    },
    W = (0, T.hQ)(),
    z = (0, T.hQ)(),
    K = (0, T.hQ)(),
    q = '1337',
    Q = (e) => {
        let t = 0;
        return [
            (0, I.e5)({
                ...(0, N.ZP)({
                    channelId: q,
                    content: U.intl.string(U.t.oZxkEh)
                }),
                state: k.yb.SENT,
                id: ''.concat(t++)
            }),
            (0, I.e5)({
                ...(0, N.ZP)({
                    channelId: q,
                    content: (0, d.wj)(e) ? U.intl.string(U.t['WGb/v7']) : U.intl.string(U.t['62m4m5'])
                }),
                state: k.yb.SENT,
                id: ''.concat(t++)
            }),
            (0, I.e5)({
                ...(0, N.ZP)({
                    channelId: q,
                    content: U.intl.string(U.t.a0Byo6)
                }),
                state: k.yb.SENT,
                id: ''.concat(t++)
            }),
            (0, I.e5)({
                ...(0, N.ZP)({
                    channelId: q,
                    content: U.intl.string(U.t.bmwEWF)
                }),
                state: k.yb.SENT,
                id: ''.concat(t++)
            }),
            (0, I.e5)({
                ...(0, N.ZP)({
                    channelId: q,
                    content: U.intl.string(U.t.hK9QW1)
                }),
                state: k.yb.SENT,
                id: ''.concat(t)
            })
        ];
    },
    X = () => {
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
                  className: V.themeTitle,
                  children: [
                      (0, i.jsx)('div', {
                          className: V.title,
                          children: U.intl.string(U.t.Ksh3io)
                      }),
                      (0, i.jsx)(Z.g, {})
                  ]
              });
    };
class J extends r.Component {
    renderZoomSlider() {
        return P.isPlatformEmbedded
            ? (0, i.jsxs)(u.FormItem, {
                  className: G.marginTop20,
                  children: [
                      (0, i.jsx)(u.FormTitle, {
                          id: W,
                          tag: u.FormTitleTags.H5,
                          className: G.marginBottom8,
                          children: U.intl.string(U.t.i19n5O)
                      }),
                      (0, i.jsx)(u.Slider, {
                          className: a()(G.marginTop20, G.marginBottom4),
                          initialValue: this.props.zoom,
                          defaultValue: k.yqN.ZOOM_DEFAULT,
                          markers: k.yqN.ZOOM_SCALES,
                          stickToMarkers: !0,
                          onValueChange: this.handleZoomChange,
                          onValueRender: this.handleSliderRender,
                          'aria-labelledby': W
                      }),
                      (0, i.jsx)(u.FormText, {
                          type: u.FormText.Types.DESCRIPTION,
                          children: U.intl.format(U.t.OMkSUl, { modKey: p.Z.modKey })
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
                    id: z,
                    tag: u.FormTitleTags.H5,
                    className: G.marginBottom8,
                    children: U.intl.string(U.t.qPOqoK)
                }),
                (0, i.jsx)(C.Z, {
                    align: C.Z.Align.CENTER,
                    children: (0, i.jsx)(u.Slider, {
                        className: a()(G.marginTop20, G.marginBottom4),
                        initialValue: this.props.fontSize,
                        defaultValue: k.yqN.FONT_SIZE_DEFAULT,
                        markers: k.yqN.FONT_SIZES,
                        stickToMarkers: !0,
                        onValueChange: this.handleFontSizeChange,
                        onValueRender: this.handleSliderRenderPX,
                        onMarkerRender: this.handleSliderRenderPX,
                        getAriaValueText: this.handleSliderValueText,
                        'aria-labelledby': z
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
                    className: a()(G.marginTop20, G.marginBottom4),
                    initialValue: t,
                    defaultValue: e ? F.c8 : F.pq,
                    markers: F.fP,
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
        let { messageDisplayCompact: e, theme: t, messageGroupSpacing: n, hideSimpleEmbedContent: r } = this.props,
            s = (0, d.wj)(t) ? this.darkMessages : this.lightMessages;
        return (0, i.jsx)(u.FocusBlock, {
            children: (0, i.jsx)(u.Card, {
                className: a()(V.preview, G.marginBottom40, e ? V.compactPreview : void 0, 'group-spacing-'.concat(null != n ? n : e ? F.c8 : F.pq)),
                outline: !0,
                'aria-hidden': !0,
                children: s.map((t, n) =>
                    (0, i.jsx)(
                        A.Z,
                        {
                            author: (0, v.ZH)(t),
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
        let { theme: e, useForcedColors: t, darkSidebar: n, gradientPreset: r } = this.props;
        return t
            ? (0, i.jsx)(u.FormItem, {
                  className: a()(G.marginTop8, G.marginBottom40),
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
                      children: (0, _.b)()
                          ? U.intl.format(U.t.Jae48P, {
                                onClick: () => {
                                    g.Z.open(k.oAB.ACCESSIBILITY);
                                }
                            })
                          : U.intl.string(U.t.AUMSZG)
                  })
              })
            : (0, i.jsxs)(u.FormItem, {
                  className: G.marginTop8,
                  title: (0, i.jsx)(X, {}),
                  children: [
                      (0, i.jsx)(Z.i, {}),
                      (0, i.jsx)(O.F, {
                          setting: M.s6.APPEARANCE_ICON,
                          children: (0, i.jsx)(L.c, {})
                      }),
                      (0, i.jsx)(u.FormSwitch, {
                          value: n && (0, d.ap)(e) && !t,
                          disabled: e !== k.BRd.LIGHT || t || null != r,
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
        let { isRefreshEnabled: e, density: t } = this.props;
        return e
            ? (0, i.jsxs)(O.F, {
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
                          className: G.marginTop8,
                          children: [
                              (0, i.jsx)(u.FormText, {
                                  type: u.FormTextTypes.DESCRIPTION,
                                  className: G.marginBottom8,
                                  children: 'Adjust the spacing and layout to balance readability and content based on your preferences.'
                              }),
                              (0, i.jsx)(u.RadioGroup, {
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
                                      },
                                      {
                                          name: 'Auto',
                                          value: c.Pi.RESPONSIVE,
                                          desc: 'Automatically adjusts for a responsive fit based on window size'
                                      }
                                  ],
                                  onChange: this.handleUIDensityChange,
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
        (0, x.lq)();
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
                        onChange: (e) => D.hg.updateSetting(e.value),
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
                (0, i.jsxs)(O.F, {
                    setting: M.s6.APPEARANCE_THEME,
                    children: [this.renderPreview(), this.renderTheme()]
                }),
                (0, i.jsx)(O.F, {
                    setting: M.s6.APPEARANCE_MESSAGE_DISPLAY_COMPACT,
                    children: this.renderDisplayMode()
                }),
                this.renderListSpacing(),
                (0, i.jsx)(O.F, {
                    setting: M.s6.APPEARANCE_SCALING_SPACING,
                    children: this.renderScalingAndSpacing()
                }),
                (0, i.jsx)(O.F, {
                    setting: M.s6.APPEARANCE_TIMESTAMP_HOUR_CYCLE,
                    children: this.renderTimestampHourCycle()
                }),
                (0, i.jsx)(u.Text, {
                    variant: 'text-md/normal',
                    className: G.marginTop20,
                    children: U.intl.format(U.t['5LEQdX'], {
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
            H(this, 'darkMessages', Q(k.BRd.DARK)),
            H(this, 'lightMessages', Q(k.BRd.LIGHT)),
            H(this, 'handleDisplayCompactAvatarsChanged', (e) => {
                m.ZP.updatedUnsyncedSettings({ displayCompactAvatars: e });
            }),
            H(this, 'handleDesktopRefreshEnabledChanged', (e) => {
                m.ZP.updatedUnsyncedSettings({ disableVisualRefresh: !e });
            }),
            H(this, 'handleMessageDisplayModeChange', (e) => {
                let { value: t } = e;
                D.jU.updateSetting(t === Y.COMPACT), (0, x.ZZ)();
            }),
            H(this, 'handleUIDensityChange', (e) => {
                let { value: t } = e;
                if (t !== c.Pi.UNSET_UI_DENSITY) D.YC.updateSetting(t);
            });
    }
}
let $ = (e) => {
    !(0, b.un)(e) &&
        (0, b.EW)(e, {
            dismissAction: w.L.AUTO,
            forceTrack: !0
        });
};
function ee() {
    let e = D.jU.useSetting(),
        t = D.RS.useSetting(),
        n = D.NA.useSetting(),
        r = D.L1.useSetting(),
        s = D.hg.useSetting(),
        a = D.YC.useSetting();
    (0, h.Z)(() => {
        $(o.z.CLIENT_THEMES_SETTINGS_BADGE), $(o.z.DEKSTOP_CUSTOM_APP_ICON_BADGE), $(o.z.DEKSTOP_CUSTOM_APP_ICON_COACHMARK);
    });
    let c = (0, l.cj)([y.Z, B.ZP, f.Z, R.default, E.Z], () => {
            var e, t;
            return {
                theme: y.Z.theme,
                useForcedColors: f.Z.useForcedColors,
                useSystemTheme: B.ZP.useSystemTheme,
                darkSidebar: y.Z.darkSidebar,
                fontSize: f.Z.fontSize,
                zoom: f.Z.zoom,
                messageGroupSpacing: f.Z.messageGroupSpacing,
                displayCompactAvatars: B.ZP.displayCompactAvatars,
                isStaff: null !== (t = null === (e = R.default.getCurrentUser()) || void 0 === e ? void 0 : e.isStaff) && void 0 !== t && t,
                gradientPreset: E.Z.gradientPreset
            };
        }),
        d = (0, S.o9)('UserSettingsAppearance'),
        u = (0, S.Q3)('UserSettingsAppearance');
    return (0, i.jsx)(J, {
        messageDisplayCompact: e,
        hideSimpleEmbedContent: t && n,
        clientTheme: r,
        timestampHourCycle: s,
        isRefreshEnabled: u,
        isRefreshExperimentEnabled: d,
        density: a,
        ...c
    });
}
