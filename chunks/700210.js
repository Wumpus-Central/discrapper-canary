n.d(t, {
    A: () => E,
}),
    n(321073);
var r = n(627968),
    i = n(64700),
    a = n(311907),
    s = n(397927),
    o = n(282956),
    l = n(264322),
    c = n(997509),
    u = n(780964),
    d = n(891912),
    f = n(840065),
    p = n(546183),
    _ = n(71393),
    h = n(576705),
    m = n(652215),
    g = n(985018);

function E(e) {
    var t;
    let { user: E, application: b, guildId: y, context: O, onItemClick: A } = e,
        v = null != (t = null == b ? void 0 : b.id) ? t : null == E ? void 0 : E.id,
        S = _.A.getGuild(y),
        I = (0, a.bG)([h.A], () => (null != S ? h.A.can(m.xBc.MANAGE_GUILD, S) : null)),
        T = !0,
        C = !0,
        N = (0, l.ON)(y, C),
        R = (0, l.A4)(T, C),
        w = (0, a.bG)([p.default], () => null != p.default.getNewestTokenForApplication(v)),
        { isUserApp: P, isGuildApp: D } = i.useMemo(() => {
            var e, t, n, r;
            if (null == v)
                return {
                    isGuildApp: !1,
                    isUserApp: !1,
                };
            let i = Object.values(null != (e = null == (n = N.result) ? void 0 : n.sections) ? e : {}),
                a = Object.values(null != (t = null == (r = R.result) ? void 0 : r.sections) ? t : {});
            return {
                isGuildApp: i.some((e) => {
                    var t;
                    return (null == (t = e.descriptor.application) ? void 0 : t.id) === v;
                }),
                isUserApp: a.some((e) => {
                    var t;
                    return (null == (t = e.descriptor.application) ? void 0 : t.id) === v;
                }),
            };
        }, [N, R, v]);
    i.useEffect(() => {
        n(53656);
    }, []);
    let x = i.useCallback(() => {
            (null == S ? void 0 : S.id) != null &&
                (c.A.open(S.id, m.BEX.INTEGRATIONS), o.A.setSection(m.wLn.APPLICATION, v), null == A || A());
        }, [v, null == S ? void 0 : S.id, A]),
        L = i.useCallback(() => {
            (0, f.openUserSettings)(u.X.AUTHORIZED_APPS_PANEL, {
                section: m.nc_.AUTHORIZED_APPS,
            });
            let e = "";
            null != b ? (e = b.name) : null != E && (e = E.username),
                "" !== e &&
                    d.iU.setState({
                        searchQuery: e,
                    }),
                null == A || A();
        }, [b, A, E]);
    if (O === m.BRT.POPOUT) return null;
    let j = [];
    return (
        D &&
            I &&
            j.push(
                (0, r.jsx)(
                    s.Drp,
                    {
                        id: "manage-server-integration",
                        label: g.intl.string(g.t.IuSJT8),
                        action: x,
                    },
                    "manage-server-integration",
                ),
            ),
        P &&
            w &&
            j.push(
                (0, r.jsx)(
                    s.Drp,
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
