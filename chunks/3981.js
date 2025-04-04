var r = n(658538),
    o = n(676547),
    a = n(900946),
    i = Array.prototype,
    s = String.prototype;
e.exports = function (e) {
    var t = e.includes;
    return e === i || (r(i, e) && t === i.includes) ? o : 'string' == typeof e || e === s || (r(s, e) && t === s.includes) ? a : t;
};
