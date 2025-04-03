n.d(t, { Z: () => o }), n(230036);
var i = n(192379),
    r = n(700089),
    l = n(654455),
    a = n(496158);
function o(e) {
    let { context: t, commands: n, limit: o = n.length } = e,
        c = (0, a.D)(t),
        s = (0, r.R)(c),
        u = i.useMemo(() => n.reduce((e, t) => ((e[t.id] = t), e), {}), [n]);
    return i.useMemo(
        () =>
            s
                .map((e) => u[e])
                .filter((e) => null != e)
                .sort((e, t) => {
                    let n = l.ZP.getScoreWithoutLoadingLatest(c, e);
                    return l.ZP.getScoreWithoutLoadingLatest(c, t) - n;
                })
                .slice(0, o),
        [s, u, c, o]
    );
}
