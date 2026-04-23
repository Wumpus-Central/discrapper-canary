n.d(t, { A: () => c });
var a = n(64700),
    s = n(927813),
    i = n(218394),
    l = n(665171);
let r = 30 * s.A.Millis.SECOND,
    d = 5 * s.A.Millis.SECOND;
function c(e) {
    let t = (0, i.j)();
    a.useEffect(() => {
        if (null == e) return;
        let n = !0,
            a = null,
            s = 0,
            i = () =>
                setTimeout(
                    () => {
                        t &&
                            ((a = new AbortController()),
                            (0, l.cq)(e, !1, a.signal)
                                .then(() => (s = 0))
                                .catch(() => (s = Math.min(s + 1, 4)))
                                .finally(() => {
                                    n && (c = i());
                                }));
                    },
                    r * Math.pow(2, s) + Math.random() * d,
                ),
            c = i();
        return () => {
            (n = !1), a?.abort(), clearTimeout(c);
        };
    }, [e, t]);
}
