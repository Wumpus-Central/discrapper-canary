"use strict";
n.d(t, { A: () => o });
var i = n(136722),
    r = n(95701),
    s = n(488926),
    a = n(818348);
function o(e) {
    if (null == e) return !1;
    let { type: t } = e;
    if (null == e.guild_id || !r.JT.has(t)) return !1;
    if (e.isGuildVocal() && !s.MJ(a.xB.CONNECT, e)) return !0;
    let n = e.permissionOverwrites[e.guild_id];
    return null != n && i.zy(n.deny, a.xB.VIEW_CHANNEL);
}
