var r = n(875604),
    o = n(578742),
    a = String.prototype;
e.exports = function (e) {
    var t = e.repeat;
    return 'string' == typeof e || e === a || (r(a, e) && t === a.repeat) ? o : t;
};
