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
    _ = n(225433),
    p = n(825209),
    h = n(721383),
    m = n(612226),
    g = n(714338),
    E = n(924557),
    b = n(74299),
    y = n(577153),
    O = n(365023),
    v = n(509140),
    I = n(825655),
    T = n(131951),
    S = n(556296),
    A = n(63063),
    C = n(358085),
    N = n(13140),
    R = n(526665),
    P = n(659947),
    D = n(273313),
    w = n(981631),
    L = n(295907),
    x = n(388032),
    M = n(894462),
    k = n(620842),
    j = n(197571);
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
    return t([m.Q2.MESSAGE, m.Q2.NAVIGATION, m.Q2.DND, m.Q2.CHAT, m.Q2.VOICE_AND_VIDEO, m.Q2.MISCELLANEOUS]);
}
function V() {
    return l()((0, m.Rv)())
        .filter((e) => e.description !== x.intl.string(x.t.HnNtEI))
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
                  children: x.intl.string(x.t["7lQlw3"]),
              })
            : L.Sp.has(t)
              ? (0, r.jsx)(d.Wn, {
                    messageType: d.QYI.ERROR,
                    children: x.intl.format(x.t.MOIaNd, {
                        keyboardNavArticle: A.Z.getArticleURL(w.BhN.KEYBOARD_NAVIGATION),
                    }),
                })
              : (0, r.jsx)(d.Text, {
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
                        "aria-label": x.intl.string(x.t.qEHmmB),
                        className: M.removeKeybindFloating,
                        onClick: this.handleDeleteKeybind,
                    }),
                (0, r.jsxs)("div", {
                    className: M.keybindGroupContent,
                    children: [
                        (0, r.jsx)("div", {
                            className: M.item,
                            children: (0, r.jsx)(d.q4e, {
                                label: x.intl.string(x.t.UUpAD6),
                                value: this.props.keybind.action,
                                options: this.props.keybindActionTypes,
                                onChange: this.handleActionChanged,
                                isDisabled: e,
                            }),
                        }),
                        (0, r.jsx)("div", {
                            className: M.item,
                            children: (0, r.jsx)(d.gNt, {
                                label: x.intl.string(x.t["1La4tC"]),
                                children: (0, r.jsx)(p.Z, {
                                    defaultValue: this.props.keybind.shortcut,
                                    onChange: this.handleShortcutChange,
                                }),
                            }),
                        }),
                        !e &&
                            this.props.isUserSettingsRedesignEnabled &&
                            (0, r.jsx)("div", {
                                className: M.removeKeybind,
                                children: (0, r.jsx)(d.hU, {
                                    variant: "icon-only",
                                    onClick: this.handleDeleteKeybind,
                                    icon: d.XHJ,
                                    "aria-label": x.intl.string(x.t.qEHmmB),
                                }),
                            }),
                        (0, r.jsx)("div", {
                            className: M.switch,
                            children: (0, r.jsx)(d.aML, {
                                "data-migration-pending": !0,
                                text: x.intl.string(x.t.uCD7qK),
                                children: (e) =>
                                    (0, r.jsx)(
                                        "div",
                                        Z(G({}, e), {
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
        return e === w.kg4.SWITCH_TO_VOICE_CHANNEL ? (0, r.jsx)(P.Z, { keybind: this.props.keybind }) : void 0;
    }
    constructor(...e) {
        super(...e),
            U(this, "handleActionChanged", (e) => {
                f.Z.setKeybind(Z(G({}, this.props.keybind), { action: e }));
            }),
            U(this, "handleShortcutChange", (e) => {
                f.Z.setKeybind(Z(G({}, this.props.keybind), { shortcut: e }));
            }),
            U(this, "handleDeleteKeybind", () => {
                f.Z.deleteKeybind(this.props.keybind.id);
            }),
            U(this, "handleEnableDisable", () => {
                let { keybind: e } = this.props;
                f.Z.setKeybind(Z(G({}, this.props.keybind), { enabled: !e.enabled }));
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
                          value: w.kg4.VAD_PRIORITY,
                          label: x.intl.string(x.t["49d6Nd"]),
                      },
                  ]
                : [],
            o = [
                {
                    value: w.kg4.UNASSIGNED,
                    label: x.intl.string(x.t["0Uh579"]),
                },
                {
                    value: w.kg4.PUSH_TO_TALK,
                    label: x.intl.string(x.t.Y5lgTP),
                },
                {
                    value: w.kg4.PUSH_TO_TALK_PRIORITY,
                    label: x.intl.string(x.t.DkSwJ2),
                },
                {
                    value: w.kg4.PUSH_TO_MUTE,
                    label: x.intl.string(x.t.hSCRqd),
                },
                ...a,
                {
                    value: w.kg4.TOGGLE_MUTE,
                    label: x.intl.string(x.t.PlkYKD),
                },
                {
                    value: w.kg4.TOGGLE_DEAFEN,
                    label: x.intl.string(x.t.NvGq1K),
                },
                {
                    value: w.kg4.TOGGLE_VOICE_MODE,
                    label: x.intl.string(x.t.Wa5H9S),
                },
                {
                    value: w.kg4.TOGGLE_STREAMER_MODE,
                    label: x.intl.string(x.t.BK0Ncc),
                },
            ];
        return (
            (0, O.l)() &&
                o.push({
                    value: w.kg4.TOGGLE_CAMERA,
                    label: x.intl.string(x.t.hf8JVT),
                }),
            e &&
                (o.push({
                    value: w.kg4.TOGGLE_OVERLAY_INPUT_LOCK,
                    label: x.intl.string(x.t.VsAZcC),
                }),
                o.push({
                    value: w.kg4.OVERLAY_ACTIVATE_REGION_TEXT_WIDGET,
                    label: x.intl.string(x.t.hurHWo),
                })),
            t &&
                ((0, C.isWindows)() || T.Z.getUseSystemScreensharePicker()) &&
                o.push({
                    value: w.kg4.TOGGLE_GO_LIVE_STREAMING,
                    label: x.intl.string(x.t.ybdjJD),
                }),
            (0, C.isDesktop)() &&
                (o.push(
                    {
                        value: w.kg4.NAVIGATE_BACK,
                        label: x.intl.string(x.t.gRSaOa),
                    },
                    {
                        value: w.kg4.NAVIGATE_FORWARD,
                        label: x.intl.string(x.t.zOXpjU),
                    },
                    {
                        value: w.kg4.SWITCH_TO_VOICE_CHANNEL,
                        label: x.intl.string(x.t.ty7Lxy),
                    },
                    {
                        value: w.kg4.DISCONNECT_FROM_VOICE_CHANNEL,
                        label: x.intl.string(x.t.CV7mT7),
                    },
                ),
                n &&
                    o.push(
                        {
                            value: w.kg4.SOUNDBOARD,
                            label: x.intl.string(x.t.yPH4xm),
                        },
                        {
                            value: w.kg4.SOUNDBOARD_HOLD,
                            label: x.intl.string(x.t["1xFbP/"]),
                        },
                    ),
                r &&
                    (o.push({
                        value: w.kg4.SAVE_CLIP,
                        label: x.intl.string(x.t.U4URzP),
                    }),
                    i &&
                        o.push({
                            value: w.kg4.SAVE_SCREENSHOT,
                            label: x.intl.string(x.t["+WloFH"]),
                        }))),
            o
        );
    }
    get keybindDescriptions() {
        let { overlaySupported: e, canGoLive: t, enableClips: n, enableScreenshotKeybind: r } = this.props,
            i = {
                [w.kg4.UNASSIGNED]: x.intl.string(x.t.rvlNLv),
                [w.kg4.PUSH_TO_MUTE]: x.intl.string(x.t.xtESim),
                [w.kg4.PUSH_TO_TALK]: x.intl.string(x.t.wTcBSy),
                [w.kg4.PUSH_TO_TALK_PRIORITY]: x.intl.string(x.t.FhHvWH),
                [w.kg4.TOGGLE_MUTE]: x.intl.string(x.t.X2fbUm),
                [w.kg4.TOGGLE_DEAFEN]: x.intl.string(x.t.MjREZV),
                [w.kg4.TOGGLE_VOICE_MODE]: x.intl.string(x.t.snm5YW),
                [w.kg4.TOGGLE_STREAMER_MODE]: x.intl.string(x.t.YszLLx),
            };
        return (
            y.Z.getCurrentConfig({ location: "UserSettingsKeybinds" }, { autoTrackExposure: !1 }).separateKeybind &&
                (i[w.kg4.VAD_PRIORITY] = x.intl.string(x.t.rSe8IZ)),
            (0, O.l)() && (i[w.kg4.TOGGLE_CAMERA] = x.intl.string(x.t.v1JBtL)),
            e && (i[w.kg4.TOGGLE_OVERLAY_INPUT_LOCK] = x.intl.string(x.t.IoP5vc)),
            t && (0, C.isWindows)() && (i[w.kg4.TOGGLE_GO_LIVE_STREAMING] = x.intl.string(x.t.s4C238)),
            (0, C.isDesktop)() &&
                ((i[w.kg4.NAVIGATE_BACK] = x.intl.string(x.t.nKDlEt)),
                (i[w.kg4.NAVIGATE_FORWARD] = x.intl.string(x.t.DK0FFk)),
                (i[w.kg4.SOUNDBOARD] = (0, C.isWindows)() ? x.intl.string(x.t["5wJefL"]) : x.intl.string(x.t.gzjsSP)),
                (i[w.kg4.SOUNDBOARD_HOLD] = (0, C.isWindows)() ? x.intl.string(x.t.RRkZc9) : x.intl.string(x.t.laNlTl)),
                n &&
                    ((i[w.kg4.SAVE_CLIP] = x.intl.string(x.t.z3Wbam)),
                    r && (i[w.kg4.SAVE_SCREENSHOT] = x.intl.string(x.t.m0zd57)))),
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
            className: M.warning,
            children: [
                (0, r.jsx)(d.d3s, {
                    size: "xs",
                    color: u.Z.colors.ICON_SECONDARY,
                }),
                (0, r.jsx)(d.Text, {
                    variant: "text-sm/medium",
                    color: "text-secondary",
                    children: x.intl.string(x.t.NoKjWP),
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
                        ![w.kg4.OVERLAY_ACTIVATE_REGION_TEXT_WIDGET, w.kg4.SAVE_CLIP, w.kg4.SAVE_SCREENSHOT].includes(
                            e.action,
                        ),
                )
                .reject((t) => !e && (t.action === w.kg4.SAVE_CLIP || t.action === w.kg4.SAVE_SCREENSHOT))
                .reject((e) => !t && e.action === w.kg4.SAVE_SCREENSHOT)
                .reject(
                    (e) =>
                        !this.props.allowSoundboard &&
                        (e.action === w.kg4.SOUNDBOARD || e.action === w.kg4.SOUNDBOARD_HOLD),
                )
                .sortBy((e) => e.id)
                .sortBy((e) => (!0 === e.managed ? -1 : 0))
                .value(),
            a = V();
        return (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(D.Z, {
                    title: x.intl.string(x.t.T9DA2K),
                    children: C.isPlatformEmbedded
                        ? (0, r.jsxs)(r.Fragment, {
                              children: [
                                  (0, r.jsxs)("div", {
                                      className: M.ctaContainer,
                                      children: [
                                          this.renderKeybindWarning(),
                                          (0, r.jsx)("div", {
                                              className: M.addButton,
                                              children: (0, r.jsx)(d.Button, {
                                                  size: "md",
                                                  onClick: this.handleAddKeybind,
                                                  text: x.intl.string(x.t.zk6Xbs),
                                                  variant: "primary",
                                              }),
                                          }),
                                      ],
                                  }),
                                  (0, r.jsx)(I.Z, {
                                      className: M.systemServiceUpsell,
                                      sourcePage: "keybinds",
                                  }),
                                  (0, r.jsx)(d.izJ, {}),
                                  this.renderKeybinds(n),
                                  this.renderEmpty(n),
                              ],
                          })
                        : (0, r.jsx)(d.Wn, {
                              messageType: d.QYI.INFO,
                              className: M.browserNotice,
                              children: x.intl.format(x.t.mPi3F3, { downloadLink: w.EYA.DOWNLOAD }),
                          }),
                }),
                (0, r.jsx)(d.izJ, { className: j.marginBottom60 }),
                (0, r.jsxs)(d.Kqy, {
                    gap: 48,
                    children: [
                        (0, r.jsx)(d.C3N, {
                            label: x.intl.string(x.t.Lz5KHI),
                            children: (0, r.jsx)("div", {
                                className: M.defaultKeybindGroup,
                                children: (0, r.jsxs)("div", {
                                    className: M.defaultKeybind,
                                    children: [
                                        (0, r.jsx)(d.Text, {
                                            variant: "text-md/normal",
                                            children: x.intl.string(x.t.sMWLBj),
                                        }),
                                        (0, r.jsx)("div", {
                                            className: M.defaultKeybindShortcutGroup,
                                            children: (0, r.jsx)(d.M2$, { shortcut: h._.binds["0"] }),
                                        }),
                                    ],
                                }),
                            }),
                        }),
                        (0, r.jsx)(F, {
                            children: (e) =>
                                (0, r.jsx)(r.Fragment, {
                                    children: e.map((e, t) => {
                                        let n = (0, m.UD)(e),
                                            o = (0, m.U6)(e),
                                            s = a[e];
                                        return (0, r.jsx)(
                                            d.C3N,
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
                                                                    0 !== t && (0, r.jsx)(d.izJ, {}),
                                                                    (0, r.jsxs)("div", {
                                                                        className: M.defaultKeybind,
                                                                        children: [
                                                                            (0, r.jsx)(d.Text, {
                                                                                variant: "text-md/normal",
                                                                                children: e.description,
                                                                            }),
                                                                            (0, r.jsx)("div", {
                                                                                className:
                                                                                    M.defaultKeybindShortcutGroup,
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
    let e = (0, c.e7)([S.ZP], () => S.ZP.getState()),
        t = (0, c.e7)([T.Z], () => (0, b.Z)(T.Z)),
        n = (0, c.e7)([v.Z], () => v.Z.isSupported),
        i = (0, E.w9)(),
        a = (0, E.PP)(),
        o = (0, R.wy)("UserSettingsKeybindsConnected");
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
