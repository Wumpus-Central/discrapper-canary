n.d(t, { f: () => s });
var r = n(582128),
    a = n(390544),
    u = n(17928),
    l = n(760751),
    i = n(498480),
    o = n(814201),
    c = n(24641);
function s() {
    let { enabled: e = !0 } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        [t, n] = r.useState(!1),
        [s, m] = r.useState(0);
    r.useEffect(() => {
        e && (0, i.hU)().catch(() => n(!0));
    }, [s, e]);
    let p = r.useCallback(() => {
            n(!1), m((e) => e + 1);
        }, []),
        d = (0, u.bG)([o.A], () => o.A.getGameServers()),
        f = (0, u.yK)([o.A, l.A], () => o.A.getGameServers().map((e) => l.A.getDetectableGame(e.game_id)?.name ?? ""));
    return {
        servers: r.useMemo(
            () =>
                d
                    .map((e, t) => {
                        var n;
                        return (
                            (n = f[t] ?? ""),
                            {
                                id: e.id,
                                serverName: e.name,
                                gameName: n,
                                gameId: e.game_id,
                                planName: e.plan_name,
                                playersOnline: `${e.players_count ?? 0}/${e.max_players_count ?? 0}`,
                                serverIp: null != e.ip && null != e.port ? `${e.ip}:${e.port}` : "",
                                isOnline: e.status === a.M.ONLINE,
                                location: e.region_name ?? "",
                                instance: (0, c.A)(e),
                            }
                        );
                    })
                    .reverse(),
            [d, f],
        ),
        hasError: t,
        refetch: p,
    };
}
