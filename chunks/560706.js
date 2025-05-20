var r = n(196322),
    i = n(443735),
    o = n(402428),
    a = n(830911),
    s = n(406705),
    l = n(828091);
e.exports = function (e, t, n) {
    t = r(t, e);
    for (var c = -1, u = t.length, d = !1; ++c < u; ) {
        var f = l(t[c]);
        if (!(d = null != e && n(e, f))) break;
        e = e[f];
    }
    return d || ++c != u ? d : !!(u = null == e ? 0 : e.length) && s(u) && a(f, u) && (o(e) || i(e));
};
