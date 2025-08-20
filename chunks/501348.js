n.d(t, { Z: () => ea }), n(388685);
var r = n(951288),
    i = n(647438),
    a = n(120356),
    o = n.n(a),
    s = n(442837),
    l = n(704215),
    c = n(524437),
    u = n(780384),
    d = n(481060),
    f = n(153867),
    _ = n(230711),
    p = n(493773),
    h = n(714338),
    m = n(857595),
    g = n(607070),
    E = n(627845),
    b = n(514361),
    y = n(803038),
    O = n(600164),
    v = n(313201),
    I = n(266454),
    T = n(786761),
    S = n(3148),
    A = n(739566),
    C = n(753206),
    N = n(921801),
    R = n(984802),
    P = n(594174),
    w = n(358085),
    D = n(210887),
    x = n(740492),
    L = n(695346),
    j = n(329013),
    M = n(333859),
    k = n(726985),
    U = n(981631),
    G = n(921944),
    B = n(959517),
    Z = n(388032),
    V = n(226518),
    F = n(197571);
function H(e, t, n) {
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
function Y(e) {
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
                H(e, t, n[t]);
            });
    }
    return e;
}
function W(e, t) {
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
function K(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : W(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let z = "cozy",
    q = "compact",
    X = (0, v.hQ)(),
    Q = (0, v.hQ)(),
    J = (0, v.hQ)(),
    $ = "1337",
    ee = (e) => {
        let t = 0;
        return [
            (0, T.e5)(
                K(
                    Y(
                        {},
                        (0, S.ZP)({
                            channelId: $,
                            content: Z.intl.string(Z.t.oZxkEh),
                        }),
                    ),
                    {
                        state: U.yb.SENT,
                        id: "".concat(t++),
                    },
                ),
            ),
            (0, T.e5)(
                K(
                    Y(
                        {},
                        (0, S.ZP)({
                            channelId: $,
                            content: (0, u.wj)(e) ? Z.intl.string(Z.t["WGb/v7"]) : Z.intl.string(Z.t["62m4m5"]),
                        }),
                    ),
                    {
                        state: U.yb.SENT,
                        id: "".concat(t++),
                    },
                ),
            ),
            (0, T.e5)(
                K(
                    Y(
                        {},
                        (0, S.ZP)({
                            channelId: $,
                            content: Z.intl.string(Z.t.a0Byo6),
                        }),
                    ),
                    {
                        state: U.yb.SENT,
                        id: "".concat(t++),
                    },
                ),
            ),
            (0, T.e5)(
                K(
                    Y(
                        {},
                        (0, S.ZP)({
                            channelId: $,
                            content: Z.intl.string(Z.t.bmwEWF),
                        }),
                    ),
                    {
                        state: U.yb.SENT,
                        id: "".concat(t++),
                    },
                ),
            ),
            (0, T.e5)(
                K(
                    Y(
                        {},
                        (0, S.ZP)({
                            channelId: $,
                            content: Z.intl.string(Z.t.hK9QW1),
                        }),
                    ),
                    {
                        state: U.yb.SENT,
                        id: "".concat(t),
                    },
                ),
            ),
        ];
    },
    et = () =>
        (0, r.jsxs)("div", {
            className: V.themeTitle,
            children: [
                (0, r.jsxs)("div", {
                    className: V.themeTitleContainer,
                    children: [
                        (0, r.jsx)("div", {
                            className: V.title,
                            children: Z.intl.string(Z.t["0EzVsr"]),
                        }),
                        (0, r.jsx)(d.R94, {
                            type: d.R94.Types.DESCRIPTION,
                            className: V.subtext,
                            children: Z.intl.string(Z.t.PV3dGR),
                        }),
                    ],
                }),
                (0, r.jsx)(j.g, {}),
            ],
        });
class en extends i.Component {
    renderZoomSlider() {
        return w.isPlatformEmbedded
            ? (0, r.jsxs)(d.xJW, {
                  className: F.marginTop20,
                  children: [
                      (0, r.jsx)(d.vwX, {
                          id: X,
                          tag: d.RB0.H5,
                          className: o()(V.title, F.marginBottom8),
                          children: Z.intl.string(Z.t.i19n5O),
                      }),
                      (0, r.jsx)(d.R94, {
                          type: d.geA.DESCRIPTION,
                          className: V.subtext,
                          children: Z.intl.string(Z.t.ip0uSU),
                      }),
                      (0, r.jsx)(d.iRW, {
                          className: o()(F.marginTop20, F.marginBottom4),
                          initialValue: this.props.zoom,
                          defaultValue: U.yqN.ZOOM_DEFAULT,
                          markers: U.yqN.ZOOM_SCALES,
                          stickToMarkers: !0,
                          onValueChange: this.handleZoomChange,
                          onValueRender: this.handleSliderRender,
                          "aria-labelledby": X,
                      }),
                      (0, r.jsx)(d.R94, {
                          type: d.R94.Types.DESCRIPTION,
                          children: Z.intl.format(Z.t.OMkSUl, { modKey: h.Z.modKey }),
                      }),
                  ],
              })
            : null;
    }
    renderFontScaleSlider() {
        return (0, r.jsxs)(d.xJW, {
            className: F.marginTop20,
            children: [
                (0, r.jsx)(d.vwX, {
                    id: Q,
                    tag: d.RB0.H5,
                    className: o()(V.title, F.marginBottom8),
                    children: Z.intl.string(Z.t.qPOqoK),
                }),
                (0, r.jsx)(d.R94, {
                    type: d.geA.DESCRIPTION,
                    className: V.subtext,
                    children: "Increase or decrease the size of the chat font",
                }),
                (0, r.jsx)(O.Z, {
                    align: O.Z.Align.CENTER,
                    children: (0, r.jsx)(d.iRW, {
                        className: o()({
                            [F.marginTop20]: !1,
                            [F.marginBottom4]: !1,
                        }),
                        initialValue: this.props.fontSize,
                        defaultValue: U.yqN.FONT_SIZE_DEFAULT,
                        markers: U.yqN.FONT_SIZES,
                        stickToMarkers: !0,
                        onValueChange: this.handleFontSizeChange,
                        onValueRender: this.handleSliderRenderPX,
                        onMarkerRender: this.handleSliderRenderPX,
                        getAriaValueText: this.handleSliderValueText,
                        "aria-labelledby": Q,
                    }),
                }),
            ],
        });
    }
    renderMessageGroupSpacingSlider() {
        let { messageDisplayCompact: e, messageGroupSpacing: t } = this.props;
        return (0, r.jsxs)(d.xJW, {
            className: V.messageGroupingSpacing,
            children: [
                (0, r.jsx)(d.vwX, {
                    id: J,
                    tag: d.RB0.H5,
                    className: o()(V.title, F.marginBottom8),
                    children: Z.intl.string(Z.t.Q6lKkp),
                }),
                (0, r.jsx)(d.R94, {
                    type: d.geA.DESCRIPTION,
                    className: V.subtext,
                    children: Z.intl.string(Z.t.p7eUra),
                }),
                (0, r.jsx)(d.iRW, {
                    initialValue: t,
                    defaultValue: e ? B.c8 : B.pq,
                    markers: B.fP,
                    stickToMarkers: !0,
                    onValueChange: this.handleMessageSpacingChange,
                    onValueRender: this.handleSliderRenderPX,
                    onMarkerRender: this.handleSliderRenderPX,
                    getAriaValueText: this.handleSliderValueText,
                    "aria-labelledby": J,
                }),
            ],
        });
    }
    renderPreview() {
        let { messageDisplayCompact: e, theme: t, messageGroupSpacing: n, hideSimpleEmbedContent: i } = this.props,
            a = (0, u.wj)(t) ? this.darkMessages : this.lightMessages;
        return (0, r.jsx)(d.Rny, {
            children: (0, r.jsx)(d.Zbd, {
                className: o()(
                    V.preview,
                    F.marginBottom40,
                    e ? V.compactPreview : void 0,
                    "group-spacing-".concat(null != n ? n : e ? B.c8 : B.pq),
                ),
                outline: !0,
                "aria-hidden": !0,
                children: a.map((t, n) =>
                    (0, r.jsx)(
                        C.Z,
                        {
                            author: (0, A.ZH)(t),
                            message: t,
                            compact: e,
                            isGroupStart: n % 2 == 0,
                            className: 0 === n ? V.firstMessage : void 0,
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
            ? (0, r.jsx)(d.xJW, {
                  className: o()(F.marginTop8, F.marginBottom40),
                  title: (0, r.jsx)("div", {
                      className: V.themeTitle,
                      children: (0, r.jsx)("div", {
                          className: V.title,
                          children: Z.intl.string(Z.t.Ksh3io),
                      }),
                  }),
                  children: (0, r.jsx)(d.R94, {
                      type: d.R94.Types.DEFAULT,
                      className: V.forcedColorsWarning,
                      children: (0, E.b)()
                          ? Z.intl.format(Z.t.Jae48P, {
                                onClick: () => {
                                    _.Z.open(U.oAB.ACCESSIBILITY);
                                },
                            })
                          : Z.intl.string(Z.t.AUMSZG),
                  }),
              })
            : (0, r.jsxs)(d.Kqy, {
                  gap: 24,
                  children: [
                      (0, r.jsx)(d.Text, {
                          variant: "text-lg/medium",
                          className: V.title,
                          children: Z.intl.string(Z.t.Ksh3io),
                      }),
                      (0, r.jsx)(d.xJW, {
                          title: (0, r.jsx)(et, {}),
                          children: (0, r.jsx)(j.i, {}),
                      }),
                  ],
              });
    }
    renderDisplayMode() {
        return (0, r.jsxs)(d.xJW, {
            title: Z.intl.string(Z.t.ZEoGMT),
            className: F.marginTop8,
            children: [
                (0, r.jsx)(d.FXm, {
                    options: [
                        {
                            name: Z.intl.string(Z.t.KZIadn),
                            value: z,
                        },
                        {
                            name: Z.intl.string(Z.t["6+nTjY"]),
                            value: q,
                        },
                    ],
                    onChange: this.handleMessageDisplayModeChange,
                    value: this.props.messageDisplayCompact ? q : z,
                }),
                (0, r.jsx)(d.j7V, {
                    value: this.props.messageDisplayCompact && this.props.displayCompactAvatars,
                    disabled: !this.props.messageDisplayCompact,
                    onChange: this.handleDisplayCompactAvatarsChanged,
                    className: F.marginTop20,
                    children: Z.intl.string(Z.t["7FVjFB"]),
                }),
            ],
        });
    }
    renderListSpacing() {
        let { density: e } = this.props;
        return (0, r.jsxs)(N.F, {
            setting: k.s6.APPEARANCE_LIST_SPACING,
            children: [
                (0, r.jsxs)(d.xJW, {
                    title: (0, r.jsx)("div", {
                        style: {
                            display: "flex",
                            gap: 8,
                            alignItems: "center",
                        },
                        children: "UI Density",
                    }),
                    className: F.marginTop8,
                    children: [
                        (0, r.jsx)(d.R94, {
                            type: d.geA.DESCRIPTION,
                            className: F.marginBottom8,
                            children:
                                "Adjust the spacing and layout to balance readability and content based on your preferences.",
                        }),
                        (0, r.jsx)(d.FXm, {
                            options: [
                                {
                                    name: Z.intl.string(Z.t.T7G4Y2),
                                    value: c.Pi.COZY,
                                    desc: "Comfortable spacing for easier readability",
                                },
                                {
                                    name: Z.intl.string(Z.t["7iegX1"]),
                                    value: c.Pi.COMPACT,
                                    desc: "Tighter layout to fit more content",
                                },
                            ],
                            onChange: this.handleUIDensityChange,
                            value: e,
                        }),
                    ],
                }),
                (0, r.jsx)(d.$i$, { className: F.marginTop8 }),
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
                (0, r.jsx)(d.$i$, { className: F.marginTop20 }),
            ],
        });
    }
    renderTimestampHourCycle() {
        let { timestampHourCycle: e } = this.props;
        return (0, r.jsx)(d.xJW, {
            title: (0, r.jsx)(d.Text, {
                variant: "text-lg/medium",
                className: o()(V.timeTitle, V.title),
                children: Z.intl.string(Z.t.dyamEB),
            }),
            children: (0, r.jsx)(d.FXm, {
                options: [
                    {
                        name: Z.intl.string(Z.t.FMWYvb),
                        value: c.hg.AUTO,
                    },
                    {
                        name: Z.intl.string(Z.t.p8NOws),
                        value: c.hg.H12,
                    },
                    {
                        name: Z.intl.string(Z.t["+o/sOj"]),
                        value: c.hg.H23,
                    },
                ],
                onChange: (e) => L.hg.updateSetting(e.value),
                value: e,
            }),
        });
    }
    render() {
        return (0, r.jsxs)(d.hjN, {
            tag: d.RB0.H1,
            title: Z.intl.string(Z.t["iHH+k5"]),
            children: [
                (0, r.jsxs)(N.F, {
                    setting: k.s6.APPEARANCE_THEME,
                    children: [this.renderPreview(), this.renderTheme()],
                }),
                (0, r.jsx)(N.F, {
                    setting: k.s6.APPEARANCE_MESSAGE_DISPLAY_COMPACT,
                    children: this.renderDisplayMode(),
                }),
                this.renderListSpacing(),
                (0, r.jsx)(N.F, {
                    setting: k.s6.APPEARANCE_SCALING_SPACING,
                    children: this.renderScalingAndSpacing(),
                }),
                (0, r.jsxs)(N.F, {
                    setting: k.s6.APPEARANCE_TIMESTAMP_HOUR_CYCLE,
                    children: [this.renderTimestampHourCycle(), (0, r.jsx)(d.$i$, { className: F.marginTop8 })],
                }),
                (0, r.jsx)(d.Text, {
                    variant: "text-md/normal",
                    className: F.marginTop20,
                    children: Z.intl.format(Z.t["5LEQdX"], {
                        onAccessibilityClick() {
                            _.Z.open(U.oAB.ACCESSIBILITY);
                        },
                    }),
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
        return Z.intl.formatToPlainString(Z.t["0hpvOT"], { value: e });
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
            H(this, "darkMessages", ee(U.BRd.DARK)),
            H(this, "lightMessages", ee(U.BRd.LIGHT)),
            H(this, "handleDisplayCompactAvatarsChanged", (e) => {
                f.ZP.updatedUnsyncedSettings({ displayCompactAvatars: e });
            }),
            H(this, "handleDesktopRefreshEnabledChanged", (e) => {
                f.ZP.updatedUnsyncedSettings({ disableVisualRefresh: !e });
            }),
            H(this, "handleMessageDisplayModeChange", (e) => {
                let { value: t } = e;
                L.jU.updateSetting(t === q), (0, m.ZZ)();
            }),
            H(this, "handleUIDensityChange", (e) => {
                let { value: t } = e;
                t !== c.Pi.UNSET_UI_DENSITY && L.YC.updateSetting(t);
            });
    }
}
class er extends en {
    render() {
        let { density: e } = this.props,
            t = (0, r.jsxs)(N.F, {
                setting: k.s6.APPEARANCE_THEME,
                children: [this.renderPreview(), this.renderTheme()],
            }),
            n = (0, r.jsx)(N.F, {
                setting: k.s6.APPEARANCE_ICON,
                children: (0, r.jsx)(M.c, {}),
            }),
            i = [
                {
                    name: Z.intl.string(Z.t["7iegX1"]),
                    value: c.Pi.COMPACT,
                },
                {
                    name: Z.intl.string(Z.t.bBvAEB),
                    value: c.Pi.DEFAULT,
                },
                {
                    name: Z.intl.string(Z.t["4cuYHx"]),
                    value: c.Pi.COZY,
                },
            ],
            a = (0, r.jsxs)(N.F, {
                setting: k.s6.APPEARANCE_LIST_SPACING,
                children: [
                    (0, r.jsxs)(d.xJW, {
                        title: (0, r.jsx)(d.Text, {
                            variant: "text-lg/medium",
                            className: V.title,
                            children: Z.intl.string(Z.t["C/5V0N"]),
                        }),
                        children: [
                            (0, r.jsx)(d.R94, {
                                type: d.geA.DESCRIPTION,
                                className: V.subtext,
                                children: Z.intl.string(Z.t.QLZhYm),
                            }),
                            (0, r.jsx)(d.FXm, {
                                options: i,
                                onChange: this.handleUIDensityChange,
                                value: e,
                            }),
                        ],
                    }),
                    (0, r.jsx)(d.$i$, { className: V.divider }),
                ],
            }),
            o = (0, r.jsxs)(N.F, {
                setting: k.s6.APPEARANCE_MESSAGE_DISPLAY_COMPACT,
                children: [
                    (0, r.jsxs)(d.Kqy, {
                        gap: 8,
                        padding: { bottom: 8 },
                        children: [
                            (0, r.jsx)(d.Text, {
                                variant: "text-lg/medium",
                                className: V.title,
                                children: Z.intl.string(Z.t["2ed/sL"]),
                            }),
                            (0, r.jsx)(d.Text, {
                                variant: "text-sm/normal",
                                className: V.subtext,
                                children: Z.intl.string(Z.t.u9N6Qk),
                            }),
                        ],
                    }),
                    (0, r.jsxs)(d.xJW, {
                        titleClassName: V.title,
                        title: Z.intl.string(Z.t.nKRoPj),
                        children: [
                            (0, r.jsx)(d.R94, {
                                type: d.geA.DESCRIPTION,
                                className: V.subtext,
                                children: Z.intl.string(Z.t.QntEEB),
                            }),
                            (0, r.jsx)(d.FXm, {
                                options: [
                                    {
                                        name: Z.intl.string(Z.t.Jqj4cX),
                                        value: z,
                                    },
                                    {
                                        name: Z.intl.string(Z.t["1JNcPT"]),
                                        value: q,
                                    },
                                ],
                                onChange: this.handleMessageDisplayModeChange,
                                value: this.props.messageDisplayCompact ? q : z,
                            }),
                            this.props.messageDisplayCompact &&
                                (0, r.jsx)(d.j7V, {
                                    className: V.compactModeToggle,
                                    hideBorder: !0,
                                    value: !this.props.displayCompactAvatars,
                                    onChange: (e) => this.handleDisplayCompactAvatarsChanged(!e),
                                    children: (0, r.jsx)(d.Text, {
                                        variant: "text-md/medium",
                                        children: Z.intl.string(Z.t["//vhWl"]),
                                    }),
                                }),
                        ],
                    }),
                    this.renderMessageGroupSpacingSlider(),
                    (0, r.jsx)(d.$i$, { className: V.divider }),
                ],
            }),
            s = (0, r.jsxs)(N.F, {
                setting: k.s6.APPEARANCE_SCALING_SPACING,
                children: [
                    (0, r.jsx)(d.Text, {
                        variant: "text-lg/medium",
                        className: V.title,
                        children: Z.intl.string(Z.t["0Yh+ZW"]),
                    }),
                    this.renderFontScaleSlider(),
                    this.renderZoomSlider(),
                    (0, r.jsx)(d.$i$, { className: V.divider }),
                ],
            }),
            l = (0, r.jsx)(N.F, {
                setting: k.s6.APPEARANCE_TIMESTAMP_HOUR_CYCLE,
                children: this.renderTimestampHourCycle(),
            }),
            u = (0, r.jsx)(d.Text, {
                variant: "text-md/normal",
                className: V.a11yCallout,
                children: Z.intl.format(Z.t["5LEQdX"], {
                    onAccessibilityClick() {
                        _.Z.open(U.oAB.ACCESSIBILITY);
                    },
                }),
            });
        return (0, r.jsxs)(d.hjN, {
            tag: d.RB0.H1,
            title: Z.intl.string(Z.t["iHH+k5"]),
            children: [t, n, a, o, s, l, u],
        });
    }
}
let ei = (e) => {
    (0, I.zu)(e) ||
        (0, I.Q3)(e, {
            dismissAction: G.L.AUTO,
            forceTrack: !0,
        });
};
function ea() {
    let e = L.jU.useSetting(),
        t = L.RS.useSetting(),
        n = L.NA.useSetting(),
        a = L.L1.useSetting(),
        o = L.hg.useSetting(),
        c = L.YC.useSetting(),
        u = y.Mc.useExperiment({ location: "UserSettingsAppearance" }).enabled;
    (0, p.ZP)(() => {
        ei(l.z.CLIENT_THEMES_SETTINGS_BADGE),
            ei(l.z.DEKSTOP_CUSTOM_APP_ICON_BADGE),
            ei(l.z.DEKSTOP_CUSTOM_APP_ICON_COACHMARK);
    }),
        i.useEffect(() => {
            u && ei(l.z.CLIENT_THEMES_APPEARANCE_SETTINGS_NEW_BADGE);
        }, [u]);
    let d = (0, R.A6)(),
        f = (0, s.cj)([D.Z, x.ZP, g.Z, P.default, b.Z], () => {
            var e, t;
            return {
                theme: D.Z.theme,
                useForcedColors: g.Z.useForcedColors,
                useSystemTheme: x.ZP.useSystemTheme,
                fontSize: g.Z.fontSize,
                zoom: g.Z.zoom,
                messageGroupSpacing: g.Z.messageGroupSpacing,
                displayCompactAvatars: x.ZP.displayCompactAvatars,
                isStaff: null != (t = null == (e = P.default.getCurrentUser()) ? void 0 : e.isStaff) && t,
                gradientPreset: b.Z.gradientPreset,
            };
        });
    return (0, r.jsx)(
        er,
        Y(
            {
                messageDisplayCompact: e,
                hideSimpleEmbedContent: t && n,
                clientTheme: a,
                timestampHourCycle: o,
                density: c,
                darkSidebar: d,
            },
            f,
        ),
    );
}
