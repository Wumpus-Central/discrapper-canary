"use strict";
n.d(t, { A: () => h });
var i = n(64700),
    s = n(735438),
    l = n.n(s),
    r = n(311907),
    a = n(568598),
    o = n(313961),
    c = n(501838),
    d = n(188275),
    u = n(806931);
function h(e) {
    let { channelId: t } = e,
        [n] = (0, r.bG)(
            [o.A],
            () => (null != t ? [o.A.getParticipants(t), o.A.getParticipantsVersion(t)] : [[], 0]),
            [t],
            a.hS,
        ),
        s = i.useMemo(() => l().uniq(n.filter((e) => (0, u.Xw)(e) || (0, u.Ay)(e)).map((e) => e.user.id)), [n]),
        h = (0, c.gT)({ gameIds: d.sQ, userIds: s });
    return (0, c.hJ)({ gameIds: d.sQ }) || h;
}
