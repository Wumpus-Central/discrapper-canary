"use strict";
n.d(t, { Ay: () => l, lI: () => o }), n(311907);
var r = n(734057),
    i = n(576705),
    s = n(309010),
    a = n(652215);
function o() {
    let e = s.A.getVoiceChannelId();
    return l(r.A.getChannel(e));
}
function l(e) {
    if (null == e) return !1;
    if (a.kvI.CALLABLE.has(e.type)) return !0;
    let t = i.A.can(a.xBc.USE_SOUNDBOARD, e),
        n = i.A.can(a.xBc.SPEAK, e);
    return e.isGuildVoiceOrThread() && t && n;
}
