var r = t(582128),
    i = t(855986),
    a = t(47294),
    l = t(16961),
    u = t(869146),
    o = t(91242),
    c = t(241696),
    d = t(567245),
    A = t(652215);
t.d(
    e,
    {},
    {
        A: function (n) {
            let e = (0, l.G)(),
                t = (0, i.bG)(
                    [u.A, o.A],
                    () => u.A.getWindowOpen(A.MLl.ACTIVITY_POPOUT) && null != n && o.A.getMainFrame()?.id === n.id,
                    [n],
                );
            return {
                canPopout: e,
                isPoppedOut: t,
                popOut: r.useCallback(() => {
                    null != n && (0, a.A)({ onConfirm: () => (0, c.A)(n.id) });
                }, [n]),
                popIn: r.useCallback(() => {
                    (0, a.A)({ onConfirm: () => (0, d.E)() });
                }, []),
            };
        },
    },
);
