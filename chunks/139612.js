var i = r(875604),
    a = r(780618),
    o = String.prototype;
e.exports = function (e) {
    var n = e.trim;
    return 'string' == typeof e || e === o || (i(o, e) && n === o.trim) ? a : n;
};
