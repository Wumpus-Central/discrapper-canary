n.d(t, { A: () => u });
var l = n(627968),
    i = n(64700),
    a = n(311907),
    r = n(833147),
    o = n(33445),
    s = n(91242),
    c = n(193855),
    d = n(360469);
function u() {
    let e = (0, a.bG)([s.A], () => s.A.getConnectedFrame()),
        t = (0, a.bG)([s.A], () => e?.applicationId != null && s.A.isProxyTicketRefreshing(e.applicationId), [e]),
        n = i.useCallback((e) => {
            let { application: t } = e;
            return (0, l.jsx)(c.A, { applicationId: t.id });
        }, []),
        u = i.useCallback(
            (t) => {
                let { application: n } = t,
                    i = {};
                null != e &&
                    ((i.instance_id = "example-cl-instance"),
                    (i.platform = d.vu.DESKTOP),
                    null != e.proxyTicket && (i.discord_proxy_ticket = e.proxyTicket));
                let a = e?.url;
                return (0, l.jsx)(r.A, { application: n, queryParams: i, url: a });
            },
            [e],
        );
    return (0, l.jsx)(o.E, { activity: e, isLoading: t, renderHeader: n, renderActivityIFrameWithLoadedData: u });
}
