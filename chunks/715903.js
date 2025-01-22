r.d(n, {
    EY: function () {
        return _;
    },
    Ow: function () {
        return p;
    },
    no: function () {
        return h;
    },
    ux: function () {
        return m;
    }
});
var i = r(47120);
var a = r(724458);
var o = r(653041);
var s = r(789020);
var l = r(442837),
    u = r(271383),
    c = r(630388),
    d = r(372897);
let f = [d.q.AUTOMOD_QUARANTINED_BIO, d.q.AUTOMOD_QUARANTINED_USERNAME_OR_GUILD_NICKNAME, d.q.AUTOMOD_QUARANTINED_CLAN_TAG];
function p(e) {
    return null == e ? new Set() : new Set(f.reduce((n, r) => ((0, c.yE)(null != e ? e : 0, r) && n.push(r), n), []));
}
function h(e) {
    return null == e ? new Set() : p(e.flags);
}
function _(e) {
    return (
        null != e &&
        null != e.flags &&
        f.some((n) => {
            var r;
            return (0, c.yE)(null !== (r = e.flags) && void 0 !== r ? r : 0, n);
        })
    );
}
function m(e) {
    return (0, l.e7)([u.ZP], () => null != e && _(u.ZP.getSelfMember(e)), [e]);
}
