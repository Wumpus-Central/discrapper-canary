"use strict";
n.d(t, { W: () => c });
var i = n(713125),
    r = n(473529),
    s = n(871123),
    a = n(734057),
    o = n(808728),
    l = n(309010);
n(567761), n(652215);
var u = n(746080);
function c(e) {
    let t = l.A.getChannelId(e),
        n = o.Ay.getDefaultChannel(e)?.id ?? void 0;
    return (t !== u.VV.GUILD_ONBOARDING || i.Ay.shouldShowOnboarding(e)) && (t !== u.VV.GUILD_HOME || (0, r.K)(e))
        ? t === u.VV.GAME_SHOP && (0, s.Ye)(e)
            ? t
            : null == a.A.getChannel(t)
              ? n
              : t
        : n;
}
