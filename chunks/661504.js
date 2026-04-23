i.d(n, { A0: () => E, Ay: () => A, d_: () => b }), i(938796);
var t = i(627968),
    _ = i(64700),
    s = i(17928),
    r = i(477782),
    a = i(832712),
    d = i(887560),
    o = i(393432),
    c = i(24873),
    l = i(543465),
    g = i(477427),
    S = i(652215),
    h = i(790782),
    u = i(355097),
    N = i(985018);
function A(e) {
    let n = E(e);
    return e.type === S.rbe.GUILD_VOICE
        ? null
        : (0, t.jsx)(r.Dr, { id: "channel_notification_settings", label: N.intl.string(N.t.HcoRu0), children: n });
}
function E(e) {
    let n = (0, d.bH)(e),
        i = (0, d.UD)(e),
        o = n.preset === c.N9.CUSTOM && !i.inherited,
        [g, h] = _.useState(o),
        [u, A] = _.useState(!1),
        E = u ? c.N9.CUSTOM : n.preset,
        p = b(e, () => A(!1)),
        L = (0, s.bG)([l.Ay], () => l.Ay.getNewForumThreadsCreated(e)),
        M = "parent" === i.inheritedFrom ? N.intl.string(N.t.wlrV1c) : N.intl.string(N.t["1Wn2M4"]);
    return e.type === S.rbe.GUILD_STAGE_VOICE
        ? (0, t.jsxs)(r.rX, {
              children: [
                  (0, t.jsx)(r.iD, {
                      id: "cns_default",
                      label: M,
                      checked: i.inherited,
                      group: "channel_notification_settings",
                      subtext:
                          n.notification === S.orn.NO_MESSAGES
                              ? N.intl.string(N.t.CtVGyQ)
                              : N.intl.string(N.t["BENn/6"]),
                      action: () => (0, d.Au)(e.guild_id, e.id),
                  }),
                  (0, t.jsx)(r.iD, {
                      id: "cns_only_mention",
                      group: "channel_notification_settings",
                      checked: !i.inherited && n.notification !== S.orn.NO_MESSAGES,
                      label: N.intl.string(N.t["BENn/6"]),
                      action: () => (0, d.qk)(e.guild_id, e.id, S.orn.ONLY_MENTIONS),
                  }),
                  (0, t.jsx)(r.iD, {
                      id: "cns_no_message",
                      group: "channel_notification_settings",
                      label: N.intl.string(N.t.CtVGyQ),
                      checked: !i.inherited && n.notification === S.orn.NO_MESSAGES,
                      action: () => (0, d.qk)(e.guild_id, e.id, S.orn.NO_MESSAGES),
                  }),
              ],
          })
        : (0, t.jsxs)(t.Fragment, {
              children: [
                  e.isForumLikeChannel()
                      ? (0, t.jsxs)(t.Fragment, {
                            children: [
                                (0, t.jsx)(r.sL, {
                                    id: "new-forum-threads-created",
                                    label: N.intl.string(N.t.Rkgjph),
                                    checked: L,
                                    action: () => a.A.setForumThreadsCreated(e, !L),
                                }),
                                (0, t.jsx)(r.bX, {}),
                            ],
                        })
                      : null,
                  (0, t.jsxs)(r.rX, {
                      children: [
                          (0, t.jsx)(r.iD, {
                              id: "cns_default",
                              label: M,
                              group: "channel_notification_settings",
                              checked: i.inherited && !u,
                              subtext: i.inheritedPreset,
                              action: () => ((0, d.Au)(e.guild_id, e.id), A(!1)),
                          }),
                          (0, t.jsx)(r.iD, {
                              id: "cns_everything",
                              group: "channel_notification_settings",
                              label: N.intl.string(N.t.hZrr6k),
                              checked: !i.inherited && E === c.N9.ALL_MESSAGES,
                              action: () => ((0, d.gN)(e.guild_id, e.id, c.N9.ALL_MESSAGES), A(!1)),
                          }),
                          (0, t.jsx)(r.iD, {
                              id: "cns_essentials",
                              group: "channel_notification_settings",
                              label: N.intl.string(N.t.y59NJm),
                              checked: !i.inherited && E === c.N9.MENTIONS,
                              action: () => ((0, d.gN)(e.guild_id, e.id, c.N9.MENTIONS), A(!1)),
                          }),
                          (0, t.jsx)(r.iD, {
                              id: "cns_nothing",
                              group: "channel_notification_settings",
                              label: N.intl.string(N.t["pGn/bJ"]),
                              checked: !i.inherited && E === c.N9.NOTHING,
                              action: () => ((0, d.gN)(e.guild_id, e.id, c.N9.NOTHING), A(!1)),
                          }),
                          (0, t.jsx)(r.iD, {
                              id: "cns_custom",
                              group: "channel_notification_settings",
                              label: N.intl.string(N.t["32yow9"]),
                              checked: u || (!i.inherited && E === c.N9.CUSTOM),
                              action: () => (h(!0), A(!0)),
                          }),
                      ],
                  }),
                  (g || o) && p,
              ],
          });
}
function b(e, n) {
    let { notification: i, unread: _ } = (0, d.bH)(e),
        s = (e) => {
            e(), n();
        },
        c = (n) => {
            let i = { message_notifications: n };
            n === S.orn.ALL_MESSAGES &&
                _ !== h.e.ALL_MESSAGES &&
                (i.flags = (0, o.mD)(l.Ay.getChannelIdFlags(e.guild_id, e.id), u.vv.UNREADS_ALL_MESSAGES)),
                a.A.updateChannelOverrideSettings(e.guild_id, e.id, i, g.G_.notifications(n));
        };
    return (0, t.jsxs)(r.rX, {
        children: [
            (0, t.jsxs)(
                r.Dr,
                {
                    id: "unread_setting",
                    label: "Unread Badges",
                    children: [
                        (0, t.jsx)(r.iD, {
                            id: "unread_setting_all_messages",
                            group: "unread_setting",
                            checked: _ === h.e.ALL_MESSAGES,
                            label: N.intl.string(N.t["HVah/3"]),
                            action: () => s(() => (0, d.mA)(e.guild_id, e.id, h.e.ALL_MESSAGES)),
                        }),
                        (0, t.jsx)(r.iD, {
                            id: "unread_setting_mention_only",
                            group: "unread_setting",
                            checked: _ === h.e.ONLY_MENTIONS,
                            label: N.intl.string(N.t["tu+ZWJ"]),
                            disabled: _ !== h.e.ONLY_MENTIONS && i === S.orn.ALL_MESSAGES,
                            subtext:
                                _ !== h.e.ONLY_MENTIONS && i === S.orn.ALL_MESSAGES
                                    ? N.intl.string(N.t.eP8yWU)
                                    : void 0,
                            action: () => s(() => (0, d.mA)(e.guild_id, e.id, h.e.ONLY_MENTIONS)),
                        }),
                    ],
                },
                "unread_setting",
            ),
            (0, t.jsxs)(
                r.Dr,
                {
                    id: "push_settings",
                    label: N.intl.string(N.t.HcoRu0),
                    children: [
                        (0, t.jsx)(r.iD, {
                            group: "notification-preset",
                            id: "push_settings_everything",
                            label: N.intl.string(N.t["HVah/3"]),
                            checked: i === S.orn.ALL_MESSAGES,
                            subtext:
                                _ !== h.e.ALL_MESSAGES && i !== S.orn.ALL_MESSAGES ? N.intl.string(N.t.idXSbI) : void 0,
                            action: () => s(() => c(S.orn.ALL_MESSAGES)),
                        }),
                        (0, t.jsx)(r.iD, {
                            group: "notification-preset",
                            id: "push_settings_everything_mention",
                            checked: i === S.orn.ONLY_MENTIONS,
                            label: N.intl.string(N.t["tu+ZWJ"]),
                            action: () => s(() => c(S.orn.ONLY_MENTIONS)),
                        }),
                        (0, t.jsx)(r.iD, {
                            group: "notification-preset",
                            id: "push_settings_everything_nothing",
                            label: N.intl.string(N.t.X4wWUi),
                            checked: i === S.orn.NO_MESSAGES,
                            action: () => s(() => c(S.orn.NO_MESSAGES)),
                        }),
                    ],
                },
                "push_settings",
            ),
        ],
    });
}
