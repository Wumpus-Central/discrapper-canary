n.d(t, { Ay: () => o, lI: () => s }), n(17928);
var i = n(734057),
    r = n(576705),
    l = n(309010),
    a = n(652215);
function s() {
    let e = l.A.getVoiceChannelId();
    return o(i.A.getChannel(e));
}
function o(e) {
    if (null == e) return !1;
    if (a.kvI.CALLABLE.has(e.type)) return !0;
    let t = r.A.can(a.xBc.USE_SOUNDBOARD, e),
        n = r.A.can(a.xBc.SPEAK, e);
    return e.isGuildVoiceOrThread() && t && n;
}
