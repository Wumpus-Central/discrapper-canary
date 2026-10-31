n.d(t, { A: () => d });
var i = n(627363),
    r = n(587895);
let a = new Set(),
    s = null;
async function l(e) {
    try {
        await i.Ay.fetchApplications(e, !1);
    } catch {}
}
function o() {
    s = null;
    let e = [...a];
    a.clear();
    for (let t = 0; t < e.length; t += 50) l(e.slice(t, t + 50));
}
function d(e) {
    null == e ||
        r.A.isHydrated(e) ||
        r.A.isFetchingApplication(e) ||
        r.A.didFetchingApplicationFail(e) ||
        (a.add(e), (s ??= setTimeout(o, 0)));
}
