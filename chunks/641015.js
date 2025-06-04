n.d(t, {
    D: () => s,
    Z: () => l
});
var r = n(592125),
    i = n(496675),
    a = n(944486),
    o = n(981631);
function s() {
    let e = a.Z.getVoiceChannelId();
    return l(r.Z.getChannel(e));
}
function l(e) {
    if (null == e) return !1;
    if (o.TPd.CALLABLE.has(e.type)) return !0;
    let t = i.Z.can(o.Plq.USE_SOUNDBOARD, e),
        n = i.Z.can(o.Plq.SPEAK, e);
    return e.type === o.d4z.GUILD_VOICE && t && n;
}
