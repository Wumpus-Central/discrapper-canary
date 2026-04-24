l.d(t, { A: () => j }), l(321073);
var n = l(627968),
    s = l(64700),
    i = l(17928),
    r = l(477782),
    a = l(282956),
    o = l(264322),
    c = l(997509),
    d = l(780964),
    u = l(161236),
    m = l(858897),
    p = l(546183),
    x = l(71393),
    h = l(576705),
    A = l(652215),
    N = l(985018);
function j(e) {
    let { user: t, application: j, guildId: g, context: I, onItemClick: v } = e,
        T = j?.id ?? t?.id,
        _ = x.A.getGuild(g),
        C = (0, i.bG)([h.A], () => (null != _ ? h.A.can(A.xBc.MANAGE_GUILD, _) : null)),
        f = (0, o.ON)(g, !0),
        E = (0, o.A4)(!0, !0),
        P = (0, i.bG)([p.default], () => null != p.default.getNewestTokenForApplication(T)),
        { isUserApp: b, isGuildApp: S } = s.useMemo(() => {
            if (null == T) return { isGuildApp: !1, isUserApp: !1 };
            let e = Object.values(f.result?.sections ?? {}),
                t = Object.values(E.result?.sections ?? {});
            return {
                isGuildApp: e.some((e) => e.descriptor.application?.id === T),
                isUserApp: t.some((e) => e.descriptor.application?.id === T),
            };
        }, [f, E, T]);
    s.useEffect(() => {
        l(53656);
    }, []);
    let y = s.useCallback(() => {
            _?.id != null && (c.A.open(_.id, A.BEX.INTEGRATIONS), a.A.setSection(A.wLn.APPLICATION, T), v?.());
        }, [T, _?.id, v]),
        L = s.useCallback(() => {
            (0, m.openUserSettings)(d.X.AUTHORIZED_APPS_PANEL);
            let e = "";
            null != j ? (e = j.name) : null != t && (e = t.username),
                "" !== e && u.iU.setState({ searchQuery: e }),
                v?.();
        }, [j, v, t]);
    if (I === A.BRT.POPOUT) return null;
    let D = [];
    return (
        S &&
            C &&
            D.push(
                (0, n.jsx)(
                    r.Dr,
                    { id: "manage-server-integration", label: N.intl.string(N.t.IuSJT8), action: y },
                    "manage-server-integration",
                ),
            ),
        b &&
            P &&
            D.push(
                (0, n.jsx)(
                    r.Dr,
                    { id: "manage-authorized-app", label: N.intl.string(N.t.V8ruvz), action: L },
                    "manage-authorized-app",
                ),
            ),
        D
    );
}
