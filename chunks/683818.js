n.d(t, {
    G: () => c,
    Z: () => o
});
var i = n(442837),
    l = n(592125),
    a = n(430824),
    r = n(496675),
    s = n(981631);
function o(e) {
    let t = (0, i.e7)([a.Z], () => a.Z.getGuild(e.guildId)),
        n = (0, i.e7)([l.Z], () => l.Z.getChannel(e.channelId)),
        o = (0, i.e7)([r.Z], () => r.Z.can(s.Plq.ADMINISTRATOR, t)),
        c = (0, i.e7)([r.Z], () => r.Z.can(s.Plq.MANAGE_MESSAGES, n));
    return {
        isEntryAdmin: o,
        canEdit: o || c,
        canRemove: o || c
    };
}
function c(e) {
    return (0, i.e7)([r.Z], () => r.Z.can(s.Plq.SEND_MESSAGES, e));
}
