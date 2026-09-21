i.d(t, { A: () => u, h: () => h });
var e = i(477900),
    r = i(17928),
    l = i(477782),
    s = i(832712),
    a = i(887560),
    o = i(24873),
    d = i(543465),
    c = i(652215),
    g = i(375708);
function u(n) {
    let t = h(n);
    return n.type === c.rbe.GUILD_VOICE
        ? null
        : (0, e.jsx)(l.Dr, { id: "channel_notification_settings", label: g.intl.string(g.t.HcoRu0), children: t });
}
function h(n) {
    let t = (0, a.bH)(n),
        i = (0, a.UD)(n),
        u = (0, o.hJ)(t.unread, t.notification),
        h = (0, r.bG)([d.Ay], () => d.Ay.getNewForumThreadsCreated(n)),
        _ = "parent" === i.inheritedFrom ? g.intl.string(g.t.wlrV1c) : g.intl.string(g.t["1Wn2M4"]);
    return n.type === c.rbe.GUILD_STAGE_VOICE
        ? (0, e.jsxs)(l.rX, {
              children: [
                  (0, e.jsx)(l.iD, {
                      id: "cns_default",
                      label: _,
                      checked: i.inherited,
                      group: "channel_notification_settings",
                      subtext:
                          t.notification === c.orn.NO_MESSAGES
                              ? g.intl.string(g.t.CtVGyQ)
                              : g.intl.string(g.t["BENn/6"]),
                      action: () => (0, a.Au)(n.guild_id, n.id),
                  }),
                  (0, e.jsx)(l.iD, {
                      id: "cns_only_mention",
                      group: "channel_notification_settings",
                      checked: !i.inherited && t.notification !== c.orn.NO_MESSAGES,
                      label: g.intl.string(g.t["BENn/6"]),
                      action: () => (0, a.qk)(n.guild_id, n.id, c.orn.ONLY_MENTIONS),
                  }),
                  (0, e.jsx)(l.iD, {
                      id: "cns_no_message",
                      group: "channel_notification_settings",
                      label: g.intl.string(g.t.CtVGyQ),
                      checked: !i.inherited && t.notification === c.orn.NO_MESSAGES,
                      action: () => (0, a.qk)(n.guild_id, n.id, c.orn.NO_MESSAGES),
                  }),
              ],
          })
        : (0, e.jsxs)(e.Fragment, {
              children: [
                  n.isForumLikeChannel()
                      ? (0, e.jsxs)(e.Fragment, {
                            children: [
                                (0, e.jsx)(l.sL, {
                                    id: "new-forum-threads-created",
                                    label: g.intl.string(g.t.Rkgjph),
                                    checked: h,
                                    action: () => s.A.setForumThreadsCreated(n, !h),
                                }),
                                (0, e.jsx)(l.bX, {}),
                            ],
                        })
                      : null,
                  (0, e.jsxs)(l.rX, {
                      children: [
                          (0, e.jsx)(l.iD, {
                              id: "cns_default",
                              label: _,
                              group: "channel_notification_settings",
                              checked: i.inherited,
                              subtext: i.inheritedPreset,
                              action: () => (0, a.Au)(n.guild_id, n.id),
                          }),
                          (0, e.jsx)(l.iD, {
                              id: "cns_everything",
                              group: "channel_notification_settings",
                              label: g.intl.string(g.t.hZrr6k),
                              checked: !i.inherited && u === o.N9.ALL_MESSAGES,
                              action: () => (0, a.gN)(n.guild_id, n.id, o.N9.ALL_MESSAGES),
                          }),
                          (0, e.jsx)(l.iD, {
                              id: "cns_hybrid",
                              group: "channel_notification_settings",
                              label: g.intl.string(g.t.JzbSEY),
                              checked: !i.inherited && u === o.N9.HYBRID,
                              action: () => (0, a.gN)(n.guild_id, n.id, o.N9.HYBRID),
                          }),
                          (0, e.jsx)(l.iD, {
                              id: "cns_essentials",
                              group: "channel_notification_settings",
                              label: g.intl.string(g.t.y59NJm),
                              checked: !i.inherited && u === o.N9.MENTIONS,
                              action: () => (0, a.gN)(n.guild_id, n.id, o.N9.MENTIONS),
                          }),
                          (0, e.jsx)(l.iD, {
                              id: "cns_nothing",
                              group: "channel_notification_settings",
                              label: g.intl.string(g.t["pGn/bJ"]),
                              checked: !i.inherited && u === o.N9.NOTHING,
                              action: () => (0, a.gN)(n.guild_id, n.id, o.N9.NOTHING),
                          }),
                      ],
                  }),
              ],
          });
}
