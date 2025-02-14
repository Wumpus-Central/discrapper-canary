t.d(n, { Z: () => A }), t(653041);
var i = t(200651),
    l = t(192379),
    a = t(442837),
    r = t(481060),
    o = t(139387),
    u = t(230711),
    d = t(213459),
    s = t(434404),
    c = t(795594),
    f = t(430824),
    v = t(496675),
    p = t(981631),
    h = t(388032);
function A(e) {
    var n;
    let { user: A, application: E, guildId: Z, context: m, onItemClick: I } = e,
        C = null !== (n = null == E ? void 0 : E.id) && void 0 !== n ? n : null == A ? void 0 : A.id,
        T = f.Z.getGuild(Z),
        g = (0, a.e7)([v.Z], () => (null != T ? v.Z.can(p.Plq.MANAGE_GUILD, T) : null)),
        N = (0, d.LD)(Z, !0),
        R = (0, d.PL)(!0, !0),
        { isUserApp: _, isGuildApp: S } = l.useMemo(() => {
            var e, n, t, i;
            if (null == C)
                return {
                    isGuildApp: !1,
                    isUserApp: !1
                };
            let l = Object.values(null !== (t = null === (e = N.result) || void 0 === e ? void 0 : e.sections) && void 0 !== t ? t : {}),
                a = Object.values(null !== (i = null === (n = R.result) || void 0 === n ? void 0 : n.sections) && void 0 !== i ? i : {});
            return {
                isGuildApp: l.some((e) => {
                    var n;
                    return (null === (n = e.descriptor.application) || void 0 === n ? void 0 : n.id) === C;
                }),
                isUserApp: a.some((e) => {
                    var n;
                    return (null === (n = e.descriptor.application) || void 0 === n ? void 0 : n.id) === C;
                })
            };
        }, [N, R, C]);
    l.useEffect(() => {
        t(360606);
    }, []);
    let y = l.useCallback(() => {
            (null == T ? void 0 : T.id) != null && (s.Z.open(T.id, p.pNK.INTEGRATIONS), o.Z.setSection(p.b4C.APPLICATION, C), null == I || I());
        }, [C, null == T ? void 0 : T.id, I]),
        O = l.useCallback(() => {
            u.Z.open(p.oAB.AUTHORIZED_APPS);
            let e = '';
            null != E ? (e = E.name) : null != A && (e = A.username), '' !== e && c.J.setState({ searchQuery: e }), null == I || I();
        }, [E, I, A]);
    if (m === p.IlC.POPOUT) return null;
    let P = [];
    return (
        S &&
            g &&
            P.push(
                (0, i.jsx)(
                    r.sNh,
                    {
                        id: 'manage-server-integration',
                        label: h.intl.string(h.t.IuSJT0),
                        action: y
                    },
                    'manage-server-integration'
                )
            ),
        _ &&
            P.push(
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
        P
    );
}
