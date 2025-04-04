var r = n(658538),
    o = n(873432),
    a = String.prototype;
e.exports = function (e) {
    var t = e.trim;
    return 'string' == typeof e || e === a || (r(a, e) && t === a.trim) ? o : t;
};
