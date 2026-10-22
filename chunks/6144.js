e.d(t, { A: () => A });
var l = e(582128),
    r = e(17928),
    u = e(47294),
    i = e(16961),
    a = e(869146),
    o = e(91242),
    c = e(73153),
    s = e(494126),
    d = e(5867);
async function p(n) {
    null == o.A.getFrame(n) ||
        ((await (0, s.refreshProxyTicket)(n)) &&
            ((0, s.promoteFrame)(n),
            (0, s.updateFramePanelMode)(n, d.Gd.ACTIVITY_POPOUT_WINDOW),
            c.h.dispatch({ type: "ACTIVITY_POPOUT_WINDOW_OPEN" })));
}
var f = e(567245),
    m = e(652215);
function A(n) {
    let t = (0, i.G)(),
        e = (0, r.bG)(
            [a.A, o.A],
            () => a.A.getWindowOpen(m.MLl.ACTIVITY_POPOUT) && null != n && o.A.getMainFrame()?.id === n.id,
            [n],
        );
    return {
        canPopout: t,
        isPoppedOut: e,
        popOut: l.useCallback(() => {
            null != n && (0, u.A)({ onConfirm: () => p(n.id) });
        }, [n]),
        popIn: l.useCallback(() => {
            (0, u.A)({ onConfirm: () => (0, f.E)() });
        }, []),
    };
}
