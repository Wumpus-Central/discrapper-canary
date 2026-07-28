t.d(a, { f: () => m });
var r = t(582128),
    s = t(390544),
    n = t(17928),
    i = t(760751),
    p = t(396748),
    l = t(98091),
    u = t(532555);
function m() {
    let { enabled: e = !0 } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        [a, t] = r.useState(!1),
        [m, c] = r.useState(0);
    r.useEffect(() => {
        e && (0, p.hU)().catch(() => t(!0));
    }, [m, e]);
    let o = r.useCallback(() => {
            t(!1), c((e) => e + 1);
        }, []),
        d = (0, n.bG)([l.A], () => l.A.getGameServers()),
        v = (0, n.yK)([l.A, i.A], () => l.A.getGameServers().map((e) => i.A.getDetectableGame(e.game_id)?.name ?? ""));
    return {
        servers: r.useMemo(
            () =>
                d
                    .map((e, a) => {
                        var t;
                        return (
                            (t = v[a] ?? ""),
                            {
                                id: e.id,
                                serverName: e.name,
                                gameName: t,
                                gameId: e.game_id,
                                planName: e.plan_name,
                                playersOnline: `${e.players_count ?? 0}/${e.max_players_count ?? 0}`,
                                serverIp: null != e.ip && null != e.port ? `${e.ip}:${e.port}` : "",
                                isOnline: e.status === s.M.ONLINE,
                                location: e.region_name ?? "",
                                instance: (0, u.A)(e),
                            }
                        );
                    })
                    .reverse(),
            [d, v],
        ),
        hasError: a,
        refetch: o,
    };
}
