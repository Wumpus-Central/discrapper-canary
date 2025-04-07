n.d(t, { Z: () => u });
var r = n(200651);
n(192379);
var i = n(481060),
    a = n(641360),
    l = n(769409),
    o = n(739566),
    s = n(834129),
    c = n(388032);
function u(e) {
    let { message: t, usernameHook: u, compact: d } = e,
        p = (0, o.ZP)(t),
        m = u(p),
        f = (0, a.I3)('GdmNameChangeSystemMessage');
    return (0, r.jsx)(s.Z, {
        icon: n(819373),
        timestamp: t.timestamp,
        compact: d,
        children: f
            ? c.NW.format(c.t['4wLp29'], {
                  username: p.nick,
                  usernameHook: m,
                  editGroupButton: (0, r.jsx)(i.Text, {
                      tag: 'span',
                      variant: 'text-md/semibold',
                      color: 'text-link',
                      children: c.NW.string(c.t['5Q9+/P'])
                  }),
                  onEditGroup: () => (0, l.B)(t.channel_id)
              })
            : c.NW.format(c.t.OEdU6e, {
                  username: p.nick,
                  usernameHook: m
              })
    });
}
