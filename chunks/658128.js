n.d(t, { W: () => h });
var i = n(181079),
    r = n(5180),
    a = n(713125),
    s = n(473529),
    l = n(313627),
    o = n(871123),
    d = n(683180),
    c = n(734057),
    u = n(808728),
    _ = n(71393),
    E = n(309010);
(n(645959), n(652215));
var A = n(746080);
function h(e) {
    let t = E.Ay.getChannelId(e),
        n = u.Ay.getDefaultChannel(e)?.id ?? void 0;
    if ((t === A.VV.GUILD_ONBOARDING && !a.Ay.shouldShowOnboarding(e)) || (t === A.VV.GUILD_HOME && !(0, s.K)(e)))
        return n;
    if (t === A.VV.GUILD_SPACE) return (0, l.tT)(_.A.getGuild(e), "getChannelIdForGuildTransition") ? t : n;
    if (t === A.VV.GAME_SHOP && (0, o.Ye)(e)) return t;
    if (t === A.VV.VIBEGRATIONS) {
        let i = _.A.getGuild(e);
        return null != i && (0, d.G2)(i, "getChannelIdForGuildTransition") ? t : n;
    }
    let h = c.A.getChannel(t);
    return null == h || ((0, r.ai)(e) && !i.A.isChannelOrParentFavorited(h)) ? n : t;
}
