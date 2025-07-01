(n.d(t, { Z: () => o }), n(642613));
var l = n(73800),
    i = n(700089),
    r = n(654455),
    a = n(496158);
function o(e) {
    let { context: t, commands: n, limit: o = n.length } = e,
        s = (0, a.D)(t),
        c = (0, i.R)(s),
        u = l.useMemo(() => n.reduce((e, t) => ((e[t.id] = t), e), {}), [n]);
    return l.useMemo(
        () =>
            c
                .map((e) => u[e])
                .filter((e) => null != e)
                .sort((e, t) => {
                    let n = r.ZP.getScoreWithoutLoadingLatest(s, e);
                    return r.ZP.getScoreWithoutLoadingLatest(s, t) - n;
                })
                .slice(0, o),
        [c, u, s, o]
    );
}
