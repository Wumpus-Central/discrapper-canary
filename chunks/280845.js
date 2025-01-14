t.d(n, {
    U: function () {
        return g;
    },
    o: function () {
        return f;
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
    c = t(231338);
function d(e, n, t) {
    let l;
    return (l = e.isPrivate() ? !e.isSystemDM() : t.can(c.Pl.SEND_MESSAGES, e) && t.can(c.Pl.READ_MESSAGE_HISTORY, e)) && i.V.REPLYABLE.has(n.type);
}
function m(e, n, t, i, l) {
    let r = n.hasFlag(u.iLy.EPHEMERAL),
        a = n.state === u.yb.SENT,
        o = !e.isArchivedThread() || l;
    return t && a && !r && !i && o;
}
function g(e, n) {
    var t;
    let i = (0, a.tc)(e),
        [, s] = (0, r.AB)(null !== (t = null == e ? void 0 : e.getGuildId()) && void 0 !== t ? t : void 0),
        u = (0, l.e7)([o.Z], () => null != e && null != n && d(e, n, o.Z));
    return null != e && null != n && m(e, n, u, s, i);
}
function f(e, n) {
    var t;
    let i = (0, a.kn)(e),
        l = d(e, n, o.Z),
        u = s.default.getCurrentUser(),
        [, c] = (0, r.s5)(null == u ? void 0 : u.id, null !== (t = e.getGuildId()) && void 0 !== t ? t : void 0);
    return m(e, n, l, c, i);
}
