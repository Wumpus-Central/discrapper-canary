var i = n(221637),
    r = n(817584),
    s = n(467957),
    a = n(615861),
    o = n(856330),
    l = n(983249);
e.exports = function (e, t, n) {
    t = i(t, e);
    for (var u = -1, c = t.length, d = !1; ++u < c; ) {
        var _ = l(t[u]);
        if (!(d = null != e && n(e, _))) break;
        e = e[_];
    }
    return d || ++u != c ? d : !!(c = null == e ? 0 : e.length) && o(c) && a(_, c) && (s(e) || r(e));
};
