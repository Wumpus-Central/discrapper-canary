t.d(e, {
    Z: function () {
        return g;
    }
}),
    t(653041);
var i = t(200651),
    r = t(192379),
    l = t(442837),
    a = t(481060),
    o = t(139387),
    d = t(230711),
    u = t(213459),
    s = t(434404),
    c = t(795594),
    f = t(430824),
    m = t(496675),
    p = t(981631),
    h = t(388032);
function g(n) {
    var e;
    let { user: g, application: v, guildId: _, context: E, onItemClick: Z } = n,
        x = null !== (e = null == v ? void 0 : v.id) && void 0 !== e ? e : null == g ? void 0 : g.id,
        I = f.Z.getGuild(_),
        T = (0, l.e7)([m.Z], () => (null != I ? m.Z.can(p.Plq.MANAGE_GUILD, I) : null)),
        A = (0, u.LD)(_, !0),
        b = (0, u.PL)(!0, !0),
        { isUserApp: M, isGuildApp: S } = r.useMemo(() => {
            var n, e, t, i;
            if (null == x)
                return {
                    isGuildApp: !1,
                    isUserApp: !1
                };
            let r = Object.values(null !== (t = null === (n = A.result) || void 0 === n ? void 0 : n.sections) && void 0 !== t ? t : {}),
                l = Object.values(null !== (i = null === (e = b.result) || void 0 === e ? void 0 : e.sections) && void 0 !== i ? i : {});
            return {
                isGuildApp: r.some((n) => {
                    var e;
                    return (null === (e = n.descriptor.application) || void 0 === e ? void 0 : e.id) === x;
                }),
                isUserApp: l.some((n) => {
                    var e;
                    return (null === (e = n.descriptor.application) || void 0 === e ? void 0 : e.id) === x;
                })
            };
        }, [A, b, x]);
    r.useEffect(() => {
        t(360606);
    }, []);
    let C = r.useCallback(() => {
            if ((null == I ? void 0 : I.id) != null) s.Z.open(I.id, p.pNK.INTEGRATIONS), o.Z.setSection(p.b4C.APPLICATION, x), null == Z || Z();
        }, [x, null == I ? void 0 : I.id, Z]),
        j = r.useCallback(() => {
            d.Z.open(p.oAB.AUTHORIZED_APPS);
            let n = '';
            null != v ? (n = v.name) : null != g && (n = g.username), '' !== n && c.J.setState({ searchQuery: n }), null == Z || Z();
        }, [v, Z, g]);
    if (E === p.IlC.POPOUT) return null;
    let y = [];
    return (
        S &&
            T &&
            y.push(
                (0, i.jsx)(
                    a.MenuItem,
                    {
                        id: 'manage-server-integration',
                        label: h.intl.string(h.t.IuSJT0),
                        action: C
                    },
                    'manage-server-integration'
                )
            ),
        M &&
            y.push(
                (0, i.jsx)(
                    a.MenuItem,
                    {
                        id: 'manage-authorized-app',
                        label: h.intl.string(h.t.V8ruv7),
                        action: j
                    },
                    'manage-authorized-app'
                )
            ),
        y
    );
}
