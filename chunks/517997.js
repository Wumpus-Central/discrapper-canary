n.d(t, {
    r: () => p,
    u: () => g,
}),
    n(896048);
var r = n(448761),
    l = n(311907),
    i = n(870136),
    o = n(406704),
    a = n(576705),
    c = n(287809),
    s = n(652215),
    d = n(818348);
function u(e, t, n) {
    return (
        (e.isPrivate() ? !e.isSystemDM() : n.can(d.xB.SEND_MESSAGES, e) && n.can(d.xB.READ_MESSAGE_HISTORY, e)) &&
        r.M.REPLYABLE.has(t.type)
    );
}
function f(e, t, n, r, l) {
    let i = t.hasFlag(s.pr7.EPHEMERAL),
        o = t.state === s.cmJ.SENT,
        a = !e.isArchivedThread() || l;
    return n && o && !i && !r && a;
}
function g(e, t) {
    var n;
    let r = (0, o.lK)(e),
        [, c] = (0, i.c)(null != (n = null == e ? void 0 : e.getGuildId()) ? n : void 0),
        s = (0, l.bG)([a.A], () => null != e && null != t && u(e, t, a.A));
    return null != e && null != t && f(e, t, s, c, r);
}
function p(e, t) {
    var n;
    let r = (0, o.Et)(e),
        l = u(e, t, a.A),
        s = c.default.getCurrentUser(),
        [, d] = (0, i.U0)(null == s ? void 0 : s.id, null != (n = e.getGuildId()) ? n : void 0);
    return f(e, t, l, d, r);
}
