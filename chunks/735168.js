var i = n(858899),
    r = n(869146),
    a = n(792996);
n.d(
    t,
    {},
    {
        A: async function (e) {
            let { windowKey: t, openWindow: n, onWindowOpened: s, refreshProxyTicket: l, onRefreshFailed: o } = e;
            (n(), r.A.getWindowOpen(t))
                ? (s?.(), (await l()) || o?.())
                : (0, i.P0)({ text: a.intl.string(a.t["2DP8cR"]), variant: "critical" });
        },
    },
);
