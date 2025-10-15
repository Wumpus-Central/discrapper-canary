n.d(t, { Z: () => en }), n(539854), n(388685);
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
    m = n(487419),
    g = n(197344),
    E = n(476756),
    b = n(734934),
    y = n(223683),
    O = n(312400),
    v = n(115345),
    I = n(392888),
    T = n(106371),
    S = n(995774),
    A = n(921801),
    C = n(460181),
    N = n(210176),
    R = n(292959),
    P = n(9156),
    w = n(912101),
    D = n(709054),
    L = n(45640),
    x = n(695346),
    M = n(675478),
    j = n(273313),
    k = n(33656),
    U = n(726985),
    G = n(981631),
    B = n(468788),
    Z = n(388032);
function F(e, t, n) {
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
function V(e) {
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
                F(e, t, n[t]);
            });
    }
    return e;
}
function H(e, t) {
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
function Y(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : H(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function W(e) {
    w.Z.requestPermission((t) => {
        let n = t ? G.$Ab.ENABLED : G.$Ab.BLOCKED;
        f.default.setPermissionsState(n, e);
    });
}
function K(e) {
    let { label: t, enabled: n, disabled: i, onPreview: a, onChange: o } = e;
    return (0, r.jsx)(u.rsf, {
        label: t,
        checked: n,
        onChange: o,
        disabled: i,
        description: Z.intl.format(Z.t.OOiGCM, { onClick: a }),
    });
}
function z(e) {
    let { disabledSounds: t, disableAllSounds: n, notifyMessagesInSelectedChannel: a } = e,
        o = i.useRef(null),
        s = (0, b.p)(),
        l = i.useCallback((e, t) => {
            t.stopPropagation(), t.preventDefault(), null != o.current && o.current.stop(), (o.current = (0, C.GN)(e));
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
                label: Z.intl.string(Z.t.pz71xC),
                sound: "message1",
                focusModeDisabled: s,
            },
            {
                label: Z.intl.string(Z.t.hK51Yg),
                sound: "deafen",
            },
            {
                label: Z.intl.string(Z.t.XiejaJ),
                sound: "undeafen",
            },
            {
                label: Z.intl.string(Z.t.w4m945),
                sound: "mute",
            },
            {
                label: Z.intl.string(Z.t.YqAjXy),
                sound: "unmute",
            },
            {
                label: Z.intl.string(Z.t.JoTq8n),
                sound: "camera_on",
            },
            {
                label: Z.intl.string(Z.t["8P6tQ6"]),
                sound: "camera_off",
            },
            {
                label: Z.intl.string(Z.t["juL9/L"]),
                sound: "disconnect",
            },
            {
                label: Z.intl.string(Z.t.x98vQq),
                sound: "ptt_start",
            },
            {
                label: Z.intl.string(Z.t["1HjRqC"]),
                sound: "ptt_stop",
            },
            {
                label: Z.intl.string(Z.t["9JB1Ck"]),
                sound: "user_join",
            },
            {
                label: Z.intl.string(Z.t.KUBBNt),
                sound: "user_leave",
            },
            {
                label: Z.intl.string(Z.t.EZjqUT),
                sound: "user_moved",
            },
            {
                label: Z.intl.string(Z.t.LnNlQh),
                sound: "call_calling",
            },
            {
                label: Z.intl.string(Z.t.XBrJT6),
                sound: "call_ringing",
            },
            {
                label: Z.intl.string(Z.t.Nd8P5y),
                sound: "stream_started",
            },
            {
                label: Z.intl.string(Z.t["9bYj+G"]),
                sound: "stream_ended",
            },
            {
                label: Z.intl.string(Z.t.KccUI1),
                sound: "stream_user_joined",
            },
            {
                label: Z.intl.string(Z.t.dsjkiN),
                sound: "stream_user_left",
            },
            {
                label: Z.intl.string(Z.t.nFOcf9),
                sound: "activity_launch",
            },
            {
                label: Z.intl.string(Z.t["a6lw/u"]),
                sound: "activity_end",
            },
            {
                label: Z.intl.string(Z.t.KaFxrY),
                sound: "activity_user_join",
            },
            {
                label: Z.intl.string(Z.t.S14z9n),
                sound: "activity_user_left",
            },
            {
                label: Z.intl.string(Z.t.CP3DC3),
                sound: "reconnect",
            },
        ],
        _ = null != g.Z.useHolidaySoundpack();
    return (0, r.jsx)(A.F, {
        setting: U.s6.NOTIFICATIONS_SOUNDS,
        children: (0, r.jsxs)("div", {
            children: [
                _ ? (0, r.jsx)(E.Z, {}) : null,
                (0, r.jsxs)(u.C3N, {
                    label: Z.intl.string(Z.t.MKWyKc),
                    children: [
                        (0, r.jsx)(u.rsf, {
                            label: Z.intl.string(Z.t.lF5GGe),
                            description: Z.intl.string(Z.t["7oXUim"]),
                            checked: a,
                            onChange: f.default.setNotifyMessagesInSelectedChannel,
                        }),
                        (0, r.jsx)(u.rsf, {
                            label: Z.intl.string(Z.t["2ZhCOd"]),
                            description: Z.intl.string(Z.t["+B0XLE"]),
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
                                            K,
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
                                                  children: Z.intl.string(Z.t.cIRG0s),
                                              })
                                            : null,
                                    ],
                                },
                                o,
                            );
                        }),
                    ],
                }),
            ],
        }),
    });
}
function q() {
    let e = (0, s.e7)([m.Z], () => m.Z.getGuildAlertSettings()),
        [t, n] = i.useState(null),
        a = D.default.keys(e).map((t) => {
            let n = e[t];
            return {
                label: n.guildName,
                value: n.guildId,
            };
        });
    return 0 === Object.keys(e).length
        ? null
        : (0, r.jsx)(A.F, {
              setting: U.s6.NOTIFICATIONS_COMMUNITY_ACTIVITY_ALERTS,
              children: (0, r.jsxs)(u.C3N, {
                  label: Z.intl.string(Z.t.D9yVAH),
                  description: Z.intl.string(Z.t["0PhAOH"]),
                  children: [
                      (0, r.jsx)(u.q4e, {
                          label: Z.intl.string(Z.t.Q0PsXX),
                          value: t,
                          onChange: (e) => {
                              n(e);
                          },
                          options: a,
                      }),
                      null != t
                          ? (0, r.jsxs)(r.Fragment, {
                                children: [
                                    (0, r.jsx)(A.F, {
                                        setting: U.s6.NOTIFICATIONS_COMMUNITY_IN_APP_ALERTS,
                                        children: (0, r.jsx)(u.rsf, {
                                            label: Z.intl.string(Z.t.u6dc5B),
                                            description: Z.intl.string(Z.t.z8Td48),
                                            checked: !e[t].disableRaidAlertNag,
                                            onChange: () => {
                                                (0, M.PS)(
                                                    t,
                                                    (e) => {
                                                        e.disableRaidAlertNag = !e.disableRaidAlertNag;
                                                    },
                                                    M.fy.INFREQUENT_USER_ACTION,
                                                );
                                            },
                                        }),
                                    }),
                                    (0, r.jsx)(A.F, {
                                        setting: U.s6.NOTIFICATIONS_COMMUNITY_PUSH_NOTIFICATIONS,
                                        children: (0, r.jsx)(u.rsf, {
                                            label: Z.intl.string(Z.t.P8MG6q),
                                            description: Z.intl.string(Z.t.PyxXs8),
                                            checked: !e[t].disableRaidAlertPush,
                                            onChange: () => {
                                                (0, M.PS)(
                                                    t,
                                                    (e) => {
                                                        e.disableRaidAlertPush = !e.disableRaidAlertPush;
                                                    },
                                                    M.fy.INFREQUENT_USER_ACTION,
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
class X extends i.PureComponent {
    handleDesktopChange(e) {
        let t = e ? G.qrD.ALL : G.qrD.NEVER;
        t !== G.qrD.NEVER ? W("UserSettingsModal") : f.default.setDesktopType(t);
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
            d = L.Z.getCurrentConfig({ location: "Messages" }).enabled || 0 === t ? 0 : 1,
            f = o()
                .range(d, 11)
                .map((e) => ({
                    value: 60 * e,
                    label:
                        0 === e ? Z.intl.string(Z.t["0QN7cZ"]) : Z.intl.formatToPlainString(Z.t.iXLF9W, { minutes: e }),
                }));
        return (0, r.jsx)(j.Z, {
            title: Z.intl.string(Z.t.HcoRu0),
            children: (0, r.jsxs)(u.Kqy, {
                gap: 16,
                children: [
                    (0, r.jsx)(A.F, {
                        setting: U.s6.NOTIFICATIONS_ENABLE_DESKTOP,
                        children: (0, r.jsx)(u.rsf, {
                            label: Z.intl.string(Z.t["/0WCll"]),
                            description: Z.intl.string(Z.t.wF9ih3),
                            checked: e !== G.qrD.NEVER && !c,
                            helperText: c ? Z.intl.string(Z.t.cIRG0s) : void 0,
                            onChange: this.handleDesktopChange,
                            disabled: c,
                        }),
                    }),
                    (0, r.jsx)(J, {}),
                    (0, r.jsx)(A.F, {
                        setting: U.s6.NOTIFICATIONS_UNREAD_MESSAGE_BADGE,
                        children: (0, r.jsx)(u.rsf, {
                            label: Z.intl.string(Z.t.VH8AIJ),
                            description: Z.intl.string(Z.t["9K4qwX"]),
                            checked: !n,
                            onChange: this.handleToggleShowUnreadBadge,
                        }),
                    }),
                    (0, r.jsx)(A.F, {
                        setting: U.s6.NOTIFICATIONS_ENABLE_TASKBAR_FLASHING,
                        children: (0, r.jsx)(u.rsf, {
                            label: Z.intl.string(Z.t.xSmFQG),
                            description: Z.intl.string(Z.t.bd4j4x),
                            checked: i,
                            onChange: this.handleToggleShowFlash,
                        }),
                    }),
                    (0, r.jsx)($, {}),
                    (0, r.jsx)(ei, {}),
                    (0, r.jsx)(er, {}),
                    (0, r.jsxs)(A.F, {
                        setting: U.s6.NOTIFICATIONS_PUSH_INACTIVE_TIMEOUT,
                        children: [
                            (0, r.jsx)(u.q4e, {
                                label: Z.intl.string(Z.t.TTvjd9),
                                description: Z.intl.string(Z.t.Xytv9C),
                                value: t,
                                onChange: x.CM.updateSetting,
                                options: f,
                            }),
                            (0, r.jsx)(u.izJ, { gap: 16 }),
                        ],
                    }),
                    this.renderTTS(),
                    (0, r.jsx)(q, {}),
                    (0, r.jsx)(u.izJ, { gap: 24 }),
                    (0, r.jsx)(z, {
                        disabledSounds: a,
                        disableAllSounds: s,
                        notifyMessagesInSelectedChannel: l,
                    }),
                    (0, r.jsx)(k.Z, {}),
                ],
            }),
        });
    }
    constructor(...e) {
        super(...e),
            F(this, "handleToggleShowUnreadBadge", () => {
                f.default.setDisableUnreadBadge(!this.props.disableUnreadBadge);
            }),
            F(this, "handleToggleShowFlash", () => {
                f.default.setTaskbarFlash(!this.props.taskbarFlash);
            }),
            F(this, "renderTTS", () => {
                if (!p.Zh) return null;
                let e = [
                    {
                        name: Z.intl.string(Z.t.B1AGeJ),
                        value: G.PrB.ALL_CHANNELS,
                    },
                    {
                        name: Z.intl.string(Z.t.uM2rNr),
                        value: G.PrB.SELECTED_CHANNEL,
                    },
                    {
                        name: Z.intl.string(Z.t.DYO5Oi),
                        value: G.PrB.NEVER,
                    },
                ];
                return (0, r.jsxs)(A.F, {
                    setting: U.s6.NOTIFICATIONS_TEXT_TO_SPEECH,
                    children: [
                        (0, r.jsx)(c.E, {
                            label: Z.intl.string(Z.t.VIm5MO),
                            description: Z.intl.string(Z.t["+4dnA5"]),
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
let Q = (0, h.B)({
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
function J() {
    let e = Q.useExperiment({ location: "settings" }, { autoTrackExposure: !1 }).enabled,
        t = (0, s.e7)([P.ZP], () => P.ZP.mentionOnAllMessages);
    return e
        ? (0, r.jsx)(A.F, {
              setting: U.s6.NOTIFICATIONS_MENTION_ON_ALL_MESSAGES,
              children: (0, r.jsx)(u.rsf, {
                  label: "Mention on all messages?",
                  description:
                      "Increments the mention count when receiving a message in a channel set to 'All Messages'",
                  checked: t,
                  onChange: (e) => {
                      _.Z.setAccountFlag(B.c.MENTION_ON_ALL_MESSAGES, e);
                  },
              }),
          })
        : null;
}
function $() {
    let e = O.xT.useExperiment({ location: "UserSettingsNotifications" }, { autoTrackExposure: !1 }).enabled,
        { manuallyOpen: t } = O.fs.useExperiment({ location: "UserSettingsNotifications" }, { autoTrackExposure: !1 }),
        n = (0, s.e7)([P.ZP], () => P.ZP.useNewNotifications),
        [a, o] = i.useState(!1);
    return e && (n || t)
        ? (0, r.jsxs)(r.Fragment, {
              children: [
                  n
                      ? (0, r.jsx)(A.F, {
                            setting: U.s6.NOTIFICATIONS_UNREAD_SETTINGS,
                            children: (0, r.jsx)(u.rsf, {
                                label: Z.intl.string(Z.t.z21l8M),
                                description: Z.intl.string(Z.t.frbLrH),
                                checked: n,
                                disabled: a || !n,
                                onChange: () => ee(o),
                            }),
                        })
                      : t
                        ? (0, r.jsx)(A.F, {
                              setting: U.s6.NOTIFICATIONS_UNREAD_SETTINGS,
                              children: (0, r.jsx)(u.rsf, {
                                  label: Z.intl.string(Z.t.z21l8M),
                                  description: "Turns on the new notification system",
                                  checked: n,
                                  disabled: a || n,
                                  onChange: (e) => {
                                      _.Z.setAccountFlag(B.c.USE_NEW_NOTIFICATIONS, e);
                                  },
                              }),
                          })
                        : null,
                  (0, r.jsxs)(A.F, {
                      setting: U.s6.NOTIFICATIONS_NEW_SETTINGS,
                      children: [
                          (0, r.jsx)(u.C3N, {
                              label: "New Notification Settings (Advanced, Staff Only)",
                              children: (0, r.jsxs)("div", {
                                  style: {
                                      display: "flex",
                                      gap: 16,
                                  },
                                  children: [
                                      (0, r.jsx)(A.F, {
                                          setting: U.s6.NOTIFICATIONS_RESTORE_MOST_RECENT_SNAPSHOT,
                                          children: (0, r.jsx)(u.Button, {
                                              variant: "primary",
                                              text: "Restore most recent snapshot",
                                              onClick: y.KP,
                                          }),
                                      }),
                                      (0, r.jsx)(A.F, {
                                          setting: U.s6.NOTIFICATIONS_LAUNCH_MIGRATION,
                                          children: (0, r.jsx)(u.Button, {
                                              variant: "primary",
                                              text: "Launch Migration",
                                              onClick: () => {
                                                  (0, I.R)(!0);
                                              },
                                          }),
                                      }),
                                      (0, r.jsx)(A.F, {
                                          setting: U.s6.NOTIFICATIONS_TOGGLE_NEW_SYSTEM,
                                          children: (0, r.jsx)(u.rsf, {
                                              label: "Toggle new system on/off",
                                              checked: n,
                                              onChange: (e) => {
                                                  _.Z.setAccountFlag(B.c.USE_NEW_NOTIFICATIONS, e);
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
async function ee(e) {
    e(!0);
    let t = await (0, y.Tn)();
    0 === t.length
        ? await (0, v.oL)()
        : d.Z.show({
              title: Z.intl.string(Z.t["cY+Oob"]),
              body: Z.intl.format(Z.t["7zTJJQ"], { date: new Date(t[t.length - 1].recorded_at) }),
              cancelText: Z.intl.string(Z.t["ETE/oC"]),
              confirmText: Z.intl.string(Z.t.Rm96Ty),
              onConfirm: v.oL,
          }),
        e(!1);
}
function et(e) {
    let t = (0, b.p)();
    return (0, r.jsx)(X, Y(V({}, e), { focusMode: t }));
}
function en() {
    let e = (0, s.cj)([R.Z], () => ({
        disableUnreadBadge: R.Z.getDisableUnreadBadge(),
        taskbarFlash: R.Z.taskbarFlash,
        disabledSounds: R.Z.getDisabledSounds(),
        disableAllSounds: R.Z.getDisableAllSounds(),
        desktopType: R.Z.getDesktopType(),
        ttsType: R.Z.getTTSType(),
        notifyMessagesInSelectedChannel: R.Z.getNotifyMessagesInSelectedChannel(),
    }));
    return (0, r.jsx)(et, Y(V({}, e), { afkTimeout: x.CM.useSetting() }));
}
function er() {
    let e = x.fz.useSetting(),
        t = [
            {
                name: Z.intl.string(Z.t["9x/RtT"]),
                value: l.Ns.NOTIFICATIONS_ENABLED,
            },
            {
                name: Z.intl.string(Z.t.fJAbQd),
                value: l.Ns.ONLY_DMS,
            },
            {
                name: Z.intl.string(Z.t["xu+UDU"]),
                value: l.Ns.NOTIFICATIONS_DISABLED,
            },
        ],
        n = (t) => {
            (0, S.MR)(t.value, e);
        };
    return T.Z.getCurrentConfig({ location: "webSettings" }).enableInAppNotifications
        ? (0, r.jsxs)(A.F, {
              setting: U.s6.NOTIFICATIONS_REACTIONS,
              children: [
                  (0, r.jsx)(c.E, {
                      label: Z.intl.string(Z.t.Rq0NFs),
                      description: Z.intl.string(Z.t.oWF6eQ),
                      options: t,
                      onChange: (e) => n({ value: e }),
                      value: e,
                  }),
                  (0, r.jsx)(u.izJ, { gap: 16 }),
              ],
          })
        : null;
}
function ei() {
    let e = x.d8.useSetting(),
        t = x.JN.useSetting();
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(A.F, {
                setting: U.s6.NOTIFICATIONS_VOICE_ACTIVITY,
                children: (0, r.jsx)(u.rsf, {
                    label: Z.intl.string(Z.t.wtk08S),
                    description: Z.intl.string(Z.t.rngMNx),
                    badge: "beta",
                    checked: e,
                    onChange: N.I,
                }),
            }),
            (0, r.jsx)(A.F, {
                setting: U.s6.NOTIFICATIONS_GO_LIVE,
                children: (0, r.jsx)(u.rsf, {
                    label: Z.intl.string(Z.t.pW4TMp),
                    description: Z.intl.string(Z.t["H+WYqZ"]),
                    checked: t,
                    onChange: x.JN.updateSetting,
                }),
            }),
        ],
    });
}
