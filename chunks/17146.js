function r(e, t) {
    if (!e) throw Error(t);
}
n.d(t, {
    E_: () => d,
    fp: () => u,
    hu: () => r,
    ug: () => c
});
let i = 3.4028234663852886e38,
    o = -3.4028234663852886e38,
    a = 4294967295,
    s = 2147483647,
    l = -2147483648;
function c(e) {
    if ('number' != typeof e) throw Error('invalid int 32: ' + typeof e);
    if (!Number.isInteger(e) || e > s || e < l) throw Error('invalid int 32: ' + e);
}
function u(e) {
    if ('number' != typeof e) throw Error('invalid uint 32: ' + typeof e);
    if (!Number.isInteger(e) || e > a || e < 0) throw Error('invalid uint 32: ' + e);
}
function d(e) {
    if ('number' != typeof e) throw Error('invalid float 32: ' + typeof e);
    if (Number.isFinite(e) && (e > i || e < o)) throw Error('invalid float 32: ' + e);
}
