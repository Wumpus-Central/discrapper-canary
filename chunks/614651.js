n.d(t, { $p: () => q, Ay: () => Q, IE: () => B, Ys: () => Z, ac: () => K, y2: () => X });
var i = n(627968),
    s = n(64700),
    a = n(503698),
    l = n.n(a),
    r = n(311907),
    o = n(873298),
    c = n(582754),
    d = n(397927),
    u = n(817281),
    _ = n(964486),
    m = n(775121),
    A = n(955572),
    g = n(775602),
    h = n(502229),
    x = n(47671),
    p = n(920603),
    E = n(915089),
    C = n(141468),
    T = n(963852),
    S = n(763754),
    I = n(20851),
    f = n(195043),
    N = n(97469),
    b = n(287809),
    j = n(723702),
    v = n(544028),
    O = n(964404),
    R = n(253932),
    y = n(780964),
    P = n(70040),
    L = n(961154),
    D = n(790174),
    M = n(840065),
    G = n(531525),
    U = n(652215),
    k = n(381941),
    V = n(985018),
    H = n(944255),
    w = n(473169);
let B = { COZY: "cozy", COMPACT: "compact" },
    Y = (0, E.Ld)(),
    F = (0, E.Ld)(),
    z = "1337",
    W = (e) => {
        let t = 0;
        return [
            (0, C.rh)({
                ...(0, T.Ay)({ channelId: z, content: V.intl.string(V.t.oZxkEq) }),
                state: U.cmJ.SENT,
                id: `${t++}`,
            }),
            (0, C.rh)({
                ...(0, T.Ay)({
                    channelId: z,
                    content: (0, c.Mw)(e) ? V.intl.string(V.t["WGb/v7"]) : V.intl.string(V.t["62m4mz"]),
                }),
                state: U.cmJ.SENT,
                id: `${t++}`,
            }),
            (0, C.rh)({
                ...(0, T.Ay)({ channelId: z, content: V.intl.string(V.t.a0Byo5) }),
                state: U.cmJ.SENT,
                id: `${t++}`,
            }),
            (0, C.rh)({
                ...(0, T.Ay)({ channelId: z, content: V.intl.string(V.t.bmwEWJ) }),
                state: U.cmJ.SENT,
                id: `${t++}`,
            }),
            (0, C.rh)({
                ...(0, T.Ay)({ channelId: z, content: V.intl.string(V.t["hK9QW/"]) }),
                state: U.cmJ.SENT,
                id: `${t}`,
            }),
        ];
    },
    K = () =>
        (0, i.jsxs)("div", {
            className: H.cF,
            children: [
                (0, i.jsxs)("div", {
                    className: H.ZT,
                    children: [
                        (0, i.jsxs)(d.Text, {
                            variant: "text-md/medium",
                            children: [" ", V.intl.string(V.t["0EzVst"])],
                        }),
                        (0, i.jsx)(d.Text, {
                            variant: "text-sm/normal",
                            color: "text-subtle",
                            children: V.intl.string(V.t.PV3dGX),
                        }),
                    ],
                }),
                (0, i.jsx)(P.Q3, {}),
            ],
        }),
    Z = () =>
        V.intl.format(V.t.Jae48E, {
            onClick: () => {
                (0, M.openUserSettings)(y.X.SYNC_FORCED_COLORS, { section: U.nc_.ACCESSIBILITY });
            },
        }),
    q = () =>
        V.intl.format(V.t["5LEQdc"], {
            onAccessibilityClick: () => {
                (0, M.openUserSettings)(y.X.ACCESSIBILITY_PANEL, { section: U.nc_.ACCESSIBILITY });
            },
        }),
    X = () => {
        let e = R.hH.useSetting(),
            t = R.hD.useSetting(),
            n = R.rs.useSetting(),
            { theme: a, messageGroupSpacing: o } = (0, r.cf)([v.A, g.A], () => ({
                theme: v.A.theme,
                messageGroupSpacing: g.A.messageGroupSpacing,
            })),
            [u] = s.useState(() => W(U.NJ8.DARK)),
            [_] = s.useState(() => W(U.NJ8.LIGHT)),
            m = t && n,
            A = (0, c.Mw)(a) ? u : _;
        return (0, i.jsx)(d.M1G, {
            children: (0, i.jsx)(d.ZpM, {
                className: l()(H.VH, w.C2, e ? H.Me : void 0, `group-spacing-${null != o ? o : e ? k.y5 : k.ES}`),
                outline: !0,
                "aria-hidden": !0,
                children: A.map((t, n) =>
                    (0, i.jsx)(
                        I.A,
                        {
                            author: (0, S.p_)(t),
                            message: t,
                            compact: e,
                            isGroupStart: n % 2 == 0,
                            className: 0 === n ? H.Ck : void 0,
                            hideSimpleEmbedContent: m,
                        },
                        t.id,
                    ),
                ),
            }),
        });
    };
