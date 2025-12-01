n.d(t, { Z: () => f });
var r = n(54381);
n(473749);
var i = n(442837),
    a = n(481060),
    o = n(100527),
    s = n(769409),
    l = n(592125),
    c = n(739566),
    u = n(834129),
    d = n(388032);
function f(e) {
    let { message: t, usernameHook: n, compact: f, isForumPost: p } = e,
        _ = (0, c.ZP)(t),
        m = n(_),
        h = (0, i.e7)([l.Z], () => {
            var e, n;
            return null != (n = null == (e = l.Z.getChannel(t.channel_id)) ? void 0 : e.isGroupDM()) && n;
        });
    return (0, r.jsx)(u.Z, {
        compact: f,
        iconNode: (0, r.jsx)(a.vdY, {
            size: "xs",
            color: "currentColor",
        }),
        timestamp: t.timestamp,
        children: h
            ? d.intl.format("" === t.content ? d.t.AI1ZZr : d.t.geP3rU, {
                  username: _.nick,
                  usernameHook: m,
                  channelName: (0, r.jsx)(
                      a.Text,
                      {
                          tag: "span",
                          variant: "text-md/medium",
                          color: "text-primary",
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
                  onEditGroup: () => (0, s.B)(t.channel_id, o.Z.GROUP_DM_SYSTEM_MESSAGE_NAME),
              })
            : d.intl.format(p ? d.t.SOQ4hJ : d.t.oItgEw, {
                  username: _.nick,
                  usernameHook: m,
                  channelName: t.content,
              }),
    });
}
