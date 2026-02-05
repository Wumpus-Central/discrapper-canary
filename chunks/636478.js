"use strict";
n.d(t, { T: () => a });
var r = n(64700),
    i = n(492313);
function a(e) {
    let [t, n] = (0, i.P)(e.isOpen, e.defaultOpen || !1, e.onOpenChange),
        a = (0, r.useCallback)(() => {
            n(!0);
        }, [n]),
        s = (0, r.useCallback)(() => {
            n(!1);
        }, [n]),
        o = (0, r.useCallback)(() => {
            n(!t);
        }, [n, t]);
    return { isOpen: t, setOpen: n, open: a, close: s, toggle: o };
}
