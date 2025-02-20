n.d(t, {
    $U: () => u,
    KP: () => p,
    Tn: () => c,
    dt: () => _,
    xx: () => d
});
var r = n(392711),
    i = n.n(r),
    o = n(544891),
    a = n(981631);
let s = 5,
    l = 1000000;
async function c() {
    return (
        await o.tn.get({
            url: a.ANM.NOTIFICATION_SNAPSHOTS,
            rejectWithError: !1
        })
    ).body;
}
async function u(e) {
    return (
        await o.tn.post({
            url: a.ANM.NOTIFICATION_SNAPSHOTS,
            body: { label: e },
            rejectWithError: !1
        })
    ).body;
}
async function d(e) {
    return (
        await o.tn.post({
            url: a.ANM.RESTORE_NOTIFICATION_SNAPSHOT(e),
            rejectWithError: !1
        })
    ).body;
}
async function f(e) {
    return (
        await o.tn.del({
            url: a.ANM.NOTIFICATION_SNAPSHOT(e),
            rejectWithError: !1
        })
    ).body;
}
async function p() {
    let e = await c(),
        t = i().sortBy(e, (e) => new Date(e.recorded_at).getTime());
    0 !== t.length && (await d(t[t.length - 1].id));
}
async function _(e) {
    if (e.length > 0) {
        var t;
        let n = i().sum(e.map((e) => e.length)),
            r = null !== (t = i().max(e.map((e) => e.length))) && void 0 !== t ? t : 0;
        if (e.length >= s || n + r > l) {
            let t = i().sortBy(e, (e) => new Date(e.recorded_at).getTime());
            await f(t[0].id);
        }
    }
    return u('Backup from '.concat(new Date().toLocaleDateString()));
}
