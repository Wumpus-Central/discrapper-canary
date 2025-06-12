n.d(t, { Z: () => l });
var r = n(358085),
    i = n(790920),
    a = n(527805),
    o = n(620662),
    s = n(981631);
function l(e) {
    let { user: t, activity: n, application: l, channelId: c, currentUser: u, isEmbedded: d, ChannelStore: _, GuildStore: f, GuildMemberCountStore: p, RelationshipStore: h, SelectedChannelStore: m, VoiceStateStore: g, PermissionStore: E } = e,
        b = (0, i.a)();
    if (null == t) return !1;
    if (d && null != c)
        return (
            (0, a.ZP)({
                userId: t.id,
                activity: n,
                channelId: c,
                currentUser: u,
                application: l,
                isActivitiesEnabledForCurrentPlatform: b,
                ChannelStore: _,
                VoiceStateStore: g,
                PermissionStore: E,
                GuildStore: f
            }) === a.Fw.CAN_JOIN
        );
    if ((d && null == c && !(0, o.Z)(n, s.xjy.CONTEXTLESS)) || (!(0, r.isDesktop)() && !d)) return !1;
    if ((0, o.Z)(n, s.xjy.PARTY_PRIVACY_FRIENDS) && h.isFriend(t.id)) return !0;
    if ((0, o.Z)(n, s.xjy.PARTY_PRIVACY_VOICE_CHANNEL)) {
        let e = _.getChannel(m.getVoiceChannelId());
        if (null == e || !g.isInChannel(e.id, t.id)) return !1;
        switch (e.type) {
            case s.d4z.DM:
            case s.d4z.GROUP_DM:
                return !0;
        }
        let n = f.getGuild(e.getGuildId());
        if (null == n || n.hasFeature(s.oNc.COMMUNITY)) return !1;
        let r = p.getMemberCount(n.id);
        return null != r && r < 100;
    }
    return !1;
}
