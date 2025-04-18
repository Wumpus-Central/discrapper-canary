n.d(t, {
    EQ: () => f,
    T5: () => p,
    ZP: () => N
}),
    n(388685),
    n(997841);
var i = n(200651),
    a = n(192379),
    r = n(442837),
    o = n(481060),
    c = n(87051),
    s = n(221259),
    d = n(90699),
    l = n(686660),
    _ = n(9156),
    g = n(621600),
    u = n(981631),
    h = n(490897),
    S = n(526761),
    b = n(388032);
function N(e) {
    let t = f(e);
    return e.type === u.d4z.GUILD_VOICE
        ? null
        : (0, i.jsx)(o.sNh, {
              id: 'channel_notification_settings',
              label: b.NW.string(b.t.HcoRu7),
              children: t
          });
}
function f(e) {
    let t = (0, s.ZA)(e),
        n = (0, s.yN)(e),
        d = t.preset === l.s8.CUSTOM && !n.inherited,
        [g, h] = a.useState(d),
        [S, N] = a.useState(!1),
        f = S ? l.s8.CUSTOM : t.preset,
        E = p(e, () => N(!1)),
        L = (0, r.e7)([_.ZP], () => _.ZP.getNewForumThreadsCreated(e)),
        O = 'parent' === n.inheritedFrom ? b.NW.string(b.t.wlrV1d) : b.NW.string(b.t['1Wn2Mz']);
    return e.type === u.d4z.GUILD_STAGE_VOICE
        ? (0, i.jsxs)(o.kSQ, {
              children: [
                  (0, i.jsx)(o.k5B, {
                      id: 'cns_default',
                      label: O,
                      checked: n.inherited,
                      group: 'channel_notification_settings',
                      subtext: t.notification === u.bL.NO_MESSAGES ? b.NW.string(b.t.CtVGyc) : b.NW.string(b.t['BENn//']),
                      action: () => (0, s.JK)(e.guild_id, e.id)
                  }),
                  (0, i.jsx)(o.k5B, {
                      id: 'cns_only_mention',
                      group: 'channel_notification_settings',
                      checked: !n.inherited && t.notification !== u.bL.NO_MESSAGES,
                      label: b.NW.string(b.t['BENn//']),
                      action: () => (0, s.ft)(e.guild_id, e.id, u.bL.ONLY_MENTIONS)
                  }),
                  (0, i.jsx)(o.k5B, {
                      id: 'cns_no_message',
                      group: 'channel_notification_settings',
                      label: b.NW.string(b.t.CtVGyc),
                      checked: !n.inherited && t.notification === u.bL.NO_MESSAGES,
                      action: () => (0, s.ft)(e.guild_id, e.id, u.bL.NO_MESSAGES)
                  })
              ]
          })
        : (0, i.jsxs)(i.Fragment, {
              children: [
                  e.isForumLikeChannel()
                      ? (0, i.jsxs)(i.Fragment, {
                            children: [
                                (0, i.jsx)(o.S89, {
                                    id: 'new-forum-threads-created',
                                    label: b.NW.string(b.t.Rkgjpq),
                                    checked: L,
                                    action: () => c.Z.setForumThreadsCreated(e, !L)
                                }),
                                (0, i.jsx)(o.Clw, {})
                            ]
                        })
                      : null,
                  (0, i.jsxs)(o.kSQ, {
                      children: [
                          (0, i.jsx)(o.k5B, {
                              id: 'cns_default',
                              label: O,
                              group: 'channel_notification_settings',
                              checked: n.inherited && !S,
                              subtext: n.inheritedPreset,
                              action: () => ((0, s.JK)(e.guild_id, e.id), N(!1))
                          }),
                          (0, i.jsx)(o.k5B, {
                              id: 'cns_everything',
                              group: 'channel_notification_settings',
                              label: b.NW.string(b.t.hZrr6u),
                              checked: !n.inherited && f === l.s8.ALL_MESSAGES,
                              action: () => ((0, s._m)(e.guild_id, e.id, l.s8.ALL_MESSAGES), N(!1))
                          }),
                          (0, i.jsx)(o.k5B, {
                              id: 'cns_essentials',
                              group: 'channel_notification_settings',
                              label: b.NW.string(b.t.y59NJi),
                              checked: !n.inherited && f === l.s8.MENTIONS,
                              action: () => ((0, s._m)(e.guild_id, e.id, l.s8.MENTIONS), N(!1))
                          }),
                          (0, i.jsx)(o.k5B, {
                              id: 'cns_nothing',
                              group: 'channel_notification_settings',
                              label: b.NW.string(b.t['pGn/bG']),
                              checked: !n.inherited && f === l.s8.NOTHING,
                              action: () => ((0, s._m)(e.guild_id, e.id, l.s8.NOTHING), N(!1))
                          }),
                          (0, i.jsx)(o.k5B, {
                              id: 'cns_custom',
                              group: 'channel_notification_settings',
                              label: b.NW.string(b.t['32yow8']),
                              checked: S || (!n.inherited && f === l.s8.CUSTOM),
                              action: () => (h(!0), N(!0))
                          })
                      ]
                  }),
                  (g || d) && E
              ]
          });
}
function p(e, t) {
    let { notification: n, unread: a } = (0, s.ZA)(e),
        r = (e) => {
            e(), t();
        },
        l = (t) => {
            let n = { message_notifications: t };
            t === u.bL.ALL_MESSAGES && a !== h.i.ALL_MESSAGES && (n.flags = (0, d.pq)(_.ZP.getChannelIdFlags(e.guild_id, e.id), S.ic.UNREADS_ALL_MESSAGES)), c.Z.updateChannelOverrideSettings(e.guild_id, e.id, n, g.UE.notifications(t));
        };
    return (0, i.jsxs)(o.kSQ, {
        children: [
            (0, i.jsxs)(
                o.sNh,
                {
                    id: 'unread_setting',
                    label: 'Unread Badges',
                    children: [
                        (0, i.jsx)(o.k5B, {
                            id: 'unread_setting_all_messages',
                            group: 'unread_setting',
                            checked: a === h.i.ALL_MESSAGES,
                            label: b.NW.string(b.t['HVah//']),
                            action: () => r(() => (0, s.IG)(e.guild_id, e.id, h.i.ALL_MESSAGES))
                        }),
                        (0, i.jsx)(o.k5B, {
                            id: 'unread_setting_mention_only',
                            group: 'unread_setting',
                            checked: a === h.i.ONLY_MENTIONS,
                            label: b.NW.string(b.t['tu+ZWF']),
                            disabled: a !== h.i.ONLY_MENTIONS && n === u.bL.ALL_MESSAGES,
                            subtext: a !== h.i.ONLY_MENTIONS && n === u.bL.ALL_MESSAGES ? b.NW.string(b.t.eP8yWV) : void 0,
                            action: () => r(() => (0, s.IG)(e.guild_id, e.id, h.i.ONLY_MENTIONS))
                        })
                    ]
                },
                'unread_setting'
            ),
            (0, i.jsxs)(
                o.sNh,
                {
                    id: 'push_settings',
                    label: b.NW.string(b.t.HcoRu7),
                    children: [
                        (0, i.jsx)(o.k5B, {
                            group: 'notification-preset',
                            id: 'push_settings_everything',
                            label: b.NW.string(b.t['HVah//']),
                            checked: n === u.bL.ALL_MESSAGES,
                            subtext: a !== h.i.ALL_MESSAGES && n !== u.bL.ALL_MESSAGES ? b.NW.string(b.t.idXSbG) : void 0,
                            action: () => r(() => l(u.bL.ALL_MESSAGES))
                        }),
                        (0, i.jsx)(o.k5B, {
                            group: 'notification-preset',
                            id: 'push_settings_everything_mention',
                            checked: n === u.bL.ONLY_MENTIONS,
                            label: b.NW.string(b.t['tu+ZWF']),
                            action: () => r(() => l(u.bL.ONLY_MENTIONS))
                        }),
                        (0, i.jsx)(o.k5B, {
                            group: 'notification-preset',
                            id: 'push_settings_everything_nothing',
                            label: b.NW.string(b.t.X4wWUl),
                            checked: n === u.bL.NO_MESSAGES,
                            action: () => r(() => l(u.bL.NO_MESSAGES))
                        })
                    ]
                },
                'push_settings'
            )
        ]
    });
}
