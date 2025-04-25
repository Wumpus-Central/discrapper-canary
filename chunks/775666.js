t.d(n, {
    EQ: () => N,
    T5: () => L,
    ZP: () => p
}),
    t(388685),
    t(997841);
var i = t(200651),
    a = t(192379),
    o = t(442837),
    d = t(481060),
    c = t(87051),
    s = t(221259),
    r = t(113449),
    _ = t(686660),
    l = t(9156),
    g = t(621600),
    h = t(981631),
    u = t(490897),
    S = t(526761),
    b = t(388032);
function p(e) {
    let n = N(e);
    return e.type === h.d4z.GUILD_VOICE
        ? null
        : (0, i.jsx)(d.sNh, {
              id: 'channel_notification_settings',
              label: b.intl.string(b.t.HcoRu7),
              children: n
          });
}
function N(e) {
    let n = (0, s.ZA)(e),
        t = (0, s.yN)(e),
        r = n.preset === _.s8.CUSTOM && !t.inherited,
        [g, u] = a.useState(r),
        [S, p] = a.useState(!1),
        N = S ? _.s8.CUSTOM : n.preset,
        E = L(e, () => p(!1)),
        m = (0, o.e7)([l.ZP], () => l.ZP.getNewForumThreadsCreated(e)),
        f = 'parent' === t.inheritedFrom ? b.intl.string(b.t.wlrV1d) : b.intl.string(b.t['1Wn2Mz']);
    return e.type === h.d4z.GUILD_STAGE_VOICE
        ? (0, i.jsxs)(d.kSQ, {
              children: [
                  (0, i.jsx)(d.k5B, {
                      id: 'cns_default',
                      label: f,
                      checked: t.inherited,
                      group: 'channel_notification_settings',
                      subtext: n.notification === h.bL.NO_MESSAGES ? b.intl.string(b.t.CtVGyc) : b.intl.string(b.t['BENn//']),
                      action: () => (0, s.JK)(e.guild_id, e.id)
                  }),
                  (0, i.jsx)(d.k5B, {
                      id: 'cns_only_mention',
                      group: 'channel_notification_settings',
                      checked: !t.inherited && n.notification !== h.bL.NO_MESSAGES,
                      label: b.intl.string(b.t['BENn//']),
                      action: () => (0, s.ft)(e.guild_id, e.id, h.bL.ONLY_MENTIONS)
                  }),
                  (0, i.jsx)(d.k5B, {
                      id: 'cns_no_message',
                      group: 'channel_notification_settings',
                      label: b.intl.string(b.t.CtVGyc),
                      checked: !t.inherited && n.notification === h.bL.NO_MESSAGES,
                      action: () => (0, s.ft)(e.guild_id, e.id, h.bL.NO_MESSAGES)
                  })
              ]
          })
        : (0, i.jsxs)(i.Fragment, {
              children: [
                  e.isForumLikeChannel()
                      ? (0, i.jsxs)(i.Fragment, {
                            children: [
                                (0, i.jsx)(d.S89, {
                                    id: 'new-forum-threads-created',
                                    label: b.intl.string(b.t.Rkgjpq),
                                    checked: m,
                                    action: () => c.Z.setForumThreadsCreated(e, !m)
                                }),
                                (0, i.jsx)(d.Clw, {})
                            ]
                        })
                      : null,
                  (0, i.jsxs)(d.kSQ, {
                      children: [
                          (0, i.jsx)(d.k5B, {
                              id: 'cns_default',
                              label: f,
                              group: 'channel_notification_settings',
                              checked: t.inherited && !S,
                              subtext: t.inheritedPreset,
                              action: () => ((0, s.JK)(e.guild_id, e.id), p(!1))
                          }),
                          (0, i.jsx)(d.k5B, {
                              id: 'cns_everything',
                              group: 'channel_notification_settings',
                              label: b.intl.string(b.t.hZrr6u),
                              checked: !t.inherited && N === _.s8.ALL_MESSAGES,
                              action: () => ((0, s._m)(e.guild_id, e.id, _.s8.ALL_MESSAGES), p(!1))
                          }),
                          (0, i.jsx)(d.k5B, {
                              id: 'cns_essentials',
                              group: 'channel_notification_settings',
                              label: b.intl.string(b.t.y59NJi),
                              checked: !t.inherited && N === _.s8.MENTIONS,
                              action: () => ((0, s._m)(e.guild_id, e.id, _.s8.MENTIONS), p(!1))
                          }),
                          (0, i.jsx)(d.k5B, {
                              id: 'cns_nothing',
                              group: 'channel_notification_settings',
                              label: b.intl.string(b.t['pGn/bG']),
                              checked: !t.inherited && N === _.s8.NOTHING,
                              action: () => ((0, s._m)(e.guild_id, e.id, _.s8.NOTHING), p(!1))
                          }),
                          (0, i.jsx)(d.k5B, {
                              id: 'cns_custom',
                              group: 'channel_notification_settings',
                              label: b.intl.string(b.t['32yow8']),
                              checked: S || (!t.inherited && N === _.s8.CUSTOM),
                              action: () => (u(!0), p(!0))
                          })
                      ]
                  }),
                  (g || r) && E
              ]
          });
}
function L(e, n) {
    let { notification: t, unread: a } = (0, s.ZA)(e),
        o = (e) => {
            e(), n();
        },
        _ = (n) => {
            let t = { message_notifications: n };
            n === h.bL.ALL_MESSAGES && a !== u.i.ALL_MESSAGES && (t.flags = (0, r.pq)(l.ZP.getChannelIdFlags(e.guild_id, e.id), S.ic.UNREADS_ALL_MESSAGES)), c.Z.updateChannelOverrideSettings(e.guild_id, e.id, t, g.UE.notifications(n));
        };
    return (0, i.jsxs)(d.kSQ, {
        children: [
            (0, i.jsxs)(
                d.sNh,
                {
                    id: 'unread_setting',
                    label: 'Unread Badges',
                    children: [
                        (0, i.jsx)(d.k5B, {
                            id: 'unread_setting_all_messages',
                            group: 'unread_setting',
                            checked: a === u.i.ALL_MESSAGES,
                            label: b.intl.string(b.t['HVah//']),
                            action: () => o(() => (0, s.IG)(e.guild_id, e.id, u.i.ALL_MESSAGES))
                        }),
                        (0, i.jsx)(d.k5B, {
                            id: 'unread_setting_mention_only',
                            group: 'unread_setting',
                            checked: a === u.i.ONLY_MENTIONS,
                            label: b.intl.string(b.t['tu+ZWF']),
                            disabled: a !== u.i.ONLY_MENTIONS && t === h.bL.ALL_MESSAGES,
                            subtext: a !== u.i.ONLY_MENTIONS && t === h.bL.ALL_MESSAGES ? b.intl.string(b.t.eP8yWV) : void 0,
                            action: () => o(() => (0, s.IG)(e.guild_id, e.id, u.i.ONLY_MENTIONS))
                        })
                    ]
                },
                'unread_setting'
            ),
            (0, i.jsxs)(
                d.sNh,
                {
                    id: 'push_settings',
                    label: b.intl.string(b.t.HcoRu7),
                    children: [
                        (0, i.jsx)(d.k5B, {
                            group: 'notification-preset',
                            id: 'push_settings_everything',
                            label: b.intl.string(b.t['HVah//']),
                            checked: t === h.bL.ALL_MESSAGES,
                            subtext: a !== u.i.ALL_MESSAGES && t !== h.bL.ALL_MESSAGES ? b.intl.string(b.t.idXSbG) : void 0,
                            action: () => o(() => _(h.bL.ALL_MESSAGES))
                        }),
                        (0, i.jsx)(d.k5B, {
                            group: 'notification-preset',
                            id: 'push_settings_everything_mention',
                            checked: t === h.bL.ONLY_MENTIONS,
                            label: b.intl.string(b.t['tu+ZWF']),
                            action: () => o(() => _(h.bL.ONLY_MENTIONS))
                        }),
                        (0, i.jsx)(d.k5B, {
                            group: 'notification-preset',
                            id: 'push_settings_everything_nothing',
                            label: b.intl.string(b.t.X4wWUl),
                            checked: t === h.bL.NO_MESSAGES,
                            action: () => o(() => _(h.bL.NO_MESSAGES))
                        })
                    ]
                },
                'push_settings'
            )
        ]
    });
}
