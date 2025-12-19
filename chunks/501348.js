n.d(t, {
    $w: () => $,
    XU: () => ee,
    ZP: () => en,
    hU: () => J,
    n6: () => X,
    pe: () => W,
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
    b = n(313201),
    y = n(786761),
    O = n(3148),
    v = n(739566),
    S = n(753206),
    I = n(921801),
    T = n(984802),
    C = n(594174),
    A = n(358085),
    N = n(210887),
    P = n(740492),
    R = n(695346),
    w = n(313789),
    D = n(329013),
    x = n(333859),
    L = n(273313),
    j = n(518596),
    M = n(726985),
    k = n(981631),
    U = n(959517),
    G = n(388032),
    Z = n(407626),
    F = n(478411);
function B(e, t, n) {
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
function V(e) {
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
                B(e, t, n[t]);
            });
    }
    return e;
}
function H(e, t) {
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
function Y(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : H(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let W = {
        COZY: "cozy",
        COMPACT: "compact",
    },
    K = (0, b.hQ)(),
    z = (0, b.hQ)(),
    q = "1337",
    Q = (e) => {
        let t = 0;
        return [
            (0, y.e5)(
                Y(
                    V(
                        {},
                        (0, O.ZP)({
                            channelId: q,
                            content: G.intl.string(G.t.oZxkEq),
                        }),
                    ),
                    {
                        state: k.yb.SENT,
                        id: "".concat(t++),
                    },
                ),
            ),
            (0, y.e5)(
                Y(
                    V(
                        {},
                        (0, O.ZP)({
                            channelId: q,
                            content: (0, c.wj)(e) ? G.intl.string(G.t["WGb/v7"]) : G.intl.string(G.t["62m4mz"]),
                        }),
                    ),
                    {
                        state: k.yb.SENT,
                        id: "".concat(t++),
                    },
                ),
            ),
            (0, y.e5)(
                Y(
                    V(
                        {},
                        (0, O.ZP)({
                            channelId: q,
                            content: G.intl.string(G.t.a0Byo5),
                        }),
                    ),
                    {
                        state: k.yb.SENT,
                        id: "".concat(t++),
                    },
                ),
            ),
            (0, y.e5)(
                Y(
                    V(
                        {},
                        (0, O.ZP)({
                            channelId: q,
                            content: G.intl.string(G.t.bmwEWJ),
                        }),
                    ),
                    {
                        state: k.yb.SENT,
                        id: "".concat(t++),
                    },
                ),
            ),
            (0, y.e5)(
                Y(
                    V(
                        {},
                        (0, O.ZP)({
                            channelId: q,
                            content: G.intl.string(G.t["hK9QW/"]),
                        }),
                    ),
                    {
                        state: k.yb.SENT,
                        id: "".concat(t),
                    },
                ),
            ),
        ];
    },
    X = () =>
        (0, r.jsxs)("div", {
            className: Z.themeTitle,
            children: [
                (0, r.jsxs)("div", {
                    className: Z.themeTitleContainer,
                    children: [
                        (0, r.jsxs)(u.Text, {
                            variant: "text-md/medium",
                            children: [" ", G.intl.string(G.t["0EzVst"])],
                        }),
                        (0, r.jsx)(u.Text, {
                            variant: "text-sm/normal",
                            color: "text-subtle",
                            children: G.intl.string(G.t.PV3dGX),
                        }),
                    ],
                }),
                (0, r.jsx)(D.g, {}),
            ],
        }),
    J = () =>
        G.intl.format(G.t.Jae48E, {
            onClick: () => {
                (0, j.openUserSettings)(w.n.SYNC_FORCED_COLORS, { section: k.oAB.ACCESSIBILITY });
            },
        }),
    $ = () =>
        G.intl.format(G.t["5LEQdc"], {
            onAccessibilityClick: () => {
                (0, j.openUserSettings)(w.n.ACCESSIBILITY_PANEL, { section: k.oAB.ACCESSIBILITY });
            },
        }),
    ee = () => {
        let e = R.jU.useSetting(),
            t = R.RS.useSetting(),
            n = R.NA.useSetting(),
            { theme: a, messageGroupSpacing: l } = (0, s.cj)([N.Z, m.Z], () => ({
                theme: N.Z.theme,
                messageGroupSpacing: m.Z.messageGroupSpacing,
            })),
            [d] = i.useState(() => Q(k.BRd.DARK)),
            [f] = i.useState(() => Q(k.BRd.LIGHT)),
            p = t && n,
            _ = (0, c.wj)(a) ? d : f;
        return (0, r.jsx)(u.Rny, {
            children: (0, r.jsx)(u.Zbd, {
                className: o()(
                    Z.preview,
                    F.marginBottom40,
                    e ? Z.compactPreview : void 0,
                    "group-spacing-".concat(null != l ? l : e ? U.c8 : U.pq),
                ),
                outline: !0,
                "aria-hidden": !0,
                children: _.map((t, n) =>
                    (0, r.jsx)(
                        S.Z,
                        {
                            author: (0, v.ZH)(t),
                            message: t,
                            compact: e,
                            isGroupStart: n % 2 == 0,
                            className: 0 === n ? Z.firstMessage : void 0,
                            hideSimpleEmbedContent: p,
                        },
                        t.id,
                    ),
                ),
            }),
        });
    };
class et extends i.Component {
    renderZoomSlider() {
        return A.isPlatformEmbedded
            ? (0, r.jsx)(u.iRW, {
                  label: G.intl.string(G.t.i19n5L),
                  description: G.intl.string(G.t.ip0uSf),
                  helperText: G.intl.format(G.t.OMkSUo, { modKey: p.Z.modKey }),
                  initialValue: this.props.zoom,
                  defaultValue: k.yqN.ZOOM_DEFAULT,
                  markers: k.yqN.ZOOM_SCALES,
                  stickToMarkers: !0,
                  onValueChange: this.handleZoomChange,
                  onValueRender: this.handleSliderRender,
                  "aria-labelledby": K,
              })
            : null;
    }
    renderFontScaleSlider() {
        return (0, r.jsx)(u.iRW, {
            label: G.intl.string(G.t.qPOqoK),
            description: G.intl.string(G.t.XrtbPo),
            initialValue: this.props.fontSize,
            defaultValue: k.yqN.FONT_SIZE_DEFAULT,
            markers: k.yqN.FONT_SIZES,
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
            label: G.intl.string(G.t.Q6lKkg),
            description: G.intl.string(G.t.p7eUrb),
            initialValue: t,
            defaultValue: e ? U.c8 : U.pq,
            markers: U.fP,
            stickToMarkers: !0,
            onValueChange: this.handleMessageSpacingChange,
            onValueRender: this.handleSliderRenderPX,
            onMarkerRender: this.handleSliderRenderPX,
            getAriaValueText: this.handleSliderValueText,
            "aria-labelledby": z,
        });
    }
    renderPreview() {
        return (0, r.jsx)(ee, {});
    }
    renderTheme() {
        let { useForcedColors: e } = this.props;
        return e
            ? (0, r.jsx)(u.C3N, {
                  label: G.intl.string(G.t.Ksh3ik),
                  children: (0, r.jsx)(u.Wn, {
                      messageType: u.QYI.INFO,
                      children: (0, h.b)() ? (0, r.jsx)(J, {}) : G.intl.string(G.t.AUMSZP),
                  }),
              })
            : (0, r.jsx)(u.C3N, {
                  label: G.intl.string(G.t.Ksh3ik),
                  children: (0, r.jsxs)("div", {
                      children: [(0, r.jsx)(X, {}), (0, r.jsx)(D.i, {})],
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
        return G.intl.formatToPlainString(G.t["0hpvOV"], { value: e });
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
            t = (0, r.jsxs)(I.F, {
                setting: M.s6.APPEARANCE_THEME,
                children: [this.renderPreview(), this.renderTheme()],
            }),
            n = (0, r.jsx)(I.F, {
                setting: M.s6.APPEARANCE_ICON,
                children: (0, r.jsx)(x.c, {}),
            }),
            i = [
                {
                    name: G.intl.string(G.t["7iegX4"]),
                    value: l.Pi.COMPACT,
                },
                {
                    name: G.intl.string(G.t.bBvAEH),
                    value: l.Pi.DEFAULT,
                },
                {
                    name: G.intl.string(G.t["4cuYHx"]),
                    value: l.Pi.COZY,
                },
            ],
            a = (0, r.jsxs)(I.F, {
                setting: M.s6.APPEARANCE_LIST_SPACING,
                children: [
                    (0, r.jsx)(u.FXm, {
                        label: G.intl.string(G.t["C/5V0A"]),
                        description: G.intl.string(G.t.QLZhYk),
                        options: i,
                        onChange: (e) => this.handleUIDensityChange({ value: e }),
                        value: e,
                    }),
                    (0, r.jsx)(u.izJ, { className: Z.divider }),
                ],
            }),
            o = (0, r.jsxs)(I.F, {
                setting: M.s6.APPEARANCE_MESSAGE_DISPLAY_COMPACT,
                children: [
                    (0, r.jsxs)(u.C3N, {
                        label: G.intl.string(G.t["2ed/sA"]),
                        description: G.intl.string(G.t.u9N6Qh),
                        children: [
                            (0, r.jsx)(u.FXm, {
                                label: G.intl.string(G.t.nKRoPv),
                                description: G.intl.string(G.t.QntEEG),
                                options: [
                                    {
                                        name: G.intl.string(G.t.Jqj4cZ),
                                        value: W.COZY,
                                    },
                                    {
                                        name: G.intl.string(G.t["1JNcPS"]),
                                        value: W.COMPACT,
                                    },
                                ],
                                onChange: (e) => this.handleMessageDisplayModeChange({ value: e }),
                                value: this.props.messageDisplayCompact ? W.COMPACT : W.COZY,
                            }),
                            this.props.messageDisplayCompact &&
                                (0, r.jsx)(u.rsf, {
                                    label: G.intl.string(G.t["//vhWi"]),
                                    checked: !this.props.displayCompactAvatars,
                                    onChange: (e) => this.handleDisplayCompactAvatarsChanged(!e),
                                }),
                            this.renderMessageGroupSpacingSlider(),
                        ],
                    }),
                    (0, r.jsx)(u.izJ, { className: Z.divider }),
                ],
            }),
            s = (0, r.jsxs)(I.F, {
                setting: M.s6.APPEARANCE_SCALING_SPACING,
                children: [
                    (0, r.jsxs)(u.C3N, {
                        label: G.intl.string(G.t["0Yh+ZX"]),
                        children: [this.renderFontScaleSlider(), this.renderZoomSlider()],
                    }),
                    (0, r.jsx)(u.izJ, { className: Z.divider }),
                ],
            }),
            c = (0, r.jsx)(u.Text, {
                variant: "text-md/normal",
                className: Z.a11yCallout,
                children: (0, r.jsx)($, {}),
            });
        return (0, r.jsxs)(L.Z, {
            title: G.intl.string(G.t["iHH+ky"]),
            children: [t, n, a, o, s, c],
        });
    }
    constructor(...e) {
        super(...e),
            B(this, "darkMessages", Q(k.BRd.DARK)),
            B(this, "lightMessages", Q(k.BRd.LIGHT)),
            B(this, "handleDisplayCompactAvatarsChanged", (e) => {
                d.ZP.updatedUnsyncedSettings({ displayCompactAvatars: e });
            }),
            B(this, "handleDesktopRefreshEnabledChanged", (e) => {
                d.ZP.updatedUnsyncedSettings({ disableVisualRefresh: !e });
            }),
            B(this, "handleMessageDisplayModeChange", (e) => {
                let { value: t } = e;
                R.jU.updateSetting(t === W.COMPACT), (0, _.ZZ)();
            }),
            B(this, "handleUIDensityChange", (e) => {
                let { value: t } = e;
                t !== l.Pi.UNSET_UI_DENSITY && R.YC.updateSetting(t);
            });
    }
}
function en() {
    let e = R.jU.useSetting(),
        t = R.RS.useSetting(),
        n = R.NA.useSetting(),
        i = R.L1.useSetting(),
        a = R.YC.useSetting();
    (0, f.ZP)(() => {
        (0, E.w)();
    });
    let o = (0, T.A6)(),
        l = (0, s.cj)([N.Z, P.ZP, m.Z, C.default, g.Z], () => {
            var e, t;
            return {
                theme: N.Z.theme,
                useForcedColors: m.Z.useForcedColors,
                useSystemTheme: P.ZP.useSystemTheme,
                fontSize: m.Z.fontSize,
                zoom: m.Z.zoom,
                messageGroupSpacing: m.Z.messageGroupSpacing,
                displayCompactAvatars: P.ZP.displayCompactAvatars,
                isStaff: null != (t = null == (e = C.default.getCurrentUser()) ? void 0 : e.isStaff) && t,
                gradientPreset: g.Z.gradientPreset,
            };
        });
    return (0, r.jsx)(
        et,
        V(
            {
                messageDisplayCompact: e,
                hideSimpleEmbedContent: t && n,
                clientTheme: i,
                density: a,
                darkSidebar: o,
            },
            l,
        ),
    );
}
