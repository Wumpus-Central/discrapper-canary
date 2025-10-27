n.d(t, { Z: () => s });
var r = n(857192),
    i = n(901077),
    l = n(915357),
    a = n(981631);
let s = (e) => {
    let { origin: t, postMessageToRPCClient: n, frameId: s, version: o, encoding: c, logger: u, postClose: d } = e;
    return new l.Z({
        origin: t,
        postMessageToRPCClient: n,
        frameId: s,
        version: o,
        encoding: c,
        logger: u,
        postClose: d,
        onSendingToRPCClient: (e, t) => {
            (r.default.isLoggingOverlayEvents || (e.cmd !== a.Etm.OVERLAY && e.evt !== a.zMe.OVERLAY)) &&
                u.info("Socket Emit: ".concat(t), (0, i.Z)(e));
        },
    });
};
