n.d(t, { Z: () => eo }), n(388685);
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
    _ = n(493773),
    p = n(714338),
    h = n(857595),
    m = n(607070),
    g = n(627845),
    E = n(368763),
    b = n(514361),
    y = n(803038),
    O = n(313201),
    v = n(266454),
    I = n(786761),
    T = n(3148),
    S = n(739566),
    A = n(753206),
    C = n(921801),
    N = n(984802),
    R = n(594174),
    P = n(358085),
    w = n(210887),
    D = n(740492),
    x = n(695346),
    L = n(313789),
    j = n(329013),
    M = n(333859),
    k = n(273313),
    U = n(947889),
    G = n(726985),
    B = n(981631),
    Z = n(921944),
    F = n(959517),
    V = n(388032),
    H = n(5874),
    Y = n(10198);
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
    J = (0, O.hQ)(),
    $ = (0, O.hQ)(),
    ee = "1337",
    et = (e) => {
        let t = 0;
        return [
            (0, I.e5)(
                q(
                    K(
                        {},
                        (0, T.ZP)({
                            channelId: ee,
                            content: V.intl.string(V.t.oZxkEh),
                        }),
                    ),
                    {
                        state: B.yb.SENT,
                        id: "".concat(t++),
                    },
                ),
            ),
            (0, I.e5)(
                q(
                    K(
                        {},
                        (0, T.ZP)({
                            channelId: ee,
                            content: (0, u.wj)(e) ? V.intl.string(V.t["WGb/v7"]) : V.intl.string(V.t["62m4m5"]),
                        }),
                    ),
                    {
                        state: B.yb.SENT,
                        id: "".concat(t++),
                    },
                ),
            ),
            (0, I.e5)(
                q(
                    K(
                        {},
                        (0, T.ZP)({
                            channelId: ee,
                            content: V.intl.string(V.t.a0Byo6),
                        }),
                    ),
                    {
                        state: B.yb.SENT,
                        id: "".concat(t++),
                    },
                ),
            ),
            (0, I.e5)(
                q(
                    K(
                        {},
                        (0, T.ZP)({
                            channelId: ee,
                            content: V.intl.string(V.t.bmwEWF),
                        }),
                    ),
                    {
                        state: B.yb.SENT,
                        id: "".concat(t++),
                    },
                ),
            ),
            (0, I.e5)(
                q(
                    K(
                        {},
                        (0, T.ZP)({
                            channelId: ee,
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
    en = () =>
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
                        (0, r.jsx)(d.R94, {
                            type: d.R94.Types.DESCRIPTION,
                            className: H.subtext,
                            children: V.intl.string(V.t.PV3dGR),
                        }),
                    ],
                }),
                (0, r.jsx)(j.g, {}),
            ],
        }),
    er = () => {
        let e = (0, U.Z)();
        return V.intl.format(V.t.Jae48P, {
            onClick: () => {
                e(L.n.ACCESSIBILITY_PANEL, { section: B.oAB.ACCESSIBILITY });
            },
        });
    };
class ei extends i.Component {
    renderZoomSlider() {
        return P.isPlatformEmbedded
            ? (0, r.jsxs)("div", {
                  className: Y.marginTop20,
                  children: [
                      (0, r.jsx)(d.vwX, {
                          id: J,
                          className: o()(H.title, Y.marginBottom8),
                          children: V.intl.string(V.t.i19n5O),
                      }),
                      (0, r.jsx)(d.R94, {
                          type: d.geA.DESCRIPTION,
                          className: H.subtext,
                          children: V.intl.string(V.t.ip0uSU),
                      }),
                      (0, r.jsx)(d.iRW, {
                          className: o()(Y.marginTop20, Y.marginBottom4),
                          initialValue: this.props.zoom,
                          defaultValue: B.yqN.ZOOM_DEFAULT,
                          markers: B.yqN.ZOOM_SCALES,
                          stickToMarkers: !0,
                          onValueChange: this.handleZoomChange,
                          onValueRender: this.handleSliderRender,
                          "aria-labelledby": J,
                      }),
                      (0, r.jsx)(d.R94, {
                          type: d.R94.Types.DESCRIPTION,
                          children: V.intl.format(V.t.OMkSUl, { modKey: p.Z.modKey }),
                      }),
                  ],
              })
            : null;
    }
    renderFontScaleSlider() {
        return (0, r.jsx)("div", {
            className: Y.marginTop20,
            children: (0, r.jsx)(d.iRW, {
                label: V.intl.string(V.t.qPOqoK),
                description: V.intl.string(V.t.XrtbPj),
                initialValue: this.props.fontSize,
                defaultValue: B.yqN.FONT_SIZE_DEFAULT,
                markers: B.yqN.FONT_SIZES,
                stickToMarkers: !0,
                onValueChange: this.handleFontSizeChange,
                onValueRender: this.handleSliderRenderPX,
                onMarkerRender: this.handleSliderRenderPX,
                getAriaValueText: this.handleSliderValueText,
            }),
        });
    }
    renderMessageGroupSpacingSlider() {
        let { messageDisplayCompact: e, messageGroupSpacing: t } = this.props;
        return (0, r.jsx)("div", {
            className: H.messageGroupingSpacing,
            children: (0, r.jsx)(d.iRW, {
                label: V.intl.string(V.t.Q6lKkp),
                description: V.intl.string(V.t.p7eUra),
                initialValue: t,
                defaultValue: e ? F.c8 : F.pq,
                markers: F.fP,
                stickToMarkers: !0,
                onValueChange: this.handleMessageSpacingChange,
                onValueRender: this.handleSliderRenderPX,
                onMarkerRender: this.handleSliderRenderPX,
                getAriaValueText: this.handleSliderValueText,
                "aria-labelledby": $,
            }),
        });
    }
    renderPreview() {
        let { messageDisplayCompact: e, theme: t, messageGroupSpacing: n, hideSimpleEmbedContent: i } = this.props,
            a = (0, u.wj)(t) ? this.darkMessages : this.lightMessages;
        return (0, r.jsx)(d.Rny, {
            children: (0, r.jsx)(d.Zbd, {
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
                        A.Z,
                        {
                            author: (0, S.ZH)(t),
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
            ? (0, r.jsx)(d.xJW, {
                  className: o()(Y.marginTop8, Y.marginBottom40),
                  title: (0, r.jsx)("div", {
                      className: H.themeTitle,
                      children: (0, r.jsx)("div", {
                          className: H.title,
                          children: V.intl.string(V.t.Ksh3io),
                      }),
                  }),
                  children: (0, r.jsx)(d.R94, {
                      type: d.R94.Types.DEFAULT,
                      className: H.forcedColorsWarning,
                      children: (0, g.b)() ? (0, r.jsx)(er, {}) : V.intl.string(V.t.AUMSZG),
                  }),
              })
            : (0, r.jsxs)(d.Kqy, {
                  gap: 24,
                  children: [
                      (0, r.jsx)(d.Text, {
                          variant: "text-lg/medium",
                          className: H.title,
                          children: V.intl.string(V.t.Ksh3io),
                      }),
                      (0, r.jsx)(d.xJW, {
                          title: (0, r.jsx)(en, {}),
                          children: (0, r.jsx)(j.i, {}),
                      }),
                  ],
              });
    }
    renderTimestampHourCycle() {
        let { timestampHourCycle: e } = this.props;
        return (0, r.jsx)(d.FXm, {
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
            onChange: (e) => x.hg.updateSetting(e),
            value: e,
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
        (0, h.oL)(e);
    }
    handleMessageSpacingChange(e) {
        switch (e) {
            case 0:
            case 4:
            case 8:
            case 16:
            case 24:
                (0, h.ZZ)(e);
        }
    }
    handleZoomChange(e) {
        (0, h.cq)(e);
    }
    render() {
        let { density: e } = this.props,
            t = (0, r.jsxs)(C.F, {
                setting: G.s6.APPEARANCE_THEME,
                children: [this.renderPreview(), this.renderTheme()],
            }),
            n = (0, r.jsx)(C.F, {
                setting: G.s6.APPEARANCE_ICON,
                children: (0, r.jsx)(M.c, {}),
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
            a = (0, r.jsxs)(C.F, {
                setting: G.s6.APPEARANCE_LIST_SPACING,
                children: [
                    (0, r.jsx)(d.FXm, {
                        label: V.intl.string(V.t["C/5V0N"]),
                        description: V.intl.string(V.t.QLZhYm),
                        options: i,
                        onChange: (e) => this.handleUIDensityChange({ value: e }),
                        value: e,
                    }),
                    (0, r.jsx)(d.$i$, { className: H.divider }),
                ],
            }),
            o = (0, r.jsxs)(C.F, {
                setting: G.s6.APPEARANCE_MESSAGE_DISPLAY_COMPACT,
                children: [
                    (0, r.jsxs)(d.Kqy, {
                        gap: 8,
                        padding: { bottom: 8 },
                        children: [
                            (0, r.jsx)(d.Text, {
                                variant: "text-lg/medium",
                                className: H.title,
                                children: V.intl.string(V.t["2ed/sL"]),
                            }),
                            (0, r.jsx)(d.Text, {
                                variant: "text-sm/normal",
                                className: H.subtext,
                                children: V.intl.string(V.t.u9N6Qk),
                            }),
                        ],
                    }),
                    (0, r.jsx)(d.FXm, {
                        label: V.intl.string(V.t.nKRoPj),
                        description: V.intl.string(V.t.QntEEB),
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
                        onChange: (e) => this.handleMessageDisplayModeChange({ value: e }),
                        value: this.props.messageDisplayCompact ? Q : X,
                    }),
                    this.props.messageDisplayCompact &&
                        (0, r.jsx)(d.j7V, {
                            className: H.compactModeToggle,
                            hideBorder: !0,
                            value: !this.props.displayCompactAvatars,
                            onChange: (e) => this.handleDisplayCompactAvatarsChanged(!e),
                            children: (0, r.jsx)(d.Text, {
                                variant: "text-md/medium",
                                children: V.intl.string(V.t["//vhWl"]),
                            }),
                        }),
                    this.renderMessageGroupSpacingSlider(),
                    (0, r.jsx)(d.$i$, { className: H.divider }),
                ],
            }),
            s = (0, r.jsxs)(C.F, {
                setting: G.s6.APPEARANCE_SCALING_SPACING,
                children: [
                    (0, r.jsx)(d.Text, {
                        variant: "text-lg/medium",
                        className: H.title,
                        children: V.intl.string(V.t["0Yh+ZW"]),
                    }),
                    this.renderFontScaleSlider(),
                    this.renderZoomSlider(),
                    (0, r.jsx)(d.$i$, { className: H.divider }),
                ],
            }),
            l = (0, r.jsx)(C.F, {
                setting: G.s6.APPEARANCE_TIMESTAMP_HOUR_CYCLE,
                children: this.renderTimestampHourCycle(),
            }),
            u = (0, r.jsx)(d.Text, {
                variant: "text-md/normal",
                className: H.a11yCallout,
                children: (0, r.jsx)(er, {}),
            });
        return (0, r.jsxs)(k.Z, {
            title: V.intl.string(V.t["iHH+k5"]),
            children: [t, n, a, o, s, l, u],
        });
    }
    constructor(...e) {
        super(...e),
            W(this, "darkMessages", et(B.BRd.DARK)),
            W(this, "lightMessages", et(B.BRd.LIGHT)),
            W(this, "handleDisplayCompactAvatarsChanged", (e) => {
                f.ZP.updatedUnsyncedSettings({ displayCompactAvatars: e });
            }),
            W(this, "handleDesktopRefreshEnabledChanged", (e) => {
                f.ZP.updatedUnsyncedSettings({ disableVisualRefresh: !e });
            }),
            W(this, "handleMessageDisplayModeChange", (e) => {
                let { value: t } = e;
                x.jU.updateSetting(t === Q), (0, h.ZZ)();
            }),
            W(this, "handleUIDensityChange", (e) => {
                let { value: t } = e;
                t !== c.Pi.UNSET_UI_DENSITY && x.YC.updateSetting(t);
            });
    }
}
let ea = (e) => {
    (0, v.zu)(e) ||
        (0, v.Q3)(e, {
            dismissAction: Z.L.AUTO,
            forceTrack: !0,
        });
};
function eo() {
    let e = x.jU.useSetting(),
        t = x.RS.useSetting(),
        n = x.NA.useSetting(),
        a = x.L1.useSetting(),
        o = x.hg.useSetting(),
        c = x.YC.useSetting(),
        u = y.Mc.useExperiment({ location: "UserSettingsAppearance" }).enabled,
        d = (0, E.T)("UserSettingsAppearance");
    (0, _.ZP)(() => {
        ea(l.z.CLIENT_THEMES_SETTINGS_BADGE),
            ea(l.z.DEKSTOP_CUSTOM_APP_ICON_BADGE),
            ea(l.z.DEKSTOP_CUSTOM_APP_ICON_COACHMARK);
    }),
        i.useEffect(() => {
            u && ea(l.z.CLIENT_THEMES_APPEARANCE_SETTINGS_NEW_BADGE),
                d && ea(l.z.HALLOWEEN_APP_ICONS_APPEARANCE_SETTINGS_WEB_BADGE);
        }, [u, d]);
    let f = (0, N.A6)(),
        p = (0, s.cj)([w.Z, D.ZP, m.Z, R.default, b.Z], () => {
            var e, t;
            return {
                theme: w.Z.theme,
                useForcedColors: m.Z.useForcedColors,
                useSystemTheme: D.ZP.useSystemTheme,
                fontSize: m.Z.fontSize,
                zoom: m.Z.zoom,
                messageGroupSpacing: m.Z.messageGroupSpacing,
                displayCompactAvatars: D.ZP.displayCompactAvatars,
                isStaff: null != (t = null == (e = R.default.getCurrentUser()) ? void 0 : e.isStaff) && t,
                gradientPreset: b.Z.gradientPreset,
            };
        });
    return (0, r.jsx)(
        ei,
        K(
            {
                messageDisplayCompact: e,
                hideSimpleEmbedContent: t && n,
                clientTheme: a,
                timestampHourCycle: o,
                density: c,
                darkSidebar: f,
            },
            p,
        ),
    );
}
