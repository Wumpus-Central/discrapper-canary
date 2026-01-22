var r = n(221637),
    i = n(817584),
    a = n(467957),
    s = n(615861),
    o = n(856330),
    l = n(983249);
e.exports = function (e, t, n) {
    t = r(t, e);
    for (var c = -1, u = t.length, d = !1; ++c < u; ) {
        var f = l(t[c]);
        if (!(d = null != e && n(e, f))) break;
        e = e[f];
    }
    return d || ++c != u ? d : !!(u = null == e ? 0 : e.length) && o(u) && s(f, u) && (a(e) || i(e));
};
