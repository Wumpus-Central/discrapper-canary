n.d(t, {
    $p: () => Z,
    Ay: () => et,
    IE: () => z,
    Ys: () => q,
    ac: () => X,
    y2: () => $,
}),
    n(896048);
var i = n(627968),
    s = n(64700),
    l = n(503698),
    r = n.n(l),
    a = n(311907),
    o = n(873298),
    c = n(582754),
    d = n(397927),
    u = n(817281),
    g = n(964486),
    h = n(775121),
    x = n(955572),
    A = n(775602),
    p = n(502229),
    m = n(47671),
    j = n(920603),
    b = n(915089),
    O = n(141468),
    S = n(963852),
    E = n(763754),
    f = n(20851),
    v = n(195043),
    T = n(97469),
    C = n(287809),
    y = n(723702),
    N = n(544028),
    I = n(964404),
    _ = n(253932),
    P = n(780964),
    G = n(70040),
    R = n(961154),
    D = n(790174),
    L = n(840065),
    k = n(531525),
    w = n(652215),
    V = n(381941),
    M = n(985018),
    U = n(944255),
    H = n(473169);

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

function B(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            i = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            i.forEach(function (t) {
                Y(e, t, n[t]);
            });
    }
    return e;
}

function F(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var i = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, i);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let z = {
        COZY: "cozy",
        COMPACT: "compact",
    },
    W = (0, b.Ld)(),
    K = (0, b.Ld)(),
    J = "1337",
    Q = (e) => {
        let t = 0;
        return [
            (0, O.rh)(
                F(
                    B(
                        {},
                        (0, S.Ay)({
                            channelId: J,
                            content: M.intl.string(M.t.oZxkEq),
                        }),
                    ),
                    {
                        state: w.cmJ.SENT,
                        id: "".concat(t++),
                    },
                ),
            ),
            (0, O.rh)(
                F(
                    B(
                        {},
                        (0, S.Ay)({
                            channelId: J,
                            content: (0, c.Mw)(e) ? M.intl.string(M.t["WGb/v7"]) : M.intl.string(M.t["62m4mz"]),
                        }),
                    ),
                    {
                        state: w.cmJ.SENT,
                        id: "".concat(t++),
                    },
                ),
            ),
            (0, O.rh)(
                F(
                    B(
                        {},
                        (0, S.Ay)({
                            channelId: J,
                            content: M.intl.string(M.t.a0Byo5),
                        }),
                    ),
                    {
                        state: w.cmJ.SENT,
                        id: "".concat(t++),
                    },
                ),
            ),
            (0, O.rh)(
                F(
                    B(
                        {},
                        (0, S.Ay)({
                            channelId: J,
                            content: M.intl.string(M.t.bmwEWJ),
                        }),
                    ),
                    {
                        state: w.cmJ.SENT,
                        id: "".concat(t++),
                    },
                ),
            ),
            (0, O.rh)(
                F(
                    B(
                        {},
                        (0, S.Ay)({
                            channelId: J,
                            content: M.intl.string(M.t["hK9QW/"]),
                        }),
                    ),
                    {
                        state: w.cmJ.SENT,
                        id: "".concat(t),
                    },
                ),
            ),
        ];
    },
    X = () =>
        (0, i.jsxs)("div", {
            className: U.cF,
            children: [
                (0, i.jsxs)("div", {
                    className: U.ZT,
                    children: [
                        (0, i.jsxs)(d.Text, {
                            variant: "text-md/medium",
                            children: [" ", M.intl.string(M.t["0EzVst"])],
                        }),
                        (0, i.jsx)(d.Text, {
                            variant: "text-sm/normal",
                            color: "text-subtle",
                            children: M.intl.string(M.t.PV3dGX),
                        }),
                    ],
                }),
                (0, i.jsx)(G.Q, {}),
            ],
        }),
    q = () =>
        M.intl.format(M.t.Jae48E, {
            onClick: () => {
                (0, L.openUserSettings)(P.X.SYNC_FORCED_COLORS, {
                    section: w.nc_.ACCESSIBILITY,
                });
            },
        }),
    Z = () =>
        M.intl.format(M.t["5LEQdc"], {
            onAccessibilityClick: () => {
                (0, L.openUserSettings)(P.X.ACCESSIBILITY_PANEL, {
                    section: w.nc_.ACCESSIBILITY,
                });
            },
        }),
    $ = () => {
        let e = _.hH.useSetting(),
            t = _.hD.useSetting(),
            n = _.rs.useSetting(),
            { theme: l, messageGroupSpacing: o } = (0, a.cf)([N.A, A.A], () => ({
                theme: N.A.theme,
                messageGroupSpacing: A.A.messageGroupSpacing,
            })),
            [u] = s.useState(() => Q(w.NJ8.DARK)),
            [g] = s.useState(() => Q(w.NJ8.LIGHT)),
            h = t && n,
            x = (0, c.Mw)(l) ? u : g;
        return (0, i.jsx)(d.M1G, {
            children: (0, i.jsx)(d.ZpM, {
                className: r()(U.VH, H.C2, e ? U.Me : void 0, "group-spacing-".concat(null != o ? o : e ? V.y5 : V.ES)),
                outline: !0,
                "aria-hidden": !0,
                children: x.map((t, n) =>
                    (0, i.jsx)(
                        f.A,
                        {
                            author: (0, E.p_)(t),
                            message: t,
                            compact: e,
                            isGroupStart: n % 2 == 0,
                            className: 0 === n ? U.Ck : void 0,
                            hideSimpleEmbedContent: h,
                        },
                        t.id,
                    ),
                ),
            }),
        });
    };
