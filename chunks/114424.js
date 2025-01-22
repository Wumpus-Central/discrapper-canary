var i = r(875604),
    a = r(578742),
    o = String.prototype;
e.exports = function (e) {
    var n = e.repeat;
    return 'string' == typeof e || e === o || (i(o, e) && n === o.repeat) ? a : n;
};
