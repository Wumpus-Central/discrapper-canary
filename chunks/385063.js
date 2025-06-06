n.d(t, { Z: () => f });
var r = n(255367);
n(73800);
var i = n(442837),
    l = n(481060),
    a = n(100527),
    o = n(641360),
    s = n(769409),
    c = n(592125),
    u = n(739566),
    d = n(834129),
    p = n(388032),
    m = n(677972);
function f(e) {
    let { message: t, usernameHook: l, compact: a, isForumPost: o } = e,
        s = (0, u.ZP)(t),
        f = l(s);
    return (0, i.e7)([c.Z], () => {
        var e, n;
        return null != (n = null == (e = c.Z.getChannel(t.channel_id)) ? void 0 : e.isGroupDM()) && n;
    })
        ? (0, r.jsx)(h, {
              message: t,
              usernameHook: l,
              compact: a,
              isForumPost: o
          })
        : (0, r.jsx)(d.Z, {
              compact: a,
              className: m.channelNameChange,
              icon: n(819373),
              timestamp: t.timestamp,
              children: p.intl.format(o ? p.t.SOQ4hI : p.t.oItgEx, {
                  username: s.nick,
                  usernameHook: f,
                  channelName: t.content
              })
          });
}
function h(e) {
    let { message: t, usernameHook: i, compact: c } = e,
        f = (0, u.ZP)(t),
        h = i(f),
        g = (0, o.I3)('GdmNameChangeSystemMessage', t.channel_id),
        _ = '' === t.content ? p.t.AI1ZZm : p.t.geP3ra;
    return (0, r.jsx)(d.Z, {
        compact: c,
        className: m.channelNameChange,
        icon: n(819373),
        timestamp: t.timestamp,
        children: g
            ? p.intl.format(_, {
                  username: f.nick,
                  usernameHook: h,
                  channelName: t.content,
                  editGroupButton: (0, r.jsx)(
                      l.Text,
                      {
                          tag: 'span',
                          variant: 'text-md/medium',
                          color: 'text-link',
                          children: p.intl.string(p.t['5Q9+/P'])
                      },
                      'edit-group-button-'.concat(t.id)
                  ),
                  onEditGroup: () => (0, s.B)(t.channel_id, a.Z.GROUP_DM_SYSTEM_MESSAGE_NAME)
              })
            : p.intl.format(p.t.oItgEx, {
                  username: f.nick,
                  usernameHook: h,
                  channelName: t.content
              })
    });
}
