var u = t(515304);
r.exports = function (r, n) {
    var t = -1,
        e = r.length,
        o = e - 1;
    for (n = void 0 === n ? e : n; ++t < n; ) {
        var p = u(t, o),
            a = r[p];
        (r[p] = r[t]), (r[t] = a);
    }
    return (r.length = n), r;
};
