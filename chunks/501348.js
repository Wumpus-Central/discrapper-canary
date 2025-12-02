n.d(t, { Z: () => eo }), n(388685);
var r = n(54381),
    i = n(473749),
    a = n(120356),
    o = n.n(a),
    s = n(442837),
    l = n(704215),
    c = n(524437),
    u = n(780384),
    d = n(481060),
    f = n(153867),
    p = n(493773),
    _ = n(714338),
    m = n(857595),
    h = n(607070),
    g = n(627845),
    E = n(514361),
    b = n(93262),
    y = n(990924),
    O = n(313201),
    v = n(266454),
    S = n(786761),
    I = n(3148),
    T = n(739566),
    A = n(753206),
    C = n(921801),
    N = n(984802),
    P = n(594174),
    R = n(358085),
    w = n(210887),
    D = n(740492),
    x = n(695346),
    L = n(313789),
    j = n(329013),
    M = n(333859),
    k = n(273313),
    U = n(518596),
    G = n(726985),
    Z = n(981631),
    B = n(921944),
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
    J = (0, O.hQ)(),
    $ = (0, O.hQ)(),
    ee = "1337",
    et = (e) => {
        let t = 0;
        return [
            (0, S.e5)(
                q(
                    K(
                        {},
                        (0, I.ZP)({
                            channelId: ee,
                            content: V.intl.string(V.t.oZxkEq),
                        }),
                    ),
                    {
                        state: Z.yb.SENT,
                        id: "".concat(t++),
                    },
                ),
            ),
            (0, S.e5)(
                q(
                    K(
                        {},
                        (0, I.ZP)({
                            channelId: ee,
                            content: (0, u.wj)(e) ? V.intl.string(V.t["WGb/v7"]) : V.intl.string(V.t["62m4mz"]),
                        }),
                    ),
                    {
                        state: Z.yb.SENT,
                        id: "".concat(t++),
                    },
                ),
            ),
            (0, S.e5)(
                q(
                    K(
                        {},
                        (0, I.ZP)({
                            channelId: ee,
                            content: V.intl.string(V.t.a0Byo5),
                        }),
                    ),
                    {
                        state: Z.yb.SENT,
                        id: "".concat(t++),
                    },
                ),
            ),
            (0, S.e5)(
                q(
                    K(
                        {},
                        (0, I.ZP)({
                            channelId: ee,
                            content: V.intl.string(V.t.bmwEWJ),
                        }),
                    ),
                    {
                        state: Z.yb.SENT,
                        id: "".concat(t++),
                    },
                ),
            ),
            (0, S.e5)(
                q(
                    K(
                        {},
                        (0, I.ZP)({
                            channelId: ee,
                            content: V.intl.string(V.t["hK9QW/"]),
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
    en = () =>
        (0, r.jsxs)("div", {
            className: H.themeTitle,
            children: [
                (0, r.jsxs)("div", {
                    className: H.themeTitleContainer,
                    children: [
                        (0, r.jsx)("div", {
                            className: H.title,
                            children: V.intl.string(V.t["0EzVst"]),
                        }),
                        (0, r.jsx)(d.R94, {
                            type: d.R94.Types.DESCRIPTION,
                            className: H.subtext,
                            children: V.intl.string(V.t.PV3dGX),
                        }),
                    ],
                }),
                (0, r.jsx)(j.g, {}),
            ],
        }),
    er = () =>
        V.intl.format(V.t.Jae48E, {
            onClick: () => {
                (0, U.openUserSettings)(L.n.ACCESSIBILITY_PANEL, { section: Z.oAB.ACCESSIBILITY });
            },
        });
class ei extends i.Component {
    renderZoomSlider() {
        return (
            !R.isPlatformEmbedded,
            (0, r.jsx)(d.iRW, {
                label: V.intl.string(V.t.i19n5L),
                description: V.intl.string(V.t.ip0uSf),
                helperText: V.intl.format(V.t.OMkSUo, { modKey: _.Z.modKey }),
                initialValue: this.props.zoom,
                defaultValue: Z.yqN.ZOOM_DEFAULT,
                markers: Z.yqN.ZOOM_SCALES,
                stickToMarkers: !0,
                onValueChange: this.handleZoomChange,
                onValueRender: this.handleSliderRender,
                "aria-labelledby": J,
            })
        );
    }
    renderFontScaleSlider() {
        return (0, r.jsx)(d.iRW, {
            label: V.intl.string(V.t.qPOqoK),
            description: V.intl.string(V.t.XrtbPo),
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
            label: V.intl.string(V.t.Q6lKkg),
            description: V.intl.string(V.t.p7eUrb),
            initialValue: t,
            defaultValue: e ? F.c8 : F.pq,
            markers: F.fP,
            stickToMarkers: !0,
            onValueChange: this.handleMessageSpacingChange,
            onValueRender: this.handleSliderRenderPX,
            onMarkerRender: this.handleSliderRenderPX,
            getAriaValueText: this.handleSliderValueText,
            "aria-labelledby": $,
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
                            author: (0, T.ZH)(t),
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
            ? (0, r.jsx)(d.C3N, {
                  label: V.intl.string(V.t.Ksh3ik),
                  children: (0, r.jsx)(d.Wn, {
                      messageType: d.QYI.INFO,
                      children: (0, g.b)() ? (0, r.jsx)(er, {}) : V.intl.string(V.t.AUMSZP),
                  }),
              })
            : (0, r.jsx)(d.C3N, {
                  label: V.intl.string(V.t.Ksh3ik),
                  children: (0, r.jsx)(d.xJW, {
                      title: (0, r.jsx)(en, {}),
                      children: (0, r.jsx)(j.i, {}),
                  }),
              });
    }
    handleSliderRender(e) {
        return "".concat(e.toFixed(0), "%");
    }
    handleSliderRenderPX(e) {
        return "".concat(e.toFixed(0), "px");
    }
    handleSliderValueText(e) {
        return V.intl.formatToPlainString(V.t["0hpvOV"], { value: e });
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
                    name: V.intl.string(V.t["7iegX4"]),
                    value: c.Pi.COMPACT,
                },
                {
                    name: V.intl.string(V.t.bBvAEH),
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
                        label: V.intl.string(V.t["C/5V0A"]),
                        description: V.intl.string(V.t.QLZhYk),
                        options: i,
                        onChange: (e) => this.handleUIDensityChange({ value: e }),
                        value: e,
                    }),
                    (0, r.jsx)(d.izJ, { className: H.divider }),
                ],
            }),
            o = (0, r.jsxs)(C.F, {
                setting: G.s6.APPEARANCE_MESSAGE_DISPLAY_COMPACT,
                children: [
                    (0, r.jsxs)(d.C3N, {
                        label: V.intl.string(V.t["2ed/sA"]),
                        description: V.intl.string(V.t.u9N6Qh),
                        children: [
                            (0, r.jsx)(d.FXm, {
                                label: V.intl.string(V.t.nKRoPv),
                                description: V.intl.string(V.t.QntEEG),
                                options: [
                                    {
                                        name: V.intl.string(V.t.Jqj4cZ),
                                        value: X,
                                    },
                                    {
                                        name: V.intl.string(V.t["1JNcPS"]),
                                        value: Q,
                                    },
                                ],
                                onChange: (e) => this.handleMessageDisplayModeChange({ value: e }),
                                value: this.props.messageDisplayCompact ? Q : X,
                            }),
                            this.props.messageDisplayCompact &&
                                (0, r.jsx)(d.rsf, {
                                    label: V.intl.string(V.t["//vhWi"]),
                                    checked: !this.props.displayCompactAvatars,
                                    onChange: (e) => this.handleDisplayCompactAvatarsChanged(!e),
                                }),
                            this.renderMessageGroupSpacingSlider(),
                        ],
                    }),
                    (0, r.jsx)(d.izJ, { className: H.divider }),
                ],
            }),
            s = (0, r.jsxs)(C.F, {
                setting: G.s6.APPEARANCE_SCALING_SPACING,
                children: [
                    (0, r.jsxs)(d.C3N, {
                        label: V.intl.string(V.t["0Yh+ZX"]),
                        children: [this.renderFontScaleSlider(), this.renderZoomSlider()],
                    }),
                    (0, r.jsx)(d.izJ, { className: H.divider }),
                ],
            }),
            l = (0, r.jsx)(d.Text, {
                variant: "text-md/normal",
                className: H.a11yCallout,
                children: (0, r.jsx)(er, {}),
            });
        return (0, r.jsxs)(k.Z, {
            title: V.intl.string(V.t["iHH+ky"]),
            children: [t, n, a, o, s, l],
        });
    }
    constructor(...e) {
        super(...e),
            W(this, "darkMessages", et(Z.BRd.DARK)),
            W(this, "lightMessages", et(Z.BRd.LIGHT)),
            W(this, "handleDisplayCompactAvatarsChanged", (e) => {
                f.ZP.updatedUnsyncedSettings({ displayCompactAvatars: e });
            }),
            W(this, "handleDesktopRefreshEnabledChanged", (e) => {
                f.ZP.updatedUnsyncedSettings({ disableVisualRefresh: !e });
            }),
            W(this, "handleMessageDisplayModeChange", (e) => {
                let { value: t } = e;
                x.jU.updateSetting(t === Q), (0, m.ZZ)();
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
            dismissAction: B.L.AUTO,
            forceTrack: !0,
        });
};
function eo() {
    let e = x.jU.useSetting(),
        t = x.RS.useSetting(),
        n = x.NA.useSetting(),
        i = x.L1.useSetting(),
        a = x.YC.useSetting(),
        o = y.y.useConfig({ location: "UserSettingsAppearance" }).enabled;
    (0, p.ZP)(() => {
        ea(l.z.CLIENT_THEMES_SETTINGS_BADGE),
            ea(l.z.DEKSTOP_CUSTOM_APP_ICON_BADGE),
            ea(l.z.DEKSTOP_CUSTOM_APP_ICON_COACHMARK),
            ea(l.z.CLIENT_THEMES_APPEARANCE_SETTINGS_NEW_BADGE),
            o && (0, b.w)();
    });
    let c = (0, N.A6)(),
        u = (0, s.cj)([w.Z, D.ZP, h.Z, P.default, E.Z], () => {
            var e, t;
            return {
                theme: w.Z.theme,
                useForcedColors: h.Z.useForcedColors,
                useSystemTheme: D.ZP.useSystemTheme,
                fontSize: h.Z.fontSize,
                zoom: h.Z.zoom,
                messageGroupSpacing: h.Z.messageGroupSpacing,
                displayCompactAvatars: D.ZP.displayCompactAvatars,
                isStaff: null != (t = null == (e = P.default.getCurrentUser()) ? void 0 : e.isStaff) && t,
                gradientPreset: E.Z.gradientPreset,
            };
        });
    return (0, r.jsx)(
        ei,
        K(
            {
                messageDisplayCompact: e,
                hideSimpleEmbedContent: t && n,
                clientTheme: i,
                density: a,
                darkSidebar: c,
            },
            u,
        ),
    );
}
