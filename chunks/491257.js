function t(e, t) {
    return Object.prototype.hasOwnProperty.call(e, t);
}
e.exports = function (e, n, r, i) {
    (n = n || '&'), (r = r || '=');
    var o = {};
    if ('string' != typeof e || 0 === e.length) return o;
    var a = /\+/g;
    e = e.split(n);
    var s = 1000;
    i && 'number' == typeof i.maxKeys && (s = i.maxKeys);
    var l = e.length;
    s > 0 && l > s && (l = s);
    for (var c = 0; c < l; ++c) {
        var u,
            d,
            f,
            _,
            p = e[c].replace(a, '%20'),
            h = p.indexOf(r);
        h >= 0 ? ((u = p.substr(0, h)), (d = p.substr(h + 1))) : ((u = p), (d = '')), (f = decodeURIComponent(u)), (_ = decodeURIComponent(d)), t(o, f) ? (Array.isArray(o[f]) ? o[f].push(_) : (o[f] = [o[f], _])) : (o[f] = _);
    }
    return o;
};
