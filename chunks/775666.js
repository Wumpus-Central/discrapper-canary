i.d(n, {
    EQ: () => E,
    T5: () => L,
    ZP: () => N,
}),
    i(388685),
    i(997841);
var t = i(54381),
    a = i(473749),
    d = i(442837),
    s = i(481060),
    o = i(87051),
    r = i(221259),
    c = i(113449),
    l = i(686660),
    _ = i(9156),
    g = i(621600),
    h = i(981631),
    b = i(490897),
    S = i(526761),
    u = i(388032);
function N(e) {
    let n = E(e);
    return e.type === h.d4z.GUILD_VOICE
        ? null
        : (0, t.jsx)(s.sNh, {
              id: "channel_notification_settings",
              label: u.intl.string(u.t.HcoRu0),
              children: n,
          });
}
function E(e) {
    let n = (0, r.ZA)(e),
        i = (0, r.yN)(e),
        c = n.preset === l.s8.CUSTOM && !i.inherited,
        [g, b] = a.useState(c),
        [S, N] = a.useState(!1),
        E = S ? l.s8.CUSTOM : n.preset,
        p = L(e, () => N(!1)),
        M = (0, d.e7)([_.ZP], () => _.ZP.getNewForumThreadsCreated(e)),
        m = "parent" === i.inheritedFrom ? u.intl.string(u.t.wlrV1c) : u.intl.string(u.t["1Wn2M4"]);
    return e.type === h.d4z.GUILD_STAGE_VOICE
        ? (0, t.jsxs)(s.kSQ, {
              children: [
                  (0, t.jsx)(s.k5B, {
                      id: "cns_default",
                      label: m,
                      checked: i.inherited,
                      group: "channel_notification_settings",
                      subtext:
                          n.notification === h.bL.NO_MESSAGES
                              ? u.intl.string(u.t.CtVGyQ)
                              : u.intl.string(u.t["BENn/6"]),
                      action: () => (0, r.JK)(e.guild_id, e.id),
                  }),
                  (0, t.jsx)(s.k5B, {
                      id: "cns_only_mention",
                      group: "channel_notification_settings",
                      checked: !i.inherited && n.notification !== h.bL.NO_MESSAGES,
                      label: u.intl.string(u.t["BENn/6"]),
                      action: () => (0, r.ft)(e.guild_id, e.id, h.bL.ONLY_MENTIONS),
                  }),
                  (0, t.jsx)(s.k5B, {
                      id: "cns_no_message",
                      group: "channel_notification_settings",
                      label: u.intl.string(u.t.CtVGyQ),
                      checked: !i.inherited && n.notification === h.bL.NO_MESSAGES,
                      action: () => (0, r.ft)(e.guild_id, e.id, h.bL.NO_MESSAGES),
                  }),
              ],
          })
        : (0, t.jsxs)(t.Fragment, {
              children: [
                  e.isForumLikeChannel()
                      ? (0, t.jsxs)(t.Fragment, {
                            children: [
                                (0, t.jsx)(s.S89, {
                                    id: "new-forum-threads-created",
                                    label: u.intl.string(u.t.Rkgjph),
                                    checked: M,
                                    action: () => o.Z.setForumThreadsCreated(e, !M),
                                }),
                                (0, t.jsx)(s.Clw, {}),
                            ],
                        })
                      : null,
                  (0, t.jsxs)(s.kSQ, {
                      children: [
                          (0, t.jsx)(s.k5B, {
                              id: "cns_default",
                              label: m,
                              group: "channel_notification_settings",
                              checked: i.inherited && !S,
                              subtext: i.inheritedPreset,
                              action: () => ((0, r.JK)(e.guild_id, e.id), N(!1)),
                          }),
                          (0, t.jsx)(s.k5B, {
                              id: "cns_everything",
                              group: "channel_notification_settings",
                              label: u.intl.string(u.t.hZrr6k),
                              checked: !i.inherited && E === l.s8.ALL_MESSAGES,
                              action: () => ((0, r._m)(e.guild_id, e.id, l.s8.ALL_MESSAGES), N(!1)),
                          }),
                          (0, t.jsx)(s.k5B, {
                              id: "cns_essentials",
                              group: "channel_notification_settings",
                              label: u.intl.string(u.t.y59NJm),
                              checked: !i.inherited && E === l.s8.MENTIONS,
                              action: () => ((0, r._m)(e.guild_id, e.id, l.s8.MENTIONS), N(!1)),
                          }),
                          (0, t.jsx)(s.k5B, {
                              id: "cns_nothing",
                              group: "channel_notification_settings",
                              label: u.intl.string(u.t["pGn/bJ"]),
                              checked: !i.inherited && E === l.s8.NOTHING,
                              action: () => ((0, r._m)(e.guild_id, e.id, l.s8.NOTHING), N(!1)),
                          }),
                          (0, t.jsx)(s.k5B, {
                              id: "cns_custom",
                              group: "channel_notification_settings",
                              label: u.intl.string(u.t["32yow9"]),
                              checked: S || (!i.inherited && E === l.s8.CUSTOM),
                              action: () => (b(!0), N(!0)),
                          }),
                      ],
                  }),
                  (g || c) && p,
              ],
          });
}
function L(e, n) {
    let { notification: i, unread: a } = (0, r.ZA)(e),
        d = (e) => {
            e(), n();
        },
        l = (n) => {
            let i = { message_notifications: n };
            n === h.bL.ALL_MESSAGES &&
                a !== b.i.ALL_MESSAGES &&
                (i.flags = (0, c.pq)(_.ZP.getChannelIdFlags(e.guild_id, e.id), S.ic.UNREADS_ALL_MESSAGES)),
                o.Z.updateChannelOverrideSettings(e.guild_id, e.id, i, g.UE.notifications(n));
        };
    return (0, t.jsxs)(s.kSQ, {
        children: [
            (0, t.jsxs)(
                s.sNh,
                {
                    id: "unread_setting",
                    label: "Unread Badges",
                    children: [
                        (0, t.jsx)(s.k5B, {
                            id: "unread_setting_all_messages",
                            group: "unread_setting",
                            checked: a === b.i.ALL_MESSAGES,
                            label: u.intl.string(u.t["HVah/3"]),
                            action: () => d(() => (0, r.IG)(e.guild_id, e.id, b.i.ALL_MESSAGES)),
                        }),
                        (0, t.jsx)(s.k5B, {
                            id: "unread_setting_mention_only",
                            group: "unread_setting",
                            checked: a === b.i.ONLY_MENTIONS,
                            label: u.intl.string(u.t["tu+ZWJ"]),
                            disabled: a !== b.i.ONLY_MENTIONS && i === h.bL.ALL_MESSAGES,
                            subtext:
                                a !== b.i.ONLY_MENTIONS && i === h.bL.ALL_MESSAGES ? u.intl.string(u.t.eP8yWU) : void 0,
                            action: () => d(() => (0, r.IG)(e.guild_id, e.id, b.i.ONLY_MENTIONS)),
                        }),
                    ],
                },
                "unread_setting",
            ),
            (0, t.jsxs)(
                s.sNh,
                {
                    id: "push_settings",
                    label: u.intl.string(u.t.HcoRu0),
                    children: [
                        (0, t.jsx)(s.k5B, {
                            group: "notification-preset",
                            id: "push_settings_everything",
                            label: u.intl.string(u.t["HVah/3"]),
                            checked: i === h.bL.ALL_MESSAGES,
                            subtext:
                                a !== b.i.ALL_MESSAGES && i !== h.bL.ALL_MESSAGES ? u.intl.string(u.t.idXSbI) : void 0,
                            action: () => d(() => l(h.bL.ALL_MESSAGES)),
                        }),
                        (0, t.jsx)(s.k5B, {
                            group: "notification-preset",
                            id: "push_settings_everything_mention",
                            checked: i === h.bL.ONLY_MENTIONS,
                            label: u.intl.string(u.t["tu+ZWJ"]),
                            action: () => d(() => l(h.bL.ONLY_MENTIONS)),
                        }),
                        (0, t.jsx)(s.k5B, {
                            group: "notification-preset",
                            id: "push_settings_everything_nothing",
                            label: u.intl.string(u.t.X4wWUi),
                            checked: i === h.bL.NO_MESSAGES,
                            action: () => d(() => l(h.bL.NO_MESSAGES)),
                        }),
                    ],
                },
                "push_settings",
            ),
        ],
    });
}
