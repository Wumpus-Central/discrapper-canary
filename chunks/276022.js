n.d(t, { Z: () => E }), n(539854);
var r = n(54381),
    i = n(473749),
    a = n(442837),
    o = n(481060),
    s = n(139387),
    l = n(213459),
    c = n(434404),
    u = n(313789),
    d = n(795594),
    f = n(518596),
    p = n(881998),
    _ = n(430824),
    m = n(496675),
    h = n(981631),
    g = n(388032);
function E(e) {
    var t;
    let { user: E, application: b, guildId: y, context: O, onItemClick: v } = e,
        S = null != (t = null == b ? void 0 : b.id) ? t : null == E ? void 0 : E.id,
        I = _.Z.getGuild(y),
        T = (0, a.e7)([m.Z], () => (null != I ? m.Z.can(h.Plq.MANAGE_GUILD, I) : null)),
        A = !0,
        C = !0,
        N = (0, l.LD)(y, C),
        P = (0, l.PL)(A, C),
        R = (0, a.e7)([p.default], () => null != p.default.getNewestTokenForApplication(S)),
        { isUserApp: D, isGuildApp: w } = i.useMemo(() => {
            var e, t, n, r;
            if (null == S)
                return {
                    isGuildApp: !1,
                    isUserApp: !1,
                };
            let i = Object.values(null != (n = null == (e = N.result) ? void 0 : e.sections) ? n : {}),
                a = Object.values(null != (r = null == (t = P.result) ? void 0 : t.sections) ? r : {});
            return {
                isGuildApp: i.some((e) => {
                    var t;
                    return (null == (t = e.descriptor.application) ? void 0 : t.id) === S;
                }),
                isUserApp: a.some((e) => {
                    var t;
                    return (null == (t = e.descriptor.application) ? void 0 : t.id) === S;
                }),
            };
        }, [N, P, S]);
    i.useEffect(() => {
        n(145260);
    }, []);
    let x = i.useCallback(() => {
            (null == I ? void 0 : I.id) != null &&
                (c.Z.open(I.id, h.pNK.INTEGRATIONS), s.Z.setSection(h.b4C.APPLICATION, S), null == v || v());
        }, [S, null == I ? void 0 : I.id, v]),
        L = i.useCallback(() => {
            (0, f.openUserSettings)(u.n.AUTHORIZED_APPS_PANEL, { section: h.oAB.AUTHORIZED_APPS });
            let e = "";
            null != b ? (e = b.name) : null != E && (e = E.username),
                "" !== e && d.J.setState({ searchQuery: e }),
                null == v || v();
        }, [b, v, E]);
    if (O === h.IlC.POPOUT) return null;
    let j = [];
    return (
        w &&
            T &&
            j.push(
                (0, r.jsx)(
                    o.sNh,
                    {
                        id: "manage-server-integration",
                        label: g.intl.string(g.t.IuSJT8),
                        action: x,
                    },
                    "manage-server-integration",
                ),
            ),
        D &&
            R &&
            j.push(
                (0, r.jsx)(
                    o.sNh,
                    {
                        id: "manage-authorized-app",
                        label: g.intl.string(g.t.V8ruvz),
                        action: L,
                    },
                    "manage-authorized-app",
                ),
            ),
        j
    );
}
