t.d(n, { r: () => m, u: () => A });
var i = t(448761),
    l = t(17928),
    a = t(870136),
    r = t(406704),
    s = t(576705),
    o = t(287809),
    c = t(652215),
    d = t(818348);
function u(e, n, t) {
    return (
        (e.isPrivate() ? !e.isSystemDM() : t.can(d.xB.SEND_MESSAGES, e) && t.can(d.xB.READ_MESSAGE_HISTORY, e)) &&
        i.M.REPLYABLE.has(n.type)
    );
}
function g(e, n, t, i, l) {
    let a = n.hasFlag(c.pr7.EPHEMERAL),
        r = n.state === c.cmJ.SENT,
        s = !e.isArchivedThread() || l;
    return t && r && !a && !i && s;
}
function A(e, n) {
    let t = (0, r.lK)(e),
        [, i] = (0, a.c)(e?.getGuildId() ?? void 0),
        o = (0, l.bG)([s.A], () => null != e && null != n && u(e, n, s.A));
    return null != e && null != n && g(e, n, o, i, t);
}
function m(e, n) {
    let t = (0, r.Et)(e),
        i = u(e, n, s.A),
        l = o.default.getCurrentUser(),
        [, c] = (0, a.U0)(l?.id, e.getGuildId() ?? void 0);
    return g(e, n, i, c, t);
}
