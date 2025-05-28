n.d(t, {
    U: () => g,
    o: () => m
}),
    n(388685);
var i = n(275726),
    r = n(442837),
    l = n(71619),
    a = n(665906),
    o = n(496675),
    s = n(594174),
    c = n(981631),
    u = n(231338);
function d(e, t, n) {
    let r;
    return (e.isPrivate() ? !e.isSystemDM() : n.can(u.Pl.SEND_MESSAGES, e) && n.can(u.Pl.READ_MESSAGE_HISTORY, e)) && i.V.REPLYABLE.has(t.type);
}
function f(e, t, n, i, r) {
    let l = t.hasFlag(c.iLy.EPHEMERAL),
        a = t.state === c.yb.SENT,
        o = !e.isArchivedThread() || r;
    return n && a && !l && !i && o;
}
function g(e, t) {
    var n;
    let i = (0, a.tc)(e),
        [, s] = (0, l.AB)(null != (n = null == e ? void 0 : e.getGuildId()) ? n : void 0),
        c = (0, r.e7)([o.Z], () => null != e && null != t && d(e, t, o.Z));
    return null != e && null != t && f(e, t, c, s, i);
}
function m(e, t) {
    var n;
    let i = (0, a.kn)(e),
        r = d(e, t, o.Z),
        c = s.default.getCurrentUser(),
        [, u] = (0, l.s5)(null == c ? void 0 : c.id, null != (n = e.getGuildId()) ? n : void 0);
    return f(e, t, r, u, i);
}
