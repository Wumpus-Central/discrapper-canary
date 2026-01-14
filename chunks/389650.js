n.d(t, { Z: () => V }), n(953529), n(388685), n(539854);
var r = n(54381),
    i = n(473749),
    a = n(392711),
    o = n.n(a),
    s = n(442837),
    l = n(692547),
    c = n(199849),
    u = n(681715),
    d = n(481060),
    f = n(660216),
    p = n(825209),
    _ = n(721383),
    m = n(612226),
    h = n(714338),
    g = n(924557),
    E = n(74299),
    b = n(577153),
    y = n(365023),
    O = n(509140),
    v = n(825655),
    S = n(131951),
    I = n(556296),
    T = n(63063),
    C = n(358085),
    A = n(13140),
    N = n(659947),
    P = n(273313),
    R = n(981631),
    w = n(295907),
    D = n(388032),
    x = n(125612),
    L = n(478411);
function j(e, t, n) {
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
function M(e) {
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
                j(e, t, n[t]);
            });
    }
    return e;
}
function k(e, t) {
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
function U(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : k(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function G(e) {
    let { children: t } = e;
    return t([m.Q2.MESSAGE, m.Q2.NAVIGATION, m.Q2.DND, m.Q2.CHAT, m.Q2.VOICE_AND_VIDEO, m.Q2.MISCELLANEOUS]);
}
function Z() {
    return o()((0, m.Rv)())
        .filter((e) => e.description !== D.intl.string(D.t.HnNtEI))
        .groupBy((e) => e.group)
        .value();
}
class F extends i.PureComponent {
    renderMessage() {
        let { keybind: e } = this.props,
            t = A.BB(e.shortcut);
        return h.Z.hasBind(t)
            ? (0, r.jsx)(d.Wn, {
                  messageType: d.QYI.ERROR,
                  children: D.intl.string(D.t["7lQlw3"]),
              })
            : w.Sp.has(t)
              ? (0, r.jsx)(d.Wn, {
                    messageType: d.QYI.ERROR,
                    children: D.intl.format(D.t.MOIaNd, {
                        keyboardNavArticle: T.Z.getArticleURL(R.BhN.KEYBOARD_NAVIGATION),
                    }),
                })
              : (0, r.jsx)(d.Text, {
                    variant: "text-md/normal",
                    className: x.keybindMessage,
                    children: this.props.keybindDescriptions[e.action],
                });
    }
    render() {
        let { managed: e, enabled: t } = this.props.keybind;
        return (0, r.jsxs)("div", {
            className: x.keybindGroup,
            children: [
                (0, r.jsxs)("div", {
                    className: x.keybindGroupContent,
                    children: [
                        (0, r.jsx)("div", {
                            className: x.item,
                            children: (0, r.jsx)(c.y6, {
                                label: D.intl.string(D.t.UUpAD6),
                                value: this.props.keybind.action,
                                options: this.props.keybindActionTypes,
                                onChange: this.handleActionChanged,
                                isDisabled: e,
                            }),
                        }),
                        (0, r.jsx)("div", {
                            className: x.item,
                            children: (0, r.jsx)(d.gNt, {
                                label: D.intl.string(D.t["1La4tC"]),
                                children: (0, r.jsx)(p.Z, {
                                    defaultValue: this.props.keybind.shortcut,
                                    onChange: this.handleShortcutChange,
                                }),
                            }),
                        }),
                        !e &&
                            (0, r.jsx)("div", {
                                className: x.removeKeybind,
                                children: (0, r.jsx)(d.hU, {
                                    variant: "icon-only",
                                    onClick: this.handleDeleteKeybind,
                                    icon: d.XHJ,
                                    "aria-label": D.intl.string(D.t.qEHmmB),
                                }),
                            }),
                        (0, r.jsx)("div", {
                            className: x.switch,
                            children: (0, r.jsx)(u.u, {
                                text: D.intl.string(D.t.uCD7qK),
                                children: (0, r.jsx)("div", {
                                    children: (0, r.jsx)(d.rsf, {
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
        return e === R.kg4.SWITCH_TO_VOICE_CHANNEL ? (0, r.jsx)(N.Z, { keybind: this.props.keybind }) : void 0;
    }
    constructor(...e) {
        super(...e),
            j(this, "handleActionChanged", (e) => {
                f.Z.setKeybind(U(M({}, this.props.keybind), { action: e }));
            }),
            j(this, "handleShortcutChange", (e) => {
                f.Z.setKeybind(U(M({}, this.props.keybind), { shortcut: e }));
            }),
            j(this, "handleDeleteKeybind", () => {
                f.Z.deleteKeybind(this.props.keybind.id);
            }),
            j(this, "handleEnableDisable", () => {
                let { keybind: e } = this.props;
                f.Z.setKeybind(U(M({}, this.props.keybind), { enabled: !e.enabled }));
            });
    }
}
class B extends i.PureComponent {
    get keybindActionTypes() {
        let {
                overlaySupported: e,
                canGoLive: t,
                allowSoundboard: n,
                enableClips: r,
                enableScreenshotKeybind: i,
            } = this.props,
            a = b.Z.getCurrentConfig({ location: "UserSettingsKeybinds" }, { autoTrackExposure: !1 }).separateKeybind
                ? [
                      {
                          value: R.kg4.VAD_PRIORITY,
                          label: D.intl.string(D.t["49d6Nd"]),
                      },
                  ]
                : [],
            o = [
                {
                    value: R.kg4.UNASSIGNED,
                    label: D.intl.string(D.t["0Uh579"]),
                },
                {
                    value: R.kg4.PUSH_TO_TALK,
                    label: D.intl.string(D.t.Y5lgTP),
                },
                {
                    value: R.kg4.PUSH_TO_TALK_PRIORITY,
                    label: D.intl.string(D.t.DkSwJ2),
                },
                {
                    value: R.kg4.PUSH_TO_MUTE,
                    label: D.intl.string(D.t.hSCRqd),
                },
                ...a,
                {
                    value: R.kg4.TOGGLE_MUTE,
                    label: D.intl.string(D.t.PlkYKD),
                },
                {
                    value: R.kg4.TOGGLE_DEAFEN,
                    label: D.intl.string(D.t.NvGq1K),
                },
                {
                    value: R.kg4.TOGGLE_VOICE_MODE,
                    label: D.intl.string(D.t.Wa5H9S),
                },
                {
                    value: R.kg4.TOGGLE_STREAMER_MODE,
                    label: D.intl.string(D.t.BK0Ncc),
                },
            ];
        return (
            (0, y.l)() &&
                o.push({
                    value: R.kg4.TOGGLE_CAMERA,
                    label: D.intl.string(D.t.hf8JVT),
                }),
            e &&
                (o.push({
                    value: R.kg4.TOGGLE_OVERLAY_INPUT_LOCK,
                    label: D.intl.string(D.t.VsAZcC),
                }),
                o.push({
                    value: R.kg4.OVERLAY_ACTIVATE_REGION_TEXT_WIDGET,
                    label: D.intl.string(D.t.hurHWo),
                })),
            t &&
                ((0, C.isWindows)() || S.Z.getUseSystemScreensharePicker()) &&
                o.push({
                    value: R.kg4.TOGGLE_GO_LIVE_STREAMING,
                    label: D.intl.string(D.t.ybdjJD),
                }),
            (0, C.isDesktop)() &&
                (o.push(
                    {
                        value: R.kg4.NAVIGATE_BACK,
                        label: D.intl.string(D.t.gRSaOa),
                    },
                    {
                        value: R.kg4.NAVIGATE_FORWARD,
                        label: D.intl.string(D.t.zOXpjU),
                    },
                    {
                        value: R.kg4.SWITCH_TO_VOICE_CHANNEL,
                        label: D.intl.string(D.t.ty7Lxy),
                    },
                    {
                        value: R.kg4.DISCONNECT_FROM_VOICE_CHANNEL,
                        label: D.intl.string(D.t.CV7mT7),
                    },
                ),
                n &&
                    o.push(
                        {
                            value: R.kg4.SOUNDBOARD,
                            label: D.intl.string(D.t.yPH4xm),
                        },
                        {
                            value: R.kg4.SOUNDBOARD_HOLD,
                            label: D.intl.string(D.t["1xFbP/"]),
                        },
                    ),
                r &&
                    (o.push({
                        value: R.kg4.SAVE_CLIP,
                        label: D.intl.string(D.t.U4URzP),
                    }),
                    i &&
                        o.push({
                            value: R.kg4.SAVE_SCREENSHOT,
                            label: D.intl.string(D.t["+WloFH"]),
                        }))),
            o
        );
    }
    get keybindDescriptions() {
        let { overlaySupported: e, canGoLive: t, enableClips: n, enableScreenshotKeybind: r } = this.props,
            i = {
                [R.kg4.UNASSIGNED]: D.intl.string(D.t.rvlNLv),
                [R.kg4.PUSH_TO_MUTE]: D.intl.string(D.t.xtESim),
                [R.kg4.PUSH_TO_TALK]: D.intl.string(D.t.wTcBSy),
                [R.kg4.PUSH_TO_TALK_PRIORITY]: D.intl.string(D.t.FhHvWH),
                [R.kg4.TOGGLE_MUTE]: D.intl.string(D.t.X2fbUm),
                [R.kg4.TOGGLE_DEAFEN]: D.intl.string(D.t.MjREZV),
                [R.kg4.TOGGLE_VOICE_MODE]: D.intl.string(D.t.snm5YW),
                [R.kg4.TOGGLE_STREAMER_MODE]: D.intl.string(D.t.YszLLx),
            };
        return (
            b.Z.getCurrentConfig({ location: "UserSettingsKeybinds" }, { autoTrackExposure: !1 }).separateKeybind &&
                (i[R.kg4.VAD_PRIORITY] = D.intl.string(D.t.rSe8IZ)),
            (0, y.l)() && (i[R.kg4.TOGGLE_CAMERA] = D.intl.string(D.t.v1JBtL)),
            e && (i[R.kg4.TOGGLE_OVERLAY_INPUT_LOCK] = D.intl.string(D.t.IoP5vc)),
            t && (0, C.isWindows)() && (i[R.kg4.TOGGLE_GO_LIVE_STREAMING] = D.intl.string(D.t.s4C238)),
            (0, C.isDesktop)() &&
                ((i[R.kg4.NAVIGATE_BACK] = D.intl.string(D.t.nKDlEt)),
                (i[R.kg4.NAVIGATE_FORWARD] = D.intl.string(D.t.DK0FFk)),
                (i[R.kg4.SOUNDBOARD] = (0, C.isWindows)() ? D.intl.string(D.t["5wJefL"]) : D.intl.string(D.t.gzjsSP)),
                (i[R.kg4.SOUNDBOARD_HOLD] = (0, C.isWindows)() ? D.intl.string(D.t.RRkZc9) : D.intl.string(D.t.laNlTl)),
                n &&
                    ((i[R.kg4.SAVE_CLIP] = D.intl.string(D.t.z3Wbam)),
                    r && (i[R.kg4.SAVE_SCREENSHOT] = D.intl.string(D.t.m0zd57)))),
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
                            F,
                            {
                                keybind: t,
                                keybindDescriptions: this.keybindDescriptions,
                                keybindActionTypes: this.keybindActionTypes,
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
    renderKeybindWarning() {
        return (0, r.jsxs)("div", {
            className: x.warning,
            children: [
                (0, r.jsx)(d.d3s, {
                    size: "xs",
                    color: l.Z.colors.ICON_SUBTLE,
                }),
                (0, r.jsx)(d.Text, {
                    variant: "text-sm/medium",
                    color: "text-subtle",
                    children: D.intl.string(D.t.NoKjWP),
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
                        ![R.kg4.OVERLAY_ACTIVATE_REGION_TEXT_WIDGET, R.kg4.SAVE_CLIP, R.kg4.SAVE_SCREENSHOT].includes(
                            e.action,
                        ),
                )
                .reject((t) => !e && (t.action === R.kg4.SAVE_CLIP || t.action === R.kg4.SAVE_SCREENSHOT))
                .reject((e) => !t && e.action === R.kg4.SAVE_SCREENSHOT)
                .reject(
                    (e) =>
                        !this.props.allowSoundboard &&
                        (e.action === R.kg4.SOUNDBOARD || e.action === R.kg4.SOUNDBOARD_HOLD),
                )
                .sortBy((e) => e.id)
                .sortBy((e) => (!0 === e.managed ? -1 : 0))
                .value(),
            a = Z();
        return (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(P.Z, {
                    title: D.intl.string(D.t.T9DA2K),
                    children: C.isPlatformEmbedded
                        ? (0, r.jsxs)(r.Fragment, {
                              children: [
                                  (0, r.jsxs)("div", {
                                      className: x.ctaContainer,
                                      children: [
                                          this.renderKeybindWarning(),
                                          (0, r.jsx)("div", {
                                              className: x.addButton,
                                              children: (0, r.jsx)(d.Button, {
                                                  size: "md",
                                                  onClick: this.handleAddKeybind,
                                                  text: D.intl.string(D.t.zk6Xbs),
                                                  variant: "primary",
                                              }),
                                          }),
                                      ],
                                  }),
                                  (0, r.jsx)(v.Z, {
                                      className: x.systemServiceUpsell,
                                      sourcePage: "keybinds",
                                  }),
                                  n.length > 0 &&
                                      (0, r.jsxs)(r.Fragment, {
                                          children: [(0, r.jsx)(d.izJ, {}), this.renderKeybinds(n)],
                                      }),
                              ],
                          })
                        : (0, r.jsx)(d.Wn, {
                              messageType: d.QYI.INFO,
                              className: x.browserNotice,
                              children: D.intl.format(D.t.mPi3F3, { downloadLink: R.EYA.DOWNLOAD }),
                          }),
                }),
                (0, r.jsx)(d.izJ, { className: L.marginBottom60 }),
                (0, r.jsxs)(d.Kqy, {
                    gap: 48,
                    children: [
                        (0, r.jsx)(d.C3N, {
                            label: D.intl.string(D.t.Lz5KHI),
                            children: (0, r.jsx)("div", {
                                className: x.defaultKeybindGroup,
                                children: (0, r.jsxs)("div", {
                                    className: x.defaultKeybind,
                                    children: [
                                        (0, r.jsx)(d.Text, {
                                            variant: "text-md/normal",
                                            children: D.intl.string(D.t.sMWLBj),
                                        }),
                                        (0, r.jsx)("div", {
                                            className: x.defaultKeybindShortcutGroup,
                                            children: (0, r.jsx)(d.M2$, { shortcut: _._.binds["0"] }),
                                        }),
                                    ],
                                }),
                            }),
                        }),
                        (0, r.jsx)(G, {
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
                                                    className: x.defaultKeybindGroup,
                                                    children: s.map((e, t) =>
                                                        (0, r.jsxs)(
                                                            i.Fragment,
                                                            {
                                                                children: [
                                                                    0 !== t && (0, r.jsx)(d.izJ, {}),
                                                                    (0, r.jsxs)("div", {
                                                                        className: x.defaultKeybind,
                                                                        children: [
                                                                            (0, r.jsx)(d.Text, {
                                                                                variant: "text-md/normal",
                                                                                children: e.description,
                                                                            }),
                                                                            (0, r.jsx)("div", {
                                                                                className:
                                                                                    x.defaultKeybindShortcutGroup,
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
            j(this, "handleAddKeybind", () => {
                f.Z.addKeybind();
            });
    }
}
function V() {
    i.useEffect(
        () => (
            f.Z.enableAll(!1),
            () => {
                f.Z.enableAll(!0);
            }
        ),
        [],
    );
    let e = (0, s.e7)([I.ZP], () => I.ZP.getState()),
        t = (0, s.e7)([S.Z], () => (0, E.Z)(S.Z)),
        n = (0, s.e7)([O.Z], () => O.Z.isSupported),
        a = (0, g.w9)(),
        o = (0, g.PP)();
    return (0, r.jsx)(B, {
        keybinds: e,
        canGoLive: t,
        overlaySupported: n,
        allowSoundboard: (0, C.isWindows)(),
        enableClips: a,
        enableScreenshotKeybind: o,
    });
}
