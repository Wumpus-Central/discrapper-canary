t.d(n, {
    EQ: function () {
        return f;
    },
    T5: function () {
        return m;
    },
    ZP: function () {
        return p;
    }
}),
    t(47120),
    t(789020);
var i = t(200651),
    a = t(192379),
    c = t(442837),
    o = t(481060),
    r = t(87051),
    s = t(221259),
    d = t(113449),
    l = t(686660),
    _ = t(9156),
    u = t(621600),
    g = t(981631),
    h = t(490897),
    S = t(526761),
    b = t(388032);
function p(e) {
    let n = f(e);
    return e.type === g.d4z.GUILD_VOICE
        ? null
        : (0, i.jsx)(o.MenuItem, {
              id: 'channel_notification_settings',
              label: b.intl.string(b.t.HcoRu7),
              children: n
          });
}
function f(e) {
    let n = (0, s.ZA)(e),
        t = (0, s.yN)(e),
        d = n.preset === l.s8.CUSTOM && !t.inherited,
        [u, h] = a.useState(d),
        [S, p] = a.useState(!1),
        f = S ? l.s8.CUSTOM : n.preset,
        L = m(e, () => p(!1)),
        N = (0, c.e7)([_.ZP], () => _.ZP.getNewForumThreadsCreated(e)),
        M = 'parent' === t.inheritedFrom ? b.intl.string(b.t.wlrV1d) : b.intl.string(b.t['1Wn2Mz']);
    return e.type === g.d4z.GUILD_STAGE_VOICE
        ? (0, i.jsxs)(o.MenuGroup, {
              children: [
                  (0, i.jsx)(o.MenuRadioItem, {
                      id: 'cns_default',
                      label: M,
                      checked: t.inherited,
                      group: 'channel_notification_settings',
                      subtext: n.notification === g.bL.NO_MESSAGES ? b.intl.string(b.t.CtVGyc) : b.intl.string(b.t['BENn//']),
                      action: () => (0, s.JK)(e.guild_id, e.id)
                  }),
                  (0, i.jsx)(o.MenuRadioItem, {
                      id: 'cns_only_mention',
                      group: 'channel_notification_settings',
                      checked: !t.inherited && n.notification !== g.bL.NO_MESSAGES,
                      label: b.intl.string(b.t['BENn//']),
                      action: () => (0, s.ft)(e.guild_id, e.id, g.bL.ONLY_MENTIONS)
                  }),
                  (0, i.jsx)(o.MenuRadioItem, {
                      id: 'cns_no_message',
                      group: 'channel_notification_settings',
                      label: b.intl.string(b.t.CtVGyc),
                      checked: !t.inherited && n.notification === g.bL.NO_MESSAGES,
                      action: () => (0, s.ft)(e.guild_id, e.id, g.bL.NO_MESSAGES)
                  })
              ]
          })
        : (0, i.jsxs)(i.Fragment, {
              children: [
                  e.isForumLikeChannel()
                      ? (0, i.jsxs)(i.Fragment, {
                            children: [
                                (0, i.jsx)(o.MenuCheckboxItem, {
                                    id: 'new-forum-threads-created',
                                    label: b.intl.string(b.t.Rkgjpq),
                                    checked: N,
                                    action: () => r.Z.setForumThreadsCreated(e, !N)
                                }),
                                (0, i.jsx)(o.MenuSeparator, {})
                            ]
                        })
                      : null,
                  (0, i.jsxs)(o.MenuGroup, {
                      children: [
                          (0, i.jsx)(o.MenuRadioItem, {
                              id: 'cns_default',
                              label: M,
                              group: 'channel_notification_settings',
                              checked: t.inherited && !S,
                              subtext: t.inheritedPreset,
                              action: () => ((0, s.JK)(e.guild_id, e.id), p(!1))
                          }),
                          (0, i.jsx)(o.MenuRadioItem, {
                              id: 'cns_everything',
                              group: 'channel_notification_settings',
                              label: b.intl.string(b.t.hZrr6u),
                              checked: !t.inherited && f === l.s8.ALL_MESSAGES,
                              action: () => ((0, s._m)(e.guild_id, e.id, l.s8.ALL_MESSAGES), p(!1))
                          }),
                          (0, i.jsx)(o.MenuRadioItem, {
                              id: 'cns_essentials',
                              group: 'channel_notification_settings',
                              label: b.intl.string(b.t.y59NJi),
                              checked: !t.inherited && f === l.s8.MENTIONS,
                              action: () => ((0, s._m)(e.guild_id, e.id, l.s8.MENTIONS), p(!1))
                          }),
                          (0, i.jsx)(o.MenuRadioItem, {
                              id: 'cns_nothing',
                              group: 'channel_notification_settings',
                              label: b.intl.string(b.t['pGn/bG']),
                              checked: !t.inherited && f === l.s8.NOTHING,
                              action: () => ((0, s._m)(e.guild_id, e.id, l.s8.NOTHING), p(!1))
                          }),
                          (0, i.jsx)(o.MenuRadioItem, {
                              id: 'cns_custom',
                              group: 'channel_notification_settings',
                              label: b.intl.string(b.t['32yow8']),
                              checked: S || (!t.inherited && f === l.s8.CUSTOM),
                              action: () => (h(!0), p(!0))
                          })
                      ]
                  }),
                  (u || d) && L
              ]
          });
}
function m(e, n) {
    let { notification: t, unread: a } = (0, s.ZA)(e),
        c = (e) => {
            e(), n();
        },
        l = (n) => {
            let t = { message_notifications: n };
            n === g.bL.ALL_MESSAGES && a !== h.i.ALL_MESSAGES && (t.flags = (0, d.pq)(_.ZP.getChannelIdFlags(e.guild_id, e.id), S.ic.UNREADS_ALL_MESSAGES)), r.Z.updateChannelOverrideSettings(e.guild_id, e.id, t, u.UE.notifications(n));
        };
    return (0, i.jsxs)(o.MenuGroup, {
        children: [
            (0, i.jsxs)(
                o.MenuItem,
                {
                    id: 'unread_setting',
                    label: 'Unread Badges',
                    children: [
                        (0, i.jsx)(o.MenuRadioItem, {
                            id: 'unread_setting_all_messages',
                            group: 'unread_setting',
                            checked: a === h.i.ALL_MESSAGES,
                            label: b.intl.string(b.t['HVah//']),
                            action: () => c(() => (0, s.IG)(e.guild_id, e.id, h.i.ALL_MESSAGES))
                        }),
                        (0, i.jsx)(o.MenuRadioItem, {
                            id: 'unread_setting_mention_only',
                            group: 'unread_setting',
                            checked: a === h.i.ONLY_MENTIONS,
                            label: b.intl.string(b.t['tu+ZWF']),
                            disabled: a !== h.i.ONLY_MENTIONS && t === g.bL.ALL_MESSAGES,
                            subtext: a !== h.i.ONLY_MENTIONS && t === g.bL.ALL_MESSAGES ? b.intl.string(b.t.eP8yWV) : void 0,
                            action: () => c(() => (0, s.IG)(e.guild_id, e.id, h.i.ONLY_MENTIONS))
                        })
                    ]
                },
                'unread_setting'
            ),
            (0, i.jsxs)(
                o.MenuItem,
                {
                    id: 'push_settings',
                    label: b.intl.string(b.t.HcoRu7),
                    children: [
                        (0, i.jsx)(o.MenuRadioItem, {
                            group: 'notification-preset',
                            id: 'push_settings_everything',
                            label: b.intl.string(b.t['HVah//']),
                            checked: t === g.bL.ALL_MESSAGES,
                            subtext: a !== h.i.ALL_MESSAGES && t !== g.bL.ALL_MESSAGES ? b.intl.string(b.t.idXSbG) : void 0,
                            action: () => c(() => l(g.bL.ALL_MESSAGES))
                        }),
                        (0, i.jsx)(o.MenuRadioItem, {
                            group: 'notification-preset',
                            id: 'push_settings_everything_mention',
                            checked: t === g.bL.ONLY_MENTIONS,
                            label: b.intl.string(b.t['tu+ZWF']),
                            action: () => c(() => l(g.bL.ONLY_MENTIONS))
                        }),
                        (0, i.jsx)(o.MenuRadioItem, {
                            group: 'notification-preset',
                            id: 'push_settings_everything_nothing',
                            label: b.intl.string(b.t.X4wWUl),
                            checked: t === g.bL.NO_MESSAGES,
                            action: () => c(() => l(g.bL.NO_MESSAGES))
                        })
                    ]
                },
                'push_settings'
            )
        ]
    });
}
