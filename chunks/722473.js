var r = n(715804),
    a = n(255003),
    o = String.prototype;
e.exports = function (e) {
    var t = e.trim;
    return "string" == typeof e || e === o || (r(o, e) && t === o.trim) ? a : t;
};
