n.d(t, {
    g: () => f,
    mI: () => p
}),
    n(388685);
var i = n(149765),
    s = n(399606),
    r = n(581883),
    l = n(430824),
    a = n(496675),
    o = n(914010),
    d = n(594174),
    h = n(700785),
    u = n(709054),
    c = n(533244),
    g = n(487419),
    C = n(676770);
function p(e) {
    let t = (0, s.e7)([l.Z, a.Z], () => {
            let t = l.Z.getGuild(e);
            if (null == t) return !1;
            let n = a.Z.getGuildPermissions(t);
            return null != n && i.Db(n, C.cv);
        }),
        n = (0, s.e7)([g.Z], () => (null != e ? g.Z.getGuildIncident(e) : null)),
        r = null != n && (0, c.ur)(n);
    return {
        shouldShowIncidentActions: t,
        incidentData: n,
        isUnderLockdown: r
    };
}
function f() {
    var e;
    let t = (function (e) {
            let t = d.default.getCurrentUser(),
                n = g.Z.getIncidentsByGuild();
            for (let s of u.default.keys(n).map((e) => l.Z.getGuild(e))) {
                if (null == s) continue;
                let r = n[s.id];
                if (
                    !(null == r || (!(0, c.i9)(r) && !(0, c.ur)(r)) || ((0, c.ur)(r) && s.id !== e)) &&
                    i.Db(
                        h.uB({
                            user: t,
                            context: s,
                            checkElevated: !1
                        }),
                        C.cv
                    )
                )
                    return s.id;
            }
            return null;
        })(o.Z.getGuildId()),
        n = null != (e = r.Z.getGuildsProto()) ? e : {},
        s = null != t ? n[t] : null,
        a = null != s && s.disableRaidAlertNag;
    return {
        show: null != t && !a,
        guildId: t
    };
}
n(981631);
