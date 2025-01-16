n.d(t, {
    Z: function () {
        return ee;
    }
}),
    n(653041),
    n(47120);
var i = n(200651),
    r = n(192379),
    s = n(120356),
    a = n.n(s),
    l = n(392711),
    o = n.n(l),
    c = n(442837),
    d = n(524437),
    u = n(481060),
    m = n(668781),
    g = n(292556),
    h = n(87051),
    p = n(419363),
    x = n(818083),
    f = n(688465),
    _ = n(487419),
    E = n(197344),
    C = n(476756),
    T = n(734934),
    S = n(223683),
    b = n(312400),
    I = n(115345),
    N = n(392888),
    v = n(106371),
    A = n(995774),
    j = n(921801),
    O = n(292959),
    R = n(9156),
    P = n(912101),
    y = n(358085),
    B = n(709054),
    D = n(557177),
    Z = n(695346),
    L = n(675478),
    M = n(33656),
    k = n(726985),
    w = n(981631),
    F = n(468788),
    U = n(388032),
    V = n(92486),
    G = n(232186);
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
function Y(e) {
    let { label: t, enabled: n, disabled: r, onPreview: s, onChange: a, tooltip: l } = e;
    return (0, i.jsx)(u.FormSwitch, {
        className: V.soundRow,
        value: n,
        onChange: a,
        disabled: r,
        tooltipNote: l,
        children: (0, i.jsxs)('div', {
            className: V.notificationSound,
            children: [
                (0, i.jsx)('div', {
                    className: V.soundName,
                    children: t
                }),
                (0, i.jsx)(u.Clickable, {
                    className: V.soundIcon,
                    onClick: s,
                    'aria-label': U.intl.string(U.t.Kd4uxM),
                    children: (0, i.jsx)(u.VoiceNormalIcon, {
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
function W(e) {
    let { disabledSounds: t, disableAllSounds: n, notifyMessagesInSelectedChannel: s } = e,
        l = r.useRef(),
        o = (0, T.p)(),
        c = r.useCallback((e, t) => {
            t.stopPropagation(), t.preventDefault(), null != l.current && l.current.stop(), (l.current = D.GN(e));
        }, []),
        d = r.useCallback(
            (e, n) => {
                let i = t.filter((t) => t !== e);
                !n && i.push(e), g.default.setDisabledSounds(i);
            },
            [t]
        );
    r.useEffect(() => () => {
        var e;
        null === (e = l.current) || void 0 === e || e.stop();
    });
    let m = [
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
        h = null != E.Z.useHolidaySoundpack();
    return (0, i.jsx)(j.F, {
        setting: k.s6.NOTIFICATIONS_SOUNDS,
        children: (0, i.jsxs)(u.FormSection, {
            children: [
                h
                    ? (0, i.jsxs)(i.Fragment, {
                          children: [
                              (0, i.jsx)(u.FormTitle, {
                                  className: G.marginBottom20,
                                  children: U.intl.string(U.t.fgSHf3)
                              }),
                              (0, i.jsx)(C.Z, {})
                          ]
                      })
                    : null,
                (0, i.jsx)(u.FormTitle, {
                    className: a()(G.marginBottom20, G.marginTop20),
                    children: U.intl.string(U.t.MKWyKS)
                }),
                (0, i.jsx)(u.FormSwitch, {
                    note: U.intl.string(U.t['7oXUio']),
                    value: s,
                    onChange: g.default.setNotifyMessagesInSelectedChannel,
                    children: U.intl.string(U.t.lF5GGR)
                }),
                (0, i.jsx)(u.FormSwitch, {
                    note: U.intl.string(U.t['+B0XLC']),
                    value: n,
                    onChange: g.default.toggleDisableAllSounds,
                    children: U.intl.string(U.t['2ZhCOT'])
                }),
                m.map((e) => {
                    let { label: r, sound: s, focusModeDisabled: a } = e;
                    return (0, i.jsx)(
                        Y,
                        {
                            label: r,
                            disabled: n || !0 === a,
                            tooltip: a ? U.intl.string(U.t.cIRG0t) : void 0,
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
function z() {
    let e = (0, c.e7)([_.Z], () => _.Z.getGuildAlertSettings()),
        [t, n] = r.useState(null),
        s = B.default.keys(e).map((t) => {
            let n = e[t];
            return {
                label: n.guildName,
                value: n.guildId
            };
        });
    return 0 === Object.keys(e).length
        ? null
        : (0, i.jsxs)(j.F, {
              setting: k.s6.NOTIFICATIONS_COMMUNITY_ACTIVITY_ALERTS,
              children: [
                  (0, i.jsxs)(u.Heading, {
                      variant: 'heading-lg/semibold',
                      className: a()(V.titleWithBeta, G.marginBottom20),
                      children: [U.intl.string(U.t.D9yVAA), (0, i.jsx)(f.Z, {})]
                  }),
                  (0, i.jsx)(u.FormText, {
                      type: u.FormTextTypes.DESCRIPTION,
                      className: G.marginBottom20,
                      children: U.intl.string(U.t['0PhAOD'])
                  }),
                  (0, i.jsxs)(u.FormItem, {
                      title: U.intl.string(U.t.Q0PsXV),
                      children: [
                          (0, i.jsx)(u.SingleSelect, {
                              className: null != t ? G.marginBottom20 : G.marginBottom40,
                              value: t,
                              onChange: (e) => {
                                  n(e);
                              },
                              options: s
                          }),
                          null != t
                              ? (0, i.jsxs)('div', {
                                    className: G.marginTop20,
                                    children: [
                                        (0, i.jsxs)(j.F, {
                                            setting: k.s6.NOTIFICATIONS_COMMUNITY_IN_APP_ALERTS,
                                            children: [
                                                (0, i.jsx)(u.FormSwitch, {
                                                    className: a()(G.marginBottom20),
                                                    note: U.intl.string(U.t['z8Td4+']),
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
                                                    children: U.intl.string(U.t.u6dc5O)
                                                }),
                                                (0, i.jsx)(u.FormDivider, { className: a()(G.marginTop20, G.marginBottom40) })
                                            ]
                                        }),
                                        (0, i.jsxs)(j.F, {
                                            setting: k.s6.NOTIFICATIONS_COMMUNITY_PUSH_NOTIFICATIONS,
                                            children: [
                                                (0, i.jsx)(u.FormSwitch, {
                                                    className: G.marginBottom20,
                                                    note: U.intl.string(U.t.PyxXs7),
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
                                                    children: U.intl.string(U.t.P8MG6u)
                                                }),
                                                (0, i.jsx)(u.FormDivider, { className: a()(G.marginTop20, G.marginBottom40) })
                                            ]
                                        })
                                    ]
                                })
                              : null,
                          null != t ? null : (0, i.jsx)(u.FormDivider, { className: a()(G.marginTop20, G.marginBottom40) })
                      ]
                  })
              ]
          });
}
class K extends r.PureComponent {
    handleDesktopChange(e) {
        let t = e ? w.qrD.ALL : w.qrD.NEVER;
        if (t !== w.qrD.NEVER) {
            var n;
            (n = 'UserSettingsModal'),
                P.Z.requestPermission((e) => {
                    let t = e ? w.$Ab.ENABLED : w.$Ab.BLOCKED;
                    g.default.setPermissionsState(t, n);
                });
        } else g.default.setDesktopType(t);
    }
    handleTTSChange(e) {
        let t = e.value;
        g.default.setTTSType(t);
    }
    render() {
        let { desktopType: e, afkTimeout: t, disableUnreadBadge: n, taskbarFlash: r, disabledSounds: s, disableAllSounds: l, notifyMessagesInSelectedChannel: c, focusMode: d } = this.props,
            m = y.isPlatformEmbedded && (0, y.isWindows)(),
            g = o()
                .range(1, 11)
                .map((e) => ({
                    value: 60 * e,
                    label: U.intl.formatToPlainString(U.t.iXLF9f, { minutes: e })
                }));
        return (0, i.jsxs)(u.FormSection, {
            tag: u.FormTitleTags.H1,
            title: U.intl.string(U.t.HcoRu7),
            children: [
                (0, i.jsx)(j.F, {
                    setting: k.s6.NOTIFICATIONS_ENABLE_DESKTOP,
                    children: (0, i.jsx)(u.FormSwitch, {
                        className: G.marginBottom20,
                        value: e !== w.qrD.NEVER && !d,
                        onChange: this.handleDesktopChange,
                        note: U.intl.string(U.t.wF9ih4),
                        disabled: d,
                        tooltipNote: d ? U.intl.string(U.t.cIRG0t) : void 0,
                        children: U.intl.string(U.t['/0WClp'])
                    })
                }),
                (0, i.jsx)(Q, {}),
                (0, i.jsx)(j.F, {
                    setting: k.s6.NOTIFICATIONS_UNREAD_MESSAGE_BADGE,
                    children: (0, i.jsx)(u.FormSwitch, {
                        className: m ? G.marginBottom20 : G.marginBottom40,
                        value: !n,
                        note: U.intl.string(U.t['9K4qwc']),
                        onChange: this.handleToggleShowUnreadBadge,
                        children: U.intl.string(U.t.VH8AIC)
                    })
                }),
                (0, i.jsx)(j.F, {
                    setting: k.s6.NOTIFICATIONS_ENABLE_TASKBAR_FLASHING,
                    children: (0, i.jsx)(u.FormSwitch, {
                        className: G.marginBottom40,
                        value: r,
                        note: U.intl.string(U.t['bd4j4+']),
                        onChange: this.handleToggleShowFlash,
                        children: U.intl.string(U.t.xSmFQE)
                    })
                }),
                (0, i.jsx)(X, {}),
                (0, i.jsx)(et, {}),
                (0, i.jsx)(j.F, {
                    setting: k.s6.NOTIFICATIONS_PUSH_INACTIVE_TIMEOUT,
                    children: (0, i.jsxs)(u.FormItem, {
                        title: U.intl.string(U.t.TTvjd3),
                        children: [
                            (0, i.jsx)(u.SingleSelect, {
                                value: t,
                                onChange: Z.CM.updateSetting,
                                options: g
                            }),
                            (0, i.jsx)(u.FormText, {
                                type: u.FormTextTypes.DESCRIPTION,
                                className: G.marginTop8,
                                children: U.intl.string(U.t.Xytv9P)
                            }),
                            (0, i.jsx)(u.FormDivider, { className: a()(G.marginTop40, G.marginBottom40) })
                        ]
                    })
                }),
                this.renderTTS(),
                (0, i.jsx)(z, {}),
                (0, i.jsx)(u.FormItem, {
                    children: (0, i.jsx)(W, {
                        disabledSounds: s,
                        disableAllSounds: l,
                        notifyMessagesInSelectedChannel: c
                    })
                }),
                (0, i.jsx)(M.Z, {})
            ]
        });
    }
    constructor(...e) {
        super(...e),
            H(this, 'handleToggleShowUnreadBadge', () => {
                g.default.setDisableUnreadBadge(!this.props.disableUnreadBadge);
            }),
            H(this, 'handleToggleShowFlash', () => {
                g.default.setTaskbarFlash(!this.props.taskbarFlash);
            }),
            H(this, 'renderTTS', () => {
                if (!p.Zh) return null;
                let e = [
                    {
                        name: U.intl.string(U.t.B1AGeH),
                        value: w.PrB.ALL_CHANNELS
                    },
                    {
                        name: U.intl.string(U.t.uM2rNj),
                        value: w.PrB.SELECTED_CHANNEL
                    },
                    {
                        name: U.intl.string(U.t.DYO5Oj),
                        value: w.PrB.NEVER
                    }
                ];
                return (0, i.jsxs)(j.F, {
                    setting: k.s6.NOTIFICATIONS_TEXT_TO_SPEECH,
                    children: [
                        (0, i.jsxs)(u.FormItem, {
                            title: U.intl.string(U.t.VIm5MD),
                            children: [
                                (0, i.jsx)(u.FormText, {
                                    type: u.FormTextTypes.DESCRIPTION,
                                    className: G.marginBottom8,
                                    children: U.intl.string(U.t['+4dnAw'])
                                }),
                                (0, i.jsx)(u.RadioGroup, {
                                    options: e,
                                    onChange: this.handleTTSChange,
                                    value: this.props.ttsType
                                })
                            ]
                        }),
                        (0, i.jsx)(u.FormDivider, { className: a()(G.marginTop40, G.marginBottom40) })
                    ]
                });
            });
    }
}
let q = (0, x.B)({
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
    let e = q.useExperiment({ location: 'settings' }, { autoTrackExposure: !1 }).enabled,
        t = (0, c.e7)([R.ZP], () => R.ZP.mentionOnAllMessages);
    return e
        ? (0, i.jsx)(j.F, {
              setting: k.s6.NOTIFICATIONS_MENTION_ON_ALL_MESSAGES,
              children: (0, i.jsx)(u.FormSwitch, {
                  className: G.marginBottom20,
                  value: t,
                  onChange: (e) => {
                      h.Z.setAccountFlag(F.c.MENTION_ON_ALL_MESSAGES, e);
                  },
                  note: "Increments the mention count when receiving a message in a channel set to 'All Messages'",
                  children: 'Mention on all messages?'
              })
          })
        : null;
}
function X() {
    let e = b.xT.useExperiment({ location: 'UserSettingsNotifications' }, { autoTrackExposure: !1 }).enabled,
        { manuallyOpen: t } = b.fs.useExperiment({ location: 'UserSettingsNotifications' }, { autoTrackExposure: !1 }),
        n = (0, c.e7)([R.ZP], () => R.ZP.useNewNotifications),
        [s, l] = r.useState(!1);
    return e && (n || t)
        ? (0, i.jsxs)(i.Fragment, {
              children: [
                  n
                      ? (0, i.jsx)(j.F, {
                            setting: k.s6.NOTIFICATIONS_UNREAD_SETTINGS,
                            children: (0, i.jsx)(u.FormSwitch, {
                                className: G.marginBottom40,
                                value: n,
                                disabled: s || !n,
                                note: U.intl.string(U.t.frbLrK),
                                onChange: () => J(l),
                                children: U.intl.string(U.t.z21l8P)
                            })
                        })
                      : t
                        ? (0, i.jsx)(j.F, {
                              setting: k.s6.NOTIFICATIONS_UNREAD_SETTINGS,
                              children: (0, i.jsx)(u.FormSwitch, {
                                  className: G.marginBottom40,
                                  value: n,
                                  disabled: s || n,
                                  note: 'Turns on the new notification system',
                                  onChange: (e) => {
                                      h.Z.setAccountFlag(F.c.USE_NEW_NOTIFICATIONS, e);
                                  },
                                  children: U.intl.string(U.t.z21l8P)
                              })
                          })
                        : null,
                  (0, i.jsxs)(j.F, {
                      setting: k.s6.NOTIFICATIONS_NEW_SETTINGS,
                      children: [
                          (0, i.jsx)(u.FormItem, {
                              title: 'New Notification Settings (Advanced, Staff Only)',
                              children: (0, i.jsxs)('div', {
                                  style: {
                                      display: 'flex',
                                      gap: 16
                                  },
                                  children: [
                                      (0, i.jsx)(j.F, {
                                          setting: k.s6.NOTIFICATIONS_RESTORE_MOST_RECENT_SNAPSHOT,
                                          children: (0, i.jsx)(u.Button, {
                                              onClick: S.KP,
                                              children: 'Restore most recent snapshot'
                                          })
                                      }),
                                      (0, i.jsx)(j.F, {
                                          setting: k.s6.NOTIFICATIONS_LAUNCH_MIGRATION,
                                          children: (0, i.jsx)(u.Button, {
                                              onClick: () => {
                                                  (0, N.R)(!0);
                                              },
                                              children: 'Launch Migration'
                                          })
                                      }),
                                      (0, i.jsx)(j.F, {
                                          setting: k.s6.NOTIFICATIONS_TOGGLE_NEW_SYSTEM,
                                          children: (0, i.jsx)(u.FormSwitch, {
                                              hideBorder: !0,
                                              value: n,
                                              onChange: (e) => {
                                                  h.Z.setAccountFlag(F.c.USE_NEW_NOTIFICATIONS, e);
                                              },
                                              children: 'Toggle new system on/off'
                                          })
                                      })
                                  ]
                              })
                          }),
                          (0, i.jsx)(u.FormDivider, { className: a()(G.marginTop40, G.marginBottom40) })
                      ]
                  })
              ]
          })
        : null;
}
async function J(e) {
    e(!0);
    let t = await (0, S.Tn)();
    0 === t.length
        ? await (0, I.oL)()
        : m.Z.show({
              title: U.intl.string(U.t['cY+Ooa']),
              body: U.intl.format(U.t['7zTJJS'], { date: new Date(t[t.length - 1].recorded_at) }),
              cancelText: U.intl.string(U.t['ETE/oK']),
              confirmText: U.intl.string(U.t.Rm96T0),
              onConfirm: I.oL
          }),
        e(!1);
}
function $(e) {
    let t = (0, T.p)();
    return (0, i.jsx)(K, {
        ...e,
        focusMode: t
    });
}
function ee() {
    let e = (0, c.cj)([O.Z], () => ({
        disableUnreadBadge: O.Z.getDisableUnreadBadge(),
        taskbarFlash: O.Z.taskbarFlash,
        disabledSounds: O.Z.getDisabledSounds(),
        disableAllSounds: O.Z.getDisableAllSounds(),
        desktopType: O.Z.getDesktopType(),
        ttsType: O.Z.getTTSType(),
        notifyMessagesInSelectedChannel: O.Z.getNotifyMessagesInSelectedChannel()
    }));
    return (0, i.jsx)($, {
        ...e,
        afkTimeout: Z.CM.useSetting()
    });
}
function et() {
    let e = Z.fz.useSetting(),
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
        ? (0, i.jsxs)(j.F, {
              setting: k.s6.NOTIFICATIONS_REACTIONS,
              children: [
                  (0, i.jsxs)(u.FormItem, {
                      title: U.intl.string(U.t.Rq0NFh),
                      children: [
                          (0, i.jsx)(u.FormText, {
                              type: u.FormTextTypes.DESCRIPTION,
                              className: G.marginBottom8,
                              children: U.intl.string(U.t.oWF6eX)
                          }),
                          (0, i.jsx)(u.RadioGroup, {
                              options: t,
                              onChange: (t) => {
                                  (0, A.MR)(t.value, e);
                              },
                              value: e
                          })
                      ]
                  }),
                  (0, i.jsx)(u.FormDivider, { className: a()(G.marginTop40, G.marginBottom40) })
              ]
          })
        : null;
}
