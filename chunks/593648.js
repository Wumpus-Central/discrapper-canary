n.d(t, { Z: () => ei }), n(539854), n(388685);
var i = n(200651),
    r = n(192379),
    s = n(120356),
    l = n.n(s),
    a = n(392711),
    o = n.n(a),
    c = n(442837),
    d = n(524437),
    u = n(481060),
    m = n(668781),
    g = n(292556),
    p = n(87051),
    h = n(419363),
    f = n(818083),
    b = n(688465),
    _ = n(890022),
    x = n(487419),
    E = n(197344),
    C = n(476756),
    j = n(734934),
    O = n(223683),
    S = n(312400),
    v = n(115345),
    T = n(392888),
    I = n(106371),
    N = n(995774),
    y = n(921801),
    A = n(460181),
    P = n(292959),
    R = n(9156),
    D = n(912101),
    Z = n(358085),
    w = n(709054),
    k = n(695346),
    L = n(675478),
    B = n(33656),
    M = n(726985),
    U = n(981631),
    V = n(468788),
    G = n(388032),
    F = n(589848),
    H = n(20493);
function z(e, t, n) {
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
            i = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            i.forEach(function (t) {
                z(e, t, n[t]);
            });
    }
    return e;
}
function Y(e, t) {
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
function K(e) {
    let { label: t, enabled: n, disabled: r, onPreview: s, onChange: l, tooltip: a } = e;
    return (0, i.jsx)(u.j7V, {
        className: F.soundRow,
        value: n,
        onChange: l,
        disabled: r,
        tooltipNote: a,
        children: (0, i.jsxs)('div', {
            className: F.notificationSound,
            children: [
                (0, i.jsx)('div', {
                    className: F.soundName,
                    children: t
                }),
                (0, i.jsx)(u.P3F, {
                    className: F.soundIcon,
                    onClick: s,
                    'aria-label': G.intl.string(G.t.Kd4uxM),
                    children: (0, i.jsx)(u.gj8, {
                        size: 'xs',
                        color: 'currentColor',
                        className: F.icon,
                        'aria-hidden': !0
                    })
                })
            ]
        })
    });
}
function q(e) {
    let { disabledSounds: t, disableAllSounds: n, notifyMessagesInSelectedChannel: s } = e,
        a = r.useRef(null),
        o = (0, j.p)(),
        c = r.useCallback((e, t) => {
            t.stopPropagation(), t.preventDefault(), null != a.current && a.current.stop(), (a.current = (0, A.GN)(e));
        }, []),
        d = r.useCallback(
            (e, n) => {
                let i = t.filter((t) => t !== e);
                n || i.push(e), g.default.setDisabledSounds(i);
            },
            [t]
        );
    r.useEffect(() => () => {
        var e;
        null == (e = a.current) || e.stop();
    });
    let m = [
            {
                label: G.intl.string(G.t.pz71xM),
                sound: 'message1',
                focusModeDisabled: o
            },
            {
                label: G.intl.string(G.t.hK51Ym),
                sound: 'deafen'
            },
            {
                label: G.intl.string(G.t.XiejaG),
                sound: 'undeafen'
            },
            {
                label: G.intl.string(G.t['w4m94+']),
                sound: 'mute'
            },
            {
                label: G.intl.string(G.t.YqAjX1),
                sound: 'unmute'
            },
            {
                label: G.intl.string(G.t['juL9/P']),
                sound: 'disconnect'
            },
            {
                label: G.intl.string(G.t.x98vQk),
                sound: 'ptt_start'
            },
            {
                label: G.intl.string(G.t['1HjRqK']),
                sound: 'ptt_stop'
            },
            {
                label: G.intl.string(G.t['9JB1Cg']),
                sound: 'user_join'
            },
            {
                label: G.intl.string(G.t.KUBBNj),
                sound: 'user_leave'
            },
            {
                label: G.intl.string(G.t.EZjqUV),
                sound: 'user_moved'
            },
            {
                label: G.intl.string(G.t.LnNlQk),
                sound: 'call_calling'
            },
            {
                label: G.intl.string(G.t.XBrJT0),
                sound: 'call_ringing'
            },
            {
                label: G.intl.string(G.t['Nd8P5+']),
                sound: 'stream_started'
            },
            {
                label: G.intl.string(G.t['9bYj+P']),
                sound: 'stream_ended'
            },
            {
                label: G.intl.string(G.t.KccUIy),
                sound: 'stream_user_joined'
            },
            {
                label: G.intl.string(G.t.dsjkiI),
                sound: 'stream_user_left'
            },
            {
                label: G.intl.string(G.t.nFOcf3),
                sound: 'activity_launch'
            },
            {
                label: G.intl.string(G.t['a6lw/v']),
                sound: 'activity_end'
            },
            {
                label: G.intl.string(G.t.KaFxra),
                sound: 'activity_user_join'
            },
            {
                label: G.intl.string(G.t.S14z9v),
                sound: 'activity_user_left'
            },
            {
                label: G.intl.string(G.t.CP3DCw),
                sound: 'reconnect'
            }
        ],
        p = null != E.Z.useHolidaySoundpack();
    return (0, i.jsx)(y.F, {
        setting: M.s6.NOTIFICATIONS_SOUNDS,
        children: (0, i.jsxs)(u.hjN, {
            children: [
                p
                    ? (0, i.jsxs)(i.Fragment, {
                          children: [
                              (0, i.jsx)(u.vwX, {
                                  className: H.marginBottom20,
                                  children: G.intl.string(G.t.fgSHf3)
                              }),
                              (0, i.jsx)(C.Z, {})
                          ]
                      })
                    : null,
                (0, i.jsx)(u.vwX, {
                    className: l()(H.marginBottom20, H.marginTop20),
                    children: G.intl.string(G.t.MKWyKS)
                }),
                (0, i.jsx)(u.j7V, {
                    note: G.intl.string(G.t['7oXUio']),
                    value: s,
                    onChange: g.default.setNotifyMessagesInSelectedChannel,
                    children: G.intl.string(G.t.lF5GGR)
                }),
                (0, i.jsx)(u.j7V, {
                    note: G.intl.string(G.t['+B0XLC']),
                    value: n,
                    onChange: g.default.toggleDisableAllSounds,
                    children: G.intl.string(G.t['2ZhCOT'])
                }),
                m.map((e) => {
                    let { label: r, sound: s, focusModeDisabled: l } = e;
                    return (0, i.jsx)(
                        K,
                        {
                            label: r,
                            disabled: n || !0 === l,
                            tooltip: l ? G.intl.string(G.t.cIRG0t) : void 0,
                            onChange: (e) => d(s, e),
                            onPreview: (e) => c(s, e),
                            enabled: !n && !t.includes(s) && !0 !== l
                        },
                        s
                    );
                })
            ]
        })
    });
}
function X() {
    let e = (0, c.e7)([x.Z], () => x.Z.getGuildAlertSettings()),
        [t, n] = r.useState(null),
        s = w.default.keys(e).map((t) => {
            let n = e[t];
            return {
                label: n.guildName,
                value: n.guildId
            };
        });
    return 0 === Object.keys(e).length
        ? null
        : (0, i.jsxs)(y.F, {
              setting: M.s6.NOTIFICATIONS_COMMUNITY_ACTIVITY_ALERTS,
              children: [
                  (0, i.jsxs)(u.X6q, {
                      variant: 'heading-lg/semibold',
                      className: l()(F.titleWithBeta, H.marginBottom20),
                      children: [G.intl.string(G.t.D9yVAA), (0, i.jsx)(b.Z, {})]
                  }),
                  (0, i.jsx)(u.R94, {
                      type: u.geA.DESCRIPTION,
                      className: H.marginBottom20,
                      children: G.intl.string(G.t['0PhAOD'])
                  }),
                  (0, i.jsxs)(u.xJW, {
                      title: G.intl.string(G.t.Q0PsXV),
                      children: [
                          (0, i.jsx)(u.q4e, {
                              className: null != t ? H.marginBottom20 : H.marginBottom40,
                              value: t,
                              onChange: (e) => {
                                  n(e);
                              },
                              options: s
                          }),
                          null != t
                              ? (0, i.jsxs)('div', {
                                    className: H.marginTop20,
                                    children: [
                                        (0, i.jsxs)(y.F, {
                                            setting: M.s6.NOTIFICATIONS_COMMUNITY_IN_APP_ALERTS,
                                            children: [
                                                (0, i.jsx)(u.j7V, {
                                                    className: H.marginBottom20,
                                                    note: G.intl.string(G.t['z8Td4+']),
                                                    value: !e[t].disableRaidAlertNag,
                                                    onChange: () => {
                                                        (0, L.PS)(
                                                            t,
                                                            (e) => {
                                                                e.disableRaidAlertNag = !e.disableRaidAlertNag;
                                                            },
                                                            L.fy.INFREQUENT_USER_ACTION
                                                        );
                                                    },
                                                    hideBorder: !0,
                                                    children: G.intl.string(G.t.u6dc5O)
                                                }),
                                                (0, i.jsx)(u.$i$, { className: l()(H.marginTop20, H.marginBottom40) })
                                            ]
                                        }),
                                        (0, i.jsxs)(y.F, {
                                            setting: M.s6.NOTIFICATIONS_COMMUNITY_PUSH_NOTIFICATIONS,
                                            children: [
                                                (0, i.jsx)(u.j7V, {
                                                    className: H.marginBottom20,
                                                    note: G.intl.string(G.t.PyxXs7),
                                                    value: !e[t].disableRaidAlertPush,
                                                    onChange: () => {
                                                        (0, L.PS)(
                                                            t,
                                                            (e) => {
                                                                e.disableRaidAlertPush = !e.disableRaidAlertPush;
                                                            },
                                                            L.fy.INFREQUENT_USER_ACTION
                                                        );
                                                    },
                                                    hideBorder: !0,
                                                    children: G.intl.string(G.t.P8MG6u)
                                                }),
                                                (0, i.jsx)(u.$i$, { className: l()(H.marginTop20, H.marginBottom40) })
                                            ]
                                        })
                                    ]
                                })
                              : null,
                          null != t ? null : (0, i.jsx)(u.$i$, { className: l()(H.marginTop20, H.marginBottom40) })
                      ]
                  })
              ]
          });
}
class Q extends r.PureComponent {
    handleDesktopChange(e) {
        let t = e ? U.qrD.ALL : U.qrD.NEVER;
        if (t !== U.qrD.NEVER)
            D.Z.requestPermission((e) => {
                let t = e ? U.$Ab.ENABLED : U.$Ab.BLOCKED;
                g.default.setPermissionsState(t, 'UserSettingsModal');
            });
        else g.default.setDesktopType(t);
    }
    handleTTSChange(e) {
        let t = e.value;
        g.default.setTTSType(t);
    }
    render() {
        let { desktopType: e, afkTimeout: t, disableUnreadBadge: n, taskbarFlash: r, disabledSounds: s, disableAllSounds: a, notifyMessagesInSelectedChannel: c, focusMode: d } = this.props,
            m = Z.isPlatformEmbedded && (0, Z.isWindows)(),
            g = o()
                .range(1, 11)
                .map((e) => ({
                    value: 60 * e,
                    label: G.intl.formatToPlainString(G.t.iXLF9f, { minutes: e })
                }));
        return (0, i.jsxs)(u.hjN, {
            tag: u.RB0.H1,
            title: G.intl.string(G.t.HcoRu7),
            children: [
                (0, i.jsx)(y.F, {
                    setting: M.s6.NOTIFICATIONS_ENABLE_DESKTOP,
                    children: (0, i.jsx)(u.j7V, {
                        className: H.marginBottom20,
                        value: e !== U.qrD.NEVER && !d,
                        onChange: this.handleDesktopChange,
                        note: G.intl.string(G.t.wF9ih4),
                        disabled: d,
                        tooltipNote: d ? G.intl.string(G.t.cIRG0t) : void 0,
                        children: G.intl.string(G.t['/0WClp'])
                    })
                }),
                (0, i.jsx)($, {}),
                (0, i.jsx)(y.F, {
                    setting: M.s6.NOTIFICATIONS_UNREAD_MESSAGE_BADGE,
                    children: (0, i.jsx)(u.j7V, {
                        className: m ? H.marginBottom20 : H.marginBottom40,
                        value: !n,
                        note: G.intl.string(G.t['9K4qwc']),
                        onChange: this.handleToggleShowUnreadBadge,
                        children: G.intl.string(G.t.VH8AIC)
                    })
                }),
                (0, i.jsx)(y.F, {
                    setting: M.s6.NOTIFICATIONS_ENABLE_TASKBAR_FLASHING,
                    children: (0, i.jsx)(u.j7V, {
                        className: H.marginBottom40,
                        value: r,
                        note: G.intl.string(G.t['bd4j4+']),
                        onChange: this.handleToggleShowFlash,
                        children: G.intl.string(G.t.xSmFQE)
                    })
                }),
                (0, i.jsx)(ee, {}),
                (0, i.jsx)(es, {}),
                (0, i.jsx)(er, {}),
                (0, i.jsx)(y.F, {
                    setting: M.s6.NOTIFICATIONS_PUSH_INACTIVE_TIMEOUT,
                    children: (0, i.jsxs)(u.xJW, {
                        title: G.intl.string(G.t.TTvjd3),
                        children: [
                            (0, i.jsx)(u.q4e, {
                                value: t,
                                onChange: k.CM.updateSetting,
                                options: g
                            }),
                            (0, i.jsx)(u.R94, {
                                type: u.geA.DESCRIPTION,
                                className: H.marginTop8,
                                children: G.intl.string(G.t.Xytv9P)
                            }),
                            (0, i.jsx)(u.$i$, { className: l()(H.marginTop40, H.marginBottom40) })
                        ]
                    })
                }),
                this.renderTTS(),
                (0, i.jsx)(X, {}),
                (0, i.jsx)(u.xJW, {
                    children: (0, i.jsx)(q, {
                        disabledSounds: s,
                        disableAllSounds: a,
                        notifyMessagesInSelectedChannel: c
                    })
                }),
                (0, i.jsx)(B.Z, {})
            ]
        });
    }
    constructor(...e) {
        super(...e),
            z(this, 'handleToggleShowUnreadBadge', () => {
                g.default.setDisableUnreadBadge(!this.props.disableUnreadBadge);
            }),
            z(this, 'handleToggleShowFlash', () => {
                g.default.setTaskbarFlash(!this.props.taskbarFlash);
            }),
            z(this, 'renderTTS', () => {
                if (!h.Zh) return null;
                let e = [
                    {
                        name: G.intl.string(G.t.B1AGeH),
                        value: U.PrB.ALL_CHANNELS
                    },
                    {
                        name: G.intl.string(G.t.uM2rNj),
                        value: U.PrB.SELECTED_CHANNEL
                    },
                    {
                        name: G.intl.string(G.t.DYO5Oj),
                        value: U.PrB.NEVER
                    }
                ];
                return (0, i.jsxs)(y.F, {
                    setting: M.s6.NOTIFICATIONS_TEXT_TO_SPEECH,
                    children: [
                        (0, i.jsxs)(u.xJW, {
                            title: G.intl.string(G.t.VIm5MD),
                            children: [
                                (0, i.jsx)(u.R94, {
                                    type: u.geA.DESCRIPTION,
                                    className: H.marginBottom8,
                                    children: G.intl.string(G.t['+4dnAw'])
                                }),
                                (0, i.jsx)(u.FXm, {
                                    options: e,
                                    onChange: this.handleTTSChange,
                                    value: this.props.ttsType
                                })
                            ]
                        }),
                        (0, i.jsx)(u.$i$, { className: l()(H.marginTop40, H.marginBottom40) })
                    ]
                });
            });
    }
}
let J = (0, f.B)({
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
function $() {
    let e = J.useExperiment({ location: 'settings' }, { autoTrackExposure: !1 }).enabled,
        t = (0, c.e7)([R.ZP], () => R.ZP.mentionOnAllMessages);
    return e
        ? (0, i.jsx)(y.F, {
              setting: M.s6.NOTIFICATIONS_MENTION_ON_ALL_MESSAGES,
              children: (0, i.jsx)(u.j7V, {
                  className: H.marginBottom20,
                  value: t,
                  onChange: (e) => {
                      p.Z.setAccountFlag(V.c.MENTION_ON_ALL_MESSAGES, e);
                  },
                  note: "Increments the mention count when receiving a message in a channel set to 'All Messages'",
                  children: 'Mention on all messages?'
              })
          })
        : null;
}
function ee() {
    let e = S.xT.useExperiment({ location: 'UserSettingsNotifications' }, { autoTrackExposure: !1 }).enabled,
        { manuallyOpen: t } = S.fs.useExperiment({ location: 'UserSettingsNotifications' }, { autoTrackExposure: !1 }),
        n = (0, c.e7)([R.ZP], () => R.ZP.useNewNotifications),
        [s, a] = r.useState(!1);
    return e && (n || t)
        ? (0, i.jsxs)(i.Fragment, {
              children: [
                  n
                      ? (0, i.jsx)(y.F, {
                            setting: M.s6.NOTIFICATIONS_UNREAD_SETTINGS,
                            children: (0, i.jsx)(u.j7V, {
                                className: H.marginBottom40,
                                value: n,
                                disabled: s || !n,
                                note: G.intl.string(G.t.frbLrK),
                                onChange: () => et(a),
                                children: G.intl.string(G.t.z21l8P)
                            })
                        })
                      : t
                        ? (0, i.jsx)(y.F, {
                              setting: M.s6.NOTIFICATIONS_UNREAD_SETTINGS,
                              children: (0, i.jsx)(u.j7V, {
                                  className: H.marginBottom40,
                                  value: n,
                                  disabled: s || n,
                                  note: 'Turns on the new notification system',
                                  onChange: (e) => {
                                      p.Z.setAccountFlag(V.c.USE_NEW_NOTIFICATIONS, e);
                                  },
                                  children: G.intl.string(G.t.z21l8P)
                              })
                          })
                        : null,
                  (0, i.jsxs)(y.F, {
                      setting: M.s6.NOTIFICATIONS_NEW_SETTINGS,
                      children: [
                          (0, i.jsx)(u.xJW, {
                              title: 'New Notification Settings (Advanced, Staff Only)',
                              children: (0, i.jsxs)('div', {
                                  style: {
                                      display: 'flex',
                                      gap: 16
                                  },
                                  children: [
                                      (0, i.jsx)(y.F, {
                                          setting: M.s6.NOTIFICATIONS_RESTORE_MOST_RECENT_SNAPSHOT,
                                          children: (0, i.jsx)(u.zxk, {
                                              onClick: O.KP,
                                              children: 'Restore most recent snapshot'
                                          })
                                      }),
                                      (0, i.jsx)(y.F, {
                                          setting: M.s6.NOTIFICATIONS_LAUNCH_MIGRATION,
                                          children: (0, i.jsx)(u.zxk, {
                                              onClick: () => {
                                                  (0, T.R)(!0);
                                              },
                                              children: 'Launch Migration'
                                          })
                                      }),
                                      (0, i.jsx)(y.F, {
                                          setting: M.s6.NOTIFICATIONS_TOGGLE_NEW_SYSTEM,
                                          children: (0, i.jsx)(u.j7V, {
                                              hideBorder: !0,
                                              value: n,
                                              onChange: (e) => {
                                                  p.Z.setAccountFlag(V.c.USE_NEW_NOTIFICATIONS, e);
                                              },
                                              children: 'Toggle new system on/off'
                                          })
                                      })
                                  ]
                              })
                          }),
                          (0, i.jsx)(u.$i$, { className: l()(H.marginTop40, H.marginBottom40) })
                      ]
                  })
              ]
          })
        : null;
}
async function et(e) {
    e(!0);
    let t = await (0, O.Tn)();
    0 === t.length
        ? await (0, v.oL)()
        : m.Z.show({
              title: G.intl.string(G.t['cY+Ooa']),
              body: G.intl.format(G.t['7zTJJS'], { date: new Date(t[t.length - 1].recorded_at) }),
              cancelText: G.intl.string(G.t['ETE/oK']),
              confirmText: G.intl.string(G.t.Rm96T0),
              onConfirm: v.oL
          }),
        e(!1);
}
function en(e) {
    let t = (0, j.p)();
    return (0, i.jsx)(Q, Y(W({}, e), { focusMode: t }));
}
function ei() {
    let e = (0, c.cj)([P.Z], () => ({
        disableUnreadBadge: P.Z.getDisableUnreadBadge(),
        taskbarFlash: P.Z.taskbarFlash,
        disabledSounds: P.Z.getDisabledSounds(),
        disableAllSounds: P.Z.getDisableAllSounds(),
        desktopType: P.Z.getDesktopType(),
        ttsType: P.Z.getTTSType(),
        notifyMessagesInSelectedChannel: P.Z.getNotifyMessagesInSelectedChannel()
    }));
    return (0, i.jsx)(en, Y(W({}, e), { afkTimeout: k.CM.useSetting() }));
}
function er() {
    let e = (0, _._x)('notification_settings'),
        [t, n] = r.useState(!1),
        [s, a] = r.useState(!1),
        [o, c] = r.useState(!1);
    return e
        ? (0, i.jsxs)(y.F, {
              setting: M.s6.NOTIFICATIONS_GAME_ACTIVITY,
              children: [
                  (0, i.jsx)(u.j7V, {
                      className: H.marginBottom40,
                      value: t,
                      hideBorder: !0,
                      note: G.intl.string(G.t.ncS4CA),
                      onChange: (e) => n(e),
                      children: G.intl.string(G.t.omtoJy)
                  }),
                  (0, i.jsx)(u.j7V, {
                      className: H.marginBottom40,
                      value: s,
                      hideBorder: !0,
                      disabled: !t,
                      onChange: (e) => a(e),
                      children: G.intl.string(G.t.SdmtQ0)
                  }),
                  (0, i.jsx)(u.j7V, {
                      className: H.marginBottom40,
                      value: o,
                      hideBorder: !0,
                      disabled: !t,
                      onChange: (e) => c(e),
                      children: G.intl.string(G.t.UBa6pa)
                  }),
                  (0, i.jsx)(u.$i$, { className: l()(H.marginTop20, H.marginBottom40) })
              ]
          })
        : null;
}
function es() {
    let e = k.fz.useSetting(),
        t = [
            {
                name: G.intl.string(G.t['9x/Rtb']),
                value: d.Ns.NOTIFICATIONS_ENABLED
            },
            {
                name: G.intl.string(G.t.fJAbQU),
                value: d.Ns.ONLY_DMS
            },
            {
                name: G.intl.string(G.t['xu+UDQ']),
                value: d.Ns.NOTIFICATIONS_DISABLED
            }
        ];
    return I.Z.getCurrentConfig({ location: 'webSettings' }).enableInAppNotifications
        ? (0, i.jsxs)(y.F, {
              setting: M.s6.NOTIFICATIONS_REACTIONS,
              children: [
                  (0, i.jsxs)(u.xJW, {
                      title: G.intl.string(G.t.Rq0NFh),
                      children: [
                          (0, i.jsx)(u.R94, {
                              type: u.geA.DESCRIPTION,
                              className: H.marginBottom8,
                              children: G.intl.string(G.t.oWF6eX)
                          }),
                          (0, i.jsx)(u.FXm, {
                              options: t,
                              onChange: (t) => {
                                  (0, N.MR)(t.value, e);
                              },
                              value: e
                          })
                      ]
                  }),
                  (0, i.jsx)(u.$i$, { className: l()(H.marginTop40, H.marginBottom40) })
              ]
          })
        : null;
}
