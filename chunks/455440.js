n.d(t, { A: () => r });
var l = n(64700),
    i = n(56494),
    a = n(26909),
    s = n(555045);
function r(e) {
    let { context: t, commands: n, limit: r = n.length } = e,
        o = (0, s.e)(t),
        c = (0, i.F)(o),
        d = l.useMemo(() => n.reduce((e, t) => ((e[t.id] = t), e), {}), [n]);
    return l.useMemo(
        () =>
            c
                .map((e) => d[e])
                .filter((e) => null != e)
                .sort((e, t) => {
                    let n = a.Ay.getScoreWithoutLoadingLatest(o, e);
                    return a.Ay.getScoreWithoutLoadingLatest(o, t) - n;
                })
                .slice(0, r),
        [c, d, o, r],
    );
}
