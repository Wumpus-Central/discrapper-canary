n(321073);
var i = n(435558),
    r = n.n(i),
    a = n(334738),
    s = n(591552),
    l = n(863005),
    o = n(734057),
    d = n(808728),
    c = n(218461),
    u = n(129230),
    _ = n(811091),
    E = n(652215),
    A = n(790782);
function f(e) {
    return e.map((e) => ({
        channelId: e,
        readStateType: A.P.CHANNEL,
        messageId: o.A.getChannel(e)?.isForumLikeChannel()
            ? _.default.fromTimestamp(Date.now())
            : c.Ay.lastMessageId(e),
    }));
}
function h(e, t, n) {
    return (u.default.track(E.HAw.MARK_AS_READ, { source: t, type: "guild" }), (0, a.Uq)(e, n));
}
n.d(
    t,
    {},
    {
        A: function (e, t, n) {
            let i = f(
                r().flatMap(e, (e) => {
                    let t = d.A.getSelectableChannelIds(e),
                        n = d.A.getVocalChannelIds(e),
                        i = [...t, ...n],
                        r = l.A.getActiveJoinedThreadsForGuild(e);
                    for (let e of t) {
                        let t = r[e] ?? {};
                        for (let e in t) i.push(e);
                    }
                    return i;
                }),
            );
            return (
                e.forEach((e) => {
                    (i.push({
                        channelId: _.default.cast(e),
                        readStateType: A.P.GUILD_EVENT,
                        messageId: c.Ay.lastMessageId(e, A.P.GUILD_EVENT),
                    }),
                        i.push({
                            channelId: _.default.cast(e),
                            readStateType: A.P.GUILD_ONBOARDING_QUESTION,
                            messageId: s.A.ackIdForGuild(e),
                        }));
                }),
                h(i, t, n)
            );
        },
        q: function (e, t, n) {
            return h(f(e), t, n);
        },
    },
);
