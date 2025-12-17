n.d(t, {
    $w: () => ee,
    XU: () => et,
    ZP: () => er,
    hU: () => $,
    n6: () => J,
    pe: () => K,
}),
    n(388685);
var r = n(54381),
    i = n(473749),
    a = n(120356),
    o = n.n(a),
    s = n(442837),
    l = n(524437),
    c = n(780384),
    u = n(481060),
    d = n(153867),
    f = n(493773),
    p = n(714338),
    _ = n(857595),
    m = n(607070),
    h = n(627845),
    g = n(514361),
    E = n(93262),
    b = n(990924),
    y = n(313201),
    O = n(786761),
    v = n(3148),
    S = n(739566),
    I = n(753206),
    T = n(921801),
    C = n(984802),
    A = n(594174),
    N = n(358085),
    P = n(210887),
    R = n(740492),
    w = n(695346),
    D = n(313789),
    x = n(329013),
    L = n(333859),
    j = n(273313),
    M = n(518596),
    k = n(726985),
    U = n(981631),
    G = n(959517),
    Z = n(388032),
    F = n(407626),
    B = n(478411);
function V(e, t, n) {
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
function H(e) {
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
                V(e, t, n[t]);
            });
    }
    return e;
}
function Y(e, t) {
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
function W(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : Y(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let K = {
        COZY: "cozy",
        COMPACT: "compact",
    },
    z = (0, y.hQ)(),
    q = (0, y.hQ)(),
    Q = "1337",
    X = (e) => {
        let t = 0;
        return [
            (0, O.e5)(
                W(
                    H(
                        {},
                        (0, v.ZP)({
                            channelId: Q,
                            content: Z.intl.string(Z.t.oZxkEq),
                        }),
                    ),
                    {
                        state: U.yb.SENT,
                        id: "".concat(t++),
                    },
                ),
            ),
            (0, O.e5)(
                W(
                    H(
                        {},
                        (0, v.ZP)({
                            channelId: Q,
                            content: (0, c.wj)(e) ? Z.intl.string(Z.t["WGb/v7"]) : Z.intl.string(Z.t["62m4mz"]),
                        }),
                    ),
                    {
                        state: U.yb.SENT,
                        id: "".concat(t++),
                    },
                ),
            ),
            (0, O.e5)(
                W(
                    H(
                        {},
                        (0, v.ZP)({
                            channelId: Q,
                            content: Z.intl.string(Z.t.a0Byo5),
                        }),
                    ),
                    {
                        state: U.yb.SENT,
                        id: "".concat(t++),
                    },
                ),
            ),
            (0, O.e5)(
                W(
                    H(
                        {},
                        (0, v.ZP)({
                            channelId: Q,
                            content: Z.intl.string(Z.t.bmwEWJ),
                        }),
                    ),
                    {
                        state: U.yb.SENT,
                        id: "".concat(t++),
                    },
                ),
            ),
            (0, O.e5)(
                W(
                    H(
                        {},
                        (0, v.ZP)({
                            channelId: Q,
                            content: Z.intl.string(Z.t["hK9QW/"]),
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
    J = () =>
        (0, r.jsxs)("div", {
            className: F.themeTitle,
            children: [
                (0, r.jsxs)("div", {
                    className: F.themeTitleContainer,
                    children: [
                        (0, r.jsx)("div", {
                            className: F.title,
                            children: Z.intl.string(Z.t["0EzVst"]),
                        }),
                        (0, r.jsx)(u.R94, {
                            type: u.R94.Types.DESCRIPTION,
                            className: F.subtext,
                            children: Z.intl.string(Z.t.PV3dGX),
                        }),
                    ],
                }),
                (0, r.jsx)(x.g, {}),
            ],
        }),
    $ = () =>
        Z.intl.format(Z.t.Jae48E, {
            onClick: () => {
                (0, M.openUserSettings)(D.n.SYNC_FORCED_COLORS, { section: U.oAB.ACCESSIBILITY });
            },
        }),
    ee = () =>
        Z.intl.format(Z.t["5LEQdc"], {
            onAccessibilityClick: () => {
                (0, M.openUserSettings)(D.n.ACCESSIBILITY_PANEL, { section: U.oAB.ACCESSIBILITY });
            },
        }),
    et = () => {
        let e = w.jU.useSetting(),
            t = w.RS.useSetting(),
            n = w.NA.useSetting(),
            { theme: a, messageGroupSpacing: l } = (0, s.cj)([P.Z, m.Z], () => ({
                theme: P.Z.theme,
                messageGroupSpacing: m.Z.messageGroupSpacing,
            })),
            [d] = i.useState(() => X(U.BRd.DARK)),
            [f] = i.useState(() => X(U.BRd.LIGHT)),
            p = t && n,
            _ = (0, c.wj)(a) ? d : f;
        return (0, r.jsx)(u.Rny, {
            children: (0, r.jsx)(u.Zbd, {
                className: o()(
                    F.preview,
                    B.marginBottom40,
                    e ? F.compactPreview : void 0,
                    "group-spacing-".concat(null != l ? l : e ? G.c8 : G.pq),
                ),
                outline: !0,
                "aria-hidden": !0,
                children: _.map((t, n) =>
                    (0, r.jsx)(
                        I.Z,
                        {
                            author: (0, S.ZH)(t),
                            message: t,
                            compact: e,
                            isGroupStart: n % 2 == 0,
                            className: 0 === n ? F.firstMessage : void 0,
                            hideSimpleEmbedContent: p,
                        },
                        t.id,
                    ),
                ),
            }),
        });
    };
class en extends i.Component {
    renderZoomSlider() {
        return N.isPlatformEmbedded
            ? (0, r.jsx)(u.iRW, {
                  label: Z.intl.string(Z.t.i19n5L),
                  description: Z.intl.string(Z.t.ip0uSf),
                  helperText: Z.intl.format(Z.t.OMkSUo, { modKey: p.Z.modKey }),
                  initialValue: this.props.zoom,
                  defaultValue: U.yqN.ZOOM_DEFAULT,
                  markers: U.yqN.ZOOM_SCALES,
                  stickToMarkers: !0,
                  onValueChange: this.handleZoomChange,
                  onValueRender: this.handleSliderRender,
                  "aria-labelledby": z,
              })
            : null;
    }
    renderFontScaleSlider() {
        return (0, r.jsx)(u.iRW, {
            label: Z.intl.string(Z.t.qPOqoK),
            description: Z.intl.string(Z.t.XrtbPo),
            initialValue: this.props.fontSize,
            defaultValue: U.yqN.FONT_SIZE_DEFAULT,
            markers: U.yqN.FONT_SIZES,
            stickToMarkers: !0,
            onValueChange: this.handleFontSizeChange,
            onValueRender: this.handleSliderRenderPX,
            onMarkerRender: this.handleSliderRenderPX,
            getAriaValueText: this.handleSliderValueText,
        });
    }
    renderMessageGroupSpacingSlider() {
        let { messageDisplayCompact: e, messageGroupSpacing: t } = this.props;
        return (0, r.jsx)(u.iRW, {
            label: Z.intl.string(Z.t.Q6lKkg),
            description: Z.intl.string(Z.t.p7eUrb),
            initialValue: t,
            defaultValue: e ? G.c8 : G.pq,
            markers: G.fP,
            stickToMarkers: !0,
            onValueChange: this.handleMessageSpacingChange,
            onValueRender: this.handleSliderRenderPX,
            onMarkerRender: this.handleSliderRenderPX,
            getAriaValueText: this.handleSliderValueText,
            "aria-labelledby": q,
        });
    }
    renderPreview() {
        return (0, r.jsx)(et, {});
    }
    renderTheme() {
        let { useForcedColors: e } = this.props;
        return e
            ? (0, r.jsx)(u.C3N, {
                  label: Z.intl.string(Z.t.Ksh3ik),
                  children: (0, r.jsx)(u.Wn, {
                      messageType: u.QYI.INFO,
                      children: (0, h.b)() ? (0, r.jsx)($, {}) : Z.intl.string(Z.t.AUMSZP),
                  }),
              })
            : (0, r.jsx)(u.C3N, {
                  label: Z.intl.string(Z.t.Ksh3ik),
                  children: (0, r.jsx)(u.xJW, {
                      title: (0, r.jsx)(J, {}),
                      children: (0, r.jsx)(x.i, {}),
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
        return Z.intl.formatToPlainString(Z.t["0hpvOV"], { value: e });
    }
    handleFontSizeChange(e) {
        (0, _.oL)(e);
    }
    handleMessageSpacingChange(e) {
        switch (e) {
            case 0:
            case 4:
            case 8:
            case 16:
            case 24:
                (0, _.ZZ)(e);
        }
    }
    handleZoomChange(e) {
        (0, _.cq)(e);
    }
    render() {
        let { density: e } = this.props,
            t = (0, r.jsxs)(T.F, {
                setting: k.s6.APPEARANCE_THEME,
                children: [this.renderPreview(), this.renderTheme()],
            }),
            n = (0, r.jsx)(T.F, {
                setting: k.s6.APPEARANCE_ICON,
                children: (0, r.jsx)(L.c, {}),
            }),
            i = [
                {
                    name: Z.intl.string(Z.t["7iegX4"]),
                    value: l.Pi.COMPACT,
                },
                {
                    name: Z.intl.string(Z.t.bBvAEH),
                    value: l.Pi.DEFAULT,
                },
                {
                    name: Z.intl.string(Z.t["4cuYHx"]),
                    value: l.Pi.COZY,
                },
            ],
            a = (0, r.jsxs)(T.F, {
                setting: k.s6.APPEARANCE_LIST_SPACING,
                children: [
                    (0, r.jsx)(u.FXm, {
                        label: Z.intl.string(Z.t["C/5V0A"]),
                        description: Z.intl.string(Z.t.QLZhYk),
                        options: i,
                        onChange: (e) => this.handleUIDensityChange({ value: e }),
                        value: e,
                    }),
                    (0, r.jsx)(u.izJ, { className: F.divider }),
                ],
            }),
            o = (0, r.jsxs)(T.F, {
                setting: k.s6.APPEARANCE_MESSAGE_DISPLAY_COMPACT,
                children: [
                    (0, r.jsxs)(u.C3N, {
                        label: Z.intl.string(Z.t["2ed/sA"]),
                        description: Z.intl.string(Z.t.u9N6Qh),
                        children: [
                            (0, r.jsx)(u.FXm, {
                                label: Z.intl.string(Z.t.nKRoPv),
                                description: Z.intl.string(Z.t.QntEEG),
                                options: [
                                    {
                                        name: Z.intl.string(Z.t.Jqj4cZ),
                                        value: K.COZY,
                                    },
                                    {
                                        name: Z.intl.string(Z.t["1JNcPS"]),
                                        value: K.COMPACT,
                                    },
                                ],
                                onChange: (e) => this.handleMessageDisplayModeChange({ value: e }),
                                value: this.props.messageDisplayCompact ? K.COMPACT : K.COZY,
                            }),
                            this.props.messageDisplayCompact &&
                                (0, r.jsx)(u.rsf, {
                                    label: Z.intl.string(Z.t["//vhWi"]),
                                    checked: !this.props.displayCompactAvatars,
                                    onChange: (e) => this.handleDisplayCompactAvatarsChanged(!e),
                                }),
                            this.renderMessageGroupSpacingSlider(),
                        ],
                    }),
                    (0, r.jsx)(u.izJ, { className: F.divider }),
                ],
            }),
            s = (0, r.jsxs)(T.F, {
                setting: k.s6.APPEARANCE_SCALING_SPACING,
                children: [
                    (0, r.jsxs)(u.C3N, {
                        label: Z.intl.string(Z.t["0Yh+ZX"]),
                        children: [this.renderFontScaleSlider(), this.renderZoomSlider()],
                    }),
                    (0, r.jsx)(u.izJ, { className: F.divider }),
                ],
            }),
            c = (0, r.jsx)(u.Text, {
                variant: "text-md/normal",
                className: F.a11yCallout,
                children: (0, r.jsx)(ee, {}),
            });
        return (0, r.jsxs)(j.Z, {
            title: Z.intl.string(Z.t["iHH+ky"]),
            children: [t, n, a, o, s, c],
        });
    }
    constructor(...e) {
        super(...e),
            V(this, "darkMessages", X(U.BRd.DARK)),
            V(this, "lightMessages", X(U.BRd.LIGHT)),
            V(this, "handleDisplayCompactAvatarsChanged", (e) => {
                d.ZP.updatedUnsyncedSettings({ displayCompactAvatars: e });
            }),
            V(this, "handleDesktopRefreshEnabledChanged", (e) => {
                d.ZP.updatedUnsyncedSettings({ disableVisualRefresh: !e });
            }),
            V(this, "handleMessageDisplayModeChange", (e) => {
                let { value: t } = e;
                w.jU.updateSetting(t === K.COMPACT), (0, _.ZZ)();
            }),
            V(this, "handleUIDensityChange", (e) => {
                let { value: t } = e;
                t !== l.Pi.UNSET_UI_DENSITY && w.YC.updateSetting(t);
            });
    }
}
function er() {
    let e = w.jU.useSetting(),
        t = w.RS.useSetting(),
        n = w.NA.useSetting(),
        i = w.L1.useSetting(),
        a = w.YC.useSetting(),
        o = b.y.useConfig({ location: "UserSettingsAppearance" }).enabled;
    (0, f.ZP)(() => {
        o && (0, E.w)();
    });
    let l = (0, C.A6)(),
        c = (0, s.cj)([P.Z, R.ZP, m.Z, A.default, g.Z], () => {
            var e, t;
            return {
                theme: P.Z.theme,
                useForcedColors: m.Z.useForcedColors,
                useSystemTheme: R.ZP.useSystemTheme,
                fontSize: m.Z.fontSize,
                zoom: m.Z.zoom,
                messageGroupSpacing: m.Z.messageGroupSpacing,
                displayCompactAvatars: R.ZP.displayCompactAvatars,
                isStaff: null != (t = null == (e = A.default.getCurrentUser()) ? void 0 : e.isStaff) && t,
                gradientPreset: g.Z.gradientPreset,
            };
        });
    return (0, r.jsx)(
        en,
        H(
            {
                messageDisplayCompact: e,
                hideSimpleEmbedContent: t && n,
                clientTheme: i,
                density: a,
                darkSidebar: l,
            },
            c,
        ),
    );
}
