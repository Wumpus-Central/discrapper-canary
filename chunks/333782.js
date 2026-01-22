n.d(t, { A: () => f });
var r = n(627968);
n(64700);
var i = n(311907),
    a = n(397927),
    s = n(793574),
    o = n(73028),
    l = n(734057),
    c = n(763754),
    u = n(888675),
    d = n(985018);
function f(e) {
    let { message: t, usernameHook: n, compact: f, isForumPost: p } = e,
        _ = (0, c.Ay)(t),
        h = n(_),
        m = (0, i.bG)([l.A], () => {
            var e, n;
            return null != (e = null == (n = l.A.getChannel(t.channel_id)) ? void 0 : n.isGroupDM()) && e;
        });
    return (0, r.jsx)(u.A, {
        compact: f,
        iconNode: (0, r.jsx)(a.R2l, {
            size: "xs",
            color: "currentColor",
        }),
        timestamp: t.timestamp,
        children: m
            ? d.intl.format("" === t.content ? d.t.AI1ZZr : d.t.geP3rU, {
                  username: _.nick,
                  usernameHook: h,
                  channelName: (0, r.jsx)(
                      a.Text,
                      {
                          tag: "span",
                          variant: "text-md/medium",
                          color: "text-strong",
                          children: t.content,
                      },
                      "group-name-".concat(t.id),
                  ),
                  editGroupButton: (0, r.jsx)(
                      a.Text,
                      {
                          tag: "span",
                          variant: "text-md/medium",
                          color: "text-link",
                          children: d.intl.string(d.t["5Q9+/L"]),
                      },
                      "edit-group-button-".concat(t.id),
                  ),
                  onEditGroup: () => (0, o.U)(t.channel_id, s.A.GROUP_DM_SYSTEM_MESSAGE_NAME),
              })
            : d.intl.format(p ? d.t.SOQ4hJ : d.t.oItgEw, {
                  username: _.nick,
                  usernameHook: h,
                  channelName: t.content,
              }),
    });
}
