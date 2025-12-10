n.d(t, {
    U: () => g,
    o: () => b,
}),
    n(388685);
var r = n(275726),
    i = n(442837),
    l = n(71619),
    o = n(665906),
    a = n(496675),
    s = n(594174),
    c = n(981631),
    u = n(231338);
function d(e, t, n) {
    return (
        (e.isPrivate() ? !e.isSystemDM() : n.can(u.Pl.SEND_MESSAGES, e) && n.can(u.Pl.READ_MESSAGE_HISTORY, e)) &&
        r.V.REPLYABLE.has(t.type)
    );
}
function f(e, t, n, r, i) {
    let l = t.hasFlag(c.iLy.EPHEMERAL),
        o = t.state === c.yb.SENT,
        a = !e.isArchivedThread() || i;
    return n && o && !l && !r && a;
}
function g(e, t) {
    var n;
    let r = (0, o.tc)(e),
        [, s] = (0, l.AB)(null != (n = null == e ? void 0 : e.getGuildId()) ? n : void 0),
        c = (0, i.e7)([a.Z], () => null != e && null != t && d(e, t, a.Z));
    return null != e && null != t && f(e, t, c, s, r);
}
function b(e, t) {
    var n;
    let r = (0, o.kn)(e),
        i = d(e, t, a.Z),
        c = s.default.getCurrentUser(),
        [, u] = (0, l.s5)(null == c ? void 0 : c.id, null != (n = e.getGuildId()) ? n : void 0);
    return f(e, t, i, u, r);
}
