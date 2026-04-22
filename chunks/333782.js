"use strict";
n.d(t, { A: () => E });
var i = n(627968);
n(64700);
var r = n(311907),
    l = n(22231),
    s = n(834730),
    a = n(793574),
    o = n(73028),
    c = n(734057),
    u = n(763754),
    d = n(888675),
    _ = n(985018);
function E(e) {
    let { message: t, usernameHook: n, compact: E, isForumPost: A } = e,
        m = (0, u.Ay)(t),
        I = n(m),
        T = (0, r.bG)([c.A], () => c.A.getChannel(t.channel_id)?.isGroupDM() ?? !1);
    return (0, i.jsx)(d.A, {
        compact: E,
        iconNode: (0, i.jsx)(l.R, { size: "xs", color: "currentColor" }),
        timestamp: t.timestamp,
        children: T
            ? _.intl.format("" === t.content ? _.t.AI1ZZr : _.t.geP3rU, {
                  username: m.nick,
                  usernameHook: I,
                  channelName: (0, i.jsx)(
                      s.E,
                      { tag: "span", variant: "text-md/medium", color: "text-strong", children: t.content },
                      `group-name-${t.id}`,
                  ),
                  editGroupButton: (0, i.jsx)(
                      s.E,
                      {
                          tag: "span",
                          variant: "text-md/medium",
                          color: "text-link",
                          children: _.intl.string(_.t["5Q9+/L"]),
                      },
                      `edit-group-button-${t.id}`,
                  ),
                  onEditGroup: () => (0, o.U)(t.channel_id, a.A.GROUP_DM_SYSTEM_MESSAGE_NAME),
              })
            : _.intl.format(A ? _.t.SOQ4hJ : _.t.oItgEw, { username: m.nick, usernameHook: I, channelName: t.content }),
    });
}
