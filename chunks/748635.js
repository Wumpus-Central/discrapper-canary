n.d(t, { Z: () => o });
var r = n(857192),
    i = n(901077),
    l = n(915357),
    a = n(981631);
let o = (e) => {
    let { origin: t, postMessageToRPCClient: n, frameId: o, version: s, encoding: c, logger: u, postClose: d } = e;
    return new l.Z({
        origin: t,
        postMessageToRPCClient: n,
        frameId: o,
        version: s,
        encoding: c,
        logger: u,
        postClose: d,
        onSendingToRPCClient: (e, t) => {
            (r.default.isLoggingOverlayEvents || (e.cmd !== a.Etm.OVERLAY && e.evt !== a.zMe.OVERLAY)) && u.info('Socket Emit: '.concat(t), (0, i.Z)(e));
        }
    });
};
