n.d(t, { A: () => s });
var i = n(858899),
    r = n(869146),
    a = n(105292);
async function s(e) {
    let { windowKey: t, openWindow: n, onWindowOpened: s, refreshProxyTicket: l, onRefreshFailed: o } = e;
    (n(), r.A.getWindowOpen(t))
        ? (s?.(), (await l()) || o?.())
        : (0, i.P0)({ text: a.intl.string(a.t["2DP8cR"]), variant: "critical" });
}
