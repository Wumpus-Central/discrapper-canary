n.d(t, { Z: () => es }), n(539854), n(388685);
var r = n(951288),
    i = n(647438),
    a = n(120356),
    o = n.n(a),
    s = n(392711),
    l = n.n(s),
    c = n(442837),
    u = n(524437),
    d = n(755721),
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
    S = n(312400),
    T = n(115345),
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
    B = n(33656),
    Z = n(726985),
    F = n(981631),
    V = n(468788),
    H = n(388032),
    Y = n(728495),
    W = n(197571);
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
function X(e, t) {
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
function Q(e) {
    L.Z.requestPermission((t) => {
        let n = t ? F.$Ab.ENABLED : F.$Ab.BLOCKED;
        p.default.setPermissionsState(n, e);
    });
}
function J(e) {
    let { label: t, enabled: n, disabled: i, onPreview: a, onChange: o, tooltip: s } = e;
    return (0, r.jsx)(f.j7V, {
        className: Y.soundRow,
        value: n,
        onChange: o,
        disabled: i,
        tooltipNote: s,
        children: (0, r.jsxs)("div", {
            className: Y.notificationSound,
            children: [
                (0, r.jsx)("div", {
                    className: Y.soundName,
                    children: t,
                }),
                (0, r.jsx)(f.P3F, {
                    className: Y.soundIcon,
                    onClick: a,
                    "aria-label": H.intl.string(H.t.Kd4uxM),
                    children: (0, r.jsx)(f.gj8, {
                        size: "xs",
                        color: "currentColor",
                        className: Y.icon,
                        "aria-hidden": !0,
                    }),
                }),
            ],
        }),
    });
}
function $(e) {
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
                label: H.intl.string(H.t.pz71xM),
                sound: "message1",
                focusModeDisabled: l,
            },
            {
                label: H.intl.string(H.t.hK51Ym),
                sound: "deafen",
            },
            {
                label: H.intl.string(H.t.XiejaG),
                sound: "undeafen",
            },
            {
                label: H.intl.string(H.t["w4m94+"]),
                sound: "mute",
            },
            {
                label: H.intl.string(H.t.YqAjX1),
                sound: "unmute",
            },
            {
                label: H.intl.string(H.t.JoTq8v),
                sound: "camera_on",
            },
            {
                label: H.intl.string(H.t["8P6tQ0"]),
                sound: "camera_off",
            },
            {
                label: H.intl.string(H.t["juL9/P"]),
                sound: "disconnect",
            },
            {
                label: H.intl.string(H.t.x98vQk),
                sound: "ptt_start",
            },
            {
                label: H.intl.string(H.t["1HjRqK"]),
                sound: "ptt_stop",
            },
            {
                label: H.intl.string(H.t["9JB1Cg"]),
                sound: "user_join",
            },
            {
                label: H.intl.string(H.t.KUBBNj),
                sound: "user_leave",
            },
            {
                label: H.intl.string(H.t.EZjqUV),
                sound: "user_moved",
            },
            {
                label: H.intl.string(H.t.LnNlQk),
                sound: "call_calling",
            },
            {
                label: H.intl.string(H.t.XBrJT0),
                sound: "call_ringing",
            },
            {
                label: H.intl.string(H.t["Nd8P5+"]),
                sound: "stream_started",
            },
            {
                label: H.intl.string(H.t["9bYj+P"]),
                sound: "stream_ended",
            },
            {
                label: H.intl.string(H.t.KccUIy),
                sound: "stream_user_joined",
            },
            {
                label: H.intl.string(H.t.dsjkiI),
                sound: "stream_user_left",
            },
            {
                label: H.intl.string(H.t.nFOcf3),
                sound: "activity_launch",
            },
            {
                label: H.intl.string(H.t["a6lw/v"]),
                sound: "activity_end",
            },
            {
                label: H.intl.string(H.t.KaFxra),
                sound: "activity_user_join",
            },
            {
                label: H.intl.string(H.t.S14z9v),
                sound: "activity_user_left",
            },
            {
                label: H.intl.string(H.t.CP3DCw),
                sound: "reconnect",
            },
        ],
        _ = null != y.Z.useHolidaySoundpack();
    return (0, r.jsx)(R.F, {
        setting: Z.s6.NOTIFICATIONS_SOUNDS,
        children: (0, r.jsxs)(f.hjN, {
            children: [
                _
                    ? (0, r.jsxs)(r.Fragment, {
                          children: [
                              (0, r.jsx)(f.vwX, {
                                  className: W.marginBottom20,
                                  children: H.intl.string(H.t.fgSHf3),
                              }),
                              (0, r.jsx)(O.Z, {}),
                          ],
                      })
                    : null,
                (0, r.jsx)(f.vwX, {
                    className: o()(W.marginBottom20, W.marginTop20),
                    children: H.intl.string(H.t.MKWyKS),
                }),
                (0, r.jsx)(f.j7V, {
                    note: H.intl.string(H.t["7oXUio"]),
                    value: a,
                    onChange: p.default.setNotifyMessagesInSelectedChannel,
                    children: H.intl.string(H.t.lF5GGR),
                }),
                (0, r.jsx)(f.j7V, {
                    note: H.intl.string(H.t["+B0XLC"]),
                    value: n,
                    onChange: p.default.toggleDisableAllSounds,
                    children: H.intl.string(H.t["2ZhCOT"]),
                }),
                d.map((e) => {
                    let { label: i, sound: a, focusModeDisabled: o } = e;
                    return (0, r.jsx)(
                        J,
                        {
                            label: i,
                            disabled: n || !0 === o,
                            tooltip: o ? H.intl.string(H.t.cIRG0t) : void 0,
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
function ee() {
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
              setting: Z.s6.NOTIFICATIONS_COMMUNITY_ACTIVITY_ALERTS,
              children: [
                  (0, r.jsx)(f.X6q, {
                      variant: "heading-lg/semibold",
                      className: W.marginBottom20,
                      children: H.intl.string(H.t.D9yVAA),
                  }),
                  (0, r.jsx)(f.R94, {
                      type: f.geA.DESCRIPTION,
                      className: W.marginBottom20,
                      children: H.intl.string(H.t["0PhAOD"]),
                  }),
                  (0, r.jsxs)(f.xJW, {
                      title: H.intl.string(H.t.Q0PsXV),
                      children: [
                          (0, r.jsx)(f.q4e, {
                              className: null != t ? W.marginBottom20 : W.marginBottom40,
                              value: t,
                              onChange: (e) => {
                                  n(e);
                              },
                              options: a,
                          }),
                          null != t
                              ? (0, r.jsxs)("div", {
                                    className: W.marginTop20,
                                    children: [
                                        (0, r.jsxs)(R.F, {
                                            setting: Z.s6.NOTIFICATIONS_COMMUNITY_IN_APP_ALERTS,
                                            children: [
                                                (0, r.jsx)(f.j7V, {
                                                    className: W.marginBottom20,
                                                    note: H.intl.string(H.t["z8Td4+"]),
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
                                                    children: H.intl.string(H.t.u6dc5O),
                                                }),
                                                (0, r.jsx)(f.$i$, { className: o()(W.marginTop20, W.marginBottom40) }),
                                            ],
                                        }),
                                        (0, r.jsxs)(R.F, {
                                            setting: Z.s6.NOTIFICATIONS_COMMUNITY_PUSH_NOTIFICATIONS,
                                            children: [
                                                (0, r.jsx)(f.j7V, {
                                                    className: W.marginBottom20,
                                                    note: H.intl.string(H.t.PyxXs7),
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
                                                    children: H.intl.string(H.t.P8MG6u),
                                                }),
                                                (0, r.jsx)(f.$i$, { className: o()(W.marginTop20, W.marginBottom40) }),
                                            ],
                                        }),
                                    ],
                                })
                              : null,
                          null != t ? null : (0, r.jsx)(f.$i$, { className: o()(W.marginTop20, W.marginBottom40) }),
                      ],
                  }),
              ],
          });
}
class et extends i.PureComponent {
    handleDesktopChange(e) {
        let t = e ? F.qrD.ALL : F.qrD.NEVER;
        t !== F.qrD.NEVER ? Q("UserSettingsModal") : p.default.setDesktopType(t);
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
                        0 === e ? H.intl.string(H.t["0QN7cX"]) : H.intl.formatToPlainString(H.t.iXLF9f, { minutes: e }),
                }));
        return (0, r.jsxs)(f.hjN, {
            tag: f.RB0.H1,
            title: H.intl.string(H.t.HcoRu7),
            children: [
                (0, r.jsx)(R.F, {
                    setting: Z.s6.NOTIFICATIONS_ENABLE_DESKTOP,
                    children: (0, r.jsx)(f.j7V, {
                        className: W.marginBottom20,
                        value: e !== F.qrD.NEVER && !u,
                        onChange: this.handleDesktopChange,
                        note: H.intl.string(H.t.wF9ih4),
                        disabled: u,
                        tooltipNote: u ? H.intl.string(H.t.cIRG0t) : void 0,
                        children: H.intl.string(H.t["/0WClp"]),
                    }),
                }),
                (0, r.jsx)(er, {}),
                (0, r.jsx)(R.F, {
                    setting: Z.s6.NOTIFICATIONS_UNREAD_MESSAGE_BADGE,
                    children: (0, r.jsx)(f.j7V, {
                        className: d ? W.marginBottom20 : W.marginBottom40,
                        value: !n,
                        note: H.intl.string(H.t["9K4qwc"]),
                        onChange: this.handleToggleShowUnreadBadge,
                        children: H.intl.string(H.t.VH8AIC),
                    }),
                }),
                (0, r.jsx)(R.F, {
                    setting: Z.s6.NOTIFICATIONS_ENABLE_TASKBAR_FLASHING,
                    children: (0, r.jsx)(f.j7V, {
                        className: W.marginBottom40,
                        value: i,
                        note: H.intl.string(H.t["bd4j4+"]),
                        onChange: this.handleToggleShowFlash,
                        children: H.intl.string(H.t.xSmFQE),
                    }),
                }),
                (0, r.jsx)(ei, {}),
                (0, r.jsx)(ec, {}),
                (0, r.jsx)(el, {}),
                (0, r.jsx)(R.F, {
                    setting: Z.s6.NOTIFICATIONS_PUSH_INACTIVE_TIMEOUT,
                    children: (0, r.jsxs)(f.xJW, {
                        title: H.intl.string(H.t.TTvjd3),
                        children: [
                            (0, r.jsx)(f.q4e, {
                                value: t,
                                onChange: U.CM.updateSetting,
                                options: p,
                            }),
                            (0, r.jsx)(f.R94, {
                                type: f.geA.DESCRIPTION,
                                className: W.marginTop8,
                                children: H.intl.string(H.t.Xytv9P),
                            }),
                            (0, r.jsx)(f.$i$, { className: o()(W.marginTop40, W.marginBottom40) }),
                        ],
                    }),
                }),
                this.renderTTS(),
                (0, r.jsx)(ee, {}),
                (0, r.jsx)(f.xJW, {
                    children: (0, r.jsx)($, {
                        disabledSounds: a,
                        disableAllSounds: s,
                        notifyMessagesInSelectedChannel: c,
                    }),
                }),
                (0, r.jsx)(B.Z, {}),
            ],
        });
    }
    constructor(...e) {
        super(...e),
            K(this, "handleToggleShowUnreadBadge", () => {
                p.default.setDisableUnreadBadge(!this.props.disableUnreadBadge);
            }),
            K(this, "handleToggleShowFlash", () => {
                p.default.setTaskbarFlash(!this.props.taskbarFlash);
            }),
            K(this, "renderTTS", () => {
                if (!m.Zh) return null;
                let e = [
                    {
                        name: H.intl.string(H.t.B1AGeH),
                        value: F.PrB.ALL_CHANNELS,
                    },
                    {
                        name: H.intl.string(H.t.uM2rNj),
                        value: F.PrB.SELECTED_CHANNEL,
                    },
                    {
                        name: H.intl.string(H.t.DYO5Oj),
                        value: F.PrB.NEVER,
                    },
                ];
                return (0, r.jsxs)(R.F, {
                    setting: Z.s6.NOTIFICATIONS_TEXT_TO_SPEECH,
                    children: [
                        (0, r.jsxs)(f.xJW, {
                            title: H.intl.string(H.t.VIm5MD),
                            children: [
                                (0, r.jsx)(f.R94, {
                                    type: f.geA.DESCRIPTION,
                                    className: W.marginBottom8,
                                    children: H.intl.string(H.t["+4dnAw"]),
                                }),
                                (0, r.jsx)(d.Gu, {
                                    options: e,
                                    onChange: this.handleTTSChange,
                                    value: this.props.ttsType,
                                }),
                            ],
                        }),
                        (0, r.jsx)(f.$i$, { className: o()(W.marginTop40, W.marginBottom40) }),
                    ],
                });
            });
    }
}
let en = (0, g.B)({
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
        t = (0, c.e7)([x.ZP], () => x.ZP.mentionOnAllMessages);
    return e
        ? (0, r.jsx)(R.F, {
              setting: Z.s6.NOTIFICATIONS_MENTION_ON_ALL_MESSAGES,
              children: (0, r.jsx)(f.j7V, {
                  className: W.marginBottom20,
                  value: t,
                  onChange: (e) => {
                      h.Z.setAccountFlag(V.c.MENTION_ON_ALL_MESSAGES, e);
                  },
                  note: "Increments the mention count when receiving a message in a channel set to 'All Messages'",
                  children: "Mention on all messages?",
              }),
          })
        : null;
}
function ei() {
    let e = S.xT.useExperiment({ location: "UserSettingsNotifications" }, { autoTrackExposure: !1 }).enabled,
        { manuallyOpen: t } = S.fs.useExperiment({ location: "UserSettingsNotifications" }, { autoTrackExposure: !1 }),
        n = (0, c.e7)([x.ZP], () => x.ZP.useNewNotifications),
        [a, s] = i.useState(!1);
    return e && (n || t)
        ? (0, r.jsxs)(r.Fragment, {
              children: [
                  n
                      ? (0, r.jsx)(R.F, {
                            setting: Z.s6.NOTIFICATIONS_UNREAD_SETTINGS,
                            children: (0, r.jsx)(f.j7V, {
                                className: W.marginBottom40,
                                value: n,
                                disabled: a || !n,
                                note: H.intl.string(H.t.frbLrK),
                                onChange: () => ea(s),
                                children: H.intl.string(H.t.z21l8P),
                            }),
                        })
                      : t
                        ? (0, r.jsx)(R.F, {
                              setting: Z.s6.NOTIFICATIONS_UNREAD_SETTINGS,
                              children: (0, r.jsx)(f.j7V, {
                                  className: W.marginBottom40,
                                  value: n,
                                  disabled: a || n,
                                  note: "Turns on the new notification system",
                                  onChange: (e) => {
                                      h.Z.setAccountFlag(V.c.USE_NEW_NOTIFICATIONS, e);
                                  },
                                  children: H.intl.string(H.t.z21l8P),
                              }),
                          })
                        : null,
                  (0, r.jsxs)(R.F, {
                      setting: Z.s6.NOTIFICATIONS_NEW_SETTINGS,
                      children: [
                          (0, r.jsx)(f.xJW, {
                              title: "New Notification Settings (Advanced, Staff Only)",
                              children: (0, r.jsxs)("div", {
                                  style: {
                                      display: "flex",
                                      gap: 16,
                                  },
                                  children: [
                                      (0, r.jsx)(R.F, {
                                          setting: Z.s6.NOTIFICATIONS_RESTORE_MOST_RECENT_SNAPSHOT,
                                          children: (0, r.jsx)(f.zxk, {
                                              variant: "primary",
                                              text: "Restore most recent snapshot",
                                              onClick: I.KP,
                                          }),
                                      }),
                                      (0, r.jsx)(R.F, {
                                          setting: Z.s6.NOTIFICATIONS_LAUNCH_MIGRATION,
                                          children: (0, r.jsx)(f.zxk, {
                                              variant: "primary",
                                              text: "Launch Migration",
                                              onClick: () => {
                                                  (0, A.R)(!0);
                                              },
                                          }),
                                      }),
                                      (0, r.jsx)(R.F, {
                                          setting: Z.s6.NOTIFICATIONS_TOGGLE_NEW_SYSTEM,
                                          children: (0, r.jsx)(f.j7V, {
                                              hideBorder: !0,
                                              value: n,
                                              onChange: (e) => {
                                                  h.Z.setAccountFlag(V.c.USE_NEW_NOTIFICATIONS, e);
                                              },
                                              children: "Toggle new system on/off",
                                          }),
                                      }),
                                  ],
                              }),
                          }),
                          (0, r.jsx)(f.$i$, { className: o()(W.marginTop40, W.marginBottom40) }),
                      ],
                  }),
              ],
          })
        : null;
}
async function ea(e) {
    e(!0);
    let t = await (0, I.Tn)();
    0 === t.length
        ? await (0, T.oL)()
        : _.Z.show({
              title: H.intl.string(H.t["cY+Ooa"]),
              body: H.intl.format(H.t["7zTJJS"], { date: new Date(t[t.length - 1].recorded_at) }),
              cancelText: H.intl.string(H.t["ETE/oK"]),
              confirmText: H.intl.string(H.t.Rm96T0),
              onConfirm: T.oL,
          }),
        e(!1);
}
function eo(e) {
    let t = (0, v.p)();
    return (0, r.jsx)(et, X(z({}, e), { focusMode: t }));
}
function es() {
    let e = (0, c.cj)([D.Z], () => ({
        disableUnreadBadge: D.Z.getDisableUnreadBadge(),
        taskbarFlash: D.Z.taskbarFlash,
        disabledSounds: D.Z.getDisabledSounds(),
        disableAllSounds: D.Z.getDisableAllSounds(),
        desktopType: D.Z.getDesktopType(),
        ttsType: D.Z.getTTSType(),
        notifyMessagesInSelectedChannel: D.Z.getNotifyMessagesInSelectedChannel(),
    }));
    return (0, r.jsx)(eo, X(z({}, e), { afkTimeout: U.CM.useSetting() }));
}
function el() {
    let e = U.fz.useSetting(),
        t = [
            {
                name: H.intl.string(H.t["9x/Rtb"]),
                value: u.Ns.NOTIFICATIONS_ENABLED,
            },
            {
                name: H.intl.string(H.t.fJAbQU),
                value: u.Ns.ONLY_DMS,
            },
            {
                name: H.intl.string(H.t["xu+UDQ"]),
                value: u.Ns.NOTIFICATIONS_DISABLED,
            },
        ],
        n = (t) => {
            (0, N.MR)(t.value, e);
        };
    return C.Z.getCurrentConfig({ location: "webSettings" }).enableInAppNotifications
        ? (0, r.jsxs)(R.F, {
              setting: Z.s6.NOTIFICATIONS_REACTIONS,
              children: [
                  (0, r.jsxs)(f.xJW, {
                      title: H.intl.string(H.t.Rq0NFh),
                      children: [
                          (0, r.jsx)(f.R94, {
                              type: f.geA.DESCRIPTION,
                              className: W.marginBottom8,
                              children: H.intl.string(H.t.oWF6eX),
                          }),
                          (0, r.jsx)(d.Gu, {
                              options: t,
                              onChange: n,
                              value: e,
                          }),
                      ],
                  }),
                  (0, r.jsx)(f.$i$, { className: o()(W.marginTop40, W.marginBottom40) }),
              ],
          })
        : null;
}
function ec() {
    let e = U.d8.useSetting(),
        t = U.JN.useSetting();
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(R.F, {
                setting: Z.s6.NOTIFICATIONS_VOICE_ACTIVITY,
                children: (0, r.jsx)(f.j7V, {
                    value: e,
                    onChange: w.I,
                    note: H.intl.string(H.t.rngMNz),
                    children: (0, r.jsxs)(f.vwX, {
                        className: Y.titleWithBeta,
                        children: [H.intl.string(H.t.wtk08f), (0, r.jsx)(E.Z, {})],
                    }),
                }),
            }),
            (0, r.jsx)(R.F, {
                setting: Z.s6.NOTIFICATIONS_GO_LIVE,
                children: (0, r.jsx)(f.j7V, {
                    value: t,
                    onChange: U.JN.updateSetting,
                    note: H.intl.string(H.t["H+WYqa"]),
                    children: (0, r.jsx)(f.vwX, { children: H.intl.string(H.t.pW4TMj) }),
                }),
            }),
        ],
    });
}
