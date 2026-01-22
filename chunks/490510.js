n.d(t, { A: () => B }), n(228524), n(896048), n(321073);
var r = n(627968),
    i = n(64700),
    a = n(735438),
    s = n.n(a),
    o = n(311907),
    l = n(827734),
    c = n(435371),
    u = n(397927),
    d = n(97260),
    f = n(117178),
    p = n(512513),
    _ = n(915967),
    h = n(775121),
    m = n(734066),
    g = n(880144),
    E = n(541185),
    b = n(168943),
    y = n(680243),
    O = n(843401),
    A = n(430452),
    v = n(532624),
    S = n(975571),
    I = n(723702),
    T = n(350535),
    C = n(958831),
    N = n(790174),
    R = n(652215),
    w = n(650583),
    P = n(985018),
    D = n(924348),
    x = n(473169);
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
    return t([_.Q_.MESSAGE, _.Q_.NAVIGATION, _.Q_.DND, _.Q_.CHAT, _.Q_.VOICE_AND_VIDEO, _.Q_.MISCELLANEOUS]);
}
function G() {
    return s()((0, _.Bx)())
        .filter((e) => e.description !== P.intl.string(P.t.HnNtEI))
        .groupBy((e) => e.group)
        .value();
}
class V extends i.PureComponent {
    renderMessage() {
        let { keybind: e } = this.props,
            t = T.dI(e.shortcut);
        return h.A.hasBind(t)
            ? (0, r.jsx)(u.po8, {
                  messageType: u.YCn.ERROR,
                  children: P.intl.string(P.t["7lQlw3"]),
              })
            : w.Yy.has(t)
              ? (0, r.jsx)(u.po8, {
                    messageType: u.YCn.ERROR,
                    children: P.intl.format(P.t.MOIaNd, {
                        keyboardNavArticle: S.A.getArticleURL(R.MVz.KEYBOARD_NAVIGATION),
                    }),
                })
              : (0, r.jsx)(u.Text, {
                    variant: "text-md/normal",
                    className: D.qD,
                    children: this.props.keybindDescriptions[e.action],
                });
    }
    render() {
        let { managed: e, enabled: t } = this.props.keybind;
        return (0, r.jsxs)("div", {
            className: D.YI,
            children: [
                (0, r.jsxs)("div", {
                    className: D.PO,
                    children: [
                        (0, r.jsx)("div", {
                            className: D.AS,
                            children: (0, r.jsx)(u.l6P, {
                                selectionMode: "single",
                                label: P.intl.string(P.t.UUpAD6),
                                value: this.props.keybind.action,
                                options: this.props.keybindActionTypes,
                                onSelectionChange: this.handleActionChanged,
                                disabled: e,
                            }),
                        }),
                        (0, r.jsx)("div", {
                            className: D.AS,
                            children: (0, r.jsx)(u.D0$, {
                                label: P.intl.string(P.t["1La4tC"]),
                                children: (0, r.jsx)(f.A, {
                                    defaultValue: this.props.keybind.shortcut,
                                    onChange: this.handleShortcutChange,
                                }),
                            }),
                        }),
                        !e &&
                            (0, r.jsx)("div", {
                                className: D.d9,
                                children: (0, r.jsx)(u.K0, {
                                    variant: "icon-only",
                                    onClick: this.handleDeleteKeybind,
                                    icon: u.ucK,
                                    "aria-label": P.intl.string(P.t.qEHmmB),
                                }),
                            }),
                        (0, r.jsx)("div", {
                            className: D.ZW,
                            children: (0, r.jsx)(c.m_, {
                                text: P.intl.string(P.t.uCD7qK),
                                children: (0, r.jsx)("div", {
                                    children: (0, r.jsx)(u.dOG, {
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
        return e === R.hCu.SWITCH_TO_VOICE_CHANNEL ? (0, r.jsx)(C.A, { keybind: this.props.keybind }) : void 0;
    }
    constructor(...e) {
        super(...e),
            L(this, "handleActionChanged", (e) => {
                d.A.setKeybind(k(j({}, this.props.keybind), { action: e }));
            }),
            L(this, "handleShortcutChange", (e) => {
                d.A.setKeybind(k(j({}, this.props.keybind), { shortcut: e }));
            }),
            L(this, "handleDeleteKeybind", () => {
                d.A.deleteKeybind(this.props.keybind.id);
            }),
            L(this, "handleEnableDisable", () => {
                let { keybind: e } = this.props;
                d.A.setKeybind(k(j({}, this.props.keybind), { enabled: !e.enabled }));
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
            a = E.A.getCurrentConfig({ location: "UserSettingsKeybinds" }, { autoTrackExposure: !1 }).separateKeybind
                ? [
                      {
                          id: "vad-priority",
                          value: R.hCu.VAD_PRIORITY,
                          label: P.intl.string(P.t["49d6Nd"]),
                      },
                  ]
                : [],
            s = [
                {
                    id: "unassigned",
                    value: R.hCu.UNASSIGNED,
                    label: P.intl.string(P.t["0Uh579"]),
                },
                {
                    id: "push-to-talk",
                    value: R.hCu.PUSH_TO_TALK,
                    label: P.intl.string(P.t.Y5lgTP),
                },
                {
                    id: "push-to-talk-priority",
                    value: R.hCu.PUSH_TO_TALK_PRIORITY,
                    label: P.intl.string(P.t.DkSwJ2),
                },
                {
                    id: "push-to-mute",
                    value: R.hCu.PUSH_TO_MUTE,
                    label: P.intl.string(P.t.hSCRqd),
                },
                ...a,
                {
                    id: "toggle-mute",
                    value: R.hCu.TOGGLE_MUTE,
                    label: P.intl.string(P.t.PlkYKD),
                },
                {
                    id: "toggle-deafen",
                    value: R.hCu.TOGGLE_DEAFEN,
                    label: P.intl.string(P.t.NvGq1K),
                },
                {
                    id: "toggle-voice-mode",
                    value: R.hCu.TOGGLE_VOICE_MODE,
                    label: P.intl.string(P.t.Wa5H9S),
                },
                {
                    id: "toggle-streamer-mode",
                    value: R.hCu.TOGGLE_STREAMER_MODE,
                    label: P.intl.string(P.t.BK0Ncc),
                },
            ];
        return (
            (0, b.L)() &&
                s.push({
                    id: "toggle-camera",
                    value: R.hCu.TOGGLE_CAMERA,
                    label: P.intl.string(P.t.hf8JVT),
                }),
            e &&
                (s.push({
                    id: "toggle-overlay-input-lock",
                    value: R.hCu.TOGGLE_OVERLAY_INPUT_LOCK,
                    label: P.intl.string(P.t.VsAZcC),
                }),
                s.push({
                    id: "activate-overlay-region-text-widget",
                    value: R.hCu.OVERLAY_ACTIVATE_REGION_TEXT_WIDGET,
                    label: P.intl.string(P.t.hurHWo),
                })),
            t &&
                ((0, I.isWindows)() || A.A.getUseSystemScreensharePicker()) &&
                s.push({
                    id: "toggle-go-live-streaming",
                    value: R.hCu.TOGGLE_GO_LIVE_STREAMING,
                    label: P.intl.string(P.t.ybdjJD),
                }),
            (0, I.isDesktop)() &&
                (s.push(
                    {
                        id: "navigate-back",
                        value: R.hCu.NAVIGATE_BACK,
                        label: P.intl.string(P.t.gRSaOa),
                    },
                    {
                        id: "navigate-forward",
                        value: R.hCu.NAVIGATE_FORWARD,
                        label: P.intl.string(P.t.zOXpjU),
                    },
                    {
                        id: "switch-to-voice-channel",
                        value: R.hCu.SWITCH_TO_VOICE_CHANNEL,
                        label: P.intl.string(P.t.ty7Lxy),
                    },
                    {
                        id: "disconnect-from-voice-channel",
                        value: R.hCu.DISCONNECT_FROM_VOICE_CHANNEL,
                        label: P.intl.string(P.t.CV7mT7),
                    },
                ),
                n &&
                    s.push(
                        {
                            id: "soundboard",
                            value: R.hCu.SOUNDBOARD,
                            label: P.intl.string(P.t.yPH4xm),
                        },
                        {
                            id: "soundboard-hold",
                            value: R.hCu.SOUNDBOARD_HOLD,
                            label: P.intl.string(P.t["1xFbP/"]),
                        },
                    ),
                r &&
                    (s.push({
                        id: "save-clip",
                        value: R.hCu.SAVE_CLIP,
                        label: P.intl.string(P.t.U4URzP),
                    }),
                    i &&
                        s.push({
                            id: "save-screenshot",
                            value: R.hCu.SAVE_SCREENSHOT,
                            label: P.intl.string(P.t["+WloFH"]),
                        }))),
            s
        );
    }
    get keybindDescriptions() {
        let { overlaySupported: e, canGoLive: t, enableClips: n, enableScreenshotKeybind: r } = this.props,
            i = {
                [R.hCu.UNASSIGNED]: P.intl.string(P.t.rvlNLv),
                [R.hCu.PUSH_TO_MUTE]: P.intl.string(P.t.xtESim),
                [R.hCu.PUSH_TO_TALK]: P.intl.string(P.t.wTcBSy),
                [R.hCu.PUSH_TO_TALK_PRIORITY]: P.intl.string(P.t.FhHvWH),
                [R.hCu.TOGGLE_MUTE]: P.intl.string(P.t.X2fbUm),
                [R.hCu.TOGGLE_DEAFEN]: P.intl.string(P.t.MjREZV),
                [R.hCu.TOGGLE_VOICE_MODE]: P.intl.string(P.t.snm5YW),
                [R.hCu.TOGGLE_STREAMER_MODE]: P.intl.string(P.t.YszLLx),
            };
        return (
            E.A.getCurrentConfig({ location: "UserSettingsKeybinds" }, { autoTrackExposure: !1 }).separateKeybind &&
                (i[R.hCu.VAD_PRIORITY] = P.intl.string(P.t.rSe8IZ)),
            (0, b.L)() && (i[R.hCu.TOGGLE_CAMERA] = P.intl.string(P.t.v1JBtL)),
            e && (i[R.hCu.TOGGLE_OVERLAY_INPUT_LOCK] = P.intl.string(P.t.IoP5vc)),
            t && (0, I.isWindows)() && (i[R.hCu.TOGGLE_GO_LIVE_STREAMING] = P.intl.string(P.t.s4C238)),
            (0, I.isDesktop)() &&
                ((i[R.hCu.NAVIGATE_BACK] = P.intl.string(P.t.nKDlEt)),
                (i[R.hCu.NAVIGATE_FORWARD] = P.intl.string(P.t.DK0FFk)),
                (i[R.hCu.SOUNDBOARD] = (0, I.isWindows)() ? P.intl.string(P.t["5wJefL"]) : P.intl.string(P.t.gzjsSP)),
                (i[R.hCu.SOUNDBOARD_HOLD] = (0, I.isWindows)() ? P.intl.string(P.t.RRkZc9) : P.intl.string(P.t.laNlTl)),
                n &&
                    ((i[R.hCu.SAVE_CLIP] = P.intl.string(P.t.z3Wbam)),
                    r && (i[R.hCu.SAVE_SCREENSHOT] = P.intl.string(P.t.m0zd57)))),
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
                            V,
                            {
                                keybind: t,
                                keybindDescriptions: this.keybindDescriptions,
                                keybindActionTypes: this.keybindActionTypes,
                            },
                            t.id,
                        ),
                        n !== e.length - 1 ? (0, r.jsx)(u.cGx, {}) : null,
                    ],
                },
                t.id,
            ),
        );
    }
    renderKeybindWarning() {
        return (0, r.jsxs)("div", {
            className: D.$e,
            children: [
                (0, r.jsx)(u.mir, {
                    size: "xs",
                    color: l.A.colors.ICON_SUBTLE,
                }),
                (0, r.jsx)(u.Text, {
                    variant: "text-sm/medium",
                    color: "text-subtle",
                    children: P.intl.string(P.t.NoKjWP),
                }),
            ],
        });
    }
    render() {
        let { enableClips: e, enableScreenshotKeybind: t } = this.props,
            n = s()(this.props.keybinds)
                .reject(
                    (e) =>
                        e.managed &&
                        ![R.hCu.OVERLAY_ACTIVATE_REGION_TEXT_WIDGET, R.hCu.SAVE_CLIP, R.hCu.SAVE_SCREENSHOT].includes(
                            e.action,
                        ),
                )
                .reject((t) => !e && (t.action === R.hCu.SAVE_CLIP || t.action === R.hCu.SAVE_SCREENSHOT))
                .reject((e) => !t && e.action === R.hCu.SAVE_SCREENSHOT)
                .reject(
                    (e) =>
                        !this.props.allowSoundboard &&
                        (e.action === R.hCu.SOUNDBOARD || e.action === R.hCu.SOUNDBOARD_HOLD),
                )
                .sortBy((e) => e.id)
                .sortBy((e) => (!0 === e.managed ? -1 : 0))
                .value(),
            a = G();
        return (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(N.A, {
                    title: P.intl.string(P.t.T9DA2K),
                    children: I.isPlatformEmbedded
                        ? (0, r.jsxs)(r.Fragment, {
                              children: [
                                  (0, r.jsxs)("div", {
                                      className: D.OQ,
                                      children: [
                                          this.renderKeybindWarning(),
                                          (0, r.jsx)("div", {
                                              className: D.c9,
                                              children: (0, r.jsx)(u.Button, {
                                                  size: "md",
                                                  onClick: this.handleAddKeybind,
                                                  text: P.intl.string(P.t.zk6Xbs),
                                                  variant: "primary",
                                              }),
                                          }),
                                      ],
                                  }),
                                  (0, r.jsx)(O.A, {
                                      className: D.Qo,
                                      sourcePage: "keybinds",
                                  }),
                                  n.length > 0 &&
                                      (0, r.jsxs)(r.Fragment, {
                                          children: [(0, r.jsx)(u.cGx, {}), this.renderKeybinds(n)],
                                      }),
                              ],
                          })
                        : (0, r.jsx)(u.po8, {
                              messageType: u.YCn.INFO,
                              className: D.Ly,
                              children: P.intl.format(P.t.mPi3F3, { downloadLink: R.X7G.DOWNLOAD }),
                          }),
                }),
                (0, r.jsx)(u.cGx, { className: x.IE }),
                (0, r.jsxs)(u.BJc, {
                    gap: 48,
                    children: [
                        (0, r.jsx)(u.nVY, {
                            label: P.intl.string(P.t.Lz5KHI),
                            children: (0, r.jsx)("div", {
                                className: D.jh,
                                children: (0, r.jsxs)("div", {
                                    className: D.yZ,
                                    children: [
                                        (0, r.jsx)(u.Text, {
                                            variant: "text-md/normal",
                                            children: P.intl.string(P.t.sMWLBj),
                                        }),
                                        (0, r.jsx)("div", {
                                            className: D.DM,
                                            children: (0, r.jsx)(u.e7I, { shortcut: p.z.binds["0"] }),
                                        }),
                                    ],
                                }),
                            }),
                        }),
                        (0, r.jsx)(U, {
                            children: (e) =>
                                (0, r.jsx)(r.Fragment, {
                                    children: e.map((e, t) => {
                                        let n = (0, _.Gm)(e),
                                            s = (0, _.zF)(e),
                                            o = a[e];
                                        return (0, r.jsx)(
                                            u.nVY,
                                            {
                                                label: n,
                                                description: s,
                                                children: (0, r.jsx)("div", {
                                                    className: D.jh,
                                                    children: o.map((e, t) =>
                                                        (0, r.jsxs)(
                                                            i.Fragment,
                                                            {
                                                                children: [
                                                                    0 !== t && (0, r.jsx)(u.cGx, {}),
                                                                    (0, r.jsxs)("div", {
                                                                        className: D.yZ,
                                                                        children: [
                                                                            (0, r.jsx)(u.Text, {
                                                                                variant: "text-md/normal",
                                                                                children: e.description,
                                                                            }),
                                                                            (0, r.jsx)("div", {
                                                                                className: D.DM,
                                                                                children: e.binds.map((e) =>
                                                                                    (0, r.jsx)(
                                                                                        u.e7I,
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
                d.A.addKeybind();
            });
    }
}
function B() {
    i.useEffect(
        () => (
            d.A.enableAll(!1),
            () => {
                d.A.enableAll(!0);
            }
        ),
        [],
    );
    let e = (0, o.bG)([v.Ay], () => v.Ay.getState()),
        t = (0, o.bG)([A.A], () => (0, g.A)(A.A)),
        n = (0, o.bG)([y.A], () => y.A.isSupported),
        a = (0, m.sw)(),
        s = (0, m.BW)();
    return (0, r.jsx)(F, {
        keybinds: e,
        canGoLive: t,
        overlaySupported: n,
        allowSoundboard: (0, I.isWindows)(),
        enableClips: a,
        enableScreenshotKeybind: s,
    });
}
