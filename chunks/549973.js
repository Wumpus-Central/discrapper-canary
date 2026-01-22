n.d(t, { e: () => s }), n(896048);
var r = n(64700),
    l = n(927813),
    i = n(995273);
function s(e) {
    let { timestamp: t, abbreviated: n = !0 } = e,
        [s, a] = r.useState(() => (0, i.jb)(t, n));
    return (
        r.useEffect(() => {
            a((0, i.jb)(t, n));
            let e = Date.now() - t;
            if (e > l.A.Millis.DAY) return;
            let r = e >= l.A.Millis.HOUR ? l.A.Millis.HOUR : l.A.Millis.MINUTE,
                s = setInterval(
                    () => {
                        a((0, i.jb)(t, n));
                    },
                    r,
                    r - (e % r),
                );
            return () => clearInterval(s);
        }, [t, n]),
        s
    );
}
