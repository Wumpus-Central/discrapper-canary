n.d(t, { Z: () => f }), n(388685), n(997841);
var i = n(951288),
    r = n(647438),
    s = n(442837),
    l = n(481060),
    o = n(87051),
    c = n(113449),
    a = n(748756),
    u = n(686660),
    d = n(9156),
    g = n(621600),
    b = n(981631),
    p = n(490897),
    S = n(526761),
    h = n(388032);
function f(e) {
    return (0, i.jsxs)(l.sNh, {
        id: "notification",
        label: h.intl.string(h.t.HcoRu7),
        action: () => {
            (0, l.ZDy)(async () => {
                let { default: t } = await Promise.all([n.e("15076"), n.e("62113")]).then(n.bind(n, 907941));
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
                    [f, E] = r.useState(!1),
                    O = (0, s.e7)([d.ZP], () => d.ZP.getGuildUnreadSetting(e)),
                    y = (0, s.e7)([d.ZP], () => d.ZP.getMessageNotifications(e)),
                    j = f ? u.s8.CUSTOM : (0, u.gs)(O, y),
                    _ = (t) => {
                        E(!1);
                        let n = { message_notifications: t };
                        t === b.bL.ALL_MESSAGES &&
                            O !== p.i.ALL_MESSAGES &&
                            (n.flags = (0, c.Q4)(d.ZP.getGuildFlags(e), S.vc.UNREADS_ALL_MESSAGES)),
                            o.Z.updateGuildNotificationSettings(e, n, g.UE.notifications(t));
                    },
                    N = (t) => {
                        E(!1);
                        let n = d.ZP.getGuildFlags(e);
                        o.Z.updateGuildNotificationSettings(
                            e,
                            {
                                flags: (0, c.Q4)(
                                    n,
                                    t === p.i.ALL_MESSAGES ? S.vc.UNREADS_ALL_MESSAGES : S.vc.UNREADS_ONLY_MENTIONS,
                                ),
                            },
                            g.UE.unreads(t),
                        );
                    };
                return (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsxs)(l.kSQ, {
                            children: [
                                (0, i.jsx)(l.k5B, {
                                    id: "everything",
                                    group: "notification-preset",
                                    checked: j === u.s8.ALL_MESSAGES,
                                    label: h.intl.string(h.t.hZrr6u),
                                    action: () => ((0, a.V)(e, u.s8.ALL_MESSAGES), E(!1)),
                                }),
                                (0, i.jsx)(l.k5B, {
                                    id: "essentials",
                                    group: "notification-preset",
                                    checked: j === u.s8.MENTIONS,
                                    label: h.intl.string(h.t.y59NJi),
                                    action: () => ((0, a.V)(e, u.s8.MENTIONS), E(!1)),
                                }),
                                (0, i.jsx)(l.k5B, {
                                    id: "nothing",
                                    group: "notification-preset",
                                    checked: j === u.s8.NOTHING,
                                    label: h.intl.string(h.t["pGn/bG"]),
                                    action: () => ((0, a.V)(e, u.s8.NOTHING), E(!1)),
                                }),
                                (0, i.jsx)(l.k5B, {
                                    id: "custom",
                                    group: "notification-preset",
                                    checked: j === u.s8.CUSTOM,
                                    action: () => (n(!0), E(!0)),
                                    label: h.intl.string(h.t["32yow8"]),
                                }),
                            ],
                        }),
                        (j === u.s8.CUSTOM || t) &&
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
                                                    checked: O === p.i.ALL_MESSAGES,
                                                    label: h.intl.string(h.t["HVah//"]),
                                                    action: () => N(p.i.ALL_MESSAGES),
                                                }),
                                                (0, i.jsx)(l.k5B, {
                                                    id: "unread_setting_mention_only",
                                                    group: "unread_setting",
                                                    checked: O === p.i.ONLY_MENTIONS,
                                                    label: h.intl.string(h.t["tu+ZWF"]),
                                                    action: () => N(p.i.ONLY_MENTIONS),
                                                    disabled: O !== p.i.ONLY_MENTIONS && y === b.bL.ALL_MESSAGES,
                                                    subtext:
                                                        O !== p.i.ONLY_MENTIONS && y === b.bL.ALL_MESSAGES
                                                            ? h.intl.string(h.t.eP8yWV)
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
                                            label: h.intl.string(h.t.HcoRu7),
                                            children: [
                                                (0, i.jsx)(l.k5B, {
                                                    group: "notification-preset",
                                                    id: "push_settings_everything",
                                                    label: h.intl.string(h.t["HVah//"]),
                                                    checked: y === b.bL.ALL_MESSAGES,
                                                    action: () => _(b.bL.ALL_MESSAGES),
                                                    subtext:
                                                        O !== p.i.ALL_MESSAGES && y !== b.bL.ALL_MESSAGES
                                                            ? h.intl.string(h.t.idXSbG)
                                                            : void 0,
                                                }),
                                                (0, i.jsx)(l.k5B, {
                                                    group: "notification-preset",
                                                    id: "push_settings_everything_mention",
                                                    checked: y === b.bL.ONLY_MENTIONS,
                                                    label: h.intl.string(h.t["tu+ZWF"]),
                                                    action: () => _(b.bL.ONLY_MENTIONS),
                                                }),
                                                (0, i.jsx)(l.k5B, {
                                                    group: "notification-preset",
                                                    id: "push_settings_everything_nothing",
                                                    label: h.intl.string(h.t.X4wWUl),
                                                    checked: y === b.bL.NO_MESSAGES,
                                                    action: () => _(b.bL.NO_MESSAGES),
                                                }),
                                            ],
                                        },
                                        "push_settings",
                                    ),
                                ],
                            }),
                    ],
                });
            })(e),
            (function (e) {
                let t = (0, s.cj)([d.ZP], () => ({
                        highligths: d.ZP.getNotifyHighlights(e),
                        mobilePush: d.ZP.isMobilePushEnabled(e),
                        suppressRoles: d.ZP.isSuppressRolesEnabled(e),
                        suppressEveryone: d.ZP.isSuppressEveryoneEnabled(e),
                        muteScheduledEvents: d.ZP.isMuteScheduledEventsEnabled(e),
                    })),
                    n = o.Z.updateGuildNotificationSettings;
                return (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsxs)(l.kSQ, {
                            children: [
                                (0, i.jsx)(l.S89, {
                                    id: "mention",
                                    checked: t.suppressEveryone,
                                    label: h.intl.format(h.t.OWiWAg, {}),
                                    action: () =>
                                        n(
                                            e,
                                            { suppress_everyone: !t.suppressEveryone },
                                            g.UE.suppressEveryone(!t.suppressEveryone),
                                        ),
                                }),
                                (0, i.jsx)(l.S89, {
                                    id: "roles",
                                    checked: t.suppressRoles,
                                    label: h.intl.string(h.t["O/QdoK"]),
                                    action: () =>
                                        n(
                                            e,
                                            { suppress_roles: !t.suppressRoles },
                                            g.UE.suppressRoles(!t.suppressRoles),
                                        ),
                                }),
                                (0, i.jsx)(l.S89, {
                                    id: "hightlight",
                                    label: h.intl.string(h.t.gPuteH),
                                    checked: t.highligths === b.gLR.ENABLED,
                                    action: () =>
                                        n(
                                            e,
                                            {
                                                notify_highlights:
                                                    t.highligths === b.gLR.ENABLED ? b.gLR.DISABLED : b.gLR.ENABLED,
                                            },
                                            g.UE.highlights(t.highligths !== b.gLR.ENABLED),
                                        ),
                                }),
                            ],
                        }),
                        (0, i.jsxs)(l.kSQ, {
                            children: [
                                (0, i.jsx)(l.S89, {
                                    id: "event",
                                    checked: t.muteScheduledEvents,
                                    label: h.intl.string(h.t.ONG3Y2),
                                    action: () =>
                                        n(
                                            e,
                                            { mute_scheduled_events: !t.muteScheduledEvents },
                                            g.UE.mutedEvents(!t.muteScheduledEvents),
                                        ),
                                }),
                                (0, i.jsx)(l.S89, {
                                    id: "mobile_push",
                                    checked: t.mobilePush,
                                    label: h.intl.string(h.t["h1DL6+"]),
                                    action: () => n(e, { mobile_push: !t.mobilePush }, g.UE.mobilePush(!t.mobilePush)),
                                }),
                            ],
                        }),
                    ],
                });
            })(e),
        ],
    });
}
