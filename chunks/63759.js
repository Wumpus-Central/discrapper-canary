n.d(t, { l: () => a }), n(388685);
var r = n(473749),
    i = n(70956),
    l = n(178480);
function a(e) {
    let { timestamp: t, abbreviated: n = !0 } = e,
        [a, o] = r.useState(() => (0, l.a3)(t, n));
    return (
        r.useEffect(() => {
            o((0, l.a3)(t, n));
            let e = Date.now() - t;
            if (e > i.Z.Millis.DAY) return;
            let r = e >= i.Z.Millis.HOUR ? i.Z.Millis.HOUR : i.Z.Millis.MINUTE,
                a = setInterval(
                    () => {
                        o((0, l.a3)(t, n));
                    },
                    r,
                    r - (e % r),
                );
            return () => clearInterval(a);
        }, [t, n]),
        a
    );
}
