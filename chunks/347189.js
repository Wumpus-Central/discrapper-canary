var r = n(585606),
    i = n(443735),
    o = n(402428),
    a = n(207757),
    s = n(830911),
    l = n(556868),
    c = Object.prototype.hasOwnProperty;
e.exports = function (e, t) {
    var n = o(e),
        u = !n && i(e),
        d = !n && !u && a(e),
        f = !n && !u && !d && l(e),
        _ = n || u || d || f,
        p = _ ? r(e.length, String) : [],
        h = p.length;
    for (var m in e) (t || c.call(e, m)) && !(_ && ('length' == m || (d && ('offset' == m || 'parent' == m)) || (f && ('buffer' == m || 'byteLength' == m || 'byteOffset' == m)) || s(m, h))) && p.push(m);
    return p;
};
