"use strict";
n.d(t, { Ay: () => o, lI: () => l }), n(17928);
var i = n(734057),
    r = n(576705),
    a = n(309010),
    s = n(652215);
function l() {
    let e = a.Ay.getVoiceChannelId();
    return o(i.A.getChannel(e));
}
function o(e) {
    if (null == e) return !1;
    if (s.kvI.CALLABLE.has(e.type)) return !0;
    let t = r.A.can(s.xBc.USE_SOUNDBOARD, e),
        n = r.A.can(s.xBc.SPEAK, e);
    return e.isGuildVoiceOrThread() && t && n;
}
