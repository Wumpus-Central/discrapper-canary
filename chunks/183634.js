n.d(t, { Z: () => a }), n(230036);
var i = n(192379),
    l = n(700089),
    r = n(654455),
    o = n(496158);
function a(e) {
    let { context: t, commands: n, limit: a = n.length } = e,
        s = (0, o.D)(t),
        c = (0, l.R)(s),
        u = i.useMemo(() => n.reduce((e, t) => ((e[t.id] = t), e), {}), [n]);
    return i.useMemo(
        () =>
            c
                .map((e) => u[e])
                .filter((e) => null != e)
                .sort((e, t) => {
                    let n = r.ZP.getScoreWithoutLoadingLatest(s, e);
                    return r.ZP.getScoreWithoutLoadingLatest(s, t) - n;
                })
                .slice(0, a),
        [c, u, s, a]
    );
}
