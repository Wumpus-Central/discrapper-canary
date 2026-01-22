a.d(t, { A: () => b });
var c = a(627968),
    n = a(64700),
    l = a(311907),
    d = a(833147),
    r = a(33445),
    o = a(91242),
    i = a(193855),
    f = a(360469);
function b() {
    let e = (0, l.bG)([o.A], () => o.A.getConnectedFrame()),
        t = (0, l.bG)(
            [o.A],
            () => (null == e ? void 0 : e.applicationId) != null && o.A.isProxyTicketRefreshing(e.applicationId),
            [e],
        ),
        a = n.useCallback((e) => {
            let { application: t } = e;
            return (0, c.jsx)(i.A, { applicationId: t.id });
        }, []),
        b = n.useCallback(
            (t) => {
                let { application: a } = t,
                    n = {};
                null != e &&
                    ((n.instance_id = "example-cl-instance"),
                    (n.platform = f.vu.DESKTOP),
                    null != e.proxyTicket && (n.discord_proxy_ticket = e.proxyTicket));
                let l = null == e ? void 0 : e.url;
                return (0, c.jsx)(d.A, {
                    application: a,
                    queryParams: n,
                    url: l,
                });
            },
            [e],
        );
    return (0, c.jsx)(r.E, {
        activity: e,
        isLoading: t,
        renderHeader: a,
        renderActivityIFrameWithLoadedData: b,
    });
}
