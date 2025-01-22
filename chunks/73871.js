var i = r(690244),
    a = i('%Math.abs%'),
    o = i('%Math.floor%'),
    s = r(45331),
    l = r(238896);
e.exports = function (e) {
    if ('number' != typeof e || s(e) || !l(e)) return !1;
    var n = a(e);
    return o(n) === n;
};
