n.d(e, {
    g: () => S,
    mI: () => f
}),
    n(47120);
var i = n(149765),
    r = n(399606),
    l = n(581883),
    a = n(430824),
    u = n(496675),
    s = n(914010),
    o = n(594174),
    d = n(700785),
    c = n(709054),
    _ = n(533244),
    g = n(487419),
    p = n(676770);
function f(t) {
    let e = (0, r.e7)([a.Z, u.Z], () => {
            let e = a.Z.getGuild(t);
            if (null == e) return !1;
            let n = u.Z.getGuildPermissions(e);
            return null != n && i.Db(n, p.cv);
        }),
        n = (0, r.e7)([g.Z], () => (null != t ? g.Z.getGuildIncident(t) : null)),
        l = null != n && (0, _.ur)(n);
    return {
        shouldShowIncidentActions: e,
        incidentData: n,
        isUnderLockdown: l
    };
}
function S() {
    var t;
    let e = (function (t) {
            let e = o.default.getCurrentUser(),
                n = g.Z.getIncidentsByGuild();
            for (let r of c.default.keys(n).map((t) => a.Z.getGuild(t))) {
                if (null == r) continue;
                let l = n[r.id];
                if (
                    !(null == l || (!(0, _.i9)(l) && !(0, _.ur)(l)) || ((0, _.ur)(l) && r.id !== t)) &&
                    i.Db(
                        d.uB({
                            user: e,
                            context: r,
                            checkElevated: !1
                        }),
                        p.cv
                    )
                )
                    return r.id;
            }
            return null;
        })(s.Z.getGuildId()),
        n = null !== (t = l.Z.getGuildsProto()) && void 0 !== t ? t : {},
        r = null != e ? n[e] : null,
        u = null != r && r.disableRaidAlertNag;
    return {
        show: null != e && !u,
        guildId: e
    };
}
n(981631);
