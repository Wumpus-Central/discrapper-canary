n.d(t, { A: () => l });
var i = n(582128);
let r = Symbol();
function l(e, t, n) {
    let l,
        o,
        a = ((l = (0, i.useRef)(!1)), (o = (0, i.useRef)(null)), l.current || ((l.current = !0), (o.current = e())), o),
        c = (0, i.useRef)(r);
    return (c.current === r ? (c.current = t) : n(c.current, t) || ((a.current = e()), (c.current = t)), a.current);
}
