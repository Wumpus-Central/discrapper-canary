n.d(t, { Z: () => eo }), n(539854), n(388685);
var r = n(54381),
    i = n(473749),
    a = n(392711),
    o = n.n(a),
    s = n(442837),
    l = n(524437),
    c = n(433517),
    u = n(481060),
    d = n(292556),
    f = n(87051),
    p = n(419363),
    _ = n(818083),
    m = n(820942),
    h = n(705579),
    g = n(487419),
    E = n(197344),
    b = n(476756),
    y = n(734934),
    O = n(891353),
    v = n(106371),
    S = n(995774),
    I = n(921801),
    T = n(460181),
    A = n(210176),
    C = n(430824),
    N = n(292959),
    P = n(9156),
    R = n(594174),
    w = n(626135),
    D = n(912101),
    x = n(709054),
    L = n(45640),
    j = n(695346),
    M = n(675478),
    k = n(273313),
    U = n(33656),
    G = n(726985),
    Z = n(981631),
    B = n(468788),
    F = n(490897),
    V = n(388032),
    H = n(966470);
function Y(e, t, n) {
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
function W(e) {
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
                Y(e, t, n[t]);
            });
    }
    return e;
}
function K(e, t) {
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
function z(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : K(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function q(e) {
    D.Z.requestPermission((t) => {
        let n = t ? Z.$Ab.ENABLED : Z.$Ab.BLOCKED;
        d.default.setPermissionsState(n, e);
    });
}
function Q(e) {
    let { label: t, enabled: n, disabled: i, onPreview: a, onChange: o } = e;
    return (0, r.jsx)(u.rsf, {
        label: t,
        checked: n,
        onChange: o,
        disabled: i,
        description: V.intl.format(V.t.OOiGCM, { onClick: a }),
    });
}
function X(e) {
    let { disabledSounds: t, disableAllSounds: n, notifyMessagesInSelectedChannel: a } = e,
        o = i.useRef(null),
        s = (0, y.p)(),
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
                label: V.intl.string(V.t.pz71xC),
                sound: "message1",
                focusModeDisabled: s,
            },
            {
                label: V.intl.string(V.t.hK51Yg),
                sound: "deafen",
            },
            {
                label: V.intl.string(V.t.XiejaJ),
                sound: "undeafen",
            },
            {
                label: V.intl.string(V.t.w4m945),
                sound: "mute",
            },
            {
                label: V.intl.string(V.t.YqAjXy),
                sound: "unmute",
            },
            {
                label: V.intl.string(V.t.JoTq8n),
                sound: "camera_on",
            },
            {
                label: V.intl.string(V.t["8P6tQ6"]),
                sound: "camera_off",
            },
            {
                label: V.intl.string(V.t["juL9/L"]),
                sound: "disconnect",
            },
            {
                label: V.intl.string(V.t.x98vQq),
                sound: "ptt_start",
            },
            {
                label: V.intl.string(V.t["1HjRqC"]),
                sound: "ptt_stop",
            },
            {
                label: V.intl.string(V.t["9JB1Ck"]),
                sound: "user_join",
            },
            {
                label: V.intl.string(V.t.KUBBNt),
                sound: "user_leave",
            },
            {
                label: V.intl.string(V.t.EZjqUT),
                sound: "user_moved",
            },
            {
                label: V.intl.string(V.t.LnNlQh),
                sound: "call_calling",
            },
            {
                label: V.intl.string(V.t.XBrJT6),
                sound: "call_ringing",
            },
            {
                label: V.intl.string(V.t.Nd8P5y),
                sound: "stream_started",
            },
            {
                label: V.intl.string(V.t["9bYj+G"]),
                sound: "stream_ended",
            },
            {
                label: V.intl.string(V.t.KccUI1),
                sound: "stream_user_joined",
            },
            {
                label: V.intl.string(V.t.dsjkiN),
                sound: "stream_user_left",
            },
            {
                label: V.intl.string(V.t.nFOcf9),
                sound: "activity_launch",
            },
            {
                label: V.intl.string(V.t["a6lw/u"]),
                sound: "activity_end",
            },
            {
                label: V.intl.string(V.t.KaFxrY),
                sound: "activity_user_join",
            },
            {
                label: V.intl.string(V.t.S14z9n),
                sound: "activity_user_left",
            },
            {
                label: V.intl.string(V.t.CP3DC3),
                sound: "reconnect",
            },
        ],
        p = null != E.Z.useHolidaySoundpack();
    return (0, r.jsx)(I.F, {
        setting: G.s6.NOTIFICATIONS_SOUNDS,
        children: (0, r.jsx)("div", {
            children: (0, r.jsxs)(u.C3N, {
                label: V.intl.string(V.t.MKWyKc),
                children: [
                    p ? (0, r.jsx)(b.Z, {}) : null,
                    (0, r.jsx)(u.rsf, {
                        label: V.intl.string(V.t.lF5GGe),
                        description: V.intl.string(V.t["7oXUim"]),
                        checked: a && !n,
                        onChange: d.default.setNotifyMessagesInSelectedChannel,
                        disabled: n,
                    }),
                    (0, r.jsx)(u.rsf, {
                        label: V.intl.string(V.t["2ZhCOd"]),
                        description: V.intl.string(V.t["+B0XLE"]),
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
                                        Q,
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
                                              children: V.intl.string(V.t.cIRG0s),
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
function J() {
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
        : (0, r.jsx)(I.F, {
              setting: G.s6.NOTIFICATIONS_COMMUNITY_ACTIVITY_ALERTS,
              children: (0, r.jsxs)(u.C3N, {
                  label: V.intl.string(V.t.D9yVAH),
                  description: V.intl.string(V.t["0PhAOH"]),
                  children: [
                      (0, r.jsx)(u.q4e, {
                          label: V.intl.string(V.t.Q0PsXX),
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
                                        setting: G.s6.NOTIFICATIONS_COMMUNITY_IN_APP_ALERTS,
                                        children: (0, r.jsx)(u.rsf, {
                                            label: V.intl.string(V.t.u6dc5B),
                                            description: V.intl.string(V.t.z8Td48),
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
                                        setting: G.s6.NOTIFICATIONS_COMMUNITY_PUSH_NOTIFICATIONS,
                                        children: (0, r.jsx)(u.rsf, {
                                            label: V.intl.string(V.t.P8MG6q),
                                            description: V.intl.string(V.t.PyxXs8),
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
class $ extends i.PureComponent {
    handleDesktopChange(e) {
        let t = e ? Z.qrD.ALL : Z.qrD.NEVER;
        t !== Z.qrD.NEVER ? q("UserSettingsModal") : d.default.setDesktopType(t);
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
            d = L.Z.getCurrentConfig({ location: "Messages" }).enabled || 0 === t ? 0 : 1,
            f = o()
                .range(d, 11)
                .map((e) => ({
                    value: 60 * e,
                    label:
                        0 === e ? V.intl.string(V.t["0QN7cZ"]) : V.intl.formatToPlainString(V.t.iXLF9W, { minutes: e }),
                }));
        return (0, r.jsx)(k.Z, {
            title: V.intl.string(V.t.HcoRu0),
            children: (0, r.jsxs)(u.Kqy, {
                gap: 16,
                children: [
                    (0, r.jsx)(I.F, {
                        setting: G.s6.NOTIFICATIONS_ENABLE_DESKTOP,
                        children: (0, r.jsx)(u.rsf, {
                            label: V.intl.string(V.t["/0WCll"]),
                            checked: e !== Z.qrD.NEVER && !c,
                            description: c ? V.intl.string(V.t.cIRG0s) : V.intl.string(V.t.wF9ih3),
                            onChange: this.handleDesktopChange,
                            disabled: c,
                        }),
                    }),
                    (0, r.jsx)(et, {}),
                    (0, r.jsx)(I.F, {
                        setting: G.s6.NOTIFICATIONS_UNREAD_MESSAGE_BADGE,
                        children: (0, r.jsx)(u.rsf, {
                            label: V.intl.string(V.t.VH8AIJ),
                            description: V.intl.string(V.t["9K4qwX"]),
                            checked: !n,
                            onChange: this.handleToggleShowUnreadBadge,
                        }),
                    }),
                    (0, r.jsx)(I.F, {
                        setting: G.s6.NOTIFICATIONS_ENABLE_TASKBAR_FLASHING,
                        children: (0, r.jsx)(u.rsf, {
                            label: V.intl.string(V.t.xSmFQG),
                            description: V.intl.string(V.t.bd4j4x),
                            checked: i,
                            onChange: this.handleToggleShowFlash,
                        }),
                    }),
                    (0, r.jsx)(en, {}),
                    (0, r.jsx)(el, {}),
                    (0, r.jsx)(ec, {}),
                    (0, r.jsx)(eu, {}),
                    (0, r.jsx)(ed, {}),
                    (0, r.jsx)(ef, {}),
                    (0, r.jsx)(es, {}),
                    (0, r.jsxs)(I.F, {
                        setting: G.s6.NOTIFICATIONS_PUSH_INACTIVE_TIMEOUT,
                        children: [
                            (0, r.jsx)(u.q4e, {
                                label: V.intl.string(V.t.TTvjd9),
                                description: V.intl.string(V.t.Xytv9C),
                                value: t,
                                onChange: j.CM.updateSetting,
                                options: f,
                            }),
                            (0, r.jsx)(u.izJ, { gap: 16 }),
                        ],
                    }),
                    this.renderTTS(),
                    (0, r.jsx)(J, {}),
                    (0, r.jsx)(u.izJ, { gap: 24 }),
                    (0, r.jsx)(X, {
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
            Y(this, "handleToggleShowUnreadBadge", () => {
                d.default.setDisableUnreadBadge(!this.props.disableUnreadBadge);
            }),
            Y(this, "handleToggleShowFlash", () => {
                d.default.setTaskbarFlash(!this.props.taskbarFlash);
            }),
            Y(this, "renderTTS", () => {
                if (!p.Zh) return null;
                let e = [
                    {
                        name: V.intl.string(V.t.B1AGeJ),
                        value: Z.PrB.ALL_CHANNELS,
                    },
                    {
                        name: V.intl.string(V.t.uM2rNr),
                        value: Z.PrB.SELECTED_CHANNEL,
                    },
                    {
                        name: V.intl.string(V.t.DYO5Oi),
                        value: Z.PrB.NEVER,
                    },
                ];
                return (0, r.jsxs)(I.F, {
                    setting: G.s6.NOTIFICATIONS_TEXT_TO_SPEECH,
                    children: [
                        (0, r.jsx)(u.FXm, {
                            label: V.intl.string(V.t.VIm5MO),
                            description: V.intl.string(V.t["+4dnA5"]),
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
let ee = (0, _.B)({
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
function et() {
    let e = ee.useExperiment({ location: "settings" }, { autoTrackExposure: !1 }).enabled,
        t = (0, s.e7)([P.ZP], () => P.ZP.mentionOnAllMessages);
    return e
        ? (0, r.jsx)(I.F, {
              setting: G.s6.NOTIFICATIONS_MENTION_ON_ALL_MESSAGES,
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
function en() {
    let [e, t] = i.useState(!1),
        n = (0, s.e7)([R.default], () => {
            var e;
            return null == (e = R.default.getCurrentUser()) ? void 0 : e.isStaff();
        }),
        a = (0, s.e7)([P.ZP], () => P.ZP.useNewNotifications);
    return a || n
        ? (0, r.jsx)(I.F, {
              setting: G.s6.NOTIFICATIONS_UNREAD_SETTINGS,
              children: (0, r.jsx)(u.rsf, {
                  label: "New Unreads Setting (Experimental)",
                  description:
                      "Turns off the new unread setting that allows you to pick which channels are most important in a server.",
                  checked: a,
                  disabled: e,
                  onChange: () => (a ? ei(t) : er(t)),
              }),
          })
        : null;
}
async function er(e) {
    e(!0), await f.Z.setAccountFlag(B.c.USE_NEW_NOTIFICATIONS, !0), e(!1);
}
async function ei(e) {
    e(!0),
        c.K.set("turnedOffNewNotifications", !0),
        w.default.track(Z.rMx.NOTIFICATION_MIGRATION_OPTOUT, {
            num_guilds_with_new_setting: C.Z.getGuildsArray().filter(
                (e) => P.ZP.resolveGuildUnreadSetting(e) === F.i.ONLY_MENTIONS,
            ).length,
        }),
        await f.Z.setAccountFlag(B.c.USE_NEW_NOTIFICATIONS, !1),
        e(!1);
}
function ea(e) {
    let t = (0, y.p)();
    return (0, r.jsx)($, z(W({}, e), { focusMode: t }));
}
function eo() {
    let e = (0, s.cj)([N.Z], () => ({
        disableUnreadBadge: N.Z.getDisableUnreadBadge(),
        taskbarFlash: N.Z.taskbarFlash,
        disabledSounds: N.Z.getDisabledSounds(),
        disableAllSounds: N.Z.getDisableAllSounds(),
        desktopType: N.Z.getDesktopType(),
        ttsType: N.Z.getTTSType(),
        notifyMessagesInSelectedChannel: N.Z.getNotifyMessagesInSelectedChannel(),
    }));
    return (0, r.jsx)(ea, z(W({}, e), { afkTimeout: j.CM.useSetting() }));
}
function es() {
    let e = j.fz.useSetting(),
        t = [
            {
                name: V.intl.string(V.t["9x/RtT"]),
                value: l.Ns.NOTIFICATIONS_ENABLED,
            },
            {
                name: V.intl.string(V.t.fJAbQd),
                value: l.Ns.ONLY_DMS,
            },
            {
                name: V.intl.string(V.t["xu+UDU"]),
                value: l.Ns.NOTIFICATIONS_DISABLED,
            },
        ],
        n = (t) => {
            (0, S.MR)(t.value, e);
        };
    return v.Z.getCurrentConfig({ location: "webSettings" }).enableInAppNotifications
        ? (0, r.jsxs)(I.F, {
              setting: G.s6.NOTIFICATIONS_REACTIONS,
              children: [
                  (0, r.jsx)(u.FXm, {
                      label: V.intl.string(V.t.Rq0NFs),
                      description: V.intl.string(V.t.oWF6eQ),
                      options: t,
                      onChange: (e) => n({ value: e }),
                      value: e,
                  }),
                  (0, r.jsx)(u.izJ, { gap: 16 }),
              ],
          })
        : null;
}
function el() {
    let e = j.d8.useSetting(),
        t = j.JN.useSetting();
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(I.F, {
                setting: G.s6.NOTIFICATIONS_VOICE_ACTIVITY,
                children: (0, r.jsx)(u.rsf, {
                    label: V.intl.string(V.t.wtk08S),
                    description: V.intl.string(V.t.rngMNx),
                    checked: e,
                    onChange: A.I,
                }),
            }),
            (0, r.jsx)(I.F, {
                setting: G.s6.NOTIFICATIONS_GO_LIVE,
                children: (0, r.jsx)(u.rsf, {
                    label: V.intl.string(V.t.pW4TMp),
                    description: V.intl.string(V.t["H+WYqZ"]),
                    checked: t,
                    onChange: j.JN.updateSetting,
                }),
            }),
        ],
    });
}
function ec() {
    let e = j.vc.useSetting();
    return (0, r.jsx)(I.F, {
        setting: G.s6.NOTIFICATIONS_FRIEND_ANNIVERSARY,
        children: (0, r.jsx)(u.rsf, {
            label: V.intl.string(V.t.hi4dSk),
            description: V.intl.string(V.t["00TNo7"]),
            badge: "beta",
            checked: e,
            onChange: j.vc.updateSetting,
        }),
    });
}
function eu() {
    let e = j.JY.useSetting();
    return (0, r.jsx)(I.F, {
        setting: G.s6.NOTIFICATIONS_FRIEND_ONLINE,
        children: (0, r.jsx)(u.rsf, {
            label: V.intl.string(V.t["uvIi/4"]),
            description: V.intl.string(V.t.E6O06k),
            checked: e,
            onChange: O.N,
        }),
    });
}
function ed() {
    let e = j.V6.useSetting();
    return (0, r.jsx)(I.F, {
        setting: G.s6.NOTIFICATIONS_USER_RESURRECTION,
        children: (0, r.jsx)(u.rsf, {
            label: V.intl.string(V.t.Zyn45S),
            description: V.intl.string(V.t.XdihbD),
            checked: e,
            onChange: h.F,
        }),
    });
}
function ef() {
    let e = j.p1.useSetting();
    return (0, r.jsx)(I.F, {
        setting: G.s6.NOTIFICATIONS_GAME_UPDATE,
        children: (0, r.jsx)(u.rsf, {
            label: V.intl.string(H.default["3TO4/r"]),
            description: V.intl.string(H.default.diGDe0),
            checked: e,
            onChange: m.c,
        }),
    });
}
