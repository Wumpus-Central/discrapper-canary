var i = n(627363),
    r = n(587895);
let a = new Set(),
    s = null;
function l() {
    s = null;
    let e = [...a];
    a.clear();
    for (let t = 0; t < e.length; t += 50)
        !(async function (e) {
            try {
                await i.Ay.fetchApplications(e, !1);
            } catch {}
        })(e.slice(t, t + 50));
}
n.d(
    t,
    {},
    {
        A: function (e) {
            null == e ||
                r.A.isHydrated(e) ||
                r.A.isFetchingApplication(e) ||
                r.A.didFetchingApplicationFail(e) ||
                (a.add(e), (s ??= setTimeout(l, 0)));
        },
    },
);
