n.d(t, { Z: () => E }), n(539854);
var r = n(951288),
    i = n(647438),
    a = n(442837),
    o = n(481060),
    s = n(139387),
    l = n(213459),
    c = n(434404),
    u = n(313789),
    d = n(795594),
    f = n(518596),
    _ = n(881998),
    p = n(430824),
    h = n(496675),
    m = n(981631),
    g = n(388032);
function E(e) {
    var t;
    let { user: E, application: b, guildId: y, context: O, onItemClick: v } = e,
        I = null != (t = null == b ? void 0 : b.id) ? t : null == E ? void 0 : E.id,
        T = p.Z.getGuild(y),
        S = (0, a.e7)([h.Z], () => (null != T ? h.Z.can(m.Plq.MANAGE_GUILD, T) : null)),
        A = !0,
        C = !0,
        N = (0, l.LD)(y, C),
        R = (0, l.PL)(A, C),
        P = (0, a.e7)([_.default], () => null != _.default.getNewestTokenForApplication(I)),
        { isUserApp: w, isGuildApp: D } = i.useMemo(() => {
            var e, t, n, r;
            if (null == I)
                return {
                    isGuildApp: !1,
                    isUserApp: !1,
                };
            let i = Object.values(null != (n = null == (e = N.result) ? void 0 : e.sections) ? n : {}),
                a = Object.values(null != (r = null == (t = R.result) ? void 0 : t.sections) ? r : {});
            return {
                isGuildApp: i.some((e) => {
                    var t;
                    return (null == (t = e.descriptor.application) ? void 0 : t.id) === I;
                }),
                isUserApp: a.some((e) => {
                    var t;
                    return (null == (t = e.descriptor.application) ? void 0 : t.id) === I;
                }),
            };
        }, [N, R, I]);
    i.useEffect(() => {
        n(145260);
    }, []);
    let x = i.useCallback(() => {
            (null == T ? void 0 : T.id) != null &&
                (c.Z.open(T.id, m.pNK.INTEGRATIONS), s.Z.setSection(m.b4C.APPLICATION, I), null == v || v());
        }, [I, null == T ? void 0 : T.id, v]),
        L = i.useCallback(() => {
            (0, f.openUserSettings)(u.n.AUTHORIZED_APPS_PANEL, { section: m.oAB.AUTHORIZED_APPS });
            let e = "";
            null != b ? (e = b.name) : null != E && (e = E.username),
                "" !== e && d.J.setState({ searchQuery: e }),
                null == v || v();
        }, [b, v, E]);
    if (O === m.IlC.POPOUT) return null;
    let M = [];
    return (
        D &&
            S &&
            M.push(
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
        w &&
            P &&
            M.push(
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
        M
    );
}
