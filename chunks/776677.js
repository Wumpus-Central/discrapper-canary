"use strict";
n.d(t, { A: () => h, o: () => m });
var r,
    a = n(723702),
    i = n(170148),
    l = n(454292),
    s = n(550151),
    o = n(206589),
    c = n(125017),
    d = n(833349),
    u = n(287613),
    _ = n(874546),
    p = n(702631),
    f = n(652215),
    m = (((r = {}).CAN_JOIN = "can_join"), (r.CANNOT_JOIN = "cannot_join"), (r.JOINED = "joined"), r);
function h(e) {
    let t,
        n,
        {
            user: r,
            activity: m,
            application: h,
            channelId: g,
            currentUser: b,
            isEmbedded: A,
            ChannelStore: E,
            GuildStore: v,
            GuildMemberCountStore: I,
            RelationshipStore: y,
            SelectedChannelStore: x,
            VoiceStateStore: S,
            PermissionStore: T,
            LocalActivityStore: C,
            SelfPresenceStore: N,
            EmbeddedActivitiesStore: R,
        } = e;
    if (
        (!A && null != (t = (0, l.A)(C, N, m?.application_id)) && (0, o.w)(t, m)) ||
        (A && null != (n = R.getCurrentEmbeddedActivity()) && n.applicationId === m?.application_id)
    )
        return "joined";
    if (null == r) return "cannot_join";
    if (A && null != g)
        return (0, s.Ay)({
            userId: r.id,
            activity: m,
            channelId: g,
            currentUser: b,
            application: h,
            isActivitiesEnabledForCurrentPlatform: (0, i.A)(),
            ChannelStore: E,
            VoiceStateStore: S,
            PermissionStore: T,
            GuildStore: v,
        }) === s.Gy.CAN_JOIN
            ? "can_join"
            : "cannot_join";
    if (
        (A && null == g && !(0, d.A)(m, f.jUm.CONTEXTLESS)) ||
        (!A && (!(0, _.Ay)(m) || !(0, a.platformSupportsActivityJoin)()))
    )
        return "cannot_join";
    let w = (0, c._)(m);
    if (!(0, u.A)(w) || (0, p.U)(w)) return "cannot_join";
    if ((0, d.A)(m, f.jUm.PARTY_PRIVACY_FRIENDS) && y.isFriend(r.id)) return "can_join";
    if ((0, d.A)(m, f.jUm.PARTY_PRIVACY_VOICE_CHANNEL)) {
        let e = E.getChannel(x.getVoiceChannelId());
        if (null == e || !S.isInChannel(e.id, r.id)) return "cannot_join";
        switch (e.type) {
            case f.rbe.DM:
            case f.rbe.GROUP_DM:
                return "can_join";
        }
        let t = v.getGuild(e.getGuildId());
        if (null == t || t.features.has(f.GuildFeatures.COMMUNITY)) return "cannot_join";
        let n = I.getMemberCount(t.id);
        if (null != n && n < 100) return "can_join";
    }
    return "cannot_join";
}
