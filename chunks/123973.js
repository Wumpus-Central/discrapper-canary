n.d(t, {
    A: () => l,
    l: () => o,
});
var r = n(734057),
    i = n(576705),
    a = n(309010),
    s = n(652215);
function o() {
    let e = a.A.getVoiceChannelId();
    return l(r.A.getChannel(e));
}
function l(e) {
    if (null == e) return !1;
    if (s.kvI.CALLABLE.has(e.type)) return !0;
    let t = i.A.can(s.xBc.USE_SOUNDBOARD, e),
        n = i.A.can(s.xBc.SPEAK, e);
    return e.isGuildVoiceOrThread() && t && n;
}
