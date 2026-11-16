var i = n(855986),
    r = n(71393),
    a = n(576705),
    s = n(256497),
    l = n(593673),
    o = n(652215);
function d(e) {
    return null != e && a.A.can(o.xBc.MANAGE_GUILD, e);
}
function c(e) {
    return (0, i.bG)([a.A], () => null != e && a.A.can(o.xBc.MANAGE_GUILD, e), [e]);
}
function u(e, t) {
    let n;
    return (
        e.guildSpaceSettings?.enabled !== !1 &&
        (t || (null != (n = e.guildSpaceSettings) && n.enabled && n.publish_status === l.B.PUBLISHED))
    );
}
n.d(
    t,
    {},
    {
        P5: d,
        Uq: function (e, t) {
            let n = (0, s.fX)(e ?? void 0, t),
                a = (0, i.bG)([r.A], () => r.A.getGuild(e), [e]),
                l = c(a);
            return null != a && !!n && u(a, l);
        },
        W8: u,
        mN: c,
        tT: function (e, t) {
            return null != e && !!(0, s.aA)(e.id, t) && u(e, d(e));
        },
    },
);
