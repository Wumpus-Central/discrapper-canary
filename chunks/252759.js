r.d(n, {
    Z: function () {
        return s;
    }
});
var i = r(192379),
    a = r(667397);
let o = [];
function s(e, n) {
    let r = (0, i.useRef)(),
        s = (0, i.useRef)(o);
    return s.current === o ? ((r.current = e()), (s.current = n)) : !(0, a.Z)(n, s.current) && ((r.current = e()), (s.current = n)), r.current;
}
