n.d(t, { e: () => a });
var i = n(64700),
    l = n(927813),
    s = n(995273);
function a(e) {
    let { timestamp: t, abbreviated: n = !0 } = e,
        [a, r] = i.useState(() => (0, s.jb)(t, n));
    return (
        i.useEffect(() => {
            r((0, s.jb)(t, n));
            let e = Date.now() - t;
            if (e > l.A.Millis.DAY) return;
            let i = e >= l.A.Millis.HOUR ? l.A.Millis.HOUR : l.A.Millis.MINUTE,
                a = setInterval(
                    () => {
                        r((0, s.jb)(t, n));
                    },
                    i,
                    i - (e % i),
                );
            return () => clearInterval(a);
        }, [t, n]),
        a
    );
}
