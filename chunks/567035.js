n.d(t, {
    A: () => _,
}),
    n(114821),
    n(339614),
    n(896048),
    n(321073);
var r = n(735438),
    i = n.n(r),
    a = n(334738),
    s = n(591552),
    o = n(863005),
    l = n(808728),
    c = n(222823),
    u = n(954571),
    d = n(661191),
    f = n(652215),
    p = n(790782);

function _(e, t, n) {
    let r = i()
        .flatMap(e, (e) => {
            let t = l.Ay.getSelectableChannelIds(e),
                n = [...t, ...l.Ay.getVocalChannelIds(e)],
                r = o.A.getActiveJoinedThreadsForGuild(e);
            for (let e of t) {
                var i;
                let t = null != (i = r[e]) ? i : {};
                for (let e in t) n.push(e);
            }
            return n;
        })
        .map((e) => ({
            channelId: e,
            readStateType: p.P.CHANNEL,
            messageId: c.Ay.lastMessageId(e),
        }));
    return (
        e.forEach((e) => {
            r.push({
                channelId: d.default.cast(e),
                readStateType: p.P.GUILD_EVENT,
                messageId: c.Ay.lastMessageId(e, p.P.GUILD_EVENT),
            }),
                r.push({
                    channelId: d.default.cast(e),
                    readStateType: p.P.GUILD_ONBOARDING_QUESTION,
                    messageId: s.A.ackIdForGuild(e),
                });
        }),
        u.default.track(f.HAw.MARK_AS_READ, {
            source: t,
            type: "guild",
        }),
        (0, a.Uq)(r, n)
    );
}
