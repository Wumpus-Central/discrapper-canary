t.d(a, { L: () => r });
var u = t(191905),
    n = t(647438);
function r(e) {
    let a = (0, u.X)({
            usage: "search",
            ...e,
        }),
        t = (0, n.useCallback)(
            (e, t) =>
                0 === t.length ||
                ((e = e.normalize("NFC")), (t = t.normalize("NFC")), 0 === a.compare(e.slice(0, t.length), t)),
            [a],
        ),
        r = (0, n.useCallback)(
            (e, t) =>
                0 === t.length ||
                ((e = e.normalize("NFC")), (t = t.normalize("NFC")), 0 === a.compare(e.slice(-t.length), t)),
            [a],
        ),
        i = (0, n.useCallback)(
            (e, t) => {
                if (0 === t.length) return !0;
                e = e.normalize("NFC");
                let u = 0,
                    n = (t = t.normalize("NFC")).length;
                for (; u + n <= e.length; u++) {
                    let r = e.slice(u, u + n);
                    if (0 === a.compare(t, r)) return !0;
                }
                return !1;
            },
            [a],
        );
    return (0, n.useMemo)(
        () => ({
            startsWith: t,
            endsWith: r,
            contains: i,
        }),
        [t, r, i],
    );
}
