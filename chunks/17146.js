function i(e, t) {
    if (!e) throw Error(t);
}
n.d(t, {
    E_: () => d,
    fp: () => c,
    hu: () => i,
    ug: () => u
});
let r = 3.4028234663852886e38,
    a = -3.4028234663852886e38,
    s = 4294967295,
    o = 2147483647,
    l = -2147483648;
function u(e) {
    if ('number' != typeof e) throw Error('invalid int 32: ' + typeof e);
    if (!Number.isInteger(e) || e > o || e < l) throw Error('invalid int 32: ' + e);
}
function c(e) {
    if ('number' != typeof e) throw Error('invalid uint 32: ' + typeof e);
    if (!Number.isInteger(e) || e > s || e < 0) throw Error('invalid uint 32: ' + e);
}
function d(e) {
    if ('number' != typeof e) throw Error('invalid float 32: ' + typeof e);
    if (Number.isFinite(e) && (e > r || e < a)) throw Error('invalid float 32: ' + e);
}
