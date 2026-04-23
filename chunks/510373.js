n.d(t, { A: () => s });
var i = n(64700),
    r = n(71526);
let a = Symbol();
function s(e, t, n) {
    let s = (0, r.A)(e),
        _ = (0, i.useRef)(a);
    return _.current === a ? (_.current = t) : n(_.current, t) || ((s.current = e()), (_.current = t)), s.current;
}
