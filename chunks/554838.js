n.d(t, {
    J: () => u,
    Z: () => m
});
var i = n(111810),
    l = n(55935),
    a = n(70956),
    r = n(709054),
    s = n(463396),
    o = n(901461),
    c = n(981631);
let d = 7 * a.Z.Millis.MINUTE;
function u(e, t, n) {
    return null == t || (t.type === c.ys_.MESSAGE && t.content.id === t.content.channel_id) || (t.type !== c.ys_.MESSAGE && t.type !== c.ys_.THREAD_STARTER_MESSAGE) || m(e, t.content, n);
}
function m(e, t, n) {
    if (n.hasFlag(c.iLy.HAS_THREAD) || n.isCommandType()) return !0;
    if (n.type > c.uaV.DEFAULT) return !(0, o.Z)(t) || n.type === c.uaV.REPLY;
    if ((0, o.Z)(t) || t.author.id !== n.author.id || t.hasFlag(c.iLy.EPHEMERAL) !== n.hasFlag(c.iLy.EPHEMERAL) || (null != n.webhookId && t.author.username !== n.author.username) || ((null == e ? void 0 : e.isForumPost()) && t.id === r.default.castChannelIdAsMessageId(e.id)) || !(0, l._w)(t.timestamp, n.timestamp, d) || (n.hasFlag(c.iLy.SUPPRESS_NOTIFICATIONS) && !t.hasFlag(c.iLy.SUPPRESS_NOTIFICATIONS)) || (t.hasFlag(c.iLy.SUPPRESS_NOTIFICATIONS) && !n.hasFlag(c.iLy.SUPPRESS_NOTIFICATIONS) && (n.mentions.length > 0 || n.mentionRoles.length > 0 || n.mentionEveryone)) || (0, s.f)(n)) return !0;
    let a = i.HZ.getCurrentConfig({ location: 'isNewMessageGroup' }, { autoTrackExposure: !1 }).canSeeConfetti;
    return (!!n.hasPotions() && !!a) || n.applicationId !== t.applicationId;
}
