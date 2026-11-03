n.d(t, { B8: () => a, Nu: () => s, uC: () => r });
var i = n(935208);
function r(e) {
    var t;
    let n;
    return Math.max(
        /^\d+$/.test(e.id) ? i.default.extractTimestamp(e.id) : 0,
        Number.isNaN((n = null == (t = e.updated_at) ? 0 : Date.parse(t))) ? 0 : n,
    );
}
function a(e) {
    return [...e]
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
        });
}
function s(e) {
    return a(
        e.map((e) => ({
            project: e.project,
            time: (function (e) {
                let { project: t, turnStartedAt: n, finishedAt: i } = e;
                return Math.max(r(t), n ?? 0, i ?? 0);
            })(e),
        })),
    );
}
