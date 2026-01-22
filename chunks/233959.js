n.d(t, { A: () => s });
var r = n(111162),
    i = n(84002),
    l = n(603265),
    a = n(652215);
let s = (e) => {
    let { origin: t, postMessageToRPCClient: n, frameId: s, version: o, encoding: c, logger: u, postClose: d } = e;
    return new l.A({
        origin: t,
        postMessageToRPCClient: n,
        frameId: s,
        version: o,
        encoding: c,
        logger: u,
        postClose: d,
        onSendingToRPCClient: (e, t) => {
            (r.default.isLoggingOverlayEvents || (e.cmd !== a.e$_.OVERLAY && e.evt !== a.ZE4.OVERLAY)) &&
                u.info("Socket Emit: ".concat(t), (0, i.A)(e));
        },
    });
};
