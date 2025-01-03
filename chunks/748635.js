var i = n(857192),
    r = n(901077),
    l = n(915357),
    a = n(981631);
t.Z = (e) => {
    let { origin: t, postMessageToRPCClient: n, frameId: s, version: o, encoding: c, logger: d, postClose: u } = e;
    return new l.Z({
        origin: t,
        postMessageToRPCClient: n,
        frameId: s,
        version: o,
        encoding: c,
        logger: d,
        postClose: u,
        onSendingToRPCClient: (e, t) => {
            (i.default.isLoggingOverlayEvents || (e.cmd !== a.Etm.OVERLAY && e.evt !== a.zMe.OVERLAY)) && d.info('Socket Emit: '.concat(t), (0, r.Z)(e));
        }
    });
};
