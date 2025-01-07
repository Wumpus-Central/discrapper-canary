n.d(t, {
    Z: function () {
        return et;
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
    g = n(493773),
    p = n(714338),
    x = n(857595),
    S = n(607070),
    T = n(627845),
    E = n(514361),
    C = n(600164),
    _ = n(313201),
    f = n(540059),
    I = n(605236),
    N = n(786761),
    A = n(3148),
    b = n(739566),
    v = n(753206),
    j = n(311476),
    O = n(921801),
    R = n(594174),
    P = n(358085),
    D = n(210887),
    y = n(740492),
    B = n(695346),
    L = n(329013),
    Z = n(333859),
    F = n(726985),
    M = n(981631),
    k = n(921944),
    w = n(959517),
    U = n(969943),
    V = n(388032),
    G = n(201032),
    Y = n(232186);
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
    W = (0, _.hQ)(),
    K = (0, _.hQ)(),
    q = (0, _.hQ)(),
    X = '1337',
    Q = (e) => {
        let t = 0;
        return [
            (0, N.e5)({
                ...(0, A.ZP)({
                    channelId: X,
                    content: V.intl.string(V.t.oZxkEh)
                }),
                state: M.yb.SENT,
                id: ''.concat(t++)
            }),
            (0, N.e5)({
                ...(0, A.ZP)({
                    channelId: X,
                    content: (0, d.wj)(e) ? V.intl.string(V.t['WGb/v7']) : V.intl.string(V.t['62m4m5'])
                }),
                state: M.yb.SENT,
                id: ''.concat(t++)
            }),
            (0, N.e5)({
                ...(0, A.ZP)({
                    channelId: X,
                    content: V.intl.string(V.t.a0Byo6)
                }),
                state: M.yb.SENT,
                id: ''.concat(t++)
            }),
            (0, N.e5)({
                ...(0, A.ZP)({
                    channelId: X,
                    content: V.intl.string(V.t.bmwEWF)
                }),
                state: M.yb.SENT,
                id: ''.concat(t++)
            }),
            (0, N.e5)({
                ...(0, A.ZP)({
                    channelId: X,
                    content: V.intl.string(V.t.hK9QW1)
                }),
                state: M.yb.SENT,
                id: ''.concat(t)
            })
        ];
    },
    J = () => {
        let e = (0, a.e7)([E.Z], () => E.Z.isPreview),
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
                      (0, i.jsx)(L.g, {})
                  ]
              });
    };
