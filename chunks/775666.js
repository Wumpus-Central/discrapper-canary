e.d(i, {
    EQ: () => h,
    T5: () => f,
    ZP: () => N,
}),
    e(388685),
    e(997841);
var n = e(951288),
    l = e(647438),
    s = e(442837),
    a = e(481060),
    r = e(87051),
    d = e(221259),
    o = e(113449),
    c = e(686660),
    u = e(9156),
    g = e(621600),
    _ = e(981631),
    S = e(490897),
    L = e(526761),
    E = e(388032);
function N(t) {
    let i = h(t);
    return t.type === _.d4z.GUILD_VOICE
        ? null
        : (0, n.jsx)(a.sNh, {
              id: "channel_notification_settings",
              label: E.intl.string(E.t.HcoRu0),
              children: i,
          });
}
function h(t) {
    let i = (0, d.ZA)(t),
        e = (0, d.yN)(t),
        o = i.preset === c.s8.CUSTOM && !e.inherited,
        [g, S] = l.useState(o),
        [L, N] = l.useState(!1),
        h = L ? c.s8.CUSTOM : i.preset,
        b = f(t, () => N(!1)),
        p = (0, s.e7)([u.ZP], () => u.ZP.getNewForumThreadsCreated(t)),
        A = "parent" === e.inheritedFrom ? E.intl.string(E.t.wlrV1c) : E.intl.string(E.t["1Wn2M4"]);
    return t.type === _.d4z.GUILD_STAGE_VOICE
        ? (0, n.jsxs)(a.kSQ, {
              children: [
                  (0, n.jsx)(a.k5B, {
                      id: "cns_default",
                      label: A,
                      checked: e.inherited,
                      group: "channel_notification_settings",
                      subtext:
                          i.notification === _.bL.NO_MESSAGES
                              ? E.intl.string(E.t.CtVGyQ)
                              : E.intl.string(E.t["BENn/6"]),
                      action: () => (0, d.JK)(t.guild_id, t.id),
                  }),
                  (0, n.jsx)(a.k5B, {
                      id: "cns_only_mention",
                      group: "channel_notification_settings",
                      checked: !e.inherited && i.notification !== _.bL.NO_MESSAGES,
                      label: E.intl.string(E.t["BENn/6"]),
                      action: () => (0, d.ft)(t.guild_id, t.id, _.bL.ONLY_MENTIONS),
                  }),
                  (0, n.jsx)(a.k5B, {
                      id: "cns_no_message",
                      group: "channel_notification_settings",
                      label: E.intl.string(E.t.CtVGyQ),
                      checked: !e.inherited && i.notification === _.bL.NO_MESSAGES,
                      action: () => (0, d.ft)(t.guild_id, t.id, _.bL.NO_MESSAGES),
                  }),
              ],
          })
        : (0, n.jsxs)(n.Fragment, {
              children: [
                  t.isForumLikeChannel()
                      ? (0, n.jsxs)(n.Fragment, {
                            children: [
                                (0, n.jsx)(a.S89, {
                                    id: "new-forum-threads-created",
                                    label: E.intl.string(E.t.Rkgjph),
                                    checked: p,
                                    action: () => r.Z.setForumThreadsCreated(t, !p),
                                }),
                                (0, n.jsx)(a.Clw, {}),
                            ],
                        })
                      : null,
                  (0, n.jsxs)(a.kSQ, {
                      children: [
                          (0, n.jsx)(a.k5B, {
                              id: "cns_default",
                              label: A,
                              group: "channel_notification_settings",
                              checked: e.inherited && !L,
                              subtext: e.inheritedPreset,
                              action: () => ((0, d.JK)(t.guild_id, t.id), N(!1)),
                          }),
                          (0, n.jsx)(a.k5B, {
                              id: "cns_everything",
                              group: "channel_notification_settings",
                              label: E.intl.string(E.t.hZrr6k),
                              checked: !e.inherited && h === c.s8.ALL_MESSAGES,
                              action: () => ((0, d._m)(t.guild_id, t.id, c.s8.ALL_MESSAGES), N(!1)),
                          }),
                          (0, n.jsx)(a.k5B, {
                              id: "cns_essentials",
                              group: "channel_notification_settings",
                              label: E.intl.string(E.t.y59NJm),
                              checked: !e.inherited && h === c.s8.MENTIONS,
                              action: () => ((0, d._m)(t.guild_id, t.id, c.s8.MENTIONS), N(!1)),
                          }),
                          (0, n.jsx)(a.k5B, {
                              id: "cns_nothing",
                              group: "channel_notification_settings",
                              label: E.intl.string(E.t["pGn/bJ"]),
                              checked: !e.inherited && h === c.s8.NOTHING,
                              action: () => ((0, d._m)(t.guild_id, t.id, c.s8.NOTHING), N(!1)),
                          }),
                          (0, n.jsx)(a.k5B, {
                              id: "cns_custom",
                              group: "channel_notification_settings",
                              label: E.intl.string(E.t["32yow9"]),
                              checked: L || (!e.inherited && h === c.s8.CUSTOM),
                              action: () => (S(!0), N(!0)),
                          }),
                      ],
                  }),
                  (g || o) && b,
              ],
          });
}
function f(t, i) {
    let { notification: e, unread: l } = (0, d.ZA)(t),
        s = (t) => {
            t(), i();
        },
        c = (i) => {
            let e = { message_notifications: i };
            i === _.bL.ALL_MESSAGES &&
                l !== S.i.ALL_MESSAGES &&
                (e.flags = (0, o.pq)(u.ZP.getChannelIdFlags(t.guild_id, t.id), L.ic.UNREADS_ALL_MESSAGES)),
                r.Z.updateChannelOverrideSettings(t.guild_id, t.id, e, g.UE.notifications(i));
        };
    return (0, n.jsxs)(a.kSQ, {
        children: [
            (0, n.jsxs)(
                a.sNh,
                {
                    id: "unread_setting",
                    label: "Unread Badges",
                    children: [
                        (0, n.jsx)(a.k5B, {
                            id: "unread_setting_all_messages",
                            group: "unread_setting",
                            checked: l === S.i.ALL_MESSAGES,
                            label: E.intl.string(E.t["HVah/3"]),
                            action: () => s(() => (0, d.IG)(t.guild_id, t.id, S.i.ALL_MESSAGES)),
                        }),
                        (0, n.jsx)(a.k5B, {
                            id: "unread_setting_mention_only",
                            group: "unread_setting",
                            checked: l === S.i.ONLY_MENTIONS,
                            label: E.intl.string(E.t["tu+ZWJ"]),
                            disabled: l !== S.i.ONLY_MENTIONS && e === _.bL.ALL_MESSAGES,
                            subtext:
                                l !== S.i.ONLY_MENTIONS && e === _.bL.ALL_MESSAGES ? E.intl.string(E.t.eP8yWU) : void 0,
                            action: () => s(() => (0, d.IG)(t.guild_id, t.id, S.i.ONLY_MENTIONS)),
                        }),
                    ],
                },
                "unread_setting",
            ),
            (0, n.jsxs)(
                a.sNh,
                {
                    id: "push_settings",
                    label: E.intl.string(E.t.HcoRu0),
                    children: [
                        (0, n.jsx)(a.k5B, {
                            group: "notification-preset",
                            id: "push_settings_everything",
                            label: E.intl.string(E.t["HVah/3"]),
                            checked: e === _.bL.ALL_MESSAGES,
                            subtext:
                                l !== S.i.ALL_MESSAGES && e !== _.bL.ALL_MESSAGES ? E.intl.string(E.t.idXSbI) : void 0,
                            action: () => s(() => c(_.bL.ALL_MESSAGES)),
                        }),
                        (0, n.jsx)(a.k5B, {
                            group: "notification-preset",
                            id: "push_settings_everything_mention",
                            checked: e === _.bL.ONLY_MENTIONS,
                            label: E.intl.string(E.t["tu+ZWJ"]),
                            action: () => s(() => c(_.bL.ONLY_MENTIONS)),
                        }),
                        (0, n.jsx)(a.k5B, {
                            group: "notification-preset",
                            id: "push_settings_everything_nothing",
                            label: E.intl.string(E.t.X4wWUi),
                            checked: e === _.bL.NO_MESSAGES,
                            action: () => s(() => c(_.bL.NO_MESSAGES)),
                        }),
                    ],
                },
                "push_settings",
            ),
        ],
    });
}
