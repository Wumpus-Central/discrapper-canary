var i = n(875604),
    r = n(752206),
    a = n(638636),
    s = Array.prototype,
    o = String.prototype;
e.exports = function (e) {
    var t = e.includes;
    return e === s || (i(s, e) && t === s.includes) ? r : 'string' == typeof e || e === o || (i(o, e) && t === o.includes) ? a : t;
};
