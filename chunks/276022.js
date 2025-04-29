n.d(t, { Z: () => m }), n(539854);
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
    _ = n(496675),
    p = n(981631),
    h = n(388032);
function m(e) {
    var t;
    let { user: m, application: g, guildId: E, context: b, onItemClick: y } = e,
        O = null != (t = null == g ? void 0 : g.id) ? t : null == m ? void 0 : m.id,
        v = f.Z.getGuild(E),
        I = (0, o.e7)([_.Z], () => (null != v ? _.Z.can(p.Plq.MANAGE_GUILD, v) : null)),
        S = !0,
        T = !0,
        A = (0, c.LD)(E, T),
        N = (0, c.PL)(S, T),
        { isUserApp: C, isGuildApp: R } = i.useMemo(() => {
            var e, t, n, r;
            if (null == O)
                return {
                    isGuildApp: !1,
                    isUserApp: !1
                };
            let i = Object.values(null != (n = null == (e = A.result) ? void 0 : e.sections) ? n : {}),
                o = Object.values(null != (r = null == (t = N.result) ? void 0 : t.sections) ? r : {});
            return {
                isGuildApp: i.some((e) => {
                    var t;
                    return (null == (t = e.descriptor.application) ? void 0 : t.id) === O;
                }),
                isUserApp: o.some((e) => {
                    var t;
                    return (null == (t = e.descriptor.application) ? void 0 : t.id) === O;
                })
            };
        }, [A, N, O]);
    i.useEffect(() => {
        n(360606);
    }, []);
    let P = i.useCallback(() => {
            (null == v ? void 0 : v.id) != null && (u.Z.open(v.id, p.pNK.INTEGRATIONS), s.Z.setSection(p.b4C.APPLICATION, O), null == y || y());
        }, [O, null == v ? void 0 : v.id, y]),
        w = i.useCallback(() => {
            l.Z.open(p.oAB.AUTHORIZED_APPS);
            let e = '';
            null != g ? (e = g.name) : null != m && (e = m.username), '' !== e && d.J.setState({ searchQuery: e }), null == y || y();
        }, [g, y, m]);
    if (b === p.IlC.POPOUT) return null;
    let D = [];
    return (
        R &&
            I &&
            D.push(
                (0, r.jsx)(
                    a.sNh,
                    {
                        id: 'manage-server-integration',
                        label: h.intl.string(h.t.IuSJT0),
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
                        label: h.intl.string(h.t.V8ruv7),
                        action: w
                    },
                    'manage-authorized-app'
                )
            ),
        D
    );
}
