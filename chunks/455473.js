t.d(n, { Z: () => s });
var a = t(54381),
    o = t(473749),
    i = t(442837),
    r = t(781780),
    c = t(701011),
    l = t(591472),
    d = t(80963),
    u = t(701488);
function s() {
    let e = (0, i.e7)([l.Z], () => l.Z.getConnectedFrame()),
        n = (0, i.e7)(
            [l.Z],
            () => (null == e ? void 0 : e.applicationId) != null && l.Z.isProxyTicketRefreshing(e.applicationId),
            [e],
        ),
        t = o.useCallback((e) => {
            let { application: n } = e;
            return (0, a.jsx)(d.Z, { applicationId: n.id });
        }, []),
        s = o.useCallback(
            (n) => {
                let { application: t } = n,
                    o = {};
                null != e &&
                    ((o.instance_id = "example-cl-instance"),
                    (o.platform = u.S4.DESKTOP),
                    null != e.proxyTicket && (o.discord_proxy_ticket = e.proxyTicket));
                let i = null == e ? void 0 : e.url;
                return (0, a.jsx)(r.Z, {
                    application: t,
                    queryParams: o,
                    url: i,
                });
            },
            [e],
        );
    return (0, a.jsx)(c.S, {
        activity: e,
        isLoading: n,
        renderHeader: t,
        renderActivityIFrameWithLoadedData: s,
    });
}
