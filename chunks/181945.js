n.d(t, { Z: () => p }), n(361932), n(187205), n(388685), n(539854);
var r = n(392711),
    i = n.n(r),
    a = n(45114),
    o = n(45966),
    s = n(601070),
    l = n(984933),
    c = n(306680),
    u = n(626135),
    d = n(709054),
    f = n(981631),
    _ = n(490897);
function p(e, t, n) {
    let r = i()
        .flatMap(e, (e) => {
            let t = l.ZP.getSelectableChannelIds(e),
                n = [...t, ...l.ZP.getVocalChannelIds(e)],
                r = s.Z.getActiveJoinedThreadsForGuild(e);
            for (let e of t) {
                var i;
                let t = null != (i = r[e]) ? i : {};
                for (let e in t) n.push(e);
            }
            return n;
        })
        .map((e) => ({
            channelId: e,
            readStateType: _.W.CHANNEL,
            messageId: c.ZP.lastMessageId(e)
        }));
    return (
        e.forEach((e) => {
            r.push({
                channelId: d.default.cast(e),
                readStateType: _.W.GUILD_EVENT,
                messageId: c.ZP.lastMessageId(e, _.W.GUILD_EVENT)
            }),
                r.push({
                    channelId: d.default.cast(e),
                    readStateType: _.W.GUILD_ONBOARDING_QUESTION,
                    messageId: o.Z.ackIdForGuild(e)
                });
        }),
        u.default.track(f.rMx.MARK_AS_READ, {
            source: t,
            type: 'guild'
        }),
        (0, a.y5)(r, n)
    );
}
