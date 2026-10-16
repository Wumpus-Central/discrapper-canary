(a.d(t, { A: () => m, q: () => g }), a(321073));
var n = a(435558),
    s = a.n(n),
    d = a(334738),
    r = a(591552),
    l = a(863005),
    u = a(734057),
    c = a(808728),
    i = a(573163),
    o = a(174459),
    p = a(935208),
    h = a(652215),
    A = a(790782);
function I(e) {
    return e.map((e) => ({
        channelId: e,
        readStateType: A.P.CHANNEL,
        messageId: u.A.getChannel(e)?.isForumLikeChannel()
            ? p.default.fromTimestamp(Date.now())
            : i.Ay.lastMessageId(e),
    }));
}
function f(e, t, a) {
    return (o.default.track(h.HAw.MARK_AS_READ, { source: t, type: "guild" }), (0, d.Uq)(e, a));
}
function g(e, t, a) {
    return f(I(e), t, a);
}
function m(e, t, a) {
    let n = I(
        s().flatMap(e, (e) => {
            let t = c.Ay.getSelectableChannelIds(e),
                a = [...t, ...c.Ay.getVocalChannelIds(e)],
                n = l.A.getActiveJoinedThreadsForGuild(e);
            for (let e of t) {
                let t = n[e] ?? {};
                for (let e in t) a.push(e);
            }
            return a;
        }),
    );
    return (
        e.forEach((e) => {
            (n.push({
                channelId: p.default.cast(e),
                readStateType: A.P.GUILD_EVENT,
                messageId: i.Ay.lastMessageId(e, A.P.GUILD_EVENT),
            }),
                n.push({
                    channelId: p.default.cast(e),
                    readStateType: A.P.GUILD_ONBOARDING_QUESTION,
                    messageId: r.A.ackIdForGuild(e),
                }));
        }),
        f(n, t, a)
    );
}
