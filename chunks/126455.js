"use strict";
n.d(t, { A: () => s });
var r = n(64700),
    i = n(711371);
function s(e, t, n) {
    let s = r.useCallback(
            (e) => {
                if (t) return !0;
                if (!0 === e.defaultPrevented) return !1;
                let r = n(e);
                return r && (e.preventDefault(), e.stopPropagation()), r;
            },
            [t, n],
        ),
        a = r.useCallback(
            (t) => {
                let { event: n } = t;
                s(n) ||
                    (n.preventDefault(),
                    n.stopPropagation(),
                    null != n.clipboardData && (e.insertData(n.clipboardData), i.VW.focus(e)));
            },
            [e, s],
        );
    return { handlePaste: s, handleGlobalPaste: a };
}
