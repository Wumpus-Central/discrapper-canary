var i = r(875604),
    a = r(865488),
    o = String.prototype;
e.exports = function (e) {
    var n = e.trimStart;
    return 'string' == typeof e || e === o || (i(o, e) && n === o.trimStart) ? a : n;
};
