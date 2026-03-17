n.d(t, { $p: () => Z, Ay: () => Q, IE: () => H, Ys: () => K, ac: () => W, y2: () => q });
var i = n(627968),
    s = n(64700),
    l = n(503698),
    a = n.n(l),
    r = n(311907),
    o = n(873298),
    d = n(582754),
    c = n(397927),
    u = n(817281),
    _ = n(964486),
    m = n(775121),
    g = n(955572),
    A = n(775602),
    h = n(502229),
    x = n(47671),
    p = n(920603),
    T = n(915089),
    E = n(141468),
    S = n(963852),
    C = n(763754),
    f = n(20851),
    b = n(195043),
    N = n(97469),
    I = n(287809),
    v = n(723702),
    j = n(544028),
    y = n(964404),
    R = n(253932),
    O = n(780964),
    P = n(70040),
    D = n(961154),
    L = n(790174),
    G = n(840065),
    M = n(531525),
    U = n(652215),
    k = n(381941),
    V = n(985018),
    w = n(944255),
    B = n(473169);
let H = { COZY: "cozy", COMPACT: "compact" },
    F = (0, T.Ld)(),
    Y = (0, T.Ld)(),
    z = "1337",
    X = (e) => {
        let t = 0;
        return [
            (0, E.rh)({
                ...(0, S.Ay)({ channelId: z, content: V.intl.string(V.t.oZxkEq) }),
                state: U.cmJ.SENT,
                id: `${t++}`,
            }),
            (0, E.rh)({
                ...(0, S.Ay)({
                    channelId: z,
                    content: (0, d.Mw)(e) ? V.intl.string(V.t["WGb/v7"]) : V.intl.string(V.t["62m4mz"]),
                }),
                state: U.cmJ.SENT,
                id: `${t++}`,
            }),
            (0, E.rh)({
                ...(0, S.Ay)({ channelId: z, content: V.intl.string(V.t.a0Byo5) }),
                state: U.cmJ.SENT,
                id: `${t++}`,
            }),
            (0, E.rh)({
                ...(0, S.Ay)({ channelId: z, content: V.intl.string(V.t.bmwEWJ) }),
                state: U.cmJ.SENT,
                id: `${t++}`,
            }),
            (0, E.rh)({
                ...(0, S.Ay)({ channelId: z, content: V.intl.string(V.t["hK9QW/"]) }),
                state: U.cmJ.SENT,
                id: `${t}`,
            }),
        ];
    },
    W = () =>
        (0, i.jsxs)("div", {
            className: w.cF,
            children: [
                (0, i.jsxs)("div", {
                    className: w.ZT,
                    children: [
                        (0, i.jsxs)(c.Text, {
                            variant: "text-md/medium",
                            children: [" ", V.intl.string(V.t["0EzVst"])],
                        }),
                        (0, i.jsx)(c.Text, {
                            variant: "text-sm/normal",
                            color: "text-subtle",
                            children: V.intl.string(V.t.PV3dGX),
                        }),
                    ],
                }),
                (0, i.jsx)(P.Q3, {}),
            ],
        }),
    K = () =>
        V.intl.format(V.t.Jae48E, {
            onClick: () => {
                (0, G.openUserSettings)(O.X.SYNC_FORCED_COLORS);
            },
        }),
    Z = () =>
        V.intl.format(V.t["5LEQdc"], {
            onAccessibilityClick: () => {
                (0, G.openUserSettings)(O.X.ACCESSIBILITY_PANEL);
            },
        }),
    q = () => {
        let e = R.hH.useSetting(),
            t = R.hD.useSetting(),
            n = R.rs.useSetting(),
            { theme: l, messageGroupSpacing: o } = (0, r.cf)([j.A, A.A], () => ({
                theme: j.A.theme,
                messageGroupSpacing: A.A.messageGroupSpacing,
            })),
            [u] = s.useState(() => X(U.NJ8.DARK)),
            [_] = s.useState(() => X(U.NJ8.LIGHT)),
            m = t && n,
            g = (0, d.Mw)(l) ? u : _;
        return (0, i.jsx)(c.M1G, {
            children: (0, i.jsx)(c.ZpM, {
                className: a()(w.VH, B.C2, e ? w.Me : void 0, `group-spacing-${null != o ? o : e ? k.y5 : k.ES}`),
                outline: !0,
                "aria-hidden": !0,
                children: g.map((t, n) =>
                    (0, i.jsx)(
                        f.A,
                        {
                            author: (0, C.p_)(t),
                            message: t,
                            compact: e,
                            isGroupStart: n % 2 == 0,
                            className: 0 === n ? w.Ck : void 0,
                            hideSimpleEmbedContent: m,
                        },
                        t.id,
                    ),
                ),
            }),
        });
    };
