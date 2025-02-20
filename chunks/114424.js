var r = n(875604),
    i = n(578742),
    o = String.prototype;
e.exports = function (e) {
    var t = e.repeat;
    return 'string' == typeof e || e === o || (r(o, e) && t === o.repeat) ? i : t;
};
