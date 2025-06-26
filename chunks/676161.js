n.d(t, { Z: () => a }), n(642613);
var i = n(73800),
    l = n(700089),
    r = n(654455),
    o = n(496158);
function a(e) {
    let { context: t, commands: n, limit: a = n.length } = e,
        c = (0, o.D)(t),
        s = (0, l.R)(c),
        u = i.useMemo(() => n.reduce((e, t) => ((e[t.id] = t), e), {}), [n]);
    return i.useMemo(
        () =>
            s
                .map((e) => u[e])
                .filter((e) => null != e)
                .sort((e, t) => {
                    let n = r.ZP.getScoreWithoutLoadingLatest(c, e);
                    return r.ZP.getScoreWithoutLoadingLatest(c, t) - n;
                })
                .slice(0, a),
        [s, u, c, a]
    );
}
