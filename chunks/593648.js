n.d(t, { Z: () => el }), n(539854), n(388685);
var r = n(951288),
    i = n(647438),
    a = n(120356),
    o = n.n(a),
    s = n(392711),
    l = n.n(s),
    c = n(442837),
    u = n(524437),
    d = n(538534),
    f = n(481060),
    _ = n(668781),
    p = n(292556),
    h = n(87051),
    m = n(419363),
    g = n(818083),
    E = n(688465),
    b = n(487419),
    y = n(197344),
    O = n(476756),
    v = n(734934),
    I = n(223683),
    T = n(312400),
    S = n(115345),
    A = n(392888),
    C = n(106371),
    N = n(995774),
    R = n(921801),
    P = n(460181),
    w = n(210176),
    D = n(292959),
    x = n(9156),
    L = n(912101),
    j = n(358085),
    M = n(709054),
    k = n(45640),
    U = n(695346),
    G = n(675478),
    B = n(273313),
    Z = n(33656),
    F = n(726985),
    V = n(981631),
    H = n(468788),
    Y = n(388032),
    W = n(728495),
    K = n(197571);
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
function Q(e, t) {
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
function J(e) {
    L.Z.requestPermission((t) => {
        let n = t ? V.$Ab.ENABLED : V.$Ab.BLOCKED;
        p.default.setPermissionsState(n, e);
    });
}
function $(e) {
    let { label: t, enabled: n, disabled: i, onPreview: a, onChange: o, tooltip: s } = e;
    return (0, r.jsx)(f.j7V, {
        className: W.soundRow,
        value: n,
        onChange: o,
        disabled: i,
        tooltipNote: s,
        children: (0, r.jsxs)("div", {
            className: W.notificationSound,
            children: [
                (0, r.jsx)("div", {
                    className: W.soundName,
                    children: t,
                }),
                (0, r.jsx)(f.P3F, {
                    className: W.soundIcon,
                    onClick: a,
                    "aria-label": Y.intl.string(Y.t.Kd4uxM),
                    children: (0, r.jsx)(f.gj8, {
                        size: "xs",
                        color: "currentColor",
                        className: W.icon,
                        "aria-hidden": !0,
                    }),
                }),
            ],
        }),
    });
}
function ee(e) {
    let { disabledSounds: t, disableAllSounds: n, notifyMessagesInSelectedChannel: a } = e,
        s = i.useRef(null),
        l = (0, v.p)(),
        c = i.useCallback((e, t) => {
            t.stopPropagation(), t.preventDefault(), null != s.current && s.current.stop(), (s.current = (0, P.GN)(e));
        }, []),
        u = i.useCallback(
            (e, n) => {
                let r = t.filter((t) => t !== e);
                n || r.push(e), p.default.setDisabledSounds(r);
            },
            [t],
        );
    i.useEffect(() => () => {
        var e;
        null == (e = s.current) || e.stop();
    });
    let d = [
            {
                label: Y.intl.string(Y.t.pz71xM),
                sound: "message1",
                focusModeDisabled: l,
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
        _ = null != y.Z.useHolidaySoundpack();
    return (0, r.jsx)(R.F, {
        setting: F.s6.NOTIFICATIONS_SOUNDS,
        children: (0, r.jsxs)(f.hjN, {
            children: [
                _
                    ? (0, r.jsxs)(r.Fragment, {
                          children: [
                              (0, r.jsx)(f.vwX, {
                                  className: K.marginBottom20,
                                  children: Y.intl.string(Y.t.fgSHf3),
                              }),
                              (0, r.jsx)(O.Z, {}),
                          ],
                      })
                    : null,
                (0, r.jsx)(f.vwX, {
                    className: o()(K.marginBottom20, K.marginTop20),
                    children: Y.intl.string(Y.t.MKWyKS),
                }),
                (0, r.jsx)(f.j7V, {
                    note: Y.intl.string(Y.t["7oXUio"]),
                    value: a,
                    onChange: p.default.setNotifyMessagesInSelectedChannel,
                    children: Y.intl.string(Y.t.lF5GGR),
                }),
                (0, r.jsx)(f.j7V, {
                    note: Y.intl.string(Y.t["+B0XLC"]),
                    value: n,
                    onChange: p.default.toggleDisableAllSounds,
                    children: Y.intl.string(Y.t["2ZhCOT"]),
                }),
                d.map((e) => {
                    let { label: i, sound: a, focusModeDisabled: o } = e;
                    return (0, r.jsx)(
                        $,
                        {
                            label: i,
                            disabled: n || !0 === o,
                            tooltip: o ? Y.intl.string(Y.t.cIRG0t) : void 0,
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
function et() {
    let e = (0, c.e7)([b.Z], () => b.Z.getGuildAlertSettings()),
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
        : (0, r.jsxs)(R.F, {
              setting: F.s6.NOTIFICATIONS_COMMUNITY_ACTIVITY_ALERTS,
              children: [
                  (0, r.jsx)(f.X6q, {
                      variant: "heading-lg/semibold",
                      className: K.marginBottom20,
                      children: Y.intl.string(Y.t.D9yVAA),
                  }),
                  (0, r.jsx)(f.R94, {
                      type: f.geA.DESCRIPTION,
                      className: K.marginBottom20,
                      children: Y.intl.string(Y.t["0PhAOD"]),
                  }),
                  (0, r.jsx)(f.q4e, {
                      label: Y.intl.string(Y.t.Q0PsXV),
                      className: null != t ? K.marginBottom20 : K.marginBottom40,
                      value: t,
                      onChange: (e) => {
                          n(e);
                      },
                      options: a,
                  }),
                  null != t
                      ? (0, r.jsxs)("div", {
                            className: K.marginTop20,
                            children: [
                                (0, r.jsxs)(R.F, {
                                    setting: F.s6.NOTIFICATIONS_COMMUNITY_IN_APP_ALERTS,
                                    children: [
                                        (0, r.jsx)(f.j7V, {
                                            className: K.marginBottom20,
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
                                        (0, r.jsx)(f.$i$, { className: o()(K.marginTop20, K.marginBottom40) }),
                                    ],
                                }),
                                (0, r.jsxs)(R.F, {
                                    setting: F.s6.NOTIFICATIONS_COMMUNITY_PUSH_NOTIFICATIONS,
                                    children: [
                                        (0, r.jsx)(f.j7V, {
                                            className: K.marginBottom20,
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
                                        (0, r.jsx)(f.$i$, { className: o()(K.marginTop20, K.marginBottom40) }),
                                    ],
                                }),
                            ],
                        })
                      : null,
                  null != t ? null : (0, r.jsx)(f.$i$, { className: o()(K.marginTop20, K.marginBottom40) }),
              ],
          });
}
class en extends i.PureComponent {
    handleDesktopChange(e) {
        let t = e ? V.qrD.ALL : V.qrD.NEVER;
        t !== V.qrD.NEVER ? J("UserSettingsModal") : p.default.setDesktopType(t);
    }
    handleTTSChange(e) {
        let t = e;
        p.default.setTTSType(t);
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
            d = j.isPlatformEmbedded && (0, j.isWindows)(),
            _ = k.Z.getCurrentConfig({ location: "Messages" }).enabled || 0 === t ? 0 : 1,
            p = l()
                .range(_, 11)
                .map((e) => ({
                    value: 60 * e,
                    label:
                        0 === e ? Y.intl.string(Y.t["0QN7cX"]) : Y.intl.formatToPlainString(Y.t.iXLF9f, { minutes: e }),
                }));
        return (0, r.jsxs)(B.Z, {
            title: Y.intl.string(Y.t.HcoRu7),
            children: [
                (0, r.jsx)(R.F, {
                    setting: F.s6.NOTIFICATIONS_ENABLE_DESKTOP,
                    children: (0, r.jsx)(f.j7V, {
                        className: K.marginBottom20,
                        value: e !== V.qrD.NEVER && !u,
                        onChange: this.handleDesktopChange,
                        note: Y.intl.string(Y.t.wF9ih4),
                        disabled: u,
                        tooltipNote: u ? Y.intl.string(Y.t.cIRG0t) : void 0,
                        children: Y.intl.string(Y.t["/0WClp"]),
                    }),
                }),
                (0, r.jsx)(ei, {}),
                (0, r.jsx)(R.F, {
                    setting: F.s6.NOTIFICATIONS_UNREAD_MESSAGE_BADGE,
                    children: (0, r.jsx)(f.j7V, {
                        className: d ? K.marginBottom20 : K.marginBottom40,
                        value: !n,
                        note: Y.intl.string(Y.t["9K4qwc"]),
                        onChange: this.handleToggleShowUnreadBadge,
                        children: Y.intl.string(Y.t.VH8AIC),
                    }),
                }),
                (0, r.jsx)(R.F, {
                    setting: F.s6.NOTIFICATIONS_ENABLE_TASKBAR_FLASHING,
                    children: (0, r.jsx)(f.j7V, {
                        className: K.marginBottom40,
                        value: i,
                        note: Y.intl.string(Y.t["bd4j4+"]),
                        onChange: this.handleToggleShowFlash,
                        children: Y.intl.string(Y.t.xSmFQE),
                    }),
                }),
                (0, r.jsx)(ea, {}),
                (0, r.jsx)(eu, {}),
                (0, r.jsx)(ec, {}),
                (0, r.jsxs)(R.F, {
                    setting: F.s6.NOTIFICATIONS_PUSH_INACTIVE_TIMEOUT,
                    children: [
                        (0, r.jsx)(f.q4e, {
                            label: Y.intl.string(Y.t.TTvjd3),
                            description: Y.intl.string(Y.t.Xytv9P),
                            value: t,
                            onChange: U.CM.updateSetting,
                            options: p,
                        }),
                        (0, r.jsx)(f.$i$, { className: o()(K.marginTop40, K.marginBottom40) }),
                    ],
                }),
                this.renderTTS(),
                (0, r.jsx)(et, {}),
                (0, r.jsx)(ee, {
                    disabledSounds: a,
                    disableAllSounds: s,
                    notifyMessagesInSelectedChannel: c,
                }),
                (0, r.jsx)(Z.Z, {}),
            ],
        });
    }
    constructor(...e) {
        super(...e),
            z(this, "handleToggleShowUnreadBadge", () => {
                p.default.setDisableUnreadBadge(!this.props.disableUnreadBadge);
            }),
            z(this, "handleToggleShowFlash", () => {
                p.default.setTaskbarFlash(!this.props.taskbarFlash);
            }),
            z(this, "renderTTS", () => {
                if (!m.Zh) return null;
                let e = [
                    {
                        name: Y.intl.string(Y.t.B1AGeH),
                        value: V.PrB.ALL_CHANNELS,
                    },
                    {
                        name: Y.intl.string(Y.t.uM2rNj),
                        value: V.PrB.SELECTED_CHANNEL,
                    },
                    {
                        name: Y.intl.string(Y.t.DYO5Oj),
                        value: V.PrB.NEVER,
                    },
                ];
                return (0, r.jsxs)(R.F, {
                    setting: F.s6.NOTIFICATIONS_TEXT_TO_SPEECH,
                    children: [
                        (0, r.jsx)(d.E, {
                            label: Y.intl.string(Y.t.VIm5MD),
                            description: Y.intl.string(Y.t["+4dnAw"]),
                            options: e,
                            onChange: this.handleTTSChange,
                            value: this.props.ttsType,
                        }),
                        (0, r.jsx)(f.$i$, { className: o()(K.marginTop40, K.marginBottom40) }),
                    ],
                });
            });
    }
}
let er = (0, g.B)({
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
        t = (0, c.e7)([x.ZP], () => x.ZP.mentionOnAllMessages);
    return e
        ? (0, r.jsx)(R.F, {
              setting: F.s6.NOTIFICATIONS_MENTION_ON_ALL_MESSAGES,
              children: (0, r.jsx)(f.j7V, {
                  className: K.marginBottom20,
                  value: t,
                  onChange: (e) => {
                      h.Z.setAccountFlag(H.c.MENTION_ON_ALL_MESSAGES, e);
                  },
                  note: "Increments the mention count when receiving a message in a channel set to 'All Messages'",
                  children: "Mention on all messages?",
              }),
          })
        : null;
}
function ea() {
    let e = T.xT.useExperiment({ location: "UserSettingsNotifications" }, { autoTrackExposure: !1 }).enabled,
        { manuallyOpen: t } = T.fs.useExperiment({ location: "UserSettingsNotifications" }, { autoTrackExposure: !1 }),
        n = (0, c.e7)([x.ZP], () => x.ZP.useNewNotifications),
        [a, s] = i.useState(!1);
    return e && (n || t)
        ? (0, r.jsxs)(r.Fragment, {
              children: [
                  n
                      ? (0, r.jsx)(R.F, {
                            setting: F.s6.NOTIFICATIONS_UNREAD_SETTINGS,
                            children: (0, r.jsx)(f.j7V, {
                                className: K.marginBottom40,
                                value: n,
                                disabled: a || !n,
                                note: Y.intl.string(Y.t.frbLrK),
                                onChange: () => eo(s),
                                children: Y.intl.string(Y.t.z21l8P),
                            }),
                        })
                      : t
                        ? (0, r.jsx)(R.F, {
                              setting: F.s6.NOTIFICATIONS_UNREAD_SETTINGS,
                              children: (0, r.jsx)(f.j7V, {
                                  className: K.marginBottom40,
                                  value: n,
                                  disabled: a || n,
                                  note: "Turns on the new notification system",
                                  onChange: (e) => {
                                      h.Z.setAccountFlag(H.c.USE_NEW_NOTIFICATIONS, e);
                                  },
                                  children: Y.intl.string(Y.t.z21l8P),
                              }),
                          })
                        : null,
                  (0, r.jsxs)(R.F, {
                      setting: F.s6.NOTIFICATIONS_NEW_SETTINGS,
                      children: [
                          (0, r.jsx)(f.hjN, {
                              title: "New Notification Settings (Advanced, Staff Only)",
                              children: (0, r.jsxs)("div", {
                                  style: {
                                      display: "flex",
                                      gap: 16,
                                  },
                                  children: [
                                      (0, r.jsx)(R.F, {
                                          setting: F.s6.NOTIFICATIONS_RESTORE_MOST_RECENT_SNAPSHOT,
                                          children: (0, r.jsx)(f.zxk, {
                                              variant: "primary",
                                              text: "Restore most recent snapshot",
                                              onClick: I.KP,
                                          }),
                                      }),
                                      (0, r.jsx)(R.F, {
                                          setting: F.s6.NOTIFICATIONS_LAUNCH_MIGRATION,
                                          children: (0, r.jsx)(f.zxk, {
                                              variant: "primary",
                                              text: "Launch Migration",
                                              onClick: () => {
                                                  (0, A.R)(!0);
                                              },
                                          }),
                                      }),
                                      (0, r.jsx)(R.F, {
                                          setting: F.s6.NOTIFICATIONS_TOGGLE_NEW_SYSTEM,
                                          children: (0, r.jsx)(f.j7V, {
                                              hideBorder: !0,
                                              value: n,
                                              onChange: (e) => {
                                                  h.Z.setAccountFlag(H.c.USE_NEW_NOTIFICATIONS, e);
                                              },
                                              children: "Toggle new system on/off",
                                          }),
                                      }),
                                  ],
                              }),
                          }),
                          (0, r.jsx)(f.$i$, { className: o()(K.marginTop40, K.marginBottom40) }),
                      ],
                  }),
              ],
          })
        : null;
}
async function eo(e) {
    e(!0);
    let t = await (0, I.Tn)();
    0 === t.length
        ? await (0, S.oL)()
        : _.Z.show({
              title: Y.intl.string(Y.t["cY+Ooa"]),
              body: Y.intl.format(Y.t["7zTJJS"], { date: new Date(t[t.length - 1].recorded_at) }),
              cancelText: Y.intl.string(Y.t["ETE/oK"]),
              confirmText: Y.intl.string(Y.t.Rm96T0),
              onConfirm: S.oL,
          }),
        e(!1);
}
function es(e) {
    let t = (0, v.p)();
    return (0, r.jsx)(en, Q(q({}, e), { focusMode: t }));
}
function el() {
    let e = (0, c.cj)([D.Z], () => ({
        disableUnreadBadge: D.Z.getDisableUnreadBadge(),
        taskbarFlash: D.Z.taskbarFlash,
        disabledSounds: D.Z.getDisabledSounds(),
        disableAllSounds: D.Z.getDisableAllSounds(),
        desktopType: D.Z.getDesktopType(),
        ttsType: D.Z.getTTSType(),
        notifyMessagesInSelectedChannel: D.Z.getNotifyMessagesInSelectedChannel(),
    }));
    return (0, r.jsx)(es, Q(q({}, e), { afkTimeout: U.CM.useSetting() }));
}
function ec() {
    let e = U.fz.useSetting(),
        t = [
            {
                name: Y.intl.string(Y.t["9x/Rtb"]),
                value: u.Ns.NOTIFICATIONS_ENABLED,
            },
            {
                name: Y.intl.string(Y.t.fJAbQU),
                value: u.Ns.ONLY_DMS,
            },
            {
                name: Y.intl.string(Y.t["xu+UDQ"]),
                value: u.Ns.NOTIFICATIONS_DISABLED,
            },
        ],
        n = (t) => {
            (0, N.MR)(t.value, e);
        };
    return C.Z.getCurrentConfig({ location: "webSettings" }).enableInAppNotifications
        ? (0, r.jsxs)(R.F, {
              setting: F.s6.NOTIFICATIONS_REACTIONS,
              children: [
                  (0, r.jsx)(d.E, {
                      label: Y.intl.string(Y.t.Rq0NFh),
                      description: Y.intl.string(Y.t.oWF6eX),
                      options: t,
                      onChange: (e) => n({ value: e }),
                      value: e,
                  }),
                  (0, r.jsx)(f.$i$, { className: o()(K.marginTop40, K.marginBottom40) }),
              ],
          })
        : null;
}
function eu() {
    let e = U.d8.useSetting(),
        t = U.JN.useSetting();
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(R.F, {
                setting: F.s6.NOTIFICATIONS_VOICE_ACTIVITY,
                children: (0, r.jsx)(f.j7V, {
                    value: e,
                    onChange: w.I,
                    note: Y.intl.string(Y.t.rngMNz),
                    children: (0, r.jsxs)(f.vwX, {
                        className: W.titleWithBeta,
                        children: [Y.intl.string(Y.t.wtk08f), (0, r.jsx)(E.Z, {})],
                    }),
                }),
            }),
            (0, r.jsx)(R.F, {
                setting: F.s6.NOTIFICATIONS_GO_LIVE,
                children: (0, r.jsx)(f.j7V, {
                    value: t,
                    onChange: U.JN.updateSetting,
                    note: Y.intl.string(Y.t["H+WYqa"]),
                    children: (0, r.jsx)(f.vwX, { children: Y.intl.string(Y.t.pW4TMj) }),
                }),
            }),
        ],
    });
}
