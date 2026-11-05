var i = t(448761),
    l = t(855986),
    a = t(870136),
    o = t(406704),
    r = t(576705),
    s = t(287809),
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
        o = n.state === c.cmJ.SENT,
        r = !e.isArchivedThread() || l;
    return t && o && !a && !i && r;
}
t.d(
    n,
    {},
    {
        r: function (e, n) {
            let t = (0, o.Et)(e),
                i = u(e, n, r.A),
                l = s.default.getCurrentUser(),
                [, c] = (0, a.U0)(l?.id, e.getGuildId() ?? void 0);
            return g(e, n, i, c, t);
        },
        u: function (e, n) {
            let t = (0, o.lK)(e),
                [, i] = (0, a.c)(e?.getGuildId() ?? void 0),
                s = (0, l.bG)([r.A], () => null != e && null != n && u(e, n, r.A));
            return null != e && null != n && g(e, n, s, i, t);
        },
    },
);
