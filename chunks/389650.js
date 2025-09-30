n.d(t, { Z: () => K }), n(953529), n(388685), n(539854);
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
    D = n(273313),
    L = n(981631),
    x = n(295907),
    j = n(388032),
    M = n(894462),
    k = n(620842),
    U = n(197571);
function G(e, t, n) {
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
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                G(e, t, n[t]);
            });
    }
    return e;
}
function Z(e, t) {
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
function F(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : Z(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function V(e) {
    let { children: t } = e;
    return t([g.Q2.MESSAGE, g.Q2.NAVIGATION, g.Q2.DND, g.Q2.CHAT, g.Q2.VOICE_AND_VIDEO, g.Q2.MISCELLANEOUS]);
}
let H = l()((0, g.Rv)())
    .filter((e) => e.description !== j.intl.string(j.t.HnNtEB))
    .groupBy((e) => e.group)
    .value();
class Y extends i.PureComponent {
    renderMessage() {
        let { keybind: e } = this.props,
            t = P.BB(e.shortcut);
        return E.Z.hasBind(t)
            ? (0, r.jsx)(f.R94, {
                  className: M.keybindMessage,
                  type: f.geA.DESCRIPTION,
                  style: { color: u.Z.unsafe_rawColors.RED_400.css },
                  children: j.intl.string(j.t["7lQlw8"]),
              })
            : x.Sp.has(t)
              ? (0, r.jsx)(f.R94, {
                    className: M.keybindMessage,
                    type: f.geA.DESCRIPTION,
                    style: { color: u.Z.unsafe_rawColors.RED_400.css },
                    children: j.intl.format(j.t.MOIaNT, {
                        keyboardNavArticle: N.Z.getArticleURL(L.BhN.KEYBOARD_NAVIGATION),
                    }),
                })
              : (0, r.jsx)(f.R94, {
                    className: M.keybindMessage,
                    type: f.geA.DESCRIPTION,
                    children: this.props.keybindDescriptions[e.action],
                });
    }
    render() {
        let { managed: e, enabled: t } = this.props.keybind;
        return (0, r.jsxs)(y.Z, {
            direction: y.Z.Direction.VERTICAL,
            className: o()(M.keybindGroup, k.card),
            children: [
                !e &&
                    (0, r.jsx)(p.Z, {
                        "aria-label": j.intl.string(j.t.qEHmmJ),
                        className: M.removeKeybind,
                        onClick: this.handleDeleteKeybind,
                    }),
                (0, r.jsxs)(y.Z, {
                    className: U.marginBottom8,
                    children: [
                        (0, r.jsx)(y.Z.Child, {
                            basis: "45%",
                            children: (0, r.jsx)(f.xJW, {
                                title: j.intl.string(j.t.UUpADw),
                                className: M.item,
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
                                title: j.intl.string(j.t["1La4tL"]),
                                className: M.item,
                                children: (0, r.jsx)(h.Z, {
                                    defaultValue: this.props.keybind.shortcut,
                                    onChange: this.handleShortcutChange,
                                }),
                            }),
                        }),
                        (0, r.jsx)(y.Z.Child, {
                            grow: 0,
                            shrink: 0,
                            children: (0, r.jsx)("div", {
                                className: M.switch,
                                children: (0, r.jsx)(f.ua7, {
                                    text: j.intl.string(j.t.uCD7qK),
                                    children: (e) =>
                                        (0, r.jsx)(
                                            "div",
                                            F(B({}, e), {
                                                children: (0, r.jsx)(d.T2, {
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
        return e === L.kg4.SWITCH_TO_VOICE_CHANNEL ? (0, r.jsx)(w.Z, { keybind: this.props.keybind }) : void 0;
    }
    constructor(...e) {
        super(...e),
            G(this, "handleActionChanged", (e) => {
                _.Z.setKeybind(F(B({}, this.props.keybind), { action: e }));
            }),
            G(this, "handleShortcutChange", (e) => {
                _.Z.setKeybind(F(B({}, this.props.keybind), { shortcut: e }));
            }),
            G(this, "handleDeleteKeybind", () => {
                _.Z.deleteKeybind(this.props.keybind.id);
            }),
            G(this, "handleEnableDisable", () => {
                let { keybind: e } = this.props;
                _.Z.setKeybind(F(B({}, this.props.keybind), { enabled: !e.enabled }));
            });
    }
}
class W extends i.PureComponent {
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
                          value: L.kg4.VAD_PRIORITY,
                          label: j.intl.string(j.t["49d6NT"]),
                      },
                  ]
                : [],
            a = [
                {
                    value: L.kg4.UNASSIGNED,
                    label: j.intl.string(j.t["0Uh57+"]),
                },
                {
                    value: L.kg4.PUSH_TO_TALK,
                    label: j.intl.string(j.t.Y5lgTE),
                },
                {
                    value: L.kg4.PUSH_TO_TALK_PRIORITY,
                    label: j.intl.string(j.t.DkSwJy),
                },
                {
                    value: L.kg4.PUSH_TO_MUTE,
                    label: j.intl.string(j.t.hSCRqa),
                },
                ...i,
                {
                    value: L.kg4.TOGGLE_MUTE,
                    label: j.intl.string(j.t.PlkYKC),
                },
                {
                    value: L.kg4.TOGGLE_DEAFEN,
                    label: j.intl.string(j.t.NvGq1N),
                },
                {
                    value: L.kg4.TOGGLE_VOICE_MODE,
                    label: j.intl.string(j.t.Wa5H9f),
                },
                {
                    value: L.kg4.TOGGLE_STREAMER_MODE,
                    label: j.intl.string(j.t.BK0NcX),
                },
            ];
        return (
            (0, I.l)() &&
                a.push({
                    value: L.kg4.TOGGLE_CAMERA,
                    label: j.intl.string(j.t.hf8JVV),
                }),
            e &&
                (a.push({
                    value: L.kg4.TOGGLE_OVERLAY_INPUT_LOCK,
                    label: j.intl.string(j.t.VsAZcH),
                }),
                a.push({
                    value: L.kg4.OVERLAY_ACTIVATE_REGION_TEXT_WIDGET,
                    label: j.intl.string(j.t.hurHWl),
                })),
            t &&
                ((0, R.isWindows)() || A.Z.getUseSystemScreensharePicker()) &&
                a.push({
                    value: L.kg4.TOGGLE_GO_LIVE_STREAMING,
                    label: j.intl.string(j.t.ybdjJC),
                }),
            (0, R.isDesktop)() &&
                (a.push(
                    {
                        value: L.kg4.NAVIGATE_BACK,
                        label: j.intl.string(j.t.gRSaOT),
                    },
                    {
                        value: L.kg4.NAVIGATE_FORWARD,
                        label: j.intl.string(j.t.zOXpjY),
                    },
                    {
                        value: L.kg4.SWITCH_TO_VOICE_CHANNEL,
                        label: j.intl.string(j.t.ty7Lx8),
                    },
                    {
                        value: L.kg4.DISCONNECT_FROM_VOICE_CHANNEL,
                        label: j.intl.string(j.t.CV7mT0),
                    },
                ),
                n &&
                    a.push(
                        {
                            value: L.kg4.SOUNDBOARD,
                            label: j.intl.string(j.t.yPH4xs),
                        },
                        {
                            value: L.kg4.SOUNDBOARD_HOLD,
                            label: j.intl.string(j.t["1xFbPz"]),
                        },
                    ),
                r &&
                    a.push({
                        value: L.kg4.SAVE_CLIP,
                        label: j.intl.string(j.t.U4URzM),
                    })),
            a
        );
    }
    get keybindDescriptions() {
        let { overlaySupported: e, canGoLive: t, enableClips: n } = this.props,
            r = {
                [L.kg4.UNASSIGNED]: j.intl.string(j.t.rvlNLi),
                [L.kg4.PUSH_TO_MUTE]: j.intl.string(j.t.xtESio),
                [L.kg4.PUSH_TO_TALK]: j.intl.string(j.t.wTcBS0),
                [L.kg4.PUSH_TO_TALK_PRIORITY]: j.intl.string(j.t.FhHvWF),
                [L.kg4.TOGGLE_MUTE]: j.intl.string(j.t.X2fbUl),
                [L.kg4.TOGGLE_DEAFEN]: j.intl.string(j.t.MjREZW),
                [L.kg4.TOGGLE_VOICE_MODE]: j.intl.string(j.t.snm5YW),
                [L.kg4.TOGGLE_STREAMER_MODE]: j.intl.string(j.t.YszLLy),
            };
        return (
            v.Z.getCurrentConfig({ location: "UserSettingsKeybinds" }, { autoTrackExposure: !1 }).separateKeybind &&
                (r[L.kg4.VAD_PRIORITY] = j.intl.string(j.t.rSe8IS)),
            (0, I.l)() && (r[L.kg4.TOGGLE_CAMERA] = j.intl.string(j.t.v1JBtL)),
            e && (r[L.kg4.TOGGLE_OVERLAY_INPUT_LOCK] = j.intl.string(j.t.IoP5vb)),
            t && (0, R.isWindows)() && (r[L.kg4.TOGGLE_GO_LIVE_STREAMING] = j.intl.string(j.t.s4C239)),
            (0, R.isDesktop)() &&
                ((r[L.kg4.NAVIGATE_BACK] = j.intl.string(j.t.nKDlEh)),
                (r[L.kg4.NAVIGATE_FORWARD] = j.intl.string(j.t.DK0FFh)),
                (r[L.kg4.SOUNDBOARD] = (0, R.isWindows)() ? j.intl.string(j.t["5wJefH"]) : j.intl.string(j.t.gzjsSE)),
                (r[L.kg4.SOUNDBOARD_HOLD] = (0, R.isWindows)() ? j.intl.string(j.t.RRkZc3) : j.intl.string(j.t.laNlTk)),
                n && (r[L.kg4.SAVE_CLIP] = j.intl.string(j.t.z3Wbam))),
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
                            Y,
                            {
                                keybind: t,
                                keybindDescriptions: this.keybindDescriptions,
                                keybindActionTypes: this.keybindActionTypes,
                            },
                            t.id,
                        ),
                        n !== e.length - 1 ? (0, r.jsx)(f.$i$, {}) : null,
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
                (0, r.jsx)(f.d3s, {
                    size: "xs",
                    color: u.Z.colors.ICON_SECONDARY,
                }),
                (0, r.jsx)(f.Text, {
                    variant: "text-sm/medium",
                    color: "text-secondary",
                    children: j.intl.string(j.t.NoKjWF),
                }),
            ],
        });
    }
    render() {
        let e = this.props.enableClips,
            t = l()(this.props.keybinds)
                .reject(
                    (e) =>
                        e.managed && ![L.kg4.OVERLAY_ACTIVATE_REGION_TEXT_WIDGET, L.kg4.SAVE_CLIP].includes(e.action),
                )
                .reject((t) => !e && t.action === L.kg4.SAVE_CLIP)
                .reject(
                    (e) =>
                        !this.props.allowSoundboard &&
                        (e.action === L.kg4.SOUNDBOARD || e.action === L.kg4.SOUNDBOARD_HOLD),
                )
                .sortBy((e) => e.id)
                .sortBy((e) => (!0 === e.managed ? -1 : 0))
                .value();
        return (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(D.Z, {
                    title: j.intl.string(j.t.T9DA2N),
                    children: R.isPlatformEmbedded
                        ? (0, r.jsxs)(r.Fragment, {
                              children: [
                                  (0, r.jsxs)("div", {
                                      className: M.ctaContainer,
                                      children: [
                                          this.renderKeybindWarning(),
                                          (0, r.jsx)("div", {
                                              className: M.addButton,
                                              children: (0, r.jsx)(f.zxk, {
                                                  size: "md",
                                                  onClick: this.handleAddKeybind,
                                                  text: j.intl.string(j.t.zk6Xbm),
                                                  variant: "primary",
                                              }),
                                          }),
                                      ],
                                  }),
                                  (0, r.jsx)(S.Z, {
                                      className: M.systemServiceUpsell,
                                      sourcePage: "keybinds",
                                  }),
                                  (0, r.jsx)(f.$i$, {}),
                                  this.renderKeybinds(t),
                                  this.renderEmpty(t),
                              ],
                          })
                        : (0, r.jsx)(f.Wn, {
                              messageType: f.QYI.INFO,
                              className: M.browserNotice,
                              children: j.intl.format(j.t.mPi3Fx, { downloadLink: L.EYA.DOWNLOAD }),
                          }),
                }),
                (0, r.jsx)(f.$i$, {}),
                (0, r.jsxs)(f.hjN, {
                    tag: f.RB0.H1,
                    title: j.intl.string(j.t.Lz5KHB),
                    className: U.marginTop60,
                    children: [
                        (0, r.jsxs)("div", {
                            className: M.defaultKeybind,
                            children: [
                                (0, r.jsx)(f.Text, {
                                    variant: "text-md/normal",
                                    children: j.intl.string(j.t.sMWLBg),
                                }),
                                (0, r.jsx)("div", {
                                    className: M.defaultKeybindShortcutGroup,
                                    children: (0, r.jsx)(f.M2$, { shortcut: m._.binds["0"] }),
                                }),
                            ],
                        }),
                        (0, r.jsx)(f.$i$, {}),
                        (0, r.jsx)(V, {
                            children: (e) =>
                                (0, r.jsx)(r.Fragment, {
                                    children: e.map((e, t) => {
                                        let n = (0, g.UD)(e),
                                            a = (0, g.U6)(e),
                                            s = H[e];
                                        return (0, r.jsxs)(
                                            "div",
                                            {
                                                className: M.defaultKeybindGroup,
                                                children: [
                                                    (0, r.jsx)(f.X6q, {
                                                        variant: "heading-deprecated-12/semibold",
                                                        className: o()(M.defaultKeybindGroupHeader, {
                                                            [M.defaultKeybindGroupWithDescription]: null != a,
                                                        }),
                                                        children: n,
                                                    }),
                                                    null != a &&
                                                        (0, r.jsx)(f.Text, {
                                                            color: "header-secondary",
                                                            className: M.defaultKeybindGroupDescription,
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
                                                                        className: M.defaultKeybind,
                                                                        children: [
                                                                            (0, r.jsx)(f.Text, {
                                                                                variant: "text-md/normal",
                                                                                children: e.description,
                                                                            }),
                                                                            (0, r.jsx)("div", {
                                                                                className:
                                                                                    M.defaultKeybindShortcutGroup,
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
            G(this, "handleAddKeybind", () => {
                _.Z.addKeybind();
            });
    }
}
function K() {
    let e = (0, c.e7)([C.ZP], () => C.ZP.getState()),
        t = (0, c.e7)([A.Z], () => (0, O.Z)(A.Z)),
        n = (0, c.e7)([T.ZP], () => T.ZP.isSupported()),
        i = (0, b.Go)();
    return (0, r.jsx)(W, {
        keybinds: e,
        canGoLive: t,
        overlaySupported: n,
        allowSoundboard: (0, R.isWindows)(),
        enableClips: i,
    });
}
