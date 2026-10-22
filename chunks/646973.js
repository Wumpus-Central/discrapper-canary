l.d(t, { A: () => f });
var e = l(582128),
    r = l(17928),
    u = l(47294),
    i = l(16961),
    a = l(869146),
    c = l(91242),
    o = l(241696),
    s = l(567245),
    d = l(652215);
function f(n) {
    let t = (0, i.G)(),
        l = (0, r.bG)(
            [a.A, c.A],
            () => a.A.getWindowOpen(d.MLl.ACTIVITY_POPOUT) && null != n && c.A.getMainFrame()?.id === n.id,
            [n],
        );
    return {
        canPopout: t,
        isPoppedOut: l,
        popOut: e.useCallback(() => {
            null != n && (0, u.A)({ onConfirm: () => (0, o.A)(n.id) });
        }, [n]),
        popIn: e.useCallback(() => {
            (0, u.A)({ onConfirm: () => (0, s.E)() });
        }, []),
    };
}
