n.d(t, { r: () => m, u: () => A });
var i = n(448761),
    l = n(17928),
    a = n(870136),
    s = n(406704),
    r = n(576705),
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
        s = t.state === c.cmJ.SENT,
        r = !e.isArchivedThread() || l;
    return n && s && !a && !i && r;
}
function A(e, t) {
    let n = (0, s.lK)(e),
        [, i] = (0, a.c)(e?.getGuildId() ?? void 0),
        o = (0, l.bG)([r.A], () => null != e && null != t && u(e, t, r.A));
    return null != e && null != t && g(e, t, o, i, n);
}
function m(e, t) {
    let n = (0, s.Et)(e),
        i = u(e, t, r.A),
        l = o.default.getCurrentUser(),
        [, c] = (0, a.U0)(l?.id, e.getGuildId() ?? void 0);
    return g(e, t, i, c, n);
}
