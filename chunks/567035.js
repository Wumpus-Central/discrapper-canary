i.d(e, { A: () => E }), i(321073);
var n = i(735438),
    l = i.n(n),
    s = i(334738),
    r = i(591552),
    a = i(863005),
    u = i(808728),
    o = i(222823),
    d = i(954571),
    T = i(661191),
    A = i(652215),
    S = i(790782);
function E(t, e, i) {
    let n = l()
        .flatMap(t, (t) => {
            let e = u.Ay.getSelectableChannelIds(t),
                i = [...e, ...u.Ay.getVocalChannelIds(t)],
                n = a.A.getActiveJoinedThreadsForGuild(t);
            for (let t of e) {
                let e = n[t] ?? {};
                for (let t in e) i.push(t);
            }
            return i;
        })
        .map((t) => ({ channelId: t, readStateType: S.P.CHANNEL, messageId: o.Ay.lastMessageId(t) }));
    return (
        t.forEach((t) => {
            n.push({
                channelId: T.default.cast(t),
                readStateType: S.P.GUILD_EVENT,
                messageId: o.Ay.lastMessageId(t, S.P.GUILD_EVENT),
            }),
                n.push({
                    channelId: T.default.cast(t),
                    readStateType: S.P.GUILD_ONBOARDING_QUESTION,
                    messageId: r.A.ackIdForGuild(t),
                });
        }),
        d.default.track(A.HAw.MARK_AS_READ, { source: e, type: "guild" }),
        (0, s.Uq)(n, i)
    );
}
