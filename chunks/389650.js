n.d(t, {
    Z: function () {
        return U;
    }
}),
    n(47120),
    n(653041);
var i = n(200651),
    r = n(192379),
    s = n(120356),
    a = n.n(s),
    l = n(392711),
    o = n.n(l),
    c = n(442837),
    d = n(692547),
    u = n(481060),
    m = n(660216),
    g = n(225433),
    h = n(825209),
    p = n(721383),
    x = n(612226),
    f = n(714338),
    E = n(924557),
    _ = n(600164),
    C = n(74299),
    T = n(131951),
    S = n(556296),
    b = n(808506),
    I = n(63063),
    N = n(358085),
    v = n(13140),
    A = n(210887),
    j = n(659947),
    O = n(981631),
    R = n(420212),
    P = n(388032),
    D = n(877615),
    y = n(684309),
    B = n(232186);
function Z(e, t, n) {
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
    let { children: t } = e;
    return t([x.Q2.MESSAGE, x.Q2.NAVIGATION, x.Q2.DND, x.Q2.CHAT, x.Q2.VOICE_AND_VIDEO, x.Q2.MISCELLANEOUS]);
}
let M = o()((0, x.Rv)())
        .filter((e) => e.description !== P.intl.string(P.t.HnNtEB))
        .groupBy((e) => e.group)
        .value(),
    k = c.ZP.connectStores([A.Z], () => ({ theme: A.Z.theme }))(u.EmptyState);
