n.d(t, { A: () => s });
var i = n(64700),
    a = n(71526);
let r = Symbol();
function s(e, t, n) {
    let s = (0, a.A)(e),
        l = (0, i.useRef)(r);
    return l.current === r ? (l.current = t) : n(l.current, t) || ((s.current = e()), (l.current = t)), s.current;
}
