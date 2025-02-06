a.d(n, { Z: () => h }), a(653041);
var i = a(200651),
    t = a(192379),
    l = a(442837),
    r = a(481060),
    o = a(139387),
    s = a(230711),
    u = a(213459),
    d = a(434404),
    c = a(795594),
    p = a(430824),
    _ = a(496675),
    f = a(981631),
    v = a(388032);
function h(e) {
    var n;
    let { user: h, application: g, guildId: A, context: b, onItemClick: x } = e,
        I = null !== (n = null == g ? void 0 : g.id) && void 0 !== n ? n : null == h ? void 0 : h.id,
        P = p.Z.getGuild(A),
        C = (0, l.e7)([_.Z], () => (null != P ? _.Z.can(f.Plq.MANAGE_GUILD, P) : null)),
        Z = (0, u.LD)(A, !0),
        N = (0, u.PL)(!0, !0),
        { isUserApp: m, isGuildApp: y } = t.useMemo(() => {
            var e, n, a, i;
            if (null == I)
                return {
                    isGuildApp: !1,
                    isUserApp: !1
                };
            let t = Object.values(null !== (a = null === (e = Z.result) || void 0 === e ? void 0 : e.sections) && void 0 !== a ? a : {}),
                l = Object.values(null !== (i = null === (n = N.result) || void 0 === n ? void 0 : n.sections) && void 0 !== i ? i : {});
            return {
                isGuildApp: t.some((e) => {
                    var n;
                    return (null === (n = e.descriptor.application) || void 0 === n ? void 0 : n.id) === I;
                }),
                isUserApp: l.some((e) => {
                    var n;
                    return (null === (n = e.descriptor.application) || void 0 === n ? void 0 : n.id) === I;
                })
            };
        }, [Z, N, I]);
    t.useEffect(() => {
        a(360606);
    }, []);
    let k = t.useCallback(() => {
            (null == P ? void 0 : P.id) != null && (d.Z.open(P.id, f.pNK.INTEGRATIONS), o.Z.setSection(f.b4C.APPLICATION, I), null == x || x());
        }, [I, null == P ? void 0 : P.id, x]),
        w = t.useCallback(() => {
            s.Z.open(f.oAB.AUTHORIZED_APPS);
            let e = '';
            null != g ? (e = g.name) : null != h && (e = h.username), '' !== e && c.J.setState({ searchQuery: e }), null == x || x();
        }, [g, x, h]);
    if (b === f.IlC.POPOUT) return null;
    let O = [];
    return (
        y &&
            C &&
            O.push(
                (0, i.jsx)(
                    r.sNh,
                    {
                        id: 'manage-server-integration',
                        label: v.intl.string(v.t.IuSJT0),
                        action: k
                    },
                    'manage-server-integration'
                )
            ),
        m &&
            O.push(
                (0, i.jsx)(
                    r.sNh,
                    {
                        id: 'manage-authorized-app',
                        label: v.intl.string(v.t.V8ruv7),
                        action: w
                    },
                    'manage-authorized-app'
                )
            ),
        O
    );
}
