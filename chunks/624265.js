n.d(t, { Ay: () => c }), n(321073);
var i = n(17928),
    a = n(734057),
    r = n(576705),
    s = n(403362),
    l = n(935208),
    o = n(233993),
    d = n(446600);
function c(e) {
    var t;
    let n;
    return (
        (t = (0, i.yK)([d.A], () => l.default.keys(d.A.getStageInstancesByGuild(e)), [e])),
        (n = (0, i.yK)([a.A], () => t.map((e) => a.A.getChannel(e)).filter(s.Vq), [t])),
        (0, i.yK)([r.A], () => n.filter((e) => r.A.can(o.Gk, e)), [n])
    );
}
