n.d(t, {
    A: () => o,
    b: () => c,
});
var r = n(311907),
    l = n(734057),
    i = n(71393),
    a = n(576705),
    s = n(652215);

function o(e) {
    let t = (0, r.bG)([i.A], () => i.A.getGuild(e.guildId)),
        n = (0, r.bG)([l.A], () => l.A.getChannel(e.channelId)),
        o = (0, r.bG)([a.A], () => a.A.can(s.xBc.ADMINISTRATOR, t)),
        c = (0, r.bG)([a.A], () => a.A.can(s.xBc.MANAGE_MESSAGES, n));
    return {
        isEntryAdmin: o,
        canEdit: o || c,
        canRemove: o || c,
    };
}

function c(e) {
    return (0, r.bG)([a.A], () => a.A.can(s.xBc.SEND_MESSAGES, e));
}
