n.d(e, {
    A0: () => E,
    Ay: () => N,
    d_: () => h,
}),
    n(896048),
    n(938796);
var i = n(627968),
    r = n(64700),
    l = n(311907),
    a = n(397927),
    s = n(832712),
    o = n(887560),
    d = n(393432),
    u = n(24873),
    c = n(543465),
    g = n(477427),
    _ = n(652215),
    A = n(790782),
    S = n(355097),
    f = n(985018);

function N(t) {
    let e = E(t);
    return t.type === _.rbe.GUILD_VOICE
        ? null
        : (0, i.jsx)(a.Drp, {
              id: "channel_notification_settings",
              label: f.intl.string(f.t.HcoRu0),
              children: e,
          });
}

function E(t) {
    let e = (0, o.bH)(t),
        n = (0, o.UD)(t),
        d = e.preset === u.N9.CUSTOM && !n.inherited,
        [g, A] = r.useState(d),
        [S, N] = r.useState(!1),
        E = S ? u.N9.CUSTOM : e.preset,
        b = h(t, () => N(!1)),
        v = (0, l.bG)([c.Ay], () => c.Ay.getNewForumThreadsCreated(t)),
        p = "parent" === n.inheritedFrom ? f.intl.string(f.t.wlrV1c) : f.intl.string(f.t["1Wn2M4"]);
    return t.type === _.rbe.GUILD_STAGE_VOICE
        ? (0, i.jsxs)(a.rXV, {
              children: [
                  (0, i.jsx)(a.iDA, {
                      id: "cns_default",
                      label: p,
                      checked: n.inherited,
                      group: "channel_notification_settings",
                      subtext:
                          e.notification === _.orn.NO_MESSAGES
                              ? f.intl.string(f.t.CtVGyQ)
                              : f.intl.string(f.t["BENn/6"]),
                      action: () => (0, o.Au)(t.guild_id, t.id),
                  }),
                  (0, i.jsx)(a.iDA, {
                      id: "cns_only_mention",
                      group: "channel_notification_settings",
                      checked: !n.inherited && e.notification !== _.orn.NO_MESSAGES,
                      label: f.intl.string(f.t["BENn/6"]),
                      action: () => (0, o.qk)(t.guild_id, t.id, _.orn.ONLY_MENTIONS),
                  }),
                  (0, i.jsx)(a.iDA, {
                      id: "cns_no_message",
                      group: "channel_notification_settings",
                      label: f.intl.string(f.t.CtVGyQ),
                      checked: !n.inherited && e.notification === _.orn.NO_MESSAGES,
                      action: () => (0, o.qk)(t.guild_id, t.id, _.orn.NO_MESSAGES),
                  }),
              ],
          })
        : (0, i.jsxs)(i.Fragment, {
              children: [
                  t.isForumLikeChannel()
                      ? (0, i.jsxs)(i.Fragment, {
                            children: [
                                (0, i.jsx)(a.sLh, {
                                    id: "new-forum-threads-created",
                                    label: f.intl.string(f.t.Rkgjph),
                                    checked: v,
                                    action: () => s.A.setForumThreadsCreated(t, !v),
                                }),
                                (0, i.jsx)(a.bXX, {}),
                            ],
                        })
                      : null,
                  (0, i.jsxs)(a.rXV, {
                      children: [
                          (0, i.jsx)(a.iDA, {
                              id: "cns_default",
                              label: p,
                              group: "channel_notification_settings",
                              checked: n.inherited && !S,
                              subtext: n.inheritedPreset,
                              action: () => ((0, o.Au)(t.guild_id, t.id), N(!1)),
                          }),
                          (0, i.jsx)(a.iDA, {
                              id: "cns_everything",
                              group: "channel_notification_settings",
                              label: f.intl.string(f.t.hZrr6k),
                              checked: !n.inherited && E === u.N9.ALL_MESSAGES,
                              action: () => ((0, o.gN)(t.guild_id, t.id, u.N9.ALL_MESSAGES), N(!1)),
                          }),
                          (0, i.jsx)(a.iDA, {
                              id: "cns_essentials",
                              group: "channel_notification_settings",
                              label: f.intl.string(f.t.y59NJm),
                              checked: !n.inherited && E === u.N9.MENTIONS,
                              action: () => ((0, o.gN)(t.guild_id, t.id, u.N9.MENTIONS), N(!1)),
                          }),
                          (0, i.jsx)(a.iDA, {
                              id: "cns_nothing",
                              group: "channel_notification_settings",
                              label: f.intl.string(f.t["pGn/bJ"]),
                              checked: !n.inherited && E === u.N9.NOTHING,
                              action: () => ((0, o.gN)(t.guild_id, t.id, u.N9.NOTHING), N(!1)),
                          }),
                          (0, i.jsx)(a.iDA, {
                              id: "cns_custom",
                              group: "channel_notification_settings",
                              label: f.intl.string(f.t["32yow9"]),
                              checked: S || (!n.inherited && E === u.N9.CUSTOM),
                              action: () => (A(!0), N(!0)),
                          }),
                      ],
                  }),
                  (g || d) && b,
              ],
          });
}

