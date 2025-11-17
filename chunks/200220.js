n.d(i, { default: () => r }), n(388685);
var s = n(54381),
    e = n(473749),
    a = n(159691),
    l = n(388032);
function r(t) {
    let { transitionState: i, onConfirm: n, onClose: r } = t,
        [c, o] = e.useState(!1),
        u = e.useCallback(() => {
            if (!c) {
                o(!0);
                try {
                    n();
                } catch (t) {
                } finally {
                    o(!1);
                }
                r();
            }
        }, [c, n, r]),
        d = e.useMemo(
            () => [
                {
                    text: l.intl.string(l.t["ETE/oC"]),
                    onClick: r,
                    variant: "secondary",
                    disabled: c,
                },
                {
                    text: l.intl.string(l.t.MMlhsr),
                    onClick: u,
                    loading: c,
                },
            ],
            [u, c, r],
        );
    return (0, s.jsx)(a.u_l, {
        title: l.intl.string(l.t.eJzSDT),
        subtitle: l.intl.string(l.t.GB4jUw),
        actions: d,
        onClose: r,
        transitionState: i,
    });
}
