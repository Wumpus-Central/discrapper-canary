n.d(t, { Z: () => eu }), n(539854), n(388685);
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
    g = n(556297),
    E = n(705579),
    b = n(487419),
    y = n(197344),
    O = n(476756),
    v = n(734934),
    S = n(891353),
    I = n(801056),
    T = n(666383),
    C = n(106371),
    A = n(995774),
    N = n(921801),
    P = n(460181),
    R = n(210176),
    D = n(430824),
    w = n(292959),
    x = n(9156),
    L = n(594174),
    j = n(626135),
    M = n(912101),
    k = n(709054),
    U = n(45640),
    G = n(695346),
    Z = n(675478),
    B = n(273313),
    F = n(33656),
    V = n(726985),
    H = n(981631),
    Y = n(468788),
    W = n(490897),
    K = n(388032),
    z = n(224359);
function q(e, t, n) {
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
function Q(e) {
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
                q(e, t, n[t]);
            });
    }
    return e;
}
function X(e, t) {
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
function J(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : X(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function $(e) {
    M.Z.requestPermission((t) => {
        let n = t ? H.$Ab.ENABLED : H.$Ab.BLOCKED;
        f.default.setPermissionsState(n, e);
    });
}
function ee(e) {
    let { label: t, enabled: n, disabled: i, onPreview: a, onChange: o } = e;
    return (0, r.jsx)(d.rsf, {
        label: t,
        checked: n,
        onChange: o,
        disabled: i,
        description: K.intl.format(K.t.OOiGCM, { onClick: a }),
    });
}
function et(e) {
    let { disabledSounds: t, disableAllSounds: n, notifyMessagesInSelectedChannel: a } = e,
        o = i.useRef(null),
        s = (0, v.p)(),
        l = i.useCallback((e, t) => {
            t.stopPropagation(), t.preventDefault(), null != o.current && o.current.stop(), (o.current = (0, P.GN)(e));
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
                label: K.intl.string(K.t.pz71xC),
                sound: "message1",
                focusModeDisabled: s,
            },
            {
                label: K.intl.string(K.t.hK51Yg),
                sound: "deafen",
            },
            {
                label: K.intl.string(K.t.XiejaJ),
                sound: "undeafen",
            },
            {
                label: K.intl.string(K.t.w4m945),
                sound: "mute",
            },
            {
                label: K.intl.string(K.t.YqAjXy),
                sound: "unmute",
            },
            {
                label: K.intl.string(K.t.JoTq8n),
                sound: "camera_on",
            },
            {
                label: K.intl.string(K.t["8P6tQ6"]),
                sound: "camera_off",
            },
            {
                label: K.intl.string(K.t["juL9/L"]),
                sound: "disconnect",
            },
            {
                label: K.intl.string(K.t.x98vQq),
                sound: "ptt_start",
            },
            {
                label: K.intl.string(K.t["1HjRqC"]),
                sound: "ptt_stop",
            },
            {
                label: K.intl.string(K.t["9JB1Ck"]),
                sound: "user_join",
            },
            {
                label: K.intl.string(K.t.KUBBNt),
                sound: "user_leave",
            },
            {
                label: K.intl.string(K.t.EZjqUT),
                sound: "user_moved",
            },
            {
                label: K.intl.string(K.t.LnNlQh),
                sound: "call_calling",
            },
            {
                label: K.intl.string(K.t.XBrJT6),
                sound: "call_ringing",
            },
            {
                label: K.intl.string(K.t.Nd8P5y),
                sound: "stream_started",
            },
            {
                label: K.intl.string(K.t["9bYj+G"]),
                sound: "stream_ended",
            },
            {
                label: K.intl.string(K.t.KccUI1),
                sound: "stream_user_joined",
            },
            {
                label: K.intl.string(K.t.dsjkiN),
                sound: "stream_user_left",
            },
            {
                label: K.intl.string(K.t.nFOcf9),
                sound: "activity_launch",
            },
            {
                label: K.intl.string(K.t["a6lw/u"]),
                sound: "activity_end",
            },
            {
                label: K.intl.string(K.t.KaFxrY),
                sound: "activity_user_join",
            },
            {
                label: K.intl.string(K.t.S14z9n),
                sound: "activity_user_left",
            },
            {
                label: K.intl.string(K.t.CP3DC3),
                sound: "reconnect",
            },
        ],
        p = null != y.Z.useHolidaySoundpack();
    return (0, r.jsx)(N.F, {
        setting: V.s6.NOTIFICATIONS_SOUNDS,
        children: (0, r.jsx)("div", {
            children: (0, r.jsxs)(d.C3N, {
                label: K.intl.string(K.t.MKWyKc),
                children: [
                    p ? (0, r.jsx)(O.Z, {}) : null,
                    (0, r.jsx)(d.rsf, {
                        label: K.intl.string(K.t.lF5GGe),
                        description: K.intl.string(K.t["7oXUim"]),
                        checked: a && !n,
                        onChange: f.default.setNotifyMessagesInSelectedChannel,
                        disabled: n,
                    }),
                    (0, r.jsx)(d.rsf, {
                        label: K.intl.string(K.t["2ZhCOd"]),
                        description: K.intl.string(K.t["+B0XLE"]),
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
                                        ee,
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
                                              children: K.intl.string(K.t.cIRG0s),
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
function en() {
    let e = (0, s.e7)([b.Z], () => b.Z.getGuildAlertSettings()),
        [t, n] = i.useState(null),
        a = k.default.keys(e).map((t) => {
            let n = e[t];
            return {
                label: n.guildName,
                value: n.guildId,
            };
        });
    return 0 === Object.keys(e).length
        ? null
        : (0, r.jsx)(N.F, {
              setting: V.s6.NOTIFICATIONS_COMMUNITY_ACTIVITY_ALERTS,
              children: (0, r.jsxs)(d.C3N, {
                  label: K.intl.string(K.t.D9yVAH),
                  description: K.intl.string(K.t["0PhAOH"]),
                  children: [
                      (0, r.jsx)(u.y6, {
                          label: K.intl.string(K.t.Q0PsXX),
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
                                        setting: V.s6.NOTIFICATIONS_COMMUNITY_IN_APP_ALERTS,
                                        children: (0, r.jsx)(d.rsf, {
                                            label: K.intl.string(K.t.u6dc5B),
                                            description: K.intl.string(K.t.z8Td48),
                                            checked: !e[t].disableRaidAlertNag,
                                            onChange: () => {
                                                (0, Z.PS)(
                                                    t,
                                                    (e) => {
                                                        e.disableRaidAlertNag = !e.disableRaidAlertNag;
                                                    },
                                                    Z.fy.INFREQUENT_USER_ACTION,
                                                );
                                            },
                                        }),
                                    }),
                                    (0, r.jsx)(N.F, {
                                        setting: V.s6.NOTIFICATIONS_COMMUNITY_PUSH_NOTIFICATIONS,
                                        children: (0, r.jsx)(d.rsf, {
                                            label: K.intl.string(K.t.P8MG6q),
                                            description: K.intl.string(K.t.PyxXs8),
                                            checked: !e[t].disableRaidAlertPush,
                                            onChange: () => {
                                                (0, Z.PS)(
                                                    t,
                                                    (e) => {
                                                        e.disableRaidAlertPush = !e.disableRaidAlertPush;
                                                    },
                                                    Z.fy.INFREQUENT_USER_ACTION,
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
class er extends i.PureComponent {
    handleDesktopChange(e) {
        let t = e ? H.qrD.ALL : H.qrD.NEVER;
        t !== H.qrD.NEVER ? $("UserSettingsModal") : f.default.setDesktopType(t);
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
            f = U.Z.getCurrentConfig({ location: "Messages" }).enabled || 0 === t ? 0 : 1,
            p = o()
                .range(f, 11)
                .map((e) => ({
                    value: 60 * e,
                    label:
                        0 === e ? K.intl.string(K.t["0QN7cZ"]) : K.intl.formatToPlainString(K.t.iXLF9W, { minutes: e }),
                }));
        return (0, r.jsx)(B.Z, {
            title: K.intl.string(K.t.HcoRu0),
            children: (0, r.jsxs)(d.Kqy, {
                gap: 16,
                children: [
                    (0, r.jsx)(N.F, {
                        setting: V.s6.NOTIFICATIONS_ENABLE_DESKTOP,
                        children: (0, r.jsx)(d.rsf, {
                            label: K.intl.string(K.t["/0WCll"]),
                            checked: e !== H.qrD.NEVER && !c,
                            description: c ? K.intl.string(K.t.cIRG0s) : K.intl.string(K.t.wF9ih3),
                            onChange: this.handleDesktopChange,
                            disabled: c,
                        }),
                    }),
                    (0, r.jsx)(ea, {}),
                    (0, r.jsx)(N.F, {
                        setting: V.s6.NOTIFICATIONS_UNREAD_MESSAGE_BADGE,
                        children: (0, r.jsx)(d.rsf, {
                            label: K.intl.string(K.t.VH8AIJ),
                            description: K.intl.string(K.t["9K4qwX"]),
                            checked: !n,
                            onChange: this.handleToggleShowUnreadBadge,
                        }),
                    }),
                    (0, r.jsx)(N.F, {
                        setting: V.s6.NOTIFICATIONS_ENABLE_TASKBAR_FLASHING,
                        children: (0, r.jsx)(d.rsf, {
                            label: K.intl.string(K.t.xSmFQG),
                            description: K.intl.string(K.t.bd4j4x),
                            checked: i,
                            onChange: this.handleToggleShowFlash,
                        }),
                    }),
                    (0, r.jsx)(eo, {}),
                    (0, r.jsx)(ef, {}),
                    (0, r.jsx)(ep, {}),
                    (0, r.jsx)(e_, {}),
                    (0, r.jsx)(em, {}),
                    (0, r.jsx)(eh, {}),
                    (0, r.jsx)(eg, {}),
                    (0, r.jsx)(ed, {}),
                    (0, r.jsxs)(N.F, {
                        setting: V.s6.NOTIFICATIONS_PUSH_INACTIVE_TIMEOUT,
                        children: [
                            (0, r.jsx)(u.y6, {
                                label: K.intl.string(K.t.TTvjd9),
                                description: K.intl.string(K.t.Xytv9C),
                                value: t,
                                onChange: G.CM.updateSetting,
                                options: p,
                            }),
                            (0, r.jsx)(d.izJ, { gap: 16 }),
                        ],
                    }),
                    this.renderTTS(),
                    (0, r.jsx)(en, {}),
                    (0, r.jsx)(d.izJ, { gap: 24 }),
                    (0, r.jsx)(et, {
                        disabledSounds: a,
                        disableAllSounds: s,
                        notifyMessagesInSelectedChannel: l,
                    }),
                    (0, r.jsx)(F.Z, {}),
                ],
            }),
        });
    }
    constructor(...e) {
        super(...e),
            q(this, "handleToggleShowUnreadBadge", () => {
                f.default.setDisableUnreadBadge(!this.props.disableUnreadBadge);
            }),
            q(this, "handleToggleShowFlash", () => {
                f.default.setTaskbarFlash(!this.props.taskbarFlash);
            }),
            q(this, "renderTTS", () => {
                if (!_.Zh) return null;
                let e = [
                    {
                        name: K.intl.string(K.t.B1AGeJ),
                        value: H.PrB.ALL_CHANNELS,
                    },
                    {
                        name: K.intl.string(K.t.uM2rNr),
                        value: H.PrB.SELECTED_CHANNEL,
                    },
                    {
                        name: K.intl.string(K.t.DYO5Oi),
                        value: H.PrB.NEVER,
                    },
                ];
                return (0, r.jsxs)(N.F, {
                    setting: V.s6.NOTIFICATIONS_TEXT_TO_SPEECH,
                    children: [
                        (0, r.jsx)(d.FXm, {
                            label: K.intl.string(K.t.VIm5MO),
                            description: K.intl.string(K.t["+4dnA5"]),
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
let ei = (0, m.B)({
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
function ea() {
    let e = ei.useExperiment({ location: "settings" }, { autoTrackExposure: !1 }).enabled,
        t = (0, s.e7)([x.ZP], () => x.ZP.mentionOnAllMessages);
    return e
        ? (0, r.jsx)(N.F, {
              setting: V.s6.NOTIFICATIONS_MENTION_ON_ALL_MESSAGES,
              children: (0, r.jsx)(d.rsf, {
                  label: "Mention on all messages?",
                  description:
                      "Increments the mention count when receiving a message in a channel set to 'All Messages'",
                  checked: t,
                  onChange: (e) => {
                      p.Z.setAccountFlag(Y.c.MENTION_ON_ALL_MESSAGES, e);
                  },
              }),
          })
        : null;
}
function eo() {
    let [e, t] = i.useState(!1),
        n = (0, s.e7)([L.default], () => {
            var e;
            return null == (e = L.default.getCurrentUser()) ? void 0 : e.isStaff();
        }),
        a = (0, s.e7)([x.ZP], () => x.ZP.useNewNotifications);
    return a || n
        ? (0, r.jsx)(N.F, {
              setting: V.s6.NOTIFICATIONS_UNREAD_SETTINGS,
              children: (0, r.jsx)(d.rsf, {
                  label: "New Unreads Setting (Experimental)",
                  description:
                      "Turns off the new unread setting that allows you to pick which channels are most important in a server.",
                  checked: a,
                  disabled: e,
                  onChange: () => (a ? el(t) : es(t)),
              }),
          })
        : null;
}
async function es(e) {
    e(!0), await p.Z.setAccountFlag(Y.c.USE_NEW_NOTIFICATIONS, !0), e(!1);
}
async function el(e) {
    e(!0),
        c.K.set("turnedOffNewNotifications", !0),
        j.default.track(H.rMx.NOTIFICATION_MIGRATION_OPTOUT, {
            num_guilds_with_new_setting: D.Z.getGuildsArray().filter(
                (e) => x.ZP.resolveGuildUnreadSetting(e) === W.i.ONLY_MENTIONS,
            ).length,
        }),
        await p.Z.setAccountFlag(Y.c.USE_NEW_NOTIFICATIONS, !1),
        e(!1);
}
function ec(e) {
    let t = (0, v.p)();
    return (0, r.jsx)(er, J(Q({}, e), { focusMode: t }));
}
function eu() {
    let e = (0, s.cj)([w.Z], () => ({
        disableUnreadBadge: w.Z.getDisableUnreadBadge(),
        taskbarFlash: w.Z.taskbarFlash,
        disabledSounds: w.Z.getDisabledSounds(),
        disableAllSounds: w.Z.getDisableAllSounds(),
        desktopType: w.Z.getDesktopType(),
        ttsType: w.Z.getTTSType(),
        notifyMessagesInSelectedChannel: w.Z.getNotifyMessagesInSelectedChannel(),
    }));
    return (0, r.jsx)(ec, J(Q({}, e), { afkTimeout: G.CM.useSetting() }));
}
function ed() {
    let e = G.fz.useSetting(),
        t = [
            {
                name: K.intl.string(K.t["9x/RtT"]),
                value: l.Ns.NOTIFICATIONS_ENABLED,
            },
            {
                name: K.intl.string(K.t.fJAbQd),
                value: l.Ns.ONLY_DMS,
            },
            {
                name: K.intl.string(K.t["xu+UDU"]),
                value: l.Ns.NOTIFICATIONS_DISABLED,
            },
        ],
        n = (t) => {
            (0, A.MR)(t.value, e);
        };
    return C.Z.getCurrentConfig({ location: "webSettings" }).enableInAppNotifications
        ? (0, r.jsxs)(N.F, {
              setting: V.s6.NOTIFICATIONS_REACTIONS,
              children: [
                  (0, r.jsx)(d.FXm, {
                      label: K.intl.string(K.t.Rq0NFs),
                      description: K.intl.string(K.t.oWF6eQ),
                      options: t,
                      onChange: (e) => n({ value: e }),
                      value: e,
                  }),
                  (0, r.jsx)(d.izJ, { gap: 16 }),
              ],
          })
        : null;
}
function ef() {
    let e = G.d8.useSetting(),
        t = G.JN.useSetting();
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(N.F, {
                setting: V.s6.NOTIFICATIONS_VOICE_ACTIVITY,
                children: (0, r.jsx)(d.rsf, {
                    label: K.intl.string(K.t.wtk08S),
                    description: K.intl.string(K.t.rngMNx),
                    checked: e,
                    onChange: R.I,
                }),
            }),
            (0, r.jsx)(N.F, {
                setting: V.s6.NOTIFICATIONS_GO_LIVE,
                children: (0, r.jsx)(d.rsf, {
                    label: K.intl.string(K.t.pW4TMp),
                    description: K.intl.string(K.t["H+WYqZ"]),
                    checked: t,
                    onChange: g.O,
                }),
            }),
        ],
    });
}
function ep() {
    let e = G.vc.useSetting();
    return (0, r.jsx)(N.F, {
        setting: V.s6.NOTIFICATIONS_FRIEND_ANNIVERSARY,
        children: (0, r.jsx)(d.rsf, {
            label: K.intl.string(K.t.hi4dSk),
            description: K.intl.string(K.t["00TNo7"]),
            badge: "beta",
            checked: e,
            onChange: T.$,
        }),
    });
}
function e_() {
    let e = G.JY.useSetting();
    return (0, r.jsx)(N.F, {
        setting: V.s6.NOTIFICATIONS_FRIEND_ONLINE,
        children: (0, r.jsx)(d.rsf, {
            label: K.intl.string(K.t["uvIi/4"]),
            description: K.intl.string(K.t.E6O06k),
            checked: e,
            onChange: S.N,
        }),
    });
}
function em() {
    let e = G.V6.useSetting();
    return (0, r.jsx)(N.F, {
        setting: V.s6.NOTIFICATIONS_USER_RESURRECTION,
        children: (0, r.jsx)(d.rsf, {
            label: K.intl.string(K.t.Zyn45S),
            description: K.intl.string(K.t.XdihbD),
            checked: e,
            onChange: E.F,
        }),
    });
}
function eh() {
    let e = G.p1.useSetting();
    return (0, r.jsx)(N.F, {
        setting: V.s6.NOTIFICATIONS_GAME_UPDATE,
        children: (0, r.jsx)(d.rsf, {
            label: K.intl.string(z.default["3TO4/r"]),
            description: K.intl.string(z.default.diGDe0),
            checked: e,
            onChange: h.c,
        }),
    });
}
function eg() {
    let e = G.a7.useSetting();
    return (0, r.jsx)(N.F, {
        setting: V.s6.NOTIFICATIONS_PROFILE_UPDATES,
        children: (0, r.jsx)(d.rsf, {
            label: K.intl.string(K.t.VxBO2F),
            description: K.intl.string(K.t.F4VeBe),
            checked: e,
            onChange: I.A,
        }),
    });
}
