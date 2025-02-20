var r = n(690244),
    i = n(192853),
    o = r('%TypeError%'),
    a = n(156700),
    s = r('%Reflect.apply%', !0) || i('Function.prototype.apply');
e.exports = function (e, t) {
    var n = arguments.length > 2 ? arguments[2] : [];
    if (!a(n)) throw new o('Assertion failed: optional `argumentsList`, if provided, must be a List');
    return s(e, t, n);
};
