n.d(t, {
    Li: () => E,
    _g: () => y,
    dj: () => b,
}),
    n(896048);
var r = n(136722),
    i = n(417597),
    a = n(617617),
    s = n(358776),
    o = n(71393),
    l = n(576705),
    c = n(967198),
    u = n(287809),
    d = n(488926),
    f = n(661191),
    p = n(974103),
    _ = n(903093),
    h = n(610136),
    m = n(218113);

function g(e) {
    let t = u.default.getCurrentUser(),
        n = h.A.getIncidentsByGuild();
    for (let i of f.default.keys(n).map((e) => o.A.getGuild(e))) {
        if (null == i) continue;
        let a = n[i.id];
        if (
            !(null == a || (!(0, _.k$)(a) && !(0, _._J)(a)) || ((0, _._J)(a) && i.id !== e)) &&
            r.X8(
                d.cc({
                    user: t,
                    context: i,
                    checkElevated: !1,
                }),
                m.Sz,
            )
        )
            return i.id;
    }
    return null;
}

function E(e) {
    let t = (0, i.bG)([o.A, l.A], () => {
            let t = o.A.getGuild(e);
            if (null == t) return !1;
            let n = l.A.getGuildPermissions(t);
            return null != n && r.X8(n, m.Sz);
        }),
        n = (0, i.bG)([h.A], () => (null != e ? h.A.getGuildIncident(e) : null)),
        a = null != n && (0, _._J)(n);
    return {
        shouldShowIncidentActions: t,
        incidentData: n,
        isUnderLockdown: a,
    };
}

function b() {
    var e;
    let t = g(c.A.getGuildId()),
        n = null != (e = a.A.getGuildsProto()) ? e : {},
        r = null != t ? n[t] : null,
        i = null != r && r.disableRaidAlertNag;
    return {
        show: null != t && !i,
        guildId: t,
    };
}

function y(e) {
    let t = (0, s.t0)("useShowAntiRaidInGuildNotifSettings"),
        n = (0, i.bG)([l.A, o.A], () => {
            let t = o.A.getGuild(e);
            return (0, p.nc)(t, l.A);
        });
    return t && n;
}
n(652215);
