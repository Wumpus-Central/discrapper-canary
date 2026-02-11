n.d(t, { A: () => U }), n(321073);
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
    p = n(541185),
    E = n(168943),
    C = n(680243),
    T = n(843401),
    S = n(430452),
    I = n(532624),
    f = n(975571),
    N = n(723702),
    b = n(350535),
    j = n(958831),
    v = n(790174),
    O = n(652215),
    R = n(650583),
    y = n(985018),
    P = n(924348),
    L = n(473169);
function D(e) {
    let { children: t } = e;
    return t([A.Q_.MESSAGE, A.Q_.NAVIGATION, A.Q_.DND, A.Q_.CHAT, A.Q_.VOICE_AND_VIDEO, A.Q_.MISCELLANEOUS]);
}
class M extends s.PureComponent {
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
            t = b.dI(e.shortcut);
        return g.A.hasBind(t)
            ? (0, i.jsx)(d.po8, { messageType: d.YCn.ERROR, children: y.intl.string(y.t["7lQlw3"]) })
            : R.Yy.has(t)
              ? (0, i.jsx)(d.po8, {
                    messageType: d.YCn.ERROR,
                    children: y.intl.format(y.t.MOIaNd, {
                        keyboardNavArticle: f.A.getArticleURL(O.MVz.KEYBOARD_NAVIGATION),
                    }),
                })
              : (0, i.jsx)(d.Text, {
                    variant: "text-md/normal",
                    className: P.qD,
                    children: this.props.keybindDescriptions[e.action],
                });
    }
    render() {
        let { managed: e, enabled: t } = this.props.keybind;
        return (0, i.jsxs)("div", {
            className: P.YI,
            children: [
                (0, i.jsxs)("div", {
                    className: P.PO,
                    children: [
                        (0, i.jsx)("div", {
                            className: P.AS,
                            children: (0, i.jsx)(d.l6P, {
                                selectionMode: "single",
                                label: y.intl.string(y.t.UUpAD6),
                                value: this.props.keybind.action,
                                options: this.props.keybindActionTypes,
                                onSelectionChange: this.handleActionChanged,
                                disabled: e,
                            }),
                        }),
                        (0, i.jsx)("div", {
                            className: P.AS,
                            children: (0, i.jsx)(d.D0$, {
                                label: y.intl.string(y.t["1La4tC"]),
                                children: (0, i.jsx)(_.A, {
                                    defaultValue: this.props.keybind.shortcut,
                                    onChange: this.handleShortcutChange,
                                }),
                            }),
                        }),
                        !e &&
                            (0, i.jsx)("div", {
                                className: P.d9,
                                children: (0, i.jsx)(d.K0, {
                                    variant: "icon-only",
                                    onClick: this.handleDeleteKeybind,
                                    icon: d.ucK,
                                    "aria-label": y.intl.string(y.t.qEHmmB),
                                }),
                            }),
                        (0, i.jsx)("div", {
                            className: P.ZW,
                            children: (0, i.jsx)(c.m_, {
                                text: y.intl.string(y.t.uCD7qK),
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
        return e === O.hCu.SWITCH_TO_VOICE_CHANNEL ? (0, i.jsx)(j.A, { keybind: this.props.keybind }) : void 0;
    }
}
class G extends s.PureComponent {
    get keybindActionTypes() {
        let {
                overlaySupported: e,
                canGoLive: t,
                allowSoundboard: n,
                enableClips: i,
                enableScreenshotKeybind: s,
            } = this.props,
            a = p.A.getCurrentConfig({ location: "UserSettingsKeybinds" }, { autoTrackExposure: !1 }).separateKeybind
                ? [{ id: "vad-priority", value: O.hCu.VAD_PRIORITY, label: y.intl.string(y.t["49d6Nd"]) }]
                : [],
            l = [
                { id: "unassigned", value: O.hCu.UNASSIGNED, label: y.intl.string(y.t["0Uh579"]) },
                { id: "push-to-talk", value: O.hCu.PUSH_TO_TALK, label: y.intl.string(y.t.Y5lgTP) },
                { id: "push-to-talk-priority", value: O.hCu.PUSH_TO_TALK_PRIORITY, label: y.intl.string(y.t.DkSwJ2) },
                { id: "push-to-mute", value: O.hCu.PUSH_TO_MUTE, label: y.intl.string(y.t.hSCRqd) },
                ...a,
                { id: "toggle-mute", value: O.hCu.TOGGLE_MUTE, label: y.intl.string(y.t.PlkYKD) },
                { id: "toggle-deafen", value: O.hCu.TOGGLE_DEAFEN, label: y.intl.string(y.t.NvGq1K) },
                { id: "toggle-voice-mode", value: O.hCu.TOGGLE_VOICE_MODE, label: y.intl.string(y.t.Wa5H9S) },
                { id: "toggle-streamer-mode", value: O.hCu.TOGGLE_STREAMER_MODE, label: y.intl.string(y.t.BK0Ncc) },
            ];
        return (
            (0, E.L)() && l.push({ id: "toggle-camera", value: O.hCu.TOGGLE_CAMERA, label: y.intl.string(y.t.hf8JVT) }),
            e &&
                (l.push({
                    id: "toggle-overlay-input-lock",
                    value: O.hCu.TOGGLE_OVERLAY_INPUT_LOCK,
                    label: y.intl.string(y.t.VsAZcC),
                }),
                l.push({
                    id: "activate-overlay-region-text-widget",
                    value: O.hCu.OVERLAY_ACTIVATE_REGION_TEXT_WIDGET,
                    label: y.intl.string(y.t.hurHWo),
                })),
            t &&
                ((0, N.isWindows)() || S.Ay.getUseSystemScreensharePicker()) &&
                l.push({
                    id: "toggle-go-live-streaming",
                    value: O.hCu.TOGGLE_GO_LIVE_STREAMING,
                    label: y.intl.string(y.t.ybdjJD),
                }),
            (0, N.isDesktop)() &&
                (l.push(
                    { id: "navigate-back", value: O.hCu.NAVIGATE_BACK, label: y.intl.string(y.t.gRSaOa) },
                    { id: "navigate-forward", value: O.hCu.NAVIGATE_FORWARD, label: y.intl.string(y.t.zOXpjU) },
                    {
                        id: "switch-to-voice-channel",
                        value: O.hCu.SWITCH_TO_VOICE_CHANNEL,
                        label: y.intl.string(y.t.ty7Lxy),
                    },
                    {
                        id: "disconnect-from-voice-channel",
                        value: O.hCu.DISCONNECT_FROM_VOICE_CHANNEL,
                        label: y.intl.string(y.t.CV7mT7),
                    },
                ),
                n &&
                    l.push(
                        { id: "soundboard", value: O.hCu.SOUNDBOARD, label: y.intl.string(y.t.yPH4xm) },
                        { id: "soundboard-hold", value: O.hCu.SOUNDBOARD_HOLD, label: y.intl.string(y.t["1xFbP/"]) },
                    ),
                i &&
                    (l.push({ id: "save-clip", value: O.hCu.SAVE_CLIP, label: y.intl.string(y.t.U4URzP) }),
                    s &&
                        l.push({
                            id: "save-screenshot",
                            value: O.hCu.SAVE_SCREENSHOT,
                            label: y.intl.string(y.t["+WloFH"]),
                        }))),
            l
        );
    }
    get keybindDescriptions() {
        let { overlaySupported: e, canGoLive: t, enableClips: n, enableScreenshotKeybind: i } = this.props,
            s = {
                [O.hCu.UNASSIGNED]: y.intl.string(y.t.rvlNLv),
                [O.hCu.PUSH_TO_MUTE]: y.intl.string(y.t.xtESim),
                [O.hCu.PUSH_TO_TALK]: y.intl.string(y.t.wTcBSy),
                [O.hCu.PUSH_TO_TALK_PRIORITY]: y.intl.string(y.t.FhHvWH),
                [O.hCu.TOGGLE_MUTE]: y.intl.string(y.t.X2fbUm),
                [O.hCu.TOGGLE_DEAFEN]: y.intl.string(y.t.MjREZV),
                [O.hCu.TOGGLE_VOICE_MODE]: y.intl.string(y.t.snm5YW),
                [O.hCu.TOGGLE_STREAMER_MODE]: y.intl.string(y.t.YszLLx),
            };
        return (
            p.A.getCurrentConfig({ location: "UserSettingsKeybinds" }, { autoTrackExposure: !1 }).separateKeybind &&
                (s[O.hCu.VAD_PRIORITY] = y.intl.string(y.t.rSe8IZ)),
            (0, E.L)() && (s[O.hCu.TOGGLE_CAMERA] = y.intl.string(y.t.v1JBtL)),
            e && (s[O.hCu.TOGGLE_OVERLAY_INPUT_LOCK] = y.intl.string(y.t.IoP5vc)),
            t && (0, N.isWindows)() && (s[O.hCu.TOGGLE_GO_LIVE_STREAMING] = y.intl.string(y.t.s4C238)),
            (0, N.isDesktop)() &&
                ((s[O.hCu.NAVIGATE_BACK] = y.intl.string(y.t.nKDlEt)),
                (s[O.hCu.NAVIGATE_FORWARD] = y.intl.string(y.t.DK0FFk)),
                (s[O.hCu.SOUNDBOARD] = (0, N.isWindows)() ? y.intl.string(y.t["5wJefL"]) : y.intl.string(y.t.gzjsSP)),
                (s[O.hCu.SOUNDBOARD_HOLD] = (0, N.isWindows)() ? y.intl.string(y.t.RRkZc9) : y.intl.string(y.t.laNlTl)),
                n &&
                    ((s[O.hCu.SAVE_CLIP] = y.intl.string(y.t.z3Wbam)),
                    i && (s[O.hCu.SAVE_SCREENSHOT] = y.intl.string(y.t.m0zd57)))),
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
                            M,
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
            className: P.$e,
            children: [
                (0, i.jsx)(d.mir, { size: "xs", color: o.A.colors.ICON_SUBTLE }),
                (0, i.jsx)(d.Text, {
                    variant: "text-sm/medium",
                    color: "text-subtle",
                    children: y.intl.string(y.t.NoKjWP),
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
                        ![O.hCu.OVERLAY_ACTIVATE_REGION_TEXT_WIDGET, O.hCu.SAVE_CLIP, O.hCu.SAVE_SCREENSHOT].includes(
                            e.action,
                        ),
                )
                .reject((t) => !e && (t.action === O.hCu.SAVE_CLIP || t.action === O.hCu.SAVE_SCREENSHOT))
                .reject((e) => !t && e.action === O.hCu.SAVE_SCREENSHOT)
                .reject(
                    (e) =>
                        !this.props.allowSoundboard &&
                        (e.action === O.hCu.SOUNDBOARD || e.action === O.hCu.SOUNDBOARD_HOLD),
                )
                .sortBy((e) => e.id)
                .sortBy((e) => (!0 === e.managed ? -1 : 0))
                .value(),
            a = l()((0, A.Bx)())
                .filter((e) => e.description !== y.intl.string(y.t.HnNtEI))
                .groupBy((e) => e.group)
                .value();
        return (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(v.A, {
                    title: y.intl.string(y.t.T9DA2K),
                    className: L.IE,
                    children: N.isPlatformEmbedded
                        ? (0, i.jsxs)(i.Fragment, {
                              children: [
                                  (0, i.jsxs)("div", {
                                      className: P.OQ,
                                      children: [
                                          this.renderKeybindWarning(),
                                          (0, i.jsx)("div", {
                                              className: P.c9,
                                              children: (0, i.jsx)(d.Button, {
                                                  size: "md",
                                                  onClick: this.handleAddKeybind,
                                                  text: y.intl.string(y.t.zk6Xbs),
                                                  variant: "primary",
                                              }),
                                          }),
                                      ],
                                  }),
                                  (0, i.jsx)(T.A, { className: P.Qo, sourcePage: "keybinds" }),
                                  n.length > 0 &&
                                      (0, i.jsxs)(i.Fragment, {
                                          children: [(0, i.jsx)(d.cGx, {}), this.renderKeybinds(n)],
                                      }),
                                  (0, i.jsx)(d.cGx, {}),
                              ],
                          })
                        : (0, i.jsx)(d.po8, {
                              messageType: d.YCn.INFO,
                              className: P.Ly,
                              children: y.intl.format(y.t.mPi3F3, { downloadLink: O.X7G.DOWNLOAD }),
                          }),
                }),
                (0, i.jsxs)(d.BJc, {
                    gap: 48,
                    children: [
                        (0, i.jsx)(d.nVY, {
                            label: y.intl.string(y.t.Lz5KHI),
                            children: (0, i.jsx)("div", {
                                className: P.jh,
                                children: (0, i.jsxs)("div", {
                                    className: P.yZ,
                                    children: [
                                        (0, i.jsx)(d.Text, {
                                            variant: "text-md/normal",
                                            children: y.intl.string(y.t.sMWLBj),
                                        }),
                                        (0, i.jsx)("div", {
                                            className: P.DM,
                                            children: (0, i.jsx)(d.e7I, { shortcut: m.z.binds["0"], className: P.LE }),
                                        }),
                                    ],
                                }),
                            }),
                        }),
                        (0, i.jsx)(D, {
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
                                                    className: P.jh,
                                                    children: r.map((e, t) =>
                                                        (0, i.jsxs)(
                                                            s.Fragment,
                                                            {
                                                                children: [
                                                                    0 !== t && (0, i.jsx)(d.cGx, {}),
                                                                    (0, i.jsxs)("div", {
                                                                        className: P.yZ,
                                                                        children: [
                                                                            (0, i.jsx)(d.Text, {
                                                                                variant: "text-md/normal",
                                                                                children: e.description,
                                                                            }),
                                                                            (0, i.jsx)("div", {
                                                                                className: P.DM,
                                                                                children: e.binds.map((e) =>
                                                                                    (0, i.jsx)(
                                                                                        d.e7I,
                                                                                        {
                                                                                            shortcut: e,
                                                                                            className: P.LE,
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
    let e = (0, r.bG)([I.Ay], () => I.Ay.getState()),
        t = (0, r.bG)([S.Ay], () => (0, x.A)(S.Ay)),
        n = (0, r.bG)([C.A], () => C.A.isSupported),
        a = (0, h.sw)(),
        l = (0, h.BW)();
    return (0, i.jsx)(G, {
        keybinds: e,
        canGoLive: t,
        overlaySupported: n,
        allowSoundboard: (0, N.isWindows)(),
        enableClips: a,
        enableScreenshotKeybind: l,
    });
}
