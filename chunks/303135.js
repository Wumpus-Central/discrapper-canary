n.d(t, { Z: () => d });
var r = n(200651);
n(192379);
var i = n(481060),
    a = n(100527),
    l = n(641360),
    o = n(769409),
    s = n(739566),
    c = n(834129),
    u = n(388032);
function d(e) {
    let { message: t, usernameHook: d, compact: p } = e,
        m = (0, s.ZP)(t),
        f = d(m),
        h = (0, l.I3)('GdmNameChangeSystemMessage', t.channel_id);
    return (0, r.jsx)(c.Z, {
        icon: n(819373),
        timestamp: t.timestamp,
        compact: p,
        children: h
            ? u.NW.format(u.t['4wLp29'], {
                  username: m.nick,
                  usernameHook: f,
                  editGroupButton: (0, r.jsx)(
                      i.Text,
                      {
                          tag: 'span',
                          variant: 'text-md/medium',
                          color: 'text-link',
                          children: u.NW.string(u.t['5Q9+/P'])
                      },
                      'edit-group-button-'.concat(t.id)
                  ),
                  onEditGroup: () => (0, o.B)(t.channel_id, a.Z.GROUP_DM_SYSTEM_MESSAGE_ICON)
              })
            : u.NW.format(u.t.OEdU6e, {
                  username: m.nick,
                  usernameHook: f
              })
    });
}
