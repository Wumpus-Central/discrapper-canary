i.d(t, { e: () => a });
var l = i(64700),
    s = i(927813),
    r = i(995273);
function a(e) {
    let { timestamp: t, abbreviated: i = !0 } = e,
        [a, n] = l.useState(() => (0, r.jb)(t, i));
    return (
        l.useEffect(() => {
            n((0, r.jb)(t, i));
            let e = Date.now() - t;
            if (e > s.A.Millis.DAY) return;
            let l = e >= s.A.Millis.HOUR ? s.A.Millis.HOUR : s.A.Millis.MINUTE,
                a = setInterval(
                    () => {
                        n((0, r.jb)(t, i));
                    },
                    l,
                    l - (e % l),
                );
            return () => clearInterval(a);
        }, [t, i]),
        a
    );
}
