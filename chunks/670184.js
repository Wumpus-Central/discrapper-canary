t.d(a, { U: () => i });
var r = t(74172),
    n = t(64700);
function i(e) {
    let a = (0, r.Q)({ usage: "search", ...e }),
        t = (0, n.useCallback)(
            (e, t) =>
                0 === t.length ||
                ((e = e.normalize("NFC")), (t = t.normalize("NFC")), 0 === a.compare(e.slice(0, t.length), t)),
            [a],
        ),
        i = (0, n.useCallback)(
            (e, t) =>
                0 === t.length ||
                ((e = e.normalize("NFC")), (t = t.normalize("NFC")), 0 === a.compare(e.slice(-t.length), t)),
            [a],
        ),
        l = (0, n.useCallback)(
            (e, t) => {
                if (0 === t.length) return !0;
                e = e.normalize("NFC");
                let r = 0,
                    n = (t = t.normalize("NFC")).length;
                for (; r + n <= e.length; r++) {
                    let i = e.slice(r, r + n);
                    if (0 === a.compare(t, i)) return !0;
                }
                return !1;
            },
            [a],
        );
    return (0, n.useMemo)(() => ({ startsWith: t, endsWith: i, contains: l }), [t, i, l]);
}
