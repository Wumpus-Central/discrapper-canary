r.d(n, {
    Z: function () {
        return E;
    }
});
var i = r(390547);
var a = r(47120);
var o = r(653041);
var s = r(392711),
    l = r.n(s),
    u = r(45114),
    c = r(45966),
    d = r(601070),
    f = r(984933),
    p = r(306680),
    h = r(626135),
    _ = r(709054),
    m = r(981631),
    g = r(490897);
function E(e, n, r) {
    let i = l()
        .flatMap(e, (e) => {
            let n = f.ZP.getSelectableChannelIds(e),
                r = [...n, ...f.ZP.getVocalChannelIds(e)],
                i = d.Z.getActiveJoinedThreadsForGuild(e);
            for (let e of n) {
                var a;
                let n = null !== (a = i[e]) && void 0 !== a ? a : {};
                for (let e in n) r.push(e);
            }
            return r;
        })
        .map((e) => ({
            channelId: e,
            readStateType: g.W.CHANNEL,
            messageId: p.ZP.lastMessageId(e)
        }));
    return (
        e.forEach((e) => {
            i.push({
                channelId: _.default.cast(e),
                readStateType: g.W.GUILD_EVENT,
                messageId: p.ZP.lastMessageId(e, g.W.GUILD_EVENT)
            }),
                i.push({
                    channelId: _.default.cast(e),
                    readStateType: g.W.GUILD_ONBOARDING_QUESTION,
                    messageId: c.Z.ackIdForGuild(e)
                });
        }),
        h.default.track(m.rMx.MARK_AS_READ, {
            source: n,
            type: 'guild'
        }),
        (0, u.y5)(i, r)
    );
}
