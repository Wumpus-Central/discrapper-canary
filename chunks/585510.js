l.d(t, { Li: () => A, _g: () => I, dj: () => S });
var n = l(136722),
    i = l(702841),
    r = l(617617),
    s = l(71393),
    a = l(576705),
    u = l(967198),
    o = l(287809),
    c = l(488926),
    d = l(935208),
    E = l(974103),
    h = l(903093),
    _ = l(610136),
    T = l(218113);
function A(e) {
    let t = (0, i.bG)([s.A, a.A], () => {
            let t = s.A.getGuild(e);
            if (null == t) return !1;
            let l = a.A.getGuildPermissions(t);
            return null != l && n.X8(l, T.Sz);
        }),
        l = (0, i.bG)([_.A], () => (null != e ? _.A.getGuildIncident(e) : null)),
        r = null != l && (0, h._J)(l);
    return { shouldShowIncidentActions: t, incidentData: l, isUnderLockdown: r };
}
function S() {
    let e = (function (e) {
            let t = o.default.getCurrentUser(),
                l = _.A.getIncidentsByGuild();
            for (let i of d.default.keys(l).map((e) => s.A.getGuild(e))) {
                if (null == i) continue;
                let r = l[i.id];
                if (
                    !(null == r || (!(0, h.k$)(r) && !(0, h._J)(r)) || ((0, h._J)(r) && i.id !== e)) &&
                    n.X8(c.cc({ user: t, context: i, checkElevated: !1 }), T.Sz)
                )
                    return i.id;
            }
            return null;
        })(u.A.getGuildId()),
        t = r.A.getGuildsProto() ?? {},
        l = null != e ? t[e] : null,
        i = null != l && l.disableRaidAlertNag;
    return { show: null != e && !i, guildId: e };
}
function I(e) {
    return (0, i.bG)([a.A, s.A], () => {
        let t = s.A.getGuild(e);
        return (0, E.nc)(t, a.A);
    });
}
l(652215);
