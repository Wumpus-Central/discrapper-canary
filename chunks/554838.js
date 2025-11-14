n.d(t, {
    J: () => u,
    Z: () => d,
});
var i = n(111810),
    r = n(55935),
    l = n(70956),
    a = n(709054),
    o = n(901461),
    s = n(981631);
let c = 7 * l.Z.Millis.MINUTE;
function u(e, t, n) {
    return (
        null == t ||
        (t.type === s.ys_.MESSAGE && t.content.id === t.content.channel_id) ||
        (t.type !== s.ys_.MESSAGE && t.type !== s.ys_.THREAD_STARTER_MESSAGE) ||
        d(e, t.content, n)
    );
}
function d(e, t, n) {
    if (n.hasFlag(s.iLy.HAS_THREAD) || n.isCommandType()) return !0;
    if (n.type > s.uaV.DEFAULT) return !(0, o.Z)(t) || n.type === s.uaV.REPLY;
    if (
        (0, o.Z)(t) ||
        t.author.id !== n.author.id ||
        t.hasFlag(s.iLy.EPHEMERAL) !== n.hasFlag(s.iLy.EPHEMERAL) ||
        (null != n.webhookId && t.author.username !== n.author.username) ||
        ((null == e ? void 0 : e.isForumPost()) && t.id === a.default.castChannelIdAsMessageId(e.id)) ||
        !(0, r.KC)(t.timestamp, n.timestamp) ||
        !(0, r._w)(t.timestamp, n.timestamp, c) ||
        (n.hasFlag(s.iLy.SUPPRESS_NOTIFICATIONS) && !t.hasFlag(s.iLy.SUPPRESS_NOTIFICATIONS)) ||
        (t.hasFlag(s.iLy.SUPPRESS_NOTIFICATIONS) &&
            !n.hasFlag(s.iLy.SUPPRESS_NOTIFICATIONS) &&
            (n.mentions.length > 0 || n.mentionRoles.length > 0 || n.mentionEveryone))
    )
        return !0;
    let l = i.HZ.getCurrentConfig({ location: "isNewMessageGroup" }, { autoTrackExposure: !1 }).canSeeConfetti;
    return (!!n.hasPotions() && !!l) || n.applicationId !== t.applicationId;
}
