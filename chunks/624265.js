n.d(t, { Ay: () => c }), n(321073);
var i = n(17928),
    l = n(734057),
    s = n(576705),
    r = n(403362),
    a = n(935208),
    o = n(233993),
    d = n(446600);
function c(e) {
    var t;
    let n;
    return (
        (t = (0, i.yK)([d.A], () => a.default.keys(d.A.getStageInstancesByGuild(e)), [e])),
        (n = (0, i.yK)([l.A], () => t.map((e) => l.A.getChannel(e)).filter(r.Vq), [t])),
        (0, i.yK)([s.A], () => n.filter((e) => s.A.can(o.Gk, e)), [n])
    );
}
