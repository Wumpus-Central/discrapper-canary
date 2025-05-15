var r = n(745872),
    i = n(166691),
    o = n(815329),
    a = n(485110),
    s = r('%Reflect.apply%', !0) || i('Function.prototype.apply');
e.exports = function (e, t) {
    var n = arguments.length > 2 ? arguments[2] : [];
    if (!a(n)) throw new o('Assertion failed: optional `argumentsList`, if provided, must be a List');
    return s(e, t, n);
};
