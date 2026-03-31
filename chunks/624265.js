n.d(t, { Ay: () => d }), n(321073);
var i = n(311907),
    l = n(734057),
    s = n(576705),
    a = n(403362),
    r = n(661191),
    o = n(233993),
    c = n(446600);
function d(e) {
    var t;
    let n;
    return (
        (t = (0, i.yK)([c.A], () => r.default.keys(c.A.getStageInstancesByGuild(e)), [e])),
        (n = (0, i.yK)([l.A], () => t.map((e) => l.A.getChannel(e)).filter(a.Vq), [t])),
        (0, i.yK)([s.A], () => n.filter((e) => s.A.can(o.Gk, e)), [n])
    );
}
