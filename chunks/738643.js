n.d(t, { Z: () => c });
var i = n(442837),
    l = n(131704),
    a = n(592125),
    r = n(430824),
    s = n(944486),
    o = n(981631);
function c(e, t) {
    return (0, i.e7)([a.Z, r.Z, s.Z], () => {
        let n = r.Z.getGuild(t);
        if (!((null == n ? void 0 : n.hasFeature(o.oNc.WELCOME_SCREEN_ENABLED)) === !0 && n.hasFeature(o.oNc.COMMUNITY)) || n.hasFeature(o.oNc.GUILD_SERVER_GUIDE)) return !1;
        let i = a.Z.getChannel(e);
        return e === s.Z.getChannelId(t) && null != i && i.getGuildId() === n.id && (0, l.zi)(i.type);
    });
}
