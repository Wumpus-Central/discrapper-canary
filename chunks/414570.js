var r = n(875604),
    o = n(752206),
    a = n(638636),
    i = Array.prototype,
    s = String.prototype;
e.exports = function (e) {
    var t = e.includes;
    return e === i || (r(i, e) && t === i.includes) ? o : 'string' == typeof e || e === s || (r(s, e) && t === s.includes) ? a : t;
};
