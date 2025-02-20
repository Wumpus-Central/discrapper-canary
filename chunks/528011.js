n.d(t, {
    g: () => y,
    mI: () => m
}),
    n(47120);
var r = n(149765),
    i = n(399606),
    l = n(581883),
    a = n(430824),
    o = n(496675),
    u = n(914010),
    s = n(594174),
    c = n(700785),
    d = n(709054),
    p = n(533244),
    g = n(487419),
    f = n(676770);
function m(e) {
    let t = (0, i.e7)([a.Z, o.Z], () => {
            let t = a.Z.getGuild(e);
            if (null == t) return !1;
            let n = o.Z.getGuildPermissions(t);
            return null != n && r.Db(n, f.cv);
        }),
        n = (0, i.e7)([g.Z], () => (null != e ? g.Z.getGuildIncident(e) : null)),
        l = null != n && (0, p.ur)(n);
    return {
        shouldShowIncidentActions: t,
        incidentData: n,
        isUnderLockdown: l
    };
}
function y() {
    var e;
    let t = (function (e) {
            let t = s.default.getCurrentUser(),
                n = g.Z.getIncidentsByGuild();
            for (let i of d.default.keys(n).map((e) => a.Z.getGuild(e))) {
                if (null == i) continue;
                let l = n[i.id];
                if (
                    !(null == l || (!(0, p.i9)(l) && !(0, p.ur)(l)) || ((0, p.ur)(l) && i.id !== e)) &&
                    r.Db(
                        c.uB({
                            user: t,
                            context: i,
                            checkElevated: !1
                        }),
                        f.cv
                    )
                )
                    return i.id;
            }
            return null;
        })(u.Z.getGuildId()),
        n = null !== (e = l.Z.getGuildsProto()) && void 0 !== e ? e : {},
        i = null != t ? n[t] : null,
        o = null != i && i.disableRaidAlertNag;
    return {
        show: null != t && !o,
        guildId: t
    };
}
n(981631);
