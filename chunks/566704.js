n.d(t, { A: () => d });
var a = n(64700),
    i = n(927813),
    s = n(218394),
    r = n(665171);
let l = 30 * i.A.Millis.SECOND,
    o = 5 * i.A.Millis.SECOND;
function d(e) {
    let t = (0, s.j)();
    a.useEffect(() => {
        if (null == e) return;
        let n = !0,
            a = null,
            i = 0,
            s = () =>
                setTimeout(
                    () => {
                        t &&
                            ((a = new AbortController()),
                            (0, r.cq)(e, !1, a.signal)
                                .then(() => (i = 0))
                                .catch(() => (i = Math.min(i + 1, 4)))
                                .finally(() => {
                                    n && (d = s());
                                }));
                    },
                    l * Math.pow(2, i) + Math.random() * o,
                ),
            d = s();
        return () => {
            (n = !1), a?.abort(), clearTimeout(d);
        };
    }, [e, t]);
}
