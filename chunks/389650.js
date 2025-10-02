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
    b = n(600164),
    y = n(74299),
    O = n(577153),
    v = n(365023),
    I = n(610394),
    T = n(825655),
    S = n(131951),
    A = n(556296),
    C = n(63063),
    N = n(358085),
    R = n(13140),
    P = n(659947),
    w = n(273313),
    D = n(981631),
    L = n(295907),
    x = n(388032),
    j = n(958047),
    M = n(504401),
    k = n(10198);
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
let V = l()((0, m.Rv)())
    .filter((e) => e.description !== x.intl.string(x.t.HnNtEB))
    .groupBy((e) => e.group)
    .value();
class H extends i.PureComponent {
    renderMessage() {
        let { keybind: e } = this.props,
            t = R.BB(e.shortcut);
        return g.Z.hasBind(t)
            ? (0, r.jsx)(d.R94, {
                  className: j.keybindMessage,
                  type: d.geA.DESCRIPTION,
                  style: { color: u.Z.unsafe_rawColors.RED_400.css },
                  children: x.intl.string(x.t["7lQlw8"]),
              })
            : L.Sp.has(t)
              ? (0, r.jsx)(d.R94, {
                    className: j.keybindMessage,
                    type: d.geA.DESCRIPTION,
                    style: { color: u.Z.unsafe_rawColors.RED_400.css },
                    children: x.intl.format(x.t.MOIaNT, {
                        keyboardNavArticle: C.Z.getArticleURL(D.BhN.KEYBOARD_NAVIGATION),
                    }),
                })
              : (0, r.jsx)(d.R94, {
                    className: j.keybindMessage,
                    type: d.geA.DESCRIPTION,
                    children: this.props.keybindDescriptions[e.action],
                });
    }
    render() {
        let { managed: e, enabled: t } = this.props.keybind;
        return (0, r.jsxs)(b.Z, {
            direction: b.Z.Direction.VERTICAL,
            className: o()(j.keybindGroup, M.card),
            children: [
                !e &&
                    (0, r.jsx)(_.Z, {
                        "aria-label": x.intl.string(x.t.qEHmmJ),
                        className: j.removeKeybind,
                        onClick: this.handleDeleteKeybind,
                    }),
                (0, r.jsxs)(b.Z, {
                    className: k.marginBottom8,
                    children: [
                        (0, r.jsx)(b.Z.Child, {
                            basis: "45%",
                            children: (0, r.jsx)(d.xJW, {
                                title: x.intl.string(x.t.UUpADw),
                                className: j.item,
                                children: (0, r.jsx)(d.q4e, {
                                    value: this.props.keybind.action,
                                    options: this.props.keybindActionTypes,
                                    onChange: this.handleActionChanged,
                                    isDisabled: e,
                                }),
                            }),
                        }),
                        (0, r.jsx)(b.Z.Child, {
                            basis: "45%",
                            children: (0, r.jsx)(d.xJW, {
                                title: x.intl.string(x.t["1La4tL"]),
                                className: j.item,
                                children: (0, r.jsx)(p.Z, {
                                    defaultValue: this.props.keybind.shortcut,
                                    onChange: this.handleShortcutChange,
                                }),
                            }),
                        }),
                        (0, r.jsx)(b.Z.Child, {
                            grow: 0,
                            shrink: 0,
                            children: (0, r.jsx)("div", {
                                className: j.switch,
                                children: (0, r.jsx)(d.ua7, {
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
                        }),
                    ],
                }),
                (0, r.jsx)(b.Z.Child, { children: this.renderMessage() }),
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
            i = O.Z.getCurrentConfig({ location: "UserSettingsKeybinds" }, { autoTrackExposure: !1 }).separateKeybind
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
            (0, v.l)() &&
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
                ((0, N.isWindows)() || S.Z.getUseSystemScreensharePicker()) &&
                a.push({
                    value: D.kg4.TOGGLE_GO_LIVE_STREAMING,
                    label: x.intl.string(x.t.ybdjJC),
                }),
            (0, N.isDesktop)() &&
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
            O.Z.getCurrentConfig({ location: "UserSettingsKeybinds" }, { autoTrackExposure: !1 }).separateKeybind &&
                (r[D.kg4.VAD_PRIORITY] = x.intl.string(x.t.rSe8IS)),
            (0, v.l)() && (r[D.kg4.TOGGLE_CAMERA] = x.intl.string(x.t.v1JBtL)),
            e && (r[D.kg4.TOGGLE_OVERLAY_INPUT_LOCK] = x.intl.string(x.t.IoP5vb)),
            t && (0, N.isWindows)() && (r[D.kg4.TOGGLE_GO_LIVE_STREAMING] = x.intl.string(x.t.s4C239)),
            (0, N.isDesktop)() &&
                ((r[D.kg4.NAVIGATE_BACK] = x.intl.string(x.t.nKDlEh)),
                (r[D.kg4.NAVIGATE_FORWARD] = x.intl.string(x.t.DK0FFh)),
                (r[D.kg4.SOUNDBOARD] = (0, N.isWindows)() ? x.intl.string(x.t["5wJefH"]) : x.intl.string(x.t.gzjsSE)),
                (r[D.kg4.SOUNDBOARD_HOLD] = (0, N.isWindows)() ? x.intl.string(x.t.RRkZc3) : x.intl.string(x.t.laNlTk)),
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
            className: j.warning,
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
                .value();
        return (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(w.Z, {
                    title: x.intl.string(x.t.T9DA2N),
                    children: N.isPlatformEmbedded
                        ? (0, r.jsxs)(r.Fragment, {
                              children: [
                                  (0, r.jsxs)("div", {
                                      className: j.ctaContainer,
                                      children: [
                                          this.renderKeybindWarning(),
                                          (0, r.jsx)("div", {
                                              className: j.addButton,
                                              children: (0, r.jsx)(d.zxk, {
                                                  size: "md",
                                                  onClick: this.handleAddKeybind,
                                                  text: x.intl.string(x.t.zk6Xbm),
                                                  variant: "primary",
                                              }),
                                          }),
                                      ],
                                  }),
                                  (0, r.jsx)(T.Z, {
                                      className: j.systemServiceUpsell,
                                      sourcePage: "keybinds",
                                  }),
                                  (0, r.jsx)(d.izJ, {}),
                                  this.renderKeybinds(t),
                                  this.renderEmpty(t),
                              ],
                          })
                        : (0, r.jsx)(d.Wn, {
                              messageType: d.QYI.INFO,
                              className: j.browserNotice,
                              children: x.intl.format(x.t.mPi3Fx, { downloadLink: D.EYA.DOWNLOAD }),
                          }),
                }),
                (0, r.jsx)(d.izJ, {}),
                (0, r.jsxs)(d.hjN, {
                    tag: d.RB0.H1,
                    title: x.intl.string(x.t.Lz5KHB),
                    className: k.marginTop60,
                    children: [
                        (0, r.jsxs)("div", {
                            className: j.defaultKeybind,
                            children: [
                                (0, r.jsx)(d.Text, {
                                    variant: "text-md/normal",
                                    children: x.intl.string(x.t.sMWLBg),
                                }),
                                (0, r.jsx)("div", {
                                    className: j.defaultKeybindShortcutGroup,
                                    children: (0, r.jsx)(d.M2$, { shortcut: h._.binds["0"] }),
                                }),
                            ],
                        }),
                        (0, r.jsx)(d.izJ, {}),
                        (0, r.jsx)(F, {
                            children: (e) =>
                                (0, r.jsx)(r.Fragment, {
                                    children: e.map((e, t) => {
                                        let n = (0, m.UD)(e),
                                            a = (0, m.U6)(e),
                                            s = V[e];
                                        return (0, r.jsxs)(
                                            "div",
                                            {
                                                className: j.defaultKeybindGroup,
                                                children: [
                                                    (0, r.jsx)(d.X6q, {
                                                        variant: "heading-deprecated-12/semibold",
                                                        className: o()(j.defaultKeybindGroupHeader, {
                                                            [j.defaultKeybindGroupWithDescription]: null != a,
                                                        }),
                                                        children: n,
                                                    }),
                                                    null != a &&
                                                        (0, r.jsx)(d.Text, {
                                                            color: "header-secondary",
                                                            className: j.defaultKeybindGroupDescription,
                                                            variant: "text-sm/normal",
                                                            children: a,
                                                        }),
                                                    (0, r.jsx)(d.izJ, {}),
                                                    s.map((e) =>
                                                        (0, r.jsxs)(
                                                            i.Fragment,
                                                            {
                                                                children: [
                                                                    (0, r.jsxs)("div", {
                                                                        className: j.defaultKeybind,
                                                                        children: [
                                                                            (0, r.jsx)(d.Text, {
                                                                                variant: "text-md/normal",
                                                                                children: e.description,
                                                                            }),
                                                                            (0, r.jsx)("div", {
                                                                                className:
                                                                                    j.defaultKeybindShortcutGroup,
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
                                                                    (0, r.jsx)(d.izJ, {}),
                                                                ],
                                                            },
                                                            e.description,
                                                        ),
                                                    ),
                                                ],
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
    let e = (0, c.e7)([A.ZP], () => A.ZP.getState()),
        t = (0, c.e7)([S.Z], () => (0, y.Z)(S.Z)),
        n = (0, c.e7)([I.ZP], () => I.ZP.isSupported()),
        i = (0, E.Go)();
    return (0, r.jsx)(Y, {
        keybinds: e,
        canGoLive: t,
        overlaySupported: n,
        allowSoundboard: (0, N.isWindows)(),
        enableClips: i,
    });
}
