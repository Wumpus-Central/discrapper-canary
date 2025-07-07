(n.d(t, {
    g: () => p,
    mI: () => I
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
    _ = n(533244),
    E = n(487419),
    h = n(676770);
function I(e) {
    let t = (0, r.e7)([o.Z, s.Z], () => {
            let t = o.Z.getGuild(e);
            if (null == t) return !1;
            let n = s.Z.getGuildPermissions(t);
            return null != n && i.Db(n, h.cv);
        }),
        n = (0, r.e7)([E.Z], () => (null != e ? E.Z.getGuildIncident(e) : null)),
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
            let t = c.default.getCurrentUser(),
                n = E.Z.getIncidentsByGuild();
            for (let r of u.default.keys(n).map((e) => o.Z.getGuild(e))) {
                if (null == r) continue;
                let l = n[r.id];
                if (
                    !(null == l || (!(0, _.i9)(l) && !(0, _.ur)(l)) || ((0, _.ur)(l) && r.id !== e)) &&
                    i.Db(
                        d.uB({
                            user: t,
                            context: r,
                            checkElevated: !1
                        }),
                        h.cv
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
