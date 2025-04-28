n.d(t, { Z: () => c });
var r = n(442837),
    i = n(131704),
    l = n(592125),
    o = n(430824),
    a = n(944486),
    s = n(981631);
function c(e, t) {
    return (0, r.e7)([l.Z, o.Z, a.Z], () => {
        let n = o.Z.getGuild(t);
        if (!((null == n ? void 0 : n.hasFeature(s.oNc.WELCOME_SCREEN_ENABLED)) === !0 && n.hasFeature(s.oNc.COMMUNITY)) || n.hasFeature(s.oNc.GUILD_SERVER_GUIDE)) return !1;
        let r = l.Z.getChannel(e);
        return e === a.Z.getChannelId(t) && null != r && r.getGuildId() === n.id && (0, i.zi)(r.type);
    });
}
