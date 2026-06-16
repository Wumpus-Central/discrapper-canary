var i = n(467957),
    r = n(168110),
    s = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
    a = /^\w*$/;
e.exports = function (e, t) {
    if (i(e)) return !1;
    var n = typeof e;
    return (
        !!("number" == n || "symbol" == n || "boolean" == n || null == e || r(e)) ||
        a.test(e) ||
        !s.test(e) ||
        (null != t && e in Object(t))
    );
};
