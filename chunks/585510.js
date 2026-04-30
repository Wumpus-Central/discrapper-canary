"use strict";
n.d(t, { Li: () => E, _g: () => g, dj: () => m });
var i = n(136722),
    r = n(702841),
    s = n(617617),
    a = n(71393),
    o = n(576705),
    l = n(967198),
    u = n(287809),
    c = n(488926),
    d = n(935208),
    _ = n(974103),
    f = n(903093),
    h = n(610136),
    p = n(218113);
function E(e) {
    let t = (0, r.bG)([a.A, o.A], () => {
            let t = a.A.getGuild(e);
            if (null == t) return !1;
            let n = o.A.getGuildPermissions(t);
            return null != n && i.X8(n, p.Sz);
        }),
        n = (0, r.bG)([h.A], () => (null != e ? h.A.getGuildIncident(e) : null)),
        s = null != n && (0, f._J)(n);
    return { shouldShowIncidentActions: t, incidentData: n, isUnderLockdown: s };
}
function m() {
    let e = (function (e) {
            let t = u.default.getCurrentUser(),
                n = h.A.getIncidentsByGuild();
            for (let r of d.default.keys(n).map((e) => a.A.getGuild(e))) {
                if (null == r) continue;
                let s = n[r.id];
                if (
                    !(null == s || (!(0, f.k$)(s) && !(0, f._J)(s)) || ((0, f._J)(s) && r.id !== e)) &&
                    i.X8(c.cc({ user: t, context: r, checkElevated: !1 }), p.Sz)
                )
                    return r.id;
            }
            return null;
        })(l.A.getGuildId()),
        t = s.A.getGuildsProto() ?? {},
        n = null != e ? t[e] : null,
        r = null != n && n.disableRaidAlertNag;
    return { show: null != e && !r, guildId: e };
}
function g(e) {
    return (0, r.bG)([o.A, a.A], () => {
        let t = a.A.getGuild(e);
        return (0, _.nc)(t, o.A);
    });
}
n(652215);
