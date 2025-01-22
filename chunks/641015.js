r.d(n, {
    D: function () {
        return l;
    },
    Z: function () {
        return u;
    }
});
var i = r(592125),
    a = r(496675),
    o = r(944486),
    s = r(981631);
function l() {
    let e = o.Z.getVoiceChannelId();
    return u(i.Z.getChannel(e));
}
function u(e) {
    if (null == e) return !1;
    if (s.TPd.CALLABLE.has(e.type)) return !0;
    let n = a.Z.can(s.Plq.USE_SOUNDBOARD, e),
        r = a.Z.can(s.Plq.SPEAK, e);
    return e.type === s.d4z.GUILD_VOICE && n && r;
}
