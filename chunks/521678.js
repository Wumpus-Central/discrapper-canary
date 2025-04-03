r.d(t, { Z: () => l });
var n = r(315162),
    o = r(906024),
    a = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
    i = /^\w*$/;
let l = function (e, t) {
    if ((0, n.Z)(e)) return !1;
    var r = typeof e;
    return !!('number' == r || 'symbol' == r || 'boolean' == r || null == e || (0, o.Z)(e)) || i.test(e) || !a.test(e) || (null != t && e in Object(t));
};
