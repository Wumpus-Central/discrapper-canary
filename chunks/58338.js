n.d(t, { Z: () => O }), n(47120), n(789020);
var i = n(200651),
    r = n(192379),
    s = n(442837),
    l = n(481060),
    a = n(87051),
    o = n(113449),
    c = n(748756),
    u = n(686660),
    d = n(122074),
    g = n(9156),
    b = n(621600),
    p = n(981631),
    f = n(490897),
    S = n(526761),
    N = n(388032);
function O(e) {
    let t = (0, d.ng)(e, !0),
        O = (0, d.U)();
    return (0, i.jsxs)(l.sNh, {
        id: 'notification',
        label: (0, i.jsxs)(i.Fragment, {
            children: [O, N.NW.string(N.t.HcoRu7)]
        }),
        action: () => {
            (0, l.ZDy)(async () => {
                let { default: t } = await Promise.all([n.e('5863'), n.e('99922')]).then(n.bind(n, 751212));
                return (n) => {
                    var r, s;
                    return (0, i.jsx)(
                        t,
                        ((r = (function (e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var n = null != arguments[t] ? arguments[t] : {},
                                    i = Object.keys(n);
                                'function' == typeof Object.getOwnPropertySymbols &&
                                    (i = i.concat(
                                        Object.getOwnPropertySymbols(n).filter(function (e) {
                                            return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                        })
                                    )),
                                    i.forEach(function (t) {
                                        var i;
                                        (i = n[t]),
                                            t in e
                                                ? Object.defineProperty(e, t, {
                                                      value: i,
                                                      enumerable: !0,
                                                      configurable: !0,
                                                      writable: !0
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
                        r)
                    );
                };
            });
        },
        children: [
            (function (e) {
                let [t, n] = r.useState(!1),
                    [d, O] = r.useState(!1),
                    E = (0, s.e7)([g.ZP], () => g.ZP.getGuildUnreadSetting(e)),
                    h = (0, s.e7)([g.ZP], () => g.ZP.getMessageNotifications(e)),
                    y = d ? u.s8.CUSTOM : (0, u.gs)(E, h),
                    j = (t) => {
                        O(!1);
                        let n = { message_notifications: t };
                        t === p.bL.ALL_MESSAGES && E !== f.i.ALL_MESSAGES && (n.flags = (0, o.Q4)(g.ZP.getGuildFlags(e), S.vc.UNREADS_ALL_MESSAGES)), a.Z.updateGuildNotificationSettings(e, n, b.UE.notifications(t));
                    },
                    _ = (t) => {
                        O(!1);
                        let n = g.ZP.getGuildFlags(e);
                        a.Z.updateGuildNotificationSettings(e, { flags: (0, o.Q4)(n, t === f.i.ALL_MESSAGES ? S.vc.UNREADS_ALL_MESSAGES : S.vc.UNREADS_ONLY_MENTIONS) }, b.UE.unreads(t));
                    };
                return (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsxs)(l.kSQ, {
                            children: [
                                (0, i.jsx)(l.k5B, {
                                    id: 'everything',
                                    group: 'notification-preset',
                                    checked: y === u.s8.ALL_MESSAGES,
                                    label: N.NW.string(N.t.hZrr6u),
                                    action: () => ((0, c.V)(e, u.s8.ALL_MESSAGES), O(!1))
                                }),
                                (0, i.jsx)(l.k5B, {
                                    id: 'essentials',
                                    group: 'notification-preset',
                                    checked: y === u.s8.MENTIONS,
                                    label: N.NW.string(N.t.y59NJi),
                                    action: () => ((0, c.V)(e, u.s8.MENTIONS), O(!1))
                                }),
                                (0, i.jsx)(l.k5B, {
                                    id: 'nothing',
                                    group: 'notification-preset',
                                    checked: y === u.s8.NOTHING,
                                    label: N.NW.string(N.t['pGn/bG']),
                                    action: () => ((0, c.V)(e, u.s8.NOTHING), O(!1))
                                }),
                                (0, i.jsx)(l.k5B, {
                                    id: 'custom',
                                    group: 'notification-preset',
                                    checked: y === u.s8.CUSTOM,
                                    action: () => (n(!0), O(!0)),
                                    label: N.NW.string(N.t['32yow8'])
                                })
                            ]
                        }),
                        (y === u.s8.CUSTOM || t) &&
                            (0, i.jsxs)(l.kSQ, {
                                children: [
                                    (0, i.jsxs)(
                                        l.sNh,
                                        {
                                            id: 'unread_setting',
                                            label: 'Unread Badges',
                                            children: [
                                                (0, i.jsx)(l.k5B, {
                                                    id: 'unread_setting_all_messages',
                                                    group: 'unread_setting',
                                                    checked: E === f.i.ALL_MESSAGES,
                                                    label: N.NW.string(N.t['HVah//']),
                                                    action: () => _(f.i.ALL_MESSAGES)
                                                }),
                                                (0, i.jsx)(l.k5B, {
                                                    id: 'unread_setting_mention_only',
                                                    group: 'unread_setting',
                                                    checked: E === f.i.ONLY_MENTIONS,
                                                    label: N.NW.string(N.t['tu+ZWF']),
                                                    action: () => _(f.i.ONLY_MENTIONS),
                                                    disabled: E !== f.i.ONLY_MENTIONS && h === p.bL.ALL_MESSAGES,
                                                    subtext: E !== f.i.ONLY_MENTIONS && h === p.bL.ALL_MESSAGES ? N.NW.string(N.t.eP8yWV) : void 0
                                                })
                                            ]
                                        },
                                        'unread_setting'
                                    ),
                                    (0, i.jsxs)(
                                        l.sNh,
                                        {
                                            id: 'push_settings',
                                            label: N.NW.string(N.t.HcoRu7),
                                            children: [
                                                (0, i.jsx)(l.k5B, {
                                                    group: 'notification-preset',
                                                    id: 'push_settings_everything',
                                                    label: N.NW.string(N.t['HVah//']),
                                                    checked: h === p.bL.ALL_MESSAGES,
                                                    action: () => j(p.bL.ALL_MESSAGES),
                                                    subtext: E !== f.i.ALL_MESSAGES && h !== p.bL.ALL_MESSAGES ? N.NW.string(N.t.idXSbG) : void 0
                                                }),
                                                (0, i.jsx)(l.k5B, {
                                                    group: 'notification-preset',
                                                    id: 'push_settings_everything_mention',
                                                    checked: h === p.bL.ONLY_MENTIONS,
                                                    label: N.NW.string(N.t['tu+ZWF']),
                                                    action: () => j(p.bL.ONLY_MENTIONS)
                                                }),
                                                (0, i.jsx)(l.k5B, {
                                                    group: 'notification-preset',
                                                    id: 'push_settings_everything_nothing',
                                                    label: N.NW.string(N.t.X4wWUl),
                                                    checked: h === p.bL.NO_MESSAGES,
                                                    action: () => j(p.bL.NO_MESSAGES)
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
            null != t && (0, i.jsx)(l.kSQ, { children: t }),
            (function (e) {
                let t = (0, s.cj)([g.ZP], () => ({
                        highligths: g.ZP.getNotifyHighlights(e),
                        mobilePush: g.ZP.isMobilePushEnabled(e),
                        suppressRoles: g.ZP.isSuppressRolesEnabled(e),
                        suppressEveryone: g.ZP.isSuppressEveryoneEnabled(e),
                        muteScheduledEvents: g.ZP.isMuteScheduledEventsEnabled(e)
                    })),
                    n = a.Z.updateGuildNotificationSettings;
                return (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsxs)(l.kSQ, {
                            children: [
                                (0, i.jsx)(l.S89, {
                                    id: 'mention',
                                    checked: t.suppressEveryone,
                                    label: N.NW.format(N.t.OWiWAg, {}),
                                    action: () => n(e, { suppress_everyone: !t.suppressEveryone }, b.UE.suppressEveryone(!t.suppressEveryone))
                                }),
                                (0, i.jsx)(l.S89, {
                                    id: 'roles',
                                    checked: t.suppressRoles,
                                    label: N.NW.string(N.t['O/QdoK']),
                                    action: () => n(e, { suppress_roles: !t.suppressRoles }, b.UE.suppressRoles(!t.suppressRoles))
                                }),
                                (0, i.jsx)(l.S89, {
                                    id: 'hightlight',
                                    label: N.NW.string(N.t.gPuteH),
                                    checked: t.highligths === p.gLR.ENABLED,
                                    action: () => n(e, { notify_highlights: t.highligths === p.gLR.ENABLED ? p.gLR.DISABLED : p.gLR.ENABLED }, b.UE.highlights(t.highligths !== p.gLR.ENABLED))
                                })
                            ]
                        }),
                        (0, i.jsxs)(l.kSQ, {
                            children: [
                                (0, i.jsx)(l.S89, {
                                    id: 'event',
                                    checked: t.muteScheduledEvents,
                                    label: N.NW.string(N.t.ONG3Y2),
                                    action: () => n(e, { mute_scheduled_events: !t.muteScheduledEvents }, b.UE.mutedEvents(!t.muteScheduledEvents))
                                }),
                                (0, i.jsx)(l.S89, {
                                    id: 'mobile_push',
                                    checked: t.mobilePush,
                                    label: N.NW.string(N.t['h1DL6+']),
                                    action: () => n(e, { mobile_push: !t.mobilePush }, b.UE.mobilePush(!t.mobilePush))
                                })
                            ]
                        })
                    ]
                });
            })(e)
        ]
    });
}
