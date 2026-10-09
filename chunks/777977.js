t.d(u, { $P: () => r, Eh: () => f, OR: () => o, Ps: () => c });
let l = null,
    i = new Set();
function e() {
    for (let n of i) n();
}
function c(n) {
    ((l = { ...n }), e());
}
function o(n) {
    null != l && (null == n || l.iframeId === n) && ((l = null), e());
}
function f() {
    return l;
}
function r(n) {
    return (
        i.add(n),
        () => {
            i.delete(n);
        }
    );
}
