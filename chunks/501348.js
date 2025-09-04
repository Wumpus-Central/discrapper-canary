n.d(t, { Z: () => eo }), n(388685);
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
    p = n(230711),
    h = n(493773),
    m = n(714338),
    g = n(857595),
    E = n(607070),
    b = n(627845),
    y = n(514361),
    O = n(803038),
    v = n(600164),
    I = n(313201),
    S = n(266454),
    T = n(786761),
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
    M = n(329013),
    k = n(333859),
    U = n(726985),
    G = n(981631),
    B = n(921944),
    Z = n(959517),
    F = n(388032),
    V = n(226518),
    H = n(197571);
function Y(e, t, n) {
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
function W(e) {
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
                Y(e, t, n[t]);
            });
    }
    return e;
}
function K(e, t) {
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
function z(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : K(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let q = "cozy",
    X = "compact",
    Q = (0, I.hQ)(),
    J = (0, I.hQ)(),
    $ = (0, I.hQ)(),
    ee = "1337",
    et = (e) => {
        let t = 0;
        return [
            (0, T.e5)(
                z(
                    W(
                        {},
                        (0, A.ZP)({
                            channelId: ee,
                            content: F.intl.string(F.t.oZxkEh),
                        }),
                    ),
                    {
                        state: G.yb.SENT,
                        id: "".concat(t++),
                    },
                ),
            ),
            (0, T.e5)(
                z(
                    W(
                        {},
                        (0, A.ZP)({
                            channelId: ee,
                            content: (0, u.wj)(e) ? F.intl.string(F.t["WGb/v7"]) : F.intl.string(F.t["62m4m5"]),
                        }),
                    ),
                    {
                        state: G.yb.SENT,
                        id: "".concat(t++),
                    },
                ),
            ),
            (0, T.e5)(
                z(
                    W(
                        {},
                        (0, A.ZP)({
                            channelId: ee,
                            content: F.intl.string(F.t.a0Byo6),
                        }),
                    ),
                    {
                        state: G.yb.SENT,
                        id: "".concat(t++),
                    },
                ),
            ),
            (0, T.e5)(
                z(
                    W(
                        {},
                        (0, A.ZP)({
                            channelId: ee,
                            content: F.intl.string(F.t.bmwEWF),
                        }),
                    ),
                    {
                        state: G.yb.SENT,
                        id: "".concat(t++),
                    },
                ),
            ),
            (0, T.e5)(
                z(
                    W(
                        {},
                        (0, A.ZP)({
                            channelId: ee,
                            content: F.intl.string(F.t.hK9QW1),
                        }),
                    ),
                    {
                        state: G.yb.SENT,
                        id: "".concat(t),
                    },
                ),
            ),
        ];
    },
    en = () =>
        (0, r.jsxs)("div", {
            className: V.themeTitle,
            children: [
                (0, r.jsxs)("div", {
                    className: V.themeTitleContainer,
                    children: [
                        (0, r.jsx)("div", {
                            className: V.title,
                            children: F.intl.string(F.t["0EzVsr"]),
                        }),
                        (0, r.jsx)(f.R94, {
                            type: f.R94.Types.DESCRIPTION,
                            className: V.subtext,
                            children: F.intl.string(F.t.PV3dGR),
                        }),
                    ],
                }),
                (0, r.jsx)(M.g, {}),
            ],
        });
class er extends i.Component {
    renderZoomSlider() {
        return D.isPlatformEmbedded
            ? (0, r.jsxs)(f.xJW, {
                  className: H.marginTop20,
                  children: [
                      (0, r.jsx)(f.vwX, {
                          id: Q,
                          tag: f.RB0.H5,
                          className: o()(V.title, H.marginBottom8),
                          children: F.intl.string(F.t.i19n5O),
                      }),
                      (0, r.jsx)(f.R94, {
                          type: f.geA.DESCRIPTION,
                          className: V.subtext,
                          children: F.intl.string(F.t.ip0uSU),
                      }),
                      (0, r.jsx)(f.iRW, {
                          className: o()(H.marginTop20, H.marginBottom4),
                          initialValue: this.props.zoom,
                          defaultValue: G.yqN.ZOOM_DEFAULT,
                          markers: G.yqN.ZOOM_SCALES,
                          stickToMarkers: !0,
                          onValueChange: this.handleZoomChange,
                          onValueRender: this.handleSliderRender,
                          "aria-labelledby": Q,
                      }),
                      (0, r.jsx)(f.R94, {
                          type: f.R94.Types.DESCRIPTION,
                          children: F.intl.format(F.t.OMkSUl, { modKey: m.Z.modKey }),
                      }),
                  ],
              })
            : null;
    }
    renderFontScaleSlider() {
        return (0, r.jsxs)(f.xJW, {
            className: H.marginTop20,
            children: [
                (0, r.jsx)(f.vwX, {
                    id: J,
                    tag: f.RB0.H5,
                    className: o()(V.title, H.marginBottom8),
                    children: F.intl.string(F.t.qPOqoK),
                }),
                (0, r.jsx)(f.R94, {
                    type: f.geA.DESCRIPTION,
                    className: V.subtext,
                    children: "Increase or decrease the size of the chat font",
                }),
                (0, r.jsx)(v.Z, {
                    align: v.Z.Align.CENTER,
                    children: (0, r.jsx)(f.iRW, {
                        className: o()({
                            [H.marginTop20]: !1,
                            [H.marginBottom4]: !1,
                        }),
                        initialValue: this.props.fontSize,
                        defaultValue: G.yqN.FONT_SIZE_DEFAULT,
                        markers: G.yqN.FONT_SIZES,
                        stickToMarkers: !0,
                        onValueChange: this.handleFontSizeChange,
                        onValueRender: this.handleSliderRenderPX,
                        onMarkerRender: this.handleSliderRenderPX,
                        getAriaValueText: this.handleSliderValueText,
                        "aria-labelledby": J,
                    }),
                }),
            ],
        });
    }
    renderMessageGroupSpacingSlider() {
        let { messageDisplayCompact: e, messageGroupSpacing: t } = this.props;
        return (0, r.jsxs)(f.xJW, {
            className: V.messageGroupingSpacing,
            children: [
                (0, r.jsx)(f.vwX, {
                    id: $,
                    tag: f.RB0.H5,
                    className: o()(V.title, H.marginBottom8),
                    children: F.intl.string(F.t.Q6lKkp),
                }),
                (0, r.jsx)(f.R94, {
                    type: f.geA.DESCRIPTION,
                    className: V.subtext,
                    children: F.intl.string(F.t.p7eUra),
                }),
                (0, r.jsx)(f.iRW, {
                    initialValue: t,
                    defaultValue: e ? Z.c8 : Z.pq,
                    markers: Z.fP,
                    stickToMarkers: !0,
                    onValueChange: this.handleMessageSpacingChange,
                    onValueRender: this.handleSliderRenderPX,
                    onMarkerRender: this.handleSliderRenderPX,
                    getAriaValueText: this.handleSliderValueText,
                    "aria-labelledby": $,
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
                    V.preview,
                    H.marginBottom40,
                    e ? V.compactPreview : void 0,
                    "group-spacing-".concat(null != n ? n : e ? Z.c8 : Z.pq),
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
            ? (0, r.jsx)(f.xJW, {
                  className: o()(H.marginTop8, H.marginBottom40),
                  title: (0, r.jsx)("div", {
                      className: V.themeTitle,
                      children: (0, r.jsx)("div", {
                          className: V.title,
                          children: F.intl.string(F.t.Ksh3io),
                      }),
                  }),
                  children: (0, r.jsx)(f.R94, {
                      type: f.R94.Types.DEFAULT,
                      className: V.forcedColorsWarning,
                      children: (0, b.b)()
                          ? F.intl.format(F.t.Jae48P, {
                                onClick: () => {
                                    p.Z.open(G.oAB.ACCESSIBILITY);
                                },
                            })
                          : F.intl.string(F.t.AUMSZG),
                  }),
              })
            : (0, r.jsxs)(f.Kqy, {
                  gap: 24,
                  children: [
                      (0, r.jsx)(f.Text, {
                          variant: "text-lg/medium",
                          className: V.title,
                          children: F.intl.string(F.t.Ksh3io),
                      }),
                      (0, r.jsx)(f.xJW, {
                          title: (0, r.jsx)(en, {}),
                          children: (0, r.jsx)(M.i, {}),
                      }),
                  ],
              });
    }
    renderDisplayMode() {
        return (0, r.jsxs)(f.xJW, {
            title: F.intl.string(F.t.ZEoGMT),
            className: H.marginTop8,
            children: [
                (0, r.jsx)(d.Gu, {
                    options: [
                        {
                            name: F.intl.string(F.t.KZIadn),
                            value: q,
                        },
                        {
                            name: F.intl.string(F.t["6+nTjY"]),
                            value: X,
                        },
                    ],
                    onChange: this.handleMessageDisplayModeChange,
                    value: this.props.messageDisplayCompact ? X : q,
                }),
                (0, r.jsx)(f.j7V, {
                    value: this.props.messageDisplayCompact && this.props.displayCompactAvatars,
                    disabled: !this.props.messageDisplayCompact,
                    onChange: this.handleDisplayCompactAvatarsChanged,
                    className: H.marginTop20,
                    children: F.intl.string(F.t["7FVjFB"]),
                }),
            ],
        });
    }
    renderListSpacing() {
        let { density: e } = this.props;
        return (0, r.jsxs)(R.F, {
            setting: U.s6.APPEARANCE_LIST_SPACING,
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
                    className: H.marginTop8,
                    children: [
                        (0, r.jsx)(f.R94, {
                            type: f.geA.DESCRIPTION,
                            className: H.marginBottom8,
                            children:
                                "Adjust the spacing and layout to balance readability and content based on your preferences.",
                        }),
                        (0, r.jsx)(d.Gu, {
                            options: [
                                {
                                    name: F.intl.string(F.t.T7G4Y2),
                                    value: c.Pi.COZY,
                                    desc: "Comfortable spacing for easier readability",
                                },
                                {
                                    name: F.intl.string(F.t["7iegX1"]),
                                    value: c.Pi.COMPACT,
                                    desc: "Tighter layout to fit more content",
                                },
                            ],
                            onChange: this.handleUIDensityChange,
                            value: e,
                        }),
                    ],
                }),
                (0, r.jsx)(f.$i$, { className: H.marginTop8 }),
            ],
        });
    }
    handleDarkSidebarChecked() {
        (0, g.lq)();
    }
    renderScalingAndSpacing() {
        return (0, r.jsxs)(r.Fragment, {
            children: [
                this.renderFontScaleSlider(),
                this.renderMessageGroupSpacingSlider(),
                this.renderZoomSlider(),
                (0, r.jsx)(f.$i$, { className: H.marginTop20 }),
            ],
        });
    }
    renderTimestampHourCycle() {
        let { timestampHourCycle: e } = this.props;
        return (0, r.jsx)(f.xJW, {
            title: (0, r.jsx)(f.Text, {
                variant: "text-lg/medium",
                className: o()(V.timeTitle, V.title),
                children: F.intl.string(F.t.dyamEB),
            }),
            children: (0, r.jsx)(d.Gu, {
                options: [
                    {
                        name: F.intl.string(F.t.FMWYvb),
                        value: c.hg.AUTO,
                    },
                    {
                        name: F.intl.string(F.t.p8NOws),
                        value: c.hg.H12,
                    },
                    {
                        name: F.intl.string(F.t["+o/sOj"]),
                        value: c.hg.H23,
                    },
                ],
                onChange: (e) => j.hg.updateSetting(e.value),
                value: e,
            }),
        });
    }
    render() {
        return (0, r.jsxs)(f.hjN, {
            tag: f.RB0.H1,
            title: F.intl.string(F.t["iHH+k5"]),
            children: [
                (0, r.jsxs)(R.F, {
                    setting: U.s6.APPEARANCE_THEME,
                    children: [this.renderPreview(), this.renderTheme()],
                }),
                (0, r.jsx)(R.F, {
                    setting: U.s6.APPEARANCE_MESSAGE_DISPLAY_COMPACT,
                    children: this.renderDisplayMode(),
                }),
                this.renderListSpacing(),
                (0, r.jsx)(R.F, {
                    setting: U.s6.APPEARANCE_SCALING_SPACING,
                    children: this.renderScalingAndSpacing(),
                }),
                (0, r.jsxs)(R.F, {
                    setting: U.s6.APPEARANCE_TIMESTAMP_HOUR_CYCLE,
                    children: [this.renderTimestampHourCycle(), (0, r.jsx)(f.$i$, { className: H.marginTop8 })],
                }),
                (0, r.jsx)(f.Text, {
                    variant: "text-md/normal",
                    className: H.marginTop20,
                    children: F.intl.format(F.t["5LEQdX"], {
                        onAccessibilityClick() {
                            p.Z.open(G.oAB.ACCESSIBILITY);
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
        return F.intl.formatToPlainString(F.t["0hpvOT"], { value: e });
    }
    handleFontSizeChange(e) {
        (0, g.oL)(e);
    }
    handleMessageSpacingChange(e) {
        switch (e) {
            case 0:
            case 4:
            case 8:
            case 16:
            case 24:
                (0, g.ZZ)(e);
        }
    }
    handleZoomChange(e) {
        (0, g.cq)(e);
    }
    constructor(...e) {
        super(...e),
            Y(this, "darkMessages", et(G.BRd.DARK)),
            Y(this, "lightMessages", et(G.BRd.LIGHT)),
            Y(this, "handleDisplayCompactAvatarsChanged", (e) => {
                _.ZP.updatedUnsyncedSettings({ displayCompactAvatars: e });
            }),
            Y(this, "handleDesktopRefreshEnabledChanged", (e) => {
                _.ZP.updatedUnsyncedSettings({ disableVisualRefresh: !e });
            }),
            Y(this, "handleMessageDisplayModeChange", (e) => {
                let { value: t } = e;
                j.jU.updateSetting(t === X), (0, g.ZZ)();
            }),
            Y(this, "handleUIDensityChange", (e) => {
                let { value: t } = e;
                t !== c.Pi.UNSET_UI_DENSITY && j.YC.updateSetting(t);
            });
    }
}
class ei extends er {
    render() {
        let { density: e } = this.props,
            t = (0, r.jsxs)(R.F, {
                setting: U.s6.APPEARANCE_THEME,
                children: [this.renderPreview(), this.renderTheme()],
            }),
            n = (0, r.jsx)(R.F, {
                setting: U.s6.APPEARANCE_ICON,
                children: (0, r.jsx)(k.c, {}),
            }),
            i = [
                {
                    name: F.intl.string(F.t["7iegX1"]),
                    value: c.Pi.COMPACT,
                },
                {
                    name: F.intl.string(F.t.bBvAEB),
                    value: c.Pi.DEFAULT,
                },
                {
                    name: F.intl.string(F.t["4cuYHx"]),
                    value: c.Pi.COZY,
                },
            ],
            a = (0, r.jsxs)(R.F, {
                setting: U.s6.APPEARANCE_LIST_SPACING,
                children: [
                    (0, r.jsxs)(f.xJW, {
                        title: (0, r.jsx)(f.Text, {
                            variant: "text-lg/medium",
                            className: V.title,
                            children: F.intl.string(F.t["C/5V0N"]),
                        }),
                        children: [
                            (0, r.jsx)(f.R94, {
                                type: f.geA.DESCRIPTION,
                                className: V.subtext,
                                children: F.intl.string(F.t.QLZhYm),
                            }),
                            (0, r.jsx)(d.Gu, {
                                options: i,
                                onChange: this.handleUIDensityChange,
                                value: e,
                            }),
                        ],
                    }),
                    (0, r.jsx)(f.$i$, { className: V.divider }),
                ],
            }),
            o = (0, r.jsxs)(R.F, {
                setting: U.s6.APPEARANCE_MESSAGE_DISPLAY_COMPACT,
                children: [
                    (0, r.jsxs)(f.Kqy, {
                        gap: 8,
                        padding: { bottom: 8 },
                        children: [
                            (0, r.jsx)(f.Text, {
                                variant: "text-lg/medium",
                                className: V.title,
                                children: F.intl.string(F.t["2ed/sL"]),
                            }),
                            (0, r.jsx)(f.Text, {
                                variant: "text-sm/normal",
                                className: V.subtext,
                                children: F.intl.string(F.t.u9N6Qk),
                            }),
                        ],
                    }),
                    (0, r.jsxs)(f.xJW, {
                        titleClassName: V.title,
                        title: F.intl.string(F.t.nKRoPj),
                        children: [
                            (0, r.jsx)(f.R94, {
                                type: f.geA.DESCRIPTION,
                                className: V.subtext,
                                children: F.intl.string(F.t.QntEEB),
                            }),
                            (0, r.jsx)(d.Gu, {
                                options: [
                                    {
                                        name: F.intl.string(F.t.Jqj4cX),
                                        value: q,
                                    },
                                    {
                                        name: F.intl.string(F.t["1JNcPT"]),
                                        value: X,
                                    },
                                ],
                                onChange: this.handleMessageDisplayModeChange,
                                value: this.props.messageDisplayCompact ? X : q,
                            }),
                            this.props.messageDisplayCompact &&
                                (0, r.jsx)(f.j7V, {
                                    className: V.compactModeToggle,
                                    hideBorder: !0,
                                    value: !this.props.displayCompactAvatars,
                                    onChange: (e) => this.handleDisplayCompactAvatarsChanged(!e),
                                    children: (0, r.jsx)(f.Text, {
                                        variant: "text-md/medium",
                                        children: F.intl.string(F.t["//vhWl"]),
                                    }),
                                }),
                        ],
                    }),
                    this.renderMessageGroupSpacingSlider(),
                    (0, r.jsx)(f.$i$, { className: V.divider }),
                ],
            }),
            s = (0, r.jsxs)(R.F, {
                setting: U.s6.APPEARANCE_SCALING_SPACING,
                children: [
                    (0, r.jsx)(f.Text, {
                        variant: "text-lg/medium",
                        className: V.title,
                        children: F.intl.string(F.t["0Yh+ZW"]),
                    }),
                    this.renderFontScaleSlider(),
                    this.renderZoomSlider(),
                    (0, r.jsx)(f.$i$, { className: V.divider }),
                ],
            }),
            l = (0, r.jsx)(R.F, {
                setting: U.s6.APPEARANCE_TIMESTAMP_HOUR_CYCLE,
                children: this.renderTimestampHourCycle(),
            }),
            u = (0, r.jsx)(f.Text, {
                variant: "text-md/normal",
                className: V.a11yCallout,
                children: F.intl.format(F.t["5LEQdX"], {
                    onAccessibilityClick() {
                        p.Z.open(G.oAB.ACCESSIBILITY);
                    },
                }),
            });
        return (0, r.jsxs)(f.hjN, {
            tag: f.RB0.H1,
            title: F.intl.string(F.t["iHH+k5"]),
            children: [t, n, a, o, s, l, u],
        });
    }
}
let ea = (e) => {
    (0, S.zu)(e) ||
        (0, S.Q3)(e, {
            dismissAction: B.L.AUTO,
            forceTrack: !0,
        });
};
function eo() {
    let e = j.jU.useSetting(),
        t = j.RS.useSetting(),
        n = j.NA.useSetting(),
        a = j.L1.useSetting(),
        o = j.hg.useSetting(),
        c = j.YC.useSetting(),
        u = O.Mc.useExperiment({ location: "UserSettingsAppearance" }).enabled;
    (0, h.ZP)(() => {
        ea(l.z.CLIENT_THEMES_SETTINGS_BADGE),
            ea(l.z.DEKSTOP_CUSTOM_APP_ICON_BADGE),
            ea(l.z.DEKSTOP_CUSTOM_APP_ICON_COACHMARK);
    }),
        i.useEffect(() => {
            u && ea(l.z.CLIENT_THEMES_APPEARANCE_SETTINGS_NEW_BADGE);
        }, [u]);
    let d = (0, P.A6)(),
        f = (0, s.cj)([x.Z, L.ZP, E.Z, w.default, y.Z], () => {
            var e, t;
            return {
                theme: x.Z.theme,
                useForcedColors: E.Z.useForcedColors,
                useSystemTheme: L.ZP.useSystemTheme,
                fontSize: E.Z.fontSize,
                zoom: E.Z.zoom,
                messageGroupSpacing: E.Z.messageGroupSpacing,
                displayCompactAvatars: L.ZP.displayCompactAvatars,
                isStaff: null != (t = null == (e = w.default.getCurrentUser()) ? void 0 : e.isStaff) && t,
                gradientPreset: y.Z.gradientPreset,
            };
        });
    return (0, r.jsx)(
        ei,
        W(
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
