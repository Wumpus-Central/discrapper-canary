u.d(e, { A: () => n });
var t = u(582128);
let c = Symbol();
function n(r, e, u) {
    let n,
        s,
        p = ((n = (0, t.useRef)(!1)), (s = (0, t.useRef)(null)), n.current || ((n.current = !0), (s.current = r())), s),
        i = (0, t.useRef)(c);
    return (i.current === c ? (i.current = e) : u(i.current, e) || ((p.current = r()), (i.current = e)), p.current);
}
