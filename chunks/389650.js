n.d(t, { Z: () => F }), n(266796), n(47120), n(653041);
var r = n(200651),
    i = n(192379),
    s = n(120356),
    a = n.n(s),
    l = n(392711),
    o = n.n(l),
    c = n(442837),
    d = n(692547),
    u = n(481060),
    m = n(660216),
    g = n(225433),
    p = n(825209),
    h = n(721383),
    f = n(612226),
    b = n(714338),
    N = n(924557),
    x = n(600164),
    _ = n(74299),
    E = n(365023),
    j = n(131951),
    O = n(556296),
    C = n(808506),
    S = n(63063),
    v = n(358085),
    T = n(13140),
    I = n(210887),
    y = n(659947),
    A = n(981631),
    P = n(420212),
    R = n(388032),
    D = n(628000),
    Z = n(588866),
    w = n(20493);
function k(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function W(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                k(e, t, n[t]);
            });
    }
    return e;
}
function L(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function B(e) {
    let { children: t } = e;
    return t([f.Q2.MESSAGE, f.Q2.NAVIGATION, f.Q2.DND, f.Q2.CHAT, f.Q2.VOICE_AND_VIDEO, f.Q2.MISCELLANEOUS]);
}
let M = o()((0, f.Rv)())
        .filter((e) => e.description !== R.NW.string(R.t.HnNtEB))
        .groupBy((e) => e.group)
        .value(),
    U = c.ZP.connectStores([I.Z], () => ({ theme: I.Z.theme }))(u.ubH);
class V extends i.PureComponent {
    renderMessage() {
        let { keybind: e } = this.props,
            t = T.BB(e.shortcut);
        return b.Z.hasBind(t)
            ? (0, r.jsx)(u.R94, {
                  className: D.keybindMessage,
                  type: u.geA.DESCRIPTION,
                  style: { color: d.Z.unsafe_rawColors.RED_400.css },
                  children: R.NW.string(R.t['7lQlw8'])
              })
            : P.Sp.has(t)
              ? (0, r.jsx)(u.R94, {
                    className: D.keybindMessage,
                    type: u.geA.DESCRIPTION,
                    style: { color: d.Z.unsafe_rawColors.RED_400.css },
                    children: R.NW.format(R.t.MOIaNT, { keyboardNavArticle: S.Z.getArticleURL(A.BhN.KEYBOARD_NAVIGATION) })
                })
              : (0, r.jsx)(u.R94, {
                    className: D.keybindMessage,
                    type: u.geA.DESCRIPTION,
                    children: this.props.keybindDescriptions[e.action]
                });
    }
    render() {
        let { managed: e, enabled: t } = this.props.keybind;
        return (0, r.jsxs)(x.Z, {
            direction: x.Z.Direction.VERTICAL,
            className: a()(D.keybindGroup, Z.card),
            children: [
                !e &&
                    (0, r.jsx)(g.Z, {
                        'aria-label': R.NW.string(R.t.qEHmmJ),
                        className: D.removeKeybind,
                        onClick: this.handleDeleteKeybind,
                        look: g.Z.Looks.FILLED
                    }),
                (0, r.jsxs)(x.Z, {
                    className: w.marginBottom8,
                    children: [
                        (0, r.jsx)(x.Z.Child, {
                            basis: '45%',
                            children: (0, r.jsx)(u.xJW, {
                                title: R.NW.string(R.t.UUpADw),
                                className: D.item,
                                children: (0, r.jsx)(u.q4e, {
                                    value: this.props.keybind.action,
                                    options: this.props.keybindActionTypes,
                                    onChange: this.handleActionChanged,
                                    isDisabled: e
                                })
                            })
                        }),
                        (0, r.jsx)(x.Z.Child, {
                            basis: '45%',
                            children: (0, r.jsx)(u.xJW, {
                                title: R.NW.string(R.t['1La4tL']),
                                className: D.item,
                                children: (0, r.jsx)(p.Z, {
                                    defaultValue: this.props.keybind.shortcut,
                                    onChange: this.handleShortcutChange
                                })
                            })
                        }),
                        (0, r.jsx)(x.Z.Child, {
                            grow: 0,
                            shrink: 0,
                            children: (0, r.jsx)(u.xJW, {
                                className: D.switch,
                                children: (0, r.jsx)(u.ua7, {
                                    text: R.NW.string(R.t.uCD7qK),
                                    children: (e) =>
                                        (0, r.jsx)(
                                            'div',
                                            L(W({}, e), {
                                                children: (0, r.jsx)(u.rsf, {
                                                    checked: t,
                                                    onChange: this.handleEnableDisable
                                                })
                                            })
                                        )
                                })
                            })
                        })
                    ]
                }),
                (0, r.jsx)(x.Z.Child, { children: this.renderMessage() }),
                this.renderExtraSettings()
            ]
        });
    }
    renderExtraSettings() {
        let { action: e } = this.props.keybind;
        return e === A.kg4.SWITCH_TO_VOICE_CHANNEL ? (0, r.jsx)(y.Z, { keybind: this.props.keybind }) : void 0;
    }
    constructor(...e) {
        super(...e),
            k(this, 'handleActionChanged', (e) => {
                m.Z.setKeybind(L(W({}, this.props.keybind), { action: e }));
            }),
            k(this, 'handleShortcutChange', (e) => {
                m.Z.setKeybind(L(W({}, this.props.keybind), { shortcut: e }));
            }),
            k(this, 'handleDeleteKeybind', () => {
                m.Z.deleteKeybind(this.props.keybind.id);
            }),
            k(this, 'handleEnableDisable', () => {
                let { keybind: e } = this.props;
                m.Z.setKeybind(L(W({}, this.props.keybind), { enabled: !e.enabled }));
            });
    }
}
class G extends i.PureComponent {
    componentDidMount() {
        m.Z.enableAll(!1);
    }
    componentWillUnmount() {
        m.Z.enableAll(!0);
    }
    get keybindActionTypes() {
        let { overlaySupported: e, canGoLive: t, allowSoundboard: n, enableClips: r } = this.props,
            i = [
                {
                    value: A.kg4.UNASSIGNED,
                    label: R.NW.string(R.t['0Uh57+'])
                },
                {
                    value: A.kg4.PUSH_TO_TALK,
                    label: R.NW.string(R.t.Y5lgTE)
                },
                {
                    value: A.kg4.PUSH_TO_TALK_PRIORITY,
                    label: R.NW.string(R.t.DkSwJy)
                },
                {
                    value: A.kg4.PUSH_TO_MUTE,
                    label: R.NW.string(R.t.hSCRqa)
                },
                {
                    value: A.kg4.TOGGLE_MUTE,
                    label: R.NW.string(R.t.PlkYKC)
                },
                {
                    value: A.kg4.TOGGLE_DEAFEN,
                    label: R.NW.string(R.t.NvGq1N)
                },
                {
                    value: A.kg4.TOGGLE_VOICE_MODE,
                    label: R.NW.string(R.t.Wa5H9f)
                },
                {
                    value: A.kg4.TOGGLE_STREAMER_MODE,
                    label: R.NW.string(R.t.BK0NcX)
                }
            ];
        return (
            (0, E.l)() &&
                i.push({
                    value: A.kg4.TOGGLE_CAMERA,
                    label: R.NW.string(R.t.hf8JVV)
                }),
            e &&
                (i.push({
                    value: A.kg4.TOGGLE_OVERLAY_INPUT_LOCK,
                    label: R.NW.string(R.t.VsAZcH)
                }),
                i.push({
                    value: A.kg4.OVERLAY_ACTIVATE_REGION_TEXT_WIDGET,
                    label: R.NW.string(R.t.hurHWl)
                })),
            t &&
                ((0, v.isWindows)() || j.Z.getUseSystemScreensharePicker()) &&
                i.push({
                    value: A.kg4.TOGGLE_GO_LIVE_STREAMING,
                    label: R.NW.string(R.t.ybdjJC)
                }),
            (0, v.isDesktop)() &&
                (i.push(
                    {
                        value: A.kg4.NAVIGATE_BACK,
                        label: R.NW.string(R.t.gRSaOT)
                    },
                    {
                        value: A.kg4.NAVIGATE_FORWARD,
                        label: R.NW.string(R.t.zOXpjY)
                    },
                    {
                        value: A.kg4.SWITCH_TO_VOICE_CHANNEL,
                        label: R.NW.string(R.t.ty7Lx8)
                    },
                    {
                        value: A.kg4.DISCONNECT_FROM_VOICE_CHANNEL,
                        label: R.NW.string(R.t.CV7mT0)
                    }
                ),
                n &&
                    i.push(
                        {
                            value: A.kg4.SOUNDBOARD,
                            label: R.NW.string(R.t.yPH4xs)
                        },
                        {
                            value: A.kg4.SOUNDBOARD_HOLD,
                            label: R.NW.string(R.t['1xFbPz'])
                        }
                    ),
                r &&
                    i.push({
                        value: A.kg4.SAVE_CLIP,
                        label: R.NW.string(R.t.U4URzM)
                    })),
            i
        );
    }
    get keybindDescriptions() {
        let { overlaySupported: e, canGoLive: t, enableClips: n } = this.props,
            r = {
                [A.kg4.UNASSIGNED]: R.NW.string(R.t.rvlNLi),
                [A.kg4.PUSH_TO_MUTE]: R.NW.string(R.t.xtESio),
                [A.kg4.PUSH_TO_TALK]: R.NW.string(R.t.wTcBS0),
                [A.kg4.PUSH_TO_TALK_PRIORITY]: R.NW.string(R.t.FhHvWF),
                [A.kg4.TOGGLE_MUTE]: R.NW.string(R.t.X2fbUl),
                [A.kg4.TOGGLE_DEAFEN]: R.NW.string(R.t.MjREZW),
                [A.kg4.TOGGLE_VOICE_MODE]: R.NW.string(R.t.snm5YW),
                [A.kg4.TOGGLE_STREAMER_MODE]: R.NW.string(R.t.YszLLy)
            };
        return (0, E.l)() && (r[A.kg4.TOGGLE_CAMERA] = R.NW.string(R.t.v1JBtL)), e && (r[A.kg4.TOGGLE_OVERLAY_INPUT_LOCK] = R.NW.string(R.t.IoP5vb)), t && (0, v.isWindows)() && (r[A.kg4.TOGGLE_GO_LIVE_STREAMING] = R.NW.string(R.t.s4C239)), (0, v.isDesktop)() && ((r[A.kg4.NAVIGATE_BACK] = R.NW.string(R.t.nKDlEh)), (r[A.kg4.NAVIGATE_FORWARD] = R.NW.string(R.t.DK0FFh)), (r[A.kg4.SOUNDBOARD] = (0, v.isWindows)() ? R.NW.string(R.t['5wJefH']) : R.NW.string(R.t.gzjsSE)), (r[A.kg4.SOUNDBOARD_HOLD] = (0, v.isWindows)() ? R.NW.string(R.t.RRkZc3) : R.NW.string(R.t.laNlTk)), n && (r[A.kg4.SAVE_CLIP] = R.NW.string(R.t.z3Wbam))), r;
    }
    renderKeybinds(e) {
        return e.map((e) =>
            (0, r.jsx)(
                'div',
                {
                    className: D.row,
                    children: (0, r.jsx)(
                        V,
                        {
                            keybind: e,
                            keybindDescriptions: this.keybindDescriptions,
                            keybindActionTypes: this.keybindActionTypes
                        },
                        e.id
                    )
                },
                e.id
            )
        );
    }
    renderEmpty(e) {
        if (0 === e.length)
            return (0, r.jsx)(U, {
                className: w.marginTop60,
                children: (0, r.jsx)(u.oxh, {
                    darkSrc: n(572279),
                    lightSrc: n(871803),
                    width: 320,
                    height: 170
                })
            });
    }
    render() {
        let e = this.props.enableClips,
            t = o()(this.props.keybinds)
                .reject((e) => e.managed && ![A.kg4.OVERLAY_ACTIVATE_REGION_TEXT_WIDGET, A.kg4.SAVE_CLIP].includes(e.action))
                .reject((t) => !e && t.action === A.kg4.SAVE_CLIP)
                .reject((e) => !this.props.allowSoundboard && (e.action === A.kg4.SOUNDBOARD || e.action === A.kg4.SOUNDBOARD_HOLD))
                .sortBy((e) => e.id)
                .sortBy((e) => (!0 === e.managed ? -1 : 0))
                .value();
        return (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(u.hjN, {
                    tag: u.RB0.H1,
                    title: R.NW.string(R.t.T9DA2N),
                    children: v.isPlatformEmbedded
                        ? (0, r.jsxs)(r.Fragment, {
                              children: [
                                  (0, r.jsxs)(x.Z, {
                                      justify: x.Z.Justify.BETWEEN,
                                      className: w.marginBottom20,
                                      children: [
                                          (0, r.jsx)(x.Z.Child, {
                                              grow: 0,
                                              children: (0, r.jsx)(u.Wn, {
                                                  messageType: u.QYI.WARNING,
                                                  children: R.NW.string(R.t.NoKjWF)
                                              })
                                          }),
                                          (0, r.jsx)(x.Z.Child, {
                                              wrap: !0,
                                              grow: 0,
                                              children: (0, r.jsx)(u.zxk, {
                                                  size: u.PhG.LARGE,
                                                  onClick: this.handleAddKeybind,
                                                  children: R.NW.string(R.t.zk6Xbm)
                                              })
                                          })
                                      ]
                                  }),
                                  (0, r.jsx)(u.$i$, {}),
                                  (0, r.jsxs)(u.hjN, {
                                      children: [this.renderKeybinds(t), this.renderEmpty(t)]
                                  })
                              ]
                          })
                        : (0, r.jsx)(u.Wn, {
                              messageType: u.QYI.INFO,
                              textVariant: 'text-lg/medium',
                              className: D.browserNotice,
                              children: R.NW.format(R.t.mPi3Fx, { downloadLink: A.EYA.DOWNLOAD })
                          })
                }),
                (0, r.jsx)(u.$i$, {}),
                (0, r.jsxs)(u.hjN, {
                    tag: u.RB0.H1,
                    title: R.NW.string(R.t.Lz5KHB),
                    className: w.marginTop60,
                    children: [
                        (0, r.jsxs)('div', {
                            className: D.defaultKeybind,
                            children: [
                                (0, r.jsx)(u.Text, {
                                    variant: 'text-md/normal',
                                    children: R.NW.string(R.t.sMWLBg)
                                }),
                                (0, r.jsx)('div', {
                                    className: D.defaultKeybindShortcutGroup,
                                    children: (0, r.jsx)(u.M2$, {
                                        shortcut: h._.binds['0'],
                                        className: D.__invalid_defaultKeybindShortcut
                                    })
                                })
                            ]
                        }),
                        (0, r.jsx)(u.$i$, {}),
                        (0, r.jsx)(B, {
                            children: (e) =>
                                (0, r.jsx)(r.Fragment, {
                                    children: e.map((e, t) => {
                                        let n = (0, f.UD)(e),
                                            s = (0, f.U6)(e),
                                            l = M[e];
                                        return (0, r.jsxs)(
                                            'div',
                                            {
                                                className: D.defaultKeybindGroup,
                                                children: [
                                                    (0, r.jsx)(u.X6q, {
                                                        variant: 'heading-deprecated-12/semibold',
                                                        className: a()(D.defaultKeybindGroupHeader, { [D.defaultKeybindGroupWithDescription]: null != s }),
                                                        children: n
                                                    }),
                                                    null != s &&
                                                        (0, r.jsx)(u.Text, {
                                                            color: 'header-secondary',
                                                            className: D.defaultKeybindGroupDescription,
                                                            variant: 'text-sm/normal',
                                                            children: s
                                                        }),
                                                    (0, r.jsx)(u.$i$, {}),
                                                    l.map((e) =>
                                                        (0, r.jsxs)(
                                                            i.Fragment,
                                                            {
                                                                children: [
                                                                    (0, r.jsxs)('div', {
                                                                        className: D.defaultKeybind,
                                                                        children: [
                                                                            (0, r.jsx)(u.Text, {
                                                                                variant: 'text-md/normal',
                                                                                children: e.description
                                                                            }),
                                                                            (0, r.jsx)('div', {
                                                                                className: D.defaultKeybindShortcutGroup,
                                                                                children: e.binds.map((e) => (0, r.jsx)(u.M2$, { shortcut: e }, e))
                                                                            })
                                                                        ]
                                                                    }),
                                                                    (0, r.jsx)(u.$i$, {})
                                                                ]
                                                            },
                                                            e.description
                                                        )
                                                    )
                                                ]
                                            },
                                            t
                                        );
                                    })
                                })
                        })
                    ]
                })
            ]
        });
    }
    constructor(...e) {
        super(...e),
            k(this, 'handleAddKeybind', () => {
                m.Z.addKeybind();
            });
    }
}
function F() {
    let e = (0, c.e7)([O.ZP], () => O.ZP.getState()),
        t = (0, c.e7)([j.Z], () => (0, _.Z)(j.Z)),
        n = (0, c.e7)([C.default], () => C.default.isSupported()),
        i = (0, N.Go)();
    return (0, r.jsx)(G, {
        keybinds: e,
        canGoLive: t,
        overlaySupported: n,
        allowSoundboard: (0, v.isWindows)(),
        enableClips: i
    });
}
