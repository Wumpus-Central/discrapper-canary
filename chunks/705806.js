var i = r(4148),
    a = r(665679),
    o = a('%Function.prototype.apply%'),
    s = a('%Function.prototype.call%'),
    l = a('%Reflect.apply%', !0) || i.call(s, o),
    u = a('%Object.getOwnPropertyDescriptor%', !0),
    c = a('%Object.defineProperty%', !0),
    d = a('%Math.max%');
if (c)
    try {
        c({}, 'a', { value: 1 });
    } catch (e) {
        c = null;
    }
e.exports = function (e) {
    var n = l(i, s, arguments);
    return u && c && u(n, 'length').configurable && c(n, 'length', { value: 1 + d(0, e.length - (arguments.length - 1)) }), n;
};
var f = function () {
    return l(i, o, arguments);
};
c ? c(e.exports, 'apply', { value: f }) : (e.exports.apply = f);
