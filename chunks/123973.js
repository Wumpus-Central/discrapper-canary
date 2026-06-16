"use strict";
n.d(t, { Ay: () => l, lI: () => o }), n(17928);
var i = n(734057),
    r = n(576705),
    s = n(309010),
    a = n(652215);
function o() {
    let e = s.A.getVoiceChannelId();
    return l(i.A.getChannel(e));
}
function l(e) {
    if (null == e) return !1;
    if (a.kvI.CALLABLE.has(e.type)) return !0;
    let t = r.A.can(a.xBc.USE_SOUNDBOARD, e),
        n = r.A.can(a.xBc.SPEAK, e);
    return e.isGuildVoiceOrThread() && t && n;
}
