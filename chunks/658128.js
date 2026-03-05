"use strict";
n.d(t, { W: () => c });
var r = n(713125),
    i = n(473529),
    s = n(871123),
    a = n(734057),
    o = n(808728),
    l = n(309010),
    u = n(746080);
function c(e) {
    let t = l.A.getChannelId(e),
        n = o.Ay.getDefaultChannel(e)?.id;
    return (t !== u.VV.GUILD_ONBOARDING || r.Ay.shouldShowOnboarding(e)) && (t !== u.VV.GUILD_HOME || (0, i.K)(e))
        ? t === u.VV.GAME_SHOP && (0, s.Ye)(e)
            ? t
            : null == a.A.getChannel(t)
              ? n
              : t
        : n;
}
