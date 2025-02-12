var r = a(196322),
    n = a(443735),
    _ = a(402428),
    o = a(830911),
    i = a(406705),
    c = a(828091);
t.exports = function (t, e, a) {
    e = r(e, t);
    for (var s = -1, E = e.length, l = !1; ++s < E; ) {
        var u = c(e[s]);
        if (!(l = null != t && a(t, u))) break;
        t = t[u];
    }
    return l || ++s != E ? l : !!(E = null == t ? 0 : t.length) && i(E) && o(u, E) && (_(t) || n(t));
};
