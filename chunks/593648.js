n.d(t, { Z: () => ee }), n(653041), n(47120);
var i = n(200651),
    s = n(192379),
    l = n(120356),
    r = n.n(l),
    a = n(392711),
    o = n.n(a),
    c = n(442837),
    d = n(524437),
    u = n(481060),
    h = n(668781),
    m = n(292556),
    g = n(87051),
    x = n(419363),
    _ = n(818083),
    p = n(688465),
    E = n(487419),
    C = n(197344),
    N = n(476756),
    I = n(734934),
    f = n(223683),
    T = n(312400),
    S = n(115345),
    j = n(392888),
    v = n(106371),
    b = n(995774),
    A = n(921801),
    O = n(460181),
    R = n(292959),
    D = n(9156),
    P = n(912101),
    y = n(358085),
    Z = n(709054),
    L = n(695346),
    k = n(675478),
    B = n(33656),
    M = n(726985),
    V = n(981631),
    w = n(468788),
    U = n(388032),
    G = n(348207),
    F = n(814632);
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
function Y(e) {
    let { label: t, enabled: n, disabled: s, onPreview: l, onChange: r, tooltip: a } = e;
    return (0, i.jsx)(u.j7V, {
        className: G.soundRow,
        value: n,
        onChange: r,
        disabled: s,
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
                    onClick: l,
                    'aria-label': U.intl.string(U.t.Kd4uxM),
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
function H(e) {
    let { disabledSounds: t, disableAllSounds: n, notifyMessagesInSelectedChannel: l } = e,
        a = s.useRef(),
        o = (0, I.p)(),
        c = s.useCallback((e, t) => {
            t.stopPropagation(), t.preventDefault(), null != a.current && a.current.stop(), (a.current = (0, O.GN)(e));
        }, []),
        d = s.useCallback(
            (e, n) => {
                let i = t.filter((t) => t !== e);
                n || i.push(e), m.default.setDisabledSounds(i);
            },
            [t]
        );
    s.useEffect(() => () => {
        var e;
        null === (e = a.current) || void 0 === e || e.stop();
    });
    let h = [
            {
                label: U.intl.string(U.t.pz71xM),
                sound: 'message1',
                focusModeDisabled: o
            },
            {
                label: U.intl.string(U.t.hK51Ym),
                sound: 'deafen'
            },
            {
                label: U.intl.string(U.t.XiejaG),
                sound: 'undeafen'
            },
            {
                label: U.intl.string(U.t['w4m94+']),
                sound: 'mute'
            },
            {
                label: U.intl.string(U.t.YqAjX1),
                sound: 'unmute'
            },
            {
                label: U.intl.string(U.t['juL9/P']),
                sound: 'disconnect'
            },
            {
                label: U.intl.string(U.t.x98vQk),
                sound: 'ptt_start'
            },
            {
                label: U.intl.string(U.t['1HjRqK']),
                sound: 'ptt_stop'
            },
            {
                label: U.intl.string(U.t['9JB1Cg']),
                sound: 'user_join'
            },
            {
                label: U.intl.string(U.t.KUBBNj),
                sound: 'user_leave'
            },
            {
                label: U.intl.string(U.t.EZjqUV),
                sound: 'user_moved'
            },
            {
                label: U.intl.string(U.t.LnNlQk),
                sound: 'call_calling'
            },
            {
                label: U.intl.string(U.t.XBrJT0),
                sound: 'call_ringing'
            },
            {
                label: U.intl.string(U.t['Nd8P5+']),
                sound: 'stream_started'
            },
            {
                label: U.intl.string(U.t['9bYj+P']),
                sound: 'stream_ended'
            },
            {
                label: U.intl.string(U.t.KccUIy),
                sound: 'stream_user_joined'
            },
            {
                label: U.intl.string(U.t.dsjkiI),
                sound: 'stream_user_left'
            },
            {
                label: U.intl.string(U.t.nFOcf3),
                sound: 'activity_launch'
            },
            {
                label: U.intl.string(U.t['a6lw/v']),
                sound: 'activity_end'
            },
            {
                label: U.intl.string(U.t.KaFxra),
                sound: 'activity_user_join'
            },
            {
                label: U.intl.string(U.t.S14z9v),
                sound: 'activity_user_left'
            },
            {
                label: U.intl.string(U.t.CP3DCw),
                sound: 'reconnect'
            }
        ],
        g = null != C.Z.useHolidaySoundpack();
    return (0, i.jsx)(A.F, {
        setting: M.s6.NOTIFICATIONS_SOUNDS,
        children: (0, i.jsxs)(u.hjN, {
            children: [
                g
                    ? (0, i.jsxs)(i.Fragment, {
                          children: [
                              (0, i.jsx)(u.vwX, {
                                  className: F.marginBottom20,
                                  children: U.intl.string(U.t.fgSHf3)
                              }),
                              (0, i.jsx)(N.Z, {})
                          ]
                      })
                    : null,
                (0, i.jsx)(u.vwX, {
                    className: r()(F.marginBottom20, F.marginTop20),
                    children: U.intl.string(U.t.MKWyKS)
                }),
                (0, i.jsx)(u.j7V, {
                    note: U.intl.string(U.t['7oXUio']),
                    value: l,
                    onChange: m.default.setNotifyMessagesInSelectedChannel,
                    children: U.intl.string(U.t.lF5GGR)
                }),
                (0, i.jsx)(u.j7V, {
                    note: U.intl.string(U.t['+B0XLC']),
                    value: n,
                    onChange: m.default.toggleDisableAllSounds,
                    children: U.intl.string(U.t['2ZhCOT'])
                }),
                h.map((e) => {
                    let { label: s, sound: l, focusModeDisabled: r } = e;
                    return (0, i.jsx)(
                        Y,
                        {
                            label: s,
                            disabled: n || !0 === r,
                            tooltip: r ? U.intl.string(U.t.cIRG0t) : void 0,
                            onChange: (e) => d(l, e),
                            onPreview: (e) => c(l, e),
                            enabled: !n && !t.includes(l) && !0 !== r
                        },
                        l
                    );
                })
            ]
        })
    });
}
function W() {
    let e = (0, c.e7)([E.Z], () => E.Z.getGuildAlertSettings()),
        [t, n] = s.useState(null),
        l = Z.default.keys(e).map((t) => {
            let n = e[t];
            return {
                label: n.guildName,
                value: n.guildId
            };
        });
    return 0 === Object.keys(e).length
        ? null
        : (0, i.jsxs)(A.F, {
              setting: M.s6.NOTIFICATIONS_COMMUNITY_ACTIVITY_ALERTS,
              children: [
                  (0, i.jsxs)(u.X6q, {
                      variant: 'heading-lg/semibold',
                      className: r()(G.titleWithBeta, F.marginBottom20),
                      children: [U.intl.string(U.t.D9yVAA), (0, i.jsx)(p.Z, {})]
                  }),
                  (0, i.jsx)(u.R94, {
                      type: u.geA.DESCRIPTION,
                      className: F.marginBottom20,
                      children: U.intl.string(U.t['0PhAOD'])
                  }),
                  (0, i.jsxs)(u.xJW, {
                      title: U.intl.string(U.t.Q0PsXV),
                      children: [
                          (0, i.jsx)(u.q4e, {
                              className: null != t ? F.marginBottom20 : F.marginBottom40,
                              value: t,
                              onChange: (e) => {
                                  n(e);
                              },
                              options: l
                          }),
                          null != t
                              ? (0, i.jsxs)('div', {
                                    className: F.marginTop20,
                                    children: [
                                        (0, i.jsxs)(A.F, {
                                            setting: M.s6.NOTIFICATIONS_COMMUNITY_IN_APP_ALERTS,
                                            children: [
                                                (0, i.jsx)(u.j7V, {
                                                    className: r()(F.marginBottom20),
                                                    note: U.intl.string(U.t['z8Td4+']),
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
                                                    children: U.intl.string(U.t.u6dc5O)
                                                }),
                                                (0, i.jsx)(u.$i$, { className: r()(F.marginTop20, F.marginBottom40) })
                                            ]
                                        }),
                                        (0, i.jsxs)(A.F, {
                                            setting: M.s6.NOTIFICATIONS_COMMUNITY_PUSH_NOTIFICATIONS,
                                            children: [
                                                (0, i.jsx)(u.j7V, {
                                                    className: F.marginBottom20,
                                                    note: U.intl.string(U.t.PyxXs7),
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
                                                    children: U.intl.string(U.t.P8MG6u)
                                                }),
                                                (0, i.jsx)(u.$i$, { className: r()(F.marginTop20, F.marginBottom40) })
                                            ]
                                        })
                                    ]
                                })
                              : null,
                          null != t ? null : (0, i.jsx)(u.$i$, { className: r()(F.marginTop20, F.marginBottom40) })
                      ]
                  })
              ]
          });
}
class K extends s.PureComponent {
    handleDesktopChange(e) {
        let t = e ? V.qrD.ALL : V.qrD.NEVER;
        if (t !== V.qrD.NEVER) {
            var n;
            (n = 'UserSettingsModal'),
                P.Z.requestPermission((e) => {
                    let t = e ? V.$Ab.ENABLED : V.$Ab.BLOCKED;
                    m.default.setPermissionsState(t, n);
                });
        } else m.default.setDesktopType(t);
    }
    handleTTSChange(e) {
        let t = e.value;
        m.default.setTTSType(t);
    }
    render() {
        let { desktopType: e, afkTimeout: t, disableUnreadBadge: n, taskbarFlash: s, disabledSounds: l, disableAllSounds: a, notifyMessagesInSelectedChannel: c, focusMode: d } = this.props,
            h = y.isPlatformEmbedded && (0, y.isWindows)(),
            m = o()
                .range(1, 11)
                .map((e) => ({
                    value: 60 * e,
                    label: U.intl.formatToPlainString(U.t.iXLF9f, { minutes: e })
                }));
        return (0, i.jsxs)(u.hjN, {
            tag: u.RB0.H1,
            title: U.intl.string(U.t.HcoRu7),
            children: [
                (0, i.jsx)(A.F, {
                    setting: M.s6.NOTIFICATIONS_ENABLE_DESKTOP,
                    children: (0, i.jsx)(u.j7V, {
                        className: F.marginBottom20,
                        value: e !== V.qrD.NEVER && !d,
                        onChange: this.handleDesktopChange,
                        note: U.intl.string(U.t.wF9ih4),
                        disabled: d,
                        tooltipNote: d ? U.intl.string(U.t.cIRG0t) : void 0,
                        children: U.intl.string(U.t['/0WClp'])
                    })
                }),
                (0, i.jsx)(q, {}),
                (0, i.jsx)(A.F, {
                    setting: M.s6.NOTIFICATIONS_UNREAD_MESSAGE_BADGE,
                    children: (0, i.jsx)(u.j7V, {
                        className: h ? F.marginBottom20 : F.marginBottom40,
                        value: !n,
                        note: U.intl.string(U.t['9K4qwc']),
                        onChange: this.handleToggleShowUnreadBadge,
                        children: U.intl.string(U.t.VH8AIC)
                    })
                }),
                (0, i.jsx)(A.F, {
                    setting: M.s6.NOTIFICATIONS_ENABLE_TASKBAR_FLASHING,
                    children: (0, i.jsx)(u.j7V, {
                        className: F.marginBottom40,
                        value: s,
                        note: U.intl.string(U.t['bd4j4+']),
                        onChange: this.handleToggleShowFlash,
                        children: U.intl.string(U.t.xSmFQE)
                    })
                }),
                (0, i.jsx)(J, {}),
                (0, i.jsx)(et, {}),
                (0, i.jsx)(A.F, {
                    setting: M.s6.NOTIFICATIONS_PUSH_INACTIVE_TIMEOUT,
                    children: (0, i.jsxs)(u.xJW, {
                        title: U.intl.string(U.t.TTvjd3),
                        children: [
                            (0, i.jsx)(u.q4e, {
                                value: t,
                                onChange: L.CM.updateSetting,
                                options: m
                            }),
                            (0, i.jsx)(u.R94, {
                                type: u.geA.DESCRIPTION,
                                className: F.marginTop8,
                                children: U.intl.string(U.t.Xytv9P)
                            }),
                            (0, i.jsx)(u.$i$, { className: r()(F.marginTop40, F.marginBottom40) })
                        ]
                    })
                }),
                this.renderTTS(),
                (0, i.jsx)(W, {}),
                (0, i.jsx)(u.xJW, {
                    children: (0, i.jsx)(H, {
                        disabledSounds: l,
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
                m.default.setDisableUnreadBadge(!this.props.disableUnreadBadge);
            }),
            z(this, 'handleToggleShowFlash', () => {
                m.default.setTaskbarFlash(!this.props.taskbarFlash);
            }),
            z(this, 'renderTTS', () => {
                if (!x.Zh) return null;
                let e = [
                    {
                        name: U.intl.string(U.t.B1AGeH),
                        value: V.PrB.ALL_CHANNELS
                    },
                    {
                        name: U.intl.string(U.t.uM2rNj),
                        value: V.PrB.SELECTED_CHANNEL
                    },
                    {
                        name: U.intl.string(U.t.DYO5Oj),
                        value: V.PrB.NEVER
                    }
                ];
                return (0, i.jsxs)(A.F, {
                    setting: M.s6.NOTIFICATIONS_TEXT_TO_SPEECH,
                    children: [
                        (0, i.jsxs)(u.xJW, {
                            title: U.intl.string(U.t.VIm5MD),
                            children: [
                                (0, i.jsx)(u.R94, {
                                    type: u.geA.DESCRIPTION,
                                    className: F.marginBottom8,
                                    children: U.intl.string(U.t['+4dnAw'])
                                }),
                                (0, i.jsx)(u.FXm, {
                                    options: e,
                                    onChange: this.handleTTSChange,
                                    value: this.props.ttsType
                                })
                            ]
                        }),
                        (0, i.jsx)(u.$i$, { className: r()(F.marginTop40, F.marginBottom40) })
                    ]
                });
            });
    }
}
let X = (0, _.B)({
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
function q() {
    let e = X.useExperiment({ location: 'settings' }, { autoTrackExposure: !1 }).enabled,
        t = (0, c.e7)([D.ZP], () => D.ZP.mentionOnAllMessages);
    return e
        ? (0, i.jsx)(A.F, {
              setting: M.s6.NOTIFICATIONS_MENTION_ON_ALL_MESSAGES,
              children: (0, i.jsx)(u.j7V, {
                  className: F.marginBottom20,
                  value: t,
                  onChange: (e) => {
                      g.Z.setAccountFlag(w.c.MENTION_ON_ALL_MESSAGES, e);
                  },
                  note: "Increments the mention count when receiving a message in a channel set to 'All Messages'",
                  children: 'Mention on all messages?'
              })
          })
        : null;
}
function J() {
    let e = T.xT.useExperiment({ location: 'UserSettingsNotifications' }, { autoTrackExposure: !1 }).enabled,
        { manuallyOpen: t } = T.fs.useExperiment({ location: 'UserSettingsNotifications' }, { autoTrackExposure: !1 }),
        n = (0, c.e7)([D.ZP], () => D.ZP.useNewNotifications),
        [l, a] = s.useState(!1);
    return e && (n || t)
        ? (0, i.jsxs)(i.Fragment, {
              children: [
                  n
                      ? (0, i.jsx)(A.F, {
                            setting: M.s6.NOTIFICATIONS_UNREAD_SETTINGS,
                            children: (0, i.jsx)(u.j7V, {
                                className: F.marginBottom40,
                                value: n,
                                disabled: l || !n,
                                note: U.intl.string(U.t.frbLrK),
                                onChange: () => Q(a),
                                children: U.intl.string(U.t.z21l8P)
                            })
                        })
                      : t
                        ? (0, i.jsx)(A.F, {
                              setting: M.s6.NOTIFICATIONS_UNREAD_SETTINGS,
                              children: (0, i.jsx)(u.j7V, {
                                  className: F.marginBottom40,
                                  value: n,
                                  disabled: l || n,
                                  note: 'Turns on the new notification system',
                                  onChange: (e) => {
                                      g.Z.setAccountFlag(w.c.USE_NEW_NOTIFICATIONS, e);
                                  },
                                  children: U.intl.string(U.t.z21l8P)
                              })
                          })
                        : null,
                  (0, i.jsxs)(A.F, {
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
                                      (0, i.jsx)(A.F, {
                                          setting: M.s6.NOTIFICATIONS_RESTORE_MOST_RECENT_SNAPSHOT,
                                          children: (0, i.jsx)(u.zxk, {
                                              onClick: f.KP,
                                              children: 'Restore most recent snapshot'
                                          })
                                      }),
                                      (0, i.jsx)(A.F, {
                                          setting: M.s6.NOTIFICATIONS_LAUNCH_MIGRATION,
                                          children: (0, i.jsx)(u.zxk, {
                                              onClick: () => {
                                                  (0, j.R)(!0);
                                              },
                                              children: 'Launch Migration'
                                          })
                                      }),
                                      (0, i.jsx)(A.F, {
                                          setting: M.s6.NOTIFICATIONS_TOGGLE_NEW_SYSTEM,
                                          children: (0, i.jsx)(u.j7V, {
                                              hideBorder: !0,
                                              value: n,
                                              onChange: (e) => {
                                                  g.Z.setAccountFlag(w.c.USE_NEW_NOTIFICATIONS, e);
                                              },
                                              children: 'Toggle new system on/off'
                                          })
                                      })
                                  ]
                              })
                          }),
                          (0, i.jsx)(u.$i$, { className: r()(F.marginTop40, F.marginBottom40) })
                      ]
                  })
              ]
          })
        : null;
}
async function Q(e) {
    e(!0);
    let t = await (0, f.Tn)();
    0 === t.length
        ? await (0, S.oL)()
        : h.Z.show({
              title: U.intl.string(U.t['cY+Ooa']),
              body: U.intl.format(U.t['7zTJJS'], { date: new Date(t[t.length - 1].recorded_at) }),
              cancelText: U.intl.string(U.t['ETE/oK']),
              confirmText: U.intl.string(U.t.Rm96T0),
              onConfirm: S.oL
          }),
        e(!1);
}
function $(e) {
    let t = (0, I.p)();
    return (0, i.jsx)(K, {
        ...e,
        focusMode: t
    });
}
function ee() {
    let e = (0, c.cj)([R.Z], () => ({
        disableUnreadBadge: R.Z.getDisableUnreadBadge(),
        taskbarFlash: R.Z.taskbarFlash,
        disabledSounds: R.Z.getDisabledSounds(),
        disableAllSounds: R.Z.getDisableAllSounds(),
        desktopType: R.Z.getDesktopType(),
        ttsType: R.Z.getTTSType(),
        notifyMessagesInSelectedChannel: R.Z.getNotifyMessagesInSelectedChannel()
    }));
    return (0, i.jsx)($, {
        ...e,
        afkTimeout: L.CM.useSetting()
    });
}
function et() {
    let e = L.fz.useSetting(),
        t = [
            {
                name: U.intl.string(U.t['9x/Rtb']),
                value: d.Ns.NOTIFICATIONS_ENABLED
            },
            {
                name: U.intl.string(U.t.fJAbQU),
                value: d.Ns.ONLY_DMS
            },
            {
                name: U.intl.string(U.t['xu+UDQ']),
                value: d.Ns.NOTIFICATIONS_DISABLED
            }
        ];
    return v.Z.getCurrentConfig({ location: 'webSettings' }).enableInAppNotifications
        ? (0, i.jsxs)(A.F, {
              setting: M.s6.NOTIFICATIONS_REACTIONS,
              children: [
                  (0, i.jsxs)(u.xJW, {
                      title: U.intl.string(U.t.Rq0NFh),
                      children: [
                          (0, i.jsx)(u.R94, {
                              type: u.geA.DESCRIPTION,
                              className: F.marginBottom8,
                              children: U.intl.string(U.t.oWF6eX)
                          }),
                          (0, i.jsx)(u.FXm, {
                              options: t,
                              onChange: (t) => {
                                  (0, b.MR)(t.value, e);
                              },
                              value: e
                          })
                      ]
                  }),
                  (0, i.jsx)(u.$i$, { className: r()(F.marginTop40, F.marginBottom40) })
              ]
          })
        : null;
}
