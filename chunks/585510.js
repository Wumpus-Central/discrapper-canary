"use strict";
n.d(t, { Li: () => I, _g: () => R, dj: () => N });
var i = n(136722),
    r = n(417597),
    l = n(617617),
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
    let t = (0, r.bG)([s.A, a.A], () => {
            let t = s.A.getGuild(e);
            if (null == t) return !1;
            let n = a.A.getGuildPermissions(t);
            return null != n && i.X8(n, T.Sz);
        }),
        n = (0, r.bG)([u.A], () => (null != e ? u.A.getGuildIncident(e) : null)),
        l = null != n && (0, A._J)(n);
    return { shouldShowIncidentActions: t, incidentData: n, isUnderLockdown: l };
}
function N() {
    let e = (function (e) {
            let t = E.default.getCurrentUser(),
                n = u.A.getIncidentsByGuild();
            for (let r of _.default.keys(n).map((e) => s.A.getGuild(e))) {
                if (null == r) continue;
                let l = n[r.id];
                if (
                    !(null == l || (!(0, A.k$)(l) && !(0, A._J)(l)) || ((0, A._J)(l) && r.id !== e)) &&
                    i.X8(c.cc({ user: t, context: r, checkElevated: !1 }), T.Sz)
                )
                    return r.id;
            }
            return null;
        })(o.A.getGuildId()),
        t = l.A.getGuildsProto() ?? {},
        n = null != e ? t[e] : null,
        r = null != n && n.disableRaidAlertNag;
    return { show: null != e && !r, guildId: e };
}
function R(e) {
    return (0, r.bG)([a.A, s.A], () => {
        let t = s.A.getGuild(e);
        return (0, d.nc)(t, a.A);
    });
}
n(652215);
