n.d(t, { A: () => c, U: () => d });
var i = n(17928),
    r = n(245179),
    a = n(874421),
    s = n(886540),
    l = n(260498),
    o = n(935208);
function d(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
    return (0, i.yK)(
        [l.Ay, r.A],
        () =>
            e()
                .map((e) => {
                    let t = (0, s.Ji)(r.A.getMessages(e.id));
                    return {
                        project: e,
                        turnStartedAt: null != t ? (0, a.S)(t) : null,
                        finishedAt: r.A.getFinishedAt(e.id),
                    };
                })
                .map((e) => ({
                    project: e.project,
                    time: (function (e) {
                        var t;
                        let n,
                            { project: i, turnStartedAt: r, finishedAt: a } = e;
                        return Math.max(
                            /^\d+$/.test(i.id) ? o.default.extractTimestamp(i.id) : 0,
                            Number.isNaN((n = null == (t = i.updated_at) ? 0 : Date.parse(t))) ? 0 : n,
                            r ?? 0,
                            a ?? 0,
                        );
                    })(e),
                }))
                .sort((e, t) => {
                    var n, i;
                    return e.time !== t.time
                        ? t.time - e.time
                        : ((n = e.project.id),
                          (i = t.project.id),
                          n.length !== i.length ? i.length - n.length : n < i ? 1 : n > i ? -1 : 0);
                })
                .map((e) => {
                    let { project: t } = e;
                    return t;
                }),
        t,
    );
}
function c() {
    return d(() => l.Ay.getOwnedProjects());
}
