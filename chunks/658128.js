"use strict";
n.d(t, { W: () => _ });
var i = n(713125),
    r = n(473529),
    a = n(470452),
    s = n(871123),
    l = n(734057),
    o = n(808728),
    d = n(71393),
    c = n(309010);
n(645959), n(652215);
var u = n(746080);
function _(e) {
    let t = c.Ay.getChannelId(e),
        n = o.Ay.getDefaultChannel(e)?.id ?? void 0;
    return (t !== u.VV.GUILD_ONBOARDING || i.Ay.shouldShowOnboarding(e)) && (t !== u.VV.GUILD_HOME || (0, r.K)(e))
        ? t === u.VV.GUILD_SPACE
            ? (0, a.tT)(d.A.getGuild(e), "getChannelIdForGuildTransition")
                ? t
                : n
            : t === u.VV.GAME_SHOP && (0, s.Ye)(e)
              ? t
              : null == l.A.getChannel(t)
                ? n
                : t
        : n;
}
