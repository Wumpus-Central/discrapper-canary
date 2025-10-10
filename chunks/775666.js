i.d(n, {
    EQ: () => p,
    T5: () => E,
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
    u = i(490897),
    S = i(526761),
    b = i(388032);
function N(e) {
    let n = p(e);
    return e.type === h.d4z.GUILD_VOICE
        ? null
        : (0, t.jsx)(r.sNh, {
              id: "channel_notification_settings",
              label: b.intl.string(b.t.HcoRu7),
              children: n,
          });
}
function p(e) {
    let n = (0, o.ZA)(e),
        i = (0, o.yN)(e),
        d = n.preset === c.s8.CUSTOM && !i.inherited,
        [g, u] = a.useState(d),
        [S, N] = a.useState(!1),
        p = S ? c.s8.CUSTOM : n.preset,
        L = E(e, () => N(!1)),
        f = (0, s.e7)([l.ZP], () => l.ZP.getNewForumThreadsCreated(e)),
        m = "parent" === i.inheritedFrom ? b.intl.string(b.t.wlrV1d) : b.intl.string(b.t["1Wn2Mz"]);
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
                              ? b.intl.string(b.t.CtVGyc)
                              : b.intl.string(b.t["BENn//"]),
                      action: () => (0, o.JK)(e.guild_id, e.id),
                  }),
                  (0, t.jsx)(r.k5B, {
                      id: "cns_only_mention",
                      group: "channel_notification_settings",
                      checked: !i.inherited && n.notification !== h.bL.NO_MESSAGES,
                      label: b.intl.string(b.t["BENn//"]),
                      action: () => (0, o.ft)(e.guild_id, e.id, h.bL.ONLY_MENTIONS),
                  }),
                  (0, t.jsx)(r.k5B, {
                      id: "cns_no_message",
                      group: "channel_notification_settings",
                      label: b.intl.string(b.t.CtVGyc),
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
                                    label: b.intl.string(b.t.Rkgjpq),
                                    checked: f,
                                    action: () => _.Z.setForumThreadsCreated(e, !f),
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
                              checked: i.inherited && !S,
                              subtext: i.inheritedPreset,
                              action: () => ((0, o.JK)(e.guild_id, e.id), N(!1)),
                          }),
                          (0, t.jsx)(r.k5B, {
                              id: "cns_everything",
                              group: "channel_notification_settings",
                              label: b.intl.string(b.t.hZrr6u),
                              checked: !i.inherited && p === c.s8.ALL_MESSAGES,
                              action: () => ((0, o._m)(e.guild_id, e.id, c.s8.ALL_MESSAGES), N(!1)),
                          }),
                          (0, t.jsx)(r.k5B, {
                              id: "cns_essentials",
                              group: "channel_notification_settings",
                              label: b.intl.string(b.t.y59NJi),
                              checked: !i.inherited && p === c.s8.MENTIONS,
                              action: () => ((0, o._m)(e.guild_id, e.id, c.s8.MENTIONS), N(!1)),
                          }),
                          (0, t.jsx)(r.k5B, {
                              id: "cns_nothing",
                              group: "channel_notification_settings",
                              label: b.intl.string(b.t["pGn/bG"]),
                              checked: !i.inherited && p === c.s8.NOTHING,
                              action: () => ((0, o._m)(e.guild_id, e.id, c.s8.NOTHING), N(!1)),
                          }),
                          (0, t.jsx)(r.k5B, {
                              id: "cns_custom",
                              group: "channel_notification_settings",
                              label: b.intl.string(b.t["32yow8"]),
                              checked: S || (!i.inherited && p === c.s8.CUSTOM),
                              action: () => (u(!0), N(!0)),
                          }),
                      ],
                  }),
                  (g || d) && L,
              ],
          });
}
function E(e, n) {
    let { notification: i, unread: a } = (0, o.ZA)(e),
        s = (e) => {
            e(), n();
        },
        c = (n) => {
            let i = { message_notifications: n };
            n === h.bL.ALL_MESSAGES &&
                a !== u.i.ALL_MESSAGES &&
                (i.flags = (0, d.pq)(l.ZP.getChannelIdFlags(e.guild_id, e.id), S.ic.UNREADS_ALL_MESSAGES)),
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
                            checked: a === u.i.ALL_MESSAGES,
                            label: b.intl.string(b.t["HVah//"]),
                            action: () => s(() => (0, o.IG)(e.guild_id, e.id, u.i.ALL_MESSAGES)),
                        }),
                        (0, t.jsx)(r.k5B, {
                            id: "unread_setting_mention_only",
                            group: "unread_setting",
                            checked: a === u.i.ONLY_MENTIONS,
                            label: b.intl.string(b.t["tu+ZWF"]),
                            disabled: a !== u.i.ONLY_MENTIONS && i === h.bL.ALL_MESSAGES,
                            subtext:
                                a !== u.i.ONLY_MENTIONS && i === h.bL.ALL_MESSAGES ? b.intl.string(b.t.eP8yWV) : void 0,
                            action: () => s(() => (0, o.IG)(e.guild_id, e.id, u.i.ONLY_MENTIONS)),
                        }),
                    ],
                },
                "unread_setting",
            ),
            (0, t.jsxs)(
                r.sNh,
                {
                    id: "push_settings",
                    label: b.intl.string(b.t.HcoRu7),
                    children: [
                        (0, t.jsx)(r.k5B, {
                            group: "notification-preset",
                            id: "push_settings_everything",
                            label: b.intl.string(b.t["HVah//"]),
                            checked: i === h.bL.ALL_MESSAGES,
                            subtext:
                                a !== u.i.ALL_MESSAGES && i !== h.bL.ALL_MESSAGES ? b.intl.string(b.t.idXSbG) : void 0,
                            action: () => s(() => c(h.bL.ALL_MESSAGES)),
                        }),
                        (0, t.jsx)(r.k5B, {
                            group: "notification-preset",
                            id: "push_settings_everything_mention",
                            checked: i === h.bL.ONLY_MENTIONS,
                            label: b.intl.string(b.t["tu+ZWF"]),
                            action: () => s(() => c(h.bL.ONLY_MENTIONS)),
                        }),
                        (0, t.jsx)(r.k5B, {
                            group: "notification-preset",
                            id: "push_settings_everything_nothing",
                            label: b.intl.string(b.t.X4wWUl),
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
