r.d(t, { Z: () => u });
var n = r(926080),
    o = r(97445),
    a = r(315162),
    i = r(429296),
    l = r(725180),
    s = r(477829);
let u = function (e, t, r) {
    t = (0, n.Z)(t, e);
    for (var u = -1, c = t.length, p = !1; ++u < c; ) {
        var f = (0, s.Z)(t[u]);
        if (!(p = null != e && r(e, f))) break;
        e = e[f];
    }
    return p || ++u != c ? p : !!(c = null == e ? 0 : e.length) && (0, l.Z)(c) && (0, i.Z)(f, c) && ((0, a.Z)(e) || (0, o.Z)(e));
};
