n.d(t, {
    Tz: () => y,
    g: () => b,
    mI: () => E,
}),
    n(388685);
var r = n(149765),
    i = n(399606),
    a = n(581883),
    o = n(526665),
    s = n(430824),
    l = n(496675),
    c = n(914010),
    u = n(594174),
    d = n(700785),
    f = n(709054),
    p = n(162157),
    _ = n(533244),
    m = n(487419),
    h = n(676770);
function g(e) {
    let t = u.default.getCurrentUser(),
        n = m.Z.getIncidentsByGuild();
    for (let i of f.default.keys(n).map((e) => s.Z.getGuild(e))) {
        if (null == i) continue;
        let a = n[i.id];
        if (
            !(null == a || (!(0, _.i9)(a) && !(0, _.ur)(a)) || ((0, _.ur)(a) && i.id !== e)) &&
            r.Db(
                d.uB({
                    user: t,
                    context: i,
                    checkElevated: !1,
                }),
                h.cv,
            )
        )
            return i.id;
    }
    return null;
}
function E(e) {
    let t = (0, i.e7)([s.Z, l.Z], () => {
            let t = s.Z.getGuild(e);
            if (null == t) return !1;
            let n = l.Z.getGuildPermissions(t);
            return null != n && r.Db(n, h.cv);
        }),
        n = (0, i.e7)([m.Z], () => (null != e ? m.Z.getGuildIncident(e) : null)),
        a = null != n && (0, _.ur)(n);
    return {
        shouldShowIncidentActions: t,
        incidentData: n,
        isUnderLockdown: a,
    };
}
function b() {
    var e;
    let t = g(c.Z.getGuildId()),
        n = null != (e = a.Z.getGuildsProto()) ? e : {},
        r = null != t ? n[t] : null,
        i = null != r && r.disableRaidAlertNag;
    return {
        show: null != t && !i,
        guildId: t,
    };
}
function y(e) {
    let t = (0, o.gj)("useShowAntiRaidInGuildNotifSettings"),
        n = (0, i.e7)([l.Z, s.Z], () => {
            let t = s.Z.getGuild(e);
            return (0, p.al)(t, l.Z);
        });
    return t && n;
}
n(981631);
