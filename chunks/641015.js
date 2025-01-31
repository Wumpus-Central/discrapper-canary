n.d(t, {
    D: () => o,
    Z: () => l
});
var i = n(592125),
    r = n(496675),
    a = n(944486),
    s = n(981631);
function o() {
    let e = a.Z.getVoiceChannelId();
    return l(i.Z.getChannel(e));
}
function l(e) {
    if (null == e) return !1;
    if (s.TPd.CALLABLE.has(e.type)) return !0;
    let t = r.Z.can(s.Plq.USE_SOUNDBOARD, e),
        n = r.Z.can(s.Plq.SPEAK, e);
    return e.type === s.d4z.GUILD_VOICE && t && n;
}
