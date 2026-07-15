d.d(t, { n: () => Z, t: () => n });
var i = d(287822),
    e = {},
    c = new Set();
function a(l) {
    return (
        c.add(l),
        () => {
            c.delete(l);
        }
    );
}
function s() {
    return e;
}
function n(l) {
    for (let t of ((e = l), c)) t();
}
function Z() {
    return (0, i.i)(a, s);
}
