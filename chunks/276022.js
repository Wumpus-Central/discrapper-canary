n.d(t, { Z: () => m }), n(653041);
var i = n(200651),
    r = n(192379),
    a = n(442837),
    l = n(481060),
    u = n(139387),
    o = n(230711),
    d = n(213459),
    s = n(434404),
    c = n(795594),
    f = n(430824),
    _ = n(496675),
    E = n(981631),
    p = n(388032);
function m(e) {
    var t;
    let { user: m, application: h, guildId: N, context: C, onItemClick: A } = e,
        T = null !== (t = null == h ? void 0 : h.id) && void 0 !== t ? t : null == m ? void 0 : m.id,
        g = f.Z.getGuild(N),
        v = (0, a.e7)([_.Z], () => (null != g ? _.Z.can(E.Plq.MANAGE_GUILD, g) : null)),
        I = (0, d.LD)(N, !0),
        R = (0, d.PL)(!0, !0),
        { isUserApp: O, isGuildApp: P } = r.useMemo(() => {
            var e, t, n, i;
            if (null == T)
                return {
                    isGuildApp: !1,
                    isUserApp: !1
                };
            let r = Object.values(null !== (n = null === (e = I.result) || void 0 === e ? void 0 : e.sections) && void 0 !== n ? n : {}),
                a = Object.values(null !== (i = null === (t = R.result) || void 0 === t ? void 0 : t.sections) && void 0 !== i ? i : {});
            return {
                isGuildApp: r.some((e) => {
                    var t;
                    return (null === (t = e.descriptor.application) || void 0 === t ? void 0 : t.id) === T;
                }),
                isUserApp: a.some((e) => {
                    var t;
                    return (null === (t = e.descriptor.application) || void 0 === t ? void 0 : t.id) === T;
                })
            };
        }, [I, R, T]);
    r.useEffect(() => {
        n(360606);
    }, []);
    let S = r.useCallback(() => {
            (null == g ? void 0 : g.id) != null && (s.Z.open(g.id, E.pNK.INTEGRATIONS), u.Z.setSection(E.b4C.APPLICATION, T), null == A || A());
        }, [T, null == g ? void 0 : g.id, A]),
        Z = r.useCallback(() => {
            o.Z.open(E.oAB.AUTHORIZED_APPS);
            let e = '';
            null != h ? (e = h.name) : null != m && (e = m.username), '' !== e && c.J.setState({ searchQuery: e }), null == A || A();
        }, [h, A, m]);
    if (C === E.IlC.POPOUT) return null;
    let b = [];
    return (
        P &&
            v &&
            b.push(
                (0, i.jsx)(
                    l.sNh,
                    {
                        id: 'manage-server-integration',
                        label: p.intl.string(p.t.IuSJT0),
                        action: S
                    },
                    'manage-server-integration'
                )
            ),
        O &&
            b.push(
                (0, i.jsx)(
                    l.sNh,
                    {
                        id: 'manage-authorized-app',
                        label: p.intl.string(p.t.V8ruv7),
                        action: Z
                    },
                    'manage-authorized-app'
                )
            ),
        b
    );
}
