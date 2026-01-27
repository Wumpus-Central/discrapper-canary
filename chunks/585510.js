n.d(t, {
    Li: () => O,
    _g: () => p,
    dj: () => N,
}),
    n(896048);
var r = n(136722),
    i = n(417597),
    l = n(617617),
    o = n(358776),
    a = n(71393),
    s = n(576705),
    c = n(967198),
    u = n(287809),
    E = n(488926),
    d = n(661191),
    _ = n(974103),
    T = n(903093),
    A = n(610136),
    I = n(218113);

function O(e) {
    let t = (0, i.bG)([a.A, s.A], () => {
            let t = a.A.getGuild(e);
            if (null == t) return !1;
            let n = s.A.getGuildPermissions(t);
            return null != n && r.X8(n, I.Sz);
        }),
        n = (0, i.bG)([A.A], () => (null != e ? A.A.getGuildIncident(e) : null)),
        l = null != n && (0, T._J)(n);
    return {
        shouldShowIncidentActions: t,
        incidentData: n,
        isUnderLockdown: l,
    };
}

function N() {
    var e;
    let t = (function (e) {
            let t = u.default.getCurrentUser(),
                n = A.A.getIncidentsByGuild();
            for (let i of d.default.keys(n).map((e) => a.A.getGuild(e))) {
                if (null == i) continue;
                let l = n[i.id];
                if (
                    !(null == l || (!(0, T.k$)(l) && !(0, T._J)(l)) || ((0, T._J)(l) && i.id !== e)) &&
                    r.X8(
                        E.cc({
                            user: t,
                            context: i,
                            checkElevated: !1,
                        }),
                        I.Sz,
                    )
                )
                    return i.id;
            }
            return null;
        })(c.A.getGuildId()),
        n = null != (e = l.A.getGuildsProto()) ? e : {},
        i = null != t ? n[t] : null,
        o = null != i && i.disableRaidAlertNag;
    return {
        show: null != t && !o,
        guildId: t,
    };
}

function p(e) {
    let t = (0, o.t0)("useShowAntiRaidInGuildNotifSettings"),
        n = (0, i.bG)([s.A, a.A], () => {
            let t = a.A.getGuild(e);
            return (0, _.nc)(t, s.A);
        });
    return t && n;
}
n(652215);
