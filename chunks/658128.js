"use strict";
n.d(t, { W: () => c });
var i = n(713125),
    r = n(473529),
    a = n(871123),
    s = n(734057),
    l = n(808728),
    o = n(309010);
n(645959), n(652215);
var d = n(746080);
function c(e) {
    let t = o.Ay.getChannelId(e),
        n = l.Ay.getDefaultChannel(e)?.id ?? void 0;
    return (t !== d.VV.GUILD_ONBOARDING || i.Ay.shouldShowOnboarding(e)) && (t !== d.VV.GUILD_HOME || (0, r.K)(e))
        ? t === d.VV.GAME_SHOP && (0, a.Ye)(e)
            ? t
            : null == s.A.getChannel(t)
              ? n
              : t
        : n;
}
