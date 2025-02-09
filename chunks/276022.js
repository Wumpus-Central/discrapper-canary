t.d(n, { Z: () => g }), t(653041);
var l = t(200651),
    i = t(192379),
    r = t(442837),
    a = t(481060),
    u = t(139387),
    o = t(230711),
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
        I = (0, r.e7)([f.Z], () => (null != b ? f.Z.can(p.Plq.MANAGE_GUILD, b) : null)),
        S = (0, d.LD)(v, !0),
        M = (0, d.PL)(!0, !0),
        { isUserApp: C, isGuildApp: N } = i.useMemo(() => {
            var e, n, t, l;
            if (null == A)
                return {
                    isGuildApp: !1,
                    isUserApp: !1
                };
            let i = Object.values(null !== (t = null === (e = S.result) || void 0 === e ? void 0 : e.sections) && void 0 !== t ? t : {}),
                r = Object.values(null !== (l = null === (n = M.result) || void 0 === n ? void 0 : n.sections) && void 0 !== l ? l : {});
            return {
                isGuildApp: i.some((e) => {
                    var n;
                    return (null === (n = e.descriptor.application) || void 0 === n ? void 0 : n.id) === A;
                }),
                isUserApp: r.some((e) => {
                    var n;
                    return (null === (n = e.descriptor.application) || void 0 === n ? void 0 : n.id) === A;
                })
            };
        }, [S, M, A]);
    i.useEffect(() => {
        t(360606);
    }, []);
    let Z = i.useCallback(() => {
            (null == b ? void 0 : b.id) != null && (s.Z.open(b.id, p.pNK.INTEGRATIONS), u.Z.setSection(p.b4C.APPLICATION, A), null == m || m());
        }, [A, null == b ? void 0 : b.id, m]),
        y = i.useCallback(() => {
            o.Z.open(p.oAB.AUTHORIZED_APPS);
            let e = '';
            null != h ? (e = h.name) : null != g && (e = g.username), '' !== e && c.J.setState({ searchQuery: e }), null == m || m();
        }, [h, m, g]);
    if (T === p.IlC.POPOUT) return null;
    let P = [];
    return (
        N &&
            I &&
            P.push(
                (0, l.jsx)(
                    a.sNh,
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
                (0, l.jsx)(
                    a.sNh,
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
