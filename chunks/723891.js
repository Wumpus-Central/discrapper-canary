var u = t(515304);
r.exports = function (r, n) {
    var t = -1,
        e = r.length,
        o = e - 1;
    for (n = void 0 === n ? e : n; ++t < n; ) {
        var a = u(t, o),
            i = r[a];
        (r[a] = r[t]), (r[t] = i);
    }
    return (r.length = n), r;
};
