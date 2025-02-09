n.d(e, {
    g: () => m,
    mI: () => p
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
    g = n(533244),
    _ = n(487419),
    f = n(676770);
function p(t) {
    let e = (0, r.e7)([a.Z, u.Z], () => {
            let e = a.Z.getGuild(t);
            if (null == e) return !1;
            let n = u.Z.getGuildPermissions(e);
            return null != n && i.Db(n, f.cv);
        }),
        n = (0, r.e7)([_.Z], () => (null != t ? _.Z.getGuildIncident(t) : null)),
        l = null != n && (0, g.ur)(n);
    return {
        shouldShowIncidentActions: e,
        incidentData: n,
        isUnderLockdown: l
    };
}
function m() {
    var t;
    let e = (function (t) {
            let e = o.default.getCurrentUser(),
                n = _.Z.getIncidentsByGuild();
            for (let r of c.default.keys(n).map((t) => a.Z.getGuild(t))) {
                if (null == r) continue;
                let l = n[r.id];
                if (
                    !(null == l || (!(0, g.i9)(l) && !(0, g.ur)(l)) || ((0, g.ur)(l) && r.id !== t)) &&
                    i.Db(
                        d.uB({
                            user: e,
                            context: r,
                            checkElevated: !1
                        }),
                        f.cv
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
