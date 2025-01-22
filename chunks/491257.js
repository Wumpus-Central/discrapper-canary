function n(e, n) {
    return Object.prototype.hasOwnProperty.call(e, n);
}
e.exports = function (e, r, i, a) {
    (r = r || '&'), (i = i || '=');
    var o = {};
    if ('string' != typeof e || 0 === e.length) return o;
    var s = /\+/g;
    e = e.split(r);
    var l = 1000;
    a && 'number' == typeof a.maxKeys && (l = a.maxKeys);
    var u = e.length;
    l > 0 && u > l && (u = l);
    for (var c = 0; c < u; ++c) {
        var d,
            f,
            p,
            h,
            _ = e[c].replace(s, '%20'),
            m = _.indexOf(i);
        m >= 0 ? ((d = _.substr(0, m)), (f = _.substr(m + 1))) : ((d = _), (f = '')), (p = decodeURIComponent(d)), (h = decodeURIComponent(f)), n(o, p) ? (Array.isArray(o[p]) ? o[p].push(h) : (o[p] = [o[p], h])) : (o[p] = h);
    }
    return o;
};
