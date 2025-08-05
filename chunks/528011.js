(n.d(t, {
    g: () => g,
    mI: () => m
}),
    n(388685));
var r = n(149765),
    i = n(399606),
    a = n(581883),
    o = n(430824),
    s = n(496675),
    l = n(914010),
    c = n(594174),
    u = n(700785),
    d = n(709054),
    f = n(533244),
    _ = n(487419),
    p = n(676770);
function h(e) {
    let t = c.default.getCurrentUser(),
        n = _.Z.getIncidentsByGuild();
    for (let i of d.default.keys(n).map((e) => o.Z.getGuild(e))) {
        if (null == i) continue;
        let a = n[i.id];
        if (
            !(null == a || (!(0, f.i9)(a) && !(0, f.ur)(a)) || ((0, f.ur)(a) && i.id !== e)) &&
            r.Db(
                u.uB({
                    user: t,
                    context: i,
                    checkElevated: !1
                }),
                p.cv
            )
        )
            return i.id;
    }
    return null;
}
function m(e) {
    let t = (0, i.e7)([o.Z, s.Z], () => {
            let t = o.Z.getGuild(e);
            if (null == t) return !1;
            let n = s.Z.getGuildPermissions(t);
            return null != n && r.Db(n, p.cv);
        }),
        n = (0, i.e7)([_.Z], () => (null != e ? _.Z.getGuildIncident(e) : null)),
        a = null != n && (0, f.ur)(n);
    return {
        shouldShowIncidentActions: t,
        incidentData: n,
        isUnderLockdown: a
    };
}
function g() {
    var e;
    let t = h(l.Z.getGuildId()),
        n = null != (e = a.Z.getGuildsProto()) ? e : {},
        r = null != t ? n[t] : null,
        i = null != r && r.disableRaidAlertNag;
    return {
        show: null != t && !i,
        guildId: t
    };
}
n(981631);
