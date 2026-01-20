n.d(t, { Z: () => el }), n(539854), n(388685);
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
    h = n(820942),
    m = n(556297),
    g = n(487419),
    E = n(197344),
    b = n(476756),
    y = n(734934),
    O = n(891353),
    v = n(801056),
    S = n(766677),
    I = n(666383),
    T = n(995774),
    C = n(921801),
    A = n(460181),
    N = n(210176),
    P = n(430824),
    w = n(292959),
    R = n(9156),
    D = n(594174),
    x = n(626135),
    L = n(912101),
    j = n(709054),
    M = n(45640),
    k = n(695346),
    U = n(675478),
    G = n(273313),
    Z = n(33656),
    F = n(726985),
    B = n(981631),
    V = n(468788),
    H = n(490897),
    Y = n(388032),
    W = n(307139);
function K(e, t, n) {
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
function z(e) {
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
                K(e, t, n[t]);
            });
    }
    return e;
}
function q(e, t) {
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
function Q(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : q(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function X(e) {
    L.Z.requestPermission((t) => {
        let n = t ? B.$Ab.ENABLED : B.$Ab.BLOCKED;
        d.default.setPermissionsState(n, e);
    });
}
function J(e) {
    let { label: t, enabled: n, disabled: i, onPreview: a, onChange: o } = e;
    return (0, r.jsx)(u.rsf, {
        label: t,
        checked: n,
        onChange: o,
        disabled: i,
        description: Y.intl.format(Y.t.OOiGCM, { onClick: a }),
    });
}
function $(e) {
    let { disabledSounds: t, disableAllSounds: n, notifyMessagesInSelectedChannel: a } = e,
        o = i.useRef(null),
        s = (0, y.p)(),
        l = i.useCallback((e, t) => {
            t.stopPropagation(), t.preventDefault(), null != o.current && o.current.stop(), (o.current = (0, A.GN)(e));
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
                label: Y.intl.string(Y.t.pz71xC),
                sound: "message1",
                focusModeDisabled: s,
            },
            {
                label: Y.intl.string(Y.t.hK51Yg),
                sound: "deafen",
            },
            {
                label: Y.intl.string(Y.t.XiejaJ),
                sound: "undeafen",
            },
            {
                label: Y.intl.string(Y.t.w4m945),
                sound: "mute",
            },
            {
                label: Y.intl.string(Y.t.YqAjXy),
                sound: "unmute",
            },
            {
                label: Y.intl.string(Y.t.JoTq8n),
                sound: "camera_on",
            },
            {
                label: Y.intl.string(Y.t["8P6tQ6"]),
                sound: "camera_off",
            },
            {
                label: Y.intl.string(Y.t["juL9/L"]),
                sound: "disconnect",
            },
            {
                label: Y.intl.string(Y.t.x98vQq),
                sound: "ptt_start",
            },
            {
                label: Y.intl.string(Y.t["1HjRqC"]),
                sound: "ptt_stop",
            },
            {
                label: Y.intl.string(Y.t["9JB1Ck"]),
                sound: "user_join",
            },
            {
                label: Y.intl.string(Y.t.KUBBNt),
                sound: "user_leave",
            },
            {
                label: Y.intl.string(Y.t.EZjqUT),
                sound: "user_moved",
            },
            {
                label: Y.intl.string(Y.t.LnNlQh),
                sound: "call_calling",
            },
            {
                label: Y.intl.string(Y.t.XBrJT6),
                sound: "call_ringing",
            },
            {
                label: Y.intl.string(Y.t.Nd8P5y),
                sound: "stream_started",
            },
            {
                label: Y.intl.string(Y.t["9bYj+G"]),
                sound: "stream_ended",
            },
            {
                label: Y.intl.string(Y.t.KccUI1),
                sound: "stream_user_joined",
            },
            {
                label: Y.intl.string(Y.t.dsjkiN),
                sound: "stream_user_left",
            },
            {
                label: Y.intl.string(Y.t.nFOcf9),
                sound: "activity_launch",
            },
            {
                label: Y.intl.string(Y.t["a6lw/u"]),
                sound: "activity_end",
            },
            {
                label: Y.intl.string(Y.t.KaFxrY),
                sound: "activity_user_join",
            },
            {
                label: Y.intl.string(Y.t.S14z9n),
                sound: "activity_user_left",
            },
            {
                label: Y.intl.string(Y.t.CP3DC3),
                sound: "reconnect",
            },
        ],
        p = null != E.Z.useHolidaySoundpack();
    return (0, r.jsx)(C.F, {
        setting: F.s6.NOTIFICATIONS_SOUNDS,
        children: (0, r.jsx)("div", {
            children: (0, r.jsxs)(u.C3N, {
                label: Y.intl.string(Y.t.MKWyKc),
                children: [
                    p ? (0, r.jsx)(b.Z, {}) : null,
                    (0, r.jsx)(u.rsf, {
                        label: Y.intl.string(Y.t.lF5GGe),
                        description: Y.intl.string(Y.t["7oXUim"]),
                        checked: a && !n,
                        onChange: d.default.setNotifyMessagesInSelectedChannel,
                        disabled: n,
                    }),
                    (0, r.jsx)(u.rsf, {
                        label: Y.intl.string(Y.t["2ZhCOd"]),
                        description: Y.intl.string(Y.t["+B0XLE"]),
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
                                        J,
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
                                              children: Y.intl.string(Y.t.cIRG0s),
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
function ee() {
    let e = (0, s.e7)([g.Z], () => g.Z.getGuildAlertSettings()),
        [t, n] = i.useState(null),
        a = j.default.keys(e).map((t) => {
            let n = e[t];
            return {
                id: n.guildId,
                label: n.guildName,
                value: n.guildId,
            };
        });
    return 0 === Object.keys(e).length
        ? null
        : (0, r.jsx)(C.F, {
              setting: F.s6.NOTIFICATIONS_COMMUNITY_ACTIVITY_ALERTS,
              children: (0, r.jsxs)(u.C3N, {
                  label: Y.intl.string(Y.t.D9yVAH),
                  description: Y.intl.string(Y.t["0PhAOH"]),
                  children: [
                      (0, r.jsx)(u.PhF, {
                          label: Y.intl.string(Y.t.Q0PsXX),
                          value: t,
                          onSelectionChange: n,
                          options: a,
                          selectionMode: "single",
                          fullWidth: !0,
                      }),
                      null != t
                          ? (0, r.jsxs)(r.Fragment, {
                                children: [
                                    (0, r.jsx)(C.F, {
                                        setting: F.s6.NOTIFICATIONS_COMMUNITY_IN_APP_ALERTS,
                                        children: (0, r.jsx)(u.rsf, {
                                            label: Y.intl.string(Y.t.u6dc5B),
                                            description: Y.intl.string(Y.t.z8Td48),
                                            checked: !e[t].disableRaidAlertNag,
                                            onChange: () => {
                                                (0, U.PS)(
                                                    t,
                                                    (e) => {
                                                        e.disableRaidAlertNag = !e.disableRaidAlertNag;
                                                    },
                                                    U.fy.INFREQUENT_USER_ACTION,
                                                );
                                            },
                                        }),
                                    }),
                                    (0, r.jsx)(C.F, {
                                        setting: F.s6.NOTIFICATIONS_COMMUNITY_PUSH_NOTIFICATIONS,
                                        children: (0, r.jsx)(u.rsf, {
                                            label: Y.intl.string(Y.t.P8MG6q),
                                            description: Y.intl.string(Y.t.PyxXs8),
                                            checked: !e[t].disableRaidAlertPush,
                                            onChange: () => {
                                                (0, U.PS)(
                                                    t,
                                                    (e) => {
                                                        e.disableRaidAlertPush = !e.disableRaidAlertPush;
                                                    },
                                                    U.fy.INFREQUENT_USER_ACTION,
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
class et extends i.PureComponent {
    handleDesktopChange(e) {
        let t = e ? B.qrD.ALL : B.qrD.NEVER;
        t !== B.qrD.NEVER ? X("UserSettingsModal") : d.default.setDesktopType(t);
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
            d = M.Z.getCurrentConfig({ location: "Messages" }).enabled || 0 === t ? 0 : 1,
            f = o()
                .range(d, 11)
                .map((e) => ({
                    id: "".concat(e, "min"),
                    value: 60 * e,
                    label:
                        0 === e ? Y.intl.string(Y.t["0QN7cZ"]) : Y.intl.formatToPlainString(Y.t.iXLF9W, { minutes: e }),
                }));
        return (0, r.jsx)(G.Z, {
            title: Y.intl.string(Y.t.HcoRu0),
            children: (0, r.jsxs)(u.Kqy, {
                gap: 16,
                children: [
                    (0, r.jsx)(C.F, {
                        setting: F.s6.NOTIFICATIONS_ENABLE_DESKTOP,
                        children: (0, r.jsx)(u.rsf, {
                            label: Y.intl.string(Y.t["/0WCll"]),
                            checked: e !== B.qrD.NEVER && !c,
                            description: c ? Y.intl.string(Y.t.cIRG0s) : Y.intl.string(Y.t.wF9ih3),
                            onChange: this.handleDesktopChange,
                            disabled: c,
                        }),
                    }),
                    (0, r.jsx)(er, {}),
                    (0, r.jsx)(C.F, {
                        setting: F.s6.NOTIFICATIONS_UNREAD_MESSAGE_BADGE,
                        children: (0, r.jsx)(u.rsf, {
                            label: Y.intl.string(Y.t.VH8AIJ),
                            description: Y.intl.string(Y.t["9K4qwX"]),
                            checked: !n,
                            onChange: this.handleToggleShowUnreadBadge,
                        }),
                    }),
                    (0, r.jsx)(C.F, {
                        setting: F.s6.NOTIFICATIONS_ENABLE_TASKBAR_FLASHING,
                        children: (0, r.jsx)(u.rsf, {
                            label: Y.intl.string(Y.t.xSmFQG),
                            description: Y.intl.string(Y.t.bd4j4x),
                            checked: i,
                            onChange: this.handleToggleShowFlash,
                        }),
                    }),
                    (0, r.jsx)(ei, {}),
                    (0, r.jsx)(eu, {}),
                    (0, r.jsx)(ed, {}),
                    (0, r.jsx)(ef, {}),
                    (0, r.jsx)(eh, {}),
                    (0, r.jsx)(ep, {}),
                    (0, r.jsx)(e_, {}),
                    (0, r.jsx)(ec, {}),
                    (0, r.jsxs)(C.F, {
                        setting: F.s6.NOTIFICATIONS_PUSH_INACTIVE_TIMEOUT,
                        children: [
                            (0, r.jsx)(u.PhF, {
                                label: Y.intl.string(Y.t.TTvjd9),
                                description: Y.intl.string(Y.t.Xytv9C),
                                value: t,
                                onSelectionChange: k.CM.updateSetting,
                                options: f,
                                selectionMode: "single",
                                fullWidth: !0,
                            }),
                            (0, r.jsx)(u.izJ, { gap: 16 }),
                        ],
                    }),
                    this.renderTTS(),
                    (0, r.jsx)(ee, {}),
                    (0, r.jsx)(u.izJ, { gap: 24 }),
                    (0, r.jsx)($, {
                        disabledSounds: a,
                        disableAllSounds: s,
                        notifyMessagesInSelectedChannel: l,
                    }),
                    (0, r.jsx)(Z.Z, {}),
                ],
            }),
        });
    }
    constructor(...e) {
        super(...e),
            K(this, "handleToggleShowUnreadBadge", () => {
                d.default.setDisableUnreadBadge(!this.props.disableUnreadBadge);
            }),
            K(this, "handleToggleShowFlash", () => {
                d.default.setTaskbarFlash(!this.props.taskbarFlash);
            }),
            K(this, "renderTTS", () => {
                if (!p.Zh) return null;
                let e = [
                    {
                        name: Y.intl.string(Y.t.B1AGeJ),
                        value: B.PrB.ALL_CHANNELS,
                    },
                    {
                        name: Y.intl.string(Y.t.uM2rNr),
                        value: B.PrB.SELECTED_CHANNEL,
                    },
                    {
                        name: Y.intl.string(Y.t.DYO5Oi),
                        value: B.PrB.NEVER,
                    },
                ];
                return (0, r.jsxs)(C.F, {
                    setting: F.s6.NOTIFICATIONS_TEXT_TO_SPEECH,
                    children: [
                        (0, r.jsx)(u.FXm, {
                            label: Y.intl.string(Y.t.VIm5MO),
                            description: Y.intl.string(Y.t["+4dnA5"]),
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
let en = (0, _.B)({
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
function er() {
    let e = en.useExperiment({ location: "settings" }, { autoTrackExposure: !1 }).enabled,
        t = (0, s.e7)([R.ZP], () => R.ZP.mentionOnAllMessages);
    return e
        ? (0, r.jsx)(C.F, {
              setting: F.s6.NOTIFICATIONS_MENTION_ON_ALL_MESSAGES,
              children: (0, r.jsx)(u.rsf, {
                  label: "Mention on all messages?",
                  description:
                      "Increments the mention count when receiving a message in a channel set to 'All Messages'",
                  checked: t,
                  onChange: (e) => {
                      f.Z.setAccountFlag(V.c.MENTION_ON_ALL_MESSAGES, e);
                  },
              }),
          })
        : null;
}
function ei() {
    let [e, t] = i.useState(!1),
        n = (0, s.e7)([D.default], () => {
            var e;
            return null == (e = D.default.getCurrentUser()) ? void 0 : e.isStaff();
        }),
        a = (0, s.e7)([R.ZP], () => R.ZP.useNewNotifications);
    return a || n
        ? (0, r.jsx)(C.F, {
              setting: F.s6.NOTIFICATIONS_UNREAD_SETTINGS,
              children: (0, r.jsx)(u.rsf, {
                  label: "New Unreads Setting (Experimental)",
                  description:
                      "Turns off the new unread setting that allows you to pick which channels are most important in a server.",
                  checked: a,
                  disabled: e,
                  onChange: () => (a ? eo(t) : ea(t)),
              }),
          })
        : null;
}
async function ea(e) {
    e(!0), await f.Z.setAccountFlag(V.c.USE_NEW_NOTIFICATIONS, !0), e(!1);
}
async function eo(e) {
    e(!0),
        c.K.set("turnedOffNewNotifications", !0),
        x.default.track(B.rMx.NOTIFICATION_MIGRATION_OPTOUT, {
            num_guilds_with_new_setting: P.Z.getGuildsArray().filter(
                (e) => R.ZP.resolveGuildUnreadSetting(e) === H.i.ONLY_MENTIONS,
            ).length,
        }),
        await f.Z.setAccountFlag(V.c.USE_NEW_NOTIFICATIONS, !1),
        e(!1);
}
function es(e) {
    let t = (0, y.p)();
    return (0, r.jsx)(et, Q(z({}, e), { focusMode: t }));
}
function el() {
    let e = (0, s.cj)([w.Z], () => ({
        disableUnreadBadge: w.Z.getDisableUnreadBadge(),
        taskbarFlash: w.Z.taskbarFlash,
        disabledSounds: w.Z.getDisabledSounds(),
        disableAllSounds: w.Z.getDisableAllSounds(),
        desktopType: w.Z.getDesktopType(),
        ttsType: w.Z.getTTSType(),
        notifyMessagesInSelectedChannel: w.Z.getNotifyMessagesInSelectedChannel(),
    }));
    return (0, r.jsx)(es, Q(z({}, e), { afkTimeout: k.CM.useSetting() }));
}
function ec() {
    let e = k.fz.useSetting(),
        t = [
            {
                name: Y.intl.string(Y.t["9x/RtT"]),
                value: l.Ns.NOTIFICATIONS_ENABLED,
            },
            {
                name: Y.intl.string(Y.t.fJAbQd),
                value: l.Ns.ONLY_DMS,
            },
            {
                name: Y.intl.string(Y.t["xu+UDU"]),
                value: l.Ns.NOTIFICATIONS_DISABLED,
            },
        ],
        n = (t) => {
            (0, T.MR)(t.value, e);
        };
    return (0, r.jsxs)(C.F, {
        setting: F.s6.NOTIFICATIONS_REACTIONS,
        children: [
            (0, r.jsx)(u.FXm, {
                label: Y.intl.string(Y.t.Rq0NFs),
                description: Y.intl.string(Y.t.oWF6eQ),
                options: t,
                onChange: (e) => n({ value: e }),
                value: e,
            }),
            (0, r.jsx)(u.izJ, { gap: 16 }),
        ],
    });
}
function eu() {
    let e = k.d8.useSetting(),
        t = k.JN.useSetting();
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(C.F, {
                setting: F.s6.NOTIFICATIONS_VOICE_ACTIVITY,
                children: (0, r.jsx)(u.rsf, {
                    label: Y.intl.string(Y.t.wtk08S),
                    description: Y.intl.string(Y.t.rngMNx),
                    checked: e,
                    onChange: N.I,
                }),
            }),
            (0, r.jsx)(C.F, {
                setting: F.s6.NOTIFICATIONS_GO_LIVE,
                children: (0, r.jsx)(u.rsf, {
                    label: Y.intl.string(Y.t.pW4TMp),
                    description: Y.intl.string(Y.t["H+WYqZ"]),
                    checked: t,
                    onChange: m.O,
                }),
            }),
        ],
    });
}
function ed() {
    let e = k.vc.useSetting();
    return (0, r.jsx)(C.F, {
        setting: F.s6.NOTIFICATIONS_FRIEND_ANNIVERSARY,
        children: (0, r.jsx)(u.rsf, {
            label: Y.intl.string(Y.t.hi4dSk),
            description: Y.intl.string(Y.t["00TNo7"]),
            badge: "beta",
            checked: e,
            onChange: I.$,
        }),
    });
}
function ef() {
    let e = k.JY.useSetting();
    return (0, r.jsx)(C.F, {
        setting: F.s6.NOTIFICATIONS_FRIEND_ONLINE,
        children: (0, r.jsx)(u.rsf, {
            label: Y.intl.string(Y.t["uvIi/4"]),
            description: Y.intl.string(Y.t.E6O06k),
            checked: e,
            onChange: O.N,
        }),
    });
}
function ep() {
    let e = k.p1.useSetting();
    return (0, r.jsx)(C.F, {
        setting: F.s6.NOTIFICATIONS_GAME_UPDATE,
        children: (0, r.jsx)(u.rsf, {
            label: Y.intl.string(W.default["3TO4/r"]),
            description: Y.intl.string(W.default.diGDe0),
            checked: e,
            onChange: h.c,
        }),
    });
}
function e_() {
    let e = k.a7.useSetting();
    return (0, r.jsx)(C.F, {
        setting: F.s6.NOTIFICATIONS_PROFILE_UPDATES,
        children: (0, r.jsx)(u.rsf, {
            label: Y.intl.string(Y.t.VxBO2F),
            description: Y.intl.string(Y.t.F4VeBe),
            checked: e,
            onChange: v.A,
        }),
    });
}
function eh() {
    let e = k.tT.useSetting();
    return (0, r.jsx)(C.F, {
        setting: F.s6.NOTIFICATIONS_SERVER_TRENDING,
        children: (0, r.jsx)(u.rsf, {
            label: Y.intl.string(Y.t.Q3VWjI),
            description: Y.intl.string(Y.t.Wc1RcU),
            checked: e,
            onChange: S.i,
        }),
    });
}
