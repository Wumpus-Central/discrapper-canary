n.d(t, { MZ: () => c, NB: () => _, sx: () => E });
var i = n(58149),
    l = n(943667),
    r = n(954571),
    a = n(124759),
    s = n(652215),
    o = n(375577);
function c(e) {
    return ((0, l.A)(e) && e.messageReference.guild_id === a.Vi) || (null != e.author && e.author.id === a.hs);
}
function _() {
    return o;
}
let E = (e) => {
    r.default.track(s.HAw.USER_FLOW_TRANSITION, {
        flow_type: a.bK,
        from_step: e.fromStep,
        to_step: e.toStep,
        ...(0, i.H$)(e.guildId),
    });
};
