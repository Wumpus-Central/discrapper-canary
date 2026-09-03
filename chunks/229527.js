n.d(t, { TR: () => c, ix: () => u, wR: () => o, wj: () => d }), n(321073), n(938796);
var i = n(665260),
    r = n(17928),
    a = n(696451),
    s = n(340837);
let l = [
    s.D.AUTOMOD_QUARANTINED_BIO,
    s.D.AUTOMOD_QUARANTINED_USERNAME_OR_GUILD_NICKNAME,
    s.D.AUTOMOD_QUARANTINED_SERVER_TAG,
];
function o(e) {
    return null == e ? new Set() : new Set(l.reduce((t, n) => ((0, i.Lt)(e ?? 0, n) && t.push(n), t), []));
}
function d(e) {
    return null == e ? new Set() : o(e.flags);
}
function c(e) {
    return null != e && null != e.flags && l.some((t) => (0, i.Lt)(e.flags ?? 0, t));
}
function u(e) {
    return (0, r.bG)([a.Ay], () => null != e && c(a.Ay.getSelfMember(e)), [e]);
}
