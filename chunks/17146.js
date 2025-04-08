function r(e, t) {
    if (!e) throw Error(t);
}
function i(e, t) {
    throw Error(null != t ? t : 'Unexpected object: ' + e);
}
n.d(t, {
    E_: () => f,
    fp: () => d,
    hu: () => r,
    ug: () => u,
    vE: () => i
});
let o = 3.4028234663852886e38,
    a = -3.4028234663852886e38,
    s = 4294967295,
    l = 2147483647,
    c = -2147483648;
function u(e) {
    if ('number' != typeof e) throw Error('invalid int 32: ' + typeof e);
    if (!Number.isInteger(e) || e > l || e < c) throw Error('invalid int 32: ' + e);
}
function d(e) {
    if ('number' != typeof e) throw Error('invalid uint 32: ' + typeof e);
    if (!Number.isInteger(e) || e > s || e < 0) throw Error('invalid uint 32: ' + e);
}
function f(e) {
    if ('number' != typeof e) throw Error('invalid float 32: ' + typeof e);
    if (Number.isFinite(e) && (e > o || e < a)) throw Error('invalid float 32: ' + e);
}
