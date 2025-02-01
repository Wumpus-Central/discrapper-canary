function t(e, t) {
    return Object.prototype.hasOwnProperty.call(e, t);
}
e.exports = function (e, n, i, r) {
    (n = n || '&'), (i = i || '=');
    var a = {};
    if ('string' != typeof e || 0 === e.length) return a;
    var s = /\+/g;
    e = e.split(n);
    var o = 1000;
    r && 'number' == typeof r.maxKeys && (o = r.maxKeys);
    var l = e.length;
    o > 0 && l > o && (l = o);
    for (var u = 0; u < l; ++u) {
        var c,
            d,
            f,
            _,
            p = e[u].replace(s, '%20'),
            h = p.indexOf(i);
        h >= 0 ? ((c = p.substr(0, h)), (d = p.substr(h + 1))) : ((c = p), (d = '')), (f = decodeURIComponent(c)), (_ = decodeURIComponent(d)), t(a, f) ? (Array.isArray(a[f]) ? a[f].push(_) : (a[f] = [a[f], _])) : (a[f] = _);
    }
    return a;
};
