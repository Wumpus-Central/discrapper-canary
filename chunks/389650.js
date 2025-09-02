n.d(t, { Z: () => W }), n(953529), n(388685), n(539854);
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
    S = n(825655),
    A = n(131951),
    C = n(556296),
    N = n(63063),
    R = n(358085),
    P = n(13140),
    w = n(659947),
    D = n(981631),
    x = n(420212),
    L = n(388032),
    j = n(894462),
    M = n(620842),
    k = n(197571);
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
    return t([g.Q2.MESSAGE, g.Q2.NAVIGATION, g.Q2.DND, g.Q2.CHAT, g.Q2.VOICE_AND_VIDEO, g.Q2.MISCELLANEOUS]);
}
let V = l()((0, g.Rv)())
    .filter((e) => e.description !== L.intl.string(L.t.HnNtEB))
    .groupBy((e) => e.group)
    .value();
class H extends i.PureComponent {
    renderMessage() {
        let { keybind: e } = this.props,
            t = P.BB(e.shortcut);
        return E.Z.hasBind(t)
            ? (0, r.jsx)(f.R94, {
                  className: j.keybindMessage,
                  type: f.geA.DESCRIPTION,
                  style: { color: u.Z.unsafe_rawColors.RED_400.css },
                  children: L.intl.string(L.t["7lQlw8"]),
              })
            : x.Sp.has(t)
              ? (0, r.jsx)(f.R94, {
                    className: j.keybindMessage,
                    type: f.geA.DESCRIPTION,
                    style: { color: u.Z.unsafe_rawColors.RED_400.css },
                    children: L.intl.format(L.t.MOIaNT, {
                        keyboardNavArticle: N.Z.getArticleURL(D.BhN.KEYBOARD_NAVIGATION),
                    }),
                })
              : (0, r.jsx)(f.R94, {
                    className: j.keybindMessage,
                    type: f.geA.DESCRIPTION,
                    children: this.props.keybindDescriptions[e.action],
                });
    }
    render() {
        let { managed: e, enabled: t } = this.props.keybind;
        return (0, r.jsxs)(y.Z, {
            direction: y.Z.Direction.VERTICAL,
            className: o()(j.keybindGroup, M.card),
            children: [
                !e &&
                    (0, r.jsx)(p.Z, {
                        "aria-label": L.intl.string(L.t.qEHmmJ),
                        className: j.removeKeybind,
                        onClick: this.handleDeleteKeybind,
                    }),
                (0, r.jsxs)(y.Z, {
                    className: k.marginBottom8,
                    children: [
                        (0, r.jsx)(y.Z.Child, {
                            basis: "45%",
                            children: (0, r.jsx)(f.xJW, {
                                title: L.intl.string(L.t.UUpADw),
                                className: j.item,
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
                                title: L.intl.string(L.t["1La4tL"]),
                                className: j.item,
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
                                className: j.switch,
                                children: (0, r.jsx)(f.ua7, {
                                    text: L.intl.string(L.t.uCD7qK),
                                    children: (e) =>
                                        (0, r.jsx)(
                                            "div",
                                            Z(G({}, e), {
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
        return e === D.kg4.SWITCH_TO_VOICE_CHANNEL ? (0, r.jsx)(w.Z, { keybind: this.props.keybind }) : void 0;
    }
    constructor(...e) {
        super(...e),
            U(this, "handleActionChanged", (e) => {
                _.Z.setKeybind(Z(G({}, this.props.keybind), { action: e }));
            }),
            U(this, "handleShortcutChange", (e) => {
                _.Z.setKeybind(Z(G({}, this.props.keybind), { shortcut: e }));
            }),
            U(this, "handleDeleteKeybind", () => {
                _.Z.deleteKeybind(this.props.keybind.id);
            }),
            U(this, "handleEnableDisable", () => {
                let { keybind: e } = this.props;
                _.Z.setKeybind(Z(G({}, this.props.keybind), { enabled: !e.enabled }));
            });
    }
}
class Y extends i.PureComponent {
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
                          value: D.kg4.VAD_PRIORITY,
                          label: L.intl.string(L.t["49d6NT"]),
                      },
                  ]
                : [],
            a = [
                {
                    value: D.kg4.UNASSIGNED,
                    label: L.intl.string(L.t["0Uh57+"]),
                },
                {
                    value: D.kg4.PUSH_TO_TALK,
                    label: L.intl.string(L.t.Y5lgTE),
                },
                {
                    value: D.kg4.PUSH_TO_TALK_PRIORITY,
                    label: L.intl.string(L.t.DkSwJy),
                },
                {
                    value: D.kg4.PUSH_TO_MUTE,
                    label: L.intl.string(L.t.hSCRqa),
                },
                ...i,
                {
                    value: D.kg4.TOGGLE_MUTE,
                    label: L.intl.string(L.t.PlkYKC),
                },
                {
                    value: D.kg4.TOGGLE_DEAFEN,
                    label: L.intl.string(L.t.NvGq1N),
                },
                {
                    value: D.kg4.TOGGLE_VOICE_MODE,
                    label: L.intl.string(L.t.Wa5H9f),
                },
                {
                    value: D.kg4.TOGGLE_STREAMER_MODE,
                    label: L.intl.string(L.t.BK0NcX),
                },
            ];
        return (
            (0, I.l)() &&
                a.push({
                    value: D.kg4.TOGGLE_CAMERA,
                    label: L.intl.string(L.t.hf8JVV),
                }),
            e &&
                (a.push({
                    value: D.kg4.TOGGLE_OVERLAY_INPUT_LOCK,
                    label: L.intl.string(L.t.VsAZcH),
                }),
                a.push({
                    value: D.kg4.OVERLAY_ACTIVATE_REGION_TEXT_WIDGET,
                    label: L.intl.string(L.t.hurHWl),
                })),
            t &&
                ((0, R.isWindows)() || A.Z.getUseSystemScreensharePicker()) &&
                a.push({
                    value: D.kg4.TOGGLE_GO_LIVE_STREAMING,
                    label: L.intl.string(L.t.ybdjJC),
                }),
            (0, R.isDesktop)() &&
                (a.push(
                    {
                        value: D.kg4.NAVIGATE_BACK,
                        label: L.intl.string(L.t.gRSaOT),
                    },
                    {
                        value: D.kg4.NAVIGATE_FORWARD,
                        label: L.intl.string(L.t.zOXpjY),
                    },
                    {
                        value: D.kg4.SWITCH_TO_VOICE_CHANNEL,
                        label: L.intl.string(L.t.ty7Lx8),
                    },
                    {
                        value: D.kg4.DISCONNECT_FROM_VOICE_CHANNEL,
                        label: L.intl.string(L.t.CV7mT0),
                    },
                ),
                n &&
                    a.push(
                        {
                            value: D.kg4.SOUNDBOARD,
                            label: L.intl.string(L.t.yPH4xs),
                        },
                        {
                            value: D.kg4.SOUNDBOARD_HOLD,
                            label: L.intl.string(L.t["1xFbPz"]),
                        },
                    ),
                r &&
                    a.push({
                        value: D.kg4.SAVE_CLIP,
                        label: L.intl.string(L.t.U4URzM),
                    })),
            a
        );
    }
    get keybindDescriptions() {
        let { overlaySupported: e, canGoLive: t, enableClips: n } = this.props,
            r = {
                [D.kg4.UNASSIGNED]: L.intl.string(L.t.rvlNLi),
                [D.kg4.PUSH_TO_MUTE]: L.intl.string(L.t.xtESio),
                [D.kg4.PUSH_TO_TALK]: L.intl.string(L.t.wTcBS0),
                [D.kg4.PUSH_TO_TALK_PRIORITY]: L.intl.string(L.t.FhHvWF),
                [D.kg4.TOGGLE_MUTE]: L.intl.string(L.t.X2fbUl),
                [D.kg4.TOGGLE_DEAFEN]: L.intl.string(L.t.MjREZW),
                [D.kg4.TOGGLE_VOICE_MODE]: L.intl.string(L.t.snm5YW),
                [D.kg4.TOGGLE_STREAMER_MODE]: L.intl.string(L.t.YszLLy),
            };
        return (
            v.Z.getCurrentConfig({ location: "UserSettingsKeybinds" }, { autoTrackExposure: !1 }).separateKeybind &&
                (r[D.kg4.VAD_PRIORITY] = L.intl.string(L.t.rSe8IS)),
            (0, I.l)() && (r[D.kg4.TOGGLE_CAMERA] = L.intl.string(L.t.v1JBtL)),
            e && (r[D.kg4.TOGGLE_OVERLAY_INPUT_LOCK] = L.intl.string(L.t.IoP5vb)),
            t && (0, R.isWindows)() && (r[D.kg4.TOGGLE_GO_LIVE_STREAMING] = L.intl.string(L.t.s4C239)),
            (0, R.isDesktop)() &&
                ((r[D.kg4.NAVIGATE_BACK] = L.intl.string(L.t.nKDlEh)),
                (r[D.kg4.NAVIGATE_FORWARD] = L.intl.string(L.t.DK0FFh)),
                (r[D.kg4.SOUNDBOARD] = (0, R.isWindows)() ? L.intl.string(L.t["5wJefH"]) : L.intl.string(L.t.gzjsSE)),
                (r[D.kg4.SOUNDBOARD_HOLD] = (0, R.isWindows)() ? L.intl.string(L.t.RRkZc3) : L.intl.string(L.t.laNlTk)),
                n && (r[D.kg4.SAVE_CLIP] = L.intl.string(L.t.z3Wbam))),
            r
        );
    }
    renderKeybinds(e) {
        return e.map((e) =>
            (0, r.jsx)(
                "div",
                {
                    className: j.row,
                    children: (0, r.jsx)(
                        H,
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
                (0, r.jsx)(f.hjN, {
                    tag: f.RB0.H1,
                    title: L.intl.string(L.t.T9DA2N),
                    children: R.isPlatformEmbedded
                        ? (0, r.jsxs)(r.Fragment, {
                              children: [
                                  (0, r.jsxs)(y.Z, {
                                      justify: y.Z.Justify.BETWEEN,
                                      className: k.marginBottom20,
                                      children: [
                                          (0, r.jsx)(y.Z.Child, {
                                              grow: 0,
                                              children: (0, r.jsx)(f.Wn, {
                                                  messageType: f.QYI.WARNING,
                                                  children: L.intl.string(L.t.NoKjWF),
                                              }),
                                          }),
                                          (0, r.jsx)(y.Z.Child, {
                                              wrap: !0,
                                              grow: 0,
                                              children: (0, r.jsx)(d.zx, {
                                                  size: d.Ph.LARGE,
                                                  onClick: this.handleAddKeybind,
                                                  children: L.intl.string(L.t.zk6Xbm),
                                              }),
                                          }),
                                      ],
                                  }),
                                  (0, r.jsx)(S.Z, {
                                      className: j.systemServiceUpsell,
                                      sourcePage: "keybinds",
                                  }),
                                  (0, r.jsx)(f.$i$, {}),
                                  (0, r.jsxs)(f.hjN, {
                                      children: [this.renderKeybinds(t), this.renderEmpty(t)],
                                  }),
                              ],
                          })
                        : (0, r.jsx)(f.Wn, {
                              messageType: f.QYI.INFO,
                              className: j.browserNotice,
                              children: L.intl.format(L.t.mPi3Fx, { downloadLink: D.EYA.DOWNLOAD }),
                          }),
                }),
                (0, r.jsx)(f.$i$, {}),
                (0, r.jsxs)(f.hjN, {
                    tag: f.RB0.H1,
                    title: L.intl.string(L.t.Lz5KHB),
                    className: k.marginTop60,
                    children: [
                        (0, r.jsxs)("div", {
                            className: j.defaultKeybind,
                            children: [
                                (0, r.jsx)(f.Text, {
                                    variant: "text-md/normal",
                                    children: L.intl.string(L.t.sMWLBg),
                                }),
                                (0, r.jsx)("div", {
                                    className: j.defaultKeybindShortcutGroup,
                                    children: (0, r.jsx)(f.M2$, {
                                        shortcut: m._.binds["0"],
                                        className: j.__invalid_defaultKeybindShortcut,
                                    }),
                                }),
                            ],
                        }),
                        (0, r.jsx)(f.$i$, {}),
                        (0, r.jsx)(F, {
                            children: (e) =>
                                (0, r.jsx)(r.Fragment, {
                                    children: e.map((e, t) => {
                                        let n = (0, g.UD)(e),
                                            a = (0, g.U6)(e),
                                            s = V[e];
                                        return (0, r.jsxs)(
                                            "div",
                                            {
                                                className: j.defaultKeybindGroup,
                                                children: [
                                                    (0, r.jsx)(f.X6q, {
                                                        variant: "heading-deprecated-12/semibold",
                                                        className: o()(j.defaultKeybindGroupHeader, {
                                                            [j.defaultKeybindGroupWithDescription]: null != a,
                                                        }),
                                                        children: n,
                                                    }),
                                                    null != a &&
                                                        (0, r.jsx)(f.Text, {
                                                            color: "header-secondary",
                                                            className: j.defaultKeybindGroupDescription,
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
                                                                        className: j.defaultKeybind,
                                                                        children: [
                                                                            (0, r.jsx)(f.Text, {
                                                                                variant: "text-md/normal",
                                                                                children: e.description,
                                                                            }),
                                                                            (0, r.jsx)("div", {
                                                                                className:
                                                                                    j.defaultKeybindShortcutGroup,
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
            U(this, "handleAddKeybind", () => {
                _.Z.addKeybind();
            });
    }
}
function W() {
    let e = (0, c.e7)([C.ZP], () => C.ZP.getState()),
        t = (0, c.e7)([A.Z], () => (0, O.Z)(A.Z)),
        n = (0, c.e7)([T.ZP], () => T.ZP.isSupported()),
        i = (0, b.Go)();
    return (0, r.jsx)(Y, {
        keybinds: e,
        canGoLive: t,
        overlaySupported: n,
        allowSoundboard: (0, R.isWindows)(),
        enableClips: i,
    });
}
