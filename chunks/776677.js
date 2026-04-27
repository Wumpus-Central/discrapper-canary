"use strict";
r.d(t, { A: () => h, o: () => m });
var n,
    i = r(723702),
    a = r(170148),
    s = r(454292),
    l = r(550151),
    o = r(206589),
    c = r(125017),
    d = r(833349),
    u = r(287613),
    _ = r(874546),
    p = r(702631),
    f = r(652215),
    m = (((n = {}).CAN_JOIN = "can_join"), (n.CANNOT_JOIN = "cannot_join"), (n.JOINED = "joined"), n);
function h(e) {
    let t,
        r,
        {
            user: n,
            activity: m,
            application: h,
            channelId: g,
            currentUser: b,
            isEmbedded: A,
            ChannelStore: E,
            GuildStore: v,
            GuildMemberCountStore: y,
            RelationshipStore: I,
            SelectedChannelStore: S,
            VoiceStateStore: x,
            PermissionStore: T,
            LocalActivityStore: C,
            SelfPresenceStore: R,
            EmbeddedActivitiesStore: N,
        } = e;
    if (
        (!A && null != (t = (0, s.A)(C, R, m?.application_id)) && (0, o.w)(t, m)) ||
        (A && null != (r = N.getCurrentEmbeddedActivity()) && r.applicationId === m?.application_id)
    )
        return "joined";
    if (null == n) return "cannot_join";
    if (A && null != g)
        return (0, l.Ay)({
            userId: n.id,
            activity: m,
            channelId: g,
            currentUser: b,
            application: h,
            isActivitiesEnabledForCurrentPlatform: (0, a.A)(),
            ChannelStore: E,
            VoiceStateStore: x,
            PermissionStore: T,
            GuildStore: v,
        }) === l.Gy.CAN_JOIN
            ? "can_join"
            : "cannot_join";
    if (
        (A && null == g && !(0, d.A)(m, f.jUm.CONTEXTLESS)) ||
        (!A && (!(0, _.Ay)(m) || !(0, i.platformSupportsActivityJoin)()))
    )
        return "cannot_join";
    let L = (0, c._)(m);
    if (!(0, u.A)(L) || (0, p.U)(L)) return "cannot_join";
    if ((0, d.A)(m, f.jUm.PARTY_PRIVACY_FRIENDS) && I.isFriend(n.id)) return "can_join";
    if ((0, d.A)(m, f.jUm.PARTY_PRIVACY_VOICE_CHANNEL)) {
        let e = E.getChannel(S.getVoiceChannelId());
        if (null == e || !x.isInChannel(e.id, n.id)) return "cannot_join";
        switch (e.type) {
            case f.rbe.DM:
            case f.rbe.GROUP_DM:
                return "can_join";
        }
        let t = v.getGuild(e.getGuildId());
        if (null == t || t.features.has(f.GuildFeatures.COMMUNITY)) return "cannot_join";
        let r = y.getMemberCount(t.id);
        if (null != r && r < 100) return "can_join";
    }
    return "cannot_join";
}
