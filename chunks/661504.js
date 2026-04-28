n.d(t, { A0: () => A, Ay: () => N, d_: () => L }), n(938796);
var e = n(627968),
    s = n(64700),
    r = n(17928),
    d = n(477782),
    l = n(832712),
    o = n(887560),
    a = n(393432),
    c = n(24873),
    _ = n(543465),
    g = n(477427),
    S = n(652215),
    h = n(790782),
    u = n(355097),
    E = n(985018);
function N(i) {
    let t = A(i);
    return i.type === S.rbe.GUILD_VOICE
        ? null
        : (0, e.jsx)(d.Dr, { id: "channel_notification_settings", label: E.intl.string(E.t.HcoRu0), children: t });
}
function A(i) {
    let t = (0, o.bH)(i),
        n = (0, o.UD)(i),
        a = t.preset === c.N9.CUSTOM && !n.inherited,
        [g, h] = s.useState(a),
        [u, N] = s.useState(!1),
        A = u ? c.N9.CUSTOM : t.preset,
        p = L(i, () => N(!1)),
        b = (0, r.bG)([_.Ay], () => _.Ay.getNewForumThreadsCreated(i)),
        M = "parent" === n.inheritedFrom ? E.intl.string(E.t.wlrV1c) : E.intl.string(E.t["1Wn2M4"]);
    return i.type === S.rbe.GUILD_STAGE_VOICE
        ? (0, e.jsxs)(d.rX, {
              children: [
                  (0, e.jsx)(d.iD, {
                      id: "cns_default",
                      label: M,
                      checked: n.inherited,
                      group: "channel_notification_settings",
                      subtext:
                          t.notification === S.orn.NO_MESSAGES
                              ? E.intl.string(E.t.CtVGyQ)
                              : E.intl.string(E.t["BENn/6"]),
                      action: () => (0, o.Au)(i.guild_id, i.id),
                  }),
                  (0, e.jsx)(d.iD, {
                      id: "cns_only_mention",
                      group: "channel_notification_settings",
                      checked: !n.inherited && t.notification !== S.orn.NO_MESSAGES,
                      label: E.intl.string(E.t["BENn/6"]),
                      action: () => (0, o.qk)(i.guild_id, i.id, S.orn.ONLY_MENTIONS),
                  }),
                  (0, e.jsx)(d.iD, {
                      id: "cns_no_message",
                      group: "channel_notification_settings",
                      label: E.intl.string(E.t.CtVGyQ),
                      checked: !n.inherited && t.notification === S.orn.NO_MESSAGES,
                      action: () => (0, o.qk)(i.guild_id, i.id, S.orn.NO_MESSAGES),
                  }),
              ],
          })
        : (0, e.jsxs)(e.Fragment, {
              children: [
                  i.isForumLikeChannel()
                      ? (0, e.jsxs)(e.Fragment, {
                            children: [
                                (0, e.jsx)(d.sL, {
                                    id: "new-forum-threads-created",
                                    label: E.intl.string(E.t.Rkgjph),
                                    checked: b,
                                    action: () => l.A.setForumThreadsCreated(i, !b),
                                }),
                                (0, e.jsx)(d.bX, {}),
                            ],
                        })
                      : null,
                  (0, e.jsxs)(d.rX, {
                      children: [
                          (0, e.jsx)(d.iD, {
                              id: "cns_default",
                              label: M,
                              group: "channel_notification_settings",
                              checked: n.inherited && !u,
                              subtext: n.inheritedPreset,
                              action: () => ((0, o.Au)(i.guild_id, i.id), N(!1)),
                          }),
                          (0, e.jsx)(d.iD, {
                              id: "cns_everything",
                              group: "channel_notification_settings",
                              label: E.intl.string(E.t.hZrr6k),
                              checked: !n.inherited && A === c.N9.ALL_MESSAGES,
                              action: () => ((0, o.gN)(i.guild_id, i.id, c.N9.ALL_MESSAGES), N(!1)),
                          }),
                          (0, e.jsx)(d.iD, {
                              id: "cns_essentials",
                              group: "channel_notification_settings",
                              label: E.intl.string(E.t.y59NJm),
                              checked: !n.inherited && A === c.N9.MENTIONS,
                              action: () => ((0, o.gN)(i.guild_id, i.id, c.N9.MENTIONS), N(!1)),
                          }),
                          (0, e.jsx)(d.iD, {
                              id: "cns_nothing",
                              group: "channel_notification_settings",
                              label: E.intl.string(E.t["pGn/bJ"]),
                              checked: !n.inherited && A === c.N9.NOTHING,
                              action: () => ((0, o.gN)(i.guild_id, i.id, c.N9.NOTHING), N(!1)),
                          }),
                          (0, e.jsx)(d.iD, {
                              id: "cns_custom",
                              group: "channel_notification_settings",
                              label: E.intl.string(E.t["32yow9"]),
                              checked: u || (!n.inherited && A === c.N9.CUSTOM),
                              action: () => (h(!0), N(!0)),
                          }),
                      ],
                  }),
                  (g || a) && p,
              ],
          });
}
function L(i, t) {
    let { notification: n, unread: s } = (0, o.bH)(i),
        r = (i) => {
            i(), t();
        },
        c = (t) => {
            let n = { message_notifications: t };
            t === S.orn.ALL_MESSAGES &&
                s !== h.e.ALL_MESSAGES &&
                (n.flags = (0, a.mD)(_.Ay.getChannelIdFlags(i.guild_id, i.id), u.vv.UNREADS_ALL_MESSAGES)),
                l.A.updateChannelOverrideSettings(i.guild_id, i.id, n, g.G_.notifications(t));
        };
    return (0, e.jsxs)(d.rX, {
        children: [
            (0, e.jsxs)(
                d.Dr,
                {
                    id: "unread_setting",
                    label: "Unread Badges",
                    children: [
                        (0, e.jsx)(d.iD, {
                            id: "unread_setting_all_messages",
                            group: "unread_setting",
                            checked: s === h.e.ALL_MESSAGES,
                            label: E.intl.string(E.t["HVah/3"]),
                            action: () => r(() => (0, o.mA)(i.guild_id, i.id, h.e.ALL_MESSAGES)),
                        }),
                        (0, e.jsx)(d.iD, {
                            id: "unread_setting_mention_only",
                            group: "unread_setting",
                            checked: s === h.e.ONLY_MENTIONS,
                            label: E.intl.string(E.t["tu+ZWJ"]),
                            disabled: s !== h.e.ONLY_MENTIONS && n === S.orn.ALL_MESSAGES,
                            subtext:
                                s !== h.e.ONLY_MENTIONS && n === S.orn.ALL_MESSAGES
                                    ? E.intl.string(E.t.eP8yWU)
                                    : void 0,
                            action: () => r(() => (0, o.mA)(i.guild_id, i.id, h.e.ONLY_MENTIONS)),
                        }),
                    ],
                },
                "unread_setting",
            ),
            (0, e.jsxs)(
                d.Dr,
                {
                    id: "push_settings",
                    label: E.intl.string(E.t.HcoRu0),
                    children: [
                        (0, e.jsx)(d.iD, {
                            group: "notification-preset",
                            id: "push_settings_everything",
                            label: E.intl.string(E.t["HVah/3"]),
                            checked: n === S.orn.ALL_MESSAGES,
                            subtext:
                                s !== h.e.ALL_MESSAGES && n !== S.orn.ALL_MESSAGES ? E.intl.string(E.t.idXSbI) : void 0,
                            action: () => r(() => c(S.orn.ALL_MESSAGES)),
                        }),
                        (0, e.jsx)(d.iD, {
                            group: "notification-preset",
                            id: "push_settings_everything_mention",
                            checked: n === S.orn.ONLY_MENTIONS,
                            label: E.intl.string(E.t["tu+ZWJ"]),
                            action: () => r(() => c(S.orn.ONLY_MENTIONS)),
                        }),
                        (0, e.jsx)(d.iD, {
                            group: "notification-preset",
                            id: "push_settings_everything_nothing",
                            label: E.intl.string(E.t.X4wWUi),
                            checked: n === S.orn.NO_MESSAGES,
                            action: () => r(() => c(S.orn.NO_MESSAGES)),
                        }),
                    ],
                },
                "push_settings",
            ),
        ],
    });
}
