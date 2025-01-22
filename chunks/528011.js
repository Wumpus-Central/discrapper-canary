n.d(t, {
    g: function () {
        return p;
    },
    mI: function () {
        return C;
    }
}),
    n(47120);
var i = n(149765),
    r = n(399606),
    l = n(581883),
    o = n(430824),
    s = n(496675),
    a = n(914010),
    u = n(594174),
    d = n(700785),
    c = n(709054),
    h = n(533244),
    f = n(487419),
    g = n(676770);
n(981631);
function C(e) {
    let t = (0, r.e7)([o.Z, s.Z], () => {
            let t = o.Z.getGuild(e);
            if (null == t) return !1;
            let n = s.Z.getGuildPermissions(t);
            return null != n && i.Db(n, g.cv);
        }),
        n = (0, r.e7)([f.Z], () => (null != e ? f.Z.getGuildIncident(e) : null)),
        l = null != n && (0, h.ur)(n);
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
                n = f.Z.getIncidentsByGuild();
            for (let r of c.default.keys(n).map((e) => o.Z.getGuild(e))) {
                if (null == r) continue;
                let l = n[r.id];
                if (!(null == l || (!(0, h.i9)(l) && !(0, h.ur)(l)) || ((0, h.ur)(l) && r.id !== e))) {
                    if (
                        i.Db(
                            d.uB({
                                user: t,
                                context: r,
                                checkElevated: !1
                            }),
                            g.cv
                        )
                    )
                        return r.id;
                }
            }
            return null;
        })(a.Z.getGuildId()),
        n = null !== (e = l.Z.getGuildsProto()) && void 0 !== e ? e : {},
        r = null != t ? n[t] : null,
        s = null != r && r.disableRaidAlertNag;
    return {
        show: null != t && !s,
        guildId: t
    };
}
