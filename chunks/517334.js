r.d(n, {
    ZP: function () {
        return _;
    }
});
var i = r(724458);
var a = r(653041);
var o = r(47120);
var s = r(442837),
    l = r(592125),
    u = r(496675),
    c = r(823379),
    d = r(709054),
    f = r(146085),
    p = r(427679);
function h(e) {
    let n = (0, s.Wu)([l.Z], () => e.map((e) => l.Z.getChannel(e)).filter(c.lm), [e]);
    return (0, s.Wu)([u.Z], () => n.filter((e) => u.Z.can(f.gl, e)), [n]);
}
function _(e) {
    return h((0, s.Wu)([p.Z], () => d.default.keys(p.Z.getStageInstancesByGuild(e)), [e]));
}
