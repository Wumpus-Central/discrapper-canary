var i = n(875604),
    r = n(780618),
    a = String.prototype;
e.exports = function (e) {
    var t = e.trim;
    return 'string' == typeof e || e === a || (i(a, e) && t === a.trim) ? r : t;
};
