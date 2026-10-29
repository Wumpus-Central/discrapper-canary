i.d(e, { N: () => n });
var a = i(935208);
function n(t) {
    return t
        .map((t) => ({
            project: t.project,
            time: (function (t) {
                var e;
                let i,
                    { project: n, turnStartedAt: r, finishedAt: l } = t;
                return Math.max(
                    /^\d+$/.test(n.id) ? a.default.extractTimestamp(n.id) : 0,
                    Number.isNaN((i = null == (e = n.updated_at) ? 0 : Date.parse(e))) ? 0 : i,
                    r ?? 0,
                    l ?? 0,
                );
            })(t),
        }))
        .sort((t, e) => {
            var i, a;
            return t.time !== e.time
                ? e.time - t.time
                : ((i = t.project.id),
                  (a = e.project.id),
                  i.length !== a.length ? a.length - i.length : i < a ? 1 : i > a ? -1 : 0);
        })
        .map((t) => {
            let { project: e } = t;
            return e;
        });
}
