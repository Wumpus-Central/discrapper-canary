n.d(t, { Z: () => p }), n(390547), n(47120), n(653041);
var i = n(392711),
    r = n.n(i),
    a = n(45114),
    s = n(45966),
    o = n(601070),
    l = n(984933),
    u = n(306680),
    c = n(626135),
    d = n(709054),
    f = n(981631),
    _ = n(490897);
function p(e, t, n) {
    let i = r()
        .flatMap(e, (e) => {
            let t = l.ZP.getSelectableChannelIds(e),
                n = [...t, ...l.ZP.getVocalChannelIds(e)],
                i = o.Z.getActiveJoinedThreadsForGuild(e);
            for (let e of t) {
                var r;
                let t = null !== (r = i[e]) && void 0 !== r ? r : {};
                for (let e in t) n.push(e);
            }
            return n;
        })
        .map((e) => ({
            channelId: e,
            readStateType: _.W.CHANNEL,
            messageId: u.ZP.lastMessageId(e)
        }));
    return (
        e.forEach((e) => {
            i.push({
                channelId: d.default.cast(e),
                readStateType: _.W.GUILD_EVENT,
                messageId: u.ZP.lastMessageId(e, _.W.GUILD_EVENT)
            }),
                i.push({
                    channelId: d.default.cast(e),
                    readStateType: _.W.GUILD_ONBOARDING_QUESTION,
                    messageId: s.Z.ackIdForGuild(e)
                });
        }),
        c.default.track(f.rMx.MARK_AS_READ, {
            source: t,
            type: 'guild'
        }),
        (0, a.y5)(i, n)
    );
}
