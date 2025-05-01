n.d(t, { Z: () => en }), n(539854), n(388685);
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
    p = n(292556),
    g = n(87051),
    h = n(419363),
    f = n(818083),
    b = n(688465),
    _ = n(487419),
    x = n(197344),
    E = n(476756),
    j = n(734934),
    C = n(223683),
    O = n(312400),
    S = n(115345),
    v = n(392888),
    T = n(106371),
    I = n(995774),
    N = n(921801),
    y = n(460181),
    A = n(292959),
    P = n(9156),
    R = n(912101),
    D = n(358085),
    Z = n(709054),
    w = n(695346),
    k = n(675478),
    L = n(33656),
    M = n(726985),
    B = n(981631),
    U = n(468788),
    V = n(388032),
    G = n(589848),
    F = n(20493);
function H(e, t, n) {
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
function z(e) {
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
                H(e, t, n[t]);
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
function Y(e) {
    let { label: t, enabled: n, disabled: r, onPreview: s, onChange: l, tooltip: a } = e;
    return (0, i.jsx)(u.j7V, {
        className: G.soundRow,
        value: n,
        onChange: l,
        disabled: r,
        tooltipNote: a,
        children: (0, i.jsxs)('div', {
            className: G.notificationSound,
            children: [
                (0, i.jsx)('div', {
                    className: G.soundName,
                    children: t
                }),
                (0, i.jsx)(u.P3F, {
                    className: G.soundIcon,
                    onClick: s,
                    'aria-label': V.intl.string(V.t.Kd4uxM),
                    children: (0, i.jsx)(u.gj8, {
                        size: 'xs',
                        color: 'currentColor',
                        className: G.icon,
                        'aria-hidden': !0
                    })
                })
            ]
        })
    });
}
function K(e) {
    let { disabledSounds: t, disableAllSounds: n, notifyMessagesInSelectedChannel: s } = e,
        a = r.useRef(null),
        o = (0, j.p)(),
        c = r.useCallback((e, t) => {
            t.stopPropagation(), t.preventDefault(), null != a.current && a.current.stop(), (a.current = (0, y.GN)(e));
        }, []),
        d = r.useCallback(
            (e, n) => {
                let i = t.filter((t) => t !== e);
                n || i.push(e), p.default.setDisabledSounds(i);
            },
            [t]
        );
    r.useEffect(() => () => {
        var e;
        null == (e = a.current) || e.stop();
    });
    let m = [
            {
                label: V.intl.string(V.t.pz71xM),
                sound: 'message1',
                focusModeDisabled: o
            },
            {
                label: V.intl.string(V.t.hK51Ym),
                sound: 'deafen'
            },
            {
                label: V.intl.string(V.t.XiejaG),
                sound: 'undeafen'
            },
            {
                label: V.intl.string(V.t['w4m94+']),
                sound: 'mute'
            },
            {
                label: V.intl.string(V.t.YqAjX1),
                sound: 'unmute'
            },
            {
                label: V.intl.string(V.t['juL9/P']),
                sound: 'disconnect'
            },
            {
                label: V.intl.string(V.t.x98vQk),
                sound: 'ptt_start'
            },
            {
                label: V.intl.string(V.t['1HjRqK']),
                sound: 'ptt_stop'
            },
            {
                label: V.intl.string(V.t['9JB1Cg']),
                sound: 'user_join'
            },
            {
                label: V.intl.string(V.t.KUBBNj),
                sound: 'user_leave'
            },
            {
                label: V.intl.string(V.t.EZjqUV),
                sound: 'user_moved'
            },
            {
                label: V.intl.string(V.t.LnNlQk),
                sound: 'call_calling'
            },
            {
                label: V.intl.string(V.t.XBrJT0),
                sound: 'call_ringing'
            },
            {
                label: V.intl.string(V.t['Nd8P5+']),
                sound: 'stream_started'
            },
            {
                label: V.intl.string(V.t['9bYj+P']),
                sound: 'stream_ended'
            },
            {
                label: V.intl.string(V.t.KccUIy),
                sound: 'stream_user_joined'
            },
            {
                label: V.intl.string(V.t.dsjkiI),
                sound: 'stream_user_left'
            },
            {
                label: V.intl.string(V.t.nFOcf3),
                sound: 'activity_launch'
            },
            {
                label: V.intl.string(V.t['a6lw/v']),
                sound: 'activity_end'
            },
            {
                label: V.intl.string(V.t.KaFxra),
                sound: 'activity_user_join'
            },
            {
                label: V.intl.string(V.t.S14z9v),
                sound: 'activity_user_left'
            },
            {
                label: V.intl.string(V.t.CP3DCw),
                sound: 'reconnect'
            }
        ],
        g = null != x.Z.useHolidaySoundpack();
    return (0, i.jsx)(N.F, {
        setting: M.s6.NOTIFICATIONS_SOUNDS,
        children: (0, i.jsxs)(u.hjN, {
            children: [
                g
                    ? (0, i.jsxs)(i.Fragment, {
                          children: [
                              (0, i.jsx)(u.vwX, {
                                  className: F.marginBottom20,
                                  children: V.intl.string(V.t.fgSHf3)
                              }),
                              (0, i.jsx)(E.Z, {})
                          ]
                      })
                    : null,
                (0, i.jsx)(u.vwX, {
                    className: l()(F.marginBottom20, F.marginTop20),
                    children: V.intl.string(V.t.MKWyKS)
                }),
                (0, i.jsx)(u.j7V, {
                    note: V.intl.string(V.t['7oXUio']),
                    value: s,
                    onChange: p.default.setNotifyMessagesInSelectedChannel,
                    children: V.intl.string(V.t.lF5GGR)
                }),
                (0, i.jsx)(u.j7V, {
                    note: V.intl.string(V.t['+B0XLC']),
                    value: n,
                    onChange: p.default.toggleDisableAllSounds,
                    children: V.intl.string(V.t['2ZhCOT'])
                }),
                m.map((e) => {
                    let { label: r, sound: s, focusModeDisabled: l } = e;
                    return (0, i.jsx)(
                        Y,
                        {
                            label: r,
                            disabled: n || !0 === l,
                            tooltip: l ? V.intl.string(V.t.cIRG0t) : void 0,
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
function q() {
    let e = (0, c.e7)([_.Z], () => _.Z.getGuildAlertSettings()),
        [t, n] = r.useState(null),
        s = Z.default.keys(e).map((t) => {
            let n = e[t];
            return {
                label: n.guildName,
                value: n.guildId
            };
        });
    return 0 === Object.keys(e).length
        ? null
        : (0, i.jsxs)(N.F, {
              setting: M.s6.NOTIFICATIONS_COMMUNITY_ACTIVITY_ALERTS,
              children: [
                  (0, i.jsxs)(u.X6q, {
                      variant: 'heading-lg/semibold',
                      className: l()(G.titleWithBeta, F.marginBottom20),
                      children: [V.intl.string(V.t.D9yVAA), (0, i.jsx)(b.Z, {})]
                  }),
                  (0, i.jsx)(u.R94, {
                      type: u.geA.DESCRIPTION,
                      className: F.marginBottom20,
                      children: V.intl.string(V.t['0PhAOD'])
                  }),
                  (0, i.jsxs)(u.xJW, {
                      title: V.intl.string(V.t.Q0PsXV),
                      children: [
                          (0, i.jsx)(u.q4e, {
                              className: null != t ? F.marginBottom20 : F.marginBottom40,
                              value: t,
                              onChange: (e) => {
                                  n(e);
                              },
                              options: s
                          }),
                          null != t
                              ? (0, i.jsxs)('div', {
                                    className: F.marginTop20,
                                    children: [
                                        (0, i.jsxs)(N.F, {
                                            setting: M.s6.NOTIFICATIONS_COMMUNITY_IN_APP_ALERTS,
                                            children: [
                                                (0, i.jsx)(u.j7V, {
                                                    className: F.marginBottom20,
                                                    note: V.intl.string(V.t['z8Td4+']),
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
                                                    children: V.intl.string(V.t.u6dc5O)
                                                }),
                                                (0, i.jsx)(u.$i$, { className: l()(F.marginTop20, F.marginBottom40) })
                                            ]
                                        }),
                                        (0, i.jsxs)(N.F, {
                                            setting: M.s6.NOTIFICATIONS_COMMUNITY_PUSH_NOTIFICATIONS,
                                            children: [
                                                (0, i.jsx)(u.j7V, {
                                                    className: F.marginBottom20,
                                                    note: V.intl.string(V.t.PyxXs7),
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
                                                    children: V.intl.string(V.t.P8MG6u)
                                                }),
                                                (0, i.jsx)(u.$i$, { className: l()(F.marginTop20, F.marginBottom40) })
                                            ]
                                        })
                                    ]
                                })
                              : null,
                          null != t ? null : (0, i.jsx)(u.$i$, { className: l()(F.marginTop20, F.marginBottom40) })
                      ]
                  })
              ]
          });
}
class X extends r.PureComponent {
    handleDesktopChange(e) {
        let t = e ? B.qrD.ALL : B.qrD.NEVER;
        if (t !== B.qrD.NEVER)
            R.Z.requestPermission((e) => {
                let t = e ? B.$Ab.ENABLED : B.$Ab.BLOCKED;
                p.default.setPermissionsState(t, 'UserSettingsModal');
            });
        else p.default.setDesktopType(t);
    }
    handleTTSChange(e) {
        let t = e.value;
        p.default.setTTSType(t);
    }
    render() {
        let { desktopType: e, afkTimeout: t, disableUnreadBadge: n, taskbarFlash: r, disabledSounds: s, disableAllSounds: a, notifyMessagesInSelectedChannel: c, focusMode: d } = this.props,
            m = D.isPlatformEmbedded && (0, D.isWindows)(),
            p = o()
                .range(1, 11)
                .map((e) => ({
                    value: 60 * e,
                    label: V.intl.formatToPlainString(V.t.iXLF9f, { minutes: e })
                }));
        return (0, i.jsxs)(u.hjN, {
            tag: u.RB0.H1,
            title: V.intl.string(V.t.HcoRu7),
            children: [
                (0, i.jsx)(N.F, {
                    setting: M.s6.NOTIFICATIONS_ENABLE_DESKTOP,
                    children: (0, i.jsx)(u.j7V, {
                        className: F.marginBottom20,
                        value: e !== B.qrD.NEVER && !d,
                        onChange: this.handleDesktopChange,
                        note: V.intl.string(V.t.wF9ih4),
                        disabled: d,
                        tooltipNote: d ? V.intl.string(V.t.cIRG0t) : void 0,
                        children: V.intl.string(V.t['/0WClp'])
                    })
                }),
                (0, i.jsx)(J, {}),
                (0, i.jsx)(N.F, {
                    setting: M.s6.NOTIFICATIONS_UNREAD_MESSAGE_BADGE,
                    children: (0, i.jsx)(u.j7V, {
                        className: m ? F.marginBottom20 : F.marginBottom40,
                        value: !n,
                        note: V.intl.string(V.t['9K4qwc']),
                        onChange: this.handleToggleShowUnreadBadge,
                        children: V.intl.string(V.t.VH8AIC)
                    })
                }),
                (0, i.jsx)(N.F, {
                    setting: M.s6.NOTIFICATIONS_ENABLE_TASKBAR_FLASHING,
                    children: (0, i.jsx)(u.j7V, {
                        className: F.marginBottom40,
                        value: r,
                        note: V.intl.string(V.t['bd4j4+']),
                        onChange: this.handleToggleShowFlash,
                        children: V.intl.string(V.t.xSmFQE)
                    })
                }),
                (0, i.jsx)($, {}),
                (0, i.jsx)(ei, {}),
                (0, i.jsx)(N.F, {
                    setting: M.s6.NOTIFICATIONS_PUSH_INACTIVE_TIMEOUT,
                    children: (0, i.jsxs)(u.xJW, {
                        title: V.intl.string(V.t.TTvjd3),
                        children: [
                            (0, i.jsx)(u.q4e, {
                                value: t,
                                onChange: w.CM.updateSetting,
                                options: p
                            }),
                            (0, i.jsx)(u.R94, {
                                type: u.geA.DESCRIPTION,
                                className: F.marginTop8,
                                children: V.intl.string(V.t.Xytv9P)
                            }),
                            (0, i.jsx)(u.$i$, { className: l()(F.marginTop40, F.marginBottom40) })
                        ]
                    })
                }),
                this.renderTTS(),
                (0, i.jsx)(q, {}),
                (0, i.jsx)(u.xJW, {
                    children: (0, i.jsx)(K, {
                        disabledSounds: s,
                        disableAllSounds: a,
                        notifyMessagesInSelectedChannel: c
                    })
                }),
                (0, i.jsx)(L.Z, {})
            ]
        });
    }
    constructor(...e) {
        super(...e),
            H(this, 'handleToggleShowUnreadBadge', () => {
                p.default.setDisableUnreadBadge(!this.props.disableUnreadBadge);
            }),
            H(this, 'handleToggleShowFlash', () => {
                p.default.setTaskbarFlash(!this.props.taskbarFlash);
            }),
            H(this, 'renderTTS', () => {
                if (!h.Zh) return null;
                let e = [
                    {
                        name: V.intl.string(V.t.B1AGeH),
                        value: B.PrB.ALL_CHANNELS
                    },
                    {
                        name: V.intl.string(V.t.uM2rNj),
                        value: B.PrB.SELECTED_CHANNEL
                    },
                    {
                        name: V.intl.string(V.t.DYO5Oj),
                        value: B.PrB.NEVER
                    }
                ];
                return (0, i.jsxs)(N.F, {
                    setting: M.s6.NOTIFICATIONS_TEXT_TO_SPEECH,
                    children: [
                        (0, i.jsxs)(u.xJW, {
                            title: V.intl.string(V.t.VIm5MD),
                            children: [
                                (0, i.jsx)(u.R94, {
                                    type: u.geA.DESCRIPTION,
                                    className: F.marginBottom8,
                                    children: V.intl.string(V.t['+4dnAw'])
                                }),
                                (0, i.jsx)(u.FXm, {
                                    options: e,
                                    onChange: this.handleTTSChange,
                                    value: this.props.ttsType
                                })
                            ]
                        }),
                        (0, i.jsx)(u.$i$, { className: l()(F.marginTop40, F.marginBottom40) })
                    ]
                });
            });
    }
}
let Q = (0, f.B)({
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
function J() {
    let e = Q.useExperiment({ location: 'settings' }, { autoTrackExposure: !1 }).enabled,
        t = (0, c.e7)([P.ZP], () => P.ZP.mentionOnAllMessages);
    return e
        ? (0, i.jsx)(N.F, {
              setting: M.s6.NOTIFICATIONS_MENTION_ON_ALL_MESSAGES,
              children: (0, i.jsx)(u.j7V, {
                  className: F.marginBottom20,
                  value: t,
                  onChange: (e) => {
                      g.Z.setAccountFlag(U.c.MENTION_ON_ALL_MESSAGES, e);
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
        [s, a] = r.useState(!1);
    return e && (n || t)
        ? (0, i.jsxs)(i.Fragment, {
              children: [
                  n
                      ? (0, i.jsx)(N.F, {
                            setting: M.s6.NOTIFICATIONS_UNREAD_SETTINGS,
                            children: (0, i.jsx)(u.j7V, {
                                className: F.marginBottom40,
                                value: n,
                                disabled: s || !n,
                                note: V.intl.string(V.t.frbLrK),
                                onChange: () => ee(a),
                                children: V.intl.string(V.t.z21l8P)
                            })
                        })
                      : t
                        ? (0, i.jsx)(N.F, {
                              setting: M.s6.NOTIFICATIONS_UNREAD_SETTINGS,
                              children: (0, i.jsx)(u.j7V, {
                                  className: F.marginBottom40,
                                  value: n,
                                  disabled: s || n,
                                  note: 'Turns on the new notification system',
                                  onChange: (e) => {
                                      g.Z.setAccountFlag(U.c.USE_NEW_NOTIFICATIONS, e);
                                  },
                                  children: V.intl.string(V.t.z21l8P)
                              })
                          })
                        : null,
                  (0, i.jsxs)(N.F, {
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
                                      (0, i.jsx)(N.F, {
                                          setting: M.s6.NOTIFICATIONS_RESTORE_MOST_RECENT_SNAPSHOT,
                                          children: (0, i.jsx)(u.zxk, {
                                              onClick: C.KP,
                                              children: 'Restore most recent snapshot'
                                          })
                                      }),
                                      (0, i.jsx)(N.F, {
                                          setting: M.s6.NOTIFICATIONS_LAUNCH_MIGRATION,
                                          children: (0, i.jsx)(u.zxk, {
                                              onClick: () => {
                                                  (0, v.R)(!0);
                                              },
                                              children: 'Launch Migration'
                                          })
                                      }),
                                      (0, i.jsx)(N.F, {
                                          setting: M.s6.NOTIFICATIONS_TOGGLE_NEW_SYSTEM,
                                          children: (0, i.jsx)(u.j7V, {
                                              hideBorder: !0,
                                              value: n,
                                              onChange: (e) => {
                                                  g.Z.setAccountFlag(U.c.USE_NEW_NOTIFICATIONS, e);
                                              },
                                              children: 'Toggle new system on/off'
                                          })
                                      })
                                  ]
                              })
                          }),
                          (0, i.jsx)(u.$i$, { className: l()(F.marginTop40, F.marginBottom40) })
                      ]
                  })
              ]
          })
        : null;
}
async function ee(e) {
    e(!0);
    let t = await (0, C.Tn)();
    0 === t.length
        ? await (0, S.oL)()
        : m.Z.show({
              title: V.intl.string(V.t['cY+Ooa']),
              body: V.intl.format(V.t['7zTJJS'], { date: new Date(t[t.length - 1].recorded_at) }),
              cancelText: V.intl.string(V.t['ETE/oK']),
              confirmText: V.intl.string(V.t.Rm96T0),
              onConfirm: S.oL
          }),
        e(!1);
}
function et(e) {
    let t = (0, j.p)();
    return (0, i.jsx)(X, W(z({}, e), { focusMode: t }));
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
    return (0, i.jsx)(et, W(z({}, e), { afkTimeout: w.CM.useSetting() }));
}
function ei() {
    let e = w.fz.useSetting(),
        t = [
            {
                name: V.intl.string(V.t['9x/Rtb']),
                value: d.Ns.NOTIFICATIONS_ENABLED
            },
            {
                name: V.intl.string(V.t.fJAbQU),
                value: d.Ns.ONLY_DMS
            },
            {
                name: V.intl.string(V.t['xu+UDQ']),
                value: d.Ns.NOTIFICATIONS_DISABLED
            }
        ];
    return T.Z.getCurrentConfig({ location: 'webSettings' }).enableInAppNotifications
        ? (0, i.jsxs)(N.F, {
              setting: M.s6.NOTIFICATIONS_REACTIONS,
              children: [
                  (0, i.jsxs)(u.xJW, {
                      title: V.intl.string(V.t.Rq0NFh),
                      children: [
                          (0, i.jsx)(u.R94, {
                              type: u.geA.DESCRIPTION,
                              className: F.marginBottom8,
                              children: V.intl.string(V.t.oWF6eX)
                          }),
                          (0, i.jsx)(u.FXm, {
                              options: t,
                              onChange: (t) => {
                                  (0, I.MR)(t.value, e);
                              },
                              value: e
                          })
                      ]
                  }),
                  (0, i.jsx)(u.$i$, { className: l()(F.marginTop40, F.marginBottom40) })
              ]
          })
        : null;
}
