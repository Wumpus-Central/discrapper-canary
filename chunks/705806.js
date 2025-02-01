var i = n(4148),
    r = n(665679),
    a = r('%Function.prototype.apply%'),
    s = r('%Function.prototype.call%'),
    o = r('%Reflect.apply%', !0) || i.call(s, a),
    l = r('%Object.getOwnPropertyDescriptor%', !0),
    u = r('%Object.defineProperty%', !0),
    c = r('%Math.max%');
if (u)
    try {
        u({}, 'a', { value: 1 });
    } catch (e) {
        u = null;
    }
e.exports = function (e) {
    var t = o(i, s, arguments);
    return l && u && l(t, 'length').configurable && u(t, 'length', { value: 1 + c(0, e.length - (arguments.length - 1)) }), t;
};
var d = function () {
    return o(i, a, arguments);
};
u ? u(e.exports, 'apply', { value: d }) : (e.exports.apply = d);
