function t(e, t) {
    return Object.prototype.hasOwnProperty.call(e, t);
}
e.exports = function (e, n, r, i) {
    (n = n || "&"), (r = r || "=");
    var a = {};
    if ("string" != typeof e || 0 === e.length) return a;
    var o = /\+/g;
    e = e.split(n);
    var s = 1000;
    i && "number" == typeof i.maxKeys && (s = i.maxKeys);
    var l = e.length;
    s > 0 && l > s && (l = s);
    for (var c = 0; c < l; ++c) {
        var u,
            d,
            f,
            p,
            _ = e[c].replace(o, "%20"),
            m = _.indexOf(r);
        m >= 0 ? ((u = _.substr(0, m)), (d = _.substr(m + 1))) : ((u = _), (d = "")),
            (f = decodeURIComponent(u)),
            (p = decodeURIComponent(d)),
            t(a, f) ? (Array.isArray(a[f]) ? a[f].push(p) : (a[f] = [a[f], p])) : (a[f] = p);
    }
    return a;
};
