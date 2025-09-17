n.d(t, { Z: () => el }), n(388685);
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
    j = n(313789),
    M = n(329013),
    k = n(333859),
    U = n(947889),
    G = n(726985),
    B = n(981631),
    Z = n(921944),
    F = n(959517),
    V = n(388032),
    H = n(226518),
    Y = n(197571);
function W(e, t, n) {
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
function K(e) {
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
                W(e, t, n[t]);
            });
    }
    return e;
}
function z(e, t) {
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
function q(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : z(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let X = "cozy",
    Q = "compact",
    J = (0, v.hQ)(),
    $ = (0, v.hQ)(),
    ee = (0, v.hQ)(),
    et = "1337",
    en = (e) => {
        let t = 0;
        return [
            (0, T.e5)(
                q(
                    K(
                        {},
                        (0, S.ZP)({
                            channelId: et,
                            content: V.intl.string(V.t.oZxkEh),
                        }),
                    ),
                    {
                        state: B.yb.SENT,
                        id: "".concat(t++),
                    },
                ),
            ),
            (0, T.e5)(
                q(
                    K(
                        {},
                        (0, S.ZP)({
                            channelId: et,
                            content: (0, u.wj)(e) ? V.intl.string(V.t["WGb/v7"]) : V.intl.string(V.t["62m4m5"]),
                        }),
                    ),
                    {
                        state: B.yb.SENT,
                        id: "".concat(t++),
                    },
                ),
            ),
            (0, T.e5)(
                q(
                    K(
                        {},
                        (0, S.ZP)({
                            channelId: et,
                            content: V.intl.string(V.t.a0Byo6),
                        }),
                    ),
                    {
                        state: B.yb.SENT,
                        id: "".concat(t++),
                    },
                ),
            ),
            (0, T.e5)(
                q(
                    K(
                        {},
                        (0, S.ZP)({
                            channelId: et,
                            content: V.intl.string(V.t.bmwEWF),
                        }),
                    ),
                    {
                        state: B.yb.SENT,
                        id: "".concat(t++),
                    },
                ),
            ),
            (0, T.e5)(
                q(
                    K(
                        {},
                        (0, S.ZP)({
                            channelId: et,
                            content: V.intl.string(V.t.hK9QW1),
                        }),
                    ),
                    {
                        state: B.yb.SENT,
                        id: "".concat(t),
                    },
                ),
            ),
        ];
    },
    er = () =>
        (0, r.jsxs)("div", {
            className: H.themeTitle,
            children: [
                (0, r.jsxs)("div", {
                    className: H.themeTitleContainer,
                    children: [
                        (0, r.jsx)("div", {
                            className: H.title,
                            children: V.intl.string(V.t["0EzVsr"]),
                        }),
                        (0, r.jsx)(f.R94, {
                            type: f.R94.Types.DESCRIPTION,
                            className: H.subtext,
                            children: V.intl.string(V.t.PV3dGR),
                        }),
                    ],
                }),
                (0, r.jsx)(M.g, {}),
            ],
        }),
    ei = () => {
        let e = (0, U.Z)();
        return V.intl.format(V.t.Jae48P, {
            onClick: () => {
                e(j.n.ACCESSIBILITY_PANEL, { section: B.oAB.ACCESSIBILITY });
            },
        });
    };
class ea extends i.Component {
    renderZoomSlider() {
        return w.isPlatformEmbedded
            ? (0, r.jsxs)("div", {
                  className: Y.marginTop20,
                  children: [
                      (0, r.jsx)(f.vwX, {
                          id: J,
                          className: o()(H.title, Y.marginBottom8),
                          children: V.intl.string(V.t.i19n5O),
                      }),
                      (0, r.jsx)(f.R94, {
                          type: f.geA.DESCRIPTION,
                          className: H.subtext,
                          children: V.intl.string(V.t.ip0uSU),
                      }),
                      (0, r.jsx)(f.iRW, {
                          className: o()(Y.marginTop20, Y.marginBottom4),
                          initialValue: this.props.zoom,
                          defaultValue: B.yqN.ZOOM_DEFAULT,
                          markers: B.yqN.ZOOM_SCALES,
                          stickToMarkers: !0,
                          onValueChange: this.handleZoomChange,
                          onValueRender: this.handleSliderRender,
                          "aria-labelledby": J,
                      }),
                      (0, r.jsx)(f.R94, {
                          type: f.R94.Types.DESCRIPTION,
                          children: V.intl.format(V.t.OMkSUl, { modKey: h.Z.modKey }),
                      }),
                  ],
              })
            : null;
    }
    renderFontScaleSlider() {
        return (0, r.jsxs)("div", {
            className: Y.marginTop20,
            children: [
                (0, r.jsx)(f.vwX, {
                    id: $,
                    className: o()(H.title, Y.marginBottom8),
                    children: V.intl.string(V.t.qPOqoK),
                }),
                (0, r.jsx)(f.R94, {
                    type: f.geA.DESCRIPTION,
                    className: H.subtext,
                    children: "Increase or decrease the size of the chat font",
                }),
                (0, r.jsx)(O.Z, {
                    align: O.Z.Align.CENTER,
                    children: (0, r.jsx)(f.iRW, {
                        className: o()({
                            [Y.marginTop20]: !1,
                            [Y.marginBottom4]: !1,
                        }),
                        initialValue: this.props.fontSize,
                        defaultValue: B.yqN.FONT_SIZE_DEFAULT,
                        markers: B.yqN.FONT_SIZES,
                        stickToMarkers: !0,
                        onValueChange: this.handleFontSizeChange,
                        onValueRender: this.handleSliderRenderPX,
                        onMarkerRender: this.handleSliderRenderPX,
                        getAriaValueText: this.handleSliderValueText,
                        "aria-labelledby": $,
                    }),
                }),
            ],
        });
    }
    renderMessageGroupSpacingSlider() {
        let { messageDisplayCompact: e, messageGroupSpacing: t } = this.props;
        return (0, r.jsxs)("div", {
            className: H.messageGroupingSpacing,
            children: [
                (0, r.jsx)(f.vwX, {
                    id: ee,
                    className: o()(H.title, Y.marginBottom8),
                    children: V.intl.string(V.t.Q6lKkp),
                }),
                (0, r.jsx)(f.R94, {
                    type: f.geA.DESCRIPTION,
                    className: H.subtext,
                    children: V.intl.string(V.t.p7eUra),
                }),
                (0, r.jsx)(f.iRW, {
                    initialValue: t,
                    defaultValue: e ? F.c8 : F.pq,
                    markers: F.fP,
                    stickToMarkers: !0,
                    onValueChange: this.handleMessageSpacingChange,
                    onValueRender: this.handleSliderRenderPX,
                    onMarkerRender: this.handleSliderRenderPX,
                    getAriaValueText: this.handleSliderValueText,
                    "aria-labelledby": ee,
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
                    H.preview,
                    Y.marginBottom40,
                    e ? H.compactPreview : void 0,
                    "group-spacing-".concat(null != n ? n : e ? F.c8 : F.pq),
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
                            className: 0 === n ? H.firstMessage : void 0,
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
                  className: o()(Y.marginTop8, Y.marginBottom40),
                  title: (0, r.jsx)("div", {
                      className: H.themeTitle,
                      children: (0, r.jsx)("div", {
                          className: H.title,
                          children: V.intl.string(V.t.Ksh3io),
                      }),
                  }),
                  children: (0, r.jsx)(f.R94, {
                      type: f.R94.Types.DEFAULT,
                      className: H.forcedColorsWarning,
                      children: (0, E.b)() ? (0, r.jsx)(ei, {}) : V.intl.string(V.t.AUMSZG),
                  }),
              })
            : (0, r.jsxs)(f.Kqy, {
                  gap: 24,
                  children: [
                      (0, r.jsx)(f.Text, {
                          variant: "text-lg/medium",
                          className: H.title,
                          children: V.intl.string(V.t.Ksh3io),
                      }),
                      (0, r.jsx)(f.xJW, {
                          title: (0, r.jsx)(er, {}),
                          children: (0, r.jsx)(M.i, {}),
                      }),
                  ],
              });
    }
    renderDisplayMode() {
        return (0, r.jsxs)(f.xJW, {
            title: V.intl.string(V.t.ZEoGMT),
            className: Y.marginTop8,
            children: [
                (0, r.jsx)(d.Gu, {
                    options: [
                        {
                            name: V.intl.string(V.t.KZIadn),
                            value: X,
                        },
                        {
                            name: V.intl.string(V.t["6+nTjY"]),
                            value: Q,
                        },
                    ],
                    onChange: this.handleMessageDisplayModeChange,
                    value: this.props.messageDisplayCompact ? Q : X,
                }),
                (0, r.jsx)(f.j7V, {
                    value: this.props.messageDisplayCompact && this.props.displayCompactAvatars,
                    disabled: !this.props.messageDisplayCompact,
                    onChange: this.handleDisplayCompactAvatarsChanged,
                    className: Y.marginTop20,
                    children: V.intl.string(V.t["7FVjFB"]),
                }),
            ],
        });
    }
    renderListSpacing() {
        let { density: e } = this.props;
        return (0, r.jsxs)(N.F, {
            setting: G.s6.APPEARANCE_LIST_SPACING,
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
                    className: Y.marginTop8,
                    children: [
                        (0, r.jsx)(f.R94, {
                            type: f.geA.DESCRIPTION,
                            className: Y.marginBottom8,
                            children:
                                "Adjust the spacing and layout to balance readability and content based on your preferences.",
                        }),
                        (0, r.jsx)(d.Gu, {
                            options: [
                                {
                                    name: V.intl.string(V.t.T7G4Y2),
                                    value: c.Pi.COZY,
                                    desc: "Comfortable spacing for easier readability",
                                },
                                {
                                    name: V.intl.string(V.t["7iegX1"]),
                                    value: c.Pi.COMPACT,
                                    desc: "Tighter layout to fit more content",
                                },
                            ],
                            onChange: this.handleUIDensityChange,
                            value: e,
                        }),
                    ],
                }),
                (0, r.jsx)(f.$i$, { className: Y.marginTop8 }),
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
                (0, r.jsx)(f.$i$, { className: Y.marginTop20 }),
            ],
        });
    }
    renderTimestampHourCycle() {
        let { timestampHourCycle: e } = this.props;
        return (0, r.jsx)(f.FXm, {
            label: V.intl.string(V.t.dyamEB),
            options: [
                {
                    name: V.intl.string(V.t.FMWYvb),
                    value: c.hg.AUTO,
                },
                {
                    name: V.intl.string(V.t.p8NOws),
                    value: c.hg.H12,
                },
                {
                    name: V.intl.string(V.t["+o/sOj"]),
                    value: c.hg.H23,
                },
            ],
            onChange: (e) => L.hg.updateSetting(e),
            value: e,
        });
    }
    render() {
        return (0, r.jsxs)(f.hjN, {
            tag: f.RB0.H1,
            title: V.intl.string(V.t["iHH+k5"]),
            children: [
                (0, r.jsxs)(N.F, {
                    setting: G.s6.APPEARANCE_THEME,
                    children: [this.renderPreview(), this.renderTheme()],
                }),
                (0, r.jsx)(N.F, {
                    setting: G.s6.APPEARANCE_MESSAGE_DISPLAY_COMPACT,
                    children: this.renderDisplayMode(),
                }),
                this.renderListSpacing(),
                (0, r.jsx)(N.F, {
                    setting: G.s6.APPEARANCE_SCALING_SPACING,
                    children: this.renderScalingAndSpacing(),
                }),
                (0, r.jsxs)(N.F, {
                    setting: G.s6.APPEARANCE_TIMESTAMP_HOUR_CYCLE,
                    children: [this.renderTimestampHourCycle(), (0, r.jsx)(f.$i$, { className: Y.marginTop8 })],
                }),
                (0, r.jsx)(f.Text, {
                    variant: "text-md/normal",
                    className: Y.marginTop20,
                    children: (0, r.jsx)(ei, {}),
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
        return V.intl.formatToPlainString(V.t["0hpvOT"], { value: e });
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
            W(this, "darkMessages", en(B.BRd.DARK)),
            W(this, "lightMessages", en(B.BRd.LIGHT)),
            W(this, "handleDisplayCompactAvatarsChanged", (e) => {
                _.ZP.updatedUnsyncedSettings({ displayCompactAvatars: e });
            }),
            W(this, "handleDesktopRefreshEnabledChanged", (e) => {
                _.ZP.updatedUnsyncedSettings({ disableVisualRefresh: !e });
            }),
            W(this, "handleMessageDisplayModeChange", (e) => {
                let { value: t } = e;
                L.jU.updateSetting(t === Q), (0, m.ZZ)();
            }),
            W(this, "handleUIDensityChange", (e) => {
                let { value: t } = e;
                t !== c.Pi.UNSET_UI_DENSITY && L.YC.updateSetting(t);
            });
    }
}
class eo extends ea {
    render() {
        let { density: e } = this.props,
            t = (0, r.jsxs)(N.F, {
                setting: G.s6.APPEARANCE_THEME,
                children: [this.renderPreview(), this.renderTheme()],
            }),
            n = (0, r.jsx)(N.F, {
                setting: G.s6.APPEARANCE_ICON,
                children: (0, r.jsx)(k.c, {}),
            }),
            i = [
                {
                    name: V.intl.string(V.t["7iegX1"]),
                    value: c.Pi.COMPACT,
                },
                {
                    name: V.intl.string(V.t.bBvAEB),
                    value: c.Pi.DEFAULT,
                },
                {
                    name: V.intl.string(V.t["4cuYHx"]),
                    value: c.Pi.COZY,
                },
            ],
            a = (0, r.jsxs)(N.F, {
                setting: G.s6.APPEARANCE_LIST_SPACING,
                children: [
                    (0, r.jsxs)(f.xJW, {
                        title: (0, r.jsx)(f.Text, {
                            variant: "text-lg/medium",
                            className: H.title,
                            children: V.intl.string(V.t["C/5V0N"]),
                        }),
                        children: [
                            (0, r.jsx)(f.R94, {
                                type: f.geA.DESCRIPTION,
                                className: H.subtext,
                                children: V.intl.string(V.t.QLZhYm),
                            }),
                            (0, r.jsx)(d.Gu, {
                                options: i,
                                onChange: this.handleUIDensityChange,
                                value: e,
                            }),
                        ],
                    }),
                    (0, r.jsx)(f.$i$, { className: H.divider }),
                ],
            }),
            o = (0, r.jsxs)(N.F, {
                setting: G.s6.APPEARANCE_MESSAGE_DISPLAY_COMPACT,
                children: [
                    (0, r.jsxs)(f.Kqy, {
                        gap: 8,
                        padding: { bottom: 8 },
                        children: [
                            (0, r.jsx)(f.Text, {
                                variant: "text-lg/medium",
                                className: H.title,
                                children: V.intl.string(V.t["2ed/sL"]),
                            }),
                            (0, r.jsx)(f.Text, {
                                variant: "text-sm/normal",
                                className: H.subtext,
                                children: V.intl.string(V.t.u9N6Qk),
                            }),
                        ],
                    }),
                    (0, r.jsxs)(f.xJW, {
                        titleClassName: H.title,
                        title: V.intl.string(V.t.nKRoPj),
                        children: [
                            (0, r.jsx)(f.R94, {
                                type: f.geA.DESCRIPTION,
                                className: H.subtext,
                                children: V.intl.string(V.t.QntEEB),
                            }),
                            (0, r.jsx)(d.Gu, {
                                options: [
                                    {
                                        name: V.intl.string(V.t.Jqj4cX),
                                        value: X,
                                    },
                                    {
                                        name: V.intl.string(V.t["1JNcPT"]),
                                        value: Q,
                                    },
                                ],
                                onChange: this.handleMessageDisplayModeChange,
                                value: this.props.messageDisplayCompact ? Q : X,
                            }),
                            this.props.messageDisplayCompact &&
                                (0, r.jsx)(f.j7V, {
                                    className: H.compactModeToggle,
                                    hideBorder: !0,
                                    value: !this.props.displayCompactAvatars,
                                    onChange: (e) => this.handleDisplayCompactAvatarsChanged(!e),
                                    children: (0, r.jsx)(f.Text, {
                                        variant: "text-md/medium",
                                        children: V.intl.string(V.t["//vhWl"]),
                                    }),
                                }),
                        ],
                    }),
                    this.renderMessageGroupSpacingSlider(),
                    (0, r.jsx)(f.$i$, { className: H.divider }),
                ],
            }),
            s = (0, r.jsxs)(N.F, {
                setting: G.s6.APPEARANCE_SCALING_SPACING,
                children: [
                    (0, r.jsx)(f.Text, {
                        variant: "text-lg/medium",
                        className: H.title,
                        children: V.intl.string(V.t["0Yh+ZW"]),
                    }),
                    this.renderFontScaleSlider(),
                    this.renderZoomSlider(),
                    (0, r.jsx)(f.$i$, { className: H.divider }),
                ],
            }),
            l = (0, r.jsx)(N.F, {
                setting: G.s6.APPEARANCE_TIMESTAMP_HOUR_CYCLE,
                children: this.renderTimestampHourCycle(),
            }),
            u = (0, r.jsx)(f.Text, {
                variant: "text-md/normal",
                className: H.a11yCallout,
                children: (0, r.jsx)(ei, {}),
            });
        return (0, r.jsxs)(f.hjN, {
            tag: f.RB0.H1,
            title: V.intl.string(V.t["iHH+k5"]),
            children: [t, n, a, o, s, l, u],
        });
    }
}
let es = (e) => {
    (0, I.zu)(e) ||
        (0, I.Q3)(e, {
            dismissAction: Z.L.AUTO,
            forceTrack: !0,
        });
};
function el() {
    let e = L.jU.useSetting(),
        t = L.RS.useSetting(),
        n = L.NA.useSetting(),
        a = L.L1.useSetting(),
        o = L.hg.useSetting(),
        c = L.YC.useSetting(),
        u = y.Mc.useExperiment({ location: "UserSettingsAppearance" }).enabled;
    (0, p.ZP)(() => {
        es(l.z.CLIENT_THEMES_SETTINGS_BADGE),
            es(l.z.DEKSTOP_CUSTOM_APP_ICON_BADGE),
            es(l.z.DEKSTOP_CUSTOM_APP_ICON_COACHMARK);
    }),
        i.useEffect(() => {
            u && es(l.z.CLIENT_THEMES_APPEARANCE_SETTINGS_NEW_BADGE);
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
        eo,
        K(
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
