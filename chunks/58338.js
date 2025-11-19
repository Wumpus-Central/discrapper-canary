n.d(t, { Z: () => y }), n(388685), n(997841);
var i = n(54381),
    r = n(473749),
    s = n(442837),
    l = n(481060),
    a = n(87051),
    c = n(528011),
    o = n(487419),
    u = n(113449),
    d = n(748756),
    g = n(686660),
    b = n(675478),
    p = n(9156),
    S = n(621600),
    h = n(981631),
    f = n(490897),
    E = n(526761),
    O = n(388032);
function y(e) {
    return (0, i.jsxs)(l.sNh, {
        id: "notification",
        label: O.intl.string(O.t.HcoRu0),
        action: () => {
            (0, l.ZDy)(async () => {
                let { default: t } = await Promise.all([n.e("15076"), n.e("19620")]).then(n.bind(n, 907941));
                return (n) => {
                    var r, s;
                    return (0, i.jsx)(
                        t,
                        ((r = (function (e) {
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
                                        var i;
                                        (i = n[t]),
                                            t in e
                                                ? Object.defineProperty(e, t, {
                                                      value: i,
                                                      enumerable: !0,
                                                      configurable: !0,
                                                      writable: !0,
                                                  })
                                                : (e[t] = i);
                                    });
                            }
                            return e;
                        })({}, n)),
                        (s = s = { guildId: e }),
                        Object.getOwnPropertyDescriptors
                            ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(s))
                            : (function (e, t) {
                                  var n = Object.keys(e);
                                  if (Object.getOwnPropertySymbols) {
                                      var i = Object.getOwnPropertySymbols(e);
                                      n.push.apply(n, i);
                                  }
                                  return n;
                              })(Object(s)).forEach(function (e) {
                                  Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(s, e));
                              }),
                        r),
                    );
                };
            });
        },
        children: [
            (function (e) {
                let [t, n] = r.useState(!1),
                    [y, j] = r.useState(!1),
                    _ = (0, s.e7)([p.ZP], () => p.ZP.getGuildUnreadSetting(e)),
                    N = (0, s.e7)([p.ZP], () => p.ZP.getMessageNotifications(e)),
                    P = y ? g.s8.CUSTOM : (0, g.gs)(_, N),
                    L = (t) => {
                        j(!1);
                        let n = { message_notifications: t };
                        t === h.bL.ALL_MESSAGES &&
                            _ !== f.i.ALL_MESSAGES &&
                            (n.flags = (0, u.Q4)(p.ZP.getGuildFlags(e), E.vc.UNREADS_ALL_MESSAGES)),
                            a.Z.updateGuildNotificationSettings(e, n, S.UE.notifications(t));
                    },
                    v = (t) => {
                        j(!1);
                        let n = p.ZP.getGuildFlags(e);
                        a.Z.updateGuildNotificationSettings(
                            e,
                            {
                                flags: (0, u.Q4)(
                                    n,
                                    t === f.i.ALL_MESSAGES ? E.vc.UNREADS_ALL_MESSAGES : E.vc.UNREADS_ONLY_MENTIONS,
                                ),
                            },
                            S.UE.unreads(t),
                        );
                    },
                    A = (function (e) {
                        let t = (0, c.Tz)(e),
                            n = (0, s.e7)([o.Z], () => o.Z.getGuildAlertSettings()[e]);
                        if (t && null != n)
                            return (0, i.jsxs)(l.sNh, {
                                id: "activity_alerts",
                                label: O.intl.string(O.t.D9yVAH),
                                children: [
                                    (0, i.jsx)(l.S89, {
                                        id: "activity_alerts_in_app",
                                        label: O.intl.string(O.t.u6dc5B),
                                        checked: !n.disableRaidAlertNag,
                                        action: () =>
                                            (0, b.PS)(
                                                e,
                                                (e) => {
                                                    e.disableRaidAlertNag = !e.disableRaidAlertNag;
                                                },
                                                E.fy.INFREQUENT_USER_ACTION,
                                            ),
                                    }),
                                    (0, i.jsx)(l.S89, {
                                        id: "activity_alerts_push",
                                        label: O.intl.string(O.t.P8MG6q),
                                        checked: !n.disableRaidAlertPush,
                                        action: () =>
                                            (0, b.PS)(
                                                e,
                                                (e) => {
                                                    e.disableRaidAlertPush = !e.disableRaidAlertPush;
                                                },
                                                E.fy.INFREQUENT_USER_ACTION,
                                            ),
                                    }),
                                ],
                            });
                    })(e);
                return (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsxs)(l.kSQ, {
                            children: [
                                (0, i.jsx)(l.k5B, {
                                    id: "everything",
                                    group: "notification-preset",
                                    checked: P === g.s8.ALL_MESSAGES,
                                    label: O.intl.string(O.t.hZrr6k),
                                    action: () => ((0, d.V)(e, g.s8.ALL_MESSAGES), j(!1)),
                                }),
                                (0, i.jsx)(l.k5B, {
                                    id: "essentials",
                                    group: "notification-preset",
                                    checked: P === g.s8.MENTIONS,
                                    label: O.intl.string(O.t.y59NJm),
                                    action: () => ((0, d.V)(e, g.s8.MENTIONS), j(!1)),
                                }),
                                (0, i.jsx)(l.k5B, {
                                    id: "nothing",
                                    group: "notification-preset",
                                    checked: P === g.s8.NOTHING,
                                    label: O.intl.string(O.t["pGn/bJ"]),
                                    action: () => ((0, d.V)(e, g.s8.NOTHING), j(!1)),
                                }),
                                (0, i.jsx)(l.k5B, {
                                    id: "custom",
                                    group: "notification-preset",
                                    checked: P === g.s8.CUSTOM,
                                    action: () => (n(!0), j(!0)),
                                    label: O.intl.string(O.t["32yow9"]),
                                }),
                            ],
                        }),
                        (P === g.s8.CUSTOM || t) &&
                            (0, i.jsxs)(l.kSQ, {
                                children: [
                                    (0, i.jsxs)(
                                        l.sNh,
                                        {
                                            id: "unread_setting",
                                            label: "Unread Badges",
                                            children: [
                                                (0, i.jsx)(l.k5B, {
                                                    id: "unread_setting_all_messages",
                                                    group: "unread_setting",
                                                    checked: _ === f.i.ALL_MESSAGES,
                                                    label: O.intl.string(O.t["HVah/3"]),
                                                    action: () => v(f.i.ALL_MESSAGES),
                                                }),
                                                (0, i.jsx)(l.k5B, {
                                                    id: "unread_setting_mention_only",
                                                    group: "unread_setting",
                                                    checked: _ === f.i.ONLY_MENTIONS,
                                                    label: O.intl.string(O.t["tu+ZWJ"]),
                                                    action: () => v(f.i.ONLY_MENTIONS),
                                                    disabled: _ !== f.i.ONLY_MENTIONS && N === h.bL.ALL_MESSAGES,
                                                    subtext:
                                                        _ !== f.i.ONLY_MENTIONS && N === h.bL.ALL_MESSAGES
                                                            ? O.intl.string(O.t.eP8yWU)
                                                            : void 0,
                                                }),
                                            ],
                                        },
                                        "unread_setting",
                                    ),
                                    (0, i.jsxs)(
                                        l.sNh,
                                        {
                                            id: "push_settings",
                                            label: O.intl.string(O.t.HcoRu0),
                                            children: [
                                                (0, i.jsx)(l.k5B, {
                                                    group: "notification-preset",
                                                    id: "push_settings_everything",
                                                    label: O.intl.string(O.t["HVah/3"]),
                                                    checked: N === h.bL.ALL_MESSAGES,
                                                    action: () => L(h.bL.ALL_MESSAGES),
                                                    subtext:
                                                        _ !== f.i.ALL_MESSAGES && N !== h.bL.ALL_MESSAGES
                                                            ? O.intl.string(O.t.idXSbI)
                                                            : void 0,
                                                }),
                                                (0, i.jsx)(l.k5B, {
                                                    group: "notification-preset",
                                                    id: "push_settings_everything_mention",
                                                    checked: N === h.bL.ONLY_MENTIONS,
                                                    label: O.intl.string(O.t["tu+ZWJ"]),
                                                    action: () => L(h.bL.ONLY_MENTIONS),
                                                }),
                                                (0, i.jsx)(l.k5B, {
                                                    group: "notification-preset",
                                                    id: "push_settings_everything_nothing",
                                                    label: O.intl.string(O.t.X4wWUi),
                                                    checked: N === h.bL.NO_MESSAGES,
                                                    action: () => L(h.bL.NO_MESSAGES),
                                                }),
                                            ],
                                        },
                                        "push_settings",
                                    ),
                                    A,
                                ],
                            }),
                    ],
                });
            })(e),
            (function (e) {
                let t = (0, s.cj)([p.ZP], () => ({
                        highligths: p.ZP.getNotifyHighlights(e),
                        mobilePush: p.ZP.isMobilePushEnabled(e),
                        suppressRoles: p.ZP.isSuppressRolesEnabled(e),
                        suppressEveryone: p.ZP.isSuppressEveryoneEnabled(e),
                        muteScheduledEvents: p.ZP.isMuteScheduledEventsEnabled(e),
                    })),
                    n = a.Z.updateGuildNotificationSettings;
                return (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsxs)(l.kSQ, {
                            children: [
                                (0, i.jsx)(l.S89, {
                                    id: "mention",
                                    checked: t.suppressEveryone,
                                    label: O.intl.format(O.t.OWiWAp, {}),
                                    action: () =>
                                        n(
                                            e,
                                            { suppress_everyone: !t.suppressEveryone },
                                            S.UE.suppressEveryone(!t.suppressEveryone),
                                        ),
                                }),
                                (0, i.jsx)(l.S89, {
                                    id: "roles",
                                    checked: t.suppressRoles,
                                    label: O.intl.string(O.t["O/QdoD"]),
                                    action: () =>
                                        n(
                                            e,
                                            { suppress_roles: !t.suppressRoles },
                                            S.UE.suppressRoles(!t.suppressRoles),
                                        ),
                                }),
                                (0, i.jsx)(l.S89, {
                                    id: "hightlight",
                                    label: O.intl.string(O.t.gPuteJ),
                                    checked: t.highligths === h.gLR.ENABLED,
                                    action: () =>
                                        n(
                                            e,
                                            {
                                                notify_highlights:
                                                    t.highligths === h.gLR.ENABLED ? h.gLR.DISABLED : h.gLR.ENABLED,
                                            },
                                            S.UE.highlights(t.highligths !== h.gLR.ENABLED),
                                        ),
                                }),
                            ],
                        }),
                        (0, i.jsxs)(l.kSQ, {
                            children: [
                                (0, i.jsx)(l.S89, {
                                    id: "event",
                                    checked: t.muteScheduledEvents,
                                    label: O.intl.string(O.t.ONG3Yz),
                                    action: () =>
                                        n(
                                            e,
                                            { mute_scheduled_events: !t.muteScheduledEvents },
                                            S.UE.mutedEvents(!t.muteScheduledEvents),
                                        ),
                                }),
                                (0, i.jsx)(l.S89, {
                                    id: "mobile_push",
                                    checked: t.mobilePush,
                                    label: O.intl.string(O.t.h1DL66),
                                    action: () => n(e, { mobile_push: !t.mobilePush }, S.UE.mobilePush(!t.mobilePush)),
                                }),
                            ],
                        }),
                    ],
                });
            })(e),
        ],
    });
}
