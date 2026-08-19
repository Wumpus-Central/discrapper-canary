n.d(t, { r: () => m, u: () => A });
var i = n(448761),
    l = n(17928),
    a = n(870136),
    r = n(406704),
    s = n(576705),
    o = n(287809),
    c = n(652215),
    d = n(818348);
function u(e, t, n) {
    return (
        (e.isPrivate() ? !e.isSystemDM() : n.can(d.xB.SEND_MESSAGES, e) && n.can(d.xB.READ_MESSAGE_HISTORY, e)) &&
        i.M.REPLYABLE.has(t.type)
    );
}
function g(e, t, n, i, l) {
    let a = t.hasFlag(c.pr7.EPHEMERAL),
        r = t.state === c.cmJ.SENT,
        s = !e.isArchivedThread() || l;
    return n && r && !a && !i && s;
}
function A(e, t) {
    let n = (0, r.lK)(e),
        [, i] = (0, a.c)(e?.getGuildId() ?? void 0),
        o = (0, l.bG)([s.A], () => null != e && null != t && u(e, t, s.A));
    return null != e && null != t && g(e, t, o, i, n);
}
function m(e, t) {
    let n = (0, r.Et)(e),
        i = u(e, t, s.A),
        l = o.default.getCurrentUser(),
        [, c] = (0, a.U0)(l?.id, e.getGuildId() ?? void 0);
    return g(e, t, i, c, n);
}
