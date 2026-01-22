n.d(t, {
    A: () => o,
}),
    n(492834);
var r = n(64700),
    a = n(927813),
    l = n(218394),
    i = n(665171);
let s = 30 * a.A.Millis.SECOND,
    c = 5 * a.A.Millis.SECOND;

function o(e) {
    let t = (0, l.j)();
    r.useEffect(() => {
        if (null == e) return;
        let n = !0,
            r = null,
            a = 0,
            l = () =>
                setTimeout(
                    () => {
                        t &&
                            ((r = new AbortController()),
                            (0, i.cq)(e, !1, r.signal)
                                .then(() => (a = 0))
                                .catch(() => (a = Math.min(a + 1, 4)))
                                .finally(() => {
                                    n && (o = l());
                                }));
                    },
                    s * Math.pow(2, a) + Math.random() * c,
                ),
            o = l();
        return () => {
            (n = !1), null == r || r.abort(), clearTimeout(o);
        };
    }, [e, t]);
}
