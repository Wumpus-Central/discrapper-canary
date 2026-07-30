r.d(a, { f: () => c });
var s = r(582128),
    t = r(390544),
    n = r(17928),
    p = r(311043),
    i = r(569926),
    l = r(498480),
    m = r(814201),
    u = r(24641);
function c() {
    let { enabled: e = !0 } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        [a, r] = s.useState(!1),
        [c, o] = s.useState(0);
    s.useEffect(() => {
        e && (0, l.hU)().catch(() => r(!0));
    }, [c, e]);
    let d = s.useCallback(() => {
            r(!1), o((e) => e + 1);
        }, []),
        v = (0, n.bG)([m.A], () => m.A.getGameServers()),
        _ = s.useMemo(() => v.map((e) => e.game_id), [v]);
    (0, i.x)(_);
    let g = (0, n.yK)([p.A], () => _.map((e) => p.A.getGame(e)?.name ?? ""), [_]);
    return {
        servers: s.useMemo(
            () =>
                v
                    .map((e, a) => {
                        var r;
                        return (
                            (r = g[a] ?? ""),
                            {
                                id: e.id,
                                serverName: e.name,
                                gameName: r,
                                gameId: e.game_id,
                                planName: e.plan_name,
                                playersOnline: `${e.players_count ?? 0}/${e.max_players_count ?? 0}`,
                                serverIp: null != e.ip && null != e.port ? `${e.ip}:${e.port}` : "",
                                isOnline: e.status === t.M.ONLINE,
                                location: e.region_name ?? "",
                                instance: (0, u.A)(e),
                            }
                        );
                    })
                    .reverse(),
            [v, g],
        ),
        maxServers: (0, n.bG)([m.A], () => m.A.getMaxServers()),
        hasError: a,
        refetch: d,
    };
}
