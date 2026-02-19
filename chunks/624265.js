"use strict";
n.d(t, { Ay: () => d }), n(321073);
var i = n(311907),
    s = n(734057),
    l = n(576705),
    r = n(403362),
    a = n(661191),
    o = n(233993),
    c = n(446600);
function d(e) {
    var t;
    let n;
    return (
        (t = (0, i.yK)([c.A], () => a.default.keys(c.A.getStageInstancesByGuild(e)), [e])),
        (n = (0, i.yK)([s.A], () => t.map((e) => s.A.getChannel(e)).filter(r.Vq), [t])),
        (0, i.yK)([l.A], () => n.filter((e) => l.A.can(o.Gk, e)), [n])
    );
}
