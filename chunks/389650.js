n.d(t, { Z: () => W }), n(953529), n(388685), n(539854);
var r = n(951288),
    i = n(647438),
    a = n(120356),
    o = n.n(a),
    s = n(392711),
    l = n.n(s),
    c = n(442837),
    u = n(692547),
    d = n(481060),
    f = n(660216),
    _ = n(225433),
    p = n(825209),
    h = n(721383),
    m = n(612226),
    g = n(714338),
    E = n(924557),
    b = n(74299),
    y = n(577153),
    O = n(365023),
    v = n(610394),
    I = n(825655),
    T = n(131951),
    S = n(556296),
    A = n(63063),
    C = n(358085),
    N = n(13140),
    R = n(526665),
    P = n(659947),
    w = n(273313),
    D = n(981631),
    L = n(295907),
    x = n(388032),
    M = n(894462),
    k = n(620842),
    j = n(197571);
function U(e, t, n) {
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
function G(e) {
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
                U(e, t, n[t]);
            });
    }
    return e;
}
function B(e, t) {
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
function Z(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : B(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function F(e) {
    let { children: t } = e;
    return t([m.Q2.MESSAGE, m.Q2.NAVIGATION, m.Q2.DND, m.Q2.CHAT, m.Q2.VOICE_AND_VIDEO, m.Q2.MISCELLANEOUS]);
}
function V() {
    return l()((0, m.Rv)())
        .filter((e) => e.description !== x.intl.string(x.t.HnNtEB))
        .groupBy((e) => e.group)
        .value();
}
class H extends i.PureComponent {
    renderMessage() {
        let { keybind: e } = this.props,
            t = N.BB(e.shortcut);
        return g.Z.hasBind(t)
            ? (0, r.jsx)(d.Wn, {
                  messageType: d.QYI.ERROR,
                  children: x.intl.string(x.t["7lQlw8"]),
              })
            : L.Sp.has(t)
              ? (0, r.jsx)(d.Wn, {
                    messageType: d.QYI.ERROR,
                    children: x.intl.format(x.t.MOIaNT, {
                        keyboardNavArticle: A.Z.getArticleURL(D.BhN.KEYBOARD_NAVIGATION),
                    }),
                })
              : (0, r.jsx)(d.Text, {
                    variant: "text-md/normal",
                    className: M.keybindMessage,
                    children: this.props.keybindDescriptions[e.action],
                });
    }
    render() {
        let { managed: e, enabled: t } = this.props.keybind;
        return (0, r.jsxs)("div", {
            className: o()(M.keybindGroup, { [k.card]: !this.props.isUserSettingsRedesignEnabled }),
            children: [
                !e &&
                    !this.props.isUserSettingsRedesignEnabled &&
                    (0, r.jsx)(_.Z, {
                        "aria-label": x.intl.string(x.t.qEHmmJ),
                        className: M.removeKeybindFloating,
                        onClick: this.handleDeleteKeybind,
                    }),
                (0, r.jsxs)("div", {
                    className: M.keybindGroupContent,
                    children: [
                        (0, r.jsx)("div", {
                            className: M.item,
                            children: (0, r.jsx)(d.q4e, {
                                label: x.intl.string(x.t.UUpADw),
                                value: this.props.keybind.action,
                                options: this.props.keybindActionTypes,
                                onChange: this.handleActionChanged,
                                isDisabled: e,
                            }),
                        }),
                        (0, r.jsx)("div", {
                            className: M.item,
                            children: (0, r.jsx)(d.gNt, {
                                label: x.intl.string(x.t["1La4tL"]),
                                children: (0, r.jsx)(p.Z, {
                                    defaultValue: this.props.keybind.shortcut,
                                    onChange: this.handleShortcutChange,
                                }),
                            }),
                        }),
                        !e &&
                            this.props.isUserSettingsRedesignEnabled &&
                            (0, r.jsx)("div", {
                                className: M.removeKeybind,
                                children: (0, r.jsx)(d.hU, {
                                    variant: "icon-only",
                                    onClick: this.handleDeleteKeybind,
                                    icon: d.XHJ,
                                    "aria-label": x.intl.string(x.t.qEHmmJ),
                                }),
                            }),
                        (0, r.jsx)("div", {
                            className: M.switch,
                            children: (0, r.jsx)(d.aML, {
                                "data-migration-pending": !0,
                                text: x.intl.string(x.t.uCD7qK),
                                children: (e) =>
                                    (0, r.jsx)(
                                        "div",
                                        Z(G({}, e), {
                                            children: (0, r.jsx)(d.rsf, {
                                                checked: t,
                                                onChange: this.handleEnableDisable,
                                            }),
                                        }),
                                    ),
                            }),
                        }),
                    ],
                }),
                this.renderMessage(),
                this.renderExtraSettings(),
            ],
        });
    }
    renderExtraSettings() {
        let { action: e } = this.props.keybind;
        return e === D.kg4.SWITCH_TO_VOICE_CHANNEL ? (0, r.jsx)(P.Z, { keybind: this.props.keybind }) : void 0;
    }
    constructor(...e) {
        super(...e),
            U(this, "handleActionChanged", (e) => {
                f.Z.setKeybind(Z(G({}, this.props.keybind), { action: e }));
            }),
            U(this, "handleShortcutChange", (e) => {
                f.Z.setKeybind(Z(G({}, this.props.keybind), { shortcut: e }));
            }),
            U(this, "handleDeleteKeybind", () => {
                f.Z.deleteKeybind(this.props.keybind.id);
            }),
            U(this, "handleEnableDisable", () => {
                let { keybind: e } = this.props;
                f.Z.setKeybind(Z(G({}, this.props.keybind), { enabled: !e.enabled }));
            });
    }
}
class Y extends i.PureComponent {
    componentDidMount() {
        f.Z.enableAll(!1);
    }
    componentWillUnmount() {
        f.Z.enableAll(!0);
    }
    get keybindActionTypes() {
        let { overlaySupported: e, canGoLive: t, allowSoundboard: n, enableClips: r } = this.props,
            i = y.Z.getCurrentConfig({ location: "UserSettingsKeybinds" }, { autoTrackExposure: !1 }).separateKeybind
                ? [
                      {
                          value: D.kg4.VAD_PRIORITY,
                          label: x.intl.string(x.t["49d6NT"]),
                      },
                  ]
                : [],
            a = [
                {
                    value: D.kg4.UNASSIGNED,
                    label: x.intl.string(x.t["0Uh57+"]),
                },
                {
                    value: D.kg4.PUSH_TO_TALK,
                    label: x.intl.string(x.t.Y5lgTE),
                },
                {
                    value: D.kg4.PUSH_TO_TALK_PRIORITY,
                    label: x.intl.string(x.t.DkSwJy),
                },
                {
                    value: D.kg4.PUSH_TO_MUTE,
                    label: x.intl.string(x.t.hSCRqa),
                },
                ...i,
                {
                    value: D.kg4.TOGGLE_MUTE,
                    label: x.intl.string(x.t.PlkYKC),
                },
                {
                    value: D.kg4.TOGGLE_DEAFEN,
                    label: x.intl.string(x.t.NvGq1N),
                },
                {
                    value: D.kg4.TOGGLE_VOICE_MODE,
                    label: x.intl.string(x.t.Wa5H9f),
                },
                {
                    value: D.kg4.TOGGLE_STREAMER_MODE,
                    label: x.intl.string(x.t.BK0NcX),
                },
            ];
        return (
            (0, O.l)() &&
                a.push({
                    value: D.kg4.TOGGLE_CAMERA,
                    label: x.intl.string(x.t.hf8JVV),
                }),
            e &&
                (a.push({
                    value: D.kg4.TOGGLE_OVERLAY_INPUT_LOCK,
                    label: x.intl.string(x.t.VsAZcH),
                }),
                a.push({
                    value: D.kg4.OVERLAY_ACTIVATE_REGION_TEXT_WIDGET,
                    label: x.intl.string(x.t.hurHWl),
                })),
            t &&
                ((0, C.isWindows)() || T.Z.getUseSystemScreensharePicker()) &&
                a.push({
                    value: D.kg4.TOGGLE_GO_LIVE_STREAMING,
                    label: x.intl.string(x.t.ybdjJC),
                }),
            (0, C.isDesktop)() &&
                (a.push(
                    {
                        value: D.kg4.NAVIGATE_BACK,
                        label: x.intl.string(x.t.gRSaOT),
                    },
                    {
                        value: D.kg4.NAVIGATE_FORWARD,
                        label: x.intl.string(x.t.zOXpjY),
                    },
                    {
                        value: D.kg4.SWITCH_TO_VOICE_CHANNEL,
                        label: x.intl.string(x.t.ty7Lx8),
                    },
                    {
                        value: D.kg4.DISCONNECT_FROM_VOICE_CHANNEL,
                        label: x.intl.string(x.t.CV7mT0),
                    },
                ),
                n &&
                    a.push(
                        {
                            value: D.kg4.SOUNDBOARD,
                            label: x.intl.string(x.t.yPH4xs),
                        },
                        {
                            value: D.kg4.SOUNDBOARD_HOLD,
                            label: x.intl.string(x.t["1xFbPz"]),
                        },
                    ),
                r &&
                    a.push({
                        value: D.kg4.SAVE_CLIP,
                        label: x.intl.string(x.t.U4URzM),
                    })),
            a
        );
    }
    get keybindDescriptions() {
        let { overlaySupported: e, canGoLive: t, enableClips: n } = this.props,
            r = {
                [D.kg4.UNASSIGNED]: x.intl.string(x.t.rvlNLi),
                [D.kg4.PUSH_TO_MUTE]: x.intl.string(x.t.xtESio),
                [D.kg4.PUSH_TO_TALK]: x.intl.string(x.t.wTcBS0),
                [D.kg4.PUSH_TO_TALK_PRIORITY]: x.intl.string(x.t.FhHvWF),
                [D.kg4.TOGGLE_MUTE]: x.intl.string(x.t.X2fbUl),
                [D.kg4.TOGGLE_DEAFEN]: x.intl.string(x.t.MjREZW),
                [D.kg4.TOGGLE_VOICE_MODE]: x.intl.string(x.t.snm5YW),
                [D.kg4.TOGGLE_STREAMER_MODE]: x.intl.string(x.t.YszLLy),
            };
        return (
            y.Z.getCurrentConfig({ location: "UserSettingsKeybinds" }, { autoTrackExposure: !1 }).separateKeybind &&
                (r[D.kg4.VAD_PRIORITY] = x.intl.string(x.t.rSe8IS)),
            (0, O.l)() && (r[D.kg4.TOGGLE_CAMERA] = x.intl.string(x.t.v1JBtL)),
            e && (r[D.kg4.TOGGLE_OVERLAY_INPUT_LOCK] = x.intl.string(x.t.IoP5vb)),
            t && (0, C.isWindows)() && (r[D.kg4.TOGGLE_GO_LIVE_STREAMING] = x.intl.string(x.t.s4C239)),
            (0, C.isDesktop)() &&
                ((r[D.kg4.NAVIGATE_BACK] = x.intl.string(x.t.nKDlEh)),
                (r[D.kg4.NAVIGATE_FORWARD] = x.intl.string(x.t.DK0FFh)),
                (r[D.kg4.SOUNDBOARD] = (0, C.isWindows)() ? x.intl.string(x.t["5wJefH"]) : x.intl.string(x.t.gzjsSE)),
                (r[D.kg4.SOUNDBOARD_HOLD] = (0, C.isWindows)() ? x.intl.string(x.t.RRkZc3) : x.intl.string(x.t.laNlTk)),
                n && (r[D.kg4.SAVE_CLIP] = x.intl.string(x.t.z3Wbam))),
            r
        );
    }
    renderKeybinds(e) {
        return e.map((t, n) =>
            (0, r.jsxs)(
                i.Fragment,
                {
                    children: [
                        (0, r.jsx)(
                            H,
                            {
                                keybind: t,
                                keybindDescriptions: this.keybindDescriptions,
                                keybindActionTypes: this.keybindActionTypes,
                                isUserSettingsRedesignEnabled: this.props.isUserSettingsRedesignEnabled,
                            },
                            t.id,
                        ),
                        n !== e.length - 1 ? (0, r.jsx)(d.izJ, {}) : null,
                    ],
                },
                t.id,
            ),
        );
    }
    renderEmpty(e) {
        if (0 === e.length) return null;
    }
    renderKeybindWarning() {
        return (0, r.jsxs)("div", {
            className: M.warning,
            children: [
                (0, r.jsx)(d.d3s, {
                    size: "xs",
                    color: u.Z.colors.ICON_SECONDARY,
                }),
                (0, r.jsx)(d.Text, {
                    variant: "text-sm/medium",
                    color: "text-secondary",
                    children: x.intl.string(x.t.NoKjWF),
                }),
            ],
        });
    }
    render() {
        let e = this.props.enableClips,
            t = l()(this.props.keybinds)
                .reject(
                    (e) =>
                        e.managed && ![D.kg4.OVERLAY_ACTIVATE_REGION_TEXT_WIDGET, D.kg4.SAVE_CLIP].includes(e.action),
                )
                .reject((t) => !e && t.action === D.kg4.SAVE_CLIP)
                .reject(
                    (e) =>
                        !this.props.allowSoundboard &&
                        (e.action === D.kg4.SOUNDBOARD || e.action === D.kg4.SOUNDBOARD_HOLD),
                )
                .sortBy((e) => e.id)
                .sortBy((e) => (!0 === e.managed ? -1 : 0))
                .value(),
            n = V();
        return (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(w.Z, {
                    title: x.intl.string(x.t.T9DA2N),
                    children: C.isPlatformEmbedded
                        ? (0, r.jsxs)(r.Fragment, {
                              children: [
                                  (0, r.jsxs)("div", {
                                      className: M.ctaContainer,
                                      children: [
                                          this.renderKeybindWarning(),
                                          (0, r.jsx)("div", {
                                              className: M.addButton,
                                              children: (0, r.jsx)(d.Button, {
                                                  size: "md",
                                                  onClick: this.handleAddKeybind,
                                                  text: x.intl.string(x.t.zk6Xbm),
                                                  variant: "primary",
                                              }),
                                          }),
                                      ],
                                  }),
                                  (0, r.jsx)(I.Z, {
                                      className: M.systemServiceUpsell,
                                      sourcePage: "keybinds",
                                  }),
                                  (0, r.jsx)(d.izJ, {}),
                                  this.renderKeybinds(t),
                                  this.renderEmpty(t),
                              ],
                          })
                        : (0, r.jsx)(d.Wn, {
                              messageType: d.QYI.INFO,
                              className: M.browserNotice,
                              children: x.intl.format(x.t.mPi3Fx, { downloadLink: D.EYA.DOWNLOAD }),
                          }),
                }),
                (0, r.jsx)(d.izJ, { className: j.marginBottom60 }),
                (0, r.jsxs)(d.Kqy, {
                    gap: 48,
                    children: [
                        (0, r.jsx)(d.C3N, {
                            label: x.intl.string(x.t.Lz5KHB),
                            children: (0, r.jsx)("div", {
                                className: M.defaultKeybindGroup,
                                children: (0, r.jsxs)("div", {
                                    className: M.defaultKeybind,
                                    children: [
                                        (0, r.jsx)(d.Text, {
                                            variant: "text-md/normal",
                                            children: x.intl.string(x.t.sMWLBg),
                                        }),
                                        (0, r.jsx)("div", {
                                            className: M.defaultKeybindShortcutGroup,
                                            children: (0, r.jsx)(d.M2$, { shortcut: h._.binds["0"] }),
                                        }),
                                    ],
                                }),
                            }),
                        }),
                        (0, r.jsx)(F, {
                            children: (e) =>
                                (0, r.jsx)(r.Fragment, {
                                    children: e.map((e, t) => {
                                        let a = (0, m.UD)(e),
                                            o = (0, m.U6)(e),
                                            s = n[e];
                                        return (0, r.jsx)(
                                            d.C3N,
                                            {
                                                label: a,
                                                description: o,
                                                children: (0, r.jsx)("div", {
                                                    className: M.defaultKeybindGroup,
                                                    children: s.map((e, t) =>
                                                        (0, r.jsxs)(
                                                            i.Fragment,
                                                            {
                                                                children: [
                                                                    0 !== t && (0, r.jsx)(d.izJ, {}),
                                                                    (0, r.jsxs)("div", {
                                                                        className: M.defaultKeybind,
                                                                        children: [
                                                                            (0, r.jsx)(d.Text, {
                                                                                variant: "text-md/normal",
                                                                                children: e.description,
                                                                            }),
                                                                            (0, r.jsx)("div", {
                                                                                className:
                                                                                    M.defaultKeybindShortcutGroup,
                                                                                children: e.binds.map((e) =>
                                                                                    (0, r.jsx)(
                                                                                        d.M2$,
                                                                                        { shortcut: e },
                                                                                        e,
                                                                                    ),
                                                                                ),
                                                                            }),
                                                                        ],
                                                                    }),
                                                                ],
                                                            },
                                                            e.description,
                                                        ),
                                                    ),
                                                }),
                                            },
                                            t,
                                        );
                                    }),
                                }),
                        }),
                    ],
                }),
            ],
        });
    }
    constructor(...e) {
        super(...e),
            U(this, "handleAddKeybind", () => {
                f.Z.addKeybind();
            });
    }
}
function W() {
    let e = (0, c.e7)([S.ZP], () => S.ZP.getState()),
        t = (0, c.e7)([T.Z], () => (0, b.Z)(T.Z)),
        n = (0, c.e7)([v.ZP], () => v.ZP.isSupported()),
        i = (0, E.Go)(),
        a = (0, R.wy)("UserSettingsKeybindsConnected");
    return (0, r.jsx)(Y, {
        keybinds: e,
        canGoLive: t,
        overlaySupported: n,
        allowSoundboard: (0, C.isWindows)(),
        enableClips: i,
        isUserSettingsRedesignEnabled: a,
    });
}
