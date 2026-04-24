n.d(t, { A: () => r });
var a = n(64700),
    i = n(71526);
let l = Symbol();
function r(e, t, n) {
    let r = (0, i.A)(e),
        o = (0, a.useRef)(l);
    return o.current === l ? (o.current = t) : n(o.current, t) || ((r.current = e()), (o.current = t)), r.current;
}
