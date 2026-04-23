"use strict";
n.d(t, { TR: () => c, ix: () => d, wR: () => l, wj: () => u }), n(321073), n(938796);
var r = n(665260),
    i = n(311907),
    s = n(696451),
    a = n(340837);
let o = [
    a.D.AUTOMOD_QUARANTINED_BIO,
    a.D.AUTOMOD_QUARANTINED_USERNAME_OR_GUILD_NICKNAME,
    a.D.AUTOMOD_QUARANTINED_SERVER_TAG,
];
function l(e) {
    return null == e ? new Set() : new Set(o.reduce((t, n) => ((0, r.Lt)(e ?? 0, n) && t.push(n), t), []));
}
function u(e) {
    return null == e ? new Set() : l(e.flags);
}
function c(e) {
    return null != e && null != e.flags && o.some((t) => (0, r.Lt)(e.flags ?? 0, t));
}
function d(e) {
    return (0, i.bG)([s.Ay], () => null != e && c(s.Ay.getSelfMember(e)), [e]);
}
