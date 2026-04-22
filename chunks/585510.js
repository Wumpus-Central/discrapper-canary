"use strict";
n.d(t, { Li: () => I, _g: () => N, dj: () => T });
var i = n(136722),
    r = n(417597),
    l = n(617617),
    s = n(71393),
    a = n(576705),
    o = n(967198),
    c = n(287809),
    u = n(488926),
    d = n(661191),
    _ = n(974103),
    E = n(903093),
    A = n(610136),
    m = n(218113);
function I(e) {
    let t = (0, r.bG)([s.A, a.A], () => {
            let t = s.A.getGuild(e);
            if (null == t) return !1;
            let n = a.A.getGuildPermissions(t);
            return null != n && i.X8(n, m.Sz);
        }),
        n = (0, r.bG)([A.A], () => (null != e ? A.A.getGuildIncident(e) : null)),
        l = null != n && (0, E._J)(n);
    return { shouldShowIncidentActions: t, incidentData: n, isUnderLockdown: l };
}
function T() {
    let e = (function (e) {
            let t = c.default.getCurrentUser(),
                n = A.A.getIncidentsByGuild();
            for (let r of d.default.keys(n).map((e) => s.A.getGuild(e))) {
                if (null == r) continue;
                let l = n[r.id];
                if (
                    !(null == l || (!(0, E.k$)(l) && !(0, E._J)(l)) || ((0, E._J)(l) && r.id !== e)) &&
                    i.X8(u.cc({ user: t, context: r, checkElevated: !1 }), m.Sz)
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
function N(e) {
    return (0, r.bG)([a.A, s.A], () => {
        let t = s.A.getGuild(e);
        return (0, _.nc)(t, a.A);
    });
}
n(652215);
