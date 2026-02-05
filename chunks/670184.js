"use strict";
n.d(t, { U: () => a });
var r = n(74172),
    i = n(64700);
function a(e) {
    let t = (0, r.Q)({ usage: "search", ...e }),
        n = (0, i.useCallback)(
            (e, n) =>
                0 === n.length ||
                ((e = e.normalize("NFC")), (n = n.normalize("NFC")), 0 === t.compare(e.slice(0, n.length), n)),
            [t],
        ),
        a = (0, i.useCallback)(
            (e, n) =>
                0 === n.length ||
                ((e = e.normalize("NFC")), (n = n.normalize("NFC")), 0 === t.compare(e.slice(-n.length), n)),
            [t],
        ),
        s = (0, i.useCallback)(
            (e, n) => {
                if (0 === n.length) return !0;
                e = e.normalize("NFC");
                let r = 0,
                    i = (n = n.normalize("NFC")).length;
                for (; r + i <= e.length; r++) {
                    let a = e.slice(r, r + i);
                    if (0 === t.compare(n, a)) return !0;
                }
                return !1;
            },
            [t],
        );
    return (0, i.useMemo)(() => ({ startsWith: n, endsWith: a, contains: s }), [n, a, s]);
}
