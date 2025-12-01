n.d(t, { Z: () => W }), n(953529), n(388685), n(539854);
var r = n(54381),
    i = n(473749),
    a = n(120356),
    o = n.n(a),
    s = n(392711),
    l = n.n(s),
    c = n(442837),
    u = n(692547),
    d = n(481060),
    f = n(660216),
    p = n(225433),
    _ = n(825209),
    m = n(721383),
    h = n(612226),
    g = n(714338),
    E = n(924557),
    b = n(74299),
    y = n(577153),
    O = n(365023),
    v = n(509140),
    S = n(825655),
    I = n(131951),
    T = n(556296),
    A = n(63063),
    C = n(358085),
    N = n(13140),
    P = n(526665),
    R = n(659947),
    w = n(273313),
    D = n(981631),
    x = n(295907),
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
function B(e, t) {
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
function F(e) {
    let { children: t } = e;
    return t([h.Q2.MESSAGE, h.Q2.NAVIGATION, h.Q2.DND, h.Q2.CHAT, h.Q2.VOICE_AND_VIDEO, h.Q2.MISCELLANEOUS]);
}
function V() {
    return l()((0, h.Rv)())
        .filter((e) => e.description !== L.intl.string(L.t.HnNtEI))
        .groupBy((e) => e.group)
        .value();
}
class H extends i.PureComponent {
    renderMessage() {
        let { keybind: e } = this.props,
            t = N.BB(e.shortcut);
        return g.Z.hasBind(t)
            ? (0, r.jsx)(d.Wn, {
                  messageType: d.QYI.ERROR,
                  children: L.intl.string(L.t["7lQlw3"]),
              })
            : x.Sp.has(t)
              ? (0, r.jsx)(d.Wn, {
                    messageType: d.QYI.ERROR,
                    children: L.intl.format(L.t.MOIaNd, {
                        keyboardNavArticle: A.Z.getArticleURL(D.BhN.KEYBOARD_NAVIGATION),
                    }),
                })
              : (0, r.jsx)(d.Text, {
                    variant: "text-md/normal",
                    className: j.keybindMessage,
                    children: this.props.keybindDescriptions[e.action],
                });
    }
    render() {
        let { managed: e, enabled: t } = this.props.keybind;
        return (0, r.jsxs)("div", {
            className: o()(j.keybindGroup, { [M.card]: !this.props.isUserSettingsRedesignEnabled }),
            children: [
                !e &&
                    !this.props.isUserSettingsRedesignEnabled &&
                    (0, r.jsx)(p.Z, {
                        "aria-label": L.intl.string(L.t.qEHmmB),
                        className: j.removeKeybindFloating,
                        onClick: this.handleDeleteKeybind,
                    }),
                (0, r.jsxs)("div", {
                    className: j.keybindGroupContent,
                    children: [
                        (0, r.jsx)("div", {
                            className: j.item,
                            children: (0, r.jsx)(d.q4e, {
                                label: L.intl.string(L.t.UUpAD6),
                                value: this.props.keybind.action,
                                options: this.props.keybindActionTypes,
                                onChange: this.handleActionChanged,
                                isDisabled: e,
                            }),
                        }),
                        (0, r.jsx)("div", {
                            className: j.item,
                            children: (0, r.jsx)(d.gNt, {
                                label: L.intl.string(L.t["1La4tC"]),
                                children: (0, r.jsx)(_.Z, {
                                    defaultValue: this.props.keybind.shortcut,
                                    onChange: this.handleShortcutChange,
                                }),
                            }),
                        }),
                        !e &&
                            this.props.isUserSettingsRedesignEnabled &&
                            (0, r.jsx)("div", {
                                className: j.removeKeybind,
                                children: (0, r.jsx)(d.hU, {
                                    variant: "icon-only",
                                    onClick: this.handleDeleteKeybind,
                                    icon: d.XHJ,
                                    "aria-label": L.intl.string(L.t.qEHmmB),
                                }),
                            }),
                        (0, r.jsx)("div", {
                            className: j.switch,
                            children: (0, r.jsx)(d.aML, {
                                "data-migration-pending": !0,
                                text: L.intl.string(L.t.uCD7qK),
                                children: (e) =>
                                    (0, r.jsx)(
                                        "div",
                                        B(G({}, e), {
                                            children: (0, r.jsx)(d.rsf, {
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
        return e === D.kg4.SWITCH_TO_VOICE_CHANNEL ? (0, r.jsx)(R.Z, { keybind: this.props.keybind }) : void 0;
    }
    constructor(...e) {
        super(...e),
            U(this, "handleActionChanged", (e) => {
                f.Z.setKeybind(B(G({}, this.props.keybind), { action: e }));
            }),
            U(this, "handleShortcutChange", (e) => {
                f.Z.setKeybind(B(G({}, this.props.keybind), { shortcut: e }));
            }),
            U(this, "handleDeleteKeybind", () => {
                f.Z.deleteKeybind(this.props.keybind.id);
            }),
            U(this, "handleEnableDisable", () => {
                let { keybind: e } = this.props;
                f.Z.setKeybind(B(G({}, this.props.keybind), { enabled: !e.enabled }));
            });
    }
}
class Y extends i.PureComponent {
    componentDidMount() {
        f.Z.enableAll(!1);
    }
    componentWillUnmount() {
        f.Z.enableAll(!0);
    }
    get keybindActionTypes() {
        let {
                overlaySupported: e,
                canGoLive: t,
                allowSoundboard: n,
                enableClips: r,
                enableScreenshotKeybind: i,
            } = this.props,
            a = y.Z.getCurrentConfig({ location: "UserSettingsKeybinds" }, { autoTrackExposure: !1 }).separateKeybind
                ? [
                      {
                          value: D.kg4.VAD_PRIORITY,
                          label: L.intl.string(L.t["49d6Nd"]),
                      },
                  ]
                : [],
            o = [
                {
                    value: D.kg4.UNASSIGNED,
                    label: L.intl.string(L.t["0Uh579"]),
                },
                {
                    value: D.kg4.PUSH_TO_TALK,
                    label: L.intl.string(L.t.Y5lgTP),
                },
                {
                    value: D.kg4.PUSH_TO_TALK_PRIORITY,
                    label: L.intl.string(L.t.DkSwJ2),
                },
                {
                    value: D.kg4.PUSH_TO_MUTE,
                    label: L.intl.string(L.t.hSCRqd),
                },
                ...a,
                {
                    value: D.kg4.TOGGLE_MUTE,
                    label: L.intl.string(L.t.PlkYKD),
                },
                {
                    value: D.kg4.TOGGLE_DEAFEN,
                    label: L.intl.string(L.t.NvGq1K),
                },
                {
                    value: D.kg4.TOGGLE_VOICE_MODE,
                    label: L.intl.string(L.t.Wa5H9S),
                },
                {
                    value: D.kg4.TOGGLE_STREAMER_MODE,
                    label: L.intl.string(L.t.BK0Ncc),
                },
            ];
        return (
            (0, O.l)() &&
                o.push({
                    value: D.kg4.TOGGLE_CAMERA,
                    label: L.intl.string(L.t.hf8JVT),
                }),
            e &&
                (o.push({
                    value: D.kg4.TOGGLE_OVERLAY_INPUT_LOCK,
                    label: L.intl.string(L.t.VsAZcC),
                }),
                o.push({
                    value: D.kg4.OVERLAY_ACTIVATE_REGION_TEXT_WIDGET,
                    label: L.intl.string(L.t.hurHWo),
                })),
            t &&
                ((0, C.isWindows)() || I.Z.getUseSystemScreensharePicker()) &&
                o.push({
                    value: D.kg4.TOGGLE_GO_LIVE_STREAMING,
                    label: L.intl.string(L.t.ybdjJD),
                }),
            (0, C.isDesktop)() &&
                (o.push(
                    {
                        value: D.kg4.NAVIGATE_BACK,
                        label: L.intl.string(L.t.gRSaOa),
                    },
                    {
                        value: D.kg4.NAVIGATE_FORWARD,
                        label: L.intl.string(L.t.zOXpjU),
                    },
                    {
                        value: D.kg4.SWITCH_TO_VOICE_CHANNEL,
                        label: L.intl.string(L.t.ty7Lxy),
                    },
                    {
                        value: D.kg4.DISCONNECT_FROM_VOICE_CHANNEL,
                        label: L.intl.string(L.t.CV7mT7),
                    },
                ),
                n &&
                    o.push(
                        {
                            value: D.kg4.SOUNDBOARD,
                            label: L.intl.string(L.t.yPH4xm),
                        },
                        {
                            value: D.kg4.SOUNDBOARD_HOLD,
                            label: L.intl.string(L.t["1xFbP/"]),
                        },
                    ),
                r &&
                    (o.push({
                        value: D.kg4.SAVE_CLIP,
                        label: L.intl.string(L.t.U4URzP),
                    }),
                    i &&
                        o.push({
                            value: D.kg4.SAVE_SCREENSHOT,
                            label: L.intl.string(L.t["+WloFH"]),
                        }))),
            o
        );
    }
    get keybindDescriptions() {
        let { overlaySupported: e, canGoLive: t, enableClips: n, enableScreenshotKeybind: r } = this.props,
            i = {
                [D.kg4.UNASSIGNED]: L.intl.string(L.t.rvlNLv),
                [D.kg4.PUSH_TO_MUTE]: L.intl.string(L.t.xtESim),
                [D.kg4.PUSH_TO_TALK]: L.intl.string(L.t.wTcBSy),
                [D.kg4.PUSH_TO_TALK_PRIORITY]: L.intl.string(L.t.FhHvWH),
                [D.kg4.TOGGLE_MUTE]: L.intl.string(L.t.X2fbUm),
                [D.kg4.TOGGLE_DEAFEN]: L.intl.string(L.t.MjREZV),
                [D.kg4.TOGGLE_VOICE_MODE]: L.intl.string(L.t.snm5YW),
                [D.kg4.TOGGLE_STREAMER_MODE]: L.intl.string(L.t.YszLLx),
            };
        return (
            y.Z.getCurrentConfig({ location: "UserSettingsKeybinds" }, { autoTrackExposure: !1 }).separateKeybind &&
                (i[D.kg4.VAD_PRIORITY] = L.intl.string(L.t.rSe8IZ)),
            (0, O.l)() && (i[D.kg4.TOGGLE_CAMERA] = L.intl.string(L.t.v1JBtL)),
            e && (i[D.kg4.TOGGLE_OVERLAY_INPUT_LOCK] = L.intl.string(L.t.IoP5vc)),
            t && (0, C.isWindows)() && (i[D.kg4.TOGGLE_GO_LIVE_STREAMING] = L.intl.string(L.t.s4C238)),
            (0, C.isDesktop)() &&
                ((i[D.kg4.NAVIGATE_BACK] = L.intl.string(L.t.nKDlEt)),
                (i[D.kg4.NAVIGATE_FORWARD] = L.intl.string(L.t.DK0FFk)),
                (i[D.kg4.SOUNDBOARD] = (0, C.isWindows)() ? L.intl.string(L.t["5wJefL"]) : L.intl.string(L.t.gzjsSP)),
                (i[D.kg4.SOUNDBOARD_HOLD] = (0, C.isWindows)() ? L.intl.string(L.t.RRkZc9) : L.intl.string(L.t.laNlTl)),
                n &&
                    ((i[D.kg4.SAVE_CLIP] = L.intl.string(L.t.z3Wbam)),
                    r && (i[D.kg4.SAVE_SCREENSHOT] = L.intl.string(L.t.m0zd57)))),
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
                            H,
                            {
                                keybind: t,
                                keybindDescriptions: this.keybindDescriptions,
                                keybindActionTypes: this.keybindActionTypes,
                                isUserSettingsRedesignEnabled: this.props.isUserSettingsRedesignEnabled,
                            },
                            t.id,
                        ),
                        n !== e.length - 1 ? (0, r.jsx)(d.izJ, {}) : null,
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
            className: j.warning,
            children: [
                (0, r.jsx)(d.d3s, {
                    size: "xs",
                    color: u.Z.colors.ICON_SECONDARY,
                }),
                (0, r.jsx)(d.Text, {
                    variant: "text-sm/medium",
                    color: "text-secondary",
                    children: L.intl.string(L.t.NoKjWP),
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
                        ![D.kg4.OVERLAY_ACTIVATE_REGION_TEXT_WIDGET, D.kg4.SAVE_CLIP, D.kg4.SAVE_SCREENSHOT].includes(
                            e.action,
                        ),
                )
                .reject((t) => !e && (t.action === D.kg4.SAVE_CLIP || t.action === D.kg4.SAVE_SCREENSHOT))
                .reject((e) => !t && e.action === D.kg4.SAVE_SCREENSHOT)
                .reject(
                    (e) =>
                        !this.props.allowSoundboard &&
                        (e.action === D.kg4.SOUNDBOARD || e.action === D.kg4.SOUNDBOARD_HOLD),
                )
                .sortBy((e) => e.id)
                .sortBy((e) => (!0 === e.managed ? -1 : 0))
                .value(),
            a = V();
        return (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(w.Z, {
                    title: L.intl.string(L.t.T9DA2K),
                    children: C.isPlatformEmbedded
                        ? (0, r.jsxs)(r.Fragment, {
                              children: [
                                  (0, r.jsxs)("div", {
                                      className: j.ctaContainer,
                                      children: [
                                          this.renderKeybindWarning(),
                                          (0, r.jsx)("div", {
                                              className: j.addButton,
                                              children: (0, r.jsx)(d.Button, {
                                                  size: "md",
                                                  onClick: this.handleAddKeybind,
                                                  text: L.intl.string(L.t.zk6Xbs),
                                                  variant: "primary",
                                              }),
                                          }),
                                      ],
                                  }),
                                  (0, r.jsx)(S.Z, {
                                      className: j.systemServiceUpsell,
                                      sourcePage: "keybinds",
                                  }),
                                  (0, r.jsx)(d.izJ, {}),
                                  this.renderKeybinds(n),
                                  this.renderEmpty(n),
                              ],
                          })
                        : (0, r.jsx)(d.Wn, {
                              messageType: d.QYI.INFO,
                              className: j.browserNotice,
                              children: L.intl.format(L.t.mPi3F3, { downloadLink: D.EYA.DOWNLOAD }),
                          }),
                }),
                (0, r.jsx)(d.izJ, { className: k.marginBottom60 }),
                (0, r.jsxs)(d.Kqy, {
                    gap: 48,
                    children: [
                        (0, r.jsx)(d.C3N, {
                            label: L.intl.string(L.t.Lz5KHI),
                            children: (0, r.jsx)("div", {
                                className: j.defaultKeybindGroup,
                                children: (0, r.jsxs)("div", {
                                    className: j.defaultKeybind,
                                    children: [
                                        (0, r.jsx)(d.Text, {
                                            variant: "text-md/normal",
                                            children: L.intl.string(L.t.sMWLBj),
                                        }),
                                        (0, r.jsx)("div", {
                                            className: j.defaultKeybindShortcutGroup,
                                            children: (0, r.jsx)(d.M2$, { shortcut: m._.binds["0"] }),
                                        }),
                                    ],
                                }),
                            }),
                        }),
                        (0, r.jsx)(F, {
                            children: (e) =>
                                (0, r.jsx)(r.Fragment, {
                                    children: e.map((e, t) => {
                                        let n = (0, h.UD)(e),
                                            o = (0, h.U6)(e),
                                            s = a[e];
                                        return (0, r.jsx)(
                                            d.C3N,
                                            {
                                                label: n,
                                                description: o,
                                                children: (0, r.jsx)("div", {
                                                    className: j.defaultKeybindGroup,
                                                    children: s.map((e, t) =>
                                                        (0, r.jsxs)(
                                                            i.Fragment,
                                                            {
                                                                children: [
                                                                    0 !== t && (0, r.jsx)(d.izJ, {}),
                                                                    (0, r.jsxs)("div", {
                                                                        className: j.defaultKeybind,
                                                                        children: [
                                                                            (0, r.jsx)(d.Text, {
                                                                                variant: "text-md/normal",
                                                                                children: e.description,
                                                                            }),
                                                                            (0, r.jsx)("div", {
                                                                                className:
                                                                                    j.defaultKeybindShortcutGroup,
                                                                                children: e.binds.map((e) =>
                                                                                    (0, r.jsx)(
                                                                                        d.M2$,
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
            U(this, "handleAddKeybind", () => {
                f.Z.addKeybind();
            });
    }
}
function W() {
    let e = (0, c.e7)([T.ZP], () => T.ZP.getState()),
        t = (0, c.e7)([I.Z], () => (0, b.Z)(I.Z)),
        n = (0, c.e7)([v.Z], () => v.Z.isSupported),
        i = (0, E.w9)(),
        a = (0, E.PP)(),
        o = (0, P.wy)("UserSettingsKeybindsConnected");
    return (0, r.jsx)(Y, {
        keybinds: e,
        canGoLive: t,
        overlaySupported: n,
        allowSoundboard: (0, C.isWindows)(),
        enableClips: i,
        enableScreenshotKeybind: a,
        isUserSettingsRedesignEnabled: o,
    });
}
