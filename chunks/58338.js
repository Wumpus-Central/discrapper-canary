n.d(t, { Z: () => f }), n(47120), n(789020);
var i = n(200651),
    l = n(192379),
    s = n(442837),
    a = n(481060),
    r = n(87051),
    d = n(113449),
    u = n(748756),
    c = n(686660),
    o = n(122074),
    g = n(9156),
    E = n(621600),
    h = n(981631),
    S = n(490897),
    N = n(526761),
    _ = n(388032);
function f(e) {
    let t = (0, o.ng)(e, !0),
        f = (0, o.U)();
    return (0, i.jsxs)(a.sNh, {
        id: 'notification',
        label: (0, i.jsxs)(i.Fragment, {
            children: [f, _.intl.string(_.t.HcoRu7)]
        }),
        action: () => {
            (0, a.ZDy)(async () => {
                let { default: t } = await Promise.all([n.e('5863'), n.e('70775')]).then(n.bind(n, 751212));
                return (n) =>
                    (0, i.jsx)(t, {
                        ...n,
                        guildId: e
                    });
            });
        },
        children: [
            (function (e) {
                let [t, n] = l.useState(!1),
                    [o, f] = l.useState(!1),
                    Z = (0, s.e7)([g.ZP], () => g.ZP.getGuildUnreadSetting(e)),
                    x = (0, s.e7)([g.ZP], () => g.ZP.getMessageNotifications(e)),
                    A = o ? c.s8.CUSTOM : (0, c.gs)(Z, x),
                    p = (t) => {
                        f(!1);
                        let n = { message_notifications: t };
                        t === h.bL.ALL_MESSAGES && Z !== S.i.ALL_MESSAGES && (n.flags = (0, d.Q4)(g.ZP.getGuildFlags(e), N.vc.UNREADS_ALL_MESSAGES)), r.Z.updateGuildNotificationSettings(e, n, E.UE.notifications(t));
                    },
                    L = (t) => {
                        f(!1);
                        let n = g.ZP.getGuildFlags(e);
                        r.Z.updateGuildNotificationSettings(e, { flags: (0, d.Q4)(n, t === S.i.ALL_MESSAGES ? N.vc.UNREADS_ALL_MESSAGES : N.vc.UNREADS_ONLY_MENTIONS) }, E.UE.unreads(t));
                    };
                return (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsxs)(a.kSQ, {
                            children: [
                                (0, i.jsx)(a.k5B, {
                                    id: 'everything',
                                    group: 'notification-preset',
                                    checked: A === c.s8.ALL_MESSAGES,
                                    label: _.intl.string(_.t.hZrr6u),
                                    action: () => ((0, u.V)(e, c.s8.ALL_MESSAGES), f(!1))
                                }),
                                (0, i.jsx)(a.k5B, {
                                    id: 'essentials',
                                    group: 'notification-preset',
                                    checked: A === c.s8.MENTIONS,
                                    label: _.intl.string(_.t.y59NJi),
                                    action: () => ((0, u.V)(e, c.s8.MENTIONS), f(!1))
                                }),
                                (0, i.jsx)(a.k5B, {
                                    id: 'nothing',
                                    group: 'notification-preset',
                                    checked: A === c.s8.NOTHING,
                                    label: _.intl.string(_.t['pGn/bG']),
                                    action: () => ((0, u.V)(e, c.s8.NOTHING), f(!1))
                                }),
                                (0, i.jsx)(a.k5B, {
                                    id: 'custom',
                                    group: 'notification-preset',
                                    checked: A === c.s8.CUSTOM,
                                    action: () => (n(!0), f(!0)),
                                    label: _.intl.string(_.t['32yow8'])
                                })
                            ]
                        }),
                        (A === c.s8.CUSTOM || t) &&
                            (0, i.jsxs)(a.kSQ, {
                                children: [
                                    (0, i.jsxs)(
                                        a.sNh,
                                        {
                                            id: 'unread_setting',
                                            label: 'Unread Badges',
                                            children: [
                                                (0, i.jsx)(a.k5B, {
                                                    id: 'unread_setting_all_messages',
                                                    group: 'unread_setting',
                                                    checked: Z === S.i.ALL_MESSAGES,
                                                    label: _.intl.string(_.t['HVah//']),
                                                    action: () => L(S.i.ALL_MESSAGES)
                                                }),
                                                (0, i.jsx)(a.k5B, {
                                                    id: 'unread_setting_mention_only',
                                                    group: 'unread_setting',
                                                    checked: Z === S.i.ONLY_MENTIONS,
                                                    label: _.intl.string(_.t['tu+ZWF']),
                                                    action: () => L(S.i.ONLY_MENTIONS),
                                                    disabled: Z !== S.i.ONLY_MENTIONS && x === h.bL.ALL_MESSAGES,
                                                    subtext: Z !== S.i.ONLY_MENTIONS && x === h.bL.ALL_MESSAGES ? _.intl.string(_.t.eP8yWV) : void 0
                                                })
                                            ]
                                        },
                                        'unread_setting'
                                    ),
                                    (0, i.jsxs)(
                                        a.sNh,
                                        {
                                            id: 'push_settings',
                                            label: _.intl.string(_.t.HcoRu7),
                                            children: [
                                                (0, i.jsx)(a.k5B, {
                                                    group: 'notification-preset',
                                                    id: 'push_settings_everything',
                                                    label: _.intl.string(_.t['HVah//']),
                                                    checked: x === h.bL.ALL_MESSAGES,
                                                    action: () => p(h.bL.ALL_MESSAGES),
                                                    subtext: Z !== S.i.ALL_MESSAGES && x !== h.bL.ALL_MESSAGES ? _.intl.string(_.t.idXSbG) : void 0
                                                }),
                                                (0, i.jsx)(a.k5B, {
                                                    group: 'notification-preset',
                                                    id: 'push_settings_everything_mention',
                                                    checked: x === h.bL.ONLY_MENTIONS,
                                                    label: _.intl.string(_.t['tu+ZWF']),
                                                    action: () => p(h.bL.ONLY_MENTIONS)
                                                }),
                                                (0, i.jsx)(a.k5B, {
                                                    group: 'notification-preset',
                                                    id: 'push_settings_everything_nothing',
                                                    label: _.intl.string(_.t.X4wWUl),
                                                    checked: x === h.bL.NO_MESSAGES,
                                                    action: () => p(h.bL.NO_MESSAGES)
                                                })
                                            ]
                                        },
                                        'push_settings'
                                    )
                                ]
                            })
                    ]
                });
            })(e),
            null != t && (0, i.jsx)(a.kSQ, { children: t }),
            (function (e) {
                let t = (0, s.cj)([g.ZP], () => ({
                        highligths: g.ZP.getNotifyHighlights(e),
                        mobilePush: g.ZP.isMobilePushEnabled(e),
                        suppressRoles: g.ZP.isSuppressRolesEnabled(e),
                        suppressEveryone: g.ZP.isSuppressEveryoneEnabled(e),
                        muteScheduledEvents: g.ZP.isMuteScheduledEventsEnabled(e)
                    })),
                    n = r.Z.updateGuildNotificationSettings;
                return (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsxs)(a.kSQ, {
                            children: [
                                (0, i.jsx)(a.S89, {
                                    id: 'mention',
                                    checked: t.suppressEveryone,
                                    label: _.intl.format(_.t.OWiWAg, {}),
                                    action: () => n(e, { suppress_everyone: !t.suppressEveryone }, E.UE.suppressEveryone(!t.suppressEveryone))
                                }),
                                (0, i.jsx)(a.S89, {
                                    id: 'roles',
                                    checked: t.suppressRoles,
                                    label: _.intl.string(_.t['O/QdoK']),
                                    action: () => n(e, { suppress_roles: !t.suppressRoles }, E.UE.suppressRoles(!t.suppressRoles))
                                }),
                                (0, i.jsx)(a.S89, {
                                    id: 'hightlight',
                                    label: _.intl.string(_.t.gPuteH),
                                    checked: t.highligths === h.gLR.ENABLED,
                                    action: () => n(e, { notify_highlights: t.highligths === h.gLR.ENABLED ? h.gLR.DISABLED : h.gLR.ENABLED }, E.UE.highlights(t.highligths !== h.gLR.ENABLED))
                                })
                            ]
                        }),
                        (0, i.jsxs)(a.kSQ, {
                            children: [
                                (0, i.jsx)(a.S89, {
                                    id: 'event',
                                    checked: t.muteScheduledEvents,
                                    label: _.intl.string(_.t.ONG3Y2),
                                    action: () => n(e, { mute_scheduled_events: !t.muteScheduledEvents }, E.UE.mutedEvents(!t.muteScheduledEvents))
                                }),
                                (0, i.jsx)(a.S89, {
                                    id: 'mobile_push',
                                    checked: t.mobilePush,
                                    label: _.intl.string(_.t['h1DL6+']),
                                    action: () => n(e, { mobile_push: !t.mobilePush }, E.UE.mobilePush(!t.mobilePush))
                                })
                            ]
                        })
                    ]
                });
            })(e)
        ]
    });
}
