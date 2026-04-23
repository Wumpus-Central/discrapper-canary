"use strict";
n.d(t, { A: () => g, o: () => h });
var a,
    i = n(723702),
    r = n(170148),
    l = n(454292),
    s = n(550151),
    d = n(206589),
    o = n(125017),
    c = n(833349),
    u = n(287613),
    _ = n(874546),
    m = n(702631),
    p = n(652215),
    h = (((a = {}).CAN_JOIN = "can_join"), (a.CANNOT_JOIN = "cannot_join"), (a.JOINED = "joined"), a);
function g(e) {
    let t,
        n,
        {
            user: a,
            activity: h,
            application: g,
            channelId: f,
            currentUser: b,
            isEmbedded: A,
            ChannelStore: x,
            GuildStore: v,
            GuildMemberCountStore: E,
            RelationshipStore: I,
            SelectedChannelStore: T,
            VoiceStateStore: S,
            PermissionStore: N,
            LocalActivityStore: C,
            SelfPresenceStore: y,
            EmbeddedActivitiesStore: j,
        } = e;
    if (
        (!A && null != (t = (0, l.A)(C, y, h?.application_id)) && (0, d.w)(t, h)) ||
        (A && null != (n = j.getCurrentEmbeddedActivity()) && n.applicationId === h?.application_id)
    )
        return "joined";
    if (null == a) return "cannot_join";
    if (A && null != f)
        return (0, s.Ay)({
            userId: a.id,
            activity: h,
            channelId: f,
            currentUser: b,
            application: g,
            isActivitiesEnabledForCurrentPlatform: (0, r.A)(),
            ChannelStore: x,
            VoiceStateStore: S,
            PermissionStore: N,
            GuildStore: v,
        }) === s.Gy.CAN_JOIN
            ? "can_join"
            : "cannot_join";
    if (
        (A && null == f && !(0, c.A)(h, p.jUm.CONTEXTLESS)) ||
        (!A && (!(0, _.Ay)(h) || !(0, i.platformSupportsActivityJoin)()))
    )
        return "cannot_join";
    let w = (0, o._)(h);
    if (!(0, u.A)(w) || (0, m.U)(w)) return "cannot_join";
    if ((0, c.A)(h, p.jUm.PARTY_PRIVACY_FRIENDS) && I.isFriend(a.id)) return "can_join";
    if ((0, c.A)(h, p.jUm.PARTY_PRIVACY_VOICE_CHANNEL)) {
        let e = x.getChannel(T.getVoiceChannelId());
        if (null == e || !S.isInChannel(e.id, a.id)) return "cannot_join";
        switch (e.type) {
            case p.rbe.DM:
            case p.rbe.GROUP_DM:
                return "can_join";
        }
        let t = v.getGuild(e.getGuildId());
        if (null == t || t.features.has(p.GuildFeatures.COMMUNITY)) return "cannot_join";
        let n = E.getMemberCount(t.id);
        if (null != n && n < 100) return "can_join";
    }
    return "cannot_join";
}
