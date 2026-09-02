u.d(t, { $P: () => r, Eh: () => o, OR: () => f, Ps: () => c });
let e = null,
    l = new Set();
function i() {
    for (let n of l) n();
}
function c(n) {
    (e = { ...n }), i();
}
function f(n) {
    null != e && (null == n || e.iframeId === n) && ((e = null), i());
}
function o() {
    return e;
}
function r(n) {
    return (
        l.add(n),
        () => {
            l.delete(n);
        }
    );
}
