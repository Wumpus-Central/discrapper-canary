n.d(e, { Li: () => h, _g: () => I, dj: () => T });
var i = n(136722),
    l = n(702841),
    r = n(617617),
    s = n(71393),
    a = n(576705),
    u = n(967198),
    o = n(287809),
    d = n(488926),
    c = n(935208),
    E = n(974103),
    _ = n(903093),
    A = n(610136),
    R = n(218113);
function h(t) {
    let e = (0, l.bG)([s.A, a.A], () => {
            let e = s.A.getGuild(t);
            if (null == e) return !1;
            let n = a.A.getGuildPermissions(e);
            return null != n && i.X8(n, R.Sz);
        }),
        n = (0, l.bG)([A.A], () => (null != t ? A.A.getGuildIncident(t) : null)),
        r = null != n && (0, _._J)(n);
    return { shouldShowIncidentActions: e, incidentData: n, isUnderLockdown: r };
}
function T() {
    let t = (function (t) {
            let e = o.default.getCurrentUser(),
                n = A.A.getIncidentsByGuild();
            for (let l of c.default.keys(n).map((t) => s.A.getGuild(t))) {
                if (null == l) continue;
                let r = n[l.id];
                if (
                    !(null == r || (!(0, _.k$)(r) && !(0, _._J)(r)) || ((0, _._J)(r) && l.id !== t)) &&
                    i.X8(d.cc({ user: e, context: l, checkElevated: !1 }), R.Sz)
                )
                    return l.id;
            }
            return null;
        })(u.A.getGuildId()),
        e = r.A.getGuildsProto() ?? {},
        n = null != t ? e[t] : null,
        l = null != n && n.disableRaidAlertNag;
    return { show: null != t && !l, guildId: t };
}
function I(t) {
    return (0, l.bG)([a.A, s.A], () => {
        let e = s.A.getGuild(t);
        return (0, E.nc)(e, a.A);
    });
}
n(652215);
