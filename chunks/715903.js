n.d(t, {
    EY: () => u,
    Ow: () => l,
    no: () => c,
    ux: () => d
}),
    n(47120),
    n(653041),
    n(789020);
var r = n(442837),
    i = n(271383),
    o = n(630388),
    a = n(372897);
let s = [a.q.AUTOMOD_QUARANTINED_BIO, a.q.AUTOMOD_QUARANTINED_USERNAME_OR_GUILD_NICKNAME, a.q.AUTOMOD_QUARANTINED_CLAN_TAG];
function l(e) {
    return null == e ? new Set() : new Set(s.reduce((t, n) => ((0, o.yE)(null != e ? e : 0, n) && t.push(n), t), []));
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
            return (0, o.yE)(null != (n = e.flags) ? n : 0, t);
        })
    );
}
function d(e) {
    return (0, r.e7)([i.ZP], () => null != e && u(i.ZP.getSelfMember(e)), [e]);
}
