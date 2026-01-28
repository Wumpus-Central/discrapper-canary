n.d(t, {
    Li: () => I,
    _g: () => N,
    dj: () => O,
}),
    n(896048);
var r = n(136722),
    i = n(417597),
    l = n(617617),
    o = n(71393),
    a = n(576705),
    s = n(967198),
    c = n(287809),
    u = n(488926),
    E = n(661191),
    d = n(974103),
    _ = n(903093),
    T = n(610136),
    A = n(218113);

function I(e) {
    let t = (0, i.bG)([o.A, a.A], () => {
            let t = o.A.getGuild(e);
            if (null == t) return !1;
            let n = a.A.getGuildPermissions(t);
            return null != n && r.X8(n, A.Sz);
        }),
        n = (0, i.bG)([T.A], () => (null != e ? T.A.getGuildIncident(e) : null)),
        l = null != n && (0, _._J)(n);
    return {
        shouldShowIncidentActions: t,
        incidentData: n,
        isUnderLockdown: l,
    };
}

function O() {
    var e;
    let t = (function (e) {
            let t = c.default.getCurrentUser(),
                n = T.A.getIncidentsByGuild();
            for (let i of E.default.keys(n).map((e) => o.A.getGuild(e))) {
                if (null == i) continue;
                let l = n[i.id];
                if (
                    !(null == l || (!(0, _.k$)(l) && !(0, _._J)(l)) || ((0, _._J)(l) && i.id !== e)) &&
                    r.X8(
                        u.cc({
                            user: t,
                            context: i,
                            checkElevated: !1,
                        }),
                        A.Sz,
                    )
                )
                    return i.id;
            }
            return null;
        })(s.A.getGuildId()),
        n = null != (e = l.A.getGuildsProto()) ? e : {},
        i = null != t ? n[t] : null,
        a = null != i && i.disableRaidAlertNag;
    return {
        show: null != t && !a,
        guildId: t,
    };
}

function N(e) {
    return (0, i.bG)([a.A, o.A], () => {
        let t = o.A.getGuild(e);
        return (0, d.nc)(t, a.A);
    });
}
n(652215);
