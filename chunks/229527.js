n.d(t, {
    TR: () => u,
    ix: () => d,
    wR: () => l,
    wj: () => c,
}),
    n(896048),
    n(321073),
    n(938796);
var r = n(665260),
    i = n(311907),
    a = n(696451),
    s = n(340837);
let o = [
    s.D.AUTOMOD_QUARANTINED_BIO,
    s.D.AUTOMOD_QUARANTINED_USERNAME_OR_GUILD_NICKNAME,
    s.D.AUTOMOD_QUARANTINED_SERVER_TAG,
];
function l(e) {
    return null == e ? new Set() : new Set(o.reduce((t, n) => ((0, r.Lt)(null != e ? e : 0, n) && t.push(n), t), []));
}
function c(e) {
    return null == e ? new Set() : l(e.flags);
}
function u(e) {
    return (
        null != e &&
        null != e.flags &&
        o.some((t) => {
            var n;
            return (0, r.Lt)(null != (n = e.flags) ? n : 0, t);
        })
    );
}
function d(e) {
    return (0, i.bG)([a.Ay], () => null != e && u(a.Ay.getSelfMember(e)), [e]);
}