class ee extends s.Component {
    renderZoomSlider() {
        return y.isPlatformEmbedded
            ? (0, i.jsx)(d.Apm, {
                  label: M.intl.string(M.t.i19n5L),
                  description: M.intl.string(M.t.ip0uSf),
                  helperText: M.intl.format(M.t.OMkSUo, {
                      modKey: h.A.modKey,
                  }),
                  initialValue: this.props.zoom,
                  defaultValue: w.hH7.ZOOM_DEFAULT,
                  markers: w.hH7.ZOOM_SCALES,
                  stickToMarkers: !0,
                  onValueChange: this.handleZoomChange,
                  onValueRender: this.handleSliderRender,
                  "aria-labelledby": W,
              })
            : null;
    }
    renderFontScaleSlider() {
        return (0, i.jsx)(d.Apm, {
            label: M.intl.string(M.t.qPOqoK),
            description: M.intl.string(M.t.XrtbPo),
            initialValue: this.props.fontSize,
            defaultValue: w.hH7.FONT_SIZE_DEFAULT,
            markers: w.hH7.FONT_SIZES,
            stickToMarkers: !0,
            onValueChange: this.handleFontSizeChange,
            onValueRender: this.handleSliderRenderPX,
            onMarkerRender: this.handleSliderRenderPX,
            getAriaValueText: this.handleSliderValueText,
        });
    }
    renderMessageGroupSpacingSlider() {
        let { messageDisplayCompact: e, messageGroupSpacing: t } = this.props;
        return (0, i.jsx)(d.Apm, {
            label: M.intl.string(M.t.Q6lKkg),
            description: M.intl.string(M.t.p7eUrb),
            initialValue: t,
            defaultValue: e ? V.y5 : V.ES,
            markers: V.qh,
            stickToMarkers: !0,
            onValueChange: this.handleMessageSpacingChange,
            onValueRender: this.handleSliderRenderPX,
            onMarkerRender: this.handleSliderRenderPX,
            getAriaValueText: this.handleSliderValueText,
            "aria-labelledby": K,
        });
    }
    renderPreview() {
        return (0, i.jsx)($, {});
    }
    renderTheme() {
        let { useForcedColors: e } = this.props;
        return e
            ? (0, i.jsx)(d.nVY, {
                  label: M.intl.string(M.t.Ksh3ik),
                  children: (0, i.jsx)(d.po8, {
                      messageType: d.YCn.INFO,
                      children: (0, p.D)() ? (0, i.jsx)(q, {}) : M.intl.string(M.t.AUMSZP),
                  }),
              })
            : (0, i.jsx)(d.nVY, {
                  label: M.intl.string(M.t.Ksh3ik),
                  children: (0, i.jsxs)("div", {
                      children: [(0, i.jsx)(X, {}), (0, i.jsx)(G.I, {})],
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
        return M.intl.formatToPlainString(M.t["0hpvOV"], {
            value: e,
        });
    }
    handleFontSizeChange(e) {
        (0, x.XS)(e);
    }
    handleMessageSpacingChange(e) {
        switch (e) {
            case 0:
            case 4:
            case 8:
            case 16:
            case 24:
                (0, x.AC)(e);
        }
    }
    handleZoomChange(e) {
        (0, x.Qp)(e);
    }
    render() {
        let { density: e } = this.props,
            t = (0, i.jsxs)(v.x, {
                setting: k.H.APPEARANCE_THEME,
                children: [this.renderPreview(), this.renderTheme()],
            }),
            n = (0, i.jsx)(v.x, {
                setting: k.H.APPEARANCE_ICON,
                children: (0, i.jsx)(R.y, {}),
            }),
            s = [
                {
                    name: M.intl.string(M.t["7iegX4"]),
                    value: o.NS.COMPACT,
                },
                {
                    name: M.intl.string(M.t.bBvAEH),
                    value: o.NS.DEFAULT,
                },
                {
                    name: M.intl.string(M.t["4cuYHx"]),
                    value: o.NS.COZY,
                },
            ],
            l = (0, i.jsxs)(v.x, {
                setting: k.H.APPEARANCE_LIST_SPACING,
                children: [
                    (0, i.jsx)(d.z6M, {
                        label: M.intl.string(M.t["C/5V0A"]),
                        description: M.intl.string(M.t.QLZhYk),
                        options: s,
                        onChange: (e) =>
                            this.handleUIDensityChange({
                                value: e,
                            }),
                        value: e,
                    }),
                    (0, i.jsx)(d.cGx, {
                        className: U.yF,
                    }),
                ],
            }),
            r = (0, i.jsxs)(v.x, {
                setting: k.H.APPEARANCE_MESSAGE_DISPLAY_COMPACT,
                children: [
                    (0, i.jsxs)(d.nVY, {
                        label: M.intl.string(M.t["2ed/sA"]),
                        description: M.intl.string(M.t.u9N6Qh),
                        children: [
                            (0, i.jsx)(d.z6M, {
                                label: M.intl.string(M.t.nKRoPv),
                                description: M.intl.string(M.t.QntEEG),
                                options: [
                                    {
                                        name: M.intl.string(M.t.Jqj4cZ),
                                        value: z.COZY,
                                    },
                                    {
                                        name: M.intl.string(M.t["1JNcPS"]),
                                        value: z.COMPACT,
                                    },
                                ],
                                onChange: (e) =>
                                    this.handleMessageDisplayModeChange({
                                        value: e,
                                    }),
                                value: this.props.messageDisplayCompact ? z.COMPACT : z.COZY,
                            }),
                            this.props.messageDisplayCompact &&
                                (0, i.jsx)(d.dOG, {
                                    label: M.intl.string(M.t["//vhWi"]),
                                    checked: !this.props.displayCompactAvatars,
                                    onChange: (e) => this.handleDisplayCompactAvatarsChanged(!e),
                                }),
                            this.renderMessageGroupSpacingSlider(),
                        ],
                    }),
                    (0, i.jsx)(d.cGx, {
                        className: U.yF,
                    }),
                ],
            }),
            a = (0, i.jsxs)(v.x, {
                setting: k.H.APPEARANCE_SCALING_SPACING,
                children: [
                    (0, i.jsxs)(d.nVY, {
                        label: M.intl.string(M.t["0Yh+ZX"]),
                        children: [this.renderFontScaleSlider(), this.renderZoomSlider()],
                    }),
                    (0, i.jsx)(d.cGx, {
                        className: U.yF,
                    }),
                ],
            }),
            c = (0, i.jsx)(d.Text, {
                variant: "text-md/normal",
                className: U.fK,
                children: (0, i.jsx)(Z, {}),
            });
        return (0, i.jsxs)(D.A, {
            title: M.intl.string(M.t["iHH+ky"]),
            children: [t, n, l, r, a, c],
        });
    }
    constructor(...e) {
        super(...e),
            Y(this, "darkMessages", Q(w.NJ8.DARK)),
            Y(this, "lightMessages", Q(w.NJ8.LIGHT)),
            Y(this, "handleDisplayCompactAvatarsChanged", (e) => {
                u.Ay.updatedUnsyncedSettings({
                    displayCompactAvatars: e,
                });
            }),
            Y(this, "handleDesktopRefreshEnabledChanged", (e) => {
                u.Ay.updatedUnsyncedSettings({
                    disableVisualRefresh: !e,
                });
            }),
            Y(this, "handleMessageDisplayModeChange", (e) => {
                let { value: t } = e;
                _.hH.updateSetting(t === z.COMPACT), (0, x.AC)();
            }),
            Y(this, "handleUIDensityChange", (e) => {
                let { value: t } = e;
                t !== o.NS.UNSET_UI_DENSITY && _.Xi.updateSetting(t);
            });
    }
}

function et() {
    let e = _.hH.useSetting(),
        t = _.hD.useSetting(),
        n = _.rs.useSetting(),
        s = _.eh.useSetting(),
        l = _.Xi.useSetting();
    (0, g.Ay)(() => {
        (0, j.v)();
    });
    let r = (0, T.qo)(),
        o = (0, a.cf)([N.A, I.Ay, A.A, C.default, m.A], () => {
            var e, t;
            return {
                theme: N.A.theme,
                useForcedColors: A.A.useForcedColors,
                useSystemTheme: I.Ay.useSystemTheme,
                fontSize: A.A.fontSize,
                zoom: A.A.zoom,
                messageGroupSpacing: A.A.messageGroupSpacing,
                displayCompactAvatars: I.Ay.displayCompactAvatars,
                isStaff: null != (e = null == (t = C.default.getCurrentUser()) ? void 0 : t.isStaff) && e,
                gradientPreset: m.A.gradientPreset,
            };
        });
    return (0, i.jsx)(
        ee,
        B(
            {
                messageDisplayCompact: e,
                hideSimpleEmbedContent: t && n,
                clientTheme: s,
                density: l,
                darkSidebar: r,
            },
            o,
        ),
    );
}
