n.d(t, {
    J: () => c,
    Z: () => u,
});
var r = n(55935),
    i = n(70956),
    l = n(709054),
    a = n(901461),
    o = n(981631);
let s = 7 * i.Z.Millis.MINUTE;
function c(e, t, n) {
    return (
        null == t ||
        (t.type === o.ys_.MESSAGE && t.content.id === t.content.channel_id) ||
        (t.type !== o.ys_.MESSAGE && t.type !== o.ys_.THREAD_STARTER_MESSAGE) ||
        u(e, t.content, n)
    );
}
function u(e, t, n) {
    return (
        !!(n.hasFlag(o.iLy.HAS_THREAD) || n.isCommandType()) ||
        (n.type > o.uaV.DEFAULT
            ? !(0, a.Z)(t) || n.type === o.uaV.REPLY
            : !!(
                  (0, a.Z)(t) ||
                  t.author.id !== n.author.id ||
                  t.hasFlag(o.iLy.EPHEMERAL) !== n.hasFlag(o.iLy.EPHEMERAL) ||
                  (null != n.webhookId && t.author.username !== n.author.username) ||
                  ((null == e ? void 0 : e.isForumPost()) && t.id === l.default.castChannelIdAsMessageId(e.id)) ||
                  !(0, r.KC)(t.timestamp, n.timestamp) ||
                  !(0, r._w)(t.timestamp, n.timestamp, s) ||
                  (n.hasFlag(o.iLy.SUPPRESS_NOTIFICATIONS) && !t.hasFlag(o.iLy.SUPPRESS_NOTIFICATIONS)) ||
                  (t.hasFlag(o.iLy.SUPPRESS_NOTIFICATIONS) &&
                      !n.hasFlag(o.iLy.SUPPRESS_NOTIFICATIONS) &&
                      (n.mentions.length > 0 || n.mentionRoles.length > 0 || n.mentionEveryone))
              ) || n.applicationId !== t.applicationId)
    );
}
