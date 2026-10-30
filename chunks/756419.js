n.d(t, { A: () => i });
var l = n(627363),
    r = n(587895);
let a = new Set(),
    o = null;
async function u(e) {
    try {
        await l.Ay.fetchApplications(e, !1);
    } catch {}
}
function s() {
    o = null;
    let e = [...a];
    a.clear();
    for (let t = 0; t < e.length; t += 50) u(e.slice(t, t + 50));
}
function i(e) {
    null == e ||
        r.A.isHydrated(e) ||
        r.A.isFetchingApplication(e) ||
        r.A.didFetchingApplicationFail(e) ||
        (a.add(e), (o ??= setTimeout(s, 0)));
}
