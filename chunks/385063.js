n.d(t, { Z: () => m });
var r = n(200651);
n(192379);
var i = n(442837),
    a = n(481060),
    l = n(641360),
    o = n(769409),
    s = n(592125),
    c = n(739566),
    u = n(834129),
    d = n(388032),
    p = n(677972);
function m(e) {
    let { message: t, usernameHook: a, compact: l, isForumPost: o } = e,
        m = (0, c.ZP)(t),
        h = a(m);
    return (0, i.e7)([s.Z], () => {
        var e, n;
        return null != (n = null == (e = s.Z.getChannel(t.channel_id)) ? void 0 : e.isGroupDM()) && n;
    })
        ? (0, r.jsx)(f, {
              message: t,
              usernameHook: a,
              compact: l,
              isForumPost: o
          })
        : (0, r.jsx)(u.Z, {
              compact: l,
              className: p.channelNameChange,
              icon: n(819373),
              timestamp: t.timestamp,
              children: d.NW.format(o ? d.t.SOQ4hI : d.t.oItgEx, {
                  username: m.nick,
                  usernameHook: h,
                  channelName: t.content
              })
          });
}
function f(e) {
    let { message: t, usernameHook: i, compact: s } = e,
        m = (0, c.ZP)(t),
        f = i(m),
        h = (0, l.I3)('GdmNameChangeSystemMessage');
    return (0, r.jsx)(u.Z, {
        compact: s,
        className: p.channelNameChange,
        icon: n(819373),
        timestamp: t.timestamp,
        children: h
            ? d.NW.format(d.t['fxI+pq'], {
                  username: m.nick,
                  usernameHook: f,
                  channelName: t.content,
                  editGroupButton: (0, r.jsx)(a.Text, {
                      tag: 'span',
                      variant: 'text-md/semibold',
                      color: 'text-link',
                      children: d.NW.string(d.t['5Q9+/P'])
                  }),
                  onEditGroup: () => (0, o.B)(t.channel_id)
              })
            : d.NW.format(d.t.oItgEx, {
                  username: m.nick,
                  usernameHook: f,
                  channelName: t.content
              })
    });
}
