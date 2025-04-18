i.d(e, {
    EQ: () => E,
    T5: () => b,
    ZP: () => h
}),
    i(388685),
    i(997841);
var n = i(200651),
    s = i(192379),
    a = i(442837),
    r = i(481060),
    l = i(87051),
    d = i(221259),
    g = i(113449),
    c = i(686660),
    o = i(9156),
    S = i(621600),
    _ = i(981631),
    N = i(490897),
    u = i(526761),
    L = i(388032);
function h(t) {
    let e = E(t);
    return t.type === _.d4z.GUILD_VOICE
        ? null
        : (0, n.jsx)(r.sNh, {
              id: 'channel_notification_settings',
              label: L.NW.string(L.t.HcoRu7),
              children: e
          });
}
function E(t) {
    let e = (0, d.ZA)(t),
        i = (0, d.yN)(t),
        g = e.preset === c.s8.CUSTOM && !i.inherited,
        [S, N] = s.useState(g),
        [u, h] = s.useState(!1),
        E = u ? c.s8.CUSTOM : e.preset,
        f = b(t, () => h(!1)),
        p = (0, a.e7)([o.ZP], () => o.ZP.getNewForumThreadsCreated(t)),
        O = 'parent' === i.inheritedFrom ? L.NW.string(L.t.wlrV1d) : L.NW.string(L.t['1Wn2Mz']);
    return t.type === _.d4z.GUILD_STAGE_VOICE
        ? (0, n.jsxs)(r.kSQ, {
              children: [
                  (0, n.jsx)(r.k5B, {
                      id: 'cns_default',
                      label: O,
                      checked: i.inherited,
                      group: 'channel_notification_settings',
                      subtext: e.notification === _.bL.NO_MESSAGES ? L.NW.string(L.t.CtVGyc) : L.NW.string(L.t['BENn//']),
                      action: () => (0, d.JK)(t.guild_id, t.id)
                  }),
                  (0, n.jsx)(r.k5B, {
                      id: 'cns_only_mention',
                      group: 'channel_notification_settings',
                      checked: !i.inherited && e.notification !== _.bL.NO_MESSAGES,
                      label: L.NW.string(L.t['BENn//']),
                      action: () => (0, d.ft)(t.guild_id, t.id, _.bL.ONLY_MENTIONS)
                  }),
                  (0, n.jsx)(r.k5B, {
                      id: 'cns_no_message',
                      group: 'channel_notification_settings',
                      label: L.NW.string(L.t.CtVGyc),
                      checked: !i.inherited && e.notification === _.bL.NO_MESSAGES,
                      action: () => (0, d.ft)(t.guild_id, t.id, _.bL.NO_MESSAGES)
                  })
              ]
          })
        : (0, n.jsxs)(n.Fragment, {
              children: [
                  t.isForumLikeChannel()
                      ? (0, n.jsxs)(n.Fragment, {
                            children: [
                                (0, n.jsx)(r.S89, {
                                    id: 'new-forum-threads-created',
                                    label: L.NW.string(L.t.Rkgjpq),
                                    checked: p,
                                    action: () => l.Z.setForumThreadsCreated(t, !p)
                                }),
                                (0, n.jsx)(r.Clw, {})
                            ]
                        })
                      : null,
                  (0, n.jsxs)(r.kSQ, {
                      children: [
                          (0, n.jsx)(r.k5B, {
                              id: 'cns_default',
                              label: O,
                              group: 'channel_notification_settings',
                              checked: i.inherited && !u,
                              subtext: i.inheritedPreset,
                              action: () => ((0, d.JK)(t.guild_id, t.id), h(!1))
                          }),
                          (0, n.jsx)(r.k5B, {
                              id: 'cns_everything',
                              group: 'channel_notification_settings',
                              label: L.NW.string(L.t.hZrr6u),
                              checked: !i.inherited && E === c.s8.ALL_MESSAGES,
                              action: () => ((0, d._m)(t.guild_id, t.id, c.s8.ALL_MESSAGES), h(!1))
                          }),
                          (0, n.jsx)(r.k5B, {
                              id: 'cns_essentials',
                              group: 'channel_notification_settings',
                              label: L.NW.string(L.t.y59NJi),
                              checked: !i.inherited && E === c.s8.MENTIONS,
                              action: () => ((0, d._m)(t.guild_id, t.id, c.s8.MENTIONS), h(!1))
                          }),
                          (0, n.jsx)(r.k5B, {
                              id: 'cns_nothing',
                              group: 'channel_notification_settings',
                              label: L.NW.string(L.t['pGn/bG']),
                              checked: !i.inherited && E === c.s8.NOTHING,
                              action: () => ((0, d._m)(t.guild_id, t.id, c.s8.NOTHING), h(!1))
                          }),
                          (0, n.jsx)(r.k5B, {
                              id: 'cns_custom',
                              group: 'channel_notification_settings',
                              label: L.NW.string(L.t['32yow8']),
                              checked: u || (!i.inherited && E === c.s8.CUSTOM),
                              action: () => (N(!0), h(!0))
                          })
                      ]
                  }),
                  (S || g) && f
              ]
          });
}
function b(t, e) {
    let { notification: i, unread: s } = (0, d.ZA)(t),
        a = (t) => {
            t(), e();
        },
        c = (e) => {
            let i = { message_notifications: e };
            e === _.bL.ALL_MESSAGES && s !== N.i.ALL_MESSAGES && (i.flags = (0, g.pq)(o.ZP.getChannelIdFlags(t.guild_id, t.id), u.ic.UNREADS_ALL_MESSAGES)), l.Z.updateChannelOverrideSettings(t.guild_id, t.id, i, S.UE.notifications(e));
        };
    return (0, n.jsxs)(r.kSQ, {
        children: [
            (0, n.jsxs)(
                r.sNh,
                {
                    id: 'unread_setting',
                    label: 'Unread Badges',
                    children: [
                        (0, n.jsx)(r.k5B, {
                            id: 'unread_setting_all_messages',
                            group: 'unread_setting',
                            checked: s === N.i.ALL_MESSAGES,
                            label: L.NW.string(L.t['HVah//']),
                            action: () => a(() => (0, d.IG)(t.guild_id, t.id, N.i.ALL_MESSAGES))
                        }),
                        (0, n.jsx)(r.k5B, {
                            id: 'unread_setting_mention_only',
                            group: 'unread_setting',
                            checked: s === N.i.ONLY_MENTIONS,
                            label: L.NW.string(L.t['tu+ZWF']),
                            disabled: s !== N.i.ONLY_MENTIONS && i === _.bL.ALL_MESSAGES,
                            subtext: s !== N.i.ONLY_MENTIONS && i === _.bL.ALL_MESSAGES ? L.NW.string(L.t.eP8yWV) : void 0,
                            action: () => a(() => (0, d.IG)(t.guild_id, t.id, N.i.ONLY_MENTIONS))
                        })
                    ]
                },
                'unread_setting'
            ),
            (0, n.jsxs)(
                r.sNh,
                {
                    id: 'push_settings',
                    label: L.NW.string(L.t.HcoRu7),
                    children: [
                        (0, n.jsx)(r.k5B, {
                            group: 'notification-preset',
                            id: 'push_settings_everything',
                            label: L.NW.string(L.t['HVah//']),
                            checked: i === _.bL.ALL_MESSAGES,
                            subtext: s !== N.i.ALL_MESSAGES && i !== _.bL.ALL_MESSAGES ? L.NW.string(L.t.idXSbG) : void 0,
                            action: () => a(() => c(_.bL.ALL_MESSAGES))
                        }),
                        (0, n.jsx)(r.k5B, {
                            group: 'notification-preset',
                            id: 'push_settings_everything_mention',
                            checked: i === _.bL.ONLY_MENTIONS,
                            label: L.NW.string(L.t['tu+ZWF']),
                            action: () => a(() => c(_.bL.ONLY_MENTIONS))
                        }),
                        (0, n.jsx)(r.k5B, {
                            group: 'notification-preset',
                            id: 'push_settings_everything_nothing',
                            label: L.NW.string(L.t.X4wWUl),
                            checked: i === _.bL.NO_MESSAGES,
                            action: () => a(() => c(_.bL.NO_MESSAGES))
                        })
                    ]
                },
                'push_settings'
            )
        ]
    });
}
