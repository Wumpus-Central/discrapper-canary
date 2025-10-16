n.d(t, { Z: () => ei }), n(539854), n(388685);
var r = n(951288),
    i = n(647438),
    a = n(392711),
    o = n.n(a),
    s = n(442837),
    l = n(524437),
    c = n(538534),
    u = n(481060),
    d = n(668781),
    f = n(292556),
    _ = n(87051),
    p = n(419363),
    h = n(818083),
    m = n(705579),
    g = n(487419),
    E = n(197344),
    b = n(476756),
    y = n(734934),
    O = n(223683),
    v = n(312400),
    I = n(891353),
    T = n(115345),
    S = n(392888),
    A = n(106371),
    C = n(995774),
    N = n(921801),
    R = n(460181),
    P = n(210176),
    w = n(292959),
    D = n(9156),
    L = n(912101),
    x = n(709054),
    M = n(45640),
    j = n(695346),
    k = n(675478),
    U = n(273313),
    G = n(33656),
    B = n(726985),
    Z = n(981631),
    F = n(468788),
    V = n(388032);
function H(e, t, n) {
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
function Y(e) {
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
                H(e, t, n[t]);
            });
    }
    return e;
}
function W(e, t) {
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
function K(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : W(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function z(e) {
    L.Z.requestPermission((t) => {
        let n = t ? Z.$Ab.ENABLED : Z.$Ab.BLOCKED;
        f.default.setPermissionsState(n, e);
    });
}
function q(e) {
    let { label: t, enabled: n, disabled: i, onPreview: a, onChange: o } = e;
    return (0, r.jsx)(u.rsf, {
        label: t,
        checked: n,
        onChange: o,
        disabled: i,
        description: V.intl.format(V.t.OOiGCA, { onClick: a }),
    });
}
function X(e) {
    let { disabledSounds: t, disableAllSounds: n, notifyMessagesInSelectedChannel: a } = e,
        o = i.useRef(null),
        s = (0, y.p)(),
        l = i.useCallback((e, t) => {
            t.stopPropagation(), t.preventDefault(), null != o.current && o.current.stop(), (o.current = (0, R.GN)(e));
        }, []),
        c = i.useCallback(
            (e, n) => {
                let r = t.filter((t) => t !== e);
                n || r.push(e), f.default.setDisabledSounds(r);
            },
            [t],
        );
    i.useEffect(() => () => {
        var e;
        null == (e = o.current) || e.stop();
    });
    let d = [
            {
                label: V.intl.string(V.t.pz71xM),
                sound: "message1",
                focusModeDisabled: s,
            },
            {
                label: V.intl.string(V.t.hK51Ym),
                sound: "deafen",
            },
            {
                label: V.intl.string(V.t.XiejaG),
                sound: "undeafen",
            },
            {
                label: V.intl.string(V.t["w4m94+"]),
                sound: "mute",
            },
            {
                label: V.intl.string(V.t.YqAjX1),
                sound: "unmute",
            },
            {
                label: V.intl.string(V.t.JoTq8v),
                sound: "camera_on",
            },
            {
                label: V.intl.string(V.t["8P6tQ0"]),
                sound: "camera_off",
            },
            {
                label: V.intl.string(V.t["juL9/P"]),
                sound: "disconnect",
            },
            {
                label: V.intl.string(V.t.x98vQk),
                sound: "ptt_start",
            },
            {
                label: V.intl.string(V.t["1HjRqK"]),
                sound: "ptt_stop",
            },
            {
                label: V.intl.string(V.t["9JB1Cg"]),
                sound: "user_join",
            },
            {
                label: V.intl.string(V.t.KUBBNj),
                sound: "user_leave",
            },
            {
                label: V.intl.string(V.t.EZjqUV),
                sound: "user_moved",
            },
            {
                label: V.intl.string(V.t.LnNlQk),
                sound: "call_calling",
            },
            {
                label: V.intl.string(V.t.XBrJT0),
                sound: "call_ringing",
            },
            {
                label: V.intl.string(V.t["Nd8P5+"]),
                sound: "stream_started",
            },
            {
                label: V.intl.string(V.t["9bYj+P"]),
                sound: "stream_ended",
            },
            {
                label: V.intl.string(V.t.KccUIy),
                sound: "stream_user_joined",
            },
            {
                label: V.intl.string(V.t.dsjkiI),
                sound: "stream_user_left",
            },
            {
                label: V.intl.string(V.t.nFOcf3),
                sound: "activity_launch",
            },
            {
                label: V.intl.string(V.t["a6lw/v"]),
                sound: "activity_end",
            },
            {
                label: V.intl.string(V.t.KaFxra),
                sound: "activity_user_join",
            },
            {
                label: V.intl.string(V.t.S14z9v),
                sound: "activity_user_left",
            },
            {
                label: V.intl.string(V.t.CP3DCw),
                sound: "reconnect",
            },
        ],
        _ = null != E.Z.useHolidaySoundpack();
    return (0, r.jsx)(N.F, {
        setting: B.s6.NOTIFICATIONS_SOUNDS,
        children: (0, r.jsx)("div", {
            children: (0, r.jsxs)(u.C3N, {
                label: V.intl.string(V.t.MKWyKS),
                children: [
                    _ ? (0, r.jsx)(b.Z, {}) : null,
                    (0, r.jsx)(u.rsf, {
                        label: V.intl.string(V.t.lF5GGR),
                        description: V.intl.string(V.t["7oXUio"]),
                        checked: a,
                        onChange: f.default.setNotifyMessagesInSelectedChannel,
                    }),
                    (0, r.jsx)(u.rsf, {
                        label: V.intl.string(V.t["2ZhCOT"]),
                        description: V.intl.string(V.t["+B0XLC"]),
                        checked: n,
                        onChange: f.default.toggleDisableAllSounds,
                    }),
                    d.map((e, i) => {
                        let { label: a, sound: o, focusModeDisabled: s } = e;
                        return (0, r.jsxs)(
                            u.Kqy,
                            {
                                children: [
                                    i > 0 && (0, r.jsx)(u.izJ, { gap: 8 }),
                                    (0, r.jsx)(
                                        q,
                                        {
                                            label: a,
                                            disabled: n || !0 === s,
                                            onChange: (e) => c(o, e),
                                            onPreview: (e) => l(o, e),
                                            enabled: !n && !t.includes(o) && !0 !== s,
                                        },
                                        o,
                                    ),
                                    s
                                        ? (0, r.jsx)(u.Wn, {
                                              messageType: u.QYI.WARNING,
                                              children: V.intl.string(V.t.cIRG0t),
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
function Q() {
    let e = (0, s.e7)([g.Z], () => g.Z.getGuildAlertSettings()),
        [t, n] = i.useState(null),
        a = x.default.keys(e).map((t) => {
            let n = e[t];
            return {
                label: n.guildName,
                value: n.guildId,
            };
        });
    return 0 === Object.keys(e).length
        ? null
        : (0, r.jsx)(N.F, {
              setting: B.s6.NOTIFICATIONS_COMMUNITY_ACTIVITY_ALERTS,
              children: (0, r.jsxs)(u.C3N, {
                  label: V.intl.string(V.t.D9yVAA),
                  description: V.intl.string(V.t["0PhAOD"]),
                  children: [
                      (0, r.jsx)(u.q4e, {
                          label: V.intl.string(V.t.Q0PsXV),
                          value: t,
                          onChange: (e) => {
                              n(e);
                          },
                          options: a,
                      }),
                      null != t
                          ? (0, r.jsxs)(r.Fragment, {
                                children: [
                                    (0, r.jsx)(N.F, {
                                        setting: B.s6.NOTIFICATIONS_COMMUNITY_IN_APP_ALERTS,
                                        children: (0, r.jsx)(u.rsf, {
                                            label: V.intl.string(V.t.u6dc5O),
                                            description: V.intl.string(V.t["z8Td4+"]),
                                            checked: !e[t].disableRaidAlertNag,
                                            onChange: () => {
                                                (0, k.PS)(
                                                    t,
                                                    (e) => {
                                                        e.disableRaidAlertNag = !e.disableRaidAlertNag;
                                                    },
                                                    k.fy.INFREQUENT_USER_ACTION,
                                                );
                                            },
                                        }),
                                    }),
                                    (0, r.jsx)(N.F, {
                                        setting: B.s6.NOTIFICATIONS_COMMUNITY_PUSH_NOTIFICATIONS,
                                        children: (0, r.jsx)(u.rsf, {
                                            label: V.intl.string(V.t.P8MG6u),
                                            description: V.intl.string(V.t.PyxXs7),
                                            checked: !e[t].disableRaidAlertPush,
                                            onChange: () => {
                                                (0, k.PS)(
                                                    t,
                                                    (e) => {
                                                        e.disableRaidAlertPush = !e.disableRaidAlertPush;
                                                    },
                                                    k.fy.INFREQUENT_USER_ACTION,
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
class J extends i.PureComponent {
    handleDesktopChange(e) {
        let t = e ? Z.qrD.ALL : Z.qrD.NEVER;
        t !== Z.qrD.NEVER ? z("UserSettingsModal") : f.default.setDesktopType(t);
    }
    handleTTSChange(e) {
        let t = e;
        f.default.setTTSType(t);
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
                focusMode: c,
            } = this.props,
            d = M.Z.getCurrentConfig({ location: "Messages" }).enabled || 0 === t ? 0 : 1,
            f = o()
                .range(d, 11)
                .map((e) => ({
                    value: 60 * e,
                    label:
                        0 === e ? V.intl.string(V.t["0QN7cX"]) : V.intl.formatToPlainString(V.t.iXLF9f, { minutes: e }),
                }));
        return (0, r.jsx)(U.Z, {
            title: V.intl.string(V.t.HcoRu7),
            children: (0, r.jsxs)(u.Kqy, {
                gap: 16,
                children: [
                    (0, r.jsx)(N.F, {
                        setting: B.s6.NOTIFICATIONS_ENABLE_DESKTOP,
                        children: (0, r.jsx)(u.rsf, {
                            label: V.intl.string(V.t["/0WClp"]),
                            description: V.intl.string(V.t.wF9ih4),
                            checked: e !== Z.qrD.NEVER && !c,
                            helperText: c ? V.intl.string(V.t.cIRG0t) : void 0,
                            onChange: this.handleDesktopChange,
                            disabled: c,
                        }),
                    }),
                    (0, r.jsx)(ee, {}),
                    (0, r.jsx)(N.F, {
                        setting: B.s6.NOTIFICATIONS_UNREAD_MESSAGE_BADGE,
                        children: (0, r.jsx)(u.rsf, {
                            label: V.intl.string(V.t.VH8AIC),
                            description: V.intl.string(V.t["9K4qwc"]),
                            checked: !n,
                            onChange: this.handleToggleShowUnreadBadge,
                        }),
                    }),
                    (0, r.jsx)(N.F, {
                        setting: B.s6.NOTIFICATIONS_ENABLE_TASKBAR_FLASHING,
                        children: (0, r.jsx)(u.rsf, {
                            label: V.intl.string(V.t.xSmFQE),
                            description: V.intl.string(V.t["bd4j4+"]),
                            checked: i,
                            onChange: this.handleToggleShowFlash,
                        }),
                    }),
                    (0, r.jsx)(et, {}),
                    (0, r.jsx)(eo, {}),
                    (0, r.jsx)(es, {}),
                    (0, r.jsx)(el, {}),
                    (0, r.jsx)(ea, {}),
                    (0, r.jsxs)(N.F, {
                        setting: B.s6.NOTIFICATIONS_PUSH_INACTIVE_TIMEOUT,
                        children: [
                            (0, r.jsx)(u.q4e, {
                                label: V.intl.string(V.t.TTvjd3),
                                description: V.intl.string(V.t.Xytv9P),
                                value: t,
                                onChange: j.CM.updateSetting,
                                options: f,
                            }),
                            (0, r.jsx)(u.izJ, { gap: 16 }),
                        ],
                    }),
                    this.renderTTS(),
                    (0, r.jsx)(Q, {}),
                    (0, r.jsx)(u.izJ, { gap: 24 }),
                    (0, r.jsx)(X, {
                        disabledSounds: a,
                        disableAllSounds: s,
                        notifyMessagesInSelectedChannel: l,
                    }),
                    (0, r.jsx)(G.Z, {}),
                ],
            }),
        });
    }
    constructor(...e) {
        super(...e),
            H(this, "handleToggleShowUnreadBadge", () => {
                f.default.setDisableUnreadBadge(!this.props.disableUnreadBadge);
            }),
            H(this, "handleToggleShowFlash", () => {
                f.default.setTaskbarFlash(!this.props.taskbarFlash);
            }),
            H(this, "renderTTS", () => {
                if (!p.Zh) return null;
                let e = [
                    {
                        name: V.intl.string(V.t.B1AGeH),
                        value: Z.PrB.ALL_CHANNELS,
                    },
                    {
                        name: V.intl.string(V.t.uM2rNj),
                        value: Z.PrB.SELECTED_CHANNEL,
                    },
                    {
                        name: V.intl.string(V.t.DYO5Oj),
                        value: Z.PrB.NEVER,
                    },
                ];
                return (0, r.jsxs)(N.F, {
                    setting: B.s6.NOTIFICATIONS_TEXT_TO_SPEECH,
                    children: [
                        (0, r.jsx)(c.E, {
                            label: V.intl.string(V.t.VIm5MD),
                            description: V.intl.string(V.t["+4dnAw"]),
                            options: e,
                            onChange: this.handleTTSChange,
                            value: this.props.ttsType,
                        }),
                        (0, r.jsx)(u.izJ, { gap: 16 }),
                    ],
                });
            });
    }
}
let $ = (0, h.B)({
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
function ee() {
    let e = $.useExperiment({ location: "settings" }, { autoTrackExposure: !1 }).enabled,
        t = (0, s.e7)([D.ZP], () => D.ZP.mentionOnAllMessages);
    return e
        ? (0, r.jsx)(N.F, {
              setting: B.s6.NOTIFICATIONS_MENTION_ON_ALL_MESSAGES,
              children: (0, r.jsx)(u.rsf, {
                  label: "Mention on all messages?",
                  description:
                      "Increments the mention count when receiving a message in a channel set to 'All Messages'",
                  checked: t,
                  onChange: (e) => {
                      _.Z.setAccountFlag(F.c.MENTION_ON_ALL_MESSAGES, e);
                  },
              }),
          })
        : null;
}
function et() {
    let e = v.xT.useExperiment({ location: "UserSettingsNotifications" }, { autoTrackExposure: !1 }).enabled,
        { manuallyOpen: t } = v.fs.useExperiment({ location: "UserSettingsNotifications" }, { autoTrackExposure: !1 }),
        n = (0, s.e7)([D.ZP], () => D.ZP.useNewNotifications),
        [a, o] = i.useState(!1);
    return e && (n || t)
        ? (0, r.jsxs)(r.Fragment, {
              children: [
                  n
                      ? (0, r.jsx)(N.F, {
                            setting: B.s6.NOTIFICATIONS_UNREAD_SETTINGS,
                            children: (0, r.jsx)(u.rsf, {
                                label: V.intl.string(V.t.z21l8P),
                                description: V.intl.string(V.t.frbLrK),
                                checked: n,
                                disabled: a || !n,
                                onChange: () => en(o),
                            }),
                        })
                      : t
                        ? (0, r.jsx)(N.F, {
                              setting: B.s6.NOTIFICATIONS_UNREAD_SETTINGS,
                              children: (0, r.jsx)(u.rsf, {
                                  label: V.intl.string(V.t.z21l8P),
                                  description: "Turns on the new notification system",
                                  checked: n,
                                  disabled: a || n,
                                  onChange: (e) => {
                                      _.Z.setAccountFlag(F.c.USE_NEW_NOTIFICATIONS, e);
                                  },
                              }),
                          })
                        : null,
                  (0, r.jsxs)(N.F, {
                      setting: B.s6.NOTIFICATIONS_NEW_SETTINGS,
                      children: [
                          (0, r.jsx)(u.C3N, {
                              label: "New Notification Settings (Advanced, Staff Only)",
                              children: (0, r.jsxs)("div", {
                                  style: {
                                      display: "flex",
                                      gap: 16,
                                  },
                                  children: [
                                      (0, r.jsx)(N.F, {
                                          setting: B.s6.NOTIFICATIONS_RESTORE_MOST_RECENT_SNAPSHOT,
                                          children: (0, r.jsx)(u.Button, {
                                              variant: "primary",
                                              text: "Restore most recent snapshot",
                                              onClick: O.KP,
                                          }),
                                      }),
                                      (0, r.jsx)(N.F, {
                                          setting: B.s6.NOTIFICATIONS_LAUNCH_MIGRATION,
                                          children: (0, r.jsx)(u.Button, {
                                              variant: "primary",
                                              text: "Launch Migration",
                                              onClick: () => {
                                                  (0, S.R)(!0);
                                              },
                                          }),
                                      }),
                                      (0, r.jsx)(N.F, {
                                          setting: B.s6.NOTIFICATIONS_TOGGLE_NEW_SYSTEM,
                                          children: (0, r.jsx)(u.rsf, {
                                              label: "Toggle new system on/off",
                                              checked: n,
                                              onChange: (e) => {
                                                  _.Z.setAccountFlag(F.c.USE_NEW_NOTIFICATIONS, e);
                                              },
                                          }),
                                      }),
                                  ],
                              }),
                          }),
                          (0, r.jsx)(u.izJ, { gap: 16 }),
                      ],
                  }),
              ],
          })
        : null;
}
async function en(e) {
    e(!0);
    let t = await (0, O.Tn)();
    0 === t.length
        ? await (0, T.oL)()
        : d.Z.show({
              title: V.intl.string(V.t["cY+Ooa"]),
              body: V.intl.format(V.t["7zTJJS"], { date: new Date(t[t.length - 1].recorded_at) }),
              cancelText: V.intl.string(V.t["ETE/oK"]),
              confirmText: V.intl.string(V.t.Rm96T0),
              onConfirm: T.oL,
          }),
        e(!1);
}
function er(e) {
    let t = (0, y.p)();
    return (0, r.jsx)(J, K(Y({}, e), { focusMode: t }));
}
function ei() {
    let e = (0, s.cj)([w.Z], () => ({
        disableUnreadBadge: w.Z.getDisableUnreadBadge(),
        taskbarFlash: w.Z.taskbarFlash,
        disabledSounds: w.Z.getDisabledSounds(),
        disableAllSounds: w.Z.getDisableAllSounds(),
        desktopType: w.Z.getDesktopType(),
        ttsType: w.Z.getTTSType(),
        notifyMessagesInSelectedChannel: w.Z.getNotifyMessagesInSelectedChannel(),
    }));
    return (0, r.jsx)(er, K(Y({}, e), { afkTimeout: j.CM.useSetting() }));
}
function ea() {
    let e = j.fz.useSetting(),
        t = [
            {
                name: V.intl.string(V.t["9x/Rtb"]),
                value: l.Ns.NOTIFICATIONS_ENABLED,
            },
            {
                name: V.intl.string(V.t.fJAbQU),
                value: l.Ns.ONLY_DMS,
            },
            {
                name: V.intl.string(V.t["xu+UDQ"]),
                value: l.Ns.NOTIFICATIONS_DISABLED,
            },
        ],
        n = (t) => {
            (0, C.MR)(t.value, e);
        };
    return A.Z.getCurrentConfig({ location: "webSettings" }).enableInAppNotifications
        ? (0, r.jsxs)(N.F, {
              setting: B.s6.NOTIFICATIONS_REACTIONS,
              children: [
                  (0, r.jsx)(c.E, {
                      label: V.intl.string(V.t.Rq0NFh),
                      description: V.intl.string(V.t.oWF6eX),
                      options: t,
                      onChange: (e) => n({ value: e }),
                      value: e,
                  }),
                  (0, r.jsx)(u.izJ, { gap: 16 }),
              ],
          })
        : null;
}
function eo() {
    let e = j.d8.useSetting(),
        t = j.JN.useSetting();
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(N.F, {
                setting: B.s6.NOTIFICATIONS_VOICE_ACTIVITY,
                children: (0, r.jsx)(u.rsf, {
                    label: V.intl.string(V.t.wtk08f),
                    description: V.intl.string(V.t.rngMNz),
                    badge: "beta",
                    checked: e,
                    onChange: P.I,
                }),
            }),
            (0, r.jsx)(N.F, {
                setting: B.s6.NOTIFICATIONS_GO_LIVE,
                children: (0, r.jsx)(u.rsf, {
                    label: V.intl.string(V.t.pW4TMj),
                    description: V.intl.string(V.t["H+WYqa"]),
                    checked: t,
                    onChange: j.JN.updateSetting,
                }),
            }),
        ],
    });
}
function es() {
    let e = j.JY.useSetting();
    return (0, r.jsx)(N.F, {
        setting: B.s6.NOTIFICATIONS_FRIEND_ONLINE,
        children: (0, r.jsx)(u.rsf, {
            label: V.intl.string(V.t["uvIi//"]),
            description: V.intl.string(V.t.E6O06u),
            checked: e,
            onChange: I.N,
        }),
    });
}
function el() {
    let e = j.V6.useSetting();
    return (0, r.jsx)(N.F, {
        setting: B.s6.NOTIFICATIONS_USER_RESURRECTION,
        children: (0, r.jsx)(u.rsf, {
            label: V.intl.string(V.t.Zyn45e),
            description: V.intl.string(V.t.XdihbG),
            checked: e,
            onChange: m.F,
        }),
    });
}
