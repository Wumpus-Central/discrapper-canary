var i = n(136722),
    r = n(164636),
    l = n(617617),
    u = n(71393),
    s = n(576705),
    o = n(967198),
    a = n(287809),
    E = n(488926),
    d = n(811091),
    _ = n(974103),
    c = n(903093),
    R = n(610136),
    A = n(218113);
(n(652215),
    n.d(
        e,
        {},
        {
            Li: function (t) {
                let e = (0, r.bG)([u.A, s.A], () => {
                        let e = u.A.getGuild(t);
                        if (null == e) return !1;
                        let n = s.A.getGuildPermissions(e);
                        return null != n && i.X8(n, A.Sz);
                    }),
                    n = (0, r.bG)([R.A], () => (null != t ? R.A.getGuildIncident(t) : null)),
                    l = null != n && (0, c._J)(n);
                return { shouldShowIncidentActions: e, incidentData: n, isUnderLockdown: l };
            },
            _g: function (t) {
                return (0, r.bG)([s.A, u.A], () => {
                    let e = u.A.getGuild(t);
                    return (0, _.nc)(e, s.A);
                });
            },
            dj: function () {
                let t = (function (t) {
                        let e = a.default.getCurrentUser(),
                            n = R.A.getIncidentsByGuild();
                        for (let r of d.default.keys(n).map((t) => u.A.getGuild(t))) {
                            if (null == r) continue;
                            let l = n[r.id];
                            if (
                                !(null == l || (!(0, c.k$)(l) && !(0, c._J)(l)) || ((0, c._J)(l) && r.id !== t)) &&
                                i.X8(E.cc({ user: e, context: r, checkElevated: !1 }), A.Sz)
                            )
                                return r.id;
                        }
                        return null;
                    })(o.A.getGuildId()),
                    e = l.A.getGuildsProto() ?? {},
                    n = null != t ? e[t] : null,
                    r = null != n && n.disableRaidAlertNag;
                return { show: null != t && !r, guildId: t };
            },
        },
    ));
