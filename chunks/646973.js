t.d(n, { A: () => s });
var l = t(582128),
    u = t(17928),
    r = t(47294),
    i = t(16961),
    a = t(869146),
    c = t(91242),
    o = t(241696),
    d = t(567245),
    f = t(652215);
function s(e) {
    let n = (0, i.G)(),
        t = (0, u.bG)(
            [a.A, c.A],
            () => a.A.getWindowOpen(f.MLl.ACTIVITY_POPOUT) && null != e && c.A.getMainFrame()?.id === e.id,
            [e],
        );
    return {
        canPopout: n,
        isPoppedOut: t,
        popOut: l.useCallback(() => {
            null != e && (0, r.A)({ onConfirm: () => (0, o.A)(e.id) });
        }, [e]),
        popIn: l.useCallback(() => {
            (0, r.A)({ onConfirm: () => (0, d.E)() });
        }, []),
    };
}
