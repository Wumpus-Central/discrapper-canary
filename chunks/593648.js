n.d(t, { Z: () => ei }), n(539854), n(388685);
var r = n(951288),
    i = n(647438),
    a = n(392711),
    o = n.n(a),
    s = n(442837),
    l = n(524437),
    c = n(433517),
    u = n(481060),
    d = n(292556),
    f = n(87051),
    _ = n(419363),
    p = n(818083),
    h = n(705579),
    m = n(487419),
    g = n(197344),
    E = n(476756),
    b = n(734934),
    y = n(891353),
    O = n(106371),
    v = n(995774),
    I = n(921801),
    T = n(460181),
    S = n(210176),
    A = n(430824),
    C = n(292959),
    N = n(9156),
    R = n(594174),
    P = n(626135),
    w = n(912101),
    D = n(709054),
    x = n(45640),
    L = n(695346),
    M = n(675478),
    j = n(273313),
    k = n(33656),
    U = n(726985),
    G = n(981631),
    B = n(468788),
    Z = n(490897),
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
    w.Z.requestPermission((t) => {
        let n = t ? G.$Ab.ENABLED : G.$Ab.BLOCKED;
        d.default.setPermissionsState(n, e);
    });
}
function z(e) {
    let { label: t, enabled: n, disabled: i, onPreview: a, onChange: o } = e;
    return (0, r.jsx)(u.rsf, {
        label: t,
        checked: n,
        onChange: o,
        disabled: i,
        description: F.intl.format(F.t.OOiGCM, { onClick: a }),
    });
}
function q(e) {
    let { disabledSounds: t, disableAllSounds: n, notifyMessagesInSelectedChannel: a } = e,
        o = i.useRef(null),
        s = (0, b.p)(),
        l = i.useCallback((e, t) => {
            t.stopPropagation(), t.preventDefault(), null != o.current && o.current.stop(), (o.current = (0, T.GN)(e));
        }, []),
        c = i.useCallback(
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
                label: F.intl.string(F.t.pz71xC),
                sound: "message1",
                focusModeDisabled: s,
            },
            {
                label: F.intl.string(F.t.hK51Yg),
                sound: "deafen",
            },
            {
                label: F.intl.string(F.t.XiejaJ),
                sound: "undeafen",
            },
            {
                label: F.intl.string(F.t.w4m945),
                sound: "mute",
            },
            {
                label: F.intl.string(F.t.YqAjXy),
                sound: "unmute",
            },
            {
                label: F.intl.string(F.t.JoTq8n),
                sound: "camera_on",
            },
            {
                label: F.intl.string(F.t["8P6tQ6"]),
                sound: "camera_off",
            },
            {
                label: F.intl.string(F.t["juL9/L"]),
                sound: "disconnect",
            },
            {
                label: F.intl.string(F.t.x98vQq),
                sound: "ptt_start",
            },
            {
                label: F.intl.string(F.t["1HjRqC"]),
                sound: "ptt_stop",
            },
            {
                label: F.intl.string(F.t["9JB1Ck"]),
                sound: "user_join",
            },
            {
                label: F.intl.string(F.t.KUBBNt),
                sound: "user_leave",
            },
            {
                label: F.intl.string(F.t.EZjqUT),
                sound: "user_moved",
            },
            {
                label: F.intl.string(F.t.LnNlQh),
                sound: "call_calling",
            },
            {
                label: F.intl.string(F.t.XBrJT6),
                sound: "call_ringing",
            },
            {
                label: F.intl.string(F.t.Nd8P5y),
                sound: "stream_started",
            },
            {
                label: F.intl.string(F.t["9bYj+G"]),
                sound: "stream_ended",
            },
            {
                label: F.intl.string(F.t.KccUI1),
                sound: "stream_user_joined",
            },
            {
                label: F.intl.string(F.t.dsjkiN),
                sound: "stream_user_left",
            },
            {
                label: F.intl.string(F.t.nFOcf9),
                sound: "activity_launch",
            },
            {
                label: F.intl.string(F.t["a6lw/u"]),
                sound: "activity_end",
            },
            {
                label: F.intl.string(F.t.KaFxrY),
                sound: "activity_user_join",
            },
            {
                label: F.intl.string(F.t.S14z9n),
                sound: "activity_user_left",
            },
            {
                label: F.intl.string(F.t.CP3DC3),
                sound: "reconnect",
            },
        ],
        _ = null != g.Z.useHolidaySoundpack();
    return (0, r.jsx)(I.F, {
        setting: U.s6.NOTIFICATIONS_SOUNDS,
        children: (0, r.jsx)("div", {
            children: (0, r.jsxs)(u.C3N, {
                label: F.intl.string(F.t.MKWyKc),
                children: [
                    _ ? (0, r.jsx)(E.Z, {}) : null,
                    (0, r.jsx)(u.rsf, {
                        label: F.intl.string(F.t.lF5GGe),
                        description: F.intl.string(F.t["7oXUim"]),
                        checked: a,
                        onChange: d.default.setNotifyMessagesInSelectedChannel,
                    }),
                    (0, r.jsx)(u.rsf, {
                        label: F.intl.string(F.t["2ZhCOd"]),
                        description: F.intl.string(F.t["+B0XLE"]),
                        checked: n,
                        onChange: d.default.toggleDisableAllSounds,
                    }),
                    f.map((e, i) => {
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
                                              children: F.intl.string(F.t.cIRG0s),
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
        a = D.default.keys(e).map((t) => {
            let n = e[t];
            return {
                label: n.guildName,
                value: n.guildId,
            };
        });
    return 0 === Object.keys(e).length
        ? null
        : (0, r.jsx)(I.F, {
              setting: U.s6.NOTIFICATIONS_COMMUNITY_ACTIVITY_ALERTS,
              children: (0, r.jsxs)(u.C3N, {
                  label: F.intl.string(F.t.D9yVAH),
                  description: F.intl.string(F.t["0PhAOH"]),
                  children: [
                      (0, r.jsx)(u.q4e, {
                          label: F.intl.string(F.t.Q0PsXX),
                          value: t,
                          onChange: (e) => {
                              n(e);
                          },
                          options: a,
                      }),
                      null != t
                          ? (0, r.jsxs)(r.Fragment, {
                                children: [
                                    (0, r.jsx)(I.F, {
                                        setting: U.s6.NOTIFICATIONS_COMMUNITY_IN_APP_ALERTS,
                                        children: (0, r.jsx)(u.rsf, {
                                            label: F.intl.string(F.t.u6dc5B),
                                            description: F.intl.string(F.t.z8Td48),
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
                                    (0, r.jsx)(I.F, {
                                        setting: U.s6.NOTIFICATIONS_COMMUNITY_PUSH_NOTIFICATIONS,
                                        children: (0, r.jsx)(u.rsf, {
                                            label: F.intl.string(F.t.P8MG6q),
                                            description: F.intl.string(F.t.PyxXs8),
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
        t !== G.qrD.NEVER ? K("UserSettingsModal") : d.default.setDesktopType(t);
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
                focusMode: c,
            } = this.props,
            d = x.Z.getCurrentConfig({ location: "Messages" }).enabled || 0 === t ? 0 : 1,
            f = o()
                .range(d, 11)
                .map((e) => ({
                    value: 60 * e,
                    label:
                        0 === e ? F.intl.string(F.t["0QN7cZ"]) : F.intl.formatToPlainString(F.t.iXLF9W, { minutes: e }),
                }));
        return (0, r.jsx)(j.Z, {
            title: F.intl.string(F.t.HcoRu0),
            children: (0, r.jsxs)(u.Kqy, {
                gap: 16,
                children: [
                    (0, r.jsx)(I.F, {
                        setting: U.s6.NOTIFICATIONS_ENABLE_DESKTOP,
                        children: (0, r.jsx)(u.rsf, {
                            label: F.intl.string(F.t["/0WCll"]),
                            description: F.intl.string(F.t.wF9ih3),
                            checked: e !== G.qrD.NEVER && !c,
                            helperText: c ? F.intl.string(F.t.cIRG0s) : void 0,
                            onChange: this.handleDesktopChange,
                            disabled: c,
                        }),
                    }),
                    (0, r.jsx)($, {}),
                    (0, r.jsx)(I.F, {
                        setting: U.s6.NOTIFICATIONS_UNREAD_MESSAGE_BADGE,
                        children: (0, r.jsx)(u.rsf, {
                            label: F.intl.string(F.t.VH8AIJ),
                            description: F.intl.string(F.t["9K4qwX"]),
                            checked: !n,
                            onChange: this.handleToggleShowUnreadBadge,
                        }),
                    }),
                    (0, r.jsx)(I.F, {
                        setting: U.s6.NOTIFICATIONS_ENABLE_TASKBAR_FLASHING,
                        children: (0, r.jsx)(u.rsf, {
                            label: F.intl.string(F.t.xSmFQG),
                            description: F.intl.string(F.t.bd4j4x),
                            checked: i,
                            onChange: this.handleToggleShowFlash,
                        }),
                    }),
                    (0, r.jsx)(ee, {}),
                    (0, r.jsx)(eo, {}),
                    (0, r.jsx)(es, {}),
                    (0, r.jsx)(el, {}),
                    (0, r.jsx)(ea, {}),
                    (0, r.jsxs)(I.F, {
                        setting: U.s6.NOTIFICATIONS_PUSH_INACTIVE_TIMEOUT,
                        children: [
                            (0, r.jsx)(u.q4e, {
                                label: F.intl.string(F.t.TTvjd9),
                                description: F.intl.string(F.t.Xytv9C),
                                value: t,
                                onChange: L.CM.updateSetting,
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
                d.default.setDisableUnreadBadge(!this.props.disableUnreadBadge);
            }),
            V(this, "handleToggleShowFlash", () => {
                d.default.setTaskbarFlash(!this.props.taskbarFlash);
            }),
            V(this, "renderTTS", () => {
                if (!_.Zh) return null;
                let e = [
                    {
                        name: F.intl.string(F.t.B1AGeJ),
                        value: G.PrB.ALL_CHANNELS,
                    },
                    {
                        name: F.intl.string(F.t.uM2rNr),
                        value: G.PrB.SELECTED_CHANNEL,
                    },
                    {
                        name: F.intl.string(F.t.DYO5Oi),
                        value: G.PrB.NEVER,
                    },
                ];
                return (0, r.jsxs)(I.F, {
                    setting: U.s6.NOTIFICATIONS_TEXT_TO_SPEECH,
                    children: [
                        (0, r.jsx)(u.FXm, {
                            label: F.intl.string(F.t.VIm5MO),
                            description: F.intl.string(F.t["+4dnA5"]),
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
        t = (0, s.e7)([N.ZP], () => N.ZP.mentionOnAllMessages);
    return e
        ? (0, r.jsx)(I.F, {
              setting: U.s6.NOTIFICATIONS_MENTION_ON_ALL_MESSAGES,
              children: (0, r.jsx)(u.rsf, {
                  label: "Mention on all messages?",
                  description:
                      "Increments the mention count when receiving a message in a channel set to 'All Messages'",
                  checked: t,
                  onChange: (e) => {
                      f.Z.setAccountFlag(B.c.MENTION_ON_ALL_MESSAGES, e);
                  },
              }),
          })
        : null;
}
function ee() {
    let [e, t] = i.useState(!1),
        n = (0, s.e7)([R.default], () => {
            var e;
            return null == (e = R.default.getCurrentUser()) ? void 0 : e.isStaff();
        }),
        a = (0, s.e7)([N.ZP], () => N.ZP.useNewNotifications);
    return a || n
        ? (0, r.jsx)(I.F, {
              setting: U.s6.NOTIFICATIONS_UNREAD_SETTINGS,
              children: (0, r.jsx)(u.rsf, {
                  label: "New Unreads Setting (Experimental)",
                  description:
                      "Turns off the new unread setting that allows you to pick which channels are most important in a server.",
                  checked: a,
                  disabled: e,
                  onChange: () => (a ? en(t) : et(t)),
              }),
          })
        : null;
}
async function et(e) {
    e(!0), await f.Z.setAccountFlag(B.c.USE_NEW_NOTIFICATIONS, !0), e(!1);
}
async function en(e) {
    e(!0),
        c.K.set("turnedOffNewNotifications", !0),
        P.default.track(G.rMx.NOTIFICATION_MIGRATION_OPTOUT, {
            num_guilds_with_new_setting: A.Z.getGuildsArray().filter(
                (e) => N.ZP.resolveGuildUnreadSetting(e) === Z.i.ONLY_MENTIONS,
            ).length,
        }),
        await f.Z.setAccountFlag(B.c.USE_NEW_NOTIFICATIONS, !1),
        e(!1);
}
function er(e) {
    let t = (0, b.p)();
    return (0, r.jsx)(Q, W(H({}, e), { focusMode: t }));
}
function ei() {
    let e = (0, s.cj)([C.Z], () => ({
        disableUnreadBadge: C.Z.getDisableUnreadBadge(),
        taskbarFlash: C.Z.taskbarFlash,
        disabledSounds: C.Z.getDisabledSounds(),
        disableAllSounds: C.Z.getDisableAllSounds(),
        desktopType: C.Z.getDesktopType(),
        ttsType: C.Z.getTTSType(),
        notifyMessagesInSelectedChannel: C.Z.getNotifyMessagesInSelectedChannel(),
    }));
    return (0, r.jsx)(er, W(H({}, e), { afkTimeout: L.CM.useSetting() }));
}
function ea() {
    let e = L.fz.useSetting(),
        t = [
            {
                name: F.intl.string(F.t["9x/RtT"]),
                value: l.Ns.NOTIFICATIONS_ENABLED,
            },
            {
                name: F.intl.string(F.t.fJAbQd),
                value: l.Ns.ONLY_DMS,
            },
            {
                name: F.intl.string(F.t["xu+UDU"]),
                value: l.Ns.NOTIFICATIONS_DISABLED,
            },
        ],
        n = (t) => {
            (0, v.MR)(t.value, e);
        };
    return O.Z.getCurrentConfig({ location: "webSettings" }).enableInAppNotifications
        ? (0, r.jsxs)(I.F, {
              setting: U.s6.NOTIFICATIONS_REACTIONS,
              children: [
                  (0, r.jsx)(u.FXm, {
                      label: F.intl.string(F.t.Rq0NFs),
                      description: F.intl.string(F.t.oWF6eQ),
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
    let e = L.d8.useSetting(),
        t = L.JN.useSetting();
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(I.F, {
                setting: U.s6.NOTIFICATIONS_VOICE_ACTIVITY,
                children: (0, r.jsx)(u.rsf, {
                    label: F.intl.string(F.t.wtk08S),
                    description: F.intl.string(F.t.rngMNx),
                    badge: "beta",
                    checked: e,
                    onChange: S.I,
                }),
            }),
            (0, r.jsx)(I.F, {
                setting: U.s6.NOTIFICATIONS_GO_LIVE,
                children: (0, r.jsx)(u.rsf, {
                    label: F.intl.string(F.t.pW4TMp),
                    description: F.intl.string(F.t["H+WYqZ"]),
                    checked: t,
                    onChange: L.JN.updateSetting,
                }),
            }),
        ],
    });
}
function es() {
    let e = L.JY.useSetting();
    return (0, r.jsx)(I.F, {
        setting: U.s6.NOTIFICATIONS_FRIEND_ONLINE,
        children: (0, r.jsx)(u.rsf, {
            label: F.intl.string(F.t["uvIi/4"]),
            description: F.intl.string(F.t.E6O06k),
            checked: e,
            onChange: y.N,
        }),
    });
}
function el() {
    let e = L.V6.useSetting();
    return (0, r.jsx)(I.F, {
        setting: U.s6.NOTIFICATIONS_USER_RESURRECTION,
        children: (0, r.jsx)(u.rsf, {
            label: F.intl.string(F.t.Zyn45S),
            description: F.intl.string(F.t.XdihbD),
            checked: e,
            onChange: h.F,
        }),
    });
}
