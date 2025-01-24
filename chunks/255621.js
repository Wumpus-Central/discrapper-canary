r.d(n, {
    Z: function () {
        return u;
    }
});
var i = r(358085),
    a = r(782769),
    o = r(527805),
    s = r(620662),
    l = r(981631);
function u(e) {
    let { user: n, activity: r, application: u, channelId: c, currentUser: d, isEmbedded: f, ChannelStore: p, GuildStore: h, GuildMemberCountStore: _, RelationshipStore: m, SelectedChannelStore: g, VoiceStateStore: E, PermissionStore: v } = e,
        y = p.getChannel(c),
        b = (0, a.a)(y);
    if (null == n) return !1;
    if (f && null != c)
        return (
            (0, o.ZP)({
                userId: n.id,
                activity: r,
                channelId: c,
                currentUser: d,
                application: u,
                isActivitiesEnabledForCurrentPlatform: b,
                ChannelStore: p,
                VoiceStateStore: E,
                PermissionStore: v,
                GuildStore: h
            }) === o.Fw.CAN_JOIN
        );
    if (!(0, i.isDesktop)() && !f) return !1;
    if ((0, s.Z)(r, l.xjy.PARTY_PRIVACY_FRIENDS) && m.isFriend(n.id)) return !0;
    if ((0, s.Z)(r, l.xjy.PARTY_PRIVACY_VOICE_CHANNEL)) {
        let e = p.getChannel(g.getVoiceChannelId());
        if (null == e || !E.isInChannel(e.id, n.id)) return !1;
        switch (e.type) {
            case l.d4z.DM:
            case l.d4z.GROUP_DM:
                return !0;
        }
        let r = h.getGuild(e.getGuildId());
        if (null == r || r.hasFeature(l.oNc.COMMUNITY)) return !1;
        let i = _.getMemberCount(r.id);
        return null != i && i < 100;
    }
    return !1;
}
