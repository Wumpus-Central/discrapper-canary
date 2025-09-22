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
    k = n(947889),
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
    Q = (0, O.hQ)(),
    J = (0, O.hQ)(),
    $ = "1337",
    ee = (e) => {
        let t = 0;
        return [
            (0, I.e5)(
                z(
                    W(
                        {},
                        (0, T.ZP)({
                            channelId: $,
                            content: F.intl.string(F.t.oZxkEh),
                        }),
                    ),
                    {
                        state: G.yb.SENT,
                        id: "".concat(t++),
                    },
                ),
            ),
            (0, I.e5)(
                z(
                    W(
                        {},
                        (0, T.ZP)({
                            channelId: $,
                            content: (0, u.wj)(e) ? F.intl.string(F.t["WGb/v7"]) : F.intl.string(F.t["62m4m5"]),
                        }),
                    ),
                    {
                        state: G.yb.SENT,
                        id: "".concat(t++),
                    },
                ),
            ),
            (0, I.e5)(
                z(
                    W(
                        {},
                        (0, T.ZP)({
                            channelId: $,
                            content: F.intl.string(F.t.a0Byo6),
                        }),
                    ),
                    {
                        state: G.yb.SENT,
                        id: "".concat(t++),
                    },
                ),
            ),
            (0, I.e5)(
                z(
                    W(
                        {},
                        (0, T.ZP)({
                            channelId: $,
                            content: F.intl.string(F.t.bmwEWF),
                        }),
                    ),
                    {
                        state: G.yb.SENT,
                        id: "".concat(t++),
                    },
                ),
            ),
            (0, I.e5)(
                z(
                    W(
                        {},
                        (0, T.ZP)({
                            channelId: $,
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
    et = () =>
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
                        (0, r.jsx)(d.R94, {
                            type: d.R94.Types.DESCRIPTION,
                            className: V.subtext,
                            children: F.intl.string(F.t.PV3dGR),
                        }),
                    ],
                }),
                (0, r.jsx)(j.g, {}),
            ],
        }),
    en = () => {
        let e = (0, k.Z)();
        return F.intl.format(F.t.Jae48P, {
            onClick: () => {
                e(L.n.ACCESSIBILITY_PANEL, { section: G.oAB.ACCESSIBILITY });
            },
        });
    };
class er extends i.Component {
    renderZoomSlider() {
        return P.isPlatformEmbedded
            ? (0, r.jsxs)("div", {
                  className: H.marginTop20,
                  children: [
                      (0, r.jsx)(d.vwX, {
                          id: Q,
                          className: o()(V.title, H.marginBottom8),
                          children: F.intl.string(F.t.i19n5O),
                      }),
                      (0, r.jsx)(d.R94, {
                          type: d.geA.DESCRIPTION,
                          className: V.subtext,
                          children: F.intl.string(F.t.ip0uSU),
                      }),
                      (0, r.jsx)(d.iRW, {
                          className: o()(H.marginTop20, H.marginBottom4),
                          initialValue: this.props.zoom,
                          defaultValue: G.yqN.ZOOM_DEFAULT,
                          markers: G.yqN.ZOOM_SCALES,
                          stickToMarkers: !0,
                          onValueChange: this.handleZoomChange,
                          onValueRender: this.handleSliderRender,
                          "aria-labelledby": Q,
                      }),
                      (0, r.jsx)(d.R94, {
                          type: d.R94.Types.DESCRIPTION,
                          children: F.intl.format(F.t.OMkSUl, { modKey: p.Z.modKey }),
                      }),
                  ],
              })
            : null;
    }
    renderFontScaleSlider() {
        return (0, r.jsx)("div", {
            className: H.marginTop20,
            children: (0, r.jsx)(d.iRW, {
                label: F.intl.string(F.t.qPOqoK),
                description: F.intl.string(F.t.XrtbPj),
                initialValue: this.props.fontSize,
                defaultValue: G.yqN.FONT_SIZE_DEFAULT,
                markers: G.yqN.FONT_SIZES,
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
            className: V.messageGroupingSpacing,
            children: (0, r.jsx)(d.iRW, {
                label: F.intl.string(F.t.Q6lKkp),
                description: F.intl.string(F.t.p7eUra),
                initialValue: t,
                defaultValue: e ? Z.c8 : Z.pq,
                markers: Z.fP,
                stickToMarkers: !0,
                onValueChange: this.handleMessageSpacingChange,
                onValueRender: this.handleSliderRenderPX,
                onMarkerRender: this.handleSliderRenderPX,
                getAriaValueText: this.handleSliderValueText,
                "aria-labelledby": J,
            }),
        });
    }
    renderPreview() {
        let { messageDisplayCompact: e, theme: t, messageGroupSpacing: n, hideSimpleEmbedContent: i } = this.props,
            a = (0, u.wj)(t) ? this.darkMessages : this.lightMessages;
        return (0, r.jsx)(d.Rny, {
            children: (0, r.jsx)(d.Zbd, {
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
                        A.Z,
                        {
                            author: (0, S.ZH)(t),
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
                  className: o()(H.marginTop8, H.marginBottom40),
                  title: (0, r.jsx)("div", {
                      className: V.themeTitle,
                      children: (0, r.jsx)("div", {
                          className: V.title,
                          children: F.intl.string(F.t.Ksh3io),
                      }),
                  }),
                  children: (0, r.jsx)(d.R94, {
                      type: d.R94.Types.DEFAULT,
                      className: V.forcedColorsWarning,
                      children: (0, g.b)() ? (0, r.jsx)(en, {}) : F.intl.string(F.t.AUMSZG),
                  }),
              })
            : (0, r.jsxs)(d.Kqy, {
                  gap: 24,
                  children: [
                      (0, r.jsx)(d.Text, {
                          variant: "text-lg/medium",
                          className: V.title,
                          children: F.intl.string(F.t.Ksh3io),
                      }),
                      (0, r.jsx)(d.xJW, {
                          title: (0, r.jsx)(et, {}),
                          children: (0, r.jsx)(j.i, {}),
                      }),
                  ],
              });
    }
    renderTimestampHourCycle() {
        let { timestampHourCycle: e } = this.props;
        return (0, r.jsx)(d.FXm, {
            label: F.intl.string(F.t.dyamEB),
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
        return F.intl.formatToPlainString(F.t["0hpvOT"], { value: e });
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
                setting: U.s6.APPEARANCE_THEME,
                children: [this.renderPreview(), this.renderTheme()],
            }),
            n = (0, r.jsx)(C.F, {
                setting: U.s6.APPEARANCE_ICON,
                children: (0, r.jsx)(M.c, {}),
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
            a = (0, r.jsxs)(C.F, {
                setting: U.s6.APPEARANCE_LIST_SPACING,
                children: [
                    (0, r.jsx)(d.FXm, {
                        label: F.intl.string(F.t["C/5V0N"]),
                        description: F.intl.string(F.t.QLZhYm),
                        options: i,
                        onChange: (e) => this.handleUIDensityChange({ value: e }),
                        value: e,
                    }),
                    (0, r.jsx)(d.$i$, { className: V.divider }),
                ],
            }),
            o = (0, r.jsxs)(C.F, {
                setting: U.s6.APPEARANCE_MESSAGE_DISPLAY_COMPACT,
                children: [
                    (0, r.jsxs)(d.Kqy, {
                        gap: 8,
                        padding: { bottom: 8 },
                        children: [
                            (0, r.jsx)(d.Text, {
                                variant: "text-lg/medium",
                                className: V.title,
                                children: F.intl.string(F.t["2ed/sL"]),
                            }),
                            (0, r.jsx)(d.Text, {
                                variant: "text-sm/normal",
                                className: V.subtext,
                                children: F.intl.string(F.t.u9N6Qk),
                            }),
                        ],
                    }),
                    (0, r.jsx)(d.FXm, {
                        label: F.intl.string(F.t.nKRoPj),
                        description: F.intl.string(F.t.QntEEB),
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
                        onChange: (e) => this.handleMessageDisplayModeChange({ value: e }),
                        value: this.props.messageDisplayCompact ? X : q,
                    }),
                    this.props.messageDisplayCompact &&
                        (0, r.jsx)(d.j7V, {
                            className: V.compactModeToggle,
                            hideBorder: !0,
                            value: !this.props.displayCompactAvatars,
                            onChange: (e) => this.handleDisplayCompactAvatarsChanged(!e),
                            children: (0, r.jsx)(d.Text, {
                                variant: "text-md/medium",
                                children: F.intl.string(F.t["//vhWl"]),
                            }),
                        }),
                    this.renderMessageGroupSpacingSlider(),
                    (0, r.jsx)(d.$i$, { className: V.divider }),
                ],
            }),
            s = (0, r.jsxs)(C.F, {
                setting: U.s6.APPEARANCE_SCALING_SPACING,
                children: [
                    (0, r.jsx)(d.Text, {
                        variant: "text-lg/medium",
                        className: V.title,
                        children: F.intl.string(F.t["0Yh+ZW"]),
                    }),
                    this.renderFontScaleSlider(),
                    this.renderZoomSlider(),
                    (0, r.jsx)(d.$i$, { className: V.divider }),
                ],
            }),
            l = (0, r.jsx)(C.F, {
                setting: U.s6.APPEARANCE_TIMESTAMP_HOUR_CYCLE,
                children: this.renderTimestampHourCycle(),
            }),
            u = (0, r.jsx)(d.Text, {
                variant: "text-md/normal",
                className: V.a11yCallout,
                children: (0, r.jsx)(en, {}),
            });
        return (0, r.jsxs)(d.hjN, {
            tag: d.RB0.H1,
            title: F.intl.string(F.t["iHH+k5"]),
            children: [t, n, a, o, s, l, u],
        });
    }
    constructor(...e) {
        super(...e),
            Y(this, "darkMessages", ee(G.BRd.DARK)),
            Y(this, "lightMessages", ee(G.BRd.LIGHT)),
            Y(this, "handleDisplayCompactAvatarsChanged", (e) => {
                f.ZP.updatedUnsyncedSettings({ displayCompactAvatars: e });
            }),
            Y(this, "handleDesktopRefreshEnabledChanged", (e) => {
                f.ZP.updatedUnsyncedSettings({ disableVisualRefresh: !e });
            }),
            Y(this, "handleMessageDisplayModeChange", (e) => {
                let { value: t } = e;
                x.jU.updateSetting(t === X), (0, h.ZZ)();
            }),
            Y(this, "handleUIDensityChange", (e) => {
                let { value: t } = e;
                t !== c.Pi.UNSET_UI_DENSITY && x.YC.updateSetting(t);
            });
    }
}
let ei = (e) => {
    (0, v.zu)(e) ||
        (0, v.Q3)(e, {
            dismissAction: B.L.AUTO,
            forceTrack: !0,
        });
};
function ea() {
    let e = x.jU.useSetting(),
        t = x.RS.useSetting(),
        n = x.NA.useSetting(),
        a = x.L1.useSetting(),
        o = x.hg.useSetting(),
        c = x.YC.useSetting(),
        u = y.Mc.useExperiment({ location: "UserSettingsAppearance" }).enabled,
        d = (0, E.T)("UserSettingsAppearance");
    (0, _.ZP)(() => {
        ei(l.z.CLIENT_THEMES_SETTINGS_BADGE),
            ei(l.z.DEKSTOP_CUSTOM_APP_ICON_BADGE),
            ei(l.z.DEKSTOP_CUSTOM_APP_ICON_COACHMARK);
    }),
        i.useEffect(() => {
            u && ei(l.z.CLIENT_THEMES_APPEARANCE_SETTINGS_NEW_BADGE),
                d && ei(l.z.HALLOWEEN_APP_ICONS_APPEARANCE_SETTINGS_WEB_BADGE);
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
        er,
        W(
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
