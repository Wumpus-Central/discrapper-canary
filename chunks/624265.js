n.d(t, {
    Ay: () => u,
}),
    n(321073),
    n(896048);
var r = n(311907),
    l = n(734057),
    i = n(576705),
    a = n(403362),
    s = n(661191),
    o = n(233993),
    c = n(446600);

function u(e) {
    var t;
    let n;
    return (
        (t = (0, r.yK)([c.A], () => s.default.keys(c.A.getStageInstancesByGuild(e)), [e])),
        (n = (0, r.yK)([l.A], () => t.map((e) => l.A.getChannel(e)).filter(a.Vq), [t])),
        (0, r.yK)([i.A], () => n.filter((e) => i.A.can(o.Gk, e)), [n])
    );
}
