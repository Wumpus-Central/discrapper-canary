n.d(t, {
    $U: () => c,
    KP: () => _,
    Tn: () => u,
    dt: () => p,
    xx: () => d
});
var i = n(392711),
    r = n.n(i),
    a = n(544891),
    s = n(981631);
let o = 5,
    l = 1000000;
async function u() {
    return (
        await a.tn.get({
            url: s.ANM.NOTIFICATION_SNAPSHOTS,
            rejectWithError: !1
        })
    ).body;
}
async function c(e) {
    return (
        await a.tn.post({
            url: s.ANM.NOTIFICATION_SNAPSHOTS,
            body: { label: e },
            rejectWithError: !1
        })
    ).body;
}
async function d(e) {
    return (
        await a.tn.post({
            url: s.ANM.RESTORE_NOTIFICATION_SNAPSHOT(e),
            rejectWithError: !1
        })
    ).body;
}
async function f(e) {
    return (
        await a.tn.del({
            url: s.ANM.NOTIFICATION_SNAPSHOT(e),
            rejectWithError: !1
        })
    ).body;
}
async function _() {
    let e = await u(),
        t = r().sortBy(e, (e) => new Date(e.recorded_at).getTime());
    0 !== t.length && (await d(t[t.length - 1].id));
}
async function p(e) {
    if (e.length > 0) {
        var t;
        let n = r().sum(e.map((e) => e.length)),
            i = null !== (t = r().max(e.map((e) => e.length))) && void 0 !== t ? t : 0;
        if (e.length >= o || n + i > l) {
            let t = r().sortBy(e, (e) => new Date(e.recorded_at).getTime());
            await f(t[0].id);
        }
    }
    return c('Backup from '.concat(new Date().toLocaleDateString()));
}
