function i(e, n) {
    if (!e) throw Error(n);
}
r.d(n, {
    E_: function () {
        return f;
    },
    fp: function () {
        return d;
    },
    hu: function () {
        return i;
    },
    ug: function () {
        return c;
    }
});
let a = 3.4028234663852886e38,
    o = -3.4028234663852886e38,
    s = 4294967295,
    l = 2147483647,
    u = -2147483648;
function c(e) {
    if ('number' != typeof e) throw Error('invalid int 32: ' + typeof e);
    if (!Number.isInteger(e) || e > l || e < u) throw Error('invalid int 32: ' + e);
}
function d(e) {
    if ('number' != typeof e) throw Error('invalid uint 32: ' + typeof e);
    if (!Number.isInteger(e) || e > s || e < 0) throw Error('invalid uint 32: ' + e);
}
function f(e) {
    if ('number' != typeof e) throw Error('invalid float 32: ' + typeof e);
    if (Number.isFinite(e) && (e > a || e < o)) throw Error('invalid float 32: ' + e);
}
