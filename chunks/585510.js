n.d(t, { Li: () => I, _g: () => R, dj: () => N });
var i = n(136722),
    l = n(417597),
    r = n(617617),
    a = n(71393),
    s = n(576705),
    o = n(967198),
    c = n(287809),
    _ = n(488926),
    E = n(661191),
    d = n(974103),
    u = n(903093),
    A = n(610136),
    T = n(218113);
function I(e) {
    let t = (0, l.bG)([a.A, s.A], () => {
            let t = a.A.getGuild(e);
            if (null == t) return !1;
            let n = s.A.getGuildPermissions(t);
            return null != n && i.X8(n, T.Sz);
        }),
        n = (0, l.bG)([A.A], () => (null != e ? A.A.getGuildIncident(e) : null)),
        r = null != n && (0, u._J)(n);
    return { shouldShowIncidentActions: t, incidentData: n, isUnderLockdown: r };
}
function N() {
    let e = (function (e) {
            let t = c.default.getCurrentUser(),
                n = A.A.getIncidentsByGuild();
            for (let l of E.default.keys(n).map((e) => a.A.getGuild(e))) {
                if (null == l) continue;
                let r = n[l.id];
                if (
                    !(null == r || (!(0, u.k$)(r) && !(0, u._J)(r)) || ((0, u._J)(r) && l.id !== e)) &&
                    i.X8(_.cc({ user: t, context: l, checkElevated: !1 }), T.Sz)
                )
                    return l.id;
            }
            return null;
        })(o.A.getGuildId()),
        t = r.A.getGuildsProto() ?? {},
        n = null != e ? t[e] : null,
        l = null != n && n.disableRaidAlertNag;
    return { show: null != e && !l, guildId: e };
}
function R(e) {
    return (0, l.bG)([s.A, a.A], () => {
        let t = a.A.getGuild(e);
        return (0, d.nc)(t, s.A);
    });
}
n(652215);
