var r = n(390976),
    i = n(690244),
    o = n(781421),
    a = n(815329),
    s = i('%Function.prototype.apply%'),
    l = i('%Function.prototype.call%'),
    c = i('%Reflect.apply%', !0) || r.call(l, s),
    u = n(583584),
    d = i('%Math.max%');
e.exports = function (e) {
    if ('function' != typeof e) throw new a('a function is required');
    var t = c(r, l, arguments);
    return o(t, 1 + d(0, e.length - (arguments.length - 1)), !0);
};
var f = function () {
    return c(r, s, arguments);
};
u ? u(e.exports, 'apply', { value: f }) : (e.exports.apply = f);
