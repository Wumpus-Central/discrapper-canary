(n.d(t, {
    U: () => _,
    o: () => p
}),
    n(388685));
var r = n(275726),
    i = n(442837),
    a = n(71619),
    o = n(665906),
    s = n(496675),
    l = n(594174),
    c = n(981631),
    u = n(231338);
function d(e, t, n) {
    let i;
    return (i = e.isPrivate() ? !e.isSystemDM() : n.can(u.Pl.SEND_MESSAGES, e) && n.can(u.Pl.READ_MESSAGE_HISTORY, e)) && r.V.REPLYABLE.has(t.type);
}
function f(e, t, n, r, i) {
    let a = t.hasFlag(c.iLy.EPHEMERAL),
        o = t.state === c.yb.SENT,
        s = !e.isArchivedThread() || i;
    return n && o && !a && !r && s;
}
function _(e, t) {
    var n;
    let r = (0, o.tc)(e),
        [, l] = (0, a.AB)(null != (n = null == e ? void 0 : e.getGuildId()) ? n : void 0),
        c = (0, i.e7)([s.Z], () => null != e && null != t && d(e, t, s.Z));
    return null != e && null != t && f(e, t, c, l, r);
}
function p(e, t) {
    var n;
    let r = (0, o.kn)(e),
        i = d(e, t, s.Z),
        c = l.default.getCurrentUser(),
        [, u] = (0, a.s5)(null == c ? void 0 : c.id, null != (n = e.getGuildId()) ? n : void 0);
    return f(e, t, i, u, r);
}