class w extends r.PureComponent {
    renderMessage() {
        let { keybind: e } = this.props,
            t = v.BB(e.shortcut);
        return f.Z.hasBind(t)
            ? (0, i.jsx)(u.FormText, {
                  className: D.keybindMessage,
                  type: u.FormTextTypes.DESCRIPTION,
                  style: { color: d.Z.unsafe_rawColors.RED_400.css },
                  children: P.intl.string(P.t['7lQlw8'])
              })
            : R.Sp.has(t)
              ? (0, i.jsx)(u.FormText, {
                    className: D.keybindMessage,
                    type: u.FormTextTypes.DESCRIPTION,
                    style: { color: d.Z.unsafe_rawColors.RED_400.css },
                    children: P.intl.format(P.t.MOIaNT, { keyboardNavArticle: I.Z.getArticleURL(O.BhN.KEYBOARD_NAVIGATION) })
                })
              : (0, i.jsx)(u.FormText, {
                    className: D.keybindMessage,
                    type: u.FormTextTypes.DESCRIPTION,
                    children: this.props.keybindDescriptions[e.action]
                });
    }
    render() {
        let { managed: e, enabled: t } = this.props.keybind;
        return (0, i.jsxs)(_.Z, {
            direction: _.Z.Direction.VERTICAL,
            className: a()(D.keybindGroup, y.card),
            children: [
                !e &&
                    (0, i.jsx)(g.Z, {
                        'aria-label': P.intl.string(P.t.qEHmmJ),
                        className: D.removeKeybind,
                        onClick: this.handleDeleteKeybind,
                        look: g.Z.Looks.FILLED
                    }),
                (0, i.jsxs)(_.Z, {
                    className: B.marginBottom8,
                    children: [
                        (0, i.jsx)(_.Z.Child, {
                            basis: '45%',
                            children: (0, i.jsx)(u.FormItem, {
                                title: P.intl.string(P.t.UUpADw),
                                className: D.item,
                                children: (0, i.jsx)(u.SingleSelect, {
                                    value: this.props.keybind.action,
                                    options: this.props.keybindActionTypes,
                                    onChange: this.handleActionChanged,
                                    isDisabled: e
                                })
                            })
                        }),
                        (0, i.jsx)(_.Z.Child, {
                            basis: '45%',
                            children: (0, i.jsx)(u.FormItem, {
                                title: P.intl.string(P.t['1La4tL']),
                                className: D.item,
                                children: (0, i.jsx)(h.Z, {
                                    defaultValue: this.props.keybind.shortcut,
                                    onChange: this.handleShortcutChange
                                })
                            })
                        }),
                        (0, i.jsx)(_.Z.Child, {
                            grow: 0,
                            shrink: 0,
                            children: (0, i.jsx)(u.FormItem, {
                                className: D.switch,
                                children: (0, i.jsx)(u.Tooltip, {
                                    text: P.intl.string(P.t.uCD7qK),
                                    children: (e) =>
                                        (0, i.jsx)('div', {
                                            ...e,
                                            children: (0, i.jsx)(u.Switch, {
                                                checked: t,
                                                onChange: this.handleEnableDisable
                                            })
                                        })
                                })
                            })
                        })
                    ]
                }),
                (0, i.jsx)(_.Z.Child, { children: this.renderMessage() }),
                this.renderExtraSettings()
            ]
        });
    }
    renderExtraSettings() {
        let { action: e } = this.props.keybind;
        if (e === O.kg4.SWITCH_TO_VOICE_CHANNEL) return (0, i.jsx)(j.Z, { keybind: this.props.keybind });
    }
    constructor(...e) {
        super(...e),
            Z(this, 'handleActionChanged', (e) => {
                m.Z.setKeybind({
                    ...this.props.keybind,
                    action: e
                });
            }),
            Z(this, 'handleShortcutChange', (e) => {
                m.Z.setKeybind({
                    ...this.props.keybind,
                    shortcut: e
                });
            }),
            Z(this, 'handleDeleteKeybind', () => {
                m.Z.deleteKeybind(this.props.keybind.id);
            }),
            Z(this, 'handleEnableDisable', () => {
                let { keybind: e } = this.props;
                m.Z.setKeybind({
                    ...this.props.keybind,
                    enabled: !e.enabled
                });
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
                    value: O.kg4.UNASSIGNED,
                    label: P.intl.string(P.t['0Uh57+'])
                },
                {
                    value: O.kg4.PUSH_TO_TALK,
                    label: P.intl.string(P.t.Y5lgTE)
                },
                {
                    value: O.kg4.PUSH_TO_TALK_PRIORITY,
                    label: P.intl.string(P.t.DkSwJy)
                },
                {
                    value: O.kg4.PUSH_TO_MUTE,
                    label: P.intl.string(P.t.hSCRqa)
                },
                {
                    value: O.kg4.TOGGLE_MUTE,
                    label: P.intl.string(P.t.PlkYKC)
                },
                {
                    value: O.kg4.TOGGLE_DEAFEN,
                    label: P.intl.string(P.t.NvGq1N)
                },
                {
                    value: O.kg4.TOGGLE_VOICE_MODE,
                    label: P.intl.string(P.t.Wa5H9f)
                },
                {
                    value: O.kg4.TOGGLE_STREAMER_MODE,
                    label: P.intl.string(P.t.BK0NcX)
                }
            ];
        return (
            e &&
                (r.push({
                    value: O.kg4.TOGGLE_OVERLAY,
                    label: P.intl.string(P.t.mseZsL)
                }),
                r.push({
                    value: O.kg4.TOGGLE_OVERLAY_INPUT_LOCK,
                    label: P.intl.string(P.t.VsAZcH)
                }),
                r.push({
                    value: O.kg4.OVERLAY_ACTIVATE_REGION_TEXT_WIDGET,
                    label: P.intl.string(P.t.hurHWl)
                })),
            t &&
                ((0, N.isWindows)() || T.Z.getUseSystemScreensharePicker()) &&
                r.push({
                    value: O.kg4.TOGGLE_GO_LIVE_STREAMING,
                    label: P.intl.string(P.t.ybdjJC)
                }),
            (0, N.isDesktop)() &&
                (r.push(
                    {
                        value: O.kg4.NAVIGATE_BACK,
                        label: P.intl.string(P.t.gRSaOT)
                    },
                    {
                        value: O.kg4.NAVIGATE_FORWARD,
                        label: P.intl.string(P.t.zOXpjY)
                    },
                    {
                        value: O.kg4.SWITCH_TO_VOICE_CHANNEL,
                        label: P.intl.string(P.t.ty7Lx8)
                    },
                    {
                        value: O.kg4.DISCONNECT_FROM_VOICE_CHANNEL,
                        label: P.intl.string(P.t.CV7mT0)
                    }
                ),
                n &&
                    r.push(
                        {
                            value: O.kg4.SOUNDBOARD,
                            label: P.intl.string(P.t.yPH4xs)
                        },
                        {
                            value: O.kg4.SOUNDBOARD_HOLD,
                            label: P.intl.string(P.t['1xFbPz'])
                        }
                    ),
                i &&
                    r.push({
                        value: O.kg4.SAVE_CLIP,
                        label: P.intl.string(P.t.U4URzM)
                    })),
            r
        );
    }
    get keybindDescriptions() {
        let { overlaySupported: e, canGoLive: t, enableClips: n } = this.props,
            i = {
                [O.kg4.UNASSIGNED]: P.intl.string(P.t.rvlNLi),
                [O.kg4.PUSH_TO_MUTE]: P.intl.string(P.t.xtESio),
                [O.kg4.PUSH_TO_TALK]: P.intl.string(P.t.wTcBS0),
                [O.kg4.PUSH_TO_TALK_PRIORITY]: P.intl.string(P.t.FhHvWF),
                [O.kg4.TOGGLE_MUTE]: P.intl.string(P.t.X2fbUl),
                [O.kg4.TOGGLE_DEAFEN]: P.intl.string(P.t.MjREZW),
                [O.kg4.TOGGLE_VOICE_MODE]: P.intl.string(P.t.snm5YW),
                [O.kg4.TOGGLE_STREAMER_MODE]: P.intl.string(P.t.YszLLy)
            };
        return e && ((i[O.kg4.TOGGLE_OVERLAY] = P.intl.string(P.t.LbPesb)), (i[O.kg4.TOGGLE_OVERLAY_INPUT_LOCK] = P.intl.string(P.t.IoP5vb))), t && (0, N.isWindows)() && (i[O.kg4.TOGGLE_GO_LIVE_STREAMING] = P.intl.string(P.t.s4C239)), (0, N.isDesktop)() && ((i[O.kg4.NAVIGATE_BACK] = P.intl.string(P.t.nKDlEh)), (i[O.kg4.NAVIGATE_FORWARD] = P.intl.string(P.t.DK0FFh)), (i[O.kg4.SOUNDBOARD] = (0, N.isWindows)() ? P.intl.string(P.t['5wJefH']) : P.intl.string(P.t.gzjsSE)), (i[O.kg4.SOUNDBOARD_HOLD] = (0, N.isWindows)() ? P.intl.string(P.t.RRkZc3) : P.intl.string(P.t.laNlTk)), n && (i[O.kg4.SAVE_CLIP] = P.intl.string(P.t.z3Wbam))), i;
    }
    renderKeybinds(e) {
        return e.map((e) =>
            (0, i.jsx)(
                'div',
                {
                    className: D.row,
                    children: (0, i.jsx)(
                        w,
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
            return (0, i.jsx)(k, {
                className: B.marginTop60,
                children: (0, i.jsx)(u.EmptyStateImage, {
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
                (0, i.jsx)(u.FormSection, {
                    tag: u.FormTitleTags.H1,
                    title: P.intl.string(P.t.T9DA2N),
                    children: N.isPlatformEmbedded
                        ? (0, i.jsxs)(i.Fragment, {
                              children: [
                                  (0, i.jsxs)(_.Z, {
                                      justify: _.Z.Justify.BETWEEN,
                                      className: B.marginBottom20,
                                      children: [
                                          (0, i.jsx)(_.Z.Child, {
                                              grow: 0,
                                              children: (0, i.jsx)(u.HelpMessage, {
                                                  messageType: u.HelpMessageTypes.WARNING,
                                                  children: P.intl.string(P.t.NoKjWF)
                                              })
                                          }),
                                          (0, i.jsx)(_.Z.Child, {
                                              wrap: !0,
                                              grow: 0,
                                              children: (0, i.jsx)(u.Button, {
                                                  size: u.ButtonSizes.LARGE,
                                                  onClick: this.handleAddKeybind,
                                                  children: P.intl.string(P.t.zk6Xbm)
                                              })
                                          })
                                      ]
                                  }),
                                  (0, i.jsx)(u.FormDivider, {}),
                                  (0, i.jsxs)(u.FormSection, {
                                      children: [this.renderKeybinds(t), this.renderEmpty(t)]
                                  })
                              ]
                          })
                        : (0, i.jsx)(u.HelpMessage, {
                              messageType: u.HelpMessageTypes.INFO,
                              textVariant: 'text-lg/medium',
                              className: D.browserNotice,
                              children: P.intl.format(P.t.mPi3Fx, { downloadLink: O.EYA.DOWNLOAD })
                          })
                }),
                (0, i.jsx)(u.FormDivider, {}),
                (0, i.jsxs)(u.FormSection, {
                    tag: u.FormTitleTags.H1,
                    title: P.intl.string(P.t.Lz5KHB),
                    className: B.marginTop60,
                    children: [
                        (0, i.jsxs)('div', {
                            className: D.defaultKeybind,
                            children: [
                                (0, i.jsx)(u.Text, {
                                    variant: 'text-md/normal',
                                    children: P.intl.string(P.t.sMWLBg)
                                }),
                                (0, i.jsx)('div', {
                                    className: D.defaultKeybindShortcutGroup,
                                    children: (0, i.jsx)(u.KeyCombo, {
                                        shortcut: p._.binds['0'],
                                        className: D.__invalid_defaultKeybindShortcut
                                    })
                                })
                            ]
                        }),
                        (0, i.jsx)(u.FormDivider, {}),
                        (0, i.jsx)(L, {
                            children: (e) =>
                                (0, i.jsx)(i.Fragment, {
                                    children: e.map((e, t) => {
                                        let n = (0, x.UD)(e),
                                            s = (0, x.U6)(e),
                                            l = M[e];
                                        return (0, i.jsxs)(
                                            'div',
                                            {
                                                className: D.defaultKeybindGroup,
                                                children: [
                                                    (0, i.jsx)(u.Heading, {
                                                        variant: 'heading-deprecated-12/semibold',
                                                        className: a()(D.defaultKeybindGroupHeader, { [D.defaultKeybindGroupWithDescription]: null != s }),
                                                        children: n
                                                    }),
                                                    null != s &&
                                                        (0, i.jsx)(u.Text, {
                                                            color: 'header-secondary',
                                                            className: D.defaultKeybindGroupDescription,
                                                            variant: 'text-sm/normal',
                                                            children: s
                                                        }),
                                                    (0, i.jsx)(u.FormDivider, {}),
                                                    l.map((e) =>
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
                                                                                children: e.binds.map((e) => (0, i.jsx)(u.KeyCombo, { shortcut: e }, e))
                                                                            })
                                                                        ]
                                                                    }),
                                                                    (0, i.jsx)(u.FormDivider, {})
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
            Z(this, 'handleAddKeybind', () => {
                m.Z.addKeybind();
            });
    }
}
function U() {
    let e = (0, c.e7)([S.Z], () => S.Z.getState()),
        t = (0, c.e7)([T.Z], () => (0, C.Z)(T.Z)),
        n = (0, c.e7)([b.Z], () => b.Z.isSupported()),
        r = (0, E.Go)();
    return (0, i.jsx)(F, {
        keybinds: e,
        canGoLive: t,
        overlaySupported: n,
        allowSoundboard: (0, N.isWindows)(),
        enableClips: r
    });
}
