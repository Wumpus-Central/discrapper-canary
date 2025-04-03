n.d(t, { Z: () => p });
var r = n(200651);
n(192379);
var i = n(442837),
    a = n(641360),
    l = n(769409),
    o = n(592125),
    s = n(739566),
    c = n(834129),
    u = n(388032),
    d = n(677972);
function p(e) {
    let { message: t, usernameHook: a, compact: l, isForumPost: p } = e,
        f = (0, s.ZP)(t),
        h = a(f);
    return (0, i.e7)([o.Z], () => {
        var e, n;
        return null != (n = null == (e = o.Z.getChannel(t.channel_id)) ? void 0 : e.isGroupDM()) && n;
    })
        ? (0, r.jsx)(m, {
              message: t,
              usernameHook: a,
              compact: l,
              isForumPost: p
          })
        : (0, r.jsx)(c.Z, {
              compact: l,
              className: d.channelNameChange,
              icon: n(819373),
              timestamp: t.timestamp,
              children: u.NW.format(p ? u.t.SOQ4hI : u.t.oItgEx, {
                  username: f.nick,
                  usernameHook: h,
                  channelName: t.content
              })
          });
}
function m(e) {
    let { message: t, usernameHook: i, compact: o } = e,
        p = (0, s.ZP)(t),
        m = i(p),
        f = (0, a.I3)('GdmNameChangeSystemMessage');
    return (0, r.jsx)(c.Z, {
        compact: o,
        className: d.channelNameChange,
        icon: n(819373),
        timestamp: t.timestamp,
        children: f
            ? u.NW.format(u.t['fxI+pq'], {
                  username: p.nick,
                  usernameHook: m,
                  channelName: t.content,
                  onEditGroup: () => (0, l.B)(t.channel_id)
              })
            : u.NW.format(u.t.oItgEx, {
                  username: p.nick,
                  usernameHook: m,
                  channelName: t.content
              })
    });
}
