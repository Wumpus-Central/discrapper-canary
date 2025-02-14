n.d(t, { Z: () => s });
var i = n(857192),
    l = n(901077),
    r = n(915357),
    a = n(981631);
let s = (e) => {
    let { origin: t, postMessageToRPCClient: n, frameId: s, version: o, encoding: d, logger: c, postClose: u } = e;
    return new r.Z({
        origin: t,
        postMessageToRPCClient: n,
        frameId: s,
        version: o,
        encoding: d,
        logger: c,
        postClose: u,
        onSendingToRPCClient: (e, t) => {
            (i.default.isLoggingOverlayEvents || (e.cmd !== a.Etm.OVERLAY && e.evt !== a.zMe.OVERLAY)) && c.info('Socket Emit: '.concat(t), (0, l.Z)(e));
        }
    });
};
