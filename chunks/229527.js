"use strict";
n.d(t, { TR: () => _, ix: () => u, wR: () => l, wj: () => d }), n(321073), n(938796);
var i = n(665260),
    r = n(17928),
    s = n(696451),
    a = n(340837);
let o = [
    a.D.AUTOMOD_QUARANTINED_BIO,
    a.D.AUTOMOD_QUARANTINED_USERNAME_OR_GUILD_NICKNAME,
    a.D.AUTOMOD_QUARANTINED_SERVER_TAG,
];
function l(e) {
    return null == e ? new Set() : new Set(o.reduce((t, n) => ((0, i.Lt)(e ?? 0, n) && t.push(n), t), []));
}
function d(e) {
    return null == e ? new Set() : l(e.flags);
}
function _(e) {
    return null != e && null != e.flags && o.some((t) => (0, i.Lt)(e.flags ?? 0, t));
}
function u(e) {
    return (0, r.bG)([s.Ay], () => null != e && _(s.Ay.getSelfMember(e)), [e]);
}
