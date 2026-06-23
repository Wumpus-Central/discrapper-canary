t.d(n, { A0: () => A, Ay: () => N, d_: () => L }), t(938796);
var e = t(627968),
    s = t(64700),
    r = t(17928),
    d = t(477782),
    l = t(832712),
    o = t(887560),
    c = t(393432),
    a = t(24873),
    _ = t(543465),
    g = t(477427),
    S = t(652215),
    u = t(790782),
    h = t(355097),
    E = t(375708);
function N(i) {
    let n = A(i);
    return i.type === S.rbe.GUILD_VOICE
        ? null
        : (0, e.jsx)(d.Dr, { id: "channel_notification_settings", label: E.intl.string(E.t.HcoRu0), children: n });
}
function A(i) {
    let n = (0, o.bH)(i),
        t = (0, o.UD)(i),
        c = n.preset === a.N9.CUSTOM && !t.inherited,
        [g, u] = s.useState(c),
        [h, N] = s.useState(!1),
        A = h ? a.N9.CUSTOM : n.preset,
        p = L(i, () => N(!1)),
        b = (0, r.bG)([_.Ay], () => _.Ay.getNewForumThreadsCreated(i)),
        M = "parent" === t.inheritedFrom ? E.intl.string(E.t.wlrV1c) : E.intl.string(E.t["1Wn2M4"]);
    return i.type === S.rbe.GUILD_STAGE_VOICE
        ? (0, e.jsxs)(d.rX, {
              children: [
                  (0, e.jsx)(d.iD, {
                      id: "cns_default",
                      label: M,
                      checked: t.inherited,
                      group: "channel_notification_settings",
                      subtext:
                          n.notification === S.orn.NO_MESSAGES
                              ? E.intl.string(E.t.CtVGyQ)
                              : E.intl.string(E.t["BENn/6"]),
                      action: () => (0, o.Au)(i.guild_id, i.id),
                  }),
                  (0, e.jsx)(d.iD, {
                      id: "cns_only_mention",
                      group: "channel_notification_settings",
                      checked: !t.inherited && n.notification !== S.orn.NO_MESSAGES,
                      label: E.intl.string(E.t["BENn/6"]),
                      action: () => (0, o.qk)(i.guild_id, i.id, S.orn.ONLY_MENTIONS),
                  }),
                  (0, e.jsx)(d.iD, {
                      id: "cns_no_message",
                      group: "channel_notification_settings",
                      label: E.intl.string(E.t.CtVGyQ),
                      checked: !t.inherited && n.notification === S.orn.NO_MESSAGES,
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
                              checked: t.inherited && !h,
                              subtext: t.inheritedPreset,
                              action: () => ((0, o.Au)(i.guild_id, i.id), N(!1)),
                          }),
                          (0, e.jsx)(d.iD, {
                              id: "cns_everything",
                              group: "channel_notification_settings",
                              label: E.intl.string(E.t.hZrr6k),
                              checked: !t.inherited && A === a.N9.ALL_MESSAGES,
                              action: () => ((0, o.gN)(i.guild_id, i.id, a.N9.ALL_MESSAGES), N(!1)),
                          }),
                          (0, e.jsx)(d.iD, {
                              id: "cns_essentials",
                              group: "channel_notification_settings",
                              label: E.intl.string(E.t.y59NJm),
                              checked: !t.inherited && A === a.N9.MENTIONS,
                              action: () => ((0, o.gN)(i.guild_id, i.id, a.N9.MENTIONS), N(!1)),
                          }),
                          (0, e.jsx)(d.iD, {
                              id: "cns_nothing",
                              group: "channel_notification_settings",
                              label: E.intl.string(E.t["pGn/bJ"]),
                              checked: !t.inherited && A === a.N9.NOTHING,
                              action: () => ((0, o.gN)(i.guild_id, i.id, a.N9.NOTHING), N(!1)),
                          }),
                          (0, e.jsx)(d.iD, {
                              id: "cns_custom",
                              group: "channel_notification_settings",
                              label: E.intl.string(E.t["32yow9"]),
                              checked: h || (!t.inherited && A === a.N9.CUSTOM),
                              action: () => (u(!0), N(!0)),
                          }),
                      ],
                  }),
                  (g || c) && p,
              ],
          });
}
function L(i, n) {
    let { notification: t, unread: s } = (0, o.bH)(i);
    function r(i) {
        i(), n();
    }
    function a(n) {
        let t = { message_notifications: n };
        n === S.orn.ALL_MESSAGES &&
            s !== u.e.ALL_MESSAGES &&
            (t.flags = (0, c.mD)(_.Ay.getChannelIdFlags(i.guild_id, i.id), h.vv.UNREADS_ALL_MESSAGES)),
            l.A.updateChannelOverrideSettings(i.guild_id, i.id, t, g.G_.notifications(n));
    }
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
                            checked: s === u.e.ALL_MESSAGES,
                            label: E.intl.string(E.t["HVah/3"]),
                            action: () => r(() => (0, o.mA)(i.guild_id, i.id, u.e.ALL_MESSAGES)),
                        }),
                        (0, e.jsx)(d.iD, {
                            id: "unread_setting_mention_only",
                            group: "unread_setting",
                            checked: s === u.e.ONLY_MENTIONS,
                            label: E.intl.string(E.t["tu+ZWJ"]),
                            disabled: s !== u.e.ONLY_MENTIONS && t === S.orn.ALL_MESSAGES,
                            subtext:
                                s !== u.e.ONLY_MENTIONS && t === S.orn.ALL_MESSAGES
                                    ? E.intl.string(E.t.eP8yWU)
                                    : void 0,
                            action: () => r(() => (0, o.mA)(i.guild_id, i.id, u.e.ONLY_MENTIONS)),
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
                            checked: t === S.orn.ALL_MESSAGES,
                            subtext:
                                s !== u.e.ALL_MESSAGES && t !== S.orn.ALL_MESSAGES ? E.intl.string(E.t.idXSbI) : void 0,
                            action: () => r(() => a(S.orn.ALL_MESSAGES)),
                        }),
                        (0, e.jsx)(d.iD, {
                            group: "notification-preset",
                            id: "push_settings_everything_mention",
                            checked: t === S.orn.ONLY_MENTIONS,
                            label: E.intl.string(E.t["tu+ZWJ"]),
                            action: () => r(() => a(S.orn.ONLY_MENTIONS)),
                        }),
                        (0, e.jsx)(d.iD, {
                            group: "notification-preset",
                            id: "push_settings_everything_nothing",
                            label: E.intl.string(E.t.X4wWUi),
                            checked: t === S.orn.NO_MESSAGES,
                            action: () => r(() => a(S.orn.NO_MESSAGES)),
                        }),
                    ],
                },
                "push_settings",
            ),
        ],
    });
}
