n.d(t, {
    g: () => O,
    mI: () => N
}),
    n(388685);
var r = n(149765),
    i = n(399606),
    l = n(581883),
    o = n(430824),
    a = n(496675),
    s = n(914010),
    c = n(594174),
    u = n(700785),
    d = n(709054),
    E = n(533244),
    _ = n(487419),
    I = n(676770);
function N(e) {
    let t = (0, i.e7)([o.Z, a.Z], () => {
            let t = o.Z.getGuild(e);
            if (null == t) return !1;
            let n = a.Z.getGuildPermissions(t);
            return null != n && r.Db(n, I.cv);
        }),
        n = (0, i.e7)([_.Z], () => (null != e ? _.Z.getGuildIncident(e) : null)),
        l = null != n && (0, E.ur)(n);
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
                n = _.Z.getIncidentsByGuild();
            for (let i of d.default.keys(n).map((e) => o.Z.getGuild(e))) {
                if (null == i) continue;
                let l = n[i.id];
                if (
                    !(null == l || (!(0, E.i9)(l) && !(0, E.ur)(l)) || ((0, E.ur)(l) && i.id !== e)) &&
                    r.Db(
                        u.uB({
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
        })(s.Z.getGuildId()),
        n = null != (e = l.Z.getGuildsProto()) ? e : {},
        i = null != t ? n[t] : null,
        a = null != i && i.disableRaidAlertNag;
    return {
        show: null != t && !a,
        guildId: t
    };
}
n(981631);
