"use strict";
n.d(t, { A: () => l });
var r = n(417597),
    i = n(734057),
    a = n(696451),
    s = n(317525),
    o = n(370480);
function l(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
        l = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        u = (0, r.bG)([a.Ay], () => (null != e ? a.Ay.getMember(e.id, t) : null), [e, t]),
        c = (0, r.bG)([i.A], () => i.A.getChannel(n), [n]),
        d = (0, r.bG)([i.A], () => i.A.getChannel(c?.parent_id), [c]),
        _ = (0, r.bG)([s.A], () => (null != e ? s.A.getSortedRoles(e.id) : void 0));
    return null == e || null == _ || null == u
        ? null
        : (0, o._g)({
              guild: e,
              sortedGuildRoles: _,
              guildMember: u,
              channel: null != c && c.isThread() && null != d ? d : c,
              onlyChannelConnectionRoles: l,
          });
}
