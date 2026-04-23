"use strict";
n.d(t, { A: () => E, o: () => h });
var r,
    i = n(723702),
    s = n(170148),
    a = n(454292),
    o = n(550151),
    l = n(206589),
    u = n(125017),
    c = n(833349),
    d = n(287613),
    _ = n(874546),
    f = n(702631),
    p = n(652215),
    h = (((r = {}).CAN_JOIN = "can_join"), (r.CANNOT_JOIN = "cannot_join"), (r.JOINED = "joined"), r);
function E(e) {
    let t,
        n,
        {
            user: r,
            activity: h,
            application: E,
            channelId: m,
            currentUser: g,
            isEmbedded: A,
            ChannelStore: I,
            GuildStore: T,
            GuildMemberCountStore: S,
            RelationshipStore: y,
            SelectedChannelStore: N,
            VoiceStateStore: v,
            PermissionStore: C,
            LocalActivityStore: O,
            SelfPresenceStore: R,
            EmbeddedActivitiesStore: b,
        } = e;
    if (
        (!A && null != (t = (0, a.A)(O, R, h?.application_id)) && (0, l.w)(t, h)) ||
        (A && null != (n = b.getCurrentEmbeddedActivity()) && n.applicationId === h?.application_id)
    )
        return "joined";
    if (null == r) return "cannot_join";
    if (A && null != m)
        return (0, o.Ay)({
            userId: r.id,
            activity: h,
            channelId: m,
            currentUser: g,
            application: E,
            isActivitiesEnabledForCurrentPlatform: (0, s.A)(),
            ChannelStore: I,
            VoiceStateStore: v,
            PermissionStore: C,
            GuildStore: T,
        }) === o.Gy.CAN_JOIN
            ? "can_join"
            : "cannot_join";
    if (
        (A && null == m && !(0, c.A)(h, p.jUm.CONTEXTLESS)) ||
        (!A && (!(0, _.Ay)(h) || !(0, i.platformSupportsActivityJoin)()))
    )
        return "cannot_join";
    let D = (0, u._)(h);
    if (!(0, d.A)(D) || (0, f.U)(D)) return "cannot_join";
    if ((0, c.A)(h, p.jUm.PARTY_PRIVACY_FRIENDS) && y.isFriend(r.id)) return "can_join";
    if ((0, c.A)(h, p.jUm.PARTY_PRIVACY_VOICE_CHANNEL)) {
        let e = I.getChannel(N.getVoiceChannelId());
        if (null == e || !v.isInChannel(e.id, r.id)) return "cannot_join";
        switch (e.type) {
            case p.rbe.DM:
            case p.rbe.GROUP_DM:
                return "can_join";
        }
        let t = T.getGuild(e.getGuildId());
        if (null == t || t.features.has(p.GuildFeatures.COMMUNITY)) return "cannot_join";
        let n = S.getMemberCount(t.id);
        if (null != n && n < 100) return "can_join";
    }
    return "cannot_join";
}
