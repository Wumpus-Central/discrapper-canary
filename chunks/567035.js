"use strict";
n.d(t, { A: () => h }), n(321073);
var i = n(435558),
    r = n.n(i),
    a = n(334738),
    s = n(591552),
    l = n(695633),
    o = n(734057),
    d = n(808728),
    c = n(568548),
    u = n(174459),
    _ = n(935208),
    E = n(652215),
    A = n(790782);
function h(e, t, n) {
    let i = r()
        .flatMap(e, (e) => {
            let t = d.Ay.getSelectableChannelIds(e),
                n = [...t, ...d.Ay.getVocalChannelIds(e)],
                i = l.A.getActiveJoinedThreadsForGuild(e);
            for (let e of t) {
                let t = i[e] ?? {};
                for (let e in t) n.push(e);
            }
            return n;
        })
        .map((e) => ({
            channelId: e,
            readStateType: A.P.CHANNEL,
            messageId: o.A.getChannel(e)?.isForumLikeChannel()
                ? _.default.fromTimestamp(Date.now())
                : c.Ay.lastMessageId(e),
        }));
    return (
        e.forEach((e) => {
            i.push({
                channelId: _.default.cast(e),
                readStateType: A.P.GUILD_EVENT,
                messageId: c.Ay.lastMessageId(e, A.P.GUILD_EVENT),
            }),
                i.push({
                    channelId: _.default.cast(e),
                    readStateType: A.P.GUILD_ONBOARDING_QUESTION,
                    messageId: s.A.ackIdForGuild(e),
                });
        }),
        u.default.track(E.HAw.MARK_AS_READ, { source: t, type: "guild" }),
        (0, a.Uq)(i, n)
    );
}
