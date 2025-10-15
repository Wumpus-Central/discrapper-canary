n.d(t, { Z: () => el }), n(388685);
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
    O = n(803038),
    v = n(990924),
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
    L = n(210887),
    x = n(740492),
    M = n(695346),
    j = n(313789),
    k = n(329013),
    U = n(333859),
    G = n(273313),
    B = n(947889),
    Z = n(726985),
    F = n(981631),
    V = n(921944),
    H = n(959517),
    Y = n(388032),
    W = n(226518),
    K = n(197571);
function z(e, t, n) {
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
function q(e) {
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
                z(e, t, n[t]);
            });
    }
    return e;
}
function X(e, t) {
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
function Q(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : X(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let J = "cozy",
    $ = "compact",
    ee = (0, I.hQ)(),
    et = (0, I.hQ)(),
    en = "1337",
    er = (e) => {
        let t = 0;
        return [
            (0, S.e5)(
                Q(
                    q(
                        {},
                        (0, A.ZP)({
                            channelId: en,
                            content: Y.intl.string(Y.t.oZxkEq),
                        }),
                    ),
                    {
                        state: F.yb.SENT,
                        id: "".concat(t++),
                    },
                ),
            ),
            (0, S.e5)(
                Q(
                    q(
                        {},
                        (0, A.ZP)({
                            channelId: en,
                            content: (0, u.wj)(e) ? Y.intl.string(Y.t["WGb/v7"]) : Y.intl.string(Y.t["62m4mz"]),
                        }),
                    ),
                    {
                        state: F.yb.SENT,
                        id: "".concat(t++),
                    },
                ),
            ),
            (0, S.e5)(
                Q(
                    q(
                        {},
                        (0, A.ZP)({
                            channelId: en,
                            content: Y.intl.string(Y.t.a0Byo5),
                        }),
                    ),
                    {
                        state: F.yb.SENT,
                        id: "".concat(t++),
                    },
                ),
            ),
            (0, S.e5)(
                Q(
                    q(
                        {},
                        (0, A.ZP)({
                            channelId: en,
                            content: Y.intl.string(Y.t.bmwEWJ),
                        }),
                    ),
                    {
                        state: F.yb.SENT,
                        id: "".concat(t++),
                    },
                ),
            ),
            (0, S.e5)(
                Q(
                    q(
                        {},
                        (0, A.ZP)({
                            channelId: en,
                            content: Y.intl.string(Y.t["hK9QW/"]),
                        }),
                    ),
                    {
                        state: F.yb.SENT,
                        id: "".concat(t),
                    },
                ),
            ),
        ];
    },
    ei = () =>
        (0, r.jsxs)("div", {
            className: W.themeTitle,
            children: [
                (0, r.jsxs)("div", {
                    className: W.themeTitleContainer,
                    children: [
                        (0, r.jsx)("div", {
                            className: W.title,
                            children: Y.intl.string(Y.t["0EzVst"]),
                        }),
                        (0, r.jsx)(d.R94, {
                            type: d.R94.Types.DESCRIPTION,
                            className: W.subtext,
                            children: Y.intl.string(Y.t.PV3dGX),
                        }),
                    ],
                }),
                (0, r.jsx)(k.g, {}),
            ],
        }),
    ea = () => {
        let e = (0, B.Z)();
        return Y.intl.format(Y.t.Jae48E, {
            onClick: () => {
                e(j.n.ACCESSIBILITY_PANEL, { section: F.oAB.ACCESSIBILITY });
            },
        });
    };
class eo extends i.Component {
    renderZoomSlider() {
        return (
            !D.isPlatformEmbedded,
            (0, r.jsx)(d.iRW, {
                label: Y.intl.string(Y.t.i19n5L),
                description: Y.intl.string(Y.t.ip0uSf),
                helperText: Y.intl.format(Y.t.OMkSUo, { modKey: p.Z.modKey }),
                initialValue: this.props.zoom,
                defaultValue: F.yqN.ZOOM_DEFAULT,
                markers: F.yqN.ZOOM_SCALES,
                stickToMarkers: !0,
                onValueChange: this.handleZoomChange,
                onValueRender: this.handleSliderRender,
                "aria-labelledby": ee,
            })
        );
    }
    renderFontScaleSlider() {
        return (0, r.jsx)(d.iRW, {
            label: Y.intl.string(Y.t.qPOqoK),
            description: Y.intl.string(Y.t.XrtbPo),
            initialValue: this.props.fontSize,
            defaultValue: F.yqN.FONT_SIZE_DEFAULT,
            markers: F.yqN.FONT_SIZES,
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
            label: Y.intl.string(Y.t.Q6lKkg),
            description: Y.intl.string(Y.t.p7eUrb),
            initialValue: t,
            defaultValue: e ? H.c8 : H.pq,
            markers: H.fP,
            stickToMarkers: !0,
            onValueChange: this.handleMessageSpacingChange,
            onValueRender: this.handleSliderRenderPX,
            onMarkerRender: this.handleSliderRenderPX,
            getAriaValueText: this.handleSliderValueText,
            "aria-labelledby": et,
        });
    }
    renderPreview() {
        let { messageDisplayCompact: e, theme: t, messageGroupSpacing: n, hideSimpleEmbedContent: i } = this.props,
            a = (0, u.wj)(t) ? this.darkMessages : this.lightMessages;
        return (0, r.jsx)(d.Rny, {
            children: (0, r.jsx)(d.Zbd, {
                className: o()(
                    W.preview,
                    K.marginBottom40,
                    e ? W.compactPreview : void 0,
                    "group-spacing-".concat(null != n ? n : e ? H.c8 : H.pq),
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
                            className: 0 === n ? W.firstMessage : void 0,
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
                  label: Y.intl.string(Y.t.Ksh3ik),
                  children: (0, r.jsx)(d.Wn, {
                      messageType: d.QYI.INFO,
                      children: (0, g.b)() ? (0, r.jsx)(ea, {}) : Y.intl.string(Y.t.AUMSZP),
                  }),
              })
            : (0, r.jsx)(d.C3N, {
                  label: Y.intl.string(Y.t.Ksh3ik),
                  children: (0, r.jsx)(d.xJW, {
                      title: (0, r.jsx)(ei, {}),
                      children: (0, r.jsx)(k.i, {}),
                  }),
              });
    }
    renderTimestampHourCycle() {
        let { timestampHourCycle: e } = this.props;
        return (0, r.jsx)(d.FXm, {
            label: Y.intl.string(Y.t.dyamEI),
            options: [
                {
                    name: Y.intl.string(Y.t.FMWYvb),
                    value: c.hg.AUTO,
                },
                {
                    name: Y.intl.string(Y.t.p8NOwi),
                    value: c.hg.H12,
                },
                {
                    name: Y.intl.string(Y.t["+o/sOo"]),
                    value: c.hg.H23,
                },
            ],
            onChange: (e) => M.hg.updateSetting(e),
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
        return Y.intl.formatToPlainString(Y.t["0hpvOV"], { value: e });
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
            t = (0, r.jsxs)(R.F, {
                setting: Z.s6.APPEARANCE_THEME,
                children: [this.renderPreview(), this.renderTheme()],
            }),
            n = (0, r.jsx)(R.F, {
                setting: Z.s6.APPEARANCE_ICON,
                children: (0, r.jsx)(U.c, {}),
            }),
            i = [
                {
                    name: Y.intl.string(Y.t["7iegX4"]),
                    value: c.Pi.COMPACT,
                },
                {
                    name: Y.intl.string(Y.t.bBvAEH),
                    value: c.Pi.DEFAULT,
                },
                {
                    name: Y.intl.string(Y.t["4cuYHx"]),
                    value: c.Pi.COZY,
                },
            ],
            a = (0, r.jsxs)(R.F, {
                setting: Z.s6.APPEARANCE_LIST_SPACING,
                children: [
                    (0, r.jsx)(d.FXm, {
                        label: Y.intl.string(Y.t["C/5V0A"]),
                        description: Y.intl.string(Y.t.QLZhYk),
                        options: i,
                        onChange: (e) => this.handleUIDensityChange({ value: e }),
                        value: e,
                    }),
                    (0, r.jsx)(d.izJ, { className: W.divider }),
                ],
            }),
            o = (0, r.jsxs)(R.F, {
                setting: Z.s6.APPEARANCE_MESSAGE_DISPLAY_COMPACT,
                children: [
                    (0, r.jsxs)(d.C3N, {
                        label: Y.intl.string(Y.t["2ed/sA"]),
                        description: Y.intl.string(Y.t.u9N6Qh),
                        children: [
                            (0, r.jsx)(d.FXm, {
                                label: Y.intl.string(Y.t.nKRoPv),
                                description: Y.intl.string(Y.t.QntEEG),
                                options: [
                                    {
                                        name: Y.intl.string(Y.t.Jqj4cZ),
                                        value: J,
                                    },
                                    {
                                        name: Y.intl.string(Y.t["1JNcPS"]),
                                        value: $,
                                    },
                                ],
                                onChange: (e) => this.handleMessageDisplayModeChange({ value: e }),
                                value: this.props.messageDisplayCompact ? $ : J,
                            }),
                            this.props.messageDisplayCompact &&
                                (0, r.jsx)(d.rsf, {
                                    label: Y.intl.string(Y.t["//vhWi"]),
                                    checked: !this.props.displayCompactAvatars,
                                    onChange: (e) => this.handleDisplayCompactAvatarsChanged(!e),
                                }),
                            this.renderMessageGroupSpacingSlider(),
                        ],
                    }),
                    (0, r.jsx)(d.izJ, { className: W.divider }),
                ],
            }),
            s = (0, r.jsxs)(R.F, {
                setting: Z.s6.APPEARANCE_SCALING_SPACING,
                children: [
                    (0, r.jsxs)(d.C3N, {
                        label: Y.intl.string(Y.t["0Yh+ZX"]),
                        children: [this.renderFontScaleSlider(), this.renderZoomSlider()],
                    }),
                    (0, r.jsx)(d.izJ, { className: W.divider }),
                ],
            }),
            l = (0, r.jsx)(R.F, {
                setting: Z.s6.APPEARANCE_TIMESTAMP_HOUR_CYCLE,
                children: this.renderTimestampHourCycle(),
            }),
            u = (0, r.jsx)(d.Text, {
                variant: "text-md/normal",
                className: W.a11yCallout,
                children: (0, r.jsx)(ea, {}),
            });
        return (0, r.jsxs)(G.Z, {
            title: Y.intl.string(Y.t["iHH+ky"]),
            children: [t, n, a, o, s, l, u],
        });
    }
    constructor(...e) {
        super(...e),
            z(this, "darkMessages", er(F.BRd.DARK)),
            z(this, "lightMessages", er(F.BRd.LIGHT)),
            z(this, "handleDisplayCompactAvatarsChanged", (e) => {
                f.ZP.updatedUnsyncedSettings({ displayCompactAvatars: e });
            }),
            z(this, "handleDesktopRefreshEnabledChanged", (e) => {
                f.ZP.updatedUnsyncedSettings({ disableVisualRefresh: !e });
            }),
            z(this, "handleMessageDisplayModeChange", (e) => {
                let { value: t } = e;
                M.jU.updateSetting(t === $), (0, h.ZZ)();
            }),
            z(this, "handleUIDensityChange", (e) => {
                let { value: t } = e;
                t !== c.Pi.UNSET_UI_DENSITY && M.YC.updateSetting(t);
            });
    }
}
let es = (e) => {
    (0, T.zu)(e) ||
        (0, T.Q3)(e, {
            dismissAction: V.L.AUTO,
            forceTrack: !0,
        });
};
function el() {
    let e = M.jU.useSetting(),
        t = M.RS.useSetting(),
        n = M.NA.useSetting(),
        a = M.L1.useSetting(),
        o = M.hg.useSetting(),
        c = M.YC.useSetting(),
        u = O.Mc.useExperiment({ location: "UserSettingsAppearance" }).enabled,
        d = v.y.useConfig({ location: "UserSettingsAppearance" }).enabled,
        f = (0, E.T)("UserSettingsAppearance");
    (0, _.ZP)(() => {
        es(l.z.CLIENT_THEMES_SETTINGS_BADGE),
            es(l.z.DEKSTOP_CUSTOM_APP_ICON_BADGE),
            es(l.z.DEKSTOP_CUSTOM_APP_ICON_COACHMARK),
            d && (0, y.w)();
    }),
        i.useEffect(() => {
            u && es(l.z.CLIENT_THEMES_APPEARANCE_SETTINGS_NEW_BADGE),
                f && es(l.z.HALLOWEEN_APP_ICONS_APPEARANCE_SETTINGS_WEB_BADGE);
        }, [u, f]);
    let p = (0, P.A6)(),
        h = (0, s.cj)([L.Z, x.ZP, m.Z, w.default, b.Z], () => {
            var e, t;
            return {
                theme: L.Z.theme,
                useForcedColors: m.Z.useForcedColors,
                useSystemTheme: x.ZP.useSystemTheme,
                fontSize: m.Z.fontSize,
                zoom: m.Z.zoom,
                messageGroupSpacing: m.Z.messageGroupSpacing,
                displayCompactAvatars: x.ZP.displayCompactAvatars,
                isStaff: null != (t = null == (e = w.default.getCurrentUser()) ? void 0 : e.isStaff) && t,
                gradientPreset: b.Z.gradientPreset,
            };
        });
    return (0, r.jsx)(
        eo,
        q(
            {
                messageDisplayCompact: e,
                hideSimpleEmbedContent: t && n,
                clientTheme: a,
                timestampHourCycle: o,
                density: c,
                darkSidebar: p,
            },
            h,
        ),
    );
}
