var r = a(585606),
    n = a(443735),
    _ = a(402428),
    o = a(207757),
    i = a(830911),
    c = a(556868),
    s = Object.prototype.hasOwnProperty;
t.exports = function (t, e) {
    var a = _(t),
        E = !a && n(t),
        l = !a && !E && o(t),
        u = !a && !E && !l && c(t),
        I = a || E || l || u,
        R = I ? r(t.length, String) : [],
        d = R.length;
    for (var f in t) (e || s.call(t, f)) && !(I && ('length' == f || (l && ('offset' == f || 'parent' == f)) || (u && ('buffer' == f || 'byteLength' == f || 'byteOffset' == f)) || i(f, d))) && R.push(f);
    return R;
};
