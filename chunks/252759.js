n.d(t, { Z: () => o });
var r = n(192379),
    i = n(667397);
let a = [];
function o(e, t) {
    let n = (0, r.useRef)(),
        o = (0, r.useRef)(a);
    return o.current === a ? ((n.current = e()), (o.current = t)) : (0, i.Z)(t, o.current) || ((n.current = e()), (o.current = t)), n.current;
}
