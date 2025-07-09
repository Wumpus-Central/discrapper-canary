(n.d(t, { Z: () => es }), n(539854), n(388685));
var i = n(255367),
    r = n(73800),
    s = n(120356),
    a = n.n(s),
    l = n(392711),
    o = n.n(l),
    c = n(442837),
    d = n(524437),
    u = n(481060),
    m = n(668781),
    p = n(292556),
    g = n(87051),
    h = n(419363),
    f = n(761781),
    b = n(818083),
    x = n(688465),
    _ = n(890022),
    j = n(688907),
    E = n(487419),
    O = n(197344),
    C = n(476756),
    v = n(734934),
    S = n(223683),
    T = n(312400),
    N = n(115345),
    I = n(392888),
    y = n(106371),
    A = n(995774),
    P = n(921801),
    R = n(460181),
    D = n(292959),
    Z = n(9156),
    w = n(912101),
    k = n(358085),
    L = n(709054),
    B = n(695346),
    M = n(675478),
    U = n(33656),
    V = n(726985),
    G = n(981631),
    F = n(468788),
    H = n(388032),
    z = n(589848),
    W = n(20493);
function Y(e, t, n) {
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
function K(e) {
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
                Y(e, t, n[t]);
            }));
    }
    return e;
}
function q(e, t) {
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
function X(e) {
    let { label: t, enabled: n, disabled: r, onPreview: s, onChange: a, tooltip: l } = e;
    return (0, i.jsx)(u.j7V, {
        className: z.soundRow,
        value: n,
        onChange: a,
        disabled: r,
        tooltipNote: l,
        children: (0, i.jsxs)('div', {
            className: z.notificationSound,
            children: [
                (0, i.jsx)('div', {
                    className: z.soundName,
                    children: t
                }),
                (0, i.jsx)(u.P3F, {
                    className: z.soundIcon,
                    onClick: s,
                    'aria-label': H.intl.string(H.t.Kd4uxM),
                    children: (0, i.jsx)(u.gj8, {
                        size: 'xs',
                        color: 'currentColor',
                        className: z.icon,
                        'aria-hidden': !0
                    })
                })
            ]
        })
    });
}
function Q(e) {
    let { disabledSounds: t, disableAllSounds: n, notifyMessagesInSelectedChannel: s } = e,
        l = r.useRef(null),
        o = (0, v.p)(),
        c = r.useCallback((e, t) => {
            (t.stopPropagation(), t.preventDefault(), null != l.current && l.current.stop(), (l.current = (0, R.GN)(e)));
        }, []),
        d = r.useCallback(
            (e, n) => {
                let i = t.filter((t) => t !== e);
                (n || i.push(e), p.default.setDisabledSounds(i));
            },
            [t]
        );
    r.useEffect(() => () => {
        var e;
        null == (e = l.current) || e.stop();
    });
    let m = [
            {
                label: H.intl.string(H.t.pz71xM),
                sound: 'message1',
                focusModeDisabled: o
            },
            {
                label: H.intl.string(H.t.hK51Ym),
                sound: 'deafen'
            },
            {
                label: H.intl.string(H.t.XiejaG),
                sound: 'undeafen'
            },
            {
                label: H.intl.string(H.t['w4m94+']),
                sound: 'mute'
            },
            {
                label: H.intl.string(H.t.YqAjX1),
                sound: 'unmute'
            },
            {
                label: H.intl.string(H.t['juL9/P']),
                sound: 'disconnect'
            },
            {
                label: H.intl.string(H.t.x98vQk),
                sound: 'ptt_start'
            },
            {
                label: H.intl.string(H.t['1HjRqK']),
                sound: 'ptt_stop'
            },
            {
                label: H.intl.string(H.t['9JB1Cg']),
                sound: 'user_join'
            },
            {
                label: H.intl.string(H.t.KUBBNj),
                sound: 'user_leave'
            },
            {
                label: H.intl.string(H.t.EZjqUV),
                sound: 'user_moved'
            },
            {
                label: H.intl.string(H.t.LnNlQk),
                sound: 'call_calling'
            },
            {
                label: H.intl.string(H.t.XBrJT0),
                sound: 'call_ringing'
            },
            {
                label: H.intl.string(H.t['Nd8P5+']),
                sound: 'stream_started'
            },
            {
                label: H.intl.string(H.t['9bYj+P']),
                sound: 'stream_ended'
            },
            {
                label: H.intl.string(H.t.KccUIy),
                sound: 'stream_user_joined'
            },
            {
                label: H.intl.string(H.t.dsjkiI),
                sound: 'stream_user_left'
            },
            {
                label: H.intl.string(H.t.nFOcf3),
                sound: 'activity_launch'
            },
            {
                label: H.intl.string(H.t['a6lw/v']),
                sound: 'activity_end'
            },
            {
                label: H.intl.string(H.t.KaFxra),
                sound: 'activity_user_join'
            },
            {
                label: H.intl.string(H.t.S14z9v),
                sound: 'activity_user_left'
            },
            {
                label: H.intl.string(H.t.CP3DCw),
                sound: 'reconnect'
            }
        ],
        g = null != O.Z.useHolidaySoundpack();
    return (0, i.jsx)(P.F, {
        setting: V.s6.NOTIFICATIONS_SOUNDS,
        children: (0, i.jsxs)(u.hjN, {
            children: [
                g
                    ? (0, i.jsxs)(i.Fragment, {
                          children: [
                              (0, i.jsx)(u.vwX, {
                                  className: W.marginBottom20,
                                  children: H.intl.string(H.t.fgSHf3)
                              }),
                              (0, i.jsx)(C.Z, {})
                          ]
                      })
                    : null,
                (0, i.jsx)(u.vwX, {
                    className: a()(W.marginBottom20, W.marginTop20),
                    children: H.intl.string(H.t.MKWyKS)
                }),
                (0, i.jsx)(u.j7V, {
                    note: H.intl.string(H.t['7oXUio']),
                    value: s,
                    onChange: p.default.setNotifyMessagesInSelectedChannel,
                    children: H.intl.string(H.t.lF5GGR)
                }),
                (0, i.jsx)(u.j7V, {
                    note: H.intl.string(H.t['+B0XLC']),
                    value: n,
                    onChange: p.default.toggleDisableAllSounds,
                    children: H.intl.string(H.t['2ZhCOT'])
                }),
                m.map((e) => {
                    let { label: r, sound: s, focusModeDisabled: a } = e;
                    return (0, i.jsx)(
                        X,
                        {
                            label: r,
                            disabled: n || !0 === a,
                            tooltip: a ? H.intl.string(H.t.cIRG0t) : void 0,
                            onChange: (e) => d(s, e),
                            onPreview: (e) => c(s, e),
                            enabled: !n && !t.includes(s) && !0 !== a
                        },
                        s
                    );
                })
            ]
        })
    });
}
function J() {
    let e = (0, c.e7)([E.Z], () => E.Z.getGuildAlertSettings()),
        [t, n] = r.useState(null),
        s = L.default.keys(e).map((t) => {
            let n = e[t];
            return {
                label: n.guildName,
                value: n.guildId
            };
        });
    return 0 === Object.keys(e).length
        ? null
        : (0, i.jsxs)(P.F, {
              setting: V.s6.NOTIFICATIONS_COMMUNITY_ACTIVITY_ALERTS,
              children: [
                  (0, i.jsxs)(u.X6q, {
                      variant: 'heading-lg/semibold',
                      className: a()(z.titleWithBeta, W.marginBottom20),
                      children: [H.intl.string(H.t.D9yVAA), (0, i.jsx)(x.Z, {})]
                  }),
                  (0, i.jsx)(u.R94, {
                      type: u.geA.DESCRIPTION,
                      className: W.marginBottom20,
                      children: H.intl.string(H.t['0PhAOD'])
                  }),
                  (0, i.jsxs)(u.xJW, {
                      title: H.intl.string(H.t.Q0PsXV),
                      children: [
                          (0, i.jsx)(u.q4e, {
                              className: null != t ? W.marginBottom20 : W.marginBottom40,
                              value: t,
                              onChange: (e) => {
                                  n(e);
                              },
                              options: s
                          }),
                          null != t
                              ? (0, i.jsxs)('div', {
                                    className: W.marginTop20,
                                    children: [
                                        (0, i.jsxs)(P.F, {
                                            setting: V.s6.NOTIFICATIONS_COMMUNITY_IN_APP_ALERTS,
                                            children: [
                                                (0, i.jsx)(u.j7V, {
                                                    className: W.marginBottom20,
                                                    note: H.intl.string(H.t['z8Td4+']),
                                                    value: !e[t].disableRaidAlertNag,
                                                    onChange: () => {
                                                        (0, M.PS)(
                                                            t,
                                                            (e) => {
                                                                e.disableRaidAlertNag = !e.disableRaidAlertNag;
                                                            },
                                                            M.fy.INFREQUENT_USER_ACTION
                                                        );
                                                    },
                                                    hideBorder: !0,
                                                    children: H.intl.string(H.t.u6dc5O)
                                                }),
                                                (0, i.jsx)(u.$i$, { className: a()(W.marginTop20, W.marginBottom40) })
                                            ]
                                        }),
                                        (0, i.jsxs)(P.F, {
                                            setting: V.s6.NOTIFICATIONS_COMMUNITY_PUSH_NOTIFICATIONS,
                                            children: [
                                                (0, i.jsx)(u.j7V, {
                                                    className: W.marginBottom20,
                                                    note: H.intl.string(H.t.PyxXs7),
                                                    value: !e[t].disableRaidAlertPush,
                                                    onChange: () => {
                                                        (0, M.PS)(
                                                            t,
                                                            (e) => {
                                                                e.disableRaidAlertPush = !e.disableRaidAlertPush;
                                                            },
                                                            M.fy.INFREQUENT_USER_ACTION
                                                        );
                                                    },
                                                    hideBorder: !0,
                                                    children: H.intl.string(H.t.P8MG6u)
                                                }),
                                                (0, i.jsx)(u.$i$, { className: a()(W.marginTop20, W.marginBottom40) })
                                            ]
                                        })
                                    ]
                                })
                              : null,
                          null != t ? null : (0, i.jsx)(u.$i$, { className: a()(W.marginTop20, W.marginBottom40) })
                      ]
                  })
              ]
          });
}
class $ extends r.PureComponent {
    handleDesktopChange(e) {
        let t = e ? G.qrD.ALL : G.qrD.NEVER;
        if (t !== G.qrD.NEVER)
            w.Z.requestPermission((e) => {
                let t = e ? G.$Ab.ENABLED : G.$Ab.BLOCKED;
                p.default.setPermissionsState(t, 'UserSettingsModal');
            });
        else p.default.setDesktopType(t);
    }
    handleTTSChange(e) {
        let t = e.value;
        p.default.setTTSType(t);
    }
    render() {
        let { desktopType: e, afkTimeout: t, disableUnreadBadge: n, taskbarFlash: r, disabledSounds: s, disableAllSounds: l, notifyMessagesInSelectedChannel: c, focusMode: d } = this.props,
            m = k.isPlatformEmbedded && (0, k.isWindows)(),
            p = o()
                .range(1, 11)
                .map((e) => ({
                    value: 60 * e,
                    label: H.intl.formatToPlainString(H.t.iXLF9f, { minutes: e })
                }));
        return (0, i.jsxs)(u.hjN, {
            tag: u.RB0.H1,
            title: H.intl.string(H.t.HcoRu7),
            children: [
                (0, i.jsx)(P.F, {
                    setting: V.s6.NOTIFICATIONS_ENABLE_DESKTOP,
                    children: (0, i.jsx)(u.j7V, {
                        className: W.marginBottom20,
                        value: e !== G.qrD.NEVER && !d,
                        onChange: this.handleDesktopChange,
                        note: H.intl.string(H.t.wF9ih4),
                        disabled: d,
                        tooltipNote: d ? H.intl.string(H.t.cIRG0t) : void 0,
                        children: H.intl.string(H.t['/0WClp'])
                    })
                }),
                (0, i.jsx)(et, {}),
                (0, i.jsx)(P.F, {
                    setting: V.s6.NOTIFICATIONS_UNREAD_MESSAGE_BADGE,
                    children: (0, i.jsx)(u.j7V, {
                        className: m ? W.marginBottom20 : W.marginBottom40,
                        value: !n,
                        note: H.intl.string(H.t['9K4qwc']),
                        onChange: this.handleToggleShowUnreadBadge,
                        children: H.intl.string(H.t.VH8AIC)
                    })
                }),
                (0, i.jsx)(P.F, {
                    setting: V.s6.NOTIFICATIONS_ENABLE_TASKBAR_FLASHING,
                    children: (0, i.jsx)(u.j7V, {
                        className: W.marginBottom40,
                        value: r,
                        note: H.intl.string(H.t['bd4j4+']),
                        onChange: this.handleToggleShowFlash,
                        children: H.intl.string(H.t.xSmFQE)
                    })
                }),
                (0, i.jsx)(en, {}),
                (0, i.jsx)(el, {}),
                (0, i.jsx)(ea, {}),
                (0, i.jsx)(P.F, {
                    setting: V.s6.NOTIFICATIONS_PUSH_INACTIVE_TIMEOUT,
                    children: (0, i.jsxs)(u.xJW, {
                        title: H.intl.string(H.t.TTvjd3),
                        children: [
                            (0, i.jsx)(u.q4e, {
                                value: t,
                                onChange: B.CM.updateSetting,
                                options: p
                            }),
                            (0, i.jsx)(u.R94, {
                                type: u.geA.DESCRIPTION,
                                className: W.marginTop8,
                                children: H.intl.string(H.t.Xytv9P)
                            }),
                            (0, i.jsx)(u.$i$, { className: a()(W.marginTop40, W.marginBottom40) })
                        ]
                    })
                }),
                this.renderTTS(),
                (0, i.jsx)(J, {}),
                (0, i.jsx)(u.xJW, {
                    children: (0, i.jsx)(Q, {
                        disabledSounds: s,
                        disableAllSounds: l,
                        notifyMessagesInSelectedChannel: c
                    })
                }),
                (0, i.jsx)(U.Z, {})
            ]
        });
    }
    constructor(...e) {
        (super(...e),
            Y(this, 'handleToggleShowUnreadBadge', () => {
                p.default.setDisableUnreadBadge(!this.props.disableUnreadBadge);
            }),
            Y(this, 'handleToggleShowFlash', () => {
                p.default.setTaskbarFlash(!this.props.taskbarFlash);
            }),
            Y(this, 'renderTTS', () => {
                if (!h.Zh) return null;
                let e = [
                    {
                        name: H.intl.string(H.t.B1AGeH),
                        value: G.PrB.ALL_CHANNELS
                    },
                    {
                        name: H.intl.string(H.t.uM2rNj),
                        value: G.PrB.SELECTED_CHANNEL
                    },
                    {
                        name: H.intl.string(H.t.DYO5Oj),
                        value: G.PrB.NEVER
                    }
                ];
                return (0, i.jsxs)(P.F, {
                    setting: V.s6.NOTIFICATIONS_TEXT_TO_SPEECH,
                    children: [
                        (0, i.jsxs)(u.xJW, {
                            title: H.intl.string(H.t.VIm5MD),
                            children: [
                                (0, i.jsx)(u.R94, {
                                    type: u.geA.DESCRIPTION,
                                    className: W.marginBottom8,
                                    children: H.intl.string(H.t['+4dnAw'])
                                }),
                                (0, i.jsx)(u.FXm, {
                                    options: e,
                                    onChange: this.handleTTSChange,
                                    value: this.props.ttsType
                                })
                            ]
                        }),
                        (0, i.jsx)(u.$i$, { className: a()(W.marginTop40, W.marginBottom40) })
                    ]
                });
            }));
    }
}
let ee = (0, b.B)({
    kind: 'user',
    id: '2024-01_mention_on_all_messages',
    label: 'Mention on all messages',
    defaultConfig: { enabled: !1 },
    treatments: [
        {
            id: 1,
            label: 'Increment mention count when receiving a message in a channel set to all messages',
            config: { enabled: !0 }
        }
    ]
});
function et() {
    let e = ee.useExperiment({ location: 'settings' }, { autoTrackExposure: !1 }).enabled,
        t = (0, c.e7)([Z.ZP], () => Z.ZP.mentionOnAllMessages);
    return e
        ? (0, i.jsx)(P.F, {
              setting: V.s6.NOTIFICATIONS_MENTION_ON_ALL_MESSAGES,
              children: (0, i.jsx)(u.j7V, {
                  className: W.marginBottom20,
                  value: t,
                  onChange: (e) => {
                      g.Z.setAccountFlag(F.c.MENTION_ON_ALL_MESSAGES, e);
                  },
                  note: "Increments the mention count when receiving a message in a channel set to 'All Messages'",
                  children: 'Mention on all messages?'
              })
          })
        : null;
}
function en() {
    let e = T.xT.useExperiment({ location: 'UserSettingsNotifications' }, { autoTrackExposure: !1 }).enabled,
        { manuallyOpen: t } = T.fs.useExperiment({ location: 'UserSettingsNotifications' }, { autoTrackExposure: !1 }),
        n = (0, c.e7)([Z.ZP], () => Z.ZP.useNewNotifications),
        [s, l] = r.useState(!1);
    return e && (n || t)
        ? (0, i.jsxs)(i.Fragment, {
              children: [
                  n
                      ? (0, i.jsx)(P.F, {
                            setting: V.s6.NOTIFICATIONS_UNREAD_SETTINGS,
                            children: (0, i.jsx)(u.j7V, {
                                className: W.marginBottom40,
                                value: n,
                                disabled: s || !n,
                                note: H.intl.string(H.t.frbLrK),
                                onChange: () => ei(l),
                                children: H.intl.string(H.t.z21l8P)
                            })
                        })
                      : t
                        ? (0, i.jsx)(P.F, {
                              setting: V.s6.NOTIFICATIONS_UNREAD_SETTINGS,
                              children: (0, i.jsx)(u.j7V, {
                                  className: W.marginBottom40,
                                  value: n,
                                  disabled: s || n,
                                  note: 'Turns on the new notification system',
                                  onChange: (e) => {
                                      g.Z.setAccountFlag(F.c.USE_NEW_NOTIFICATIONS, e);
                                  },
                                  children: H.intl.string(H.t.z21l8P)
                              })
                          })
                        : null,
                  (0, i.jsxs)(P.F, {
                      setting: V.s6.NOTIFICATIONS_NEW_SETTINGS,
                      children: [
                          (0, i.jsx)(u.xJW, {
                              title: 'New Notification Settings (Advanced, Staff Only)',
                              children: (0, i.jsxs)('div', {
                                  style: {
                                      display: 'flex',
                                      gap: 16
                                  },
                                  children: [
                                      (0, i.jsx)(P.F, {
                                          setting: V.s6.NOTIFICATIONS_RESTORE_MOST_RECENT_SNAPSHOT,
                                          children: (0, i.jsx)(u.zxk, {
                                              variant: 'primary',
                                              text: 'Restore most recent snapshot',
                                              onClick: S.KP
                                          })
                                      }),
                                      (0, i.jsx)(P.F, {
                                          setting: V.s6.NOTIFICATIONS_LAUNCH_MIGRATION,
                                          children: (0, i.jsx)(u.zxk, {
                                              variant: 'primary',
                                              text: 'Launch Migration',
                                              onClick: () => {
                                                  (0, I.R)(!0);
                                              }
                                          })
                                      }),
                                      (0, i.jsx)(P.F, {
                                          setting: V.s6.NOTIFICATIONS_TOGGLE_NEW_SYSTEM,
                                          children: (0, i.jsx)(u.j7V, {
                                              hideBorder: !0,
                                              value: n,
                                              onChange: (e) => {
                                                  g.Z.setAccountFlag(F.c.USE_NEW_NOTIFICATIONS, e);
                                              },
                                              children: 'Toggle new system on/off'
                                          })
                                      })
                                  ]
                              })
                          }),
                          (0, i.jsx)(u.$i$, { className: a()(W.marginTop40, W.marginBottom40) })
                      ]
                  })
              ]
          })
        : null;
}
async function ei(e) {
    e(!0);
    let t = await (0, S.Tn)();
    (0 === t.length
        ? await (0, N.oL)()
        : m.Z.show({
              title: H.intl.string(H.t['cY+Ooa']),
              body: H.intl.format(H.t['7zTJJS'], { date: new Date(t[t.length - 1].recorded_at) }),
              cancelText: H.intl.string(H.t['ETE/oK']),
              confirmText: H.intl.string(H.t.Rm96T0),
              onConfirm: N.oL
          }),
        e(!1));
}
function er(e) {
    let t = (0, v.p)();
    return (0, i.jsx)($, q(K({}, e), { focusMode: t }));
}
function es() {
    let e = (0, c.cj)([D.Z], () => ({
        disableUnreadBadge: D.Z.getDisableUnreadBadge(),
        taskbarFlash: D.Z.taskbarFlash,
        disabledSounds: D.Z.getDisabledSounds(),
        disableAllSounds: D.Z.getDisableAllSounds(),
        desktopType: D.Z.getDesktopType(),
        ttsType: D.Z.getTTSType(),
        notifyMessagesInSelectedChannel: D.Z.getNotifyMessagesInSelectedChannel()
    }));
    return (0, i.jsx)(er, q(K({}, e), { afkTimeout: B.CM.useSetting() }));
}
function ea() {
    let e = (0, _._x)('notification_settings'),
        t = (0, j.BH)(),
        n = (0, j.nC)(),
        r = (0, c.e7)([f.Z], () => f.Z.currentUserApplicationIds.size > 0);
    if (!e) return null;
    let s = [
        {
            name: H.intl.string(H.t.PCRbS0),
            value: d.Tv.ACTIVITY_NOTIFICATIONS_ENABLED
        },
        {
            name: H.intl.string(H.t.UBa6pa),
            value: d.Tv.ONLY_GAMES_PLAYED,
            disabled: !r,
            desc: r ? null : H.intl.string(H.t.XIH6xM)
        },
        {
            name: H.intl.string(H.t.TCxJ8v),
            value: d.Tv.ACTIVITY_NOTIFICATIONS_DISABLED
        }
    ];
    return (0, i.jsxs)(P.F, {
        setting: V.s6.NOTIFICATIONS_GAME_ACTIVITY,
        children: [
            (0, i.jsxs)(u.xJW, {
                title: H.intl.string(H.t.omtoJy),
                className: W.marginBottom20,
                children: [
                    (0, i.jsx)(u.R94, {
                        type: u.geA.DESCRIPTION,
                        className: W.marginBottom8,
                        children: H.intl.string(H.t.ncS4CA)
                    }),
                    (0, i.jsx)(u.FXm, {
                        options: s,
                        onChange: (e) => {
                            B.YT.updateSetting(e.value);
                        },
                        value: t
                    })
                ]
            }),
            (0, i.jsx)(u.j7V, {
                onChange: () => {
                    B.Qq.updateSetting(!n);
                },
                value: n,
                children: H.intl.string(H.t.SZue3N)
            })
        ]
    });
}
function el() {
    let e = B.fz.useSetting(),
        t = [
            {
                name: H.intl.string(H.t['9x/Rtb']),
                value: d.Ns.NOTIFICATIONS_ENABLED
            },
            {
                name: H.intl.string(H.t.fJAbQU),
                value: d.Ns.ONLY_DMS
            },
            {
                name: H.intl.string(H.t['xu+UDQ']),
                value: d.Ns.NOTIFICATIONS_DISABLED
            }
        ];
    return y.Z.getCurrentConfig({ location: 'webSettings' }).enableInAppNotifications
        ? (0, i.jsxs)(P.F, {
              setting: V.s6.NOTIFICATIONS_REACTIONS,
              children: [
                  (0, i.jsxs)(u.xJW, {
                      title: H.intl.string(H.t.Rq0NFh),
                      children: [
                          (0, i.jsx)(u.R94, {
                              type: u.geA.DESCRIPTION,
                              className: W.marginBottom8,
                              children: H.intl.string(H.t.oWF6eX)
                          }),
                          (0, i.jsx)(u.FXm, {
                              options: t,
                              onChange: (t) => {
                                  (0, A.MR)(t.value, e);
                              },
                              value: e
                          })
                      ]
                  }),
                  (0, i.jsx)(u.$i$, { className: a()(W.marginTop40, W.marginBottom40) })
              ]
          })
        : null;
}
