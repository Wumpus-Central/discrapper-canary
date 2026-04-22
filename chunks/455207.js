"use strict";
n.d(t, { MZ: () => c, NB: () => u, sx: () => d });
var i = n(58149),
    a = n(943667),
    r = n(954571),
    l = n(124759),
    s = n(652215),
    o = n(375577);
function c(e) {
    return ((0, a.A)(e) && e.messageReference.guild_id === l.Vi) || (null != e.author && e.author.id === l.hs);
}
function u() {
    return o;
}
let d = (e) => {
    r.default.track(s.HAw.USER_FLOW_TRANSITION, {
        flow_type: l.bK,
        from_step: e.fromStep,
        to_step: e.toStep,
        ...(0, i.H$)(e.guildId),
    });
};
