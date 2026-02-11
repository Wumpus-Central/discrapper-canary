"use strict";
n.d(t, { $F: () => c, Ay: () => u, lI: () => l });
var r = n(311907),
    i = n(734057),
    a = n(576705),
    s = n(309010),
    o = n(652215);
function l() {
    let e = s.A.getVoiceChannelId();
    return u(i.A.getChannel(e));
}
function u(e) {
    if (null == e) return !1;
    if (o.kvI.CALLABLE.has(e.type)) return !0;
    let t = a.A.can(o.xBc.USE_SOUNDBOARD, e),
        n = a.A.can(o.xBc.SPEAK, e);
    return e.isGuildVoiceOrThread() && t && n;
}
function c(e) {
    return (0, r.bG)([a.A], () => u(e), [e]);
}
