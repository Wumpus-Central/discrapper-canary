"use strict";
n.d(t, { A: () => E, o: () => p });
var i,
    r = n(723702),
    s = n(170148),
    a = n(454292),
    o = n(550151),
    l = n(206589),
    u = n(125017),
    c = n(55730),
    d = n(287613),
    _ = n(874546),
    h = n(702631),
    f = n(652215),
    p = (((i = {}).CAN_JOIN = "can_join"), (i.CANNOT_JOIN = "cannot_join"), (i.JOINED = "joined"), i);
function E(e) {
    let t,
        n,
        {
            user: i,
            activity: p,
            application: E,
            channelId: m,
            currentUser: g,
            isEmbedded: A,
            ChannelStore: I,
            GuildStore: T,
            GuildMemberCountStore: S,
            RelationshipStore: y,
            SelectedChannelStore: C,
            VoiceStateStore: N,
            PermissionStore: v,
            LocalActivityStore: R,
            SelfPresenceStore: O,
            EmbeddedActivitiesStore: b,
        } = e;
    if (
        (!A && null != (t = (0, a.A)(R, O, p?.application_id)) && (0, l.w)(t, p)) ||
        (A && null != (n = b.getCurrentEmbeddedActivity()) && n.applicationId === p?.application_id)
    )
        return "joined";
    if (null == i) return "cannot_join";
    if (A && null != m)
        return (0, o.Ay)({
            userId: i.id,
            activity: p,
            channelId: m,
            currentUser: g,
            application: E,
            isActivitiesEnabledForCurrentPlatform: (0, s.A)(),
            ChannelStore: I,
            VoiceStateStore: N,
            PermissionStore: v,
            GuildStore: T,
        }) === o.Gy.CAN_JOIN
            ? "can_join"
            : "cannot_join";
    if (
        (A && null == m && !(0, c.A)(p, f.jUm.CONTEXTLESS)) ||
        (!A && (!(0, _.Ay)(p) || !(0, r.platformSupportsActivityJoin)()))
    )
        return "cannot_join";
    let D = (0, u._)(p);
    if (!(0, d.A)(D) || (0, h.U)(D)) return "cannot_join";
    if ((0, c.A)(p, f.jUm.PARTY_PRIVACY_FRIENDS) && y.isFriend(i.id)) return "can_join";
    if ((0, c.A)(p, f.jUm.PARTY_PRIVACY_VOICE_CHANNEL)) {
        let e = I.getChannel(C.getVoiceChannelId());
        if (null == e || !N.isInChannel(e.id, i.id)) return "cannot_join";
        switch (e.type) {
            case f.rbe.DM:
            case f.rbe.GROUP_DM:
                return "can_join";
        }
        let t = T.getGuild(e.getGuildId());
        if (null == t || t.features.has(f.GuildFeatures.COMMUNITY)) return "cannot_join";
        let n = S.getMemberCount(t.id);
        if (null != n && n < 100) return "can_join";
    }
    return "cannot_join";
}
