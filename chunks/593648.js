n.d(t, { Z: () => eo }), n(539854), n(388685);
var i = n(255367),
    r = n(73800),
    s = n(120356),
    a = n.n(s),
    l = n(392711),
    o = n.n(l),
    c = n(442837),
    d = n(524437),
    u = n(481060),
    m = n(668781),
    p = n(292556),
    g = n(87051),
    h = n(419363),
    f = n(761781),
    b = n(818083),
    x = n(688465),
    _ = n(890022),
    j = n(688907),
    E = n(487419),
    C = n(197344),
    O = n(476756),
    v = n(734934),
    S = n(223683),
    T = n(312400),
    I = n(115345),
    N = n(392888),
    y = n(106371),
    A = n(995774),
    P = n(921801),
    R = n(460181),
    D = n(462354),
    Z = n(210176),
    w = n(292959),
    k = n(9156),
    L = n(912101),
    B = n(358085),
    M = n(709054),
    U = n(45640),
    V = n(695346),
    G = n(675478),
    F = n(33656),
    H = n(726985),
    z = n(981631),
    W = n(468788),
    Y = n(388032),
    K = n(728495),
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
function J(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            i = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            i.forEach(function (t) {
                X(e, t, n[t]);
            });
    }
    return e;
}
function Q(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var i = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, i);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function $(e) {
    let { label: t, enabled: n, disabled: r, onPreview: s, onChange: a, tooltip: l } = e;
    return (0, i.jsx)(u.j7V, {
        className: K.soundRow,
        value: n,
        onChange: a,
        disabled: r,
        tooltipNote: l,
        children: (0, i.jsxs)("div", {
            className: K.notificationSound,
            children: [
                (0, i.jsx)("div", {
                    className: K.soundName,
                    children: t,
                }),
                (0, i.jsx)(u.P3F, {
                    className: K.soundIcon,
                    onClick: s,
                    "aria-label": Y.intl.string(Y.t.Kd4uxM),
                    children: (0, i.jsx)(u.gj8, {
                        size: "xs",
                        color: "currentColor",
                        className: K.icon,
                        "aria-hidden": !0,
                    }),
                }),
            ],
        }),
    });
}
function ee(e) {
    let { disabledSounds: t, disableAllSounds: n, notifyMessagesInSelectedChannel: s } = e,
        l = r.useRef(null),
        o = (0, v.p)(),
        c = r.useCallback((e, t) => {
            t.stopPropagation(), t.preventDefault(), null != l.current && l.current.stop(), (l.current = (0, R.GN)(e));
        }, []),
        d = r.useCallback(
            (e, n) => {
                let i = t.filter((t) => t !== e);
                n || i.push(e), p.default.setDisabledSounds(i);
            },
            [t],
        );
    r.useEffect(() => () => {
        var e;
        null == (e = l.current) || e.stop();
    });
    let m = [
            {
                label: Y.intl.string(Y.t.pz71xM),
                sound: "message1",
                focusModeDisabled: o,
            },
            {
                label: Y.intl.string(Y.t.hK51Ym),
                sound: "deafen",
            },
            {
                label: Y.intl.string(Y.t.XiejaG),
                sound: "undeafen",
            },
            {
                label: Y.intl.string(Y.t["w4m94+"]),
                sound: "mute",
            },
            {
                label: Y.intl.string(Y.t.YqAjX1),
                sound: "unmute",
            },
            {
                label: Y.intl.string(Y.t.JoTq8v),
                sound: "camera_on",
            },
            {
                label: Y.intl.string(Y.t["8P6tQ0"]),
                sound: "camera_off",
            },
            {
                label: Y.intl.string(Y.t["juL9/P"]),
                sound: "disconnect",
            },
            {
                label: Y.intl.string(Y.t.x98vQk),
                sound: "ptt_start",
            },
            {
                label: Y.intl.string(Y.t["1HjRqK"]),
                sound: "ptt_stop",
            },
            {
                label: Y.intl.string(Y.t["9JB1Cg"]),
                sound: "user_join",
            },
            {
                label: Y.intl.string(Y.t.KUBBNj),
                sound: "user_leave",
            },
            {
                label: Y.intl.string(Y.t.EZjqUV),
                sound: "user_moved",
            },
            {
                label: Y.intl.string(Y.t.LnNlQk),
                sound: "call_calling",
            },
            {
                label: Y.intl.string(Y.t.XBrJT0),
                sound: "call_ringing",
            },
            {
                label: Y.intl.string(Y.t["Nd8P5+"]),
                sound: "stream_started",
            },
            {
                label: Y.intl.string(Y.t["9bYj+P"]),
                sound: "stream_ended",
            },
            {
                label: Y.intl.string(Y.t.KccUIy),
                sound: "stream_user_joined",
            },
            {
                label: Y.intl.string(Y.t.dsjkiI),
                sound: "stream_user_left",
            },
            {
                label: Y.intl.string(Y.t.nFOcf3),
                sound: "activity_launch",
            },
            {
                label: Y.intl.string(Y.t["a6lw/v"]),
                sound: "activity_end",
            },
            {
                label: Y.intl.string(Y.t.KaFxra),
                sound: "activity_user_join",
            },
            {
                label: Y.intl.string(Y.t.S14z9v),
                sound: "activity_user_left",
            },
            {
                label: Y.intl.string(Y.t.CP3DCw),
                sound: "reconnect",
            },
        ],
        g = null != C.Z.useHolidaySoundpack();
    return (0, i.jsx)(P.F, {
        setting: H.s6.NOTIFICATIONS_SOUNDS,
        children: (0, i.jsxs)(u.hjN, {
            children: [
                g
                    ? (0, i.jsxs)(i.Fragment, {
                          children: [
                              (0, i.jsx)(u.vwX, {
                                  className: q.marginBottom20,
                                  children: Y.intl.string(Y.t.fgSHf3),
                              }),
                              (0, i.jsx)(O.Z, {}),
                          ],
                      })
                    : null,
                (0, i.jsx)(u.vwX, {
                    className: a()(q.marginBottom20, q.marginTop20),
                    children: Y.intl.string(Y.t.MKWyKS),
                }),
                (0, i.jsx)(u.j7V, {
                    note: Y.intl.string(Y.t["7oXUio"]),
                    value: s,
                    onChange: p.default.setNotifyMessagesInSelectedChannel,
                    children: Y.intl.string(Y.t.lF5GGR),
                }),
                (0, i.jsx)(u.j7V, {
                    note: Y.intl.string(Y.t["+B0XLC"]),
                    value: n,
                    onChange: p.default.toggleDisableAllSounds,
                    children: Y.intl.string(Y.t["2ZhCOT"]),
                }),
                m.map((e) => {
                    let { label: r, sound: s, focusModeDisabled: a } = e;
                    return (0, i.jsx)(
                        $,
                        {
                            label: r,
                            disabled: n || !0 === a,
                            tooltip: a ? Y.intl.string(Y.t.cIRG0t) : void 0,
                            onChange: (e) => d(s, e),
                            onPreview: (e) => c(s, e),
                            enabled: !n && !t.includes(s) && !0 !== a,
                        },
                        s,
                    );
                }),
            ],
        }),
    });
}
function et() {
    let e = (0, c.e7)([E.Z], () => E.Z.getGuildAlertSettings()),
        [t, n] = r.useState(null),
        s = M.default.keys(e).map((t) => {
            let n = e[t];
            return {
                label: n.guildName,
                value: n.guildId,
            };
        });
    return 0 === Object.keys(e).length
        ? null
        : (0, i.jsxs)(P.F, {
              setting: H.s6.NOTIFICATIONS_COMMUNITY_ACTIVITY_ALERTS,
              children: [
                  (0, i.jsx)(u.X6q, {
                      variant: "heading-lg/semibold",
                      className: q.marginBottom20,
                      children: Y.intl.string(Y.t.D9yVAA),
                  }),
                  (0, i.jsx)(u.R94, {
                      type: u.geA.DESCRIPTION,
                      className: q.marginBottom20,
                      children: Y.intl.string(Y.t["0PhAOD"]),
                  }),
                  (0, i.jsxs)(u.xJW, {
                      title: Y.intl.string(Y.t.Q0PsXV),
                      children: [
                          (0, i.jsx)(u.q4e, {
                              className: null != t ? q.marginBottom20 : q.marginBottom40,
                              value: t,
                              onChange: (e) => {
                                  n(e);
                              },
                              options: s,
                          }),
                          null != t
                              ? (0, i.jsxs)("div", {
                                    className: q.marginTop20,
                                    children: [
                                        (0, i.jsxs)(P.F, {
                                            setting: H.s6.NOTIFICATIONS_COMMUNITY_IN_APP_ALERTS,
                                            children: [
                                                (0, i.jsx)(u.j7V, {
                                                    className: q.marginBottom20,
                                                    note: Y.intl.string(Y.t["z8Td4+"]),
                                                    value: !e[t].disableRaidAlertNag,
                                                    onChange: () => {
                                                        (0, G.PS)(
                                                            t,
                                                            (e) => {
                                                                e.disableRaidAlertNag = !e.disableRaidAlertNag;
                                                            },
                                                            G.fy.INFREQUENT_USER_ACTION,
                                                        );
                                                    },
                                                    hideBorder: !0,
                                                    children: Y.intl.string(Y.t.u6dc5O),
                                                }),
                                                (0, i.jsx)(u.$i$, { className: a()(q.marginTop20, q.marginBottom40) }),
                                            ],
                                        }),
                                        (0, i.jsxs)(P.F, {
                                            setting: H.s6.NOTIFICATIONS_COMMUNITY_PUSH_NOTIFICATIONS,
                                            children: [
                                                (0, i.jsx)(u.j7V, {
                                                    className: q.marginBottom20,
                                                    note: Y.intl.string(Y.t.PyxXs7),
                                                    value: !e[t].disableRaidAlertPush,
                                                    onChange: () => {
                                                        (0, G.PS)(
                                                            t,
                                                            (e) => {
                                                                e.disableRaidAlertPush = !e.disableRaidAlertPush;
                                                            },
                                                            G.fy.INFREQUENT_USER_ACTION,
                                                        );
                                                    },
                                                    hideBorder: !0,
                                                    children: Y.intl.string(Y.t.P8MG6u),
                                                }),
                                                (0, i.jsx)(u.$i$, { className: a()(q.marginTop20, q.marginBottom40) }),
                                            ],
                                        }),
                                    ],
                                })
                              : null,
                          null != t ? null : (0, i.jsx)(u.$i$, { className: a()(q.marginTop20, q.marginBottom40) }),
                      ],
                  }),
              ],
          });
}
class en extends r.PureComponent {
    handleDesktopChange(e) {
        let t = e ? z.qrD.ALL : z.qrD.NEVER;
        if (t !== z.qrD.NEVER)
            L.Z.requestPermission((e) => {
                let t = e ? z.$Ab.ENABLED : z.$Ab.BLOCKED;
                p.default.setPermissionsState(t, "UserSettingsModal");
            });
        else p.default.setDesktopType(t);
    }
    handleTTSChange(e) {
        let t = e.value;
        p.default.setTTSType(t);
    }
    render() {
        let {
                desktopType: e,
                afkTimeout: t,
                disableUnreadBadge: n,
                taskbarFlash: r,
                disabledSounds: s,
                disableAllSounds: l,
                notifyMessagesInSelectedChannel: c,
                focusMode: d,
            } = this.props,
            m = B.isPlatformEmbedded && (0, B.isWindows)(),
            p = U.Z.getCurrentConfig({ location: "Messages" }).enabled,
            g = o()
                .range(p || 0 === t ? 0 : 1, 11)
                .map((e) => ({
                    value: 60 * e,
                    label:
                        0 === e ? Y.intl.string(Y.t["0QN7cX"]) : Y.intl.formatToPlainString(Y.t.iXLF9f, { minutes: e }),
                }));
        return (0, i.jsxs)(u.hjN, {
            tag: u.RB0.H1,
            title: Y.intl.string(Y.t.HcoRu7),
            children: [
                (0, i.jsx)(P.F, {
                    setting: H.s6.NOTIFICATIONS_ENABLE_DESKTOP,
                    children: (0, i.jsx)(u.j7V, {
                        className: q.marginBottom20,
                        value: e !== z.qrD.NEVER && !d,
                        onChange: this.handleDesktopChange,
                        note: Y.intl.string(Y.t.wF9ih4),
                        disabled: d,
                        tooltipNote: d ? Y.intl.string(Y.t.cIRG0t) : void 0,
                        children: Y.intl.string(Y.t["/0WClp"]),
                    }),
                }),
                (0, i.jsx)(er, {}),
                (0, i.jsx)(P.F, {
                    setting: H.s6.NOTIFICATIONS_UNREAD_MESSAGE_BADGE,
                    children: (0, i.jsx)(u.j7V, {
                        className: m ? q.marginBottom20 : q.marginBottom40,
                        value: !n,
                        note: Y.intl.string(Y.t["9K4qwc"]),
                        onChange: this.handleToggleShowUnreadBadge,
                        children: Y.intl.string(Y.t.VH8AIC),
                    }),
                }),
                (0, i.jsx)(P.F, {
                    setting: H.s6.NOTIFICATIONS_ENABLE_TASKBAR_FLASHING,
                    children: (0, i.jsx)(u.j7V, {
                        className: q.marginBottom40,
                        value: r,
                        note: Y.intl.string(Y.t["bd4j4+"]),
                        onChange: this.handleToggleShowFlash,
                        children: Y.intl.string(Y.t.xSmFQE),
                    }),
                }),
                (0, i.jsx)(es, {}),
                (0, i.jsx)(eu, {}),
                (0, i.jsx)(ed, {}),
                (0, i.jsx)(ec, {}),
                (0, i.jsx)(P.F, {
                    setting: H.s6.NOTIFICATIONS_PUSH_INACTIVE_TIMEOUT,
                    children: (0, i.jsxs)(u.xJW, {
                        title: Y.intl.string(Y.t.TTvjd3),
                        children: [
                            (0, i.jsx)(u.q4e, {
                                value: t,
                                onChange: V.CM.updateSetting,
                                options: g,
                            }),
                            (0, i.jsx)(u.R94, {
                                type: u.geA.DESCRIPTION,
                                className: q.marginTop8,
                                children: Y.intl.string(Y.t.Xytv9P),
                            }),
                            (0, i.jsx)(u.$i$, { className: a()(q.marginTop40, q.marginBottom40) }),
                        ],
                    }),
                }),
                this.renderTTS(),
                (0, i.jsx)(et, {}),
                (0, i.jsx)(u.xJW, {
                    children: (0, i.jsx)(ee, {
                        disabledSounds: s,
                        disableAllSounds: l,
                        notifyMessagesInSelectedChannel: c,
                    }),
                }),
                (0, i.jsx)(F.Z, {}),
            ],
        });
    }
    constructor(...e) {
        super(...e),
            X(this, "handleToggleShowUnreadBadge", () => {
                p.default.setDisableUnreadBadge(!this.props.disableUnreadBadge);
            }),
            X(this, "handleToggleShowFlash", () => {
                p.default.setTaskbarFlash(!this.props.taskbarFlash);
            }),
            X(this, "renderTTS", () => {
                if (!h.Zh) return null;
                let e = [
                    {
                        name: Y.intl.string(Y.t.B1AGeH),
                        value: z.PrB.ALL_CHANNELS,
                    },
                    {
                        name: Y.intl.string(Y.t.uM2rNj),
                        value: z.PrB.SELECTED_CHANNEL,
                    },
                    {
                        name: Y.intl.string(Y.t.DYO5Oj),
                        value: z.PrB.NEVER,
                    },
                ];
                return (0, i.jsxs)(P.F, {
                    setting: H.s6.NOTIFICATIONS_TEXT_TO_SPEECH,
                    children: [
                        (0, i.jsxs)(u.xJW, {
                            title: Y.intl.string(Y.t.VIm5MD),
                            children: [
                                (0, i.jsx)(u.R94, {
                                    type: u.geA.DESCRIPTION,
                                    className: q.marginBottom8,
                                    children: Y.intl.string(Y.t["+4dnAw"]),
                                }),
                                (0, i.jsx)(u.FXm, {
                                    options: e,
                                    onChange: this.handleTTSChange,
                                    value: this.props.ttsType,
                                }),
                            ],
                        }),
                        (0, i.jsx)(u.$i$, { className: a()(q.marginTop40, q.marginBottom40) }),
                    ],
                });
            });
    }
}
let ei = (0, b.B)({
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
    let e = ei.useExperiment({ location: "settings" }, { autoTrackExposure: !1 }).enabled,
        t = (0, c.e7)([k.ZP], () => k.ZP.mentionOnAllMessages);
    return e
        ? (0, i.jsx)(P.F, {
              setting: H.s6.NOTIFICATIONS_MENTION_ON_ALL_MESSAGES,
              children: (0, i.jsx)(u.j7V, {
                  className: q.marginBottom20,
                  value: t,
                  onChange: (e) => {
                      g.Z.setAccountFlag(W.c.MENTION_ON_ALL_MESSAGES, e);
                  },
                  note: "Increments the mention count when receiving a message in a channel set to 'All Messages'",
                  children: "Mention on all messages?",
              }),
          })
        : null;
}
function es() {
    let e = T.xT.useExperiment({ location: "UserSettingsNotifications" }, { autoTrackExposure: !1 }).enabled,
        { manuallyOpen: t } = T.fs.useExperiment({ location: "UserSettingsNotifications" }, { autoTrackExposure: !1 }),
        n = (0, c.e7)([k.ZP], () => k.ZP.useNewNotifications),
        [s, l] = r.useState(!1);
    return e && (n || t)
        ? (0, i.jsxs)(i.Fragment, {
              children: [
                  n
                      ? (0, i.jsx)(P.F, {
                            setting: H.s6.NOTIFICATIONS_UNREAD_SETTINGS,
                            children: (0, i.jsx)(u.j7V, {
                                className: q.marginBottom40,
                                value: n,
                                disabled: s || !n,
                                note: Y.intl.string(Y.t.frbLrK),
                                onChange: () => ea(l),
                                children: Y.intl.string(Y.t.z21l8P),
                            }),
                        })
                      : t
                        ? (0, i.jsx)(P.F, {
                              setting: H.s6.NOTIFICATIONS_UNREAD_SETTINGS,
                              children: (0, i.jsx)(u.j7V, {
                                  className: q.marginBottom40,
                                  value: n,
                                  disabled: s || n,
                                  note: "Turns on the new notification system",
                                  onChange: (e) => {
                                      g.Z.setAccountFlag(W.c.USE_NEW_NOTIFICATIONS, e);
                                  },
                                  children: Y.intl.string(Y.t.z21l8P),
                              }),
                          })
                        : null,
                  (0, i.jsxs)(P.F, {
                      setting: H.s6.NOTIFICATIONS_NEW_SETTINGS,
                      children: [
                          (0, i.jsx)(u.xJW, {
                              title: "New Notification Settings (Advanced, Staff Only)",
                              children: (0, i.jsxs)("div", {
                                  style: {
                                      display: "flex",
                                      gap: 16,
                                  },
                                  children: [
                                      (0, i.jsx)(P.F, {
                                          setting: H.s6.NOTIFICATIONS_RESTORE_MOST_RECENT_SNAPSHOT,
                                          children: (0, i.jsx)(u.zxk, {
                                              variant: "primary",
                                              text: "Restore most recent snapshot",
                                              onClick: S.KP,
                                          }),
                                      }),
                                      (0, i.jsx)(P.F, {
                                          setting: H.s6.NOTIFICATIONS_LAUNCH_MIGRATION,
                                          children: (0, i.jsx)(u.zxk, {
                                              variant: "primary",
                                              text: "Launch Migration",
                                              onClick: () => {
                                                  (0, N.R)(!0);
                                              },
                                          }),
                                      }),
                                      (0, i.jsx)(P.F, {
                                          setting: H.s6.NOTIFICATIONS_TOGGLE_NEW_SYSTEM,
                                          children: (0, i.jsx)(u.j7V, {
                                              hideBorder: !0,
                                              value: n,
                                              onChange: (e) => {
                                                  g.Z.setAccountFlag(W.c.USE_NEW_NOTIFICATIONS, e);
                                              },
                                              children: "Toggle new system on/off",
                                          }),
                                      }),
                                  ],
                              }),
                          }),
                          (0, i.jsx)(u.$i$, { className: a()(q.marginTop40, q.marginBottom40) }),
                      ],
                  }),
              ],
          })
        : null;
}
async function ea(e) {
    e(!0);
    let t = await (0, S.Tn)();
    0 === t.length
        ? await (0, I.oL)()
        : m.Z.show({
              title: Y.intl.string(Y.t["cY+Ooa"]),
              body: Y.intl.format(Y.t["7zTJJS"], { date: new Date(t[t.length - 1].recorded_at) }),
              cancelText: Y.intl.string(Y.t["ETE/oK"]),
              confirmText: Y.intl.string(Y.t.Rm96T0),
              onConfirm: I.oL,
          }),
        e(!1);
}
function el(e) {
    let t = (0, v.p)();
    return (0, i.jsx)(en, Q(J({}, e), { focusMode: t }));
}
function eo() {
    let e = (0, c.cj)([w.Z], () => ({
        disableUnreadBadge: w.Z.getDisableUnreadBadge(),
        taskbarFlash: w.Z.taskbarFlash,
        disabledSounds: w.Z.getDisabledSounds(),
        disableAllSounds: w.Z.getDisableAllSounds(),
        desktopType: w.Z.getDesktopType(),
        ttsType: w.Z.getTTSType(),
        notifyMessagesInSelectedChannel: w.Z.getNotifyMessagesInSelectedChannel(),
    }));
    return (0, i.jsx)(el, Q(J({}, e), { afkTimeout: V.CM.useSetting() }));
}
function ec() {
    let e = (0, _._x)("notification_settings"),
        t = (0, j.BH)(),
        n = (0, j.nC)(),
        r = (0, c.e7)([f.Z], () => f.Z.currentUserApplicationIds.size > 0);
    if (!e) return null;
    let s = [
        {
            name: Y.intl.string(Y.t.PCRbS0),
            value: d.Tv.ACTIVITY_NOTIFICATIONS_ENABLED,
        },
        {
            name: Y.intl.string(Y.t.UBa6pa),
            value: d.Tv.ONLY_GAMES_PLAYED,
            disabled: !r,
            desc: r ? null : Y.intl.string(Y.t.XIH6xM),
        },
        {
            name: Y.intl.string(Y.t.TCxJ8v),
            value: d.Tv.ACTIVITY_NOTIFICATIONS_DISABLED,
        },
    ];
    return (0, i.jsxs)(P.F, {
        setting: H.s6.NOTIFICATIONS_GAME_ACTIVITY,
        children: [
            (0, i.jsxs)(u.xJW, {
                title: Y.intl.string(Y.t.omtoJy),
                className: q.marginBottom20,
                children: [
                    (0, i.jsx)(u.R94, {
                        type: u.geA.DESCRIPTION,
                        className: q.marginBottom8,
                        children: Y.intl.string(Y.t.ncS4CA),
                    }),
                    (0, i.jsx)(u.FXm, {
                        options: s,
                        onChange: (e) => {
                            V.YT.updateSetting(e.value);
                        },
                        value: t,
                    }),
                ],
            }),
            (0, i.jsx)(u.j7V, {
                onChange: () => {
                    V.Qq.updateSetting(!n);
                },
                value: n,
                children: Y.intl.string(Y.t.SZue3N),
            }),
        ],
    });
}
function ed() {
    let e = V.fz.useSetting(),
        t = [
            {
                name: Y.intl.string(Y.t["9x/Rtb"]),
                value: d.Ns.NOTIFICATIONS_ENABLED,
            },
            {
                name: Y.intl.string(Y.t.fJAbQU),
                value: d.Ns.ONLY_DMS,
            },
            {
                name: Y.intl.string(Y.t["xu+UDQ"]),
                value: d.Ns.NOTIFICATIONS_DISABLED,
            },
        ];
    return y.Z.getCurrentConfig({ location: "webSettings" }).enableInAppNotifications
        ? (0, i.jsxs)(P.F, {
              setting: H.s6.NOTIFICATIONS_REACTIONS,
              children: [
                  (0, i.jsxs)(u.xJW, {
                      title: Y.intl.string(Y.t.Rq0NFh),
                      children: [
                          (0, i.jsx)(u.R94, {
                              type: u.geA.DESCRIPTION,
                              className: q.marginBottom8,
                              children: Y.intl.string(Y.t.oWF6eX),
                          }),
                          (0, i.jsx)(u.FXm, {
                              options: t,
                              onChange: (t) => {
                                  (0, A.MR)(t.value, e);
                              },
                              value: e,
                          }),
                      ],
                  }),
                  (0, i.jsx)(u.$i$, { className: a()(q.marginTop40, q.marginBottom40) }),
              ],
          })
        : null;
}
function eu() {
    let e = V.d8.useSetting();
    return (0, D.Az)("webSettings").enabled
        ? (0, i.jsx)(P.F, {
              setting: H.s6.NOTIFICATIONS_VOICE_ACTIVITY,
              children: (0, i.jsx)(u.j7V, {
                  value: e,
                  onChange: Z.I,
                  note: Y.intl.string(Y.t.rngMNz),
                  children: (0, i.jsxs)(u.vwX, {
                      className: K.titleWithBeta,
                      children: [Y.intl.string(Y.t.wtk08f), (0, i.jsx)(x.Z, {})],
                  }),
              }),
          })
        : null;
}
