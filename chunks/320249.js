var i = n(290677),
    r = n(158698),
    a = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
    s = /^\w*$/;
function o(e, t) {
    if (i(e)) return !1;
    var n = typeof e;
    return !!('number' == n || 'symbol' == n || 'boolean' == n || null == e || r(e)) || s.test(e) || !a.test(e) || (null != t && e in Object(t));
}
e.exports = o;
