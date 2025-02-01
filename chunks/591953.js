var i = n(875604),
    r = n(865488),
    a = String.prototype;
e.exports = function (e) {
    var t = e.trimStart;
    return 'string' == typeof e || e === a || (i(a, e) && t === a.trimStart) ? r : t;
};
