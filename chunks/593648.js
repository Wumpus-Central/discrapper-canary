(n.d(t, { Z: () => el }), n(539854), n(388685));
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
    C = n(487419),
    E = n(197344),
    O = n(476756),
    v = n(734934),
    S = n(223683),
    T = n(312400),
    N = n(115345),
    I = n(392888),
    y = n(106371),
    A = n(995774),
    P = n(921801),
    R = n(460181),
    D = n(462354),
    Z = n(210176),
    w = n(292959),
    k = n(9156),
    L = n(912101),
    B = n(358085),
    M = n(709054),
    U = n(695346),
    V = n(675478),
    G = n(33656),
    F = n(726985),
    H = n(981631),
    W = n(468788),
    z = n(388032),
    Y = n(589848),
    K = n(20493);
function q(e, t, n) {
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
function X(e) {
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
                q(e, t, n[t]);
            }));
    }
    return e;
}
function J(e, t) {
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
function Q(e) {
    let { label: t, enabled: n, disabled: r, onPreview: s, onChange: a, tooltip: l } = e;
    return (0, i.jsx)(u.j7V, {
        className: Y.soundRow,
        value: n,
        onChange: a,
        disabled: r,
        tooltipNote: l,
        children: (0, i.jsxs)('div', {
            className: Y.notificationSound,
            children: [
                (0, i.jsx)('div', {
                    className: Y.soundName,
                    children: t
                }),
                (0, i.jsx)(u.P3F, {
                    className: Y.soundIcon,
                    onClick: s,
                    'aria-label': z.intl.string(z.t.Kd4uxM),
                    children: (0, i.jsx)(u.gj8, {
                        size: 'xs',
                        color: 'currentColor',
                        className: Y.icon,
                        'aria-hidden': !0
                    })
                })
            ]
        })
    });
}
function $(e) {
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
                label: z.intl.string(z.t.pz71xM),
                sound: 'message1',
                focusModeDisabled: o
            },
            {
                label: z.intl.string(z.t.hK51Ym),
                sound: 'deafen'
            },
            {
                label: z.intl.string(z.t.XiejaG),
                sound: 'undeafen'
            },
            {
                label: z.intl.string(z.t['w4m94+']),
                sound: 'mute'
            },
            {
                label: z.intl.string(z.t.YqAjX1),
                sound: 'unmute'
            },
            {
                label: z.intl.string(z.t.JoTq8v),
                sound: 'camera_on'
            },
            {
                label: z.intl.string(z.t['8P6tQ0']),
                sound: 'camera_off'
            },
            {
                label: z.intl.string(z.t['juL9/P']),
                sound: 'disconnect'
            },
            {
                label: z.intl.string(z.t.x98vQk),
                sound: 'ptt_start'
            },
            {
                label: z.intl.string(z.t['1HjRqK']),
                sound: 'ptt_stop'
            },
            {
                label: z.intl.string(z.t['9JB1Cg']),
                sound: 'user_join'
            },
            {
                label: z.intl.string(z.t.KUBBNj),
                sound: 'user_leave'
            },
            {
                label: z.intl.string(z.t.EZjqUV),
                sound: 'user_moved'
            },
            {
                label: z.intl.string(z.t.LnNlQk),
                sound: 'call_calling'
            },
            {
                label: z.intl.string(z.t.XBrJT0),
                sound: 'call_ringing'
            },
            {
                label: z.intl.string(z.t['Nd8P5+']),
                sound: 'stream_started'
            },
            {
                label: z.intl.string(z.t['9bYj+P']),
                sound: 'stream_ended'
            },
            {
                label: z.intl.string(z.t.KccUIy),
                sound: 'stream_user_joined'
            },
            {
                label: z.intl.string(z.t.dsjkiI),
                sound: 'stream_user_left'
            },
            {
                label: z.intl.string(z.t.nFOcf3),
                sound: 'activity_launch'
            },
            {
                label: z.intl.string(z.t['a6lw/v']),
                sound: 'activity_end'
            },
            {
                label: z.intl.string(z.t.KaFxra),
                sound: 'activity_user_join'
            },
            {
                label: z.intl.string(z.t.S14z9v),
                sound: 'activity_user_left'
            },
            {
                label: z.intl.string(z.t.CP3DCw),
                sound: 'reconnect'
            }
        ],
        g = null != E.Z.useHolidaySoundpack();
    return (0, i.jsx)(P.F, {
        setting: F.s6.NOTIFICATIONS_SOUNDS,
        children: (0, i.jsxs)(u.hjN, {
            children: [
                g
                    ? (0, i.jsxs)(i.Fragment, {
                          children: [
                              (0, i.jsx)(u.vwX, {
                                  className: K.marginBottom20,
                                  children: z.intl.string(z.t.fgSHf3)
                              }),
                              (0, i.jsx)(O.Z, {})
                          ]
                      })
                    : null,
                (0, i.jsx)(u.vwX, {
                    className: a()(K.marginBottom20, K.marginTop20),
                    children: z.intl.string(z.t.MKWyKS)
                }),
                (0, i.jsx)(u.j7V, {
                    note: z.intl.string(z.t['7oXUio']),
                    value: s,
                    onChange: p.default.setNotifyMessagesInSelectedChannel,
                    children: z.intl.string(z.t.lF5GGR)
                }),
                (0, i.jsx)(u.j7V, {
                    note: z.intl.string(z.t['+B0XLC']),
                    value: n,
                    onChange: p.default.toggleDisableAllSounds,
                    children: z.intl.string(z.t['2ZhCOT'])
                }),
                m.map((e) => {
                    let { label: r, sound: s, focusModeDisabled: a } = e;
                    return (0, i.jsx)(
                        Q,
                        {
                            label: r,
                            disabled: n || !0 === a,
                            tooltip: a ? z.intl.string(z.t.cIRG0t) : void 0,
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
function ee() {
    let e = (0, c.e7)([C.Z], () => C.Z.getGuildAlertSettings()),
        [t, n] = r.useState(null),
        s = M.default.keys(e).map((t) => {
            let n = e[t];
            return {
                label: n.guildName,
                value: n.guildId
            };
        });
    return 0 === Object.keys(e).length
        ? null
        : (0, i.jsxs)(P.F, {
              setting: F.s6.NOTIFICATIONS_COMMUNITY_ACTIVITY_ALERTS,
              children: [
                  (0, i.jsx)(u.X6q, {
                      variant: 'heading-lg/semibold',
                      className: K.marginBottom20,
                      children: z.intl.string(z.t.D9yVAA)
                  }),
                  (0, i.jsx)(u.R94, {
                      type: u.geA.DESCRIPTION,
                      className: K.marginBottom20,
                      children: z.intl.string(z.t['0PhAOD'])
                  }),
                  (0, i.jsxs)(u.xJW, {
                      title: z.intl.string(z.t.Q0PsXV),
                      children: [
                          (0, i.jsx)(u.q4e, {
                              className: null != t ? K.marginBottom20 : K.marginBottom40,
                              value: t,
                              onChange: (e) => {
                                  n(e);
                              },
                              options: s
                          }),
                          null != t
                              ? (0, i.jsxs)('div', {
                                    className: K.marginTop20,
                                    children: [
                                        (0, i.jsxs)(P.F, {
                                            setting: F.s6.NOTIFICATIONS_COMMUNITY_IN_APP_ALERTS,
                                            children: [
                                                (0, i.jsx)(u.j7V, {
                                                    className: K.marginBottom20,
                                                    note: z.intl.string(z.t['z8Td4+']),
                                                    value: !e[t].disableRaidAlertNag,
                                                    onChange: () => {
                                                        (0, V.PS)(
                                                            t,
                                                            (e) => {
                                                                e.disableRaidAlertNag = !e.disableRaidAlertNag;
                                                            },
                                                            V.fy.INFREQUENT_USER_ACTION
                                                        );
                                                    },
                                                    hideBorder: !0,
                                                    children: z.intl.string(z.t.u6dc5O)
                                                }),
                                                (0, i.jsx)(u.$i$, { className: a()(K.marginTop20, K.marginBottom40) })
                                            ]
                                        }),
                                        (0, i.jsxs)(P.F, {
                                            setting: F.s6.NOTIFICATIONS_COMMUNITY_PUSH_NOTIFICATIONS,
                                            children: [
                                                (0, i.jsx)(u.j7V, {
                                                    className: K.marginBottom20,
                                                    note: z.intl.string(z.t.PyxXs7),
                                                    value: !e[t].disableRaidAlertPush,
                                                    onChange: () => {
                                                        (0, V.PS)(
                                                            t,
                                                            (e) => {
                                                                e.disableRaidAlertPush = !e.disableRaidAlertPush;
                                                            },
                                                            V.fy.INFREQUENT_USER_ACTION
                                                        );
                                                    },
                                                    hideBorder: !0,
                                                    children: z.intl.string(z.t.P8MG6u)
                                                }),
                                                (0, i.jsx)(u.$i$, { className: a()(K.marginTop20, K.marginBottom40) })
                                            ]
                                        })
                                    ]
                                })
                              : null,
                          null != t ? null : (0, i.jsx)(u.$i$, { className: a()(K.marginTop20, K.marginBottom40) })
                      ]
                  })
              ]
          });
}
class et extends r.PureComponent {
    handleDesktopChange(e) {
        let t = e ? H.qrD.ALL : H.qrD.NEVER;
        if (t !== H.qrD.NEVER)
            L.Z.requestPermission((e) => {
                let t = e ? H.$Ab.ENABLED : H.$Ab.BLOCKED;
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
            m = B.isPlatformEmbedded && (0, B.isWindows)(),
            p = o()
                .range(1, 11)
                .map((e) => ({
                    value: 60 * e,
                    label: z.intl.formatToPlainString(z.t.iXLF9f, { minutes: e })
                }));
        return (0, i.jsxs)(u.hjN, {
            tag: u.RB0.H1,
            title: z.intl.string(z.t.HcoRu7),
            children: [
                (0, i.jsx)(P.F, {
                    setting: F.s6.NOTIFICATIONS_ENABLE_DESKTOP,
                    children: (0, i.jsx)(u.j7V, {
                        className: K.marginBottom20,
                        value: e !== H.qrD.NEVER && !d,
                        onChange: this.handleDesktopChange,
                        note: z.intl.string(z.t.wF9ih4),
                        disabled: d,
                        tooltipNote: d ? z.intl.string(z.t.cIRG0t) : void 0,
                        children: z.intl.string(z.t['/0WClp'])
                    })
                }),
                (0, i.jsx)(ei, {}),
                (0, i.jsx)(P.F, {
                    setting: F.s6.NOTIFICATIONS_UNREAD_MESSAGE_BADGE,
                    children: (0, i.jsx)(u.j7V, {
                        className: m ? K.marginBottom20 : K.marginBottom40,
                        value: !n,
                        note: z.intl.string(z.t['9K4qwc']),
                        onChange: this.handleToggleShowUnreadBadge,
                        children: z.intl.string(z.t.VH8AIC)
                    })
                }),
                (0, i.jsx)(P.F, {
                    setting: F.s6.NOTIFICATIONS_ENABLE_TASKBAR_FLASHING,
                    children: (0, i.jsx)(u.j7V, {
                        className: K.marginBottom40,
                        value: r,
                        note: z.intl.string(z.t['bd4j4+']),
                        onChange: this.handleToggleShowFlash,
                        children: z.intl.string(z.t.xSmFQE)
                    })
                }),
                (0, i.jsx)(er, {}),
                (0, i.jsx)(ed, {}),
                (0, i.jsx)(ec, {}),
                (0, i.jsx)(eo, {}),
                (0, i.jsx)(P.F, {
                    setting: F.s6.NOTIFICATIONS_PUSH_INACTIVE_TIMEOUT,
                    children: (0, i.jsxs)(u.xJW, {
                        title: z.intl.string(z.t.TTvjd3),
                        children: [
                            (0, i.jsx)(u.q4e, {
                                value: t,
                                onChange: U.CM.updateSetting,
                                options: p
                            }),
                            (0, i.jsx)(u.R94, {
                                type: u.geA.DESCRIPTION,
                                className: K.marginTop8,
                                children: z.intl.string(z.t.Xytv9P)
                            }),
                            (0, i.jsx)(u.$i$, { className: a()(K.marginTop40, K.marginBottom40) })
                        ]
                    })
                }),
                this.renderTTS(),
                (0, i.jsx)(ee, {}),
                (0, i.jsx)(u.xJW, {
                    children: (0, i.jsx)($, {
                        disabledSounds: s,
                        disableAllSounds: l,
                        notifyMessagesInSelectedChannel: c
                    })
                }),
                (0, i.jsx)(G.Z, {})
            ]
        });
    }
    constructor(...e) {
        (super(...e),
            q(this, 'handleToggleShowUnreadBadge', () => {
                p.default.setDisableUnreadBadge(!this.props.disableUnreadBadge);
            }),
            q(this, 'handleToggleShowFlash', () => {
                p.default.setTaskbarFlash(!this.props.taskbarFlash);
            }),
            q(this, 'renderTTS', () => {
                if (!h.Zh) return null;
                let e = [
                    {
                        name: z.intl.string(z.t.B1AGeH),
                        value: H.PrB.ALL_CHANNELS
                    },
                    {
                        name: z.intl.string(z.t.uM2rNj),
                        value: H.PrB.SELECTED_CHANNEL
                    },
                    {
                        name: z.intl.string(z.t.DYO5Oj),
                        value: H.PrB.NEVER
                    }
                ];
                return (0, i.jsxs)(P.F, {
                    setting: F.s6.NOTIFICATIONS_TEXT_TO_SPEECH,
                    children: [
                        (0, i.jsxs)(u.xJW, {
                            title: z.intl.string(z.t.VIm5MD),
                            children: [
                                (0, i.jsx)(u.R94, {
                                    type: u.geA.DESCRIPTION,
                                    className: K.marginBottom8,
                                    children: z.intl.string(z.t['+4dnAw'])
                                }),
                                (0, i.jsx)(u.FXm, {
                                    options: e,
                                    onChange: this.handleTTSChange,
                                    value: this.props.ttsType
                                })
                            ]
                        }),
                        (0, i.jsx)(u.$i$, { className: a()(K.marginTop40, K.marginBottom40) })
                    ]
                });
            }));
    }
}
let en = (0, b.B)({
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
function ei() {
    let e = en.useExperiment({ location: 'settings' }, { autoTrackExposure: !1 }).enabled,
        t = (0, c.e7)([k.ZP], () => k.ZP.mentionOnAllMessages);
    return e
        ? (0, i.jsx)(P.F, {
              setting: F.s6.NOTIFICATIONS_MENTION_ON_ALL_MESSAGES,
              children: (0, i.jsx)(u.j7V, {
                  className: K.marginBottom20,
                  value: t,
                  onChange: (e) => {
                      g.Z.setAccountFlag(W.c.MENTION_ON_ALL_MESSAGES, e);
                  },
                  note: "Increments the mention count when receiving a message in a channel set to 'All Messages'",
                  children: 'Mention on all messages?'
              })
          })
        : null;
}
function er() {
    let e = T.xT.useExperiment({ location: 'UserSettingsNotifications' }, { autoTrackExposure: !1 }).enabled,
        { manuallyOpen: t } = T.fs.useExperiment({ location: 'UserSettingsNotifications' }, { autoTrackExposure: !1 }),
        n = (0, c.e7)([k.ZP], () => k.ZP.useNewNotifications),
        [s, l] = r.useState(!1);
    return e && (n || t)
        ? (0, i.jsxs)(i.Fragment, {
              children: [
                  n
                      ? (0, i.jsx)(P.F, {
                            setting: F.s6.NOTIFICATIONS_UNREAD_SETTINGS,
                            children: (0, i.jsx)(u.j7V, {
                                className: K.marginBottom40,
                                value: n,
                                disabled: s || !n,
                                note: z.intl.string(z.t.frbLrK),
                                onChange: () => es(l),
                                children: z.intl.string(z.t.z21l8P)
                            })
                        })
                      : t
                        ? (0, i.jsx)(P.F, {
                              setting: F.s6.NOTIFICATIONS_UNREAD_SETTINGS,
                              children: (0, i.jsx)(u.j7V, {
                                  className: K.marginBottom40,
                                  value: n,
                                  disabled: s || n,
                                  note: 'Turns on the new notification system',
                                  onChange: (e) => {
                                      g.Z.setAccountFlag(W.c.USE_NEW_NOTIFICATIONS, e);
                                  },
                                  children: z.intl.string(z.t.z21l8P)
                              })
                          })
                        : null,
                  (0, i.jsxs)(P.F, {
                      setting: F.s6.NOTIFICATIONS_NEW_SETTINGS,
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
                                          setting: F.s6.NOTIFICATIONS_RESTORE_MOST_RECENT_SNAPSHOT,
                                          children: (0, i.jsx)(u.zxk, {
                                              variant: 'primary',
                                              text: 'Restore most recent snapshot',
                                              onClick: S.KP
                                          })
                                      }),
                                      (0, i.jsx)(P.F, {
                                          setting: F.s6.NOTIFICATIONS_LAUNCH_MIGRATION,
                                          children: (0, i.jsx)(u.zxk, {
                                              variant: 'primary',
                                              text: 'Launch Migration',
                                              onClick: () => {
                                                  (0, I.R)(!0);
                                              }
                                          })
                                      }),
                                      (0, i.jsx)(P.F, {
                                          setting: F.s6.NOTIFICATIONS_TOGGLE_NEW_SYSTEM,
                                          children: (0, i.jsx)(u.j7V, {
                                              hideBorder: !0,
                                              value: n,
                                              onChange: (e) => {
                                                  g.Z.setAccountFlag(W.c.USE_NEW_NOTIFICATIONS, e);
                                              },
                                              children: 'Toggle new system on/off'
                                          })
                                      })
                                  ]
                              })
                          }),
                          (0, i.jsx)(u.$i$, { className: a()(K.marginTop40, K.marginBottom40) })
                      ]
                  })
              ]
          })
        : null;
}
async function es(e) {
    e(!0);
    let t = await (0, S.Tn)();
    (0 === t.length
        ? await (0, N.oL)()
        : m.Z.show({
              title: z.intl.string(z.t['cY+Ooa']),
              body: z.intl.format(z.t['7zTJJS'], { date: new Date(t[t.length - 1].recorded_at) }),
              cancelText: z.intl.string(z.t['ETE/oK']),
              confirmText: z.intl.string(z.t.Rm96T0),
              onConfirm: N.oL
          }),
        e(!1));
}
function ea(e) {
    let t = (0, v.p)();
    return (0, i.jsx)(et, J(X({}, e), { focusMode: t }));
}
function el() {
    let e = (0, c.cj)([w.Z], () => ({
        disableUnreadBadge: w.Z.getDisableUnreadBadge(),
        taskbarFlash: w.Z.taskbarFlash,
        disabledSounds: w.Z.getDisabledSounds(),
        disableAllSounds: w.Z.getDisableAllSounds(),
        desktopType: w.Z.getDesktopType(),
        ttsType: w.Z.getTTSType(),
        notifyMessagesInSelectedChannel: w.Z.getNotifyMessagesInSelectedChannel()
    }));
    return (0, i.jsx)(ea, J(X({}, e), { afkTimeout: U.CM.useSetting() }));
}
function eo() {
    let e = (0, _._x)('notification_settings'),
        t = (0, j.BH)(),
        n = (0, j.nC)(),
        r = (0, c.e7)([f.Z], () => f.Z.currentUserApplicationIds.size > 0);
    if (!e) return null;
    let s = [
        {
            name: z.intl.string(z.t.PCRbS0),
            value: d.Tv.ACTIVITY_NOTIFICATIONS_ENABLED
        },
        {
            name: z.intl.string(z.t.UBa6pa),
            value: d.Tv.ONLY_GAMES_PLAYED,
            disabled: !r,
            desc: r ? null : z.intl.string(z.t.XIH6xM)
        },
        {
            name: z.intl.string(z.t.TCxJ8v),
            value: d.Tv.ACTIVITY_NOTIFICATIONS_DISABLED
        }
    ];
    return (0, i.jsxs)(P.F, {
        setting: F.s6.NOTIFICATIONS_GAME_ACTIVITY,
        children: [
            (0, i.jsxs)(u.xJW, {
                title: z.intl.string(z.t.omtoJy),
                className: K.marginBottom20,
                children: [
                    (0, i.jsx)(u.R94, {
                        type: u.geA.DESCRIPTION,
                        className: K.marginBottom8,
                        children: z.intl.string(z.t.ncS4CA)
                    }),
                    (0, i.jsx)(u.FXm, {
                        options: s,
                        onChange: (e) => {
                            U.YT.updateSetting(e.value);
                        },
                        value: t
                    })
                ]
            }),
            (0, i.jsx)(u.j7V, {
                onChange: () => {
                    U.Qq.updateSetting(!n);
                },
                value: n,
                children: z.intl.string(z.t.SZue3N)
            })
        ]
    });
}
function ec() {
    let e = U.fz.useSetting(),
        t = [
            {
                name: z.intl.string(z.t['9x/Rtb']),
                value: d.Ns.NOTIFICATIONS_ENABLED
            },
            {
                name: z.intl.string(z.t.fJAbQU),
                value: d.Ns.ONLY_DMS
            },
            {
                name: z.intl.string(z.t['xu+UDQ']),
                value: d.Ns.NOTIFICATIONS_DISABLED
            }
        ];
    return y.Z.getCurrentConfig({ location: 'webSettings' }).enableInAppNotifications
        ? (0, i.jsxs)(P.F, {
              setting: F.s6.NOTIFICATIONS_REACTIONS,
              children: [
                  (0, i.jsxs)(u.xJW, {
                      title: z.intl.string(z.t.Rq0NFh),
                      children: [
                          (0, i.jsx)(u.R94, {
                              type: u.geA.DESCRIPTION,
                              className: K.marginBottom8,
                              children: z.intl.string(z.t.oWF6eX)
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
                  (0, i.jsx)(u.$i$, { className: a()(K.marginTop40, K.marginBottom40) })
              ]
          })
        : null;
}
function ed() {
    let e = U.d8.useSetting();
    return (0, D.Az)('webSettings').enabled
        ? (0, i.jsx)(P.F, {
              setting: F.s6.NOTIFICATIONS_VOICE_ACTIVITY,
              children: (0, i.jsx)(u.j7V, {
                  value: e,
                  onChange: Z.I,
                  note: z.intl.string(z.t.rngMNz),
                  children: (0, i.jsxs)(u.vwX, {
                      className: Y.titleWithBeta,
                      children: [z.intl.string(z.t.wtk08f), (0, i.jsx)(x.Z, {})]
                  })
              })
          })
        : null;
}
