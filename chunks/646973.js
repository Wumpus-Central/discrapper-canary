t.d(e, { A: () => f });
var l = t(582128),
    u = t(17928),
    r = t(47294),
    i = t(16961),
    a = t(869146),
    c = t(91242),
    o = t(241696),
    d = t(567245),
    s = t(652215);
function f(n) {
    let e = (0, i.G)(),
        t = (0, u.bG)(
            [a.A, c.A],
            () => a.A.getWindowOpen(s.MLl.ACTIVITY_POPOUT) && null != n && c.A.getMainFrame()?.id === n.id,
            [n],
        );
    return {
        canPopout: e,
        isPoppedOut: t,
        popOut: l.useCallback(() => {
            null != n && (0, r.A)({ onConfirm: () => (0, o.A)(n.id) });
        }, [n]),
        popIn: l.useCallback(() => {
            (0, r.A)({ onConfirm: () => (0, d.E)() });
        }, []),
    };
}
