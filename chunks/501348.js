n.d(t, { Z: () => ec }), n(388685);
var r = n(951288),
    i = n(647438),
    a = n(120356),
    o = n.n(a),
    s = n(442837),
    l = n(704215),
    c = n(524437),
    u = n(780384),
    d = n(755721),
    f = n(481060),
    _ = n(153867),
    p = n(493773),
    h = n(714338),
    m = n(857595),
    g = n(607070),
    E = n(627845),
    b = n(368763),
    y = n(514361),
    O = n(803038),
    v = n(600164),
    I = n(313201),
    T = n(266454),
    S = n(786761),
    A = n(3148),
    C = n(739566),
    N = n(753206),
    R = n(921801),
    P = n(984802),
    w = n(594174),
    D = n(358085),
    x = n(210887),
    L = n(740492),
    j = n(695346),
    M = n(313789),
    k = n(329013),
    U = n(333859),
    G = n(947889),
    B = n(726985),
    Z = n(981631),
    F = n(921944),
    V = n(959517),
    H = n(388032),
    Y = n(226518),
    W = n(197571);
function K(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function z(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                K(e, t, n[t]);
            });
    }
    return e;
}
function q(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function X(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : q(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let Q = "cozy",
    J = "compact",
    $ = (0, I.hQ)(),
    ee = (0, I.hQ)(),
    et = (0, I.hQ)(),
    en = "1337",
    er = (e) => {
        let t = 0;
        return [
            (0, S.e5)(
                X(
                    z(
                        {},
                        (0, A.ZP)({
                            channelId: en,
                            content: H.intl.string(H.t.oZxkEh),
                        }),
                    ),
                    {
                        state: Z.yb.SENT,
                        id: "".concat(t++),
                    },
                ),
            ),
            (0, S.e5)(
                X(
                    z(
                        {},
                        (0, A.ZP)({
                            channelId: en,
                            content: (0, u.wj)(e) ? H.intl.string(H.t["WGb/v7"]) : H.intl.string(H.t["62m4m5"]),
                        }),
                    ),
                    {
                        state: Z.yb.SENT,
                        id: "".concat(t++),
                    },
                ),
            ),
            (0, S.e5)(
                X(
                    z(
                        {},
                        (0, A.ZP)({
                            channelId: en,
                            content: H.intl.string(H.t.a0Byo6),
                        }),
                    ),
                    {
                        state: Z.yb.SENT,
                        id: "".concat(t++),
                    },
                ),
            ),
            (0, S.e5)(
                X(
                    z(
                        {},
                        (0, A.ZP)({
                            channelId: en,
                            content: H.intl.string(H.t.bmwEWF),
                        }),
                    ),
                    {
                        state: Z.yb.SENT,
                        id: "".concat(t++),
                    },
                ),
            ),
            (0, S.e5)(
                X(
                    z(
                        {},
                        (0, A.ZP)({
                            channelId: en,
                            content: H.intl.string(H.t.hK9QW1),
                        }),
                    ),
                    {
                        state: Z.yb.SENT,
                        id: "".concat(t),
                    },
                ),
            ),
        ];
    },
    ei = () =>
        (0, r.jsxs)("div", {
            className: Y.themeTitle,
            children: [
                (0, r.jsxs)("div", {
                    className: Y.themeTitleContainer,
                    children: [
                        (0, r.jsx)("div", {
                            className: Y.title,
                            children: H.intl.string(H.t["0EzVsr"]),
                        }),
                        (0, r.jsx)(f.R94, {
                            type: f.R94.Types.DESCRIPTION,
                            className: Y.subtext,
                            children: H.intl.string(H.t.PV3dGR),
                        }),
                    ],
                }),
                (0, r.jsx)(k.g, {}),
            ],
        }),
    ea = () => {
        let e = (0, G.Z)();
        return H.intl.format(H.t.Jae48P, {
            onClick: () => {
                e(M.n.ACCESSIBILITY_PANEL, { section: Z.oAB.ACCESSIBILITY });
            },
        });
    };
class eo extends i.Component {
    renderZoomSlider() {
        return D.isPlatformEmbedded
            ? (0, r.jsxs)("div", {
                  className: W.marginTop20,
                  children: [
                      (0, r.jsx)(f.vwX, {
                          id: $,
                          className: o()(Y.title, W.marginBottom8),
                          children: H.intl.string(H.t.i19n5O),
                      }),
                      (0, r.jsx)(f.R94, {
                          type: f.geA.DESCRIPTION,
                          className: Y.subtext,
                          children: H.intl.string(H.t.ip0uSU),
                      }),
                      (0, r.jsx)(f.iRW, {
                          className: o()(W.marginTop20, W.marginBottom4),
                          initialValue: this.props.zoom,
                          defaultValue: Z.yqN.ZOOM_DEFAULT,
                          markers: Z.yqN.ZOOM_SCALES,
                          stickToMarkers: !0,
                          onValueChange: this.handleZoomChange,
                          onValueRender: this.handleSliderRender,
                          "aria-labelledby": $,
                      }),
                      (0, r.jsx)(f.R94, {
                          type: f.R94.Types.DESCRIPTION,
                          children: H.intl.format(H.t.OMkSUl, { modKey: h.Z.modKey }),
                      }),
                  ],
              })
            : null;
    }
    renderFontScaleSlider() {
        return (0, r.jsxs)("div", {
            className: W.marginTop20,
            children: [
                (0, r.jsx)(f.vwX, {
                    id: ee,
                    className: o()(Y.title, W.marginBottom8),
                    children: H.intl.string(H.t.qPOqoK),
                }),
                (0, r.jsx)(f.R94, {
                    type: f.geA.DESCRIPTION,
                    className: Y.subtext,
                    children: "Increase or decrease the size of the chat font",
                }),
                (0, r.jsx)(v.Z, {
                    align: v.Z.Align.CENTER,
                    children: (0, r.jsx)(f.iRW, {
                        className: o()({
                            [W.marginTop20]: !1,
                            [W.marginBottom4]: !1,
                        }),
                        initialValue: this.props.fontSize,
                        defaultValue: Z.yqN.FONT_SIZE_DEFAULT,
                        markers: Z.yqN.FONT_SIZES,
                        stickToMarkers: !0,
                        onValueChange: this.handleFontSizeChange,
                        onValueRender: this.handleSliderRenderPX,
                        onMarkerRender: this.handleSliderRenderPX,
                        getAriaValueText: this.handleSliderValueText,
                        "aria-labelledby": ee,
                    }),
                }),
            ],
        });
    }
    renderMessageGroupSpacingSlider() {
        let { messageDisplayCompact: e, messageGroupSpacing: t } = this.props;
        return (0, r.jsxs)("div", {
            className: Y.messageGroupingSpacing,
            children: [
                (0, r.jsx)(f.vwX, {
                    id: et,
                    className: o()(Y.title, W.marginBottom8),
                    children: H.intl.string(H.t.Q6lKkp),
                }),
                (0, r.jsx)(f.R94, {
                    type: f.geA.DESCRIPTION,
                    className: Y.subtext,
                    children: H.intl.string(H.t.p7eUra),
                }),
                (0, r.jsx)(f.iRW, {
                    initialValue: t,
                    defaultValue: e ? V.c8 : V.pq,
                    markers: V.fP,
                    stickToMarkers: !0,
                    onValueChange: this.handleMessageSpacingChange,
                    onValueRender: this.handleSliderRenderPX,
                    onMarkerRender: this.handleSliderRenderPX,
                    getAriaValueText: this.handleSliderValueText,
                    "aria-labelledby": et,
                }),
            ],
        });
    }
    renderPreview() {
        let { messageDisplayCompact: e, theme: t, messageGroupSpacing: n, hideSimpleEmbedContent: i } = this.props,
            a = (0, u.wj)(t) ? this.darkMessages : this.lightMessages;
        return (0, r.jsx)(f.Rny, {
            children: (0, r.jsx)(f.Zbd, {
                className: o()(
                    Y.preview,
                    W.marginBottom40,
                    e ? Y.compactPreview : void 0,
                    "group-spacing-".concat(null != n ? n : e ? V.c8 : V.pq),
                ),
                outline: !0,
                "aria-hidden": !0,
                children: a.map((t, n) =>
                    (0, r.jsx)(
                        N.Z,
                        {
                            author: (0, C.ZH)(t),
                            message: t,
                            compact: e,
                            isGroupStart: n % 2 == 0,
                            className: 0 === n ? Y.firstMessage : void 0,
                            hideSimpleEmbedContent: i,
                        },
                        t.id,
                    ),
                ),
            }),
        });
    }
    renderTheme() {
        let { useForcedColors: e } = this.props;
        return e
            ? (0, r.jsx)(f.xJW, {
                  className: o()(W.marginTop8, W.marginBottom40),
                  title: (0, r.jsx)("div", {
                      className: Y.themeTitle,
                      children: (0, r.jsx)("div", {
                          className: Y.title,
                          children: H.intl.string(H.t.Ksh3io),
                      }),
                  }),
                  children: (0, r.jsx)(f.R94, {
                      type: f.R94.Types.DEFAULT,
                      className: Y.forcedColorsWarning,
                      children: (0, E.b)() ? (0, r.jsx)(ea, {}) : H.intl.string(H.t.AUMSZG),
                  }),
              })
            : (0, r.jsxs)(f.Kqy, {
                  gap: 24,
                  children: [
                      (0, r.jsx)(f.Text, {
                          variant: "text-lg/medium",
                          className: Y.title,
                          children: H.intl.string(H.t.Ksh3io),
                      }),
                      (0, r.jsx)(f.xJW, {
                          title: (0, r.jsx)(ei, {}),
                          children: (0, r.jsx)(k.i, {}),
                      }),
                  ],
              });
    }
    renderDisplayMode() {
        return (0, r.jsxs)(f.xJW, {
            title: H.intl.string(H.t.ZEoGMT),
            className: W.marginTop8,
            children: [
                (0, r.jsx)(d.Gu, {
                    options: [
                        {
                            name: H.intl.string(H.t.KZIadn),
                            value: Q,
                        },
                        {
                            name: H.intl.string(H.t["6+nTjY"]),
                            value: J,
                        },
                    ],
                    onChange: this.handleMessageDisplayModeChange,
                    value: this.props.messageDisplayCompact ? J : Q,
                }),
                (0, r.jsx)(f.j7V, {
                    value: this.props.messageDisplayCompact && this.props.displayCompactAvatars,
                    disabled: !this.props.messageDisplayCompact,
                    onChange: this.handleDisplayCompactAvatarsChanged,
                    className: W.marginTop20,
                    children: H.intl.string(H.t["7FVjFB"]),
                }),
            ],
        });
    }
    renderListSpacing() {
        let { density: e } = this.props;
        return (0, r.jsxs)(R.F, {
            setting: B.s6.APPEARANCE_LIST_SPACING,
            children: [
                (0, r.jsxs)(f.xJW, {
                    title: (0, r.jsx)("div", {
                        style: {
                            display: "flex",
                            gap: 8,
                            alignItems: "center",
                        },
                        children: "UI Density",
                    }),
                    className: W.marginTop8,
                    children: [
                        (0, r.jsx)(f.R94, {
                            type: f.geA.DESCRIPTION,
                            className: W.marginBottom8,
                            children:
                                "Adjust the spacing and layout to balance readability and content based on your preferences.",
                        }),
                        (0, r.jsx)(d.Gu, {
                            options: [
                                {
                                    name: H.intl.string(H.t.T7G4Y2),
                                    value: c.Pi.COZY,
                                    desc: "Comfortable spacing for easier readability",
                                },
                                {
                                    name: H.intl.string(H.t["7iegX1"]),
                                    value: c.Pi.COMPACT,
                                    desc: "Tighter layout to fit more content",
                                },
                            ],
                            onChange: this.handleUIDensityChange,
                            value: e,
                        }),
                    ],
                }),
                (0, r.jsx)(f.$i$, { className: W.marginTop8 }),
            ],
        });
    }
    handleDarkSidebarChecked() {
        (0, m.lq)();
    }
    renderScalingAndSpacing() {
        return (0, r.jsxs)(r.Fragment, {
            children: [
                this.renderFontScaleSlider(),
                this.renderMessageGroupSpacingSlider(),
                this.renderZoomSlider(),
                (0, r.jsx)(f.$i$, { className: W.marginTop20 }),
            ],
        });
    }
    renderTimestampHourCycle() {
        let { timestampHourCycle: e } = this.props;
        return (0, r.jsx)(f.FXm, {
            label: H.intl.string(H.t.dyamEB),
            options: [
                {
                    name: H.intl.string(H.t.FMWYvb),
                    value: c.hg.AUTO,
                },
                {
                    name: H.intl.string(H.t.p8NOws),
                    value: c.hg.H12,
                },
                {
                    name: H.intl.string(H.t["+o/sOj"]),
                    value: c.hg.H23,
                },
            ],
            onChange: (e) => j.hg.updateSetting(e),
            value: e,
        });
    }
    render() {
        return (0, r.jsxs)(f.hjN, {
            tag: f.RB0.H1,
            title: H.intl.string(H.t["iHH+k5"]),
            children: [
                (0, r.jsxs)(R.F, {
                    setting: B.s6.APPEARANCE_THEME,
                    children: [this.renderPreview(), this.renderTheme()],
                }),
                (0, r.jsx)(R.F, {
                    setting: B.s6.APPEARANCE_MESSAGE_DISPLAY_COMPACT,
                    children: this.renderDisplayMode(),
                }),
                this.renderListSpacing(),
                (0, r.jsx)(R.F, {
                    setting: B.s6.APPEARANCE_SCALING_SPACING,
                    children: this.renderScalingAndSpacing(),
                }),
                (0, r.jsxs)(R.F, {
                    setting: B.s6.APPEARANCE_TIMESTAMP_HOUR_CYCLE,
                    children: [this.renderTimestampHourCycle(), (0, r.jsx)(f.$i$, { className: W.marginTop8 })],
                }),
                (0, r.jsx)(f.Text, {
                    variant: "text-md/normal",
                    className: W.marginTop20,
                    children: (0, r.jsx)(ea, {}),
                }),
            ],
        });
    }
    handleSliderRender(e) {
        return "".concat(e.toFixed(0), "%");
    }
    handleSliderRenderPX(e) {
        return "".concat(e.toFixed(0), "px");
    }
    handleSliderValueText(e) {
        return H.intl.formatToPlainString(H.t["0hpvOT"], { value: e });
    }
    handleFontSizeChange(e) {
        (0, m.oL)(e);
    }
    handleMessageSpacingChange(e) {
        switch (e) {
            case 0:
            case 4:
            case 8:
            case 16:
            case 24:
                (0, m.ZZ)(e);
        }
    }
    handleZoomChange(e) {
        (0, m.cq)(e);
    }
    constructor(...e) {
        super(...e),
            K(this, "darkMessages", er(Z.BRd.DARK)),
            K(this, "lightMessages", er(Z.BRd.LIGHT)),
            K(this, "handleDisplayCompactAvatarsChanged", (e) => {
                _.ZP.updatedUnsyncedSettings({ displayCompactAvatars: e });
            }),
            K(this, "handleDesktopRefreshEnabledChanged", (e) => {
                _.ZP.updatedUnsyncedSettings({ disableVisualRefresh: !e });
            }),
            K(this, "handleMessageDisplayModeChange", (e) => {
                let { value: t } = e;
                j.jU.updateSetting(t === J), (0, m.ZZ)();
            }),
            K(this, "handleUIDensityChange", (e) => {
                let { value: t } = e;
                t !== c.Pi.UNSET_UI_DENSITY && j.YC.updateSetting(t);
            });
    }
}
class es extends eo {
    render() {
        let { density: e } = this.props,
            t = (0, r.jsxs)(R.F, {
                setting: B.s6.APPEARANCE_THEME,
                children: [this.renderPreview(), this.renderTheme()],
            }),
            n = (0, r.jsx)(R.F, {
                setting: B.s6.APPEARANCE_ICON,
                children: (0, r.jsx)(U.c, {}),
            }),
            i = [
                {
                    name: H.intl.string(H.t["7iegX1"]),
                    value: c.Pi.COMPACT,
                },
                {
                    name: H.intl.string(H.t.bBvAEB),
                    value: c.Pi.DEFAULT,
                },
                {
                    name: H.intl.string(H.t["4cuYHx"]),
                    value: c.Pi.COZY,
                },
            ],
            a = (0, r.jsxs)(R.F, {
                setting: B.s6.APPEARANCE_LIST_SPACING,
                children: [
                    (0, r.jsxs)(f.xJW, {
                        title: (0, r.jsx)(f.Text, {
                            variant: "text-lg/medium",
                            className: Y.title,
                            children: H.intl.string(H.t["C/5V0N"]),
                        }),
                        children: [
                            (0, r.jsx)(f.R94, {
                                type: f.geA.DESCRIPTION,
                                className: Y.subtext,
                                children: H.intl.string(H.t.QLZhYm),
                            }),
                            (0, r.jsx)(d.Gu, {
                                options: i,
                                onChange: this.handleUIDensityChange,
                                value: e,
                            }),
                        ],
                    }),
                    (0, r.jsx)(f.$i$, { className: Y.divider }),
                ],
            }),
            o = (0, r.jsxs)(R.F, {
                setting: B.s6.APPEARANCE_MESSAGE_DISPLAY_COMPACT,
                children: [
                    (0, r.jsxs)(f.Kqy, {
                        gap: 8,
                        padding: { bottom: 8 },
                        children: [
                            (0, r.jsx)(f.Text, {
                                variant: "text-lg/medium",
                                className: Y.title,
                                children: H.intl.string(H.t["2ed/sL"]),
                            }),
                            (0, r.jsx)(f.Text, {
                                variant: "text-sm/normal",
                                className: Y.subtext,
                                children: H.intl.string(H.t.u9N6Qk),
                            }),
                        ],
                    }),
                    (0, r.jsxs)(f.xJW, {
                        titleClassName: Y.title,
                        title: H.intl.string(H.t.nKRoPj),
                        children: [
                            (0, r.jsx)(f.R94, {
                                type: f.geA.DESCRIPTION,
                                className: Y.subtext,
                                children: H.intl.string(H.t.QntEEB),
                            }),
                            (0, r.jsx)(d.Gu, {
                                options: [
                                    {
                                        name: H.intl.string(H.t.Jqj4cX),
                                        value: Q,
                                    },
                                    {
                                        name: H.intl.string(H.t["1JNcPT"]),
                                        value: J,
                                    },
                                ],
                                onChange: this.handleMessageDisplayModeChange,
                                value: this.props.messageDisplayCompact ? J : Q,
                            }),
                            this.props.messageDisplayCompact &&
                                (0, r.jsx)(f.j7V, {
                                    className: Y.compactModeToggle,
                                    hideBorder: !0,
                                    value: !this.props.displayCompactAvatars,
                                    onChange: (e) => this.handleDisplayCompactAvatarsChanged(!e),
                                    children: (0, r.jsx)(f.Text, {
                                        variant: "text-md/medium",
                                        children: H.intl.string(H.t["//vhWl"]),
                                    }),
                                }),
                        ],
                    }),
                    this.renderMessageGroupSpacingSlider(),
                    (0, r.jsx)(f.$i$, { className: Y.divider }),
                ],
            }),
            s = (0, r.jsxs)(R.F, {
                setting: B.s6.APPEARANCE_SCALING_SPACING,
                children: [
                    (0, r.jsx)(f.Text, {
                        variant: "text-lg/medium",
                        className: Y.title,
                        children: H.intl.string(H.t["0Yh+ZW"]),
                    }),
                    this.renderFontScaleSlider(),
                    this.renderZoomSlider(),
                    (0, r.jsx)(f.$i$, { className: Y.divider }),
                ],
            }),
            l = (0, r.jsx)(R.F, {
                setting: B.s6.APPEARANCE_TIMESTAMP_HOUR_CYCLE,
                children: this.renderTimestampHourCycle(),
            }),
            u = (0, r.jsx)(f.Text, {
                variant: "text-md/normal",
                className: Y.a11yCallout,
                children: (0, r.jsx)(ea, {}),
            });
        return (0, r.jsxs)(f.hjN, {
            tag: f.RB0.H1,
            title: H.intl.string(H.t["iHH+k5"]),
            children: [t, n, a, o, s, l, u],
        });
    }
}
let el = (e) => {
    (0, T.zu)(e) ||
        (0, T.Q3)(e, {
            dismissAction: F.L.AUTO,
            forceTrack: !0,
        });
};
function ec() {
    let e = j.jU.useSetting(),
        t = j.RS.useSetting(),
        n = j.NA.useSetting(),
        a = j.L1.useSetting(),
        o = j.hg.useSetting(),
        c = j.YC.useSetting(),
        u = O.Mc.useExperiment({ location: "UserSettingsAppearance" }).enabled,
        d = (0, b.T)("UserSettingsAppearance");
    (0, p.ZP)(() => {
        el(l.z.CLIENT_THEMES_SETTINGS_BADGE),
            el(l.z.DEKSTOP_CUSTOM_APP_ICON_BADGE),
            el(l.z.DEKSTOP_CUSTOM_APP_ICON_COACHMARK);
    }),
        i.useEffect(() => {
            u && el(l.z.CLIENT_THEMES_APPEARANCE_SETTINGS_NEW_BADGE),
                d && el(l.z.HALLOWEEN_APP_ICONS_APPEARANCE_SETTINGS_WEB_BADGE);
        }, [u, d]);
    let f = (0, P.A6)(),
        _ = (0, s.cj)([x.Z, L.ZP, g.Z, w.default, y.Z], () => {
            var e, t;
            return {
                theme: x.Z.theme,
                useForcedColors: g.Z.useForcedColors,
                useSystemTheme: L.ZP.useSystemTheme,
                fontSize: g.Z.fontSize,
                zoom: g.Z.zoom,
                messageGroupSpacing: g.Z.messageGroupSpacing,
                displayCompactAvatars: L.ZP.displayCompactAvatars,
                isStaff: null != (t = null == (e = w.default.getCurrentUser()) ? void 0 : e.isStaff) && t,
                gradientPreset: y.Z.gradientPreset,
            };
        });
    return (0, r.jsx)(
        es,
        z(
            {
                messageDisplayCompact: e,
                hideSimpleEmbedContent: t && n,
                clientTheme: a,
                timestampHourCycle: o,
                density: c,
                darkSidebar: f,
            },
            _,
        ),
    );
}
