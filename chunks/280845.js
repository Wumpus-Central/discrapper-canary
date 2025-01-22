t.d(n, {
    U: function () {
        return f;
    },
    o: function () {
        return m;
    }
}),
    t(47120);
var i = t(275726),
    l = t(442837),
    r = t(71619),
    a = t(665906),
    o = t(496675),
    s = t(594174),
    u = t(981631),
    d = t(231338);
function c(e, n, t) {
    let l;
    return (l = e.isPrivate() ? !e.isSystemDM() : t.can(d.Pl.SEND_MESSAGES, e) && t.can(d.Pl.READ_MESSAGE_HISTORY, e)) && i.V.REPLYABLE.has(n.type);
}
function g(e, n, t, i, l) {
    let r = n.hasFlag(u.iLy.EPHEMERAL),
        a = n.state === u.yb.SENT,
        o = !e.isArchivedThread() || l;
    return t && a && !r && !i && o;
}
function f(e, n) {
    var t;
    let i = (0, a.tc)(e),
        [, s] = (0, r.AB)(null !== (t = null == e ? void 0 : e.getGuildId()) && void 0 !== t ? t : void 0),
        u = (0, l.e7)([o.Z], () => null != e && null != n && c(e, n, o.Z));
    return null != e && null != n && g(e, n, u, s, i);
}
function m(e, n) {
    var t;
    let i = (0, a.kn)(e),
        l = c(e, n, o.Z),
        u = s.default.getCurrentUser(),
        [, d] = (0, r.s5)(null == u ? void 0 : u.id, null !== (t = e.getGuildId()) && void 0 !== t ? t : void 0);
    return g(e, n, l, d, i);
}