class $ extends s.Component {
    renderZoomSlider() {
        return P.isPlatformEmbedded
            ? (0, i.jsxs)(u.FormItem, {
                  className: Y.marginTop20,
                  children: [
                      (0, i.jsx)(u.FormTitle, {
                          id: W,
                          tag: u.FormTitleTags.H5,
                          className: Y.marginBottom8,
                          children: V.intl.string(V.t.i19n5O)
                      }),
                      (0, i.jsx)(u.Slider, {
                          className: l()(Y.marginTop20, Y.marginBottom4),
                          initialValue: this.props.zoom,
                          defaultValue: M.yqN.ZOOM_DEFAULT,
                          markers: M.yqN.ZOOM_SCALES,
                          stickToMarkers: !0,
                          onValueChange: this.handleZoomChange,
                          onValueRender: this.handleSliderRender,
                          'aria-labelledby': W
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
            className: Y.marginTop20,
            children: [
                (0, i.jsx)(u.FormTitle, {
                    id: K,
                    tag: u.FormTitleTags.H5,
                    className: Y.marginBottom8,
                    children: V.intl.string(V.t.qPOqoK)
                }),
                (0, i.jsx)(C.Z, {
                    align: C.Z.Align.CENTER,
                    children: (0, i.jsx)(u.Slider, {
                        className: l()(Y.marginTop20, Y.marginBottom4),
                        initialValue: this.props.fontSize,
                        defaultValue: M.yqN.FONT_SIZE_DEFAULT,
                        markers: M.yqN.FONT_SIZES,
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
            className: Y.marginTop20,
            children: [
                (0, i.jsx)(u.FormTitle, {
                    id: q,
                    tag: u.FormTitleTags.H5,
                    className: Y.marginBottom8,
                    children: V.intl.string(V.t.Q6lKkp)
                }),
                (0, i.jsx)(u.Slider, {
                    className: l()(Y.marginTop20, Y.marginBottom4),
                    initialValue: t,
                    defaultValue: e ? w.c8 : w.pq,
                    markers: w.fP,
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
                className: l()(G.preview, Y.marginBottom40, e ? G.compactPreview : void 0, 'group-spacing-'.concat(null != n ? n : e ? w.c8 : w.pq)),
                outline: !0,
                'aria-hidden': !0,
                children: r.map((t, n) =>
                    (0, i.jsx)(
                        v.Z,
                        {
                            author: (0, b.ZH)(t),
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
                  className: l()(Y.marginTop8, Y.marginBottom40),
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
                      children: (0, T.b)()
                          ? V.intl.format(V.t.Jae48P, {
                                onClick: () => {
                                    h.Z.open(M.oAB.ACCESSIBILITY);
                                }
                            })
                          : V.intl.string(V.t.AUMSZG)
                  })
              })
            : (0, i.jsxs)(u.FormItem, {
                  className: Y.marginTop8,
                  title: (0, i.jsx)(J, {}),
                  children: [
                      (0, i.jsx)(L.i, {}),
                      (0, i.jsx)(O.F, {
                          setting: F.s6.APPEARANCE_ICON,
                          children: (0, i.jsx)(Z.c, {})
                      }),
                      (0, i.jsx)(u.FormSwitch, {
                          value: n && (0, d.ap)(e) && !t,
                          disabled: e !== M.BRd.LIGHT || t || null != s,
                          onChange: this.handleDarkSidebarChecked,
                          className: Y.marginTop20,
                          children: V.intl.string(V.t.yF54Ki)
                      })
                  ]
              });
    }
    renderDisplayMode() {
        return (0, i.jsxs)(u.FormItem, {
            title: V.intl.string(V.t.ZEoGMT),
            className: Y.marginTop8,
            children: [
                (0, i.jsx)(u.RadioGroup, {
                    options: [
                        {
                            name: V.intl.string(V.t.KZIadn),
                            value: z.COZY
                        },
                        {
                            name: V.intl.string(V.t['6+nTjY']),
                            value: z.COMPACT
                        }
                    ],
                    onChange: this.handleMessageDisplayModeChange,
                    value: this.props.messageDisplayCompact ? z.COMPACT : z.COZY
                }),
                (0, i.jsx)(u.FormSwitch, {
                    value: this.props.messageDisplayCompact && this.props.displayCompactAvatars,
                    disabled: !this.props.messageDisplayCompact,
                    onChange: this.handleDisplayCompactAvatarsChanged,
                    className: Y.marginTop20,
                    children: V.intl.string(V.t['7FVjFB'])
                })
            ]
        });
    }
    renderListSpacing() {
        let { isRefreshEnabled: e, listDensity: t } = this.props;
        return e
            ? (0, i.jsxs)(O.F, {
                  setting: F.s6.APPEARANCE_LIST_SPACING,
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
                          className: Y.marginTop8,
                          children: [
                              (0, i.jsx)(u.FormText, {
                                  type: u.FormTextTypes.DESCRIPTION,
                                  className: Y.marginBottom8,
                                  children: 'Adjust how compact or spacious the app appears.'
                              }),
                              (0, i.jsx)(u.RadioGroup, {
                                  options: [
                                      {
                                          name: V.intl.string(V.t.T7G4Y2),
                                          value: U.fx.COZY,
                                          desc: 'Relaxed layout with room to breath'
                                      },
                                      {
                                          name: V.intl.string(V.t['7iegX1']),
                                          value: U.fx.COMPACT,
                                          desc: 'Dense layout with minimal spacing'
                                      }
                                  ],
                                  onChange: this.handleListDensityModeChange,
                                  value: t
                              })
                          ]
                      }),
                      (0, i.jsx)(u.FormDivider, { className: Y.marginTop8 })
                  ]
              })
            : null;
    }
    handleDarkSidebarChecked() {
        (0, x.lq)();
    }
    renderScalingAndSpacing() {
        return (0, i.jsxs)(i.Fragment, {
            children: [this.renderFontScaleSlider(), this.renderMessageGroupSpacingSlider(), this.renderZoomSlider(), (0, i.jsx)(u.FormDivider, { className: Y.marginTop20 })]
        });
    }
    renderTimestampHourCycle() {
        let { timestampHourCycle: e } = this.props;
        return (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(u.FormItem, {
                    title: V.intl.string(V.t.dyamEB),
                    className: Y.marginTop20,
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
                (0, i.jsx)(u.FormDivider, { className: Y.marginTop8 })
            ]
        });
    }
    renderVisualRefreshOverride() {
        let { isRefreshEnabled: e, isRefreshExperimentEnabled: t } = this.props;
        return t
            ? (0, i.jsx)(u.FormItem, {
                  className: Y.marginTop8,
                  children: (0, i.jsx)(u.FormSwitch, {
                      value: e,
                      onChange: this.handleDesktopRefreshEnabledChanged,
                      className: Y.marginTop20,
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
                (0, i.jsxs)(O.F, {
                    setting: F.s6.APPEARANCE_THEME,
                    children: [this.renderPreview(), this.renderTheme()]
                }),
                (0, i.jsx)(O.F, {
                    setting: F.s6.APPEARANCE_MESSAGE_DISPLAY_COMPACT,
                    children: this.renderDisplayMode()
                }),
                this.renderListSpacing(),
                (0, i.jsx)(O.F, {
                    setting: F.s6.APPEARANCE_SCALING_SPACING,
                    children: this.renderScalingAndSpacing()
                }),
                (0, i.jsx)(O.F, {
                    setting: F.s6.APPEARANCE_TIMESTAMP_HOUR_CYCLE,
                    children: this.renderTimestampHourCycle()
                }),
                (0, i.jsx)(u.Text, {
                    variant: 'text-md/normal',
                    className: Y.marginTop20,
                    children: V.intl.format(V.t['5LEQdX'], {
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
            H(this, 'darkMessages', Q(M.BRd.DARK)),
            H(this, 'lightMessages', Q(M.BRd.LIGHT)),
            H(this, 'handleDisplayCompactAvatarsChanged', (e) => {
                m.ZP.updatedUnsyncedSettings({ displayCompactAvatars: e });
            }),
            H(this, 'handleDesktopRefreshEnabledChanged', (e) => {
                m.ZP.updatedUnsyncedSettings({ disableVisualRefresh: !e });
            }),
            H(this, 'handleMessageDisplayModeChange', (e) => {
                let { value: t } = e;
                B.jU.updateSetting(t === z.COMPACT), (0, x.ZZ)();
            }),
            H(this, 'handleListDensityModeChange', (e) => {
                let { value: t } = e;
                B.N5.updateSetting(t);
            });
    }
}
let ee = (e) => {
    !(0, I.un)(e) &&
        (0, I.EW)(e, {
            dismissAction: k.L.AUTO,
            forceTrack: !0
        });
};
function et() {
    let e = B.jU.useSetting(),
        t = B.RS.useSetting(),
        n = B.NA.useSetting(),
        s = B.L1.useSetting(),
        r = B.hg.useSetting(),
        l = B.N5.useSetting();
    (0, g.Z)(() => {
        ee(o.z.CLIENT_THEMES_SETTINGS_BADGE), ee(o.z.DEKSTOP_CUSTOM_APP_ICON_BADGE), ee(o.z.DEKSTOP_CUSTOM_APP_ICON_COACHMARK);
    });
    let c = (0, a.cj)([D.Z, y.ZP, S.Z, R.default, E.Z], () => {
            var e, t;
            return {
                theme: D.Z.theme,
                useForcedColors: S.Z.useForcedColors,
                useSystemTheme: y.ZP.useSystemTheme,
                darkSidebar: D.Z.darkSidebar,
                fontSize: S.Z.fontSize,
                zoom: S.Z.zoom,
                messageGroupSpacing: S.Z.messageGroupSpacing,
                displayCompactAvatars: y.ZP.displayCompactAvatars,
                isStaff: null !== (t = null === (e = R.default.getCurrentUser()) || void 0 === e ? void 0 : e.isStaff) && void 0 !== t && t,
                gradientPreset: E.Z.gradientPreset
            };
        }),
        d = (0, f.o9)('UserSettingsAppearance'),
        u = (0, f.Q3)('UserSettingsAppearance');
    return (0, i.jsx)($, {
        messageDisplayCompact: e,
        hideSimpleEmbedContent: t && n,
        clientTheme: s,
        timestampHourCycle: r,
        isRefreshEnabled: u,
        isRefreshExperimentEnabled: d,
        listDensity: l,
        ...c
    });
}
