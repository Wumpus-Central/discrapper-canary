a.d(t, { A: () => i });
var n = a(64700),
    l = a(71526);
let r = Symbol();
function i(e, t, a) {
    let i = (0, l.A)(e),
        s = (0, n.useRef)(r);
    return s.current === r ? (s.current = t) : a(s.current, t) || ((i.current = e()), (s.current = t)), i.current;
}
