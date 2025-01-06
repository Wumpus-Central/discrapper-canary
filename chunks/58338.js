t.d(n, {
    Z: function () {
        return N;
    }
}),
    t(47120),
    t(789020);
var i = t(200651),
    l = t(192379),
    a = t(442837),
    s = t(481060),
    r = t(87051),
    u = t(113449),
    o = t(748756),
    d = t(686660),
    c = t(122074),
    g = t(9156),
    E = t(621600),
    h = t(981631),
    M = t(490897),
    f = t(526761),
    _ = t(388032);
function N(e) {
    let n = (0, c.ng)(e, !0),
        N = (0, c.U)();
    return (0, i.jsxs)(s.MenuItem, {
        id: 'notification',
        label: (0, i.jsxs)(i.Fragment, {
            children: [N, _.intl.string(_.t.HcoRu7)]
        }),
        action: () => {
            (0, s.openModalLazy)(async () => {
                let { default: n } = await Promise.all([t.e('5863'), t.e('67913')]).then(t.bind(t, 751212));
                return (t) =>
                    (0, i.jsx)(n, {
                        ...t,
                        guildId: e
                    });
            });
        },
        children: [
            (function (e) {
                let [n, t] = l.useState(!1),
                    [c, N] = l.useState(!1),
                    S = (0, a.e7)([g.ZP], () => g.ZP.getGuildUnreadSetting(e)),
                    I = (0, a.e7)([g.ZP], () => g.ZP.getMessageNotifications(e)),
                    p = c ? d.s8.CUSTOM : (0, d.gs)(S, I),
                    m = (n) => {
                        N(!1);
                        let t = { message_notifications: n };
                        n === h.bL.ALL_MESSAGES && S !== M.i.ALL_MESSAGES && (t.flags = (0, u.Q4)(g.ZP.getGuildFlags(e), f.vc.UNREADS_ALL_MESSAGES)), r.Z.updateGuildNotificationSettings(e, t, E.UE.notifications(n));
                    },
                    x = (n) => {
                        N(!1);
                        let t = g.ZP.getGuildFlags(e);
                        r.Z.updateGuildNotificationSettings(e, { flags: (0, u.Q4)(t, n === M.i.ALL_MESSAGES ? f.vc.UNREADS_ALL_MESSAGES : f.vc.UNREADS_ONLY_MENTIONS) }, E.UE.unreads(n));
                    };
                return (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsxs)(s.MenuGroup, {
                            children: [
                                (0, i.jsx)(s.MenuRadioItem, {
                                    id: 'everything',
                                    group: 'notification-preset',
                                    checked: p === d.s8.ALL_MESSAGES,
                                    label: _.intl.string(_.t.hZrr6u),
                                    action: () => ((0, o.V)(e, d.s8.ALL_MESSAGES), N(!1))
                                }),
                                (0, i.jsx)(s.MenuRadioItem, {
                                    id: 'essentials',
                                    group: 'notification-preset',
                                    checked: p === d.s8.MENTIONS,
                                    label: _.intl.string(_.t.y59NJi),
                                    action: () => ((0, o.V)(e, d.s8.MENTIONS), N(!1))
                                }),
                                (0, i.jsx)(s.MenuRadioItem, {
                                    id: 'nothing',
                                    group: 'notification-preset',
                                    checked: p === d.s8.NOTHING,
                                    label: _.intl.string(_.t['pGn/bG']),
                                    action: () => ((0, o.V)(e, d.s8.NOTHING), N(!1))
                                }),
                                (0, i.jsx)(s.MenuRadioItem, {
                                    id: 'custom',
                                    group: 'notification-preset',
                                    checked: p === d.s8.CUSTOM,
                                    action: () => (t(!0), N(!0)),
                                    label: _.intl.string(_.t['32yow8'])
                                })
                            ]
                        }),
                        (p === d.s8.CUSTOM || n) &&
                            (0, i.jsxs)(s.MenuGroup, {
                                children: [
                                    (0, i.jsxs)(
                                        s.MenuItem,
                                        {
                                            id: 'unread_setting',
                                            label: 'Unread Badges',
                                            children: [
                                                (0, i.jsx)(s.MenuRadioItem, {
                                                    id: 'unread_setting_all_messages',
                                                    group: 'unread_setting',
                                                    checked: S === M.i.ALL_MESSAGES,
                                                    label: _.intl.string(_.t['HVah//']),
                                                    action: () => x(M.i.ALL_MESSAGES)
                                                }),
                                                (0, i.jsx)(s.MenuRadioItem, {
                                                    id: 'unread_setting_mention_only',
                                                    group: 'unread_setting',
                                                    checked: S === M.i.ONLY_MENTIONS,
                                                    label: _.intl.string(_.t['tu+ZWF']),
                                                    action: () => x(M.i.ONLY_MENTIONS),
                                                    disabled: S !== M.i.ONLY_MENTIONS && I === h.bL.ALL_MESSAGES,
                                                    subtext: S !== M.i.ONLY_MENTIONS && I === h.bL.ALL_MESSAGES ? _.intl.string(_.t.eP8yWV) : void 0
                                                })
                                            ]
                                        },
                                        'unread_setting'
                                    ),
                                    (0, i.jsxs)(
                                        s.MenuItem,
                                        {
                                            id: 'push_settings',
                                            label: _.intl.string(_.t.HcoRu7),
                                            children: [
                                                (0, i.jsx)(s.MenuRadioItem, {
                                                    group: 'notification-preset',
                                                    id: 'push_settings_everything',
                                                    label: _.intl.string(_.t['HVah//']),
                                                    checked: I === h.bL.ALL_MESSAGES,
                                                    action: () => m(h.bL.ALL_MESSAGES),
                                                    subtext: S !== M.i.ALL_MESSAGES && I !== h.bL.ALL_MESSAGES ? _.intl.string(_.t.idXSbG) : void 0
                                                }),
                                                (0, i.jsx)(s.MenuRadioItem, {
                                                    group: 'notification-preset',
                                                    id: 'push_settings_everything_mention',
                                                    checked: I === h.bL.ONLY_MENTIONS,
                                                    label: _.intl.string(_.t['tu+ZWF']),
                                                    action: () => m(h.bL.ONLY_MENTIONS)
                                                }),
                                                (0, i.jsx)(s.MenuRadioItem, {
                                                    group: 'notification-preset',
                                                    id: 'push_settings_everything_nothing',
                                                    label: _.intl.string(_.t.X4wWUl),
                                                    checked: I === h.bL.NO_MESSAGES,
                                                    action: () => m(h.bL.NO_MESSAGES)
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
            null != n && (0, i.jsx)(s.MenuGroup, { children: n }),
            (function (e) {
                let n = (0, a.cj)([g.ZP], () => ({
                        highligths: g.ZP.getNotifyHighlights(e),
                        mobilePush: g.ZP.isMobilePushEnabled(e),
                        suppressRoles: g.ZP.isSuppressRolesEnabled(e),
                        suppressEveryone: g.ZP.isSuppressEveryoneEnabled(e),
                        muteScheduledEvents: g.ZP.isMuteScheduledEventsEnabled(e)
                    })),
                    t = r.Z.updateGuildNotificationSettings;
                return (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsxs)(s.MenuGroup, {
                            children: [
                                (0, i.jsx)(s.MenuCheckboxItem, {
                                    id: 'mention',
                                    checked: n.suppressEveryone,
                                    label: _.intl.format(_.t.OWiWAg, {}),
                                    action: () => t(e, { suppress_everyone: !n.suppressEveryone }, E.UE.suppressEveryone(!n.suppressEveryone))
                                }),
                                (0, i.jsx)(s.MenuCheckboxItem, {
                                    id: 'roles',
                                    checked: n.suppressRoles,
                                    label: _.intl.string(_.t['O/QdoK']),
                                    action: () => t(e, { suppress_roles: !n.suppressRoles }, E.UE.suppressRoles(!n.suppressRoles))
                                }),
                                (0, i.jsx)(s.MenuCheckboxItem, {
                                    id: 'hightlight',
                                    label: _.intl.string(_.t.gPuteH),
                                    checked: n.highligths === h.gLR.ENABLED,
                                    action: () => t(e, { notify_highlights: n.highligths === h.gLR.ENABLED ? h.gLR.DISABLED : h.gLR.ENABLED }, E.UE.highlights(n.highligths !== h.gLR.ENABLED))
                                })
                            ]
                        }),
                        (0, i.jsxs)(s.MenuGroup, {
                            children: [
                                (0, i.jsx)(s.MenuCheckboxItem, {
                                    id: 'event',
                                    checked: n.muteScheduledEvents,
                                    label: _.intl.string(_.t.ONG3Y2),
                                    action: () => t(e, { mute_scheduled_events: !n.muteScheduledEvents }, E.UE.mutedEvents(!n.muteScheduledEvents))
                                }),
                                (0, i.jsx)(s.MenuCheckboxItem, {
                                    id: 'mobile_push',
                                    checked: n.mobilePush,
                                    label: _.intl.string(_.t['h1DL6+']),
                                    action: () => t(e, { mobile_push: !n.mobilePush }, E.UE.mobilePush(!n.mobilePush))
                                })
                            ]
                        })
                    ]
                });
            })(e)
        ]
    });
}
