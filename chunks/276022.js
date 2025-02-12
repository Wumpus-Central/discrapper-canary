t.d(n, { Z: () => A }), t(653041);
var i = t(200651),
    l = t(192379),
    a = t(442837),
    r = t(481060),
    u = t(139387),
    o = t(230711),
    d = t(213459),
    s = t(434404),
    c = t(795594),
    f = t(430824),
    v = t(496675),
    p = t(981631),
    h = t(388032);
function A(e) {
    var n;
    let { user: A, application: E, guildId: m, context: I, onItemClick: C } = e,
        N = null !== (n = null == E ? void 0 : E.id) && void 0 !== n ? n : null == A ? void 0 : A.id,
        R = f.Z.getGuild(m),
        Z = (0, a.e7)([v.Z], () => (null != R ? v.Z.can(p.Plq.MANAGE_GUILD, R) : null)),
        _ = (0, d.LD)(m, !0),
        T = (0, d.PL)(!0, !0),
        { isUserApp: g, isGuildApp: y } = l.useMemo(() => {
            var e, n, t, i;
            if (null == N)
                return {
                    isGuildApp: !1,
                    isUserApp: !1
                };
            let l = Object.values(null !== (t = null === (e = _.result) || void 0 === e ? void 0 : e.sections) && void 0 !== t ? t : {}),
                a = Object.values(null !== (i = null === (n = T.result) || void 0 === n ? void 0 : n.sections) && void 0 !== i ? i : {});
            return {
                isGuildApp: l.some((e) => {
                    var n;
                    return (null === (n = e.descriptor.application) || void 0 === n ? void 0 : n.id) === N;
                }),
                isUserApp: a.some((e) => {
                    var n;
                    return (null === (n = e.descriptor.application) || void 0 === n ? void 0 : n.id) === N;
                })
            };
        }, [_, T, N]);
    l.useEffect(() => {
        t(360606);
    }, []);
    let P = l.useCallback(() => {
            (null == R ? void 0 : R.id) != null && (s.Z.open(R.id, p.pNK.INTEGRATIONS), u.Z.setSection(p.b4C.APPLICATION, N), null == C || C());
        }, [N, null == R ? void 0 : R.id, C]),
        O = l.useCallback(() => {
            o.Z.open(p.oAB.AUTHORIZED_APPS);
            let e = '';
            null != E ? (e = E.name) : null != A && (e = A.username), '' !== e && c.J.setState({ searchQuery: e }), null == C || C();
        }, [E, C, A]);
    if (I === p.IlC.POPOUT) return null;
    let S = [];
    return (
        y &&
            Z &&
            S.push(
                (0, i.jsx)(
                    r.sNh,
                    {
                        id: 'manage-server-integration',
                        label: h.intl.string(h.t.IuSJT0),
                        action: P
                    },
                    'manage-server-integration'
                )
            ),
        g &&
            S.push(
                (0, i.jsx)(
                    r.sNh,
                    {
                        id: 'manage-authorized-app',
                        label: h.intl.string(h.t.V8ruv7),
                        action: O
                    },
                    'manage-authorized-app'
                )
            ),
        S
    );
}
