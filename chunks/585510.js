"use strict";
n.d(t, { Li: () => I, _g: () => p, dj: () => f });
var i = n(136722),
    r = n(702841),
    a = n(617617),
    s = n(71393),
    l = n(576705),
    o = n(967198),
    d = n(287809),
    c = n(488926),
    u = n(935208),
    _ = n(974103),
    E = n(903093),
    A = n(610136),
    h = n(218113);
function I(e) {
    let t = (0, r.bG)([s.A, l.A], () => {
            let t = s.A.getGuild(e);
            if (null == t) return !1;
            let n = l.A.getGuildPermissions(t);
            return null != n && i.X8(n, h.Sz);
        }),
        n = (0, r.bG)([A.A], () => (null != e ? A.A.getGuildIncident(e) : null)),
        a = null != n && (0, E._J)(n);
    return { shouldShowIncidentActions: t, incidentData: n, isUnderLockdown: a };
}
function f() {
    let e = (function (e) {
            let t = d.default.getCurrentUser(),
                n = A.A.getIncidentsByGuild();
            for (let r of u.default.keys(n).map((e) => s.A.getGuild(e))) {
                if (null == r) continue;
                let a = n[r.id];
                if (
                    !(null == a || (!(0, E.k$)(a) && !(0, E._J)(a)) || ((0, E._J)(a) && r.id !== e)) &&
                    i.X8(c.cc({ user: t, context: r, checkElevated: !1 }), h.Sz)
                )
                    return r.id;
            }
            return null;
        })(o.A.getGuildId()),
        t = a.A.getGuildsProto() ?? {},
        n = null != e ? t[e] : null,
        r = null != n && n.disableRaidAlertNag;
    return { show: null != e && !r, guildId: e };
}
function p(e) {
    return (0, r.bG)([l.A, s.A], () => {
        let t = s.A.getGuild(e);
        return (0, _.nc)(t, l.A);
    });
}
n(652215);
