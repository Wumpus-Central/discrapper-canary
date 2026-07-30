n.d(t, { f: () => m });
var r = n(582128),
    a = n(390544),
    u = n(17928),
    l = n(311043),
    i = n(569926),
    o = n(498480),
    c = n(814201),
    s = n(24641);
function m() {
    let { enabled: e = !0 } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        [t, n] = r.useState(!1),
        [m, p] = r.useState(0);
    r.useEffect(() => {
        e && (0, o.hU)().catch(() => n(!0));
    }, [m, e]);
    let d = r.useCallback(() => {
            n(!1), p((e) => e + 1);
        }, []),
        f = (0, u.bG)([c.A], () => c.A.getGameServers()),
        g = r.useMemo(() => f.map((e) => e.game_id), [f]);
    (0, i.x)(g);
    let v = (0, u.yK)([l.A], () => g.map((e) => l.A.getGame(e)?.name ?? ""), [g]);
    return {
        servers: r.useMemo(
            () =>
                f
                    .map((e, t) => {
                        var n;
                        return (
                            (n = v[t] ?? ""),
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
                                instance: (0, s.A)(e),
                            }
                        );
                    })
                    .reverse(),
            [f, v],
        ),
        hasError: t,
        refetch: d,
    };
}
