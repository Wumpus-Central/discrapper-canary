"use strict";
n.d(t, { A0: () => y, Ay: () => b, d_: () => f }), n(938796);
var i = n(627968),
    r = n(64700),
    a = n(17928),
    s = n(477782),
    l = n(832712),
    o = n(887560),
    d = n(393432),
    c = n(24873),
    u = n(543465),
    m = n(477427),
    p = n(652215),
    _ = n(790782),
    h = n(355097),
    g = n(985018);
function b(e) {
    let t = y(e);
    return e.type === p.rbe.GUILD_VOICE
        ? null
        : (0, i.jsx)(s.Dr, { id: "channel_notification_settings", label: g.intl.string(g.t.HcoRu0), children: t });
}
function y(e) {
    let t = (0, o.bH)(e),
        n = (0, o.UD)(e),
        d = t.preset === c.N9.CUSTOM && !n.inherited,
        [m, _] = r.useState(d),
        [h, b] = r.useState(!1),
        y = h ? c.N9.CUSTOM : t.preset,
        A = f(e, () => b(!1)),
        S = (0, a.bG)([u.Ay], () => u.Ay.getNewForumThreadsCreated(e)),
        E = "parent" === n.inheritedFrom ? g.intl.string(g.t.wlrV1c) : g.intl.string(g.t["1Wn2M4"]);
    return e.type === p.rbe.GUILD_STAGE_VOICE
        ? (0, i.jsxs)(s.rX, {
              children: [
                  (0, i.jsx)(s.iD, {
                      id: "cns_default",
                      label: E,
                      checked: n.inherited,
                      group: "channel_notification_settings",
                      subtext:
                          t.notification === p.orn.NO_MESSAGES
                              ? g.intl.string(g.t.CtVGyQ)
                              : g.intl.string(g.t["BENn/6"]),
                      action: () => (0, o.Au)(e.guild_id, e.id),
                  }),
                  (0, i.jsx)(s.iD, {
                      id: "cns_only_mention",
                      group: "channel_notification_settings",
                      checked: !n.inherited && t.notification !== p.orn.NO_MESSAGES,
                      label: g.intl.string(g.t["BENn/6"]),
                      action: () => (0, o.qk)(e.guild_id, e.id, p.orn.ONLY_MENTIONS),
                  }),
                  (0, i.jsx)(s.iD, {
                      id: "cns_no_message",
                      group: "channel_notification_settings",
                      label: g.intl.string(g.t.CtVGyQ),
                      checked: !n.inherited && t.notification === p.orn.NO_MESSAGES,
                      action: () => (0, o.qk)(e.guild_id, e.id, p.orn.NO_MESSAGES),
                  }),
              ],
          })
        : (0, i.jsxs)(i.Fragment, {
              children: [
                  e.isForumLikeChannel()
                      ? (0, i.jsxs)(i.Fragment, {
                            children: [
                                (0, i.jsx)(s.sL, {
                                    id: "new-forum-threads-created",
                                    label: g.intl.string(g.t.Rkgjph),
                                    checked: S,
                                    action: () => l.A.setForumThreadsCreated(e, !S),
                                }),
                                (0, i.jsx)(s.bX, {}),
                            ],
                        })
                      : null,
                  (0, i.jsxs)(s.rX, {
                      children: [
                          (0, i.jsx)(s.iD, {
                              id: "cns_default",
                              label: E,
                              group: "channel_notification_settings",
                              checked: n.inherited && !h,
                              subtext: n.inheritedPreset,
                              action: () => ((0, o.Au)(e.guild_id, e.id), b(!1)),
                          }),
                          (0, i.jsx)(s.iD, {
                              id: "cns_everything",
                              group: "channel_notification_settings",
                              label: g.intl.string(g.t.hZrr6k),
                              checked: !n.inherited && y === c.N9.ALL_MESSAGES,
                              action: () => ((0, o.gN)(e.guild_id, e.id, c.N9.ALL_MESSAGES), b(!1)),
                          }),
                          (0, i.jsx)(s.iD, {
                              id: "cns_essentials",
                              group: "channel_notification_settings",
                              label: g.intl.string(g.t.y59NJm),
                              checked: !n.inherited && y === c.N9.MENTIONS,
                              action: () => ((0, o.gN)(e.guild_id, e.id, c.N9.MENTIONS), b(!1)),
                          }),
                          (0, i.jsx)(s.iD, {
                              id: "cns_nothing",
                              group: "channel_notification_settings",
                              label: g.intl.string(g.t["pGn/bJ"]),
                              checked: !n.inherited && y === c.N9.NOTHING,
                              action: () => ((0, o.gN)(e.guild_id, e.id, c.N9.NOTHING), b(!1)),
                          }),
                          (0, i.jsx)(s.iD, {
                              id: "cns_custom",
                              group: "channel_notification_settings",
                              label: g.intl.string(g.t["32yow9"]),
                              checked: h || (!n.inherited && y === c.N9.CUSTOM),
                              action: () => (_(!0), b(!0)),
                          }),
                      ],
                  }),
                  (m || d) && A,
              ],
          });
}
function f(e, t) {
    let { notification: n, unread: r } = (0, o.bH)(e),
        a = (e) => {
            e(), t();
        },
        c = (t) => {
            let n = { message_notifications: t };
            t === p.orn.ALL_MESSAGES &&
                r !== _.e.ALL_MESSAGES &&
                (n.flags = (0, d.mD)(u.Ay.getChannelIdFlags(e.guild_id, e.id), h.vv.UNREADS_ALL_MESSAGES)),
                l.A.updateChannelOverrideSettings(e.guild_id, e.id, n, m.G_.notifications(t));
        };
    return (0, i.jsxs)(s.rX, {
        children: [
            (0, i.jsxs)(
                s.Dr,
                {
                    id: "unread_setting",
                    label: "Unread Badges",
                    children: [
                        (0, i.jsx)(s.iD, {
                            id: "unread_setting_all_messages",
                            group: "unread_setting",
                            checked: r === _.e.ALL_MESSAGES,
                            label: g.intl.string(g.t["HVah/3"]),
                            action: () => a(() => (0, o.mA)(e.guild_id, e.id, _.e.ALL_MESSAGES)),
                        }),
                        (0, i.jsx)(s.iD, {
                            id: "unread_setting_mention_only",
                            group: "unread_setting",
                            checked: r === _.e.ONLY_MENTIONS,
                            label: g.intl.string(g.t["tu+ZWJ"]),
                            disabled: r !== _.e.ONLY_MENTIONS && n === p.orn.ALL_MESSAGES,
                            subtext:
                                r !== _.e.ONLY_MENTIONS && n === p.orn.ALL_MESSAGES
                                    ? g.intl.string(g.t.eP8yWU)
                                    : void 0,
                            action: () => a(() => (0, o.mA)(e.guild_id, e.id, _.e.ONLY_MENTIONS)),
                        }),
                    ],
                },
                "unread_setting",
            ),
            (0, i.jsxs)(
                s.Dr,
                {
                    id: "push_settings",
                    label: g.intl.string(g.t.HcoRu0),
                    children: [
                        (0, i.jsx)(s.iD, {
                            group: "notification-preset",
                            id: "push_settings_everything",
                            label: g.intl.string(g.t["HVah/3"]),
                            checked: n === p.orn.ALL_MESSAGES,
                            subtext:
                                r !== _.e.ALL_MESSAGES && n !== p.orn.ALL_MESSAGES ? g.intl.string(g.t.idXSbI) : void 0,
                            action: () => a(() => c(p.orn.ALL_MESSAGES)),
                        }),
                        (0, i.jsx)(s.iD, {
                            group: "notification-preset",
                            id: "push_settings_everything_mention",
                            checked: n === p.orn.ONLY_MENTIONS,
                            label: g.intl.string(g.t["tu+ZWJ"]),
                            action: () => a(() => c(p.orn.ONLY_MENTIONS)),
                        }),
                        (0, i.jsx)(s.iD, {
                            group: "notification-preset",
                            id: "push_settings_everything_nothing",
                            label: g.intl.string(g.t.X4wWUi),
                            checked: n === p.orn.NO_MESSAGES,
                            action: () => a(() => c(p.orn.NO_MESSAGES)),
                        }),
                    ],
                },
                "push_settings",
            ),
        ],
    });
}
