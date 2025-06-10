n.d(t, { Z: () => g }), n(539854);
var r = n(255367),
    i = n(73800),
    a = n(442837),
    o = n(481060),
    s = n(139387),
    l = n(230711),
    c = n(213459),
    u = n(434404),
    d = n(795594),
    f = n(881998),
    _ = n(430824),
    p = n(496675),
    h = n(981631),
    m = n(388032);
function g(e) {
    var t;
    let { user: g, application: E, guildId: b, context: y, onItemClick: O } = e,
        v = null != (t = null == E ? void 0 : E.id) ? t : null == g ? void 0 : g.id,
        I = _.Z.getGuild(b),
        S = (0, a.e7)([p.Z], () => (null != I ? p.Z.can(h.Plq.MANAGE_GUILD, I) : null)),
        T = !0,
        A = !0,
        N = (0, c.LD)(b, A),
        C = (0, c.PL)(T, A),
        R = (0, a.e7)([f.Z], () => {
            var e;
            return null != v && (null == (e = f.Z.getApps()) ? void 0 : e.find((e) => e.application.id === v)) != null;
        }),
        { isUserApp: P, isGuildApp: w } = i.useMemo(() => {
            var e, t, n, r;
            if (null == v)
                return {
                    isGuildApp: !1,
                    isUserApp: !1
                };
            let i = Object.values(null != (n = null == (e = N.result) ? void 0 : e.sections) ? n : {}),
                a = Object.values(null != (r = null == (t = C.result) ? void 0 : t.sections) ? r : {});
            return {
                isGuildApp: i.some((e) => {
                    var t;
                    return (null == (t = e.descriptor.application) ? void 0 : t.id) === v;
                }),
                isUserApp: a.some((e) => {
                    var t;
                    return (null == (t = e.descriptor.application) ? void 0 : t.id) === v;
                })
            };
        }, [N, C, v]);
    i.useEffect(() => {
        n(360606);
    }, []);
    let D = i.useCallback(() => {
            (null == I ? void 0 : I.id) != null && (u.Z.open(I.id, h.pNK.INTEGRATIONS), s.Z.setSection(h.b4C.APPLICATION, v), null == O || O());
        }, [v, null == I ? void 0 : I.id, O]),
        L = i.useCallback(() => {
            l.Z.open(h.oAB.AUTHORIZED_APPS);
            let e = '';
            null != E ? (e = E.name) : null != g && (e = g.username), '' !== e && d.J.setState({ searchQuery: e }), null == O || O();
        }, [E, O, g]);
    if (y === h.IlC.POPOUT) return null;
    let x = [];
    return (
        w &&
            S &&
            x.push(
                (0, r.jsx)(
                    o.sNh,
                    {
                        id: 'manage-server-integration',
                        label: m.intl.string(m.t.IuSJT0),
                        action: D
                    },
                    'manage-server-integration'
                )
            ),
        P &&
            R &&
            x.push(
                (0, r.jsx)(
                    o.sNh,
                    {
                        id: 'manage-authorized-app',
                        label: m.intl.string(m.t.V8ruv7),
                        action: L
                    },
                    'manage-authorized-app'
                )
            ),
        x
    );
}
