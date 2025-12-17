n.d(t, { ZP: () => u }), n(539854), n(388685);
var r = n(442837),
    i = n(592125),
    l = n(496675),
    a = n(823379),
    o = n(709054),
    s = n(146085),
    c = n(427679);
function u(e) {
    var t = (0, r.Wu)([c.Z], () => o.default.keys(c.Z.getStageInstancesByGuild(e)), [e]);
    let n = (0, r.Wu)([i.Z], () => t.map((e) => i.Z.getChannel(e)).filter(a.lm), [t]);
    return (0, r.Wu)([l.Z], () => n.filter((e) => l.Z.can(s.gl, e)), [n]);
}
