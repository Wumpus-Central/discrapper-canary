var i = n(875604),
    r = n(578742),
    a = String.prototype;
e.exports = function (e) {
    var t = e.repeat;
    return 'string' == typeof e || e === a || (i(a, e) && t === a.repeat) ? r : t;
};