function h(t, e) {
    let { notification: n, unread: r } = (0, o.bH)(t),
        l = (t) => {
            t(), e();
        },
        u = (e) => {
            let n = {
                message_notifications: e,
            };
            e === _.orn.ALL_MESSAGES &&
                r !== A.e.ALL_MESSAGES &&
                (n.flags = (0, d.mD)(c.Ay.getChannelIdFlags(t.guild_id, t.id), S.vv.UNREADS_ALL_MESSAGES)),
                s.A.updateChannelOverrideSettings(t.guild_id, t.id, n, g.G_.notifications(e));
        };
    return (0, i.jsxs)(a.rXV, {
        children: [
            (0, i.jsxs)(
                a.Drp,
                {
                    id: "unread_setting",
                    label: "Unread Badges",
                    children: [
                        (0, i.jsx)(a.iDA, {
                            id: "unread_setting_all_messages",
                            group: "unread_setting",
                            checked: r === A.e.ALL_MESSAGES,
                            label: f.intl.string(f.t["HVah/3"]),
                            action: () => l(() => (0, o.mA)(t.guild_id, t.id, A.e.ALL_MESSAGES)),
                        }),
                        (0, i.jsx)(a.iDA, {
                            id: "unread_setting_mention_only",
                            group: "unread_setting",
                            checked: r === A.e.ONLY_MENTIONS,
                            label: f.intl.string(f.t["tu+ZWJ"]),
                            disabled: r !== A.e.ONLY_MENTIONS && n === _.orn.ALL_MESSAGES,
                            subtext:
                                r !== A.e.ONLY_MENTIONS && n === _.orn.ALL_MESSAGES
                                    ? f.intl.string(f.t.eP8yWU)
                                    : void 0,
                            action: () => l(() => (0, o.mA)(t.guild_id, t.id, A.e.ONLY_MENTIONS)),
                        }),
                    ],
                },
                "unread_setting",
            ),
            (0, i.jsxs)(
                a.Drp,
                {
                    id: "push_settings",
                    label: f.intl.string(f.t.HcoRu0),
                    children: [
                        (0, i.jsx)(a.iDA, {
                            group: "notification-preset",
                            id: "push_settings_everything",
                            label: f.intl.string(f.t["HVah/3"]),
                            checked: n === _.orn.ALL_MESSAGES,
                            subtext:
                                r !== A.e.ALL_MESSAGES && n !== _.orn.ALL_MESSAGES ? f.intl.string(f.t.idXSbI) : void 0,
                            action: () => l(() => u(_.orn.ALL_MESSAGES)),
                        }),
                        (0, i.jsx)(a.iDA, {
                            group: "notification-preset",
                            id: "push_settings_everything_mention",
                            checked: n === _.orn.ONLY_MENTIONS,
                            label: f.intl.string(f.t["tu+ZWJ"]),
                            action: () => l(() => u(_.orn.ONLY_MENTIONS)),
                        }),
                        (0, i.jsx)(a.iDA, {
                            group: "notification-preset",
                            id: "push_settings_everything_nothing",
                            label: f.intl.string(f.t.X4wWUi),
                            checked: n === _.orn.NO_MESSAGES,
                            action: () => l(() => u(_.orn.NO_MESSAGES)),
                        }),
                    ],
                },
                "push_settings",
            ),
        ],
    });
}
