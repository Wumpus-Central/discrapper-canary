(n.d(e, {
    EQ: () => N,
    T5: () => b,
    ZP: () => h
}),
    n(388685),
    n(997841));
var i = n(255367),
    l = n(73800),
    a = n(442837),
    r = n(481060),
    s = n(87051),
    o = n(221259),
    d = n(113449),
    c = n(686660),
    u = n(9156),
    g = n(621600),
    _ = n(981631),
    f = n(490897),
    S = n(526761),
    E = n(388032);
function h(t) {
    let e = N(t);
    return t.type === _.d4z.GUILD_VOICE
        ? null
        : (0, i.jsx)(r.sNh, {
              id: 'channel_notification_settings',
              label: E.intl.string(E.t.HcoRu7),
              children: e
          });
}
function N(t) {
    let e = (0, o.ZA)(t),
        n = (0, o.yN)(t),
        d = e.preset === c.s8.CUSTOM && !n.inherited,
        [g, f] = l.useState(d),
        [S, h] = l.useState(!1),
        N = S ? c.s8.CUSTOM : e.preset,
        L = b(t, () => h(!1)),
        p = (0, a.e7)([u.ZP], () => u.ZP.getNewForumThreadsCreated(t)),
        O = 'parent' === n.inheritedFrom ? E.intl.string(E.t.wlrV1d) : E.intl.string(E.t['1Wn2Mz']);
    return t.type === _.d4z.GUILD_STAGE_VOICE
        ? (0, i.jsxs)(r.kSQ, {
              children: [
                  (0, i.jsx)(r.k5B, {
                      id: 'cns_default',
                      label: O,
                      checked: n.inherited,
                      group: 'channel_notification_settings',
                      subtext: e.notification === _.bL.NO_MESSAGES ? E.intl.string(E.t.CtVGyc) : E.intl.string(E.t['BENn//']),
                      action: () => (0, o.JK)(t.guild_id, t.id)
                  }),
                  (0, i.jsx)(r.k5B, {
                      id: 'cns_only_mention',
                      group: 'channel_notification_settings',
                      checked: !n.inherited && e.notification !== _.bL.NO_MESSAGES,
                      label: E.intl.string(E.t['BENn//']),
                      action: () => (0, o.ft)(t.guild_id, t.id, _.bL.ONLY_MENTIONS)
                  }),
                  (0, i.jsx)(r.k5B, {
                      id: 'cns_no_message',
                      group: 'channel_notification_settings',
                      label: E.intl.string(E.t.CtVGyc),
                      checked: !n.inherited && e.notification === _.bL.NO_MESSAGES,
                      action: () => (0, o.ft)(t.guild_id, t.id, _.bL.NO_MESSAGES)
                  })
              ]
          })
        : (0, i.jsxs)(i.Fragment, {
              children: [
                  t.isForumLikeChannel()
                      ? (0, i.jsxs)(i.Fragment, {
                            children: [
                                (0, i.jsx)(r.S89, {
                                    id: 'new-forum-threads-created',
                                    label: E.intl.string(E.t.Rkgjpq),
                                    checked: p,
                                    action: () => s.Z.setForumThreadsCreated(t, !p)
                                }),
                                (0, i.jsx)(r.Clw, {})
                            ]
                        })
                      : null,
                  (0, i.jsxs)(r.kSQ, {
                      children: [
                          (0, i.jsx)(r.k5B, {
                              id: 'cns_default',
                              label: O,
                              group: 'channel_notification_settings',
                              checked: n.inherited && !S,
                              subtext: n.inheritedPreset,
                              action: () => ((0, o.JK)(t.guild_id, t.id), h(!1))
                          }),
                          (0, i.jsx)(r.k5B, {
                              id: 'cns_everything',
                              group: 'channel_notification_settings',
                              label: E.intl.string(E.t.hZrr6u),
                              checked: !n.inherited && N === c.s8.ALL_MESSAGES,
                              action: () => ((0, o._m)(t.guild_id, t.id, c.s8.ALL_MESSAGES), h(!1))
                          }),
                          (0, i.jsx)(r.k5B, {
                              id: 'cns_essentials',
                              group: 'channel_notification_settings',
                              label: E.intl.string(E.t.y59NJi),
                              checked: !n.inherited && N === c.s8.MENTIONS,
                              action: () => ((0, o._m)(t.guild_id, t.id, c.s8.MENTIONS), h(!1))
                          }),
                          (0, i.jsx)(r.k5B, {
                              id: 'cns_nothing',
                              group: 'channel_notification_settings',
                              label: E.intl.string(E.t['pGn/bG']),
                              checked: !n.inherited && N === c.s8.NOTHING,
                              action: () => ((0, o._m)(t.guild_id, t.id, c.s8.NOTHING), h(!1))
                          }),
                          (0, i.jsx)(r.k5B, {
                              id: 'cns_custom',
                              group: 'channel_notification_settings',
                              label: E.intl.string(E.t['32yow8']),
                              checked: S || (!n.inherited && N === c.s8.CUSTOM),
                              action: () => (f(!0), h(!0))
                          })
                      ]
                  }),
                  (g || d) && L
              ]
          });
}
function b(t, e) {
    let { notification: n, unread: l } = (0, o.ZA)(t),
        a = (t) => {
            (t(), e());
        },
        c = (e) => {
            let n = { message_notifications: e };
            (e === _.bL.ALL_MESSAGES && l !== f.i.ALL_MESSAGES && (n.flags = (0, d.pq)(u.ZP.getChannelIdFlags(t.guild_id, t.id), S.ic.UNREADS_ALL_MESSAGES)), s.Z.updateChannelOverrideSettings(t.guild_id, t.id, n, g.UE.notifications(e)));
        };
    return (0, i.jsxs)(r.kSQ, {
        children: [
            (0, i.jsxs)(
                r.sNh,
                {
                    id: 'unread_setting',
                    label: 'Unread Badges',
                    children: [
                        (0, i.jsx)(r.k5B, {
                            id: 'unread_setting_all_messages',
                            group: 'unread_setting',
                            checked: l === f.i.ALL_MESSAGES,
                            label: E.intl.string(E.t['HVah//']),
                            action: () => a(() => (0, o.IG)(t.guild_id, t.id, f.i.ALL_MESSAGES))
                        }),
                        (0, i.jsx)(r.k5B, {
                            id: 'unread_setting_mention_only',
                            group: 'unread_setting',
                            checked: l === f.i.ONLY_MENTIONS,
                            label: E.intl.string(E.t['tu+ZWF']),
                            disabled: l !== f.i.ONLY_MENTIONS && n === _.bL.ALL_MESSAGES,
                            subtext: l !== f.i.ONLY_MENTIONS && n === _.bL.ALL_MESSAGES ? E.intl.string(E.t.eP8yWV) : void 0,
                            action: () => a(() => (0, o.IG)(t.guild_id, t.id, f.i.ONLY_MENTIONS))
                        })
                    ]
                },
                'unread_setting'
            ),
            (0, i.jsxs)(
                r.sNh,
                {
                    id: 'push_settings',
                    label: E.intl.string(E.t.HcoRu7),
                    children: [
                        (0, i.jsx)(r.k5B, {
                            group: 'notification-preset',
                            id: 'push_settings_everything',
                            label: E.intl.string(E.t['HVah//']),
                            checked: n === _.bL.ALL_MESSAGES,
                            subtext: l !== f.i.ALL_MESSAGES && n !== _.bL.ALL_MESSAGES ? E.intl.string(E.t.idXSbG) : void 0,
                            action: () => a(() => c(_.bL.ALL_MESSAGES))
                        }),
                        (0, i.jsx)(r.k5B, {
                            group: 'notification-preset',
                            id: 'push_settings_everything_mention',
                            checked: n === _.bL.ONLY_MENTIONS,
                            label: E.intl.string(E.t['tu+ZWF']),
                            action: () => a(() => c(_.bL.ONLY_MENTIONS))
                        }),
                        (0, i.jsx)(r.k5B, {
                            group: 'notification-preset',
                            id: 'push_settings_everything_nothing',
                            label: E.intl.string(E.t.X4wWUl),
                            checked: n === _.bL.NO_MESSAGES,
                            action: () => a(() => c(_.bL.NO_MESSAGES))
                        })
                    ]
                },
                'push_settings'
            )
        ]
    });
}
