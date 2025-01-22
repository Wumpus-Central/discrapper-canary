var i = r(875604),
    a = r(752206),
    o = r(638636),
    s = Array.prototype,
    l = String.prototype;
e.exports = function (e) {
    var n = e.includes;
    return e === s || (i(s, e) && n === s.includes) ? a : 'string' == typeof e || e === l || (i(l, e) && n === l.includes) ? o : n;
};
