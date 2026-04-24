n.d(t, { Li: () => h, _g: () => S, dj: () => T });
var i = n(136722),
    l = n(702841),
    r = n(617617),
    a = n(71393),
    o = n(576705),
    s = n(967198),
    u = n(287809),
    d = n(488926),
    c = n(935208),
    E = n(974103),
    _ = n(903093),
    A = n(610136),
    I = n(218113);
function h(e) {
    let t = (0, l.bG)([a.A, o.A], () => {
            let t = a.A.getGuild(e);
            if (null == t) return !1;
            let n = o.A.getGuildPermissions(t);
            return null != n && i.X8(n, I.Sz);
        }),
        n = (0, l.bG)([A.A], () => (null != e ? A.A.getGuildIncident(e) : null)),
        r = null != n && (0, _._J)(n);
    return { shouldShowIncidentActions: t, incidentData: n, isUnderLockdown: r };
}
function T() {
    let e = (function (e) {
            let t = u.default.getCurrentUser(),
                n = A.A.getIncidentsByGuild();
            for (let l of c.default.keys(n).map((e) => a.A.getGuild(e))) {
                if (null == l) continue;
                let r = n[l.id];
                if (
                    !(null == r || (!(0, _.k$)(r) && !(0, _._J)(r)) || ((0, _._J)(r) && l.id !== e)) &&
                    i.X8(d.cc({ user: t, context: l, checkElevated: !1 }), I.Sz)
                )
                    return l.id;
            }
            return null;
        })(s.A.getGuildId()),
        t = r.A.getGuildsProto() ?? {},
        n = null != e ? t[e] : null,
        l = null != n && n.disableRaidAlertNag;
    return { show: null != e && !l, guildId: e };
}
function S(e) {
    return (0, l.bG)([o.A, a.A], () => {
        let t = a.A.getGuild(e);
        return (0, E.nc)(t, o.A);
    });
}
n(652215);
