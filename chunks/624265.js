"use strict";
n.d(t, { Ay: () => c }), n(321073);
var i = n(17928),
    r = n(734057),
    s = n(576705),
    a = n(403362),
    o = n(935208),
    l = n(233993),
    u = n(446600);
function c(e) {
    var t;
    let n;
    return (
        (t = (0, i.yK)([u.A], () => o.default.keys(u.A.getStageInstancesByGuild(e)), [e])),
        (n = (0, i.yK)([r.A], () => t.map((e) => r.A.getChannel(e)).filter(a.Vq), [t])),
        (0, i.yK)([s.A], () => n.filter((e) => s.A.can(l.Gk, e)), [n])
    );
}
