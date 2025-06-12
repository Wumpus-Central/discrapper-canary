function t(e, t) {
    return Object.prototype.hasOwnProperty.call(e, t);
}
e.exports = function (e, n, r, i) {
    (n = n || '&'), (r = r || '=');
    var a = {};
    if ('string' != typeof e || 0 === e.length) return a;
    var o = /\+/g;
    e = e.split(n);
    var s = 1000;
    i && 'number' == typeof i.maxKeys && (s = i.maxKeys);
    var l = e.length;
    s > 0 && l > s && (l = s);
    for (var c = 0; c < l; ++c) {
        var u,
            d,
            _,
            f,
            p = e[c].replace(o, '%20'),
            h = p.indexOf(r);
        h >= 0 ? ((u = p.substr(0, h)), (d = p.substr(h + 1))) : ((u = p), (d = '')), (_ = decodeURIComponent(u)), (f = decodeURIComponent(d)), t(a, _) ? (Array.isArray(a[_]) ? a[_].push(f) : (a[_] = [a[_], f])) : (a[_] = f);
    }
    return a;
};
