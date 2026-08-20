n.d(t, { MZ: () => o, NB: () => c, sx: () => d });
var s = n(95561),
    u = n(943667),
    r = n(174459),
    i = n(124759),
    l = n(652215),
    A = n(375577);
function o(e) {
    return ((0, u.A)(e) && e.messageReference.guild_id === i.Vi) || (null != e.author && e.author.id === i.hs);
}
function c() {
    return A;
}
function d(e) {
    r.default.track(l.HAw.USER_FLOW_TRANSITION, {
        flow_type: i.bK,
        from_step: e.fromStep,
        to_step: e.toStep,
        ...(0, s.H$)(e.guildId),
    });
}
