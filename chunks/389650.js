n.d(t, { Z: () => K }), n(953529), n(388685), n(539854);
var r = n(54381),
    i = n(473749),
    a = n(120356),
    o = n.n(a),
    s = n(392711),
    l = n.n(s),
    c = n(442837),
    u = n(692547),
    d = n(199849),
    f = n(481060),
    p = n(660216),
    _ = n(225433),
    m = n(825209),
    h = n(721383),
    g = n(612226),
    E = n(714338),
    b = n(924557),
    y = n(74299),
    O = n(577153),
    v = n(365023),
    S = n(509140),
    I = n(825655),
    T = n(131951),
    C = n(556296),
    A = n(63063),
    N = n(358085),
    P = n(13140),
    R = n(526665),
    D = n(659947),
    w = n(273313),
    x = n(981631),
    L = n(295907),
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
function Z(e) {
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
function F(e, t) {
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
function V(e) {
    let { children: t } = e;
    return t([g.Q2.MESSAGE, g.Q2.NAVIGATION, g.Q2.DND, g.Q2.CHAT, g.Q2.VOICE_AND_VIDEO, g.Q2.MISCELLANEOUS]);
}
function H() {
    return l()((0, g.Rv)())
        .filter((e) => e.description !== j.intl.string(j.t.HnNtEI))
        .groupBy((e) => e.group)
        .value();
}
class Y extends i.PureComponent {
    renderMessage() {
        let { keybind: e } = this.props,
            t = P.BB(e.shortcut);
        return E.Z.hasBind(t)
            ? (0, r.jsx)(f.Wn, {
                  messageType: f.QYI.ERROR,
                  children: j.intl.string(j.t["7lQlw3"]),
              })
            : L.Sp.has(t)
              ? (0, r.jsx)(f.Wn, {
                    messageType: f.QYI.ERROR,
                    children: j.intl.format(j.t.MOIaNd, {
                        keyboardNavArticle: A.Z.getArticleURL(x.BhN.KEYBOARD_NAVIGATION),
                    }),
                })
              : (0, r.jsx)(f.Text, {
                    variant: "text-md/normal",
                    className: M.keybindMessage,
                    children: this.props.keybindDescriptions[e.action],
                });
    }
    render() {
        let { managed: e, enabled: t } = this.props.keybind;
        return (0, r.jsxs)("div", {
            className: o()(M.keybindGroup, { [k.card]: !this.props.isUserSettingsRedesignEnabled }),
            children: [
                !e &&
                    !this.props.isUserSettingsRedesignEnabled &&
                    (0, r.jsx)(_.Z, {
                        "aria-label": j.intl.string(j.t.qEHmmB),
                        className: M.removeKeybindFloating,
                        onClick: this.handleDeleteKeybind,
                    }),
                (0, r.jsxs)("div", {
                    className: M.keybindGroupContent,
                    children: [
                        (0, r.jsx)("div", {
                            className: M.item,
                            children: (0, r.jsx)(d.y6, {
                                label: j.intl.string(j.t.UUpAD6),
                                value: this.props.keybind.action,
                                options: this.props.keybindActionTypes,
                                onChange: this.handleActionChanged,
                                isDisabled: e,
                            }),
                        }),
                        (0, r.jsx)("div", {
                            className: M.item,
                            children: (0, r.jsx)(f.gNt, {
                                label: j.intl.string(j.t["1La4tC"]),
                                children: (0, r.jsx)(m.Z, {
                                    defaultValue: this.props.keybind.shortcut,
                                    onChange: this.handleShortcutChange,
                                }),
                            }),
                        }),
                        !e &&
                            this.props.isUserSettingsRedesignEnabled &&
                            (0, r.jsx)("div", {
                                className: M.removeKeybind,
                                children: (0, r.jsx)(f.hU, {
                                    variant: "icon-only",
                                    onClick: this.handleDeleteKeybind,
                                    icon: f.XHJ,
                                    "aria-label": j.intl.string(j.t.qEHmmB),
                                }),
                            }),
                        (0, r.jsx)("div", {
                            className: M.switch,
                            children: (0, r.jsx)(f.aML, {
                                "data-migration-pending": !0,
                                text: j.intl.string(j.t.uCD7qK),
                                children: (e) =>
                                    (0, r.jsx)(
                                        "div",
                                        F(Z({}, e), {
                                            children: (0, r.jsx)(f.rsf, {
                                                checked: t,
                                                onChange: this.handleEnableDisable,
                                            }),
                                        }),
                                    ),
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
        return e === x.kg4.SWITCH_TO_VOICE_CHANNEL ? (0, r.jsx)(D.Z, { keybind: this.props.keybind }) : void 0;
    }
    constructor(...e) {
        super(...e),
            G(this, "handleActionChanged", (e) => {
                p.Z.setKeybind(F(Z({}, this.props.keybind), { action: e }));
            }),
            G(this, "handleShortcutChange", (e) => {
                p.Z.setKeybind(F(Z({}, this.props.keybind), { shortcut: e }));
            }),
            G(this, "handleDeleteKeybind", () => {
                p.Z.deleteKeybind(this.props.keybind.id);
            }),
            G(this, "handleEnableDisable", () => {
                let { keybind: e } = this.props;
                p.Z.setKeybind(F(Z({}, this.props.keybind), { enabled: !e.enabled }));
            });
    }
}
class W extends i.PureComponent {
    componentDidMount() {
        p.Z.enableAll(!1);
    }
    componentWillUnmount() {
        p.Z.enableAll(!0);
    }
    get keybindActionTypes() {
        let {
                overlaySupported: e,
                canGoLive: t,
                allowSoundboard: n,
                enableClips: r,
                enableScreenshotKeybind: i,
            } = this.props,
            a = O.Z.getCurrentConfig({ location: "UserSettingsKeybinds" }, { autoTrackExposure: !1 }).separateKeybind
                ? [
                      {
                          value: x.kg4.VAD_PRIORITY,
                          label: j.intl.string(j.t["49d6Nd"]),
                      },
                  ]
                : [],
            o = [
                {
                    value: x.kg4.UNASSIGNED,
                    label: j.intl.string(j.t["0Uh579"]),
                },
                {
                    value: x.kg4.PUSH_TO_TALK,
                    label: j.intl.string(j.t.Y5lgTP),
                },
                {
                    value: x.kg4.PUSH_TO_TALK_PRIORITY,
                    label: j.intl.string(j.t.DkSwJ2),
                },
                {
                    value: x.kg4.PUSH_TO_MUTE,
                    label: j.intl.string(j.t.hSCRqd),
                },
                ...a,
                {
                    value: x.kg4.TOGGLE_MUTE,
                    label: j.intl.string(j.t.PlkYKD),
                },
                {
                    value: x.kg4.TOGGLE_DEAFEN,
                    label: j.intl.string(j.t.NvGq1K),
                },
                {
                    value: x.kg4.TOGGLE_VOICE_MODE,
                    label: j.intl.string(j.t.Wa5H9S),
                },
                {
                    value: x.kg4.TOGGLE_STREAMER_MODE,
                    label: j.intl.string(j.t.BK0Ncc),
                },
            ];
        return (
            (0, v.l)() &&
                o.push({
                    value: x.kg4.TOGGLE_CAMERA,
                    label: j.intl.string(j.t.hf8JVT),
                }),
            e &&
                (o.push({
                    value: x.kg4.TOGGLE_OVERLAY_INPUT_LOCK,
                    label: j.intl.string(j.t.VsAZcC),
                }),
                o.push({
                    value: x.kg4.OVERLAY_ACTIVATE_REGION_TEXT_WIDGET,
                    label: j.intl.string(j.t.hurHWo),
                })),
            t &&
                ((0, N.isWindows)() || T.Z.getUseSystemScreensharePicker()) &&
                o.push({
                    value: x.kg4.TOGGLE_GO_LIVE_STREAMING,
                    label: j.intl.string(j.t.ybdjJD),
                }),
            (0, N.isDesktop)() &&
                (o.push(
                    {
                        value: x.kg4.NAVIGATE_BACK,
                        label: j.intl.string(j.t.gRSaOa),
                    },
                    {
                        value: x.kg4.NAVIGATE_FORWARD,
                        label: j.intl.string(j.t.zOXpjU),
                    },
                    {
                        value: x.kg4.SWITCH_TO_VOICE_CHANNEL,
                        label: j.intl.string(j.t.ty7Lxy),
                    },
                    {
                        value: x.kg4.DISCONNECT_FROM_VOICE_CHANNEL,
                        label: j.intl.string(j.t.CV7mT7),
                    },
                ),
                n &&
                    o.push(
                        {
                            value: x.kg4.SOUNDBOARD,
                            label: j.intl.string(j.t.yPH4xm),
                        },
                        {
                            value: x.kg4.SOUNDBOARD_HOLD,
                            label: j.intl.string(j.t["1xFbP/"]),
                        },
                    ),
                r &&
                    (o.push({
                        value: x.kg4.SAVE_CLIP,
                        label: j.intl.string(j.t.U4URzP),
                    }),
                    i &&
                        o.push({
                            value: x.kg4.SAVE_SCREENSHOT,
                            label: j.intl.string(j.t["+WloFH"]),
                        }))),
            o
        );
    }
    get keybindDescriptions() {
        let { overlaySupported: e, canGoLive: t, enableClips: n, enableScreenshotKeybind: r } = this.props,
            i = {
                [x.kg4.UNASSIGNED]: j.intl.string(j.t.rvlNLv),
                [x.kg4.PUSH_TO_MUTE]: j.intl.string(j.t.xtESim),
                [x.kg4.PUSH_TO_TALK]: j.intl.string(j.t.wTcBSy),
                [x.kg4.PUSH_TO_TALK_PRIORITY]: j.intl.string(j.t.FhHvWH),
                [x.kg4.TOGGLE_MUTE]: j.intl.string(j.t.X2fbUm),
                [x.kg4.TOGGLE_DEAFEN]: j.intl.string(j.t.MjREZV),
                [x.kg4.TOGGLE_VOICE_MODE]: j.intl.string(j.t.snm5YW),
                [x.kg4.TOGGLE_STREAMER_MODE]: j.intl.string(j.t.YszLLx),
            };
        return (
            O.Z.getCurrentConfig({ location: "UserSettingsKeybinds" }, { autoTrackExposure: !1 }).separateKeybind &&
                (i[x.kg4.VAD_PRIORITY] = j.intl.string(j.t.rSe8IZ)),
            (0, v.l)() && (i[x.kg4.TOGGLE_CAMERA] = j.intl.string(j.t.v1JBtL)),
            e && (i[x.kg4.TOGGLE_OVERLAY_INPUT_LOCK] = j.intl.string(j.t.IoP5vc)),
            t && (0, N.isWindows)() && (i[x.kg4.TOGGLE_GO_LIVE_STREAMING] = j.intl.string(j.t.s4C238)),
            (0, N.isDesktop)() &&
                ((i[x.kg4.NAVIGATE_BACK] = j.intl.string(j.t.nKDlEt)),
                (i[x.kg4.NAVIGATE_FORWARD] = j.intl.string(j.t.DK0FFk)),
                (i[x.kg4.SOUNDBOARD] = (0, N.isWindows)() ? j.intl.string(j.t["5wJefL"]) : j.intl.string(j.t.gzjsSP)),
                (i[x.kg4.SOUNDBOARD_HOLD] = (0, N.isWindows)() ? j.intl.string(j.t.RRkZc9) : j.intl.string(j.t.laNlTl)),
                n &&
                    ((i[x.kg4.SAVE_CLIP] = j.intl.string(j.t.z3Wbam)),
                    r && (i[x.kg4.SAVE_SCREENSHOT] = j.intl.string(j.t.m0zd57)))),
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
                            Y,
                            {
                                keybind: t,
                                keybindDescriptions: this.keybindDescriptions,
                                keybindActionTypes: this.keybindActionTypes,
                                isUserSettingsRedesignEnabled: this.props.isUserSettingsRedesignEnabled,
                            },
                            t.id,
                        ),
                        n !== e.length - 1 ? (0, r.jsx)(f.izJ, {}) : null,
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
                    color: u.Z.colors.ICON_SUBTLE,
                }),
                (0, r.jsx)(f.Text, {
                    variant: "text-sm/medium",
                    color: "text-subtle",
                    children: j.intl.string(j.t.NoKjWP),
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
                        ![x.kg4.OVERLAY_ACTIVATE_REGION_TEXT_WIDGET, x.kg4.SAVE_CLIP, x.kg4.SAVE_SCREENSHOT].includes(
                            e.action,
                        ),
                )
                .reject((t) => !e && (t.action === x.kg4.SAVE_CLIP || t.action === x.kg4.SAVE_SCREENSHOT))
                .reject((e) => !t && e.action === x.kg4.SAVE_SCREENSHOT)
                .reject(
                    (e) =>
                        !this.props.allowSoundboard &&
                        (e.action === x.kg4.SOUNDBOARD || e.action === x.kg4.SOUNDBOARD_HOLD),
                )
                .sortBy((e) => e.id)
                .sortBy((e) => (!0 === e.managed ? -1 : 0))
                .value(),
            a = H();
        return (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(w.Z, {
                    title: j.intl.string(j.t.T9DA2K),
                    children: N.isPlatformEmbedded
                        ? (0, r.jsxs)(r.Fragment, {
                              children: [
                                  (0, r.jsxs)("div", {
                                      className: M.ctaContainer,
                                      children: [
                                          this.renderKeybindWarning(),
                                          (0, r.jsx)("div", {
                                              className: M.addButton,
                                              children: (0, r.jsx)(f.Button, {
                                                  size: "md",
                                                  onClick: this.handleAddKeybind,
                                                  text: j.intl.string(j.t.zk6Xbs),
                                                  variant: "primary",
                                              }),
                                          }),
                                      ],
                                  }),
                                  (0, r.jsx)(I.Z, {
                                      className: M.systemServiceUpsell,
                                      sourcePage: "keybinds",
                                  }),
                                  (0, r.jsx)(f.izJ, {}),
                                  this.renderKeybinds(n),
                                  this.renderEmpty(n),
                              ],
                          })
                        : (0, r.jsx)(f.Wn, {
                              messageType: f.QYI.INFO,
                              className: M.browserNotice,
                              children: j.intl.format(j.t.mPi3F3, { downloadLink: x.EYA.DOWNLOAD }),
                          }),
                }),
                (0, r.jsx)(f.izJ, { className: U.marginBottom60 }),
                (0, r.jsxs)(f.Kqy, {
                    gap: 48,
                    children: [
                        (0, r.jsx)(f.C3N, {
                            label: j.intl.string(j.t.Lz5KHI),
                            children: (0, r.jsx)("div", {
                                className: M.defaultKeybindGroup,
                                children: (0, r.jsxs)("div", {
                                    className: M.defaultKeybind,
                                    children: [
                                        (0, r.jsx)(f.Text, {
                                            variant: "text-md/normal",
                                            children: j.intl.string(j.t.sMWLBj),
                                        }),
                                        (0, r.jsx)("div", {
                                            className: M.defaultKeybindShortcutGroup,
                                            children: (0, r.jsx)(f.M2$, { shortcut: h._.binds["0"] }),
                                        }),
                                    ],
                                }),
                            }),
                        }),
                        (0, r.jsx)(V, {
                            children: (e) =>
                                (0, r.jsx)(r.Fragment, {
                                    children: e.map((e, t) => {
                                        let n = (0, g.UD)(e),
                                            o = (0, g.U6)(e),
                                            s = a[e];
                                        return (0, r.jsx)(
                                            f.C3N,
                                            {
                                                label: n,
                                                description: o,
                                                children: (0, r.jsx)("div", {
                                                    className: M.defaultKeybindGroup,
                                                    children: s.map((e, t) =>
                                                        (0, r.jsxs)(
                                                            i.Fragment,
                                                            {
                                                                children: [
                                                                    0 !== t && (0, r.jsx)(f.izJ, {}),
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
            G(this, "handleAddKeybind", () => {
                p.Z.addKeybind();
            });
    }
}
function K() {
    let e = (0, c.e7)([C.ZP], () => C.ZP.getState()),
        t = (0, c.e7)([T.Z], () => (0, y.Z)(T.Z)),
        n = (0, c.e7)([S.Z], () => S.Z.isSupported),
        i = (0, b.w9)(),
        a = (0, b.PP)(),
        o = (0, R.wy)("UserSettingsKeybindsConnected");
    return (0, r.jsx)(W, {
        keybinds: e,
        canGoLive: t,
        overlaySupported: n,
        allowSoundboard: (0, N.isWindows)(),
        enableClips: i,
        enableScreenshotKeybind: a,
        isUserSettingsRedesignEnabled: o,
    });
}
