a.d(t, { A: () => c, U: () => s });
var n = a(17928),
    i = a(245179),
    r = a(874421),
    l = a(886540),
    u = a(260498),
    o = a(935208);
function s(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
    return (0, n.yK)(
        [u.Ay, i.A],
        () =>
            e()
                .map((e) => {
                    let t = (0, l.Ji)(i.A.getMessages(e.id));
                    return {
                        project: e,
                        turnStartedAt: null != t ? (0, r.S)(t) : null,
                        finishedAt: i.A.getFinishedAt(e.id),
                    };
                })
                .map((e) => ({
                    project: e.project,
                    time: (function (e) {
                        var t;
                        let a,
                            { project: n, turnStartedAt: i, finishedAt: r } = e;
                        return Math.max(
                            /^\d+$/.test(n.id) ? o.default.extractTimestamp(n.id) : 0,
                            Number.isNaN((a = null == (t = n.updated_at) ? 0 : Date.parse(t))) ? 0 : a,
                            i ?? 0,
                            r ?? 0,
                        );
                    })(e),
                }))
                .sort((e, t) => {
                    var a, n;
                    return e.time !== t.time
                        ? t.time - e.time
                        : ((a = e.project.id),
                          (n = t.project.id),
                          a.length !== n.length ? n.length - a.length : a < n ? 1 : a > n ? -1 : 0);
                })
                .map((e) => {
                    let { project: t } = e;
                    return t;
                }),
        t,
    );
}
function c() {
    return s(() => u.Ay.getOwnedProjects());
}
