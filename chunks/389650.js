n.d(t, { Z: () => U }), n(47120), n(653041);
var i = n(200651),
    s = n(192379),
    l = n(120356),
    r = n.n(l),
    a = n(392711),
    o = n.n(a),
    c = n(442837),
    d = n(692547),
    u = n(481060),
    h = n(660216),
    m = n(225433),
    g = n(825209),
    x = n(721383),
    _ = n(612226),
    p = n(714338),
    E = n(924557),
    C = n(600164),
    N = n(74299),
    f = n(131951),
    I = n(556296),
    T = n(808506),
    S = n(63063),
    j = n(358085),
    v = n(13140),
    b = n(210887),
    A = n(659947),
    O = n(981631),
    R = n(420212),
    D = n(388032),
    P = n(60332),
    y = n(937551),
    Z = n(814632);
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
function k(e) {
    let { children: t } = e;
    return t([_.Q2.MESSAGE, _.Q2.NAVIGATION, _.Q2.DND, _.Q2.CHAT, _.Q2.VOICE_AND_VIDEO, _.Q2.MISCELLANEOUS]);
}
let B = o()((0, _.Rv)())
        .filter((e) => e.description !== D.intl.string(D.t.HnNtEB))
        .groupBy((e) => e.group)
        .value(),
    M = c.ZP.connectStores([b.Z], () => ({ theme: b.Z.theme }))(u.ubH);
