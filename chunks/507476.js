t.d(a, { d: () => r });
var u = t(647438),
    n = t(379955);
function r(e) {
    let [a, t] = (0, n.z)(e.isOpen, e.defaultOpen || !1, e.onOpenChange),
        r = (0, u.useCallback)(() => {
            t(!0);
        }, [t]),
        i = (0, u.useCallback)(() => {
            t(!1);
        }, [t]),
        o = (0, u.useCallback)(() => {
            t(!a);
        }, [t, a]);
    return {
        isOpen: a,
        setOpen: t,
        open: r,
        close: i,
        toggle: o,
    };
}
