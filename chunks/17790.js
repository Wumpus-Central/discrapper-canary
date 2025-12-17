t.d(n, { Z: () => c }), t(457542);
var a = t(473749),
    r = t(70956),
    i = t(506071),
    l = t(905551);
let s = 30 * r.Z.Millis.SECOND,
    o = 5 * r.Z.Millis.SECOND;
function c(e) {
    let n = (0, i.n)();
    a.useEffect(() => {
        if (null == e) return;
        let t = !0,
            a = null,
            r = 0,
            i = () =>
                setTimeout(
                    () => {
                        n &&
                            ((a = new AbortController()),
                            (0, l.mF)(e, !1, a.signal)
                                .then(() => (r = 0))
                                .catch(() => (r = Math.min(r + 1, 4)))
                                .finally(() => {
                                    t && (c = i());
                                }));
                    },
                    s * Math.pow(2, r) + Math.random() * o,
                ),
            c = i();
        return () => {
            (t = !1), null == a || a.abort(), clearTimeout(c);
        };
    }, [e, n]);
}
