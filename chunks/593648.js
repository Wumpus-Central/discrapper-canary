n.d(t, { Z: () => es }), n(539854), n(388685);
var r = n(54381),
    i = n(473749),
    a = n(392711),
    o = n.n(a),
    s = n(442837),
    l = n(524437),
    c = n(433517),
    u = n(199849),
    d = n(481060),
    f = n(292556),
    p = n(87051),
    _ = n(419363),
    m = n(818083),
    h = n(820942),
    g = n(705579),
    E = n(487419),
    b = n(197344),
    y = n(476756),
    O = n(734934),
    v = n(891353),
    S = n(106371),
    I = n(995774),
    T = n(921801),
    A = n(460181),
    C = n(210176),
    N = n(430824),
    P = n(292959),
    R = n(9156),
    w = n(594174),
    D = n(626135),
    x = n(912101),
    L = n(709054),
    j = n(45640),
    M = n(695346),
    k = n(675478),
    U = n(273313),
    G = n(33656),
    Z = n(726985),
    B = n(981631),
    F = n(468788),
    V = n(490897),
    H = n(388032),
    Y = n(966470);
function W(e, t, n) {
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
function K(e) {
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
                W(e, t, n[t]);
            });
    }
    return e;
}
function z(e, t) {
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
function q(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : z(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function Q(e) {
    x.Z.requestPermission((t) => {
        let n = t ? B.$Ab.ENABLED : B.$Ab.BLOCKED;
        f.default.setPermissionsState(n, e);
    });
}
function X(e) {
    let { label: t, enabled: n, disabled: i, onPreview: a, onChange: o } = e;
    return (0, r.jsx)(d.rsf, {
        label: t,
        checked: n,
        onChange: o,
        disabled: i,
        description: H.intl.format(H.t.OOiGCM, { onClick: a }),
    });
}
function J(e) {
    let { disabledSounds: t, disableAllSounds: n, notifyMessagesInSelectedChannel: a } = e,
        o = i.useRef(null),
        s = (0, O.p)(),
        l = i.useCallback((e, t) => {
            t.stopPropagation(), t.preventDefault(), null != o.current && o.current.stop(), (o.current = (0, A.GN)(e));
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
    let u = [
            {
                label: H.intl.string(H.t.pz71xC),
                sound: "message1",
                focusModeDisabled: s,
            },
            {
                label: H.intl.string(H.t.hK51Yg),
                sound: "deafen",
            },
            {
                label: H.intl.string(H.t.XiejaJ),
                sound: "undeafen",
            },
            {
                label: H.intl.string(H.t.w4m945),
                sound: "mute",
            },
            {
                label: H.intl.string(H.t.YqAjXy),
                sound: "unmute",
            },
            {
                label: H.intl.string(H.t.JoTq8n),
                sound: "camera_on",
            },
            {
                label: H.intl.string(H.t["8P6tQ6"]),
                sound: "camera_off",
            },
            {
                label: H.intl.string(H.t["juL9/L"]),
                sound: "disconnect",
            },
            {
                label: H.intl.string(H.t.x98vQq),
                sound: "ptt_start",
            },
            {
                label: H.intl.string(H.t["1HjRqC"]),
                sound: "ptt_stop",
            },
            {
                label: H.intl.string(H.t["9JB1Ck"]),
                sound: "user_join",
            },
            {
                label: H.intl.string(H.t.KUBBNt),
                sound: "user_leave",
            },
            {
                label: H.intl.string(H.t.EZjqUT),
                sound: "user_moved",
            },
            {
                label: H.intl.string(H.t.LnNlQh),
                sound: "call_calling",
            },
            {
                label: H.intl.string(H.t.XBrJT6),
                sound: "call_ringing",
            },
            {
                label: H.intl.string(H.t.Nd8P5y),
                sound: "stream_started",
            },
            {
                label: H.intl.string(H.t["9bYj+G"]),
                sound: "stream_ended",
            },
            {
                label: H.intl.string(H.t.KccUI1),
                sound: "stream_user_joined",
            },
            {
                label: H.intl.string(H.t.dsjkiN),
                sound: "stream_user_left",
            },
            {
                label: H.intl.string(H.t.nFOcf9),
                sound: "activity_launch",
            },
            {
                label: H.intl.string(H.t["a6lw/u"]),
                sound: "activity_end",
            },
            {
                label: H.intl.string(H.t.KaFxrY),
                sound: "activity_user_join",
            },
            {
                label: H.intl.string(H.t.S14z9n),
                sound: "activity_user_left",
            },
            {
                label: H.intl.string(H.t.CP3DC3),
                sound: "reconnect",
            },
        ],
        p = null != b.Z.useHolidaySoundpack();
    return (0, r.jsx)(T.F, {
        setting: Z.s6.NOTIFICATIONS_SOUNDS,
        children: (0, r.jsx)("div", {
            children: (0, r.jsxs)(d.C3N, {
                label: H.intl.string(H.t.MKWyKc),
                children: [
                    p ? (0, r.jsx)(y.Z, {}) : null,
                    (0, r.jsx)(d.rsf, {
                        label: H.intl.string(H.t.lF5GGe),
                        description: H.intl.string(H.t["7oXUim"]),
                        checked: a && !n,
                        onChange: f.default.setNotifyMessagesInSelectedChannel,
                        disabled: n,
                    }),
                    (0, r.jsx)(d.rsf, {
                        label: H.intl.string(H.t["2ZhCOd"]),
                        description: H.intl.string(H.t["+B0XLE"]),
                        checked: n,
                        onChange: f.default.toggleDisableAllSounds,
                    }),
                    u.map((e, i) => {
                        let { label: a, sound: o, focusModeDisabled: s } = e;
                        return (0, r.jsxs)(
                            d.Kqy,
                            {
                                children: [
                                    i > 0 && (0, r.jsx)(d.izJ, { gap: 8 }),
                                    (0, r.jsx)(
                                        X,
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
                                        ? (0, r.jsx)(d.Wn, {
                                              messageType: d.QYI.WARNING,
                                              children: H.intl.string(H.t.cIRG0s),
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
function $() {
    let e = (0, s.e7)([E.Z], () => E.Z.getGuildAlertSettings()),
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
        : (0, r.jsx)(T.F, {
              setting: Z.s6.NOTIFICATIONS_COMMUNITY_ACTIVITY_ALERTS,
              children: (0, r.jsxs)(d.C3N, {
                  label: H.intl.string(H.t.D9yVAH),
                  description: H.intl.string(H.t["0PhAOH"]),
                  children: [
                      (0, r.jsx)(u.y6, {
                          label: H.intl.string(H.t.Q0PsXX),
                          value: t,
                          onChange: (e) => {
                              n(e);
                          },
                          options: a,
                      }),
                      null != t
                          ? (0, r.jsxs)(r.Fragment, {
                                children: [
                                    (0, r.jsx)(T.F, {
                                        setting: Z.s6.NOTIFICATIONS_COMMUNITY_IN_APP_ALERTS,
                                        children: (0, r.jsx)(d.rsf, {
                                            label: H.intl.string(H.t.u6dc5B),
                                            description: H.intl.string(H.t.z8Td48),
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
                                    (0, r.jsx)(T.F, {
                                        setting: Z.s6.NOTIFICATIONS_COMMUNITY_PUSH_NOTIFICATIONS,
                                        children: (0, r.jsx)(d.rsf, {
                                            label: H.intl.string(H.t.P8MG6q),
                                            description: H.intl.string(H.t.PyxXs8),
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
class ee extends i.PureComponent {
    handleDesktopChange(e) {
        let t = e ? B.qrD.ALL : B.qrD.NEVER;
        t !== B.qrD.NEVER ? Q("UserSettingsModal") : f.default.setDesktopType(t);
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
            f = j.Z.getCurrentConfig({ location: "Messages" }).enabled || 0 === t ? 0 : 1,
            p = o()
                .range(f, 11)
                .map((e) => ({
                    value: 60 * e,
                    label:
                        0 === e ? H.intl.string(H.t["0QN7cZ"]) : H.intl.formatToPlainString(H.t.iXLF9W, { minutes: e }),
                }));
        return (0, r.jsx)(U.Z, {
            title: H.intl.string(H.t.HcoRu0),
            children: (0, r.jsxs)(d.Kqy, {
                gap: 16,
                children: [
                    (0, r.jsx)(T.F, {
                        setting: Z.s6.NOTIFICATIONS_ENABLE_DESKTOP,
                        children: (0, r.jsx)(d.rsf, {
                            label: H.intl.string(H.t["/0WCll"]),
                            checked: e !== B.qrD.NEVER && !c,
                            description: c ? H.intl.string(H.t.cIRG0s) : H.intl.string(H.t.wF9ih3),
                            onChange: this.handleDesktopChange,
                            disabled: c,
                        }),
                    }),
                    (0, r.jsx)(en, {}),
                    (0, r.jsx)(T.F, {
                        setting: Z.s6.NOTIFICATIONS_UNREAD_MESSAGE_BADGE,
                        children: (0, r.jsx)(d.rsf, {
                            label: H.intl.string(H.t.VH8AIJ),
                            description: H.intl.string(H.t["9K4qwX"]),
                            checked: !n,
                            onChange: this.handleToggleShowUnreadBadge,
                        }),
                    }),
                    (0, r.jsx)(T.F, {
                        setting: Z.s6.NOTIFICATIONS_ENABLE_TASKBAR_FLASHING,
                        children: (0, r.jsx)(d.rsf, {
                            label: H.intl.string(H.t.xSmFQG),
                            description: H.intl.string(H.t.bd4j4x),
                            checked: i,
                            onChange: this.handleToggleShowFlash,
                        }),
                    }),
                    (0, r.jsx)(er, {}),
                    (0, r.jsx)(ec, {}),
                    (0, r.jsx)(eu, {}),
                    (0, r.jsx)(ed, {}),
                    (0, r.jsx)(ef, {}),
                    (0, r.jsx)(ep, {}),
                    (0, r.jsx)(el, {}),
                    (0, r.jsxs)(T.F, {
                        setting: Z.s6.NOTIFICATIONS_PUSH_INACTIVE_TIMEOUT,
                        children: [
                            (0, r.jsx)(u.y6, {
                                label: H.intl.string(H.t.TTvjd9),
                                description: H.intl.string(H.t.Xytv9C),
                                value: t,
                                onChange: M.CM.updateSetting,
                                options: p,
                            }),
                            (0, r.jsx)(d.izJ, { gap: 16 }),
                        ],
                    }),
                    this.renderTTS(),
                    (0, r.jsx)($, {}),
                    (0, r.jsx)(d.izJ, { gap: 24 }),
                    (0, r.jsx)(J, {
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
            W(this, "handleToggleShowUnreadBadge", () => {
                f.default.setDisableUnreadBadge(!this.props.disableUnreadBadge);
            }),
            W(this, "handleToggleShowFlash", () => {
                f.default.setTaskbarFlash(!this.props.taskbarFlash);
            }),
            W(this, "renderTTS", () => {
                if (!_.Zh) return null;
                let e = [
                    {
                        name: H.intl.string(H.t.B1AGeJ),
                        value: B.PrB.ALL_CHANNELS,
                    },
                    {
                        name: H.intl.string(H.t.uM2rNr),
                        value: B.PrB.SELECTED_CHANNEL,
                    },
                    {
                        name: H.intl.string(H.t.DYO5Oi),
                        value: B.PrB.NEVER,
                    },
                ];
                return (0, r.jsxs)(T.F, {
                    setting: Z.s6.NOTIFICATIONS_TEXT_TO_SPEECH,
                    children: [
                        (0, r.jsx)(d.FXm, {
                            label: H.intl.string(H.t.VIm5MO),
                            description: H.intl.string(H.t["+4dnA5"]),
                            options: e,
                            onChange: this.handleTTSChange,
                            value: this.props.ttsType,
                        }),
                        (0, r.jsx)(d.izJ, { gap: 16 }),
                    ],
                });
            });
    }
}
let et = (0, m.B)({
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
function en() {
    let e = et.useExperiment({ location: "settings" }, { autoTrackExposure: !1 }).enabled,
        t = (0, s.e7)([R.ZP], () => R.ZP.mentionOnAllMessages);
    return e
        ? (0, r.jsx)(T.F, {
              setting: Z.s6.NOTIFICATIONS_MENTION_ON_ALL_MESSAGES,
              children: (0, r.jsx)(d.rsf, {
                  label: "Mention on all messages?",
                  description:
                      "Increments the mention count when receiving a message in a channel set to 'All Messages'",
                  checked: t,
                  onChange: (e) => {
                      p.Z.setAccountFlag(F.c.MENTION_ON_ALL_MESSAGES, e);
                  },
              }),
          })
        : null;
}
function er() {
    let [e, t] = i.useState(!1),
        n = (0, s.e7)([w.default], () => {
            var e;
            return null == (e = w.default.getCurrentUser()) ? void 0 : e.isStaff();
        }),
        a = (0, s.e7)([R.ZP], () => R.ZP.useNewNotifications);
    return a || n
        ? (0, r.jsx)(T.F, {
              setting: Z.s6.NOTIFICATIONS_UNREAD_SETTINGS,
              children: (0, r.jsx)(d.rsf, {
                  label: "New Unreads Setting (Experimental)",
                  description:
                      "Turns off the new unread setting that allows you to pick which channels are most important in a server.",
                  checked: a,
                  disabled: e,
                  onChange: () => (a ? ea(t) : ei(t)),
              }),
          })
        : null;
}
async function ei(e) {
    e(!0), await p.Z.setAccountFlag(F.c.USE_NEW_NOTIFICATIONS, !0), e(!1);
}
async function ea(e) {
    e(!0),
        c.K.set("turnedOffNewNotifications", !0),
        D.default.track(B.rMx.NOTIFICATION_MIGRATION_OPTOUT, {
            num_guilds_with_new_setting: N.Z.getGuildsArray().filter(
                (e) => R.ZP.resolveGuildUnreadSetting(e) === V.i.ONLY_MENTIONS,
            ).length,
        }),
        await p.Z.setAccountFlag(F.c.USE_NEW_NOTIFICATIONS, !1),
        e(!1);
}
function eo(e) {
    let t = (0, O.p)();
    return (0, r.jsx)(ee, q(K({}, e), { focusMode: t }));
}
function es() {
    let e = (0, s.cj)([P.Z], () => ({
        disableUnreadBadge: P.Z.getDisableUnreadBadge(),
        taskbarFlash: P.Z.taskbarFlash,
        disabledSounds: P.Z.getDisabledSounds(),
        disableAllSounds: P.Z.getDisableAllSounds(),
        desktopType: P.Z.getDesktopType(),
        ttsType: P.Z.getTTSType(),
        notifyMessagesInSelectedChannel: P.Z.getNotifyMessagesInSelectedChannel(),
    }));
    return (0, r.jsx)(eo, q(K({}, e), { afkTimeout: M.CM.useSetting() }));
}
function el() {
    let e = M.fz.useSetting(),
        t = [
            {
                name: H.intl.string(H.t["9x/RtT"]),
                value: l.Ns.NOTIFICATIONS_ENABLED,
            },
            {
                name: H.intl.string(H.t.fJAbQd),
                value: l.Ns.ONLY_DMS,
            },
            {
                name: H.intl.string(H.t["xu+UDU"]),
                value: l.Ns.NOTIFICATIONS_DISABLED,
            },
        ],
        n = (t) => {
            (0, I.MR)(t.value, e);
        };
    return S.Z.getCurrentConfig({ location: "webSettings" }).enableInAppNotifications
        ? (0, r.jsxs)(T.F, {
              setting: Z.s6.NOTIFICATIONS_REACTIONS,
              children: [
                  (0, r.jsx)(d.FXm, {
                      label: H.intl.string(H.t.Rq0NFs),
                      description: H.intl.string(H.t.oWF6eQ),
                      options: t,
                      onChange: (e) => n({ value: e }),
                      value: e,
                  }),
                  (0, r.jsx)(d.izJ, { gap: 16 }),
              ],
          })
        : null;
}
function ec() {
    let e = M.d8.useSetting(),
        t = M.JN.useSetting();
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(T.F, {
                setting: Z.s6.NOTIFICATIONS_VOICE_ACTIVITY,
                children: (0, r.jsx)(d.rsf, {
                    label: H.intl.string(H.t.wtk08S),
                    description: H.intl.string(H.t.rngMNx),
                    checked: e,
                    onChange: C.I,
                }),
            }),
            (0, r.jsx)(T.F, {
                setting: Z.s6.NOTIFICATIONS_GO_LIVE,
                children: (0, r.jsx)(d.rsf, {
                    label: H.intl.string(H.t.pW4TMp),
                    description: H.intl.string(H.t["H+WYqZ"]),
                    checked: t,
                    onChange: M.JN.updateSetting,
                }),
            }),
        ],
    });
}
function eu() {
    let e = M.vc.useSetting();
    return (0, r.jsx)(T.F, {
        setting: Z.s6.NOTIFICATIONS_FRIEND_ANNIVERSARY,
        children: (0, r.jsx)(d.rsf, {
            label: H.intl.string(H.t.hi4dSk),
            description: H.intl.string(H.t["00TNo7"]),
            badge: "beta",
            checked: e,
            onChange: M.vc.updateSetting,
        }),
    });
}
function ed() {
    let e = M.JY.useSetting();
    return (0, r.jsx)(T.F, {
        setting: Z.s6.NOTIFICATIONS_FRIEND_ONLINE,
        children: (0, r.jsx)(d.rsf, {
            label: H.intl.string(H.t["uvIi/4"]),
            description: H.intl.string(H.t.E6O06k),
            checked: e,
            onChange: v.N,
        }),
    });
}
function ef() {
    let e = M.V6.useSetting();
    return (0, r.jsx)(T.F, {
        setting: Z.s6.NOTIFICATIONS_USER_RESURRECTION,
        children: (0, r.jsx)(d.rsf, {
            label: H.intl.string(H.t.Zyn45S),
            description: H.intl.string(H.t.XdihbD),
            checked: e,
            onChange: g.F,
        }),
    });
}
function ep() {
    let e = M.p1.useSetting();
    return (0, r.jsx)(T.F, {
        setting: Z.s6.NOTIFICATIONS_GAME_UPDATE,
        children: (0, r.jsx)(d.rsf, {
            label: H.intl.string(Y.default["3TO4/r"]),
            description: H.intl.string(Y.default.diGDe0),
            checked: e,
            onChange: h.c,
        }),
    });
}
