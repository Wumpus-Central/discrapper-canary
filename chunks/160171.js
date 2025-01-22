var i = r(390976),
    a = r(690244),
    o = r(781421),
    s = r(815329),
    l = a('%Function.prototype.apply%'),
    u = a('%Function.prototype.call%'),
    c = a('%Reflect.apply%', !0) || i.call(u, l),
    d = r(583584),
    f = a('%Math.max%');
e.exports = function (e) {
    if ('function' != typeof e) throw new s('a function is required');
    var n = c(i, u, arguments);
    return o(n, 1 + f(0, e.length - (arguments.length - 1)), !0);
};
var p = function () {
    return c(i, l, arguments);
};
d ? d(e.exports, 'apply', { value: p }) : (e.exports.apply = p);
