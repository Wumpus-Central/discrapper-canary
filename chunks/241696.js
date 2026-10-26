n.d(t, { A: () => c });
var i = n(73153),
    r = n(735168),
    a = n(494126),
    s = n(91242),
    l = n(567245),
    o = n(652215),
    d = n(5867);
async function c(e) {
    null != s.A.getFrame(e) &&
        (await (0, r.A)({
            windowKey: o.MLl.ACTIVITY_POPOUT,
            openWindow: () => i.h.dispatch({ type: "ACTIVITY_POPOUT_WINDOW_OPEN" }),
            onWindowOpened: () => {
                ((0, a.promoteFrame)(e), (0, a.updateFramePanelMode)(e, d.Gd.ACTIVITY_POPOUT_WINDOW));
            },
            refreshProxyTicket: () => (0, a.refreshProxyTicket)(e),
            onRefreshFailed: l.E,
        }));
}
