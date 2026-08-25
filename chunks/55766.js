t.d(n, { f: () => c });
var l = t(582128),
    r = t(390544),
    a = t(17928),
    s = t(311043),
    u = t(569926),
    i = t(498480),
    o = t(814201),
    p = t(24641);
function c() {
    let { enabled: e = !0 } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        [n, t] = l.useState(!1),
        [c, d] = l.useState(0);
    l.useEffect(() => {
        e && (0, i.hU)().catch(() => t(!0));
    }, [c, e]);
    let m = l.useCallback(() => {
            t(!1), d((e) => e + 1);
        }, []),
        f = (0, a.bG)([o.A], () => o.A.getGameServers()),
        v = l.useMemo(() => f.map((e) => e.game_id), [f]);
    (0, u.x)(v);
    let g = (0, a.yK)([s.A], () => v.map((e) => s.A.getGame(e)?.name ?? ""), [v]);
    return {
        servers: l.useMemo(
            () =>
                f
                    .map((e, n) => {
                        var t;
                        return (
                            (t = g[n] ?? ""),
                            {
                                id: e.id,
                                serverName: e.name,
                                gameName: t,
                                gameId: e.game_id,
                                planName: e.plan_name,
                                playersOnline: `${e.players_count ?? 0}/${e.max_players_count ?? 0}`,
                                serverIp: null != e.ip && null != e.port ? `${e.ip}:${e.port}` : "",
                                isOnline: e.status === r.M.ONLINE,
                                location: e.region_name ?? "",
                                instance: (0, p.A)(e),
                            }
                        );
                    })
                    .reverse(),
            [f, g],
        ),
        maxServers: (0, a.bG)([o.A], () => o.A.getMaxServers()),
        hasError: n,
        refetch: m,
    };
}
