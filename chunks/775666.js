e.d(i, {
    EQ: () => E,
    T5: () => b,
    ZP: () => N
}),
    e(388685),
    e(997841);
var n = e(200651),
    s = e(192379),
    l = e(442837),
    a = e(481060),
    r = e(87051),
    d = e(221259),
    g = e(113449),
    c = e(686660),
    o = e(9156),
    S = e(621600),
    _ = e(981631),
    u = e(490897),
    L = e(526761),
    h = e(388032);
function N(t) {
    let i = E(t);
    return t.type === _.d4z.GUILD_VOICE
        ? null
        : (0, n.jsx)(a.sNh, {
              id: 'channel_notification_settings',
              label: h.intl.string(h.t.HcoRu7),
              children: i
          });
}
function E(t) {
    let i = (0, d.ZA)(t),
        e = (0, d.yN)(t),
        g = i.preset === c.s8.CUSTOM && !e.inherited,
        [S, u] = s.useState(g),
        [L, N] = s.useState(!1),
        E = L ? c.s8.CUSTOM : i.preset,
        f = b(t, () => N(!1)),
        p = (0, l.e7)([o.ZP], () => o.ZP.getNewForumThreadsCreated(t)),
        O = 'parent' === e.inheritedFrom ? h.intl.string(h.t.wlrV1d) : h.intl.string(h.t['1Wn2Mz']);
    return t.type === _.d4z.GUILD_STAGE_VOICE
        ? (0, n.jsxs)(a.kSQ, {
              children: [
                  (0, n.jsx)(a.k5B, {
                      id: 'cns_default',
                      label: O,
                      checked: e.inherited,
                      group: 'channel_notification_settings',
                      subtext: i.notification === _.bL.NO_MESSAGES ? h.intl.string(h.t.CtVGyc) : h.intl.string(h.t['BENn//']),
                      action: () => (0, d.JK)(t.guild_id, t.id)
                  }),
                  (0, n.jsx)(a.k5B, {
                      id: 'cns_only_mention',
                      group: 'channel_notification_settings',
                      checked: !e.inherited && i.notification !== _.bL.NO_MESSAGES,
                      label: h.intl.string(h.t['BENn//']),
                      action: () => (0, d.ft)(t.guild_id, t.id, _.bL.ONLY_MENTIONS)
                  }),
                  (0, n.jsx)(a.k5B, {
                      id: 'cns_no_message',
                      group: 'channel_notification_settings',
                      label: h.intl.string(h.t.CtVGyc),
                      checked: !e.inherited && i.notification === _.bL.NO_MESSAGES,
                      action: () => (0, d.ft)(t.guild_id, t.id, _.bL.NO_MESSAGES)
                  })
              ]
          })
        : (0, n.jsxs)(n.Fragment, {
              children: [
                  t.isForumLikeChannel()
                      ? (0, n.jsxs)(n.Fragment, {
                            children: [
                                (0, n.jsx)(a.S89, {
                                    id: 'new-forum-threads-created',
                                    label: h.intl.string(h.t.Rkgjpq),
                                    checked: p,
                                    action: () => r.Z.setForumThreadsCreated(t, !p)
                                }),
                                (0, n.jsx)(a.Clw, {})
                            ]
                        })
                      : null,
                  (0, n.jsxs)(a.kSQ, {
                      children: [
                          (0, n.jsx)(a.k5B, {
                              id: 'cns_default',
                              label: O,
                              group: 'channel_notification_settings',
                              checked: e.inherited && !L,
                              subtext: e.inheritedPreset,
                              action: () => ((0, d.JK)(t.guild_id, t.id), N(!1))
                          }),
                          (0, n.jsx)(a.k5B, {
                              id: 'cns_everything',
                              group: 'channel_notification_settings',
                              label: h.intl.string(h.t.hZrr6u),
                              checked: !e.inherited && E === c.s8.ALL_MESSAGES,
                              action: () => ((0, d._m)(t.guild_id, t.id, c.s8.ALL_MESSAGES), N(!1))
                          }),
                          (0, n.jsx)(a.k5B, {
                              id: 'cns_essentials',
                              group: 'channel_notification_settings',
                              label: h.intl.string(h.t.y59NJi),
                              checked: !e.inherited && E === c.s8.MENTIONS,
                              action: () => ((0, d._m)(t.guild_id, t.id, c.s8.MENTIONS), N(!1))
                          }),
                          (0, n.jsx)(a.k5B, {
                              id: 'cns_nothing',
                              group: 'channel_notification_settings',
                              label: h.intl.string(h.t['pGn/bG']),
                              checked: !e.inherited && E === c.s8.NOTHING,
                              action: () => ((0, d._m)(t.guild_id, t.id, c.s8.NOTHING), N(!1))
                          }),
                          (0, n.jsx)(a.k5B, {
                              id: 'cns_custom',
                              group: 'channel_notification_settings',
                              label: h.intl.string(h.t['32yow8']),
                              checked: L || (!e.inherited && E === c.s8.CUSTOM),
                              action: () => (u(!0), N(!0))
                          })
                      ]
                  }),
                  (S || g) && f
              ]
          });
}
function b(t, i) {
    let { notification: e, unread: s } = (0, d.ZA)(t),
        l = (t) => {
            t(), i();
        },
        c = (i) => {
            let e = { message_notifications: i };
            i === _.bL.ALL_MESSAGES && s !== u.i.ALL_MESSAGES && (e.flags = (0, g.pq)(o.ZP.getChannelIdFlags(t.guild_id, t.id), L.ic.UNREADS_ALL_MESSAGES)), r.Z.updateChannelOverrideSettings(t.guild_id, t.id, e, S.UE.notifications(i));
        };
    return (0, n.jsxs)(a.kSQ, {
        children: [
            (0, n.jsxs)(
                a.sNh,
                {
                    id: 'unread_setting',
                    label: 'Unread Badges',
                    children: [
                        (0, n.jsx)(a.k5B, {
                            id: 'unread_setting_all_messages',
                            group: 'unread_setting',
                            checked: s === u.i.ALL_MESSAGES,
                            label: h.intl.string(h.t['HVah//']),
                            action: () => l(() => (0, d.IG)(t.guild_id, t.id, u.i.ALL_MESSAGES))
                        }),
                        (0, n.jsx)(a.k5B, {
                            id: 'unread_setting_mention_only',
                            group: 'unread_setting',
                            checked: s === u.i.ONLY_MENTIONS,
                            label: h.intl.string(h.t['tu+ZWF']),
                            disabled: s !== u.i.ONLY_MENTIONS && e === _.bL.ALL_MESSAGES,
                            subtext: s !== u.i.ONLY_MENTIONS && e === _.bL.ALL_MESSAGES ? h.intl.string(h.t.eP8yWV) : void 0,
                            action: () => l(() => (0, d.IG)(t.guild_id, t.id, u.i.ONLY_MENTIONS))
                        })
                    ]
                },
                'unread_setting'
            ),
            (0, n.jsxs)(
                a.sNh,
                {
                    id: 'push_settings',
                    label: h.intl.string(h.t.HcoRu7),
                    children: [
                        (0, n.jsx)(a.k5B, {
                            group: 'notification-preset',
                            id: 'push_settings_everything',
                            label: h.intl.string(h.t['HVah//']),
                            checked: e === _.bL.ALL_MESSAGES,
                            subtext: s !== u.i.ALL_MESSAGES && e !== _.bL.ALL_MESSAGES ? h.intl.string(h.t.idXSbG) : void 0,
                            action: () => l(() => c(_.bL.ALL_MESSAGES))
                        }),
                        (0, n.jsx)(a.k5B, {
                            group: 'notification-preset',
                            id: 'push_settings_everything_mention',
                            checked: e === _.bL.ONLY_MENTIONS,
                            label: h.intl.string(h.t['tu+ZWF']),
                            action: () => l(() => c(_.bL.ONLY_MENTIONS))
                        }),
                        (0, n.jsx)(a.k5B, {
                            group: 'notification-preset',
                            id: 'push_settings_everything_nothing',
                            label: h.intl.string(h.t.X4wWUl),
                            checked: e === _.bL.NO_MESSAGES,
                            action: () => l(() => c(_.bL.NO_MESSAGES))
                        })
                    ]
                },
                'push_settings'
            )
        ]
    });
}
