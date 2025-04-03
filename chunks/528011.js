n.d(t, {
    g: () => p,
    mI: () => f
}),
    n(47120);
var r = n(149765),
    i = n(399606),
    l = n(581883),
    a = n(430824),
    s = n(496675),
    o = n(914010),
    u = n(594174),
    c = n(700785),
    d = n(709054),
    _ = n(533244),
    E = n(487419),
    I = n(676770);
function f(e) {
    let t = (0, i.e7)([a.Z, s.Z], () => {
            let t = a.Z.getGuild(e);
            if (null == t) return !1;
            let n = s.Z.getGuildPermissions(t);
            return null != n && r.Db(n, I.cv);
        }),
        n = (0, i.e7)([E.Z], () => (null != e ? E.Z.getGuildIncident(e) : null)),
        l = null != n && (0, _.ur)(n);
    return {
        shouldShowIncidentActions: t,
        incidentData: n,
        isUnderLockdown: l
    };
}
function p() {
    var e;
    let t = (function (e) {
            let t = u.default.getCurrentUser(),
                n = E.Z.getIncidentsByGuild();
            for (let i of d.default.keys(n).map((e) => a.Z.getGuild(e))) {
                if (null == i) continue;
                let l = n[i.id];
                if (
                    !(null == l || (!(0, _.i9)(l) && !(0, _.ur)(l)) || ((0, _.ur)(l) && i.id !== e)) &&
                    r.Db(
                        c.uB({
                            user: t,
                            context: i,
                            checkElevated: !1
                        }),
                        I.cv
                    )
                )
                    return i.id;
            }
            return null;
        })(o.Z.getGuildId()),
        n = null != (e = l.Z.getGuildsProto()) ? e : {},
        i = null != t ? n[t] : null,
        s = null != i && i.disableRaidAlertNag;
    return {
        show: null != t && !s,
        guildId: t
    };
}
n(981631);
