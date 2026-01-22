a.d(t, {
    A: () => f,
});
var c = a(627968),
    n = a(64700),
    l = a(311907),
    d = a(780376),
    r = a(625180),
    o = a(91242),
    i = a(905579);

function f(e) {
    let { applicationId: t } = e,
        a = (0, l.bG)([o.A], () => o.A.getConnectedFrame()),
        f = n.useCallback(async () => {
            await r.A.refreshProxyTicket({
                applicationId: t,
            }),
                i.A.popInFrame();
        }, [t]);
    return (0, c.jsx)(d.d, {
        hasActivity: null != a,
        applicationId: t,
        isRichPresenceInvite: !0,
        onConfirmClosePopout: f,
        channelId: void 0,
    });
}
