(n.d(t, {
    g: () => I,
    mI: () => p
}),
    n(388685));
var i = n(149765),
    r = n(399606),
    l = n(581883),
    o = n(430824),
    s = n(496675),
    a = n(914010),
    c = n(594174),
    d = n(700785),
    u = n(709054),
    h = n(533244),
    _ = n(487419),
    E = n(676770);
function p(e) {
    let t = (0, r.e7)([o.Z, s.Z], () => {
            let t = o.Z.getGuild(e);
            if (null == t) return !1;
            let n = s.Z.getGuildPermissions(t);
            return null != n && i.Db(n, E.cv);
        }),
        n = (0, r.e7)([_.Z], () => (null != e ? _.Z.getGuildIncident(e) : null)),
        l = null != n && (0, h.ur)(n);
    return {
        shouldShowIncidentActions: t,
        incidentData: n,
        isUnderLockdown: l
    };
}
function I() {
    var e;
    let t = (function (e) {
            let t = c.default.getCurrentUser(),
                n = _.Z.getIncidentsByGuild();
            for (let r of u.default.keys(n).map((e) => o.Z.getGuild(e))) {
                if (null == r) continue;
                let l = n[r.id];
                if (
                    !(null == l || (!(0, h.i9)(l) && !(0, h.ur)(l)) || ((0, h.ur)(l) && r.id !== e)) &&
                    i.Db(
                        d.uB({
                            user: t,
                            context: r,
                            checkElevated: !1
                        }),
                        E.cv
                    )
                )
                    return r.id;
            }
            return null;
        })(a.Z.getGuildId()),
        n = null != (e = l.Z.getGuildsProto()) ? e : {},
        r = null != t ? n[t] : null,
        s = null != r && r.disableRaidAlertNag;
    return {
        show: null != t && !s,
        guildId: t
    };
}
n(981631);
