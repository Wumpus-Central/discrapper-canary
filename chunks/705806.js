var r = n(4148),
    i = n(665679),
    o = i('%Function.prototype.apply%'),
    a = i('%Function.prototype.call%'),
    s = i('%Reflect.apply%', !0) || r.call(a, o),
    l = i('%Object.getOwnPropertyDescriptor%', !0),
    c = i('%Object.defineProperty%', !0),
    u = i('%Math.max%');
if (c)
    try {
        c({}, 'a', { value: 1 });
    } catch (e) {
        c = null;
    }
e.exports = function (e) {
    var t = s(r, a, arguments);
    return l && c && l(t, 'length').configurable && c(t, 'length', { value: 1 + u(0, e.length - (arguments.length - 1)) }), t;
};
var d = function () {
    return s(r, o, arguments);
};
c ? c(e.exports, 'apply', { value: d }) : (e.exports.apply = d);
