n.d(t, { A: () => u });
var l = n(64700),
    i = n(311907),
    r = n(979286),
    a = n(590180),
    s = n(4227),
    o = n(32206),
    c = n(892118);
function u(e, t) {
    let n = (0, o.c)(t),
        u = (0, i.bG)([a.A, s.A], () => {
            if (null == e) return;
            let t = a.A.getProduct(e);
            if ((0, c.s)(t?.items[0])) return t.items[0];
            let n = s.A.getPurchase(e);
            if ((0, c.s)(n?.items[0])) return n.items[0];
        }),
        d = n && null != e && null == u;
    return (
        l.useEffect(() => {
            d && (0, r.RE)(e);
        }, [d, e]),
        n ? u : void 0
    );
}
