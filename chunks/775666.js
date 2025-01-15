n.d(e, {
    EQ: function () {
        return N;
    },
    T5: function () {
        return M;
    },
    ZP: function () {
        return E;
    }
}),
    n(47120),
    n(789020);
var i = n(200651),
    s = n(192379),
    r = n(442837),
    l = n(481060),
    a = n(87051),
    d = n(221259),
    o = n(113449),
    u = n(686660),
    c = n(9156),
    g = n(621600),
    _ = n(981631),
    S = n(490897),
    L = n(526761),
    h = n(388032);
function E(t) {
    let e = N(t);
    return t.type === _.d4z.GUILD_VOICE
        ? null
        : (0, i.jsx)(l.MenuItem, {
              id: 'channel_notification_settings',
              label: h.intl.string(h.t.HcoRu7),
              children: e
          });
}
function N(t) {
    let e = (0, d.ZA)(t),
        n = (0, d.yN)(t),
        o = e.preset === u.s8.CUSTOM && !n.inherited,
        [g, S] = s.useState(o),
        [L, E] = s.useState(!1),
        N = L ? u.s8.CUSTOM : e.preset,
        b = M(t, () => E(!1)),
        f = (0, r.e7)([c.ZP], () => c.ZP.getNewForumThreadsCreated(t)),
        p = 'parent' === n.inheritedFrom ? h.intl.string(h.t.wlrV1d) : h.intl.string(h.t['1Wn2Mz']);
    return t.type === _.d4z.GUILD_STAGE_VOICE
        ? (0, i.jsxs)(l.MenuGroup, {
              children: [
                  (0, i.jsx)(l.MenuRadioItem, {
                      id: 'cns_default',
                      label: p,
                      checked: n.inherited,
                      group: 'channel_notification_settings',
                      subtext: e.notification === _.bL.NO_MESSAGES ? h.intl.string(h.t.CtVGyc) : h.intl.string(h.t['BENn//']),
                      action: () => (0, d.JK)(t.guild_id, t.id)
                  }),
                  (0, i.jsx)(l.MenuRadioItem, {
                      id: 'cns_only_mention',
                      group: 'channel_notification_settings',
                      checked: !n.inherited && e.notification !== _.bL.NO_MESSAGES,
                      label: h.intl.string(h.t['BENn//']),
                      action: () => (0, d.ft)(t.guild_id, t.id, _.bL.ONLY_MENTIONS)
                  }),
                  (0, i.jsx)(l.MenuRadioItem, {
                      id: 'cns_no_message',
                      group: 'channel_notification_settings',
                      label: h.intl.string(h.t.CtVGyc),
                      checked: !n.inherited && e.notification === _.bL.NO_MESSAGES,
                      action: () => (0, d.ft)(t.guild_id, t.id, _.bL.NO_MESSAGES)
                  })
              ]
          })
        : (0, i.jsxs)(i.Fragment, {
              children: [
                  t.isForumLikeChannel()
                      ? (0, i.jsxs)(i.Fragment, {
                            children: [
                                (0, i.jsx)(l.MenuCheckboxItem, {
                                    id: 'new-forum-threads-created',
                                    label: h.intl.string(h.t.Rkgjpq),
                                    checked: f,
                                    action: () => a.Z.setForumThreadsCreated(t, !f)
                                }),
                                (0, i.jsx)(l.MenuSeparator, {})
                            ]
                        })
                      : null,
                  (0, i.jsxs)(l.MenuGroup, {
                      children: [
                          (0, i.jsx)(l.MenuRadioItem, {
                              id: 'cns_default',
                              label: p,
                              group: 'channel_notification_settings',
                              checked: n.inherited && !L,
                              subtext: n.inheritedPreset,
                              action: () => ((0, d.JK)(t.guild_id, t.id), E(!1))
                          }),
                          (0, i.jsx)(l.MenuRadioItem, {
                              id: 'cns_everything',
                              group: 'channel_notification_settings',
                              label: h.intl.string(h.t.hZrr6u),
                              checked: !n.inherited && N === u.s8.ALL_MESSAGES,
                              action: () => ((0, d._m)(t.guild_id, t.id, u.s8.ALL_MESSAGES), E(!1))
                          }),
                          (0, i.jsx)(l.MenuRadioItem, {
                              id: 'cns_essentials',
                              group: 'channel_notification_settings',
                              label: h.intl.string(h.t.y59NJi),
                              checked: !n.inherited && N === u.s8.MENTIONS,
                              action: () => ((0, d._m)(t.guild_id, t.id, u.s8.MENTIONS), E(!1))
                          }),
                          (0, i.jsx)(l.MenuRadioItem, {
                              id: 'cns_nothing',
                              group: 'channel_notification_settings',
                              label: h.intl.string(h.t['pGn/bG']),
                              checked: !n.inherited && N === u.s8.NOTHING,
                              action: () => ((0, d._m)(t.guild_id, t.id, u.s8.NOTHING), E(!1))
                          }),
                          (0, i.jsx)(l.MenuRadioItem, {
                              id: 'cns_custom',
                              group: 'channel_notification_settings',
                              label: h.intl.string(h.t['32yow8']),
                              checked: L || (!n.inherited && N === u.s8.CUSTOM),
                              action: () => (S(!0), E(!0))
                          })
                      ]
                  }),
                  (g || o) && b
              ]
          });
}
function M(t, e) {
    let { notification: n, unread: s } = (0, d.ZA)(t),
        r = (t) => {
            t(), e();
        },
        u = (e) => {
            let n = { message_notifications: e };
            e === _.bL.ALL_MESSAGES && s !== S.i.ALL_MESSAGES && (n.flags = (0, o.pq)(c.ZP.getChannelIdFlags(t.guild_id, t.id), L.ic.UNREADS_ALL_MESSAGES)), a.Z.updateChannelOverrideSettings(t.guild_id, t.id, n, g.UE.notifications(e));
        };
    return (0, i.jsxs)(l.MenuGroup, {
        children: [
            (0, i.jsxs)(
                l.MenuItem,
                {
                    id: 'unread_setting',
                    label: 'Unread Badges',
                    children: [
                        (0, i.jsx)(l.MenuRadioItem, {
                            id: 'unread_setting_all_messages',
                            group: 'unread_setting',
                            checked: s === S.i.ALL_MESSAGES,
                            label: h.intl.string(h.t['HVah//']),
                            action: () => r(() => (0, d.IG)(t.guild_id, t.id, S.i.ALL_MESSAGES))
                        }),
                        (0, i.jsx)(l.MenuRadioItem, {
                            id: 'unread_setting_mention_only',
                            group: 'unread_setting',
                            checked: s === S.i.ONLY_MENTIONS,
                            label: h.intl.string(h.t['tu+ZWF']),
                            disabled: s !== S.i.ONLY_MENTIONS && n === _.bL.ALL_MESSAGES,
                            subtext: s !== S.i.ONLY_MENTIONS && n === _.bL.ALL_MESSAGES ? h.intl.string(h.t.eP8yWV) : void 0,
                            action: () => r(() => (0, d.IG)(t.guild_id, t.id, S.i.ONLY_MENTIONS))
                        })
                    ]
                },
                'unread_setting'
            ),
            (0, i.jsxs)(
                l.MenuItem,
                {
                    id: 'push_settings',
                    label: h.intl.string(h.t.HcoRu7),
                    children: [
                        (0, i.jsx)(l.MenuRadioItem, {
                            group: 'notification-preset',
                            id: 'push_settings_everything',
                            label: h.intl.string(h.t['HVah//']),
                            checked: n === _.bL.ALL_MESSAGES,
                            subtext: s !== S.i.ALL_MESSAGES && n !== _.bL.ALL_MESSAGES ? h.intl.string(h.t.idXSbG) : void 0,
                            action: () => r(() => u(_.bL.ALL_MESSAGES))
                        }),
                        (0, i.jsx)(l.MenuRadioItem, {
                            group: 'notification-preset',
                            id: 'push_settings_everything_mention',
                            checked: n === _.bL.ONLY_MENTIONS,
                            label: h.intl.string(h.t['tu+ZWF']),
                            action: () => r(() => u(_.bL.ONLY_MENTIONS))
                        }),
                        (0, i.jsx)(l.MenuRadioItem, {
                            group: 'notification-preset',
                            id: 'push_settings_everything_nothing',
                            label: h.intl.string(h.t.X4wWUl),
                            checked: n === _.bL.NO_MESSAGES,
                            action: () => r(() => u(_.bL.NO_MESSAGES))
                        })
                    ]
                },
                'push_settings'
            )
        ]
    });
}
