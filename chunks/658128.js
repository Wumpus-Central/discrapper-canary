n.d(t, { W: () => A });
var i = n(181079),
    r = n(5180),
    a = n(713125),
    s = n(473529),
    l = n(470452),
    o = n(871123),
    d = n(734057),
    c = n(808728),
    u = n(71393),
    _ = n(309010);
n(645959), n(652215);
var E = n(746080);
function A(e) {
    let t = _.Ay.getChannelId(e),
        n = c.Ay.getDefaultChannel(e)?.id ?? void 0;
    if ((t === E.VV.GUILD_ONBOARDING && !a.Ay.shouldShowOnboarding(e)) || (t === E.VV.GUILD_HOME && !(0, s.K)(e)))
        return n;
    if (t === E.VV.GUILD_SPACE) return (0, l.tT)(u.A.getGuild(e), "getChannelIdForGuildTransition") ? t : n;
    if (t === E.VV.GAME_SHOP && (0, o.Ye)(e)) return t;
    let A = d.A.getChannel(t);
    return null == A || ((0, r.ai)(e) && !i.A.isChannelOrParentFavorited(A)) ? n : t;
}
