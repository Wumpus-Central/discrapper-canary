var i = r(926080),
    a = r(97445),
    o = r(315162),
    s = r(429296),
    l = r(725180),
    u = r(477829);
function c(e, n, r) {
    n = (0, i.Z)(n, e);
    for (var c = -1, d = n.length, f = !1; ++c < d; ) {
        var p = (0, u.Z)(n[c]);
        if (!(f = null != e && r(e, p))) break;
        e = e[p];
    }
    return f || ++c != d ? f : !!(d = null == e ? 0 : e.length) && (0, l.Z)(d) && (0, s.Z)(p, d) && ((0, o.Z)(e) || (0, a.Z)(e));
}
n.Z = c;