class J extends s.Component {
    darkMessages = X(U.NJ8.DARK);
    lightMessages = X(U.NJ8.LIGHT);
    renderZoomSlider() {
        return v.isPlatformEmbedded
            ? (0, i.jsx)(c.Apm, {
                  label: V.intl.string(V.t.i19n5L),
                  description: V.intl.string(V.t.ip0uSf),
                  helperText: V.intl.format(V.t.OMkSUo, { modKey: m.A.modKey }),
                  initialValue: this.props.zoom,
                  defaultValue: U.hH7.ZOOM_DEFAULT,
                  markers: U.hH7.ZOOM_SCALES,
                  stickToMarkers: !0,
                  onValueChange: this.handleZoomChange,
                  onValueRender: this.handleSliderRender,
                  "aria-labelledby": F,
              })
            : null;
    }
    renderFontScaleSlider() {
        return (0, i.jsx)(c.Apm, {
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
        return (0, i.jsx)(c.Apm, {
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
            "aria-labelledby": Y,
        });
    }
    renderPreview() {
        return (0, i.jsx)(q, {});
    }
    renderTheme() {
        let { useForcedColors: e } = this.props;
        return e
            ? (0, i.jsx)(c.nVY, {
                  label: V.intl.string(V.t.Ksh3ik),
                  children: (0, i.jsx)(c.po8, {
                      messageType: c.YCn.INFO,
                      children: (0, h.D)() ? (0, i.jsx)(K, {}) : V.intl.string(V.t.AUMSZP),
                  }),
              })
            : (0, i.jsx)(c.nVY, {
                  label: V.intl.string(V.t.Ksh3ik),
                  children: (0, i.jsxs)("div", { children: [(0, i.jsx)(W, {}), (0, i.jsx)(P.Ix, {})] }),
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
        return V.intl.formatToPlainString(V.t["0hpvOV"], { value: e });
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
                setting: M.H.APPEARANCE_THEME,
                children: [this.renderPreview(), this.renderTheme()],
            }),
            n = (0, i.jsx)(b.x, { setting: M.H.APPEARANCE_ICON, children: (0, i.jsx)(D.yG, {}) }),
            s = [
                { name: V.intl.string(V.t["7iegX4"]), value: o.NS.COMPACT },
                { name: V.intl.string(V.t.bBvAEH), value: o.NS.DEFAULT },
                { name: V.intl.string(V.t["4cuYHx"]), value: o.NS.COZY },
            ],
            l = (0, i.jsxs)(b.x, {
                setting: M.H.APPEARANCE_LIST_SPACING,
                children: [
                    (0, i.jsx)(c.z6M, {
                        label: V.intl.string(V.t["C/5V0A"]),
                        description: V.intl.string(V.t.QLZhYk),
                        options: s,
                        onChange: (e) => this.handleUIDensityChange({ value: e }),
                        value: e,
                    }),
                    (0, i.jsx)(c.cGx, { className: w.yF }),
                ],
            }),
            a = (0, i.jsxs)(b.x, {
                setting: M.H.APPEARANCE_MESSAGE_DISPLAY_COMPACT,
                children: [
                    (0, i.jsxs)(c.nVY, {
                        label: V.intl.string(V.t["2ed/sA"]),
                        description: V.intl.string(V.t.u9N6Qh),
                        children: [
                            (0, i.jsx)(c.z6M, {
                                label: V.intl.string(V.t.nKRoPv),
                                description: V.intl.string(V.t.QntEEG),
                                options: [
                                    { name: V.intl.string(V.t.Jqj4cZ), value: H.COZY },
                                    { name: V.intl.string(V.t["1JNcPS"]), value: H.COMPACT },
                                ],
                                onChange: (e) => this.handleMessageDisplayModeChange({ value: e }),
                                value: this.props.messageDisplayCompact ? H.COMPACT : H.COZY,
                            }),
                            this.props.messageDisplayCompact &&
                                (0, i.jsx)(c.dOG, {
                                    label: V.intl.string(V.t["//vhWi"]),
                                    checked: !this.props.displayCompactAvatars,
                                    onChange: (e) => this.handleDisplayCompactAvatarsChanged(!e),
                                }),
                            this.renderMessageGroupSpacingSlider(),
                        ],
                    }),
                    (0, i.jsx)(c.cGx, { className: w.yF }),
                ],
            }),
            r = (0, i.jsxs)(b.x, {
                setting: M.H.APPEARANCE_SCALING_SPACING,
                children: [
                    (0, i.jsxs)(c.nVY, {
                        label: V.intl.string(V.t["0Yh+ZX"]),
                        children: [this.renderFontScaleSlider(), this.renderZoomSlider()],
                    }),
                    (0, i.jsx)(c.cGx, { className: w.yF }),
                ],
            }),
            d = (0, i.jsx)(c.Text, { variant: "text-md/normal", className: w.fK, children: (0, i.jsx)(Z, {}) });
        return (0, i.jsxs)(L.A, { title: V.intl.string(V.t["iHH+ky"]), children: [t, n, l, a, r, d] });
    }
}
function Q() {
    let e = R.hH.useSetting(),
        t = R.hD.useSetting(),
        n = R.rs.useSetting(),
        s = R.eh.useSetting(),
        l = R.Xi.useSetting();
    (0, _.Ay)(() => {
        (0, p.v)();
    });
    let a = (0, N.qo)(),
        o = (0, r.cf)([j.A, y.Ay, A.A, I.default, x.A], () => ({
            theme: j.A.theme,
            useForcedColors: A.A.useForcedColors,
            useSystemTheme: y.Ay.useSystemTheme,
            fontSize: A.A.fontSize,
            zoom: A.A.zoom,
            messageGroupSpacing: A.A.messageGroupSpacing,
            displayCompactAvatars: y.Ay.displayCompactAvatars,
            isStaff: I.default.getCurrentUser()?.isStaff ?? !1,
            gradientPreset: x.A.gradientPreset,
        }));
    return (0, i.jsx)(J, {
        messageDisplayCompact: e,
        hideSimpleEmbedContent: t && n,
        clientTheme: s,
        density: l,
        darkSidebar: a,
        ...o,
    });
}
