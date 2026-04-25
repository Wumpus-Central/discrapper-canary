"use strict";
n.d(t, { A: () => f, o: () => h });
var a,
    r = n(723702),
    i = n(170148),
    l = n(454292),
    s = n(550151),
    o = n(206589),
    c = n(125017),
    d = n(833349),
    u = n(287613),
    _ = n(874546),
    p = n(702631),
    m = n(652215),
    h = (((a = {}).CAN_JOIN = "can_join"), (a.CANNOT_JOIN = "cannot_join"), (a.JOINED = "joined"), a);
function f(e) {
    let t,
        n,
        {
            user: a,
            activity: h,
            application: f,
            channelId: g,
            currentUser: b,
            isEmbedded: v,
            ChannelStore: A,
            GuildStore: x,
            GuildMemberCountStore: E,
            RelationshipStore: T,
            SelectedChannelStore: S,
            VoiceStateStore: C,
            PermissionStore: I,
            LocalActivityStore: y,
            SelfPresenceStore: N,
            EmbeddedActivitiesStore: R,
        } = e;
    if (
        (!v && null != (t = (0, l.A)(y, N, h?.application_id)) && (0, o.w)(t, h)) ||
        (v && null != (n = R.getCurrentEmbeddedActivity()) && n.applicationId === h?.application_id)
    )
        return "joined";
    if (null == a) return "cannot_join";
    if (v && null != g)
        return (0, s.Ay)({
            userId: a.id,
            activity: h,
            channelId: g,
            currentUser: b,
            application: f,
            isActivitiesEnabledForCurrentPlatform: (0, i.A)(),
            ChannelStore: A,
            VoiceStateStore: C,
            PermissionStore: I,
            GuildStore: x,
        }) === s.Gy.CAN_JOIN
            ? "can_join"
            : "cannot_join";
    if (
        (v && null == g && !(0, d.A)(h, m.jUm.CONTEXTLESS)) ||
        (!v && (!(0, _.Ay)(h) || !(0, r.platformSupportsActivityJoin)()))
    )
        return "cannot_join";
    let j = (0, c._)(h);
    if (!(0, u.A)(j) || (0, p.U)(j)) return "cannot_join";
    if ((0, d.A)(h, m.jUm.PARTY_PRIVACY_FRIENDS) && T.isFriend(a.id)) return "can_join";
    if ((0, d.A)(h, m.jUm.PARTY_PRIVACY_VOICE_CHANNEL)) {
        let e = A.getChannel(S.getVoiceChannelId());
        if (null == e || !C.isInChannel(e.id, a.id)) return "cannot_join";
        switch (e.type) {
            case m.rbe.DM:
            case m.rbe.GROUP_DM:
                return "can_join";
        }
        let t = x.getGuild(e.getGuildId());
        if (null == t || t.features.has(m.GuildFeatures.COMMUNITY)) return "cannot_join";
        let n = E.getMemberCount(t.id);
        if (null != n && n < 100) return "can_join";
    }
    return "cannot_join";
}
