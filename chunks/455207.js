"use strict";
n.d(t, { MZ: () => c, NB: () => u, sx: () => d });
var l = n(58149),
    a = n(943667),
    s = n(954571),
    i = n(124759),
    r = n(652215),
    o = n(375577);
function c(e) {
    return ((0, a.A)(e) && e.messageReference.guild_id === i.Vi) || (null != e.author && e.author.id === i.hs);
}
function u() {
    return o;
}
let d = (e) => {
    s.default.track(r.HAw.USER_FLOW_TRANSITION, {
        flow_type: i.bK,
        from_step: e.fromStep,
        to_step: e.toStep,
        ...(0, l.H$)(e.guildId),
    });
};
