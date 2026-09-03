var r = n(715804),
    a = n(820830),
    o = n(149254),
    i = Array.prototype,
    s = String.prototype;
e.exports = function (e) {
    var t = e.includes;
    return e === i || (r(i, e) && t === i.includes)
        ? a
        : "string" == typeof e || e === s || (r(s, e) && t === s.includes)
          ? o
          : t;
};
