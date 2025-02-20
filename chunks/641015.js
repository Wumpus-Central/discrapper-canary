n.d(t, {
    D: () => s,
    Z: () => l
});
var r = n(592125),
    i = n(496675),
    o = n(944486),
    a = n(981631);
function s() {
    let e = o.Z.getVoiceChannelId();
    return l(r.Z.getChannel(e));
}
function l(e) {
    if (null == e) return !1;
    if (a.TPd.CALLABLE.has(e.type)) return !0;
    let t = i.Z.can(a.Plq.USE_SOUNDBOARD, e),
        n = i.Z.can(a.Plq.SPEAK, e);
    return e.type === a.d4z.GUILD_VOICE && t && n;
}
