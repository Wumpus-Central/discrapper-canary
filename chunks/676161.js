n.d(t, { Z: () => o }), n(642613);
var i = n(192379),
    r = n(700089),
    l = n(654455),
    a = n(496158);
function o(e) {
    let { context: t, commands: n, limit: o = n.length } = e,
        s = (0, a.D)(t),
        c = (0, r.R)(s),
        u = i.useMemo(() => n.reduce((e, t) => ((e[t.id] = t), e), {}), [n]);
    return i.useMemo(
        () =>
            c
                .map((e) => u[e])
                .filter((e) => null != e)
                .sort((e, t) => {
                    let n = l.ZP.getScoreWithoutLoadingLatest(s, e);
                    return l.ZP.getScoreWithoutLoadingLatest(s, t) - n;
                })
                .slice(0, o),
        [c, u, s, o]
    );
}
