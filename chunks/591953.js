var r = n(875604),
    i = n(865488),
    o = String.prototype;
e.exports = function (e) {
    var t = e.trimStart;
    return 'string' == typeof e || e === o || (r(o, e) && t === o.trimStart) ? i : t;
};
