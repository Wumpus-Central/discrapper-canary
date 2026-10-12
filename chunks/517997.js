t.d(n, { r: () => m, u: () => A });
var i = t(448761),
    l = t(17928),
    a = t(870136),
    s = t(406704),
    r = t(576705),
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
        s = n.state === c.cmJ.SENT,
        r = !e.isArchivedThread() || l;
    return t && s && !a && !i && r;
}
function A(e, n) {
    let t = (0, s.lK)(e),
        [, i] = (0, a.c)(e?.getGuildId() ?? void 0),
        o = (0, l.bG)([r.A], () => null != e && null != n && u(e, n, r.A));
    return null != e && null != n && g(e, n, o, i, t);
}
function m(e, n) {
    let t = (0, s.Et)(e),
        i = u(e, n, r.A),
        l = o.default.getCurrentUser(),
        [, c] = (0, a.U0)(l?.id, e.getGuildId() ?? void 0);
    return g(e, n, i, c, t);
}
