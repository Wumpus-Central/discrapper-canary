var r = n(875604),
    o = n(865488),
    a = String.prototype;
e.exports = function (e) {
    var t = e.trimStart;
    return 'string' == typeof e || e === a || (r(a, e) && t === a.trimStart) ? o : t;
};
