a.d(t, { A: () => i });
var r = a(64700),
    n = a(71526);
let l = Symbol();
function i(e, t, a) {
    let i = (0, n.A)(e),
        s = (0, r.useRef)(l);
    return s.current === l ? (s.current = t) : a(s.current, t) || ((i.current = e()), (s.current = t)), i.current;
}
