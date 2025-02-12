t.d(n, { Z: () => g }), t(653041);
var i = t(200651),
    l = t(192379),
    a = t(442837),
    r = t(481060),
    o = t(139387),
    u = t(230711),
    d = t(213459),
    s = t(434404),
    c = t(795594),
    _ = t(430824),
    f = t(496675),
    p = t(981631),
    E = t(388032);
function g(e) {
    var n;
    let { user: g, application: h, guildId: v, context: T, onItemClick: m } = e,
        A = null !== (n = null == h ? void 0 : h.id) && void 0 !== n ? n : null == g ? void 0 : g.id,
        b = _.Z.getGuild(v),
        I = (0, a.e7)([f.Z], () => (null != b ? f.Z.can(p.Plq.MANAGE_GUILD, b) : null)),
        S = (0, d.LD)(v, !0),
        M = (0, d.PL)(!0, !0),
        { isUserApp: C, isGuildApp: N } = l.useMemo(() => {
            var e, n, t, i;
            if (null == A)
                return {
                    isGuildApp: !1,
                    isUserApp: !1
                };
            let l = Object.values(null !== (t = null === (e = S.result) || void 0 === e ? void 0 : e.sections) && void 0 !== t ? t : {}),
                a = Object.values(null !== (i = null === (n = M.result) || void 0 === n ? void 0 : n.sections) && void 0 !== i ? i : {});
            return {
                isGuildApp: l.some((e) => {
                    var n;
                    return (null === (n = e.descriptor.application) || void 0 === n ? void 0 : n.id) === A;
                }),
                isUserApp: a.some((e) => {
                    var n;
                    return (null === (n = e.descriptor.application) || void 0 === n ? void 0 : n.id) === A;
                })
            };
        }, [S, M, A]);
    l.useEffect(() => {
        t(360606);
    }, []);
    let Z = l.useCallback(() => {
            (null == b ? void 0 : b.id) != null && (s.Z.open(b.id, p.pNK.INTEGRATIONS), o.Z.setSection(p.b4C.APPLICATION, A), null == m || m());
        }, [A, null == b ? void 0 : b.id, m]),
        y = l.useCallback(() => {
            u.Z.open(p.oAB.AUTHORIZED_APPS);
            let e = '';
            null != h ? (e = h.name) : null != g && (e = g.username), '' !== e && c.J.setState({ searchQuery: e }), null == m || m();
        }, [h, m, g]);
    if (T === p.IlC.POPOUT) return null;
    let P = [];
    return (
        N &&
            I &&
            P.push(
                (0, i.jsx)(
                    r.sNh,
                    {
                        id: 'manage-server-integration',
                        label: E.intl.string(E.t.IuSJT0),
                        action: Z
                    },
                    'manage-server-integration'
                )
            ),
        C &&
            P.push(
                (0, i.jsx)(
                    r.sNh,
                    {
                        id: 'manage-authorized-app',
                        label: E.intl.string(E.t.V8ruv7),
                        action: y
                    },
                    'manage-authorized-app'
                )
            ),
        P
    );
}
