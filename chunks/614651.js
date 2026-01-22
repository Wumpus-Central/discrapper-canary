n.d(t, {
    $p: () => J,
    Ay: () => en,
    IE: () => K,
    Ys: () => $,
    ac: () => Q,
    y2: () => ee,
}),
    n(896048);
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(311907),
    l = n(873298),
    c = n(582754),
    u = n(397927),
    d = n(817281),
    f = n(964486),
    p = n(775121),
    _ = n(955572),
    h = n(775602),
    m = n(502229),
    g = n(47671),
    E = n(920603),
    b = n(915089),
    y = n(141468),
    O = n(963852),
    A = n(763754),
    v = n(20851),
    S = n(195043),
    I = n(97469),
    T = n(287809),
    C = n(723702),
    N = n(544028),
    R = n(964404),
    w = n(253932),
    P = n(780964),
    D = n(70040),
    x = n(961154),
    L = n(790174),
    j = n(840065),
    M = n(531525),
    k = n(652215),
    U = n(381941),
    G = n(985018),
    V = n(944255),
    F = n(473169);
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
                B(e, t, n[t]);
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
    z = (0, b.Ld)(),
    q = (0, b.Ld)(),
    X = "1337",
    Z = (e) => {
        let t = 0;
        return [
            (0, y.rh)(
                W(
                    H(
                        {},
                        (0, O.Ay)({
                            channelId: X,
                            content: G.intl.string(G.t.oZxkEq),
                        }),
                    ),
                    {
                        state: k.cmJ.SENT,
                        id: "".concat(t++),
                    },
                ),
            ),
            (0, y.rh)(
                W(
                    H(
                        {},
                        (0, O.Ay)({
                            channelId: X,
                            content: (0, c.Mw)(e) ? G.intl.string(G.t["WGb/v7"]) : G.intl.string(G.t["62m4mz"]),
                        }),
                    ),
                    {
                        state: k.cmJ.SENT,
                        id: "".concat(t++),
                    },
                ),
            ),
            (0, y.rh)(
                W(
                    H(
                        {},
                        (0, O.Ay)({
                            channelId: X,
                            content: G.intl.string(G.t.a0Byo5),
                        }),
                    ),
                    {
                        state: k.cmJ.SENT,
                        id: "".concat(t++),
                    },
                ),
            ),
            (0, y.rh)(
                W(
                    H(
                        {},
                        (0, O.Ay)({
                            channelId: X,
                            content: G.intl.string(G.t.bmwEWJ),
                        }),
                    ),
                    {
                        state: k.cmJ.SENT,
                        id: "".concat(t++),
                    },
                ),
            ),
            (0, y.rh)(
                W(
                    H(
                        {},
                        (0, O.Ay)({
                            channelId: X,
                            content: G.intl.string(G.t["hK9QW/"]),
                        }),
                    ),
                    {
                        state: k.cmJ.SENT,
                        id: "".concat(t),
                    },
                ),
            ),
        ];
    },
    Q = () =>
        (0, r.jsxs)("div", {
            className: V.cF,
            children: [
                (0, r.jsxs)("div", {
                    className: V.ZT,
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
                (0, r.jsx)(D.Q, {}),
            ],
        }),
    $ = () =>
        G.intl.format(G.t.Jae48E, {
            onClick: () => {
                (0, j.openUserSettings)(P.X.SYNC_FORCED_COLORS, { section: k.nc_.ACCESSIBILITY });
            },
        }),
    J = () =>
        G.intl.format(G.t["5LEQdc"], {
            onAccessibilityClick: () => {
                (0, j.openUserSettings)(P.X.ACCESSIBILITY_PANEL, { section: k.nc_.ACCESSIBILITY });
            },
        }),
    ee = () => {
        let e = w.hH.useSetting(),
            t = w.hD.useSetting(),
            n = w.rs.useSetting(),
            { theme: a, messageGroupSpacing: l } = (0, o.cf)([N.A, h.A], () => ({
                theme: N.A.theme,
                messageGroupSpacing: h.A.messageGroupSpacing,
            })),
            [d] = i.useState(() => Z(k.NJ8.DARK)),
            [f] = i.useState(() => Z(k.NJ8.LIGHT)),
            p = t && n,
            _ = (0, c.Mw)(a) ? d : f;
        return (0, r.jsx)(u.M1G, {
            children: (0, r.jsx)(u.ZpM, {
                className: s()(V.VH, F.C2, e ? V.Me : void 0, "group-spacing-".concat(null != l ? l : e ? U.y5 : U.ES)),
                outline: !0,
                "aria-hidden": !0,
                children: _.map((t, n) =>
                    (0, r.jsx)(
                        v.A,
                        {
                            author: (0, A.p_)(t),
                            message: t,
                            compact: e,
                            isGroupStart: n % 2 == 0,
                            className: 0 === n ? V.Ck : void 0,
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
        return C.isPlatformEmbedded
            ? (0, r.jsx)(u.Apm, {
                  label: G.intl.string(G.t.i19n5L),
                  description: G.intl.string(G.t.ip0uSf),
                  helperText: G.intl.format(G.t.OMkSUo, { modKey: p.A.modKey }),
                  initialValue: this.props.zoom,
                  defaultValue: k.hH7.ZOOM_DEFAULT,
                  markers: k.hH7.ZOOM_SCALES,
                  stickToMarkers: !0,
                  onValueChange: this.handleZoomChange,
                  onValueRender: this.handleSliderRender,
                  "aria-labelledby": z,
              })
            : null;
    }
    renderFontScaleSlider() {
        return (0, r.jsx)(u.Apm, {
            label: G.intl.string(G.t.qPOqoK),
            description: G.intl.string(G.t.XrtbPo),
            initialValue: this.props.fontSize,
            defaultValue: k.hH7.FONT_SIZE_DEFAULT,
            markers: k.hH7.FONT_SIZES,
            stickToMarkers: !0,
            onValueChange: this.handleFontSizeChange,
            onValueRender: this.handleSliderRenderPX,
            onMarkerRender: this.handleSliderRenderPX,
            getAriaValueText: this.handleSliderValueText,
        });
    }
    renderMessageGroupSpacingSlider() {
        let { messageDisplayCompact: e, messageGroupSpacing: t } = this.props;
        return (0, r.jsx)(u.Apm, {
            label: G.intl.string(G.t.Q6lKkg),
            description: G.intl.string(G.t.p7eUrb),
            initialValue: t,
            defaultValue: e ? U.y5 : U.ES,
            markers: U.qh,
            stickToMarkers: !0,
            onValueChange: this.handleMessageSpacingChange,
            onValueRender: this.handleSliderRenderPX,
            onMarkerRender: this.handleSliderRenderPX,
            getAriaValueText: this.handleSliderValueText,
            "aria-labelledby": q,
        });
    }
    renderPreview() {
        return (0, r.jsx)(ee, {});
    }
    renderTheme() {
        let { useForcedColors: e } = this.props;
        return e
            ? (0, r.jsx)(u.nVY, {
                  label: G.intl.string(G.t.Ksh3ik),
                  children: (0, r.jsx)(u.po8, {
                      messageType: u.YCn.INFO,
                      children: (0, m.D)() ? (0, r.jsx)($, {}) : G.intl.string(G.t.AUMSZP),
                  }),
              })
            : (0, r.jsx)(u.nVY, {
                  label: G.intl.string(G.t.Ksh3ik),
                  children: (0, r.jsxs)("div", {
                      children: [(0, r.jsx)(Q, {}), (0, r.jsx)(D.I, {})],
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
        (0, _.XS)(e);
    }
    handleMessageSpacingChange(e) {
        switch (e) {
            case 0:
            case 4:
            case 8:
            case 16:
            case 24:
                (0, _.AC)(e);
        }
    }
    handleZoomChange(e) {
        (0, _.Qp)(e);
    }
    render() {
        let { density: e } = this.props,
            t = (0, r.jsxs)(S.x, {
                setting: M.H.APPEARANCE_THEME,
                children: [this.renderPreview(), this.renderTheme()],
            }),
            n = (0, r.jsx)(S.x, {
                setting: M.H.APPEARANCE_ICON,
                children: (0, r.jsx)(x.y, {}),
            }),
            i = [
                {
                    name: G.intl.string(G.t["7iegX4"]),
                    value: l.NS.COMPACT,
                },
                {
                    name: G.intl.string(G.t.bBvAEH),
                    value: l.NS.DEFAULT,
                },
                {
                    name: G.intl.string(G.t["4cuYHx"]),
                    value: l.NS.COZY,
                },
            ],
            a = (0, r.jsxs)(S.x, {
                setting: M.H.APPEARANCE_LIST_SPACING,
                children: [
                    (0, r.jsx)(u.z6M, {
                        label: G.intl.string(G.t["C/5V0A"]),
                        description: G.intl.string(G.t.QLZhYk),
                        options: i,
                        onChange: (e) => this.handleUIDensityChange({ value: e }),
                        value: e,
                    }),
                    (0, r.jsx)(u.cGx, { className: V.yF }),
                ],
            }),
            s = (0, r.jsxs)(S.x, {
                setting: M.H.APPEARANCE_MESSAGE_DISPLAY_COMPACT,
                children: [
                    (0, r.jsxs)(u.nVY, {
                        label: G.intl.string(G.t["2ed/sA"]),
                        description: G.intl.string(G.t.u9N6Qh),
                        children: [
                            (0, r.jsx)(u.z6M, {
                                label: G.intl.string(G.t.nKRoPv),
                                description: G.intl.string(G.t.QntEEG),
                                options: [
                                    {
                                        name: G.intl.string(G.t.Jqj4cZ),
                                        value: K.COZY,
                                    },
                                    {
                                        name: G.intl.string(G.t["1JNcPS"]),
                                        value: K.COMPACT,
                                    },
                                ],
                                onChange: (e) => this.handleMessageDisplayModeChange({ value: e }),
                                value: this.props.messageDisplayCompact ? K.COMPACT : K.COZY,
                            }),
                            this.props.messageDisplayCompact &&
                                (0, r.jsx)(u.dOG, {
                                    label: G.intl.string(G.t["//vhWi"]),
                                    checked: !this.props.displayCompactAvatars,
                                    onChange: (e) => this.handleDisplayCompactAvatarsChanged(!e),
                                }),
                            this.renderMessageGroupSpacingSlider(),
                        ],
                    }),
                    (0, r.jsx)(u.cGx, { className: V.yF }),
                ],
            }),
            o = (0, r.jsxs)(S.x, {
                setting: M.H.APPEARANCE_SCALING_SPACING,
                children: [
                    (0, r.jsxs)(u.nVY, {
                        label: G.intl.string(G.t["0Yh+ZX"]),
                        children: [this.renderFontScaleSlider(), this.renderZoomSlider()],
                    }),
                    (0, r.jsx)(u.cGx, { className: V.yF }),
                ],
            }),
            c = (0, r.jsx)(u.Text, {
                variant: "text-md/normal",
                className: V.fK,
                children: (0, r.jsx)(J, {}),
            });
        return (0, r.jsxs)(L.A, {
            title: G.intl.string(G.t["iHH+ky"]),
            children: [t, n, a, s, o, c],
        });
    }
    constructor(...e) {
        super(...e),
            B(this, "darkMessages", Z(k.NJ8.DARK)),
            B(this, "lightMessages", Z(k.NJ8.LIGHT)),
            B(this, "handleDisplayCompactAvatarsChanged", (e) => {
                d.Ay.updatedUnsyncedSettings({ displayCompactAvatars: e });
            }),
            B(this, "handleDesktopRefreshEnabledChanged", (e) => {
                d.Ay.updatedUnsyncedSettings({ disableVisualRefresh: !e });
            }),
            B(this, "handleMessageDisplayModeChange", (e) => {
                let { value: t } = e;
                w.hH.updateSetting(t === K.COMPACT), (0, _.AC)();
            }),
            B(this, "handleUIDensityChange", (e) => {
                let { value: t } = e;
                t !== l.NS.UNSET_UI_DENSITY && w.Xi.updateSetting(t);
            });
    }
}
function en() {
    let e = w.hH.useSetting(),
        t = w.hD.useSetting(),
        n = w.rs.useSetting(),
        i = w.eh.useSetting(),
        a = w.Xi.useSetting();
    (0, f.Ay)(() => {
        (0, E.v)();
    });
    let s = (0, I.qo)(),
        l = (0, o.cf)([N.A, R.Ay, h.A, T.default, g.A], () => {
            var e, t;
            return {
                theme: N.A.theme,
                useForcedColors: h.A.useForcedColors,
                useSystemTheme: R.Ay.useSystemTheme,
                fontSize: h.A.fontSize,
                zoom: h.A.zoom,
                messageGroupSpacing: h.A.messageGroupSpacing,
                displayCompactAvatars: R.Ay.displayCompactAvatars,
                isStaff: null != (e = null == (t = T.default.getCurrentUser()) ? void 0 : t.isStaff) && e,
                gradientPreset: g.A.gradientPreset,
            };
        });
    return (0, r.jsx)(
        et,
        H(
            {
                messageDisplayCompact: e,
                hideSimpleEmbedContent: t && n,
                clientTheme: i,
                density: a,
                darkSidebar: s,
            },
            l,
        ),
    );
}
