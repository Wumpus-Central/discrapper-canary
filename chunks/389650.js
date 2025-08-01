(n.d(t, { Z: () => H }), n(953529), n(388685), n(539854));
var i = n(255367),
    r = n(73800),
    s = n(120356),
    a = n.n(s),
    l = n(392711),
    o = n.n(l),
    c = n(442837),
    d = n(692547),
    u = n(755721),
    m = n(481060),
    p = n(660216),
    g = n(225433),
    h = n(825209),
    f = n(721383),
    b = n(612226),
    x = n(714338),
    _ = n(924557),
    j = n(600164),
    O = n(74299),
    C = n(577153),
    E = n(365023),
    v = n(610394),
    S = n(131951),
    T = n(556296),
    N = n(63063),
    I = n(358085),
    y = n(13140),
    A = n(659947),
    P = n(981631),
    R = n(420212),
    D = n(388032),
    Z = n(628000),
    w = n(588866),
    k = n(20493);
function L(e, t, n) {
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
function B(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            i = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            i.forEach(function (t) {
                L(e, t, n[t]);
            }));
    }
    return e;
}
function M(e, t) {
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
function U(e) {
    let { children: t } = e;
    return t([b.Q2.MESSAGE, b.Q2.NAVIGATION, b.Q2.DND, b.Q2.CHAT, b.Q2.VOICE_AND_VIDEO, b.Q2.MISCELLANEOUS]);
}
let V = o()((0, b.Rv)())
    .filter((e) => e.description !== D.intl.string(D.t.HnNtEB))
    .groupBy((e) => e.group)
    .value();
class G extends r.PureComponent {
    renderMessage() {
        let { keybind: e } = this.props,
            t = y.BB(e.shortcut);
        return x.Z.hasBind(t)
            ? (0, i.jsx)(m.R94, {
                  className: Z.keybindMessage,
                  type: m.geA.DESCRIPTION,
                  style: { color: d.Z.unsafe_rawColors.RED_400.css },
                  children: D.intl.string(D.t['7lQlw8'])
              })
            : R.Sp.has(t)
              ? (0, i.jsx)(m.R94, {
                    className: Z.keybindMessage,
                    type: m.geA.DESCRIPTION,
                    style: { color: d.Z.unsafe_rawColors.RED_400.css },
                    children: D.intl.format(D.t.MOIaNT, { keyboardNavArticle: N.Z.getArticleURL(P.BhN.KEYBOARD_NAVIGATION) })
                })
              : (0, i.jsx)(m.R94, {
                    className: Z.keybindMessage,
                    type: m.geA.DESCRIPTION,
                    children: this.props.keybindDescriptions[e.action]
                });
    }
    render() {
        let { managed: e, enabled: t } = this.props.keybind;
        return (0, i.jsxs)(j.Z, {
            direction: j.Z.Direction.VERTICAL,
            className: a()(Z.keybindGroup, w.card),
            children: [
                !e &&
                    (0, i.jsx)(g.Z, {
                        'aria-label': D.intl.string(D.t.qEHmmJ),
                        className: Z.removeKeybind,
                        onClick: this.handleDeleteKeybind,
                        look: g.Z.Looks.FILLED
                    }),
                (0, i.jsxs)(j.Z, {
                    className: k.marginBottom8,
                    children: [
                        (0, i.jsx)(j.Z.Child, {
                            basis: '45%',
                            children: (0, i.jsx)(m.xJW, {
                                title: D.intl.string(D.t.UUpADw),
                                className: Z.item,
                                children: (0, i.jsx)(m.q4e, {
                                    value: this.props.keybind.action,
                                    options: this.props.keybindActionTypes,
                                    onChange: this.handleActionChanged,
                                    isDisabled: e
                                })
                            })
                        }),
                        (0, i.jsx)(j.Z.Child, {
                            basis: '45%',
                            children: (0, i.jsx)(m.xJW, {
                                title: D.intl.string(D.t['1La4tL']),
                                className: Z.item,
                                children: (0, i.jsx)(h.Z, {
                                    defaultValue: this.props.keybind.shortcut,
                                    onChange: this.handleShortcutChange
                                })
                            })
                        }),
                        (0, i.jsx)(j.Z.Child, {
                            grow: 0,
                            shrink: 0,
                            children: (0, i.jsx)(m.xJW, {
                                className: Z.switch,
                                children: (0, i.jsx)(m.ua7, {
                                    text: D.intl.string(D.t.uCD7qK),
                                    children: (e) =>
                                        (0, i.jsx)(
                                            'div',
                                            M(B({}, e), {
                                                children: (0, i.jsx)(m.rsf, {
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
                (0, i.jsx)(j.Z.Child, { children: this.renderMessage() }),
                this.renderExtraSettings()
            ]
        });
    }
    renderExtraSettings() {
        let { action: e } = this.props.keybind;
        return e === P.kg4.SWITCH_TO_VOICE_CHANNEL ? (0, i.jsx)(A.Z, { keybind: this.props.keybind }) : void 0;
    }
    constructor(...e) {
        (super(...e),
            L(this, 'handleActionChanged', (e) => {
                p.Z.setKeybind(M(B({}, this.props.keybind), { action: e }));
            }),
            L(this, 'handleShortcutChange', (e) => {
                p.Z.setKeybind(M(B({}, this.props.keybind), { shortcut: e }));
            }),
            L(this, 'handleDeleteKeybind', () => {
                p.Z.deleteKeybind(this.props.keybind.id);
            }),
            L(this, 'handleEnableDisable', () => {
                let { keybind: e } = this.props;
                p.Z.setKeybind(M(B({}, this.props.keybind), { enabled: !e.enabled }));
            }));
    }
}
class F extends r.PureComponent {
    componentDidMount() {
        p.Z.enableAll(!1);
    }
    componentWillUnmount() {
        p.Z.enableAll(!0);
    }
    get keybindActionTypes() {
        let { overlaySupported: e, canGoLive: t, allowSoundboard: n, enableClips: i } = this.props,
            r = C.Z.getCurrentConfig({ location: 'UserSettingsKeybinds' }, { autoTrackExposure: !1 }).separateKeybind
                ? [
                      {
                          value: P.kg4.VAD_PRIORITY,
                          label: D.intl.string(D.t['49d6NT'])
                      }
                  ]
                : [],
            s = [
                {
                    value: P.kg4.UNASSIGNED,
                    label: D.intl.string(D.t['0Uh57+'])
                },
                {
                    value: P.kg4.PUSH_TO_TALK,
                    label: D.intl.string(D.t.Y5lgTE)
                },
                {
                    value: P.kg4.PUSH_TO_TALK_PRIORITY,
                    label: D.intl.string(D.t.DkSwJy)
                },
                {
                    value: P.kg4.PUSH_TO_MUTE,
                    label: D.intl.string(D.t.hSCRqa)
                },
                ...r,
                {
                    value: P.kg4.TOGGLE_MUTE,
                    label: D.intl.string(D.t.PlkYKC)
                },
                {
                    value: P.kg4.TOGGLE_DEAFEN,
                    label: D.intl.string(D.t.NvGq1N)
                },
                {
                    value: P.kg4.TOGGLE_VOICE_MODE,
                    label: D.intl.string(D.t.Wa5H9f)
                },
                {
                    value: P.kg4.TOGGLE_STREAMER_MODE,
                    label: D.intl.string(D.t.BK0NcX)
                }
            ];
        return (
            (0, E.l)() &&
                s.push({
                    value: P.kg4.TOGGLE_CAMERA,
                    label: D.intl.string(D.t.hf8JVV)
                }),
            e &&
                (s.push({
                    value: P.kg4.TOGGLE_OVERLAY_INPUT_LOCK,
                    label: D.intl.string(D.t.VsAZcH)
                }),
                s.push({
                    value: P.kg4.OVERLAY_ACTIVATE_REGION_TEXT_WIDGET,
                    label: D.intl.string(D.t.hurHWl)
                })),
            t &&
                ((0, I.isWindows)() || S.Z.getUseSystemScreensharePicker()) &&
                s.push({
                    value: P.kg4.TOGGLE_GO_LIVE_STREAMING,
                    label: D.intl.string(D.t.ybdjJC)
                }),
            (0, I.isDesktop)() &&
                (s.push(
                    {
                        value: P.kg4.NAVIGATE_BACK,
                        label: D.intl.string(D.t.gRSaOT)
                    },
                    {
                        value: P.kg4.NAVIGATE_FORWARD,
                        label: D.intl.string(D.t.zOXpjY)
                    },
                    {
                        value: P.kg4.SWITCH_TO_VOICE_CHANNEL,
                        label: D.intl.string(D.t.ty7Lx8)
                    },
                    {
                        value: P.kg4.DISCONNECT_FROM_VOICE_CHANNEL,
                        label: D.intl.string(D.t.CV7mT0)
                    }
                ),
                n &&
                    s.push(
                        {
                            value: P.kg4.SOUNDBOARD,
                            label: D.intl.string(D.t.yPH4xs)
                        },
                        {
                            value: P.kg4.SOUNDBOARD_HOLD,
                            label: D.intl.string(D.t['1xFbPz'])
                        }
                    ),
                i &&
                    s.push({
                        value: P.kg4.SAVE_CLIP,
                        label: D.intl.string(D.t.U4URzM)
                    })),
            s
        );
    }
    get keybindDescriptions() {
        let { overlaySupported: e, canGoLive: t, enableClips: n } = this.props,
            i = {
                [P.kg4.UNASSIGNED]: D.intl.string(D.t.rvlNLi),
                [P.kg4.PUSH_TO_MUTE]: D.intl.string(D.t.xtESio),
                [P.kg4.PUSH_TO_TALK]: D.intl.string(D.t.wTcBS0),
                [P.kg4.PUSH_TO_TALK_PRIORITY]: D.intl.string(D.t.FhHvWF),
                [P.kg4.TOGGLE_MUTE]: D.intl.string(D.t.X2fbUl),
                [P.kg4.TOGGLE_DEAFEN]: D.intl.string(D.t.MjREZW),
                [P.kg4.TOGGLE_VOICE_MODE]: D.intl.string(D.t.snm5YW),
                [P.kg4.TOGGLE_STREAMER_MODE]: D.intl.string(D.t.YszLLy)
            };
        return (C.Z.getCurrentConfig({ location: 'UserSettingsKeybinds' }, { autoTrackExposure: !1 }).separateKeybind && (i[P.kg4.VAD_PRIORITY] = D.intl.string(D.t.rSe8IS)), (0, E.l)() && (i[P.kg4.TOGGLE_CAMERA] = D.intl.string(D.t.v1JBtL)), e && (i[P.kg4.TOGGLE_OVERLAY_INPUT_LOCK] = D.intl.string(D.t.IoP5vb)), t && (0, I.isWindows)() && (i[P.kg4.TOGGLE_GO_LIVE_STREAMING] = D.intl.string(D.t.s4C239)), (0, I.isDesktop)() && ((i[P.kg4.NAVIGATE_BACK] = D.intl.string(D.t.nKDlEh)), (i[P.kg4.NAVIGATE_FORWARD] = D.intl.string(D.t.DK0FFh)), (i[P.kg4.SOUNDBOARD] = (0, I.isWindows)() ? D.intl.string(D.t['5wJefH']) : D.intl.string(D.t.gzjsSE)), (i[P.kg4.SOUNDBOARD_HOLD] = (0, I.isWindows)() ? D.intl.string(D.t.RRkZc3) : D.intl.string(D.t.laNlTk)), n && (i[P.kg4.SAVE_CLIP] = D.intl.string(D.t.z3Wbam))), i);
    }
    renderKeybinds(e) {
        return e.map((e) =>
            (0, i.jsx)(
                'div',
                {
                    className: Z.row,
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
        if (0 === e.length) return null;
    }
    render() {
        let e = this.props.enableClips,
            t = o()(this.props.keybinds)
                .reject((e) => e.managed && ![P.kg4.OVERLAY_ACTIVATE_REGION_TEXT_WIDGET, P.kg4.SAVE_CLIP].includes(e.action))
                .reject((t) => !e && t.action === P.kg4.SAVE_CLIP)
                .reject((e) => !this.props.allowSoundboard && (e.action === P.kg4.SOUNDBOARD || e.action === P.kg4.SOUNDBOARD_HOLD))
                .sortBy((e) => e.id)
                .sortBy((e) => (!0 === e.managed ? -1 : 0))
                .value();
        return (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(m.hjN, {
                    tag: m.RB0.H1,
                    title: D.intl.string(D.t.T9DA2N),
                    children: I.isPlatformEmbedded
                        ? (0, i.jsxs)(i.Fragment, {
                              children: [
                                  (0, i.jsxs)(j.Z, {
                                      justify: j.Z.Justify.BETWEEN,
                                      className: k.marginBottom20,
                                      children: [
                                          (0, i.jsx)(j.Z.Child, {
                                              grow: 0,
                                              children: (0, i.jsx)(m.Wn, {
                                                  messageType: m.QYI.WARNING,
                                                  children: D.intl.string(D.t.NoKjWF)
                                              })
                                          }),
                                          (0, i.jsx)(j.Z.Child, {
                                              wrap: !0,
                                              grow: 0,
                                              children: (0, i.jsx)(u.zx, {
                                                  size: u.Ph.LARGE,
                                                  onClick: this.handleAddKeybind,
                                                  children: D.intl.string(D.t.zk6Xbm)
                                              })
                                          })
                                      ]
                                  }),
                                  (0, i.jsx)(m.$i$, {}),
                                  (0, i.jsxs)(m.hjN, {
                                      children: [this.renderKeybinds(t), this.renderEmpty(t)]
                                  })
                              ]
                          })
                        : (0, i.jsx)(m.Wn, {
                              messageType: m.QYI.INFO,
                              textVariant: 'text-lg/medium',
                              className: Z.browserNotice,
                              children: D.intl.format(D.t.mPi3Fx, { downloadLink: P.EYA.DOWNLOAD })
                          })
                }),
                (0, i.jsx)(m.$i$, {}),
                (0, i.jsxs)(m.hjN, {
                    tag: m.RB0.H1,
                    title: D.intl.string(D.t.Lz5KHB),
                    className: k.marginTop60,
                    children: [
                        (0, i.jsxs)('div', {
                            className: Z.defaultKeybind,
                            children: [
                                (0, i.jsx)(m.Text, {
                                    variant: 'text-md/normal',
                                    children: D.intl.string(D.t.sMWLBg)
                                }),
                                (0, i.jsx)('div', {
                                    className: Z.defaultKeybindShortcutGroup,
                                    children: (0, i.jsx)(m.M2$, {
                                        shortcut: f._.binds['0'],
                                        className: Z.__invalid_defaultKeybindShortcut
                                    })
                                })
                            ]
                        }),
                        (0, i.jsx)(m.$i$, {}),
                        (0, i.jsx)(U, {
                            children: (e) =>
                                (0, i.jsx)(i.Fragment, {
                                    children: e.map((e, t) => {
                                        let n = (0, b.UD)(e),
                                            s = (0, b.U6)(e),
                                            l = V[e];
                                        return (0, i.jsxs)(
                                            'div',
                                            {
                                                className: Z.defaultKeybindGroup,
                                                children: [
                                                    (0, i.jsx)(m.X6q, {
                                                        variant: 'heading-deprecated-12/semibold',
                                                        className: a()(Z.defaultKeybindGroupHeader, { [Z.defaultKeybindGroupWithDescription]: null != s }),
                                                        children: n
                                                    }),
                                                    null != s &&
                                                        (0, i.jsx)(m.Text, {
                                                            color: 'header-secondary',
                                                            className: Z.defaultKeybindGroupDescription,
                                                            variant: 'text-sm/normal',
                                                            children: s
                                                        }),
                                                    (0, i.jsx)(m.$i$, {}),
                                                    l.map((e) =>
                                                        (0, i.jsxs)(
                                                            r.Fragment,
                                                            {
                                                                children: [
                                                                    (0, i.jsxs)('div', {
                                                                        className: Z.defaultKeybind,
                                                                        children: [
                                                                            (0, i.jsx)(m.Text, {
                                                                                variant: 'text-md/normal',
                                                                                children: e.description
                                                                            }),
                                                                            (0, i.jsx)('div', {
                                                                                className: Z.defaultKeybindShortcutGroup,
                                                                                children: e.binds.map((e) => (0, i.jsx)(m.M2$, { shortcut: e }, e))
                                                                            })
                                                                        ]
                                                                    }),
                                                                    (0, i.jsx)(m.$i$, {})
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
        (super(...e),
            L(this, 'handleAddKeybind', () => {
                p.Z.addKeybind();
            }));
    }
}
function H() {
    let e = (0, c.e7)([T.ZP], () => T.ZP.getState()),
        t = (0, c.e7)([S.Z], () => (0, O.Z)(S.Z)),
        n = (0, c.e7)([v.ZP], () => v.ZP.isSupported()),
        r = (0, _.Go)();
    return (0, i.jsx)(F, {
        keybinds: e,
        canGoLive: t,
        overlaySupported: n,
        allowSoundboard: (0, I.isWindows)(),
        enableClips: r
    });
}
