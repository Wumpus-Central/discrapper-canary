n.d(t, { Z: () => er }), n(539854), n(388685);
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
    Z = n(388032),
    F = n(10198);
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
    w.Z.requestPermission((t) => {
        let n = t ? G.$Ab.ENABLED : G.$Ab.BLOCKED;
        f.default.setPermissionsState(n, e);
    });
}
function z(e) {
    let { label: t, enabled: n, disabled: i, onPreview: a, onChange: o } = e;
    return (0, r.jsx)(u.rsf, {
        label: t,
        checked: n,
        onChange: o,
        disabled: i,
        description: Z.intl.format(Z.t.OOiGCA, { onClick: a }),
    });
}
function q(e) {
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
                label: Z.intl.string(Z.t.pz71xM),
                sound: "message1",
                focusModeDisabled: s,
            },
            {
                label: Z.intl.string(Z.t.hK51Ym),
                sound: "deafen",
            },
            {
                label: Z.intl.string(Z.t.XiejaG),
                sound: "undeafen",
            },
            {
                label: Z.intl.string(Z.t["w4m94+"]),
                sound: "mute",
            },
            {
                label: Z.intl.string(Z.t.YqAjX1),
                sound: "unmute",
            },
            {
                label: Z.intl.string(Z.t.JoTq8v),
                sound: "camera_on",
            },
            {
                label: Z.intl.string(Z.t["8P6tQ0"]),
                sound: "camera_off",
            },
            {
                label: Z.intl.string(Z.t["juL9/P"]),
                sound: "disconnect",
            },
            {
                label: Z.intl.string(Z.t.x98vQk),
                sound: "ptt_start",
            },
            {
                label: Z.intl.string(Z.t["1HjRqK"]),
                sound: "ptt_stop",
            },
            {
                label: Z.intl.string(Z.t["9JB1Cg"]),
                sound: "user_join",
            },
            {
                label: Z.intl.string(Z.t.KUBBNj),
                sound: "user_leave",
            },
            {
                label: Z.intl.string(Z.t.EZjqUV),
                sound: "user_moved",
            },
            {
                label: Z.intl.string(Z.t.LnNlQk),
                sound: "call_calling",
            },
            {
                label: Z.intl.string(Z.t.XBrJT0),
                sound: "call_ringing",
            },
            {
                label: Z.intl.string(Z.t["Nd8P5+"]),
                sound: "stream_started",
            },
            {
                label: Z.intl.string(Z.t["9bYj+P"]),
                sound: "stream_ended",
            },
            {
                label: Z.intl.string(Z.t.KccUIy),
                sound: "stream_user_joined",
            },
            {
                label: Z.intl.string(Z.t.dsjkiI),
                sound: "stream_user_left",
            },
            {
                label: Z.intl.string(Z.t.nFOcf3),
                sound: "activity_launch",
            },
            {
                label: Z.intl.string(Z.t["a6lw/v"]),
                sound: "activity_end",
            },
            {
                label: Z.intl.string(Z.t.KaFxra),
                sound: "activity_user_join",
            },
            {
                label: Z.intl.string(Z.t.S14z9v),
                sound: "activity_user_left",
            },
            {
                label: Z.intl.string(Z.t.CP3DCw),
                sound: "reconnect",
            },
        ],
        _ = null != g.Z.useHolidaySoundpack();
    return (0, r.jsx)(A.F, {
        setting: U.s6.NOTIFICATIONS_SOUNDS,
        children: (0, r.jsxs)("div", {
            children: [
                _
                    ? (0, r.jsxs)(r.Fragment, {
                          children: [
                              (0, r.jsx)(u.vwX, {
                                  className: F.marginBottom20,
                                  children: Z.intl.string(Z.t.fgSHf3),
                              }),
                              (0, r.jsx)(E.Z, {}),
                          ],
                      })
                    : null,
                (0, r.jsxs)(u.C3N, {
                    label: Z.intl.string(Z.t.MKWyKS),
                    children: [
                        (0, r.jsx)(u.rsf, {
                            label: Z.intl.string(Z.t.lF5GGR),
                            description: Z.intl.string(Z.t["7oXUio"]),
                            checked: a,
                            onChange: f.default.setNotifyMessagesInSelectedChannel,
                        }),
                        (0, r.jsx)(u.rsf, {
                            label: Z.intl.string(Z.t["2ZhCOT"]),
                            description: Z.intl.string(Z.t["+B0XLC"]),
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
                                            z,
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
                                                  children: Z.intl.string(Z.t.cIRG0t),
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
function X() {
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
                  label: Z.intl.string(Z.t.D9yVAA),
                  description: Z.intl.string(Z.t["0PhAOD"]),
                  children: [
                      (0, r.jsx)(u.q4e, {
                          label: Z.intl.string(Z.t.Q0PsXV),
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
                                            label: Z.intl.string(Z.t.u6dc5O),
                                            description: Z.intl.string(Z.t["z8Td4+"]),
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
                                            label: Z.intl.string(Z.t.P8MG6u),
                                            description: Z.intl.string(Z.t.PyxXs7),
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
class Q extends i.PureComponent {
    handleDesktopChange(e) {
        let t = e ? G.qrD.ALL : G.qrD.NEVER;
        t !== G.qrD.NEVER ? K("UserSettingsModal") : f.default.setDesktopType(t);
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
                        0 === e ? Z.intl.string(Z.t["0QN7cX"]) : Z.intl.formatToPlainString(Z.t.iXLF9f, { minutes: e }),
                }));
        return (0, r.jsx)(j.Z, {
            title: Z.intl.string(Z.t.HcoRu7),
            children: (0, r.jsxs)(u.Kqy, {
                gap: 16,
                children: [
                    (0, r.jsx)(A.F, {
                        setting: U.s6.NOTIFICATIONS_ENABLE_DESKTOP,
                        children: (0, r.jsx)(u.rsf, {
                            label: Z.intl.string(Z.t["/0WClp"]),
                            description: Z.intl.string(Z.t.wF9ih4),
                            checked: e !== G.qrD.NEVER && !c,
                            helperText: c ? Z.intl.string(Z.t.cIRG0t) : void 0,
                            onChange: this.handleDesktopChange,
                            disabled: c,
                        }),
                    }),
                    (0, r.jsx)($, {}),
                    (0, r.jsx)(A.F, {
                        setting: U.s6.NOTIFICATIONS_UNREAD_MESSAGE_BADGE,
                        children: (0, r.jsx)(u.rsf, {
                            label: Z.intl.string(Z.t.VH8AIC),
                            description: Z.intl.string(Z.t["9K4qwc"]),
                            checked: !n,
                            onChange: this.handleToggleShowUnreadBadge,
                        }),
                    }),
                    (0, r.jsx)(A.F, {
                        setting: U.s6.NOTIFICATIONS_ENABLE_TASKBAR_FLASHING,
                        children: (0, r.jsx)(u.rsf, {
                            label: Z.intl.string(Z.t.xSmFQE),
                            description: Z.intl.string(Z.t["bd4j4+"]),
                            checked: i,
                            onChange: this.handleToggleShowFlash,
                        }),
                    }),
                    (0, r.jsx)(ee, {}),
                    (0, r.jsx)(ea, {}),
                    (0, r.jsx)(ei, {}),
                    (0, r.jsxs)(A.F, {
                        setting: U.s6.NOTIFICATIONS_PUSH_INACTIVE_TIMEOUT,
                        children: [
                            (0, r.jsx)(u.q4e, {
                                label: Z.intl.string(Z.t.TTvjd3),
                                description: Z.intl.string(Z.t.Xytv9P),
                                value: t,
                                onChange: x.CM.updateSetting,
                                options: f,
                            }),
                            (0, r.jsx)(u.izJ, { gap: 16 }),
                        ],
                    }),
                    this.renderTTS(),
                    (0, r.jsx)(X, {}),
                    (0, r.jsx)(u.izJ, { gap: 24 }),
                    (0, r.jsx)(q, {
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
            V(this, "handleToggleShowUnreadBadge", () => {
                f.default.setDisableUnreadBadge(!this.props.disableUnreadBadge);
            }),
            V(this, "handleToggleShowFlash", () => {
                f.default.setTaskbarFlash(!this.props.taskbarFlash);
            }),
            V(this, "renderTTS", () => {
                if (!p.Zh) return null;
                let e = [
                    {
                        name: Z.intl.string(Z.t.B1AGeH),
                        value: G.PrB.ALL_CHANNELS,
                    },
                    {
                        name: Z.intl.string(Z.t.uM2rNj),
                        value: G.PrB.SELECTED_CHANNEL,
                    },
                    {
                        name: Z.intl.string(Z.t.DYO5Oj),
                        value: G.PrB.NEVER,
                    },
                ];
                return (0, r.jsxs)(A.F, {
                    setting: U.s6.NOTIFICATIONS_TEXT_TO_SPEECH,
                    children: [
                        (0, r.jsx)(c.E, {
                            label: Z.intl.string(Z.t.VIm5MD),
                            description: Z.intl.string(Z.t["+4dnAw"]),
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
let J = (0, h.B)({
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
function ee() {
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
                                label: Z.intl.string(Z.t.z21l8P),
                                description: Z.intl.string(Z.t.frbLrK),
                                checked: n,
                                disabled: a || !n,
                                onChange: () => et(o),
                            }),
                        })
                      : t
                        ? (0, r.jsx)(A.F, {
                              setting: U.s6.NOTIFICATIONS_UNREAD_SETTINGS,
                              children: (0, r.jsx)(u.rsf, {
                                  label: Z.intl.string(Z.t.z21l8P),
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
                                          children: (0, r.jsx)(u.zxk, {
                                              variant: "primary",
                                              text: "Restore most recent snapshot",
                                              onClick: y.KP,
                                          }),
                                      }),
                                      (0, r.jsx)(A.F, {
                                          setting: U.s6.NOTIFICATIONS_LAUNCH_MIGRATION,
                                          children: (0, r.jsx)(u.zxk, {
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
async function et(e) {
    e(!0);
    let t = await (0, y.Tn)();
    0 === t.length
        ? await (0, v.oL)()
        : d.Z.show({
              title: Z.intl.string(Z.t["cY+Ooa"]),
              body: Z.intl.format(Z.t["7zTJJS"], { date: new Date(t[t.length - 1].recorded_at) }),
              cancelText: Z.intl.string(Z.t["ETE/oK"]),
              confirmText: Z.intl.string(Z.t.Rm96T0),
              onConfirm: v.oL,
          }),
        e(!1);
}
function en(e) {
    let t = (0, b.p)();
    return (0, r.jsx)(Q, W(H({}, e), { focusMode: t }));
}
function er() {
    let e = (0, s.cj)([R.Z], () => ({
        disableUnreadBadge: R.Z.getDisableUnreadBadge(),
        taskbarFlash: R.Z.taskbarFlash,
        disabledSounds: R.Z.getDisabledSounds(),
        disableAllSounds: R.Z.getDisableAllSounds(),
        desktopType: R.Z.getDesktopType(),
        ttsType: R.Z.getTTSType(),
        notifyMessagesInSelectedChannel: R.Z.getNotifyMessagesInSelectedChannel(),
    }));
    return (0, r.jsx)(en, W(H({}, e), { afkTimeout: x.CM.useSetting() }));
}
function ei() {
    let e = x.fz.useSetting(),
        t = [
            {
                name: Z.intl.string(Z.t["9x/Rtb"]),
                value: l.Ns.NOTIFICATIONS_ENABLED,
            },
            {
                name: Z.intl.string(Z.t.fJAbQU),
                value: l.Ns.ONLY_DMS,
            },
            {
                name: Z.intl.string(Z.t["xu+UDQ"]),
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
                      label: Z.intl.string(Z.t.Rq0NFh),
                      description: Z.intl.string(Z.t.oWF6eX),
                      options: t,
                      onChange: (e) => n({ value: e }),
                      value: e,
                  }),
                  (0, r.jsx)(u.izJ, { gap: 16 }),
              ],
          })
        : null;
}
function ea() {
    let e = x.d8.useSetting(),
        t = x.JN.useSetting();
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(A.F, {
                setting: U.s6.NOTIFICATIONS_VOICE_ACTIVITY,
                children: (0, r.jsx)(u.rsf, {
                    label: Z.intl.string(Z.t.wtk08f),
                    description: Z.intl.string(Z.t.rngMNz),
                    badge: "beta",
                    checked: e,
                    onChange: N.I,
                }),
            }),
            (0, r.jsx)(A.F, {
                setting: U.s6.NOTIFICATIONS_GO_LIVE,
                children: (0, r.jsx)(u.rsf, {
                    label: Z.intl.string(Z.t.pW4TMj),
                    description: Z.intl.string(Z.t["H+WYqa"]),
                    checked: t,
                    onChange: x.JN.updateSetting,
                }),
            }),
        ],
    });
}
