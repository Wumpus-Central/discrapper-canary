n.d(t, { A: () => G }), n(321073);
var i = n(627968),
    s = n(64700),
    a = n(735438),
    l = n.n(a),
    r = n(311907),
    o = n(827734),
    c = n(435371),
    d = n(397927),
    u = n(97260),
    _ = n(117178),
    m = n(512513),
    A = n(915967),
    g = n(775121),
    h = n(734066),
    x = n(880144),
    p = n(168943),
    E = n(680243),
    C = n(843401),
    T = n(430452),
    S = n(532624),
    I = n(975571),
    f = n(723702),
    N = n(350535),
    b = n(958831),
    j = n(790174),
    v = n(652215),
    O = n(650583),
    R = n(985018),
    y = n(924348),
    P = n(473169);
function L(e) {
    let { children: t } = e;
    return t([A.Q_.MESSAGE, A.Q_.NAVIGATION, A.Q_.DND, A.Q_.CHAT, A.Q_.VOICE_AND_VIDEO, A.Q_.MISCELLANEOUS]);
}
class D extends s.PureComponent {
    handleActionChanged = (e) => {
        u.A.setKeybind({ ...this.props.keybind, action: e });
    };
    handleShortcutChange = (e) => {
        u.A.setKeybind({ ...this.props.keybind, shortcut: e });
    };
    handleDeleteKeybind = () => {
        u.A.deleteKeybind(this.props.keybind.id);
    };
    handleEnableDisable = () => {
        let { keybind: e } = this.props;
        u.A.setKeybind({ ...this.props.keybind, enabled: !e.enabled });
    };
    renderMessage() {
        let { keybind: e } = this.props,
            t = N.dI(e.shortcut);
        return g.A.hasBind(t)
            ? (0, i.jsx)(d.po8, { messageType: d.YCn.ERROR, children: R.intl.string(R.t["7lQlw3"]) })
            : O.Yy.has(t)
              ? (0, i.jsx)(d.po8, {
                    messageType: d.YCn.ERROR,
                    children: R.intl.format(R.t.MOIaNd, {
                        keyboardNavArticle: I.A.getArticleURL(v.MVz.KEYBOARD_NAVIGATION),
                    }),
                })
              : (0, i.jsx)(d.Text, {
                    variant: "text-md/normal",
                    className: y.qD,
                    children: this.props.keybindDescriptions[e.action],
                });
    }
    render() {
        let { managed: e, enabled: t } = this.props.keybind;
        return (0, i.jsxs)("div", {
            className: y.YI,
            children: [
                (0, i.jsxs)("div", {
                    className: y.PO,
                    children: [
                        (0, i.jsx)("div", {
                            className: y.AS,
                            children: (0, i.jsx)(d.l6P, {
                                selectionMode: "single",
                                label: R.intl.string(R.t.UUpAD6),
                                value: this.props.keybind.action,
                                options: this.props.keybindActionTypes,
                                onSelectionChange: this.handleActionChanged,
                                disabled: e,
                            }),
                        }),
                        (0, i.jsx)("div", {
                            className: y.AS,
                            children: (0, i.jsx)(d.D0$, {
                                label: R.intl.string(R.t["1La4tC"]),
                                children: (0, i.jsx)(_.A, {
                                    defaultValue: this.props.keybind.shortcut,
                                    onChange: this.handleShortcutChange,
                                }),
                            }),
                        }),
                        !e &&
                            (0, i.jsx)("div", {
                                className: y.d9,
                                children: (0, i.jsx)(d.K0, {
                                    variant: "icon-only",
                                    onClick: this.handleDeleteKeybind,
                                    icon: d.ucK,
                                    "aria-label": R.intl.string(R.t.qEHmmB),
                                }),
                            }),
                        (0, i.jsx)("div", {
                            className: y.ZW,
                            children: (0, i.jsx)(c.m_, {
                                text: R.intl.string(R.t.uCD7qK),
                                children: (0, i.jsx)("div", {
                                    children: (0, i.jsx)(d.dOG, { checked: t, onChange: this.handleEnableDisable }),
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
        return e === v.hCu.SWITCH_TO_VOICE_CHANNEL ? (0, i.jsx)(b.A, { keybind: this.props.keybind }) : void 0;
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
            a = [
                { id: "unassigned", value: v.hCu.UNASSIGNED, label: R.intl.string(R.t["0Uh579"]) },
                { id: "push-to-talk", value: v.hCu.PUSH_TO_TALK, label: R.intl.string(R.t.Y5lgTP) },
                { id: "push-to-talk-priority", value: v.hCu.PUSH_TO_TALK_PRIORITY, label: R.intl.string(R.t.DkSwJ2) },
                { id: "push-to-mute", value: v.hCu.PUSH_TO_MUTE, label: R.intl.string(R.t.hSCRqd) },
                { id: "vad-priority", value: v.hCu.VAD_PRIORITY, label: R.intl.string(R.t["49d6Nd"]) },
                { id: "toggle-mute", value: v.hCu.TOGGLE_MUTE, label: R.intl.string(R.t.PlkYKD) },
                { id: "toggle-deafen", value: v.hCu.TOGGLE_DEAFEN, label: R.intl.string(R.t.NvGq1K) },
                { id: "toggle-voice-mode", value: v.hCu.TOGGLE_VOICE_MODE, label: R.intl.string(R.t.Wa5H9S) },
                { id: "toggle-streamer-mode", value: v.hCu.TOGGLE_STREAMER_MODE, label: R.intl.string(R.t.BK0Ncc) },
            ];
        return (
            (0, p.L)() && a.push({ id: "toggle-camera", value: v.hCu.TOGGLE_CAMERA, label: R.intl.string(R.t.hf8JVT) }),
            e &&
                (a.push({
                    id: "toggle-overlay-input-lock",
                    value: v.hCu.TOGGLE_OVERLAY_INPUT_LOCK,
                    label: R.intl.string(R.t.VsAZcC),
                }),
                a.push({
                    id: "activate-overlay-region-text-widget",
                    value: v.hCu.OVERLAY_ACTIVATE_REGION_TEXT_WIDGET,
                    label: R.intl.string(R.t.hurHWo),
                })),
            t &&
                ((0, f.isWindows)() || T.Ay.getUseSystemScreensharePicker()) &&
                a.push({
                    id: "toggle-go-live-streaming",
                    value: v.hCu.TOGGLE_GO_LIVE_STREAMING,
                    label: R.intl.string(R.t.ybdjJD),
                }),
            (0, f.isDesktop)() &&
                (a.push(
                    { id: "navigate-back", value: v.hCu.NAVIGATE_BACK, label: R.intl.string(R.t.gRSaOa) },
                    { id: "navigate-forward", value: v.hCu.NAVIGATE_FORWARD, label: R.intl.string(R.t.zOXpjU) },
                    {
                        id: "switch-to-voice-channel",
                        value: v.hCu.SWITCH_TO_VOICE_CHANNEL,
                        label: R.intl.string(R.t.ty7Lxy),
                    },
                    {
                        id: "disconnect-from-voice-channel",
                        value: v.hCu.DISCONNECT_FROM_VOICE_CHANNEL,
                        label: R.intl.string(R.t.CV7mT7),
                    },
                ),
                n &&
                    a.push(
                        { id: "soundboard", value: v.hCu.SOUNDBOARD, label: R.intl.string(R.t.yPH4xm) },
                        { id: "soundboard-hold", value: v.hCu.SOUNDBOARD_HOLD, label: R.intl.string(R.t["1xFbP/"]) },
                    ),
                i &&
                    (a.push({ id: "save-clip", value: v.hCu.SAVE_CLIP, label: R.intl.string(R.t.U4URzP) }),
                    s &&
                        a.push({
                            id: "save-screenshot",
                            value: v.hCu.SAVE_SCREENSHOT,
                            label: R.intl.string(R.t["+WloFH"]),
                        }))),
            a
        );
    }
    get keybindDescriptions() {
        let { overlaySupported: e, canGoLive: t, enableClips: n, enableScreenshotKeybind: i } = this.props,
            s = {
                [v.hCu.UNASSIGNED]: R.intl.string(R.t.rvlNLv),
                [v.hCu.PUSH_TO_MUTE]: R.intl.string(R.t.xtESim),
                [v.hCu.PUSH_TO_TALK]: R.intl.string(R.t.wTcBSy),
                [v.hCu.PUSH_TO_TALK_PRIORITY]: R.intl.string(R.t.FhHvWH),
                [v.hCu.TOGGLE_MUTE]: R.intl.string(R.t.X2fbUm),
                [v.hCu.TOGGLE_DEAFEN]: R.intl.string(R.t.MjREZV),
                [v.hCu.TOGGLE_VOICE_MODE]: R.intl.string(R.t.snm5YW),
                [v.hCu.TOGGLE_STREAMER_MODE]: R.intl.string(R.t.YszLLx),
                [v.hCu.VAD_PRIORITY]: R.intl.string(R.t.rSe8IZ),
            };
        return (
            (0, p.L)() && (s[v.hCu.TOGGLE_CAMERA] = R.intl.string(R.t.v1JBtL)),
            e && (s[v.hCu.TOGGLE_OVERLAY_INPUT_LOCK] = R.intl.string(R.t.IoP5vc)),
            t && (0, f.isWindows)() && (s[v.hCu.TOGGLE_GO_LIVE_STREAMING] = R.intl.string(R.t.s4C238)),
            (0, f.isDesktop)() &&
                ((s[v.hCu.NAVIGATE_BACK] = R.intl.string(R.t.nKDlEt)),
                (s[v.hCu.NAVIGATE_FORWARD] = R.intl.string(R.t.DK0FFk)),
                (s[v.hCu.SOUNDBOARD] = (0, f.isWindows)() ? R.intl.string(R.t["5wJefL"]) : R.intl.string(R.t.gzjsSP)),
                (s[v.hCu.SOUNDBOARD_HOLD] = (0, f.isWindows)() ? R.intl.string(R.t.RRkZc9) : R.intl.string(R.t.laNlTl)),
                n &&
                    ((s[v.hCu.SAVE_CLIP] = R.intl.string(R.t.z3Wbam)),
                    i && (s[v.hCu.SAVE_SCREENSHOT] = R.intl.string(R.t.m0zd57)))),
            s
        );
    }
    handleAddKeybind = () => {
        u.A.addKeybind();
    };
    renderKeybinds(e) {
        return e.map((t, n) =>
            (0, i.jsxs)(
                s.Fragment,
                {
                    children: [
                        (0, i.jsx)(
                            D,
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
            className: y.$e,
            children: [
                (0, i.jsx)(d.mir, { size: "xs", color: o.A.colors.ICON_SUBTLE }),
                (0, i.jsx)(d.Text, {
                    variant: "text-sm/medium",
                    color: "text-subtle",
                    children: R.intl.string(R.t.NoKjWP),
                }),
            ],
        });
    }
    render() {
        let { enableClips: e, enableScreenshotKeybind: t } = this.props,
            n = l()(this.props.keybinds)
                .reject(
                    (e) =>
                        e.managed &&
                        ![v.hCu.OVERLAY_ACTIVATE_REGION_TEXT_WIDGET, v.hCu.SAVE_CLIP, v.hCu.SAVE_SCREENSHOT].includes(
                            e.action,
                        ),
                )
                .reject((t) => !e && (t.action === v.hCu.SAVE_CLIP || t.action === v.hCu.SAVE_SCREENSHOT))
                .reject((e) => !t && e.action === v.hCu.SAVE_SCREENSHOT)
                .reject(
                    (e) =>
                        !this.props.allowSoundboard &&
                        (e.action === v.hCu.SOUNDBOARD || e.action === v.hCu.SOUNDBOARD_HOLD),
                )
                .sortBy((e) => e.id)
                .sortBy((e) => (!0 === e.managed ? -1 : 0))
                .value(),
            a = l()((0, A.Bx)())
                .filter((e) => e.description !== R.intl.string(R.t.HnNtEI))
                .groupBy((e) => e.group)
                .value();
        return (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(j.A, {
                    title: R.intl.string(R.t.T9DA2K),
                    className: P.IE,
                    children: f.isPlatformEmbedded
                        ? (0, i.jsxs)(i.Fragment, {
                              children: [
                                  (0, i.jsxs)("div", {
                                      className: y.OQ,
                                      children: [
                                          this.renderKeybindWarning(),
                                          (0, i.jsx)("div", {
                                              className: y.c9,
                                              children: (0, i.jsx)(d.Button, {
                                                  size: "md",
                                                  onClick: this.handleAddKeybind,
                                                  text: R.intl.string(R.t.zk6Xbs),
                                                  variant: "primary",
                                              }),
                                          }),
                                      ],
                                  }),
                                  (0, i.jsx)(C.A, { className: y.Qo, sourcePage: "keybinds" }),
                                  n.length > 0 &&
                                      (0, i.jsxs)(i.Fragment, {
                                          children: [(0, i.jsx)(d.cGx, {}), this.renderKeybinds(n)],
                                      }),
                                  (0, i.jsx)(d.cGx, {}),
                              ],
                          })
                        : (0, i.jsx)(d.po8, {
                              messageType: d.YCn.INFO,
                              className: y.Ly,
                              children: R.intl.format(R.t.mPi3F3, { downloadLink: v.X7G.DOWNLOAD }),
                          }),
                }),
                (0, i.jsxs)(d.BJc, {
                    gap: 48,
                    children: [
                        (0, i.jsx)(d.nVY, {
                            label: R.intl.string(R.t.Lz5KHI),
                            children: (0, i.jsx)("div", {
                                className: y.jh,
                                children: (0, i.jsxs)("div", {
                                    className: y.yZ,
                                    children: [
                                        (0, i.jsx)(d.Text, {
                                            variant: "text-md/normal",
                                            children: R.intl.string(R.t.sMWLBj),
                                        }),
                                        (0, i.jsx)("div", {
                                            className: y.DM,
                                            children: (0, i.jsx)(d.e7I, { shortcut: m.z.binds["0"], className: y.LE }),
                                        }),
                                    ],
                                }),
                            }),
                        }),
                        (0, i.jsx)(L, {
                            children: (e) =>
                                (0, i.jsx)(i.Fragment, {
                                    children: e.map((e, t) => {
                                        let n = (0, A.Gm)(e),
                                            l = (0, A.zF)(e),
                                            r = a[e];
                                        return (0, i.jsx)(
                                            d.nVY,
                                            {
                                                label: n,
                                                description: l,
                                                children: (0, i.jsx)("div", {
                                                    className: y.jh,
                                                    children: r.map((e, t) =>
                                                        (0, i.jsxs)(
                                                            s.Fragment,
                                                            {
                                                                children: [
                                                                    0 !== t && (0, i.jsx)(d.cGx, {}),
                                                                    (0, i.jsxs)("div", {
                                                                        className: y.yZ,
                                                                        children: [
                                                                            (0, i.jsx)(d.Text, {
                                                                                variant: "text-md/normal",
                                                                                children: e.description,
                                                                            }),
                                                                            (0, i.jsx)("div", {
                                                                                className: y.DM,
                                                                                children: e.binds.map((e) =>
                                                                                    (0, i.jsx)(
                                                                                        d.e7I,
                                                                                        {
                                                                                            shortcut: e,
                                                                                            className: y.LE,
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
}
function G() {
    s.useEffect(
        () => (
            u.A.enableAll(!1),
            () => {
                u.A.enableAll(!0);
            }
        ),
        [],
    );
    let e = (0, r.bG)([S.Ay], () => S.Ay.getState()),
        t = (0, r.bG)([T.Ay], () => (0, x.A)(T.Ay)),
        n = (0, r.bG)([E.A], () => E.A.isSupported),
        a = (0, h.sw)(),
        l = (0, h.BW)();
    return (0, i.jsx)(M, {
        keybinds: e,
        canGoLive: t,
        overlaySupported: n,
        allowSoundboard: (0, f.isWindows)(),
        enableClips: a,
        enableScreenshotKeybind: l,
    });
}
