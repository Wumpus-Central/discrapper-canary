n.d(t, {
    G: () => c,
    Z: () => s
});
var r = n(442837),
    i = n(592125),
    l = n(430824),
    o = n(496675),
    a = n(981631);
function s(e) {
    let t = (0, r.e7)([l.Z], () => l.Z.getGuild(e.guildId)),
        n = (0, r.e7)([i.Z], () => i.Z.getChannel(e.channelId)),
        s = (0, r.e7)([o.Z], () => o.Z.can(a.Plq.ADMINISTRATOR, t)),
        c = (0, r.e7)([o.Z], () => o.Z.can(a.Plq.MANAGE_MESSAGES, n));
    return {
        isEntryAdmin: s,
        canEdit: s || c,
        canRemove: s || c
    };
}
function c(e) {
    return (0, r.e7)([o.Z], () => o.Z.can(a.Plq.SEND_MESSAGES, e));
}
