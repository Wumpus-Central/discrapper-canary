n.d(t, { A: () => o, b: () => c });
var i = n(311907),
    l = n(734057),
    s = n(71393),
    a = n(576705),
    r = n(652215);
function o(e) {
    let t = (0, i.bG)([s.A], () => s.A.getGuild(e.guildId)),
        n = (0, i.bG)([l.A], () => l.A.getChannel(e.channelId)),
        o = (0, i.bG)([a.A], () => a.A.can(r.xBc.ADMINISTRATOR, t)),
        c = (0, i.bG)([a.A], () => a.A.can(r.xBc.MANAGE_MESSAGES, n));
    return { isEntryAdmin: o, canEdit: o || c, canRemove: o || c };
}
function c(e) {
    return (0, i.bG)([a.A], () => a.A.can(r.xBc.SEND_MESSAGES, e));
}
