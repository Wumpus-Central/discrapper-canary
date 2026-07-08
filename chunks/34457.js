"use strict";
n.d(t, { Oy: () => l, _m: () => o, nk: () => c, sx: () => d, xh: () => s });
var i = n(735438),
    r = n.n(i),
    a = n(136722);
let s = "GuildRole";
function l(e) {
    return e.id === e.guildId;
}
function o(e, t) {
    return (0, a.zy)(e.permissions, t);
}
function d(e, t) {
    return (0, a.X8)(e.permissions, t);
}
function c(e, t) {
    return r().isEqualWith(e, t, (e, t, n) => ("permissions" === n ? (0, a.aI)(e, t) : void 0));
}
