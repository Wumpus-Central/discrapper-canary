var i = n(390976),
    r = n(690244),
    a = n(781421),
    s = n(815329),
    o = r('%Function.prototype.apply%'),
    l = r('%Function.prototype.call%'),
    u = r('%Reflect.apply%', !0) || i.call(l, o),
    c = n(583584),
    d = r('%Math.max%');
e.exports = function (e) {
    if ('function' != typeof e) throw new s('a function is required');
    var t = u(i, l, arguments);
    return a(t, 1 + d(0, e.length - (arguments.length - 1)), !0);
};
var f = function () {
    return u(i, o, arguments);
};
c ? c(e.exports, 'apply', { value: f }) : (e.exports.apply = f);
