n.d(t, { Li: () => I, _g: () => R, dj: () => N });
var i = n(136722),
    l = n(417597),
    r = n(617617),
    s = n(71393),
    a = n(576705),
    o = n(967198),
    E = n(287809),
    c = n(488926),
    _ = n(661191),
    d = n(974103),
    A = n(903093),
    u = n(610136),
    T = n(218113);
function I(e) {
    let t = (0, l.bG)([s.A, a.A], () => {
            let t = s.A.getGuild(e);
            if (null == t) return !1;
            let n = a.A.getGuildPermissions(t);
            return null != n && i.X8(n, T.Sz);
        }),
        n = (0, l.bG)([u.A], () => (null != e ? u.A.getGuildIncident(e) : null)),
        r = null != n && (0, A._J)(n);
    return { shouldShowIncidentActions: t, incidentData: n, isUnderLockdown: r };
}
function N() {
    let e = (function (e) {
            let t = E.default.getCurrentUser(),
                n = u.A.getIncidentsByGuild();
            for (let l of _.default.keys(n).map((e) => s.A.getGuild(e))) {
                if (null == l) continue;
                let r = n[l.id];
                if (
                    !(null == r || (!(0, A.k$)(r) && !(0, A._J)(r)) || ((0, A._J)(r) && l.id !== e)) &&
                    i.X8(c.cc({ user: t, context: l, checkElevated: !1 }), T.Sz)
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
    return (0, l.bG)([a.A, s.A], () => {
        let t = s.A.getGuild(e);
        return (0, d.nc)(t, a.A);
    });
}
n(652215);
