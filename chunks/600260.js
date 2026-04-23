"use strict";
n.d(t, { A: () => o });
var l = n(417597),
    a = n(734057),
    s = n(696451),
    i = n(317525),
    r = n(370480);
function o(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
        o = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        c = (0, l.bG)([s.Ay], () => (null != e ? s.Ay.getMember(e.id, t) : null), [e, t]),
        u = (0, l.bG)([a.A], () => a.A.getChannel(n), [n]),
        d = (0, l.bG)([a.A], () => a.A.getChannel(u?.parent_id), [u]),
        m = (0, l.bG)([i.A], () => (null != e ? i.A.getSortedRoles(e.id) : void 0));
    return null == e || null == m || null == c
        ? null
        : (0, r._g)({
              guild: e,
              sortedGuildRoles: m,
              guildMember: c,
              channel: null != u && u.isThread() && null != d ? d : u,
              onlyChannelConnectionRoles: o,
          });
}
