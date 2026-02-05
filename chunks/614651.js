n.d(t, { $p: () => q, Ay: () => Z, IE: () => H, Ys: () => X, ac: () => z, y2: () => J });
var i = n(627968),
    l = n(64700),
    s = n(503698),
    a = n.n(s),
    r = n(311907),
    o = n(873298),
    d = n(582754),
    c = n(397927),
    u = n(817281),
    h = n(964486),
    A = n(775121),
    g = n(955572),
    m = n(775602),
    p = n(502229),
    _ = n(47671),
    x = n(920603),
    f = n(915089),
    E = n(141468),
    C = n(963852),
    I = n(763754),
    S = n(20851),
    b = n(195043),
    N = n(97469),
    T = n(287809),
    j = n(723702),
    v = n(544028),
    y = n(964404),
    R = n(253932),
    O = n(780964),
    L = n(70040),
    D = n(961154),
    M = n(790174),
    G = n(840065),
    U = n(531525),
    P = n(652215),
    k = n(381941),
    w = n(985018),
    V = n(944255),
    B = n(473169);
let H = { COZY: "cozy", COMPACT: "compact" },
    F = (0, f.Ld)(),
    Y = (0, f.Ld)(),
    W = "1337",
    K = (e) => {
        let t = 0;
        return [
            (0, E.rh)({
                ...(0, C.Ay)({ channelId: W, content: w.intl.string(w.t.oZxkEq) }),
                state: P.cmJ.SENT,
                id: `${t++}`,
            }),
            (0, E.rh)({
                ...(0, C.Ay)({
                    channelId: W,
                    content: (0, d.Mw)(e) ? w.intl.string(w.t["WGb/v7"]) : w.intl.string(w.t["62m4mz"]),
                }),
                state: P.cmJ.SENT,
                id: `${t++}`,
            }),
            (0, E.rh)({
                ...(0, C.Ay)({ channelId: W, content: w.intl.string(w.t.a0Byo5) }),
                state: P.cmJ.SENT,
                id: `${t++}`,
            }),
            (0, E.rh)({
                ...(0, C.Ay)({ channelId: W, content: w.intl.string(w.t.bmwEWJ) }),
                state: P.cmJ.SENT,
                id: `${t++}`,
            }),
            (0, E.rh)({
                ...(0, C.Ay)({ channelId: W, content: w.intl.string(w.t["hK9QW/"]) }),
                state: P.cmJ.SENT,
                id: `${t}`,
            }),
        ];
    },
    z = () =>
        (0, i.jsxs)("div", {
            className: V.cF,
            children: [
                (0, i.jsxs)("div", {
                    className: V.ZT,
                    children: [
                        (0, i.jsxs)(c.Text, {
                            variant: "text-md/medium",
                            children: [" ", w.intl.string(w.t["0EzVst"])],
                        }),
                        (0, i.jsx)(c.Text, {
                            variant: "text-sm/normal",
                            color: "text-subtle",
                            children: w.intl.string(w.t.PV3dGX),
                        }),
                    ],
                }),
                (0, i.jsx)(L.Q, {}),
            ],
        }),
    X = () =>
        w.intl.format(w.t.Jae48E, {
            onClick: () => {
                (0, G.openUserSettings)(O.X.SYNC_FORCED_COLORS, { section: P.nc_.ACCESSIBILITY });
            },
        }),
    q = () =>
        w.intl.format(w.t["5LEQdc"], {
            onAccessibilityClick: () => {
                (0, G.openUserSettings)(O.X.ACCESSIBILITY_PANEL, { section: P.nc_.ACCESSIBILITY });
            },
        }),
    J = () => {
        let e = R.hH.useSetting(),
            t = R.hD.useSetting(),
            n = R.rs.useSetting(),
            { theme: s, messageGroupSpacing: o } = (0, r.cf)([v.A, m.A], () => ({
                theme: v.A.theme,
                messageGroupSpacing: m.A.messageGroupSpacing,
            })),
            [u] = l.useState(() => K(P.NJ8.DARK)),
            [h] = l.useState(() => K(P.NJ8.LIGHT)),
            A = t && n,
            g = (0, d.Mw)(s) ? u : h;
        return (0, i.jsx)(c.M1G, {
            children: (0, i.jsx)(c.ZpM, {
                className: a()(V.VH, B.C2, e ? V.Me : void 0, `group-spacing-${null != o ? o : e ? k.y5 : k.ES}`),
                outline: !0,
                "aria-hidden": !0,
                children: g.map((t, n) =>
                    (0, i.jsx)(
                        S.A,
                        {
                            author: (0, I.p_)(t),
                            message: t,
                            compact: e,
                            isGroupStart: n % 2 == 0,
                            className: 0 === n ? V.Ck : void 0,
                            hideSimpleEmbedContent: A,
                        },
                        t.id,
                    ),
                ),
            }),
        });
    };
