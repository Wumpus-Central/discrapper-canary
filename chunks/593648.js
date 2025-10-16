n.d(t, { Z: () => er }), n(539854), n(388685);
var r = n(951288),
    i = n(647438),
    a = n(392711),
    o = n.n(a),
    s = n(442837),
    l = n(524437),
    c = n(481060),
    u = n(668781),
    d = n(292556),
    f = n(87051),
    _ = n(419363),
    p = n(818083),
    h = n(705579),
    m = n(487419),
    g = n(197344),
    E = n(476756),
    b = n(734934),
    y = n(223683),
    O = n(312400),
    v = n(891353),
    I = n(115345),
    T = n(392888),
    S = n(106371),
    A = n(995774),
    C = n(921801),
    N = n(460181),
    R = n(210176),
    P = n(292959),
    w = n(9156),
    D = n(912101),
    L = n(709054),
    x = n(45640),
    M = n(695346),
    j = n(675478),
    k = n(273313),
    U = n(33656),
    G = n(726985),
    B = n(981631),
    Z = n(468788),
    F = n(388032);
function V(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function H(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                V(e, t, n[t]);
            });
    }
    return e;
}
function Y(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function W(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : Y(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function K(e) {
    D.Z.requestPermission((t) => {
        let n = t ? B.$Ab.ENABLED : B.$Ab.BLOCKED;
        d.default.setPermissionsState(n, e);
    });
}
function z(e) {
    let { label: t, enabled: n, disabled: i, onPreview: a, onChange: o } = e;
    return (0, r.jsx)(c.rsf, {
        label: t,
        checked: n,
        onChange: o,
        disabled: i,
        description: F.intl.format(F.t.OOiGCA, { onClick: a }),
    });
}
function q(e) {
    let { disabledSounds: t, disableAllSounds: n, notifyMessagesInSelectedChannel: a } = e,
        o = i.useRef(null),
        s = (0, b.p)(),
        l = i.useCallback((e, t) => {
            t.stopPropagation(), t.preventDefault(), null != o.current && o.current.stop(), (o.current = (0, N.GN)(e));
        }, []),
        u = i.useCallback(
            (e, n) => {
                let r = t.filter((t) => t !== e);
                n || r.push(e), d.default.setDisabledSounds(r);
            },
            [t],
        );
    i.useEffect(() => () => {
        var e;
        null == (e = o.current) || e.stop();
    });
    let f = [
            {
                label: F.intl.string(F.t.pz71xM),
                sound: "message1",
                focusModeDisabled: s,
            },
            {
                label: F.intl.string(F.t.hK51Ym),
                sound: "deafen",
            },
            {
                label: F.intl.string(F.t.XiejaG),
                sound: "undeafen",
            },
            {
                label: F.intl.string(F.t["w4m94+"]),
                sound: "mute",
            },
            {
                label: F.intl.string(F.t.YqAjX1),
                sound: "unmute",
            },
            {
                label: F.intl.string(F.t.JoTq8v),
                sound: "camera_on",
            },
            {
                label: F.intl.string(F.t["8P6tQ0"]),
                sound: "camera_off",
            },
            {
                label: F.intl.string(F.t["juL9/P"]),
                sound: "disconnect",
            },
            {
                label: F.intl.string(F.t.x98vQk),
                sound: "ptt_start",
            },
            {
                label: F.intl.string(F.t["1HjRqK"]),
                sound: "ptt_stop",
            },
            {
                label: F.intl.string(F.t["9JB1Cg"]),
                sound: "user_join",
            },
            {
                label: F.intl.string(F.t.KUBBNj),
                sound: "user_leave",
            },
            {
                label: F.intl.string(F.t.EZjqUV),
                sound: "user_moved",
            },
            {
                label: F.intl.string(F.t.LnNlQk),
                sound: "call_calling",
            },
            {
                label: F.intl.string(F.t.XBrJT0),
                sound: "call_ringing",
            },
            {
                label: F.intl.string(F.t["Nd8P5+"]),
                sound: "stream_started",
            },
            {
                label: F.intl.string(F.t["9bYj+P"]),
                sound: "stream_ended",
            },
            {
                label: F.intl.string(F.t.KccUIy),
                sound: "stream_user_joined",
            },
            {
                label: F.intl.string(F.t.dsjkiI),
                sound: "stream_user_left",
            },
            {
                label: F.intl.string(F.t.nFOcf3),
                sound: "activity_launch",
            },
            {
                label: F.intl.string(F.t["a6lw/v"]),
                sound: "activity_end",
            },
            {
                label: F.intl.string(F.t.KaFxra),
                sound: "activity_user_join",
            },
            {
                label: F.intl.string(F.t.S14z9v),
                sound: "activity_user_left",
            },
            {
                label: F.intl.string(F.t.CP3DCw),
                sound: "reconnect",
            },
        ],
        _ = null != g.Z.useHolidaySoundpack();
    return (0, r.jsx)(C.F, {
        setting: G.s6.NOTIFICATIONS_SOUNDS,
        children: (0, r.jsx)("div", {
            children: (0, r.jsxs)(c.C3N, {
                label: F.intl.string(F.t.MKWyKS),
                children: [
                    _ ? (0, r.jsx)(E.Z, {}) : null,
                    (0, r.jsx)(c.rsf, {
                        label: F.intl.string(F.t.lF5GGR),
                        description: F.intl.string(F.t["7oXUio"]),
                        checked: a,
                        onChange: d.default.setNotifyMessagesInSelectedChannel,
                    }),
                    (0, r.jsx)(c.rsf, {
                        label: F.intl.string(F.t["2ZhCOT"]),
                        description: F.intl.string(F.t["+B0XLC"]),
                        checked: n,
                        onChange: d.default.toggleDisableAllSounds,
                    }),
                    f.map((e, i) => {
                        let { label: a, sound: o, focusModeDisabled: s } = e;
                        return (0, r.jsxs)(
                            c.Kqy,
                            {
                                children: [
                                    i > 0 && (0, r.jsx)(c.izJ, { gap: 8 }),
                                    (0, r.jsx)(
                                        z,
                                        {
                                            label: a,
                                            disabled: n || !0 === s,
                                            onChange: (e) => u(o, e),
                                            onPreview: (e) => l(o, e),
                                            enabled: !n && !t.includes(o) && !0 !== s,
                                        },
                                        o,
                                    ),
                                    s
                                        ? (0, r.jsx)(c.Wn, {
                                              messageType: c.QYI.WARNING,
                                              children: F.intl.string(F.t.cIRG0t),
                                          })
                                        : null,
                                ],
                            },
                            o,
                        );
                    }),
                ],
            }),
        }),
    });
}
function X() {
    let e = (0, s.e7)([m.Z], () => m.Z.getGuildAlertSettings()),
        [t, n] = i.useState(null),
        a = L.default.keys(e).map((t) => {
            let n = e[t];
            return {
                label: n.guildName,
                value: n.guildId,
            };
        });
    return 0 === Object.keys(e).length
        ? null
        : (0, r.jsx)(C.F, {
              setting: G.s6.NOTIFICATIONS_COMMUNITY_ACTIVITY_ALERTS,
              children: (0, r.jsxs)(c.C3N, {
                  label: F.intl.string(F.t.D9yVAA),
                  description: F.intl.string(F.t["0PhAOD"]),
                  children: [
                      (0, r.jsx)(c.q4e, {
                          label: F.intl.string(F.t.Q0PsXV),
                          value: t,
                          onChange: (e) => {
                              n(e);
                          },
                          options: a,
                      }),
                      null != t
                          ? (0, r.jsxs)(r.Fragment, {
                                children: [
                                    (0, r.jsx)(C.F, {
                                        setting: G.s6.NOTIFICATIONS_COMMUNITY_IN_APP_ALERTS,
                                        children: (0, r.jsx)(c.rsf, {
                                            label: F.intl.string(F.t.u6dc5O),
                                            description: F.intl.string(F.t["z8Td4+"]),
                                            checked: !e[t].disableRaidAlertNag,
                                            onChange: () => {
                                                (0, j.PS)(
                                                    t,
                                                    (e) => {
                                                        e.disableRaidAlertNag = !e.disableRaidAlertNag;
                                                    },
                                                    j.fy.INFREQUENT_USER_ACTION,
                                                );
                                            },
                                        }),
                                    }),
                                    (0, r.jsx)(C.F, {
                                        setting: G.s6.NOTIFICATIONS_COMMUNITY_PUSH_NOTIFICATIONS,
                                        children: (0, r.jsx)(c.rsf, {
                                            label: F.intl.string(F.t.P8MG6u),
                                            description: F.intl.string(F.t.PyxXs7),
                                            checked: !e[t].disableRaidAlertPush,
                                            onChange: () => {
                                                (0, j.PS)(
                                                    t,
                                                    (e) => {
                                                        e.disableRaidAlertPush = !e.disableRaidAlertPush;
                                                    },
                                                    j.fy.INFREQUENT_USER_ACTION,
                                                );
                                            },
                                        }),
                                    }),
                                ],
                            })
                          : null,
                  ],
              }),
          });
}
class Q extends i.PureComponent {
    handleDesktopChange(e) {
        let t = e ? B.qrD.ALL : B.qrD.NEVER;
        t !== B.qrD.NEVER ? K("UserSettingsModal") : d.default.setDesktopType(t);
    }
    handleTTSChange(e) {
        let t = e;
        d.default.setTTSType(t);
    }
    render() {
        let {
                desktopType: e,
                afkTimeout: t,
                disableUnreadBadge: n,
                taskbarFlash: i,
                disabledSounds: a,
                disableAllSounds: s,
                notifyMessagesInSelectedChannel: l,
                focusMode: u,
            } = this.props,
            d = x.Z.getCurrentConfig({ location: "Messages" }).enabled || 0 === t ? 0 : 1,
            f = o()
                .range(d, 11)
                .map((e) => ({
                    value: 60 * e,
                    label:
                        0 === e ? F.intl.string(F.t["0QN7cX"]) : F.intl.formatToPlainString(F.t.iXLF9f, { minutes: e }),
                }));
        return (0, r.jsx)(k.Z, {
            title: F.intl.string(F.t.HcoRu7),
            children: (0, r.jsxs)(c.Kqy, {
                gap: 16,
                children: [
                    (0, r.jsx)(C.F, {
                        setting: G.s6.NOTIFICATIONS_ENABLE_DESKTOP,
                        children: (0, r.jsx)(c.rsf, {
                            label: F.intl.string(F.t["/0WClp"]),
                            description: F.intl.string(F.t.wF9ih4),
                            checked: e !== B.qrD.NEVER && !u,
                            helperText: u ? F.intl.string(F.t.cIRG0t) : void 0,
                            onChange: this.handleDesktopChange,
                            disabled: u,
                        }),
                    }),
                    (0, r.jsx)($, {}),
                    (0, r.jsx)(C.F, {
                        setting: G.s6.NOTIFICATIONS_UNREAD_MESSAGE_BADGE,
                        children: (0, r.jsx)(c.rsf, {
                            label: F.intl.string(F.t.VH8AIC),
                            description: F.intl.string(F.t["9K4qwc"]),
                            checked: !n,
                            onChange: this.handleToggleShowUnreadBadge,
                        }),
                    }),
                    (0, r.jsx)(C.F, {
                        setting: G.s6.NOTIFICATIONS_ENABLE_TASKBAR_FLASHING,
                        children: (0, r.jsx)(c.rsf, {
                            label: F.intl.string(F.t.xSmFQE),
                            description: F.intl.string(F.t["bd4j4+"]),
                            checked: i,
                            onChange: this.handleToggleShowFlash,
                        }),
                    }),
                    (0, r.jsx)(ee, {}),
                    (0, r.jsx)(ea, {}),
                    (0, r.jsx)(eo, {}),
                    (0, r.jsx)(es, {}),
                    (0, r.jsx)(ei, {}),
                    (0, r.jsxs)(C.F, {
                        setting: G.s6.NOTIFICATIONS_PUSH_INACTIVE_TIMEOUT,
                        children: [
                            (0, r.jsx)(c.q4e, {
                                label: F.intl.string(F.t.TTvjd3),
                                description: F.intl.string(F.t.Xytv9P),
                                value: t,
                                onChange: M.CM.updateSetting,
                                options: f,
                            }),
                            (0, r.jsx)(c.izJ, { gap: 16 }),
                        ],
                    }),
                    this.renderTTS(),
                    (0, r.jsx)(X, {}),
                    (0, r.jsx)(c.izJ, { gap: 24 }),
                    (0, r.jsx)(q, {
                        disabledSounds: a,
                        disableAllSounds: s,
                        notifyMessagesInSelectedChannel: l,
                    }),
                    (0, r.jsx)(U.Z, {}),
                ],
            }),
        });
    }
    constructor(...e) {
        super(...e),
            V(this, "handleToggleShowUnreadBadge", () => {
                d.default.setDisableUnreadBadge(!this.props.disableUnreadBadge);
            }),
            V(this, "handleToggleShowFlash", () => {
                d.default.setTaskbarFlash(!this.props.taskbarFlash);
            }),
            V(this, "renderTTS", () => {
                if (!_.Zh) return null;
                let e = [
                    {
                        name: F.intl.string(F.t.B1AGeH),
                        value: B.PrB.ALL_CHANNELS,
                    },
                    {
                        name: F.intl.string(F.t.uM2rNj),
                        value: B.PrB.SELECTED_CHANNEL,
                    },
                    {
                        name: F.intl.string(F.t.DYO5Oj),
                        value: B.PrB.NEVER,
                    },
                ];
                return (0, r.jsxs)(C.F, {
                    setting: G.s6.NOTIFICATIONS_TEXT_TO_SPEECH,
                    children: [
                        (0, r.jsx)(c.FXm, {
                            label: F.intl.string(F.t.VIm5MD),
                            description: F.intl.string(F.t["+4dnAw"]),
                            options: e,
                            onChange: this.handleTTSChange,
                            value: this.props.ttsType,
                        }),
                        (0, r.jsx)(c.izJ, { gap: 16 }),
                    ],
                });
            });
    }
}
let J = (0, p.B)({
    kind: "user",
    id: "2024-01_mention_on_all_messages",
    label: "Mention on all messages",
    defaultConfig: { enabled: !1 },
    treatments: [
        {
            id: 1,
            label: "Increment mention count when receiving a message in a channel set to all messages",
            config: { enabled: !0 },
        },
    ],
});
function $() {
    let e = J.useExperiment({ location: "settings" }, { autoTrackExposure: !1 }).enabled,
        t = (0, s.e7)([w.ZP], () => w.ZP.mentionOnAllMessages);
    return e
        ? (0, r.jsx)(C.F, {
              setting: G.s6.NOTIFICATIONS_MENTION_ON_ALL_MESSAGES,
              children: (0, r.jsx)(c.rsf, {
                  label: "Mention on all messages?",
                  description:
                      "Increments the mention count when receiving a message in a channel set to 'All Messages'",
                  checked: t,
                  onChange: (e) => {
                      f.Z.setAccountFlag(Z.c.MENTION_ON_ALL_MESSAGES, e);
                  },
              }),
          })
        : null;
}
function ee() {
    let e = O.xT.useExperiment({ location: "UserSettingsNotifications" }, { autoTrackExposure: !1 }).enabled,
        { manuallyOpen: t } = O.fs.useExperiment({ location: "UserSettingsNotifications" }, { autoTrackExposure: !1 }),
        n = (0, s.e7)([w.ZP], () => w.ZP.useNewNotifications),
        [a, o] = i.useState(!1);
    return e && (n || t)
        ? (0, r.jsxs)(r.Fragment, {
              children: [
                  n
                      ? (0, r.jsx)(C.F, {
                            setting: G.s6.NOTIFICATIONS_UNREAD_SETTINGS,
                            children: (0, r.jsx)(c.rsf, {
                                label: F.intl.string(F.t.z21l8P),
                                description: F.intl.string(F.t.frbLrK),
                                checked: n,
                                disabled: a || !n,
                                onChange: () => et(o),
                            }),
                        })
                      : t
                        ? (0, r.jsx)(C.F, {
                              setting: G.s6.NOTIFICATIONS_UNREAD_SETTINGS,
                              children: (0, r.jsx)(c.rsf, {
                                  label: F.intl.string(F.t.z21l8P),
                                  description: "Turns on the new notification system",
                                  checked: n,
                                  disabled: a || n,
                                  onChange: (e) => {
                                      f.Z.setAccountFlag(Z.c.USE_NEW_NOTIFICATIONS, e);
                                  },
                              }),
                          })
                        : null,
                  (0, r.jsxs)(C.F, {
                      setting: G.s6.NOTIFICATIONS_NEW_SETTINGS,
                      children: [
                          (0, r.jsx)(c.C3N, {
                              label: "New Notification Settings (Advanced, Staff Only)",
                              children: (0, r.jsxs)("div", {
                                  style: {
                                      display: "flex",
                                      gap: 16,
                                  },
                                  children: [
                                      (0, r.jsx)(C.F, {
                                          setting: G.s6.NOTIFICATIONS_RESTORE_MOST_RECENT_SNAPSHOT,
                                          children: (0, r.jsx)(c.Button, {
                                              variant: "primary",
                                              text: "Restore most recent snapshot",
                                              onClick: y.KP,
                                          }),
                                      }),
                                      (0, r.jsx)(C.F, {
                                          setting: G.s6.NOTIFICATIONS_LAUNCH_MIGRATION,
                                          children: (0, r.jsx)(c.Button, {
                                              variant: "primary",
                                              text: "Launch Migration",
                                              onClick: () => {
                                                  (0, T.R)(!0);
                                              },
                                          }),
                                      }),
                                      (0, r.jsx)(C.F, {
                                          setting: G.s6.NOTIFICATIONS_TOGGLE_NEW_SYSTEM,
                                          children: (0, r.jsx)(c.rsf, {
                                              label: "Toggle new system on/off",
                                              checked: n,
                                              onChange: (e) => {
                                                  f.Z.setAccountFlag(Z.c.USE_NEW_NOTIFICATIONS, e);
                                              },
                                          }),
                                      }),
                                  ],
                              }),
                          }),
                          (0, r.jsx)(c.izJ, { gap: 16 }),
                      ],
                  }),
              ],
          })
        : null;
}
async function et(e) {
    e(!0);
    let t = await (0, y.Tn)();
    0 === t.length
        ? await (0, I.oL)()
        : u.Z.show({
              title: F.intl.string(F.t["cY+Ooa"]),
              body: F.intl.format(F.t["7zTJJS"], { date: new Date(t[t.length - 1].recorded_at) }),
              cancelText: F.intl.string(F.t["ETE/oK"]),
              confirmText: F.intl.string(F.t.Rm96T0),
              onConfirm: I.oL,
          }),
        e(!1);
}
function en(e) {
    let t = (0, b.p)();
    return (0, r.jsx)(Q, W(H({}, e), { focusMode: t }));
}
function er() {
    let e = (0, s.cj)([P.Z], () => ({
        disableUnreadBadge: P.Z.getDisableUnreadBadge(),
        taskbarFlash: P.Z.taskbarFlash,
        disabledSounds: P.Z.getDisabledSounds(),
        disableAllSounds: P.Z.getDisableAllSounds(),
        desktopType: P.Z.getDesktopType(),
        ttsType: P.Z.getTTSType(),
        notifyMessagesInSelectedChannel: P.Z.getNotifyMessagesInSelectedChannel(),
    }));
    return (0, r.jsx)(en, W(H({}, e), { afkTimeout: M.CM.useSetting() }));
}
function ei() {
    let e = M.fz.useSetting(),
        t = [
            {
                name: F.intl.string(F.t["9x/Rtb"]),
                value: l.Ns.NOTIFICATIONS_ENABLED,
            },
            {
                name: F.intl.string(F.t.fJAbQU),
                value: l.Ns.ONLY_DMS,
            },
            {
                name: F.intl.string(F.t["xu+UDQ"]),
                value: l.Ns.NOTIFICATIONS_DISABLED,
            },
        ],
        n = (t) => {
            (0, A.MR)(t.value, e);
        };
    return S.Z.getCurrentConfig({ location: "webSettings" }).enableInAppNotifications
        ? (0, r.jsxs)(C.F, {
              setting: G.s6.NOTIFICATIONS_REACTIONS,
              children: [
                  (0, r.jsx)(c.FXm, {
                      label: F.intl.string(F.t.Rq0NFh),
                      description: F.intl.string(F.t.oWF6eX),
                      options: t,
                      onChange: (e) => n({ value: e }),
                      value: e,
                  }),
                  (0, r.jsx)(c.izJ, { gap: 16 }),
              ],
          })
        : null;
}
function ea() {
    let e = M.d8.useSetting(),
        t = M.JN.useSetting();
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(C.F, {
                setting: G.s6.NOTIFICATIONS_VOICE_ACTIVITY,
                children: (0, r.jsx)(c.rsf, {
                    label: F.intl.string(F.t.wtk08f),
                    description: F.intl.string(F.t.rngMNz),
                    badge: "beta",
                    checked: e,
                    onChange: R.I,
                }),
            }),
            (0, r.jsx)(C.F, {
                setting: G.s6.NOTIFICATIONS_GO_LIVE,
                children: (0, r.jsx)(c.rsf, {
                    label: F.intl.string(F.t.pW4TMj),
                    description: F.intl.string(F.t["H+WYqa"]),
                    checked: t,
                    onChange: M.JN.updateSetting,
                }),
            }),
        ],
    });
}
function eo() {
    let e = M.JY.useSetting();
    return (0, r.jsx)(C.F, {
        setting: G.s6.NOTIFICATIONS_FRIEND_ONLINE,
        children: (0, r.jsx)(c.rsf, {
            label: F.intl.string(F.t["uvIi//"]),
            description: F.intl.string(F.t.E6O06u),
            checked: e,
            onChange: v.N,
        }),
    });
}
function es() {
    let e = M.V6.useSetting();
    return (0, r.jsx)(C.F, {
        setting: G.s6.NOTIFICATIONS_USER_RESURRECTION,
        children: (0, r.jsx)(c.rsf, {
            label: F.intl.string(F.t.Zyn45e),
            description: F.intl.string(F.t.XdihbG),
            checked: e,
            onChange: h.F,
        }),
    });
}
