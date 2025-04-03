n.d(t, {
    J: () => d,
    Z: () => p
});
var r = n(111810),
    i = n(55935),
    a = n(70956),
    l = n(709054),
    o = n(463396),
    s = n(901461),
    c = n(981631);
let u = 7 * a.Z.Millis.MINUTE;
function d(e, t, n) {
    return null == t || (t.type === c.ys_.MESSAGE && t.content.id === t.content.channel_id) || (t.type !== c.ys_.MESSAGE && t.type !== c.ys_.THREAD_STARTER_MESSAGE) || p(e, t.content, n);
}
function p(e, t, n) {
    if (n.hasFlag(c.iLy.HAS_THREAD) || n.isCommandType()) return !0;
    if (n.type > c.uaV.DEFAULT) return !(0, s.Z)(t) || n.type === c.uaV.REPLY;
    if ((0, s.Z)(t) || t.author.id !== n.author.id || t.hasFlag(c.iLy.EPHEMERAL) !== n.hasFlag(c.iLy.EPHEMERAL) || (null != n.webhookId && t.author.username !== n.author.username) || ((null == e ? void 0 : e.isForumPost()) && t.id === l.default.castChannelIdAsMessageId(e.id)) || !(0, i._w)(t.timestamp, n.timestamp, u) || (n.hasFlag(c.iLy.SUPPRESS_NOTIFICATIONS) && !t.hasFlag(c.iLy.SUPPRESS_NOTIFICATIONS)) || (t.hasFlag(c.iLy.SUPPRESS_NOTIFICATIONS) && !n.hasFlag(c.iLy.SUPPRESS_NOTIFICATIONS) && (n.mentions.length > 0 || n.mentionRoles.length > 0 || n.mentionEveryone)) || (0, o.f)(n)) return !0;
    let a = r.HZ.getCurrentConfig({ location: 'isNewMessageGroup' }, { autoTrackExposure: !1 }).canSeeConfetti;
    return (!!n.hasPotions() && !!a) || n.applicationId !== t.applicationId;
}
