n.d(t, {
    EQ: () => p,
    T5: () => N,
    ZP: () => f
}),
    n(388685),
    n(997841);
var i = n(200651),
    a = n(192379),
    r = n(442837),
    o = n(481060),
    c = n(87051),
    s = n(221259),
    l = n(113449),
    d = n(686660),
    _ = n(9156),
    g = n(621600),
    u = n(981631),
    h = n(490897),
    S = n(526761),
    b = n(388032);
function f(e) {
    let t = p(e);
    return e.type === u.d4z.GUILD_VOICE
        ? null
        : (0, i.jsx)(o.sNh, {
              id: 'channel_notification_settings',
              label: b.intl.string(b.t.HcoRu7),
              children: t
          });
}
function p(e) {
    let t = (0, s.ZA)(e),
        n = (0, s.yN)(e),
        l = t.preset === d.s8.CUSTOM && !n.inherited,
        [g, h] = a.useState(l),
        [S, f] = a.useState(!1),
        p = S ? d.s8.CUSTOM : t.preset,
        E = N(e, () => f(!1)),
        L = (0, r.e7)([_.ZP], () => _.ZP.getNewForumThreadsCreated(e)),
        O = 'parent' === n.inheritedFrom ? b.intl.string(b.t.wlrV1d) : b.intl.string(b.t['1Wn2Mz']);
    return e.type === u.d4z.GUILD_STAGE_VOICE
        ? (0, i.jsxs)(o.kSQ, {
              children: [
                  (0, i.jsx)(o.k5B, {
                      id: 'cns_default',
                      label: O,
                      checked: n.inherited,
                      group: 'channel_notification_settings',
                      subtext: t.notification === u.bL.NO_MESSAGES ? b.intl.string(b.t.CtVGyc) : b.intl.string(b.t['BENn//']),
                      action: () => (0, s.JK)(e.guild_id, e.id)
                  }),
                  (0, i.jsx)(o.k5B, {
                      id: 'cns_only_mention',
                      group: 'channel_notification_settings',
                      checked: !n.inherited && t.notification !== u.bL.NO_MESSAGES,
                      label: b.intl.string(b.t['BENn//']),
                      action: () => (0, s.ft)(e.guild_id, e.id, u.bL.ONLY_MENTIONS)
                  }),
                  (0, i.jsx)(o.k5B, {
                      id: 'cns_no_message',
                      group: 'channel_notification_settings',
                      label: b.intl.string(b.t.CtVGyc),
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
                                    label: b.intl.string(b.t.Rkgjpq),
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
                              action: () => ((0, s.JK)(e.guild_id, e.id), f(!1))
                          }),
                          (0, i.jsx)(o.k5B, {
                              id: 'cns_everything',
                              group: 'channel_notification_settings',
                              label: b.intl.string(b.t.hZrr6u),
                              checked: !n.inherited && p === d.s8.ALL_MESSAGES,
                              action: () => ((0, s._m)(e.guild_id, e.id, d.s8.ALL_MESSAGES), f(!1))
                          }),
                          (0, i.jsx)(o.k5B, {
                              id: 'cns_essentials',
                              group: 'channel_notification_settings',
                              label: b.intl.string(b.t.y59NJi),
                              checked: !n.inherited && p === d.s8.MENTIONS,
                              action: () => ((0, s._m)(e.guild_id, e.id, d.s8.MENTIONS), f(!1))
                          }),
                          (0, i.jsx)(o.k5B, {
                              id: 'cns_nothing',
                              group: 'channel_notification_settings',
                              label: b.intl.string(b.t['pGn/bG']),
                              checked: !n.inherited && p === d.s8.NOTHING,
                              action: () => ((0, s._m)(e.guild_id, e.id, d.s8.NOTHING), f(!1))
                          }),
                          (0, i.jsx)(o.k5B, {
                              id: 'cns_custom',
                              group: 'channel_notification_settings',
                              label: b.intl.string(b.t['32yow8']),
                              checked: S || (!n.inherited && p === d.s8.CUSTOM),
                              action: () => (h(!0), f(!0))
                          })
                      ]
                  }),
                  (g || l) && E
              ]
          });
}
function N(e, t) {
    let { notification: n, unread: a } = (0, s.ZA)(e),
        r = (e) => {
            e(), t();
        },
        d = (t) => {
            let n = { message_notifications: t };
            t === u.bL.ALL_MESSAGES && a !== h.i.ALL_MESSAGES && (n.flags = (0, l.pq)(_.ZP.getChannelIdFlags(e.guild_id, e.id), S.ic.UNREADS_ALL_MESSAGES)), c.Z.updateChannelOverrideSettings(e.guild_id, e.id, n, g.UE.notifications(t));
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
                            label: b.intl.string(b.t['HVah//']),
                            action: () => r(() => (0, s.IG)(e.guild_id, e.id, h.i.ALL_MESSAGES))
                        }),
                        (0, i.jsx)(o.k5B, {
                            id: 'unread_setting_mention_only',
                            group: 'unread_setting',
                            checked: a === h.i.ONLY_MENTIONS,
                            label: b.intl.string(b.t['tu+ZWF']),
                            disabled: a !== h.i.ONLY_MENTIONS && n === u.bL.ALL_MESSAGES,
                            subtext: a !== h.i.ONLY_MENTIONS && n === u.bL.ALL_MESSAGES ? b.intl.string(b.t.eP8yWV) : void 0,
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
                    label: b.intl.string(b.t.HcoRu7),
                    children: [
                        (0, i.jsx)(o.k5B, {
                            group: 'notification-preset',
                            id: 'push_settings_everything',
                            label: b.intl.string(b.t['HVah//']),
                            checked: n === u.bL.ALL_MESSAGES,
                            subtext: a !== h.i.ALL_MESSAGES && n !== u.bL.ALL_MESSAGES ? b.intl.string(b.t.idXSbG) : void 0,
                            action: () => r(() => d(u.bL.ALL_MESSAGES))
                        }),
                        (0, i.jsx)(o.k5B, {
                            group: 'notification-preset',
                            id: 'push_settings_everything_mention',
                            checked: n === u.bL.ONLY_MENTIONS,
                            label: b.intl.string(b.t['tu+ZWF']),
                            action: () => r(() => d(u.bL.ONLY_MENTIONS))
                        }),
                        (0, i.jsx)(o.k5B, {
                            group: 'notification-preset',
                            id: 'push_settings_everything_nothing',
                            label: b.intl.string(b.t.X4wWUl),
                            checked: n === u.bL.NO_MESSAGES,
                            action: () => r(() => d(u.bL.NO_MESSAGES))
                        })
                    ]
                },
                'push_settings'
            )
        ]
    });
}
