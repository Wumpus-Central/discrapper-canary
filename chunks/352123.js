n.d(e, { A: () => o, b: () => E });
var r = n(17928),
    i = n(734057),
    c = n(71393),
    a = n(576705),
    l = n(652215);
function o(t) {
    let e = (0, r.bG)([c.A], () => c.A.getGuild(t.guildId)),
        n = (0, r.bG)([i.A], () => i.A.getChannel(t.channelId)),
        o = (0, r.bG)([a.A], () => a.A.can(l.xBc.ADMINISTRATOR, e)),
        E = (0, r.bG)([a.A], () => a.A.can(l.xBc.MANAGE_MESSAGES, n));
    return { isEntryAdmin: o, canEdit: o || E, canRemove: o || E };
}
function E(t) {
    return (0, r.bG)([a.A], () => a.A.can(l.xBc.SEND_MESSAGES, t));
}
