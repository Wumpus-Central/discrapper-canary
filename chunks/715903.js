n.d(t, {
    EY: () => u,
    Ow: () => l,
    no: () => c,
    ux: () => d,
}),
    n(388685),
    n(539854),
    n(997841);
var r = n(95015),
    i = n(442837),
    a = n(271383),
    o = n(372897);
let s = [
    o.q.AUTOMOD_QUARANTINED_BIO,
    o.q.AUTOMOD_QUARANTINED_USERNAME_OR_GUILD_NICKNAME,
    o.q.AUTOMOD_QUARANTINED_SERVER_TAG,
];
function l(e) {
    return null == e ? new Set() : new Set(s.reduce((t, n) => ((0, r.yE)(null != e ? e : 0, n) && t.push(n), t), []));
}
function c(e) {
    return null == e ? new Set() : l(e.flags);
}
function u(e) {
    return (
        null != e &&
        null != e.flags &&
        s.some((t) => {
            var n;
            return (0, r.yE)(null != (n = e.flags) ? n : 0, t);
        })
    );
}
function d(e) {
    return (0, i.e7)([a.ZP], () => null != e && u(a.ZP.getSelfMember(e)), [e]);
}
