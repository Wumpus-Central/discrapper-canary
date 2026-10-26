t.d(e, { A: () => p });
var d = t(73153),
    r = t(494126),
    u = t(91242),
    i = t(5867);
async function p(a) {
    null == u.A.getFrame(a) ||
        ((await (0, r.refreshProxyTicket)(a)) &&
            ((0, r.promoteFrame)(a),
            (0, r.updateFramePanelMode)(a, i.Gd.ACTIVITY_POPOUT_WINDOW),
            d.h.dispatch({ type: "ACTIVITY_POPOUT_WINDOW_OPEN" })));
}
