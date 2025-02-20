n.d(t, { Z: () => _ }), n(13667), n(390547), n(47120), n(653041);
var r = n(392711),
    i = n.n(r),
    o = n(45114),
    a = n(45966),
    s = n(601070),
    l = n(984933),
    c = n(306680),
    u = n(626135),
    d = n(709054),
    f = n(981631),
    p = n(490897);
function _(e, t, n) {
    let r = i()
        .flatMap(e, (e) => {
            let t = l.ZP.getSelectableChannelIds(e),
                n = [...t, ...l.ZP.getVocalChannelIds(e)],
                r = s.Z.getActiveJoinedThreadsForGuild(e);
            for (let e of t) {
                var i;
                let t = null !== (i = r[e]) && void 0 !== i ? i : {};
                for (let e in t) n.push(e);
            }
            return n;
        })
        .map((e) => ({
            channelId: e,
            readStateType: p.W.CHANNEL,
            messageId: c.ZP.lastMessageId(e)
        }));
    return (
        e.forEach((e) => {
            r.push({
                channelId: d.default.cast(e),
                readStateType: p.W.GUILD_EVENT,
                messageId: c.ZP.lastMessageId(e, p.W.GUILD_EVENT)
            }),
                r.push({
                    channelId: d.default.cast(e),
                    readStateType: p.W.GUILD_ONBOARDING_QUESTION,
                    messageId: a.Z.ackIdForGuild(e)
                });
        }),
        u.default.track(f.rMx.MARK_AS_READ, {
            source: t,
            type: 'guild'
        }),
        (0, o.y5)(r, n)
    );
}
