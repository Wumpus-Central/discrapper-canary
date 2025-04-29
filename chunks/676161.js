n.d(t, { Z: () => a }), n(642613);
var i = n(73800),
    r = n(700089),
    l = n(654455),
    o = n(496158);
function a(e) {
    let { context: t, commands: n, limit: a = n.length } = e,
        s = (0, o.D)(t),
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
                .slice(0, a),
        [c, u, s, a]
    );
}
