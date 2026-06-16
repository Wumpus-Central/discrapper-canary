"use strict";
n.d(t, { _: () => s });
var i = n(959462),
    r = n(64700);
function s(e, t, n, s) {
    let a = (0, i.J)(n),
        o = null == n;
    (0, r.useEffect)(() => {
        if (o || !e.current) return;
        let n = e.current;
        return (
            n.addEventListener(t, a, s),
            () => {
                n.removeEventListener(t, a, s);
            }
        );
    }, [e, t, s, o, a]);
}
