var r = a(585606),
    n = a(443735),
    o = a(402428),
    _ = a(207757),
    i = a(830911),
    c = a(556868),
    s = Object.prototype.hasOwnProperty;
t.exports = function (t, e) {
    var a = o(t),
        E = !a && n(t),
        l = !a && !E && _(t),
        u = !a && !E && !l && c(t),
        I = a || E || l || u,
        R = I ? r(t.length, String) : [],
        d = R.length;
    for (var A in t) (e || s.call(t, A)) && !(I && ('length' == A || (l && ('offset' == A || 'parent' == A)) || (u && ('buffer' == A || 'byteLength' == A || 'byteOffset' == A)) || i(A, d))) && R.push(A);
    return R;
};
