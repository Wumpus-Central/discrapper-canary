n.d(t, { Z: () => c });
var r = n(442837),
    i = n(131704),
    l = n(592125),
    a = n(430824),
    s = n(944486),
    o = n(981631);
function c(e, t) {
    return (0, r.e7)([l.Z, a.Z, s.Z], () => {
        let n = a.Z.getGuild(t);
        if (!((null == n ? void 0 : n.features.has(o.oNc.WELCOME_SCREEN_ENABLED)) === !0 && n.features.has(o.oNc.COMMUNITY)) || n.features.has(o.oNc.GUILD_SERVER_GUIDE)) return !1;
        let r = l.Z.getChannel(e);
        return e === s.Z.getChannelId(t) && null != r && r.getGuildId() === n.id && (0, i.zi)(r.type);
    });
}
