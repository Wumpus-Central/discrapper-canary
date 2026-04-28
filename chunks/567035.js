"use strict";
n.d(t, { A: () => h }), n(321073);
var r = n(735438),
    i = n.n(r),
    l = n(334738),
    a = n(591552),
    s = n(695633),
    o = n(808728),
    c = n(222823),
    u = n(954571),
    _ = n(935208),
    d = n(652215),
    g = n(790782);
function h(e, t, n) {
    let r = i()
        .flatMap(e, (e) => {
            let t = o.Ay.getSelectableChannelIds(e),
                n = [...t, ...o.Ay.getVocalChannelIds(e)],
                r = s.A.getActiveJoinedThreadsForGuild(e);
            for (let e of t) {
                let t = r[e] ?? {};
                for (let e in t) n.push(e);
            }
            return n;
        })
        .map((e) => ({ channelId: e, readStateType: g.P.CHANNEL, messageId: c.Ay.lastMessageId(e) }));
    return (
        e.forEach((e) => {
            r.push({
                channelId: _.default.cast(e),
                readStateType: g.P.GUILD_EVENT,
                messageId: c.Ay.lastMessageId(e, g.P.GUILD_EVENT),
            }),
                r.push({
                    channelId: _.default.cast(e),
                    readStateType: g.P.GUILD_ONBOARDING_QUESTION,
                    messageId: a.A.ackIdForGuild(e),
                });
        }),
        u.default.track(d.HAw.MARK_AS_READ, { source: t, type: "guild" }),
        (0, l.Uq)(r, n)
    );
}
