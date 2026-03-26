"use strict";
n.d(t, { A: () => c });
var r = n(64700),
    i = n(311907),
    s = n(979286),
    a = n(590180),
    o = n(4227),
    l = n(32206),
    u = n(892118);
function c(e, t) {
    let n = (0, l.c)(t),
        c = (0, i.bG)([a.A, o.A], () => {
            if (null == e) return;
            let t = a.A.getProduct(e);
            if ((0, u.s)(t?.items[0])) return t.items[0];
            let n = o.A.getPurchase(e);
            if ((0, u.s)(n?.items[0])) return n.items[0];
        }),
        d = n && null != e && null == c;
    return (
        r.useEffect(() => {
            d && (0, s.RE)(e);
        }, [d, e]),
        n ? c : void 0
    );
}
