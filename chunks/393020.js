var i = n(690244),
    r = n(192853),
    a = i('%TypeError%'),
    s = n(156700),
    o = i('%Reflect.apply%', !0) || r('Function.prototype.apply');
e.exports = function (e, t) {
    var n = arguments.length > 2 ? arguments[2] : [];
    if (!s(n)) throw new a('Assertion failed: optional `argumentsList`, if provided, must be a List');
    return o(e, t, n);
};
