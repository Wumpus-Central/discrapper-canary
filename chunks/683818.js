n.d(t, {
    G: () => c,
    Z: () => o,
});
var r = n(442837),
    i = n(592125),
    l = n(430824),
    a = n(496675),
    s = n(981631);
function o(e) {
    let t = (0, r.e7)([l.Z], () => l.Z.getGuild(e.guildId)),
        n = (0, r.e7)([i.Z], () => i.Z.getChannel(e.channelId)),
        o = (0, r.e7)([a.Z], () => a.Z.can(s.Plq.ADMINISTRATOR, t)),
        c = (0, r.e7)([a.Z], () => a.Z.can(s.Plq.MANAGE_MESSAGES, n));
    return {
        isEntryAdmin: o,
        canEdit: o || c,
        canRemove: o || c,
    };
}
function c(e) {
    return (0, r.e7)([a.Z], () => a.Z.can(s.Plq.SEND_MESSAGES, e));
}
