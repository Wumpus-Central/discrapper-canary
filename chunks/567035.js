"use strict";
n.d(t, { A: () => A }), n(321073);
var i = n(435558),
    r = n.n(i),
    a = n(334738),
    s = n(591552),
    l = n(695633),
    o = n(808728),
    d = n(568548),
    c = n(174459),
    u = n(935208),
    _ = n(652215),
    E = n(790782);
function A(e, t, n) {
    let i = r()
        .flatMap(e, (e) => {
            let t = o.Ay.getSelectableChannelIds(e),
                n = [...t, ...o.Ay.getVocalChannelIds(e)],
                i = l.A.getActiveJoinedThreadsForGuild(e);
            for (let e of t) {
                let t = i[e] ?? {};
                for (let e in t) n.push(e);
            }
            return n;
        })
        .map((e) => ({ channelId: e, readStateType: E.P.CHANNEL, messageId: d.Ay.lastMessageId(e) }));
    return (
        e.forEach((e) => {
            i.push({
                channelId: u.default.cast(e),
                readStateType: E.P.GUILD_EVENT,
                messageId: d.Ay.lastMessageId(e, E.P.GUILD_EVENT),
            }),
                i.push({
                    channelId: u.default.cast(e),
                    readStateType: E.P.GUILD_ONBOARDING_QUESTION,
                    messageId: s.A.ackIdForGuild(e),
                });
        }),
        c.default.track(_.HAw.MARK_AS_READ, { source: t, type: "guild" }),
        (0, a.Uq)(i, n)
    );
}
