e.d(i, { A0: () => h, Ay: () => E, d_: () => f }), e(938796);
var n = e(627968),
    r = e(64700),
    l = e(311907),
    s = e(397927),
    a = e(832712),
    o = e(887560),
    d = e(393432),
    g = e(24873),
    c = e(543465),
    u = e(477427),
    _ = e(652215),
    S = e(790782),
    A = e(355097),
    N = e(985018);
function E(t) {
    let i = h(t);
    return t.type === _.rbe.GUILD_VOICE
        ? null
        : (0, n.jsx)(s.Drp, { id: "channel_notification_settings", label: N.intl.string(N.t.HcoRu0), children: i });
}
function h(t) {
    let i = (0, o.bH)(t),
        e = (0, o.UD)(t),
        d = i.preset === g.N9.CUSTOM && !e.inherited,
        [u, S] = r.useState(d),
        [A, E] = r.useState(!1),
        h = A ? g.N9.CUSTOM : i.preset,
        L = f(t, () => E(!1)),
        b = (0, l.bG)([c.Ay], () => c.Ay.getNewForumThreadsCreated(t)),
        O = "parent" === e.inheritedFrom ? N.intl.string(N.t.wlrV1c) : N.intl.string(N.t["1Wn2M4"]);
    return t.type === _.rbe.GUILD_STAGE_VOICE
        ? (0, n.jsxs)(s.rXV, {
              children: [
                  (0, n.jsx)(s.iDA, {
                      id: "cns_default",
                      label: O,
                      checked: e.inherited,
                      group: "channel_notification_settings",
                      subtext:
                          i.notification === _.orn.NO_MESSAGES
                              ? N.intl.string(N.t.CtVGyQ)
                              : N.intl.string(N.t["BENn/6"]),
                      action: () => (0, o.Au)(t.guild_id, t.id),
                  }),
                  (0, n.jsx)(s.iDA, {
                      id: "cns_only_mention",
                      group: "channel_notification_settings",
                      checked: !e.inherited && i.notification !== _.orn.NO_MESSAGES,
                      label: N.intl.string(N.t["BENn/6"]),
                      action: () => (0, o.qk)(t.guild_id, t.id, _.orn.ONLY_MENTIONS),
                  }),
                  (0, n.jsx)(s.iDA, {
                      id: "cns_no_message",
                      group: "channel_notification_settings",
                      label: N.intl.string(N.t.CtVGyQ),
                      checked: !e.inherited && i.notification === _.orn.NO_MESSAGES,
                      action: () => (0, o.qk)(t.guild_id, t.id, _.orn.NO_MESSAGES),
                  }),
              ],
          })
        : (0, n.jsxs)(n.Fragment, {
              children: [
                  t.isForumLikeChannel()
                      ? (0, n.jsxs)(n.Fragment, {
                            children: [
                                (0, n.jsx)(s.sLh, {
                                    id: "new-forum-threads-created",
                                    label: N.intl.string(N.t.Rkgjph),
                                    checked: b,
                                    action: () => a.A.setForumThreadsCreated(t, !b),
                                }),
                                (0, n.jsx)(s.bXX, {}),
                            ],
                        })
                      : null,
                  (0, n.jsxs)(s.rXV, {
                      children: [
                          (0, n.jsx)(s.iDA, {
                              id: "cns_default",
                              label: O,
                              group: "channel_notification_settings",
                              checked: e.inherited && !A,
                              subtext: e.inheritedPreset,
                              action: () => ((0, o.Au)(t.guild_id, t.id), E(!1)),
                          }),
                          (0, n.jsx)(s.iDA, {
                              id: "cns_everything",
                              group: "channel_notification_settings",
                              label: N.intl.string(N.t.hZrr6k),
                              checked: !e.inherited && h === g.N9.ALL_MESSAGES,
                              action: () => ((0, o.gN)(t.guild_id, t.id, g.N9.ALL_MESSAGES), E(!1)),
                          }),
                          (0, n.jsx)(s.iDA, {
                              id: "cns_essentials",
                              group: "channel_notification_settings",
                              label: N.intl.string(N.t.y59NJm),
                              checked: !e.inherited && h === g.N9.MENTIONS,
                              action: () => ((0, o.gN)(t.guild_id, t.id, g.N9.MENTIONS), E(!1)),
                          }),
                          (0, n.jsx)(s.iDA, {
                              id: "cns_nothing",
                              group: "channel_notification_settings",
                              label: N.intl.string(N.t["pGn/bJ"]),
                              checked: !e.inherited && h === g.N9.NOTHING,
                              action: () => ((0, o.gN)(t.guild_id, t.id, g.N9.NOTHING), E(!1)),
                          }),
                          (0, n.jsx)(s.iDA, {
                              id: "cns_custom",
                              group: "channel_notification_settings",
                              label: N.intl.string(N.t["32yow9"]),
                              checked: A || (!e.inherited && h === g.N9.CUSTOM),
                              action: () => (S(!0), E(!0)),
                          }),
                      ],
                  }),
                  (u || d) && L,
              ],
          });
}
function f(t, i) {
    let { notification: e, unread: r } = (0, o.bH)(t),
        l = (t) => {
            t(), i();
        },
        g = (i) => {
            let e = { message_notifications: i };
            i === _.orn.ALL_MESSAGES &&
                r !== S.e.ALL_MESSAGES &&
                (e.flags = (0, d.mD)(c.Ay.getChannelIdFlags(t.guild_id, t.id), A.vv.UNREADS_ALL_MESSAGES)),
                a.A.updateChannelOverrideSettings(t.guild_id, t.id, e, u.G_.notifications(i));
        };
    return (0, n.jsxs)(s.rXV, {
        children: [
            (0, n.jsxs)(
                s.Drp,
                {
                    id: "unread_setting",
                    label: "Unread Badges",
                    children: [
                        (0, n.jsx)(s.iDA, {
                            id: "unread_setting_all_messages",
                            group: "unread_setting",
                            checked: r === S.e.ALL_MESSAGES,
                            label: N.intl.string(N.t["HVah/3"]),
                            action: () => l(() => (0, o.mA)(t.guild_id, t.id, S.e.ALL_MESSAGES)),
                        }),
                        (0, n.jsx)(s.iDA, {
                            id: "unread_setting_mention_only",
                            group: "unread_setting",
                            checked: r === S.e.ONLY_MENTIONS,
                            label: N.intl.string(N.t["tu+ZWJ"]),
                            disabled: r !== S.e.ONLY_MENTIONS && e === _.orn.ALL_MESSAGES,
                            subtext:
                                r !== S.e.ONLY_MENTIONS && e === _.orn.ALL_MESSAGES
                                    ? N.intl.string(N.t.eP8yWU)
                                    : void 0,
                            action: () => l(() => (0, o.mA)(t.guild_id, t.id, S.e.ONLY_MENTIONS)),
                        }),
                    ],
                },
                "unread_setting",
            ),
            (0, n.jsxs)(
                s.Drp,
                {
                    id: "push_settings",
                    label: N.intl.string(N.t.HcoRu0),
                    children: [
                        (0, n.jsx)(s.iDA, {
                            group: "notification-preset",
                            id: "push_settings_everything",
                            label: N.intl.string(N.t["HVah/3"]),
                            checked: e === _.orn.ALL_MESSAGES,
                            subtext:
                                r !== S.e.ALL_MESSAGES && e !== _.orn.ALL_MESSAGES ? N.intl.string(N.t.idXSbI) : void 0,
                            action: () => l(() => g(_.orn.ALL_MESSAGES)),
                        }),
                        (0, n.jsx)(s.iDA, {
                            group: "notification-preset",
                            id: "push_settings_everything_mention",
                            checked: e === _.orn.ONLY_MENTIONS,
                            label: N.intl.string(N.t["tu+ZWJ"]),
                            action: () => l(() => g(_.orn.ONLY_MENTIONS)),
                        }),
                        (0, n.jsx)(s.iDA, {
                            group: "notification-preset",
                            id: "push_settings_everything_nothing",
                            label: N.intl.string(N.t.X4wWUi),
                            checked: e === _.orn.NO_MESSAGES,
                            action: () => l(() => g(_.orn.NO_MESSAGES)),
                        }),
                    ],
                },
                "push_settings",
            ),
        ],
    });
}
