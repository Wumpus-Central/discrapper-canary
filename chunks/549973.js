"use strict";
n.d(t, { e: () => r });
var i = n(64700),
    s = n(927813),
    l = n(995273);
function r(e) {
    let { timestamp: t, abbreviated: n = !0 } = e,
        [r, a] = i.useState(() => (0, l.jb)(t, n));
    return (
        i.useEffect(() => {
            a((0, l.jb)(t, n));
            let e = Date.now() - t;
            if (e > s.A.Millis.DAY) return;
            let i = e >= s.A.Millis.HOUR ? s.A.Millis.HOUR : s.A.Millis.MINUTE,
                r = setInterval(
                    () => {
                        a((0, l.jb)(t, n));
                    },
                    i,
                    i - (e % i),
                );
            return () => clearInterval(r);
        }, [t, n]),
        r
    );
}
