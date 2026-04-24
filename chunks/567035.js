"use strict";
n.d(t, { A: () => g }), n(321073);
var r = n(735438),
    i = n.n(r),
    l = n(334738),
    a = n(591552),
    o = n(695633),
    s = n(808728),
    c = n(222823),
    _ = n(954571),
    u = n(935208),
    d = n(652215),
    f = n(790782);
function g(e, t, n) {
    let r = i()
        .flatMap(e, (e) => {
            let t = s.Ay.getSelectableChannelIds(e),
                n = [...t, ...s.Ay.getVocalChannelIds(e)],
                r = o.A.getActiveJoinedThreadsForGuild(e);
            for (let e of t) {
                let t = r[e] ?? {};
                for (let e in t) n.push(e);
            }
            return n;
        })
        .map((e) => ({ channelId: e, readStateType: f.P.CHANNEL, messageId: c.Ay.lastMessageId(e) }));
    return (
        e.forEach((e) => {
            r.push({
                channelId: u.default.cast(e),
                readStateType: f.P.GUILD_EVENT,
                messageId: c.Ay.lastMessageId(e, f.P.GUILD_EVENT),
            }),
                r.push({
                    channelId: u.default.cast(e),
                    readStateType: f.P.GUILD_ONBOARDING_QUESTION,
                    messageId: a.A.ackIdForGuild(e),
                });
        }),
        _.default.track(d.HAw.MARK_AS_READ, { source: t, type: "guild" }),
        (0, l.Uq)(r, n)
    );
}
