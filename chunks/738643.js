n.d(t, {
    Z: function () {
        return c;
    }
});
var i = n(442837),
    l = n(131704),
    r = n(592125),
    a = n(430824),
    s = n(944486),
    o = n(981631);
function c(e, t) {
    return (0, i.e7)([r.Z, a.Z, s.Z], () => {
        let n = a.Z.getGuild(t);
        if (!((null == n ? void 0 : n.hasFeature(o.oNc.WELCOME_SCREEN_ENABLED)) === !0 && n.hasFeature(o.oNc.COMMUNITY)) || n.hasFeature(o.oNc.GUILD_SERVER_GUIDE)) return !1;
        let i = r.Z.getChannel(e);
        return e === s.Z.getChannelId(t) && null != i && i.getGuildId() === n.id && (0, l.zi)(i.type);
    });
}
