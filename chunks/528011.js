n.d(e, {
    g: function () {
        return m;
    },
    mI: function () {
        return p;
    }
}),
    n(47120);
var i = n(149765),
    r = n(399606),
    l = n(581883),
    o = n(430824),
    u = n(496675),
    a = n(914010),
    s = n(594174),
    c = n(700785),
    d = n(709054),
    f = n(533244),
    _ = n(487419),
    E = n(676770);
n(981631);
function p(t) {
    let e = (0, r.e7)([o.Z, u.Z], () => {
            let e = o.Z.getGuild(t);
            if (null == e) return !1;
            let n = u.Z.getGuildPermissions(e);
            return null != n && i.Db(n, E.cv);
        }),
        n = (0, r.e7)([_.Z], () => (null != t ? _.Z.getGuildIncident(t) : null)),
        l = null != n && (0, f.ur)(n);
    return {
        shouldShowIncidentActions: e,
        incidentData: n,
        isUnderLockdown: l
    };
}
function m() {
    var t;
    let e = (function (t) {
            let e = s.default.getCurrentUser(),
                n = _.Z.getIncidentsByGuild();
            for (let r of d.default.keys(n).map((t) => o.Z.getGuild(t))) {
                if (null == r) continue;
                let l = n[r.id];
                if (!(null == l || (!(0, f.i9)(l) && !(0, f.ur)(l)) || ((0, f.ur)(l) && r.id !== t))) {
                    if (
                        i.Db(
                            c.uB({
                                user: e,
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
        n = null !== (t = l.Z.getGuildsProto()) && void 0 !== t ? t : {},
        r = null != e ? n[e] : null,
        u = null != r && r.disableRaidAlertNag;
    return {
        show: null != e && !u,
        guildId: e
    };
}
