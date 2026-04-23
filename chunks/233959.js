n.d(t, { A: () => s });
var i = n(111162),
    r = n(84002),
    a = n(603265),
    l = n(652215);
let s = (e) => {
    let { origin: t, postMessageToRPCClient: n, frameId: s, version: o, encoding: d, logger: u, postClose: c } = e;
    return new a.A({
        origin: t,
        postMessageToRPCClient: n,
        frameId: s,
        version: o,
        encoding: d,
        logger: u,
        postClose: c,
        onSendingToRPCClient: (e, t) => {
            (i.default.isLoggingOverlayEvents || (e.cmd !== l.e$_.OVERLAY && e.evt !== l.ZE4.OVERLAY)) &&
                u.info(`Socket Emit: ${t}`, (0, r.A)(e));
        },
    });
};
