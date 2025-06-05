n.d(t, { Z: () => Y }), n(953529), n(388685), n(539854);
var i = n(255367),
    r = n(73800),
    s = n(120356),
    l = n.n(s),
    a = n(392711),
    o = n.n(a),
    c = n(442837),
    d = n(692547),
    u = n(844168),
    m = n(481060),
    g = n(660216),
    p = n(225433),
    h = n(825209),
    f = n(721383),
    b = n(612226),
    _ = n(714338),
    x = n(924557),
    E = n(600164),
    C = n(74299),
    j = n(577153),
    O = n(365023),
    S = n(131951),
    v = n(556296),
    T = n(808506),
    I = n(63063),
    N = n(358085),
    y = n(13140),
    A = n(210887),
    P = n(659947),
    R = n(981631),
    D = n(420212),
    Z = n(388032),
    w = n(628000),
    k = n(588866),
    L = n(20493);
function B(e, t, n) {
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
function M(e) {
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
                B(e, t, n[t]);
            });
    }
    return e;
}
function U(e, t) {
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
function V(e) {
    let { children: t } = e;
    return t([b.Q2.MESSAGE, b.Q2.NAVIGATION, b.Q2.DND, b.Q2.CHAT, b.Q2.VOICE_AND_VIDEO, b.Q2.MISCELLANEOUS]);
}
let G = o()((0, b.Rv)())
        .filter((e) => e.description !== Z.intl.string(Z.t.HnNtEB))
        .groupBy((e) => e.group)
        .value(),
    F = c.ZP.connectStores([A.Z], () => ({ theme: A.Z.theme }))(m.ubH);
class H extends r.PureComponent {
    renderMessage() {
        let { keybind: e } = this.props,
            t = y.BB(e.shortcut);
        return _.Z.hasBind(t)
            ? (0, i.jsx)(m.R94, {
                  className: w.keybindMessage,
                  type: m.geA.DESCRIPTION,
                  style: { color: d.Z.unsafe_rawColors.RED_400.css },
                  children: Z.intl.string(Z.t['7lQlw8'])
              })
            : D.Sp.has(t)
              ? (0, i.jsx)(m.R94, {
                    className: w.keybindMessage,
                    type: m.geA.DESCRIPTION,
                    style: { color: d.Z.unsafe_rawColors.RED_400.css },
                    children: Z.intl.format(Z.t.MOIaNT, { keyboardNavArticle: I.Z.getArticleURL(R.BhN.KEYBOARD_NAVIGATION) })
                })
              : (0, i.jsx)(m.R94, {
                    className: w.keybindMessage,
                    type: m.geA.DESCRIPTION,
                    children: this.props.keybindDescriptions[e.action]
                });
    }
    render() {
        let { managed: e, enabled: t } = this.props.keybind;
        return (0, i.jsxs)(E.Z, {
            direction: E.Z.Direction.VERTICAL,
            className: l()(w.keybindGroup, k.card),
            children: [
                !e &&
                    (0, i.jsx)(p.Z, {
                        'aria-label': Z.intl.string(Z.t.qEHmmJ),
                        className: w.removeKeybind,
                        onClick: this.handleDeleteKeybind,
                        look: p.Z.Looks.FILLED
                    }),
                (0, i.jsxs)(E.Z, {
                    className: L.marginBottom8,
                    children: [
                        (0, i.jsx)(E.Z.Child, {
                            basis: '45%',
                            children: (0, i.jsx)(m.xJW, {
                                title: Z.intl.string(Z.t.UUpADw),
                                className: w.item,
                                children: (0, i.jsx)(m.q4e, {
                                    value: this.props.keybind.action,
                                    options: this.props.keybindActionTypes,
                                    onChange: this.handleActionChanged,
                                    isDisabled: e
                                })
                            })
                        }),
                        (0, i.jsx)(E.Z.Child, {
                            basis: '45%',
                            children: (0, i.jsx)(m.xJW, {
                                title: Z.intl.string(Z.t['1La4tL']),
                                className: w.item,
                                children: (0, i.jsx)(h.Z, {
                                    defaultValue: this.props.keybind.shortcut,
                                    onChange: this.handleShortcutChange
                                })
                            })
                        }),
                        (0, i.jsx)(E.Z.Child, {
                            grow: 0,
                            shrink: 0,
                            children: (0, i.jsx)(m.xJW, {
                                className: w.switch,
                                children: (0, i.jsx)(m.ua7, {
                                    text: Z.intl.string(Z.t.uCD7qK),
                                    children: (e) =>
                                        (0, i.jsx)(
                                            'div',
                                            U(M({}, e), {
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
                (0, i.jsx)(E.Z.Child, { children: this.renderMessage() }),
                this.renderExtraSettings()
            ]
        });
    }
    renderExtraSettings() {
        let { action: e } = this.props.keybind;
        return e === R.kg4.SWITCH_TO_VOICE_CHANNEL ? (0, i.jsx)(P.Z, { keybind: this.props.keybind }) : void 0;
    }
    constructor(...e) {
        super(...e),
            B(this, 'handleActionChanged', (e) => {
                g.Z.setKeybind(U(M({}, this.props.keybind), { action: e }));
            }),
            B(this, 'handleShortcutChange', (e) => {
                g.Z.setKeybind(U(M({}, this.props.keybind), { shortcut: e }));
            }),
            B(this, 'handleDeleteKeybind', () => {
                g.Z.deleteKeybind(this.props.keybind.id);
            }),
            B(this, 'handleEnableDisable', () => {
                let { keybind: e } = this.props;
                g.Z.setKeybind(U(M({}, this.props.keybind), { enabled: !e.enabled }));
            });
    }
}
class z extends r.PureComponent {
    componentDidMount() {
        g.Z.enableAll(!1);
    }
    componentWillUnmount() {
        g.Z.enableAll(!0);
    }
    get keybindActionTypes() {
        let { overlaySupported: e, canGoLive: t, allowSoundboard: n, enableClips: i } = this.props,
            r = j.Z.getCurrentConfig({ location: 'UserSettingsKeybinds' }, { autoTrackExposure: !1 }).separateKeybind
                ? [
                      {
                          value: R.kg4.VAD_PRIORITY,
                          label: Z.intl.string(Z.t['49d6NT'])
                      }
                  ]
                : [],
            s = [
                {
                    value: R.kg4.UNASSIGNED,
                    label: Z.intl.string(Z.t['0Uh57+'])
                },
                {
                    value: R.kg4.PUSH_TO_TALK,
                    label: Z.intl.string(Z.t.Y5lgTE)
                },
                {
                    value: R.kg4.PUSH_TO_TALK_PRIORITY,
                    label: Z.intl.string(Z.t.DkSwJy)
                },
                {
                    value: R.kg4.PUSH_TO_MUTE,
                    label: Z.intl.string(Z.t.hSCRqa)
                },
                ...r,
                {
                    value: R.kg4.TOGGLE_MUTE,
                    label: Z.intl.string(Z.t.PlkYKC)
                },
                {
                    value: R.kg4.TOGGLE_DEAFEN,
                    label: Z.intl.string(Z.t.NvGq1N)
                },
                {
                    value: R.kg4.TOGGLE_VOICE_MODE,
                    label: Z.intl.string(Z.t.Wa5H9f)
                },
                {
                    value: R.kg4.TOGGLE_STREAMER_MODE,
                    label: Z.intl.string(Z.t.BK0NcX)
                }
            ];
        return (
            (0, O.l)() &&
                s.push({
                    value: R.kg4.TOGGLE_CAMERA,
                    label: Z.intl.string(Z.t.hf8JVV)
                }),
            e &&
                (s.push({
                    value: R.kg4.TOGGLE_OVERLAY_INPUT_LOCK,
                    label: Z.intl.string(Z.t.VsAZcH)
                }),
                s.push({
                    value: R.kg4.OVERLAY_ACTIVATE_REGION_TEXT_WIDGET,
                    label: Z.intl.string(Z.t.hurHWl)
                })),
            t &&
                ((0, N.isWindows)() || S.Z.getUseSystemScreensharePicker()) &&
                s.push({
                    value: R.kg4.TOGGLE_GO_LIVE_STREAMING,
                    label: Z.intl.string(Z.t.ybdjJC)
                }),
            (0, N.isDesktop)() &&
                (s.push(
                    {
                        value: R.kg4.NAVIGATE_BACK,
                        label: Z.intl.string(Z.t.gRSaOT)
                    },
                    {
                        value: R.kg4.NAVIGATE_FORWARD,
                        label: Z.intl.string(Z.t.zOXpjY)
                    },
                    {
                        value: R.kg4.SWITCH_TO_VOICE_CHANNEL,
                        label: Z.intl.string(Z.t.ty7Lx8)
                    },
                    {
                        value: R.kg4.DISCONNECT_FROM_VOICE_CHANNEL,
                        label: Z.intl.string(Z.t.CV7mT0)
                    }
                ),
                n &&
                    s.push(
                        {
                            value: R.kg4.SOUNDBOARD,
                            label: Z.intl.string(Z.t.yPH4xs)
                        },
                        {
                            value: R.kg4.SOUNDBOARD_HOLD,
                            label: Z.intl.string(Z.t['1xFbPz'])
                        }
                    ),
                i &&
                    s.push({
                        value: R.kg4.SAVE_CLIP,
                        label: Z.intl.string(Z.t.U4URzM)
                    })),
            s
        );
    }
    get keybindDescriptions() {
        let { overlaySupported: e, canGoLive: t, enableClips: n } = this.props,
            i = {
                [R.kg4.UNASSIGNED]: Z.intl.string(Z.t.rvlNLi),
                [R.kg4.PUSH_TO_MUTE]: Z.intl.string(Z.t.xtESio),
                [R.kg4.PUSH_TO_TALK]: Z.intl.string(Z.t.wTcBS0),
                [R.kg4.PUSH_TO_TALK_PRIORITY]: Z.intl.string(Z.t.FhHvWF),
                [R.kg4.TOGGLE_MUTE]: Z.intl.string(Z.t.X2fbUl),
                [R.kg4.TOGGLE_DEAFEN]: Z.intl.string(Z.t.MjREZW),
                [R.kg4.TOGGLE_VOICE_MODE]: Z.intl.string(Z.t.snm5YW),
                [R.kg4.TOGGLE_STREAMER_MODE]: Z.intl.string(Z.t.YszLLy)
            };
        return j.Z.getCurrentConfig({ location: 'UserSettingsKeybinds' }, { autoTrackExposure: !1 }).separateKeybind && (i[R.kg4.VAD_PRIORITY] = Z.intl.string(Z.t.rSe8IS)), (0, O.l)() && (i[R.kg4.TOGGLE_CAMERA] = Z.intl.string(Z.t.v1JBtL)), e && (i[R.kg4.TOGGLE_OVERLAY_INPUT_LOCK] = Z.intl.string(Z.t.IoP5vb)), t && (0, N.isWindows)() && (i[R.kg4.TOGGLE_GO_LIVE_STREAMING] = Z.intl.string(Z.t.s4C239)), (0, N.isDesktop)() && ((i[R.kg4.NAVIGATE_BACK] = Z.intl.string(Z.t.nKDlEh)), (i[R.kg4.NAVIGATE_FORWARD] = Z.intl.string(Z.t.DK0FFh)), (i[R.kg4.SOUNDBOARD] = (0, N.isWindows)() ? Z.intl.string(Z.t['5wJefH']) : Z.intl.string(Z.t.gzjsSE)), (i[R.kg4.SOUNDBOARD_HOLD] = (0, N.isWindows)() ? Z.intl.string(Z.t.RRkZc3) : Z.intl.string(Z.t.laNlTk)), n && (i[R.kg4.SAVE_CLIP] = Z.intl.string(Z.t.z3Wbam))), i;
    }
    renderKeybinds(e) {
        return e.map((e) =>
            (0, i.jsx)(
                'div',
                {
                    className: w.row,
                    children: (0, i.jsx)(
                        H,
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
            return this.props.isCoreProductIllustrationEnabled
                ? null
                : (0, i.jsx)(F, {
                      className: L.marginTop60,
                      children: (0, i.jsx)(m.oxh, {
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
                .reject((e) => e.managed && ![R.kg4.OVERLAY_ACTIVATE_REGION_TEXT_WIDGET, R.kg4.SAVE_CLIP].includes(e.action))
                .reject((t) => !e && t.action === R.kg4.SAVE_CLIP)
                .reject((e) => !this.props.allowSoundboard && (e.action === R.kg4.SOUNDBOARD || e.action === R.kg4.SOUNDBOARD_HOLD))
                .sortBy((e) => e.id)
                .sortBy((e) => (!0 === e.managed ? -1 : 0))
                .value();
        return (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(m.hjN, {
                    tag: m.RB0.H1,
                    title: Z.intl.string(Z.t.T9DA2N),
                    children: N.isPlatformEmbedded
                        ? (0, i.jsxs)(i.Fragment, {
                              children: [
                                  (0, i.jsxs)(E.Z, {
                                      justify: E.Z.Justify.BETWEEN,
                                      className: L.marginBottom20,
                                      children: [
                                          (0, i.jsx)(E.Z.Child, {
                                              grow: 0,
                                              children: (0, i.jsx)(m.Wn, {
                                                  messageType: m.QYI.WARNING,
                                                  children: Z.intl.string(Z.t.NoKjWF)
                                              })
                                          }),
                                          (0, i.jsx)(E.Z.Child, {
                                              wrap: !0,
                                              grow: 0,
                                              children: (0, i.jsx)(m.zxk, {
                                                  size: m.PhG.LARGE,
                                                  onClick: this.handleAddKeybind,
                                                  children: Z.intl.string(Z.t.zk6Xbm)
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
                              className: w.browserNotice,
                              children: Z.intl.format(Z.t.mPi3Fx, { downloadLink: R.EYA.DOWNLOAD })
                          })
                }),
                (0, i.jsx)(m.$i$, {}),
                (0, i.jsxs)(m.hjN, {
                    tag: m.RB0.H1,
                    title: Z.intl.string(Z.t.Lz5KHB),
                    className: L.marginTop60,
                    children: [
                        (0, i.jsxs)('div', {
                            className: w.defaultKeybind,
                            children: [
                                (0, i.jsx)(m.Text, {
                                    variant: 'text-md/normal',
                                    children: Z.intl.string(Z.t.sMWLBg)
                                }),
                                (0, i.jsx)('div', {
                                    className: w.defaultKeybindShortcutGroup,
                                    children: (0, i.jsx)(m.M2$, {
                                        shortcut: f._.binds['0'],
                                        className: w.__invalid_defaultKeybindShortcut
                                    })
                                })
                            ]
                        }),
                        (0, i.jsx)(m.$i$, {}),
                        (0, i.jsx)(V, {
                            children: (e) =>
                                (0, i.jsx)(i.Fragment, {
                                    children: e.map((e, t) => {
                                        let n = (0, b.UD)(e),
                                            s = (0, b.U6)(e),
                                            a = G[e];
                                        return (0, i.jsxs)(
                                            'div',
                                            {
                                                className: w.defaultKeybindGroup,
                                                children: [
                                                    (0, i.jsx)(m.X6q, {
                                                        variant: 'heading-deprecated-12/semibold',
                                                        className: l()(w.defaultKeybindGroupHeader, { [w.defaultKeybindGroupWithDescription]: null != s }),
                                                        children: n
                                                    }),
                                                    null != s &&
                                                        (0, i.jsx)(m.Text, {
                                                            color: 'header-secondary',
                                                            className: w.defaultKeybindGroupDescription,
                                                            variant: 'text-sm/normal',
                                                            children: s
                                                        }),
                                                    (0, i.jsx)(m.$i$, {}),
                                                    a.map((e) =>
                                                        (0, i.jsxs)(
                                                            r.Fragment,
                                                            {
                                                                children: [
                                                                    (0, i.jsxs)('div', {
                                                                        className: w.defaultKeybind,
                                                                        children: [
                                                                            (0, i.jsx)(m.Text, {
                                                                                variant: 'text-md/normal',
                                                                                children: e.description
                                                                            }),
                                                                            (0, i.jsx)('div', {
                                                                                className: w.defaultKeybindShortcutGroup,
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
        super(...e),
            B(this, 'handleAddKeybind', () => {
                g.Z.addKeybind();
            });
    }
}
function Y() {
    let e = (0, c.e7)([v.ZP], () => v.ZP.getState()),
        t = (0, c.e7)([S.Z], () => (0, C.Z)(S.Z)),
        n = (0, c.e7)([T.default], () => T.default.isSupported()),
        r = (0, x.Go)(),
        s = (0, u.C)('user-settings-keybinds');
    return (0, i.jsx)(z, {
        keybinds: e,
        canGoLive: t,
        overlaySupported: n,
        allowSoundboard: (0, N.isWindows)(),
        enableClips: r,
        isCoreProductIllustrationEnabled: s
    });
}
