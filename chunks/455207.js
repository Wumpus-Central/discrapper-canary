n.d(l, { MZ: () => o, NB: () => d, sx: () => c });
var r = n(58149),
    u = n(943667),
    t = n(954571),
    s = n(124759),
    a = n(652215),
    i = n(375577);
function o(e) {
    return ((0, u.A)(e) && e.messageReference.guild_id === s.Vi) || (null != e.author && e.author.id === s.hs);
}
function d() {
    return i;
}
let c = (e) => {
    t.default.track(a.HAw.USER_FLOW_TRANSITION, {
        flow_type: s.bK,
        from_step: e.fromStep,
        to_step: e.toStep,
        ...(0, r.H$)(e.guildId),
    });
};