class Q extends l.Component {
    darkMessages = K(P.NJ8.DARK);
    lightMessages = K(P.NJ8.LIGHT);
    renderZoomSlider() {
        return j.isPlatformEmbedded
            ? (0, i.jsx)(c.Apm, {
                  label: w.intl.string(w.t.i19n5L),
                  description: w.intl.string(w.t.ip0uSf),
                  helperText: w.intl.format(w.t.OMkSUo, { modKey: A.A.modKey }),
                  initialValue: this.props.zoom,
                  defaultValue: P.hH7.ZOOM_DEFAULT,
                  markers: P.hH7.ZOOM_SCALES,
                  stickToMarkers: !0,
                  onValueChange: this.handleZoomChange,
                  onValueRender: this.handleSliderRender,
                  "aria-labelledby": F,
              })
            : null;
    }
    renderFontScaleSlider() {
        return (0, i.jsx)(c.Apm, {
            label: w.intl.string(w.t.qPOqoK),
            description: w.intl.string(w.t.XrtbPo),
            initialValue: this.props.fontSize,
            defaultValue: P.hH7.FONT_SIZE_DEFAULT,
            markers: P.hH7.FONT_SIZES,
            stickToMarkers: !0,
            onValueChange: this.handleFontSizeChange,
            onValueRender: this.handleSliderRenderPX,
            onMarkerRender: this.handleSliderRenderPX,
            getAriaValueText: this.handleSliderValueText,
        });
    }
    renderMessageGroupSpacingSlider() {
        let { messageDisplayCompact: e, messageGroupSpacing: t } = this.props;
        return (0, i.jsx)(c.Apm, {
            label: w.intl.string(w.t.Q6lKkg),
            description: w.intl.string(w.t.p7eUrb),
            initialValue: t,
            defaultValue: e ? k.y5 : k.ES,
            markers: k.qh,
            stickToMarkers: !0,
            onValueChange: this.handleMessageSpacingChange,
            onValueRender: this.handleSliderRenderPX,
            onMarkerRender: this.handleSliderRenderPX,
            getAriaValueText: this.handleSliderValueText,
            "aria-labelledby": Y,
        });
    }
    renderPreview() {
        return (0, i.jsx)(J, {});
    }
    renderTheme() {
        let { useForcedColors: e } = this.props;
        return e
            ? (0, i.jsx)(c.nVY, {
                  label: w.intl.string(w.t.Ksh3ik),
                  children: (0, i.jsx)(c.po8, {
                      messageType: c.YCn.INFO,
                      children: (0, p.D)() ? (0, i.jsx)(X, {}) : w.intl.string(w.t.AUMSZP),
                  }),
              })
            : (0, i.jsx)(c.nVY, {
                  label: w.intl.string(w.t.Ksh3ik),
                  children: (0, i.jsxs)("div", { children: [(0, i.jsx)(z, {}), (0, i.jsx)(L.I, {})] }),
              });
    }
    handleDisplayCompactAvatarsChanged = (e) => {
        u.Ay.updatedUnsyncedSettings({ displayCompactAvatars: e });
    };
    handleDesktopRefreshEnabledChanged = (e) => {
        u.Ay.updatedUnsyncedSettings({ disableVisualRefresh: !e });
    };
    handleMessageDisplayModeChange = (e) => {
        let { value: t } = e;
        R.hH.updateSetting(t === H.COMPACT), (0, g.AC)();
    };
    handleUIDensityChange = (e) => {
        let { value: t } = e;
        t !== o.NS.UNSET_UI_DENSITY && R.Xi.updateSetting(t);
    };
    handleSliderRender(e) {
        return `${e.toFixed(0)}%`;
    }
    handleSliderRenderPX(e) {
        return `${e.toFixed(0)}px`;
    }
    handleSliderValueText(e) {
        return w.intl.formatToPlainString(w.t["0hpvOV"], { value: e });
    }
    handleFontSizeChange(e) {
        (0, g.XS)(e);
    }
    handleMessageSpacingChange(e) {
        switch (e) {
            case 0:
            case 4:
            case 8:
            case 16:
            case 24:
                (0, g.AC)(e);
        }
    }
    handleZoomChange(e) {
        (0, g.Qp)(e);
    }
    render() {
        let { density: e } = this.props,
            t = (0, i.jsxs)(b.x, {
                setting: U.H.APPEARANCE_THEME,
                children: [this.renderPreview(), this.renderTheme()],
            }),
            n = (0, i.jsx)(b.x, { setting: U.H.APPEARANCE_ICON, children: (0, i.jsx)(D.y, {}) }),
            l = [
                { name: w.intl.string(w.t["7iegX4"]), value: o.NS.COMPACT },
                { name: w.intl.string(w.t.bBvAEH), value: o.NS.DEFAULT },
                { name: w.intl.string(w.t["4cuYHx"]), value: o.NS.COZY },
            ],
            s = (0, i.jsxs)(b.x, {
                setting: U.H.APPEARANCE_LIST_SPACING,
                children: [
                    (0, i.jsx)(c.z6M, {
                        label: w.intl.string(w.t["C/5V0A"]),
                        description: w.intl.string(w.t.QLZhYk),
                        options: l,
                        onChange: (e) => this.handleUIDensityChange({ value: e }),
                        value: e,
                    }),
                    (0, i.jsx)(c.cGx, { className: V.yF }),
                ],
            }),
            a = (0, i.jsxs)(b.x, {
                setting: U.H.APPEARANCE_MESSAGE_DISPLAY_COMPACT,
                children: [
                    (0, i.jsxs)(c.nVY, {
                        label: w.intl.string(w.t["2ed/sA"]),
                        description: w.intl.string(w.t.u9N6Qh),
                        children: [
                            (0, i.jsx)(c.z6M, {
                                label: w.intl.string(w.t.nKRoPv),
                                description: w.intl.string(w.t.QntEEG),
                                options: [
                                    { name: w.intl.string(w.t.Jqj4cZ), value: H.COZY },
                                    { name: w.intl.string(w.t["1JNcPS"]), value: H.COMPACT },
                                ],
                                onChange: (e) => this.handleMessageDisplayModeChange({ value: e }),
                                value: this.props.messageDisplayCompact ? H.COMPACT : H.COZY,
                            }),
                            this.props.messageDisplayCompact &&
                                (0, i.jsx)(c.dOG, {
                                    label: w.intl.string(w.t["//vhWi"]),
                                    checked: !this.props.displayCompactAvatars,
                                    onChange: (e) => this.handleDisplayCompactAvatarsChanged(!e),
                                }),
                            this.renderMessageGroupSpacingSlider(),
                        ],
                    }),
                    (0, i.jsx)(c.cGx, { className: V.yF }),
                ],
            }),
            r = (0, i.jsxs)(b.x, {
                setting: U.H.APPEARANCE_SCALING_SPACING,
                children: [
                    (0, i.jsxs)(c.nVY, {
                        label: w.intl.string(w.t["0Yh+ZX"]),
                        children: [this.renderFontScaleSlider(), this.renderZoomSlider()],
                    }),
                    (0, i.jsx)(c.cGx, { className: V.yF }),
                ],
            }),
            d = (0, i.jsx)(c.Text, { variant: "text-md/normal", className: V.fK, children: (0, i.jsx)(q, {}) });
        return (0, i.jsxs)(M.A, { title: w.intl.string(w.t["iHH+ky"]), children: [t, n, s, a, r, d] });
    }
}
function Z() {
    let e = R.hH.useSetting(),
        t = R.hD.useSetting(),
        n = R.rs.useSetting(),
        l = R.eh.useSetting(),
        s = R.Xi.useSetting();
    (0, h.Ay)(() => {
        (0, x.v)();
    });
    let a = (0, N.qo)(),
        o = (0, r.cf)([v.A, y.Ay, m.A, T.default, _.A], () => ({
            theme: v.A.theme,
            useForcedColors: m.A.useForcedColors,
            useSystemTheme: y.Ay.useSystemTheme,
            fontSize: m.A.fontSize,
            zoom: m.A.zoom,
            messageGroupSpacing: m.A.messageGroupSpacing,
            displayCompactAvatars: y.Ay.displayCompactAvatars,
            isStaff: T.default.getCurrentUser()?.isStaff ?? !1,
            gradientPreset: _.A.gradientPreset,
        }));
    return (0, i.jsx)(Q, {
        messageDisplayCompact: e,
        hideSimpleEmbedContent: t && n,
        clientTheme: l,
        density: s,
        darkSidebar: a,
        ...o,
    });
}
