"use strict";
n.d(t, { A: () => E, o: () => m });
var r = n(723702),
    i = n(170148),
    s = n(454292),
    a = n(550151),
    o = n(206589),
    l = n(125017),
    u = n(833349),
    c = n(287613),
    d = n(874546),
    _ = n(702631),
    f = n(652215);
function p(e, t, n) {
    let r = (0, s.A)(e, t, n?.application_id);
    return null != r && (0, o.w)(r, n);
}
function h(e, t) {
    let n = e.getCurrentEmbeddedActivity();
    return null != n && n.applicationId === t?.application_id;
}
var m = (function (e) {
    return (e.CAN_JOIN = "can_join"), (e.CANNOT_JOIN = "cannot_join"), (e.JOINED = "joined"), e;
})({});
function E(e) {
    let {
        user: t,
        activity: n,
        application: s,
        channelId: o,
        currentUser: m,
        isEmbedded: E,
        ChannelStore: g,
        GuildStore: A,
        GuildMemberCountStore: I,
        RelationshipStore: T,
        SelectedChannelStore: S,
        VoiceStateStore: y,
        PermissionStore: v,
        LocalActivityStore: N,
        SelfPresenceStore: C,
        EmbeddedActivitiesStore: R,
    } = e;
    if ((!E && p(N, C, n)) || (E && h(R, n))) return "joined";
    if (null == t) return "cannot_join";
    if (E && null != o)
        return (0, a.Ay)({
            userId: t.id,
            activity: n,
            channelId: o,
            currentUser: m,
            application: s,
            isActivitiesEnabledForCurrentPlatform: (0, i.A)(),
            ChannelStore: g,
            VoiceStateStore: y,
            PermissionStore: v,
            GuildStore: A,
        }) === a.Gy.CAN_JOIN
            ? "can_join"
            : "cannot_join";
    if (
        (E && null == o && !(0, u.A)(n, f.jUm.CONTEXTLESS)) ||
        (!E && (!(0, d.A)(n) || !(0, r.platformSupportsActivityJoin)()))
    )
        return "cannot_join";
    let O = (0, l._)(n);
    if (!(0, c.A)(O) || (0, _.U)(O)) return "cannot_join";
    if ((0, u.A)(n, f.jUm.PARTY_PRIVACY_FRIENDS) && T.isFriend(t.id)) return "can_join";
    if ((0, u.A)(n, f.jUm.PARTY_PRIVACY_VOICE_CHANNEL)) {
        let e = g.getChannel(S.getVoiceChannelId());
        if (null == e || !y.isInChannel(e.id, t.id)) return "cannot_join";
        switch (e.type) {
            case f.rbe.DM:
            case f.rbe.GROUP_DM:
                return "can_join";
        }
        let n = A.getGuild(e.getGuildId());
        if (null == n || n.features.has(f.GuildFeatures.COMMUNITY)) return "cannot_join";
        let r = I.getMemberCount(n.id);
        if (null != r && r < 100) return "can_join";
    }
    return "cannot_join";
}
