n.d(t, { A: () => P }), n(321073);
var i = n(627968),
    l = n(64700),
    s = n(735438),
    a = n.n(s),
    r = n(311907),
    o = n(827734),
    d = n(435371),
    c = n(397927),
    u = n(97260),
    h = n(117178),
    A = n(512513),
    g = n(915967),
    m = n(775121),
    p = n(734066),
    _ = n(880144),
    x = n(541185),
    f = n(168943),
    E = n(680243),
    C = n(843401),
    I = n(430452),
    S = n(532624),
    b = n(975571),
    N = n(723702),
    T = n(350535),
    j = n(958831),
    v = n(790174),
    y = n(652215),
    R = n(650583),
    O = n(985018),
    L = n(924348),
    D = n(473169);
function M(e) {
    let { children: t } = e;
    return t([g.Q_.MESSAGE, g.Q_.NAVIGATION, g.Q_.DND, g.Q_.CHAT, g.Q_.VOICE_AND_VIDEO, g.Q_.MISCELLANEOUS]);
}
class G extends l.PureComponent {
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
            t = T.dI(e.shortcut);
        return m.A.hasBind(t)
            ? (0, i.jsx)(c.po8, { messageType: c.YCn.ERROR, children: O.intl.string(O.t["7lQlw3"]) })
            : R.Yy.has(t)
              ? (0, i.jsx)(c.po8, {
                    messageType: c.YCn.ERROR,
                    children: O.intl.format(O.t.MOIaNd, {
                        keyboardNavArticle: b.A.getArticleURL(y.MVz.KEYBOARD_NAVIGATION),
                    }),
                })
              : (0, i.jsx)(c.Text, {
                    variant: "text-md/normal",
                    className: L.qD,
                    children: this.props.keybindDescriptions[e.action],
                });
    }
    render() {
        let { managed: e, enabled: t } = this.props.keybind;
        return (0, i.jsxs)("div", {
            className: L.YI,
            children: [
                (0, i.jsxs)("div", {
                    className: L.PO,
                    children: [
                        (0, i.jsx)("div", {
                            className: L.AS,
                            children: (0, i.jsx)(c.l6P, {
                                selectionMode: "single",
                                label: O.intl.string(O.t.UUpAD6),
                                value: this.props.keybind.action,
                                options: this.props.keybindActionTypes,
                                onSelectionChange: this.handleActionChanged,
                                disabled: e,
                            }),
                        }),
                        (0, i.jsx)("div", {
                            className: L.AS,
                            children: (0, i.jsx)(c.D0$, {
                                label: O.intl.string(O.t["1La4tC"]),
                                children: (0, i.jsx)(h.A, {
                                    defaultValue: this.props.keybind.shortcut,
                                    onChange: this.handleShortcutChange,
                                }),
                            }),
                        }),
                        !e &&
                            (0, i.jsx)("div", {
                                className: L.d9,
                                children: (0, i.jsx)(c.K0, {
                                    variant: "icon-only",
                                    onClick: this.handleDeleteKeybind,
                                    icon: c.ucK,
                                    "aria-label": O.intl.string(O.t.qEHmmB),
                                }),
                            }),
                        (0, i.jsx)("div", {
                            className: L.ZW,
                            children: (0, i.jsx)(d.m_, {
                                text: O.intl.string(O.t.uCD7qK),
                                children: (0, i.jsx)("div", {
                                    children: (0, i.jsx)(c.dOG, { checked: t, onChange: this.handleEnableDisable }),
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
        return e === y.hCu.SWITCH_TO_VOICE_CHANNEL ? (0, i.jsx)(j.A, { keybind: this.props.keybind }) : void 0;
    }
}
class U extends l.PureComponent {
    get keybindActionTypes() {
        let {
                overlaySupported: e,
                canGoLive: t,
                allowSoundboard: n,
                enableClips: i,
                enableScreenshotKeybind: l,
            } = this.props,
            s = x.A.getCurrentConfig({ location: "UserSettingsKeybinds" }, { autoTrackExposure: !1 }).separateKeybind
                ? [{ id: "vad-priority", value: y.hCu.VAD_PRIORITY, label: O.intl.string(O.t["49d6Nd"]) }]
                : [],
            a = [
                { id: "unassigned", value: y.hCu.UNASSIGNED, label: O.intl.string(O.t["0Uh579"]) },
                { id: "push-to-talk", value: y.hCu.PUSH_TO_TALK, label: O.intl.string(O.t.Y5lgTP) },
                { id: "push-to-talk-priority", value: y.hCu.PUSH_TO_TALK_PRIORITY, label: O.intl.string(O.t.DkSwJ2) },
                { id: "push-to-mute", value: y.hCu.PUSH_TO_MUTE, label: O.intl.string(O.t.hSCRqd) },
                ...s,
                { id: "toggle-mute", value: y.hCu.TOGGLE_MUTE, label: O.intl.string(O.t.PlkYKD) },
                { id: "toggle-deafen", value: y.hCu.TOGGLE_DEAFEN, label: O.intl.string(O.t.NvGq1K) },
                { id: "toggle-voice-mode", value: y.hCu.TOGGLE_VOICE_MODE, label: O.intl.string(O.t.Wa5H9S) },
                { id: "toggle-streamer-mode", value: y.hCu.TOGGLE_STREAMER_MODE, label: O.intl.string(O.t.BK0Ncc) },
            ];
        return (
            (0, f.L)() && a.push({ id: "toggle-camera", value: y.hCu.TOGGLE_CAMERA, label: O.intl.string(O.t.hf8JVT) }),
            e &&
                (a.push({
                    id: "toggle-overlay-input-lock",
                    value: y.hCu.TOGGLE_OVERLAY_INPUT_LOCK,
                    label: O.intl.string(O.t.VsAZcC),
                }),
                a.push({
                    id: "activate-overlay-region-text-widget",
                    value: y.hCu.OVERLAY_ACTIVATE_REGION_TEXT_WIDGET,
                    label: O.intl.string(O.t.hurHWo),
                })),
            t &&
                ((0, N.isWindows)() || I.A.getUseSystemScreensharePicker()) &&
                a.push({
                    id: "toggle-go-live-streaming",
                    value: y.hCu.TOGGLE_GO_LIVE_STREAMING,
                    label: O.intl.string(O.t.ybdjJD),
                }),
            (0, N.isDesktop)() &&
                (a.push(
                    { id: "navigate-back", value: y.hCu.NAVIGATE_BACK, label: O.intl.string(O.t.gRSaOa) },
                    { id: "navigate-forward", value: y.hCu.NAVIGATE_FORWARD, label: O.intl.string(O.t.zOXpjU) },
                    {
                        id: "switch-to-voice-channel",
                        value: y.hCu.SWITCH_TO_VOICE_CHANNEL,
                        label: O.intl.string(O.t.ty7Lxy),
                    },
                    {
                        id: "disconnect-from-voice-channel",
                        value: y.hCu.DISCONNECT_FROM_VOICE_CHANNEL,
                        label: O.intl.string(O.t.CV7mT7),
                    },
                ),
                n &&
                    a.push(
                        { id: "soundboard", value: y.hCu.SOUNDBOARD, label: O.intl.string(O.t.yPH4xm) },
                        { id: "soundboard-hold", value: y.hCu.SOUNDBOARD_HOLD, label: O.intl.string(O.t["1xFbP/"]) },
                    ),
                i &&
                    (a.push({ id: "save-clip", value: y.hCu.SAVE_CLIP, label: O.intl.string(O.t.U4URzP) }),
                    l &&
                        a.push({
                            id: "save-screenshot",
                            value: y.hCu.SAVE_SCREENSHOT,
                            label: O.intl.string(O.t["+WloFH"]),
                        }))),
            a
        );
    }
    get keybindDescriptions() {
        let { overlaySupported: e, canGoLive: t, enableClips: n, enableScreenshotKeybind: i } = this.props,
            l = {
                [y.hCu.UNASSIGNED]: O.intl.string(O.t.rvlNLv),
                [y.hCu.PUSH_TO_MUTE]: O.intl.string(O.t.xtESim),
                [y.hCu.PUSH_TO_TALK]: O.intl.string(O.t.wTcBSy),
                [y.hCu.PUSH_TO_TALK_PRIORITY]: O.intl.string(O.t.FhHvWH),
                [y.hCu.TOGGLE_MUTE]: O.intl.string(O.t.X2fbUm),
                [y.hCu.TOGGLE_DEAFEN]: O.intl.string(O.t.MjREZV),
                [y.hCu.TOGGLE_VOICE_MODE]: O.intl.string(O.t.snm5YW),
                [y.hCu.TOGGLE_STREAMER_MODE]: O.intl.string(O.t.YszLLx),
            };
        return (
            x.A.getCurrentConfig({ location: "UserSettingsKeybinds" }, { autoTrackExposure: !1 }).separateKeybind &&
                (l[y.hCu.VAD_PRIORITY] = O.intl.string(O.t.rSe8IZ)),
            (0, f.L)() && (l[y.hCu.TOGGLE_CAMERA] = O.intl.string(O.t.v1JBtL)),
            e && (l[y.hCu.TOGGLE_OVERLAY_INPUT_LOCK] = O.intl.string(O.t.IoP5vc)),
            t && (0, N.isWindows)() && (l[y.hCu.TOGGLE_GO_LIVE_STREAMING] = O.intl.string(O.t.s4C238)),
            (0, N.isDesktop)() &&
                ((l[y.hCu.NAVIGATE_BACK] = O.intl.string(O.t.nKDlEt)),
                (l[y.hCu.NAVIGATE_FORWARD] = O.intl.string(O.t.DK0FFk)),
                (l[y.hCu.SOUNDBOARD] = (0, N.isWindows)() ? O.intl.string(O.t["5wJefL"]) : O.intl.string(O.t.gzjsSP)),
                (l[y.hCu.SOUNDBOARD_HOLD] = (0, N.isWindows)() ? O.intl.string(O.t.RRkZc9) : O.intl.string(O.t.laNlTl)),
                n &&
                    ((l[y.hCu.SAVE_CLIP] = O.intl.string(O.t.z3Wbam)),
                    i && (l[y.hCu.SAVE_SCREENSHOT] = O.intl.string(O.t.m0zd57)))),
            l
        );
    }
    handleAddKeybind = () => {
        u.A.addKeybind();
    };
    renderKeybinds(e) {
        return e.map((t, n) =>
            (0, i.jsxs)(
                l.Fragment,
                {
                    children: [
                        (0, i.jsx)(
                            G,
                            {
                                keybind: t,
                                keybindDescriptions: this.keybindDescriptions,
                                keybindActionTypes: this.keybindActionTypes,
                            },
                            t.id,
                        ),
                        n !== e.length - 1 ? (0, i.jsx)(c.cGx, {}) : null,
                    ],
                },
                t.id,
            ),
        );
    }
    renderKeybindWarning() {
        return (0, i.jsxs)("div", {
            className: L.$e,
            children: [
                (0, i.jsx)(c.mir, { size: "xs", color: o.A.colors.ICON_SUBTLE }),
                (0, i.jsx)(c.Text, {
                    variant: "text-sm/medium",
                    color: "text-subtle",
                    children: O.intl.string(O.t.NoKjWP),
                }),
            ],
        });
    }
    render() {
        let { enableClips: e, enableScreenshotKeybind: t } = this.props,
            n = a()(this.props.keybinds)
                .reject(
                    (e) =>
                        e.managed &&
                        ![y.hCu.OVERLAY_ACTIVATE_REGION_TEXT_WIDGET, y.hCu.SAVE_CLIP, y.hCu.SAVE_SCREENSHOT].includes(
                            e.action,
                        ),
                )
                .reject((t) => !e && (t.action === y.hCu.SAVE_CLIP || t.action === y.hCu.SAVE_SCREENSHOT))
                .reject((e) => !t && e.action === y.hCu.SAVE_SCREENSHOT)
                .reject(
                    (e) =>
                        !this.props.allowSoundboard &&
                        (e.action === y.hCu.SOUNDBOARD || e.action === y.hCu.SOUNDBOARD_HOLD),
                )
                .sortBy((e) => e.id)
                .sortBy((e) => (!0 === e.managed ? -1 : 0))
                .value(),
            s = a()((0, g.Bx)())
                .filter((e) => e.description !== O.intl.string(O.t.HnNtEI))
                .groupBy((e) => e.group)
                .value();
        return (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(v.A, {
                    title: O.intl.string(O.t.T9DA2K),
                    className: D.IE,
                    children: N.isPlatformEmbedded
                        ? (0, i.jsxs)(i.Fragment, {
                              children: [
                                  (0, i.jsxs)("div", {
                                      className: L.OQ,
                                      children: [
                                          this.renderKeybindWarning(),
                                          (0, i.jsx)("div", {
                                              className: L.c9,
                                              children: (0, i.jsx)(c.Button, {
                                                  size: "md",
                                                  onClick: this.handleAddKeybind,
                                                  text: O.intl.string(O.t.zk6Xbs),
                                                  variant: "primary",
                                              }),
                                          }),
                                      ],
                                  }),
                                  (0, i.jsx)(C.A, { className: L.Qo, sourcePage: "keybinds" }),
                                  n.length > 0 &&
                                      (0, i.jsxs)(i.Fragment, {
                                          children: [(0, i.jsx)(c.cGx, {}), this.renderKeybinds(n)],
                                      }),
                                  (0, i.jsx)(c.cGx, {}),
                              ],
                          })
                        : (0, i.jsx)(c.po8, {
                              messageType: c.YCn.INFO,
                              className: L.Ly,
                              children: O.intl.format(O.t.mPi3F3, { downloadLink: y.X7G.DOWNLOAD }),
                          }),
                }),
                (0, i.jsxs)(c.BJc, {
                    gap: 48,
                    children: [
                        (0, i.jsx)(c.nVY, {
                            label: O.intl.string(O.t.Lz5KHI),
                            children: (0, i.jsx)("div", {
                                className: L.jh,
                                children: (0, i.jsxs)("div", {
                                    className: L.yZ,
                                    children: [
                                        (0, i.jsx)(c.Text, {
                                            variant: "text-md/normal",
                                            children: O.intl.string(O.t.sMWLBj),
                                        }),
                                        (0, i.jsx)("div", {
                                            className: L.DM,
                                            children: (0, i.jsx)(c.e7I, { shortcut: A.z.binds["0"], className: L.LE }),
                                        }),
                                    ],
                                }),
                            }),
                        }),
                        (0, i.jsx)(M, {
                            children: (e) =>
                                (0, i.jsx)(i.Fragment, {
                                    children: e.map((e, t) => {
                                        let n = (0, g.Gm)(e),
                                            a = (0, g.zF)(e),
                                            r = s[e];
                                        return (0, i.jsx)(
                                            c.nVY,
                                            {
                                                label: n,
                                                description: a,
                                                children: (0, i.jsx)("div", {
                                                    className: L.jh,
                                                    children: r.map((e, t) =>
                                                        (0, i.jsxs)(
                                                            l.Fragment,
                                                            {
                                                                children: [
                                                                    0 !== t && (0, i.jsx)(c.cGx, {}),
                                                                    (0, i.jsxs)("div", {
                                                                        className: L.yZ,
                                                                        children: [
                                                                            (0, i.jsx)(c.Text, {
                                                                                variant: "text-md/normal",
                                                                                children: e.description,
                                                                            }),
                                                                            (0, i.jsx)("div", {
                                                                                className: L.DM,
                                                                                children: e.binds.map((e) =>
                                                                                    (0, i.jsx)(
                                                                                        c.e7I,
                                                                                        {
                                                                                            shortcut: e,
                                                                                            className: L.LE,
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
function P() {
    l.useEffect(
        () => (
            u.A.enableAll(!1),
            () => {
                u.A.enableAll(!0);
            }
        ),
        [],
    );
    let e = (0, r.bG)([S.Ay], () => S.Ay.getState()),
        t = (0, r.bG)([I.A], () => (0, _.A)(I.A)),
        n = (0, r.bG)([E.A], () => E.A.isSupported),
        s = (0, p.sw)(),
        a = (0, p.BW)();
    return (0, i.jsx)(U, {
        keybinds: e,
        canGoLive: t,
        overlaySupported: n,
        allowSoundboard: (0, N.isWindows)(),
        enableClips: s,
        enableScreenshotKeybind: a,
    });
}
