n.d(t, { a: () => d }), n(321073);
var i = n(64700),
    s = n(311907),
    l = n(15285),
    a = n(843402),
    r = n(847521);
let o = (0, n(583613).L_)(function () {
    for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
    return new Set(t.map((e) => e.exePath));
});
function d() {
    let e = (0, s.yK)([l.Ay], () => l.Ay.getGamesSeen(!1)),
        t = (0, s.bG)([l.Ay], () => o(...l.Ay.getOverrides()));
    i.useEffect(() => ((0, a.a2)(), a.e0), []);
    let { gameHistory: n, robloxSubgameHistory: d } = i.useMemo(
        () =>
            e.reduce((e, t) => ((0, r.n1)(t) ? e.robloxSubgameHistory.push(t) : e.gameHistory.push(t), e), {
                gameHistory: [],
                robloxSubgameHistory: [],
            }),
        [e],
    );
    return { gameHistory: n, robloxSubgameHistory: d, overrideExePaths: t };
}
