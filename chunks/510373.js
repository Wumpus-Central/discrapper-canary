n.d(t, {
    A: () => s,
}),
    n(228524);
var r = n(64700),
    i = n(71526);
let a = Symbol();

function s(e, t, n) {
    let s = (0, i.A)(e),
        o = (0, r.useRef)(a);
    return o.current === a ? (o.current = t) : n(o.current, t) || ((s.current = e()), (o.current = t)), s.current;
}
