n.d(t, { Z: () => en }), n(653041), n(47120);
var r = n(200651),
    i = n(192379),
    s = n(120356),
    a = n.n(s),
    l = n(392711),
    o = n.n(l),
    c = n(442837),
    d = n(524437),
    u = n(481060),
    m = n(668781),
    g = n(292556),
    p = n(87051),
    h = n(419363),
    f = n(818083),
    b = n(688465),
    N = n(487419),
    x = n(197344),
    _ = n(476756),
    E = n(734934),
    j = n(223683),
    O = n(312400),
    C = n(115345),
    S = n(392888),
    v = n(106371),
    T = n(995774),
    I = n(921801),
    y = n(460181),
    A = n(292959),
    P = n(9156),
    R = n(912101),
    D = n(358085),
    Z = n(709054),
    w = n(695346),
    k = n(675478),
    W = n(33656),
    L = n(726985),
    B = n(981631),
    M = n(468788),
    U = n(388032),
    V = n(589848),
    G = n(20493);
function F(e, t, n) {
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
function H(e) {
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
                F(e, t, n[t]);
            });
    }
    return e;
}
function z(e, t) {
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
function Y(e) {
    let { label: t, enabled: n, disabled: i, onPreview: s, onChange: a, tooltip: l } = e;
    return (0, r.jsx)(u.j7V, {
        className: V.soundRow,
        value: n,
        onChange: a,
        disabled: i,
        tooltipNote: l,
        children: (0, r.jsxs)('div', {
            className: V.notificationSound,
            children: [
                (0, r.jsx)('div', {
                    className: V.soundName,
                    children: t
                }),
                (0, r.jsx)(u.P3F, {
                    className: V.soundIcon,
                    onClick: s,
                    'aria-label': U.NW.string(U.t.Kd4uxM),
                    children: (0, r.jsx)(u.gj8, {
                        size: 'xs',
                        color: 'currentColor',
                        className: V.icon,
                        'aria-hidden': !0
                    })
                })
            ]
        })
    });
}
function K(e) {
    let { disabledSounds: t, disableAllSounds: n, notifyMessagesInSelectedChannel: s } = e,
        l = i.useRef(),
        o = (0, E.p)(),
        c = i.useCallback((e, t) => {
            t.stopPropagation(), t.preventDefault(), null != l.current && l.current.stop(), (l.current = (0, y.GN)(e));
        }, []),
        d = i.useCallback(
            (e, n) => {
                let r = t.filter((t) => t !== e);
                n || r.push(e), g.default.setDisabledSounds(r);
            },
            [t]
        );
    i.useEffect(() => () => {
        var e;
        null == (e = l.current) || e.stop();
    });
    let m = [
            {
                label: U.NW.string(U.t.pz71xM),
                sound: 'message1',
                focusModeDisabled: o
            },
            {
                label: U.NW.string(U.t.hK51Ym),
                sound: 'deafen'
            },
            {
                label: U.NW.string(U.t.XiejaG),
                sound: 'undeafen'
            },
            {
                label: U.NW.string(U.t['w4m94+']),
                sound: 'mute'
            },
            {
                label: U.NW.string(U.t.YqAjX1),
                sound: 'unmute'
            },
            {
                label: U.NW.string(U.t['juL9/P']),
                sound: 'disconnect'
            },
            {
                label: U.NW.string(U.t.x98vQk),
                sound: 'ptt_start'
            },
            {
                label: U.NW.string(U.t['1HjRqK']),
                sound: 'ptt_stop'
            },
            {
                label: U.NW.string(U.t['9JB1Cg']),
                sound: 'user_join'
            },
            {
                label: U.NW.string(U.t.KUBBNj),
                sound: 'user_leave'
            },
            {
                label: U.NW.string(U.t.EZjqUV),
                sound: 'user_moved'
            },
            {
                label: U.NW.string(U.t.LnNlQk),
                sound: 'call_calling'
            },
            {
                label: U.NW.string(U.t.XBrJT0),
                sound: 'call_ringing'
            },
            {
                label: U.NW.string(U.t['Nd8P5+']),
                sound: 'stream_started'
            },
            {
                label: U.NW.string(U.t['9bYj+P']),
                sound: 'stream_ended'
            },
            {
                label: U.NW.string(U.t.KccUIy),
                sound: 'stream_user_joined'
            },
            {
                label: U.NW.string(U.t.dsjkiI),
                sound: 'stream_user_left'
            },
            {
                label: U.NW.string(U.t.nFOcf3),
                sound: 'activity_launch'
            },
            {
                label: U.NW.string(U.t['a6lw/v']),
                sound: 'activity_end'
            },
            {
                label: U.NW.string(U.t.KaFxra),
                sound: 'activity_user_join'
            },
            {
                label: U.NW.string(U.t.S14z9v),
                sound: 'activity_user_left'
            },
            {
                label: U.NW.string(U.t.CP3DCw),
                sound: 'reconnect'
            }
        ],
        p = null != x.Z.useHolidaySoundpack();
    return (0, r.jsx)(I.F, {
        setting: L.s6.NOTIFICATIONS_SOUNDS,
        children: (0, r.jsxs)(u.hjN, {
            children: [
                p
                    ? (0, r.jsxs)(r.Fragment, {
                          children: [
                              (0, r.jsx)(u.vwX, {
                                  className: G.marginBottom20,
                                  children: U.NW.string(U.t.fgSHf3)
                              }),
                              (0, r.jsx)(_.Z, {})
                          ]
                      })
                    : null,
                (0, r.jsx)(u.vwX, {
                    className: a()(G.marginBottom20, G.marginTop20),
                    children: U.NW.string(U.t.MKWyKS)
                }),
                (0, r.jsx)(u.j7V, {
                    note: U.NW.string(U.t['7oXUio']),
                    value: s,
                    onChange: g.default.setNotifyMessagesInSelectedChannel,
                    children: U.NW.string(U.t.lF5GGR)
                }),
                (0, r.jsx)(u.j7V, {
                    note: U.NW.string(U.t['+B0XLC']),
                    value: n,
                    onChange: g.default.toggleDisableAllSounds,
                    children: U.NW.string(U.t['2ZhCOT'])
                }),
                m.map((e) => {
                    let { label: i, sound: s, focusModeDisabled: a } = e;
                    return (0, r.jsx)(
                        Y,
                        {
                            label: i,
                            disabled: n || !0 === a,
                            tooltip: a ? U.NW.string(U.t.cIRG0t) : void 0,
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
function q() {
    let e = (0, c.e7)([N.Z], () => N.Z.getGuildAlertSettings()),
        [t, n] = i.useState(null),
        s = Z.default.keys(e).map((t) => {
            let n = e[t];
            return {
                label: n.guildName,
                value: n.guildId
            };
        });
    return 0 === Object.keys(e).length
        ? null
        : (0, r.jsxs)(I.F, {
              setting: L.s6.NOTIFICATIONS_COMMUNITY_ACTIVITY_ALERTS,
              children: [
                  (0, r.jsxs)(u.X6q, {
                      variant: 'heading-lg/semibold',
                      className: a()(V.titleWithBeta, G.marginBottom20),
                      children: [U.NW.string(U.t.D9yVAA), (0, r.jsx)(b.Z, {})]
                  }),
                  (0, r.jsx)(u.R94, {
                      type: u.geA.DESCRIPTION,
                      className: G.marginBottom20,
                      children: U.NW.string(U.t['0PhAOD'])
                  }),
                  (0, r.jsxs)(u.xJW, {
                      title: U.NW.string(U.t.Q0PsXV),
                      children: [
                          (0, r.jsx)(u.q4e, {
                              className: null != t ? G.marginBottom20 : G.marginBottom40,
                              value: t,
                              onChange: (e) => {
                                  n(e);
                              },
                              options: s
                          }),
                          null != t
                              ? (0, r.jsxs)('div', {
                                    className: G.marginTop20,
                                    children: [
                                        (0, r.jsxs)(I.F, {
                                            setting: L.s6.NOTIFICATIONS_COMMUNITY_IN_APP_ALERTS,
                                            children: [
                                                (0, r.jsx)(u.j7V, {
                                                    className: G.marginBottom20,
                                                    note: U.NW.string(U.t['z8Td4+']),
                                                    value: !e[t].disableRaidAlertNag,
                                                    onChange: () => {
                                                        (0, k.PS)(
                                                            t,
                                                            (e) => {
                                                                e.disableRaidAlertNag = !e.disableRaidAlertNag;
                                                            },
                                                            k.fy.INFREQUENT_USER_ACTION
                                                        );
                                                    },
                                                    hideBorder: !0,
                                                    children: U.NW.string(U.t.u6dc5O)
                                                }),
                                                (0, r.jsx)(u.$i$, { className: a()(G.marginTop20, G.marginBottom40) })
                                            ]
                                        }),
                                        (0, r.jsxs)(I.F, {
                                            setting: L.s6.NOTIFICATIONS_COMMUNITY_PUSH_NOTIFICATIONS,
                                            children: [
                                                (0, r.jsx)(u.j7V, {
                                                    className: G.marginBottom20,
                                                    note: U.NW.string(U.t.PyxXs7),
                                                    value: !e[t].disableRaidAlertPush,
                                                    onChange: () => {
                                                        (0, k.PS)(
                                                            t,
                                                            (e) => {
                                                                e.disableRaidAlertPush = !e.disableRaidAlertPush;
                                                            },
                                                            k.fy.INFREQUENT_USER_ACTION
                                                        );
                                                    },
                                                    hideBorder: !0,
                                                    children: U.NW.string(U.t.P8MG6u)
                                                }),
                                                (0, r.jsx)(u.$i$, { className: a()(G.marginTop20, G.marginBottom40) })
                                            ]
                                        })
                                    ]
                                })
                              : null,
                          null != t ? null : (0, r.jsx)(u.$i$, { className: a()(G.marginTop20, G.marginBottom40) })
                      ]
                  })
              ]
          });
}
class X extends i.PureComponent {
    handleDesktopChange(e) {
        let t = e ? B.qrD.ALL : B.qrD.NEVER;
        if (t !== B.qrD.NEVER)
            R.Z.requestPermission((e) => {
                let t = e ? B.$Ab.ENABLED : B.$Ab.BLOCKED;
                g.default.setPermissionsState(t, 'UserSettingsModal');
            });
        else g.default.setDesktopType(t);
    }
    handleTTSChange(e) {
        let t = e.value;
        g.default.setTTSType(t);
    }
    render() {
        let { desktopType: e, afkTimeout: t, disableUnreadBadge: n, taskbarFlash: i, disabledSounds: s, disableAllSounds: l, notifyMessagesInSelectedChannel: c, focusMode: d } = this.props,
            m = D.isPlatformEmbedded && (0, D.isWindows)(),
            g = o()
                .range(1, 11)
                .map((e) => ({
                    value: 60 * e,
                    label: U.NW.formatToPlainString(U.t.iXLF9f, { minutes: e })
                }));
        return (0, r.jsxs)(u.hjN, {
            tag: u.RB0.H1,
            title: U.NW.string(U.t.HcoRu7),
            children: [
                (0, r.jsx)(I.F, {
                    setting: L.s6.NOTIFICATIONS_ENABLE_DESKTOP,
                    children: (0, r.jsx)(u.j7V, {
                        className: G.marginBottom20,
                        value: e !== B.qrD.NEVER && !d,
                        onChange: this.handleDesktopChange,
                        note: U.NW.string(U.t.wF9ih4),
                        disabled: d,
                        tooltipNote: d ? U.NW.string(U.t.cIRG0t) : void 0,
                        children: U.NW.string(U.t['/0WClp'])
                    })
                }),
                (0, r.jsx)(Q, {}),
                (0, r.jsx)(I.F, {
                    setting: L.s6.NOTIFICATIONS_UNREAD_MESSAGE_BADGE,
                    children: (0, r.jsx)(u.j7V, {
                        className: m ? G.marginBottom20 : G.marginBottom40,
                        value: !n,
                        note: U.NW.string(U.t['9K4qwc']),
                        onChange: this.handleToggleShowUnreadBadge,
                        children: U.NW.string(U.t.VH8AIC)
                    })
                }),
                (0, r.jsx)(I.F, {
                    setting: L.s6.NOTIFICATIONS_ENABLE_TASKBAR_FLASHING,
                    children: (0, r.jsx)(u.j7V, {
                        className: G.marginBottom40,
                        value: i,
                        note: U.NW.string(U.t['bd4j4+']),
                        onChange: this.handleToggleShowFlash,
                        children: U.NW.string(U.t.xSmFQE)
                    })
                }),
                (0, r.jsx)($, {}),
                (0, r.jsx)(er, {}),
                (0, r.jsx)(I.F, {
                    setting: L.s6.NOTIFICATIONS_PUSH_INACTIVE_TIMEOUT,
                    children: (0, r.jsxs)(u.xJW, {
                        title: U.NW.string(U.t.TTvjd3),
                        children: [
                            (0, r.jsx)(u.q4e, {
                                value: t,
                                onChange: w.CM.updateSetting,
                                options: g
                            }),
                            (0, r.jsx)(u.R94, {
                                type: u.geA.DESCRIPTION,
                                className: G.marginTop8,
                                children: U.NW.string(U.t.Xytv9P)
                            }),
                            (0, r.jsx)(u.$i$, { className: a()(G.marginTop40, G.marginBottom40) })
                        ]
                    })
                }),
                this.renderTTS(),
                (0, r.jsx)(q, {}),
                (0, r.jsx)(u.xJW, {
                    children: (0, r.jsx)(K, {
                        disabledSounds: s,
                        disableAllSounds: l,
                        notifyMessagesInSelectedChannel: c
                    })
                }),
                (0, r.jsx)(W.Z, {})
            ]
        });
    }
    constructor(...e) {
        super(...e),
            F(this, 'handleToggleShowUnreadBadge', () => {
                g.default.setDisableUnreadBadge(!this.props.disableUnreadBadge);
            }),
            F(this, 'handleToggleShowFlash', () => {
                g.default.setTaskbarFlash(!this.props.taskbarFlash);
            }),
            F(this, 'renderTTS', () => {
                if (!h.Zh) return null;
                let e = [
                    {
                        name: U.NW.string(U.t.B1AGeH),
                        value: B.PrB.ALL_CHANNELS
                    },
                    {
                        name: U.NW.string(U.t.uM2rNj),
                        value: B.PrB.SELECTED_CHANNEL
                    },
                    {
                        name: U.NW.string(U.t.DYO5Oj),
                        value: B.PrB.NEVER
                    }
                ];
                return (0, r.jsxs)(I.F, {
                    setting: L.s6.NOTIFICATIONS_TEXT_TO_SPEECH,
                    children: [
                        (0, r.jsxs)(u.xJW, {
                            title: U.NW.string(U.t.VIm5MD),
                            children: [
                                (0, r.jsx)(u.R94, {
                                    type: u.geA.DESCRIPTION,
                                    className: G.marginBottom8,
                                    children: U.NW.string(U.t['+4dnAw'])
                                }),
                                (0, r.jsx)(u.FXm, {
                                    options: e,
                                    onChange: this.handleTTSChange,
                                    value: this.props.ttsType
                                })
                            ]
                        }),
                        (0, r.jsx)(u.$i$, { className: a()(G.marginTop40, G.marginBottom40) })
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
function Q() {
    let e = J.useExperiment({ location: 'settings' }, { autoTrackExposure: !1 }).enabled,
        t = (0, c.e7)([P.ZP], () => P.ZP.mentionOnAllMessages);
    return e
        ? (0, r.jsx)(I.F, {
              setting: L.s6.NOTIFICATIONS_MENTION_ON_ALL_MESSAGES,
              children: (0, r.jsx)(u.j7V, {
                  className: G.marginBottom20,
                  value: t,
                  onChange: (e) => {
                      p.Z.setAccountFlag(M.c.MENTION_ON_ALL_MESSAGES, e);
                  },
                  note: "Increments the mention count when receiving a message in a channel set to 'All Messages'",
                  children: 'Mention on all messages?'
              })
          })
        : null;
}
function $() {
    let e = O.xT.useExperiment({ location: 'UserSettingsNotifications' }, { autoTrackExposure: !1 }).enabled,
        { manuallyOpen: t } = O.fs.useExperiment({ location: 'UserSettingsNotifications' }, { autoTrackExposure: !1 }),
        n = (0, c.e7)([P.ZP], () => P.ZP.useNewNotifications),
        [s, l] = i.useState(!1);
    return e && (n || t)
        ? (0, r.jsxs)(r.Fragment, {
              children: [
                  n
                      ? (0, r.jsx)(I.F, {
                            setting: L.s6.NOTIFICATIONS_UNREAD_SETTINGS,
                            children: (0, r.jsx)(u.j7V, {
                                className: G.marginBottom40,
                                value: n,
                                disabled: s || !n,
                                note: U.NW.string(U.t.frbLrK),
                                onChange: () => ee(l),
                                children: U.NW.string(U.t.z21l8P)
                            })
                        })
                      : t
                        ? (0, r.jsx)(I.F, {
                              setting: L.s6.NOTIFICATIONS_UNREAD_SETTINGS,
                              children: (0, r.jsx)(u.j7V, {
                                  className: G.marginBottom40,
                                  value: n,
                                  disabled: s || n,
                                  note: 'Turns on the new notification system',
                                  onChange: (e) => {
                                      p.Z.setAccountFlag(M.c.USE_NEW_NOTIFICATIONS, e);
                                  },
                                  children: U.NW.string(U.t.z21l8P)
                              })
                          })
                        : null,
                  (0, r.jsxs)(I.F, {
                      setting: L.s6.NOTIFICATIONS_NEW_SETTINGS,
                      children: [
                          (0, r.jsx)(u.xJW, {
                              title: 'New Notification Settings (Advanced, Staff Only)',
                              children: (0, r.jsxs)('div', {
                                  style: {
                                      display: 'flex',
                                      gap: 16
                                  },
                                  children: [
                                      (0, r.jsx)(I.F, {
                                          setting: L.s6.NOTIFICATIONS_RESTORE_MOST_RECENT_SNAPSHOT,
                                          children: (0, r.jsx)(u.zxk, {
                                              onClick: j.KP,
                                              children: 'Restore most recent snapshot'
                                          })
                                      }),
                                      (0, r.jsx)(I.F, {
                                          setting: L.s6.NOTIFICATIONS_LAUNCH_MIGRATION,
                                          children: (0, r.jsx)(u.zxk, {
                                              onClick: () => {
                                                  (0, S.R)(!0);
                                              },
                                              children: 'Launch Migration'
                                          })
                                      }),
                                      (0, r.jsx)(I.F, {
                                          setting: L.s6.NOTIFICATIONS_TOGGLE_NEW_SYSTEM,
                                          children: (0, r.jsx)(u.j7V, {
                                              hideBorder: !0,
                                              value: n,
                                              onChange: (e) => {
                                                  p.Z.setAccountFlag(M.c.USE_NEW_NOTIFICATIONS, e);
                                              },
                                              children: 'Toggle new system on/off'
                                          })
                                      })
                                  ]
                              })
                          }),
                          (0, r.jsx)(u.$i$, { className: a()(G.marginTop40, G.marginBottom40) })
                      ]
                  })
              ]
          })
        : null;
}
async function ee(e) {
    e(!0);
    let t = await (0, j.Tn)();
    0 === t.length
        ? await (0, C.oL)()
        : m.Z.show({
              title: U.NW.string(U.t['cY+Ooa']),
              body: U.NW.format(U.t['7zTJJS'], { date: new Date(t[t.length - 1].recorded_at) }),
              cancelText: U.NW.string(U.t['ETE/oK']),
              confirmText: U.NW.string(U.t.Rm96T0),
              onConfirm: C.oL
          }),
        e(!1);
}
function et(e) {
    let t = (0, E.p)();
    return (0, r.jsx)(X, z(H({}, e), { focusMode: t }));
}
function en() {
    let e = (0, c.cj)([A.Z], () => ({
        disableUnreadBadge: A.Z.getDisableUnreadBadge(),
        taskbarFlash: A.Z.taskbarFlash,
        disabledSounds: A.Z.getDisabledSounds(),
        disableAllSounds: A.Z.getDisableAllSounds(),
        desktopType: A.Z.getDesktopType(),
        ttsType: A.Z.getTTSType(),
        notifyMessagesInSelectedChannel: A.Z.getNotifyMessagesInSelectedChannel()
    }));
    return (0, r.jsx)(et, z(H({}, e), { afkTimeout: w.CM.useSetting() }));
}
function er() {
    let e = w.fz.useSetting(),
        t = [
            {
                name: U.NW.string(U.t['9x/Rtb']),
                value: d.Ns.NOTIFICATIONS_ENABLED
            },
            {
                name: U.NW.string(U.t.fJAbQU),
                value: d.Ns.ONLY_DMS
            },
            {
                name: U.NW.string(U.t['xu+UDQ']),
                value: d.Ns.NOTIFICATIONS_DISABLED
            }
        ];
    return v.Z.getCurrentConfig({ location: 'webSettings' }).enableInAppNotifications
        ? (0, r.jsxs)(I.F, {
              setting: L.s6.NOTIFICATIONS_REACTIONS,
              children: [
                  (0, r.jsxs)(u.xJW, {
                      title: U.NW.string(U.t.Rq0NFh),
                      children: [
                          (0, r.jsx)(u.R94, {
                              type: u.geA.DESCRIPTION,
                              className: G.marginBottom8,
                              children: U.NW.string(U.t.oWF6eX)
                          }),
                          (0, r.jsx)(u.FXm, {
                              options: t,
                              onChange: (t) => {
                                  (0, T.MR)(t.value, e);
                              },
                              value: e
                          })
                      ]
                  }),
                  (0, r.jsx)(u.$i$, { className: a()(G.marginTop40, G.marginBottom40) })
              ]
          })
        : null;
}
