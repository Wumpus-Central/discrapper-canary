(n.d(t, {
    g: () => O,
    mI: () => S
}),
    n(388685));
var r = n(149765),
    i = n(399606),
    l = n(581883),
    a = n(430824),
    o = n(496675),
    s = n(914010),
    c = n(594174),
    u = n(700785),
    d = n(709054),
    _ = n(533244),
    E = n(487419),
    p = n(676770);
function S(e) {
    let t = (0, i.e7)([a.Z, o.Z], () => {
            let t = a.Z.getGuild(e);
            if (null == t) return !1;
            let n = o.Z.getGuildPermissions(t);
            return null != n && r.Db(n, p.cv);
        }),
        n = (0, i.e7)([E.Z], () => (null != e ? E.Z.getGuildIncident(e) : null)),
        l = null != n && (0, _.ur)(n);
    return {
        shouldShowIncidentActions: t,
        incidentData: n,
        isUnderLockdown: l
    };
}
function O() {
    var e;
    let t = (function (e) {
            let t = c.default.getCurrentUser(),
                n = E.Z.getIncidentsByGuild();
            for (let i of d.default.keys(n).map((e) => a.Z.getGuild(e))) {
                if (null == i) continue;
                let l = n[i.id];
                if (
                    !(null == l || (!(0, _.i9)(l) && !(0, _.ur)(l)) || ((0, _.ur)(l) && i.id !== e)) &&
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
        })(s.Z.getGuildId()),
        n = null != (e = l.Z.getGuildsProto()) ? e : {},
        i = null != t ? n[t] : null,
        o = null != i && i.disableRaidAlertNag;
    return {
        show: null != t && !o,
        guildId: t
    };
}
n(981631);
