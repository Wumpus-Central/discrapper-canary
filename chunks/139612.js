var r = n(875604),
    o = n(780618),
    a = String.prototype;
e.exports = function (e) {
    var t = e.trim;
    return 'string' == typeof e || e === a || (r(a, e) && t === a.trim) ? o : t;
};
