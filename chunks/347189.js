var r = n(585606),
    i = n(443735),
    a = n(402428),
    o = n(207757),
    s = n(830911),
    l = n(556868),
    c = Object.prototype.hasOwnProperty;
e.exports = function (e, t) {
    var n = a(e),
        u = !n && i(e),
        d = !n && !u && o(e),
        _ = !n && !u && !d && l(e),
        f = n || u || d || _,
        p = f ? r(e.length, String) : [],
        h = p.length;
    for (var m in e) (t || c.call(e, m)) && !(f && ('length' == m || (d && ('offset' == m || 'parent' == m)) || (_ && ('buffer' == m || 'byteLength' == m || 'byteOffset' == m)) || s(m, h))) && p.push(m);
    return p;
};
