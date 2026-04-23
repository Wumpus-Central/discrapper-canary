"use strict";
n.d(t, { A: () => s });
var r = n(64700),
    i = n(27867);
function s(e) {
    let { delay: t, disable: n = !1 } = e,
        s = (0, i.A)();
    r.useEffect(() => {
        if (t <= 0 || n) return;
        let e = setTimeout(() => {
            s();
        }, t);
        return () => clearTimeout(e);
    }, [t, n, s]);
}
