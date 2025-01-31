n.d(t, { Z: () => s });
var i = n(192379),
    r = n(667397);
let a = [];
function s(e, t) {
    let n = (0, i.useRef)(),
        s = (0, i.useRef)(a);
    return s.current === a ? ((n.current = e()), (s.current = t)) : (0, r.Z)(t, s.current) || ((n.current = e()), (s.current = t)), n.current;
}
