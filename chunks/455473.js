t.d(n, { Z: () => s });
var a = t(54381),
    o = t(473749),
    r = t(442837),
    c = t(781780),
    i = t(701011),
    l = t(591472),
    d = t(80963),
    u = t(701488);
function s() {
    let e = (0, r.e7)([l.Z], () => l.Z.getConnectedFrame()),
        n = o.useCallback((e) => {
            let { application: n } = e;
            return (0, a.jsx)(d.Z, { applicationId: n.id });
        }, []),
        t = o.useCallback(
            (n) => {
                let { application: t } = n,
                    o = {};
                null != e &&
                    ((o.instance_id = "example-cl-instance"),
                    (o.platform = u.S4.DESKTOP),
                    null != e.proxyTicket && (o.discord_proxy_ticket = e.proxyTicket));
                let r = null == e ? void 0 : e.url;
                return (0, a.jsx)(c.Z, {
                    application: t,
                    queryParams: o,
                    url: r,
                });
            },
            [e],
        );
    return (0, a.jsx)(i.S, {
        activity: e,
        renderHeader: n,
        renderActivityIFrameWithLoadedData: t,
    });
}
