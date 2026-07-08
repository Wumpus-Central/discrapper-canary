i.d(t, { n: () => c, t: () => l });
var r = i(248702),
    n = {},
    o = new Set();
function a(e) {
    return (
        o.add(e),
        () => {
            o.delete(e);
        }
    );
}
function s() {
    return n;
}
function l(e) {
    for (let t of ((n = e), o)) t();
}
function c() {
    return (0, r.i)(a, s);
}
