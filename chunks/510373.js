n.d(t, { A: () => a });
var r = n(64700),
    l = n(71526);
let i = Symbol();
function a(e, t, n) {
    let a = (0, l.A)(e),
        u = (0, r.useRef)(i);
    return u.current === i ? (u.current = t) : n(u.current, t) || ((a.current = e()), (u.current = t)), a.current;
}
