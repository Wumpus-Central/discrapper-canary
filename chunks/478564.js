"use strict";
n.d(t, { A: () => u });
var i = n(64700),
    s = n(735438),
    l = n.n(s),
    r = n(311907),
    a = n(568598),
    o = n(313961),
    c = n(501838),
    d = n(806931);
function u(e) {
    let { channelId: t } = e,
        [n] = (0, r.bG)(
            [o.A],
            () => (null != t ? [o.A.getParticipants(t), o.A.getParticipantsVersion(t)] : [[], 0]),
            [t],
            a.hS,
        ),
        s = i.useMemo(() => l().uniq(n.filter((e) => (0, d.Xw)(e) || (0, d.Ay)(e)).map((e) => e.user.id)), [n]),
        u = (0, c.gT)({ userIds: s });
    return (0, c.hJ)() || u;
}
