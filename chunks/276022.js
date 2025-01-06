t.d(n, {
    Z: function () {
        return C;
    }
}),
    t(653041);
var i = t(200651),
    l = t(192379),
    a = t(442837),
    o = t(481060),
    r = t(139387),
    s = t(230711),
    c = t(213459),
    d = t(434404),
    u = t(795594),
    m = t(430824),
    p = t(496675),
    h = t(981631),
    f = t(388032);
function C(e) {
    var n;
    let { user: C, application: v, guildId: x, context: _, onItemClick: N } = e,
        g = null !== (n = null == v ? void 0 : v.id) && void 0 !== n ? n : null == C ? void 0 : C.id,
        A = m.Z.getGuild(x),
        E = (0, a.e7)([p.Z], () => (null != A ? p.Z.can(h.Plq.MANAGE_GUILD, A) : null)),
        b = (0, c.LD)(x, !0),
        I = (0, c.PL)(!0, !0),
        { isUserApp: P, isGuildApp: j } = l.useMemo(() => {
            var e, n, t, i;
            if (null == g)
                return {
                    isGuildApp: !1,
                    isUserApp: !1
                };
            let l = Object.values(null !== (t = null === (e = b.result) || void 0 === e ? void 0 : e.sections) && void 0 !== t ? t : {}),
                a = Object.values(null !== (i = null === (n = I.result) || void 0 === n ? void 0 : n.sections) && void 0 !== i ? i : {});
            return {
                isGuildApp: l.some((e) => {
                    var n;
                    return (null === (n = e.descriptor.application) || void 0 === n ? void 0 : n.id) === g;
                }),
                isUserApp: a.some((e) => {
                    var n;
                    return (null === (n = e.descriptor.application) || void 0 === n ? void 0 : n.id) === g;
                })
            };
        }, [b, I, g]);
    l.useEffect(() => {
        t(360606);
    }, []);
    let y = l.useCallback(() => {
            if ((null == A ? void 0 : A.id) != null) d.Z.open(A.id, h.pNK.INTEGRATIONS), r.Z.setSection(h.b4C.APPLICATION, g), null == N || N();
        }, [g, null == A ? void 0 : A.id, N]),
        S = l.useCallback(() => {
            s.Z.open(h.oAB.AUTHORIZED_APPS);
            let e = '';
            null != v ? (e = v.name) : null != C && (e = C.username), '' !== e && u.J.setState({ searchQuery: e }), null == N || N();
        }, [v, N, C]);
    if (_ === h.IlC.POPOUT) return null;
    let T = [];
    return (
        j &&
            E &&
            T.push(
                (0, i.jsx)(
                    o.MenuItem,
                    {
                        id: 'manage-server-integration',
                        label: f.intl.string(f.t.IuSJT0),
                        action: y
                    },
                    'manage-server-integration'
                )
            ),
        P &&
            T.push(
                (0, i.jsx)(
                    o.MenuItem,
                    {
                        id: 'manage-authorized-app',
                        label: f.intl.string(f.t.V8ruv7),
                        action: S
                    },
                    'manage-authorized-app'
                )
            ),
        T
    );
}
