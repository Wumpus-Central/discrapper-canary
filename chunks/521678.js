n.d(t, { Z: () => o });
var i = n(315162),
    r = n(906024),
    a = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
    s = /^\w*$/;
let o = function (e, t) {
    if ((0, i.Z)(e)) return !1;
    var n = typeof e;
    return !!('number' == n || 'symbol' == n || 'boolean' == n || null == e || (0, r.Z)(e)) || s.test(e) || !a.test(e) || (null != t && e in Object(t));
};
