"use strict";
n.d(t, { A: () => l });
var i = n(734057),
    r = n(576705),
    s = n(287809),
    a = n(927578);
n(980504);
var o = n(818348);
function l(e, t, n) {
    let l = i.A.getChannel(n);
    if (e?.guildId === "0" || e?.guildId === l?.guild_id || e?.guildId === t) return !0;
    let u = a.Ay.canUseSoundboardEverywhere(s.default.getCurrentUser());
    return (null == l || null == l.guild_id || r.A.can(o.xB.USE_EXTERNAL_SOUNDS, l)) && u;
}
