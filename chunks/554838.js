n.d(t, {
    J: function () {
        return d;
    },
    Z: function () {
        return m;
    }
});
var i = n(111810),
    r = n(55935),
    l = n(70956),
    a = n(709054),
    o = n(463396),
    s = n(901461),
    c = n(981631);
let u = 7 * l.Z.Millis.MINUTE;
function d(e, t, n) {
    return null == t || (t.type === c.ys_.MESSAGE && t.content.id === t.content.channel_id) || (t.type !== c.ys_.MESSAGE && t.type !== c.ys_.THREAD_STARTER_MESSAGE) || m(e, t.content, n);
}
function m(e, t, n) {
    if (n.hasFlag(c.iLy.HAS_THREAD) || n.isCommandType()) return !0;
    if (n.type > c.uaV.DEFAULT) return !(0, s.Z)(t) || n.type === c.uaV.REPLY || !1;
    if ((0, s.Z)(t) || t.author.id !== n.author.id || t.hasFlag(c.iLy.EPHEMERAL) !== n.hasFlag(c.iLy.EPHEMERAL) || (null != n.webhookId && t.author.username !== n.author.username) || ((null == e ? void 0 : e.isForumPost()) && t.id === a.default.castChannelIdAsMessageId(e.id)) || !(0, r._w)(t.timestamp, n.timestamp, u) || (n.hasFlag(c.iLy.SUPPRESS_NOTIFICATIONS) && !t.hasFlag(c.iLy.SUPPRESS_NOTIFICATIONS)) || (t.hasFlag(c.iLy.SUPPRESS_NOTIFICATIONS) && !n.hasFlag(c.iLy.SUPPRESS_NOTIFICATIONS) && (n.mentions.length > 0 || n.mentionRoles.length > 0 || n.mentionEveryone)) || (0, o.f)(n)) return !0;
    let l = i.HZ.getCurrentConfig({ location: 'isNewMessageGroup' }, { autoTrackExposure: !1 }).canSeeConfetti;
    return (!!n.hasPotions() && !!l) || n.applicationId !== t.applicationId || !1;
}