class J extends s.Component {
    darkMessages = W(U.NJ8.DARK);
    lightMessages = W(U.NJ8.LIGHT);
    renderZoomSlider() {
        return j.isPlatformEmbedded
            ? (0, i.jsx)(d.Apm, {
                  label: V.intl.string(V.t.i19n5L),
                  description: V.intl.string(V.t.ip0uSf),
                  helperText: V.intl.format(V.t.OMkSUo, { modKey: m.A.modKey }),
                  initialValue: this.props.zoom,
                  defaultValue: U.hH7.ZOOM_DEFAULT,
                  markers: U.hH7.ZOOM_SCALES,
                  stickToMarkers: !0,
                  onValueChange: this.handleZoomChange,
                  onValueRender: this.handleSliderRender,
                  "aria-labelledby": Y,
              })
            : null;
    }
    renderFontScaleSlider() {
        return (0, i.jsx)(d.Apm, {
            label: V.intl.string(V.t.qPOqoK),
            description: V.intl.string(V.t.XrtbPo),
            initialValue: this.props.fontSize,
            defaultValue: U.hH7.FONT_SIZE_DEFAULT,
            markers: U.hH7.FONT_SIZES,
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
            label: V.intl.string(V.t.Q6lKkg),
            description: V.intl.string(V.t.p7eUrb),
            initialValue: t,
            defaultValue: e ? k.y5 : k.ES,
            markers: k.qh,
            stickToMarkers: !0,
            onValueChange: this.handleMessageSpacingChange,
            onValueRender: this.handleSliderRenderPX,
            onMarkerRender: this.handleSliderRenderPX,
            getAriaValueText: this.handleSliderValueText,
            "aria-labelledby": F,
        });
    }
    renderPreview() {
        return (0, i.jsx)(X, {});
    }
    renderTheme() {
        let { useForcedColors: e } = this.props;
        return e
            ? (0, i.jsx)(d.nVY, {
                  label: V.intl.string(V.t.Ksh3ik),
                  children: (0, i.jsx)(d.po8, {
                      messageType: d.YCn.INFO,
                      children: (0, h.D)() ? (0, i.jsx)(Z, {}) : V.intl.string(V.t.AUMSZP),
                  }),
              })
            : (0, i.jsx)(d.nVY, {
                  label: V.intl.string(V.t.Ksh3ik),
                  children: (0, i.jsxs)("div", { children: [(0, i.jsx)(K, {}), (0, i.jsx)(P.Ix, {})] }),
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
        R.hH.updateSetting(t === B.COMPACT), (0, A.AC)();
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
        return V.intl.formatToPlainString(V.t["0hpvOV"], { value: e });
    }
    handleFontSizeChange(e) {
        (0, A.XS)(e);
    }
    handleMessageSpacingChange(e) {
        switch (e) {
            case 0:
            case 4:
            case 8:
            case 16:
            case 24:
                (0, A.AC)(e);
        }
    }
    handleZoomChange(e) {
        (0, A.Qp)(e);
    }
    render() {
        let { density: e } = this.props,
            t = (0, i.jsxs)(f.x, {
                setting: G.H.APPEARANCE_THEME,
                children: [this.renderPreview(), this.renderTheme()],
            }),
            n = (0, i.jsx)(f.x, { setting: G.H.APPEARANCE_ICON, children: (0, i.jsx)(L.yG, {}) }),
            s = [
                { name: V.intl.string(V.t["7iegX4"]), value: o.NS.COMPACT },
                { name: V.intl.string(V.t.bBvAEH), value: o.NS.DEFAULT },
                { name: V.intl.string(V.t["4cuYHx"]), value: o.NS.COZY },
            ],
            a = (0, i.jsxs)(f.x, {
                setting: G.H.APPEARANCE_LIST_SPACING,
                children: [
                    (0, i.jsx)(d.z6M, {
                        label: V.intl.string(V.t["C/5V0A"]),
                        description: V.intl.string(V.t.QLZhYk),
                        options: s,
                        onChange: (e) => this.handleUIDensityChange({ value: e }),
                        value: e,
                    }),
                    (0, i.jsx)(d.cGx, { className: H.yF }),
                ],
            }),
            l = (0, i.jsxs)(f.x, {
                setting: G.H.APPEARANCE_MESSAGE_DISPLAY_COMPACT,
                children: [
                    (0, i.jsxs)(d.nVY, {
                        label: V.intl.string(V.t["2ed/sA"]),
                        description: V.intl.string(V.t.u9N6Qh),
                        children: [
                            (0, i.jsx)(d.z6M, {
                                label: V.intl.string(V.t.nKRoPv),
                                description: V.intl.string(V.t.QntEEG),
                                options: [
                                    { name: V.intl.string(V.t.Jqj4cZ), value: B.COZY },
                                    { name: V.intl.string(V.t["1JNcPS"]), value: B.COMPACT },
                                ],
                                onChange: (e) => this.handleMessageDisplayModeChange({ value: e }),
                                value: this.props.messageDisplayCompact ? B.COMPACT : B.COZY,
                            }),
                            this.props.messageDisplayCompact &&
                                (0, i.jsx)(d.dOG, {
                                    label: V.intl.string(V.t["//vhWi"]),
                                    checked: !this.props.displayCompactAvatars,
                                    onChange: (e) => this.handleDisplayCompactAvatarsChanged(!e),
                                }),
                            this.renderMessageGroupSpacingSlider(),
                        ],
                    }),
                    (0, i.jsx)(d.cGx, { className: H.yF }),
                ],
            }),
            r = (0, i.jsxs)(f.x, {
                setting: G.H.APPEARANCE_SCALING_SPACING,
                children: [
                    (0, i.jsxs)(d.nVY, {
                        label: V.intl.string(V.t["0Yh+ZX"]),
                        children: [this.renderFontScaleSlider(), this.renderZoomSlider()],
                    }),
                    (0, i.jsx)(d.cGx, { className: H.yF }),
                ],
            }),
            c = (0, i.jsx)(d.Text, { variant: "text-md/normal", className: H.fK, children: (0, i.jsx)(q, {}) });
        return (0, i.jsxs)(D.A, { title: V.intl.string(V.t["iHH+ky"]), children: [t, n, a, l, r, c] });
    }
}
function Q() {
    let e = R.hH.useSetting(),
        t = R.hD.useSetting(),
        n = R.rs.useSetting(),
        s = R.eh.useSetting(),
        a = R.Xi.useSetting();
    (0, _.Ay)(() => {
        (0, p.v)();
    });
    let l = (0, N.qo)(),
        o = (0, r.cf)([v.A, O.Ay, g.A, b.default, x.A], () => ({
            theme: v.A.theme,
            useForcedColors: g.A.useForcedColors,
            useSystemTheme: O.Ay.useSystemTheme,
            fontSize: g.A.fontSize,
            zoom: g.A.zoom,
            messageGroupSpacing: g.A.messageGroupSpacing,
            displayCompactAvatars: O.Ay.displayCompactAvatars,
            isStaff: b.default.getCurrentUser()?.isStaff ?? !1,
            gradientPreset: x.A.gradientPreset,
        }));
    return (0, i.jsx)(J, {
        messageDisplayCompact: e,
        hideSimpleEmbedContent: t && n,
        clientTheme: s,
        density: a,
        darkSidebar: l,
        ...o,
    });
}
