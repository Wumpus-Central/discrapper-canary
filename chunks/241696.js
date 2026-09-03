t.d(a, { A: () => d });
var p = t(228366),
    r = t(494126),
    s = t(91242),
    c = t(5867);
async function d(e) {
    null == s.A.getFrame(e) ||
        ((await (0, r.refreshProxyTicket)(e)) &&
            ((0, r.promoteFrame)(e),
            (0, r.updateFramePanelMode)(e, c.Gd.ACTIVITY_POPOUT_WINDOW),
            p.h.dispatch({ type: "ACTIVITY_POPOUT_WINDOW_OPEN" })));
}
