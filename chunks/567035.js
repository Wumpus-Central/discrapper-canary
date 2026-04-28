n.d(t, { A: () => h }), n(321073);
var i = n(735438),
    s = n.n(i),
    l = n(334738),
    r = n(591552),
    a = n(695633),
    o = n(808728),
    d = n(222823),
    c = n(954571),
    u = n(935208),
    A = n(652215),
    g = n(790782);
function h(e, t, n) {
    let i = s()
        .flatMap(e, (e) => {
            let t = o.Ay.getSelectableChannelIds(e),
                n = [...t, ...o.Ay.getVocalChannelIds(e)],
                i = a.A.getActiveJoinedThreadsForGuild(e);
            for (let e of t) {
                let t = i[e] ?? {};
                for (let e in t) n.push(e);
            }
            return n;
        })
        .map((e) => ({ channelId: e, readStateType: g.P.CHANNEL, messageId: d.Ay.lastMessageId(e) }));
    return (
        e.forEach((e) => {
            i.push({
                channelId: u.default.cast(e),
                readStateType: g.P.GUILD_EVENT,
                messageId: d.Ay.lastMessageId(e, g.P.GUILD_EVENT),
            }),
                i.push({
                    channelId: u.default.cast(e),
                    readStateType: g.P.GUILD_ONBOARDING_QUESTION,
                    messageId: r.A.ackIdForGuild(e),
                });
        }),
        c.default.track(A.HAw.MARK_AS_READ, { source: t, type: "guild" }),
        (0, l.Uq)(i, n)
    );
}
