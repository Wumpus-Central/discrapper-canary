n.d(t, { Ay: () => o, lI: () => s }), n(17928);
var i = n(734057),
    l = n(576705),
    a = n(309010),
    r = n(652215);
function s() {
    let e = a.A.getVoiceChannelId();
    return o(i.A.getChannel(e));
}
function o(e) {
    if (null == e) return !1;
    if (r.kvI.CALLABLE.has(e.type)) return !0;
    let t = l.A.can(r.xBc.USE_SOUNDBOARD, e),
        n = l.A.can(r.xBc.SPEAK, e);
    return e.isGuildVoiceOrThread() && t && n;
}
