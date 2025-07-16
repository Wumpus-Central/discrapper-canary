(n.d(t, {
    g: () => p,
    mI: () => O
}),
    n(388685));
var r = n(149765),
    i = n(399606),
    l = n(581883),
    a = n(430824),
    o = n(496675),
    c = n(914010),
    s = n(594174),
    u = n(700785),
    d = n(709054),
    _ = n(533244),
    E = n(487419),
    I = n(676770);
function O(e) {
    let t = (0, i.e7)([a.Z, o.Z], () => {
            let t = a.Z.getGuild(e);
            if (null == t) return !1;
            let n = o.Z.getGuildPermissions(t);
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
            let t = s.default.getCurrentUser(),
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
                        I.cv
                    )
                )
                    return i.id;
            }
            return null;
        })(c.Z.getGuildId()),
        n = null != (e = l.Z.getGuildsProto()) ? e : {},
        i = null != t ? n[t] : null,
        o = null != i && i.disableRaidAlertNag;
    return {
        show: null != t && !o,
        guildId: t
    };
}
n(981631);
