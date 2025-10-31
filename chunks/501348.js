n.d(t, { Z: () => es }), n(388685);
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
    y = n(93262),
    O = n(990924),
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
    M = n(313789),
    k = n(329013),
    j = n(333859),
    U = n(273313),
    G = n(518596),
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
    $ = (0, v.hQ)(),
    ee = (0, v.hQ)(),
    et = "1337",
    en = (e) => {
        let t = 0;
        return [
            (0, T.e5)(
                X(
                    z(
                        {},
                        (0, S.ZP)({
                            channelId: et,
                            content: H.intl.string(H.t.oZxkEq),
                        }),
                    ),
                    {
                        state: Z.yb.SENT,
                        id: "".concat(t++),
                    },
                ),
            ),
            (0, T.e5)(
                X(
                    z(
                        {},
                        (0, S.ZP)({
                            channelId: et,
                            content: (0, u.wj)(e) ? H.intl.string(H.t["WGb/v7"]) : H.intl.string(H.t["62m4mz"]),
                        }),
                    ),
                    {
                        state: Z.yb.SENT,
                        id: "".concat(t++),
                    },
                ),
            ),
            (0, T.e5)(
                X(
                    z(
                        {},
                        (0, S.ZP)({
                            channelId: et,
                            content: H.intl.string(H.t.a0Byo5),
                        }),
                    ),
                    {
                        state: Z.yb.SENT,
                        id: "".concat(t++),
                    },
                ),
            ),
            (0, T.e5)(
                X(
                    z(
                        {},
                        (0, S.ZP)({
                            channelId: et,
                            content: H.intl.string(H.t.bmwEWJ),
                        }),
                    ),
                    {
                        state: Z.yb.SENT,
                        id: "".concat(t++),
                    },
                ),
            ),
            (0, T.e5)(
                X(
                    z(
                        {},
                        (0, S.ZP)({
                            channelId: et,
                            content: H.intl.string(H.t["hK9QW/"]),
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
    er = () =>
        (0, r.jsxs)("div", {
            className: Y.themeTitle,
            children: [
                (0, r.jsxs)("div", {
                    className: Y.themeTitleContainer,
                    children: [
                        (0, r.jsx)("div", {
                            className: Y.title,
                            children: H.intl.string(H.t["0EzVst"]),
                        }),
                        (0, r.jsx)(d.R94, {
                            type: d.R94.Types.DESCRIPTION,
                            className: Y.subtext,
                            children: H.intl.string(H.t.PV3dGX),
                        }),
                    ],
                }),
                (0, r.jsx)(k.g, {}),
            ],
        }),
    ei = () =>
        H.intl.format(H.t.Jae48E, {
            onClick: () => {
                (0, G.openUserSettings)(M.n.ACCESSIBILITY_PANEL, { section: Z.oAB.ACCESSIBILITY });
            },
        });
class ea extends i.Component {
    renderZoomSlider() {
        return (
            !w.isPlatformEmbedded,
            (0, r.jsx)(d.iRW, {
                label: H.intl.string(H.t.i19n5L),
                description: H.intl.string(H.t.ip0uSf),
                helperText: H.intl.format(H.t.OMkSUo, { modKey: p.Z.modKey }),
                initialValue: this.props.zoom,
                defaultValue: Z.yqN.ZOOM_DEFAULT,
                markers: Z.yqN.ZOOM_SCALES,
                stickToMarkers: !0,
                onValueChange: this.handleZoomChange,
                onValueRender: this.handleSliderRender,
                "aria-labelledby": $,
            })
        );
    }
    renderFontScaleSlider() {
        return (0, r.jsx)(d.iRW, {
            label: H.intl.string(H.t.qPOqoK),
            description: H.intl.string(H.t.XrtbPo),
            initialValue: this.props.fontSize,
            defaultValue: Z.yqN.FONT_SIZE_DEFAULT,
            markers: Z.yqN.FONT_SIZES,
            stickToMarkers: !0,
            onValueChange: this.handleFontSizeChange,
            onValueRender: this.handleSliderRenderPX,
            onMarkerRender: this.handleSliderRenderPX,
            getAriaValueText: this.handleSliderValueText,
        });
    }
    renderMessageGroupSpacingSlider() {
        let { messageDisplayCompact: e, messageGroupSpacing: t } = this.props;
        return (0, r.jsx)(d.iRW, {
            label: H.intl.string(H.t.Q6lKkg),
            description: H.intl.string(H.t.p7eUrb),
            initialValue: t,
            defaultValue: e ? V.c8 : V.pq,
            markers: V.fP,
            stickToMarkers: !0,
            onValueChange: this.handleMessageSpacingChange,
            onValueRender: this.handleSliderRenderPX,
            onMarkerRender: this.handleSliderRenderPX,
            getAriaValueText: this.handleSliderValueText,
            "aria-labelledby": ee,
        });
    }
    renderPreview() {
        let { messageDisplayCompact: e, theme: t, messageGroupSpacing: n, hideSimpleEmbedContent: i } = this.props,
            a = (0, u.wj)(t) ? this.darkMessages : this.lightMessages;
        return (0, r.jsx)(d.Rny, {
            children: (0, r.jsx)(d.Zbd, {
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
                        C.Z,
                        {
                            author: (0, A.ZH)(t),
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
            ? (0, r.jsx)(d.C3N, {
                  label: H.intl.string(H.t.Ksh3ik),
                  children: (0, r.jsx)(d.Wn, {
                      messageType: d.QYI.INFO,
                      children: (0, g.b)() ? (0, r.jsx)(ei, {}) : H.intl.string(H.t.AUMSZP),
                  }),
              })
            : (0, r.jsx)(d.C3N, {
                  label: H.intl.string(H.t.Ksh3ik),
                  children: (0, r.jsx)(d.xJW, {
                      title: (0, r.jsx)(er, {}),
                      children: (0, r.jsx)(k.i, {}),
                  }),
              });
    }
    renderTimestampHourCycle() {
        let { timestampHourCycle: e } = this.props;
        return (0, r.jsx)(d.FXm, {
            label: H.intl.string(H.t.dyamEI),
            options: [
                {
                    name: H.intl.string(H.t.FMWYvb),
                    value: c.hg.AUTO,
                },
                {
                    name: H.intl.string(H.t.p8NOwi),
                    value: c.hg.H12,
                },
                {
                    name: H.intl.string(H.t["+o/sOo"]),
                    value: c.hg.H23,
                },
            ],
            onChange: (e) => L.hg.updateSetting(e),
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
        return H.intl.formatToPlainString(H.t["0hpvOV"], { value: e });
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
            t = (0, r.jsxs)(N.F, {
                setting: B.s6.APPEARANCE_THEME,
                children: [this.renderPreview(), this.renderTheme()],
            }),
            n = (0, r.jsx)(N.F, {
                setting: B.s6.APPEARANCE_ICON,
                children: (0, r.jsx)(j.c, {}),
            }),
            i = [
                {
                    name: H.intl.string(H.t["7iegX4"]),
                    value: c.Pi.COMPACT,
                },
                {
                    name: H.intl.string(H.t.bBvAEH),
                    value: c.Pi.DEFAULT,
                },
                {
                    name: H.intl.string(H.t["4cuYHx"]),
                    value: c.Pi.COZY,
                },
            ],
            a = (0, r.jsxs)(N.F, {
                setting: B.s6.APPEARANCE_LIST_SPACING,
                children: [
                    (0, r.jsx)(d.FXm, {
                        label: H.intl.string(H.t["C/5V0A"]),
                        description: H.intl.string(H.t.QLZhYk),
                        options: i,
                        onChange: (e) => this.handleUIDensityChange({ value: e }),
                        value: e,
                    }),
                    (0, r.jsx)(d.izJ, { className: Y.divider }),
                ],
            }),
            o = (0, r.jsxs)(N.F, {
                setting: B.s6.APPEARANCE_MESSAGE_DISPLAY_COMPACT,
                children: [
                    (0, r.jsxs)(d.C3N, {
                        label: H.intl.string(H.t["2ed/sA"]),
                        description: H.intl.string(H.t.u9N6Qh),
                        children: [
                            (0, r.jsx)(d.FXm, {
                                label: H.intl.string(H.t.nKRoPv),
                                description: H.intl.string(H.t.QntEEG),
                                options: [
                                    {
                                        name: H.intl.string(H.t.Jqj4cZ),
                                        value: Q,
                                    },
                                    {
                                        name: H.intl.string(H.t["1JNcPS"]),
                                        value: J,
                                    },
                                ],
                                onChange: (e) => this.handleMessageDisplayModeChange({ value: e }),
                                value: this.props.messageDisplayCompact ? J : Q,
                            }),
                            this.props.messageDisplayCompact &&
                                (0, r.jsx)(d.rsf, {
                                    label: H.intl.string(H.t["//vhWi"]),
                                    checked: !this.props.displayCompactAvatars,
                                    onChange: (e) => this.handleDisplayCompactAvatarsChanged(!e),
                                }),
                            this.renderMessageGroupSpacingSlider(),
                        ],
                    }),
                    (0, r.jsx)(d.izJ, { className: Y.divider }),
                ],
            }),
            s = (0, r.jsxs)(N.F, {
                setting: B.s6.APPEARANCE_SCALING_SPACING,
                children: [
                    (0, r.jsxs)(d.C3N, {
                        label: H.intl.string(H.t["0Yh+ZX"]),
                        children: [this.renderFontScaleSlider(), this.renderZoomSlider()],
                    }),
                    (0, r.jsx)(d.izJ, { className: Y.divider }),
                ],
            }),
            l = (0, r.jsx)(N.F, {
                setting: B.s6.APPEARANCE_TIMESTAMP_HOUR_CYCLE,
                children: this.renderTimestampHourCycle(),
            }),
            u = (0, r.jsx)(d.Text, {
                variant: "text-md/normal",
                className: Y.a11yCallout,
                children: (0, r.jsx)(ei, {}),
            });
        return (0, r.jsxs)(U.Z, {
            title: H.intl.string(H.t["iHH+ky"]),
            children: [t, n, a, o, s, l, u],
        });
    }
    constructor(...e) {
        super(...e),
            K(this, "darkMessages", en(Z.BRd.DARK)),
            K(this, "lightMessages", en(Z.BRd.LIGHT)),
            K(this, "handleDisplayCompactAvatarsChanged", (e) => {
                f.ZP.updatedUnsyncedSettings({ displayCompactAvatars: e });
            }),
            K(this, "handleDesktopRefreshEnabledChanged", (e) => {
                f.ZP.updatedUnsyncedSettings({ disableVisualRefresh: !e });
            }),
            K(this, "handleMessageDisplayModeChange", (e) => {
                let { value: t } = e;
                L.jU.updateSetting(t === J), (0, h.ZZ)();
            }),
            K(this, "handleUIDensityChange", (e) => {
                let { value: t } = e;
                t !== c.Pi.UNSET_UI_DENSITY && L.YC.updateSetting(t);
            });
    }
}
let eo = (e) => {
    (0, I.zu)(e) ||
        (0, I.Q3)(e, {
            dismissAction: F.L.AUTO,
            forceTrack: !0,
        });
};
function es() {
    let e = L.jU.useSetting(),
        t = L.RS.useSetting(),
        n = L.NA.useSetting(),
        a = L.L1.useSetting(),
        o = L.hg.useSetting(),
        c = L.YC.useSetting(),
        u = O.y.useConfig({ location: "UserSettingsAppearance" }).enabled,
        d = (0, E.T)("UserSettingsAppearance");
    (0, _.ZP)(() => {
        eo(l.z.CLIENT_THEMES_SETTINGS_BADGE),
            eo(l.z.DEKSTOP_CUSTOM_APP_ICON_BADGE),
            eo(l.z.DEKSTOP_CUSTOM_APP_ICON_COACHMARK),
            eo(l.z.CLIENT_THEMES_APPEARANCE_SETTINGS_NEW_BADGE),
            u && (0, y.w)();
    }),
        i.useEffect(() => {
            d && eo(l.z.HALLOWEEN_APP_ICONS_APPEARANCE_SETTINGS_WEB_BADGE);
        }, [d]);
    let f = (0, R.A6)(),
        p = (0, s.cj)([D.Z, x.ZP, m.Z, P.default, b.Z], () => {
            var e, t;
            return {
                theme: D.Z.theme,
                useForcedColors: m.Z.useForcedColors,
                useSystemTheme: x.ZP.useSystemTheme,
                fontSize: m.Z.fontSize,
                zoom: m.Z.zoom,
                messageGroupSpacing: m.Z.messageGroupSpacing,
                displayCompactAvatars: x.ZP.displayCompactAvatars,
                isStaff: null != (t = null == (e = P.default.getCurrentUser()) ? void 0 : e.isStaff) && t,
                gradientPreset: b.Z.gradientPreset,
            };
        });
    return (0, r.jsx)(
        ea,
        z(
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
