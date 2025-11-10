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
    _ = n(162157),
    p = n(533244),
    h = n(487419),
    m = n(676770);
function g(e) {
    let t = u.default.getCurrentUser(),
        n = h.Z.getIncidentsByGuild();
    for (let i of f.default.keys(n).map((e) => s.Z.getGuild(e))) {
        if (null == i) continue;
        let a = n[i.id];
        if (
            !(null == a || (!(0, p.i9)(a) && !(0, p.ur)(a)) || ((0, p.ur)(a) && i.id !== e)) &&
            r.Db(
                d.uB({
                    user: t,
                    context: i,
                    checkElevated: !1,
                }),
                m.cv,
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
            return null != n && r.Db(n, m.cv);
        }),
        n = (0, i.e7)([h.Z], () => (null != e ? h.Z.getGuildIncident(e) : null)),
        a = null != n && (0, p.ur)(n);
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
            return (0, _.al)(t, l.Z);
        });
    return t && n;
}
n(981631);
