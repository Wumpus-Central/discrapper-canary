t.d(n, { Z: () => c }), t(457542);
var r = t(473749),
    a = t(70956),
    i = t(506071),
    l = t(905551);
let s = 30 * a.Z.Millis.SECOND,
    o = 5 * a.Z.Millis.SECOND;
function c(e) {
    let n = (0, i.n)();
    r.useEffect(() => {
        if (null == e) return;
        let t = !0,
            r = null,
            a = 0,
            i = () =>
                setTimeout(
                    () => {
                        n &&
                            ((r = new AbortController()),
                            (0, l.mF)(e, !1, r.signal)
                                .then(() => (a = 0))
                                .catch(() => (a = Math.min(a + 1, 4)))
                                .finally(() => {
                                    t && (c = i());
                                }));
                    },
                    s * Math.pow(2, a) + Math.random() * o,
                ),
            c = i();
        return () => {
            (t = !1), null == r || r.abort(), clearTimeout(c);
        };
    }, [e, n]);
}
