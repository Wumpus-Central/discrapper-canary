n.d(t, { Z: () => H }), n(953529), n(388685), n(539854);
var i = n(200651),
    r = n(192379),
    s = n(120356),
    l = n.n(s),
    a = n(392711),
    o = n.n(a),
    c = n(442837),
    d = n(692547),
    u = n(481060),
    m = n(660216),
    p = n(225433),
    g = n(825209),
    h = n(721383),
    f = n(612226),
    b = n(714338),
    _ = n(924557),
    x = n(600164),
    E = n(74299),
    j = n(365023),
    C = n(131951),
    O = n(556296),
    S = n(808506),
    v = n(63063),
    T = n(358085),
    I = n(13140),
    N = n(210887),
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
function L(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            i = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            i.forEach(function (t) {
                k(e, t, n[t]);
            });
    }
    return e;
}
function B(e, t) {
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
function M(e) {
    let { children: t } = e;
    return t([f.Q2.MESSAGE, f.Q2.NAVIGATION, f.Q2.DND, f.Q2.CHAT, f.Q2.VOICE_AND_VIDEO, f.Q2.MISCELLANEOUS]);
}
let U = o()((0, f.Rv)())
        .filter((e) => e.description !== R.intl.string(R.t.HnNtEB))
        .groupBy((e) => e.group)
        .value(),
    V = c.ZP.connectStores([N.Z], () => ({ theme: N.Z.theme }))(u.ubH);
class G extends r.PureComponent {
    renderMessage() {
        let { keybind: e } = this.props,
            t = I.BB(e.shortcut);
        return b.Z.hasBind(t)
            ? (0, i.jsx)(u.R94, {
                  className: D.keybindMessage,
                  type: u.geA.DESCRIPTION,
                  style: { color: d.Z.unsafe_rawColors.RED_400.css },
                  children: R.intl.string(R.t['7lQlw8'])
              })
            : P.Sp.has(t)
              ? (0, i.jsx)(u.R94, {
                    className: D.keybindMessage,
                    type: u.geA.DESCRIPTION,
                    style: { color: d.Z.unsafe_rawColors.RED_400.css },
                    children: R.intl.format(R.t.MOIaNT, { keyboardNavArticle: v.Z.getArticleURL(A.BhN.KEYBOARD_NAVIGATION) })
                })
              : (0, i.jsx)(u.R94, {
                    className: D.keybindMessage,
                    type: u.geA.DESCRIPTION,
                    children: this.props.keybindDescriptions[e.action]
                });
    }
    render() {
        let { managed: e, enabled: t } = this.props.keybind;
        return (0, i.jsxs)(x.Z, {
            direction: x.Z.Direction.VERTICAL,
            className: l()(D.keybindGroup, Z.card),
            children: [
                !e &&
                    (0, i.jsx)(p.Z, {
                        'aria-label': R.intl.string(R.t.qEHmmJ),
                        className: D.removeKeybind,
                        onClick: this.handleDeleteKeybind,
                        look: p.Z.Looks.FILLED
                    }),
                (0, i.jsxs)(x.Z, {
                    className: w.marginBottom8,
                    children: [
                        (0, i.jsx)(x.Z.Child, {
                            basis: '45%',
                            children: (0, i.jsx)(u.xJW, {
                                title: R.intl.string(R.t.UUpADw),
                                className: D.item,
                                children: (0, i.jsx)(u.q4e, {
                                    value: this.props.keybind.action,
                                    options: this.props.keybindActionTypes,
                                    onChange: this.handleActionChanged,
                                    isDisabled: e
                                })
                            })
                        }),
                        (0, i.jsx)(x.Z.Child, {
                            basis: '45%',
                            children: (0, i.jsx)(u.xJW, {
                                title: R.intl.string(R.t['1La4tL']),
                                className: D.item,
                                children: (0, i.jsx)(g.Z, {
                                    defaultValue: this.props.keybind.shortcut,
                                    onChange: this.handleShortcutChange
                                })
                            })
                        }),
                        (0, i.jsx)(x.Z.Child, {
                            grow: 0,
                            shrink: 0,
                            children: (0, i.jsx)(u.xJW, {
                                className: D.switch,
                                children: (0, i.jsx)(u.ua7, {
                                    text: R.intl.string(R.t.uCD7qK),
                                    children: (e) =>
                                        (0, i.jsx)(
                                            'div',
                                            B(L({}, e), {
                                                children: (0, i.jsx)(u.rsf, {
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
                (0, i.jsx)(x.Z.Child, { children: this.renderMessage() }),
                this.renderExtraSettings()
            ]
        });
    }
    renderExtraSettings() {
        let { action: e } = this.props.keybind;
        return e === A.kg4.SWITCH_TO_VOICE_CHANNEL ? (0, i.jsx)(y.Z, { keybind: this.props.keybind }) : void 0;
    }
    constructor(...e) {
        super(...e),
            k(this, 'handleActionChanged', (e) => {
                m.Z.setKeybind(B(L({}, this.props.keybind), { action: e }));
            }),
            k(this, 'handleShortcutChange', (e) => {
                m.Z.setKeybind(B(L({}, this.props.keybind), { shortcut: e }));
            }),
            k(this, 'handleDeleteKeybind', () => {
                m.Z.deleteKeybind(this.props.keybind.id);
            }),
            k(this, 'handleEnableDisable', () => {
                let { keybind: e } = this.props;
                m.Z.setKeybind(B(L({}, this.props.keybind), { enabled: !e.enabled }));
            });
    }
}
class F extends r.PureComponent {
    componentDidMount() {
        m.Z.enableAll(!1);
    }
    componentWillUnmount() {
        m.Z.enableAll(!0);
    }
    get keybindActionTypes() {
        let { overlaySupported: e, canGoLive: t, allowSoundboard: n, enableClips: i } = this.props,
            r = [
                {
                    value: A.kg4.UNASSIGNED,
                    label: R.intl.string(R.t['0Uh57+'])
                },
                {
                    value: A.kg4.PUSH_TO_TALK,
                    label: R.intl.string(R.t.Y5lgTE)
                },
                {
                    value: A.kg4.PUSH_TO_TALK_PRIORITY,
                    label: R.intl.string(R.t.DkSwJy)
                },
                {
                    value: A.kg4.PUSH_TO_MUTE,
                    label: R.intl.string(R.t.hSCRqa)
                },
                {
                    value: A.kg4.TOGGLE_MUTE,
                    label: R.intl.string(R.t.PlkYKC)
                },
                {
                    value: A.kg4.TOGGLE_DEAFEN,
                    label: R.intl.string(R.t.NvGq1N)
                },
                {
                    value: A.kg4.TOGGLE_VOICE_MODE,
                    label: R.intl.string(R.t.Wa5H9f)
                },
                {
                    value: A.kg4.TOGGLE_STREAMER_MODE,
                    label: R.intl.string(R.t.BK0NcX)
                }
            ];
        return (
            (0, j.l)() &&
                r.push({
                    value: A.kg4.TOGGLE_CAMERA,
                    label: R.intl.string(R.t.hf8JVV)
                }),
            e &&
                (r.push({
                    value: A.kg4.TOGGLE_OVERLAY_INPUT_LOCK,
                    label: R.intl.string(R.t.VsAZcH)
                }),
                r.push({
                    value: A.kg4.OVERLAY_ACTIVATE_REGION_TEXT_WIDGET,
                    label: R.intl.string(R.t.hurHWl)
                })),
            t &&
                ((0, T.isWindows)() || C.Z.getUseSystemScreensharePicker()) &&
                r.push({
                    value: A.kg4.TOGGLE_GO_LIVE_STREAMING,
                    label: R.intl.string(R.t.ybdjJC)
                }),
            (0, T.isDesktop)() &&
                (r.push(
                    {
                        value: A.kg4.NAVIGATE_BACK,
                        label: R.intl.string(R.t.gRSaOT)
                    },
                    {
                        value: A.kg4.NAVIGATE_FORWARD,
                        label: R.intl.string(R.t.zOXpjY)
                    },
                    {
                        value: A.kg4.SWITCH_TO_VOICE_CHANNEL,
                        label: R.intl.string(R.t.ty7Lx8)
                    },
                    {
                        value: A.kg4.DISCONNECT_FROM_VOICE_CHANNEL,
                        label: R.intl.string(R.t.CV7mT0)
                    }
                ),
                n &&
                    r.push(
                        {
                            value: A.kg4.SOUNDBOARD,
                            label: R.intl.string(R.t.yPH4xs)
                        },
                        {
                            value: A.kg4.SOUNDBOARD_HOLD,
                            label: R.intl.string(R.t['1xFbPz'])
                        }
                    ),
                i &&
                    r.push({
                        value: A.kg4.SAVE_CLIP,
                        label: R.intl.string(R.t.U4URzM)
                    })),
            r
        );
    }
    get keybindDescriptions() {
        let { overlaySupported: e, canGoLive: t, enableClips: n } = this.props,
            i = {
                [A.kg4.UNASSIGNED]: R.intl.string(R.t.rvlNLi),
                [A.kg4.PUSH_TO_MUTE]: R.intl.string(R.t.xtESio),
                [A.kg4.PUSH_TO_TALK]: R.intl.string(R.t.wTcBS0),
                [A.kg4.PUSH_TO_TALK_PRIORITY]: R.intl.string(R.t.FhHvWF),
                [A.kg4.TOGGLE_MUTE]: R.intl.string(R.t.X2fbUl),
                [A.kg4.TOGGLE_DEAFEN]: R.intl.string(R.t.MjREZW),
                [A.kg4.TOGGLE_VOICE_MODE]: R.intl.string(R.t.snm5YW),
                [A.kg4.TOGGLE_STREAMER_MODE]: R.intl.string(R.t.YszLLy)
            };
        return (0, j.l)() && (i[A.kg4.TOGGLE_CAMERA] = R.intl.string(R.t.v1JBtL)), e && (i[A.kg4.TOGGLE_OVERLAY_INPUT_LOCK] = R.intl.string(R.t.IoP5vb)), t && (0, T.isWindows)() && (i[A.kg4.TOGGLE_GO_LIVE_STREAMING] = R.intl.string(R.t.s4C239)), (0, T.isDesktop)() && ((i[A.kg4.NAVIGATE_BACK] = R.intl.string(R.t.nKDlEh)), (i[A.kg4.NAVIGATE_FORWARD] = R.intl.string(R.t.DK0FFh)), (i[A.kg4.SOUNDBOARD] = (0, T.isWindows)() ? R.intl.string(R.t['5wJefH']) : R.intl.string(R.t.gzjsSE)), (i[A.kg4.SOUNDBOARD_HOLD] = (0, T.isWindows)() ? R.intl.string(R.t.RRkZc3) : R.intl.string(R.t.laNlTk)), n && (i[A.kg4.SAVE_CLIP] = R.intl.string(R.t.z3Wbam))), i;
    }
    renderKeybinds(e) {
        return e.map((e) =>
            (0, i.jsx)(
                'div',
                {
                    className: D.row,
                    children: (0, i.jsx)(
                        G,
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
            return (0, i.jsx)(V, {
                className: w.marginTop60,
                children: (0, i.jsx)(u.oxh, {
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
        return (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(u.hjN, {
                    tag: u.RB0.H1,
                    title: R.intl.string(R.t.T9DA2N),
                    children: T.isPlatformEmbedded
                        ? (0, i.jsxs)(i.Fragment, {
                              children: [
                                  (0, i.jsxs)(x.Z, {
                                      justify: x.Z.Justify.BETWEEN,
                                      className: w.marginBottom20,
                                      children: [
                                          (0, i.jsx)(x.Z.Child, {
                                              grow: 0,
                                              children: (0, i.jsx)(u.Wn, {
                                                  messageType: u.QYI.WARNING,
                                                  children: R.intl.string(R.t.NoKjWF)
                                              })
                                          }),
                                          (0, i.jsx)(x.Z.Child, {
                                              wrap: !0,
                                              grow: 0,
                                              children: (0, i.jsx)(u.zxk, {
                                                  size: u.PhG.LARGE,
                                                  onClick: this.handleAddKeybind,
                                                  children: R.intl.string(R.t.zk6Xbm)
                                              })
                                          })
                                      ]
                                  }),
                                  (0, i.jsx)(u.$i$, {}),
                                  (0, i.jsxs)(u.hjN, {
                                      children: [this.renderKeybinds(t), this.renderEmpty(t)]
                                  })
                              ]
                          })
                        : (0, i.jsx)(u.Wn, {
                              messageType: u.QYI.INFO,
                              textVariant: 'text-lg/medium',
                              className: D.browserNotice,
                              children: R.intl.format(R.t.mPi3Fx, { downloadLink: A.EYA.DOWNLOAD })
                          })
                }),
                (0, i.jsx)(u.$i$, {}),
                (0, i.jsxs)(u.hjN, {
                    tag: u.RB0.H1,
                    title: R.intl.string(R.t.Lz5KHB),
                    className: w.marginTop60,
                    children: [
                        (0, i.jsxs)('div', {
                            className: D.defaultKeybind,
                            children: [
                                (0, i.jsx)(u.Text, {
                                    variant: 'text-md/normal',
                                    children: R.intl.string(R.t.sMWLBg)
                                }),
                                (0, i.jsx)('div', {
                                    className: D.defaultKeybindShortcutGroup,
                                    children: (0, i.jsx)(u.M2$, {
                                        shortcut: h._.binds['0'],
                                        className: D.__invalid_defaultKeybindShortcut
                                    })
                                })
                            ]
                        }),
                        (0, i.jsx)(u.$i$, {}),
                        (0, i.jsx)(M, {
                            children: (e) =>
                                (0, i.jsx)(i.Fragment, {
                                    children: e.map((e, t) => {
                                        let n = (0, f.UD)(e),
                                            s = (0, f.U6)(e),
                                            a = U[e];
                                        return (0, i.jsxs)(
                                            'div',
                                            {
                                                className: D.defaultKeybindGroup,
                                                children: [
                                                    (0, i.jsx)(u.X6q, {
                                                        variant: 'heading-deprecated-12/semibold',
                                                        className: l()(D.defaultKeybindGroupHeader, { [D.defaultKeybindGroupWithDescription]: null != s }),
                                                        children: n
                                                    }),
                                                    null != s &&
                                                        (0, i.jsx)(u.Text, {
                                                            color: 'header-secondary',
                                                            className: D.defaultKeybindGroupDescription,
                                                            variant: 'text-sm/normal',
                                                            children: s
                                                        }),
                                                    (0, i.jsx)(u.$i$, {}),
                                                    a.map((e) =>
                                                        (0, i.jsxs)(
                                                            r.Fragment,
                                                            {
                                                                children: [
                                                                    (0, i.jsxs)('div', {
                                                                        className: D.defaultKeybind,
                                                                        children: [
                                                                            (0, i.jsx)(u.Text, {
                                                                                variant: 'text-md/normal',
                                                                                children: e.description
                                                                            }),
                                                                            (0, i.jsx)('div', {
                                                                                className: D.defaultKeybindShortcutGroup,
                                                                                children: e.binds.map((e) => (0, i.jsx)(u.M2$, { shortcut: e }, e))
                                                                            })
                                                                        ]
                                                                    }),
                                                                    (0, i.jsx)(u.$i$, {})
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
function H() {
    let e = (0, c.e7)([O.ZP], () => O.ZP.getState()),
        t = (0, c.e7)([C.Z], () => (0, E.Z)(C.Z)),
        n = (0, c.e7)([S.default], () => S.default.isSupported()),
        r = (0, _.Go)();
    return (0, i.jsx)(F, {
        keybinds: e,
        canGoLive: t,
        overlaySupported: n,
        allowSoundboard: (0, T.isWindows)(),
        enableClips: r
    });
}
