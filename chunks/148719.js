"use strict";
n.d(t, { A: () => o });
var r = n(136722),
    i = n(95701),
    a = n(488926),
    s = n(818348);
function o(e) {
    if (null == e) return !1;
    let { type: t } = e;
    if (null == e.guild_id || !i.JT.has(t)) return !1;
    if (e.isGuildVocal() && !a.MJ(s.xB.CONNECT, e)) return !0;
    let n = e.permissionOverwrites[e.guild_id];
    return null != n && r.zy(n.deny, s.xB.VIEW_CHANNEL);
}
