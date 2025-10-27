i.d(n, {
    EQ: () => E,
    T5: () => L,
    ZP: () => N,
}),
    i(388685),
    i(997841);
var t = i(951288),
    a = i(647438),
    s = i(442837),
    r = i(481060),
    _ = i(87051),
    o = i(221259),
    d = i(113449),
    c = i(686660),
    l = i(9156),
    g = i(621600),
    h = i(981631),
    S = i(490897),
    u = i(526761),
    b = i(388032);
function N(e) {
    let n = E(e);
    return e.type === h.d4z.GUILD_VOICE
        ? null
        : (0, t.jsx)(r.sNh, {
              id: "channel_notification_settings",
              label: b.intl.string(b.t.HcoRu0),
              children: n,
          });
}
function E(e) {
    let n = (0, o.ZA)(e),
        i = (0, o.yN)(e),
        d = n.preset === c.s8.CUSTOM && !i.inherited,
        [g, S] = a.useState(d),
        [u, N] = a.useState(!1),
        E = u ? c.s8.CUSTOM : n.preset,
        p = L(e, () => N(!1)),
        M = (0, s.e7)([l.ZP], () => l.ZP.getNewForumThreadsCreated(e)),
        m = "parent" === i.inheritedFrom ? b.intl.string(b.t.wlrV1c) : b.intl.string(b.t["1Wn2M4"]);
    return e.type === h.d4z.GUILD_STAGE_VOICE
        ? (0, t.jsxs)(r.kSQ, {
              children: [
                  (0, t.jsx)(r.k5B, {
                      id: "cns_default",
                      label: m,
                      checked: i.inherited,
                      group: "channel_notification_settings",
                      subtext:
                          n.notification === h.bL.NO_MESSAGES
                              ? b.intl.string(b.t.CtVGyQ)
                              : b.intl.string(b.t["BENn/6"]),
                      action: () => (0, o.JK)(e.guild_id, e.id),
                  }),
                  (0, t.jsx)(r.k5B, {
                      id: "cns_only_mention",
                      group: "channel_notification_settings",
                      checked: !i.inherited && n.notification !== h.bL.NO_MESSAGES,
                      label: b.intl.string(b.t["BENn/6"]),
                      action: () => (0, o.ft)(e.guild_id, e.id, h.bL.ONLY_MENTIONS),
                  }),
                  (0, t.jsx)(r.k5B, {
                      id: "cns_no_message",
                      group: "channel_notification_settings",
                      label: b.intl.string(b.t.CtVGyQ),
                      checked: !i.inherited && n.notification === h.bL.NO_MESSAGES,
                      action: () => (0, o.ft)(e.guild_id, e.id, h.bL.NO_MESSAGES),
                  }),
              ],
          })
        : (0, t.jsxs)(t.Fragment, {
              children: [
                  e.isForumLikeChannel()
                      ? (0, t.jsxs)(t.Fragment, {
                            children: [
                                (0, t.jsx)(r.S89, {
                                    id: "new-forum-threads-created",
                                    label: b.intl.string(b.t.Rkgjph),
                                    checked: M,
                                    action: () => _.Z.setForumThreadsCreated(e, !M),
                                }),
                                (0, t.jsx)(r.Clw, {}),
                            ],
                        })
                      : null,
                  (0, t.jsxs)(r.kSQ, {
                      children: [
                          (0, t.jsx)(r.k5B, {
                              id: "cns_default",
                              label: m,
                              group: "channel_notification_settings",
                              checked: i.inherited && !u,
                              subtext: i.inheritedPreset,
                              action: () => ((0, o.JK)(e.guild_id, e.id), N(!1)),
                          }),
                          (0, t.jsx)(r.k5B, {
                              id: "cns_everything",
                              group: "channel_notification_settings",
                              label: b.intl.string(b.t.hZrr6k),
                              checked: !i.inherited && E === c.s8.ALL_MESSAGES,
                              action: () => ((0, o._m)(e.guild_id, e.id, c.s8.ALL_MESSAGES), N(!1)),
                          }),
                          (0, t.jsx)(r.k5B, {
                              id: "cns_essentials",
                              group: "channel_notification_settings",
                              label: b.intl.string(b.t.y59NJm),
                              checked: !i.inherited && E === c.s8.MENTIONS,
                              action: () => ((0, o._m)(e.guild_id, e.id, c.s8.MENTIONS), N(!1)),
                          }),
                          (0, t.jsx)(r.k5B, {
                              id: "cns_nothing",
                              group: "channel_notification_settings",
                              label: b.intl.string(b.t["pGn/bJ"]),
                              checked: !i.inherited && E === c.s8.NOTHING,
                              action: () => ((0, o._m)(e.guild_id, e.id, c.s8.NOTHING), N(!1)),
                          }),
                          (0, t.jsx)(r.k5B, {
                              id: "cns_custom",
                              group: "channel_notification_settings",
                              label: b.intl.string(b.t["32yow9"]),
                              checked: u || (!i.inherited && E === c.s8.CUSTOM),
                              action: () => (S(!0), N(!0)),
                          }),
                      ],
                  }),
                  (g || d) && p,
              ],
          });
}
function L(e, n) {
    let { notification: i, unread: a } = (0, o.ZA)(e),
        s = (e) => {
            e(), n();
        },
        c = (n) => {
            let i = { message_notifications: n };
            n === h.bL.ALL_MESSAGES &&
                a !== S.i.ALL_MESSAGES &&
                (i.flags = (0, d.pq)(l.ZP.getChannelIdFlags(e.guild_id, e.id), u.ic.UNREADS_ALL_MESSAGES)),
                _.Z.updateChannelOverrideSettings(e.guild_id, e.id, i, g.UE.notifications(n));
        };
    return (0, t.jsxs)(r.kSQ, {
        children: [
            (0, t.jsxs)(
                r.sNh,
                {
                    id: "unread_setting",
                    label: "Unread Badges",
                    children: [
                        (0, t.jsx)(r.k5B, {
                            id: "unread_setting_all_messages",
                            group: "unread_setting",
                            checked: a === S.i.ALL_MESSAGES,
                            label: b.intl.string(b.t["HVah/3"]),
                            action: () => s(() => (0, o.IG)(e.guild_id, e.id, S.i.ALL_MESSAGES)),
                        }),
                        (0, t.jsx)(r.k5B, {
                            id: "unread_setting_mention_only",
                            group: "unread_setting",
                            checked: a === S.i.ONLY_MENTIONS,
                            label: b.intl.string(b.t["tu+ZWJ"]),
                            disabled: a !== S.i.ONLY_MENTIONS && i === h.bL.ALL_MESSAGES,
                            subtext:
                                a !== S.i.ONLY_MENTIONS && i === h.bL.ALL_MESSAGES ? b.intl.string(b.t.eP8yWU) : void 0,
                            action: () => s(() => (0, o.IG)(e.guild_id, e.id, S.i.ONLY_MENTIONS)),
                        }),
                    ],
                },
                "unread_setting",
            ),
            (0, t.jsxs)(
                r.sNh,
                {
                    id: "push_settings",
                    label: b.intl.string(b.t.HcoRu0),
                    children: [
                        (0, t.jsx)(r.k5B, {
                            group: "notification-preset",
                            id: "push_settings_everything",
                            label: b.intl.string(b.t["HVah/3"]),
                            checked: i === h.bL.ALL_MESSAGES,
                            subtext:
                                a !== S.i.ALL_MESSAGES && i !== h.bL.ALL_MESSAGES ? b.intl.string(b.t.idXSbI) : void 0,
                            action: () => s(() => c(h.bL.ALL_MESSAGES)),
                        }),
                        (0, t.jsx)(r.k5B, {
                            group: "notification-preset",
                            id: "push_settings_everything_mention",
                            checked: i === h.bL.ONLY_MENTIONS,
                            label: b.intl.string(b.t["tu+ZWJ"]),
                            action: () => s(() => c(h.bL.ONLY_MENTIONS)),
                        }),
                        (0, t.jsx)(r.k5B, {
                            group: "notification-preset",
                            id: "push_settings_everything_nothing",
                            label: b.intl.string(b.t.X4wWUi),
                            checked: i === h.bL.NO_MESSAGES,
                            action: () => s(() => c(h.bL.NO_MESSAGES)),
                        }),
                    ],
                },
                "push_settings",
            ),
        ],
    });
}
