n.d(t, { Z: () => G }), n(266796), n(47120), n(653041);
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
    E = n(131951),
    j = n(556296),
    C = n(808506),
    O = n(63063),
    v = n(358085),
    S = n(13140),
    T = n(210887),
    I = n(659947),
    y = n(981631),
    A = n(420212),
    P = n(388032),
    R = n(368475),
    D = n(921534),
    Z = n(455812);
function w(e, t, n) {
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
function k(e) {
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
                w(e, t, n[t]);
            });
    }
    return e;
}
function W(e, t) {
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
function L(e) {
    let { children: t } = e;
    return t([f.Q2.MESSAGE, f.Q2.NAVIGATION, f.Q2.DND, f.Q2.CHAT, f.Q2.VOICE_AND_VIDEO, f.Q2.MISCELLANEOUS]);
}
let B = o()((0, f.Rv)())
        .filter((e) => e.description !== P.NW.string(P.t.HnNtEB))
        .groupBy((e) => e.group)
        .value(),
    M = c.ZP.connectStores([T.Z], () => ({ theme: T.Z.theme }))(u.ubH);
class U extends i.PureComponent {
    renderMessage() {
        let { keybind: e } = this.props,
            t = S.BB(e.shortcut);
        return b.Z.hasBind(t)
            ? (0, r.jsx)(u.R94, {
                  className: R.keybindMessage,
                  type: u.geA.DESCRIPTION,
                  style: { color: d.Z.unsafe_rawColors.RED_400.css },
                  children: P.NW.string(P.t['7lQlw8'])
              })
            : A.Sp.has(t)
              ? (0, r.jsx)(u.R94, {
                    className: R.keybindMessage,
                    type: u.geA.DESCRIPTION,
                    style: { color: d.Z.unsafe_rawColors.RED_400.css },
                    children: P.NW.format(P.t.MOIaNT, { keyboardNavArticle: O.Z.getArticleURL(y.BhN.KEYBOARD_NAVIGATION) })
                })
              : (0, r.jsx)(u.R94, {
                    className: R.keybindMessage,
                    type: u.geA.DESCRIPTION,
                    children: this.props.keybindDescriptions[e.action]
                });
    }
    render() {
        let { managed: e, enabled: t } = this.props.keybind;
        return (0, r.jsxs)(x.Z, {
            direction: x.Z.Direction.VERTICAL,
            className: a()(R.keybindGroup, D.card),
            children: [
                !e &&
                    (0, r.jsx)(g.Z, {
                        'aria-label': P.NW.string(P.t.qEHmmJ),
                        className: R.removeKeybind,
                        onClick: this.handleDeleteKeybind,
                        look: g.Z.Looks.FILLED
                    }),
                (0, r.jsxs)(x.Z, {
                    className: Z.marginBottom8,
                    children: [
                        (0, r.jsx)(x.Z.Child, {
                            basis: '45%',
                            children: (0, r.jsx)(u.xJW, {
                                title: P.NW.string(P.t.UUpADw),
                                className: R.item,
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
                                title: P.NW.string(P.t['1La4tL']),
                                className: R.item,
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
                                className: R.switch,
                                children: (0, r.jsx)(u.ua7, {
                                    text: P.NW.string(P.t.uCD7qK),
                                    children: (e) =>
                                        (0, r.jsx)(
                                            'div',
                                            W(k({}, e), {
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
        if (e === y.kg4.SWITCH_TO_VOICE_CHANNEL) return (0, r.jsx)(I.Z, { keybind: this.props.keybind });
    }
    constructor(...e) {
        super(...e),
            w(this, 'handleActionChanged', (e) => {
                m.Z.setKeybind(W(k({}, this.props.keybind), { action: e }));
            }),
            w(this, 'handleShortcutChange', (e) => {
                m.Z.setKeybind(W(k({}, this.props.keybind), { shortcut: e }));
            }),
            w(this, 'handleDeleteKeybind', () => {
                m.Z.deleteKeybind(this.props.keybind.id);
            }),
            w(this, 'handleEnableDisable', () => {
                let { keybind: e } = this.props;
                m.Z.setKeybind(W(k({}, this.props.keybind), { enabled: !e.enabled }));
            });
    }
}
class V extends i.PureComponent {
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
                    value: y.kg4.UNASSIGNED,
                    label: P.NW.string(P.t['0Uh57+'])
                },
                {
                    value: y.kg4.PUSH_TO_TALK,
                    label: P.NW.string(P.t.Y5lgTE)
                },
                {
                    value: y.kg4.PUSH_TO_TALK_PRIORITY,
                    label: P.NW.string(P.t.DkSwJy)
                },
                {
                    value: y.kg4.PUSH_TO_MUTE,
                    label: P.NW.string(P.t.hSCRqa)
                },
                {
                    value: y.kg4.TOGGLE_MUTE,
                    label: P.NW.string(P.t.PlkYKC)
                },
                {
                    value: y.kg4.TOGGLE_DEAFEN,
                    label: P.NW.string(P.t.NvGq1N)
                },
                {
                    value: y.kg4.TOGGLE_VOICE_MODE,
                    label: P.NW.string(P.t.Wa5H9f)
                },
                {
                    value: y.kg4.TOGGLE_STREAMER_MODE,
                    label: P.NW.string(P.t.BK0NcX)
                }
            ];
        return (
            e &&
                (i.push({
                    value: y.kg4.TOGGLE_OVERLAY,
                    label: P.NW.string(P.t.mseZsL)
                }),
                i.push({
                    value: y.kg4.TOGGLE_OVERLAY_INPUT_LOCK,
                    label: P.NW.string(P.t.VsAZcH)
                }),
                i.push({
                    value: y.kg4.OVERLAY_ACTIVATE_REGION_TEXT_WIDGET,
                    label: P.NW.string(P.t.hurHWl)
                })),
            t &&
                ((0, v.isWindows)() || E.Z.getUseSystemScreensharePicker()) &&
                i.push({
                    value: y.kg4.TOGGLE_GO_LIVE_STREAMING,
                    label: P.NW.string(P.t.ybdjJC)
                }),
            (0, v.isDesktop)() &&
                (i.push(
                    {
                        value: y.kg4.NAVIGATE_BACK,
                        label: P.NW.string(P.t.gRSaOT)
                    },
                    {
                        value: y.kg4.NAVIGATE_FORWARD,
                        label: P.NW.string(P.t.zOXpjY)
                    },
                    {
                        value: y.kg4.SWITCH_TO_VOICE_CHANNEL,
                        label: P.NW.string(P.t.ty7Lx8)
                    },
                    {
                        value: y.kg4.DISCONNECT_FROM_VOICE_CHANNEL,
                        label: P.NW.string(P.t.CV7mT0)
                    }
                ),
                n &&
                    i.push(
                        {
                            value: y.kg4.SOUNDBOARD,
                            label: P.NW.string(P.t.yPH4xs)
                        },
                        {
                            value: y.kg4.SOUNDBOARD_HOLD,
                            label: P.NW.string(P.t['1xFbPz'])
                        }
                    ),
                r &&
                    i.push({
                        value: y.kg4.SAVE_CLIP,
                        label: P.NW.string(P.t.U4URzM)
                    })),
            i
        );
    }
    get keybindDescriptions() {
        let { overlaySupported: e, canGoLive: t, enableClips: n } = this.props,
            r = {
                [y.kg4.UNASSIGNED]: P.NW.string(P.t.rvlNLi),
                [y.kg4.PUSH_TO_MUTE]: P.NW.string(P.t.xtESio),
                [y.kg4.PUSH_TO_TALK]: P.NW.string(P.t.wTcBS0),
                [y.kg4.PUSH_TO_TALK_PRIORITY]: P.NW.string(P.t.FhHvWF),
                [y.kg4.TOGGLE_MUTE]: P.NW.string(P.t.X2fbUl),
                [y.kg4.TOGGLE_DEAFEN]: P.NW.string(P.t.MjREZW),
                [y.kg4.TOGGLE_VOICE_MODE]: P.NW.string(P.t.snm5YW),
                [y.kg4.TOGGLE_STREAMER_MODE]: P.NW.string(P.t.YszLLy)
            };
        return e && ((r[y.kg4.TOGGLE_OVERLAY] = P.NW.string(P.t.LbPesb)), (r[y.kg4.TOGGLE_OVERLAY_INPUT_LOCK] = P.NW.string(P.t.IoP5vb))), t && (0, v.isWindows)() && (r[y.kg4.TOGGLE_GO_LIVE_STREAMING] = P.NW.string(P.t.s4C239)), (0, v.isDesktop)() && ((r[y.kg4.NAVIGATE_BACK] = P.NW.string(P.t.nKDlEh)), (r[y.kg4.NAVIGATE_FORWARD] = P.NW.string(P.t.DK0FFh)), (r[y.kg4.SOUNDBOARD] = (0, v.isWindows)() ? P.NW.string(P.t['5wJefH']) : P.NW.string(P.t.gzjsSE)), (r[y.kg4.SOUNDBOARD_HOLD] = (0, v.isWindows)() ? P.NW.string(P.t.RRkZc3) : P.NW.string(P.t.laNlTk)), n && (r[y.kg4.SAVE_CLIP] = P.NW.string(P.t.z3Wbam))), r;
    }
    renderKeybinds(e) {
        return e.map((e) =>
            (0, r.jsx)(
                'div',
                {
                    className: R.row,
                    children: (0, r.jsx)(
                        U,
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
            return (0, r.jsx)(M, {
                className: Z.marginTop60,
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
                .reject((e) => e.managed && ![y.kg4.OVERLAY_ACTIVATE_REGION_TEXT_WIDGET, y.kg4.SAVE_CLIP].includes(e.action))
                .reject((t) => !e && t.action === y.kg4.SAVE_CLIP)
                .reject((e) => !this.props.allowSoundboard && (e.action === y.kg4.SOUNDBOARD || e.action === y.kg4.SOUNDBOARD_HOLD))
                .sortBy((e) => e.id)
                .sortBy((e) => (!0 === e.managed ? -1 : 0))
                .value();
        return (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(u.hjN, {
                    tag: u.RB0.H1,
                    title: P.NW.string(P.t.T9DA2N),
                    children: v.isPlatformEmbedded
                        ? (0, r.jsxs)(r.Fragment, {
                              children: [
                                  (0, r.jsxs)(x.Z, {
                                      justify: x.Z.Justify.BETWEEN,
                                      className: Z.marginBottom20,
                                      children: [
                                          (0, r.jsx)(x.Z.Child, {
                                              grow: 0,
                                              children: (0, r.jsx)(u.Wn, {
                                                  messageType: u.QYI.WARNING,
                                                  children: P.NW.string(P.t.NoKjWF)
                                              })
                                          }),
                                          (0, r.jsx)(x.Z.Child, {
                                              wrap: !0,
                                              grow: 0,
                                              children: (0, r.jsx)(u.zxk, {
                                                  size: u.PhG.LARGE,
                                                  onClick: this.handleAddKeybind,
                                                  children: P.NW.string(P.t.zk6Xbm)
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
                              className: R.browserNotice,
                              children: P.NW.format(P.t.mPi3Fx, { downloadLink: y.EYA.DOWNLOAD })
                          })
                }),
                (0, r.jsx)(u.$i$, {}),
                (0, r.jsxs)(u.hjN, {
                    tag: u.RB0.H1,
                    title: P.NW.string(P.t.Lz5KHB),
                    className: Z.marginTop60,
                    children: [
                        (0, r.jsxs)('div', {
                            className: R.defaultKeybind,
                            children: [
                                (0, r.jsx)(u.Text, {
                                    variant: 'text-md/normal',
                                    children: P.NW.string(P.t.sMWLBg)
                                }),
                                (0, r.jsx)('div', {
                                    className: R.defaultKeybindShortcutGroup,
                                    children: (0, r.jsx)(u.M2$, {
                                        shortcut: h._.binds['0'],
                                        className: R.__invalid_defaultKeybindShortcut
                                    })
                                })
                            ]
                        }),
                        (0, r.jsx)(u.$i$, {}),
                        (0, r.jsx)(L, {
                            children: (e) =>
                                (0, r.jsx)(r.Fragment, {
                                    children: e.map((e, t) => {
                                        let n = (0, f.UD)(e),
                                            s = (0, f.U6)(e),
                                            l = B[e];
                                        return (0, r.jsxs)(
                                            'div',
                                            {
                                                className: R.defaultKeybindGroup,
                                                children: [
                                                    (0, r.jsx)(u.X6q, {
                                                        variant: 'heading-deprecated-12/semibold',
                                                        className: a()(R.defaultKeybindGroupHeader, { [R.defaultKeybindGroupWithDescription]: null != s }),
                                                        children: n
                                                    }),
                                                    null != s &&
                                                        (0, r.jsx)(u.Text, {
                                                            color: 'header-secondary',
                                                            className: R.defaultKeybindGroupDescription,
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
                                                                        className: R.defaultKeybind,
                                                                        children: [
                                                                            (0, r.jsx)(u.Text, {
                                                                                variant: 'text-md/normal',
                                                                                children: e.description
                                                                            }),
                                                                            (0, r.jsx)('div', {
                                                                                className: R.defaultKeybindShortcutGroup,
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
            w(this, 'handleAddKeybind', () => {
                m.Z.addKeybind();
            });
    }
}
function G() {
    let e = (0, c.e7)([j.ZP], () => j.ZP.getState()),
        t = (0, c.e7)([E.Z], () => (0, _.Z)(E.Z)),
        n = (0, c.e7)([C.Z], () => C.Z.isSupported()),
        i = (0, N.Go)();
    return (0, r.jsx)(V, {
        keybinds: e,
        canGoLive: t,
        overlaySupported: n,
        allowSoundboard: (0, v.isWindows)(),
        enableClips: i
    });
}
