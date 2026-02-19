"use strict";
n.d(t, { A: () => A });
var i = n(64700),
    s = n(735438),
    l = n.n(s),
    r = n(311907),
    a = n(568598),
    o = n(313961),
    c = n(916023),
    d = n(501838),
    u = n(188275),
    h = n(806931);
function A(e) {
    let { location: t, channelId: n } = e,
        s = (0, c.kt)({ location: t }),
        [A] = (0, r.bG)(
            [o.A],
            () => (null != n ? [o.A.getParticipants(n), o.A.getParticipantsVersion(n)] : [[], 0]),
            [n],
            a.hS,
        ),
        p = i.useMemo(() => l().uniq(A.filter((e) => (0, h.Xw)(e) || (0, h.Ay)(e)).map((e) => e.user.id)), [A]),
        g = (0, d.gT)({ gameIds: u.sQ, userIds: p }),
        m = (0, d.hJ)({ gameIds: u.sQ });
    return s && (m || g);
}
