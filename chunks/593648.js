n.d(t, { Z: () => ec }), n(539854), n(388685);
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
    E = n(487419),
    b = n(197344),
    y = n(476756),
    O = n(734934),
    v = n(891353),
    S = n(801056),
    I = n(666383),
    T = n(106371),
    C = n(995774),
    A = n(921801),
    N = n(460181),
    P = n(210176),
    R = n(430824),
    w = n(292959),
    D = n(9156),
    x = n(594174),
    L = n(626135),
    j = n(912101),
    M = n(709054),
    k = n(45640),
    U = n(695346),
    G = n(675478),
    Z = n(273313),
    F = n(33656),
    B = n(726985),
    V = n(981631),
    H = n(468788),
    Y = n(490897),
    W = n(388032),
    K = n(307139);
function z(e, t, n) {
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
function q(e) {
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
                z(e, t, n[t]);
            });
    }
    return e;
}
function Q(e, t) {
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
function X(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : Q(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function J(e) {
    j.Z.requestPermission((t) => {
        let n = t ? V.$Ab.ENABLED : V.$Ab.BLOCKED;
        f.default.setPermissionsState(n, e);
    });
}
function $(e) {
    let { label: t, enabled: n, disabled: i, onPreview: a, onChange: o } = e;
    return (0, r.jsx)(d.rsf, {
        label: t,
        checked: n,
        onChange: o,
        disabled: i,
        description: W.intl.format(W.t.OOiGCM, { onClick: a }),
    });
}
function ee(e) {
    let { disabledSounds: t, disableAllSounds: n, notifyMessagesInSelectedChannel: a } = e,
        o = i.useRef(null),
        s = (0, O.p)(),
        l = i.useCallback((e, t) => {
            t.stopPropagation(), t.preventDefault(), null != o.current && o.current.stop(), (o.current = (0, N.GN)(e));
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
                label: W.intl.string(W.t.pz71xC),
                sound: "message1",
                focusModeDisabled: s,
            },
            {
                label: W.intl.string(W.t.hK51Yg),
                sound: "deafen",
            },
            {
                label: W.intl.string(W.t.XiejaJ),
                sound: "undeafen",
            },
            {
                label: W.intl.string(W.t.w4m945),
                sound: "mute",
            },
            {
                label: W.intl.string(W.t.YqAjXy),
                sound: "unmute",
            },
            {
                label: W.intl.string(W.t.JoTq8n),
                sound: "camera_on",
            },
            {
                label: W.intl.string(W.t["8P6tQ6"]),
                sound: "camera_off",
            },
            {
                label: W.intl.string(W.t["juL9/L"]),
                sound: "disconnect",
            },
            {
                label: W.intl.string(W.t.x98vQq),
                sound: "ptt_start",
            },
            {
                label: W.intl.string(W.t["1HjRqC"]),
                sound: "ptt_stop",
            },
            {
                label: W.intl.string(W.t["9JB1Ck"]),
                sound: "user_join",
            },
            {
                label: W.intl.string(W.t.KUBBNt),
                sound: "user_leave",
            },
            {
                label: W.intl.string(W.t.EZjqUT),
                sound: "user_moved",
            },
            {
                label: W.intl.string(W.t.LnNlQh),
                sound: "call_calling",
            },
            {
                label: W.intl.string(W.t.XBrJT6),
                sound: "call_ringing",
            },
            {
                label: W.intl.string(W.t.Nd8P5y),
                sound: "stream_started",
            },
            {
                label: W.intl.string(W.t["9bYj+G"]),
                sound: "stream_ended",
            },
            {
                label: W.intl.string(W.t.KccUI1),
                sound: "stream_user_joined",
            },
            {
                label: W.intl.string(W.t.dsjkiN),
                sound: "stream_user_left",
            },
            {
                label: W.intl.string(W.t.nFOcf9),
                sound: "activity_launch",
            },
            {
                label: W.intl.string(W.t["a6lw/u"]),
                sound: "activity_end",
            },
            {
                label: W.intl.string(W.t.KaFxrY),
                sound: "activity_user_join",
            },
            {
                label: W.intl.string(W.t.S14z9n),
                sound: "activity_user_left",
            },
            {
                label: W.intl.string(W.t.CP3DC3),
                sound: "reconnect",
            },
        ],
        p = null != b.Z.useHolidaySoundpack();
    return (0, r.jsx)(A.F, {
        setting: B.s6.NOTIFICATIONS_SOUNDS,
        children: (0, r.jsx)("div", {
            children: (0, r.jsxs)(d.C3N, {
                label: W.intl.string(W.t.MKWyKc),
                children: [
                    p ? (0, r.jsx)(y.Z, {}) : null,
                    (0, r.jsx)(d.rsf, {
                        label: W.intl.string(W.t.lF5GGe),
                        description: W.intl.string(W.t["7oXUim"]),
                        checked: a && !n,
                        onChange: f.default.setNotifyMessagesInSelectedChannel,
                        disabled: n,
                    }),
                    (0, r.jsx)(d.rsf, {
                        label: W.intl.string(W.t["2ZhCOd"]),
                        description: W.intl.string(W.t["+B0XLE"]),
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
                                        $,
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
                                              children: W.intl.string(W.t.cIRG0s),
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
function et() {
    let e = (0, s.e7)([E.Z], () => E.Z.getGuildAlertSettings()),
        [t, n] = i.useState(null),
        a = M.default.keys(e).map((t) => {
            let n = e[t];
            return {
                label: n.guildName,
                value: n.guildId,
            };
        });
    return 0 === Object.keys(e).length
        ? null
        : (0, r.jsx)(A.F, {
              setting: B.s6.NOTIFICATIONS_COMMUNITY_ACTIVITY_ALERTS,
              children: (0, r.jsxs)(d.C3N, {
                  label: W.intl.string(W.t.D9yVAH),
                  description: W.intl.string(W.t["0PhAOH"]),
                  children: [
                      (0, r.jsx)(u.y6, {
                          label: W.intl.string(W.t.Q0PsXX),
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
                                        setting: B.s6.NOTIFICATIONS_COMMUNITY_IN_APP_ALERTS,
                                        children: (0, r.jsx)(d.rsf, {
                                            label: W.intl.string(W.t.u6dc5B),
                                            description: W.intl.string(W.t.z8Td48),
                                            checked: !e[t].disableRaidAlertNag,
                                            onChange: () => {
                                                (0, G.PS)(
                                                    t,
                                                    (e) => {
                                                        e.disableRaidAlertNag = !e.disableRaidAlertNag;
                                                    },
                                                    G.fy.INFREQUENT_USER_ACTION,
                                                );
                                            },
                                        }),
                                    }),
                                    (0, r.jsx)(A.F, {
                                        setting: B.s6.NOTIFICATIONS_COMMUNITY_PUSH_NOTIFICATIONS,
                                        children: (0, r.jsx)(d.rsf, {
                                            label: W.intl.string(W.t.P8MG6q),
                                            description: W.intl.string(W.t.PyxXs8),
                                            checked: !e[t].disableRaidAlertPush,
                                            onChange: () => {
                                                (0, G.PS)(
                                                    t,
                                                    (e) => {
                                                        e.disableRaidAlertPush = !e.disableRaidAlertPush;
                                                    },
                                                    G.fy.INFREQUENT_USER_ACTION,
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
class en extends i.PureComponent {
    handleDesktopChange(e) {
        let t = e ? V.qrD.ALL : V.qrD.NEVER;
        t !== V.qrD.NEVER ? J("UserSettingsModal") : f.default.setDesktopType(t);
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
            f = k.Z.getCurrentConfig({ location: "Messages" }).enabled || 0 === t ? 0 : 1,
            p = o()
                .range(f, 11)
                .map((e) => ({
                    value: 60 * e,
                    label:
                        0 === e ? W.intl.string(W.t["0QN7cZ"]) : W.intl.formatToPlainString(W.t.iXLF9W, { minutes: e }),
                }));
        return (0, r.jsx)(Z.Z, {
            title: W.intl.string(W.t.HcoRu0),
            children: (0, r.jsxs)(d.Kqy, {
                gap: 16,
                children: [
                    (0, r.jsx)(A.F, {
                        setting: B.s6.NOTIFICATIONS_ENABLE_DESKTOP,
                        children: (0, r.jsx)(d.rsf, {
                            label: W.intl.string(W.t["/0WCll"]),
                            checked: e !== V.qrD.NEVER && !c,
                            description: c ? W.intl.string(W.t.cIRG0s) : W.intl.string(W.t.wF9ih3),
                            onChange: this.handleDesktopChange,
                            disabled: c,
                        }),
                    }),
                    (0, r.jsx)(ei, {}),
                    (0, r.jsx)(A.F, {
                        setting: B.s6.NOTIFICATIONS_UNREAD_MESSAGE_BADGE,
                        children: (0, r.jsx)(d.rsf, {
                            label: W.intl.string(W.t.VH8AIJ),
                            description: W.intl.string(W.t["9K4qwX"]),
                            checked: !n,
                            onChange: this.handleToggleShowUnreadBadge,
                        }),
                    }),
                    (0, r.jsx)(A.F, {
                        setting: B.s6.NOTIFICATIONS_ENABLE_TASKBAR_FLASHING,
                        children: (0, r.jsx)(d.rsf, {
                            label: W.intl.string(W.t.xSmFQG),
                            description: W.intl.string(W.t.bd4j4x),
                            checked: i,
                            onChange: this.handleToggleShowFlash,
                        }),
                    }),
                    (0, r.jsx)(ea, {}),
                    (0, r.jsx)(ed, {}),
                    (0, r.jsx)(ef, {}),
                    (0, r.jsx)(ep, {}),
                    (0, r.jsx)(e_, {}),
                    (0, r.jsx)(em, {}),
                    (0, r.jsx)(eu, {}),
                    (0, r.jsxs)(A.F, {
                        setting: B.s6.NOTIFICATIONS_PUSH_INACTIVE_TIMEOUT,
                        children: [
                            (0, r.jsx)(u.y6, {
                                label: W.intl.string(W.t.TTvjd9),
                                description: W.intl.string(W.t.Xytv9C),
                                value: t,
                                onChange: U.CM.updateSetting,
                                options: p,
                            }),
                            (0, r.jsx)(d.izJ, { gap: 16 }),
                        ],
                    }),
                    this.renderTTS(),
                    (0, r.jsx)(et, {}),
                    (0, r.jsx)(d.izJ, { gap: 24 }),
                    (0, r.jsx)(ee, {
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
            z(this, "handleToggleShowUnreadBadge", () => {
                f.default.setDisableUnreadBadge(!this.props.disableUnreadBadge);
            }),
            z(this, "handleToggleShowFlash", () => {
                f.default.setTaskbarFlash(!this.props.taskbarFlash);
            }),
            z(this, "renderTTS", () => {
                if (!_.Zh) return null;
                let e = [
                    {
                        name: W.intl.string(W.t.B1AGeJ),
                        value: V.PrB.ALL_CHANNELS,
                    },
                    {
                        name: W.intl.string(W.t.uM2rNr),
                        value: V.PrB.SELECTED_CHANNEL,
                    },
                    {
                        name: W.intl.string(W.t.DYO5Oi),
                        value: V.PrB.NEVER,
                    },
                ];
                return (0, r.jsxs)(A.F, {
                    setting: B.s6.NOTIFICATIONS_TEXT_TO_SPEECH,
                    children: [
                        (0, r.jsx)(d.FXm, {
                            label: W.intl.string(W.t.VIm5MO),
                            description: W.intl.string(W.t["+4dnA5"]),
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
let er = (0, m.B)({
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
function ei() {
    let e = er.useExperiment({ location: "settings" }, { autoTrackExposure: !1 }).enabled,
        t = (0, s.e7)([D.ZP], () => D.ZP.mentionOnAllMessages);
    return e
        ? (0, r.jsx)(A.F, {
              setting: B.s6.NOTIFICATIONS_MENTION_ON_ALL_MESSAGES,
              children: (0, r.jsx)(d.rsf, {
                  label: "Mention on all messages?",
                  description:
                      "Increments the mention count when receiving a message in a channel set to 'All Messages'",
                  checked: t,
                  onChange: (e) => {
                      p.Z.setAccountFlag(H.c.MENTION_ON_ALL_MESSAGES, e);
                  },
              }),
          })
        : null;
}
function ea() {
    let [e, t] = i.useState(!1),
        n = (0, s.e7)([x.default], () => {
            var e;
            return null == (e = x.default.getCurrentUser()) ? void 0 : e.isStaff();
        }),
        a = (0, s.e7)([D.ZP], () => D.ZP.useNewNotifications);
    return a || n
        ? (0, r.jsx)(A.F, {
              setting: B.s6.NOTIFICATIONS_UNREAD_SETTINGS,
              children: (0, r.jsx)(d.rsf, {
                  label: "New Unreads Setting (Experimental)",
                  description:
                      "Turns off the new unread setting that allows you to pick which channels are most important in a server.",
                  checked: a,
                  disabled: e,
                  onChange: () => (a ? es(t) : eo(t)),
              }),
          })
        : null;
}
async function eo(e) {
    e(!0), await p.Z.setAccountFlag(H.c.USE_NEW_NOTIFICATIONS, !0), e(!1);
}
async function es(e) {
    e(!0),
        c.K.set("turnedOffNewNotifications", !0),
        L.default.track(V.rMx.NOTIFICATION_MIGRATION_OPTOUT, {
            num_guilds_with_new_setting: R.Z.getGuildsArray().filter(
                (e) => D.ZP.resolveGuildUnreadSetting(e) === Y.i.ONLY_MENTIONS,
            ).length,
        }),
        await p.Z.setAccountFlag(H.c.USE_NEW_NOTIFICATIONS, !1),
        e(!1);
}
function el(e) {
    let t = (0, O.p)();
    return (0, r.jsx)(en, X(q({}, e), { focusMode: t }));
}
function ec() {
    let e = (0, s.cj)([w.Z], () => ({
        disableUnreadBadge: w.Z.getDisableUnreadBadge(),
        taskbarFlash: w.Z.taskbarFlash,
        disabledSounds: w.Z.getDisabledSounds(),
        disableAllSounds: w.Z.getDisableAllSounds(),
        desktopType: w.Z.getDesktopType(),
        ttsType: w.Z.getTTSType(),
        notifyMessagesInSelectedChannel: w.Z.getNotifyMessagesInSelectedChannel(),
    }));
    return (0, r.jsx)(el, X(q({}, e), { afkTimeout: U.CM.useSetting() }));
}
function eu() {
    let e = U.fz.useSetting(),
        t = [
            {
                name: W.intl.string(W.t["9x/RtT"]),
                value: l.Ns.NOTIFICATIONS_ENABLED,
            },
            {
                name: W.intl.string(W.t.fJAbQd),
                value: l.Ns.ONLY_DMS,
            },
            {
                name: W.intl.string(W.t["xu+UDU"]),
                value: l.Ns.NOTIFICATIONS_DISABLED,
            },
        ],
        n = (t) => {
            (0, C.MR)(t.value, e);
        };
    return T.Z.getCurrentConfig({ location: "webSettings" }).enableInAppNotifications
        ? (0, r.jsxs)(A.F, {
              setting: B.s6.NOTIFICATIONS_REACTIONS,
              children: [
                  (0, r.jsx)(d.FXm, {
                      label: W.intl.string(W.t.Rq0NFs),
                      description: W.intl.string(W.t.oWF6eQ),
                      options: t,
                      onChange: (e) => n({ value: e }),
                      value: e,
                  }),
                  (0, r.jsx)(d.izJ, { gap: 16 }),
              ],
          })
        : null;
}
function ed() {
    let e = U.d8.useSetting(),
        t = U.JN.useSetting();
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(A.F, {
                setting: B.s6.NOTIFICATIONS_VOICE_ACTIVITY,
                children: (0, r.jsx)(d.rsf, {
                    label: W.intl.string(W.t.wtk08S),
                    description: W.intl.string(W.t.rngMNx),
                    checked: e,
                    onChange: P.I,
                }),
            }),
            (0, r.jsx)(A.F, {
                setting: B.s6.NOTIFICATIONS_GO_LIVE,
                children: (0, r.jsx)(d.rsf, {
                    label: W.intl.string(W.t.pW4TMp),
                    description: W.intl.string(W.t["H+WYqZ"]),
                    checked: t,
                    onChange: g.O,
                }),
            }),
        ],
    });
}
function ef() {
    let e = U.vc.useSetting();
    return (0, r.jsx)(A.F, {
        setting: B.s6.NOTIFICATIONS_FRIEND_ANNIVERSARY,
        children: (0, r.jsx)(d.rsf, {
            label: W.intl.string(W.t.hi4dSk),
            description: W.intl.string(W.t["00TNo7"]),
            badge: "beta",
            checked: e,
            onChange: I.$,
        }),
    });
}
function ep() {
    let e = U.JY.useSetting();
    return (0, r.jsx)(A.F, {
        setting: B.s6.NOTIFICATIONS_FRIEND_ONLINE,
        children: (0, r.jsx)(d.rsf, {
            label: W.intl.string(W.t["uvIi/4"]),
            description: W.intl.string(W.t.E6O06k),
            checked: e,
            onChange: v.N,
        }),
    });
}
function e_() {
    let e = U.p1.useSetting();
    return (0, r.jsx)(A.F, {
        setting: B.s6.NOTIFICATIONS_GAME_UPDATE,
        children: (0, r.jsx)(d.rsf, {
            label: W.intl.string(K.default["3TO4/r"]),
            description: W.intl.string(K.default.diGDe0),
            checked: e,
            onChange: h.c,
        }),
    });
}
function em() {
    let e = U.a7.useSetting();
    return (0, r.jsx)(A.F, {
        setting: B.s6.NOTIFICATIONS_PROFILE_UPDATES,
        children: (0, r.jsx)(d.rsf, {
            label: W.intl.string(W.t.VxBO2F),
            description: W.intl.string(W.t.F4VeBe),
            checked: e,
            onChange: S.A,
        }),
    });
}
