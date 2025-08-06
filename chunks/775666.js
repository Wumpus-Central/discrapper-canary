(n.d(t, {
    EQ: () => E,
    T5: () => b,
    ZP: () => g
}),
    n(388685),
    n(997841));
var r = n(255367),
    i = n(73800),
    o = n(442837),
    a = n(481060),
    s = n(87051),
    l = n(221259),
    c = n(113449),
    u = n(686660),
    d = n(9156),
    f = n(621600),
    _ = n(981631),
    p = n(490897),
    h = n(526761),
    m = n(388032);
function g(e) {
    let t = E(e);
    return e.type === _.d4z.GUILD_VOICE
        ? null
        : (0, r.jsx)(a.sNh, {
              id: 'channel_notification_settings',
              label: m.intl.string(m.t.HcoRu7),
              children: t
          });
}
function E(e) {
    let t = (0, l.ZA)(e),
        n = (0, l.yN)(e),
        c = t.preset === u.s8.CUSTOM && !n.inherited,
        [f, p] = i.useState(c),
        [h, g] = i.useState(!1),
        E = h ? u.s8.CUSTOM : t.preset,
        y = b(e, () => g(!1)),
        O = (0, o.e7)([d.ZP], () => d.ZP.getNewForumThreadsCreated(e)),
        v = 'parent' === n.inheritedFrom ? m.intl.string(m.t.wlrV1d) : m.intl.string(m.t['1Wn2Mz']);
    return e.type === _.d4z.GUILD_STAGE_VOICE
        ? (0, r.jsxs)(a.kSQ, {
              children: [
                  (0, r.jsx)(a.k5B, {
                      id: 'cns_default',
                      label: v,
                      checked: n.inherited,
                      group: 'channel_notification_settings',
                      subtext: t.notification === _.bL.NO_MESSAGES ? m.intl.string(m.t.CtVGyc) : m.intl.string(m.t['BENn//']),
                      action: () => (0, l.JK)(e.guild_id, e.id)
                  }),
                  (0, r.jsx)(a.k5B, {
                      id: 'cns_only_mention',
                      group: 'channel_notification_settings',
                      checked: !n.inherited && t.notification !== _.bL.NO_MESSAGES,
                      label: m.intl.string(m.t['BENn//']),
                      action: () => (0, l.ft)(e.guild_id, e.id, _.bL.ONLY_MENTIONS)
                  }),
                  (0, r.jsx)(a.k5B, {
                      id: 'cns_no_message',
                      group: 'channel_notification_settings',
                      label: m.intl.string(m.t.CtVGyc),
                      checked: !n.inherited && t.notification === _.bL.NO_MESSAGES,
                      action: () => (0, l.ft)(e.guild_id, e.id, _.bL.NO_MESSAGES)
                  })
              ]
          })
        : (0, r.jsxs)(r.Fragment, {
              children: [
                  e.isForumLikeChannel()
                      ? (0, r.jsxs)(r.Fragment, {
                            children: [
                                (0, r.jsx)(a.S89, {
                                    id: 'new-forum-threads-created',
                                    label: m.intl.string(m.t.Rkgjpq),
                                    checked: O,
                                    action: () => s.Z.setForumThreadsCreated(e, !O)
                                }),
                                (0, r.jsx)(a.Clw, {})
                            ]
                        })
                      : null,
                  (0, r.jsxs)(a.kSQ, {
                      children: [
                          (0, r.jsx)(a.k5B, {
                              id: 'cns_default',
                              label: v,
                              group: 'channel_notification_settings',
                              checked: n.inherited && !h,
                              subtext: n.inheritedPreset,
                              action: () => ((0, l.JK)(e.guild_id, e.id), g(!1))
                          }),
                          (0, r.jsx)(a.k5B, {
                              id: 'cns_everything',
                              group: 'channel_notification_settings',
                              label: m.intl.string(m.t.hZrr6u),
                              checked: !n.inherited && E === u.s8.ALL_MESSAGES,
                              action: () => ((0, l._m)(e.guild_id, e.id, u.s8.ALL_MESSAGES), g(!1))
                          }),
                          (0, r.jsx)(a.k5B, {
                              id: 'cns_essentials',
                              group: 'channel_notification_settings',
                              label: m.intl.string(m.t.y59NJi),
                              checked: !n.inherited && E === u.s8.MENTIONS,
                              action: () => ((0, l._m)(e.guild_id, e.id, u.s8.MENTIONS), g(!1))
                          }),
                          (0, r.jsx)(a.k5B, {
                              id: 'cns_nothing',
                              group: 'channel_notification_settings',
                              label: m.intl.string(m.t['pGn/bG']),
                              checked: !n.inherited && E === u.s8.NOTHING,
                              action: () => ((0, l._m)(e.guild_id, e.id, u.s8.NOTHING), g(!1))
                          }),
                          (0, r.jsx)(a.k5B, {
                              id: 'cns_custom',
                              group: 'channel_notification_settings',
                              label: m.intl.string(m.t['32yow8']),
                              checked: h || (!n.inherited && E === u.s8.CUSTOM),
                              action: () => (p(!0), g(!0))
                          })
                      ]
                  }),
                  (f || c) && y
              ]
          });
}
function b(e, t) {
    let { notification: n, unread: i } = (0, l.ZA)(e),
        o = (e) => {
            (e(), t());
        },
        u = (t) => {
            let n = { message_notifications: t };
            (t === _.bL.ALL_MESSAGES && i !== p.i.ALL_MESSAGES && (n.flags = (0, c.pq)(d.ZP.getChannelIdFlags(e.guild_id, e.id), h.ic.UNREADS_ALL_MESSAGES)), s.Z.updateChannelOverrideSettings(e.guild_id, e.id, n, f.UE.notifications(t)));
        };
    return (0, r.jsxs)(a.kSQ, {
        children: [
            (0, r.jsxs)(
                a.sNh,
                {
                    id: 'unread_setting',
                    label: 'Unread Badges',
                    children: [
                        (0, r.jsx)(a.k5B, {
                            id: 'unread_setting_all_messages',
                            group: 'unread_setting',
                            checked: i === p.i.ALL_MESSAGES,
                            label: m.intl.string(m.t['HVah//']),
                            action: () => o(() => (0, l.IG)(e.guild_id, e.id, p.i.ALL_MESSAGES))
                        }),
                        (0, r.jsx)(a.k5B, {
                            id: 'unread_setting_mention_only',
                            group: 'unread_setting',
                            checked: i === p.i.ONLY_MENTIONS,
                            label: m.intl.string(m.t['tu+ZWF']),
                            disabled: i !== p.i.ONLY_MENTIONS && n === _.bL.ALL_MESSAGES,
                            subtext: i !== p.i.ONLY_MENTIONS && n === _.bL.ALL_MESSAGES ? m.intl.string(m.t.eP8yWV) : void 0,
                            action: () => o(() => (0, l.IG)(e.guild_id, e.id, p.i.ONLY_MENTIONS))
                        })
                    ]
                },
                'unread_setting'
            ),
            (0, r.jsxs)(
                a.sNh,
                {
                    id: 'push_settings',
                    label: m.intl.string(m.t.HcoRu7),
                    children: [
                        (0, r.jsx)(a.k5B, {
                            group: 'notification-preset',
                            id: 'push_settings_everything',
                            label: m.intl.string(m.t['HVah//']),
                            checked: n === _.bL.ALL_MESSAGES,
                            subtext: i !== p.i.ALL_MESSAGES && n !== _.bL.ALL_MESSAGES ? m.intl.string(m.t.idXSbG) : void 0,
                            action: () => o(() => u(_.bL.ALL_MESSAGES))
                        }),
                        (0, r.jsx)(a.k5B, {
                            group: 'notification-preset',
                            id: 'push_settings_everything_mention',
                            checked: n === _.bL.ONLY_MENTIONS,
                            label: m.intl.string(m.t['tu+ZWF']),
                            action: () => o(() => u(_.bL.ONLY_MENTIONS))
                        }),
                        (0, r.jsx)(a.k5B, {
                            group: 'notification-preset',
                            id: 'push_settings_everything_nothing',
                            label: m.intl.string(m.t.X4wWUl),
                            checked: n === _.bL.NO_MESSAGES,
                            action: () => o(() => u(_.bL.NO_MESSAGES))
                        })
                    ]
                },
                'push_settings'
            )
        ]
    });
}
