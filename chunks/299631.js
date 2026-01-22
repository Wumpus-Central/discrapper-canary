var r = n(147818),
    i = n(115455),
    a = n(926226),
    s = n(978260),
    o = n(952839),
    l = n(63532);
e.exports = function (e, t, n) {
    t = r(t, e);
    for (var c = -1, u = t.length, d = !1; ++c < u; ) {
        var f = l(t[c]);
        if (!(d = null != e && n(e, f))) break;
        e = e[f];
    }
    return d || ++c != u ? d : !!(u = null == e ? 0 : e.length) && o(u) && s(f, u) && (a(e) || i(e));
};
