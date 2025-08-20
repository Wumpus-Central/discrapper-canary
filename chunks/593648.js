n.d(t, { Z: () => eu }), n(539854), n(388685);
var r = n(951288),
    i = n(647438),
    a = n(120356),
    o = n.n(a),
    s = n(392711),
    l = n.n(s),
    c = n(442837),
    u = n(524437),
    d = n(481060),
    f = n(668781),
    _ = n(292556),
    p = n(87051),
    h = n(419363),
    m = n(761781),
    g = n(818083),
    E = n(688465),
    b = n(890022),
    y = n(688907),
    O = n(487419),
    v = n(197344),
    I = n(476756),
    T = n(734934),
    S = n(223683),
    A = n(312400),
    C = n(115345),
    N = n(392888),
    R = n(106371),
    P = n(995774),
    w = n(921801),
    D = n(460181),
    x = n(462354),
    L = n(210176),
    j = n(292959),
    M = n(9156),
    k = n(912101),
    U = n(358085),
    G = n(709054),
    B = n(45640),
    Z = n(695346),
    V = n(675478),
    F = n(33656),
    H = n(726985),
    Y = n(981631),
    W = n(468788),
    K = n(388032),
    z = n(728495),
    q = n(197571);
function X(e, t, n) {
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
                X(e, t, n[t]);
            });
    }
    return e;
}
function J(e, t) {
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
function $(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : J(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function ee(e) {
    k.Z.requestPermission((t) => {
        let n = t ? Y.$Ab.ENABLED : Y.$Ab.BLOCKED;
        _.default.setPermissionsState(n, e);
    });
}
function et(e) {
    let { label: t, enabled: n, disabled: i, onPreview: a, onChange: o, tooltip: s } = e;
    return (0, r.jsx)(d.j7V, {
        className: z.soundRow,
        value: n,
        onChange: o,
        disabled: i,
        tooltipNote: s,
        children: (0, r.jsxs)("div", {
            className: z.notificationSound,
            children: [
                (0, r.jsx)("div", {
                    className: z.soundName,
                    children: t,
                }),
                (0, r.jsx)(d.P3F, {
                    className: z.soundIcon,
                    onClick: a,
                    "aria-label": K.intl.string(K.t.Kd4uxM),
                    children: (0, r.jsx)(d.gj8, {
                        size: "xs",
                        color: "currentColor",
                        className: z.icon,
                        "aria-hidden": !0,
                    }),
                }),
            ],
        }),
    });
}
function en(e) {
    let { disabledSounds: t, disableAllSounds: n, notifyMessagesInSelectedChannel: a } = e,
        s = i.useRef(null),
        l = (0, T.p)(),
        c = i.useCallback((e, t) => {
            t.stopPropagation(), t.preventDefault(), null != s.current && s.current.stop(), (s.current = (0, D.GN)(e));
        }, []),
        u = i.useCallback(
            (e, n) => {
                let r = t.filter((t) => t !== e);
                n || r.push(e), _.default.setDisabledSounds(r);
            },
            [t],
        );
    i.useEffect(() => () => {
        var e;
        null == (e = s.current) || e.stop();
    });
    let f = [
            {
                label: K.intl.string(K.t.pz71xM),
                sound: "message1",
                focusModeDisabled: l,
            },
            {
                label: K.intl.string(K.t.hK51Ym),
                sound: "deafen",
            },
            {
                label: K.intl.string(K.t.XiejaG),
                sound: "undeafen",
            },
            {
                label: K.intl.string(K.t["w4m94+"]),
                sound: "mute",
            },
            {
                label: K.intl.string(K.t.YqAjX1),
                sound: "unmute",
            },
            {
                label: K.intl.string(K.t.JoTq8v),
                sound: "camera_on",
            },
            {
                label: K.intl.string(K.t["8P6tQ0"]),
                sound: "camera_off",
            },
            {
                label: K.intl.string(K.t["juL9/P"]),
                sound: "disconnect",
            },
            {
                label: K.intl.string(K.t.x98vQk),
                sound: "ptt_start",
            },
            {
                label: K.intl.string(K.t["1HjRqK"]),
                sound: "ptt_stop",
            },
            {
                label: K.intl.string(K.t["9JB1Cg"]),
                sound: "user_join",
            },
            {
                label: K.intl.string(K.t.KUBBNj),
                sound: "user_leave",
            },
            {
                label: K.intl.string(K.t.EZjqUV),
                sound: "user_moved",
            },
            {
                label: K.intl.string(K.t.LnNlQk),
                sound: "call_calling",
            },
            {
                label: K.intl.string(K.t.XBrJT0),
                sound: "call_ringing",
            },
            {
                label: K.intl.string(K.t["Nd8P5+"]),
                sound: "stream_started",
            },
            {
                label: K.intl.string(K.t["9bYj+P"]),
                sound: "stream_ended",
            },
            {
                label: K.intl.string(K.t.KccUIy),
                sound: "stream_user_joined",
            },
            {
                label: K.intl.string(K.t.dsjkiI),
                sound: "stream_user_left",
            },
            {
                label: K.intl.string(K.t.nFOcf3),
                sound: "activity_launch",
            },
            {
                label: K.intl.string(K.t["a6lw/v"]),
                sound: "activity_end",
            },
            {
                label: K.intl.string(K.t.KaFxra),
                sound: "activity_user_join",
            },
            {
                label: K.intl.string(K.t.S14z9v),
                sound: "activity_user_left",
            },
            {
                label: K.intl.string(K.t.CP3DCw),
                sound: "reconnect",
            },
        ],
        p = null != v.Z.useHolidaySoundpack();
    return (0, r.jsx)(w.F, {
        setting: H.s6.NOTIFICATIONS_SOUNDS,
        children: (0, r.jsxs)(d.hjN, {
            children: [
                p
                    ? (0, r.jsxs)(r.Fragment, {
                          children: [
                              (0, r.jsx)(d.vwX, {
                                  className: q.marginBottom20,
                                  children: K.intl.string(K.t.fgSHf3),
                              }),
                              (0, r.jsx)(I.Z, {}),
                          ],
                      })
                    : null,
                (0, r.jsx)(d.vwX, {
                    className: o()(q.marginBottom20, q.marginTop20),
                    children: K.intl.string(K.t.MKWyKS),
                }),
                (0, r.jsx)(d.j7V, {
                    note: K.intl.string(K.t["7oXUio"]),
                    value: a,
                    onChange: _.default.setNotifyMessagesInSelectedChannel,
                    children: K.intl.string(K.t.lF5GGR),
                }),
                (0, r.jsx)(d.j7V, {
                    note: K.intl.string(K.t["+B0XLC"]),
                    value: n,
                    onChange: _.default.toggleDisableAllSounds,
                    children: K.intl.string(K.t["2ZhCOT"]),
                }),
                f.map((e) => {
                    let { label: i, sound: a, focusModeDisabled: o } = e;
                    return (0, r.jsx)(
                        et,
                        {
                            label: i,
                            disabled: n || !0 === o,
                            tooltip: o ? K.intl.string(K.t.cIRG0t) : void 0,
                            onChange: (e) => u(a, e),
                            onPreview: (e) => c(a, e),
                            enabled: !n && !t.includes(a) && !0 !== o,
                        },
                        a,
                    );
                }),
            ],
        }),
    });
}
function er() {
    let e = (0, c.e7)([O.Z], () => O.Z.getGuildAlertSettings()),
        [t, n] = i.useState(null),
        a = G.default.keys(e).map((t) => {
            let n = e[t];
            return {
                label: n.guildName,
                value: n.guildId,
            };
        });
    return 0 === Object.keys(e).length
        ? null
        : (0, r.jsxs)(w.F, {
              setting: H.s6.NOTIFICATIONS_COMMUNITY_ACTIVITY_ALERTS,
              children: [
                  (0, r.jsx)(d.X6q, {
                      variant: "heading-lg/semibold",
                      className: q.marginBottom20,
                      children: K.intl.string(K.t.D9yVAA),
                  }),
                  (0, r.jsx)(d.R94, {
                      type: d.geA.DESCRIPTION,
                      className: q.marginBottom20,
                      children: K.intl.string(K.t["0PhAOD"]),
                  }),
                  (0, r.jsxs)(d.xJW, {
                      title: K.intl.string(K.t.Q0PsXV),
                      children: [
                          (0, r.jsx)(d.q4e, {
                              className: null != t ? q.marginBottom20 : q.marginBottom40,
                              value: t,
                              onChange: (e) => {
                                  n(e);
                              },
                              options: a,
                          }),
                          null != t
                              ? (0, r.jsxs)("div", {
                                    className: q.marginTop20,
                                    children: [
                                        (0, r.jsxs)(w.F, {
                                            setting: H.s6.NOTIFICATIONS_COMMUNITY_IN_APP_ALERTS,
                                            children: [
                                                (0, r.jsx)(d.j7V, {
                                                    className: q.marginBottom20,
                                                    note: K.intl.string(K.t["z8Td4+"]),
                                                    value: !e[t].disableRaidAlertNag,
                                                    onChange: () => {
                                                        (0, V.PS)(
                                                            t,
                                                            (e) => {
                                                                e.disableRaidAlertNag = !e.disableRaidAlertNag;
                                                            },
                                                            V.fy.INFREQUENT_USER_ACTION,
                                                        );
                                                    },
                                                    hideBorder: !0,
                                                    children: K.intl.string(K.t.u6dc5O),
                                                }),
                                                (0, r.jsx)(d.$i$, { className: o()(q.marginTop20, q.marginBottom40) }),
                                            ],
                                        }),
                                        (0, r.jsxs)(w.F, {
                                            setting: H.s6.NOTIFICATIONS_COMMUNITY_PUSH_NOTIFICATIONS,
                                            children: [
                                                (0, r.jsx)(d.j7V, {
                                                    className: q.marginBottom20,
                                                    note: K.intl.string(K.t.PyxXs7),
                                                    value: !e[t].disableRaidAlertPush,
                                                    onChange: () => {
                                                        (0, V.PS)(
                                                            t,
                                                            (e) => {
                                                                e.disableRaidAlertPush = !e.disableRaidAlertPush;
                                                            },
                                                            V.fy.INFREQUENT_USER_ACTION,
                                                        );
                                                    },
                                                    hideBorder: !0,
                                                    children: K.intl.string(K.t.P8MG6u),
                                                }),
                                                (0, r.jsx)(d.$i$, { className: o()(q.marginTop20, q.marginBottom40) }),
                                            ],
                                        }),
                                    ],
                                })
                              : null,
                          null != t ? null : (0, r.jsx)(d.$i$, { className: o()(q.marginTop20, q.marginBottom40) }),
                      ],
                  }),
              ],
          });
}
class ei extends i.PureComponent {
    handleDesktopChange(e) {
        let t = e ? Y.qrD.ALL : Y.qrD.NEVER;
        t !== Y.qrD.NEVER ? ee("UserSettingsModal") : _.default.setDesktopType(t);
    }
    handleTTSChange(e) {
        let t = e.value;
        _.default.setTTSType(t);
    }
    render() {
        let {
                desktopType: e,
                afkTimeout: t,
                disableUnreadBadge: n,
                taskbarFlash: i,
                disabledSounds: a,
                disableAllSounds: s,
                notifyMessagesInSelectedChannel: c,
                focusMode: u,
            } = this.props,
            f = U.isPlatformEmbedded && (0, U.isWindows)(),
            _ = B.Z.getCurrentConfig({ location: "Messages" }).enabled || 0 === t ? 0 : 1,
            p = l()
                .range(_, 11)
                .map((e) => ({
                    value: 60 * e,
                    label:
                        0 === e ? K.intl.string(K.t["0QN7cX"]) : K.intl.formatToPlainString(K.t.iXLF9f, { minutes: e }),
                }));
        return (0, r.jsxs)(d.hjN, {
            tag: d.RB0.H1,
            title: K.intl.string(K.t.HcoRu7),
            children: [
                (0, r.jsx)(w.F, {
                    setting: H.s6.NOTIFICATIONS_ENABLE_DESKTOP,
                    children: (0, r.jsx)(d.j7V, {
                        className: q.marginBottom20,
                        value: e !== Y.qrD.NEVER && !u,
                        onChange: this.handleDesktopChange,
                        note: K.intl.string(K.t.wF9ih4),
                        disabled: u,
                        tooltipNote: u ? K.intl.string(K.t.cIRG0t) : void 0,
                        children: K.intl.string(K.t["/0WClp"]),
                    }),
                }),
                (0, r.jsx)(eo, {}),
                (0, r.jsx)(w.F, {
                    setting: H.s6.NOTIFICATIONS_UNREAD_MESSAGE_BADGE,
                    children: (0, r.jsx)(d.j7V, {
                        className: f ? q.marginBottom20 : q.marginBottom40,
                        value: !n,
                        note: K.intl.string(K.t["9K4qwc"]),
                        onChange: this.handleToggleShowUnreadBadge,
                        children: K.intl.string(K.t.VH8AIC),
                    }),
                }),
                (0, r.jsx)(w.F, {
                    setting: H.s6.NOTIFICATIONS_ENABLE_TASKBAR_FLASHING,
                    children: (0, r.jsx)(d.j7V, {
                        className: q.marginBottom40,
                        value: i,
                        note: K.intl.string(K.t["bd4j4+"]),
                        onChange: this.handleToggleShowFlash,
                        children: K.intl.string(K.t.xSmFQE),
                    }),
                }),
                (0, r.jsx)(es, {}),
                (0, r.jsx)(e_, {}),
                (0, r.jsx)(ef, {}),
                (0, r.jsx)(ed, {}),
                (0, r.jsx)(w.F, {
                    setting: H.s6.NOTIFICATIONS_PUSH_INACTIVE_TIMEOUT,
                    children: (0, r.jsxs)(d.xJW, {
                        title: K.intl.string(K.t.TTvjd3),
                        children: [
                            (0, r.jsx)(d.q4e, {
                                value: t,
                                onChange: Z.CM.updateSetting,
                                options: p,
                            }),
                            (0, r.jsx)(d.R94, {
                                type: d.geA.DESCRIPTION,
                                className: q.marginTop8,
                                children: K.intl.string(K.t.Xytv9P),
                            }),
                            (0, r.jsx)(d.$i$, { className: o()(q.marginTop40, q.marginBottom40) }),
                        ],
                    }),
                }),
                this.renderTTS(),
                (0, r.jsx)(er, {}),
                (0, r.jsx)(d.xJW, {
                    children: (0, r.jsx)(en, {
                        disabledSounds: a,
                        disableAllSounds: s,
                        notifyMessagesInSelectedChannel: c,
                    }),
                }),
                (0, r.jsx)(F.Z, {}),
            ],
        });
    }
    constructor(...e) {
        super(...e),
            X(this, "handleToggleShowUnreadBadge", () => {
                _.default.setDisableUnreadBadge(!this.props.disableUnreadBadge);
            }),
            X(this, "handleToggleShowFlash", () => {
                _.default.setTaskbarFlash(!this.props.taskbarFlash);
            }),
            X(this, "renderTTS", () => {
                if (!h.Zh) return null;
                let e = [
                    {
                        name: K.intl.string(K.t.B1AGeH),
                        value: Y.PrB.ALL_CHANNELS,
                    },
                    {
                        name: K.intl.string(K.t.uM2rNj),
                        value: Y.PrB.SELECTED_CHANNEL,
                    },
                    {
                        name: K.intl.string(K.t.DYO5Oj),
                        value: Y.PrB.NEVER,
                    },
                ];
                return (0, r.jsxs)(w.F, {
                    setting: H.s6.NOTIFICATIONS_TEXT_TO_SPEECH,
                    children: [
                        (0, r.jsxs)(d.xJW, {
                            title: K.intl.string(K.t.VIm5MD),
                            children: [
                                (0, r.jsx)(d.R94, {
                                    type: d.geA.DESCRIPTION,
                                    className: q.marginBottom8,
                                    children: K.intl.string(K.t["+4dnAw"]),
                                }),
                                (0, r.jsx)(d.FXm, {
                                    options: e,
                                    onChange: this.handleTTSChange,
                                    value: this.props.ttsType,
                                }),
                            ],
                        }),
                        (0, r.jsx)(d.$i$, { className: o()(q.marginTop40, q.marginBottom40) }),
                    ],
                });
            });
    }
}
let ea = (0, g.B)({
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
function eo() {
    let e = ea.useExperiment({ location: "settings" }, { autoTrackExposure: !1 }).enabled,
        t = (0, c.e7)([M.ZP], () => M.ZP.mentionOnAllMessages);
    return e
        ? (0, r.jsx)(w.F, {
              setting: H.s6.NOTIFICATIONS_MENTION_ON_ALL_MESSAGES,
              children: (0, r.jsx)(d.j7V, {
                  className: q.marginBottom20,
                  value: t,
                  onChange: (e) => {
                      p.Z.setAccountFlag(W.c.MENTION_ON_ALL_MESSAGES, e);
                  },
                  note: "Increments the mention count when receiving a message in a channel set to 'All Messages'",
                  children: "Mention on all messages?",
              }),
          })
        : null;
}
function es() {
    let e = A.xT.useExperiment({ location: "UserSettingsNotifications" }, { autoTrackExposure: !1 }).enabled,
        { manuallyOpen: t } = A.fs.useExperiment({ location: "UserSettingsNotifications" }, { autoTrackExposure: !1 }),
        n = (0, c.e7)([M.ZP], () => M.ZP.useNewNotifications),
        [a, s] = i.useState(!1);
    return e && (n || t)
        ? (0, r.jsxs)(r.Fragment, {
              children: [
                  n
                      ? (0, r.jsx)(w.F, {
                            setting: H.s6.NOTIFICATIONS_UNREAD_SETTINGS,
                            children: (0, r.jsx)(d.j7V, {
                                className: q.marginBottom40,
                                value: n,
                                disabled: a || !n,
                                note: K.intl.string(K.t.frbLrK),
                                onChange: () => el(s),
                                children: K.intl.string(K.t.z21l8P),
                            }),
                        })
                      : t
                        ? (0, r.jsx)(w.F, {
                              setting: H.s6.NOTIFICATIONS_UNREAD_SETTINGS,
                              children: (0, r.jsx)(d.j7V, {
                                  className: q.marginBottom40,
                                  value: n,
                                  disabled: a || n,
                                  note: "Turns on the new notification system",
                                  onChange: (e) => {
                                      p.Z.setAccountFlag(W.c.USE_NEW_NOTIFICATIONS, e);
                                  },
                                  children: K.intl.string(K.t.z21l8P),
                              }),
                          })
                        : null,
                  (0, r.jsxs)(w.F, {
                      setting: H.s6.NOTIFICATIONS_NEW_SETTINGS,
                      children: [
                          (0, r.jsx)(d.xJW, {
                              title: "New Notification Settings (Advanced, Staff Only)",
                              children: (0, r.jsxs)("div", {
                                  style: {
                                      display: "flex",
                                      gap: 16,
                                  },
                                  children: [
                                      (0, r.jsx)(w.F, {
                                          setting: H.s6.NOTIFICATIONS_RESTORE_MOST_RECENT_SNAPSHOT,
                                          children: (0, r.jsx)(d.zxk, {
                                              variant: "primary",
                                              text: "Restore most recent snapshot",
                                              onClick: S.KP,
                                          }),
                                      }),
                                      (0, r.jsx)(w.F, {
                                          setting: H.s6.NOTIFICATIONS_LAUNCH_MIGRATION,
                                          children: (0, r.jsx)(d.zxk, {
                                              variant: "primary",
                                              text: "Launch Migration",
                                              onClick: () => {
                                                  (0, N.R)(!0);
                                              },
                                          }),
                                      }),
                                      (0, r.jsx)(w.F, {
                                          setting: H.s6.NOTIFICATIONS_TOGGLE_NEW_SYSTEM,
                                          children: (0, r.jsx)(d.j7V, {
                                              hideBorder: !0,
                                              value: n,
                                              onChange: (e) => {
                                                  p.Z.setAccountFlag(W.c.USE_NEW_NOTIFICATIONS, e);
                                              },
                                              children: "Toggle new system on/off",
                                          }),
                                      }),
                                  ],
                              }),
                          }),
                          (0, r.jsx)(d.$i$, { className: o()(q.marginTop40, q.marginBottom40) }),
                      ],
                  }),
              ],
          })
        : null;
}
async function el(e) {
    e(!0);
    let t = await (0, S.Tn)();
    0 === t.length
        ? await (0, C.oL)()
        : f.Z.show({
              title: K.intl.string(K.t["cY+Ooa"]),
              body: K.intl.format(K.t["7zTJJS"], { date: new Date(t[t.length - 1].recorded_at) }),
              cancelText: K.intl.string(K.t["ETE/oK"]),
              confirmText: K.intl.string(K.t.Rm96T0),
              onConfirm: C.oL,
          }),
        e(!1);
}
function ec(e) {
    let t = (0, T.p)();
    return (0, r.jsx)(ei, $(Q({}, e), { focusMode: t }));
}
function eu() {
    let e = (0, c.cj)([j.Z], () => ({
        disableUnreadBadge: j.Z.getDisableUnreadBadge(),
        taskbarFlash: j.Z.taskbarFlash,
        disabledSounds: j.Z.getDisabledSounds(),
        disableAllSounds: j.Z.getDisableAllSounds(),
        desktopType: j.Z.getDesktopType(),
        ttsType: j.Z.getTTSType(),
        notifyMessagesInSelectedChannel: j.Z.getNotifyMessagesInSelectedChannel(),
    }));
    return (0, r.jsx)(ec, $(Q({}, e), { afkTimeout: Z.CM.useSetting() }));
}
function ed() {
    let e = (0, b._x)("notification_settings"),
        t = (0, y.BH)(),
        n = (0, y.nC)(),
        i = (0, c.e7)([m.Z], () => m.Z.currentUserApplicationIds.size > 0);
    if (!e) return null;
    let a = [
            {
                name: K.intl.string(K.t.PCRbS0),
                value: u.Tv.ACTIVITY_NOTIFICATIONS_ENABLED,
            },
            {
                name: K.intl.string(K.t.UBa6pa),
                value: u.Tv.ONLY_GAMES_PLAYED,
                disabled: !i,
                desc: i ? null : K.intl.string(K.t.XIH6xM),
            },
            {
                name: K.intl.string(K.t.TCxJ8v),
                value: u.Tv.ACTIVITY_NOTIFICATIONS_DISABLED,
            },
        ],
        o = (e) => {
            Z.YT.updateSetting(e.value);
        },
        s = () => {
            Z.Qq.updateSetting(!n);
        };
    return (0, r.jsxs)(w.F, {
        setting: H.s6.NOTIFICATIONS_GAME_ACTIVITY,
        children: [
            (0, r.jsxs)(d.xJW, {
                title: K.intl.string(K.t.omtoJy),
                className: q.marginBottom20,
                children: [
                    (0, r.jsx)(d.R94, {
                        type: d.geA.DESCRIPTION,
                        className: q.marginBottom8,
                        children: K.intl.string(K.t.ncS4CA),
                    }),
                    (0, r.jsx)(d.FXm, {
                        options: a,
                        onChange: o,
                        value: t,
                    }),
                ],
            }),
            (0, r.jsx)(d.j7V, {
                onChange: s,
                value: n,
                children: K.intl.string(K.t.SZue3N),
            }),
        ],
    });
}
function ef() {
    let e = Z.fz.useSetting(),
        t = [
            {
                name: K.intl.string(K.t["9x/Rtb"]),
                value: u.Ns.NOTIFICATIONS_ENABLED,
            },
            {
                name: K.intl.string(K.t.fJAbQU),
                value: u.Ns.ONLY_DMS,
            },
            {
                name: K.intl.string(K.t["xu+UDQ"]),
                value: u.Ns.NOTIFICATIONS_DISABLED,
            },
        ],
        n = (t) => {
            (0, P.MR)(t.value, e);
        };
    return R.Z.getCurrentConfig({ location: "webSettings" }).enableInAppNotifications
        ? (0, r.jsxs)(w.F, {
              setting: H.s6.NOTIFICATIONS_REACTIONS,
              children: [
                  (0, r.jsxs)(d.xJW, {
                      title: K.intl.string(K.t.Rq0NFh),
                      children: [
                          (0, r.jsx)(d.R94, {
                              type: d.geA.DESCRIPTION,
                              className: q.marginBottom8,
                              children: K.intl.string(K.t.oWF6eX),
                          }),
                          (0, r.jsx)(d.FXm, {
                              options: t,
                              onChange: n,
                              value: e,
                          }),
                      ],
                  }),
                  (0, r.jsx)(d.$i$, { className: o()(q.marginTop40, q.marginBottom40) }),
              ],
          })
        : null;
}
function e_() {
    let e = Z.d8.useSetting();
    return (0, x.Az)("webSettings").enabled
        ? (0, r.jsx)(w.F, {
              setting: H.s6.NOTIFICATIONS_VOICE_ACTIVITY,
              children: (0, r.jsx)(d.j7V, {
                  value: e,
                  onChange: L.I,
                  note: K.intl.string(K.t.rngMNz),
                  children: (0, r.jsxs)(d.vwX, {
                      className: z.titleWithBeta,
                      children: [K.intl.string(K.t.wtk08f), (0, r.jsx)(E.Z, {})],
                  }),
              }),
          })
        : null;
}
