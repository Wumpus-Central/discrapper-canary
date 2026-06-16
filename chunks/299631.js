var i = n(147818),
    r = n(115455),
    s = n(926226),
    a = n(978260),
    o = n(952839),
    l = n(63532);
e.exports = function (e, t, n) {
    t = i(t, e);
    for (var u = -1, c = t.length, d = !1; ++u < c; ) {
        var _ = l(t[u]);
        if (!(d = null != e && n(e, _))) break;
        e = e[_];
    }
    return d || ++u != c ? d : !!(c = null == e ? 0 : e.length) && o(c) && a(_, c) && (s(e) || r(e));
};
