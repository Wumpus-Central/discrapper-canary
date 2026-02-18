t.d(a, { T: () => i });
var r = t(64700),
    n = t(492313);
function i(e) {
    let [a, t] = (0, n.P)(e.isOpen, e.defaultOpen || !1, e.onOpenChange),
        i = (0, r.useCallback)(() => {
            t(!0);
        }, [t]),
        o = (0, r.useCallback)(() => {
            t(!1);
        }, [t]),
        u = (0, r.useCallback)(() => {
            t(!a);
        }, [t, a]);
    return { isOpen: a, setOpen: t, open: i, close: o, toggle: u };
}
