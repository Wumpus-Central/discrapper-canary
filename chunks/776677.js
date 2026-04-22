"use strict";
a.d(t, { A: () => b, o: () => m });
var r,
    l = a(723702),
    n = a(170148),
    i = a(454292),
    s = a(550151),
    o = a(206589),
    d = a(125017),
    c = a(833349),
    u = a(287613),
    h = a(874546),
    p = a(702631),
    _ = a(652215),
    m = (((r = {}).CAN_JOIN = "can_join"), (r.CANNOT_JOIN = "cannot_join"), (r.JOINED = "joined"), r);
function b(e) {
    let t,
        a,
        {
            user: r,
            activity: m,
            application: b,
            channelId: g,
            currentUser: f,
            isEmbedded: x,
            ChannelStore: v,
            GuildStore: A,
            GuildMemberCountStore: E,
            RelationshipStore: y,
            SelectedChannelStore: j,
            VoiceStateStore: I,
            PermissionStore: S,
            LocalActivityStore: C,
            SelfPresenceStore: T,
            EmbeddedActivitiesStore: w,
        } = e;
    if (
        (!x && null != (t = (0, i.A)(C, T, m?.application_id)) && (0, o.w)(t, m)) ||
        (x && null != (a = w.getCurrentEmbeddedActivity()) && a.applicationId === m?.application_id)
    )
        return "joined";
    if (null == r) return "cannot_join";
    if (x && null != g)
        return (0, s.Ay)({
            userId: r.id,
            activity: m,
            channelId: g,
            currentUser: f,
            application: b,
            isActivitiesEnabledForCurrentPlatform: (0, n.A)(),
            ChannelStore: v,
            VoiceStateStore: I,
            PermissionStore: S,
            GuildStore: A,
        }) === s.Gy.CAN_JOIN
            ? "can_join"
            : "cannot_join";
    if (
        (x && null == g && !(0, c.A)(m, _.jUm.CONTEXTLESS)) ||
        (!x && (!(0, h.Ay)(m) || !(0, l.platformSupportsActivityJoin)()))
    )
        return "cannot_join";
    let R = (0, d._)(m);
    if (!(0, u.A)(R) || (0, p.U)(R)) return "cannot_join";
    if ((0, c.A)(m, _.jUm.PARTY_PRIVACY_FRIENDS) && y.isFriend(r.id)) return "can_join";
    if ((0, c.A)(m, _.jUm.PARTY_PRIVACY_VOICE_CHANNEL)) {
        let e = v.getChannel(j.getVoiceChannelId());
        if (null == e || !I.isInChannel(e.id, r.id)) return "cannot_join";
        switch (e.type) {
            case _.rbe.DM:
            case _.rbe.GROUP_DM:
                return "can_join";
        }
        let t = A.getGuild(e.getGuildId());
        if (null == t || t.features.has(_.GuildFeatures.COMMUNITY)) return "cannot_join";
        let a = E.getMemberCount(t.id);
        if (null != a && a < 100) return "can_join";
    }
    return "cannot_join";
}
