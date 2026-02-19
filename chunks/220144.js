"use strict";
n.d(t, { A: () => l });
var i = n(64700),
    s = n(724442);
function l(e, t) {
    let n = (0, i.useRef)(!1),
        l = (0, i.useRef)(e);
    (0, i.useEffect)(() => {
        (n.current = e !== l.current), (l.current = e);
    }, [e]),
        (0, i.useEffect)(() => {
            let e = setTimeout(() => (n.current = !1), t);
            return () => clearTimeout(e);
        }, [e, t]);
    let r = e !== (0, s.A)(l),
        a = (0, s.A)(n);
    return r || a;
}
