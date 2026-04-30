"use strict";
n.d(t, { A: () => h }), n(321073);
var i = n(735438),
    r = n.n(i),
    s = n(334738),
    a = n(591552),
    o = n(695633),
    l = n(808728),
    u = n(222823),
    c = n(174459),
    d = n(935208),
    _ = n(652215),
    f = n(790782);
function h(e, t, n) {
    let i = r()
        .flatMap(e, (e) => {
            let t = l.Ay.getSelectableChannelIds(e),
                n = [...t, ...l.Ay.getVocalChannelIds(e)],
                i = o.A.getActiveJoinedThreadsForGuild(e);
            for (let e of t) {
                let t = i[e] ?? {};
                for (let e in t) n.push(e);
            }
            return n;
        })
        .map((e) => ({ channelId: e, readStateType: f.P.CHANNEL, messageId: u.Ay.lastMessageId(e) }));
    return (
        e.forEach((e) => {
            i.push({
                channelId: d.default.cast(e),
                readStateType: f.P.GUILD_EVENT,
                messageId: u.Ay.lastMessageId(e, f.P.GUILD_EVENT),
            }),
                i.push({
                    channelId: d.default.cast(e),
                    readStateType: f.P.GUILD_ONBOARDING_QUESTION,
                    messageId: a.A.ackIdForGuild(e),
                });
        }),
        c.default.track(_.HAw.MARK_AS_READ, { source: t, type: "guild" }),
        (0, s.Uq)(i, n)
    );
}
