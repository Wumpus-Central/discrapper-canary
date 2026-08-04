t.d(a, { A: () => o }), t(321073);
var s = t(435558),
    d = t.n(s),
    l = t(334738),
    n = t(591552),
    r = t(695633),
    u = t(734057),
    p = t(808728),
    c = t(568548),
    h = t(174459),
    i = t(935208),
    A = t(652215),
    I = t(790782);
function o(e, a, t) {
    let s = d()
        .flatMap(e, (e) => {
            let a = p.Ay.getSelectableChannelIds(e),
                t = [...a, ...p.Ay.getVocalChannelIds(e)],
                s = r.A.getActiveJoinedThreadsForGuild(e);
            for (let e of a) {
                let a = s[e] ?? {};
                for (let e in a) t.push(e);
            }
            return t;
        })
        .map((e) => ({
            channelId: e,
            readStateType: I.P.CHANNEL,
            messageId: u.A.getChannel(e)?.isForumLikeChannel()
                ? i.default.fromTimestamp(Date.now())
                : c.Ay.lastMessageId(e),
        }));
    return (
        e.forEach((e) => {
            s.push({
                channelId: i.default.cast(e),
                readStateType: I.P.GUILD_EVENT,
                messageId: c.Ay.lastMessageId(e, I.P.GUILD_EVENT),
            }),
                s.push({
                    channelId: i.default.cast(e),
                    readStateType: I.P.GUILD_ONBOARDING_QUESTION,
                    messageId: n.A.ackIdForGuild(e),
                });
        }),
        h.default.track(A.HAw.MARK_AS_READ, { source: a, type: "guild" }),
        (0, l.Uq)(s, t)
    );
}
