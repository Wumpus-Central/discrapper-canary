"use strict";
n.d(t, { A: () => l });
var r = n(734057),
    i = n(576705),
    a = n(287809),
    s = n(927578);
n(980504);
var o = n(818348);
function l(e, t, n) {
    let l = r.A.getChannel(n);
    if (e?.guildId === "0" || e?.guildId === l?.guild_id || e?.guildId === t) return !0;
    let u = s.Ay.canUseSoundboardEverywhere(a.default.getCurrentUser());
    return (null == l || null == l.guild_id || i.A.can(o.xB.USE_EXTERNAL_SOUNDS, l)) && u;
}
