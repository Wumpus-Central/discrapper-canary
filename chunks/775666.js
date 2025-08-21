t.d(n, {
    EQ: () => p,
    T5: () => E,
    ZP: () => N,
}),
    t(388685),
    t(997841);
var i = t(951288),
    a = t(647438),
    o = t(442837),
    s = t(481060),
    _ = t(87051),
    r = t(221259),
    c = t(113449),
    l = t(686660),
    d = t(9156),
    g = t(621600),
    u = t(981631),
    S = t(490897),
    h = t(526761),
    b = t(388032);
function N(e) {
    let n = p(e);
    return e.type === u.d4z.GUILD_VOICE
        ? null
        : (0, i.jsx)(s.sNh, {
              id: "channel_notification_settings",
              label: b.intl.string(b.t.HcoRu7),
              children: n,
          });
}
function p(e) {
    let n = (0, r.ZA)(e),
        t = (0, r.yN)(e),
        c = n.preset === l.s8.CUSTOM && !t.inherited,
        [g, S] = a.useState(c),
        [h, N] = a.useState(!1),
        p = h ? l.s8.CUSTOM : n.preset,
        L = E(e, () => N(!1)),
        f = (0, o.e7)([d.ZP], () => d.ZP.getNewForumThreadsCreated(e)),
        m = "parent" === t.inheritedFrom ? b.intl.string(b.t.wlrV1d) : b.intl.string(b.t["1Wn2Mz"]);
    return e.type === u.d4z.GUILD_STAGE_VOICE
        ? (0, i.jsxs)(s.kSQ, {
              children: [
                  (0, i.jsx)(s.k5B, {
                      id: "cns_default",
                      label: m,
                      checked: t.inherited,
                      group: "channel_notification_settings",
                      subtext:
                          n.notification === u.bL.NO_MESSAGES
                              ? b.intl.string(b.t.CtVGyc)
                              : b.intl.string(b.t["BENn//"]),
                      action: () => (0, r.JK)(e.guild_id, e.id),
                  }),
                  (0, i.jsx)(s.k5B, {
                      id: "cns_only_mention",
                      group: "channel_notification_settings",
                      checked: !t.inherited && n.notification !== u.bL.NO_MESSAGES,
                      label: b.intl.string(b.t["BENn//"]),
                      action: () => (0, r.ft)(e.guild_id, e.id, u.bL.ONLY_MENTIONS),
                  }),
                  (0, i.jsx)(s.k5B, {
                      id: "cns_no_message",
                      group: "channel_notification_settings",
                      label: b.intl.string(b.t.CtVGyc),
                      checked: !t.inherited && n.notification === u.bL.NO_MESSAGES,
                      action: () => (0, r.ft)(e.guild_id, e.id, u.bL.NO_MESSAGES),
                  }),
              ],
          })
        : (0, i.jsxs)(i.Fragment, {
              children: [
                  e.isForumLikeChannel()
                      ? (0, i.jsxs)(i.Fragment, {
                            children: [
                                (0, i.jsx)(s.S89, {
                                    id: "new-forum-threads-created",
                                    label: b.intl.string(b.t.Rkgjpq),
                                    checked: f,
                                    action: () => _.Z.setForumThreadsCreated(e, !f),
                                }),
                                (0, i.jsx)(s.Clw, {}),
                            ],
                        })
                      : null,
                  (0, i.jsxs)(s.kSQ, {
                      children: [
                          (0, i.jsx)(s.k5B, {
                              id: "cns_default",
                              label: m,
                              group: "channel_notification_settings",
                              checked: t.inherited && !h,
                              subtext: t.inheritedPreset,
                              action: () => ((0, r.JK)(e.guild_id, e.id), N(!1)),
                          }),
                          (0, i.jsx)(s.k5B, {
                              id: "cns_everything",
                              group: "channel_notification_settings",
                              label: b.intl.string(b.t.hZrr6u),
                              checked: !t.inherited && p === l.s8.ALL_MESSAGES,
                              action: () => ((0, r._m)(e.guild_id, e.id, l.s8.ALL_MESSAGES), N(!1)),
                          }),
                          (0, i.jsx)(s.k5B, {
                              id: "cns_essentials",
                              group: "channel_notification_settings",
                              label: b.intl.string(b.t.y59NJi),
                              checked: !t.inherited && p === l.s8.MENTIONS,
                              action: () => ((0, r._m)(e.guild_id, e.id, l.s8.MENTIONS), N(!1)),
                          }),
                          (0, i.jsx)(s.k5B, {
                              id: "cns_nothing",
                              group: "channel_notification_settings",
                              label: b.intl.string(b.t["pGn/bG"]),
                              checked: !t.inherited && p === l.s8.NOTHING,
                              action: () => ((0, r._m)(e.guild_id, e.id, l.s8.NOTHING), N(!1)),
                          }),
                          (0, i.jsx)(s.k5B, {
                              id: "cns_custom",
                              group: "channel_notification_settings",
                              label: b.intl.string(b.t["32yow8"]),
                              checked: h || (!t.inherited && p === l.s8.CUSTOM),
                              action: () => (S(!0), N(!0)),
                          }),
                      ],
                  }),
                  (g || c) && L,
              ],
          });
}
function E(e, n) {
    let { notification: t, unread: a } = (0, r.ZA)(e),
        o = (e) => {
            e(), n();
        },
        l = (n) => {
            let t = { message_notifications: n };
            n === u.bL.ALL_MESSAGES &&
                a !== S.i.ALL_MESSAGES &&
                (t.flags = (0, c.pq)(d.ZP.getChannelIdFlags(e.guild_id, e.id), h.ic.UNREADS_ALL_MESSAGES)),
                _.Z.updateChannelOverrideSettings(e.guild_id, e.id, t, g.UE.notifications(n));
        };
    return (0, i.jsxs)(s.kSQ, {
        children: [
            (0, i.jsxs)(
                s.sNh,
                {
                    id: "unread_setting",
                    label: "Unread Badges",
                    children: [
                        (0, i.jsx)(s.k5B, {
                            id: "unread_setting_all_messages",
                            group: "unread_setting",
                            checked: a === S.i.ALL_MESSAGES,
                            label: b.intl.string(b.t["HVah//"]),
                            action: () => o(() => (0, r.IG)(e.guild_id, e.id, S.i.ALL_MESSAGES)),
                        }),
                        (0, i.jsx)(s.k5B, {
                            id: "unread_setting_mention_only",
                            group: "unread_setting",
                            checked: a === S.i.ONLY_MENTIONS,
                            label: b.intl.string(b.t["tu+ZWF"]),
                            disabled: a !== S.i.ONLY_MENTIONS && t === u.bL.ALL_MESSAGES,
                            subtext:
                                a !== S.i.ONLY_MENTIONS && t === u.bL.ALL_MESSAGES ? b.intl.string(b.t.eP8yWV) : void 0,
                            action: () => o(() => (0, r.IG)(e.guild_id, e.id, S.i.ONLY_MENTIONS)),
                        }),
                    ],
                },
                "unread_setting",
            ),
            (0, i.jsxs)(
                s.sNh,
                {
                    id: "push_settings",
                    label: b.intl.string(b.t.HcoRu7),
                    children: [
                        (0, i.jsx)(s.k5B, {
                            group: "notification-preset",
                            id: "push_settings_everything",
                            label: b.intl.string(b.t["HVah//"]),
                            checked: t === u.bL.ALL_MESSAGES,
                            subtext:
                                a !== S.i.ALL_MESSAGES && t !== u.bL.ALL_MESSAGES ? b.intl.string(b.t.idXSbG) : void 0,
                            action: () => o(() => l(u.bL.ALL_MESSAGES)),
                        }),
                        (0, i.jsx)(s.k5B, {
                            group: "notification-preset",
                            id: "push_settings_everything_mention",
                            checked: t === u.bL.ONLY_MENTIONS,
                            label: b.intl.string(b.t["tu+ZWF"]),
                            action: () => o(() => l(u.bL.ONLY_MENTIONS)),
                        }),
                        (0, i.jsx)(s.k5B, {
                            group: "notification-preset",
                            id: "push_settings_everything_nothing",
                            label: b.intl.string(b.t.X4wWUl),
                            checked: t === u.bL.NO_MESSAGES,
                            action: () => o(() => l(u.bL.NO_MESSAGES)),
                        }),
                    ],
                },
                "push_settings",
            ),
        ],
    });
}
