e.d(n, {
    g: function () {
        return g;
    },
    mI: function () {
        return p;
    }
}),
    e(47120);
var i = e(149765),
    r = e(399606),
    l = e(581883),
    u = e(430824),
    o = e(496675),
    a = e(914010),
    s = e(594174),
    c = e(700785),
    d = e(709054),
    f = e(533244),
    _ = e(487419),
    E = e(676770);
e(981631);
function p(t) {
    let n = (0, r.e7)([u.Z, o.Z], () => {
            let n = u.Z.getGuild(t);
            if (null == n) return !1;
            let e = o.Z.getGuildPermissions(n);
            return null != e && i.Db(e, E.cv);
        }),
        e = (0, r.e7)([_.Z], () => (null != t ? _.Z.getGuildIncident(t) : null)),
        l = null != e && (0, f.ur)(e);
    return {
        shouldShowIncidentActions: n,
        incidentData: e,
        isUnderLockdown: l
    };
}
function g() {
    var t;
    let n = (function (t) {
            let n = s.default.getCurrentUser(),
                e = _.Z.getIncidentsByGuild();
            for (let r of d.default.keys(e).map((t) => u.Z.getGuild(t))) {
                if (null == r) continue;
                let l = e[r.id];
                if (!(null == l || (!(0, f.i9)(l) && !(0, f.ur)(l)) || ((0, f.ur)(l) && r.id !== t))) {
                    if (
                        i.Db(
                            c.uB({
                                user: n,
                                context: r,
                                checkElevated: !1
                            }),
                            E.cv
                        )
                    )
                        return r.id;
                }
            }
            return null;
        })(a.Z.getGuildId()),
        e = null !== (t = l.Z.getGuildsProto()) && void 0 !== t ? t : {},
        r = null != n ? e[n] : null,
        o = null != r && r.disableRaidAlertNag;
    return {
        show: null != n && !o,
        guildId: n
    };
}
