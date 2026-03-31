"use strict";
n.d(t, { A: () => h, o: () => p });
var r = n(723702),
    i = n(170148),
    s = n(550151),
    a = n(206589),
    o = n(125017),
    l = n(833349),
    u = n(287613),
    c = n(702631),
    d = n(652215);
function _(e, t, n) {
    let r = e.getApplicationActivity(n?.application_id ?? "") ?? t.getApplicationActivity(n?.application_id ?? "", !0);
    return null != r && (0, a.w)(r, n);
}
function f(e, t) {
    let n = e.getCurrentEmbeddedActivity();
    return null != n && n.applicationId === t?.application_id;
}
var p = (function (e) {
    return (e.CAN_JOIN = "can_join"), (e.CANNOT_JOIN = "cannot_join"), (e.JOINED = "joined"), e;
})({});
function h(e) {
    let {
        user: t,
        activity: n,
        application: a,
        channelId: p,
        currentUser: h,
        isEmbedded: m,
        ChannelStore: E,
        GuildStore: g,
        GuildMemberCountStore: A,
        RelationshipStore: I,
        SelectedChannelStore: T,
        VoiceStateStore: S,
        PermissionStore: y,
        LocalActivityStore: v,
        SelfPresenceStore: N,
        EmbeddedActivitiesStore: C,
    } = e;
    if ((!m && _(v, N, n)) || (m && f(C, n))) return "joined";
    if (null == t) return "cannot_join";
    if (m && null != p)
        return (0, s.Ay)({
            userId: t.id,
            activity: n,
            channelId: p,
            currentUser: h,
            application: a,
            isActivitiesEnabledForCurrentPlatform: (0, i.A)(),
            ChannelStore: E,
            VoiceStateStore: S,
            PermissionStore: y,
            GuildStore: g,
        }) === s.Gy.CAN_JOIN
            ? "can_join"
            : "cannot_join";
    if ((m && null == p && !(0, l.A)(n, d.jUm.CONTEXTLESS)) || (!(0, r.platformSupportsActivityJoin)() && !m))
        return "cannot_join";
    let R = (0, o._)(n);
    if (!(0, u.A)(R) || (0, c.U)(R)) return "cannot_join";
    if ((0, l.A)(n, d.jUm.PARTY_PRIVACY_FRIENDS) && I.isFriend(t.id)) return "can_join";
    if ((0, l.A)(n, d.jUm.PARTY_PRIVACY_VOICE_CHANNEL)) {
        let e = E.getChannel(T.getVoiceChannelId());
        if (null == e || !S.isInChannel(e.id, t.id)) return "cannot_join";
        switch (e.type) {
            case d.rbe.DM:
            case d.rbe.GROUP_DM:
                return "can_join";
        }
        let n = g.getGuild(e.getGuildId());
        if (null == n || n.features.has(d.GuildFeatures.COMMUNITY)) return "cannot_join";
        let r = A.getMemberCount(n.id);
        if (null != r && r < 100) return "can_join";
    }
    return "cannot_join";
}
