n.d(t, { d: () => a });
var r = n(647438),
    i = n(379955);
function a(e) {
    let [t, n] = (0, i.z)(e.isOpen, e.defaultOpen || !1, e.onOpenChange),
        a = (0, r.useCallback)(() => {
            n(!0);
        }, [n]),
        o = (0, r.useCallback)(() => {
            n(!1);
        }, [n]),
        s = (0, r.useCallback)(() => {
            n(!t);
        }, [n, t]);
    return {
        isOpen: t,
        setOpen: n,
        open: a,
        close: o,
        toggle: s,
    };
}
