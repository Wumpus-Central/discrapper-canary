"use strict";
n.d(t, { MZ: () => u, NB: () => c, sx: () => d });
var r = n(58149),
    i = n(943667),
    a = n(954571),
    s = n(124759),
    o = n(652215),
    l = n(375577);
function u(e) {
    return ((0, i.A)(e) && e.messageReference.guild_id === s.Vi) || (null != e.author && e.author.id === s.hs);
}
function c() {
    return l;
}
let d = (e) => {
    a.default.track(o.HAw.USER_FLOW_TRANSITION, {
        flow_type: s.bK,
        from_step: e.fromStep,
        to_step: e.toStep,
        ...(0, r.H$)(e.guildId),
    });
};
