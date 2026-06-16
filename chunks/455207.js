s.d(t, { MZ: () => d, NB: () => o, sx: () => c });
var n = s(95561),
    r = s(943667),
    u = s(174459),
    i = s(124759),
    l = s(652215),
    A = s(375577);
function d(e) {
    return ((0, r.A)(e) && e.messageReference.guild_id === i.Vi) || (null != e.author && e.author.id === i.hs);
}
function o() {
    return A;
}
let c = (e) => {
    u.default.track(l.HAw.USER_FLOW_TRANSITION, {
        flow_type: i.bK,
        from_step: e.fromStep,
        to_step: e.toStep,
        ...(0, n.H$)(e.guildId),
    });
};
