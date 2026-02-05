n.d(t, { A: () => m });
var i = n(627968);
n(64700);
var l = n(311907),
    a = n(397927),
    r = n(793574),
    s = n(73028),
    o = n(734057),
    d = n(763754),
    c = n(888675),
    u = n(985018);
function m(e) {
    let { message: t, usernameHook: n, compact: m, isForumPost: _ } = e,
        h = (0, d.Ay)(t),
        p = n(h),
        g = (0, l.bG)([o.A], () => o.A.getChannel(t.channel_id)?.isGroupDM() ?? !1);
    return (0, i.jsx)(c.A, {
        compact: m,
        iconNode: (0, i.jsx)(a.R2l, { size: "xs", color: "currentColor" }),
        timestamp: t.timestamp,
        children: g
            ? u.intl.format("" === t.content ? u.t.AI1ZZr : u.t.geP3rU, {
                  username: h.nick,
                  usernameHook: p,
                  channelName: (0, i.jsx)(
                      a.Text,
                      { tag: "span", variant: "text-md/medium", color: "text-strong", children: t.content },
                      `group-name-${t.id}`,
                  ),
                  editGroupButton: (0, i.jsx)(
                      a.Text,
                      {
                          tag: "span",
                          variant: "text-md/medium",
                          color: "text-link",
                          children: u.intl.string(u.t["5Q9+/L"]),
                      },
                      `edit-group-button-${t.id}`,
                  ),
                  onEditGroup: () => (0, s.U)(t.channel_id, r.A.GROUP_DM_SYSTEM_MESSAGE_NAME),
              })
            : u.intl.format(_ ? u.t.SOQ4hJ : u.t.oItgEw, { username: h.nick, usernameHook: p, channelName: t.content }),
    });
}
