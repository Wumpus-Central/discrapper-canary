a.d(t, { A: () => i });
var n = a(64700),
    r = a(71526);
let l = Symbol();
function i(e, t, a) {
    let i = (0, r.A)(e),
        s = (0, n.useRef)(l);
    return s.current === l ? (s.current = t) : a(s.current, t) || ((i.current = e()), (s.current = t)), i.current;
}
