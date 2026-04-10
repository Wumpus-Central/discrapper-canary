"use strict";
n.d(t, { A: () => _ });
var i = n(627968);
n(64700);
var r = n(311907),
    s = n(397927),
    l = n(793574),
    a = n(73028),
    c = n(734057),
    o = n(763754),
    u = n(888675),
    d = n(985018);
function _(e) {
    let { message: t, usernameHook: n, compact: _, isForumPost: E } = e,
        A = (0, o.Ay)(t),
        m = n(A),
        I = (0, r.bG)([c.A], () => c.A.getChannel(t.channel_id)?.isGroupDM() ?? !1);
    return (0, i.jsx)(u.A, {
        compact: _,
        iconNode: (0, i.jsx)(s.R2l, { size: "xs", color: "currentColor" }),
        timestamp: t.timestamp,
        children: I
            ? d.intl.format("" === t.content ? d.t.AI1ZZr : d.t.geP3rU, {
                  username: A.nick,
                  usernameHook: m,
                  channelName: (0, i.jsx)(
                      s.Text,
                      { tag: "span", variant: "text-md/medium", color: "text-strong", children: t.content },
                      `group-name-${t.id}`,
                  ),
                  editGroupButton: (0, i.jsx)(
                      s.Text,
                      {
                          tag: "span",
                          variant: "text-md/medium",
                          color: "text-link",
                          children: d.intl.string(d.t["5Q9+/L"]),
                      },
                      `edit-group-button-${t.id}`,
                  ),
                  onEditGroup: () => (0, a.U)(t.channel_id, l.A.GROUP_DM_SYSTEM_MESSAGE_NAME),
              })
            : d.intl.format(E ? d.t.SOQ4hJ : d.t.oItgEw, { username: A.nick, usernameHook: m, channelName: t.content }),
    });
}
