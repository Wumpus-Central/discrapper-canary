t.d(n, { A: () => s });
var l = t(582128),
    u = t(17928),
    r = t(47294),
    c = t(16961),
    i = t(869146),
    a = t(91242),
    o = t(241696),
    d = t(567245),
    f = t(652215);
function s(e) {
    let n = (0, c.G)(),
        t = (0, u.bG)(
            [i.A, a.A],
            () => i.A.getWindowOpen(f.MLl.ACTIVITY_POPOUT) && null != e && a.A.getMainFrame()?.id === e.id,
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
