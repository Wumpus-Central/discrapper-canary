var t = i(582128),
    a = i(855986),
    l = i(47294),
    o = i(16961),
    r = i(869146),
    u = i(91242),
    d = i(241696),
    c = i(567245),
    p = i(652215);
i.d(
    e,
    {},
    {
        A: function (n) {
            let e = (0, o.G)(),
                i = (0, a.bG)(
                    [r.A, u.A],
                    () => r.A.getWindowOpen(p.MLl.ACTIVITY_POPOUT) && null != n && u.A.getMainFrame()?.id === n.id,
                    [n],
                );
            return {
                canPopout: e,
                isPoppedOut: i,
                popOut: t.useCallback(() => {
                    null != n && (0, l.A)({ onConfirm: () => (0, d.A)(n.id) });
                }, [n]),
                popIn: t.useCallback(() => {
                    (0, l.A)({ onConfirm: () => (0, c.E)() });
                }, []),
            };
        },
    },
);
