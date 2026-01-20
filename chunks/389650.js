n.d(t, { Z: () => B }), n(953529), n(388685), n(539854);
var r = n(54381),
    i = n(473749),
    a = n(392711),
    o = n.n(a),
    s = n(442837),
    l = n(692547),
    c = n(681715),
    u = n(481060),
    d = n(660216),
    f = n(825209),
    p = n(721383),
    _ = n(612226),
    h = n(714338),
    m = n(924557),
    g = n(74299),
    E = n(577153),
    b = n(365023),
    y = n(509140),
    O = n(825655),
    v = n(131951),
    S = n(556296),
    I = n(63063),
    T = n(358085),
    C = n(13140),
    A = n(659947),
    N = n(273313),
    P = n(981631),
    w = n(295907),
    R = n(388032),
    D = n(125612),
    x = n(478411);
function L(e, t, n) {
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
function j(e) {
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
                L(e, t, n[t]);
            });
    }
    return e;
}
function M(e, t) {
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
function k(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : M(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function U(e) {
    let { children: t } = e;
    return t([_.Q2.MESSAGE, _.Q2.NAVIGATION, _.Q2.DND, _.Q2.CHAT, _.Q2.VOICE_AND_VIDEO, _.Q2.MISCELLANEOUS]);
}
function G() {
    return o()((0, _.Rv)())
        .filter((e) => e.description !== R.intl.string(R.t.HnNtEI))
        .groupBy((e) => e.group)
        .value();
}
class Z extends i.PureComponent {
    renderMessage() {
        let { keybind: e } = this.props,
            t = C.BB(e.shortcut);
        return h.Z.hasBind(t)
            ? (0, r.jsx)(u.Wn, {
                  messageType: u.QYI.ERROR,
                  children: R.intl.string(R.t["7lQlw3"]),
              })
            : w.Sp.has(t)
              ? (0, r.jsx)(u.Wn, {
                    messageType: u.QYI.ERROR,
                    children: R.intl.format(R.t.MOIaNd, {
                        keyboardNavArticle: I.Z.getArticleURL(P.BhN.KEYBOARD_NAVIGATION),
                    }),
                })
              : (0, r.jsx)(u.Text, {
                    variant: "text-md/normal",
                    className: D.keybindMessage,
                    children: this.props.keybindDescriptions[e.action],
                });
    }
    render() {
        let { managed: e, enabled: t } = this.props.keybind;
        return (0, r.jsxs)("div", {
            className: D.keybindGroup,
            children: [
                (0, r.jsxs)("div", {
                    className: D.keybindGroupContent,
                    children: [
                        (0, r.jsx)("div", {
                            className: D.item,
                            children: (0, r.jsx)(u.PhF, {
                                selectionMode: "single",
                                label: R.intl.string(R.t.UUpAD6),
                                value: this.props.keybind.action,
                                options: this.props.keybindActionTypes,
                                onSelectionChange: this.handleActionChanged,
                                disabled: e,
                            }),
                        }),
                        (0, r.jsx)("div", {
                            className: D.item,
                            children: (0, r.jsx)(u.gNt, {
                                label: R.intl.string(R.t["1La4tC"]),
                                children: (0, r.jsx)(f.Z, {
                                    defaultValue: this.props.keybind.shortcut,
                                    onChange: this.handleShortcutChange,
                                }),
                            }),
                        }),
                        !e &&
                            (0, r.jsx)("div", {
                                className: D.removeKeybind,
                                children: (0, r.jsx)(u.hU, {
                                    variant: "icon-only",
                                    onClick: this.handleDeleteKeybind,
                                    icon: u.XHJ,
                                    "aria-label": R.intl.string(R.t.qEHmmB),
                                }),
                            }),
                        (0, r.jsx)("div", {
                            className: D.switch,
                            children: (0, r.jsx)(c.u, {
                                text: R.intl.string(R.t.uCD7qK),
                                children: (0, r.jsx)("div", {
                                    children: (0, r.jsx)(u.rsf, {
                                        checked: t,
                                        onChange: this.handleEnableDisable,
                                    }),
                                }),
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
        return e === P.kg4.SWITCH_TO_VOICE_CHANNEL ? (0, r.jsx)(A.Z, { keybind: this.props.keybind }) : void 0;
    }
    constructor(...e) {
        super(...e),
            L(this, "handleActionChanged", (e) => {
                d.Z.setKeybind(k(j({}, this.props.keybind), { action: e }));
            }),
            L(this, "handleShortcutChange", (e) => {
                d.Z.setKeybind(k(j({}, this.props.keybind), { shortcut: e }));
            }),
            L(this, "handleDeleteKeybind", () => {
                d.Z.deleteKeybind(this.props.keybind.id);
            }),
            L(this, "handleEnableDisable", () => {
                let { keybind: e } = this.props;
                d.Z.setKeybind(k(j({}, this.props.keybind), { enabled: !e.enabled }));
            });
    }
}
class F extends i.PureComponent {
    get keybindActionTypes() {
        let {
                overlaySupported: e,
                canGoLive: t,
                allowSoundboard: n,
                enableClips: r,
                enableScreenshotKeybind: i,
            } = this.props,
            a = E.Z.getCurrentConfig({ location: "UserSettingsKeybinds" }, { autoTrackExposure: !1 }).separateKeybind
                ? [
                      {
                          id: "vad-priority",
                          value: P.kg4.VAD_PRIORITY,
                          label: R.intl.string(R.t["49d6Nd"]),
                      },
                  ]
                : [],
            o = [
                {
                    id: "unassigned",
                    value: P.kg4.UNASSIGNED,
                    label: R.intl.string(R.t["0Uh579"]),
                },
                {
                    id: "push-to-talk",
                    value: P.kg4.PUSH_TO_TALK,
                    label: R.intl.string(R.t.Y5lgTP),
                },
                {
                    id: "push-to-talk-priority",
                    value: P.kg4.PUSH_TO_TALK_PRIORITY,
                    label: R.intl.string(R.t.DkSwJ2),
                },
                {
                    id: "push-to-mute",
                    value: P.kg4.PUSH_TO_MUTE,
                    label: R.intl.string(R.t.hSCRqd),
                },
                ...a,
                {
                    id: "toggle-mute",
                    value: P.kg4.TOGGLE_MUTE,
                    label: R.intl.string(R.t.PlkYKD),
                },
                {
                    id: "toggle-deafen",
                    value: P.kg4.TOGGLE_DEAFEN,
                    label: R.intl.string(R.t.NvGq1K),
                },
                {
                    id: "toggle-voice-mode",
                    value: P.kg4.TOGGLE_VOICE_MODE,
                    label: R.intl.string(R.t.Wa5H9S),
                },
                {
                    id: "toggle-streamer-mode",
                    value: P.kg4.TOGGLE_STREAMER_MODE,
                    label: R.intl.string(R.t.BK0Ncc),
                },
            ];
        return (
            (0, b.l)() &&
                o.push({
                    id: "toggle-camera",
                    value: P.kg4.TOGGLE_CAMERA,
                    label: R.intl.string(R.t.hf8JVT),
                }),
            e &&
                (o.push({
                    id: "toggle-overlay-input-lock",
                    value: P.kg4.TOGGLE_OVERLAY_INPUT_LOCK,
                    label: R.intl.string(R.t.VsAZcC),
                }),
                o.push({
                    id: "activate-overlay-region-text-widget",
                    value: P.kg4.OVERLAY_ACTIVATE_REGION_TEXT_WIDGET,
                    label: R.intl.string(R.t.hurHWo),
                })),
            t &&
                ((0, T.isWindows)() || v.Z.getUseSystemScreensharePicker()) &&
                o.push({
                    id: "toggle-go-live-streaming",
                    value: P.kg4.TOGGLE_GO_LIVE_STREAMING,
                    label: R.intl.string(R.t.ybdjJD),
                }),
            (0, T.isDesktop)() &&
                (o.push(
                    {
                        id: "navigate-back",
                        value: P.kg4.NAVIGATE_BACK,
                        label: R.intl.string(R.t.gRSaOa),
                    },
                    {
                        id: "navigate-forward",
                        value: P.kg4.NAVIGATE_FORWARD,
                        label: R.intl.string(R.t.zOXpjU),
                    },
                    {
                        id: "switch-to-voice-channel",
                        value: P.kg4.SWITCH_TO_VOICE_CHANNEL,
                        label: R.intl.string(R.t.ty7Lxy),
                    },
                    {
                        id: "disconnect-from-voice-channel",
                        value: P.kg4.DISCONNECT_FROM_VOICE_CHANNEL,
                        label: R.intl.string(R.t.CV7mT7),
                    },
                ),
                n &&
                    o.push(
                        {
                            id: "soundboard",
                            value: P.kg4.SOUNDBOARD,
                            label: R.intl.string(R.t.yPH4xm),
                        },
                        {
                            id: "soundboard-hold",
                            value: P.kg4.SOUNDBOARD_HOLD,
                            label: R.intl.string(R.t["1xFbP/"]),
                        },
                    ),
                r &&
                    (o.push({
                        id: "save-clip",
                        value: P.kg4.SAVE_CLIP,
                        label: R.intl.string(R.t.U4URzP),
                    }),
                    i &&
                        o.push({
                            id: "save-screenshot",
                            value: P.kg4.SAVE_SCREENSHOT,
                            label: R.intl.string(R.t["+WloFH"]),
                        }))),
            o
        );
    }
    get keybindDescriptions() {
        let { overlaySupported: e, canGoLive: t, enableClips: n, enableScreenshotKeybind: r } = this.props,
            i = {
                [P.kg4.UNASSIGNED]: R.intl.string(R.t.rvlNLv),
                [P.kg4.PUSH_TO_MUTE]: R.intl.string(R.t.xtESim),
                [P.kg4.PUSH_TO_TALK]: R.intl.string(R.t.wTcBSy),
                [P.kg4.PUSH_TO_TALK_PRIORITY]: R.intl.string(R.t.FhHvWH),
                [P.kg4.TOGGLE_MUTE]: R.intl.string(R.t.X2fbUm),
                [P.kg4.TOGGLE_DEAFEN]: R.intl.string(R.t.MjREZV),
                [P.kg4.TOGGLE_VOICE_MODE]: R.intl.string(R.t.snm5YW),
                [P.kg4.TOGGLE_STREAMER_MODE]: R.intl.string(R.t.YszLLx),
            };
        return (
            E.Z.getCurrentConfig({ location: "UserSettingsKeybinds" }, { autoTrackExposure: !1 }).separateKeybind &&
                (i[P.kg4.VAD_PRIORITY] = R.intl.string(R.t.rSe8IZ)),
            (0, b.l)() && (i[P.kg4.TOGGLE_CAMERA] = R.intl.string(R.t.v1JBtL)),
            e && (i[P.kg4.TOGGLE_OVERLAY_INPUT_LOCK] = R.intl.string(R.t.IoP5vc)),
            t && (0, T.isWindows)() && (i[P.kg4.TOGGLE_GO_LIVE_STREAMING] = R.intl.string(R.t.s4C238)),
            (0, T.isDesktop)() &&
                ((i[P.kg4.NAVIGATE_BACK] = R.intl.string(R.t.nKDlEt)),
                (i[P.kg4.NAVIGATE_FORWARD] = R.intl.string(R.t.DK0FFk)),
                (i[P.kg4.SOUNDBOARD] = (0, T.isWindows)() ? R.intl.string(R.t["5wJefL"]) : R.intl.string(R.t.gzjsSP)),
                (i[P.kg4.SOUNDBOARD_HOLD] = (0, T.isWindows)() ? R.intl.string(R.t.RRkZc9) : R.intl.string(R.t.laNlTl)),
                n &&
                    ((i[P.kg4.SAVE_CLIP] = R.intl.string(R.t.z3Wbam)),
                    r && (i[P.kg4.SAVE_SCREENSHOT] = R.intl.string(R.t.m0zd57)))),
            i
        );
    }
    renderKeybinds(e) {
        return e.map((t, n) =>
            (0, r.jsxs)(
                i.Fragment,
                {
                    children: [
                        (0, r.jsx)(
                            Z,
                            {
                                keybind: t,
                                keybindDescriptions: this.keybindDescriptions,
                                keybindActionTypes: this.keybindActionTypes,
                            },
                            t.id,
                        ),
                        n !== e.length - 1 ? (0, r.jsx)(u.izJ, {}) : null,
                    ],
                },
                t.id,
            ),
        );
    }
    renderKeybindWarning() {
        return (0, r.jsxs)("div", {
            className: D.warning,
            children: [
                (0, r.jsx)(u.d3s, {
                    size: "xs",
                    color: l.Z.colors.ICON_SUBTLE,
                }),
                (0, r.jsx)(u.Text, {
                    variant: "text-sm/medium",
                    color: "text-subtle",
                    children: R.intl.string(R.t.NoKjWP),
                }),
            ],
        });
    }
    render() {
        let { enableClips: e, enableScreenshotKeybind: t } = this.props,
            n = o()(this.props.keybinds)
                .reject(
                    (e) =>
                        e.managed &&
                        ![P.kg4.OVERLAY_ACTIVATE_REGION_TEXT_WIDGET, P.kg4.SAVE_CLIP, P.kg4.SAVE_SCREENSHOT].includes(
                            e.action,
                        ),
                )
                .reject((t) => !e && (t.action === P.kg4.SAVE_CLIP || t.action === P.kg4.SAVE_SCREENSHOT))
                .reject((e) => !t && e.action === P.kg4.SAVE_SCREENSHOT)
                .reject(
                    (e) =>
                        !this.props.allowSoundboard &&
                        (e.action === P.kg4.SOUNDBOARD || e.action === P.kg4.SOUNDBOARD_HOLD),
                )
                .sortBy((e) => e.id)
                .sortBy((e) => (!0 === e.managed ? -1 : 0))
                .value(),
            a = G();
        return (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(N.Z, {
                    title: R.intl.string(R.t.T9DA2K),
                    children: T.isPlatformEmbedded
                        ? (0, r.jsxs)(r.Fragment, {
                              children: [
                                  (0, r.jsxs)("div", {
                                      className: D.ctaContainer,
                                      children: [
                                          this.renderKeybindWarning(),
                                          (0, r.jsx)("div", {
                                              className: D.addButton,
                                              children: (0, r.jsx)(u.Button, {
                                                  size: "md",
                                                  onClick: this.handleAddKeybind,
                                                  text: R.intl.string(R.t.zk6Xbs),
                                                  variant: "primary",
                                              }),
                                          }),
                                      ],
                                  }),
                                  (0, r.jsx)(O.Z, {
                                      className: D.systemServiceUpsell,
                                      sourcePage: "keybinds",
                                  }),
                                  n.length > 0 &&
                                      (0, r.jsxs)(r.Fragment, {
                                          children: [(0, r.jsx)(u.izJ, {}), this.renderKeybinds(n)],
                                      }),
                              ],
                          })
                        : (0, r.jsx)(u.Wn, {
                              messageType: u.QYI.INFO,
                              className: D.browserNotice,
                              children: R.intl.format(R.t.mPi3F3, { downloadLink: P.EYA.DOWNLOAD }),
                          }),
                }),
                (0, r.jsx)(u.izJ, { className: x.marginBottom60 }),
                (0, r.jsxs)(u.Kqy, {
                    gap: 48,
                    children: [
                        (0, r.jsx)(u.C3N, {
                            label: R.intl.string(R.t.Lz5KHI),
                            children: (0, r.jsx)("div", {
                                className: D.defaultKeybindGroup,
                                children: (0, r.jsxs)("div", {
                                    className: D.defaultKeybind,
                                    children: [
                                        (0, r.jsx)(u.Text, {
                                            variant: "text-md/normal",
                                            children: R.intl.string(R.t.sMWLBj),
                                        }),
                                        (0, r.jsx)("div", {
                                            className: D.defaultKeybindShortcutGroup,
                                            children: (0, r.jsx)(u.M2$, { shortcut: p._.binds["0"] }),
                                        }),
                                    ],
                                }),
                            }),
                        }),
                        (0, r.jsx)(U, {
                            children: (e) =>
                                (0, r.jsx)(r.Fragment, {
                                    children: e.map((e, t) => {
                                        let n = (0, _.UD)(e),
                                            o = (0, _.U6)(e),
                                            s = a[e];
                                        return (0, r.jsx)(
                                            u.C3N,
                                            {
                                                label: n,
                                                description: o,
                                                children: (0, r.jsx)("div", {
                                                    className: D.defaultKeybindGroup,
                                                    children: s.map((e, t) =>
                                                        (0, r.jsxs)(
                                                            i.Fragment,
                                                            {
                                                                children: [
                                                                    0 !== t && (0, r.jsx)(u.izJ, {}),
                                                                    (0, r.jsxs)("div", {
                                                                        className: D.defaultKeybind,
                                                                        children: [
                                                                            (0, r.jsx)(u.Text, {
                                                                                variant: "text-md/normal",
                                                                                children: e.description,
                                                                            }),
                                                                            (0, r.jsx)("div", {
                                                                                className:
                                                                                    D.defaultKeybindShortcutGroup,
                                                                                children: e.binds.map((e) =>
                                                                                    (0, r.jsx)(
                                                                                        u.M2$,
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
            L(this, "handleAddKeybind", () => {
                d.Z.addKeybind();
            });
    }
}
function B() {
    i.useEffect(
        () => (
            d.Z.enableAll(!1),
            () => {
                d.Z.enableAll(!0);
            }
        ),
        [],
    );
    let e = (0, s.e7)([S.ZP], () => S.ZP.getState()),
        t = (0, s.e7)([v.Z], () => (0, g.Z)(v.Z)),
        n = (0, s.e7)([y.Z], () => y.Z.isSupported),
        a = (0, m.w9)(),
        o = (0, m.PP)();
    return (0, r.jsx)(F, {
        keybinds: e,
        canGoLive: t,
        overlaySupported: n,
        allowSoundboard: (0, T.isWindows)(),
        enableClips: a,
        enableScreenshotKeybind: o,
    });
}
