var r = n(196322),
    i = n(443735),
    a = n(402428),
    o = n(830911),
    s = n(406705),
    l = n(828091);
e.exports = function (e, t, n) {
    t = r(t, e);
    for (var c = -1, u = t.length, d = !1; ++c < u; ) {
        var _ = l(t[c]);
        if (!(d = null != e && n(e, _))) break;
        e = e[_];
    }
    return d || ++c != u ? d : !!(u = null == e ? 0 : e.length) && s(u) && o(_, u) && (a(e) || i(e));
};
