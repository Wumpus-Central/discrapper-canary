n.d(t, {
    A: () => U,
}),
    n(228524),
    n(896048),
    n(321073);
var i = n(627968),
    s = n(64700),
    l = n(735438),
    r = n.n(l),
    a = n(311907),
    o = n(827734),
    c = n(435371),
    d = n(397927),
    u = n(97260),
    g = n(117178),
    h = n(512513),
    x = n(915967),
    A = n(775121),
    p = n(734066),
    m = n(880144),
    j = n(541185),
    b = n(168943),
    O = n(680243),
    S = n(843401),
    E = n(430452),
    f = n(532624),
    v = n(975571),
    T = n(723702),
    C = n(350535),
    y = n(958831),
    N = n(790174),
    I = n(652215),
    _ = n(650583),
    P = n(985018),
    G = n(924348),
    R = n(473169);

function D(e, t, n) {
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

function L(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            i = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            i.forEach(function (t) {
                D(e, t, n[t]);
            });
    }
    return e;
}

function k(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var i = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, i);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}

function w(e) {
    let { children: t } = e;
    return t([x.Q_.MESSAGE, x.Q_.NAVIGATION, x.Q_.DND, x.Q_.CHAT, x.Q_.VOICE_AND_VIDEO, x.Q_.MISCELLANEOUS]);
}
class V extends s.PureComponent {
    renderMessage() {
        let { keybind: e } = this.props,
            t = C.dI(e.shortcut);
        return A.A.hasBind(t)
            ? (0, i.jsx)(d.po8, {
                  messageType: d.YCn.ERROR,
                  children: P.intl.string(P.t["7lQlw3"]),
              })
            : _.Yy.has(t)
              ? (0, i.jsx)(d.po8, {
                    messageType: d.YCn.ERROR,
                    children: P.intl.format(P.t.MOIaNd, {
                        keyboardNavArticle: v.A.getArticleURL(I.MVz.KEYBOARD_NAVIGATION),
                    }),
                })
              : (0, i.jsx)(d.Text, {
                    variant: "text-md/normal",
                    className: G.qD,
                    children: this.props.keybindDescriptions[e.action],
                });
    }
    render() {
        let { managed: e, enabled: t } = this.props.keybind;
        return (0, i.jsxs)("div", {
            className: G.YI,
            children: [
                (0, i.jsxs)("div", {
                    className: G.PO,
                    children: [
                        (0, i.jsx)("div", {
                            className: G.AS,
                            children: (0, i.jsx)(d.l6P, {
                                selectionMode: "single",
                                label: P.intl.string(P.t.UUpAD6),
                                value: this.props.keybind.action,
                                options: this.props.keybindActionTypes,
                                onSelectionChange: this.handleActionChanged,
                                disabled: e,
                            }),
                        }),
                        (0, i.jsx)("div", {
                            className: G.AS,
                            children: (0, i.jsx)(d.D0$, {
                                label: P.intl.string(P.t["1La4tC"]),
                                children: (0, i.jsx)(g.A, {
                                    defaultValue: this.props.keybind.shortcut,
                                    onChange: this.handleShortcutChange,
                                }),
                            }),
                        }),
                        !e &&
                            (0, i.jsx)("div", {
                                className: G.d9,
                                children: (0, i.jsx)(d.K0, {
                                    variant: "icon-only",
                                    onClick: this.handleDeleteKeybind,
                                    icon: d.ucK,
                                    "aria-label": P.intl.string(P.t.qEHmmB),
                                }),
                            }),
                        (0, i.jsx)("div", {
                            className: G.ZW,
                            children: (0, i.jsx)(c.m_, {
                                text: P.intl.string(P.t.uCD7qK),
                                children: (0, i.jsx)("div", {
                                    children: (0, i.jsx)(d.dOG, {
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
        return e === I.hCu.SWITCH_TO_VOICE_CHANNEL
            ? (0, i.jsx)(y.A, {
                  keybind: this.props.keybind,
              })
            : void 0;
    }
    constructor(...e) {
        super(...e),
            D(this, "handleActionChanged", (e) => {
                u.A.setKeybind(
                    k(L({}, this.props.keybind), {
                        action: e,
                    }),
                );
            }),
            D(this, "handleShortcutChange", (e) => {
                u.A.setKeybind(
                    k(L({}, this.props.keybind), {
                        shortcut: e,
                    }),
                );
            }),
            D(this, "handleDeleteKeybind", () => {
                u.A.deleteKeybind(this.props.keybind.id);
            }),
            D(this, "handleEnableDisable", () => {
                let { keybind: e } = this.props;
                u.A.setKeybind(
                    k(L({}, this.props.keybind), {
                        enabled: !e.enabled,
                    }),
                );
            });
    }
}
class M extends s.PureComponent {
    get keybindActionTypes() {
        let {
                overlaySupported: e,
                canGoLive: t,
                allowSoundboard: n,
                enableClips: i,
                enableScreenshotKeybind: s,
            } = this.props,
            l = j.A.getCurrentConfig(
                {
                    location: "UserSettingsKeybinds",
                },
                {
                    autoTrackExposure: !1,
                },
            ).separateKeybind
                ? [
                      {
                          id: "vad-priority",
                          value: I.hCu.VAD_PRIORITY,
                          label: P.intl.string(P.t["49d6Nd"]),
                      },
                  ]
                : [],
            r = [
                {
                    id: "unassigned",
                    value: I.hCu.UNASSIGNED,
                    label: P.intl.string(P.t["0Uh579"]),
                },
                {
                    id: "push-to-talk",
                    value: I.hCu.PUSH_TO_TALK,
                    label: P.intl.string(P.t.Y5lgTP),
                },
                {
                    id: "push-to-talk-priority",
                    value: I.hCu.PUSH_TO_TALK_PRIORITY,
                    label: P.intl.string(P.t.DkSwJ2),
                },
                {
                    id: "push-to-mute",
                    value: I.hCu.PUSH_TO_MUTE,
                    label: P.intl.string(P.t.hSCRqd),
                },
                ...l,
                {
                    id: "toggle-mute",
                    value: I.hCu.TOGGLE_MUTE,
                    label: P.intl.string(P.t.PlkYKD),
                },
                {
                    id: "toggle-deafen",
                    value: I.hCu.TOGGLE_DEAFEN,
                    label: P.intl.string(P.t.NvGq1K),
                },
                {
                    id: "toggle-voice-mode",
                    value: I.hCu.TOGGLE_VOICE_MODE,
                    label: P.intl.string(P.t.Wa5H9S),
                },
                {
                    id: "toggle-streamer-mode",
                    value: I.hCu.TOGGLE_STREAMER_MODE,
                    label: P.intl.string(P.t.BK0Ncc),
                },
            ];
        return (
            (0, b.L)() &&
                r.push({
                    id: "toggle-camera",
                    value: I.hCu.TOGGLE_CAMERA,
                    label: P.intl.string(P.t.hf8JVT),
                }),
            e &&
                (r.push({
                    id: "toggle-overlay-input-lock",
                    value: I.hCu.TOGGLE_OVERLAY_INPUT_LOCK,
                    label: P.intl.string(P.t.VsAZcC),
                }),
                r.push({
                    id: "activate-overlay-region-text-widget",
                    value: I.hCu.OVERLAY_ACTIVATE_REGION_TEXT_WIDGET,
                    label: P.intl.string(P.t.hurHWo),
                })),
            t &&
                ((0, T.isWindows)() || E.A.getUseSystemScreensharePicker()) &&
                r.push({
                    id: "toggle-go-live-streaming",
                    value: I.hCu.TOGGLE_GO_LIVE_STREAMING,
                    label: P.intl.string(P.t.ybdjJD),
                }),
            (0, T.isDesktop)() &&
                (r.push(
                    {
                        id: "navigate-back",
                        value: I.hCu.NAVIGATE_BACK,
                        label: P.intl.string(P.t.gRSaOa),
                    },
                    {
                        id: "navigate-forward",
                        value: I.hCu.NAVIGATE_FORWARD,
                        label: P.intl.string(P.t.zOXpjU),
                    },
                    {
                        id: "switch-to-voice-channel",
                        value: I.hCu.SWITCH_TO_VOICE_CHANNEL,
                        label: P.intl.string(P.t.ty7Lxy),
                    },
                    {
                        id: "disconnect-from-voice-channel",
                        value: I.hCu.DISCONNECT_FROM_VOICE_CHANNEL,
                        label: P.intl.string(P.t.CV7mT7),
                    },
                ),
                n &&
                    r.push(
                        {
                            id: "soundboard",
                            value: I.hCu.SOUNDBOARD,
                            label: P.intl.string(P.t.yPH4xm),
                        },
                        {
                            id: "soundboard-hold",
                            value: I.hCu.SOUNDBOARD_HOLD,
                            label: P.intl.string(P.t["1xFbP/"]),
                        },
                    ),
                i &&
                    (r.push({
                        id: "save-clip",
                        value: I.hCu.SAVE_CLIP,
                        label: P.intl.string(P.t.U4URzP),
                    }),
                    s &&
                        r.push({
                            id: "save-screenshot",
                            value: I.hCu.SAVE_SCREENSHOT,
                            label: P.intl.string(P.t["+WloFH"]),
                        }))),
            r
        );
    }
    get keybindDescriptions() {
        let { overlaySupported: e, canGoLive: t, enableClips: n, enableScreenshotKeybind: i } = this.props,
            s = {
                [I.hCu.UNASSIGNED]: P.intl.string(P.t.rvlNLv),
                [I.hCu.PUSH_TO_MUTE]: P.intl.string(P.t.xtESim),
                [I.hCu.PUSH_TO_TALK]: P.intl.string(P.t.wTcBSy),
                [I.hCu.PUSH_TO_TALK_PRIORITY]: P.intl.string(P.t.FhHvWH),
                [I.hCu.TOGGLE_MUTE]: P.intl.string(P.t.X2fbUm),
                [I.hCu.TOGGLE_DEAFEN]: P.intl.string(P.t.MjREZV),
                [I.hCu.TOGGLE_VOICE_MODE]: P.intl.string(P.t.snm5YW),
                [I.hCu.TOGGLE_STREAMER_MODE]: P.intl.string(P.t.YszLLx),
            };
        return (
            j.A.getCurrentConfig(
                {
                    location: "UserSettingsKeybinds",
                },
                {
                    autoTrackExposure: !1,
                },
            ).separateKeybind && (s[I.hCu.VAD_PRIORITY] = P.intl.string(P.t.rSe8IZ)),
            (0, b.L)() && (s[I.hCu.TOGGLE_CAMERA] = P.intl.string(P.t.v1JBtL)),
            e && (s[I.hCu.TOGGLE_OVERLAY_INPUT_LOCK] = P.intl.string(P.t.IoP5vc)),
            t && (0, T.isWindows)() && (s[I.hCu.TOGGLE_GO_LIVE_STREAMING] = P.intl.string(P.t.s4C238)),
            (0, T.isDesktop)() &&
                ((s[I.hCu.NAVIGATE_BACK] = P.intl.string(P.t.nKDlEt)),
                (s[I.hCu.NAVIGATE_FORWARD] = P.intl.string(P.t.DK0FFk)),
                (s[I.hCu.SOUNDBOARD] = (0, T.isWindows)() ? P.intl.string(P.t["5wJefL"]) : P.intl.string(P.t.gzjsSP)),
                (s[I.hCu.SOUNDBOARD_HOLD] = (0, T.isWindows)() ? P.intl.string(P.t.RRkZc9) : P.intl.string(P.t.laNlTl)),
                n &&
                    ((s[I.hCu.SAVE_CLIP] = P.intl.string(P.t.z3Wbam)),
                    i && (s[I.hCu.SAVE_SCREENSHOT] = P.intl.string(P.t.m0zd57)))),
            s
        );
    }
    renderKeybinds(e) {
        return e.map((t, n) =>
            (0, i.jsxs)(
                s.Fragment,
                {
                    children: [
                        (0, i.jsx)(
                            V,
                            {
                                keybind: t,
                                keybindDescriptions: this.keybindDescriptions,
                                keybindActionTypes: this.keybindActionTypes,
                            },
                            t.id,
                        ),
                        n !== e.length - 1 ? (0, i.jsx)(d.cGx, {}) : null,
                    ],
                },
                t.id,
            ),
        );
    }
    renderKeybindWarning() {
        return (0, i.jsxs)("div", {
            className: G.$e,
            children: [
                (0, i.jsx)(d.mir, {
                    size: "xs",
                    color: o.A.colors.ICON_SUBTLE,
                }),
                (0, i.jsx)(d.Text, {
                    variant: "text-sm/medium",
                    color: "text-subtle",
                    children: P.intl.string(P.t.NoKjWP),
                }),
            ],
        });
    }
    render() {
        let { enableClips: e, enableScreenshotKeybind: t } = this.props,
            n = r()(this.props.keybinds)
                .reject(
                    (e) =>
                        e.managed &&
                        ![I.hCu.OVERLAY_ACTIVATE_REGION_TEXT_WIDGET, I.hCu.SAVE_CLIP, I.hCu.SAVE_SCREENSHOT].includes(
                            e.action,
                        ),
                )
                .reject((t) => !e && (t.action === I.hCu.SAVE_CLIP || t.action === I.hCu.SAVE_SCREENSHOT))
                .reject((e) => !t && e.action === I.hCu.SAVE_SCREENSHOT)
                .reject(
                    (e) =>
                        !this.props.allowSoundboard &&
                        (e.action === I.hCu.SOUNDBOARD || e.action === I.hCu.SOUNDBOARD_HOLD),
                )
                .sortBy((e) => e.id)
                .sortBy((e) => (!0 === e.managed ? -1 : 0))
                .value(),
            l = r()((0, x.Bx)())
                .filter((e) => e.description !== P.intl.string(P.t.HnNtEI))
                .groupBy((e) => e.group)
                .value();
        return (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(N.A, {
                    title: P.intl.string(P.t.T9DA2K),
                    className: R.IE,
                    children: T.isPlatformEmbedded
                        ? (0, i.jsxs)(i.Fragment, {
                              children: [
                                  (0, i.jsxs)("div", {
                                      className: G.OQ,
                                      children: [
                                          this.renderKeybindWarning(),
                                          (0, i.jsx)("div", {
                                              className: G.c9,
                                              children: (0, i.jsx)(d.Button, {
                                                  size: "md",
                                                  onClick: this.handleAddKeybind,
                                                  text: P.intl.string(P.t.zk6Xbs),
                                                  variant: "primary",
                                              }),
                                          }),
                                      ],
                                  }),
                                  (0, i.jsx)(S.A, {
                                      className: G.Qo,
                                      sourcePage: "keybinds",
                                  }),
                                  n.length > 0 &&
                                      (0, i.jsxs)(i.Fragment, {
                                          children: [(0, i.jsx)(d.cGx, {}), this.renderKeybinds(n)],
                                      }),
                                  (0, i.jsx)(d.cGx, {}),
                              ],
                          })
                        : (0, i.jsx)(d.po8, {
                              messageType: d.YCn.INFO,
                              className: G.Ly,
                              children: P.intl.format(P.t.mPi3F3, {
                                  downloadLink: I.X7G.DOWNLOAD,
                              }),
                          }),
                }),
                (0, i.jsxs)(d.BJc, {
                    gap: 48,
                    children: [
                        (0, i.jsx)(d.nVY, {
                            label: P.intl.string(P.t.Lz5KHI),
                            children: (0, i.jsx)("div", {
                                className: G.jh,
                                children: (0, i.jsxs)("div", {
                                    className: G.yZ,
                                    children: [
                                        (0, i.jsx)(d.Text, {
                                            variant: "text-md/normal",
                                            children: P.intl.string(P.t.sMWLBj),
                                        }),
                                        (0, i.jsx)("div", {
                                            className: G.DM,
                                            children: (0, i.jsx)(d.e7I, {
                                                shortcut: h.z.binds["0"],
                                            }),
                                        }),
                                    ],
                                }),
                            }),
                        }),
                        (0, i.jsx)(w, {
                            children: (e) =>
                                (0, i.jsx)(i.Fragment, {
                                    children: e.map((e, t) => {
                                        let n = (0, x.Gm)(e),
                                            r = (0, x.zF)(e),
                                            a = l[e];
                                        return (0, i.jsx)(
                                            d.nVY,
                                            {
                                                label: n,
                                                description: r,
                                                children: (0, i.jsx)("div", {
                                                    className: G.jh,
                                                    children: a.map((e, t) =>
                                                        (0, i.jsxs)(
                                                            s.Fragment,
                                                            {
                                                                children: [
                                                                    0 !== t && (0, i.jsx)(d.cGx, {}),
                                                                    (0, i.jsxs)("div", {
                                                                        className: G.yZ,
                                                                        children: [
                                                                            (0, i.jsx)(d.Text, {
                                                                                variant: "text-md/normal",
                                                                                children: e.description,
                                                                            }),
                                                                            (0, i.jsx)("div", {
                                                                                className: G.DM,
                                                                                children: e.binds.map((e) =>
                                                                                    (0, i.jsx)(
                                                                                        d.e7I,
                                                                                        {
                                                                                            shortcut: e,
                                                                                        },
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
            D(this, "handleAddKeybind", () => {
                u.A.addKeybind();
            });
    }
}

function U() {
    s.useEffect(
        () => (
            u.A.enableAll(!1),
            () => {
                u.A.enableAll(!0);
            }
        ),
        [],
    );
    let e = (0, a.bG)([f.Ay], () => f.Ay.getState()),
        t = (0, a.bG)([E.A], () => (0, m.A)(E.A)),
        n = (0, a.bG)([O.A], () => O.A.isSupported),
        l = (0, p.sw)(),
        r = (0, p.BW)();
    return (0, i.jsx)(M, {
        keybinds: e,
        canGoLive: t,
        overlaySupported: n,
        allowSoundboard: (0, T.isWindows)(),
        enableClips: l,
        enableScreenshotKeybind: r,
    });
}
