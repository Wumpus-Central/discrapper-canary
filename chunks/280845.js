n.d(t, {
    U: () => f,
    o: () => m
}),
    n(47120);
var i = n(275726),
    l = n(442837),
    a = n(71619),
    s = n(665906),
    r = n(496675),
    o = n(594174),
    d = n(981631),
    c = n(231338);
function u(e, t, n) {
    let l;
    return (e.isPrivate() ? !e.isSystemDM() : n.can(c.Pl.SEND_MESSAGES, e) && n.can(c.Pl.READ_MESSAGE_HISTORY, e)) && i.V.REPLYABLE.has(t.type);
}
function g(e, t, n, i, l) {
    let a = t.hasFlag(d.iLy.EPHEMERAL),
        s = t.state === d.yb.SENT,
        r = !e.isArchivedThread() || l;
    return n && s && !a && !i && r;
}
function f(e, t) {
    var n;
    let i = (0, s.tc)(e),
        [, o] = (0, a.AB)(null !== (n = null == e ? void 0 : e.getGuildId()) && void 0 !== n ? n : void 0),
        d = (0, l.e7)([r.Z], () => null != e && null != t && u(e, t, r.Z));
    return null != e && null != t && g(e, t, d, o, i);
}
function m(e, t) {
    var n;
    let i = (0, s.kn)(e),
        l = u(e, t, r.Z),
        d = o.default.getCurrentUser(),
        [, c] = (0, a.s5)(null == d ? void 0 : d.id, null !== (n = e.getGuildId()) && void 0 !== n ? n : void 0);
    return g(e, t, l, c, i);
}
