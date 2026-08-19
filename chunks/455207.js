n.d(l, { MZ: () => o, NB: () => d, sx: () => c });
var s = n(95561),
    t = n(943667),
    r = n(174459),
    a = n(124759),
    i = n(652215),
    u = n(375577);
function o(e) {
    return ((0, t.A)(e) && e.messageReference.guild_id === a.Vi) || (null != e.author && e.author.id === a.hs);
}
function d() {
    return u;
}
function c(e) {
    r.default.track(i.HAw.USER_FLOW_TRANSITION, {
        flow_type: a.bK,
        from_step: e.fromStep,
        to_step: e.toStep,
        ...(0, s.H$)(e.guildId),
    });
}
