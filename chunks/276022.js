n.d(t, { Z: () => m }), n(653041);
var r = n(200651),
    i = n(192379),
    o = n(442837),
    a = n(481060),
    s = n(139387),
    l = n(230711),
    c = n(213459),
    u = n(434404),
    d = n(795594),
    f = n(430824),
    p = n(496675),
    _ = n(981631),
    h = n(388032);
function m(e) {
    var t;
    let { user: m, application: g, guildId: E, context: v, onItemClick: b } = e,
        y = null !== (t = null == g ? void 0 : g.id) && void 0 !== t ? t : null == m ? void 0 : m.id,
        O = f.Z.getGuild(E),
        S = (0, o.e7)([p.Z], () => (null != O ? p.Z.can(_.Plq.MANAGE_GUILD, O) : null)),
        I = !0,
        T = !0,
        N = (0, c.LD)(E, T),
        A = (0, c.PL)(I, T),
        { isUserApp: C, isGuildApp: R } = i.useMemo(() => {
            var e, t, n, r;
            if (null == y)
                return {
                    isGuildApp: !1,
                    isUserApp: !1
                };
            let i = Object.values(null !== (n = null === (e = N.result) || void 0 === e ? void 0 : e.sections) && void 0 !== n ? n : {}),
                o = Object.values(null !== (r = null === (t = A.result) || void 0 === t ? void 0 : t.sections) && void 0 !== r ? r : {});
            return {
                isGuildApp: i.some((e) => {
                    var t;
                    return (null === (t = e.descriptor.application) || void 0 === t ? void 0 : t.id) === y;
                }),
                isUserApp: o.some((e) => {
                    var t;
                    return (null === (t = e.descriptor.application) || void 0 === t ? void 0 : t.id) === y;
                })
            };
        }, [N, A, y]);
    i.useEffect(() => {
        n(360606);
    }, []);
    let P = i.useCallback(() => {
            (null == O ? void 0 : O.id) != null && (u.Z.open(O.id, _.pNK.INTEGRATIONS), s.Z.setSection(_.b4C.APPLICATION, y), null == b || b());
        }, [y, null == O ? void 0 : O.id, b]),
        w = i.useCallback(() => {
            l.Z.open(_.oAB.AUTHORIZED_APPS);
            let e = '';
            null != g ? (e = g.name) : null != m && (e = m.username), '' !== e && d.J.setState({ searchQuery: e }), null == b || b();
        }, [g, b, m]);
    if (v === _.IlC.POPOUT) return null;
    let D = [];
    return (
        R &&
            S &&
            D.push(
                (0, r.jsx)(
                    a.sNh,
                    {
                        id: 'manage-server-integration',
                        label: h.NW.string(h.t.IuSJT0),
                        action: P
                    },
                    'manage-server-integration'
                )
            ),
        C &&
            D.push(
                (0, r.jsx)(
                    a.sNh,
                    {
                        id: 'manage-authorized-app',
                        label: h.NW.string(h.t.V8ruv7),
                        action: w
                    },
                    'manage-authorized-app'
                )
            ),
        D
    );
}
