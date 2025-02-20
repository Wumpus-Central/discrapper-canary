n.d(t, { Z: () => a });
var r = n(857192),
    i = n(901077),
    l = n(915357),
    o = n(981631);
let a = (e) => {
    let { origin: t, postMessageToRPCClient: n, frameId: a, version: s, encoding: c, logger: u, postClose: d } = e;
    return new l.Z({
        origin: t,
        postMessageToRPCClient: n,
        frameId: a,
        version: s,
        encoding: c,
        logger: u,
        postClose: d,
        onSendingToRPCClient: (e, t) => {
            (r.default.isLoggingOverlayEvents || (e.cmd !== o.Etm.OVERLAY && e.evt !== o.zMe.OVERLAY)) && u.info('Socket Emit: '.concat(t), (0, i.Z)(e));
        }
    });
};
