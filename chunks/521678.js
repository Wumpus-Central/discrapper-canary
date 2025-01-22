var i = r(315162),
    a = r(906024),
    o = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
    s = /^\w*$/;
function l(e, n) {
    if ((0, i.Z)(e)) return !1;
    var r = typeof e;
    return !!('number' == r || 'symbol' == r || 'boolean' == r || null == e || (0, a.Z)(e)) || s.test(e) || !o.test(e) || (null != n && e in Object(n));
}
n.Z = l;