class V extends s.PureComponent {
    renderMessage() {
        let { keybind: e } = this.props,
            t = v.BB(e.shortcut);
        return p.Z.hasBind(t)
            ? (0, i.jsx)(u.R94, {
                  className: P.keybindMessage,
                  type: u.geA.DESCRIPTION,
                  style: { color: d.Z.unsafe_rawColors.RED_400.css },
                  children: D.intl.string(D.t['7lQlw8'])
              })
            : R.Sp.has(t)
              ? (0, i.jsx)(u.R94, {
                    className: P.keybindMessage,
                    type: u.geA.DESCRIPTION,
                    style: { color: d.Z.unsafe_rawColors.RED_400.css },
                    children: D.intl.format(D.t.MOIaNT, { keyboardNavArticle: S.Z.getArticleURL(O.BhN.KEYBOARD_NAVIGATION) })
                })
              : (0, i.jsx)(u.R94, {
                    className: P.keybindMessage,
                    type: u.geA.DESCRIPTION,
                    children: this.props.keybindDescriptions[e.action]
                });
    }
    render() {
        let { managed: e, enabled: t } = this.props.keybind;
        return (0, i.jsxs)(C.Z, {
            direction: C.Z.Direction.VERTICAL,
            className: r()(P.keybindGroup, y.card),
            children: [
                !e &&
                    (0, i.jsx)(m.Z, {
                        'aria-label': D.intl.string(D.t.qEHmmJ),
                        className: P.removeKeybind,
                        onClick: this.handleDeleteKeybind,
                        look: m.Z.Looks.FILLED
                    }),
                (0, i.jsxs)(C.Z, {
                    className: Z.marginBottom8,
                    children: [
                        (0, i.jsx)(C.Z.Child, {
                            basis: '45%',
                            children: (0, i.jsx)(u.xJW, {
                                title: D.intl.string(D.t.UUpADw),
                                className: P.item,
                                children: (0, i.jsx)(u.q4e, {
                                    value: this.props.keybind.action,
                                    options: this.props.keybindActionTypes,
                                    onChange: this.handleActionChanged,
                                    isDisabled: e
                                })
                            })
                        }),
                        (0, i.jsx)(C.Z.Child, {
                            basis: '45%',
                            children: (0, i.jsx)(u.xJW, {
                                title: D.intl.string(D.t['1La4tL']),
                                className: P.item,
                                children: (0, i.jsx)(g.Z, {
                                    defaultValue: this.props.keybind.shortcut,
                                    onChange: this.handleShortcutChange
                                })
                            })
                        }),
                        (0, i.jsx)(C.Z.Child, {
                            grow: 0,
                            shrink: 0,
                            children: (0, i.jsx)(u.xJW, {
                                className: P.switch,
                                children: (0, i.jsx)(u.ua7, {
                                    text: D.intl.string(D.t.uCD7qK),
                                    children: (e) =>
                                        (0, i.jsx)('div', {
                                            ...e,
                                            children: (0, i.jsx)(u.rsf, {
                                                checked: t,
                                                onChange: this.handleEnableDisable
                                            })
                                        })
                                })
                            })
                        })
                    ]
                }),
                (0, i.jsx)(C.Z.Child, { children: this.renderMessage() }),
                this.renderExtraSettings()
            ]
        });
    }
    renderExtraSettings() {
        let { action: e } = this.props.keybind;
        if (e === O.kg4.SWITCH_TO_VOICE_CHANNEL) return (0, i.jsx)(A.Z, { keybind: this.props.keybind });
    }
    constructor(...e) {
        super(...e),
            L(this, 'handleActionChanged', (e) => {
                h.Z.setKeybind({
                    ...this.props.keybind,
                    action: e
                });
            }),
            L(this, 'handleShortcutChange', (e) => {
                h.Z.setKeybind({
                    ...this.props.keybind,
                    shortcut: e
                });
            }),
            L(this, 'handleDeleteKeybind', () => {
                h.Z.deleteKeybind(this.props.keybind.id);
            }),
            L(this, 'handleEnableDisable', () => {
                let { keybind: e } = this.props;
                h.Z.setKeybind({
                    ...this.props.keybind,
                    enabled: !e.enabled
                });
            });
    }
}
class w extends s.PureComponent {
    componentDidMount() {
        h.Z.enableAll(!1);
    }
    componentWillUnmount() {
        h.Z.enableAll(!0);
    }
    get keybindActionTypes() {
        let { overlaySupported: e, canGoLive: t, allowSoundboard: n, enableClips: i } = this.props,
            s = [
                {
                    value: O.kg4.UNASSIGNED,
                    label: D.intl.string(D.t['0Uh57+'])
                },
                {
                    value: O.kg4.PUSH_TO_TALK,
                    label: D.intl.string(D.t.Y5lgTE)
                },
                {
                    value: O.kg4.PUSH_TO_TALK_PRIORITY,
                    label: D.intl.string(D.t.DkSwJy)
                },
                {
                    value: O.kg4.PUSH_TO_MUTE,
                    label: D.intl.string(D.t.hSCRqa)
                },
                {
                    value: O.kg4.TOGGLE_MUTE,
                    label: D.intl.string(D.t.PlkYKC)
                },
                {
                    value: O.kg4.TOGGLE_DEAFEN,
                    label: D.intl.string(D.t.NvGq1N)
                },
                {
                    value: O.kg4.TOGGLE_VOICE_MODE,
                    label: D.intl.string(D.t.Wa5H9f)
                },
                {
                    value: O.kg4.TOGGLE_STREAMER_MODE,
                    label: D.intl.string(D.t.BK0NcX)
                }
            ];
        return (
            e &&
                (s.push({
                    value: O.kg4.TOGGLE_OVERLAY,
                    label: D.intl.string(D.t.mseZsL)
                }),
                s.push({
                    value: O.kg4.TOGGLE_OVERLAY_INPUT_LOCK,
                    label: D.intl.string(D.t.VsAZcH)
                }),
                s.push({
                    value: O.kg4.OVERLAY_ACTIVATE_REGION_TEXT_WIDGET,
                    label: D.intl.string(D.t.hurHWl)
                })),
            t &&
                ((0, j.isWindows)() || f.Z.getUseSystemScreensharePicker()) &&
                s.push({
                    value: O.kg4.TOGGLE_GO_LIVE_STREAMING,
                    label: D.intl.string(D.t.ybdjJC)
                }),
            (0, j.isDesktop)() &&
                (s.push(
                    {
                        value: O.kg4.NAVIGATE_BACK,
                        label: D.intl.string(D.t.gRSaOT)
                    },
                    {
                        value: O.kg4.NAVIGATE_FORWARD,
                        label: D.intl.string(D.t.zOXpjY)
                    },
                    {
                        value: O.kg4.SWITCH_TO_VOICE_CHANNEL,
                        label: D.intl.string(D.t.ty7Lx8)
                    },
                    {
                        value: O.kg4.DISCONNECT_FROM_VOICE_CHANNEL,
                        label: D.intl.string(D.t.CV7mT0)
                    }
                ),
                n &&
                    s.push(
                        {
                            value: O.kg4.SOUNDBOARD,
                            label: D.intl.string(D.t.yPH4xs)
                        },
                        {
                            value: O.kg4.SOUNDBOARD_HOLD,
                            label: D.intl.string(D.t['1xFbPz'])
                        }
                    ),
                i &&
                    s.push({
                        value: O.kg4.SAVE_CLIP,
                        label: D.intl.string(D.t.U4URzM)
                    })),
            s
        );
    }
    get keybindDescriptions() {
        let { overlaySupported: e, canGoLive: t, enableClips: n } = this.props,
            i = {
                [O.kg4.UNASSIGNED]: D.intl.string(D.t.rvlNLi),
                [O.kg4.PUSH_TO_MUTE]: D.intl.string(D.t.xtESio),
                [O.kg4.PUSH_TO_TALK]: D.intl.string(D.t.wTcBS0),
                [O.kg4.PUSH_TO_TALK_PRIORITY]: D.intl.string(D.t.FhHvWF),
                [O.kg4.TOGGLE_MUTE]: D.intl.string(D.t.X2fbUl),
                [O.kg4.TOGGLE_DEAFEN]: D.intl.string(D.t.MjREZW),
                [O.kg4.TOGGLE_VOICE_MODE]: D.intl.string(D.t.snm5YW),
                [O.kg4.TOGGLE_STREAMER_MODE]: D.intl.string(D.t.YszLLy)
            };
        return e && ((i[O.kg4.TOGGLE_OVERLAY] = D.intl.string(D.t.LbPesb)), (i[O.kg4.TOGGLE_OVERLAY_INPUT_LOCK] = D.intl.string(D.t.IoP5vb))), t && (0, j.isWindows)() && (i[O.kg4.TOGGLE_GO_LIVE_STREAMING] = D.intl.string(D.t.s4C239)), (0, j.isDesktop)() && ((i[O.kg4.NAVIGATE_BACK] = D.intl.string(D.t.nKDlEh)), (i[O.kg4.NAVIGATE_FORWARD] = D.intl.string(D.t.DK0FFh)), (i[O.kg4.SOUNDBOARD] = (0, j.isWindows)() ? D.intl.string(D.t['5wJefH']) : D.intl.string(D.t.gzjsSE)), (i[O.kg4.SOUNDBOARD_HOLD] = (0, j.isWindows)() ? D.intl.string(D.t.RRkZc3) : D.intl.string(D.t.laNlTk)), n && (i[O.kg4.SAVE_CLIP] = D.intl.string(D.t.z3Wbam))), i;
    }
    renderKeybinds(e) {
        return e.map((e) =>
            (0, i.jsx)(
                'div',
                {
                    className: P.row,
                    children: (0, i.jsx)(
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
            return (0, i.jsx)(M, {
                className: Z.marginTop60,
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
                .reject((e) => e.managed && ![O.kg4.OVERLAY_ACTIVATE_REGION_TEXT_WIDGET, O.kg4.SAVE_CLIP].includes(e.action))
                .reject((t) => !e && t.action === O.kg4.SAVE_CLIP)
                .reject((e) => !this.props.allowSoundboard && (e.action === O.kg4.SOUNDBOARD || e.action === O.kg4.SOUNDBOARD_HOLD))
                .sortBy((e) => e.id)
                .sortBy((e) => (!0 === e.managed ? -1 : 0))
                .value();
        return (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(u.hjN, {
                    tag: u.RB0.H1,
                    title: D.intl.string(D.t.T9DA2N),
                    children: j.isPlatformEmbedded
                        ? (0, i.jsxs)(i.Fragment, {
                              children: [
                                  (0, i.jsxs)(C.Z, {
                                      justify: C.Z.Justify.BETWEEN,
                                      className: Z.marginBottom20,
                                      children: [
                                          (0, i.jsx)(C.Z.Child, {
                                              grow: 0,
                                              children: (0, i.jsx)(u.Wn, {
                                                  messageType: u.QYI.WARNING,
                                                  children: D.intl.string(D.t.NoKjWF)
                                              })
                                          }),
                                          (0, i.jsx)(C.Z.Child, {
                                              wrap: !0,
                                              grow: 0,
                                              children: (0, i.jsx)(u.zxk, {
                                                  size: u.PhG.LARGE,
                                                  onClick: this.handleAddKeybind,
                                                  children: D.intl.string(D.t.zk6Xbm)
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
                              className: P.browserNotice,
                              children: D.intl.format(D.t.mPi3Fx, { downloadLink: O.EYA.DOWNLOAD })
                          })
                }),
                (0, i.jsx)(u.$i$, {}),
                (0, i.jsxs)(u.hjN, {
                    tag: u.RB0.H1,
                    title: D.intl.string(D.t.Lz5KHB),
                    className: Z.marginTop60,
                    children: [
                        (0, i.jsxs)('div', {
                            className: P.defaultKeybind,
                            children: [
                                (0, i.jsx)(u.Text, {
                                    variant: 'text-md/normal',
                                    children: D.intl.string(D.t.sMWLBg)
                                }),
                                (0, i.jsx)('div', {
                                    className: P.defaultKeybindShortcutGroup,
                                    children: (0, i.jsx)(u.M2$, {
                                        shortcut: x._.binds['0'],
                                        className: P.__invalid_defaultKeybindShortcut
                                    })
                                })
                            ]
                        }),
                        (0, i.jsx)(u.$i$, {}),
                        (0, i.jsx)(k, {
                            children: (e) =>
                                (0, i.jsx)(i.Fragment, {
                                    children: e.map((e, t) => {
                                        let n = (0, _.UD)(e),
                                            l = (0, _.U6)(e),
                                            a = B[e];
                                        return (0, i.jsxs)(
                                            'div',
                                            {
                                                className: P.defaultKeybindGroup,
                                                children: [
                                                    (0, i.jsx)(u.X6q, {
                                                        variant: 'heading-deprecated-12/semibold',
                                                        className: r()(P.defaultKeybindGroupHeader, { [P.defaultKeybindGroupWithDescription]: null != l }),
                                                        children: n
                                                    }),
                                                    null != l &&
                                                        (0, i.jsx)(u.Text, {
                                                            color: 'header-secondary',
                                                            className: P.defaultKeybindGroupDescription,
                                                            variant: 'text-sm/normal',
                                                            children: l
                                                        }),
                                                    (0, i.jsx)(u.$i$, {}),
                                                    a.map((e) =>
                                                        (0, i.jsxs)(
                                                            s.Fragment,
                                                            {
                                                                children: [
                                                                    (0, i.jsxs)('div', {
                                                                        className: P.defaultKeybind,
                                                                        children: [
                                                                            (0, i.jsx)(u.Text, {
                                                                                variant: 'text-md/normal',
                                                                                children: e.description
                                                                            }),
                                                                            (0, i.jsx)('div', {
                                                                                className: P.defaultKeybindShortcutGroup,
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
            L(this, 'handleAddKeybind', () => {
                h.Z.addKeybind();
            });
    }
}
function U() {
    let e = (0, c.e7)([I.ZP], () => I.ZP.getState()),
        t = (0, c.e7)([f.Z], () => (0, N.Z)(f.Z)),
        n = (0, c.e7)([T.Z], () => T.Z.isSupported()),
        s = (0, E.Go)();
    return (0, i.jsx)(w, {
        keybinds: e,
        canGoLive: t,
        overlaySupported: n,
        allowSoundboard: (0, j.isWindows)(),
        enableClips: s
    });
}
