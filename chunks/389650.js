n.d(t, { Z: () => Y }), n(953529), n(388685), n(539854);
var r = n(951288),
    i = n(647438),
    a = n(120356),
    o = n.n(a),
    s = n(392711),
    l = n.n(s),
    c = n(442837),
    u = n(692547),
    d = n(755721),
    f = n(481060),
    _ = n(660216),
    p = n(225433),
    h = n(825209),
    m = n(721383),
    g = n(612226),
    E = n(714338),
    b = n(924557),
    y = n(600164),
    O = n(74299),
    v = n(577153),
    I = n(365023),
    T = n(610394),
    S = n(131951),
    A = n(556296),
    C = n(63063),
    N = n(358085),
    R = n(13140),
    P = n(659947),
    w = n(981631),
    D = n(420212),
    x = n(388032),
    L = n(894462),
    j = n(620842),
    M = n(197571);
function k(e, t, n) {
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
function U(e) {
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
                k(e, t, n[t]);
            });
    }
    return e;
}
function G(e, t) {
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
function B(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : G(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function Z(e) {
    let { children: t } = e;
    return t([g.Q2.MESSAGE, g.Q2.NAVIGATION, g.Q2.DND, g.Q2.CHAT, g.Q2.VOICE_AND_VIDEO, g.Q2.MISCELLANEOUS]);
}
let V = l()((0, g.Rv)())
    .filter((e) => e.description !== x.intl.string(x.t.HnNtEB))
    .groupBy((e) => e.group)
    .value();
class F extends i.PureComponent {
    renderMessage() {
        let { keybind: e } = this.props,
            t = R.BB(e.shortcut);
        return E.Z.hasBind(t)
            ? (0, r.jsx)(f.R94, {
                  className: L.keybindMessage,
                  type: f.geA.DESCRIPTION,
                  style: { color: u.Z.unsafe_rawColors.RED_400.css },
                  children: x.intl.string(x.t["7lQlw8"]),
              })
            : D.Sp.has(t)
              ? (0, r.jsx)(f.R94, {
                    className: L.keybindMessage,
                    type: f.geA.DESCRIPTION,
                    style: { color: u.Z.unsafe_rawColors.RED_400.css },
                    children: x.intl.format(x.t.MOIaNT, {
                        keyboardNavArticle: C.Z.getArticleURL(w.BhN.KEYBOARD_NAVIGATION),
                    }),
                })
              : (0, r.jsx)(f.R94, {
                    className: L.keybindMessage,
                    type: f.geA.DESCRIPTION,
                    children: this.props.keybindDescriptions[e.action],
                });
    }
    render() {
        let { managed: e, enabled: t } = this.props.keybind;
        return (0, r.jsxs)(y.Z, {
            direction: y.Z.Direction.VERTICAL,
            className: o()(L.keybindGroup, j.card),
            children: [
                !e &&
                    (0, r.jsx)(p.Z, {
                        "aria-label": x.intl.string(x.t.qEHmmJ),
                        className: L.removeKeybind,
                        onClick: this.handleDeleteKeybind,
                        look: p.Z.Looks.FILLED,
                    }),
                (0, r.jsxs)(y.Z, {
                    className: M.marginBottom8,
                    children: [
                        (0, r.jsx)(y.Z.Child, {
                            basis: "45%",
                            children: (0, r.jsx)(f.xJW, {
                                title: x.intl.string(x.t.UUpADw),
                                className: L.item,
                                children: (0, r.jsx)(f.q4e, {
                                    value: this.props.keybind.action,
                                    options: this.props.keybindActionTypes,
                                    onChange: this.handleActionChanged,
                                    isDisabled: e,
                                }),
                            }),
                        }),
                        (0, r.jsx)(y.Z.Child, {
                            basis: "45%",
                            children: (0, r.jsx)(f.xJW, {
                                title: x.intl.string(x.t["1La4tL"]),
                                className: L.item,
                                children: (0, r.jsx)(h.Z, {
                                    defaultValue: this.props.keybind.shortcut,
                                    onChange: this.handleShortcutChange,
                                }),
                            }),
                        }),
                        (0, r.jsx)(y.Z.Child, {
                            grow: 0,
                            shrink: 0,
                            children: (0, r.jsx)(f.xJW, {
                                className: L.switch,
                                children: (0, r.jsx)(f.ua7, {
                                    text: x.intl.string(x.t.uCD7qK),
                                    children: (e) =>
                                        (0, r.jsx)(
                                            "div",
                                            B(U({}, e), {
                                                children: (0, r.jsx)(f.rsf, {
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
                (0, r.jsx)(y.Z.Child, { children: this.renderMessage() }),
                this.renderExtraSettings(),
            ],
        });
    }
    renderExtraSettings() {
        let { action: e } = this.props.keybind;
        return e === w.kg4.SWITCH_TO_VOICE_CHANNEL ? (0, r.jsx)(P.Z, { keybind: this.props.keybind }) : void 0;
    }
    constructor(...e) {
        super(...e),
            k(this, "handleActionChanged", (e) => {
                _.Z.setKeybind(B(U({}, this.props.keybind), { action: e }));
            }),
            k(this, "handleShortcutChange", (e) => {
                _.Z.setKeybind(B(U({}, this.props.keybind), { shortcut: e }));
            }),
            k(this, "handleDeleteKeybind", () => {
                _.Z.deleteKeybind(this.props.keybind.id);
            }),
            k(this, "handleEnableDisable", () => {
                let { keybind: e } = this.props;
                _.Z.setKeybind(B(U({}, this.props.keybind), { enabled: !e.enabled }));
            });
    }
}
class H extends i.PureComponent {
    componentDidMount() {
        _.Z.enableAll(!1);
    }
    componentWillUnmount() {
        _.Z.enableAll(!0);
    }
    get keybindActionTypes() {
        let { overlaySupported: e, canGoLive: t, allowSoundboard: n, enableClips: r } = this.props,
            i = v.Z.getCurrentConfig({ location: "UserSettingsKeybinds" }, { autoTrackExposure: !1 }).separateKeybind
                ? [
                      {
                          value: w.kg4.VAD_PRIORITY,
                          label: x.intl.string(x.t["49d6NT"]),
                      },
                  ]
                : [],
            a = [
                {
                    value: w.kg4.UNASSIGNED,
                    label: x.intl.string(x.t["0Uh57+"]),
                },
                {
                    value: w.kg4.PUSH_TO_TALK,
                    label: x.intl.string(x.t.Y5lgTE),
                },
                {
                    value: w.kg4.PUSH_TO_TALK_PRIORITY,
                    label: x.intl.string(x.t.DkSwJy),
                },
                {
                    value: w.kg4.PUSH_TO_MUTE,
                    label: x.intl.string(x.t.hSCRqa),
                },
                ...i,
                {
                    value: w.kg4.TOGGLE_MUTE,
                    label: x.intl.string(x.t.PlkYKC),
                },
                {
                    value: w.kg4.TOGGLE_DEAFEN,
                    label: x.intl.string(x.t.NvGq1N),
                },
                {
                    value: w.kg4.TOGGLE_VOICE_MODE,
                    label: x.intl.string(x.t.Wa5H9f),
                },
                {
                    value: w.kg4.TOGGLE_STREAMER_MODE,
                    label: x.intl.string(x.t.BK0NcX),
                },
            ];
        return (
            (0, I.l)() &&
                a.push({
                    value: w.kg4.TOGGLE_CAMERA,
                    label: x.intl.string(x.t.hf8JVV),
                }),
            e &&
                (a.push({
                    value: w.kg4.TOGGLE_OVERLAY_INPUT_LOCK,
                    label: x.intl.string(x.t.VsAZcH),
                }),
                a.push({
                    value: w.kg4.OVERLAY_ACTIVATE_REGION_TEXT_WIDGET,
                    label: x.intl.string(x.t.hurHWl),
                })),
            t &&
                ((0, N.isWindows)() || S.Z.getUseSystemScreensharePicker()) &&
                a.push({
                    value: w.kg4.TOGGLE_GO_LIVE_STREAMING,
                    label: x.intl.string(x.t.ybdjJC),
                }),
            (0, N.isDesktop)() &&
                (a.push(
                    {
                        value: w.kg4.NAVIGATE_BACK,
                        label: x.intl.string(x.t.gRSaOT),
                    },
                    {
                        value: w.kg4.NAVIGATE_FORWARD,
                        label: x.intl.string(x.t.zOXpjY),
                    },
                    {
                        value: w.kg4.SWITCH_TO_VOICE_CHANNEL,
                        label: x.intl.string(x.t.ty7Lx8),
                    },
                    {
                        value: w.kg4.DISCONNECT_FROM_VOICE_CHANNEL,
                        label: x.intl.string(x.t.CV7mT0),
                    },
                ),
                n &&
                    a.push(
                        {
                            value: w.kg4.SOUNDBOARD,
                            label: x.intl.string(x.t.yPH4xs),
                        },
                        {
                            value: w.kg4.SOUNDBOARD_HOLD,
                            label: x.intl.string(x.t["1xFbPz"]),
                        },
                    ),
                r &&
                    a.push({
                        value: w.kg4.SAVE_CLIP,
                        label: x.intl.string(x.t.U4URzM),
                    })),
            a
        );
    }
    get keybindDescriptions() {
        let { overlaySupported: e, canGoLive: t, enableClips: n } = this.props,
            r = {
                [w.kg4.UNASSIGNED]: x.intl.string(x.t.rvlNLi),
                [w.kg4.PUSH_TO_MUTE]: x.intl.string(x.t.xtESio),
                [w.kg4.PUSH_TO_TALK]: x.intl.string(x.t.wTcBS0),
                [w.kg4.PUSH_TO_TALK_PRIORITY]: x.intl.string(x.t.FhHvWF),
                [w.kg4.TOGGLE_MUTE]: x.intl.string(x.t.X2fbUl),
                [w.kg4.TOGGLE_DEAFEN]: x.intl.string(x.t.MjREZW),
                [w.kg4.TOGGLE_VOICE_MODE]: x.intl.string(x.t.snm5YW),
                [w.kg4.TOGGLE_STREAMER_MODE]: x.intl.string(x.t.YszLLy),
            };
        return (
            v.Z.getCurrentConfig({ location: "UserSettingsKeybinds" }, { autoTrackExposure: !1 }).separateKeybind &&
                (r[w.kg4.VAD_PRIORITY] = x.intl.string(x.t.rSe8IS)),
            (0, I.l)() && (r[w.kg4.TOGGLE_CAMERA] = x.intl.string(x.t.v1JBtL)),
            e && (r[w.kg4.TOGGLE_OVERLAY_INPUT_LOCK] = x.intl.string(x.t.IoP5vb)),
            t && (0, N.isWindows)() && (r[w.kg4.TOGGLE_GO_LIVE_STREAMING] = x.intl.string(x.t.s4C239)),
            (0, N.isDesktop)() &&
                ((r[w.kg4.NAVIGATE_BACK] = x.intl.string(x.t.nKDlEh)),
                (r[w.kg4.NAVIGATE_FORWARD] = x.intl.string(x.t.DK0FFh)),
                (r[w.kg4.SOUNDBOARD] = (0, N.isWindows)() ? x.intl.string(x.t["5wJefH"]) : x.intl.string(x.t.gzjsSE)),
                (r[w.kg4.SOUNDBOARD_HOLD] = (0, N.isWindows)() ? x.intl.string(x.t.RRkZc3) : x.intl.string(x.t.laNlTk)),
                n && (r[w.kg4.SAVE_CLIP] = x.intl.string(x.t.z3Wbam))),
            r
        );
    }
    renderKeybinds(e) {
        return e.map((e) =>
            (0, r.jsx)(
                "div",
                {
                    className: L.row,
                    children: (0, r.jsx)(
                        F,
                        {
                            keybind: e,
                            keybindDescriptions: this.keybindDescriptions,
                            keybindActionTypes: this.keybindActionTypes,
                        },
                        e.id,
                    ),
                },
                e.id,
            ),
        );
    }
    renderEmpty(e) {
        if (0 === e.length) return null;
    }
    render() {
        let e = this.props.enableClips,
            t = l()(this.props.keybinds)
                .reject(
                    (e) =>
                        e.managed && ![w.kg4.OVERLAY_ACTIVATE_REGION_TEXT_WIDGET, w.kg4.SAVE_CLIP].includes(e.action),
                )
                .reject((t) => !e && t.action === w.kg4.SAVE_CLIP)
                .reject(
                    (e) =>
                        !this.props.allowSoundboard &&
                        (e.action === w.kg4.SOUNDBOARD || e.action === w.kg4.SOUNDBOARD_HOLD),
                )
                .sortBy((e) => e.id)
                .sortBy((e) => (!0 === e.managed ? -1 : 0))
                .value();
        return (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(f.hjN, {
                    tag: f.RB0.H1,
                    title: x.intl.string(x.t.T9DA2N),
                    children: N.isPlatformEmbedded
                        ? (0, r.jsxs)(r.Fragment, {
                              children: [
                                  (0, r.jsxs)(y.Z, {
                                      justify: y.Z.Justify.BETWEEN,
                                      className: M.marginBottom20,
                                      children: [
                                          (0, r.jsx)(y.Z.Child, {
                                              grow: 0,
                                              children: (0, r.jsx)(f.Wn, {
                                                  messageType: f.QYI.WARNING,
                                                  children: x.intl.string(x.t.NoKjWF),
                                              }),
                                          }),
                                          (0, r.jsx)(y.Z.Child, {
                                              wrap: !0,
                                              grow: 0,
                                              children: (0, r.jsx)(d.zx, {
                                                  size: d.Ph.LARGE,
                                                  onClick: this.handleAddKeybind,
                                                  children: x.intl.string(x.t.zk6Xbm),
                                              }),
                                          }),
                                      ],
                                  }),
                                  (0, r.jsx)(f.$i$, {}),
                                  (0, r.jsxs)(f.hjN, {
                                      children: [this.renderKeybinds(t), this.renderEmpty(t)],
                                  }),
                              ],
                          })
                        : (0, r.jsx)(f.Wn, {
                              messageType: f.QYI.INFO,
                              textVariant: "text-lg/medium",
                              className: L.browserNotice,
                              children: x.intl.format(x.t.mPi3Fx, { downloadLink: w.EYA.DOWNLOAD }),
                          }),
                }),
                (0, r.jsx)(f.$i$, {}),
                (0, r.jsxs)(f.hjN, {
                    tag: f.RB0.H1,
                    title: x.intl.string(x.t.Lz5KHB),
                    className: M.marginTop60,
                    children: [
                        (0, r.jsxs)("div", {
                            className: L.defaultKeybind,
                            children: [
                                (0, r.jsx)(f.Text, {
                                    variant: "text-md/normal",
                                    children: x.intl.string(x.t.sMWLBg),
                                }),
                                (0, r.jsx)("div", {
                                    className: L.defaultKeybindShortcutGroup,
                                    children: (0, r.jsx)(f.M2$, {
                                        shortcut: m._.binds["0"],
                                        className: L.__invalid_defaultKeybindShortcut,
                                    }),
                                }),
                            ],
                        }),
                        (0, r.jsx)(f.$i$, {}),
                        (0, r.jsx)(Z, {
                            children: (e) =>
                                (0, r.jsx)(r.Fragment, {
                                    children: e.map((e, t) => {
                                        let n = (0, g.UD)(e),
                                            a = (0, g.U6)(e),
                                            s = V[e];
                                        return (0, r.jsxs)(
                                            "div",
                                            {
                                                className: L.defaultKeybindGroup,
                                                children: [
                                                    (0, r.jsx)(f.X6q, {
                                                        variant: "heading-deprecated-12/semibold",
                                                        className: o()(L.defaultKeybindGroupHeader, {
                                                            [L.defaultKeybindGroupWithDescription]: null != a,
                                                        }),
                                                        children: n,
                                                    }),
                                                    null != a &&
                                                        (0, r.jsx)(f.Text, {
                                                            color: "header-secondary",
                                                            className: L.defaultKeybindGroupDescription,
                                                            variant: "text-sm/normal",
                                                            children: a,
                                                        }),
                                                    (0, r.jsx)(f.$i$, {}),
                                                    s.map((e) =>
                                                        (0, r.jsxs)(
                                                            i.Fragment,
                                                            {
                                                                children: [
                                                                    (0, r.jsxs)("div", {
                                                                        className: L.defaultKeybind,
                                                                        children: [
                                                                            (0, r.jsx)(f.Text, {
                                                                                variant: "text-md/normal",
                                                                                children: e.description,
                                                                            }),
                                                                            (0, r.jsx)("div", {
                                                                                className:
                                                                                    L.defaultKeybindShortcutGroup,
                                                                                children: e.binds.map((e) =>
                                                                                    (0, r.jsx)(
                                                                                        f.M2$,
                                                                                        { shortcut: e },
                                                                                        e,
                                                                                    ),
                                                                                ),
                                                                            }),
                                                                        ],
                                                                    }),
                                                                    (0, r.jsx)(f.$i$, {}),
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
            k(this, "handleAddKeybind", () => {
                _.Z.addKeybind();
            });
    }
}
function Y() {
    let e = (0, c.e7)([A.ZP], () => A.ZP.getState()),
        t = (0, c.e7)([S.Z], () => (0, O.Z)(S.Z)),
        n = (0, c.e7)([T.ZP], () => T.ZP.isSupported()),
        i = (0, b.Go)();
    return (0, r.jsx)(H, {
        keybinds: e,
        canGoLive: t,
        overlaySupported: n,
        allowSoundboard: (0, N.isWindows)(),
        enableClips: i,
    });
}
